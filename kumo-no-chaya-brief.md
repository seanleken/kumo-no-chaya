# Kumo no Chaya (雲の茶屋) — Site Brief

## Project Overview

**Client:** Kumo no Chaya (雲の茶屋) — "The Cloud Teahouse"
**Type:** Static brochure site — 4 pages
**Stack:** Eleventy (11ty), Nunjucks templates, vanilla CSS, minimal vanilla JS
**Deployment:** Static HTML output (no framework runtime)
**Language:** Bilingual — English primary with Japanese accent text (business name, section headers, poetic phrases)

---

## The Business

A fourth-generation teahouse clinging to a misty mountainside in Yoshino, Nara Prefecture, Japan. Established 1891. Run by tea master Fujiwara Haruki and his daughter Mei. They serve rare single-origin Japanese teas — gyokuro, kabusecha, matcha from their own small garden — alongside seasonal wagashi handmade each morning. There is no online ordering. No delivery. You climb the mountain path. The website exists only to set the mood, share the seasonal menu, and explain how to find them.

**Brand personality:** Unhurried. Reverent. Quietly confident. Ancient but alive. Not precious or fussy — grounded, with dry humor in the copywriting.

---

## Site Map

| Page | Slug | Purpose |
|---|---|---|
| Home | `/` | Atmospheric landing — mood, a short welcome, seasonal highlight |
| Our Teas | `/teas/` | Seasonal tea menu with wagashi pairings |
| The Journey | `/journey/` | How to find the teahouse — trail directions, what to expect |
| About | `/about/` | The Fujiwara family story across four generations |

---

## Design Aesthetic

### Direction: "Mountain Ink"

The visual language draws from **sumi-e (ink wash painting)** and the feeling of looking through mist at something ancient and still. This is NOT a generic zen/minimalist template. It should feel like opening an old, beautifully bound book — textured, weighted, deliberate.

**Mood references (conceptual, not to copy):**
- The quiet of a forest trail at dawn
- Ceramic glaze running unevenly — wabi-sabi imperfection
- Calligraphy brushstrokes — confident, unhesitating
- Paper lanterns glowing in fog

### What to Avoid
- Generic "zen spa" aesthetics (bamboo stock photos, lotus flowers)
- Overly clean/sterile minimalism (no Swiss grid corporate feel)
- Anime or pop-Japan styling
- Any AI slop: purple gradients, Inter/Roboto, card-grid layouts
- Parallax scrolling gimmicks

---

## Design Tokens

### Color Palette

```
--color-ink:          #1a1a18        /* Near-black — primary text, deep tones */
--color-ink-light:    #3d3b36        /* Softened ink — secondary text */
--color-stone:        #8a8477        /* Warm grey — muted accents, borders */
--color-fog:          #d4cfc6        /* Warm mist — dividers, subtle bg tones */
--color-paper:        #f0ebe1        /* Aged washi paper — main background */
--color-paper-warm:   #e8e0d2        /* Slightly deeper paper — card/section bg */
--color-matcha:       #6b7c47        /* Muted moss/matcha green — primary accent */
--color-matcha-deep:  #4a5a2e        /* Deeper green — hover states, emphasis */
--color-rust:         #9c6644        /* Terracotta/rust — warm secondary accent */
--color-cream:        #faf6ee        /* Lightest tone — highlights */
```

The palette is intentionally desaturated and warm. Nothing should feel bright or digital. Think: colors you'd find in a 100-year-old photograph of a mountain village.

### Typography

Use Google Fonts. The pairing should feel literary and quiet.

- **Display / Headings:** `Cormorant Garamond` (400, 500, 600) — elegant serif with calligraphic DNA. Use for page titles, section headers, the business name in English.
- **Body:** `Source Serif 4` (300, 400) — readable, warm serif. Comfortable for longer text.
- **Japanese text:** Let it inherit system fonts (`"Hiragino Mincho ProN", "Yu Mincho", "MS PMincho", serif`) — native rendering is always better than loading a web font for CJK.
- **Accent / Small labels:** `Karla` (400, 500) — humanist sans-serif for navigation, metadata, tiny labels. Provides contrast without feeling corporate.

```
--font-display:       "Cormorant Garamond", serif
--font-body:          "Source Serif 4", serif
--font-ja:            "Hiragino Mincho ProN", "Yu Mincho", "MS PMincho", serif
--font-accent:        "Karla", sans-serif

--text-xs:            0.75rem      /* 12px — labels, metadata */
--text-sm:            0.875rem     /* 14px — nav, captions */
--text-base:          1.0625rem    /* 17px — body copy (slightly generous) */
--text-lg:            1.25rem      /* 20px — lead paragraphs */
--text-xl:            1.75rem      /* 28px — section headings */
--text-2xl:           2.5rem       /* 40px — page titles */
--text-hero:          clamp(3rem, 6vw, 5rem)  /* Hero display text */

--leading-tight:      1.2
--leading-normal:     1.6
--leading-loose:      1.85
```

### Spacing

Use a soft scale — nothing rigid or grid-snapped. The site should breathe.

```
--space-xs:    0.5rem
--space-sm:    1rem
--space-md:    1.5rem
--space-lg:    3rem
--space-xl:    5rem
--space-2xl:   8rem
--space-3xl:   12rem
```

### Layout

```
--content-width:      680px       /* Prose column — narrow, bookish */
--wide-width:         960px       /* For wider sections (tea menu grid) */
--max-width:          1200px      /* Absolute max container */
--gutter:             clamp(1.5rem, 4vw, 3rem)
```

---

## Components

### Global

#### Navigation
- Fixed minimal top bar, mostly transparent
- Logo (雲の茶屋) left-aligned, set in the Japanese serif stack
- Nav links right-aligned in `--font-accent` at `--text-sm`, uppercase, tracked out
- On scroll: gentle background fade-in (`--color-paper` at ~90% opacity with backdrop blur)
- Mobile: hamburger → full-screen overlay with centered links, large type
- Active page indicated with a small brush-stroke underline (CSS pseudo-element, not an image)

#### Footer
- Minimal. Business name in Japanese, a single line: "Yoshino, Nara · Est. 1891"
- No social links (they don't have social media — that's part of the charm)
- Tiny nav repeat for accessibility
- Generous top padding to give the page room to end quietly

#### Page Transitions
- No JS page transitions (this is a static site). Instead, rely on a subtle CSS fade-in on `body` load using `@keyframes` — content fades and rises slightly (~10px translateY) over 0.6s ease-out.

---

### Home Page

**Structure (top to bottom):**

1. **Hero**
   - Full viewport height
   - Background: a large, soft gradient or CSS-painted mist effect (use layered radial gradients in warm greys/fog tones — no image required)
   - Centered: the business name in large Japanese calligraphy-style text (雲の茶屋), below it the English name in `--font-display`, and a single poetic tagline: *"Where the mountain meets the clouds, the water boils."*
   - A gentle downward scroll indicator (thin animated line or chevron)

2. **Welcome Section**
   - Narrow prose column
   - Short paragraph (3-4 sentences) welcoming visitors, written in first person from Fujiwara Haruki
   - Japanese phrase as a pull-quote or epigraph above the paragraph

3. **Seasonal Highlight**
   - A single featured tea for the current season
   - Display: tea name (JP + EN), one-line description, season label
   - Styled as a centered, airy card on `--color-paper-warm` with generous padding
   - CTA text link: "View our full seasonal menu →"

4. **Atmosphere Section**
   - A wide, horizontal band with a subtle texture or pattern (think: repeating fine line pattern reminiscent of rain or mountain ridges — achievable in CSS with repeating-linear-gradient)
   - Overlaid with a short quote about the place or the tea practice
   - This section exists purely for mood — no CTA

---

### Our Teas Page (`/teas/`)

**Structure:**

1. **Page Header**
   - Title: "Our Teas" / お茶
   - Short intro paragraph about their sourcing philosophy (own garden + small Uji producers)
   - Season indicator: "Spring 2026 Menu" — styled as a pill/label

2. **Tea Listings**
   - Display as a vertical list, NOT a grid. Each tea is a "row" that reads like an entry in a beautiful menu.
   - Per tea entry:
     - Tea name in Japanese (large, display font)
     - English name + type label (e.g., "Gyokuro · Shaded Green")
     - 2-3 sentence description — tasting notes, origin, character
     - Paired wagashi name + one-line description
     - Price in yen (¥800 – ¥1500 range)
   - Entries separated by thin `--color-fog` dividers
   - Subtle hover: the matcha accent color bleeds in gently on the tea name

3. **Note Section**
   - A small aside at the bottom: "Our menu changes with the seasons. This page reflects what we are serving now."

**Data approach:** Store teas as structured data in a JSON or YAML data file (`_data/teas.json`). The template loops over the data. This makes it easy to update seasonally.

---

### The Journey Page (`/journey/`)

This is the most storytelling-heavy page.

**Structure:**

1. **Page Header**
   - Title: "The Journey" / 道のり
   - Subtitle: "Finding the teahouse is part of the experience."

2. **Getting There**
   - Written as a narrative, not a bulleted directions list
   - Covers: train from Osaka/Kyoto to Yoshino Station, then the walk
   - Tone: warm, encouraging, slightly poetic ("The path narrows after the second torii gate. Keep climbing.")
   - Include practical info woven into prose: travel time (~2.5 hrs from Osaka), best season to visit, what to wear

3. **What to Expect**
   - Short section on the teahouse experience: you'll be seated on tatami, tea is prepared in front of you, sessions last about 45 minutes, no reservations needed
   - Opening hours (Thursday–Sunday, 10:00–16:00, closed in heavy snow)

4. **A Simple Map**
   - NOT a Google Maps embed. Instead, a hand-drawn-style SVG illustration of the path from Yoshino Station to the teahouse. Abstract, minimal — a winding line with a few labeled landmarks (station, shrine, bridge, teahouse). Styled with stroke in `--color-ink` on `--color-paper`. This should feel like a sketch on the back of an envelope. Claude Code should generate this as an inline SVG.

---

### About Page (`/about/`)

**Structure:**

1. **Page Header**
   - Title: "The Family" / 家族
   - Subtitle: "Four generations of patience."

2. **The Story**
   - Narrative prose, 4-5 paragraphs
   - Covers: Great-grandfather founding the teahouse in 1891, each generation's contribution, Haruki's philosophy, daughter Mei beginning to take on the craft
   - Tone: personal, unhurried, with specific details (not generic "we are passionate about tea")

3. **Timeline**
   - A minimal vertical timeline showing key dates:
     - 1891 — Founded by Fujiwara Ichiro
     - 1923 — Survived the great earthquake, rebuilt with local cedar
     - 1952 — Second generation plants the tea garden
     - 1978 — Haruki's father begins wagashi tradition
     - 2003 — Haruki takes over
     - 2021 — Mei returns from Kyoto to learn the craft
   - Style: simple left-aligned line with date labels, not a flashy component

---

## Content & Copy Guidelines

- **Voice:** First-person plural ("we") or third-person narrative. Never salesy. Never exclamation marks.
- **Length:** Short. Every paragraph earns its place. If a sentence doesn't add atmosphere or information, cut it.
- **Japanese text:** Use real Japanese where appropriate — the business name, tea names, section subtitles, the occasional poetic phrase. Always with English alongside or nearby. Don't overdo it.
- **No stock photography.** The entire site should work without any images. Atmosphere comes from typography, color, texture, spacing, and the SVG map illustration. If placeholder image areas are desired for future photography, use solid `--color-paper-warm` rectangles with a thin border — not grey boxes with camera icons.

---

## Technical Notes for Claude Code

### 11ty Setup
- Use 11ty v3.x (latest stable)
- Nunjucks as the template engine
- Directory structure:
  ```
  src/
    _includes/
      base.njk          (base HTML layout)
      nav.njk           (navigation partial)
      footer.njk        (footer partial)
    _data/
      site.json         (site metadata — name, url, description)
      teas.json         (seasonal tea menu data)
    pages/
      index.njk         (home)
      teas.njk          (our teas)
      journey.njk       (the journey)
      about.njk         (about)
    css/
      tokens.css        (design tokens as CSS custom properties)
      global.css        (reset, base typography, layout)
      components.css    (nav, footer, cards, timeline, etc.)
      pages.css         (page-specific overrides if needed)
    assets/
      (empty — no images for now)
  .eleventy.js          (config)
  package.json
  ```

### CSS Architecture
- No CSS framework. No Tailwind. Vanilla CSS with custom properties.
- Use the design tokens defined above as CSS custom properties on `:root`
- Mobile-first responsive. Breakpoints: `640px`, `960px`
- Keep specificity flat — mostly class selectors, BEM-lite naming (`.tea-entry`, `.tea-entry__name`, `.tea-entry__description`)
- Preference for `clamp()` for fluid sizing over breakpoint jumps where sensible

### Performance
- Zero JavaScript unless absolutely necessary (scroll-based nav background is fine in CSS with a tiny inline script if needed)
- Inline critical CSS in `<head>` if easy; otherwise a single concatenated CSS file is fine
- Preconnect to Google Fonts
- Use `font-display: swap` on all custom fonts
- Target < 50KB total page weight (excluding fonts)

### Accessibility
- Semantic HTML throughout (`<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`)
- Skip-to-content link
- All decorative elements use `aria-hidden="true"`
- Color contrast meets WCAG AA on all text
- Focus styles that match the design (matcha green outline, not browser default)
- `lang="en"` on `<html>`, with `lang="ja"` on Japanese text spans

### Content Generation
- Claude Code should generate all copy — written in the brand voice described above
- Tea data should be realistic and specific (real tea types, plausible descriptions, authentic wagashi pairings)
- The trail map SVG should be generated as code, not an external file

---

## Definition of Done

The site is complete when:
1. All four pages render correctly from `npx @11ty/eleventy --serve`
2. The design matches the "Mountain Ink" aesthetic described above — it should feel atmospheric and intentional, not like a default template
3. All copy is written and in place (no lorem ipsum)
4. The tea menu is data-driven from `teas.json`
5. Navigation works across all pages with active state
6. The site is responsive and usable from 320px to 1440px+
7. The SVG trail map is present on the Journey page
8. Page weight is under 50KB excluding fonts
9. HTML validates and accessibility basics are covered
