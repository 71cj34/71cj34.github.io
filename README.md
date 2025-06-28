# jasoncheng.me

Welcome to the repository my personal site [jasoncheng.me](https://jasoncheng.me) is served from.

It uses only plain HTML/JS/CSS with no frameworks or build tools (except Github Pages' default Jekyll compiler). As such, any non-standard elements are made from scratch, from CSS and JS. For example, the dropdown header menu found on some of the pages are made with over 
**520 lines of pure JavaScript**. Here are some notes on the repository if you wish to explore:

- `.depr`
  - Old and unfinished projects and files. Does not get built onto the website because of a Jekyll rule.
- `_layouts`, `_plugins`
  - Old Jekyll configuration files. Have no effect.
- `api`
  - My API served through Cloudflare Workers. Since I don't pay for any serverside hosting, sadly I couldn't make an actual 'real' server-fetch/serve style API.
- `assets`
  - Any non-image assets served from the website. Additionally, module-style JavaScript files used throughout the website (such as the font-switching script [`switchfonts.js`](https://github.com/71cj34/71cj34.github.io/blob/main/assets/switchfonts.js)).
- `blog`
  - Unfinished blog hub. Contains a short snippet of an unfinished article on the Transformers model, before I migrated to writing the articles on proper writing software. However, does feature someneat stuff, like an [all-in-one IEEE 754 float simulator html file](https://jasoncheng.me/blog/assets/float-sim-aio).
- `exif`
  - Unfinished browser app, like [`resize`](https://resize.jasoncheng.me), that gets EXIF data from an uploaded image.
- `firstyear`
  - Subdirectory for the [first year resources](https://jasoncheng.me/firstyear) on the website.
- `fonts`
  - Contains the misc. font files used on the website and for the font-switching files. Also contains a `css` file to dynamically import fonts to pages.
- `fooguessr`
  - Every app that grows into a subpage on the website starts as a subdirectory, since testing on a live server is easier with relative paths to the rest of the assets here. Some commits behind at this point compared to the [main repository](https://github.com/71cj34/fooguessr).
- `img`
  - Miscellaneous image assets.
- `portfolio`
  - The portfolio for the DS1/2/3 pages as well as the main portfolio page.
- `resize`
  - Same thing as `fooguessr`. Quite a few commits behind by now.
- `retro`
  - Quick experiment with the `98.css` framework. (Also the only framework on the site, barring `3js` for the [sandwich](https://https://sandwich.jasoncheng.me/))
 

# Statistics

Date : 2025-06-27 22:02:38

Total : 84 files,  10537 codes, 360 comments, 1853 blanks, all 12750 lines

## Languages
| language | files | code | comment | blank | total |
| :--- | ---: | ---: | ---: | ---: | ---: |
| HTML | 32 | 3,637 | 102 | 284 | 4,023 |
| JavaScript | 24 | 2,234 | 149 | 348 | 2,731 |
| PostCSS | 18 | 2,217 | 64 | 390 | 2,671 |
| Markdown | 2 | 1,303 | 0 | 623 | 1,926 |
| C++ | 2 | 654 | 18 | 74 | 746 |
| LaTeX | 1 | 348 | 3 | 131 | 482 |
| JSON | 3 | 144 | 0 | 0 | 144 |
| YAML | 1 | 0 | 6 | 0 | 6 |
| Ruby | 1 | 0 | 18 | 3 | 21 |

## Directories
| path | files | code | comment | blank | total |
| :--- | ---: | ---: | ---: | ---: | ---: |
| . | 84 | 10,537 | 360 | 1,853 | 12,750 |
| . (Files) | 13 | 1,088 | 60 | 114 | 1,262 |
| .depr | 9 | 706 | 14 | 67 | 787 |
| _layouts | 1 | 6 | 0 | 1 | 7 |
| _plugins | 1 | 0 | 18 | 3 | 21 |
| api | 7 | 311 | 0 | 14 | 325 |
| api (Files) | 3 | 144 | 0 | 0 | 144 |
| api\\docs | 4 | 167 | 0 | 14 | 181 |
| assets | 10 | 3,244 | 58 | 964 | 4,266 |
| blog | 8 | 675 | 2 | 61 | 738 |
| blog (Files) | 6 | 205 | 2 | 18 | 225 |
| blog\\assets | 1 | 368 | 0 | 41 | 409 |
| blog\\transformers | 1 | 102 | 0 | 2 | 104 |
| exif | 3 | 177 | 5 | 29 | 211 |
| firstyear | 2 | 375 | 31 | 65 | 471 |
| fonts | 1 | 84 | 0 | 19 | 103 |
| fooguessr | 7 | 838 | 46 | 124 | 1,008 |
| fooguessr (Files) | 5 | 779 | 42 | 122 | 943 |
| fooguessr\\assets | 2 | 59 | 4 | 2 | 65 |
| portfolio | 16 | 2,701 | 112 | 336 | 3,149 |
| portfolio (Files) | 3 | 226 | 5 | 41 | 272 |
| portfolio\\ds1 | 6 | 1,113 | 17 | 119 | 1,249 |
| portfolio\\ds1 (Files) | 5 | 904 | 13 | 100 | 1,017 |
| portfolio\\ds1\\compact | 1 | 209 | 4 | 19 | 232 |
| portfolio\\ds2 | 4 | 796 | 47 | 98 | 941 |
| portfolio\\ds2 (Files) | 3 | 587 | 43 | 79 | 709 |
| portfolio\\ds2\\compact | 1 | 209 | 4 | 19 | 232 |
| portfolio\\ds3 | 3 | 566 | 43 | 78 | 687 |
| resize | 3 | 274 | 14 | 50 | 338 |
| retro | 3 | 58 | 0 | 6 | 64 |