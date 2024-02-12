#!/usr/bin/env node

const { readFileSync, writeFileSync, readdirSync, mkdirSync, copyFileSync } = require('node:fs');

const posthtml = require('posthtml');
const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const postHtmlExtend = require('posthtml-extend');

const srcDirectory = 'src';
const distDirectory = 'dist';

mkdirSync(distDirectory, { recursive: true });

const htmlFiles = readdirSync(srcDirectory);

htmlFiles.forEach((htmlFile) => {
  if (false === /\.html/.test(htmlFile) || true === /^_/.test(htmlFile)) {
    return null;
  }
  const html = readFileSync(srcDirectory + '/' + htmlFile);
  const result = posthtml()
    .use(postHtmlExtend({ root: srcDirectory }))
    .process(html, { sync: true })
    .html

  writeFileSync(distDirectory + '/' + htmlFile, result);
});
const css = readFileSync(srcDirectory + '/main.css')
postcss([tailwindcss])
  .process(css, { from: srcDirectory + '/main.css', to: 'dist/main.css' })
  .then(result => {
    writeFileSync(distDirectory + '/main.css', result.css)
    if ( result.map ) {
      writeFileSync(distDirectory + '/main.css.map', result.map.toString())
    }
  });
