<!-- Filename: Help4.x:Content_Security_Policy:_Options / Display title: Content Security Policy: Options -->

## Description

The Content Security Policy Options screen is used to set up the default
CSP.

## How to Access

- Select **System **→** Global Configuration** from the Administrator
  menu. Then...
  - Select **Content Security Policy** from the Component list.

## Screenshot

<img
src="https://docs.joomla.org/images/thumb/4/4d/Content-security-policy-options-en.png/800px-Content-security-policy-options-en.png"
decoding="async"
srcset="https://docs.joomla.org/images/thumb/4/4d/Content-security-policy-options-en.png/1200px-Content-security-policy-options-en.png 1.5x, https://docs.joomla.org/images/4/4d/Content-security-policy-options-en.png 2x"
data-file-width="1500" data-file-height="724" width="800" height="386"
alt="Content-security-policy-options-en.png" />

## Form Fields

### Content-Security-Policy (CSP)

These options control the Content-Security-Policy.

- **Content Security Policy (CSP).** (Enabled/Disabled) Whether to
  Enable or Disable the Content-Security-Policy.
- **Mode.** (Custome/Detect/Automatic) Configures the mode the plugin
  generates the Content-Security-Policy on. The Custom mode allows
  manual configuration. The Detect mode enables the report collection
  and the automatic mode uses the collected reports to generate the
  Content-Security-Policy.
- **Report-Only.** (Enabled/Disabled) Use the header
  'Content-Security-Policy-Report-Only' instead of
  'Content-Security-Policy'.
- **Nonce.** (Enabled/Disabled) Enable the whitelist for specific inline
  scripts using a cryptographic nonce (number used once) for all scripts
  and styles using the Joomla API. Specifying a nonce makes a modern
  browser ignore 'unsafe-inline' which should still be set for older
  browsers without nonce support.
- **Script hashes.** (Enabled/Disabled) Enable the optional hash based
  whitelist inline scripts using a cryptographic hash for all scripts
  using the Joomla API. Specifying hashes makes a modern browser ignore
  'unsafe-inline' which should still be set for older browsers without
  hash support.
- **Style hashes.** (Enabled/Disabled) Enable the optional hash based
  whitelist inline styles using a cryptographic hash for all styles
  using the Joomla API. Specifying hashes makes a modern browser ignore
  'unsafe-inline' which should still be set for older browsers without
  hash support.
- **frame-ancestors 'self'.** (Enabled/Disabled)Enable the CSP
  clickjacking protection frame-ancestors and only allow the origin
  'self'. Please use the form below to allow origins other than 'self'.
- **Add Directive.** (Subform) You can use this subform to add as many
  entries as you want for the Content-Security-Policy by setting the
  **Policy Directive**, **Value** and **Client**.

### Permissions

This section lets you set up the default ACL permissions for the
Content-Security-Policy Component To change the permissions for this
extension, do the following.

- Select the **Group** by clicking its title located on the left.
- Find the desired **Action**. Possible Actions are:
  - **Configure ACL & Optons**. Users can edit the options and
    permissions of this extension.
  - **Configure Optons Only**. Users can edit the options exept the
    permissions of this extension.
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

At the top of the page you will see the toolbar shown in the
[Screenshot](#Screenshot) above. The functions are:

- **Save**. Saves the item and stays in the current screen.

<!-- -->

- **Save & Close**. Saves the item and closes the current screen.

<!-- -->

- **Close**. Closes the current screen and returns to the previous
  screen without saving any modifications you may have made. This
  toolbar icon is not shown if you are creating a new item.

<!-- -->

- **Help**. Opens this help screen.

## Quick Tips

- By default the Content-Security-Policy is disabled and has to be
  enabled and configured.
- Please note that this Component requires the Plugin **System - HTTP
  Headers** (plg_system_httpheaders) to be enabeld.

## Related Information

- To review the collected reports please see: <a
  href="https://docs.joomla.org/index.php?title=Help4.x:Content_Security_Policy_Reports/en&amp;action=edit&amp;redlink=1"
  class="new"
  title="Help4.x:Content Security Policy Reports/en (page does not exist)">Components
  CSP Reports</a>
- More details on HTTP Header Tools: [Tutorial: Http Header Management
  in Joomla
  4](https://docs.joomla.org/J4.x:Http_Header_Management/en "J4.x:Http Header Management/en")
