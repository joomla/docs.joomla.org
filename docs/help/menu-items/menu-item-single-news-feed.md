<!-- Filename: Help4.x:Menu_Item:_Single_News_Feed / Display title: Menu Item: Single News Feed -->

## Description

The **Single News Feed** menu item type is used to show a single RSS
News Feed created in the [News
Feeds](https://docs.joomla.org/Help4.x:News_Feeds:_Edit "Help4.x:News Feeds: Edit")
component.

## How To Access

To create a new Single News Feed menu item:

- Select **Menus **→** \[name of the menu\]** from the Administrator
  menu (for example, **Menus **→** Main Menu**). Then...
  - Select the New button in the Toolbar. Then...
  - Select the Menu Item Type Select button. <img
    src="https://docs.joomla.org/images/0/0a/Help-4x-Menu-Item-Type-Select-Button-en.png"
    decoding="async" data-file-width="96" data-file-height="45" width="96"
    height="45" alt="Help-4x-Menu-Item-Type-Select-Button-en.png" />
  - In the modal dialog select the News Feeds item to open a list and
    then select the **Single News Feed** item.

To edit an existing Single News Feeds menu item:

- Select its Title in Menus: Items list.

## Screenshot

<img
src="https://docs.joomla.org/images/2/2c/Help-4x-Menus-Menu-Item-News-Feed-Single-News-Feed-screen-en.png"
decoding="async" data-file-width="800" data-file-height="812"
width="800" height="812"
alt="Help-4x-Menus-Menu-Item-News-Feed-Single-News-Feed-screen-en.png" />

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

- **Feed.** The News Feed for this page. Select one of the available
  News Feeds from the dropdown menu. News Feeds are added using the
  [News Feeds:
  New](https://docs.joomla.org/Help4.x:News_Feeds:_Edit "Help4.x:News Feeds: Edit")
  page.

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

### Feed Display Options Tab

<img
src="https://docs.joomla.org/images/1/1e/Help-4x-Menus-Menu-Item-News-Feeds-Single-feed-display-options-parameters-en.png"
decoding="async" data-file-width="600" data-file-height="306"
width="600" height="306"
alt="Help-4x-Menus-Menu-Item-News-Feeds-Single-feed-display-options-parameters-en.png" />

In addition to Yes/No or Hide/Show, these options allow the "Use Global"
setting. This uses the default value from the [News Feeds
Options](https://docs.joomla.org/Help4.x:News_Feed:_Options/en "Help4.x:News Feed: Options/en")
screen.

- **Feed Image**. (Use Global/Hide/Show) Show or hide the image of News
  Feeds.

<!-- -->

- **Feed Description.** (Use Global/Hide/Show) Hide or Show the
  description text of the News Feed.

<!-- -->

- **Feed Content**. (Use Global/Hide/Show) Show or hide the content of
  News Feeds.
- **Show Tags**. Show the tags for a news feed.
- **Characters count**. Number of characters to show if Feed Content
  from News Feeds is set to show.
- **Feed display order**. (Use Global/Most recent first/Oldest first)
  Select the feed display order, most recent first, oldest first, or
  Global, the setting in News Feeds Options.

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

At the top of the page you will see the toolbar shown in the
[Screenshot](#Screenshot) above. The functions are:

- **Save**. Saves the item and stays in the current screen.

<!-- -->

- **Save & Close**. Saves the item and closes the current screen.

<!-- -->

- **Save & New**. Saves the item and keeps the editing screen open and
  ready to create another item.

<!-- -->

- **Save as Copy**. Saves your changes to a copy of the current item.
  Does not affect the current item. This toolbar icon is not shown if
  you are creating a new item.

<!-- -->

- **Cancel**. Closes the current screen and returns to the previous
  screen without saving any modifications you may have made. Or

<!-- -->

- **Close**. Closes the current screen and returns to the previous
  screen without saving any modifications you may have made. This
  toolbar icon is not shown if you are creating a new item.

<!-- -->

- **Help**. Opens this help screen.

## Quick Tips

- You can set the News Feed options in two places.
  - In [News Feeds
    Options](https://docs.joomla.org/Help4.x:News_Feed:_Options "Help4.x:News Feed: Options")
    screen you can set the default value for all categories.
  - In [News Feeds: New/Edit
    Category](https://docs.joomla.org/Help4.x:News_Feeds:_Edit_Category "Help4.x:News Feeds: Edit Category")
    you can set a value for a specific category. If this is set, it
    overrides the default value.

## Related Information

- Categories are created using [News Feeds: New/Edit
  Category](https://docs.joomla.org/Help4.x:News_Feeds:_Edit_Category "Help4.x:News Feeds: Edit Category").

|                                                                                                                                                                               |                                                                                                                                                                                                                                                                                              |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Related Help Screens                                                                                                                                                          | Description                                                                                                                                                                                                                                                                                  |
| [News Feeds: Categories](https://docs.joomla.org/Help4.x:News_Feeds:_Categories/en "Help4.x:News Feeds: Categories/en")                                                       | News Feed Categories allow you to categorize different website feeds entering your site for better organization.                                                                                                                                                                             |
| [News Feeds: Edit Category](https://docs.joomla.org/Help4.x:News_Feeds:_Edit_Category/en "Help4.x:News Feeds: Edit Category/en")                                              | The New/Edit page for the News Feeds Category Manager is a create/edit screen that allows website administrators to create or edit News Feed Categories. Categories allow a broken down structure of News Feeds. *You must have at least one category before you can create any News Feeds!* |
| [News Feeds](https://docs.joomla.org/Help4.x:News_Feeds/en "Help4.x:News Feeds/en")                                                                                           | The News Feed Manager screen allows you to add News Feeds from other sites to your Joomla! site. You can add links to these feeds for users by creating News Feed layouts in [News Feeds: Edit](https://docs.joomla.org/Help4.x:News_Feeds:_Edit "Help4.x:News Feeds: Edit").                |
| [News Feeds: Edit](https://docs.joomla.org/Help4.x:News_Feeds:_Edit/en "Help4.x:News Feeds: Edit/en")                                                                         | This is where you add a new News Feed or edit an existing one. Note that you need to create at least one [News Feeds Category](https://docs.joomla.org/Help4.x:News_Feeds:_Categories "Help4.x:News Feeds: Categories") before you can create your first News Feed.                          |
| [Menu Item: List News Feeds in a Category](https://docs.joomla.org/Help4.x:Menu_Item:_List_News_Feeds_in_a_Category/en "Help4.x:Menu Item: List News Feeds in a Category/en") | Used to show a list of all RSS News Feeds in a Category. Depending on the selected options for this layout, you can include subcategories of a News Feed category.                                                                                                                           |
| <span class="mw-selflink selflink">Menu Item: Single News Feed</span>                                                                                                         | Used to show a single RSS News Feed. The News Feed is selected from the list of News Feeds created in [News Feeds: Edit](https://docs.joomla.org/Help4.x:News_Feeds:_Edit "Help4.x:News Feeds: Edit").                                                                                       |
