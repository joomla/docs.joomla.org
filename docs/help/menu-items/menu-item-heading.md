<!-- Filename: Help4.x:Menu_Item:_Heading / Display title: Menu Item: Heading -->

## Description

The **Menu Heading** menu item type is used to separate menu links with
text or images in a menu. For example, to give a title to a group of
links or allow a short description before each link or groups of links.
See the [Front End Example](#Front_End_Screenshot) screenshot below.

## How To Access

To create a new Menu Heading menu item:

- Select **Menus **→** \[name of the menu\]** from the Administrator
  menu (for example, **Menus **→** Main Menu**). Then...
  - Select the **New** button in the Toolbar. Then...
  - Select the Menu Item Type Select button. <img
    src="https://docs.joomla.org/images/0/0a/Help-4x-Menu-Item-Type-Select-Button-en.png"
    decoding="async" data-file-width="96" data-file-height="45" width="96"
    height="45" alt="Help-4x-Menu-Item-Type-Select-Button-en.png" />
  - In the modal dialog select the System Links item to open a list and
    then select the **Menu Heading** item.

To edit an existing Menu Heading item type:

- Select its Title in Menus: Items list.

## Screenshot

<img
src="https://docs.joomla.org/images/c/c3/Help-4x-Menus-Menu-Item-Heading-screenshot-en.png"
decoding="async" data-file-width="800" data-file-height="417"
width="800" height="417"
alt="Help-4x-Menus-Menu-Item-Heading-screenshot-en.png" />

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

### Link Type Tab

<img
src="https://docs.joomla.org/images/0/04/Help-4x-Menus-Menu-Item-Text-Separator-link-type-options-en.png"
decoding="async" data-file-width="600" data-file-height="400"
width="600" height="400"
alt="Help-4x-Menus-Menu-Item-Text-Separator-link-type-options-en.png" />

- **Link Title Attribute**. An optional, custom description for the
  title attribute of the menu hyperlink.

<!-- -->

- **Link CSS Style**. An optional, custom style to apply to the menu
  hyperlink.

<!-- -->

- **Link Image**. Select an image to use with 'Menu Title'. Use 'Add
  Menu Title' set to 'No' to show just image.
- **Image Class.** ...

<!-- -->

- **Add Menu Title**. If optional image is selected, shows a 'Menu
  Title' next to image. Default is 'Yes'.

<!-- -->

- **Display in Menu**. Select 'No' if you want to exclude this menu item
  from displaying in the menu. Note any submenu items will also be
  hidden.

### Module Assignments Tab

See [Menus: Edit/New
Item](https://docs.joomla.org/Help4.x:Menu_Item:_New_Item/en "Help4.x:Menu Item: New Item/en")
for help on fields common to all Menu Item types located in the
following Tabs:

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
  screen without saving any modifications you may have made. Or

<!-- -->

- **Close**. Closes the current screen and returns to the previous
  screen without saving any modifications you may have made.

<!-- -->

- **Help**. Opens this help screen.

## Front End Screenshot

<img
src="https://docs.joomla.org/images/6/66/Help-4x-Menus-Menu-Item-Heading-front-end-screenshot-en.png"
decoding="async" data-file-width="230" data-file-height="232"
width="230" height="232"
alt="Help-4x-Menus-Menu-Item-Heading-front-end-screenshot-en.png" />

*Example Front End Site images are generic images using Joomla! core
installation supplied free Front End Templates. The actual view can
depend on the installed custom template used and the template's style
for those views on a Joomla! website.*

## Quick Tips

- It is possible to use an image as a Text Separator. Since a Menu Title
  is required, to use only image as a separator, the Menu Title can be a
  "space".
