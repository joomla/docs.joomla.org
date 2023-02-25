<!-- Filename: Help4.x:Languages:_Content / Display title: Languages: Content -->

## Description

Set the Native Title, Language Code, SEF Prefix and Image Prefixes of
the installed or to be installed languages. These are used when you set
your site as multilanguage. See the [Language Switcher
Tutorial](https://docs.joomla.org/J3.x:Setup_a_Multilingual_Site/en "J3.x:Setup a Multilingual Site/en").

## How to Access

- Select **System **→** Manage Panel **→** Content Languages** from the
  Administrator menu.

## Screenshot

<img
src="https://docs.joomla.org/images/6/67/Help-4x-Extensions-Language-Manager-Content-screen-en.png"
decoding="async" data-file-width="800" data-file-height="416"
width="800" height="416"
alt="Help-4x-Extensions-Language-Manager-Content-screen-en.png" />

## Column Headers

Click on the column heading to sort the list by that column's value.

- **Checkbox**. Check this box to select one or more items. To select
  all items, check the box in the column heading. After one or more
  boxes are checked, click a toolbar button to take an action on the
  selected item or items. Many toolbar actions, such as Publish and
  Unpublish, can work with multiple items. Others, such as Edit, only
  work on one item at a time. If multiple items are checked and you
  press Edit, the first item will be opened for editing.

<!-- -->

- **Ordering:** (default). The column in which to sort displayed items
  in the table. The values are the same as the column heading names.

<!-- -->

- **Status**. The published status of the item.
- **Title.** The names of the installed Languages on this web site.
- **Native Title.** Language title in the native language.
- **Language Tag.** The language tag - example: en-GB for English (UK).
  This should be the exact prefix used for the language installed or to
  be installed.
- **URL Language Code.** The language code used in multilingual site
  URLs.
- **Image.** Name of the image file for this language when using the
  "Use Image Flags" Language Switcher basic option. Example: If 'en' is
  chosen, then the image shall be en.gif. Images and CSS for this module
  are in media/mod_languages/

<!-- -->

- **Access**. The [viewing Access
  Level](https://docs.joomla.org/Help4.x:Users:_Viewing_Access_Levels/en "Special:MyLanguage/Help4.x:Users: Viewing Access Levels/en")
  for this item.
- **Home.** Whether there is a default page set for this language or
  not.

<!-- -->

- **ID**. This is a unique identification number for this item assigned
  automatically by Joomla. It is used to identify the item internally,
  and you cannot change this number. When creating a new item, this
  field displays "0" until you save the new entry, at which point a new
  ID is assigned to it.

## List Filters

**Search bar**. Near the top of the page you will see the search bar
shown in the [Screenshot](#screenshot) above.

- **Search by Text**. Enter part of the search term and click the Search
  icon. *Hover* to see a *Tooltip* indicating which fields will be
  searched.To 'Search by ID' enter "id:x", where "x" is the ID number
  (for example, "id:19").
- **Filter Options**. Click to display the additional filters.
- **Clear**. Click to clear the Filter field and restore the list to its
  unfiltered state.
- **Ordering**. Shows the current list ordering field. 2 ways to change
  the order:
  - Select from the dropdown list. Ordering may be in ascending or
    descending order.
  - Click a column heading. The column heading toggles between ascending
    and descending order.
- **Number to Display**. Shows the number of items in a list. Select
  from the dropdown list to change the number displayed.The default for
  a site is '20' but this may be changed in the [Global
  Configuration](https://docs.joomla.org/Help4.x:Site_Global_Configuration/en#defaultlistlimit "Help4.x:Site Global Configuration/en").

**Filter Options**

- **Select State.** Use the drop-down list box to select: Read, Unread
  or Trashed. Only languages with this state will show on the list.
- **Select Access.** Use the drop-down list box to select: Public,
  Guest, Registered, Special or Super Users. Only languages with this
  state will show on the list.

**Automatic Pagination**

**Page Controls**. When the number of items is more than one page, you
will see a page control bar near the bottom of the page shown in the
[Screenshot](#screenshot) above. The current page number being viewed
has a dark colour background.

- **Start**. Click to go to the first page.
- **Prev**. Click to go to the previous page.
- **Page numbers**. Click to go to the desired page.
- **Next**. Click to go to the next page.
- **End**. Click to go to the last page.

## Toolbar

At the top of the page you will see the toolbar shown in the
[Screenshot](#Screenshot) above. The functions are:

- **New**. Opens the editing screen to create a new item.

<!-- -->

- **Actions:** Reveals a list of actions for selected Items. Check one
  or more Item checkboxes to activate the list.

<!-- -->

- **Publish**. Makes the selected items available to visitors to your
  website.

<!-- -->

- **Unpublish.** Makes the selected items unavailable to visitors to
  your website.

<!-- -->

- **Trash**. Changes the status of the selected items to indicate that
  they are trashed.Trashed items can still be recovered by selecting
  'Trashed' in the 'Select Status' filter and changing the status of the
  articles to Published or Unpublished as preferred.To permanently
  delete trashed items, select 'Trashed' in the 'Select Status' filter,
  select the items to be permanently deleted, then click the 'Empty
  Trash' toolbar icon.

<!-- -->

- **Install Languages.** Links to the [Install Languages
  Screen](https://docs.joomla.org/Help4.x:Extensions_Extension_Manager_Languages/en "Help4.x:Extensions Extension Manager Languages/en").

<!-- -->

- **Options.** Opens the Options window where settings such as default
  parameters can be edited.

<!-- -->

- **Help**. Opens this help screen.

## Quick Tips

- Users can use any Language from the list of installed Languages,
  either by having it assigned in the [Users
  list](https://docs.joomla.org/Help4.x:Users/en "Help4.x:Users/en") or
  by filling out a [Menu Items - New/Edit - User Form
  Layout](https://docs.joomla.org/Help4.x:Menu_Item:_New_Item/en#User_Form_Layout.2F "Help4.x:Menu Item: New Item/en")
  at the Front end. This will cause the Joomla! system prompts to be
  generated in this Language just for this User. For example, if a User
  chooses Spanish as their language, then the Search Module will show
  with prompts in Spanish.
- This User's choice is not affected by the Default Language set for the
  Front-end.

<!-- -->

- Changing a User's Language or the Default Language does not affect the
  web site's Articles and other content.

<!-- -->

- **Important**: Do not delete the default language files (for example,
  with FTP). This will create errors on both the Front-end and Back-end.
- Additional Languages can be added using the [Install Languages
  Screen](https://docs.joomla.org/Help4.x:Extensions_Extension_Manager_Languages/en "Help4.x:Extensions Extension Manager Languages/en").
- If desired, you can show the Front-end site in one Language and show
  the Back-end administration pages in a different Language. Also,
  individual articles can be configured to use a different language in
  the Advanced Parameter pane when editing the Article.

## Related Information

- To install more Languages: [Install Languages
  Screen](https://docs.joomla.org/Help4.x:Extensions_Extension_Manager_Languages/en "Help4.x:Extensions Extension Manager Languages/en")
- To uninstall a Language: [Extensions -
  Manage](https://docs.joomla.org/Help4.x:Extensions:_Manage/en "Help4.x:Extensions: Manage/en")
- To change the Language for a User: [Users list -
  New/Edit](https://docs.joomla.org/Help4.x:Users:_Edit_Profile/en "Help4.x:Users: Edit Profile/en")
- To set the Language of an Article: [Articles list - New/Edit -
  Parameters -
  Advanced](https://docs.joomla.org/Help4.x:Articles:_Edit/en#Parameters_-_Advanced "Help4.x:Articles: Edit/en")
