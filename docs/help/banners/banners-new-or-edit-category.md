<!-- Filename: Help4.x:Banners:_New_or_Edit_Category / Display title: Banners: New or Edit Category -->

## Description

This is where you can add a new Banner Category or edit an existing one.
Note that you need to create at least one Banner Category before you can
create a Banner. Also, Banner Categories are separate from other types
of Categories, such as those for Articles, Contacts, and News Feeds.

## How to Access

Navigate to the [Banner Category
Manager](https://docs.joomla.org/Help4.x:Banners:_Categories/en "Help4.x:Banners: Categories/en"),
**Components **→** Banners **→** Categories**

- **New**. Click on **New** icon in toolbar.
- **Edit**. To edit an existing Banner Category, click on the
  **Category's Name** in the table of categories.

## Screenshot

<img
src="https://docs.joomla.org/images/f/f8/Help-4x-Components-Banners-Categories-Edit-screen-en.png"
decoding="async" data-file-width="800" data-file-height="651"
width="800" height="651"
alt="Help-4x-Components-Banners-Categories-Edit-screen-en.png" />

## Form Fields

- **Title.** The Title for this item. This may or may not display on the
  page, depending on the parameter values you choose.

<!-- -->

- **Alias**. The internal name of the item. Normally, you can leave this
  blank and Joomla will fill in a default value Title in lower case and
  with dashes instead of spaces. [Learn
  more.](https://docs.joomla.org/Alias/en "Special:MyLanguage/Alias/en")

### Details Tab

**Left panel**

- **Description**. The description for the item. Category, Subcategory
  and Web Link descriptions may be shown on web pages, depending on the
  parameter settings. These descriptions are entered using the same
  editor that is used for Articles.

**Right Panel**

- **Parent**. The item (category, menu item, and so on) that is the
  parent of the item being edited.

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

- **Access**. Select the viewing access level for this item from the
  list box. The access levels that display will depend on the what has
  been set up for this site in [Users → Access
  Levels](https://docs.joomla.org/Help40:Users:_Viewing_Access_Levels/en "Special:MyLanguage/Help40:Users: Viewing Access Levels/en").
  Note that access levels are separate from ACL permissions. Access
  levels control what a user can see. ACL permissions control what
  actions a user can perform.

<!-- -->

- **Language**. Select the language for this item. If you are not using
  the multi-language feature of Joomla, keep the default of 'All'.

<!-- -->

- **Tags**. Assign tags to content items. You may select a tag from the
  pre-defined list or enter a new tag by typing the name in the field
  and pressing enter.

<!-- -->

- **Note**. This is normally for the site administrator's use (for
  example, to document information about this item) and does not show in
  the Frontend of the site.

<!-- -->

- **Version Note**. Optional field to identify this version of the item
  in the item's [Version
  History](https://docs.joomla.org/Help40:Components_Version_History/en "Special:MyLanguage/Help40:Components Version History/en")
  window.

## Options Tab

- **Layout.** Select a layout from the list.
- **Image.** Optional: Select an image to display alongside this
  Category.
- **Alt Text.** Alternative text for the icon - often used by screen
  readers.

## Publishing Tab

<img
src="https://docs.joomla.org/images/4/46/Help-4x-Banners-Categories-Edit-screen-publish-options-tab-en.png"
decoding="async" data-file-width="600" data-file-height="443"
width="600" height="443"
alt="Help-4x-Banners-Categories-Edit-screen-publish-options-tab-en.png" />

### Publishing

The grayed out fields are for information only and may not be edited.

- **Created Date.** Date the item(Article, Category, Weblink, etc.) was
  created.
- **Created by.** Optional, choose from a popup window of users. Select
  User by clicking on the user's name. Defaults to user creating new
  category if left blank.
- **Modified Date.** *(Informative only)* Date of last modification.
- **Modified By.** *(Informative only)* Username who performed the last
  modification.
- **Hits.** Number of hits on a Category view.
- **ID.** The unique ID number automatically assigned to this item by
  Joomla!. This number cannot be changed.
- **Meta Description.** An optional paragraph to be used as the
  description of the page in the HTML output. This will generally
  display in the results of search engines. If entered, this creates an
  HTML meta element with a name attribute of "description" and a content
  attribute equal to the entered text.
- **Meta Keywords.** Optional entry for keywords. Must be entered
  separated by commas (for example, "cats, dogs, pets") and may be
  entered in upper or lower case. (For example, "CATS" will match "cats"
  or "Cats"). Keywords can be used in several ways:
  - To help Search Engines and other systems classify the content of the
    Article.
  - In combination with Banner tags, to display specific Banners based
    on the Article content. For example, say you have one Banner with an
    ad for dog products and another Banner for cat products. You can
    have your dog Banner display when a User is viewing a dog-related
    Article and your cat Banner display for a cat-related Article. To do
    this, you would:
    - Add the keywords 'dog' and 'cat' to the appropriate Articles.
    - Add the Tags 'dog' and 'cat' to the appropriate Banners in the
      [Banner Manager
      New/Edit](https://docs.joomla.org/Help4.x:Banners:_Edit/en "Help4.x:Banners: Edit/en")
      screen.
    - Set the Banner module Parameter 'Search By Tags' to 'Yes in the
      [Banner Module
      Edit](https://docs.joomla.org/Help4.x:Site_Modules:_Banners/en "Help4.x:Site Modules: Banners/en")
      screen.
  - For articles only, in combination with the [Related
    Articles](https://docs.joomla.org/Help4.x:Site_Modules:_Articles_-_Related/en "Help4.x:Site Modules: Articles - Related/en")
    module, to display Articles that share at least one keyword in
    common. For example, if the current Article displayed has the
    keywords "cats, dogs, monkeys", any other Articles with at least one
    of these keywords will show in the Related Articles module.
- **Author.** Optional entry for an Author name within the metadata. If
  entered, this creates an HTML meta element with the name attribute of
  "author" and the content attribute as entered here.
- **Robots.** The instructions for web "robots" that browse to this
  page.
  - *Use Global*: Use the value set in the Componentâ†’Options for this
    component.
  - *Index, Follow*: Index this page and follow the links on this page.
  - *No index, Follow*: Do not index this page, but still follow the
    links on the page. For example, you might do this for a site map
    page where you want the links to be indexed but you don't want this
    page to show in search engines.
  - *Index, No follow*: Index this page, but do not follow any links on
    the page. For example, you might want to do this for an events
    calendar, where you want the page to show in search engines but you
    do not want to index each event.
  - *No index, no follow*: Do not index this page or follow any links on
    the page.

## Permissions Tab

<img
src="https://docs.joomla.org/images/thumb/e/e3/Help-4x-Banners-Categories-Edit-screen-permissions-tab-en.png/600px-Help-4x-Banners-Categories-Edit-screen-permissions-tab-en.png"
decoding="async"
srcset="https://docs.joomla.org/images/e/e3/Help-4x-Banners-Categories-Edit-screen-permissions-tab-en.png 1.5x"
data-file-width="800" data-file-height="406" width="600" height="305"
alt="Help-4x-Banners-Categories-Edit-screen-permissions-tab-en.png" />

To change the permissions for this extension, do the following.

- Select the **Group** by clicking its title located on the left.
- Find the desired **Action**. Possible Actions are:
  - **Configure ACL & Options.** Users can edit the options and
    permissions of this extension.
  - **Configure Options Only.** Users can edit the options except the
    permissions of this extension.
  - **Access Administration Interface.** Users can access user
    administration interface of this extension.
  - **Create.** Users can create content of this extension.
  - **Delete.** Users can delete content of this extension.
  - **Edit.** Users can edit content of this extension.
  - **Edit State.** User can change the published state and related
    information for content of this extension.
  - **Edit Own.** Users can edit own created content of this extension.
- Select the desired permission for the action you wish to change.
  Possible settings are:
  - ***Inherited.*** Inherited for users in this Group from the Global
    Configuration permissions of this extension.
  - ***Allowed.*** Allowed for users in this Group. Note that, if this
    action is Denied at one of the higher levels, the Allowed permission
    here will not take effect. A Denied setting cannot be overridden.
  - ***Denied.*** Denied for users in this Group.
- Click **Save** in **Toolbar** at top. When the screen refreshes, the
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

- **Cancel**. Closes the current screen and returns to the previous
  screen without saving any modifications you may have made. Or

<!-- -->

- **Close**. Closes the current screen and returns to the previous
  screen without saving any modifications you may have made. This
  toolbar icon is not shown if you are creating a new item.

<!-- -->

- **Versions**. Opens the Item Version History window to show any prior
  versions of this item. This allows you to view older versions of this
  item and, if desired, restore from an older version. See [Version
  History](https://docs.joomla.org/Help40:Components_Version_History/en "Special:MyLanguage/Help40:Components Version History/en")
  for more information.

<!-- -->

- **Associations**. With a specific language set for an item, allows
  side by side editing in another language. This toolbar icon is shown
  on [Multilingual
  Sites](https://docs.joomla.org/Help4.x:Multilingual_Associations/en "Special:MyLanguage/Help4.x:Multilingual Associations/en")
  only.

<!-- -->

- **Help**. Opens this help screen.

## Related Information

- To create or edit Banners: [Banner Category Manager -
  New/Edit](https://docs.joomla.org/Help4.x:Banners:_Categories/en "Help4.x:Banners: Categories/en")
- To work with Banner Clients: [Banner Client
  Manager](https://docs.joomla.org/Help4.x:Banners:_Clients/en "Help4.x:Banners: Clients/en")
- To place Banners on Pages: [Module
  Manager](https://docs.joomla.org/Help4.x:Modules/en "Help4.x:Modules/en")
