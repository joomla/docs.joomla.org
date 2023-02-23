<!-- Filename: Help4.x:Banners / Display title: Banners -->

## Description

Banners are blocks of content containing advertising information. Each
banner has a Client, the person paying for the information, and a Track
record, the number of times the banner has been selected. A site may
have several banners in different locations. The Banners screen shows a
list of existing Banners with links to edit current and create new
Banners. There must be at least one Banner Client and one Banner
Category **before** a Banner can be created.

## How to Access

- Select **Components **→** Banners **→** Banners** from the
  Administrator menu.
- Or Select a numbered button in the [Banner Categories
  Manager](https://docs.joomla.org/Help4.x:Banners:_Categories/en "Help4.x:Banners: Categories/en")
  or the [Banner Clients
  Manager](https://docs.joomla.org/Help4.x:Banners:_Clients/en "Help4.x:Banners: Clients/en")
  pages.

## Screenshot

<img
src="https://docs.joomla.org/images/4/49/Help-4x-components-banner-manager-banners-en.png"
decoding="async" data-file-width="800" data-file-height="331"
width="800" height="331"
alt="Help-4x-components-banner-manager-banners-en.png" />

## Column Headers

In the table containing Banners the different columns are listed below.
Click on the column heading on the banner manager screen to sort the
list by that column's value.

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

- **Status**. The published status of the item.

<!-- -->

- **Name.** The name of the Banner. Editing Option - 'click' on the name
  to open the Banner for editing.

<!-- -->

- **Pinned**. *(Yes or No)* Whether or not the Banner is "pinned". If
  one or more Banners in a Category are designated "sticky," they will
  take priority over Banners that are not sticky.

*For example, if two Banners in a Category are pinned and a third Banner
is not pinned, the third Banner will not display if the Banner display
module setting is "Pinned, Randomise" or "Pinned, Ordering." Only the
two pinned Banners will display. If the pinned banners have a fixed
number of impressions, once those impressions are used up, the pinned
banners will no longer display, and the non-pinned banners will begin
displaying automatically.*

- **Client.** The Client for this Banner. Clients are entered using the
  Banner Client Manager.

<!-- -->

- **Impressions.** The Impression count is the number of times the
  Banner has been displayed on a page. The first number in this column
  is the actual number of Impressions so far, and the second number is
  how many Impressions were purchased by the client.

<!-- -->

- **Clicks.** The first number is the total number of clicks that have
  been made on the Banner since the counter was reset. The second number
  is what percentage of the time user clicked on the banner when it was
  displayed.

<!-- -->

- **Language**. Item language.

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
  Configuration](https://docs.joomla.org/Help4.x:Site_Global_Configuration/en#defaultlistlimit "Help4.x:Site Global Configuration/en").

**Filter Options**

Near the top of the page you will see the filter bar shown in the
Screenshot above. The functions are:

- **Select Status**. Select from Trashed / Unpublished / Published /
  Archived / All.

<!-- -->

- **Select Category**. Select from the list of available categories.

<!-- -->

- **Select Client**. Select from the list of available clients.

<!-- -->

- **Select Language**. Select from the list of available languages, if
  the site manages more than 1 language.

<!-- -->

- **Select Max Levels**. Select from the list of available levels.

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

- **New**. Opens the editing screen to create a new banner.

<!-- -->

- **Actions:** Reveals a list of actions for selected Items. Check one
  or more Item checkboxes to activate the list.

<!-- -->

- - **Publish**. Makes the selected banner available to visitors to your
    website.

- - **Unpublish.** Makes the selected banner unavailable to visitors to
    your website.

- - **Archive**. Changes the status of the selected banner to indicate
    that they are archived. Archived banner can be moved back to the
    published or unpublished state by selecting 'Archived' in the
    'Select Status' filter and changing the status of the banner.

- - **Check-In**. Checks-in the selected banner. Works with one or
    multiple banner selected.

- - **Trash**. Changes the status of the selected banner to indicate
    that they are trashed.Trashed banner can still be recovered by
    selecting 'Trashed' in the 'Select Status' filter and changing the
    status of the articles to Published or Unpublished as preferred.To
    permanently delete trashed banner, select 'Trashed' in the 'Select
    Status' filter, select the banner to be permanently deleted, then
    click the 'Empty Trash' toolbar icon.

- - **Batch**. Batch processes the selected banner. Works with one or
    multiple items selected.

<!-- -->

- **Options.** Opens the Options window where settings such as default
  parameters can be edited.

<!-- -->

- **Help**. Opens this help screen.

See [Banner Manager
Options](https://docs.joomla.org/Help4.x:Banners:_Options/en "Help4.x:Banners: Options/en")
for more information.

## Quick Tips

- You must add at least one [Banner
  Client](https://docs.joomla.org/Help4.x:Banners:_Clients/en "Help4.x:Banners: Clients/en")
  and [Banner
  Category](https://docs.joomla.org/Help4.x:Banners:_Categories/en "Help4.x:Banners: Categories/en")
  *before* you can [add a
  Banner](https://docs.joomla.org/Help4.x:Banners:_Edit/en "Help4.x:Banners: Edit/en").

## Related Information

|                                                                                                                                              |                                                                                                                                                                                                                                                                                                                           |
|----------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Related Help Screens                                                                                                                         | Description                                                                                                                                                                                                                                                                                                               |
| [Banners: Edit](https://docs.joomla.org/Help4.x:Banners:_Edit/en "Help4.x:Banners: Edit/en")                                                 | Used to add or edit banners which can be displayed on your Joomla! website. Remember to create at least one <a href="https://docs.joomla.org/Help4.x:Components_Banners_Clients/en"                                                                                                                                       
                                                                                                                                                class="mw-redirect" title="Help4.x:Components Banners Clients/en">Banner                                                                                                                                                                                                                                                   
                                                                                                                                                Client</a> and one<a                                                                                                                                                                                                                                                                                                       
                                                                                                                                                href="https://docs.joomla.org/Help4.x:Components_Banners_Categories/en"                                                                                                                                                                                                                                                    
                                                                                                                                                class="mw-redirect"                                                                                                                                                                                                                                                                                                        
                                                                                                                                                title="Help4.x:Components Banners Categories/en">Banner Category</a> before creating any Banners.                                                                                                                                                                                                                          |
| [Banners: Options](https://docs.joomla.org/Help4.x:Banners:_Options/en "Help4.x:Banners: Options/en")                                        | Global options (configuration) for Banner Clients.                                                                                                                                                                                                                                                                        |
| [Banners: Categories](https://docs.joomla.org/Help4.x:Banners:_Categories/en "Help4.x:Banners: Categories/en")                               | Used to view a list of existing Banner Categories, edit current and create new Banner Categories. Note that Banner Categories are separate from other Categories, such as for Articles, Contacts, News Feeds, and Web Links. There must be at least one Banner Client and Banner Category before a Banner can be created. |
| [Banners: New or Edit Category](https://docs.joomla.org/Help4.x:Banners:_New_or_Edit_Category/en "Help4.x:Banners: New or Edit Category/en") | This is where you can add a new Banner Category or edit an existing one. Note that you need to create at least one Banner Category before you can create a Banner. Also, Banner Categories are separate from other types of Categories, such as those for Articles, Contacts, and News Feeds.                             |
| [Banners: Clients](https://docs.joomla.org/Help4.x:Banners:_Clients/en "Help4.x:Banners: Clients/en")                                        | The Banner Client Manager is where you can edit existing Banner Clients or create new ones. Note that you must have at least one Banner Client and one Banner Category defined before you can add your first Banner.                                                                                                      |
| [Banners: New or Edit Client](https://docs.joomla.org/Help4.x:Banners:_New_or_Edit_Client/en "Help4.x:Banners: New or Edit Client/en")       | This is where you add a new Banner Client or edit an existing one. Note that you need to create at least one Banner Client before you can create a Banner.                                                                                                                                                                |
| [Banners: Tracks](https://docs.joomla.org/Help4.x:Banners:_Tracks/en "Help4.x:Banners: Tracks/en")                                           | Used to view a list of existing Banner Tracking information.                                                                                                                                                                                                                                                              |
