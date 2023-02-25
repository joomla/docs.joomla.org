<!-- Filename: Help4.x:Redirect:_Options / Display title: Redirect: Options -->

## Description

Redirect Options configuration allows setting of parameters used
globally for Redirects.

## How to Access

- Select **System **→** Redirects in the Manage Panel** from the
  Administrator menu. Then...
  - Select the **Options** button in the Toolbar.

If you see this error message:

<img
src="https://docs.joomla.org/images/4/4e/Help-j4x-Components-Redirect-Manager-Options-error-plugin-en.png"
decoding="async" data-file-width="600" data-file-height="71" width="600"
height="71"
alt="Help-j4x-Components-Redirect-Manager-Options-error-plugin-en.png" />

Go to **System **→** Plugins** and enable the System Redirect plugin.
Then come back here.

## Screenshot

<img
src="https://docs.joomla.org/images/1/10/Help-4x-Components-Redirect-Options-en.png"
decoding="async" data-file-width="800" data-file-height="329"
width="800" height="329"
alt="Help-4x-Components-Redirect-Options-en.png" />

## Form Fields

### Advanced Tab

- **Activate Advanced Mode.** (Yes/No) Enable more advanced
  functionality for the component. When enabled the Redirects Edit form
  has a required **Redirect Status Code** field that allows you to
  change the default value from 301 to 302 or 303. Only enable Advanced
  Mode if you know how to use Redirect Status codes.
- **Bulk Import Separator.** The separator used for bulk import, by
  default it is '\|' but it can be ',' for a copy/paste from a CSV file
  for instance.
- **Import State.** (Enable/Disable) When batch importing redirects,
  enable or disable by default.

### Permissions Tab

<img
src="https://docs.joomla.org/images/5/55/Help-4x-Components-Redirects-Options-Permissions-en.png"
decoding="async" data-file-width="600" data-file-height="661"
width="600" height="661"
alt="Help-4x-Components-Redirects-Options-Permissions-en.png" />

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

- **Save.** Saves the Redirects options and stays in the current screen.

<!-- -->

- **Save & Close**. Saves the Redirects options and closes the current
  screen.

<!-- -->

- **Close**. Closes the current screen and returns to the previous
  screen without saving any modifications you may have made.

<!-- -->

- **Help**. Opens this help screen.
