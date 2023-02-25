<!-- Filename: Help4.x:Menus:_Items / Display title: Menus: Items -->

## Description

The Menus: Items page lists the menu items contained in a menu created
using the [Menu
Manager](https://docs.joomla.org/Help4.x:Menus/en "Help4.x:Menus/en").
The Title bar shows the name of the selected menu or *All Menu Items* if
that list is selected.

## How to access

- Select **Menus **→** All Menu Items** from the Administrator menu.
  Or...
- Select **Menus **→** \[*Menu Name*\]** from the Administrator menu to
  select items for a specific menu.

## Screenshot

<img
src="https://docs.joomla.org/images/c/cd/Help-4x-menus-menu-manager-menu-items-en.png"
decoding="async" data-file-width="800" data-file-height="737"
width="800" height="737"
alt="Help-4x-menus-menu-manager-menu-items-en.png" />

## Column Headers

- **Checkbox**. Check this box to select one or more items. To select
  all items, check the box in the column heading. After one or more
  boxes are checked, click a toolbar button to take an action on the
  selected item or items. Many toolbar actions, such as Publish and
  Unpublish, can work with multiple items. Others, such as Edit, only
  work on one item at a time. If multiple items are checked and you
  press Edit, the first item will be opened for editing.

<!-- -->

- **Status**. The published status of the item.

<!-- -->

- **Title**. The name of the item. For a Menu Item, the Title will
  display in the Menu. For an Article or Category, the Title may
  optionally be displayed on the web page. This entry is required. You
  can open the item for editing by clicking on the Title.

<!-- -->

- **Menu**. Shows which menu the link will appear in.

<!-- -->

- **Home**. The yellow star icon designates which menu item is the
  current Home Page. Clicking on an empty Star icon will designate that
  menu item as the new Home Page.

<!-- -->

- **Access**. The [viewing Access
  Level](https://docs.joomla.org/Help4.x:Users:_Viewing_Access_Levels/en "Special:MyLanguage/Help4.x:Users: Viewing Access Levels/en")
  for this item.

<!-- -->

- **Association:** Shows which menu item this item is associated.

<!-- -->

- **Language**. Item language.

<!-- -->

- **ID**. This is a unique identification number for this item assigned
  automatically by Joomla. It is used to identify the item internally,
  and you cannot change this number. When creating a new item, this
  field displays "0" until you save the new entry, at which point a new
  ID is assigned to it.

## List Filters

Near the top of the page you will see the filter bar shown in the
Screenshot above. The functions are:

- **Site/Administrator**. The client where the menu is used.
- **Select Menu**. A field to select the menu you want to search.
- **Search**. Enter part of the menu's name and press the Search to find
  matching names. Press **x** or Clear to clear the search field and
  restore the list of menus.

<!-- -->

- **Ordering:** (default). The column in which to sort displayed items
  in the table. The values are the same as the column heading names.

**Filter Options:**

- **Select Status**. Select from Trashed / Unpublished / Published /
  Archived / All.

<!-- -->

- **Select Access**. Select from the list of available viewing access
  levels.

<!-- -->

- **Select Language**. Select from the list of available languages, if
  the site manages more than 1 language.

<!-- -->

- **Select Max Levels**. Select from the list of available levels.
- **Select Component.** Select from the list of components used by the
  menu items

**Filter by Parent Menu Item**. Lets you show only items of a menu item.

- **- Select Parent Menu Item -:** Show all menu items.
- **\<your menu item\>:** Show items only for this menu item.

## Toolbar

At the top of the page you will see the toolbar shown in the
[Screenshot](#Screenshot) above. The functions are:

- **New**. Opens the editing screen to create a new menu item.

<!-- -->

- **Actions:** Reveals a list of actions for selected Items. Check one
  or more Item checkboxes to activate the list.

<!-- -->

- **Publish**. Makes the selected menu items available to visitors to
  your website.

<!-- -->

- **Unpublish.** Makes the selected menu items unavailable to visitors
  to your website.

<!-- -->

- **Check-In**. Checks-in the selected menu items. Works with one or
  multiple menu items selected.

<!-- -->

- **Trash**. Changes the status of the selected menu items to indicate
  that they are trashed.Trashed menu items can still be recovered by
  selecting 'Trashed' in the 'Select Status' filter and changing the
  status of the articles to Published or Unpublished as preferred.To
  permanently delete trashed menu items, select 'Trashed' in the 'Select
  Status' filter, select the menu items to be permanently deleted, then
  click the 'Empty Trash' toolbar icon.

<!-- -->

- **Batch**. Batch processes the selected menu items. Works with one or
  multiple items selected.

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
items. To use: click on the Batch button found on top of the table of
items being viewed to activate the drop down field area.

<img
src="https://docs.joomla.org/images/f/ff/Help-4x-colheader-batch-process-view-link-en.png"
decoding="async" data-file-width="600" data-file-height="363"
width="600" height="363"
alt="Help-4x-colheader-batch-process-view-link-en.png" />

***\<Item Type\>** refers to the page name of items.*

You can change one value or all four values at one time.

***Note** - if you copy items to a new category, changes you have
selected from access level and language will be applied to the copies,
not the original.*

**How to Batch Process** a group of items:

1.  Select one or more items on the list by selecting the desired
    checkbox(es).
2.  Set one or more of the following values:
    - To change the **Access Levels**, select the desired new access
      level from the Set Access Level list box.
    - To change the **Language**, select the desired language from the
      Set Language list box.
    - To add a **Tag**, select the desired tag from the Add Tag list
      box.
    - To change the **Category**, select a category. To leave the
      category unchanged, use the default value of "Select".

    1.  To copy the items to a different category, select the desired
        category from the category list box and check the Copy option.
        In this case, the original items are unchanged and the copies
        are assigned to the new category and, if selected, the new
        access level and language.
    2.  To move the items to a different category, select the desired
        category from the category list box and check the Move option.
        In this case, the original items will be moved to a new category
        and, if selected, be assigned the new access level and language.
3.  When all of the settings are entered, click on Process to perform
    the changes. A message **"Batch process completed successfully."**
    will show.

Note that nothing will happen if you (a) don't have any items selected
or (b) have not selected an access level, language, or category.

If you wish to clear your entered selections, click on the Clear button.
This will return all of the Batch controls to their default values. Note
that this does *not* uncheck the check boxes for the items.

## Quick Tips

- Select an item and click on the *Home* button to set your Home page.
- Set different filter options to only show some of the menu items.

## Related information

- [Menu
  Manager](https://docs.joomla.org/Help4.x:Menus/en "Help4.x:Menus/en")
