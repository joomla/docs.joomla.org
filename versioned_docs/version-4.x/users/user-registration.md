<!-- Filename: J4.x:User_Registration / Display title: User Registration -->

## Registration Policy

In a Joomla site, registered users are allowed to login to see content
or act on content that unregistered users cannot. Site login and
Administrator login are treated separately, although there is a Global
Configuration setting that allows them to be combined. Some sites have
small numbers of users created by an Administrator. Other sites have so
many users that they need to self-register and self-activate their
accounts. How users register for your site is configured in the Users:
Options form.

## Allow Self Registration

User self-registration is disallowed by default in a Joomla 4. Any new
user must be created by a Manager or Administrator. Self-registration
can be allowed with some simple changes to the Users: Options form.

- Select **Users **→** Manage** from the Administrator menu.
- Select the `Options` button from the Toolbar.
- Set **Allow User Registration** to **Yes**.
- The **New User Registration Group** should be **- Registered -**
  unless there is good reason for it to be something else.
- The **New User Account Activation** should be **Self** or
  **Administrator**.
  - Self: User will receive an email with an activation link. The
    account will be activated when the user clicks the activation link.
  - Administrator: User will receive an email with an activation link.
    When the user clicks this link the Site Administrator will be
    notified via email. The Site Administrator then needs to activate
    the user's account.

<img
src="https://docs.joomla.org/images/thumb/d/d5/J4x-user-registration-default-en.png/800px-J4x-user-registration-default-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/d/d5/J4x-user-registration-default-en.png 1.5x"
data-file-width="1000" data-file-height="749" width="800" height="599"
alt="J4x-user-registration-default-en.png" />

- Save & Close
- Add a Login module. Or
- Add a Users: Login Form menu item and a Users: Logout menu item.

## Disallow Self Registration

- Set **Allow User Registration** to **No**.

## Adding a New User

If self-registration is not allowed any new user must created by an
Administrator. Proceed as follows:

- Select the **Users +** icon in the Home Dashboard Site panel. Or
- Select **Users **→** Manage +** from the Administrator menu.
- Fill out the **New User Details** form. Most of the fields have
  suitable default values.

<img
src="https://docs.joomla.org/images/thumb/e/e3/J4x-user-registration-new-en.png/800px-J4x-user-registration-new-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/e/e3/J4x-user-registration-new-en.png 1.5x"
data-file-width="1000" data-file-height="934" width="800" height="747"
alt="J4x-user-registration-new-en.png" />

- Select the **Assigned User Groups** tab and check the box against the
  desired user group. Registered is checked by default.
- Save & Close.
- In the Users list check that the new user account is Enabled (green
  tick in the Enabled columns).

## Blocking a User

The best method of dealing with a troublesome user is to disable the
user account rather than deleting the user account. This measure can be
used to suspend the user and can be reversed if the user promises to be
good. Deleting an account would break any link to user contributed
content such as article authorship and might provide the user with the
opportunity to register again with the same email address.

To block a user:

- Select **Users **→** Manage** from the Administrator menu.
- Find the user in the Users list. Use the text filter if necessary.
- Select the Enabled icon appearing as a green tick adjacent to the user
  name. A **Block** label appears on hover.

<img
src="https://docs.joomla.org/images/thumb/b/b5/J4x-user-registration-block-en.png/800px-J4x-user-registration-block-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/b/b5/J4x-user-registration-block-en.png 1.5x"
data-file-width="1000" data-file-height="288" width="800" height="230"
alt="J4x-user-registration-block-en.png" />

- The page will reload with the Enabled icon appearing as a grey cross.

## Unblocking a User

Simple:

- Toggle the Enabled icon back to a green tick.
