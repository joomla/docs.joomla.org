<!-- Filename: Help4.x:Tags:_Options / Display title: Tags: Options -->

## Description

Used to set global defaults for menu items that display tags. These
default values will be used when "Use Global" is selected for an option
in a Tags menu item. For example, to show the 'Tag Name' for a Tagged
Items List in your Tags menu items, then set that option to "Show" here
and it will be the default value. You do not need to set any of these
options. Your Joomla site will work with the default settings.

## How to Access

- Select **Components **→** Tags** from the Administrator menu. Then...
  - Select the **Options** button in the Toolbar.

## Screenshot

<img
src="https://docs.joomla.org/images/2/2b/Help-4x-components-tags-configuration-screen-en.png"
decoding="async" data-file-width="800" data-file-height="723"
width="800" height="723"
alt="Help-4x-components-tags-configuration-screen-en.png" />

## Form Fields

### Tagged Items Tab

- **Default Tagged Items Layout**. Choose a default layout to for tagged
  items. This layout will be used when a user clicks on a tag that
  doesn't have a menu item defined.
- **Enable Versions.** (Yes/No). Whether or not to save version history
  for this component. If No, version history will not be saved for
  component items or for this component's categories.
- **Maximum Versions.** The maximum number of versions to store for an
  item. If an item is saved and the maximum number of versions has been
  reached, the oldest version will be deleted automatically. If set to
  0, then versions will never be deleted automatically. Also, specific
  versions may be flagged as "Keep Forever" and will not be deleted
  automatically. Note that versions may be deleted manually using the
  Delete button in the [Version
  History](https://docs.joomla.org/Help310:Components_Version_History/en "Help310:Components Version History/en")
  screen.
- **Show Tag Name**. For a layout with one tag, show the tag name.
- **Tag Image**. For a layout with one tag, show the image for the tag.
- **Tag Description**. Show or hide a description for the tag (only used
  when a single tag is selected).
- **Image**. Show the tag image (full image).
- **Order**. Order items will be displayed in.
- **Direction**. Sort order. Descending is highest to lowest. Ascending
  is lowest to highest.
- **Table Headings**. Show or hide the headings in list layouts.
- **Show Date**. Whether to show a date column in the list of articles.
  Select Hide to hide the date, or select which date you wish to show.
- **Item Images**. Shows the first image for each item in the list.
- **Item Description**. Whether to show or hide the description for each
  item in the list. The length may be limited using the Maximum
  Characters option.
- **Maximum Characters**. The maximum number of characters to display
  from the description in each tag.

### Item Selection Tab

<img
src="https://docs.joomla.org/images/2/2f/Help-4x-components-tags-configuration-item-selection-options-screen-en.png"
decoding="async" data-file-width="600" data-file-height="363"
width="600" height="363"
alt="Help-4x-components-tags-configuration-item-selection-options-screen-en.png" />

- **Minimum Search Length**. This setting controls the minimum character
  length for the search and adding tags using the tags field Ajax mode.
- **Match Type**. All will return items that have all of the tags. Any
  will return items that have at least one of the tags.
- **Child Tags**. Include or exclude child tags from the result list for
  a tag.
- **Maximum Items**. The maximum number of results to return.
- **Language Filter**. Optionally filter the list of tags based on
  language.

### List All Tags Tab

<img
src="https://docs.joomla.org/images/c/ce/Help-4x-components-tags-configuration-list-all-tags-options-screen-en.png"
decoding="async" data-file-width="600" data-file-height="393"
width="600" height="393"
alt="Help-4x-components-tags-configuration-list-all-tags-options-screen-en.png" />

- **Default List All Tags Layout**. Choose a default layout for List of
  all tags.
- **Order**. Order items will be displayed in.
- **Direction**. Sort order. Descending is highest to lowest. Ascending
  is lowest to highest.
- **Item Images**. Shows the first image for each item in the list.
- **Tag Description**. Shows or hides the description for each tag
  listed.
- **Maximum Characters**. The maximum number of characters to display
  from the description in each tag.
- **Hits**. Display the number of hits.

### Shared Layout Tab

<img
src="https://docs.joomla.org/images/d/d4/Help-4x-components-tags-configuration-shared-layout-options-screen-en.png"
decoding="async" data-file-width="600" data-file-height="307"
width="600" height="307"
alt="Help-4x-components-tags-configuration-shared-layout-options-screen-en.png" />

- **Filter Field**. Whether to show a Filter field for the list. Select
  Hide to hide the filter field.
- **Display Select**. Whether to show or hide the Display Select
  dropdown listbox.
- **Pagination**. Show or hide Pagination support. Pagination provides
  page links at the bottom of the page that allow the User to navigate
  to additional pages. These are needed if the Information will not fit
  on the page.
- **Pagination Results**. Show or hide pagination results information,
  for example, "Page 1 of 4".

### Data Entry Tab

<img
src="https://docs.joomla.org/images/d/df/Help-4x-components-tags-configuration-data-entry-options-screen-en.png"
decoding="async" data-file-width="600" data-file-height="194"
width="600" height="194"
alt="Help-4x-components-tags-configuration-data-entry-options-screen-en.png" />

- **Tag Entry Mode**. Ajax mode searches tag while typing and allows you
  on the fly tag creation. Nested tags show you a nested view with all
  the available tags.

### Integration Tab

<img
src="https://docs.joomla.org/images/6/6c/Help-4x-components-tags-configuration-integration-screen-en.png"
decoding="async" data-file-width="600" data-file-height="216"
width="600" height="216"
alt="Help-4x-components-tags-configuration-integration-screen-en.png" />

- **Show Feed Link**. Show or hide an RSS Feed Link. (A Feed Link will
  show up as a feed icon in the address bar of most modern browsers).

### Permissions Tab

This section lets you set up the default ACL permissions for all tags.
These permissions may be overridden for specific tags.

<img
src="https://docs.joomla.org/images/e/ee/Help-4x-components-tags-configuration-permissions-screen-en.png"
decoding="async" data-file-width="600" data-file-height="624"
width="600" height="624"
alt="Help-4x-components-tags-configuration-permissions-screen-en.png" />

To change the permissions for this extension, do the following.

- Select the **Group** by clicking its title located on the left.
- Find the desired **Action**. Possible Actions are:
  - **Configure ACL & Optons**. Users can edit the options and
    persimissions of this extension.
  - **Configure Optons Only**. Users can edit the options exept the
    persimissions of this extension.
  - **Access Administration Interface**. Users can access user
    administration interface of this extension.
  - **Create:** Users can create content of this extension.
  - **Delete:** Users can delete content of this extension.
  - **Edit:** Users can edit content of this extension.
  - **Edit State:** User can change the published state and related
    information for content of this extension.
  - **Edit Own:** Users can edit own created content of this extension.
- Select the desired permission for the action you wish to change.
  Possible settings are:
  - ***Inherited:*** Inherited for users in this Group from the Global
    Configuration permissions of this extension.
  - ***Allowed:*** Allowed for users in this Group. Note that, if this
    action is Denied at one of the higher levels, the Allowed permission
    here will not take effect. A Denied setting cannot be overridden.
  - ***Denied:*** Denied for users in this Group.
- Click **Save** in **Toolbar** at top. When the screen refreshes, the
  Calculated Setting column will show the effective permission for this
  Group and Action.

## Toolbar

- **Close**. Closes the current screen and returns to the previous
  screen without saving any modifications you may have made.

<!-- -->

- **Save.** Saves the Tags Options settings and stays in the current
  screen.

<!-- -->

- **Save & Close**. Saves the Tags Options settings and closes the
  current screen.

<!-- -->

- **Close**. Closes the current screen and returns to the previous
  screen without saving any modifications you may have made.

<!-- -->

- **Help**. Opens this help screen.

## Quick Tips

- If you are a beginning user, you can just keep the default values here
  until you learn more about using global options.
- If you are an advanced user, you can save time by creating good
  default values here. When you set up menu items and create tags, you
  will be able to accept the default values for most options.
