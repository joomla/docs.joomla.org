<!-- Filename: Help4.x:Extensions_Module_Manager_Edit / Display title: Extensions Module Manager Edit -->

## Description

The Extensions Module Manager Edit (New) allows editing an existing
Module or creating a new Module by Module type.

## How to Access

- Select **System **→** Manage Panel **→** Site Modules** from the
  Administrator menu. Or...
- Select **System **→** Manage Panel **→** Administrator Modules** from
  the Administrator menu. Then...
  - Select the '**New'** button in the Toolbar to create a new Module.
    Or...
  - Select a Module title in the **Title** column to edit that module.

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

- **Title**. The Title for this item. This may or may not display on the
  page, depending on the parameter values you choose.

### Module Tab

**Left Panel**

The content of the left panel depends on module type and is not covered
here.

**Right Panel**

The right panel is common to all modules.

- **Show Title.** Whether or not to show the Module's Title.

<!-- -->

- **Position.** Choose the [module
  position](https://docs.joomla.org/Module_Position/en "Module Position/en")
  you wish this module to be displayed in. A custom module position can
  be entered for use with the [load position
  plugin](https://docs.joomla.org/How_do_you_put_a_module_inside_an_article%3F/en "How do you put a module inside an article?/en")
  or the position button can be pressed to select a module position from
  the template.

<!-- -->

- **Status**. The published status of this item.
  - *Published:* Item is visible in the Frontend of the site.
  - *Unpublished:* Item is will not be visible to guests in the Frontend
    of the site. It may be visible to logged in users who have edit
    state permission for the item.
  - *Archived:* Item will no longer show on blog or list menu items.
  - *Trashed:* Item is deleted from the site but still in the database.
    It can be permanently deleted from the database with the Empty Trash
    function in Toolbar (see also [Deleting an
    Article](https://docs.joomla.org/Deleting_an_Article/en "Special:MyLanguage/Deleting an Article/en")).

<!-- -->

- **Start Publishing**. Date and time to start publishing. Use this
  field if you want to enter content ahead of time and then have it
  published automatically at a future time.

<!-- -->

- **Finish Publishing**. Date and time to finish publishing. Use this
  field if you want to have content automatically changed to Unpublished
  state at a future time (for example, when it is no longer applicable).

<!-- -->

- **Access**. Select the viewing access level for this item from the
  list box. The access levels that display will depend on the what has
  been set up for this site in [Users → Access
  Levels](https://docs.joomla.org/Help40:Users:_Viewing_Access_Levels/en "Special:MyLanguage/Help40:Users: Viewing Access Levels/en").
  Note that access levels are separate from ACL permissions. Access
  levels control what a user can see. ACL permissions control what
  actions a user can perform.

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

- **Language**. Select the language for this item. If you are not using
  the multi-language feature of Joomla, keep the default of 'All'.

<!-- -->

- **Note**. This is normally for the site administrator's use (for
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

- **Module Assignment**. Click for drop down choice of module assignment

<!-- -->

- **On all pages**. Module will show on all pages in the selected module
  position.
- **No pages**. Module **will not show** on any pages in the selected
  module position.
- **Only on the pages selected**. Module will show only on pages in the
  selected module position as selected by menu item type(title). See
  **Menu Selection** below.
- **On all pages except those selected**. Module will show on all pages
  in the selected module position, except those selected by menu item
  type(title). See **Menu Selection** below.

#### Menu Assignment Tab - Menu Selection

- **Menu Selection**. This will only appear if the **Only on pages
  selected** or **On all pages except those selected** is chosen as the
  **Module Assignment** as detailed above.

To apply the module to a menu item's corresponding web page(title),
check the box next to the menu item.

- Click the Select: *All* or *None* to toggle the selection of menu
  items.
- Click the Expand: *All* or *None* to toggle the tree view for
  selection of menu items.

**Note**: If a checkbox is grayed out and cannot be checked then it
could be because the menu item is in use by another user. You can see if
this is the case by going to the [menu manager screen for the
menu](https://docs.joomla.org/Help4.x:Menus:_Items/en "Help4.x:Menus: Items/en")
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

- **Save.** Saves the user and stays in the current screen.

<!-- -->

- **Save & Close**. Saves the user and closes the current screen.

<!-- -->

- **Save & New**. Saves the user and keeps the editing screen open and
  ready to create another user.

<!-- -->

- **Save as Copy**. Saves your changes to a copy of the current user.
  Does not affect the current user. This toolbar icon is not shown if
  you are creating a new user.

<!-- -->

- **Cancel**. Closes the current screen and returns to the previous
  screen without saving any modifications you may have made. Or

<!-- -->

- **Close**. Closes the current screen and returns to the previous
  screen without saving any modifications you may have made.

<!-- -->

- **Help**. Opens this help screen.

## Related Information

<table class="wikitable">

<tbody>
<tr class="header">
<th>Related Help Screens</th>
<th>Description</th>
</tr>
&#10;<tr class="odd">
<td><a
href="https://docs.joomla.org/Help4.x:Site_Modules:_Articles_-_Archived/en"
title="Help4.x:Site Modules: Articles - Archived/en">Site Modules:
Articles - Archived</a></td>
<td>This module shows a list of the calendar months containing archived
articles. After you have changed the status of an article to archived,
this list will be automatically generated.</td>
</tr>
<tr class="even">
<td><a
href="https://docs.joomla.org/Help4.x:Site_Modules:_Articles_-_Categories/en"
title="Help4.x:Site Modules: Articles - Categories/en">Site Modules:
Articles - Categories</a></td>
<td>This module displays a list of categories from one parent
category.</td>
</tr>
<tr class="odd">
<td><a
href="https://docs.joomla.org/Help4.x:Site_Modules:_Articles_-_Category/en"
title="Help4.x:Site Modules: Articles - Category/en">Site Modules:
Articles - Category</a></td>
<td>This module displays a list of published articles from one or more
categories.</td>
</tr>
<tr class="even">
<td><a
href="https://docs.joomla.org/Help4.x:Site_Modules:_Articles_-_Newsflash/en"
title="Help4.x:Site Modules: Articles - Newsflash/en">Site Modules:
Articles - Newsflash</a></td>
<td>The Article Newsflash Module will display a fixed number of Articles
from a specific Category or a set of Categories.</td>
</tr>
<tr class="odd">
<td><a
href="https://docs.joomla.org/Help4.x:Site_Modules:_Articles_-_Related/en"
title="Help4.x:Site Modules: Articles - Related/en">Site Modules:
Articles -Related</a></td>
<td>This Module shows a list of Articles that are related to the current
Article being viewed by the user (for example, a Article Layout or a
Blog or List layout where the user has clicked on an Article link).
Articles are considered to be related to each other if they share at
least one Keyword in the Article's Metadata Information. Article
Keywords are entered in the Metadata Information section of the <a
href="https://docs.joomla.org/Help4.x:Articles:_Edit#Publishing_Tab.2Fen"
title="Help4.x:Articles: Edit">Article Manager - New/Edit</a>
screen.</td>
</tr>
<tr class="even">
<td><a href="https://docs.joomla.org/Help4.x:Site_Modules:_Banners/en"
title="Help4.x:Site Modules: Banners/en">SiteModules:Banners</a></td>
<td>The Banner Module displays the active Banners from the
Component.</td>
</tr>
<tr class="odd">
<td><a
href="https://docs.joomla.org/Help4.x:Site_Modules:_Breadcrumbs/en"
title="Help4.x:Site Modules: Breadcrumbs/en">Site Modules:
Breadcrumbs</a></td>
<td>This Module shows a set of navigation links that illustrates where
you are inside the web site and allows you to navigate back.</td>
</tr>
<tr class="even">
<td><a href="https://docs.joomla.org/Help4.x:Site_Modules:_Custom/en"
title="Help4.x:Site Modules: Custom/en">Site Modules: Custom</a></td>
<td>This allows you to create a Module that contains any valid HTML
code. There are many cases where you might want to put free-form HTML
inside a web page. For example, you might want to create an HTML Image
Map or you might want to copy HTML code from PayPal, Amazon, or some
other site.</td>
</tr>
<tr class="odd">
<td><a
href="https://docs.joomla.org/Help4.x:Site_Modules:_Feed_Display/en"
title="Help4.x:Site Modules: Feed Display/en">Site Modules: Feed
Display</a></td>
<td>This Module shows an RSS News Feed from a website. This Module is
not related to the News Feeds Component or the News Feeds Layouts and is
an alternative that allows a feed to display in a Module position.</td>
</tr>
<tr class="even">
<td><a href="https://docs.joomla.org/Help4.x:Site_Modules:_Footer/en"
title="Help4.x:Site Modules: Footer/en">Site Modules: Footer</a></td>
<td>This Module displays the web site copyright and Joomla! license
information.</td>
</tr>
<tr class="odd">
<td><a
href="https://docs.joomla.org/Help4.x:Site_Modules:_Language_Switcher/en"
title="Help4.x:Site Modules: Language Switcher/en">Site Modules:
Language Switcher</a></td>
<td>This module allows you to switch between available Content
languages. Selecting a language will take you to the home page for that
language.</td>
</tr>
<tr class="even">
<td><a
href="https://docs.joomla.org/Help4.x:Site_Modules:_Articles_-_Latest/en"
title="Help4.x:Site Modules: Articles - Latest/en">Site Modules:
Articles - Latest</a></td>
<td>This Module shows a list of the most recently published
Articles.</td>
</tr>
<tr class="odd">
<td><a
href="https://docs.joomla.org/Help4.x:Site_Modules:_Latest_Users/en"
title="Help4.x:Site Modules: Latest Users/en">Site Modules: Latest
Users</a></td>
<td>The Latest Users module will display the latest users which
registred at the website.</td>
</tr>
<tr class="even">
<td><a href="https://docs.joomla.org/Help4.x:Site_Modules:_Login/en"
title="Help4.x:Site Modules: Login/en">Site Modules: Login</a></td>
<td>This Module displays a username and password Login form. It also
displays a link to retrieve a forgotten password. If User registration
is enabled in the User Settings of the Global Configuration screen, then
the link "Create an Account" will be shown to invite Users to
self-register.</td>
</tr>
<tr class="odd">
<td><a href="https://docs.joomla.org/Help4.x:Site_Modules:_Menu/en"
title="Help4.x:Site Modules: Menu/en">Site Modules: Menu</a></td>
<td>This Module allows you to place your Menus on the page. Every
Joomla! website has at least one Menu that is created in the <a
href="https://docs.joomla.org/Help4.x:Menus/en"
title="Help4.x:Menus/en">Menu Manager</a> screen. The Menu Module allows
you place all or part of the selected Menu at the desired position and
on the desired web pages.</td>
</tr>
<tr class="even">
<td><a
href="https://docs.joomla.org/Help4.x:Site_Modules:_Articles_-_Most_Read/en"
title="Help4.x:Site Modules: Articles - Most Read/en">Site Modules:
Articles - Most Read</a></td>
<td>This Module displays a list of Articles with the highest hit
counts.</td>
</tr>
<tr class="odd">
<td><a
href="https://docs.joomla.org/Help4.x:Site_Modules:_Random_Image/en"
title="Help4.x:Site Modules: Random Image/en">Site Modules: Random
Image</a></td>
<td>This Module displays a random image from a directory.</td>
</tr>
<tr class="even">
<td><a
href="https://docs.joomla.org/index.php?title=Help4.x:Extensions_Module_Manager_Search/en&amp;action=edit&amp;redlink=1"
class="new"
title="Help4.x:Extensions Module Manager Search/en (page does not exist)">Extensions
Module Manager Search</a></td>
<td>This Module displays a Search entry field where the user can type in
a phrase and press 'Enter' to search the web site.</td>
</tr>
<tr class="odd">
<td><a
href="https://docs.joomla.org/Help4.x:Site_Modules:_Smart_Search/en"
title="Help4.x:Site Modules: Smart Search/en">Site Modules: Smart
Search</a></td>
<td>Smart Search is an enhanced site search.</td>
</tr>
<tr class="even">
<td><a
href="https://docs.joomla.org/Help4.x:Site_Modules:_Statistics/en"
title="Help4.x:Site Modules: Statistics/en">Site Modules:
Statistics</a></td>
<td>The Statistics Module shows information about your server
installation together with statistics on the Web site users, number of
Articles in your database and the number of Web links you provide.</td>
</tr>
<tr class="odd">
<td><a
href="https://docs.joomla.org/Help4.x:Site_Modules:_Syndication_Feeds/en"
title="Help4.x:Site Modules: Syndication Feeds/en">Site Modules:
Syndication Feeds</a></td>
<td>This Module creates a RSS Feed link for the page. This allows a User
to create a newsfeed for the current page. An example is shown
below.</td>
</tr>
<tr class="even">
<td><a
href="https://docs.joomla.org/Help4.x:Site_Modules:_Tags_-_Popular/en"
title="Help4.x:Site Modules: Tags - Popular/en">Site Modules: Tags -
Popular</a></td>
<td>Displays tags used on a site in a tag cloud or list.</td>
</tr>
<tr class="odd">
<td><a
href="https://docs.joomla.org/Help4.x:Site_Modules:_Tags_-_Similar/en"
title="Help4.x:Site Modules: Tags - Similar/en">Site Modules: Tags -
Similar</a></td>
<td>Displays links to other items with similar tags.</td>
</tr>
<tr class="even">
<td><a
href="https://docs.joomla.org/index.php?title=Help4.x:Extensions_Module_Manager_Weblinks/en&amp;action=edit&amp;redlink=1"
class="new"
title="Help4.x:Extensions Module Manager Weblinks/en (page does not exist)">Extensions
Module Manager Weblinks</a></td>
<td>The Weblinks module will display weblinks from within the Weblinks
component.</td>
</tr>
<tr class="odd">
<td><a
href="https://docs.joomla.org/Help4.x:Site_Modules:_Who%27s_Online/en"
title="Help4.x:Site Modules: Who&#39;s Online/en">Site Modules: Who's
Online</a></td>
<td>The "Who's Online" module displays information about users that are
visiting your site at a particular moment.</td>
</tr>
<tr class="even">
<td><a href="https://docs.joomla.org/Help4.x:Site_Modules:_Wrapper/en"
title="Help4.x:Site Modules: Wrapper/en">Site Modules: Wrapper</a></td>
<td>The wrapper module allows you to display an external website in a
module. The functionality is the same to that of the 'iFrame Wrapper'
you can add as a menu item. If the page to which the wrapper is linked
is too big, bars will be shown below and to the right of the wrapper,
allowing you to "navigate" the page.</td>
</tr>
<tr class="odd">
<td><a href="https://docs.joomla.org/Help4.x:Modules/en"
title="Help4.x:Modules/en">Modules</a></td>
<td>The Module Manager is where you add and edit Joomla! Modules. In
Joomla!, Modules are used to display content and/or media around the
main content.
<p><strong>Module Facts:</strong> All Joomla! websites require at least
1 Menu Module All Other Module Types are Optional. (Examples: News,
Banner, Latest News) Every Menu is accompanied by a menu module.
(Example mod_mainmenu) Multiple occurrences of similar module types.</p>
<p><strong>Some Modules are linked to components.</strong> For example,
each Menu Module is related to one Menu component. To define a Menu in
Joomla!, you need to create the Menu and Menu Items using the Menus
screens and then create the Module for the Menu using this screen. Other
Modules, such as Custom and Breadcrumbs, do not depend on any other
content. See <a href="https://docs.joomla.org/screen.modules.edit.15"
title="Special:MyLanguage/screen.modules.edit.15">Module Manager -
New/Edit</a> for information about the different Module Types. The
Joomla! installation is accompanied with 20 module types, additional 3rd
party modules can be located at the <a
href="http://extensions.joomla.org/" class="external text"
target="_blank" rel="noreferrer noopener">JED</a>.</p></td>
</tr>
</tbody>
</table>
