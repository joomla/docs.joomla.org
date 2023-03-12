<!-- Filename: J4.x:Child_Templates / Display title: Child Templates -->

## Introduction

Child templates use all of the files of their parent templates except
for any files of the same name you place in the child template. Child
template files are not affected by Joomla updates. So you could place
your own index.php file in a child template and have it deliver
something quite different from the default template, such as extra
module positions or alternative extension overrides.

An example scenario: suppose you want some of your pages to appear with
a blue theme, the default Cassiopeia colours, and other pages to appear
with a green theme. An easy way to do that is with a child template that
uses its own user.css style sheet,

## Worked example

Starting from **System **→** Templates panel **→** Site Templates**:

- Select `Cassiopeia Details and Files`.
- Select the `Create Child Template` button.
- Fill out the Child Template popup dialog and select the Create Child
  Template button:

<img
src="https://docs.joomla.org/images/d/dd/J4x-child-templates-create-green-en.png"
class="thumbborder" decoding="async" data-file-width="789"
data-file-height="278" width="789" height="278"
alt="J4x-child-templates-create-green-en.png" />

Selection of Cassiopeia - Default in the Additional Template Styles
field seems unnecessary (is that a bug?).

- Select `Close` from the Toolbar to close the parent template form.
- Select the new template, `Cassiopeia_green Details and Files`, from
  the list of Templates.

At this stage there is a folder structure but only one file:
templateDetails.xml. That file can be changed if you wish to change
aspects of the template configuration, for example template positions to
be added or removed.

### Create a user.css file

- Select the `New File` button in the Toolbar.
- In the `Create or Upload a new file` form make sure you select the
  `css` folder
- Fill out the filename with `user`. Do NOT add a suffix!
- Select the `.css` File Type.
- Select the `Create` button.

<img
src="https://docs.joomla.org/images/thumb/8/81/J4x-child-templates-create-green-user-css-en.png/800px-J4x-child-templates-create-green-user-css-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/8/81/J4x-child-templates-create-green-user-css-en.png 1.5x"
data-file-width="1000" data-file-height="543" width="800" height="434"
alt="J4x-child-templates-create-green-user-css-en.png" />

The user.css file is empty, ready for your to enter some custom styles.
Enter the following to start the green theme:

    .container-header {
      background-color: darkgreen;
      background-image: none;
    }
    h1, h2, h3, h4, h5, h6 {
      color: darkgreen;
    }
    .h1, .h2, .h3, .h4, .h5, .h6 {
      color: darkgreen;
    }
    a, a:hover, a:focus {
      color: darkgreen;
    }
    .btn-info {
        background-color: darkgreen;
        border-color: #30638d;
        color: #fff;
    }
    .btn-primary, .btn-primary:focus, .btn-primary:hover {
        background-color: darkgreen;
        border-color: var(--cassiopeia-color-hover);
    }

    .btn-check:focus + .btn-info, .btn-info:focus, .btn-info:hover {
        background-color: darkgreen;
        border-color: #264f71;
        color: #fff;
    }

You may need to come back to this user.css file to add more styles
later.

- Select `Save & Close` or separately, `Save` and then `Close File`.
- Select `Close` to close the Customise form.

### Menu Item

At this stage a menu item is needed to make use of the child template. A
new Joomla 4 installation has the Main Menu in the right sidebar
position with one item in it. That seems like a good place for a new
menu item.

- Select **Menus **→** Main Menu** from the Administrator menu.
- Select the `New` button from the Toolbar.
- Enter a suitable title, `Green Featured Articles` seems appropriate in
  this case.
- Select the **Menu Item Type **→** Select** button.
- Select a menu item type from the Menu Item Type popup dialog -
  Featured Articles in this example.
- Select `cassiopeia_manual - Default` from the `Template Style` form
  field.

<img
src="https://docs.joomla.org/images/thumb/8/87/J4x-child-templates-create-green-menu-item-en.png/800px-J4x-child-templates-create-green-menu-item-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/8/87/J4x-child-templates-create-green-menu-item-en.png 1.5x"
data-file-width="1000" data-file-height="507" width="800" height="406"
alt="J4x-child-templates-create-green-menu-item-en.png" />

- For the purposes of the following screenshot the Blog Layout has been
  set to Leading Articles: 0, Intro Articles: 3 and Mult Column
  Direction: Across.

### Site View

- in the Home page of your site select the newly created menu item.

<img
src="https://docs.joomla.org/images/thumb/f/f6/J4x-child-templates-green-site-result-en.png/800px-J4x-child-templates-green-site-result-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/f/f6/J4x-child-templates-green-site-result-en.png 1.5x"
data-file-width="1000" data-file-height="508" width="800" height="406"
alt="J4x-child-templates-green-site-result-en.png" />

### Edit the Style

- Select **System **→** Templates panel **→** Site TemplateStyles** from
  the Administrator menu.
- Select `Cassiopeia_green - Default` from the Style list.
- Change the Style Name to `Cassiopeia Green`. That just tidies up the
  name as it appears in lists.
- Select `Save and Close`.
