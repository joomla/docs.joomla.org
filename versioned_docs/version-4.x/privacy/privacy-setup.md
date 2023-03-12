<!-- Filename: J4.x:Privacy_Setup / Display title: Privacy Setup -->

## Privacy Component

The Privacy Component is used to manage privacy information, to gather
requests for information or requests to have information deleted. It is
based on email addresses so most obviously applies to registered users
who must supply an email address during registration. It also applies to
data on unregistered users whose email addresses were supplied via the
Contacts component. It does not implement the permission to use cookies
or tracking required by GDPR.

When personal identifiable information is collected you should ensure:

- The user is informed why you are requesting this information in plain
  and easy to understand language.
- The user knows what data you collect about them.
- The user knows what you will be using the data for.
- The user has actively consented to your usage of the data.

Typically, this information is described in a Privacy Policy article.

## Privacy Dashboard

The privacy dashboard provides a summary of the site **Privacy
Requests** and **Privacy Status**. To access:

- Select **Users **→** Privacy **→** +** from the Administrator menu.

<img
src="https://docs.joomla.org/images/thumb/c/ca/J4x-privacy-dashboard-en.png/800px-J4x-privacy-dashboard-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/c/ca/J4x-privacy-dashboard-en.png 1.5x"
data-file-width="1000" data-file-height="392" width="800" height="314"
alt="J4x-privacy-dashboard-en.png" />

There are two modules displayed by default in the Privacy Dashboard:

### Privacy Requests

This module provides a summary of the current information requests.

### Privacy Status

This module shows the status of options that site owners should attend
to:

- **Published Privacy Policy**: set a Privacy Policy article in the
  **System - Privacy Consent** plugin.
- **Published Request Form Menu Item**: set a menu item to allow
  authenticated users to submit requests.
- **Outstanding Urgent Requests**: check for confirmed requests older
  than the age specified in the component parameters (default 14 days)
  and alert the site owner of any requests requiring urgent attention.
- **Mail Sending Enabled**: the site must be able to send email to
  process information requests.
- **Database Encryption**: this is relevant where a remote database is
  used.

## Plugin: System - Privacy Consent

If this plugin is disabled, the Dashboard Privacy Status panel will show
that the Privacy Policy is **Not Available** and provide a link to the
plugin edit form. When enabled, the plugin requests any new user
registering on your site to consent to the Privacy Policy. All existing
users will be redirected to their User Profile so that they can consent.

To set up consents:

- Select **Home Dashboard **→** Plugins** from the Administrator menu.
- Find the **System - Privacy Consent** plugin (not to be confused with
  the Privacy - Consents plugin).
- Select to open the plugin data entry form.

<img
src="https://docs.joomla.org/images/thumb/2/21/J4x-privacy-plugin-system-privacy-consent-en.png/800px-J4x-privacy-plugin-system-privacy-consent-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/2/21/J4x-privacy-plugin-system-privacy-consent-en.png 1.5x"
data-file-width="1000" data-file-height="674" width="800" height="539"
alt="J4x-privacy-plugin-system-privacy-consent-en.png" />

- Set the **Status** to **Enabled**.
- Optional: Select or Create an article to link to from the Registration
  form. Or set the Privacy Type to Menu Item and Select or Create a menu
  item.
- Select the **Expiration** tab and **Toggle Inline Help** for an
  explanation of each field. Enable and adjust the parameters **if** you
  wish consents to expire after a selected number of days.

Notes for Multilingual sites:

**Short Privacy Policy** and **Redirect Message**: If you use the
default text then it will be displayed in the user's language. It is not
possible to translate the custom text. If you wish to customise the text
and display it in multiple languages then you should leave this field
blank and use the Joomla language override facility to customise the
`PLG_SYSTEM_PRIVACYCONSENT_NOTE_FIELD_DEFAULT` and the
`PLG_SYSTEM_PRIVACYCONSENT_REDIRECT_MESSAGE_DEFAULT` language strings
for each language installed.

**Privacy Article** and **Privacy Menu Item**: If you associate this
article or menu item with alternatives in other languages then the
privacy policy will be displayed in the correct language for the user.

## Plugin: User - Terms and Conditions =

When enabled, this plugin requests any new user registering on your site
to consent to the Terms and Conditions for using your site. All existing
users will be redirected to their User Profile so that they can consent.

This plugin is not enabled by default. To enable:

- Select **Home Dashboard **→** Plugins** from the Administrator menu.
- Find the **User - Terms and Conditions** plugin.
- Select to open the plugin data entry form.
- Set the **Status** to **Enabled**.
- Optional: Select or Create an article to link to from the Registration
  form.

Notes for Multilingual sites:

**Short Terms and Conditions**: If you use the default text then it will
be displayed in the user's language. It is not possible to translate the
custom text. If you wish to customise the text and display it in
multiple languages then you should leave this field blank and use the
Joomla language override facility to customise the
`PLG_USER_TERMS_NOTE_FIELD_DEFAULT` language strings for each language
installed.

**Terms & Conditions Article**: If you associate this article with
alternatives in other languages then the privacy policy will be
displayed in the correct language for the user.

## User Registration Consent View

Together, the two plugins appear on the User Registration form as in the
following screenshot:

<img
src="https://docs.joomla.org/images/thumb/6/60/J4x-privacy-consents-en.png/800px-J4x-privacy-consents-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/6/60/J4x-privacy-consents-en.png 1.5x"
data-file-width="1000" data-file-height="279" width="800" height="223"
alt="J4x-privacy-consents-en.png" />

## Menu Item: Privacy Information Request

Registered uses can request an information summary or removal via a menu
item. Setup as follows:

- Select **Menus **→** Bottom Menu** from the Administrator menu (use
  whichever menu is most convenient).
- Enter a suitable **Title**, example: **Privacy Information Request**.
- Use the **Select** button to open the Menu Item Type popup dialog.
- In the **Privacy** section select the **Create Request** item.
- Set the **Access** field to **Registered**.
- **Save & Close**.

Go to your site view and check that the menu item is not displayed when
you not logged in abd that it is displayed after login. Use the link and
try out the **Export** option. You can try out the **Remove** option
later using a dummy account. If there is a request pending you will see
an error message:

“Your information request could not be created. There is already an
active information request for this email address and request type.
Please contact the site owner for updates on this request.”

## Menu Item: Privacy Confirm Request

For SEF purposes, you can create a hidden menu item for the user to
confirm the request. This will be in the link sent by email.

- Select **Menus **→** Hidden Menu** from the Administrator menu (create
  a Hidden menu with no assigned module position, or see below).
- Enter a suitable **Title**, example: **Confirm Privacy Request**.
- Use the **Select** button to open the Menu Item Type popup dialog.
- In the **Privacy** section select the **Confirm Request** item.
- If you don't have a Hidden Menu then use your main menu and in the
  Link Type tab set **Display in Menu** to **No**.
- **Save & Close**.

## Administrator Menu Items

Have a look at the other Privacy Component menu items.

### Privacy Requests

This screen is the central location for processing and managing user
information requests. Please sea the related article on Privacy Workflow
for guidance on processing requests.

<img
src="https://docs.joomla.org/images/thumb/c/c0/J4x-privacy-information-requests-en.png/800px-J4x-privacy-information-requests-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/c/c0/J4x-privacy-information-requests-en.png 1.5x"
data-file-width="1000" data-file-height="363" width="800" height="290"
alt="J4x-privacy-information-requests-en.png" />

### Extension Capabilities

This screen collects and displays information about the privacy related
capabilities reported by individual extensions. It is intended to assist
in the preparation of documentation such as a privacy policy article or
a terms of service article.

<img
src="https://docs.joomla.org/images/thumb/d/de/J4x-privacy-capabilities-en.png/800px-J4x-privacy-capabilities-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/d/de/J4x-privacy-capabilities-en.png 1.5x"
data-file-width="1000" data-file-height="508" width="800" height="406"
alt="J4x-privacy-capabilities-en.png" />

The page contents come from language strings in the core, in the privacy
component and in plugins that implement the
onPrivacyCollectAdminCapabilities event. That includes:

- Authentication
- Captcha
- Installer
- Privacy
- System
- User

The information will be displayed in the language selected for
Administrator login.

### Consents

This screen displays a list of consents, most recent first. It will be
in the language in use in the consent form, typically during
registration. You can search by name for a specific user. Note that
consent to agree to the site Terms and Conditions is not recorded here.
That is only in the User Actions Log.

<img
src="https://docs.joomla.org/images/thumb/5/5c/J4x-privacy-consents-list-en.png/800px-J4x-privacy-consents-list-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/5/5c/J4x-privacy-consents-list-en.png 1.5x"
data-file-width="1000" data-file-height="469" width="800" height="375"
alt="J4x-privacy-consents-list-en.png" />
