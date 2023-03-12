<!-- Filename: J4.x:Adding_a_New_Menu / Display title: Adding a New Menu -->

Joomla!  4.x <span id="main-portal-heading">**Tutorial**  
How to Add a New Menu</span>

## Introduction

For content to be accessed on your Joomla! website items need to be
assigned to a Menu. A standard installation of Joomla! creates a **Main
Menu** for you. In many cases you will use only one menu but you can
have more than one. This allows you to create Menus for different types
of content, hidden content, user role specific content and more.

In this tutorial, you’ll find a complete walk-through of the steps
involved in creating a Menu in a Joomla! site. We will set up a new
Menu, create a Menu Module, position it in a defined location in the
website template and add Menu Items to it.

## Create A New Menu

Open a new browser window and type in the URL, which will be similar to
`http://www.your-site-name-here.com/administrator` or, if you have
Joomla! installed on your local computer,
`http://localhost/your-folder-name-here/administrator`. Here you will
have to log in as an Administrator or Super Administrator.

There are 2 ways to access the Menu Manager that is used to add a Menu:

- From the Home Dashboard, in the Sidebar Menu click the Menu Dashboard
  Icon to be taken to the Menu Manager, then click **Manage**.

<!-- -->

- Or, from the Home Dashboard, in the Sidebar Menu expand the **Menus**
  section and then click on **Manage**.

<img
src="https://docs.joomla.org/images/thumb/a/aa/J4.x_menus_dashboard_link-en.png/400px-J4.x_menus_dashboard_link-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/a/aa/J4.x_menus_dashboard_link-en.png 1.5x"
data-file-width="562" data-file-height="263" width="400" height="187"
alt="J4.x menus dashboard link-en.png" />

When the Menu Manager opens it will display current menus and a top
toolbar with a **+ New** button. Click the + New button.

<img
src="https://docs.joomla.org/images/thumb/3/3e/J4.x_menus_dashboard_links-en.png/800px-J4.x_menus_dashboard_links-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/3/3e/J4.x_menus_dashboard_links-en.png 1.5x"
data-file-width="1000" data-file-height="356" width="800" height="285"
alt="J4.x menus dashboard links-en.png" />

Now a **Title** and **Unique Name** are required. A **Description** is
optional:

<img
src="https://docs.joomla.org/images/thumb/c/c2/J4.x_menu_manager_new-en.png/800px-J4.x_menu_manager_new-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/c/c2/J4.x_menu_manager_new-en.png 1.5x"
data-file-width="1000" data-file-height="422" width="800" height="338"
alt="J4.x menu manager new-en.png" />

**Title**: A proper title for the menu. This is used to identify the
menu in the Menu Manager.

**Unique Name**: This should be a unique identification name used by
Joomla! to identify this menu. Spaces are not allowed but you may use
the '-' character such as resources-menu.

**Description**: Although not required, a description of the menu can be
useful for your own or other Site Administrators reference.

Click the **Save** or the **Save & Close** toolbar button to create the
new menu. The **Save & Close** button will return you to the Menu
Manager. If you were creating more than one menu you also have the
option to click **Save & New**. To leave without saving the menu click
the **Cancel** toolbar button.

If you chose **Save & Close**, you will see your new menu in the list of
Menus.

At this point you would be able to start adding items to your new menu.
However we are going to create a module that will display your menu and
we can do that from within the Menu Manager.

## Create the Module for Your Menu

Click the **Add a module for this menu** button.

<img
src="https://docs.joomla.org/images/thumb/d/d1/J4.x_menu_manager_add_module-en.png/800px-J4.x_menu_manager_add_module-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/d/d1/J4.x_menu_manager_add_module-en.png 1.5x"
data-file-width="1000" data-file-height="206" width="800" height="165"
alt="J4.x menu manager add module-en.png" />

A **Menu Module** will open ready for input of the necessary
information. Here are a few of the most basic points regarding the Menu
Module:

The **Title** field is required, so create a descriptive title. If you
want this title displayed on the front of the website, click on the
"Show Title" button on the right. Notice the **Select Menu** field. This
should show the name of the Menu you just created. You need to select a
**Position** in your template for where you want your menu to appear.
Note: getting it to look the way you want it to depends on your template
styling. Select the postion you require.

<img
src="https://docs.joomla.org/images/thumb/a/a1/J4.x_create_menu_module-en.png/800px-J4.x_create_menu_module-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/a/a1/J4.x_create_menu_module-en.png 1.5x"
data-file-width="1000" data-file-height="524" width="800" height="419"
alt="J4.x create menu module-en.png" />

There are many options to choose from in the Menu Module such as
publishing dates, user access, and sub-menu items just to name a few.
For detailed information about the Menu Module and all it's parameters
see: [Module
Menu](https://docs.joomla.org/Help4.x:Site_Modules:_Menu/en "Special:MyLanguage/Help4.x:Site Modules: Menu/en").

Once the information has been added click **Save & Close** and you will
be returned to the Menu Manager.

## Add Items To Your Menu

To create the links in your menu you need to add **Menu Items**. There
are many kinds of Menu Item Types in Joomla. Some are included in the
core installation and many third-party components may add more types
also. For this tutorial we will add links to single articles.

The Menu Manager list will now include the new Menu. In the **Menu
Items** column, click the icon.

<img
src="https://docs.joomla.org/images/thumb/3/31/J4.x_menu_manager_new_menu_item-en.png/800px-J4.x_menu_manager_new_menu_item-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/3/31/J4.x_menu_manager_new_menu_item-en.png 1.5x"
data-file-width="1000" data-file-height="168" width="800" height="134"
alt="J4.x menu manager new menu item-en.png" />

To begin with, this will present an empty list. Click on the **New**
button in the Toolbar.

<img
src="https://docs.joomla.org/images/thumb/a/af/J4.x_menu_manager_new_menu_item_2-en.png/800px-J4.x_menu_manager_new_menu_item_2-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/a/af/J4.x_menu_manager_new_menu_item_2-en.png 1.5x"
data-file-width="1000" data-file-height="267" width="800" height="214"
alt="J4.x menu manager new menu item 2-en.png" />

The **Menus: New Item** panel will open. We will add a single article to
the Menu:

- In the **Title** field add the title you want to appear in the Menu.

<!-- -->

- In the **Menu Item Type** field click the **Select** button then
  **Single Article** then **Single Article**.

<!-- -->

- In the **Select Article** field click the **Select** button which will
  open a list of your articles. Select your article.

<!-- -->

- Check the **Menu** field is set to the new Menu.

<!-- -->

- The **Status** field should be set to **Published**.

<!-- -->

- Click **Save & Close**.

<img
src="https://docs.joomla.org/images/thumb/a/a4/J4.x_menu_manager_new_menu_item_3-en.png/800px-J4.x_menu_manager_new_menu_item_3-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/a/a4/J4.x_menu_manager_new_menu_item_3-en.png 1.5x"
data-file-width="1000" data-file-height="425" width="800" height="340"
alt="J4.x menu manager new menu item 3-en.png" />

Add more Menu Items to the new Menu.

Once items have been added to the Menu we can check to see that the Menu
is displayed on the website in the correct position.

To recap, we have created a new Menu, then a Menu Module to display the
Menu on the website and finally we have added some single article links
to the new Menu. Checking the website we can see the Menu is displayed
in the position we chose and it displays the single article links added
to the menu.

<img
src="https://docs.joomla.org/images/thumb/5/51/J4.x_menu_sidebar_position-en.png/800px-J4.x_menu_sidebar_position-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/5/51/J4.x_menu_sidebar_position-en.png 1.5x"
data-file-width="1000" data-file-height="256" width="800" height="205"
alt="J4.x menu sidebar position-en.png" />
