<!-- Filename: Help4.x:Extensions_Module_Manager_Edit / Display title: Extensions Module Manager Edit -->

## Description

The Extensions Module Manager Edit (New) allows editing an existing
Module or creating a new Module by Module type.

## How to Access

-   Select **System **→** Manage Panel **→** Site Modules** from the
    Administrator menu. Or...
-   Select **System **→** Manage Panel **→** Administrator Modules** from
    the Administrator menu. Then...
    -   Select the '**New'** button in the Toolbar to create a new Module.
        Or...
    -   Select a Module title in the **Title** column to edit that module.

For a New module there is a list of all Site or Administrator installed
modules to choose from:

<img
src="https://docs.joomla.org/images/f/fb/Help-4x-extensions-module-manager-new-en.png"
decoding="async" data-file-width="800" data-file-height="487"
width="800" height="487"
alt="Help-4x-extensions-module-manager-new-en.png" />

Select one to move on to the edit screen.

## Screenshot

The Module Tab of a Module Edit screen is dependent on Module Type. The
Breadcrumbs site module is illustrated here. For other Modules please
see **[Related information](#Related_Information)** below for links to
specific module types.

<img
src="https://docs.joomla.org/images/1/1d/Help-4x-extensions-module-manager-edit-en.png"
decoding="async" data-file-width="800" data-file-height="694"
width="800" height="694"
alt="Help-4x-extensions-module-manager-edit-en.png" />

## Form Fields

-   **Title**. The Title for this item. This may or may not display on the
    page, depending on the parameter values you choose.

### Module Tab

**Left Panel**

The content of the left panel depends on module type and is not covered
here.

**Right Panel**

The right panel is common to all modules.

-   **Show Title.** Whether or not to show the Module's Title.

<!-- -->

-   **Position.** Choose the [module
    position](https://docs.joomla.org/Module_Position/en 'Module Position/en')
    you wish this module to be displayed in. A custom module position can
    be entered for use with the [load position
    plugin](https://docs.joomla.org/How_do_you_put_a_module_inside_an_article%3F/en 'How do you put a module inside an article?/en')
    or the position button can be pressed to select a module position from
    the template.

<!-- -->

-   **Status**. The published status of this item.
    -   _Published:_ Item is visible in the Frontend of the site.
    -   _Unpublished:_ Item is will not be visible to guests in the Frontend
        of the site. It may be visible to logged in users who have edit
        state permission for the item.
    -   _Archived:_ Item will no longer show on blog or list menu items.
    -   _Trashed:_ Item is deleted from the site but still in the database.
        It can be permanently deleted from the database with the Empty Trash
        function in Toolbar (see also [Deleting an
        Article](https://docs.joomla.org/Deleting_an_Article/en 'Special:MyLanguage/Deleting an Article/en')).

<!-- -->

-   **Start Publishing**. Date and time to start publishing. Use this
    field if you want to enter content ahead of time and then have it
    published automatically at a future time.

<!-- -->

-   **Finish Publishing**. Date and time to finish publishing. Use this
    field if you want to have content automatically changed to Unpublished
    state at a future time (for example, when it is no longer applicable).

<!-- -->

-   **Access**. Select the viewing access level for this item from the
    list box. The access levels that display will depend on the what has
    been set up for this site in [Users → Access
    Levels](https://docs.joomla.org/Help40:Users:_Viewing_Access_Levels/en 'Special:MyLanguage/Help40:Users: Viewing Access Levels/en').
    Note that access levels are separate from ACL permissions. Access
    levels control what a user can see. ACL permissions control what
    actions a user can perform.

<!-- -->

-   **Ordering.** You can change the order of an item within a list as
    follows:
    -   If the list Filter Options include a Position filter select the
        desired Position. This will limit the list to items that are
        assigned to that Position.
    -   Select the Ordering icon <img
        src="https://docs.joomla.org/images/e/ee/Help30-Ordering-colheader-icon.png"
        decoding="async" data-file-width="12" data-file-height="23" width="12"
        height="23" alt="Help30-Ordering-colheader-icon.png" /> in the Table
        heading to make it the active ordering item. The ordering icons in
        each row will change from light grey to dark grey and the pointer
        will change to a drag arrow on hover.
    -   Select one of the Ordering icons <img
        src="https://docs.joomla.org/images/8/87/Help30-Ordering-colheader-grab-bar-icon.png"
        decoding="async" data-file-width="10" data-file-height="21" width="10"
        height="21" alt="Help30-Ordering-colheader-grab-bar-icon.png" /> and
        drag it up or down to change the position of that row in the list.
        The items will display in the new order within the Position.

<!-- -->

-   **Language**. Select the language for this item. If you are not using
    the multi-language feature of Joomla, keep the default of 'All'.

<!-- -->

-   **Note**. This is normally for the site administrator's use (for
    example, to document information about this item) and does not show in
    the Frontend of the site.

### Menu Assignment Tab

This tab view contains all the menu items configured in your Joomla!
website. This will allow selection of where to show a module by content
page associated with menu item.

<img
src="https://docs.joomla.org/images/6/66/Help-4x-Module-Manager-Edit-menu-assignment-en.png"
decoding="async" data-file-width="600" data-file-height="588"
width="600" height="588"
alt="Help-4x-Module-Manager-Edit-menu-assignment-en.png" />

#### Menu Assignment Tab - Module Assignment

-   **Module Assignment**. Click for drop down choice of module assignment

<!-- -->

-   **On all pages**. Module will show on all pages in the selected module
    position.
-   **No pages**. Module **will not show** on any pages in the selected
    module position.
-   **Only on the pages selected**. Module will show only on pages in the
    selected module position as selected by menu item type(title). See
    **Menu Selection** below.
-   **On all pages except those selected**. Module will show on all pages
    in the selected module position, except those selected by menu item
    type(title). See **Menu Selection** below.

#### Menu Assignment Tab - Menu Selection

-   **Menu Selection**. This will only appear if the **Only on pages
    selected** or **On all pages except those selected** is chosen as the
    **Module Assignment** as detailed above.

To apply the module to a menu item's corresponding web page(title),
check the box next to the menu item.

-   Click the Select: _All_ or _None_ to toggle the selection of menu
    items.
-   Click the Expand: _All_ or _None_ to toggle the tree view for
    selection of menu items.

**Note**: If a checkbox is grayed out and cannot be checked then it
could be because the menu item is in use by another user. You can see if
this is the case by going to the [menu manager screen for the
menu](https://docs.joomla.org/Help4.x:Menus:_Items/en 'Help4.x:Menus: Items/en')
concerned. If there is a padlock symbol next to the menu item then it is
currently in use by another user.

### Advanced Tab

<img
src="https://docs.joomla.org/images/4/4b/Help-4x-Module-Manager-Edit-advanced-en.png"
decoding="async" data-file-width="600" data-file-height="289"
width="600" height="289"
alt="Help-4x-Module-Manager-Edit-advanced-en.png" />

### Permissions Tab

<img
src="https://docs.joomla.org/images/4/40/Help-4x-Module-Manager-Edit-permissions-en.png"
decoding="async" data-file-width="600" data-file-height="413"
width="600" height="413"
alt="Help-4x-Module-Manager-Edit-permissions-en.png" />

## Toolbar

At the top of the page you will see the toolbar shown in the Screenshot
above. The functions are:

-   **Save.** Saves the user and stays in the current screen.

<!-- -->

-   **Save & Close**. Saves the user and closes the current screen.

<!-- -->

-   **Save & New**. Saves the user and keeps the editing screen open and
    ready to create another user.

<!-- -->

-   **Save as Copy**. Saves your changes to a copy of the current user.
    Does not affect the current user. This toolbar icon is not shown if
    you are creating a new user.

<!-- -->

-   **Cancel**. Closes the current screen and returns to the previous
    screen without saving any modifications you may have made. Or

<!-- -->

-   **Close**. Closes the current screen and returns to the previous
    screen without saving any modifications you may have made.

<!-- -->

-   **Help**. Opens this help screen.
