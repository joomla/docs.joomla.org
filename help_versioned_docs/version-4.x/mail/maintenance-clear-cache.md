<!-- Filename: Help4.x:Maintenance:_Clear_Cache / Display title: Maintenance: Clear Cache -->

## Description

Clears cache files from the cache folders if enabled under the [Site
Global
Configuration](https://docs.joomla.org/Help4.x:Site_Global_Configuration/en#Cache_Settings "Help4.x:Site Global Configuration/en")
settings.

Cache files are temporary files that are created to improve the
performance of your site. If you have made significant changes to your
web site, such as changing your Template or Language, your cache files
may be out of date. To avoid any problems caused by out of date cache
files, you can delete all of the cache files. After deletion of *all*
Cache files the website may be a little slower until the cache files are
re-created with use.

## How to Access

- Select **System **→** Maintenance Panel **→** Clear Cache** from the
  Administrator menu.

## Screenshot

<img
src="https://docs.joomla.org/images/1/10/Help-4x-System-Clear-Cache-screen-en.png"
decoding="async" data-file-width="800" data-file-height="232"
width="800" height="232"
alt="Help-4x-System-Clear-Cache-screen-en.png" />

## Column Headers

- **\#**. An indexing number automatically assigned by Joomla! for ease
  of reference.

<!-- -->

- **Checkbox**. Check this box to select one or more items. To select
  all items, check the box in the column heading. After one or more
  boxes are checked, click a toolbar button to take an action on the
  selected item or items. Many toolbar actions, such as Publish and
  Unpublish, can work with multiple items. Others, such as Edit, only
  work on one item at a time. If multiple items are checked and you
  press Edit, the first item will be opened for editing.

<!-- -->

- **Cache Group**. The type of item being cached in this file. This is
  also the name of the subdirectory where this type of cache file is
  stored. The cache files are stored in the directory
  "\<path-to-Joomla!\>/cache/\<Cache Group Name\>".

<!-- -->

- **Number of Files**. The number of files currently in this cache
  group.

<!-- -->

- **Size**. The total size, in KB, of the cache files in this group.

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

- **None.** This screen has no Filter Options.

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

- **Delete:** Deletes the selected items. Works with one or multiple
  items selected.

<!-- -->

- **Delete All:** Deletes all the items. Works with all items.

<!-- -->

- **Clear Expired Cache**. Deletes all expired cache files. Cache files
  that are still current will not be deleted. WARNING: This operation
  can be resource intensive on sites with a large number of items.

<!-- -->

- **Options.** Opens the Options window where settings such as default
  parameters can be edited.

<!-- -->

- **Help**. Opens this help screen.

## Quick Tips

- Normally you want to delete all cache files. To do this, click the
  check box in the column heading to select all files and then click the
  Delete icon in the toolbar.

## Related Information

- To change the cache settings for your site: [Global Configuration -
  Cache
  Settings](https://docs.joomla.org/Help4.x:Site_Global_Configuration/en "Help4.x:Site Global Configuration/en")
