<!-- Filename: Converting_an_existing_website_to_a_Joomla!_website / Display title: Converting an existing website to a Joomla! website -->

## Introduction

Many first-time Joomla! users already have a website, often written
using HTML with CSS style sheets. In this case, you may wish to keep the
existing website structure and just convert it to Joomla!. This article
provides instructions for doing this with Joomla
<img src="https://docs.joomla.org/images/4/4d/Compat_icon_3_x.png"
decoding="async" data-file-width="40" data-file-height="17" width="40"
height="17" alt="Joomla 3.x" />. It is intended as a walk-through for
Joomla! beginners and contains links to pages with further information
on the topics covered here.

## Converting Basic Static Content

Static content is content that doesn't change frequently. In simple
HTML-based websites, each menu choice simply displays a page of content.

### Page Content Conversion

The basic steps for converting this type of content are as follows:

<img
src="https://docs.joomla.org/images/thumb/4/4d/Help-3x-content-article-manager-add-new-article-en.png/400px-Help-3x-content-article-manager-add-new-article-en.png"
class="thumbimage" decoding="async"
srcset="https://docs.joomla.org/images/thumb/4/4d/Help-3x-content-article-manager-add-new-article-en.png/600px-Help-3x-content-article-manager-add-new-article-en.png 1.5x, https://docs.joomla.org/images/thumb/4/4d/Help-3x-content-article-manager-add-new-article-en.png/800px-Help-3x-content-article-manager-add-new-article-en.png 2x"
data-file-width="1200" data-file-height="886" width="400"
height="295" /> <a
href="https://docs.joomla.org/File:Help-3x-content-article-manager-add-new-article-en.png"
class="internal" title="Enlarge"></a>Article Manager Edit Screen

- Go to **Content **→** Articles**. Add one article for each page of
  static content. Each article will contain the contents of one of your
  existing static pages. Give your articles descriptive names so you can
  find them again. Unless you want the article to be shown on your Front
  Page, select **No** for Featured.
- If you have a relatively small number of pages (20 or fewer), you can
  leave the Category set to **Uncategorized**. If you have a large
  number of static pages, create one or more Categories and
  Sub-Categories. Then assign each Article to a Category. This will make
  it easier to manage your articles at a later time. For example, when
  viewing your article list, you can filter or sort articles using
  Categories.
- For each article, you can often just copy and paste the content from
  your existing site (as shown in your browser) into the edit area of
  Joomla!. Note: In some cases, depending on the amount of custom HTML
  in the source page, you may need to copy the page to a plain text
  editor first (such as Notepad++) and then copy from there into
  Joomla!. The editor also lets you add images, links and other HTML
  elements such as tables.
- For more information on the creation and configuration of articles
  please see **[Article
  Manager](https://docs.joomla.org/Help39:Content_Article_Manager_Edit "Special:MyLanguage/Help39:Content Article Manager Edit")**.

### Linking Articles to a Menu

At this point, you have the articles created in Joomla!. Now we need to
attach them to menus. We will achieve this using the **Menu Manager**.

<img
src="https://docs.joomla.org/images/thumb/0/0d/J3_menu_manager_entry_new2-en.png/400px-J3_menu_manager_entry_new2-en.png"
class="thumbimage" decoding="async"
srcset="https://docs.joomla.org/images/thumb/0/0d/J3_menu_manager_entry_new2-en.png/600px-J3_menu_manager_entry_new2-en.png 1.5x, https://docs.joomla.org/images/0/0d/J3_menu_manager_entry_new2-en.png 2x"
data-file-width="652" data-file-height="463" width="400" height="284" />
<a href="https://docs.joomla.org/File:J3_menu_manager_entry_new2-en.png"
class="internal" title="Enlarge"></a>Expandable List of Menu Item Types

- Determine the menu structure you need. If your existing site just has
  a single main menu, you will just use the Joomla! **mainmenu** module.
  If your existing site has a two-level menu structure, you may create
  the top level first, and then set the second level by choosing a
  parent top level menu item. Alternatively, you can use the
  **mainmenu** menu for the top level and then add one new menu for each
  existing submenu. For the latter, add the submenus by going to **Menu
  Manager **→** Menus **→** New**.

<!-- -->

- Go to **Menus **→** Menu Items** and click **New** to add one Menu
  Item for each article created above. Click on **Menu Item Type -
  Select** to open a modal window where you can choose an Item Type from
  an expandable list as shown on the right.
- For our purposes, each Menu Item has the type **Single Article**.
- **Note**: Even if you installed Joomla! with no sample data, you will
  already have a Main Menu with a Featured Articles type menu item set
  as the default (home) menu item (i. e. your homepage). You may either
  keep this and add new menu items or change this menu item to a Single
  Article Layout. If you want to have a Featured Articles page, these
  articles need to a marked as **Featured** in the Articles manager.
- Enter the Title for the Menu Item. The title can be the same as the
  article title, so you know which article goes with which menu item.
  But you may choose whatever title you want.
- Add a Menu Item for each article you created earlier. If needed, add
  one or more submenus and then add Menu Items for these in the same
  manner.
- For more information on the creation and configuration of menu items
  please see **[Menu Item
  Manager](https://docs.joomla.org/Help39:Menus_Menu_Item_Manager_Edit "Special:MyLanguage/Help39:Menus Menu Item Manager Edit")**.

### Placing the Menu on the Website

At this point, each article should be associated with one menu choice.
Now we need to tell Joomla! on which pages and which location on the
page to put each menu.

<img
src="https://docs.joomla.org/images/thumb/a/ad/J3_module_manager_mod_menu-en.png/400px-J3_module_manager_mod_menu-en.png"
class="thumbimage" decoding="async"
srcset="https://docs.joomla.org/images/thumb/a/ad/J3_module_manager_mod_menu-en.png/600px-J3_module_manager_mod_menu-en.png 1.5x, https://docs.joomla.org/images/thumb/a/ad/J3_module_manager_mod_menu-en.png/800px-J3_module_manager_mod_menu-en.png 2x"
data-file-width="1481" data-file-height="606" width="400"
height="164" />
<a href="https://docs.joomla.org/File:J3_module_manager_mod_menu-en.png"
class="internal" title="Enlarge"></a>Module Manager - Menu

- In Joomla!, menus have to be assigned to a
  **[module](https://docs.joomla.org/module "Special:MyLanguage/module")**
  in order to show up on your website.
- Go to **Extensions **→** Modules** to access the Module Manager. Even
  if you started with no sample data, you will already have a Main Menu
  module. Open this for editing to display the Module Edit form.
- If not already selected, select the **Menu Name** for this module from
  the drop-down list. This will be the name of the Menu you just created
  in the Menu Manager.

<img
src="https://docs.joomla.org/images/thumb/3/34/J3_template_preview_mode-en.png/400px-J3_template_preview_mode-en.png"
class="thumbimage" decoding="async"
srcset="https://docs.joomla.org/images/thumb/3/34/J3_template_preview_mode-en.png/600px-J3_template_preview_mode-en.png 1.5x, https://docs.joomla.org/images/thumb/3/34/J3_template_preview_mode-en.png/800px-J3_template_preview_mode-en.png 2x"
data-file-width="994" data-file-height="371" width="400" height="149" />
<a href="https://docs.joomla.org/File:J3_template_preview_mode-en.png"
class="internal" title="Enlarge"></a>Template Preview Mode

- The **Position** selection on the right side of the edit form tells
  Joomla! where to display the menu module on each page. This may vary
  depending on the
  **[template](https://docs.joomla.org/template "Special:MyLanguage/template")**
  you are using. Typical menu locations include **top**, **left** and
  **navigation**. A trick in Joomla! for seeing the available positions
  is to add the letters **?tp=1** to the end of a Joomla! URL after
  enabling the **Preview Template Position** option (go to
  **Extensions **→** Templates **→** Options Button**). For example, if
  you are working on a localhost site called **joomla3**, typing in the
  URL **/localhost/joomla3/?tp=1** will display a screen showing the
  positions for your current template, similar to the one shown on the
  right.

<img
src="https://docs.joomla.org/images/thumb/b/b0/J3_module_manager_menu_assignment-en.png/400px-J3_module_manager_menu_assignment-en.png"
class="thumbimage" decoding="async"
srcset="https://docs.joomla.org/images/thumb/b/b0/J3_module_manager_menu_assignment-en.png/600px-J3_module_manager_menu_assignment-en.png 1.5x, https://docs.joomla.org/images/b/b0/J3_module_manager_menu_assignment-en.png 2x"
data-file-width="685" data-file-height="316" width="400" height="185" />
<a
href="https://docs.joomla.org/File:J3_module_manager_menu_assignment-en.png"
class="internal" title="Enlarge"></a>Menu Module Assignment - Advanced
Tab

- The **Menu Assignment** drop-down list in the Module Manager is where
  you tell Joomla! what pages the current menu module should be
  displayed on. Typically, your main menu module will display in all
  pages. If you have additional menus assigned to a module, each of them
  will be displayed in the pages you assign them to by selecting the
  corresponding menu items from the drop-down list.
- **Note**: If you enable **[user
  registration](https://docs.joomla.org/Allowing_user_registration "Special:MyLanguage/Allowing user registration")**,
  you can configure a module to be displayed to certain user groups
  only, for example to registered users.
- You may press the Preview link in the upper right corner at any time
  to display the home page so far. The article you choose for the first
  item on your main menu should display, along with the main menu,
  something like the example below.
- If you have submenus, repeat this process for each submenu, checking
  as you go by previewing the website.
- Optionally you may select the Menu Style from the **Advanced** tab.
  The available styles will vary depending on the template (see below)
  you use and the position you assign to the module. Some menu styles
  display the menu items in a vertical list (for example, suitable for
  the left position), others in a horizontal list. (for example,
  suitable for the top position).
- If you need more information on the configuration options for menu
  modules, please see the **[Module Manager -
  Menu](https://docs.joomla.org/Help39:Extensions_Module_Manager_Menu "Special:MyLanguage/Help39:Extensions Module Manager Menu")**
  page.
- **Congratulations!** At this point, your static content should be
  available. Now you can think about adding new modules, customizing
  your pages, or taking advantage of the many other Joomla!
  functionalities.

<img
src="https://docs.joomla.org/images/4/47/J3_homepage_protostar-en.png"
class="thumbborder" decoding="async" data-file-width="1004"
data-file-height="594" width="1004" height="594"
alt="J3 homepage protostar-en.png" />

## Graphics Conversion

<img
src="https://docs.joomla.org/images/thumb/f/f6/J3_template_edit_style_advanced-en.png/400px-J3_template_edit_style_advanced-en.png"
class="thumbimage" decoding="async"
srcset="https://docs.joomla.org/images/f/f6/J3_template_edit_style_advanced-en.png 1.5x"
data-file-width="568" data-file-height="573" width="400" height="404" />
<a
href="https://docs.joomla.org/File:J3_template_edit_style_advanced-en.png"
class="internal" title="Enlarge"></a>Template Manager - Edit Style

Converting existing graphics from a static website can be easy or
somewhat difficult, depending on several factors. These include:

- how close your existing layout is to one of the available Joomla!
  templates.
- how exactly you want the Joomla! site to resemble the existing site.
- how familiar you are with the customization of CSS and HTML files

You can chose from available templates by going to
**Extensions **→** Template Manager**. In Joomla 3.x, two templates are
already included and many others are available, either for free or for a
charge.

- If you have some knowledge of HTML and CSS, you can adjust a lot in
  the template by looking at the **template.css** file in the templates
  directory for the template you are using. All template files can also
  be accessed and edited in **Template Manager **→** Your
  Template **→** Editor Tab**.
- **Tip**: Many templates also provide an interface for editing some
  template properties directly, such as background color, header image
  and fonts. This comes in handy if your are not comfortable working
  with template files or only need to change a few things. Just go to
  **Extensions **→** Templates **→** Styles** and open the Style you
  want to change.
- See also **[Modifying a Joomla!
  Template](https://docs.joomla.org/J3.x:Modifying_a_Joomla!_Template "Special:MyLanguage/J3.x:Modifying a Joomla! Template")**
  for more information on working with templates.
