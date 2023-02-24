<!-- Filename: Help4.x:Menu_Item:_List_All_Tags / Display title: Menu Item: List All Tags -->

## Description

The **List All Tags** menu item type is Used to create a page containing
items with selected tags.

## How To Access

To create a new **List All Tags** menu item:

- Select **Menus **→** \[name of the menu\]** from the Administrator
  menu (for example, **Menus **→** Main Menu**). Then...
  - Select the New button in the Toolbar. Then...
  - Select the Menu Item Type Select button. <img
    src="https://docs.joomla.org/images/0/0a/Help-4x-Menu-Item-Type-Select-Button-en.png"
    decoding="async" data-file-width="96" data-file-height="45" width="96"
    height="45" alt="Help-4x-Menu-Item-Type-Select-Button-en.png" />
  - In the modal dialog select the Tags item to open a list and then
    select the **List All Tags** item.

To edit an existing List All Tags menu item:

- Select its Title in the Menus: Items list.

## Screenshot

<img
src="https://docs.joomla.org/images/thumb/f/f3/Help-4x-Menus-Menu-Item-Tags-Items-List-All-en.png/800px-Help-4x-Menus-Menu-Item-Tags-Items-List-All-en.png"
decoding="async"
srcset="https://docs.joomla.org/images/thumb/f/f3/Help-4x-Menus-Menu-Item-Tags-Items-List-All-en.png/1200px-Help-4x-Menus-Menu-Item-Tags-Items-List-All-en.png 1.5x, https://docs.joomla.org/images/f/f3/Help-4x-Menus-Menu-Item-Tags-Items-List-All-en.png 2x"
data-file-width="1440" data-file-height="1461" width="800" height="812"
alt="Help-4x-Menus-Menu-Item-Tags-Items-List-All-en.png" />

## Form Fields

- **Menu Title:** The title that will display for this menu item.

<!-- -->

- **Alias**. The internal name of the item. Normally, you can leave this
  blank and Joomla will fill in a default value Title in lower case and
  with dashes instead of spaces. [Learn
  more.](https://docs.joomla.org/Alias/en "Special:MyLanguage/Alias/en")

### Details Tab

**Left Panel**

- **Menu Item Type**. The Menu Item Type selected when this menu item
  was created. This can be one of the core menu item types or a menu
  item type provided by an installed extension.

<!-- -->

- **Parent**. The item (category, menu item, and so on) that is the
  parent of the item being edited.

<!-- -->

- **Language Filter**. (Use Global (All)/All/Current/English
  (en-GB)/...). Optionally filter the list of tags based on language.

<!-- -->

- **Link**. The system-generated link for this menu item. This field
  cannot be changed and is for information only.

<!-- -->

- **Target Window.** Select from the drop-down list.

<!-- -->

- **Template Style.** Select from the drop-down list.

**Right Panel**

- **Menu**. Shows which menu the link will appear in.

<!-- -->

- **Parent Item.** The parent menu item for this menu item. Used to
  determine whether a Menu Item is a top-level item or a submenu item.
  Select 'Menu Item Root' (the default value) if this is a top-level
  Menu Item. Otherwise, select the Menu Item that is this item's parent.

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

- **Start Publishing**. Date and time to start publishing. Use this
  field if you want to enter content ahead of time and then have it
  published automatically at a future time.

<!-- -->

- **Finish Publishing**. Date and time to finish publishing. Use this
  field if you want to have content automatically changed to Unpublished
  state at a future time (for example, when it is no longer applicable).

<!-- -->

- **Default Page**. If Yes, this menu item is the default or home page
  for the site. There must be exactly one menu item set as the default
  page. You can change the default page in two ways:
  1.  Click on the Home column of the desired menu item in the [Menus:
      Items](https://docs.joomla.org/Help4.x:Menus:_Items/en "Special:MyLanguage/Help4.x:Menus: Items/en")
      screen.
  2.  Open the menu item for the new default page and change the Default
      Page setting to Yes.

<!-- -->

- **Access**. The [viewing Access
  Level](https://docs.joomla.org/Help4.x:Users:_Viewing_Access_Levels/en "Special:MyLanguage/Help4.x:Users: Viewing Access Levels/en")
  for this item.

<!-- -->

- **Language**. Item language.

<!-- -->

- **Note**. This is normally for the site administrator's use (for
  example, to document information about this item) and does not show in
  the Frontend of the site.

### Options Tab

<img
src="https://docs.joomla.org/images/2/21/Help-4x-Menus-Menu-Item-Tags-Items-List-All-Tags-options-screenshot-en.png"
decoding="async" data-file-width="600" data-file-height="486"
width="600" height="486"
alt="Help-4x-Menus-Menu-Item-Tags-Items-List-All-Tags-options-screenshot-en.png" />

- **Number of Columns:** The number of columns to arrange the tags in.
  Note that this may not be the number displayed if 12 does not divide
  evenly into it because display is based on a 12 column grid.

<!-- -->

- **Heading Description.** Description to display at the heading of tags
  list.

<!-- -->

- **Show Heading Image.** (Use Global/Hide/Show). Show an image at the
  heading of the tags list.

<!-- -->

- **Heading Image File.** Select or upload the image to display in the
  heading of the tags list.

<!-- -->

- **Ordering:** (default). The column in which to sort displayed items
  in the table. The values are the same as the column heading names.

<!-- -->

- **Direction.** Sort order. Descending is highest to lowest. Ascending
  is lowest to highest.

<!-- -->

- **Item Images.** (Use Global(Hide),Hide, Show) Shows the firts image
  for each item in the list.

<!-- -->

- **Tag Description.** (Use Global(Hide)/Hide/Show). Show or hide the
  description for the tag (only used when a single tag is selected).

<!-- -->

- **Maximum Characters.** The maximum number of characters to display
  from the description in each tag.

<!-- -->

- **Hits**. The number of times an item has been viewed.

### Selection Options Tab

<img
src="https://docs.joomla.org/images/6/62/Help-4x-Menus-Menu-Item-Tags-Items-List-All-Tags-Selection-options-screenshot-en.png"
decoding="async" data-file-width="600" data-file-height="285"
width="600" height="285"
alt="Help-4x-Menus-Menu-Item-Tags-Items-List-All-Tags-Selection-options-screenshot-en.png" />

- **Maximum Items.** The maximum number of results to return.

<!-- -->

- **Filter Field.** The Filter Field creates a text field where a user
  can enter a field to be used to filter the articles shown in the list.
  An example of how this looks in the front-end layout is shown below.
  <img
  src="https://docs.joomla.org/images/d/d6/Help30-article-category-list-filter-field-en.png"
  decoding="async" data-file-width="175" data-file-height="32" width="175"
  height="32" alt="Help30-article-category-list-filter-field-en.png" />

The possible options for this (in the back-end menu item edit) are shown
below.

<img
src="https://docs.joomla.org/images/4/4f/Help30-article-category-list-filter-field-options-en.png"
decoding="async" data-file-width="226" data-file-height="183"
width="226" height="183"
alt="Help30-article-category-list-filter-field-options-en.png" />

- *Use Global:* Use the value from [Articles:
  Options](https://docs.joomla.org/Help4.x:Articles:_Options/en "Help4.x:Articles: Options/en").
  Only appears in Menu Item Type Options.
- *Hide:* Don't show a filter field.
- *Title:* Filter on article title.
- *Author:* Filter on the author's name.
- *Hits:* Filter on the number of article hits.

<!-- -->

- **Display Select.** (Use Global/Hide/Show) Whether to hide or show the
  Display \# control that allows the user to select the number of items
  to show in the list. An example of how it is shown in the Front End
  (website) view below.

<img
src="https://docs.joomla.org/images/0/09/Help30-article-category-list-display-select-en.png"
decoding="async" data-file-width="198" data-file-height="125"
width="198" height="125"
alt="Help30-article-category-list-display-select-en.png" />

If there are more items than this number, you can use the page
navigation buttons (Start, Prev, Next, End, and page numbers) to
navigate between pages. Note that if you have a large number of items,
it may be helpful to use the Filter options, located above the column
headings, to limit which items display.

- **Pagination.** Hide or Show Pagination support. Pagination provides
  page links at the bottom of the page that allow the User to navigate
  to additional pages. These are needed if the listed items will not fit
  on one page. An example is shown below.

<img src="https://docs.joomla.org/images/8/81/Help30-pagination-en.png"
decoding="async" data-file-width="299" data-file-height="29" width="299"
height="29" alt="Help30-pagination-en.png" />

The following options are available.

- *Use Global:* Use the default value from the component options screen.
- *Auto:* Pagination links shown if needed.
- *Show:* Pagination links shown if needed.
- *Hide:* Pagination links not shown. Note: In this case, Users will not
  be able to navigate to additional pages.

<!-- -->

- **Pagination Results.** Hide or Show the current page number and total
  pages (e.g., "Page 1 of 2") at the bottom of each page. Use Global
  will use the default value from the component options.

### Integration Tab

### Common Options

See [Menus: Edit/New
Item](https://docs.joomla.org/Help4.x:Menu_Item:_New_Item/en "Help4.x:Menu Item: New Item/en")
for help on fields common to all Menu Item types located in the
following Tabs:

- **Link Type**
- **Page Display**
- **Metadata**
- **Associations**
- **Module Assignment**

## Toolbar

At the top of the page you will see the toolbar shown in the Screenshot
above. The functions are:

- **Save.** Saves the menu item and stays in the current screen.

<!-- -->

- **Save & Close**. Saves the menu item and closes the current screen.

<!-- -->

- **Save & New**. Saves the menu item and keeps the editing screen open
  and ready to create another menu item.

<!-- -->

- **Cancel**. Closes the current screen and returns to the previous
  screen without saving any modifications you may have made.

<!-- -->

- **Help**. Opens this help screen.

## Front End Screenshot

*Example Front End Site images are generic images using Joomla! core
installation supplied free Front End Templates. The actual view can
depend on the installed custom template used and the template's style
for those views on a Joomla! website.* Tags List Layout: <img
src="https://docs.joomla.org/images/c/c9/Help-4x-Menus-Menu-Tags-List-All-front-end-screenshot-en.png"
decoding="async" data-file-width="580" data-file-height="450"
width="580" height="450"
alt="Help-4x-Menus-Menu-Tags-List-All-front-end-screenshot-en.png" />

## Related Information

|                                                                                                                                                                            |                                                                           |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| Related Help Screens                                                                                                                                                       | Description                                                               |
| [Menus Menu Item Tags Items Compact List](https://docs.joomla.org/Help4.x:Menu_Item:_Compact_List_of_Tagged_Items/en "Help4.x:Menu Item: Compact List of Tagged Items/en") | Used to create a 'Compact List of Tagged Items' page per tag(s) selected. |
| [Menus Menu Item Tags Items List](https://docs.joomla.org/Help4.x:Menu_Item:_Tagged_Items/en "Help4.x:Menu Item: Tagged Items/en")                                         | Used to create a 'Tagged List of Items' page per tag(s) selected.         |
