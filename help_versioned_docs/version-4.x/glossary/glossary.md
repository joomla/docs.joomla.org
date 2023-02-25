<!-- Filename: Help4.x:Glossary / Display title: Glossary -->

The Joomla! Glossary is helpful for learning common terms used in
Joomla! tutorials, help screens and advanced documentation.

## [Access Control List](https://docs.joomla.org/Access_Control_List "Special:MyLanguage/Access Control List")

## [Alias](https://docs.joomla.org/Alias "Special:MyLanguage/Alias")

## Anchor

An anchor is created using the \<a\> tag in HTML. An anchor allows you
to place a bookmark inside an HTML page. In Joomla!, you can place an
anchor inside an article (for example, using the
[TinyMCE](https://docs.joomla.org/Content_editors#TinyMCE_editor "Content editors")
editor). This lets you create a link that will go directly to that point
in the article.

The HTML source code for an anchor looks like the following:

    <a name="my_anchor" title="My Anchor"></a>

You can link to an anchor from within the same page using the HTML code

    <a href="#my_anchor" ></a>

Clicking that link will take you directly to the location of the anchor
tag.

You can link to an anchor in a different page by appending "#" plus the
anchor name to the end of the URL. In the example above, if the URL for
the article was `http://www.mysite.com/my_article.html`, then you could
link directly to the anchor in that page with the URL
`http://www.mysite.com/my_article.html#my_anchor`.

## [Article](https://docs.joomla.org/Article "Special:MyLanguage/Article")

## Cascading Style Sheet (CSS)

A Cascading Style Sheet or CSS is used to control the presentation of an
XHTML page. For example, a CSS file will often control the font,
margins, color, background graphics, and other aspects of a web page's
appearance. CSS allows you to separate the content of an XHTML page from
it's appearance. In Joomla!, CSS files (for example, template.css) are
normally part of the template.

**See also:** [Template](https://docs.joomla.org/Template "Template"),
[Page Class
Suffix](https://docs.joomla.org/Page_Class_Suffix "Page Class Suffix"),
[Module Class
Suffix](https://docs.joomla.org/Module_Class_Suffix "Module Class Suffix")

## [Category](https://docs.joomla.org/Category "Special:MyLanguage/Category")

Every part of Joomla! powered web site or any CMS type of web site needs
a method to display and store its content logically. The usual method is
by categories and subcategories. Joomla! allows for multiple ways to
display and use content controlled by categorisation. Some of the
content types which have categorisation are
[articles](https://docs.joomla.org/Article "Article") (Main content of
web pages), banners, contacts and web links.

Joomla! category named "Uncategorised" is the default category, assigned
to any and all content types. The "Uncategorised" category is not
descriptive and should be used on as needed basis for content types
which do not fall under a specific category.

When creating and assigning categories, you should have a planned
structure. As an example, this is one way of how you would categorise
several Joomla [articles](https://docs.joomla.org/Article "Article") on
birds. Create two top article categories called "Animals" and "Plants".
Under the "Animals" category, you might have sub categories called
"Birds" and "Mammals". Under the "Birds" sub category, you might have 3
articles named "Hawks," "Parrots" and "Sparrows".

- Animals
  - Birds
    - Hawks
    - Parrots
    - Sparrows
  - Mammals

The example above could be expanded even more with specific articles on
different species of Hawks, Parrots and Sparrows. Start with using an
"Animal" top Category, placing the sub categories "Birds" and "Mammals"
are under the "Animal" category, and then a "Hawks," "Parrots" and
"Sparrows" sub category under the "Birds" Sub Category as shown below.

Now you can create multiple articles in the Hawk, Parrot and Sparrow sub
categories using the different genus or common names of the specific
types of these 3 birds.

Categories and their sub categories are maintained using the "Category
Manager" which can be reached in the administrator back-end interface by
clicking on the "Content" menu type, then the "Category Manager" menu
item for the type.

**See also**: [Article](https://docs.joomla.org/Article "Article")

## Chrome

The visible graphical interface features of an application are sometimes
referred to as *chrome*. See [Applying custom module
chrome](https://docs.joomla.org/Applying_custom_module_chrome "Applying custom module chrome")
for information about how to modify the look of modules (in other words,
the module "chrome").

## [Component](https://docs.joomla.org/Component "Special:MyLanguage/Component")

## Core

The word "core" in Joomla! pertains to the distributed files which are
needed to create and administrate a Joomla CMS powered web site. These
files can be downloaded from the Joomla website at
<a href="http://www.joomla.org/download.html" class="external text"
target="_blank"
rel="noreferrer noopener">http://www.joomla.org/download.html</a>. The
Joomla "core" also contains some basic functionality to get new Joomla
installations working quickly and easily. Included are the user manager,
article manager, weblink manager, category manager, contact manager, and
menu manager. There is also a
[template](https://docs.joomla.org/Template "Template") manager with a
few basic templates to power the front-end (website/user) view, a
[module](https://docs.joomla.org/Module "Module") manager with basic
modules, [plugin](https://docs.joomla.org/Plugin "Plugin") manager with
basic plugins, and a few other "out of the box"
[extensions](https://docs.joomla.org/Extension "Extension") to extend
the functionality of a basic Joomla installation. These core's
extensions should not be confused with extensions which are available
for downloading from the JED (Joomla! Extension Directory).

**See also:**
<a href="http://extensions.joomla.org/" class="external text"
target="_blank" rel="noreferrer noopener">Joomla Extension Directory</a>.

## [Database Table Prefix](https://docs.joomla.org/Database_Table_Prefix "Special:MyLanguage/Database Table Prefix")

The database table prefix is a string (a few characters long) prepended
to the name of Joomla!'s
[tables](https://docs.joomla.org/Tables "Tables"). Using a prefix
enables you to run multiple installations of Joomla! using a single
database.

The database table prefix can be set during installation. Changing it
later is possible, but requires access to the database through a
non-Joomla medium or a Joomla Extension such as Akeeba Admin Tools and
will cause some downtime.

[Extension](https://docs.joomla.org/Extension "Extension") developers
need to use the string `#__` to represent the prefix. This will be
replaced by the real prefix during runtime by Joomla.

## [Extension](https://docs.joomla.org/Extension "Special:MyLanguage/Extension")

## [LDAP](https://docs.joomla.org/LDAP "Special:MyLanguage/LDAP")

## [Language](https://docs.joomla.org/Language "Special:MyLanguage/Language")

Languages are perhaps the most basic and critical
<a href="https://docs.joomla.org/Extensions" class="mw-redirect"
title="Extensions">extension</a> type. Languages are packaged as either
a core language pack or an extension language pack. These packages
consist of INI files which contain key/value pairs. These key/value
pairs provide the translation of static text strings within Joomla!
source code. This allows both the Joomla! core and third party
components and modules to be internationalised. Core language packs also
include an XML meta file describing the language and providing
information about the fonts to use for PDF content generation.

## [Menu](https://docs.joomla.org/Menu "Special:MyLanguage/Menu")

In Joomla!, a **Menu** is a set of **menu items** used for website
navigation. Each menu item defines an URL to a page on your site, and
holds settings that control the contents (articles, category(ies) lists,
tagged items, etc) and style (module(s), layout) of that page.

**[Creating
menus](https://docs.joomla.org/Adding_a_new_menu "Special:MyLanguage/Adding a new menu")**
is rather simple. From the Admin Menu, in the backend of your Joomla!
site, you choose: **Menus \> Menu Manager \> Add New Menu**. On the
opened to you **Menu Manager: Add Menu** page enter your menu title into
the "Title \*" field (mandatory), your menu type into the "Menu type \*"
field (mandatory) and, if you wish, your menu brief description into the
"Description" field (optional). After that you can start **[adding new
menu
items](https://docs.joomla.org/Adding_a_new_menu_item "Special:MyLanguage/Adding a new menu item")**
to this new menu.

Any website can have more than one menu.

## [Model-View-Controller](https://docs.joomla.org/Model-View-Controller "Special:MyLanguage/Model-View-Controller")

Joomla makes extensive use of the
<a href="http://en.wikipedia.org/wiki/Model-view-controller"
class="external text" target="_blank"
rel="nofollow noreferrer noopener">Model-View-Controller</a> design
pattern.

When Joomla is started to process a request from a user, such as a GET
for a particular page, or a POST containing form data, one of the first
things that Joomla does is to analyse the URL to determine which
component will be responsible for processing the request, and hand
control over to that component.

If the component has been designed according to the MVC pattern, it will
pass control to the controller. The controller is responsible for
analysing the request and determining which model(s) will be needed to
satisfy the request, and which view should be used to return the results
back to the user.

The model encapsulates the data used by the component. In most cases
this data will come from a database, either the Joomla database, or some
external database, but it is also possible for the model to obtain data
from other sources, such as via a web services API running on another
server. The model is also responsible for updating the database where
appropriate. The purpose of the model is to isolate the controller and
view from the details of how data is obtained or amended.

The view is responsible for generating the output that gets sent to the
browser by the component. It calls on the model for any information it
needs and formats it appropriately. For example, a list of data items
pulled from the model could be wrapped into an HTML table by the view.

Since Joomla is designed to be highly modular, the output from the
component is generally only part of the complete web page that the user
will ultimately see. Once the view has generated the output, the
component hands control back to the Joomla framework which then loads
and executes the template. The template combines the output from the
component, and any modules that are active on the current page, so that
it can be delivered to the browser as a single page.

To provide additional power and flexibility to web designers, who may
only be concerned with creating new designs rather than manipulating the
underlying code, Joomla splits the traditional view into a separate view
and layout. The view pulls data from the model, as in a traditional MVC
pattern, but then simply makes that data available to the layout, which
is responsible for formatting the data for presentation to the user. The
advantage of having this split is that the Joomla template system
provides a simple mechanism for layouts to be overridden in the
template. These layout overrides (often called "template overrides"
because they form part of the template, although actually it is the
layout that is being overridden) are bundled with the template and give
the template designer complete control over all the output from the
Joomla core and any installed third-party extensions that comply with
the MVC design pattern.

## [Module](https://docs.joomla.org/Module "Special:MyLanguage/Module")

## [Module Class Suffix](https://docs.joomla.org/Module_Class_Suffix "Special:MyLanguage/Module Class Suffix")

Module Class Suffix is a parameter in Joomla! modules. It is set Module:
\[Edit\] screen under Advanced Parameters. Setting this parameter causes
Joomla! to either add a new CSS class or modify the existing CSS class
for the `div` element for this specific module.

When Joomla! generates a module, it automatically create a CSS class
called "moduletable" to allow styling of the module -- for example,

    <div class="moduletable">

To create a new class, enter the parameter with a leading space. For
example, entering a space plus "myNewClass" will create a new CSS class
called "myNewClass". The HTML will be changed to

    <div class="moduletable myNewClass">

To change the name of the existing class, enter in the parameter without
a leading space. For example, entering "\_mySuffix" (no leading space)
will cause the HTML to changed to

    <div class="moduletable_mySuffix">

Generally, it is recommended to use a leading space to create a new
class. This way, CSS styling for this module that uses the standard
class names will continue to work. You can use the new class name to add
any desired styling to the module without needing to re-create all of
the existing CSS code. Note that, if you create a new class name, make
sure it has a unique name and doesn't conflict with any existing class
names.

See [Using Class
Suffixes](https://docs.joomla.org/Using_Class_Suffixes "Using Class Suffixes")
for more information.

## [Module Position](https://docs.joomla.org/Module_Position "Special:MyLanguage/Module Position")

## [Module chrome](https://docs.joomla.org/Module_chrome "Special:MyLanguage/Module chrome")

## [PHP](https://docs.joomla.org/PHP "Special:MyLanguage/PHP")

PHP is a computer scripting language designed for creating dynamic web
pages. PHP is widely-used for web development and can be embedded into
<a href="https://docs.joomla.org/Where_can_you_learn_about_HTML%3F"
class="mw-redirect" title="Where can you learn about HTML?">HTML</a>. It
generally runs on a web server, taking PHP code as its input and
creating web pages as output. Joomla! is primarily written using the PHP
language. For more information, see [Where can you learn about
PHP?](https://docs.joomla.org/Where_can_you_learn_about_PHP "Where can you learn about PHP")

## [Page Class Suffix](https://docs.joomla.org/Page_Class_Suffix "Special:MyLanguage/Page Class Suffix")

Page Class Suffix is a parameter in Joomla! content menu items. It is
set in a particular menu item: \[Edit Menu Item\] page, under the "Page
Display" tab. A new page class suffix will cause Joomla! to either add a
new CSS class or modify the existing CSS class for elements in the
assigned to this very menu item page layout.

When Joomla! generates a page, it automatically creates pre-defined CSS
classes to allow styling of the page. For example, a page might have the
element

    <div class="componentheading">

To create a new class, enter the parameter with a leading space. For
example, entering a space plus "myNewClass" will create a new CSS class
called "myNewClass" and it will be inserted as a class for elements in
that Menu Item. In this case the example above will be changed to

    <div class="componentheading myNewClass">

To change the name of the existing class, enter in the parameter without
a leading space. For example, entering "\_mySuffix" (no leading space)
will cause the HTML to changed to

    <div class="componentheading_mySuffix">

Generally, it is recommended to use a leading space to create a new
class. This way, CSS styling for this component that uses the standard
class names will continue to work. You can use the new class name to add
any desired styling to the component without needing to re-create all of
the existing CSS code. Note that, if you create a new class name, make
sure it has a unique name and doesn't conflict with any existing class
names.

**See also:** [Using Class
Suffixes](https://docs.joomla.org/Using_Class_Suffixes "Using Class Suffixes"),
[Using the Page Class Suffix in Template
Code](https://docs.joomla.org/Using_the_Page_Class_Suffix_in_Template_Code "Using the Page Class Suffix in Template Code")

## [Patch](https://docs.joomla.org/Patch "Special:MyLanguage/Patch")

## [Plugin](https://docs.joomla.org/Plugin "Special:MyLanguage/Plugin")

## [Search Engine Friendly URLs](https://docs.joomla.org/Search_Engine_Friendly_URLs "Special:MyLanguage/Search Engine Friendly URLs")

Search engine friendly URLs is a term commonly abbreviated as SEF URLs
or SEF for short. Normal Joomla! URLs look something like this:

    http://www.yoursite.org/index.php?option=com_content&view=section&id=3&Itemid=41

You can optionally have URLs display to look like static HTML pages like
this:

    http://www.yoursite.org/faq.html

Since Joomla! 1.5, there are built-in options for generating SEF URLs.
These are enabled by changing the "SEO Settings" (Search Engine
Optimisation) in the Site tab in the Global Configuration screen in the
Joomla! back end. There are also third-party extensions that create SEF
URLs for Joomla!.

## [Split menus](https://docs.joomla.org/Split_menus "Special:MyLanguage/Split menus")

A [split menu](https://docs.joomla.org/Split_menus "Split menus") is
where different levels of a single menu are displayed in two or more
locations on a single web page.

For example, a common requirement is for a menu of top-level items to
appear at the top of the page. When one of the items is clicked the user
is taken to a page where a secondary menu, say on the left of the page,
shows second-level items within the scope of the top-level item.

The menus appear in separate locations on the page, but are related
because one shows only top-level items while the other shows
second-level items. This idea can be extended to include menus for
third-level items and beyond.

This can be implemented in Joomla using a single multi-level menu then
creating more than one menu module each referring to a different level.

**See also**: [Menu](https://docs.joomla.org/Menu "Menu")

## [Template](https://docs.joomla.org/Template "Special:MyLanguage/Template")

A template is a type of Joomla!
[extension](https://docs.joomla.org/Extension "Extension") that changes
the way your site looks. There are two types of templates used by the
Joomla! CMS: [Front-end
Templates](https://docs.joomla.org/Template#Front-end_Templates "Template")
and [Back-end
Templates](https://docs.joomla.org/Template#Back-end_Templates "Template").
The Front-end Template controls the way your website is presented to the
user viewing the website's content. The Back-end Template controls the
way your website's administrative tasks are presented for controlling
management functions by a Joomla! Administrator. These would include
common tasks such as: user, menu, article, category, module, component,
plugin and template management.

**See also**:
[Component](https://docs.joomla.org/Component "Component"),
[Module](https://docs.joomla.org/Module "Module"),
[Plugin](https://docs.joomla.org/Plugin "Plugin")

## [Template style](https://docs.joomla.org/Template_style "Special:MyLanguage/Template style")

## Upgrade Package

An Upgrade Package in Joomla! is an archive of files that contain the
files that have changed between Joomla! versions. When this archive is
unpacked, it replaces the old version of the modified files with the new
version. For example, if fifty files were changed between version 3.x.1
and 3.x.2, the upgrade package from 3.x.1 to 3.x.2 would contain these
fifty files and, when unpacked, would replace these fifty files and
upgrade the installed version from 3.x.1 to 3.x.2.

Upgrade Packages are also sometimes referred to as [patch
files](https://docs.joomla.org/Patch "Patch"). Before installing an
Upgrade Package, read the [release
notes](https://docs.joomla.org/Joomla_1.5_version_history "Joomla 1.5 version history")
and the <a href="https://docs.joomla.org/Upgrade_Instructions"
class="mw-redirect" title="Upgrade Instructions">Upgrade
Instructions</a> relating to the Upgrade Package.
