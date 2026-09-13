#!/usr/bin/env python3
"""Fetch album art and release dates from MusicBrainz + Cover Art Archive.

Reads every markdown file in _reviews/. For any file missing album art, a
release date, or a listen link in its front matter, queries the MusicBrainz
release API with a `release:<album> AND <artist>` search, takes the first
<release>, and uses its <date> and id. Then asks the Cover Art Archive for the
art. Populates:
  - album-date:  the release date
  - art:         the cover image URL
  - url:         the first url relation (e.g. a streaming platform link)

The url field comes from a second request to the release endpoint with
`inc=url-rels`; the first <relation><target> under the url relation-list is
kept.

All requests to MusicBrainz-hosted APIs are limited to 1 per second. A 503 is
retried after waiting 5 seconds. If a value can't be found (empty response,
missing key, missing art, ...), that front matter key is left untouched.
Files that already have all fields are skipped without fetching.

Zero dependencies: Python 3 stdlib only. Usage:  python fetch_metadata.py
"""

import json
import re
import time
import urllib.error
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from pathlib import Path

REVIEWS_DIR = Path(__file__).resolve().parent / "_reviews"

MB_USER_AGENT = "jasoncheng.me (me@jasoncheng.me)"
MB_RELEASE_URL = "http://musicbrainz.org/ws/2/release/"
COVERART_URL = "http://coverartarchive.org/release/{rid}"

MIN_INTERVAL = 1.0    # at most one request per second, shared across all hosts
RETRY_WAIT = 5.0      # wait this long after a 503 before retrying
MAX_ATTEMPTS = 5      # retries before giving up on a request

_last_request = 0.0


def throttle():
    """Enforce the 1 request/second limit (single process, single thread)."""
    global _last_request
    now = time.time()
    wait = MIN_INTERVAL - (now - _last_request)
    if wait > 0:
        time.sleep(wait)
    _last_request = time.time()


def get_bytes(url):
    """Throttled GET returning raw bytes, or None on any failure."""
    for attempt in range(1, MAX_ATTEMPTS + 1):
        try:
            throttle()
            req = urllib.request.Request(url, headers={"User-Agent": MB_USER_AGENT})
            with urllib.request.urlopen(req, timeout=30) as resp:
                body = resp.read()
        except urllib.error.HTTPError as e:
            if e.code == 503:
                print(f"    503 from {url}; waiting {RETRY_WAIT:.0f}s "
                      f"(attempt {attempt}/{MAX_ATTEMPTS})")
                time.sleep(RETRY_WAIT)
                continue
            print(f"    http {e.code} from {url}")
            return None
        except (urllib.error.URLError, OSError) as e:
            print(f"    request error for {url}: {e}")
            return None
        if not body.strip():
            print(f"    empty response from {url}")
            return None
        return body
    print(f"    gave up on {url} after {MAX_ATTEMPTS} attempts")
    return None


def localname(tag):
    """Strip the XML namespace off an ElementTree tag."""
    return tag.rsplit("}", 1)[-1]


def all_releases(root):
    """Return a list of every <release> under <metadata><release-list> in order."""
    releases = []
    for el in root.iter():
        if localname(el.tag) == "release":
            releases.append(el)
    return releases


def parse_front_matter(text):
    """Return (normalized {key: value} dict, front-matter lines, body text)."""
    fm = {}
    lines = []
    body = text
    parts = text.split("---", 2)
    if len(parts) < 3:
        return fm, lines, body
    lines = parts[1].strip().splitlines()
    for line in lines:
        if ":" not in line or line.lstrip().startswith("#"):
            continue
        key, val = line.split(":", 1)
        key = key.strip().replace("-", "_")
        val = val.strip()
        if val.startswith("[") and val.endswith("]"):
            val = [x.strip().strip("'\"") for x in val[1:-1].split(",") if x.strip()]
        else:
            val = val.strip("'\"")
        fm[key] = val
    return fm, lines, parts[2]


def render_front_matter(lines):
    """Join a list of front-matter lines back into a YAML block."""
    return "---\n" + "\n".join(lines) + "\n---"


def first_artist(value):
    """Take the first artist out of the artist front matter field."""
    if not value:
        return ""
    if isinstance(value, list):
        value = value[0]
    value = str(value).strip()
    # strip list-style "["..."]" wrappers if they survived parsing
    value = re.sub(r"^\[|\]$", "", value)
    return re.split(r"\s*,\s*", value, maxsplit=1)[0].strip()


def search_releases(album, artist):
    """Query the release API; return (release_ids, date) or ([], None).

    Every <release> id is kept (in order); the <date> of the first is used as
    the release date. Any missing piece is dropped.
    """
    query = f"release:{album} AND {artist}"
    url = MB_RELEASE_URL + "?" + urllib.parse.urlencode({"query": query})
    print(f"  querying {url}")
    data = get_bytes(url)
    if data is None:
        return [], None
    try:
        root = ET.fromstring(data)
    except ET.ParseError as e:
        print(f"    could not parse xml: {e}")
        return [], None
    releases = all_releases(root)
    if not releases:
        print("    no release found")
        return [], None
    ids = [rel.get("id") for rel in releases if rel.get("id")]
    date = None
    for child in releases[0]:
        if localname(child.tag) == "date" and child.text:
            date = child.text.strip()
            break
    return ids, date


def fetch_cover_art(rid):
    """Fetch the cover art JSON for a release id; return image URL or None."""
    url = COVERART_URL.format(rid=rid)
    print(f"  coverart {url}")
    data = get_bytes(url)
    if data is None:
        return None
    try:
        payload = json.loads(data)
        return payload["images"][0]["thumbnails"]["1200"]
    except (ValueError, TypeError, KeyError, IndexError):
        print("    no usable cover art in response")
        return None


def fetch_urls(rid):
    """Fetch every url relation for a release id; return a list of URLs.

    Hits the release endpoint with inc=url-rels and walks the tree for each
    <relation><target> under a <relation-list target-type="url">. Returns an
    empty list when there are none.
    """
    url = f"{MB_RELEASE_URL}{rid}?inc=url-rels"
    print(f"  urls {url}")
    data = get_bytes(url)
    if data is None:
        return []
    try:
        root = ET.fromstring(data)
    except ET.ParseError as e:
        print(f"    could not parse xml: {e}")
        return []
    found = []
    for el in root.iter():
        if not (localname(el.tag) == "relation-list"
                and el.get("target-type") == "url"):
            continue
        for rel in el:
            if localname(rel.tag) != "relation":
                continue
            for child in rel:
                if localname(child.tag) == "target" and child.text:
                    found.append(child.text.strip())
    return found


def site_for(url):
    """Return the site (registrable-ish host) a url lives on, or ''."""
    host = urllib.parse.urlparse(url).netloc.lower()
    host = re.sub(r"^www\.", "", host)
    host = re.sub(r":\d+$", "", host)
    return host


def collect_urls(release_ids):
    """Gather listen urls across all release ids, one per site.

    Queries url-rels for every release id. URLs are kept in encounter order but
    deduplicated by site -- keep only the first URL for any given site, even if
    two links point at different pages on that site.
    """
    urls = []
    seen_sites = set()
    for rid in release_ids:
        for u in fetch_urls(rid):
            site = site_for(u)
            if site and site not in seen_sites:
                seen_sites.add(site)
                urls.append(u)
    return urls
    print("    no url relation found")
    return None


def insert_fields(path, lines, body, new):
    """Append missing keys to the front matter and rewrite the file.

    `new` maps a normalized key to a display key and value string.
    """
    existing = set()
    for line in lines:
        if ":" in line:
            existing.add(line.split(":", 1)[0].strip().replace("-", "_"))
    lines = [line for line in lines if not line.strip().startswith("#")]
    additions = []
    for k, name, v in new:
        if k in existing:
            continue
        if isinstance(v, list):
            additions.append(f"{name}: [" + ", ".join(f'"{x}"' for x in v) + "]")
        else:
            additions.append(f'{name}: "{v}"')
    if not additions:
        return
    insert_at = None
    for i, line in enumerate(lines):
        if ":" not in line:
            continue
        key = line.split(":", 1)[0].strip().replace("-", "_")
        if key == "album":
            insert_at = i + 1
            break
    if insert_at is None:
        insert_at = len(lines)
    lines[insert_at:insert_at] = additions
    text = render_front_matter(lines) + body
    path.write_text(text, encoding="utf-8")
    for _k, name, v in new:
        print(f"  set {name} = {v}")


def main():
    for path in sorted(REVIEWS_DIR.glob("*.md")):
        print(f"{path.name}")
        fm, lines, body = parse_front_matter(path.read_text(encoding="utf-8"))
        if not fm.get("album"):
            print("  warn: no album in front matter, skipping")
            continue
        if not fm.get("artist"):
            print("  warn: no artist in front matter, skipping")
            continue

        has_art = bool(fm.get("art"))
        has_date = bool(fm.get("album_date"))
        has_url = bool(fm.get("url"))
        if has_art and has_date and has_url:
            print("  already has art, date, and listen url, skipping")
            continue

        rid, date = search_releases(fm["album"], first_artist(fm["artist"]))
        art = fetch_cover_art(rid[0]) if (rid and not has_art) else None
        urls = collect_urls(rid) if (rid and not has_url) else []

        new = []
        if not has_date and date:
            new.append(("album_date", "album-date", date))
        if not has_art and art:
            new.append(("art", "art", art))
        if not has_url and urls:
            new.append(("url", "url", urls))
        if new:
            insert_fields(path, lines, body, new)
        else:
            print("  nothing new to fill")


if __name__ == "__main__":
    main()