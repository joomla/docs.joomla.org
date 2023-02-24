<!-- Filename: Help4.x:Menu_Item:_Alias / Display title: Menu Item: Alias -->

## Description

The **Menu Item Alias** menu type is used to create a link from one Menu
Item to another Menu Item. This link can be to another Menu's, Menu Item
or within the same Menu.

## How To Access

To create a new Menu Item Alias:

- Select **Menus **→** \[name of the menu\]** from the Administrator
  menu (for example, **Menus **→** Main Menu**). Then...
  - Select the New button in the Toolbar. Then...
  - Select the Menu Item Type Select button. <img
    src="https://docs.joomla.org/images/thumb/0/0a/Help-4x-Menu-Item-Type-Select-Button-en.png/64px-Help-4x-Menu-Item-Type-Select-Button-en.png"
    decoding="async"
    srcset="https://docs.joomla.org/images/0/0a/Help-4x-Menu-Item-Type-Select-Button-en.png 1.5x"
    data-file-width="96" data-file-height="45" width="64" height="30"
    alt="Help-4x-Menu-Item-Type-Select-Button-en.png" />
  - In the modal dialog select the System Links item to open a list and
    then select the **Menu Item Alias** item.

To edit an existing Menu Item Alias:

- Select its Title in the Menus: Items list.

## Screenshot

<img
src="https://docs.joomla.org/images/a/a7/Help-4x-Menus-Menu-Item-Alias-screen-en.png"
decoding="async" data-file-width="800" data-file-height="419"
width="800" height="419"
alt="Help-4x-Menus-Menu-Item-Alias-screen-en.png" />

## Form Fields

- **Menu Title:** The title that will display for this menu item.

<!-- -->

- **Alias**. The internal name of the item. Normally, you can leave this
  blank and Joomla will fill in a default value Title in lower case and
  with dashes instead of spaces. [Learn
  more.](https://docs.joomla.org/Alias/en "Special:MyLanguage/Alias/en")

**Left Panel**

- **Menu Item Type**. The Menu Item Type selected when this menu item
  was created. This can be one of the core menu item types or a menu
  item type provided by an installed extension.

<!-- -->

- **Menu Item**. Select a Menu Item name to point Alias Menu Item name
  at. The drop down list is sectioned by Menu Names, with a list of Menu
  Item names under each Menu Name.

<!-- -->

- **Link**. The system-generated link for this menu item. This field
  cannot be changed and is for information only.
- **Use Redirection.** The Template Style field is not used if this
  options is set to Yes.

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

## Quick Tips

- Leave the alias field empty if the menu item alias and the menu item
  linked to by the alias have the same parent.

<!-- -->

- A Main Menu Item Alias could link to an Article Menu's 'Some Menu
  Type' Menu Item. By using Module Assignments, a possible use would be
  to replace the Main Menu with the Article Menu when the Alias Menu
  Item is clicked. A return to Main Menu when another Alias Menu Item is
  clicked pointed back to a Menu Item in the Main Menu.

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

- **Cancel**. Closes the current screen and returns to the previous
  screen without saving any modifications you may have made. Or

<!-- -->

- **Close**. Closes the current screen and returns to the previous
  screen without saving any modifications you may have made. This
  toolbar icon is not shown if you are creating a new item.

<!-- -->

- **Help**. Opens this help screen.
