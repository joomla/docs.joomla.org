<!-- Filename: Help4.x:Templates:_Edit_Style / Display title: Templates: Edit Style -->

## Description

This is where you edit template styles. When a template is first
installed, a default style is created for it. The default style for the
template will have the same name as the template with a *- Default*
suffix. To make a different variation of the default template style,
check the default style's checkbox and press the *Duplicate* icon in the
toolbar. Then edit the duplicate.

## How to Access

- Select **System **→** Templates Panel **→** Site Templates Styles**
  from the Administrator menu. Or...
- Select **System **→** Templates Panel **→** Administrator Templates
  Styles** from the Administrator menu. Then...
  - Select the name of the Template Style to edit in the Style column.

## Screenshot

<img
src="https://docs.joomla.org/images/2/29/Help-4x-Extensions-Template-Manager-Styles-Edit-screen-en.png"
decoding="async" data-file-width="800" data-file-height="349"
width="800" height="349"
alt="Help-4x-Extensions-Template-Manager-Styles-Edit-screen-en.png" />

## Form Fields

- **Style Name.** The name of the style. This is the name that will
  display in the Style column of the *Template: Styles* screen.

### Details Tab

- **Template Name.** The name of the template, Site or Administrator
  indicator and a brief description.
- **Default.** Whether or not the style is the default for the location.
- **Template.** The name of the template the style is derived from.

### Advanced Tab

This section may not be present for all styles. If a template from which
a style is derived from has configurable options they will be present
here. It is these additional configurable options which allow you to
have multiple different styles of templates with variations of these
options. The options available will vary based on what options the
template developer made available.

### Atum Colour Settings

The default Administrator template allows you to experiment with colour
variations. Save and see!

### Atum Image Settings

You may select an image to replace the **Login Logo** in the
Administrator login form, and the **Brand Logo** in the Administrator
Title bar in expanded mode and in compacted mode. The defaults are the
Joomla Brand logos. In the Title Bar, the word Joomla! is present in the
**Brand Large** version and omitted in the **Brand Small** version.
Select **Toggle Menu** to see the change.

If you provide your own Brand Small you also need to provide a width
style override. To do so, create a user.css file in the template root
and insert the following, but replace 3rem with a suitable width for
your image:

       .header .logo.small {
           width: 3rem;
       }

### Menu Assignment Tab

This section contains all the menu items configured in your Joomla!
website. To apply the current style to a menu item's corresponding web
page, check the box next to the menu item. You can press the *Toggle
Selection* button to invert the menu item selections.

**Note**: If a checkbox is grayed out and cannot be checked then it
could be because the menu item is in use by another user. You can see if
this is the case by going to the [menu manager screen for the
menu](https://docs.joomla.org/Help4.x:Menus:_Items/en "Help4.x:Menus: Items/en")
concerned. If there is a padlock symbol next to the menu item then it is
currently in use by another user.

## Toolbar

At the top of the page you will see the toolbar shown in the
[Screenshot](#Screenshot) above. The functions are:

- **Save**. Saves the item and stays in the current screen.

<!-- -->

- **Save & Close**. Saves the item and closes the current screen.

<!-- -->

- **Save as Copy**. Saves your changes to a copy of the current item.
  Does not affect the current item. This toolbar icon is not shown if
  you are creating a new item.

<!-- -->

- **Cancel**. Closes the current screen and returns to the previous
  screen without saving any modifications you may have made.

<!-- -->

- **Help**. Opens this help screen.

## Related Information

- To install templates: [Extension Manager:
  Install](https://docs.joomla.org/Help4.x:Extensions:_Install/en "Help4.x:Extensions: Install/en")
