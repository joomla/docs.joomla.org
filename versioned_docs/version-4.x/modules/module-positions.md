<!-- Filename: J4.x:Module_Positions / Display title: Module Positions -->

## Introduction

Template module positions are defined in a templateDetails.xml file and
used in a template index.php file. Several modules may be assigned to a
single position so there is rarely any need to create more positions. If
you do want more positions you will need create your own template and
that is not covered here.

## Preview Module Positions

There is a template option that allows you to see module locations in
Site and Administrator templates, including positions which have no
assigned modules. To enable this feature:

- Select **System **→** Site Templates** from the Administrator menu.
- Select the `Options` button from the Toolbar.
- In the Template: Options form set **Preview Module Positions** to
  **Enabled**.
- Save and Close

To view module positions you need to append either ?tp=1 or &tp=1 to the
url.

- If the url does not contain a question mark then append ?tp=1.
- If the url already contains a question mark then append &tp=1.

### Atum Administrator Template Positions

<img
src="https://docs.joomla.org/images/thumb/7/7d/J4x-templates-atum-template-positions-en.png/800px-J4x-templates-atum-template-positions-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/7/7d/J4x-templates-atum-template-positions-en.png 1.5x"
data-file-width="1000" data-file-height="703" width="800" height="562"
alt="J4x-templates-atum-template-positions-en.png" />

### Cassiopeia Site Template Positions

<img
src="https://docs.joomla.org/images/thumb/e/e5/J4x-templates-cassiopeia-template-positions-en.png/800px-J4x-templates-cassiopeia-template-positions-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/e/e5/J4x-templates-cassiopeia-template-positions-en.png 1.5x"
data-file-width="1000" data-file-height="508" width="800" height="406"
alt="J4x-templates-cassiopeia-template-positions-en.png" />

You may also find this module position diagram helpful:

<img
src="https://docs.joomla.org/images/2/28/J4x-cassiopeia_template_explained_positions.png"
class="thumbborder" decoding="async" data-file-width="786"
data-file-height="980" width="800" height="997"
alt="Template Positions" />

## Production Sites

Remember to change the **Preview Module Positions** to **Disabled** on
productions sites.
