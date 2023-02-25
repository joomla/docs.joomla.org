<!-- Filename: Help4.x:Menus:_Edit / Display title: Menus: Edit -->

## Description

You can add or modify menus in this screen.

## How to Access

- Select **Menus **→** Manage** from the Administrator menu. Then...
  - Select the **New** button in the Toolbar to create a new menu. Or...
  - Select a menu **Title** in the Title column to edit an existing
    menu.

## Screenshot

<img
src="https://docs.joomla.org/images/f/f4/Help-4x-menus-menu-manager-add-menu-en.png"
decoding="async" data-file-width="800" data-file-height="475"
width="800" height="475"
alt="Help-4x-menus-menu-manager-add-menu-en.png" />

## Form Fields

- **Title.** The title of the menu to display in the Administrator
  Menubar and lists.

### Menu Details Tab

- **Unique Name.** The system name of the menu.
- **Description.** A description about the purpose of the menu.

### Permissions Tab

You can set permissions for a menu so that only specific groups can
alter the menu. The actions available are:

- **Access Administration Interface**
- **Create**
- **Delete**
- **Edit**
- **Edit State**

The available settings for each are:

- **Inherited** means that the permissions from global configuration,
  parent group and category will be used.
- **Allowed** means that the group being edited will be able to take
  this action for this item (but if this is in conflict with the global
  configuration, parent group or category it will have no impact; a
  conflict will be indicated by Not Allowed (Inherited) under Calculated
  Settings).
- **Denied** means that no matter what the global configuration, parent
  group or category settings are, the group being edited can't take this
  action on this item.

## Toolbar

At the top of the page you will see the toolbar shown in the
[Screenshot](#Screenshot) above. The functions are:

- **Save**. Saves the item and stays in the current screen.

<!-- -->

- **Save & Close**. Saves the item and closes the current screen.

<!-- -->

- **Save & New**. Saves the item and keeps the editing screen open and
  ready to create another item.

<!-- -->

- **Cancel**. Closes the current screen and returns to the previous
  screen without saving any modifications you may have made.

<!-- -->

- **Help**. Opens this help screen.

## Quick Tips

- If you forgot to create a module for this menu, go to the [Module
  Manager](https://docs.joomla.org/Help4.x:Modules/en "Help4.x:Modules/en"),
  found by going to **Home Dashboard â†’ Site â†’ Module**. Click on
  **New**, and then on **Menu**. Fill in a title and select the Menu in
  the Module Parameters.
- It is a good idea to give a descriptive title for new menus. This is
  how the menu will be identified in the *Backend Menus menu*. It is
  also a good idea to fill in the *Description* field with information
  about the menu. This is how the menu's module will be referred to in
  the Module Manager.
- When you create a new menu, use only alphanumeric characters without
  spaces in the *Unique Name* field. It is a good idea to use only a-z,
  0-9 and underscore (\_) characters.

## Related information

- [Menus](https://docs.joomla.org/Help4.x:Menus/en "Special:MyLanguage/Help4.x:Menus/en")
- <a href="https://docs.joomla.org/Help4.x:Site_Control_Panel/en"
  class="new"
  title="Special:MyLanguage/Help4.x:Site Control Panel/en (page does not exist)">Control
  Panel</a>
