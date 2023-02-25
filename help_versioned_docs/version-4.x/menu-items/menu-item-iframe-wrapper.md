<!-- Filename: Help4.x:Menu_Item:_Iframe_Wrapper / Display title: Menu Item: Iframe Wrapper -->

## Description

The Iframe Wrapper menu item type is used to create a page with embedded
content using an
<a href="https://en.wikipedia.org/wiki/HTML_element#Frames"
class="extiw" title="wikipedia:HTML element">IFrame</a> with control of
iframe size, width and height.

## How To Access

To create a new IFrame Wrapper Menu Item:

- Select **Menus **→** \[name of the menu\]** from the drop-down menu on
  the back-end of your Joomla! installation (for example,
  **Menus **→** Main Menu**).
- Click the New Toolbar button to create a new menu item.
- Click the Menu Item Type Select button <img
  src="https://docs.joomla.org/images/0/0a/Help-4x-Menu-Item-Type-Select-Button-en.png"
  decoding="async" data-file-width="96" data-file-height="45" width="96"
  height="45" alt="Help-4x-Menu-Item-Type-Select-Button-en.png" /> and
  then click the Iframe Wrapper Menu Item link under Wrapper.

To edit an existing IFrame Wrapper Menu Item, click its Title in [Menu
Manager: Menu
Items](https://docs.joomla.org/Help4.x:Menus:_Items/en "Help4.x:Menus: Items/en").

## Screenshot

<img
src="https://docs.joomla.org/images/4/4a/Help-4x-Menus-Menu-Item-Wrapper-en.png"
decoding="async" data-file-width="800" data-file-height="812"
width="800" height="812" alt="Help-4x-Menus-Menu-Item-Wrapper-en.png" />

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

- **URL**. Field to enter a URL (web page address.

Generally, it is a good idea to always add http:// or https:// when
providing a URL. There is a [Auto
add](https://docs.joomla.org/Help4.x:Menu_Item:_Iframe_Wrapper/en#Advanced_Tab "Help4.x:Menu Item: Iframe Wrapper/en")
function to prefix a URL with http:// unless it detects the prefix in
the URL. *NOTE - Use the relative path to a web page address on Joomla
installation. If your Joomla! website is `http://www.example.com`, then
use ` /html_docs/example.html` omitting `http://www.example.com` and
make sure the 'Auto add' function is disabled.*

- **Link**. The system-generated link for this menu item. This field
  cannot be changed and is for information only.

<!-- -->

- **Target Window.** Select from the drop-down list.

<!-- -->

- **Template Style.** Select from the drop-down list.

**Right Panel**

- **Menu:** (*Main Menu*/*User Menu*/...). Shows which menu a link will
  appear in.
- **Parent Item:** (*Menu Item Root*/...). Select a parent item.
- **Ordering:** Ordering will be available after saving
- **Status:** (*Published*/*Unpublished*/*Trashed*). Set publication
  status.
- **Default Page:** (*Yes*/*No*). Sets this menu item as the default or
  home page of the site. You must have a default page set at all times.
- **Access:** (*Guest*/*Public*/*Registered*/*Special*/*Customer Access
  Level (Example)*). The access level group that is allowed to view this
  item.
- **Language:** (*All*/*English (en-GB)*). Assign a language to this
  menu item
- **Note:** An optional note to display in the Menu Manager.

### Scroll Bar Parameters Tab

<img
src="https://docs.joomla.org/images/7/7e/Help-4x-Menus-Menu-Item-Wrapper-Scroll-Bar-parameters-screenshot-en.png"
decoding="async" data-file-width="600" data-file-height="255"
width="600" height="255"
alt="Help-4x-Menus-Menu-Item-Wrapper-Scroll-Bar-parameters-screenshot-en.png" />

- **Scroll Bars:** *(No/Yes/Auto)* Whether or not to include horizontal
  and vertical scroll bars, no or yes. Auto will add the scroll bars
  automatically when needed because of embedded page size.

<!-- -->

- **Width:** Width of the IFrame Window. Enter in a number of pixels or
  enter in a percentage (%). For example, "550" means 550 pixels. "75%"
  means 75% of the page width.

<!-- -->

- **Height**. Height of the IFrame Window. Enter in a number of pixels
  or enter in a percentage (%). For example, "550" means 550 pixels.
  "75%" means 75% of the page height.

### Advanced Tab

<img
src="https://docs.joomla.org/images/8/80/Help-4x-Menus-Menu-Item-Wrapper-Advanced-options-screenshot-en.png"
decoding="async" data-file-width="600" data-file-height="223"
width="600" height="223"
alt="Help-4x-Menus-Menu-Item-Wrapper-Advanced-options-screenshot-en.png" />

- **Auto height**. Automatically set height to height of external page.
  *Note* - this will only work if the external page is on the **same
  domain**. For example, `http://www.example.com` the external html must
  be in the `example.com` root file structure. Sub domains will not
  work, as a sub domain is considered a separate domain.

<!-- -->

- **Auto add**. Automatically prefix web address with http://. This
  feature will automatically detect and not prefix a URL with http:// or
  https:// already used in the URL.

<!-- -->

- **Frame border**. Add a border around the IFrame window.

### Link Type Tab

See [Menus: New
Item](https://docs.joomla.org/Help4.x:Menu_Item:_New_Item/en "Help4.x:Menu Item: New Item/en")
page.

(ToDo - make chunk)

### Page Display

See [Menus: New
Item](https://docs.joomla.org/Help4.x:Menu_Item:_New_Item/en "Help4.x:Menu Item: New Item/en")
page.

(ToDo - make chunk)

### Metadata Tab

See [Menus: New
Item](https://docs.joomla.org/Help4.x:Menu_Item:_New_Item/en "Help4.x:Menu Item: New Item/en")
page.

(ToDo - make chunk)

### Associations Tab

If the Language in the Details tab is not set to All a list of languages
will appear here to allow selection of alternative languages in which to
display this page.

<img
src="https://docs.joomla.org/images/4/41/Help-4x-Menus-Menu-Item-Wrapper-Associations-screenshot-en.png"
decoding="async" data-file-width="600" data-file-height="252"
width="600" height="252"
alt="Help-4x-Menus-Menu-Item-Wrapper-Associations-screenshot-en.png" />

### Module Assignment Tab

See [Menu Item Manager: New Menu
Item](https://docs.joomla.org/Help4.x:Menu_Item:_New_Item/en "Help4.x:Menu Item: New Item/en")
for help on fields in **[Module
Assignments](https://docs.joomla.org/Help4.x:Menu_Item:_New_Item/en#Module_Assignment_Tab "Help4.x:Menu Item: New Item/en")**
for this Menu Item.

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

- **Save as Copy**. Saves your changes to a copy of the current menu
  item. Does not affect the current menu item. This toolbar icon is not
  shown if you are creating a new menu item.

<!-- -->

- **Cancel**. Closes the current screen and returns to the previous
  screen without saving any modifications you may have made.

<!-- -->

- **Help**. Opens this help screen.
