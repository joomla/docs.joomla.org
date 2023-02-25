<!-- Filename: Help4.x:Extensions:_Discover / Display title: Extensions: Discover -->

## Description

This screen allows you to discover extensions that have not gone through
the normal installation process. This provides a method to install large
extensions which are not possible to install using the normal process.
For example, some extensions are too large in file size to upload using
the web interface due to limitations of the web hosting environment.
Using this feature you can upload extension files directly to your web
server using some other means such as FTP or SFTP and place those
extension files into the appropriate directory. You can then use the
discover feature to find the newly uploaded extension and activate it in
your Joomla! installation. Using the discover operation you can also
discover and install multiple extensions at the same time. An extension
can be installed with the discover function by doing the following
steps:

1.  Upload the uncompressed extension files to the appropriate directory
    in your Joomla! installation. For example, if you wanted to upload a
    site template extension to your Joomla! installation you would
    create a directory for the template extension in the /templates
    sub-directory of your Joomla! installation. Then you would upload
    the template extension files into that directory you created.
2.  After you have uploaded the extension files, go back to the
    Extension Manager Discover screen and click the **Discover** button
    in the toolbar. This will initiate the search function which will
    search your Joomla! extension directories looking for uninstalled
    extensions.
3.  If the extension you uploaded is compatible with Joomla! version and
    is not already installed, it will appear in the listing of
    discovered extensions in this screen.
4.  Click the check-box to the left of the discovered extension and then
    click the **Install** button in the toolbar. This will install the
    extension into your Joomla! installation.

## How to Access

- Select **System **→** Install Panel **→** Discover** from the
  Administrator menu.

## Screenshot

<img
src="https://docs.joomla.org/images/6/67/Help-4x-Extensions-Extension-Manager-Discover-screen-en.png"
decoding="async" data-file-width="800" data-file-height="252"
width="800" height="252"
alt="Help-4x-Extensions-Extension-Manager-Discover-screen-en.png" />

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
- **Version.** The version number of the Extension.
- **Date.** The date this extension was released.
- **Author.** The author of this extension.
- **Folder.** If the extension is a plug-in, the subdirectory of your
  Joomla! installation's /plugins directory where the extension is
  located. By default Joomla! 3.x has the following subdirectories in
  the plugins directory which each represent the different types of
  plug-ins that are defined by default: authentication, content,
  editors, editors-xtd, extension, search, system, user.
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
  Configuration](https://docs.joomla.org/Help4.x:Site_Global_Configuration/en#defaultlistlimit "Help4.x:Site Global Configuration/en").

**Filter Options**

You can use one of the available filters or any combination of them to
limit the number of extensions displayed to just the extensions which
match your filter parameters.

- **-Select Location-.** Select Site, Administrator or API from the
  drop-down list of available locations.
- **-Select Type-.** Select the extension type from the drop-down list
  box of available types.
- **-Select Folder-.** Select a plug-in folder from the drop-down list
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

- **Install**. Installs the selected extension.
- **Discover**. Searches the Joomla! installation directories for
  uninstalled extensions. Any uninstalled extensions found will be
  displayed in the extension listing. Caches the search results so they
  continue to be displayed on subsequent visits to this screen.

<!-- -->

- **Options.** Opens the Options window where settings such as default
  parameters can be edited.

<!-- -->

- **Help**. Opens this help screen.

## Quick Tips

- If you have many extensions you want to install you can upload them
  all into the appropriate directories of your Joomla! installation and
  then use this screen to discover all of them in one operation. You can
  then install all of the extensions in one step by selecting all of
  them and pressing the **Install** button in the toolbar.

## Related Information

- If you install a Component Extension, it will be listed as a new Menu
  Item in the *Components* menu.
- You can assign a Menu Item to an installed Component Extension in the
  [Menu Item
  Manager](https://docs.joomla.org/Help4.x:Menus:_Items/en "Help4.x:Menus: Items/en")
  by clicking the *New* toolbar button. The new Component will show in
  the Internal Link list of Menu Item Types.
- If you install a Module Extension, it will be added to the list of the
  Modules in the [Module
  Manager](https://docs.joomla.org/Help4.x:Modules/en "Help4.x:Modules/en"),
  where you can enable/disable it. You can also customize it's
  parameters in the [Module
  Edit](https://docs.joomla.org/Help4.x:Extensions_Module_Manager_Edit/en "Help4.x:Extensions Module Manager Edit/en")
  screen.
- An installed Plugin Extension will be added to the list of the [Plugin
  Manager](https://docs.joomla.org/Help4.x:Plugins/en "Help4.x:Plugins/en"),
  where you can enable/disable it. You can also customize its parameters
  in the [Plugin
  Edit](https://docs.joomla.org/Help4.x:Plugins:_Name_of_Plugin/en "Help4.x:Plugins: Name of Plugin/en")
  screen.
- An installed Template Extension will be added to the Site or
  Administrator list of the [Template
  Manager](https://docs.joomla.org/Help4.x:Templates:_Styles/en "Help4.x:Templates: Styles/en")
  where you can assign it to all of the pages or to the selected ones.
  You can also customize its parameters, edit the HTML or CSS source, or
  preview the available Module positions.
- An installed Language Extension will be added to the Site or
  Administrator list of the [Language
  Manager](https://docs.joomla.org/Help4.x:Languages:_Installed/en "Help4.x:Languages: Installed/en"),
  depending on the client attribute of the Extension. This screen let's
  you assign it as the default language, if desired.

**Related Screens**

- **Install.** Links to the [Install
  Screen](https://docs.joomla.org/Help4.x:Extensions:_Install/en "Help4.x:Extensions: Install/en").
- **Update.** Links to the [Update
  Screen](https://docs.joomla.org/Help4.x:Extensions:_Update/en "Help4.x:Extensions: Update/en").
- **Manage.** Links to the [Manage
  Screen](https://docs.joomla.org/Help4.x:Extensions:_Manage/en "Help4.x:Extensions: Manage/en").
- **Discover.** Links to the <span class="mw-selflink selflink">Discover
  Screen</span>.
- **Database.** Links to the [Database
  Screen](https://docs.joomla.org/Help4.x:Information:_Database/en "Help4.x:Information: Database/en").
- **Warnings.** Links to the [Warnings
  Screen](https://docs.joomla.org/Help4.x:Information:_Warnings/en "Help4.x:Information: Warnings/en").
- **Install Languages.** Links to the [Install Languages
  Screen](https://docs.joomla.org/Help4.x:Extensions_Extension_Manager_Languages/en "Help4.x:Extensions Extension Manager Languages/en").
- **Update Sites.** Links to the <a
  href="https://docs.joomla.org/index.php?title=Help4.x:Extensions_Extension_Manager_Update_Sites/en&amp;action=edit&amp;redlink=1"
  class="new"
  title="Help4.x:Extensions Extension Manager Update Sites/en (page does not exist)">Update
  Sites Screen</a>.
