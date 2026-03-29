# 雲の茶屋 — Kumo no Chaya

Static brochure site for a fourth-generation mountain teahouse in Yoshino, Nara. Built with Eleventy, Nunjucks, and vanilla CSS. No images, no framework, no runtime.

## Pages

| Page | URL |
|---|---|
| Home | `/` |
| Our Teas | `/teas/` |
| The Journey | `/journey/` |
| About | `/about/` |

## Development

```bash
npm install
npm start        # dev server at localhost:8080
npm run build    # output to _site/
```

## Updating the Tea Menu

Edit `src/_data/teas.json`. Change the `season`, `year`, and `teas` array. The teas page rebuilds automatically from this data. Set `"featured": true` on one tea to feature it on the home page.

## Stack

- [Eleventy 3.x](https://www.11ty.dev/) — static site generator
- Nunjucks — templating
- Vanilla CSS with custom properties (`src/css/`)
- Minimal vanilla JS (nav scroll behaviour, mobile menu)
