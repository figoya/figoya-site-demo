# Faults found while transcribing the site into source/

Recorded 2026-09-08 while writing `source/copy.md` and `source/inventory.md` from the
hand-built pages. Nothing here has been fixed. This list is the first acceptance test for
the linter: its report on this site should contain these and nothing else. The CONVENTIONS
rule ids are those of figoya-website-ai's CONVENTIONS.md.

## Markup

- `index.html`: the hero opens with `<sections class="s what-we-do">` (with an s). The
  browser sees an unknown element, so there is no `section` there.
- `index.html`: `did-you-know` puts its heading component directly in the section instead
  of in a row (SG-4). Its content row also carries four `text` components with instance
  modifiers `one`, `two`, `four`, `three`, in that order.
- `about-us/index.html`, `blog/index.html`: sections carry a modifier on the section itself
  (`s person name-1`, `s blog-summary one`), which the grammar does not define (SG-1, SG-5).
  In the copy they are `person-1`, `person-2`, `blog-1`, `blog-2`, `blog-3`. Both pages also
  put the heading component directly in the section (SG-4), and both are placeholder
  content (Person 1 twice, lorem ipsum).
- `esg/index.html`: two sections on the same page are both `s esg-targets` (SG-5). In the
  copy the first is `what-is-esg`. The second section's graphic has no `alt` (A11Y-5). The
  second section's text contains a `ul` whose items start with `h3` (heading inside a list
  item, breaking the outline: A11Y-1).
- `how-we-work/index.html`: `main`'s second row wraps an extra `div`, so `main` has the
  right two children but the content row is one level too deep (HTML-5).
- `privacy-policy/index.html`: not in the grammar at all. Generator output pasted in:
  wrapper divs with foreign class names, several `h1`s, no sections. In the copy it is one
  section, `policy`, with the headings demoted to `h3`–`h5`.
- `services/index.html`: an HTML comment in the intro text (`<!-- <p>We can work with
  apps…</p> -->`); harmless, left out of the copy.
- Inline: the `home` hero uses `<span class="help">` inside a paragraph and
  `CO<sub>2</sub>` in a link; `did-you-know` uses `em` for an attribution. The copy carries
  the text only; whether `help` is a real class or a leftover needs a ruling.
- Component class order wanders between `c esg two text` and `c how-much text two`. The
  ladder does not care; a grep does. Pick one (role then modifier, as SG-9 shows).
- `esg-targets` hero row: the page `h1` sits in row 1 beside the hero section on every
  page. The Figoya site has no page `h1` in `main` (the header lockup takes it). The copy
  format needs a ruling on where a page's `h1` lives.

## Copy

- `home`: "about how alculate your CO2 emissions" (typo; corrected to "about how we
  calculate" in the copy, so this is the one place the copy differs from the page).
- `about-us`: "contientious" → "conscientious"; left as is in the copy.
- `esg`: "an informal a framework"; left as is.
- `did-you-know`: "discernable"; "the new UK new department"; left as is.
- `the-internet-pollutes`: "evironmentally"; left as is.
- Page titles: `esg`, `how-we-work`, `about-us`, `blog`, `contact-us` all have
  `<title>Figoya - Services</title>`. Left as found in the `title:` slots.

## CSS and JS (from CONVENTIONS §14, not re-verified here)

- `.s.transparency` listed in two style families in `shared.css` (FAM-2).
- `h2.c.how-we-can-help` element-qualified in `site.css` (SG-3).
- `.s.how-much .c.actions` descends where its neighbours compose (SP-2).
- Hero heading hidden with `display: none` (A11Y-3).
- `_/css/section/via-social-media` has no `.css` extension; its import never loads.

## What the copy format cannot say yet

These are gaps in figoya-site, not faults in the site. Each becomes renderer work when its
page is frozen into a fixture.

- `::graphic` (an `img`, or a `figure` with `figcaption`), `::badge`, `::quote`,
  `::user-input` (a form; the copy carries its labels only), `::stat`/`::stats`.
- Bulleted lists inside a text component (`esg-targets`, the privacy policy).
- Emphasis (`*…*` → `em`) and subscript in running text.
- A link on its own line inside a text component renders as a paragraph today; the site
  wraps it in a `div` (`did-you-know`).
- Several `text` components in one section with instance modifiers (`::text one`, `::text
  two`) parse correctly but the renderer has not been checked against them.
