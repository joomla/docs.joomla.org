<!-- Filename: Help4.x:Languages:_Installed / Display title: Languages: Installed -->

## Description

In the Installed Languages list you can set the default Languages
independently for the Site and Administrator interfaces.

## How to Access

- Select **System **→** Manage Panel **→** Languages** from the
  Administrator menu.

## Screenshot

<img
src="https://docs.joomla.org/images/a/a6/Help-4x-Extensions-Language-Manager-Installed-screen-en.png"
decoding="async" data-file-width="800" data-file-height="370"
width="800" height="370"
alt="Help-4x-Extensions-Language-Manager-Installed-screen-en.png" />

## Column Headers

Click on the column heading to sort the list by that column's value.

- **Radio Buttons.** Select a radio button to make the selected language
  the Default Site and/or Administrator language.
- **Title.** The name of the language in English.
- **Native Title.** The name of the language in that language.
- **Language Tag.** Language Tag of the Installed Language.
- **Default.** The default language of the site, marked with a yellow
  graphical asterisk in this column. *Note*: to every user a language
  can be assigned (see "User Management"), user from groups
  "Administrator" and "Super Administrator" can select their preferred
  language themselves at login.
- **Version.** The version number of the installed language.
- **Date.** The creation date of the language.
- **Author.** The name of the language translator is displayed in this
  column.
- **Author Email.** The email address of the translator.

<!-- -->

- **ID**. This is a unique identification number for this item assigned
  automatically by Joomla. It is used to identify the item internally,
  and you cannot change this number. When creating a new item, this
  field displays "0" until you save the new entry, at which point a new
  ID is assigned to it.

## List Filters

**Filter by Site or Administrator**

- **Site.** Shows the installed Languages for the Frontend part. Here
  you can set the default language for the Frontend of your Joomla
  website.
- **Administrator.** Shows the installed Languages for the Backend part.
  Here you can set the default language for the Backend of your Joomla
  website.

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

**Filter Options.** This screen has no Filter Options

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

- **Default:** Makes the selected item the default item. The default
  star symbol
  (<img src="https://docs.joomla.org/images/7/7e/Icon-16-default.png"
  decoding="async" data-file-width="30" data-file-height="20" width="30"
  height="20" alt="Icon-16-default.png" />) will show in the Default
  column, indicating that this is now the default item.
- **Switch Languages.** In the Administrator screen only, select a
  language radio button and then this button. The Administrator language
  will change and there will be a message such as *Message La langue de
  l'administration a Ã©tÃ© changÃ©e en "French (France)"*.

<!-- -->

- **Install Languages.** Links to the [Install Languages
  Screen](https://docs.joomla.org/Help4.x:Extensions_Extension_Manager_Languages/en "Help4.x:Extensions Extension Manager Languages/en").

<!-- -->

- **Close**. Closes the current screen and returns to the previous
  screen without saving any modifications you may have made. This
  toolbar icon is not shown if you are creating a new item.

<!-- -->

- **Options.** Opens the Options window where settings such as default
  parameters can be edited.

<!-- -->

- **Help**. Opens this help screen.

## Quick Tips

- Users can use any Language from the list of installed Languages,
  either by having it assigned in the [Users
  list](https://docs.joomla.org/Help4.x:Users/en "Help4.x:Users/en") or
  by filling out a [Menu Item list - New/Edit - User Form
  Layout](https://docs.joomla.org/Help4.x:Menu_Item:_New_Item/en#User_Form_Layout "Help4.x:Menu Item: New Item/en")
  at the Frontend. This will cause the Joomla! system prompts to be
  generated in this Language just for this User. For example, if a User
  chooses Spanish as their language, then the Search Module will show
  with prompts in Spanish.
- This User's choice is not affected by the Default Language set for the
  Frontend.

<!-- -->

- Changing a User's Language or the Default Language does not affect the
  website's Articles and other content.

<!-- -->

- **Important**: Do not delete the default language files (for example,
  with FTP). This will create errors on both the Frontend and Backend.
- Additional Languages can be added using the [Install Languages
  Screen](https://docs.joomla.org/Help4.x:Extensions_Extension_Manager_Languages/en "Help4.x:Extensions Extension Manager Languages/en").
- If desired, you can show the Frontend site in one Language and show
  the Backend administration pages in a different Language. Also,
  individual articles can be configured to use a different language in
  the Advanced Parameter pane when editing the Article.

## Related Information

- To install more Languages: [Install Languages
  Screen](https://docs.joomla.org/Help4.x:Extensions_Extension_Manager_Languages/en "Help4.x:Extensions Extension Manager Languages/en").
- To uninstall a Language: [Extensions -
  Manage](https://docs.joomla.org/Help4.x:Extensions:_Manage/en "Help4.x:Extensions: Manage/en")
- To change the Language for a User: [Users -
  New/Edit](https://docs.joomla.org/Help4.x:Users:_Edit_Profile/en "Help4.x:Users: Edit Profile/en")
- To set the Language of an Article: [Articles - New/Edit - Parameters -
  Advanced](https://docs.joomla.org/Help4.x:Articles:_Edit/en#Parameters_-_Advanced "Help4.x:Articles: Edit/en")
