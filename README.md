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
  - Any non-image assets served from the website. Additionally, module-style JavaScript files used throughout the website (such as the font-switching script [`switchfonts.js`](https://github.com/71cj34/71cj34.github.io/blob/7cef1c6b520e2c905e42dee3366dd2e2ab295ecc/assets/switchfonts.js)).
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
 
