<!-- Filename: Help4.x:Installer:_Options / Display title: Installer: Options -->

## Description

Installer Options configuration allows setting of parameters used
globally for Installer.

## How to Access

- Select **System **→** Manage panel **→** Extensions** from the
  Administrator menu. Then...
  - Click the **Options** button on the Toolbar.

## Screenshot

<img
src="https://docs.joomla.org/images/c/c4/Help-4x-Components-Installer-Options-en.png"
decoding="async" data-file-width="800" data-file-height="335"
width="800" height="335"
alt="Help-4x-Components-Installer-Options-en.png" />

## Form Fields

### Preferences Tab

- **Joomla! Extensions Directory.** (Show message/Hide message) Show or
  hide the information at the top of the installer page about the
  Joomla! Extensions Directory.
- **Updates Caching (in hours).** For how many hours should Joomla cache
  update information. This is also the cache time for the Update
  Notification Plugin, if enabled.
- **Minimum Stability.** The minimum stability of the extension updates
  you would like to see. Development is the least stable, Stable is
  production quality. If an extension doesn't specify a level it is
  assumed to be Stable.

### Permissions Tab

<img
src="https://docs.joomla.org/images/1/1f/Help-4x-Components-Installer-Options-Permissions-en.png"
decoding="async" data-file-width="600" data-file-height="603"
width="800" height="804"
alt="Help-4x-Components-Installer-Options-Permissions-en.png" />

  
To change the permissions for this extension, do the following.

- Select the **Group** by clicking its title located on the left.
- Find the desired **Action**. Possible Actions are:
  - **Configure ACL & Optons.** Users can edit the options and
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

At the top of the page you will see the toolbar shown in the Screenshot
above. The functions are:

- **Save.** Saves the Installer options and stays in the current screen.

<!-- -->

- **Save & Close**. Saves the Installer options and closes the current
  screen.

<!-- -->

- **Close**. Closes the current screen and returns to the previous
  screen without saving any modifications you may have made.

<!-- -->

- **Help**. Opens this help screen.
