<!-- Filename: J3.x:Plugin_Joomla_Update_Notification / Display title: Plugin Joomla Update Notification -->

The **Joomla! Update Notification System Plugin** periodically checks
for the availability of new Joomla! versions. When an update is
available this plugin will send an email to the system administrator,
reminding you to update Joomla.

The emails sent by the Joomla! Update Notification System Plugin are
intended to help keep your software up to date, which helps your website
stay secure. It is recommended to install the update as soon as
possible. See the [Joomla! Security
Checklist](https://docs.joomla.org/Security_Checklist/Joomla!_Setup "Security Checklist/Joomla! Setup")
for more security tips.

## Plugin Options

### Status

- **Enabled:** When the plugin is enabled it will send email
  notifications when an update becomes available.

<img src="https://docs.joomla.org/images/6/62/Plugin-status-enabled.png"
class="thumbborder" decoding="async" data-file-width="250"
data-file-height="75" width="250" height="75" alt="Plugin Enabled" />

- **Disabled:** When the plugin is disabled, no emails will be sent.

<img
src="https://docs.joomla.org/images/2/28/Plugin-status-disabled.png"
class="thumbborder" decoding="async" data-file-width="250"
data-file-height="75" width="250" height="75" alt="Plugin Disabled" />

### Super User Emails

The email notification is sent only to users who have the Super User
privilege. This field allows you to select which Super users will
receive the email notifications.

- If left blank, all Super Users of the site will receive the update
  notification email.
- To select which Super Users receive the update notification enter the
  email addresses for the Super Users here. If there are multiple Super
  Users email addresses use a comma to separate them.

<img
src="https://docs.joomla.org/images/3/3d/Email-notification-plugin-params.png"
class="thumbborder" decoding="async" data-file-width="442"
data-file-height="107" width="442" height="107"
alt="Email Notification Plugin Parameters" />

### Email Language

The notification can be sent in any language you have are using in your
website.

- **Auto (default)** sends the update notification email in the default
  site language.
- Selecting a language other than Auto (default) forces the update
  notification emails to be sent in this specific language.

### Frequency of Notification Emails

The frequency of emails can only be controlled by the updates cache
setting (0-24 hrs). Default is 6 hours which means every 6 hours your
Joomla website will check for an update to core and all extensions,
plugins, modules and templates installed. If this plugin is enabled, you
will get a notification that a core Joomla update is available. 0 would
send an update every time the site is accessed. 0 is not recommended if
your Joomla website is a popular website.

- To update the update cache setting, go to
  **Extensions **→** Manage **→** Manage** and Click the Options button.
- Set the update cache to the number of hours (0-24) between checking
  for an update and Click Save or Save and Close.

## Quick Tips

- To turn off Joomla! update email notifications simply disable the
  plugin.
- The email Subject and Body text can be modified using a [Language
  String
  Override](https://docs.joomla.org/J3.x:Language_Overrides_in_Joomla "Special:MyLanguage/J3.x:Language Overrides in Joomla").
  - Subject Language String: PLG_SYSTEM_UPDATENOTIFICATION_EMAIL_SUBJECT
  - Body Language String: PLG_SYSTEM_UPDATENOTIFICATION_EMAIL_BODY

## Related Information

- [Language
  Overrides](https://docs.joomla.org/J3.x:Language_Overrides_in_Joomla "Special:MyLanguage/J3.x:Language Overrides in Joomla")
- [Updating
  Joomla!](https://docs.joomla.org/J3.x:Updating_Joomla_(Update_Method) "Special:MyLanguage/J3.x:Updating Joomla (Update Method)")
- [Joomla! Security
  Checklist](https://docs.joomla.org/Security_Checklist/Joomla!_Setup "Special:MyLanguage/Security Checklist/Joomla! Setup")
