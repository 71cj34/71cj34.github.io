#!/usr/bin/env python3
"""Stamp "posted-date" to today, but only when it is missing.

Runs as a CI step in the music catalog build. For every markdown file in
_reviews/ it sets posted-date to today's date only when it is absent or empty.
It never touches the updated-date field.

Zero dependencies: Python 3 stdlib only. Usage:  python stamp_dates.py
"""

from datetime import date
from pathlib import Path

REVIEWS_DIR = Path(__file__).resolve().parent / "_reviews"


def parse_blocks(text):
    """Return (front_matter_lines, body_text)."""
    parts = text.split("---", 2)
    if len(parts) < 3:
        return [], parts[0]
    lines = [ln for ln in parts[1].strip().splitlines() if ln.strip()]
    return lines, parts[2]


def render_blocks(lines, body):
    return "---\n" + "\n".join(lines) + "\n---" + body


def key_of(line):
    return line.split(":", 1)[0].strip().replace("-", "_")


def set_key(lines, target_key, value, display):
    """Return new lines with key `target_key` set to `value` (raw hyphen form).

    Replaces the value in place when the key exists, otherwise appends the
    line. `display` is the hyphenated key used when appending.
    """
    out = list(lines)
    found = None
    for i, line in enumerate(out):
        if key_of(line) == target_key:
            found = i
            break
    if found is not None:
        out[found] = f"{display}: {value}"
    else:
        out.append(f"{display}: {value}")
    return out


def main():
    today = date.today().isoformat()
    changed = 0
    for path in sorted(REVIEWS_DIR.glob("*.md")):
        text = path.read_text(encoding="utf-8")
        lines, body = parse_blocks(text)
        if not lines:
            print(f"SKIP (no front matter): {path.name}")
            continue

        fm = {key_of(ln): ln.split(":", 1)[1].strip() for ln in lines if ":" in ln}
        posted = fm.get("posted_date", "").strip().strip('"')
        has_posted = bool(posted)

        if not has_posted:
            lines = set_key(lines, "posted_date", today, "posted-date")

        new_text = render_blocks(lines, body)
        if new_text != text:
            path.write_text(new_text, encoding="utf-8")
            changed += 1
            print(f"  {path.name}: posted-date={today} (missing)")
        else:
            print(f"  {path.name}: unchanged")
    print(f"stamped {changed} file(s) with {today}")


if __name__ == "__main__":
    main()