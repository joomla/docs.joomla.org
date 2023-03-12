<!-- Filename: J4.x:Home_Page_in_Different_Style / Display title: Home Page in Different Style -->

## Site Home Page

A site Home page can be selected from any type of menu item by selecting
a grey icon in the Home column of any list of menu items. Try making a
change! View the change in your site in a separate browser tab or
window. You can easily change back again. If you want a distinctive Home
page you might choose a Single Article menu item type, a Category Blog
menu item type, a Featured Articles menu item type, or something else.

Suppose you would like to give your Home page a distinctive appearance a
little different from all of the other pages on your site. There are
many different methods available to customise the appearance of a Home
page:

- Via modules assigned to the Home page only.
- Via custom styles.
- Via a template Override or Layout.
- Via a separate template or a child template used for the Home page
  menu item only.
- More...?

## Example: Cassiopeia Sample Data

The Cassiopeia sample data creates a Home page using a **Featured
Articles** menu item type. It is laid out with the appearance in the
screenshot below (some minor changes were made to individual articles to
make for a better screenshot here).

<img
src="https://docs.joomla.org/images/thumb/4/40/J4x-templates-home-page-style-cassiopeia-sample-data-en.png/800px-J4x-templates-home-page-style-cassiopeia-sample-data-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/4/40/J4x-templates-home-page-style-cassiopeia-sample-data-en.png 1.5x"
data-file-width="1000" data-file-height="1949" width="800" height="1559"
alt="J4x-templates-home-page-style-cassiopeia-sample-data-en.png" />

This is how the layout is achieved:

### Image Module

The large image beneath the menu bar is in a custom module named Image
assigned to the banner position in the Cassiopeia template

<img
src="https://docs.joomla.org/images/thumb/5/5c/J4x-templates-home-page-style-custom-module-image-en.png/800px-J4x-templates-home-page-style-custom-module-image-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/5/5c/J4x-templates-home-page-style-custom-module-image-en.png 1.5x"
data-file-width="1000" data-file-height="508" width="800" height="406"
alt="J4x-templates-home-page-style-custom-module-image-en.png" />

In the Menu Assignment tab the module is assigned to Home only:

<img
src="https://docs.joomla.org/images/thumb/c/ca/J4x-templates-home-page-style-custom-module-menu-assignment-en.png/800px-J4x-templates-home-page-style-custom-module-menu-assignment-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/c/ca/J4x-templates-home-page-style-custom-module-menu-assignment-en.png 1.5x"
data-file-width="1000" data-file-height="508" width="800" height="406"
alt="J4x-templates-home-page-style-custom-module-menu-assignment-en.png" />

The background image is selected in the Options tab of the Modules:
Custom edit form.

In the Advanced tab / Layout field, the `banner` item is selected. The
banner layout is a template layout:

### Template Layout

The default module layout in
siteroot/modules/mod_custom/tmpl/default.php does not display the module
as desired. There is an alternative layout in
siteroot/templates/cassiopeia/html/mod_custom/banner.php. As banner.php
is not present in the custom module code it works as a layout that you
can select rather than an override that is always used. In the Image
module you can select the default layout, Save and reload the site to
see the difference. Change back to the banner layout and save again to
restore normal behaviour.

There are separate articles on Overrides and Layouts.

### Newsflash Module

Beneath the large Image are three small boxes each with an image and
text beneath. They are created using an Articles - Newsflash module in
the template top-a position. The module is set to display 3 items. Its
Menu Assignment is Home only. The Advanced tab has Layout set to
horizontal and Module Style set to noCard.

<img
src="https://docs.joomla.org/images/thumb/d/de/J4x-templates-home-page-style-newsflash-module-image-en.png/800px-J4x-templates-home-page-style-newsflash-module-image-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/d/de/J4x-templates-home-page-style-newsflash-module-image-en.png 1.5x"
data-file-width="1000" data-file-height="805" width="800" height="644"
alt="J4x-templates-home-page-style-newsflash-module-image-en.png" />

  
That concludes the explanation of how the Cassiopeia sample data Home
page was created.

## More Options

You may wish to go on to do more. A different colour scheme for the Home
page, or a water mark, or a custom layout. Here are a few ides:

### Page Display

In the Menus: Edit Item form for the Home menu select the Page Display
tab. The Page Class field is usually empty. Anything entered here
becomes an extra class in the

element of the page. For example, entering `fancyhome` results in the
following in the home page output for that one page:

You can then create a user.css file via **System **→** Site
Templates **→** Cassiopeia Details and Files**. Select the `New File`
button and create user.css in the css folder. Then enter styles in the
user.css edit form. Example:

    .fancyhome {
      background-color: #f8fff8;
    }

This will endow the home page with a pale green background. Use
\#f8f8ff; for a pale blue background or \#ffffee for pale yellow. You
can do all sorts of other things with your fancyhome style but you need
a good working knowledge of css.

### Alternative Front Page Templates

You can install alternative Site templates, obtained from third party
template suppliers. And you can create child templates that behave
similarly. In either case you can choose which template is to be the
default for all pages and which is to be used for the Home page only.

- Select **System **→** Site Template Styles** in the Administrator
  menu.
- Select the template you wish to use for the Home page. It must be one
  of those not selected as the Default template.
- In Menu Assignment tab Select the Home menu item only. Anything not
  selected here will still use your default template.
- You could select some options in the Advance tab but they vary with
  each template and are not covered here.

There are other articles on Cassiopeia customisation.
