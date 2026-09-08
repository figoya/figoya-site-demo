# Style

The hard facts of the look. The palette is declared here once and derived into the
`:root` block of `_/css/site.css`; the contrast duties are computed from Kind and On.

## Palette

Kind says what a colour is used as: `ground` (something sits on it), `text` (body-size
text, owes 4.5:1), `heading` (large text, owes 3:1), `rule` (borders, focus rings, icons,
owes 3:1). On lists the grounds it sits on; where the use differs by ground, say so in
brackets: `ground (rule), band (text)`.

| Property            | Value   | Kind                        | On                         | Role |
|---------------------|---------|-----------------------------|----------------------------|------|
| accent              | #76ac41 | ground, text, heading, rule | ground            | headings, links, buttons, rules on light ground |
| accent-on-dark      | #c6d768 | text, rule                  | ground-dark, band | the accent's lighter cut for text and focus rings on dark ground |
| ground              | #fff    | ground, text                | accent            | the page |
| ground-dark         | #252625 | ground                      |                   | hero, header, footer, dark bands |
| band                | #333    | ground, text                | ground            | the lighter dark band (family D) |
| text                | #1d1d1b | text                        | ground            | body text on light ground |
| text-on-dark        | #ddd    | text                        | ground-dark, band | body text on dark ground |
| text-on-dark-strong | #fff    | text, heading               | ground-dark       | hero text and links on dark ground |
| rule                | #ccc    | rule, text                  | ground (rule), band (text) | hairlines, form borders, focus rings on light ground |
| rule-faint          | #999    | rule                        | ground, band      | hairlines that should recede |

## Type

family: "Arial", "Helvetica", sans-serif
root: 0.625em
body: 1.8rem
heading: 2.5rem
