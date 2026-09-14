# Section inventory

One row per section: which style family it joins, and any extra classes on
its heading component. The copy says what a section is; this file says how
it looks. Family is a slug from source/brief.md (its block in
_/css/section/shared.css lists the section), `own` (styled by its own file,
_/css/section/<section>.css, and no family) or `role` (served by the role-level
rules in site.css alone). A family member may also have its own file.

`intro` is the hero on every page (one row, heading on the h2) and is listed once.

| Section               | Page                  | Family   | Heading |
|-----------------------|-----------------------|----------|---------|
| what-we-do            | home                  | role     |         |
| how-we-can-help       | home                  | own      |         |
| esg                   | home                  | own      |         |
| did-you-know          | home                  | c        |         |
| intro                 | services              | role     |         |
| audit                 | services              | a        |         |
| fix                   | services              | b        |         |
| build                 | services              | a        |         |
| teach                 | services              | b        |         |
| how-much              | the-internet-pollutes | a        |         |
| how                   | the-internet-pollutes | b        |         |
| green-web-apps        | the-internet-pollutes | a        |         |
| how-we-help           | the-internet-pollutes | b        |         |
| agile                 | how-we-work           | c        |         |
| transparency          | how-we-work           | d        |         |
| accountability        | how-we-work           | c        |         |
| person-1              | about-us              | role     |         |
| person-2              | about-us              | role     |         |
| blog-1                | blog                  | role     |         |
| blog-2                | blog                  | role     |         |
| blog-3                | blog                  | role     |         |
| by-email              | contact-us            | own      |         |
| policy                | privacy-policy        | role     |         |
| interpretation-and-definitions | privacy-policy        | role     |         |
| interpretation        | privacy-policy        | role     |         |
| definitions           | privacy-policy        | role     |         |
| collecting-and-using-your-personal-data | privacy-policy        | role     |         |
| types-of-data-collected | privacy-policy        | role     |         |
| personal-data         | privacy-policy        | role     |         |
| usage-data            | privacy-policy        | role     |         |
| tracking-technologies-and-cookies | privacy-policy        | role     |         |
| use-of-your-personal-data | privacy-policy        | role     |         |
| retention-of-your-personal-data | privacy-policy        | role     |         |
| transfer-of-your-personal-data | privacy-policy        | role     |         |
| delete-your-personal-data | privacy-policy        | role     |         |
| disclosure-of-your-personal-data | privacy-policy        | role     |         |
| business-transactions | privacy-policy        | role     |         |
| law-enforcement       | privacy-policy        | role     |         |
| other-legal-requirements | privacy-policy        | role     |         |
| security-of-your-personal-data | privacy-policy        | role     |         |
| children-s-privacy    | privacy-policy        | role     |         |
| links-to-other-websites | privacy-policy        | role     |         |
| changes-to-this-privacy-policy | privacy-policy        | role     |         |
| contact-us            | privacy-policy        | role     |         |
