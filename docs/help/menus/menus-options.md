<!-- Filename: Help4.x:Menus:_Options / Display title: Menus: Options -->

## Description

Menu Options allow the setting of parameters used globally on all menus
such as, Title, CSS Class and Permissions.

## How to Access

- Select **Menus **→** Manage** in the Administrator menu. Then...
  - Select the **Options** button in the Toolbar.

## Screenshot

<img
src="https://docs.joomla.org/images/b/bc/Help-4x-Menus-Menu-Manager-Options-screen-en.png"
decoding="async" data-file-width="800" data-file-height="335"
width="800" height="335"
alt="Help-4x-Menus-Menu-Manager-Options-screen-en.png" />

## Form Fields

### Page Display Tab

- **Browser Page Title:** Optional text for the "Browser page title"
  element. If blank, the Menu Item Title is used.
- **Show Page Heading:** Whether or not to show the Browser Page Title
  in the heading of the page. The page heading is normally displayed
  inside an h1 HTML element.
- **Page Heading:** Optional alternative text for the Page Heading.
- **Page Class:** Optional CSS class to add to elements in this page.
  This allows CSS styling specific to this page.

### Permissions Tab

<img
src="https://docs.joomla.org/images/3/3b/Help-4x-Menu-Options-screen-permissions-tab-en.png"
decoding="async" data-file-width="600" data-file-height="653"
width="600" height="653"
alt="Help-4x-Menu-Options-screen-permissions-tab-en.png" />

To change the permissions for this extension, do the following.

- Select the **Group** by clicking its title located on the left.
- Find the desired **Action**. Possible Actions are:
  - **Configure ACL & Options**. Users can edit the options and
    permissions of this extension.
  - **Configure Options Only**. Users can edit the options exept the
    permissions of this extension.
  - **Access Administration Interface**. Users can access user
    administration interface of this extension.
  - **Create:** Users can create content of this extension.
  - **Delete:** Users can delete content of this extension.
  - **Edit:** Users can edit content of this extension.
  - **Edit State:** User can change the published state and related
    information for content of this extension.
  - **Edit Own:** Users can edit own created content of this extension.
- Select the desired permission for the action you wish to change.
  Possible settings are:
  - ***Inherited:*** Inherited for users in this Group from the Global
    Configuration permissions of this extension.
  - ***Allowed:*** Allowed for users in this Group. Note that, if this
    action is Denied at one of the higher levels, the Allowed permission
    here will not take effect. A Denied setting cannot be overridden.
  - ***Denied:*** Denied for users in this Group.
- Click **Save** in **Toolbar** at top. When the screen refreshes, the
  Calculated Setting column will show the effective permission for this
  Group and Action.

## Toolbar

At the top of the page you will see the toolbar shown in the
[Screenshot](#Screenshot) above. The functions are:

- **Save**. Saves the item and stays in the current screen.

<!-- -->

- **Save & Close**. Saves the item and closes the current screen.

<!-- -->

- **Close**. Closes the current screen and returns to the previous
  screen without saving any modifications you may have made. This
  toolbar icon is not shown if you are creating a new item.

<!-- -->

- **Help**. Opens this help screen.

## Quick Tips

- Remember, these choices are applied globally.

## Related Information

- To add new Menus: [Menu Manager
  New/Edit](https://docs.joomla.org/Help4.x:Menus:_Edit/en "Help4.x:Menus: Edit/en")
- To add or edit Menu Items: [Menu Item
  Manager](https://docs.joomla.org/Help4.x:Menus:_Items/en "Help4.x:Menus: Items/en")
- To add or edit Menu Modules: [Module
  Manager](https://docs.joomla.org/Help4.x:Extensions_Module_Manager_Edit/en "Help4.x:Extensions Module Manager Edit/en")
