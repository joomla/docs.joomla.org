<!-- Filename: J4.x:User_Password_Reset / Display title: User Password Reset -->

## User Reset

If your users are allowed Site login and a user cannot remember either
Username or Password it is best to require the individual to self-reset
credentials using the links in the Login form:

<img
src="https://docs.joomla.org/images/a/aa/J4x-password-reset-user-login-form-en.png"
class="thumbborder" decoding="async" data-file-width="318"
data-file-height="396" width="318" height="396"
alt="J4x-password-reset-user-login-form-en.png" />

In each case, selecting a link leads to a form for entry of the email
address associated with the account:

<img
src="https://docs.joomla.org/images/thumb/4/41/J4x-password-reset-user-forgot-form-en.png/800px-J4x-password-reset-user-forgot-form-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/4/41/J4x-password-reset-user-forgot-form-en.png 1.5x"
data-file-width="1000" data-file-height="360" width="800" height="288"
alt="J4x-password-reset-user-forgot-form-en.png" />

All of the process is accomplished by the user with no intervention
required from an Administrator. This is the lost password verification
form:

<img
src="https://docs.joomla.org/images/thumb/a/ad/J4x-password-reset-user-verify-form-en.png/800px-J4x-password-reset-user-verify-form-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/a/ad/J4x-password-reset-user-verify-form-en.png 1.5x"
data-file-width="1000" data-file-height="390" width="800" height="312"
alt="J4x-password-reset-user-verify-form-en.png" />

And finally, the user is required to enter a new password:

<img
src="https://docs.joomla.org/images/thumb/d/d0/J4x-password-reset-user-complete-form-en.png/800px-J4x-password-reset-user-complete-form-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/d/d0/J4x-password-reset-user-complete-form-en.png 1.5x"
data-file-width="1000" data-file-height="397" width="800" height="318"
alt="J4x-password-reset-user-complete-form-en.png" />

## Administrator Reset

If there is only Administrator login then a user password reset must be
accomplished by a Super User or Administrator. If it is the only Super
User who does not know the login credentials then see the separate
article on Administrator Password Recovery. Otherwise:

- Select **Users **→** Manage** from the Administrator menu or select
  Users from the Home Dashboard Site panel.
- Find the user who needs a password reset.
- Select the linked **Name** to open the User: Edit form.
- Enter a new password in Password and Repeat Password fields.
- Set the **Require Password Reset** field to `Yes`.

<img
src="https://docs.joomla.org/images/thumb/b/bc/J4x-password-reset-administrator-en.png/800px-J4x-password-reset-administrator-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/b/bc/J4x-password-reset-administrator-en.png 1.5x"
data-file-width="1000" data-file-height="924" width="800" height="739"
alt="J4x-password-reset-administrator-en.png" />

- Save & Close

You will then need to send an email to the user with the new interim
password in plain text. After login, the user will be able to see the
site Home page but any attempt to navigate to any other page will take
the user to the new password form.
