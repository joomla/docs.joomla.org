<!-- Filename: Help4.x:Banners:_Categories / Display title: Banners: Categories -->

## Description

Used to view a list of existing Banner Categories, edit current and
create new Banner Categories. Note that Banner Categories are separate
from other Categories, such as for Articles, Contacts, News Feeds, and
Web Links. There must be at least one Banner Client and Banner Category
**before** a Banner can be created.

## How to Access

- Select **Components **→** Banners **→** Categories**

## Screenshot

<img
src="https://docs.joomla.org/images/5/59/Help-4x-Components-Banners-Categories-screen-en.png"
decoding="async" data-file-width="800" data-file-height="328"
width="800" height="328"
alt="Help-4x-Components-Banners-Categories-screen-en.png" />

## Column Headers

Click on the column heading to sort the list by that column's value.

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

- **Title**. The name of the item. For a Menu Item, the Title will
  display in the Menu. For an Article or Category, the Title may
  optionally be displayed on the web page. This entry is required. You
  can open the item for editing by clicking on the Title.

<!-- -->

- **Hits**. The number of times an item has been viewed.

<!-- -->

- **Access**. The [viewing Access
  Level](https://docs.joomla.org/Help4.x:Users:_Viewing_Access_Levels/en "Special:MyLanguage/Help4.x:Users: Viewing Access Levels/en")
  for this item.

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

### Filter Options

- ***- Select Status -*** Shows items that are Published and
  Unpublished. Does *not* show items that are Trashed or Archived.
  - ***Trashed:*** Shows only items that are Trashed. **Important
    Note:** To permanently delete items: Change the status of the items
    to Trashed. Change the Status filter to Trashed. At this point the
    trashed items will show and an icon called "Empty trash" will show
    in the toolbar. Select the desired trashed items and click on "Empty
    Trash" in the toolbar. The items will be permanently deleted.
  - ***Unpublished:*** Shows only items that are Unpublished.
  - ***Published:*** Shows only items that are Published.
  - ***Archived:*** Shows only items that are Archived.
  - ***All:*** Shows all items regardless of published status.

<!-- -->

- ***- Select Access -*** Show items with any viewing access level.
  - ***:*** Show items only with this viewing access level.

<!-- -->

- ***- Select Language -*** Shows all items regardless of language set.
  - ** Show items only for this language.
  - ***All*** Show items in which the language is set to All. This may
    be items that are not language specific, such as images.

<!-- -->

- ***- Select Tags -*** Show items with any (or no) tag(s).
  - ** Show items only with this tag.

<!-- -->

- ***- Select Max Levels -:*** Show all items regardless of assigned
  level.
  - ***1*** Only show items with this level in the hierarchy.
  - ***2-10*** Only show items whose category is in the top 2-10 levels
    in the category hierarchy.

### Number of Items to Display

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

- **New**. Opens the editing screen to create a new item.

<!-- -->

- **Actions:** Reveals a list of actions for selected Items. Check one
  or more Item checkboxes to activate the list.

<!-- -->

- **Rebuild.** Reconstructs and refreshes the relevant table. Normally,
  you do *not* need to rebuild this table. This function is provided in
  case the data in the table becomes corrupted.

<!-- -->

- **Options.** Opens the Options window where settings such as default
  parameters can be edited.

<!-- -->

- **Help**. Opens this help screen.

## Batch Process

The Batch Process allows a change in settings for a group of selected
items marked with a check-mark in the corresponding check-mark boxes. To
use: click on the link found below the table of items being viewed to
activate the drop down field area. Using the 'Batch' Toolbar button will
open a pop up window as shown below.

<img
src="https://docs.joomla.org/images/b/bf/Help-4x-colheader-batch-process-categories-en.png"
decoding="async" data-file-width="600" data-file-height="364"
width="600" height="364"
alt="Help-4x-colheader-batch-process-categories-en.png" />

You can change one value or all three values at one time.

***Note** - if you copy items to a new category, changes you have
selected from access level and language will be applied to the copies,
not the original.*

**How to Batch Process** a group of items:

- Select one or more items on the list by checking the desired category
  check boxes.
- Click the 'Batch' Toolbar button.
- Set one or more of the following values:
  - To change the **Access Levels**, select the desired new access level
    from the Set Access Level list box.
  - To change the **Language**, select the desired language from the Set
    Language list box.
  - To change the **Category**, select a category. To leave the category
    unchanged, use the default value of "Select".
    - To copy the items to a different category, select the desired
      category from the category list box and check the Copy option. In
      this case, the original items are unchanged and the copies are
      assigned to the new category and, if selected, the new access
      level and language.
    - To move the items to a different category, select the desired
      category from the category list box and check the Move option. In
      this case, the original items will be moved to a new category and,
      if selected, be assigned the new access level and language.
- When all of the settings are entered, click on Process to perform the
  changes. A message **"Batch process completed successfully."** will
  show.

Note that nothing will happen if you (a) don't have any items selected
or (b) have not selected an access level, language, or category. If you
wish to clear your entered selections, click on the Cancel button. This
will return all of the Batch controls to their default values. Note that
this does *not* uncheck the check boxes for the items.

## Quick Tips

- You must add at least one Banner Client and Banner Category *before*
  you can add a Banner.

## Related Information

- To create or edit Banners: [Banner -
  New/Edit](https://docs.joomla.org/Help4.x:Banners:_Edit/en "Help4.x:Banners: Edit/en")
- To work with Banner Clients: [Banner Client
  Manager](https://docs.joomla.org/Help4.x:Banners:_Clients/en "Help4.x:Banners: Clients/en")
