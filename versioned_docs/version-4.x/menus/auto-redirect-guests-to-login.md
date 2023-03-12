<!-- Filename: Auto_redirect_guests_to_login / Display title: Auto redirect guests to login -->

### Desired Functionality

Suppose you have some menu choices that require a user to be logged in,
like "Submit an Article". You would like all users to be able to see the
restricted menu item, whether or not they are logged in.

If the user is logged in, they just go directly to the restricted menu
item.

If the user is not logged in

- they are presented with the login form, and
- once they log in successfully, they continue on to the restricted
  page.

If they are not registered, they have the option to register or navigate
to another page.

### Solution

Here is how you do this in Joomla!.

1.  Create a new menu from menu manager, say it is named "hidden menu".
2.  Add any menu items that will be accessible only to registered users
    (for example, "Submit an Article"). Set the required access levels
    of these menu items to "Registered".
3.  Do NOT create a module for the "hidden menu". It will not be
    displayed on any page, so it doesn't need a module.
4.  Create your "real" menu (for example, "main menu") and the menu item
    that will display for all users (for example "Submit an Article").
    - The menu item will have a menu item type of "Alias".
    - It's "Menu Item" parameter will be the "Submit an Article" menu
      item on the "hidden menu".
    - The Access Level for this menu item will be "Public", since we
      want everyone to be able to see and use it.
5.  Create a module of type "mod_mainmenu" for this menu, just like you
    do for any menu.
6.  If you want sub-menus, make sure you've added the sub-menu items in
    the "main menu" and not the "hidden menu".

Now, when a guest (non-logged-in user) accesses the "Submit an Article"
menu choice, it redirects them to the login page. If they log in
successfully, they are taken to the desired page (in this case, "Submit
an Article"). If there were already logged in, they go there directly.

### Example

In my case, I've added the following menu items:

1.  HOME
2.  BLOG (IDOBlog)
3.  WIKI (A Wiki)
4.  DIRECTORY (SOBI2)
5.  CLASSIFIEDS (ads)
6.  FAQS (Articles section)
7.  SHOP (VirtueMart)
8.  Contact US (contacts)

I wanted that ALL the menu items are viewable by public (non-registered
users included) at the front end. But I want that menu items 3,4,5,6 & 7
are accesible by REGISTERED users only. In other words if anyone clicks
on menu item 3/4/5/6/7 they'll be lead to the login modules.

So, I created a "hidden menu" with the menu items for 3 - 7, using the
restricted access level. Then, when I created the "real" menu, I used
the menu type "Alias" for these items and set the "Menu Item" Parameter
to the corresponding menu item in the "hidden menu".

As far as I know, this method is applicable to all menus in the menu
manager. In case of any help or suggestion please contact me on
forums.joomla.org my username is ziggy03. In case of a better or
alternate method please feel free to edit this page. Thanks.
