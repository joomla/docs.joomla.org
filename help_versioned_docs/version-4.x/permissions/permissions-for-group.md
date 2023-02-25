<!-- Filename: Help4.x:Permissions_for_Group / Display title: Permissions for Group -->

## Description

The Advanced Permissions Report maps out the exact permissions for any
given user group across all assets on your Joomla! installation. It is
useful for debugging user access problems.

## How to access

- Select **Users â†’ Groups** from the Administrator menu. Then...
  - Select the **Permissions** icon for a specific group from the user
    groups list.

## Screenshot

<img
src="https://docs.joomla.org/images/0/02/Help-4x-debug_groups-screen-en.png"
decoding="async" data-file-width="800" data-file-height="787"
width="800" height="787" alt="Help-4x-debug groups-screen-en.png" />

## Column Headers

In the table containing the assets from your Joomla! site, you will see
different columns. For each asset the permission for this group is
shown, color coded as per legend.

- **Asset Title.** The asset as we know it.
- **Asset Name.** The asset as known internally.
- **Site Login.** Allows users in the group to login to the Frontend
  site.
- **Administrator Login.** Allows users in the group to login to the
  Backend Administrator site.
- **Web Services Login.** Allows utilization of the Joomla Web Services
  API via a Super User API Token.
- **Offline Access.** Allows users in the group to access the Frontend
  site when site is offline.
- **Super User.** Allows users in the group to perform any action over
  the whole site regardless of any other permission settings.
- **Configure Options Only.** Allows users in the group to edit the
  options (except permissions) of any extension.
- **Access Administration Interface.** Allows users in the group to
  access all of the administration interface except Global
  Configuration.
- **Create.** Allows users in the group to create any content in any
  extension.
- **Delete.** Allows users in the group to delete any content in any
  extension.
- **Edit.** Allows users in the group to edit any content in any
  extension.
- **Edit State.** Allows users in the group to edit the state of any
  content in any extension.
- **Edit Own.** Allows users in the group to edit any content they own
  in any extension.
- **Edit Custom Field Value.** Allows users in the group to edit any
  value of custom fields submitted in any extension.
- **LFT.** The left and right values in the hierarchy. See [Using nested
  sets](https://docs.joomla.org/Using_nested_sets "Using nested sets")
  in English.

<!-- -->

- **ID**. This is a unique identification number for this item assigned
  automatically by Joomla. It is used to identify the item internally,
  and you cannot change this number. When creating a new item, this
  field displays "0" until you save the new entry, at which point a new
  ID is assigned to it.

## List Filters

Near the top of the page you will see the filter bar shown in the
Screenshot above. The functions are:

- **Search**. Enter part of the asset name and press the Search icon to
  find matching assets. Press **x** or Clear to clear the search field
  and restore the list of assets.
- **Component**. Filter by any installed component in Joomla.
- **Start Level**. Start level of the item.
- **End Level**. End level of the item.

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

At the top of the page you will see the toolbar shown in the Screenshot
above. The functions are:

- **Close**. Closes the current screen and returns to the previous
  screen without saving any modifications you may have made.

<!-- -->

- **Options.** Opens the Options window where settings such as default
  parameters can be edited.

<!-- -->

- **Help**. Opens this help screen.

## Legend

At the bottom you will see the legend:

<img
src="https://docs.joomla.org/images/a/a5/Help31-Help-Permissions-Report-Legend-en.png"
decoding="async" data-file-width="320" data-file-height="36" width="320"
height="36" alt="Help31-Help-Permissions-Report-Legend-en.png" />

- **Not Allowed**. Action not allowed.
- **Allowed**. Action allowed.
- **Forbidden**. Action forbidden.

## Related Information

- [Global
  Configuration](https://docs.joomla.org/Help4.x:Site_Global_Configuration/en "Help4.x:Site Global Configuration/en")
