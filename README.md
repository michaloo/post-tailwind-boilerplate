# PostTailwind

Static Site Generator for Tailwind CSS. As simple as it gets.

`Tailwind CSS + PostCSS + PostHTML`

PostTailwind is designed to be as straightforward as possible,
allowing you to focus on building your website without the overhead
of complex configurations.

## Get started

Clone it:

`git clone https://github.com/michaloo/post-tailwind-boilerplate.git`

Remove `.git` to get rid of boilerplate version control:

`rm -r .git`

Edit source code in `src` and run build page CSS and HTML in `dist`:

`npm run build`

`open dist/index.html`


## Features

**Tailwind CSS using PostCSS plugin**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**HTML layouts using postHTML-extend**

```html
<extends src="_base.html">
  <block name="content">Website content</block>
</extends>
```

**HTML components using postHTML-include**

```html
<include src="_button.html" locals='{
    "text": "Button"
}'></include>
```

## How does it work?

It uses postCSS to build `src/main.css`. The Tailwind CSS plugin is enabled
and Tailwind directives are already there.

Then it uses postHTML to go over every HTML file in `src` directory (except
ones that start with `_` which can be used for layouts and components).
It comes with two postHTML plugins - extend and include that allow to modularize
and reuse HTML code using layouts and components.

## Why?

I wanted an easy way to build a static page with Tailwind CSS.
PostCSS is recommended way of installing Tailwind CSS so it was an obvious choice.

HTML, even for simple static pages can quickly become relatively complex
with multiple repetitions and nested structure. Maintaining it manually
without any templating would be daunting and ineffective thing.

On the other hand, introducing custom templating engine could easily kill
pristine concept of this boilerplate. PostHTML become natural companion for
PostCSS and allows robust modularization of HTML code without anything else
than HTML itself.


## Roadmap

- [ ] watch + livereload
- [ ] subdirectories
- [ ] GitHub Actions + Cloudflare Pages setup
- [ ] esbuild for javascript


## Docker, bun.js?

I tend to avoid having runtime installed directly on my machine and use Docker
whenever possible.
This project comes with basic docker-compose file using bun.js for fun.
This is how you can quick access to bun.js cli:

`docker-compose run bun`
