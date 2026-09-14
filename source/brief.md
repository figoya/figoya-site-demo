# Brief

The style families a section can join. Each family is a block in
_/css/section/shared.css whose first comment line is the family's name; the
inventory says which family each section joins; `figoya-site check` makes sure
the three agree, and `figoya-site sampler` shows each family with placeholder
copy. The families below are the four the site was hand-built with, described
as they are.

## Section style A {a}

ground: light (the page)
bleed: no
graphic: right, informative (an infographic that carries meaning)
heading: accent-coloured h2 above the text column; the lead paragraph sits between two accent rules
intent: The plain explanatory section on a light page: words on the left, a diagram on the right.

## Section style B {b}

ground: dark, --ground-dark
bleed: yes, to the screen edge
graphic: left, informative
heading: light h2 above the text column; the lead paragraph sits between two accent rules
intent: The same conversation as A, but on a dark band that stretches across the screen, with the diagram on the left.

## Section style C {c}

ground: light (the page)
bleed: no
graphic: right, decorative (smaller; illustrates rather than explains)
heading: accent-coloured h2 above the text column; the lead paragraph sits between two accent rules
intent: Style A with a decorative picture instead of a diagram, so the words carry the section.

## Section style D {d}

ground: dark, --band
bleed: yes, to the screen edge
graphic: left, decorative (smaller)
heading: light h2 above the text column; the lead paragraph sits between two accent rules
intent: Style B with a decorative picture, on the lighter dark band, for a change of rhythm between dark sections.
