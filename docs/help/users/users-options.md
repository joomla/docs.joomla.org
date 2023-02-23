<!-- Filename: Help4.x:Users:_Options / Display title: Users: Options -->

## Description

User Options set globally for all users include

- Captcha,
- registration allowed and type of registration,
- default user group for new users,
- reset password or username counter,
- new user registration email notice to administration and more.

## How to Access

**Users **→** Manage**

- click the **Options** toolbar button

## Screenshot

<img
src="https://docs.joomla.org/images/thumb/9/9d/Help-4x-Users-Options-screen-en.png/800px-Help-4x-Users-Options-screen-en.png"
decoding="async"
srcset="https://docs.joomla.org/images/thumb/9/9d/Help-4x-Users-Options-screen-en.png/1200px-Help-4x-Users-Options-screen-en.png 1.5x, https://docs.joomla.org/images/thumb/9/9d/Help-4x-Users-Options-screen-en.png/1600px-Help-4x-Users-Options-screen-en.png 2x"
data-file-width="2400" data-file-height="1500" width="800" height="500"
alt="Help-4x-Users-Options-screen-en.png" />

## Form Fields

### User Options

- **Allow User Registration**.
  - Yes: Users can register from the Frontend of the site using the
    'Create an Account' link provided on the [Login
    module](https://docs.joomla.org/Help4.x:Site_Modules:_Login/en "Special:MyLanguage/Help4.x:Site Modules: Login/en").
  - No: The 'Create an Account' link will not show.
- **New User Registration Group**. The
  [group](https://docs.joomla.org/Help4.x:Users:_Groups/en "Special:MyLanguage/Help4.x:Users: Groups/en")
  that users are assigned to by default when they register on the site.
  Defaults to 'Registered'.
- **Guest User Group**. The group that guests are assigned to (Guests
  are visitors to the site who are not logged in). It is possible to
  create content on the site that is visible to guests but not visible
  to logged in users. <a
  href="https://magazine.joomla.org/all-issues/june-2021/explore-the-core-controlling-user-access?"
  class="external text" target="_blank" rel="noreferrer noopener">Learn
  more.</a>
- **Send Password**. If set to 'Yes' the user's first password will be
  emailed to the user as part of the registration mail.
- **New User Account Activation**.
  - None: User account will be active immediately with no action
    required.
  - Self: User will receive an email with an activation link. The
    account will be activated when the user clicks the activation link.
  - Administrator: User will receive an email with an activation link.
    When the user clicks this link, the Site Admin will be notified via
    email and the Site Admin needs to activate the user's account.
- **Send Mail to Administrators**. Send email notification to
  administrators with 'New User Account Activation' set to 'None' or
  'Self'.
- **Captcha**. Use
  [Captcha](https://docs.joomla.org/Help4.x:Site_Global_Configuration/en#captcha "Special:MyLanguage/Help4.x:Site Global Configuration/en")
  for User Account Registration, User Password reminder and Username
  reminder.
- **Frontend User Parameters**.
  - Show: Users will be able to modify their [Basic
    Settings](https://docs.joomla.org/Help4.x:Users:_Edit_Profile/en#basicssettings "Special:MyLanguage/Help4.x:Users: Edit Profile/en")
    from the Frontend of the site.
  - Hide: User will not be able to change these settings.
  - Frontend Language. Default site language.
- **Change Username**. Allow user to change Username.

### Email Domain Options

<img
src="https://docs.joomla.org/images/thumb/5/58/Help-4x-Users-Options-email-domain-subscreen-en.png/600px-Help-4x-Users-Options-email-domain-subscreen-en.png"
decoding="async"
srcset="https://docs.joomla.org/images/thumb/5/58/Help-4x-Users-Options-email-domain-subscreen-en.png/900px-Help-4x-Users-Options-email-domain-subscreen-en.png 1.5x, https://docs.joomla.org/images/thumb/5/58/Help-4x-Users-Options-email-domain-subscreen-en.png/1200px-Help-4x-Users-Options-email-domain-subscreen-en.png 2x"
data-file-width="2002" data-file-height="1074" width="600" height="322"
alt="Help-4x-Users-Options-email-domain-subscreen-en.png" />

- **Domain Name**. Enter a list of allowed and disallowed email domains.
  By default, all domains are allowed.Wildcards (\*) are supported. For
  example:
  - \* (Asterisk): Allows or disallows all domains
  - \*.com: Allows or disallows all '.com' domains
  - \*.joomla.org: Allows or disallows all 'joomla.org' subdomains.
- **Rule** Select whether to allow or disallow the domain.

### Password Options

<img
src="https://docs.joomla.org/images/thumb/1/17/Help-4x-Users-Options-password-subscreen-en.png/600px-Help-4x-Users-Options-password-subscreen-en.png"
decoding="async"
srcset="https://docs.joomla.org/images/thumb/1/17/Help-4x-Users-Options-password-subscreen-en.png/900px-Help-4x-Users-Options-password-subscreen-en.png 1.5x, https://docs.joomla.org/images/thumb/1/17/Help-4x-Users-Options-password-subscreen-en.png/1200px-Help-4x-Users-Options-password-subscreen-en.png 2x"
data-file-width="2001" data-file-height="1231" width="600" height="369"
alt="Help-4x-Users-Options-password-subscreen-en.png" />

- **Maximum Reset Count**. The maximum number of password resets allowed
  within the time period. Zero indicates no limit.
- **Reset Time**. The time period, in hours, for the reset counter.
- **Minimum Lenght**. Set the minimum lenght for a password.
- **Minimum Integers**. Set the minimum number of integers that must be
  included in a password.
- **Minimum Symbols**. Set the minimum number of symbols (such as !@#\$)
  required in a password.
- **Minimum Upper Case**. Set the minimum number of upper case
  alphabetical characters required for a password.
- **Minimum Lower Case**. Set the minimum number of lower case
  alphabetical characters required for a password.

### Multi-factor Authentication

<img
src="https://docs.joomla.org/images/thumb/4/4f/Help-4x-Users-Options-multi-factor-authentication-subscreen-en.png/600px-Help-4x-Users-Options-multi-factor-authentication-subscreen-en.png"
decoding="async"
srcset="https://docs.joomla.org/images/thumb/4/4f/Help-4x-Users-Options-multi-factor-authentication-subscreen-en.png/900px-Help-4x-Users-Options-multi-factor-authentication-subscreen-en.png 1.5x, https://docs.joomla.org/images/thumb/4/4f/Help-4x-Users-Options-multi-factor-authentication-subscreen-en.png/1200px-Help-4x-Users-Options-multi-factor-authentication-subscreen-en.png 2x"
data-file-width="2003" data-file-height="1518" width="600" height="455"
alt="Help-4x-Users-Options-multi-factor-authentication-subscreen-en.png" />

- **Allowed frontend module positions**. When displaying the frontend
  Multi-factor Authentication page all modules will be hidden except
  those in the positions selected here.
- **Show title in frontend**. Display a title in the frontend
  Multi-factor Authentication verification page? Please note that the
  title is always displayed in the backend. If you need to change the
  title please override the language key 'COM_USERS_HEADING_MFA' using
  [Languages:
  Overrides](https://docs.joomla.org/Help4.x:Languages:_Overrides/en "Special:MyLanguage/Help4.x:Languages: Overrides/en").
- **Allowed backend module positions**. When displaying the backend
  Multi-factor Authentication page all modules will be hidden except
  those in the positions selected here. Please note that modules in the
  'title' position are always shown: this is required to show the
  backend page icon and title.
- **Disable Multi-factor Authentication**. Any user who belongs in *any*
  of the selected user groups will be exempt from Multi-factor
  Authentication. Even if they have set up Multi-factor Authentication
  methods they will not be asked to use them when they are logging in,
  nor will they be able to view them, remove them, or change their
  configuration.
- **Enforce Multi-factor Authentication**. Any user who belongs in *any*
  of the selected user groups will be required to enable Multi-factor
  Authentication before being able to use the site.
- **Frontend template style**. Choose the frontend template style to use
  in the Multi-factor Authentication page. Select 'Use Default" to use
  the default site template style.
- **Multi-factor Authentication after silent login**. Should the user
  have to go through Multi-factor Authentication after a silent user
  login? Silent logins are those which do not require a username and
  password for example the Remember Me feature, WebAuthn etc.
- **Silent login authentication response types (for experts)**. For
  experts. A commaâ€“separated list of Joomla authentication response
  types which are considered silent logins. The default is 'cookie' (the
  Remember Me feature) and 'passwordless' (WebAuthn).
- **Onboard new users**. If the user has not yet set up Multi-factor
  Authentication and this option is enabled they will be redirected to
  the Multi-factor Authentication setup page or the custom URL you set
  up below. This is meant to be a simple way to to let your users know
  that Multi-factor Authentication is an option on your site.
- **Custom redirection URL**. If it's not empty redirects to this URL
  instead of the Multi-factor Authentication setup page when the option
  above is enabled.Warning: This must be a URL inside your site. You
  cannot log in to an external link or to a different subdomain.

### User Notes History

<img
src="https://docs.joomla.org/images/thumb/7/70/Help-4x-Users-Options-user-notes-history-subscreen-en.png/600px-Help-4x-Users-Options-user-notes-history-subscreen-en.png"
decoding="async"
srcset="https://docs.joomla.org/images/thumb/7/70/Help-4x-Users-Options-user-notes-history-subscreen-en.png/900px-Help-4x-Users-Options-user-notes-history-subscreen-en.png 1.5x, https://docs.joomla.org/images/thumb/7/70/Help-4x-Users-Options-user-notes-history-subscreen-en.png/1200px-Help-4x-Users-Options-user-notes-history-subscreen-en.png 2x"
data-file-width="2002" data-file-height="564" width="600" height="169"
alt="Help-4x-Users-Options-user-notes-history-subscreen-en.png" />

- **Enable Versions**. Save version history for User Notes.
- **Maximum Versions**. The maximum number of versions to store for a
  User Note. If a User Note is saved and the maximum number of versions
  has been reached, the oldest version will be deleted automatically. If
  set to 0, then versions will never be deleted automatically. [Learn
  more.](https://docs.joomla.org/Help4.x:Components_Version_History/en "Special:MyLanguage/Help4.x:Components Version History/en")

### Mass Mail Users

<img
src="https://docs.joomla.org/images/thumb/5/5f/Help-4x-Users-Options-mass-mail-users-subscreen-en.png/600px-Help-4x-Users-Options-mass-mail-users-subscreen-en.png"
decoding="async"
srcset="https://docs.joomla.org/images/thumb/5/5f/Help-4x-Users-Options-mass-mail-users-subscreen-en.png/900px-Help-4x-Users-Options-mass-mail-users-subscreen-en.png 1.5x, https://docs.joomla.org/images/thumb/5/5f/Help-4x-Users-Options-mass-mail-users-subscreen-en.png/1200px-Help-4x-Users-Options-mass-mail-users-subscreen-en.png 2x"
data-file-width="2002" data-file-height="878" width="600" height="263"
alt="Help-4x-Users-Options-mass-mail-users-subscreen-en.png" />

- **Subject Prefix**. Enter optional text to be inserted automatically
  before the subject of the mass email.
- **Mailbody Suffix**. Enter optional text to be inserted automatically
  after the body of the email (for example, a signature).

### Integration

<img
src="https://docs.joomla.org/images/thumb/f/f9/Help-4x-Users-Options-integration-subscreen-en.png/600px-Help-4x-Users-Options-integration-subscreen-en.png"
decoding="async"
srcset="https://docs.joomla.org/images/thumb/f/f9/Help-4x-Users-Options-integration-subscreen-en.png/900px-Help-4x-Users-Options-integration-subscreen-en.png 1.5x, https://docs.joomla.org/images/thumb/f/f9/Help-4x-Users-Options-integration-subscreen-en.png/1200px-Help-4x-Users-Options-integration-subscreen-en.png 2x"
data-file-width="2002" data-file-height="593" width="600" height="178"
alt="Help-4x-Users-Options-integration-subscreen-en.png" />

- **Enable Custom Fields**. Enable the creation of custom fields.

### Permissions

This section lets you set up the default [Access Control
List](https://docs.joomla.org/Access_Control_List/en "Special:MyLanguage/Access Control List/en")
permissions for all users.

<img
src="https://docs.joomla.org/images/thumb/f/f8/Help-4x-Users-Options-permissions-subscreen-en.png/600px-Help-4x-Users-Options-permissions-subscreen-en.png"
decoding="async"
srcset="https://docs.joomla.org/images/thumb/f/f8/Help-4x-Users-Options-permissions-subscreen-en.png/900px-Help-4x-Users-Options-permissions-subscreen-en.png 1.5x, https://docs.joomla.org/images/thumb/f/f8/Help-4x-Users-Options-permissions-subscreen-en.png/1200px-Help-4x-Users-Options-permissions-subscreen-en.png 2x"
data-file-width="2002" data-file-height="1496" width="600" height="448"
alt="Help-4x-Users-Options-permissions-subscreen-en.png" />

To change the permissions for users, do the following.

1.  Select the **Group** by clicking its title located on the left.
2.  Find the desired **Action**.
    - **Configure ACL & Options**. Users can edit the options and
      permissions.
    - **Configure Options Only**. Users can edit the options exept the
      permissions.
    - **Access Administration Interface**. Users can access user
      administration interface.
    - **Create**. Users can create users.
    - **Delete**. Users can delete users.
    - **Edit**. Users can edit users.
    - **Edit State**. User can change the published state and related
      information.
    - **Edit Custom Field Value**. Users can edit any value of custom
      fields submitted in users.
3.  Select the desired permission for the action you wish to change.
    - **Inherited**. Inherited for users in this Group from the [Global
      Configuration](https://docs.joomla.org/Help4.x:Site_Global_Configuration/en#permissions "Special:MyLanguage/Help4.x:Site Global Configuration/en")
      permissions.
    - **Allowed**. Allowed for users in this Group.Note: If this action
      is Denied at one of the higher levels, the Allowed permission here
      will not take effect. A Denied setting cannot be overridden.
    - **Denied**. Denied for users in this Group.
4.  Click **Save** in **Toolbar** at top. When the screen refreshes, the
    Calculated Setting column will show the effective permission for
    this Group and Action.

## Toolbar

At the top of the page you will see the toolbar shown in the
[Screenshot](#screenshot) above.

- **Save**. Saves the users options and stays in the current screen.
- **Save & Close**. Saves the users options and closes the current
  screen.
- **Close**. Closes the current screen and returns to the previous
  screen without saving any modifications you may have made.
- **Toggle Inline Help**. Show help text below some options.
- **Help**. Opens this help screen.

## Quick Tips

If you are a beginning user, you can just keep the default values here
until you learn more about using global options.

## Related Information

|                                                                                                                                                                   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Related Help Screens                                                                                                                                              | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| <span class="mw-selflink selflink">Users: Options</span>                                                                                                          | User Options configuration allows setting of parameters used globally for all users. Control the use of Captcha, registration allowed and type of registration, default user group new users, reset password or username counter, and new user registration email notice to administration.                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [Users](https://docs.joomla.org/Help4.x:Users/en "Help4.x:Users/en")                                                                                              | The Users list is used to find, add, and edit users.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [Users: Viewing Access Levels](https://docs.joomla.org/Help4.x:Users:_Viewing_Access_Levels/en "Help4.x:Users: Viewing Access Levels/en")                         | In this screen you have the ability to look at a list of your Access Levels and sort them in different ways. You can also edit and create Access Levels.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [Users: Edit Viewing Access Level](https://docs.joomla.org/Help4.x:Users:_Edit_Viewing_Access_Level/en "Help4.x:Users: Edit Viewing Access Level/en")             | Access levels control which users can view which objects on your site. Objects include menu items, modules, categories, and component items (articles, contacts, and so on). Each object in the site is assigned to one access level. User groups are also assigned to each access level.If a user is a member of a group that in turn has permission for an access level, then that user can view all objects assigned to that access level. It is important to understand that user groups can be arranged in a parent-child hierarchy. If so, then a child group has access to all access levels that the parent group has access to. So you don't need to assign a child group access to levels that its parent group already has access to. |
| [Permissions for Group](https://docs.joomla.org/Help4.x:Permissions_for_Group/en "Help4.x:Permissions for Group/en")                                              | The Debug Permissions report maps out the exact permissions for any given user group across all assets on your Joomla! installation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [Permissions for User](https://docs.joomla.org/Help4.x:Permissions_for_User/en "Help4.x:Permissions for User/en")                                                 | The Debug Permissions report allows you to map out the exact permissions for any given user across all extensions on your Joomla installation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [Users: Groups](https://docs.joomla.org/Help4.x:Users:_Groups/en "Help4.x:Users: Groups/en")                                                                      | User Groups control what actions a user may take on the site and which objects a user can view. This screen allows you to create, view, edit, and delete User Groups.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [Users: New or Edit Group](https://docs.joomla.org/Help4.x:Users:_New_or_Edit_Group/en "Help4.x:Users: New or Edit Group/en")                                     | User groups play a central role in what a user can do and see on the site. Creating user groups is normally the first step in setting up the security system for your site.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [Mass Mail Users](https://docs.joomla.org/Help4.x:Mass_Mail_Users/en "Help4.x:Mass Mail Users/en")                                                                | The Mass Mail screen allows Users who are members of the "Super Administrator" group to send an email message to registered users for the site. Users can be selected based on groups.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [Users: Edit Profile](https://docs.joomla.org/Help4.x:Users:_Edit_Profile/en "Help4.x:Users: Edit Profile/en")                                                    | In this screen, you have the ability to create a new user (if you clicked on the 'New' button in the User Manager), or edit an existing user (if you selected a user and clicked on the 'Edit' button in the User Manager, or clicked on the name of a user).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [User Notes: Categories](https://docs.joomla.org/Help4.x:User_Notes:_Categories/en "Help4.x:User Notes: Categories/en")                                           | This screen allows you to look at a list of your user note categories and sort them in different ways. You can also edit and create user note categories and access levels.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [User Notes: New or Edit Category](https://docs.joomla.org/Help4.x:User_Notes:_New_or_Edit_Category/en "Help4.x:User Notes: New or Edit Category/en")             | This is where you can add a new Category or edit an existing Category. Categories are used to organize the User Notes. Categories allow you to display related User notes together on a page and to filter User Notes in the User Notes Manager. All User Notes are assigned either to a Category that you create or to the special Category called 'Uncategorized'.                                                                                                                                                                                                                                                                                                                                                                             |
| [User Notes](https://docs.joomla.org/Help4.x:User_Notes/en "Help4.x:User Notes/en")                                                                               | User notes are pieces of information which can be assigned to registered users on your Joomla! site. These notes can contain for example comments about 'offending' or 'difficult' users etc.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [User Notes:New or Edit](https://docs.joomla.org/Help4.x:User_Notes:_New_or_Edit/en "Help4.x:User Notes: New or Edit/en")                                         | In this screen you can create an user note or edit an user note. The 'editor' will be the chosen 'editor' for the user editing the note. Examples: TinyMCE - JCE - Codemirror.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [Menu Item: Password Reset](https://docs.joomla.org/Help4.x:Menu_Item:_Password_Reset/en "Help4.x:Menu Item: Password Reset/en")                                  | Used to create a form which allows a user to reset their password with an email sent to the user's email associated with the account.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [Menu Item: User Profile](https://docs.joomla.org/Help4.x:Menu_Item:_User_Profile/en "Help4.x:Menu Item: User Profile/en")                                        | Used to create a form which allows a user to edit their profile settings.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [Menu Item: Edit User Profile](https://docs.joomla.org/Help4.x:Menu_Item:_Edit_User_Profile/en "Help4.x:Menu Item: Edit User Profile/en")                         | Used to create a form which allows a user to edit their profile settings.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [Menu Item: Registration Form](https://docs.joomla.org/Help4.x:Menu_Item:_Registration_Form/en "Help4.x:Menu Item: Registration Form/en")                         | Used to create a default User Registration form for user registration. Default form contains basic information: Name, Username, Password, and Email Address.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [Menu Item: Username Reminder Request](https://docs.joomla.org/Help4.x:Menu_Item:_Username_Reminder_Request/en "Help4.x:Menu Item: Username Reminder Request/en") | Used to create a form which allows a user to request an e-mail with their username.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
