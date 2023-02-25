<!-- Filename: Help4.x:Site_Modules:_Articles_-_Newsflash / Display title: Site Modules: Articles - Newsflash -->

## Description

The **Article Newsflash** module type will display a fixed number of
Articles from a specific Category or a set of Categories.

## How to Access

- Select **System **→** Manage Panel **→** Site Modules** from the
  Administrator menu. Then...
  - To create a new module: select the **New** button from the Toolbar.
    Then...
    - Select the required module type.
  - To edit an existing module:
    - Find the module in the list of installed modules and select the
      title link in the **Title** column.

## Screenshot

<img
src="https://docs.joomla.org/images/4/48/Help-4x-modules-site-module-manager-module-articles-newsflash-en.png"
decoding="async" data-file-width="800" data-file-height="813"
width="800" height="813"
alt="Help-4x-modules-site-module-manager-module-articles-newsflash-en.png" />

## Form Fields

- **Title:** Module must have a title

### Module Tab

**Left Panel**

- **Category:** Select Articles from a specific Category or a set of
  Categories. If no selection will show all categories as default.
- **Show Images:** (*Yes*/*No*). Display Article images.
- **Show Article title:** (*Yes*/*No*). Show/hide Article title.
- **Linked Titles:** (*Use Global*/*No*/*Yes*). Link the Article titles
  to Articles.
- **Header Level:** (*h1*/*h2*/*h3*/*h4*/*h5*). Select the desired HTML
  header level for the Article titles.
- **Show last separator:** (*Yes*/*No*). Show separator after last
  Article.
- '**Read more...' Link:** (*Show*/*Hide*). If set to Show, the 'Read
  more...' link will show if Main text has been provided for an Article.
- **Number of Articles:** The number of Articles to display within this
  module.
- **Featured Articles:** (Show/Hide/Only show Featured Articles).
  Show/Hide Articles designated as Featured.
- **Order Results:** (*Published Date*/*Created
  Date*/*Ordering*/*Random*). Select the order in which you want query
  results presented.
- **Direction:** (*Descending*/*Ascending*). The order the result will
  be displayed.

**Right Panel**

- **Title.** The title of the module. This is also the title displayed
  for the module depending on the *Show Title* Form Field

<!-- -->

- **Show Title.** (Show/Hide) Choose whether to show or hide the modules
  title in the front end. The title will be the one in the Form Field
  above.

<!-- -->

- **Position.** Choose the [module
  position](https://docs.joomla.org/Module_Position/en "Module Position/en")
  you wish this module to be displayed in. A custom module position can
  be entered for use with the [load position
  plugin](https://docs.joomla.org/How_do_you_put_a_module_inside_an_article%3F/en "How do you put a module inside an article?/en")
  or the position button can be pressed to select a module position from
  the template.

<!-- -->

- **Status**. The published status of the item.

<!-- -->

- **Access**. The [viewing Access
  Level](https://docs.joomla.org/Help4.x:Users:_Viewing_Access_Levels/en "Special:MyLanguage/Help4.x:Users: Viewing Access Levels/en")
  for this item.

<!-- -->

- **Module Ordering.** This shows a drop down of every module in the
  position that the current module is in. This is the order that the
  modules will display in when displayed on in the front end as well as
  in the
  [Modules](https://docs.joomla.org/Help4.x:Modules/en "Help4.x:Modules/en")
  page.

<!-- -->

- **Start Publishing**. Date and time to start publishing. Use this
  field if you want to enter content ahead of time and then have it
  published automatically at a future time.

<!-- -->

- **Finish Publishing**. Date and time to finish publishing. Use this
  field if you want to have content automatically changed to Unpublished
  state at a future time (for example, when it is no longer applicable).

<!-- -->

- **Language**. Item language.

<!-- -->

- **Note**. This is normally for the site administrator's use (for
  example, to document information about this item) and does not show in
  the Frontend of the site.

### Menu Assignment Tab

<img
src="https://docs.joomla.org/images/0/05/Help-4x-modules-manager-site-module-menu-assignment-tab-en.png"
decoding="async" data-file-width="600" data-file-height="595"
width="800" height="793"
alt="Help-4x-modules-manager-site-module-menu-assignment-tab-en.png" />

- **Module Assignment.** Select **On All Pages**, **No Pages**, **Only
  on the pages selected** or **On all pages except those selected** from
  the List.

<!-- -->

- **Menu Selection.** If the latter two options are selected a list will
  show all of the menu items. This allows you to assign modules to some
  but not all pages, and by selecting the menu links that you want the
  module associated with you can customize on what pages modules
  appear/don't appear. See [How do you assign a module to specific
  pages?](https://docs.joomla.org/How_do_you_assign_a_module_to_specific_pages%3F/en "How do you assign a module to specific pages?/en")
  for more information.

### Advanced Tab

<img
src="https://docs.joomla.org/images/6/63/Help-4x-modules-site-module-manager-module-articles-category-advanced-options-en.png"
decoding="async" data-file-width="600" data-file-height="286"
width="800" height="381"
alt="Help-4x-modules-site-module-manager-module-articles-category-advanced-options-en.png" />

- **Layout.** If you have defined one or more alternative layouts for a
  module either in the template or Joomla! Core, you can select the
  layout to use for this module.
- **Module Class.** A suffix applied to the CSS class of the Module.
  This allows you to create customized CSS styles that will apply just
  to this module. You would then modify the "user.css" file of your
  template to apply styling to this new class. Enter this parameter with
  a leading space to create a new CSS class for this module. Enter the
  parameter without a leading space to change the CSS class name for
  this module.
- **Caching.** Use Global/No Caching. Whether or not to cache the
  content of this Module. A setting of "Use Global" will use the Cache
  Settings from the Global Configuration screen.
- **Cache Time.** The number of seconds for which to cache the item
  locally. It can safely be left at the default.
- **Module Style.** You can use this option to override the templates
  style for its position.
- **Module Tag.** The HTML tag for the module to be placed in. By
  default this is a div tag but other HTML5 elements can also be used.
- **Bootstrap Size.** (Values 0 to 12) This allows you to choose the
  width of the module via the span element built into bootstrap.
- **Header Tag.** The HTML tag to use for the modules header or title.
  This can be an h1, h2, h3, h4, h5, h6 or a p tag. Note that you must
  use a module style (chrome) of html5 or add your custom module styles
  in \<mytemplate\>/html/modules.php.
- **Header Class.** Here you can add optional CSS classes to add to the
  modules header or title element.

### Permission Tabs

<img
src="https://docs.joomla.org/images/d/d8/Help-4x-modules-manager-admin-module-administrator-permissions-en.png"
decoding="async" data-file-width="600" data-file-height="374"
width="800" height="499"
alt="Help-4x-modules-manager-admin-module-administrator-permissions-en.png" />

To change the permissions, do the following.

- Select the **Group** by clicking its title located on right.
- Find the desired **Action**. Possible Actions are:
  - **Delete**. Users can delete the module.
  - **Edit**. Users can edit the module.
  - **Edit State**. User can change the published state and related
    information for the module.
- Select the desired permission for the action you wish to change.
  Possible settings are:
  - ***Inherited.*** Inherited for users in this Group from the Global
    Configuration, Article Manager Options, or Category permissions.
  - ***Allowed.*** Allowed for users in this Group. Note that, if this
    action is Denied at one of the higher levels, the Allowed permission
    here will not take effect. A Denied setting cannot be overridden.
  - ***Denied.*** Denied for users in this Group.
- Select **Save** in the **Toolbar**. When the screen refreshes, the
  Calculated Setting column will show the effective permission for this
  Group and Action.

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

- **Close**. Closes the current screen and returns to the previous
  screen without saving any modifications you may have made. This
  toolbar icon is not shown if you are creating a new item.

<!-- -->

- **Help**. Opens this help screen.

## Front End Screenshot

*Example Front End Site images are generic images using Joomla! core
installation supplied free Front End Templates. The actual view can
depend on the installed custom template used and the template's style
for those views on a Joomla! website.*

Articles Newsflash module shown:

<img
src="https://docs.joomla.org/images/8/82/Help-4x-module-manager-articles-newsflash-frontend-screenshot-en.png"
decoding="async" data-file-width="270" data-file-height="260"
width="270" height="260"
alt="Help-4x-module-manager-articles-newsflash-frontend-screenshot-en.png" />

The Module Type name for this Module is "mod_articles_newsflash". It is
related to the content component.
