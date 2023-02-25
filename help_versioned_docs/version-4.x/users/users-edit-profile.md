<!-- Filename: Help4.x:Users:_Edit_Profile / Display title: Users: Edit Profile -->

## Description

The User Edit screen is used to create a new user or edit an existing
user.

## How to access

To edit an existing user:

- Select **Users **→** Manage** from the Administrator menu. Then...
  - Search for the required user and select the name link in the
    **Name** column.

To create a new user:

- Select **Users **→** Manage** from the Administrator menu. Then...
  - Select the **New** button in the Toolbar.
- Or... Select **Users **→** Manage **→** Plus icon** from the
  Administrator menu.
- Or... Select **Users **→** Dashboard icon** from the Administrator
  menu. Then...
  - Select the **Plus** icon from the Users panel.
- Or... Select **Home Dashboard **→** Site Panel **→** Users Plus icon**
  starting from the Administrator menu.

## Screenshot

<img
src="https://docs.joomla.org/images/7/7a/Help-4x-users-user-manager-add-new-user-en.png"
decoding="async" data-file-width="800" data-file-height="646"
width="800" height="646"
alt="Help-4x-users-user-manager-add-new-user-en.png" />

## Form Fields

### Account Details

- **Name**. Enter the name of the user.
- **Login Name**. Enter the login name (Username) for the user.
- **Password**. Fill in a (new) password. Although this field is not
  required, the user will not be able to log in when no password is set.
- **Confirm Password**. Fill in the password from the field above again,
  to verify it. This field is required when you filled in the New
  password field.
- **Email**. Enter an email address for the user.
- **Registration Date**. Registration Date of the user.
- **Last Visit Date**. Date the user visited the site last time.
- **Last Reset Date**. Date and time of last password reset.
- **Password Reset Count**. Number of password resets since starting the
  last reset time.
- **Receive System Emails**. (*Yes*/*No*) If set to yes, the user will
  receive system emails.
- **User Status**. (*Blocked*/*Enabled*) Enable or block this user.
- **Require Password Reset**. (*Yes*/*No*) If set to yes, the user will
  have to reset their password the next time they log into the site.
- **ID**. Record number in the database.

### Assigned User Groups

<img
src="https://docs.joomla.org/images/1/14/Help-4x-users-user-manager-add-new-user-assigned-user-groups-en.png"
decoding="async" data-file-width="600" data-file-height="454"
width="600" height="454"
alt="Help-4x-users-user-manager-add-new-user-assigned-user-groups-en.png" />

### Basic Settings

<img
src="https://docs.joomla.org/images/c/c3/Help-4x-users-user-manager-add-new-user-basic-settings-en.png"
decoding="async" data-file-width="600" data-file-height="275"
width="600" height="275"
alt="Help-4x-users-user-manager-add-new-user-basic-settings-en.png" />

- **Backend Template Style**. (*Use Default*/*Hathor - Default*/*isis -
  Default*) Select the template style for the Administrator Backend
  interface. This will only affect this User.
- **Backend Language**. (*Use Default*/*English (United Kingdom)*)
  Select the Language for the Administrator Backend interface. This will
  only affect this User.
- **Frontend Language**. (*Use Default*/*English (United Kingdom)*)
  Select the Language for the frontend interface. This will only affect
  this User.
- **Editor**. (*Use Default*/*Editor - CodeMirror*/*Editor -
  None*/*Editor - TinyMCE*) Editor for this user.
- **Time Zone**. (*Use Default*/*Abidjan*/*Accra*/*Addis
  Ababa*/*Algiers*/*Asmara*/...) Time zone for this user.

### Accessibility Settings

<img
src="https://docs.joomla.org/images/3/33/Help-4x-users-user-manager-super-user-accessibility-settings-en.png"
decoding="async" data-file-width="600" data-file-height="192"
width="600" height="192"
alt="Help-4x-users-user-manager-super-user-accessibility-settings-en.png" />

- **Monochrome**. Yes/No
- **High Contrast**. Yes/No
- **Highlight Links**. Yes/No
- **Increase Font Size**. Yes/No

### User Actions Log Options *(tab available for Super Users only)*

<img
src="https://docs.joomla.org/images/1/15/Help-4x-users-user-manager-super-user-actionslog-settings-en.png"
decoding="async" data-file-width="600" data-file-height="220"
width="600" height="220"
alt="Help-4x-users-user-manager-super-user-actionslog-settings-en.png" />

- **Send notifications for User Actions Log**. (*Yes/No*) If set to yes,
  the User will receive user actions log notification by email
- **Select events to be notified for**. Select the user actions log
  notifications to be sent by email.

### W3C Web Authentication (WebAuthn) Login

This tab is only present when the site is accessed using https. To set
up passwordless login you need a hardware device, available from Amazon
and similar outlets for about £15, or a device with fingerprint or face
recognition or similar biometric software. You may add more than one
authenticator. Once set up, you can login by clicking the Web
Authentication button in the Login form and then pressing the button on
the device when prompted.

This tab is present but cannot be used in the User edit form because
passwordless login can only be set up by the individual user via the
Edit Profile form.

### Joomla API Token

This tab is used to manage the security tokens used for authenticating
to the Joomla API application (remote access to your site). If you are
not sure what this does chances are you don't need it and can safely
ignore these settings.

The token is only visible for your own account.

### Multi-factor Authentication

This tab allows you to set one or more methods to allow access to your
account after login with Username and Password. It is only present when
editing your own profile. There are several methods available. If you
lose access to one method for any reason you can choose another method
from the post-login verification screen. The alternative mthods must
have been set up in advance!

#### Backup Codes

This method generates a set of numbers that you can save or print. Each
number can be used only once, so remember to amend your list after use.

#### Verification code

An extra form to fill out with alternative methods of setting up the
code. Have a look and click the Cancel button if you decide not to
proceed.

#### Yubi Key

This is for another type of hardware key that provides a code on a
screen display. Have a look and select Cancel if you decide not to
proceed.

#### Web Authentication

For a hardware device with a button to press. Have a look and select
Cancel if you decide not to proceed. Note that this method will be
bypassed if you use the separate WebAuthn Login method.

#### Code by Email

With this method a code is sent to your email address. You will be
prompted to enter that code to gain site access. It is a one-time code.
A new one is sent for every login. Have a look and select Cancel if you
decide not to proceed.

## Toolbar

At the top of the page you will see the toolbar shown in the
[Screenshot](#Screenshot) above. The functions are:

- **Save**. Saves the item and stays in the current screen.

<!-- -->

- **Save & Close**. Saves the item and closes the current screen.

<!-- -->

- **Save & New**. Saves the item and keeps the editing screen open and
  ready to create another item.

<!-- -->

- **Cancel**. Closes the current screen and returns to the previous
  screen without saving any modifications you may have made. Or

<!-- -->

- **Close**. Closes the current screen and returns to the previous
  screen without saving any modifications you may have made. This
  toolbar icon is not shown if you are creating a new item.
- **Activate & Send Email.** Activate the user and send an email
  notifying that their account has been activated. -OR-
- **Send Activation Reminder.** An email will be sent to the user
  notifying that their account has been activated

<!-- -->

- **Help**. Opens this help screen.

## Quick tips

- Name, Login Name, and Email are required.
- If you did not fill in a particular language, editor, help site and/or
  time zone, the default settings from the Global Configuration,
  Language Manager and/or Template Manager are set.

## Related information

- [Users](https://docs.joomla.org/Help4.x:Users/en "Help4.x:Users/en")
- [Users:
  Groups](https://docs.joomla.org/Help4.x:Users:_Groups/en "Help4.x:Users: Groups/en")
- [ACL Tutorial for Joomla!
  3.x](https://docs.joomla.org/J3.x:Access_Control_List_Tutorial/en "J3.x:Access Control List Tutorial/en")
