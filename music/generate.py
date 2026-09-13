#!/usr/bin/env python3
"""catalog generator.

Reads every markdown file in _reviews/, and generates:
  - music/index.html                        (auto-filled index / featured + grid)
  - music/reviews/<slug>/index.html         (individual review pages)

Zero dependencies: Python 3 stdlib only. Usage:  python generate.py
"""

import re
import html as html_mod
from pathlib import Path
from datetime import datetime

REVIEWS_DIR = Path(__file__).resolve().parent / "_reviews"
OUT_DIR = Path(__file__).resolve().parent

GRADES = ("Decent", "Good", "Great", "Excellent")
GRADE_INDEX = {g: i for i, g in enumerate(GRADES)}

# keys that are dates and should be parsed into display labels
DATE_FIELDS = ("album_date", "posted_date", "updated_date")


def parse_front_matter(text):
    if not text.startswith("---"):
        return {}, text
    parts = text.split("---", 2)
    if len(parts) < 3:
        return {}, text
    fm = {}
    for line in parts[1].strip().splitlines():
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
    return fm, parts[2].strip()


def inline(text):
    text = html_mod.escape(text)
    text = re.sub(r"`([^`]+)`", r"<code>\1</code>", text)
    text = re.sub(r"\*\*([^*]+)\*\*", r"<strong>\1</strong>", text)
    text = re.sub(r"\*([^*]+)\*", r"<em>\1</em>", text)
    text = re.sub(r"\[([^\]]+)\]\(([^)]+)\)", r'<a href="\2">\1</a>', text)
    return text


def render_md(md):
    md = md.replace("\r\n", "\n")
    lines = md.split("\n")
    n = len(lines)
    i = 0
    out = []
    while i < n:
        line = lines[i]
        s = line.strip()
        if not s:
            i += 1
            continue
        heading = re.match(r"^(#{1,4})\s+(.*)$", s)
        if heading:
            lvl = len(heading.group(1))
            out.append(f"<h{lvl}>{inline(heading.group(2))}</h{lvl}>")
            i += 1
            continue
        if s == "---":
            out.append("<hr>")
            i += 1
            continue
        if s.startswith(">"):
            block = []
            while i < n and lines[i].strip().startswith(">"):
                block.append(inline(lines[i].strip().lstrip(">").strip()))
                i += 1
            out.append("<blockquote>" + "<br>".join(block) + "</blockquote>")
            continue
        list_item = re.match(r"^([-*]|\d+\.)\s+(.*)$", s)
        if list_item:
            ordered = list_item.group(1).endswith(".")
            items = []
            while i < n:
                m = re.match(r"^([-*]|\d+\.)\s+(.*)$", lines[i].strip())
                if not m:
                    break
                items.append(inline(m.group(2)))
                i += 1
            tag = "ol" if ordered else "ul"
            out.append(f"<{tag}>" + "".join(f"<li>{x}</li>" for x in items) + f"</{tag}>")
            continue
        para = []
        while i < n:
            p = lines[i].strip()
            if not p or re.match(r"^(#{1,4}\s|>|([-*]|\d+\.)\s)", p):
                break
            para.append(p)
            i += 1
        out.append("<p>" + inline(" ".join(para)) + "</p>")
    return "\n".join(out)


def fmt_date(value):
    try:
        return datetime.strptime(value, "%Y-%m-%d").strftime("%b %d, %Y")
    except (ValueError, TypeError):
        return str(value)


def marker_to_days(marker):
    """Convert an approximate time marker ('first listen', '6 months') to days."""
    m = marker.lower().strip()
    if m in ("first listen", "initial", "first", "0", "now"):
        return 0
    nums = re.findall(r"\d+", m)
    if not nums:
        return None
    n = int(nums[-1])
    if "year" in m or "yr" in m:
        return n * 365
    if "month" in m or "mo" in m:
        return n * 30
    if "week" in m or "wk" in m:
        return n * 7
    if "day" in m or "d " in m or m.endswith("d"):
        return n
    return None


def parse_grade_history(fm):
    raw = fm.get("grade_history")
    if not raw:
        return []
    if isinstance(raw, str):
        raw = [x.strip() for x in raw.split(",") if x.strip()]
    hist = []
    for item in raw:
        if ":" not in item:
            continue
        marker, grade = item.split(":", 1)
        marker = marker.strip()
        grade = grade.strip()
        if not marker or not grade:
            continue
        hist.append({
            "marker": marker,
            "grade": grade,
            "days": marker_to_days(marker),
        })
    return hist


def render_history_svg(hist):
    grades = list(GRADES)
    idx = {g: i for i, g in enumerate(grades)}
    W, H = 560, 320
    ml, mt, mr, mb = 66, 46, 22, 70
    pw = W - ml - mr
    ph = H - mt - mb
    max_days = max(((p["days"] or 0) for p in hist), default=1) or 1
    gmax = len(grades) - 1
    base_y = H - mb

    pts = []
    for p in hist:
        x = ml + (p["days"] or 0) / max_days * pw
        gi = idx.get(p["grade"], 0)
        y = mt + (1 - gi / gmax) * ph
        pts.append((x, y, p))

    grid = []
    for gi, g in enumerate(grades):
        y = mt + (1 - gi / gmax) * ph
        grid.append(
            f'<line class="gh-grid" x1="{ml}" y1="{y:.1f}" x2="{W - mr}" y2="{y:.1f}" />'
            f'<text class="gh-axis" x="{ml - 8}" y="{y + 4:.1f}" text-anchor="end">{g}</text>'
        )

    path = " ".join(f"{x:.1f},{y:.1f}" for x, y, _ in pts)
    ticks = "".join(
        f'<line class="gh-tick" x1="{x:.1f}" y1="{y:.1f}" x2="{x:.1f}" y2="{base_y:.1f}" />'
        for x, y, _ in pts
    )
    dots = []
    for x, y, p in pts:
        gclass = p["grade"].lower()
        dots.append(f'<circle class="gh-dot {gclass}" cx="{x:.1f}" cy="{y:.1f}" r="4.5" />')
        dots.append(f'<text class="gh-marker" x="{x:.1f}" y="{H - mb + 15:.1f}" text-anchor="middle">{p["marker"]}</text>')
        dots.append(f'<text class="gh-label {gclass}" x="{x:.1f}" y="{y - 9:.1f}" text-anchor="middle">{p["grade"]}</text>')

    return (
        f'<svg class="gh-chart" viewBox="0 0 {W} {H}" role="img" aria-label="Grade history">'
        + "".join(grid)
        + f'<polyline class="gh-line" points="{path}" />'
        + ticks
        + "".join(dots)
        + "</svg>"
    )


def render_history_modal(hist):
    if hist:
        svg = render_history_svg(hist)
        legend = "".join(
            f'<li><span class="gh-legend-dot {p["grade"].lower()}"></span>'
            f'<span class="gh-legend-marker">{p["marker"]}</span>'
            f'<span class="gh-legend-grade {p["grade"].lower()}">{p["grade"]}</span></li>'
            for p in hist
        )
        content = f"{svg}\n            {legend}"
    else:
        content = '<p class="gh-none">No grade history available</p>'
    return f"""      <div class="grade-history-modal" id="grade-history-modal" hidden>
         <div class="gh-backdrop"></div>
         <div class="gh-box" role="dialog" aria-modal="true" aria-labelledby="grade-history-title">
            <button type="button" class="gh-close" aria-label="Close">×</button>
            <h3 class="gh-title" id="grade-history-title">Grade history</h3>
            {content}
         </div>
      </div>
"""


def load_reviews():
    reviews = []
    for path in sorted(REVIEWS_DIR.glob("*.md")):
        fm, body = parse_front_matter(path.read_text(encoding="utf-8"))
        missing = {"artist", "album", "grade", "posted_date", "album_date"} - set(fm)
        if missing:
            print(f"warn: {path.name} missing {sorted(missing)}, skipping")
            continue
        grade = fm["grade"]
        if grade not in GRADES:
            print(f"warn: {path.name} grade '{grade}' not in {list(GRADES)}, using as-is")
        genres = fm.get("genres") or []
        if isinstance(genres, str):
            genres = [g.strip() for g in genres.split(",") if g.strip()]

        dates = {}
        for key in DATE_FIELDS:
            if fm.get(key):
                dates[f"{key}_label"] = fmt_date(fm[key])

        reviews.append({
            "slug": path.stem,
            "artist": fm["artist"],
            "album": fm["album"],
            "grade": grade,
            "genres": genres,
            "posted_date": fm["posted_date"],
            "posted_date_label": fmt_date(fm["posted_date"]),
            "album_date_label": dates.get("album_date_label", fmt_date(fm["album_date"])),
            "updated_date_label": dates.get("updated_date_label") or None,
            "blurb": fm.get("blurb", ""),
            "art": fm.get("art") or None,
            "bnm": fm.get("bnm") == "true",
            "featured": fm.get("featured") == "true",
            "href": f"/music/reviews/{path.stem}/",
            "grade_history": parse_grade_history(fm),
            "body": render_md(body),
        })
    reviews.sort(key=lambda r: r["posted_date"], reverse=True)
    return reviews


HEAD = """<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8">
      <title>{title}</title>
      <link rel="shortcut icon" href="/img/stariconv2.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="/fonts/fonts.css" />
      <link rel="stylesheet" href="/portfolio/ds1/ds1.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      <link rel="stylesheet" href="/music/music.css" />
   </head>
   <body class="light-mode">
"""

MASTHEAD = """      <div class="masthead">
         <a class="masthead-home" href="/">home</a>
         <span class="masthead-brand">catalog<span class="masthead-dot">.</span></span>
         <span class="controls">
            <span id="switch-fonts" class="controls-slot no-default-style">switch fonts.</span>
            <span id="modeselection" class="controls-slot">dark mode.</span>
         </span>
      </div>
"""

FOOTER = """      <footer class="footer">
         <span>catalog — music reviews</span>
         <span>by jason cheng</span>
         <a href="/">← back to home</a>
      </footer>
   </body>
   <script src="/darkmode.js"></script>
   <script src="/assets/switchfonts.js"></script>
</html>
"""


def blurb_html(r):
    if r["blurb"]:
        return html_mod.escape(r["blurb"])
    return '<em class="no-blurb">&lt;No blurb available&gt;</em>'


def card(r):
    art = ""
    if r["art"]:
        art = f'<img class="card-art" src="{html_mod.escape(r["art"], quote=True)}" alt="Album art for {html_mod.escape(r["album"])}">\n'
    badge = ' <span class="card-badge">new</span>' if r["bnm"] else ""
    return f"""            <a class="review-card-link" href="{html_mod.escape(r['href'], quote=True)}">
            <article class="review-card">
{art}               <h3 class="card-artist">{html_mod.escape(r['album'])}{badge}</h3>
               <p class="card-album">by {html_mod.escape(r['artist'])}</p>
               <p class="card-blurb">{blurb_html(r)}</p>
               <p class="card-grade {r['grade'].lower()}">{r['grade']}</p>
            </article>
            </a>"""


def lede(r):
    art = ""
    if r["art"]:
        art = f'<img class="lede-art" src="{html_mod.escape(r["art"], quote=True)}" alt="Album art for {html_mod.escape(r["album"])}">\n'
    return f"""         <section class="lede">
{art}            <div class="lede-body">
            <p class="lede-meta">featured · {r['posted_date_label']}</p>
            <h2 class="lede-title"><a href="{r['href']}"><em>{html_mod.escape(r['album'])}</em> — {html_mod.escape(r['artist'])}</a></h2>
            <p class="lede-genres">{' · '.join(html_mod.escape(g) for g in r['genres'])}</p>
            <p class="lede-blurb">{blurb_html(r)}</p>
            <p class="lede-link"><a href="{r['href']}">read the full review →</a></p>
            </div>
            <p class="lede-grade">{r['grade']}</p>
         </section>"""


def index_html(reviews, featured):
    body = HEAD.format(title="Catalog — Music Reviews") + MASTHEAD
    body += """      <header class="hero">
         <h1 class="hero-title">Catalog</h1>
         <p class="hero-sub">Records i've listened to, rated with one word, and written up.</p>
      </header>

      <main class="grid-shell">
"""
    body += lede(featured) + "\n\n"
    body += "         <h2 class=\"section-title\">Recent</h2>\n\n"
    body += "         <div class=\"reviews\">\n"
    body += "\n".join(card(r) for r in reviews)
    body += "\n         </div>\n      </main>\n\n"
    body += FOOTER
    return body


def review_html(r):
    my = f"{r['album']} — {r['artist']}"
    art = ""
    if r["art"]:
        art = f'               <img class="review-art" src="{html_mod.escape(r["art"], quote=True)}" alt="Album art for {html_mod.escape(r["album"])}">\n'
    grade_markup = (
        f'<p class="review-grade {r["grade"].lower()} review-grade--history" '
        f'id="grade-history-trigger" title="View grade history">{r["grade"]}</p>'
    )
    if r["body"]:
        article = r["body"]
    else:
        article = ('<p class="no-review"><i class="fa-solid fa-music no-review-icon" '
                   'aria-hidden="true"></i>No detailed review yet</p>')
    genes = []
    rows = [
        ("released", r["album_date_label"]),
        ("posted", r["posted_date_label"]),
    ]
    if r["updated_date_label"]:
        rows.append(("updated", r["updated_date_label"]))
    meta_rows = "".join(
        f'<p class="review-meta-row"><span class="review-meta-label">{name}</span>'
        f'<span class="review-meta-value">{html_mod.escape(value)}</span></p>'
        for name, value in rows
    )
    if r["genres"]:
        genre_links = " · ".join(
            f'<a class="review-genre" href="#">{html_mod.escape(g)}</a>' for g in r["genres"]
        )
        meta_rows += (
            '<p class="review-meta-row"><span class="review-meta-label">genres</span>'
            f'<span class="review-meta-value">{genre_links}</span></p>'
        )
    meta_html = f'<div class="review-meta-block">{meta_rows}</div>'
    body = HEAD.format(title=f"{my} · Catalog") + MASTHEAD
    body += f"""      <main class="review">
         <a class="review-back" href="/music">← back to catalog</a>
         <header class="review-head">
{art}            <h1 class="review-title"><em>{html_mod.escape(r['album'])}</em> — {html_mod.escape(r['artist'])}</h1>
            {grade_markup}
            <p class="review-blurb">{blurb_html(r)}</p>
            {meta_html}
         </header>
         <div class="article-body">
{article}
         </div>
      </main>
"""
    body += render_history_modal(r["grade_history"])
    body += '   \n<script src="/music/music.js"></script>\n'
    body += FOOTER
    return body


def main():
    reviews = load_reviews()
    if not reviews:
        print("no reviews found in", REVIEWS_DIR)
        return
    featured = next((r for r in reviews if r["featured"]), None) or reviews[0]
    (OUT_DIR / "index.html").write_text(index_html(reviews, featured), encoding="utf-8")
    for r in reviews:
        out = OUT_DIR / "reviews" / r["slug"]
        out.mkdir(parents=True, exist_ok=True)
        (out / "index.html").write_text(review_html(r), encoding="utf-8")
    print(f"built {len(reviews)} review page(s) and index.html")


if __name__ == "__main__":
    main()