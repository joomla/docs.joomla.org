<!-- Filename: Help4.x:Articles:_Edit / Display title: Articles: Edit -->

## Description

This screen is used to add a new or edit a existing Article, usually
using a Wysiwyg editor. The default editor is TinyMCE but if other
editors are installed the default editor may be set to something else
for the site as a whole or for individual users.

Most parameters have suitable defaults but you might wish to set a
specific Category or provide article-specific Metadata.

## How to Access

**Content **→** Articles**

To add a Article:

- click the **New** toolbar button

To edit a Article:

- select a **Title** from the list

## Screenshot

<img
src="https://docs.joomla.org/images/thumb/8/84/Help-4x-content-article-manager-add-new-article-en.png/800px-Help-4x-content-article-manager-add-new-article-en.png"
decoding="async"
srcset="https://docs.joomla.org/images/thumb/8/84/Help-4x-content-article-manager-add-new-article-en.png/1200px-Help-4x-content-article-manager-add-new-article-en.png 1.5x, https://docs.joomla.org/images/thumb/8/84/Help-4x-content-article-manager-add-new-article-en.png/1600px-Help-4x-content-article-manager-add-new-article-en.png 2x"
data-file-width="2880" data-file-height="1584" width="800" height="440"
alt="Help-4x-content-article-manager-add-new-article-en.png" />

## Form Fields

- **Title**. The Title for this article.
- **Alias**. The internal name of this article. Normally, you can leave
  this blank and Joomla will fill in a default value Title in lower case
  and with dashes instead of spaces. [Learn
  more.](https://docs.joomla.org/Alias/en "Alias/en")

### Content

**Left Panel**

- **Article Text**. This is where you enter the contents of the article.
  Joomla includes 3 editors, the default [Editor -
  TinyMCE](https://docs.joomla.org/Help4.x:Editors/en#tinymce "Help4.x:Editors/en")
  is shown here.

<img
src="https://docs.joomla.org/images/thumb/8/87/Help-4x-Article-Editor-buttons-en.png/600px-Help-4x-Article-Editor-buttons-en.png"
decoding="async"
srcset="https://docs.joomla.org/images/thumb/8/87/Help-4x-Article-Editor-buttons-en.png/900px-Help-4x-Article-Editor-buttons-en.png 1.5x, https://docs.joomla.org/images/thumb/8/87/Help-4x-Article-Editor-buttons-en.png/1200px-Help-4x-Article-Editor-buttons-en.png 2x"
data-file-width="1985" data-file-height="751" width="600" height="227"
alt="Help-4x-Article-Editor-buttons-en.png" />

The CMS Content dropdown list provides for access to link to an Article,
Contact, Field, Media, Menu, or Module. [Learn
more.](https://docs.joomla.org/Help4.x:Editors/en#cmscontent "Help4.x:Editors/en")

- **Toggle Editor**. A Toggle Editor button show below the edit window.
  This button allows you to toggle between TinyMCE and [Editor -
  None](https://docs.joomla.org/Help4.x:Editors/en#none "Help4.x:Editors/en").

**Right Panel**

- **Status**. The published status of this article.
  - Published: Article is visible in the Frontend of the site.
  - Unpublished: Article is will not be visible to guests in the
    Frontend of the site. It may be visible to logged in users who have
    [edit state permission](#permissions) for the article.
  - Archived: Article will no longer show on menu items [Category
    Blog](https://docs.joomla.org/Help4.x:Menu_Item:_Category_Blog/en "Help4.x:Menu Item: Category Blog/en")
    or [Category
    List.](https://docs.joomla.org/Help4.x:Menu_Item:_Category_List/en "Help4.x:Menu Item: Category List/en")
  - Trashed: Article is deleted from the site but still in the database.
    [Learn
    more.](https://docs.joomla.org/J4.x:Deleting_an_Article/en "J4.x:Deleting an Article/en")
- **Category**. Select the Category for this article.
- **Featured**. Select Yes if article will be shown in the [Featured
  menu
  item.](https://docs.joomla.org/Help4.x:Menu_Item:_Featured_Articles/en "Help4.x:Menu Item: Featured Articles/en")
- **Access**. Select the viewing access level for this article. The
  access levels depend on what has been set up in [Users: Access
  Levels](https://docs.joomla.org/Help4.x:Users:_Viewing_Access_Levels/en "Help4.x:Users: Viewing Access Levels/en").
- **Language**. Select the language for this article. Keep the default
  of 'All' if you are not using the [multi-language
  feature](https://docs.joomla.org/Help4.x:Extensions:_Languages/en "Help4.x:Extensions: Languages/en").
- **Tags**. Assign tags to this article. You may select a tag from a
  [pre-defined
  list](https://docs.joomla.org/Help4.x:Tags/en "Help4.x:Tags/en") or
  enter a new tag by typing the name in the field and pressing enter.
- **Note**. This is normally for the administrator's use (for example,
  to document information about this article) and does not show in the
  Frontend.
- **Version Note**. Optional field to identify the version of this
  article in the article's [Version
  History](https://docs.joomla.org/Help4.x:Components_Version_History/en "Help4.x:Components Version History/en").

### Images and Links

**Note**: This can be hidden by a user with Admin permissions in the
[Article:
Options](https://docs.joomla.org/Help4.x:Articles:_Options/en "Help4.x:Articles: Options/en").  
This section lets you display images and links in your articles using
standardised layouts.

<img
src="https://docs.joomla.org/images/thumb/3/3d/Help-4x-screenshot-article-edit-images-links-en.png/600px-Help-4x-screenshot-article-edit-images-links-en.png"
decoding="async"
srcset="https://docs.joomla.org/images/thumb/3/3d/Help-4x-screenshot-article-edit-images-links-en.png/900px-Help-4x-screenshot-article-edit-images-links-en.png 1.5x, https://docs.joomla.org/images/thumb/3/3d/Help-4x-screenshot-article-edit-images-links-en.png/1200px-Help-4x-screenshot-article-edit-images-links-en.png 2x"
data-file-width="2878" data-file-height="1164" width="600" height="243"
alt="Help-4x-screenshot-article-edit-images-links-en.png" />

**Intro Image**

- **Intro Image**. Click the Select button to select an image to be
  displayed in a fixed location in the Intro Text of this article. This
  will open a window that allows you to select an image from your images
  folder. [Learn
  more.](https://docs.joomla.org/Adding_an_image_to_an_article/en "Adding an image to an article/en")
- **Image Description (Alt Text)**. Set the alt attribute for this
  image. A few descriptive words for screen readers.
- **No Description**. Check in the rare instance of a purely decorative
  image. Note that if the Image Description is empty and the No
  Description checkbox is unchecked then the image will fail to meet
  accessibility criteria. If an image description is present this
  checkbox has no effect.
- **Image Class**. You can add any CSS class for your own styling ideas.
  For image position use for example float-start and float-end.
  <a href="https://cassiopeia.joomla.com/help" class="external text"
  target="_blank" rel="nofollow noreferrer noopener">Learn more.</a>
- **Caption**. Create a caption for this image.

**Full Article Image**

- **Full Article Image**. Click the Select button to select an image to
  be displayed in a fixed location in the Full Text of this article.
  This will open a window that allows you to select an image from your
  images folder. [Learn
  more.](https://docs.joomla.org/Adding_an_image_to_an_article/en "Adding an image to an article/en")
- **Image Description (Alt Text)**. Set the alt attribute for this
  image. A few descriptive words for screen readers.
- **No Description**. Check in the rare instance of a purely decorative
  image. Note that if the Image Description is empty and the No
  Description checkbox is unchecked then the image will fail to meet
  accessibility criteria. If an image description is present this
  checkbox has no effect.
- **Image Class**. You can add any CSS class for your own styling ideas.
  For image position use for example float-start and float-end.
  <a href="https://cassiopeia.joomla.com/help" class="external text"
  target="_blank" rel="nofollow noreferrer noopener">Learn more.</a>
- **Caption**. Enter an optional caption for this image.

**Link A**

- **Link A**. The URL for the first link to be displayed in a fixed
  location in the article text. This must be a full URL, not relative.
  For example, it normally would start with 'https://'.
- **Link A Text**. The text used for Link A. If blank, the URL will be
  displayed.
- **URL Target Window**. Sets the default value for the target for the
  first Link in this article. Choices are:
  - Open in parent window: Opens the in the main browser window,
    replacing the current Joomla article.
  - Open in new window: Opens the link in a new browser window.
  - Open in popup: Opens the link in a pop-up browser window (without
    full navigation controls).
  - Modal: Opens the link in a modal pop-up window.

**Link B**, **Link C**: Same options as Link A.

### Options

**Note**: This can be hidden by a user with Admin permissions in the
[Article:
Options](https://docs.joomla.org/Help4.x:Articles:_Options/en "Help4.x:Articles: Options/en").  
This is a set of options you can use to control how this article will
show in the Frontend.

<img
src="https://docs.joomla.org/images/thumb/e/e6/Help-4x-screenshot-article-edit-article-options-en.png/600px-Help-4x-screenshot-article-edit-article-options-en.png"
decoding="async"
srcset="https://docs.joomla.org/images/thumb/e/e6/Help-4x-screenshot-article-edit-article-options-en.png/900px-Help-4x-screenshot-article-edit-article-options-en.png 1.5x, https://docs.joomla.org/images/thumb/e/e6/Help-4x-screenshot-article-edit-article-options-en.png/1200px-Help-4x-screenshot-article-edit-article-options-en.png 2x"
data-file-width="2880" data-file-height="1165" width="600" height="243"
alt="Help-4x-screenshot-article-edit-article-options-en.png" />

**Layout**

- **Layout**. Use a layout from the supplied article view or [overrides
  in the
  templates](https://docs.joomla.org/Help4.x:Templates:_Customise/en "Help4.x:Templates: Customise/en").
- **Title**. Show the Article's Title.
- **Linked Titles**. Show the title as a link to the article.
- **Tags**. Enter tags for this article. Select existing tags by
  entering in the first few letters or create new tags by entering them
  here. [Learn
  more.](https://docs.joomla.org/J4.x:How_To_Use_Content_Tags_in_Joomla/en "J4.x:How To Use Content Tags in Joomla/en")
- **Intro Text**.
  - Show: The Intro Text of the article will show when you drill down to
    the article.
  - Hide: Only the part of the article after the Read More break will
    show.
- **Position of Article Info**.
  - Above: Puts the article information block above the text.
  - Below: Puts the article information block below the text.
  - Split: Splits the article information block into 2 separate blocks.
    One block is above and the other is below the text.
- **Article Info Title**. Displays 'Details' on top of the article
  information block.

**Category**

- **Category**. Show the Article's Category Title.
- **Link Category**. Show the title as a link to that Category.
- **Parent Category**. Show the Article's Parent Category Title.
- **Link Parent Category**. Show the title as a link to that Category.

**Associations**

- **Associations**. Show the associated flags or Language Code.
  [Multilingual
  only.](https://docs.joomla.org/Help4.x:Multilingual_Associations/en "Help4.x:Multilingual Associations/en")

**Author**

- **Author**. Show the author of the Article.
- **Link to Author's Contact Page**. Show it as a link to a Contact
  layout for that author.Note: The author must be [set up as a
  Contact](https://docs.joomla.org/Help4.x:Contacts/en "Help4.x:Contacts/en").

**Date**

- **Create Date**. Show the Article's create date.
- **Modify Date**. Show the Article's modify date.
- **Publish Date**. Show the Article's start publishing date.

**Options**

- **Navigation**. Show a navigation link 'Prev' or 'Next' when you drill
  down to the article.
- **Hits**. Show the number of times the article has been displayed by a
  user.
- **Unauthorised Links**. If Yes, the Intro Text for restricted articles
  will show. Clicking on the Read more link will require users to log in
  to view the full article content.
- **Positioning of the Links.**
  - Above: Links are shown above the content.
  - Below: Links are shown below the content.
- **Read More Text**. Customise the text that shows for the default
  wording 'Read more'.
- **Browser Page Title**. Text for the Browser page title to be used
  when the article is viewed with a non-article menu item. If blank, the
  article's title is used instead.

### Fields

This section shows the [custom
fields](https://docs.joomla.org/Help4.x:Fields/en "Help4.x:Fields/en")
which are defined for this article.

<img
src="https://docs.joomla.org/images/thumb/b/b4/Help-4x-Content-Article-Manager-Edit-Fields-options-subscreen-en.png/600px-Help-4x-Content-Article-Manager-Edit-Fields-options-subscreen-en.png"
decoding="async"
srcset="https://docs.joomla.org/images/thumb/b/b4/Help-4x-Content-Article-Manager-Edit-Fields-options-subscreen-en.png/900px-Help-4x-Content-Article-Manager-Edit-Fields-options-subscreen-en.png 1.5x, https://docs.joomla.org/images/thumb/b/b4/Help-4x-Content-Article-Manager-Edit-Fields-options-subscreen-en.png/1200px-Help-4x-Content-Article-Manager-Edit-Fields-options-subscreen-en.png 2x"
data-file-width="2876" data-file-height="660" width="600" height="138"
alt="Help-4x-Content-Article-Manager-Edit-Fields-options-subscreen-en.png" />

### Publishing

**Note**: This can be hidden by a user with Admin permissions in the
[Article:
Options](https://docs.joomla.org/Help4.x:Articles:_Options/en "Help4.x:Articles: Options/en").  
This section allows you to enter parameters and
[Metadata](https://docs.joomla.org/Using_The_Meta_Description/en "Using The Meta Description/en")
for this Article.

<img
src="https://docs.joomla.org/images/thumb/3/32/Help-4x-Content-Article-Manager-Edit-publishing-options-subscreen-en.png/600px-Help-4x-Content-Article-Manager-Edit-publishing-options-subscreen-en.png"
decoding="async"
srcset="https://docs.joomla.org/images/thumb/3/32/Help-4x-Content-Article-Manager-Edit-publishing-options-subscreen-en.png/900px-Help-4x-Content-Article-Manager-Edit-publishing-options-subscreen-en.png 1.5x, https://docs.joomla.org/images/thumb/3/32/Help-4x-Content-Article-Manager-Edit-publishing-options-subscreen-en.png/1200px-Help-4x-Content-Article-Manager-Edit-publishing-options-subscreen-en.png 2x"
data-file-width="2880" data-file-height="1165" width="600" height="243"
alt="Help-4x-Content-Article-Manager-Edit-publishing-options-subscreen-en.png" />

**Publishing**

- **Start Publishing**. Date and time to start publishing. Enter article
  ahead of time and then have it published automatically at a future
  time.
- **Finish Publishing**. Date and time to finish publishing. The article
  is automatically changed to Unpublished state at a future time.
- **Start Featured**. Date and time to start featured state. Enter
  article ahead of time and then have it featured automatically at a
  future time.
- **Finish Featured**. Date and time to finish featured state. The
  article is automatically changed to Unfeatured state at a future time.
- **Created Date**. The current time when the Article was created. Enter
  in a different date and time or click on the calendar icon to find the
  desired date.
- **Created By**. Name of the User who created this Article. This will
  default to the currently logged-in user. If you want to change this to
  a different user, click the Select User button.
- **Created by Alias**. Enter in an alias for the Author of this
  Article. This allows you to display a different Author name.
- **Modified Date**. Date of last modification.
- **Modified By**. Username who performed the last modification.
- **Revision**. Number of revisions to this Article.
- **Hits**. The number of times this Article has been viewed.
- **ID**. A unique identification number for this Article, you cannot
  change this number. When creating a new Article, this field displays
  "0" until you save the new entry.

**Metadata**

- **Meta Description**. An paragraph to be used as the description of
  the page. [Learn
  more.](https://docs.joomla.org/Using_The_Meta_Description/en "Using The Meta Description/en")
- **Keywords**. Entry for keywords. [Learn
  more.](https://docs.joomla.org/Using_Keywords/en "Using Keywords/en")
- **Robots**. The instructions for web 'robots' that browse to this
  page. Set 'Use Global' in [Global
  Configuration](https://docs.joomla.org/Help4.x:Site_Global_Configuration/en#robots "Help4.x:Site Global Configuration/en").
- **Author**. Entry for an Author name within the metadata.
- **Content Rights**. Describe what rights others have to use this
  content.

### Associations

**Note**: This can be hidden by a user with Admin permissions in the
[Article:
Options](https://docs.joomla.org/Help4.x:Articles:_Options/en "Help4.x:Articles: Options/en").  
Tab is shown on [Multilingual
Sites](https://docs.joomla.org/Help4.x:Multilingual_Associations/en "Help4.x:Multilingual Associations/en")
only.

<img
src="https://docs.joomla.org/images/thumb/0/03/Help-4x-screenshot-article-edit-associations-en.png/600px-Help-4x-screenshot-article-edit-associations-en.png"
decoding="async"
srcset="https://docs.joomla.org/images/thumb/0/03/Help-4x-screenshot-article-edit-associations-en.png/900px-Help-4x-screenshot-article-edit-associations-en.png 1.5x, https://docs.joomla.org/images/thumb/0/03/Help-4x-screenshot-article-edit-associations-en.png/1200px-Help-4x-screenshot-article-edit-associations-en.png 2x"
data-file-width="2880" data-file-height="1085" width="600" height="226"
alt="Help-4x-screenshot-article-edit-associations-en.png" />

### Configure Edit Screen

**Note**: This can be hidden by a user with Admin permissions in the
[Article:
Options](https://docs.joomla.org/Help4.x:Articles:_Options/en "Help4.x:Articles: Options/en").

<img
src="https://docs.joomla.org/images/thumb/b/bc/Help-4x-screenshot-article-edit-configure-edit-screen-en.png/600px-Help-4x-screenshot-article-edit-configure-edit-screen-en.png"
decoding="async"
srcset="https://docs.joomla.org/images/thumb/b/bc/Help-4x-screenshot-article-edit-configure-edit-screen-en.png/900px-Help-4x-screenshot-article-edit-configure-edit-screen-en.png 1.5x, https://docs.joomla.org/images/thumb/b/bc/Help-4x-screenshot-article-edit-configure-edit-screen-en.png/1200px-Help-4x-screenshot-article-edit-configure-edit-screen-en.png 2x"
data-file-width="2880" data-file-height="970" width="600" height="202"
alt="Help-4x-screenshot-article-edit-configure-edit-screen-en.png" />

- **Publishing Options**. If Hide, the [Publishing Options
  tab](https://docs.joomla.org/Help4.x:Articles:_Edit/en#publishing "Help4.x:Articles: Edit/en")
  will not show in the Backend. This means that Backend users will not
  be able to edit the fields in this tab. These fields will always be
  set to their default values.
- **Article Options**. If Hide, the [Article Options
  tab](https://docs.joomla.org/Help4.x:Articles:_Edit/en#options "Help4.x:Articles: Edit/en")
  will not show in the Backend. This means that Backend users will not
  be able to edit the fields in this tab. These fields will always be
  set to their default values.
- **Administrator Images and Links**. If Yes, the [Images and Links
  tab](https://docs.joomla.org/Help4.x:Articles:_Edit/en#imagesandlinks "Help4.x:Articles: Edit/en")
  will show.
- **Frontend Images and Links**. If Yes, the Images and Links tab will
  show in the Frontend article editor screen.

### Permissions

**Note**: This can be hidden by a user with Admin permissions in the
[Article:
Options](https://docs.joomla.org/Help4.x:Articles:_Options/en "Help4.x:Articles: Options/en").  
This is where you can enter permissions for this article. [Learn
more.](https://docs.joomla.org/J3.x:Access_Control_List_Tutorial/en#hierarchylevels "J3.x:Access Control List Tutorial/en")

<img
src="https://docs.joomla.org/images/thumb/9/9c/Help-4x-screenshot-article-edit-permissions-en.png/600px-Help-4x-screenshot-article-edit-permissions-en.png"
decoding="async"
srcset="https://docs.joomla.org/images/thumb/9/9c/Help-4x-screenshot-article-edit-permissions-en.png/900px-Help-4x-screenshot-article-edit-permissions-en.png 1.5x, https://docs.joomla.org/images/thumb/9/9c/Help-4x-screenshot-article-edit-permissions-en.png/1200px-Help-4x-screenshot-article-edit-permissions-en.png 2x"
data-file-width="2878" data-file-height="1166" width="600" height="243"
alt="Help-4x-screenshot-article-edit-permissions-en.png" />

To change the permissions for this article, do the following.

1.  Select the **Group** by clicking its title located on the left.
2.  Find the desired **Action**.
    - **Delete**. Users can delete this article.
    - **Edit**. Users can edit this article.
    - **Edit State**. User can change the published state and related
      information for this article.
3.  Select the desired permission for the action you wish to change.
    - **Inherited**. Inherited for users in this Group from the [Global
      Configuration](https://docs.joomla.org/Help4.x:Site_Global_Configuration/en#permissions "Help4.x:Site Global Configuration/en"),
      [Articles
      Options](https://docs.joomla.org/Help4.x:Articles:_Options/en#permissions "Help4.x:Articles: Options/en"),
      or [Articles
      Category](https://docs.joomla.org/Help4.x:Articles:_Edit_Category/en#permissions "Help4.x:Articles: Edit Category/en").
    - **Allowed**. Allowed for users in this Group.Note: If this action
      is Denied at one of the higher levels, the Allowed permission here
      will not take effect. A Denied setting cannot be overridden.
    - **Denied**. Denied for users in this Group.
4.  Click **Save** in **Toolbar** at top. When the screen refreshes, the
    Calculated Setting column will show the effective permission for
    this Group and Action.

## Toolbar

At the top of the page you will see the toolbar shown in the
[Screenshot](#screenshot) above.

- **Save**. Saves the article and stays in the current screen.
- **Save & Close**. Saves the article and closes the current screen.
  - **Save & New**. Saves the article and keeps the editing screen open
    and ready to create another article.
  - **Save to Menu**. Saves the article to a menu item and opens the
    menu item screen.
  - **Save as Copy**. Saves your changes to a copy of the current
    article. Does not affect the current article.
- **Close**. Closes the current screen and returns to the previous
  screen without saving any modifications you may have made.
- **Versions**. Opens the Article Version History window to show any
  prior versions of this article. This allows you to view older versions
  of this article and, if desired, restore from an older version. [Learn
  more.](https://docs.joomla.org/Help4.x:Components_Version_History/en "Help4.x:Components Version History/en")
- **Preview**. Opens a modal dialog showing a site view of this article.
  Requires [shared
  sessions](https://docs.joomla.org/Help4.x:Site_Global_Configuration/en#sharedsessions "Help4.x:Site Global Configuration/en")
  or being logged in into the Frontend.
- **Accessibility Check**. Opens a window showing accessibility check
  results of the article.
- **Associations**. With a specific language set for an article, allows
  side by side editing in another language. This icon is shown on
  [Multilingual
  Sites](https://docs.joomla.org/Help4.x:Multilingual_Associations/en "Help4.x:Multilingual Associations/en")
  only.
- **Toggle Inline Help**. Show help text below some options.
- **Help**. Opens this help screen.

## Quick Tips

- There are 2 methods to insert an image into article using the TinyMCE
  editor.
  1.  The [CMS
      Content](https://docs.joomla.org/Help4.x:Editors/en#cmscontent "Help4.x:Editors/en")
      dropdown list provides access to the [Media
      screen](https://docs.joomla.org/Help4.x:Media/en "Help4.x:Media/en")
      that lets you browse image files and upload images.
  2.  The 'Insert' dropdown list is a simple form for which you need to
      know the image url. It is used for external images.
- [Read
  more](https://docs.joomla.org/Help4.x:Editors/en#readmore "Help4.x:Editors/en")
  breaks allow you to save space on the Front Page or on any blog layout
  page by showing just the first portion of an Article. [Page
  break](https://docs.joomla.org/Help4.x:Editors/en#pagebreak "Help4.x:Editors/en")
  allow you to provide multi-page navigation for long Articles. You can
  use both on one Article, if desired.For example, you could put a Read
  more break after the first paragraph of a multi-page article, and have
  Page breaks after each page. No page navigation would display on the
  Front Page until the User selects the Read more link. At that time,
  the Article's table of contents would display showing links to every
  page.

## Related Information

- This
  [Portal](https://docs.joomla.org/Portal:Joomla_4/en "Portal:Joomla 4/en")
  brings together information related specifically to Joomla 4.

|                                                                                                                                                                         |                                                                                                                                                                                             |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Related Help Screens                                                                                                                                                    | Description                                                                                                                                                                                 |
| [Articles: Options](https://docs.joomla.org/Help4.x:Articles:_Options/en "Help4.x:Articles: Options/en")                                                                | Used to set global defaults for menu items that display articles. These default values will be used when 'Use Global' is selected for an option in an Articles menu item.                   |
| [Articles](https://docs.joomla.org/Help4.x:Articles/en "Help4.x:Articles/en")                                                                                           | The Article list is used to find, mark featured, add and edit articles.                                                                                                                     |
| <span class="mw-selflink selflink">Articles: Edit</span>                                                                                                                | This is where you can add and edit Articles. You can also select the Category for an Article and indicate whether or not it is Published and if it is selected to appear on the Front Page. |
| [Articles: Featured](https://docs.joomla.org/Help4.x:Articles:_Featured/en "Help4.x:Articles: Featured/en")                                                             | Used to control which 'Featured Articles' are displayed on the Front Page and in what order they are displayed.                                                                             |
| [Articles: Categories](https://docs.joomla.org/Help4.x:Articles:_Categories/en "Help4.x:Articles: Categories/en")                                                       | The Articles Categories list is used to find, add, and edit articles categories.                                                                                                            |
| [Menus: Archived Articles](https://docs.joomla.org/Help4.x:Menu_Item:_Article_Archived/en "Help4.x:Menu Item: Article Archived/en")                                     | Shows a customised list of articles ordered by date or title. Archived articles are no longer published but are still stored on the site.                                                   |
| [Menus: Category Blog](https://docs.joomla.org/Help4.x:Menu_Item:_Category_Blog/en "Help4.x:Menu Item: Category Blog/en")                                               | Used to show articles belonging to a specific Category in a blog layout. Controls the Leading Articles, Intro Articles and additional links to more Articles.                               |
| [Menus: Category List](https://docs.joomla.org/Help4.x:Menu_Item:_Category_List/en "Help4.x:Menu Item: Category List/en")                                               | Used to show articles belonging to a specific Category in a list layout.                                                                                                                    |
| [Menus: Create Article](https://docs.joomla.org/Help4.x:Menu_Item:_Create_Article/en "Help4.x:Menu Item: Create Article/en")                                            | Allows users to submit an article. Normally this is available only to users who have logged in to the Frontend of the site. Users must have permission to create articles.                  |
| [Menus: Featured Articles](https://docs.joomla.org/Help4.x:Menu_Item:_Featured_Articles/en "Help4.x:Menu Item: Featured Articles/en")                                   | Used to show all Articles that have been tagged as Featured. Articles are shown in a Blog Layout.                                                                                           |
| [Menus: List All Categories in an Article Category Tree](https://docs.joomla.org/Help4.x:Menu_Item:_List_All_Categories/en "Help4.x:Menu Item: List All Categories/en") | Used to show a hierarchical list of Categories. Depending on the selected options for this layout, you can click on a category Title to show the articles in that category.                 |
| [Menus: Single Article](https://docs.joomla.org/Help4.x:Menu_Item:_Single_Article/en "Help4.x:Menu Item: Single Article/en")                                            | Used to show one article.                                                                                                                                                                   |
