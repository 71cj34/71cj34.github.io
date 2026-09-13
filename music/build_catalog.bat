@echo off
rem CI run for the music catalog: fill metadata, stamp dates, then rename, then generate.
cd /d "%~dp0"
python fetch_metadata.py
python stamp_dates.py
python rename.py
python generate.py