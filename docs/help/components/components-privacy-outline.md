<!-- Filename: Help4.x:Components_Privacy_Outline / Display title: Components Privacy Outline -->

## Privacy Outline

### Content

The Joomla Privacy Tool Suite consists of the following parts:

- **Administrator Component.** Manages User information Privacy
  requests.
- **Module - Privacy Dashboard.** Places a Privacy panel on the Home
  dashboard.
- **Module - Privacy Requests.** Places a Privacy Requests panel on the
  Privacy dashboard.
- **Module - Privacy Status.** Places a Privacy Status panel on the
  Privacy dashboard.
- **Menu Item - Create Request.** Shows a form to display an Information
  Request. To be created.
- **Plugin - System - Privacy Consent.** Adds consent fields to personal
  information forms such as Registration. To be enabled.
- **Plugin - User - Terms and Condition.** Requests user's consent to
  the site's terms and conditions. To be enabled.
- **Plugin - Content - Confirm Consent.** Adds a required checkbox to a
  form, for example the core contact form. To be enabled.
- **Plugin - Privacy - Various.** More plugins, enabled by default,
  without significant parameters to set.

On installation the Privacy Tool Suite is ready for Administrator use
without enabling plugins or creating a menu item.

### Workflow

This is a typical sequence of events:

- An information request arrives. It must include a valid email address
  for a data Subject. The Subject does not have to be a registered user.
  For example, the Subject may be a contact added by an Administrator.
- If the message is not submitted by the Subject via a site Personal
  Information form:
  - The Administrator goes to
    **Users **→** Privacy **→** Requests **→** New** to create a new
    information request. A message is sent to the email address provided
    inviting the Subject to confirm this is a genuine request.
- If the message is submitted via a site Personal Information form the
  Subject is sent a confirmation request message automatically.
- The Subject selects the link in the email message to open the
  confirmation form. On submission the Subject sees a confirmation
  message.
- The Administrator sees that Private Messages in the Title Bar has
  pending messages. There will also be a system email message.
- The Administrator goes to **Users **→** Privacy **→** Requests** and
  sees that the request status has changed to **Confirmed**.
- For a data Export request there are adjacent Export and Email buttons.
  - The Administrator selects the Export button to have a look at the
    data to be exported. This is in XML format but displays sensible in
    Firefox.
  - The Adminstrator selects the Email button to send the exported data
    to the Subject.
- For a data Remove request there is an adjacent Delete button.
  - The Administrator selects the delete button to anonymise the data
    for the user. The user is no longer able to login.
- Select the email address of the data Subject to open the Review
  Information Request form.
- Select the Complete button in the Toolbar.
- The Information Requests list shows the Status as Complete and the
  Action buttons have vanished.

Note that this suite does not display a Cookie permissions form.
