<!-- Filename: Help4.x:Extensions:_Manage / Display title: Extensions: Manage -->

## Description

This screen is used to Enable or Disable extensions, equivalent Publish
and Unpublish it, or to uninstall extensions no longer required.

## How to Access

- Select **System **→** Manage Panel **→** Extensions** from the
  Administrator menus.

## Screenshot

<img
src="https://docs.joomla.org/images/7/70/Help-4x-Extensions-Manage-Manage-screen-en.png"
decoding="async" data-file-width="800" data-file-height="511"
width="800" height="511"
alt="Help-4x-Extensions-Manage-Manage-screen-en.png" />

## Column Headers

In the table containing Extensions, the columns are shown below. Click
on a column heading to sort the list by that column's value.

- **Checkbox.** Check this box to select one or more items. To select
  all items, check the box in the column heading. After one or more
  boxes are checked, click a toolbar button to take an action on the
  selected item or items.
- **Status.** A green check mark or a red circle showing whether the use
  of the extension is enabled/disabled. Click the icon to toggle the
  item between enabled and disabled. A lock indicates a protected
  Extension.
- **Name.** The name of the extension.
- **Location.** Specifies if this is a site or administrator extension.
- **Type.** The extension type. Some examples of extension types are
  module, plug-in, template, language or package.
- **Version.** The version number of the Extension.
- **Date.** The date this extension was released.
- **Author.** The author of this extension.
- **Folder.** If the extension is a plug-in, the subdirectory of your
  Joomla! installation's /plugins directory where the extension is
  located. By default Joomla! has the following subdirectories in the
  plugins directory which each represent the different types of plug-ins
  that are defined: authentication, content, editors, editors-xtd,
  extension, search, system, user.
- **Package ID.** The Package ID number. This is a unique identification
  number for this package assigned automatically by Joomla!. It is used
  to identify the package internally. You cannot change this number.
- **Id.** The ID number. This is a unique identification number for this
  item assigned automatically by Joomla!. It is used to identify the
  item internally, for example in internal links. You cannot change this
  number.

### List Filters

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
  Configuration](https://docs.joomla.org/Help4.x:Site_Global_Configuration/en#defaultlistlimit "Help4.x:Site Global Configuration/en").

### Filter by Location, Status, Type and Folder

**Location**

- **-Select Location-.** Select an extension client from the drop-down
  list box of available locations.
- **Site.** Site extensions are extensions which are designed for use in
  areas outside of the administrator interface.
- **Administrator.** Administrator extensions are for the back-end
  administrative functions of your Joomla! installation. Usually you
  would only directly interact with these extensions through the
  administrator web interface.

**Status**

- **-Select Status-.** Select the status of Extensions from the
  drop-down list box.
- **Disabled.** Installed extensions that are not activated.
- **Enabled.** Installed extensions that are activated
- **Protected.** Installed extensions that are protected. Extensions of
  this type can not be uninstalled or disabled.
- **Unprotected.** Installed extensions that are unprotected. Extensions
  of this type can be uninstalled, enabled or disabled.

**Extension Type**

- **-Select Type-.** Select the extension type from the drop-down list
  box of available types.

**Folder**

- **-Select Folder-.** Select a plug-in folder from the drop-down list
  box of available folders. There is a separate folder for each type of
  plug-in defined in your installation of Joomla.

### Automatic Pagination

**Page Controls**. When the number of extension(s) is more than one
page, you will see a page control bar near the bottom of the page shown
in the [Screenshot](#screenshot) above. The current page number being
viewed has a dark colour background.

- **Start**. Click to go to the first page.
- **Prev**. Click to go to the previous page.
- **Page numbers**. Click to go to the desired page.
- **Next**. Click to go to the next page.
- **End**. Click to go to the last page.

## Toolbar

At the top of the page you will see the toolbar shown in the
[Screenshot](#Screenshot) above. The functions are:

- **Enable**. Makes the selected item available for use on your website.

<!-- -->

- **Disable**. Makes the selected extension(s) unavailable for use on
  your website.

<!-- -->

- **Refresh cache**. Refresh the information displayed for the selected
  extension(s).

<!-- -->

- **Uninstall:** Uninstall the selected extension(s).

<!-- -->

- **Options.** Opens the Options window where settings such as default
  parameters can be edited.

<!-- -->

- **Help**. Opens this help screen.

## Quick Tips

- Throughout the administrator interface of Joomla! you will see the
  terms "Publish" and "Unpublish". *Publish* means the same thing as
  *Enable* or *Activate*. *Unpublish* means the same thing as *Disable*
  or *Deactivate*. You may see the terms used interchangeably in
  extension screens and help documentation you find online.
- Some information such as *Date* or *Author* may not be displayed for
  an extension. This is not a problem. It merely means the information
  was not specified by the extension developer in the extension's
  installation package.
