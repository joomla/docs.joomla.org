<!-- Filename: Help4.x:Mass_Mail_Users / Display title: Mass Mail Users -->

## Description

The Mass Mail screen allows Users who are members of the "Super
Administrator" group to send an email message to registered users for
the site. Users can be selected based on groups.

## How to access

Select **Users **→** Mass Mail Users** from the Administrator menu.

## Screenshot

<img
src="https://docs.joomla.org/images/2/2b/Help-4x-users-mass-mail-en.png"
decoding="async" data-file-width="800" data-file-height="416"
width="800" height="416" alt="Help-4x-users-mass-mail-en.png" />

## Details and Message

- **Mail to Child Groups.** Whether or not to send the Email to members
  of all child groups of the selected group. For example, if this box is
  checked and the "Public" group is selected, the email would be sent to
  all users, since all groups are child groups of "Public".
- **Send in HTML mode.** Whether or not to send the Email with headers
  that identify it as an HTML document. Email clients that support this
  will render any HTML codes.
- **Send to Disabled Users.** If checked, disabled users will be
  included when sending mail.
- **Recipients as BCC.** If checked, all recipients will be included as
  BCC entries, so none will see any of the other recipients' Email
  addresses. Because many mail routers treat Email without a *To:* entry
  as spam, the site email will be used for the *To:* entry.
- **Group.** Select the groups you want to send the Email to.
- **Subject** Enter the Subject of the Email. Try to make it as
  descriptive as possible. Any text entered in the *Subject Prefix*
  parameter in Options ([User Options → Mass
  Mail](https://docs.joomla.org/Help4.x:Users:_Options/en#Mass_Email "Help4.x:Users: Options/en"))
  will be placed in front of the subject you enter here.
- **Message.** Enter the body of the Email. Any text entered in the
  *Mailbody Suffix* parameter in Options ([User Options → Mass
  Mail](https://docs.joomla.org/Help4.x:Users:_Options/en#Mass_Email "Help4.x:Users: Options/en"))
  will be added to the text you enter here.

## Toolbar

At the top of the page you will see the toolbar shown in the
[Screenshot](#Screenshot) above. The functions are:

- **Send email**. Send the email and return to the main Mass Mail screen

<!-- -->

- **Cancel**. Closes the current screen and returns to the previous
  screen without saving any modifications you may have made.

<!-- -->

- **Options.** Opens the Options window where settings such as default
  parameters can be edited.

<!-- -->

- **Help**. Opens this help screen.

## Quick Tips

- To just send a private message to a user, see more on how to write a
  [Private
  Message](https://docs.joomla.org/Help4.x:Private_Messages:_Write/en "Help4.x:Private Messages: Write/en")
  to a user.

## Related Information

### Administrative User Tasks

<table class="wikitable">

<tbody>
<tr class="header">
<th>Related Help Screens</th>
<th>Description</th>
</tr>
&#10;<tr class="odd">
<td><a href="https://docs.joomla.org/Help4.x:Users:_Options/en"
title="Help4.x:Users: Options/en">Users: Options</a></td>
<td></td>
</tr>
<tr class="even">
<td><a
href="https://docs.joomla.org/Help4.x:Users:_Viewing_Access_Levels/en"
title="Help4.x:Users: Viewing Access Levels/en">Users: Viewing
Access_Levels</a></td>
<td>In this screen you have the ability to look at a list of your Access
Levels and sort them in different ways. You can also edit and create
Access Levels.</td>
</tr>
<tr class="odd">
<td><a
href="https://docs.joomla.org/Help4.x:Users:_Edit_Viewing_Access_Level/en"
title="Help4.x:Users: Edit Viewing Access Level/en">Users: Edit Viewing
Access Level</a></td>
<td>Access levels control which users can view which objects on your
site. Objects include menu items, modules, categories, and component
items (articles, contacts, and so on). Each object in the site is
assigned to one access level. User groups are also assigned to each
access level.
<p>If a user is a member of a group that in turn has permission for an
access level, then that user can view all objects assigned to that
access level. It is important to understand that user groups can be
arranged in a parent-child hierarchy. If so, then a child group has
access to all access levels that the parent group has access to. So you
don't need to assign a child group access to levels that its parent
group already has access to.</p></td>
</tr>
<tr class="even">
<td><a href="https://docs.joomla.org/Help4.x:Permissions_for_Group/en"
title="Help4.x:Permissions for Group/en">Permissions for Group</a></td>
<td>The Debug Permissions report maps out the exact permissions for any
given user group across all assets on your Joomla! installation.</td>
</tr>
<tr class="odd">
<td><a href="https://docs.joomla.org/Help4.x:Permissions_for_User/en"
title="Help4.x:Permissions for User/en">Permissions for User</a></td>
<td>The Debug Permissions report allows you to map out the exact
permissions for any given user across all extensions on your Joomla
installation.</td>
</tr>
<tr class="even">
<td><a href="https://docs.joomla.org/Help4.x:Users:_Groups/en"
title="Help4.x:Users: Groups/en">Users: Groups</a></td>
<td>User Groups control what actions a user may take on the site and
which objects a user can view. This screen allows you to create, view,
edit, and delete User Groups.</td>
</tr>
<tr class="odd">
<td><a
href="https://docs.joomla.org/Help4.x:Users:_New_or_Edit_Group/en"
title="Help4.x:Users: New or Edit Group/en">Users: New or Edit
Group</a></td>
<td>User groups play a central role in what a user can do and see on the
site. Creating user groups is normally the first step in setting up the
security system for your site.</td>
</tr>
<tr class="even">
<td><a href="https://docs.joomla.org/Help4.x:Users/en"
title="Help4.x:Users/en">Users: User</a></td>
<td>In this screen you have the ability to look at a list of your users
and sort them in different ways. You can also edit and create users,
groups and access levels.</td>
</tr>
<tr class="odd">
<td><a href="https://docs.joomla.org/Help4.x:Users:_Edit_Profile/en"
title="Help4.x:Users: Edit Profile/en">Users: Edit Profile</a></td>
<td>In this screen, you have the ability to create a new user (if you
clicked on the 'New' button in the User Manager), or edit an existing
user (if you selected a user and clicked on the 'Edit' button in the
User Manager, or clicked on the name of a user).</td>
</tr>
<tr class="even">
<td><a href="https://docs.joomla.org/Help4.x:User_Notes:_Categories/en"
title="Help4.x:User Notes: Categories/en">User Notes:
Categories</a></td>
<td>This screen allows you to look at a list of your user note
categories and sort them in different ways. You can also edit and create
user note categories and access levels.</td>
</tr>
<tr class="odd">
<td><a
href="https://docs.joomla.org/Help4.x:User_Notes:_New_or_Edit_Category/en"
title="Help4.x:User Notes: New or Edit Category/en">User_Notes: New or
Edit Category</a></td>
<td>This is where you can add a new Category or edit an existing
Category. Categories are used to organize the User Notes. Categories
allow you to display related User notes together on a page and to filter
User Notes in the User Notes Manager. All User Notes are assigned either
to a Category that you create or to the special Category called
'Uncategorized'.</td>
</tr>
<tr class="even">
<td><a href="https://docs.joomla.org/Help4.x:User_Notes/en"
title="Help4.x:User Notes/en">User Notes</a></td>
<td>User notes are pieces of information which can be assigned to
registered users on your Joomla! site. These notes can contain for
example comments about 'offending' or 'difficult' users etc.</td>
</tr>
<tr class="odd">
<td><a href="https://docs.joomla.org/Help4.x:User_Notes:_New_or_Edit/en"
title="Help4.x:User Notes: New or Edit/en">User Notes: New or
Edit</a></td>
<td>User notes are pieces of information which can be assigned to
registered users on your Joomla! site. These notes can contain for
example comments about 'offending' or 'difficult' users etc.
<p>In this screen you can create an user note or edit an user note. The
'editor' will be the chosen 'editor' for the user editing the note.
Examples: TinyMCE - JCE - Codemirror.</p></td>
</tr>
</tbody>
</table>

### Front End User Interaction

|                                                                                                                                                                   |                                                                                                                                                              |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Related Help Screens                                                                                                                                              | Description                                                                                                                                                  |
| [Menu Item: Login Form](https://docs.joomla.org/Help4.x:Menu_Item:_Login_Form/en "Help4.x:Menu Item: Login Form/en")                                              | Used to create a 'User Login Form' page for users to login to the website.                                                                                   |
| [Menu Item: Password Reset](https://docs.joomla.org/Help4.x:Menu_Item:_Password_Reset/en "Help4.x:Menu Item: Password Reset/en")                                  | Used to create a form which allows a user to reset their password with an email sent to the user's email associated with the account.                        |
| [Menu Item: User Profile](https://docs.joomla.org/Help4.x:Menu_Item:_User_Profile/en "Help4.x:Menu Item: User Profile/en")                                        | Used to create a form which allows a user to edit their profile settings.                                                                                    |
| [Menu Item: Edit User Profile](https://docs.joomla.org/Help4.x:Menu_Item:_Edit_User_Profile/en "Help4.x:Menu Item: Edit User Profile/en")                         | Used to create a form which allows a user to edit their profile settings.                                                                                    |
| [Menu Item: Registration Form](https://docs.joomla.org/Help4.x:Menu_Item:_Registration_Form/en "Help4.x:Menu Item: Registration Form/en")                         | Used to create a default User Registration form for user registration. Default form contains basic information: Name, Username, Password, and Email Address. |
| [Menu Item: Username Reminder Request](https://docs.joomla.org/Help4.x:Menu_Item:_Username_Reminder_Request/en "Help4.x:Menu Item: Username Reminder Request/en") | Used to create a form which allows a user to request an e-mail with their username.                                                                          |
