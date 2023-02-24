<!-- Filename: Help4.x:Information:_Database / Display title: Information: Database -->

## Description

This screen checks that your database table structure is up to date with
your Joomla programs and lets you try to fix any problems that are
found. In a normal Joomla version update, changes to the database table
structure (also called "schema") are done automatically to keep the
database version synchronized with the Joomla version. If an update is
done manually, or if some part of an automatic update fails, the
database schema might not be updated to match the version of the Joomla
program files. In this case you will see a list of database problems on
the screen. You can normally fix any problems by clicking on the Fix
button.

## How to Access

- Select **System **→** Information Panel **→** Database** from the
  Administrator menu.

## Screenshot

<img
src="https://docs.joomla.org/images/c/c0/Help-4x-extension_manager-database-screen-en.png"
decoding="async" data-file-width="800" data-file-height="368"
width="800" height="368"
alt="Help-4x-extension manager-database-screen-en.png" />

## Column Headers

- **Checkbox**. Check this box to select one or more items. To select
  all items, check the box in the column heading. After one or more
  boxes are checked, click a toolbar button to take an action on the
  selected item or items. Many toolbar actions, such as Publish and
  Unpublish, can work with multiple items. Others, such as Edit, only
  work on one item at a time. If multiple items are checked and you
  press Edit, the first item will be opened for editing.

<!-- -->

- **Name.** The name of the extension.
- **Location.** Specifies if this is a site or administrator extension.
- **Type.** The extension type - module, plug-in, template, language.
- **Problems.** Any problems will be mentioned here. A hover Tooltip
  provides more information.
- **Database Version.** The version number of the Database.
- **Manifest Version.** The version number of Joomla or Extension.
- **Folder.** If the extension is a plug-in, the subdirectory of your
  Joomla! installation's /plugins directory where the extension is
  located.
- **ID.** The ID number. This is a unique identification number for this
  item assigned automatically by Joomla!. It is used to identify the
  item internally, for example in internal links. You cannot change this
  number.

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

**Filter Options**

You can use one of the available filters or any combination of them to
limit the number of extensions displayed to just the extensions which
match your filter parameters.

- **-Select Location-.** Select Site, Administrator or API from the
  dropdown list of available locations.
- **-Select Type-.** Select the extension type from the dropdown list
  box of available types.
- **-Select Folder-.** Select a plug-in folder from the dropdown list
  box of available folders. There is a separate folder for each type of
  plug-in defined in your Joomla installation.

**Page Controls**. When the number of items is more than one page, you
will see a page control bar near the bottom of the page shown in the
[Screenshot](#screenshot) above. The current page number being viewed
has a dark colour background.

- **Start**. Click to go to the first page.
- **Prev**. Click to go to the previous page.
- **Page numbers**. Click to go to the desired page.
- **Next**. Click to go to the next page.
- **End**. Click to go to the last page.

## Toolbar

At the top of the page you will see the toolbar shown in the
[Screenshot](#Screenshot) above. The functions are:

- **Update Structure**. This program attempts to fix any database table
  structure problems found in the Database check. It runs any database
  schema change scripts (from the folder
  `administrator/components/com_admin/sql/updates`) that were not run
  during the version update. It then re-checks whether or not the
  database is up to date. If it is successful, the message "Database
  table structure is up to date" will show.

<!-- -->

- **Options.** Opens the Options window where settings such as default
  parameters can be edited.

<!-- -->

- **Help**. Opens this help screen.

## Quick Tips

- If you experience problems during an update, use this Database check
  to see if your database got updated correctly.
- It is strongly recommended that you use the [Joomla
  Update](https://docs.joomla.org/Help4.x:Joomla_Update/en "Special:MyLanguage/Help4.x:Joomla Update/en")
  component to update your site. This way the database changes will be
  done automatically.

## Related Information

- You can check for available updates in the [Joomla
  Update](https://docs.joomla.org/Help4.x:Joomla_Update/en "Special:MyLanguage/Help4.x:Joomla Update/en")
  component or in the
  <a href="https://docs.joomla.org/Help4.x:Site_Control_Panel/en"
  class="new"
  title="Special:MyLanguage/Help4.x:Site Control Panel/en (page does not exist)">Control
  Panel</a>.

**Links to Other Screens**

- **Install.** Links to the [Install
  Screen](https://docs.joomla.org/Help4.x:Extensions:_Install/en "Special:MyLanguage/Help4.x:Extensions: Install/en").
- **Update.** Links to the [Update
  Screen](https://docs.joomla.org/Help4.x:Extensions:_Update/en "Special:MyLanguage/Help4.x:Extensions: Update/en").
- **Manage.** Links to the [Manage
  Screen](https://docs.joomla.org/Help4.x:Extensions:_Manage/en "Special:MyLanguage/Help4.x:Extensions: Manage/en").
- **Discover.** Links to the [Discover
  Screen](https://docs.joomla.org/Help4.x:Extensions:_Discover/en "Special:MyLanguage/Help4.x:Extensions: Discover/en").
- **Database.** Links to the [Database
  Screen](https://docs.joomla.org/Help4.x:Information:_Database/en "Special:MyLanguage/Help4.x:Information: Database/en").
- **Warnings.** Links to the [Warnings
  Screen](https://docs.joomla.org/Help4.x:Information:_Warnings/en "Special:MyLanguage/Help4.x:Information: Warnings/en").
- **Install Languages.** Links to the [Languages
  Screen](https://docs.joomla.org/Help4.x:Extensions_Extension_Manager_Languages/en "Special:MyLanguage/Help4.x:Extensions Extension Manager Languages/en").
- **Update Sites.** Links to the [Update
  Sites](https://docs.joomla.org/Help4.x:Extensions:_Update/en "Special:MyLanguage/Help4.x:Extensions: Update/en").
