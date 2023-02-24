<!-- Filename: Help4.x:Admin_Modules:_Action_Logs_-_Latest / Display title: Admin Modules: Action Logs - Latest -->

## Description

The **Action Logs - Latest** module type shows a list of the most recent
actions on the Administrator **Home Dashboard**.

## How to Access

- Select **System **→** Manage Panel **→** Administrator Modules** from
  the Administrator menu. Then...
  - To create a new module: select the **New** button from the Toolbar.
    Then...
    - Select the required module type.
  - To edit an existing module:
    - Find the module in the list of installed modules and select the
      title link in the **Title** column.

## Screenshot

<img
src="https://docs.joomla.org/images/8/82/Help-4x-modules-manager-admin-module-latestactions-en.png"
decoding="async" data-file-width="800" data-file-height="658"
width="800" height="658"
alt="Help-4x-modules-manager-admin-module-latestactions-en.png" />

## Form Fields

- **Title.** Sets the name to give to this instance of the module.

### Module Tab

- **Count.** Sets the number of recent actions to display on the Home
  Dasboard of your site.

### Advanced Tab

<img
src="https://docs.joomla.org/images/e/ec/Help-4x-modules-manager-admin-module-latestactions-advanced-options-en.png"
decoding="async" data-file-width="600" data-file-height="443"
width="600" height="443"
alt="Help-4x-modules-manager-admin-module-latestactions-advanced-options-en.png" />

- **Layout.** If you have defined one or more alternative layouts for a
  module either in the template or Joomla! Core, you can select the
  layout to use for this module.
- **Module Class.** A suffix applied to the CSS class of the Module.
  This allows you to create customized CSS styles that will apply just
  to this module. You would then modify the "user.css" file of your
  template to apply styling to this new class. Enter this parameter with
  a leading space to create a new CSS class for this module. Enter the
  parameter without a leading space to change the CSS class name for
  this module.
- **Caching.** Use Global/No Caching. Whether or not to cache the
  content of this Module. A setting of "Use Global" will use the Cache
  Settings from the Global Configuration screen.
- **Cache Time.** The number of seconds for which to cache the item
  locally. It can safely be left at the default.
- **Module Style.** You can use this option to override the templates
  style for its position.
- **Module Tag.** The HTML tag for the module to be placed in. By
  default this is a div tag but other HTML5 elements can also be used.
- **Bootstrap Size.** (Values 0 to 12) This allows you to choose the
  width of the module via the span element built into bootstrap.
- **Header Tag.** The HTML tag to use for the modules header or title.
  This can be an h1, h2, h3, h4, h5, h6 or a p tag. Note that you must
  use a module style (chrome) of html5 or add your custom module styles
  in \<mytemplate\>/html/modules.php.
- **Header Class.** Here you can add optional CSS classes to add to the
  modules header or title element.

### Permissions Tab

<img
src="https://docs.joomla.org/images/2/27/Help-4x-modules-manager-admin-module-latestactions-permissions-en.png"
decoding="async" data-file-width="600" data-file-height="404"
width="600" height="404"
alt="Help-4x-modules-manager-admin-module-latestactions-permissions-en.png" />

- **Delete:** (*Inherited*/*Allowed*/*Denied*). Allow or deny Delete for
  users in the group. Delete Allows users in the group to delete any
  content in this extension.
- **Edit:** (*Inherited*/*Allowed*/*Denied*). Allow or deny Edit for
  users in the group. Edit Allows users in the group to edit any content
  in this extension.
- **Edit State:** (*Inherited*/*Allowed*/*Denied*). Allow or deny Edit
  State for users in the group. Edit State Allows users in the group to
  change the state of any content in this extension.
- **Frontend Editing:** (*Inherited*/*Allowed*/*Denied*). Allow or deny
  Edit from the frontend of the site for users in the group.

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

- **Save as Copy**. Saves your changes to a copy of the current item.
  Does not affect the current item. This toolbar icon is not shown if
  you are creating a new item.

<!-- -->

- **Help**. Opens this help screen.

## Related Information

- [Joomla 3 Tutorial: User Action
  Logs](https://docs.joomla.org/J3.x:User_Action_Logs/en "J3.x:User Action Logs/en")
