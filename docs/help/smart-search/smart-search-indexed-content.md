<!-- Filename: Help4.x:Smart_Search:_Indexed_Content / Display title: Smart Search: Indexed Content -->

## Description

This screen shows a list of all the content items that have been indexed
in Smart Search. If the list is empty then

- Make sure that the Smart Search plug-in has been enabled.
  - To check if the Smart Search plug-in has been enabled:
    - Select **System** from the Administrator menu and then **Plugins**
      from the Manage panel.
    - Select "content" from the Filter Options **-Select Type-** list.
    - Find "Smart Search" in the list of plug-ins shown.
    - If there is a green tick in the Status column for Smart Search
      then the Smart Search plug-in has been enabled. If there is red
      cross then the Smart Search plug-in is currently disabled.
  - To enable the Smart Search plug-in:
    - Click on the red cross. This should change to a green tick
      indicating that the Smart Search plug-in is now enabled.

## How to access

- Select **Components **→** Smart Search **→** Index** from the
  Administrator menu.

## Screenshot

<img
src="https://docs.joomla.org/images/1/1c/Help-4x-Components-Finder-Manage-Indexed-Content-screen-en.png"
decoding="async" data-file-width="800" data-file-height="401"
width="800" height="401"
alt="Help-4x-Components-Finder-Manage-Indexed-Content-screen-en.png" />

## Create an Index

Click on the Index toolbar icon. This will open a window to show the
progress of the indexing operation. The indexing operation may take some
time depending on the number of content items on your site and the
number of search words and phrases contained in each content item. A
progress bar will indicate how much of the indexing process has been
completed so far. Do not close this window until indexing has been
completed. On sites with a large amount of content this may take a long
time (tens of minutes).

## Column Headers

In the table containing the indexed content for your Joomla! site you
will see different columns. Here you can read what they mean and what is
displayed in each column.

<img
src="https://docs.joomla.org/images/0/09/Help31-Components-Smart-Search-Manager-columns-en.png"
decoding="async" data-file-width="749" data-file-height="32" width="749"
height="32"
alt="Help31-Components-Smart-Search-Manager-columns-en.png" />

- **Checkbox**. Check this box to select one or more items. To select
  all items, check the box in the column heading. After one or more
  boxes are checked, click a toolbar button to take an action on the
  selected item or items. Many toolbar actions, such as Publish and
  Unpublish, can work with multiple items. Others, such as Edit, only
  work on one item at a time. If multiple items are checked and you
  press Edit, the first item will be opened for editing.

<!-- -->

- **Status**. The status of the content item within Smart Search.
  Published items are shown with a green tick; unpublished items by a
  red circle. You can change the status of an item by clicking on the
  icon. Changing the status on this screen only affects whether the
  content item is available in search results and does not affect the
  content item itself.
- **Title**. The title of the content item.
- **Type**. The type of the content item.
- **Last Updated**. The date on which the content item was last
  re-indexed. Any change to the indexable fields of a content item will
  automatically cause that content item to be re-indexed.
- **Details**. The details of the content item (Published Start,
  Published End, Content Start, Content End).
- **Raw URL**. The raw (non-SEF) URL that will be used to retrieve the
  content item in search results.

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

- **Filter by published status**. Choose whether to show only published
  or unpublished content items by selecting the appropriate item from
  the drop-down list. The published state of the items in Smart Search
  is independent of their published state elsewhere.
- **Filter by type of content**. Select the content item type from the
  drop-down list.

<!-- -->

- **Search Content Maps**. Optional, used to search in content map
  title.

## Toolbar

At the top of the page you will see the toolbar shown in the
[Screenshot](#Screenshot) above. The functions are:

- **Index**. Runs the Smart Search indexer. A small popup window will
  appear with a progress bar which advances as the indexing process
  works through the content on your site. Do not close this popup window
  until the process is finished. On sites with a large amount of content
  this may take a long time (tens of minutes). You should run the
  indexer after new content has been introduced to your website that the
  Smart Search function is not automatically aware of. For example,
  batch importing new content where the importer does not automatically
  trigger Smart Search to index each new content item. NOTE: The Smart
  Search indexer can also be run from the command-line interface (CLI)
  if required. See [Setting up automatic Smart Search
  indexing](https://docs.joomla.org/Setting_up_automatic_Smart_Search_indexing "Setting up automatic Smart Search indexing").
- **Publish**. Makes the selected items available to visitors to your
  website.
- **Unpublish.** Makes the selected items unavailable to visitors to
  your website.

<!-- -->

- **Statistics:** Shows some basic statistics on Smart Search.

<!-- -->

- **Delete:** Deletes the selected content items. Works with one or
  multiple content items selected. Deleting a content item from Smart
  Search only deletes it from the index and does not affect the content
  item itself.
- **Clear Index**. Purges the Smart Search index by emptying all index
  tables. To continue using Smart Search you must click on the Index
  toolbar icon after purging. WARNING: Purging the index also empties
  the content filters. You must manually re-enter the content filter
  settings after a Purge-Index cycle.
- **Help**. Opens this help screen.

<!-- -->

- **Options.** Opens the Options window where settings such as default
  parameters can be edited. See [Smart Search:
  Options](https://docs.joomla.org/Help4.x:Smart_Search:_Options/en "Help4.x:Smart Search: Options/en")
  for further details.

## Quick Tips

- Smart Search was introduced in Joomla 3.0 but is not enabled by
  default in that version.
- If you are new to Smart Search then you should read the [Smart Search
  quickstart
  guide](https://docs.joomla.org/Smart_Search_quickstart_guide "Smart Search quickstart guide").
- If you run the indexer and get an "undefined null" error, then check
  the permissions on the Joomla `/logs` directory. The web server needs
  to have write permission to that directory for the indexer to work.

## Related information

- [Setting up automatic Smart Search
  indexing](https://docs.joomla.org/Setting_up_automatic_Smart_Search_indexing "Setting up automatic Smart Search indexing")
