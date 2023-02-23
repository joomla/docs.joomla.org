<!-- Filename: Help4.x:Smart_Search:_Content_Maps / Display title: Smart Search: Content Maps -->

## Description

This screen shows the content maps currently in the Smart Search index.
Content maps allow you to cross-reference your indexed content
(articles, etc) to related meta information such as the category in
which it resides. Each content item that is indexed by Smart Search is
added to one or more content maps that can be used as filters when
searching the index.

Content maps are split into two parts:

- Map Group: These are super-containers for a particular type of
  information. For example, a Map Group could be "Type", "Category",
  "Event", "Language" or "Author".
- Content Map: Content maps are the actual values for the meta
  information in a particular Map Group. The Content Maps are, for
  example, the names of the categories or authors.

These Map Groups and Content Maps are what make up the advanced search
panel available on the front-end. For each Map Group there can be a
drop-down select list and the Content Maps are added as values to the
respective list. More advanced site builders can override the default
layouts and use multi-select lists or checkboxes instead.

It's important to note that Map Groups and Content Maps from different
content types are merged into the one list. A Joomla article in a
category called "News" and a news feed or contact in a category named
the same are mapped to the same Content Map in the same Map Group. This
is a little like tagging different types of content with the same label.
The effect is that your site visitor does not have to know how your
content is classified in order to set the correct filters to find it.

The content maps screen shows all the Map Groups within the Smart Search
index together with a number indicating the number of Content Maps
within that Map Group and the items within a Contrent Map. Clicking on a
Map Groups number allows you to see the Content Map within that Map
Group together with the number of content items that belong to that
Content Map. A content item can belong to multiple Content Maps within a
Map Group as well as to multiple Map Groups.

## How to access

- Select **Components **→** Smart Search **→** Content Maps** from the
  Administrator menu.

## Screenshot

<img
src="https://docs.joomla.org/images/e/e5/Help-4x-Components-Finder-ContentMaps-subscreen-en.png"
decoding="async" data-file-width="800" data-file-height="411"
width="800" height="411"
alt="Help-4x-Components-Finder-ContentMaps-subscreen-en.png" />

## Column Headers

In the table containing the indexed content for your Joomla! site you
will see different columns. Here you can read what they mean and what is
displayed in each column.

<img
src="https://docs.joomla.org/images/9/9f/Help31-Components-Smart-Search-Content-Maps-columns-en.png"
decoding="async" data-file-width="1030" data-file-height="32"
width="1030" height="32"
alt="Help31-Components-Smart-Search-Content-Maps-columns-en.png" />

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
- **Title**. The title of the Map Group or Content Map.
- **Maps**. The number of maps inside the Map Group. Selecting the
  number wil show the maps inside the Map Group.
- **Published Indexed Content**. The number of published content items
  in the Map Group. Selecting the number will show the published content
  items inside the Map Group.
- **Unpublished Indexed Content**. The number of unpublished content
  items in the Map Group. Selecting the number will show the unpublished
  content items inside the Map Group.

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

- **Filter by published status.** Choose whether to show only published
  or unpublished maps by selecting the appropriate item from the
  drop-down list. The published state of the maps in Smart Search is
  independent of their published state elsewhere.
- **Filter by Map Group**. Select the Map Group from the drop-down list.
  - Authors
  - Categories
  - Languages
  - Types
- **Filter by Max Levels (Category Level).** Lets you show only items
  whose category is at or above the specified level in the category
  hierarchy.
  - ***- Select Max Levels -:*** Show all items regardless of level of
    their assigned category.
  - ***1:*** Only show items whose category is at the top level in the
    category hierarchy (in other words, with categories whose parent
    category is "- No Parent -".)
  - ***2-10:*** Only show items whose category is in the top 2-10 levels
    in the category hierarchy.

## Toolbar

At the top of the page you will see the toolbar shown in the
[Screenshot](#Screenshot) above. The functions are:

- **Actions:** Reveals a list of actions for selected Items. Check one
  or more Item checkboxes to activate the list.

<!-- -->

- **Publish**. Makes the selected Map Groups or Content Maps available
  to visitors to your website.

<!-- -->

- **Unpublish.** Makes the selected Map Groups or Content Maps
  unavailable to visitors to your website. An unpublished Map Group will
  not be displayed as a select list in the front-end. An unpublished
  Content Map will not appear in the select list for the Map Group in
  which it occurs. Re-indexing does not change the published state of
  Map Groups or Content Maps.

<!-- -->

- **Statistics:** Shows some basic statistics on Smart Search.

<!-- -->

- **Delete:** Deletes the selected Map Groups or Content Maps. Works
  with one or multiple Map Groups or Content Maps selected. You can
  recover deleted Map Groups or Content Maps by running the Smart Search
  indexer again.

<!-- -->

- **Options.** Opens the Options window where settings such as default
  parameters can be edited.

<!-- -->

- **Help**. Opens this help screen. See [Smart Search:
  Options](https://docs.joomla.org/Help4.x:Smart_Search:_Options/en "Help4.x:Smart Search: Options/en")
  for further details.

## Quick Tips

- Smart Search was introduced in Joomla 3.0 but is not enabled by
  default in that version.
- If you are new to Smart Search then you should read the [Smart Search
  Quickstart
  Guide](https://docs.joomla.org/Smart_Search_quickstart_guide "Smart Search quickstart guide").

## Related information
