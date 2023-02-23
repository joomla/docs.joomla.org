<!-- Filename: Help4.x:Plugins / Display title: Plugins -->

## Description

The Plugin Manager allows you to enable and disable Joomla! plugins and
to edit a plugin's details and options. It is also useful for quickly
enabling/disabling multiple plugins at once.

## How to Access

- Select **System **→** Manage panel **→** Plugins** from the
  Administrator menu. or...
- Select **Home Dashboard **→** Site panel **→** Plugins** from the
  Administrator menu.

## Screenshot

<img
src="https://docs.joomla.org/images/3/35/Help-4x-Extensions-Plugin-Manager-screen-en.png"
decoding="async" data-file-width="800" data-file-height="544"
width="800" height="544"
alt="Help-4x-Extensions-Plugin-Manager-screen-en.png" />

## Column Headers

- **Checkbox**. Check this box to select one or more items. To select
  all items, check the box in the column heading. After one or more
  boxes are checked, click a toolbar button to take an action on the
  selected item or items. Many toolbar actions, such as Publish and
  Unpublish, can work with multiple items. Others, such as Edit, only
  work on one item at a time. If multiple items are checked and you
  press Edit, the first item will be opened for editing.

<!-- -->

- **Ordering.** You can change the order of an item within a list as
  follows:
  - If the list Filter Options include a Position filter select the
    desired Position. This will limit the list to items that are
    assigned to that Position.
  - Select the Ordering icon <img
    src="https://docs.joomla.org/images/e/ee/Help30-Ordering-colheader-icon.png"
    decoding="async" data-file-width="12" data-file-height="23" width="12"
    height="23" alt="Help30-Ordering-colheader-icon.png" /> in the Table
    heading to make it the active ordering item. The ordering icons in
    each row will change from light grey to dark grey and the pointer
    will change to a drag arrow on hover.
  - Select one of the Ordering icons <img
    src="https://docs.joomla.org/images/8/87/Help30-Ordering-colheader-grab-bar-icon.png"
    decoding="async" data-file-width="10" data-file-height="21" width="10"
    height="21" alt="Help30-Ordering-colheader-grab-bar-icon.png" /> and
    drag it up or down to change the position of that row in the list.
    The items will display in the new order within the Position.

<!-- -->

- **Status.** A green tick or a red X showing whether the use of the
  component is enabled/disabled. Click the icon to toggle the item
  between enabled and disabled.

<!-- -->

- **Plugin Name.** The name of the plugin.
- **Type.** The Type of the plug-in. Some possible types are:
  authentication, content, editors, editors-xtd, search, system, and
  user. These are also the names of the website sub-directories where
  the plugin files are located. For example, plugins with a type of
  'authentication' are located in the website directory
  'plugins/authentication'.
- **Element.** The plug-in directory name which contains the plugin's
  files. This directory will be located in the directory which
  corresponds to its type. For example, the 'Authentication - Joomla'
  plugin is of type 'Authentication' and element 'joomla'. So the
  website directory it is located in is 'plugins/authentication/joomla'
- **Access.** Which user 'access levels' have access to this item. You
  can change an item's Access Level by clicking on its name to open it
  up for editing. The default user 'access levels' which come
  preconfigured with Joomla! are:
  - Public: Everyone has access including website visitors who have not
    logged in
  - Registered: Only users with registered status or higher will have
    access
  - Special: Only users with author status or higher have access

<!-- -->

- **ID**. This is a unique identification number for this item assigned
  automatically by Joomla. It is used to identify the item internally,
  and you cannot change this number. When creating a new item, this
  field displays "0" until you save the new entry, at which point a new
  ID is assigned to it.

## List Filters

**Search bar**. Near the top of the page you will see the search bar
shown in the [Screenshot](#screenshot) above.

- **Search by Text**. Enter part of the search term and click the Search
  icon. *Hover* to see a *Tooltip* indicating which fields will be
  searched.To 'Search by ID' enter "id:x", where "x" is the ID number
  (for example, "id:19").
- **Filter Options**. Click to display the additional filters.
- **Clear**. Click to clear the Filter field and restore the list to its
  unfiltered state.
- **Ordering**. Shows the current list ordering field. 2 ways to change
  the order:
  - Select from the dropdown list. Ordering may be in ascending or
    descending order.
  - Click a column heading. The column heading toggles between ascending
    and descending order.
- **Number to Display**. Shows the number of items in a list. Select
  from the dropdown list to change the number displayed.The default for
  a site is '20' but this may be changed in the [Global
  Configuration](https://docs.joomla.org/Help4.x:Site_Global_Configuration/en#defaultlistlimit "Special:MyLanguage/Help4.x:Site Global Configuration/en").

The list of plugins which appears on this screen may be very large. You
can use one of the available filters or any combination of them to limit
the number of plug-ins displayed to just the plug-ins which match your
filter parameters.

**Filter Options**

- **Select Status.** Select a status (Enabled or Disabled) from the
  drop-down list box to show only plugins with the selected status.
- **Select Type.** Select a Type from the drop-down list box to show
  only plugins of the selected Type.
- **Select Element.** A long list of elements, allowing a precise
  selection.
- **Select Access.** Select the 'Access Level' from the drop-down list
  box to only show plugins accessible by uses of the selected 'Access
  Level'

## Toolbar

At the top of the page you will see the toolbar shown in the
[Screenshot](#Screenshot) above. The functions are:

- **Enable**. Makes the selected item available for use on your website.
  You may also toggle between Enabled and Disabled by clicking on the
  icon in the 'Status' column.

<!-- -->

- **Disable**. Makes the selected plugins unavailable for use on your
  website. You may also toggle between Enabled and Disabled by clicking
  on the icon in the 'Status' column.

<!-- -->

- **Check-In**. Checks-in the selected plugins. Works with one or
  multiple plugins selected.

<!-- -->

- **Options.** Opens the Options window where settings such as default
  parameters can be edited.

<!-- -->

- **Help**. Opens this help screen.

## Quick Tips

- To enable or disable a group of Plugins, check the check box for each
  desired Plugin and then click the Enable or Disable toolbar button.
- Starting with Joomla! 1.6, configurable plugin settings are referred
  to as 'options'. In previous versions of Joomla! these configurable
  settings were referred to as 'parameters'. You may see the terms
  'options' and 'parameters' used interchangeably in help documentation
  and tutorials you encounter.

## Related Information

- To change the Details or Options for a Plugin: [Plugin Manager -
  Edit](https://docs.joomla.org/Help4.x:Plugins:_Name_of_Plugin/en "Help4.x:Plugins: Name of Plugin/en")
- To install Plugins: [Extension Manager -
  Install](https://docs.joomla.org/Help4.x:Extensions:_Install/en "Help4.x:Extensions: Install/en")
- To uninstall Plugins: [Extension Manager -
  Manage](https://docs.joomla.org/Help4.x:Extensions:_Manage/en "Help4.x:Extensions: Manage/en")
