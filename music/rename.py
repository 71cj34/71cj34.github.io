import os
import re

REVIEWS_DIR = os.path.join(os.path.dirname(__file__), "_reviews")


def slugify_album(name: str) -> str:
    s = name.strip().lower()
    # drop characters that are illegal in (Windows) filenames
    s = re.sub(r'[<>:"/\\|?*]', "", s)
    s = re.sub(r"\s+", "-", s)
    s = re.sub(r"-+", "-", s).strip("-.")
    return s


def rename_files():
    for filename in os.listdir(REVIEWS_DIR):
        if not filename.endswith(".md"):
            continue

        path = os.path.join(REVIEWS_DIR, filename)
        album = None
        album_date = None

        with open(path, "r", encoding="utf-8") as f:
            in_frontmatter = False
            for line in f:
                stripped = line.strip()
                if stripped == "---":
                    in_frontmatter = not in_frontmatter
                    if not in_frontmatter:
                        break
                    continue
                if in_frontmatter:
                    if stripped.startswith("album:"):
                        album = stripped.split(":", 1)[1].strip().strip('"')
                    elif stripped.startswith("album-date:"):
                        album_date = stripped.split(":", 1)[1].strip().strip('"')

        if not album or not album_date:
            print(f"SKIP (missing album/album-date): {filename}")
            continue

        new_name = f"{slugify_album(album)}_{album_date}.md"
        if new_name == filename:
            print(f"UNCHANGED: {filename}")
            continue

        new_path = os.path.join(REVIEWS_DIR, new_name)
        if os.path.exists(new_path):
            print(f"SKIP (target exists): {filename} -> {new_name}")
            continue

        os.rename(path, new_path)
        print(f"RENAMED: {filename} -> {new_name}")


if __name__ == "__main__":
    rename_files()