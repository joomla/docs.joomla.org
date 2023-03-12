<!-- Filename: J4.x:Module_Display_by_Menu_Item / Display title: Module Display by Menu Item -->

## Introduction

In Joomla it is often the case that different modules appear on
different pages. And sometimes different modules are presented to
different user groups. Module display behaviour is controlled by a
combination of Menu Assignment and Access permission in the module edit
form. By default, a module is displayed on all pages and to all user
groups.

## Access

This field is in the Module tab of the module data entry form. It is in
the right-hand panel and should not be confused with the Permissions
tab. The options available are:

- Public - visible to all user groups.
- Guest - not visible after login.
- Registered - only visible after login.
- Special - only visible after login to user groups other than
  Registered.
- Super User - visible only to this user group.

## Menu Assignment

There are four menu assignment options:

- On all pages
- No pages
- Only on the pages selected
- On all pages except those selected

For the last two a Menu Selection panel is displayed. Initially, the
menus it contains are fully expanded but they can be collapsed with the
the **Expand the Menu Subtrees** `None` button. Then expand the menu of
interest.

<img
src="https://docs.joomla.org/images/thumb/d/d5/J4x-module-menu-assignment-en.png/800px-J4x-module-menu-assignment-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/d/d5/J4x-module-menu-assignment-en.png 1.5x"
data-file-width="1000" data-file-height="591" width="800" height="473"
alt="J4x-module-menu-assignment-en.png" />

Select the Menu Items to display or not display the module as desired.

## Examples

### Breadcrumbs Not on Home Page

- Open the Breadcrumbs module.
- Select `On all pages except those selected`
- Select the `None` after **Assign to Menu Items**
- Find the Home page menu item and check its checkbox.
- Save
- Check the site - breadcrumbs should be present on all pages except the
  Home page.
