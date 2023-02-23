<!-- Filename: Help4.x:News_Feeds:_New_or_Edit / Display title: News Feeds: Edit -->

## Description

This is where you add a new News Feed or edit an existing one. Note that
you need to create at least one <a
href="https://docs.joomla.org/Help4.x:Components_Newsfeeds_Categories/en"
class="mw-redirect"
title="Help4.x:Components Newsfeeds Categories/en">News Feed
Category</a> before you can create your first News Feed.

## How to Access

- Select **Components **→** News Feeds **→** Feeds** from the
  Administrator menu. Then ...
  - To add a new News Feed, select the **New** icon in the toolbar.
  - To edit an existing News Feed, select the News Feed's title link in
    the list **Title** column.

## Screenshot

<img
src="https://docs.joomla.org/images/9/90/Help-4x-Components-Newsfeeds-Feeds-Edit-screen-en.png"
decoding="async" data-file-width="800" data-file-height="629"
width="800" height="629"
alt="Help-4x-Components-Newsfeeds-Feeds-Edit-screen-en.png" />

## Form Fields

- **Title.** The Name of the News Feed. This field is required.

<!-- -->

- **Alias**. The internal name of the item. Normally, you can leave this
  blank and Joomla will fill in a default value Title in lower case and
  with dashes instead of spaces. [Learn
  more.](https://docs.joomla.org/Alias "Special:MyLanguage/Alias")

### Edit News Feed Tab

**Left Panel**

- **Link.** The link of this News Feed. This should normally begin with
  "https://".

<!-- -->

- **Description**. The description for the item. Category, Subcategory
  and Web Link descriptions may be shown on web pages, depending on the
  parameter settings. These descriptions are entered using the same
  editor that is used for Articles.

<img
src="https://docs.joomla.org/images/c/c2/Help30-editor-tinymce-advanced-module-article-image-en.png"
decoding="async" data-file-width="800" data-file-height="85" width="800"
height="85"
alt="Help30-editor-tinymce-advanced-module-article-image-en.png" />

- Select the **Insert** dropdown list to add the following with a popup
  window:
  - **Article.**
  - **Image.**
- **Toggle Editor.** Turns on or off the editor's description box
  WYSIWYG features to show HTML markup.

**Right Panel**

- **Status**: Published status of the item. Possible values are:
  - *Published*: The item is published. This is the only state that will
    allow regular website users to view this item.
  - *Unpublished*: The item is unpublished.
  - *Archived*: The item has been archived.
  - *Trashed*: The item has been sent to the Trash.

<!-- -->

- **Category.** The Category this item belongs to.

<!-- -->

- **Access**. The [viewing Access
  Level](https://docs.joomla.org/Help4.x:Users:_Viewing_Access_Levels "Special:MyLanguage/Help4.x:Users: Viewing Access Levels")
  for this item.

<!-- -->

- **Language**. Item language.

<!-- -->

- **Tags**. Enter one or more optional tags for this item. You can
  select existing tags by entering in the first few letters. You may
  also create new tags by entering them here. Tags allow you to see
  lists of related items across content types (for example, articles,
  contacts, and categories).

<!-- -->

- **Version Note**. Optional field to identify this version of the item
  in the item's [Version
  History](https://docs.joomla.org/Help40:Components_Version_History "Special:MyLanguage/Help40:Components Version History")
  window.

### Options Tab

<img
src="https://docs.joomla.org/images/4/46/Help-4x-Components-Newsfeeds-Edit-tab-images-options-en.png"
decoding="async" data-file-width="800" data-file-height="651"
width="800" height="651"
alt="Help-4x-Components-Newsfeeds-Edit-tab-images-options-en.png" />

**Images Panel**

- **First Image.** Select or upload the first image of the News Feed.

<!-- -->

- **First Image Float.** (Right/Left/None) Controls placement of the
  image.

<!-- -->

- **Alt text.** Alternative text to use for visitors who don't have
  access to images. This text is replaced with the caption text if
  caption text is available.

<!-- -->

- **Caption.** The caption for the image.

<!-- -->

- **Second Image.** Select or upload the second image of the News Feed.

<!-- -->

- **Second Image Float.** (Right/Left/None) Controls placement of the
  image.

<!-- -->

- **Alt text.** Alternative text to use for visitors who don't have
  access to images. This text is replaced with the caption text if
  caption text is available.

<!-- -->

- **Caption.** The caption for the image.

**Display Panel**

- **Number of Articles.** The number of articles from the news feed to
  display on the page.
- **Cache Time.** The number of minutes before the system checks for new
  content from the news feed source.
- **Language Direction.** Whether the language for this feed reads from
  left to right or right to left.

<!-- -->

- **Feed Image**. (Use Global/Hide/Show) Show or hide the image of News
  Feeds.

<!-- -->

- **Feed Description.** (Use Global/Hide/Show) Hide or Show the
  description text of the News Feed.

<!-- -->

- **Feed Content**. (Use Global/Hide/Show) Show or hide the content of
  News Feeds.

<!-- -->

- **Characters count**. Number of characters to show if Feed Content
  from News Feeds is set to show.

<!-- -->

- **Layout**. Use a layout from the supplied component view or overrides
  in the templates.

<!-- -->

- **Feed Display Order.** The order used to display the feed.

### Publishing

<img
src="https://docs.joomla.org/images/b/b3/Help-4x-Components-Newsfeeds-Edit-tab-publishing-options-en.png"
decoding="async" data-file-width="800" data-file-height="432"
width="800" height="432"
alt="Help-4x-Components-Newsfeeds-Edit-tab-publishing-options-en.png" />

**Publishing Panel**

- **Start Publishing**. Date and time to start publishing. Use this
  field if you want to enter content ahead of time and then have it
  published automatically at a future time.

<!-- -->

- **Finish Publishing**. Date and time to finish publishing. Use this
  field if you want to have content automatically changed to Unpublished
  state at a future time (for example, when it is no longer applicable).

<!-- -->

- **Created Date**. This field defaults to the current time when the
  Article was created. You can enter in a different date and time or
  click on the calendar icon to find the desired date.

<!-- -->

- **Created By**. Name of the Joomla User who created this item. This
  will default to the currently logged-in user. If you want to change
  this to a different user, click the Select User button to select a
  different user.

<!-- -->

- **Created by Alias**. This optional field allows you to enter in an
  alias for this Author for this Article. This allows you to display a
  different Author name for this Article.

<!-- -->

- **Modified Date**. Date of last modification.

<!-- -->

- **Modified By**. Username who performed the last modification.

<!-- -->

- **Revision**. Number of revisions to this item.

<!-- -->

- **ID**. This is a unique identification number for this item assigned
  automatically by Joomla. It is used to identify the item internally,
  and you cannot change this number. When creating a new item, this
  field displays "0" until you save the new entry, at which point a new
  ID is assigned to it.

**Metadata Panel**

- **Meta Description**. An optional paragraph to be used as the
  description of the page in the HTML output. This will generally
  display in the results of search engines. If entered, this creates an
  HTML meta element with a name attribute of 'description' and a content
  attribute equal to the entered text.

<!-- -->

- **Keywords**. Optional entry for keywords. Must be entered separated
  by commas (for example, "cats, dogs, pets") and may be entered in
  upper or lower case. (For example, "CATS" will match "cats" or
  "Cats"). Keywords can be used in several ways:
  1.  To help Search Engines and other systems classify the content of
      the Article.
  2.  In combination with Banner tags, to display specific Banners based
      on the Article content. For example, say you have one Banner with
      an ad for dog products and another Banner for cat products. You
      can have your dog Banner display when a User is viewing a
      dog-related Article and your cat Banner display for a cat-related
      Article. To do this, you would:
      - Add the keywords "dog" and "cat" to the appropriate Articles.
      - Add the Tags "dog" and "cat" to the appropriate Banners in
        [Banners:
        Edit](https://docs.joomla.org/Help40:Banners:_Edit "Special:MyLanguage/Help40:Banners: Edit").
      - Set the Banner module Parameter 'Search By Tags' to "Yes" in
        [Site Modules:
        Banners](https://docs.joomla.org/Help40:Site_Modules:_Banners "Special:MyLanguage/Help40:Site Modules: Banners").
  3.  For articles only, in combination with the ['Articles - Related'
      module](https://docs.joomla.org/Help40:Site_Modules:_Articles_-_Related "Special:MyLanguage/Help40:Site Modules: Articles - Related"),
      to display Articles that share at least one keyword in common. For
      example, if the current Article displayed has the keywords "cats,
      dogs, monkeys", any other Articles with at least one of these
      keywords will show in the 'Articles - Related' module.

<!-- -->

- **External Reference.** An optional reference used to link to external
  data sources. If entered, this creates an HTML meta element with a
  name attribute of "xreference" and a content attribute equal to the
  entered text.

<!-- -->

- **Robots**. The instructions for web 'robots' that browse to this
  page.
  - *index, follow:* Index this page and follow the links on this page.
  - *noindex, follow:* Do not index this page, but still follow the
    links on the page. For example, you might do this for a site map
    page where you want the links to be indexed but you don't want this
    page to show in search engines.
  - *index, nofollow:* Index this page, but do not follow any links on
    the page. For example, you might want to do this for an events
    calendar, where you want the page to show in search engines but you
    do not want to index each event.
  - *noindex, nofollow:* Do not index this page or follow any links on
    the page.
  - *Use Global:* Set in [Global Configuration: Metadata
    Settings](https://docs.joomla.org/Help4.x:Site_Global_Configuration#Metadata_Settings "Special:MyLanguage/Help4.x:Site Global Configuration").

<!-- -->

- **Content Rights.** Describe what rights others have to use this
  content.

<!-- -->

- **Hits**. The number of times an item has been viewed.

### Associations

<img
src="https://docs.joomla.org/images/3/38/Help-4x-Components-Newsfeeds-Edit-tab-associations-options-en.png"
decoding="async" data-file-width="600" data-file-height="240"
width="600" height="240"
alt="Help-4x-Components-Newsfeeds-Edit-tab-associations-options-en.png" />

- **Select a News Feed:** Select or Create a News Feed to associate.

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
  History](https://docs.joomla.org/Help40:Components_Version_History "Special:MyLanguage/Help40:Components Version History")
  for more information.

<!-- -->

- **Associations**. With a specific language set for an item, allows
  side by side editing in another language. This toolbar icon is shown
  on [Multilingual
  Sites](https://docs.joomla.org/Help4.x:Multilingual_Associations "Special:MyLanguage/Help4.x:Multilingual Associations")
  only.

<!-- -->

- **Help**. Opens this help screen.

## Quick Tips

A News Feed category must be added *before* any News Feed can be
created.

## Related Information

To add or edit News Feed Categories: [News Feeds:
Categories](https://docs.joomla.org/Help4.x:News_Feeds:_Categories/en "Help4.x:News Feeds: Categories/en")
