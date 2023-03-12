<!-- Filename: J4.x:Guest_Access / Display title: Guest Access -->

## Access Levels

Site visitors may view items such as articles, modules and menu items
because those items are allocated the Public access level by default.
This access level also allows logged in users to view the same content
items. However, there are occasions when it is inappropriate for a
logged in user to view a content item. For example, a Login menu item
should be seen by users who are not logged in but not seen by users who
are logged in. This is what the Guest access level is for. Logged in
users should see a Logout menu item instead. Such items need to be
assigned the Registered access level.

In some cases it is also appropriate to restrict access to an article or
a module to users who are not logged in or to users who are logged in.

## Guest Access

Use of the Guest access level may be illustrated with a Login menu item:

- Select **Menus **→** Main Menu **→** +** from the Administrator menu.
  Use whichever menu you prefer for the new items.
- In the **Menus: New Item** form, enter a suitable title in the
  **Title** field, for example **Login**.
- In the **Menu Item Type** field use the **Select** button to open the
  Menu Item Type popup dialog.
- In the **Menu Item Type** list select the Users section and select the
  **Login Form** item.
- Back in the **Menus: New Item** form, set the **Access** field to
  **Guest**.
- Save
- Optionally, select the Ordering list and select the item **after**
  which you would like the Login item to appear.

<img
src="https://docs.joomla.org/images/thumb/b/b6/J4x-user-login-guest-access-form-en.png/800px-J4x-user-login-guest-access-form-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/b/b6/J4x-user-login-guest-access-form-en.png 1.5x"
data-file-width="1000" data-file-height="810" width="800" height="648"
alt="J4x-user-login-guest-access-form-en.png" />

- Save and Close.
- View the site. Check that the Login menu item works. Check that it
  disappears after login.

## Registered Access

Use of the Registered access level may be illustrated with a Logout menu
item:

- Select **Menus **→** Main Menu **→** +** from the Administrator menu.
  Use whichever menu you prefer for the new items.
- In the **Menus: New Item** form, enter a suitable title in the
  **Title** field, for example **Logout**.
- In the **Menu Item Type** field use the **Select** button to open the
  Menu Item Type popup dialog.
- In the **Menu Item Type** list select the Users section and select the
  **Logout** item.
- Back in the **Menus: New Item** form, set the **Access** field to
  **Registered**.
- Save
- Optionally, select the Ordering dropdown and select the item **after**
  which you would like the Login item to appear.

<img
src="https://docs.joomla.org/images/thumb/0/05/J4x-user-logout-registered-access-form-en.png/800px-J4x-user-logout-registered-access-form-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/0/05/J4x-user-logout-registered-access-form-en.png 1.5x"
data-file-width="1000" data-file-height="810" width="800" height="648"
alt="J4x-user-logout-registered-access-form-en.png" />

- Save and Close.
- View the site. Check that the Logout menu item works. Check that it
  disappears after logout.
