<!-- Filename: J4.x:How_to_Show_a_Calendar_Month_List_of_Archived_Articles_Using_a_Module / Display title: How to Show a Calendar Month List of Archived Articles Using a Module -->

Joomla!  4.x <span id="main-portal-heading">**How To**  
Show a Calendar Month List of Archived Articles Using a Module</span>

## Introduction

Archiving articles is one of the ways Joomla! helps you to manage your
website’s articles.

Sometimes you may archive articles as a measure of housekeeping in the
backend.

But what if you want your website visitors to be able to access your
archived articles?

One of the options to do this is to show a calendar month list of your
archived articles by using one of Joomla’s out of the box Modules.

In this example we will add an **Articles Archived Module** and set it
to be displayed in the sidebar of the website.

## Creating the Articles Archived Module

<img
src="https://docs.joomla.org/images/thumb/2/22/J4.x_access_new_module_dashboard-en.png/800px-J4.x_access_new_module_dashboard-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/2/22/J4.x_access_new_module_dashboard-en.png 1.5x"
data-file-width="1000" data-file-height="607" width="800" height="486"
alt="J4.x access new module dashboard-en.png" />

From the Home Dashboard click the **Modules** + symbol or from the
Sidebar Menu click the **Content’’ dropdown then the + symbol for** Site
Modules.

This will take you to the **Select a Module Type** dashboard.

<img
src="https://docs.joomla.org/images/thumb/2/2b/J4.x_add_archived_articles_module_btn-en.png/800px-J4.x_add_archived_articles_module_btn-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/2/2b/J4.x_add_archived_articles_module_btn-en.png 1.5x"
data-file-width="1000" data-file-height="252" width="800" height="202"
alt="J4.x add archived articles module btn-en.png" />

Click the + symbol for **Articles – Archived**.

This will create the new module and open the module for you to configure
it.

## Configuring the Module

### Module Tab

<img
src="https://docs.joomla.org/images/thumb/a/ab/J4.x_archived_articles_module_parameters-en.png/800px-J4.x_archived_articles_module_parameters-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/a/ab/J4.x_archived_articles_module_parameters-en.png 1.5x"
data-file-width="1000" data-file-height="385" width="800" height="308"
alt="J4.x archived articles module parameters-en.png" />

You control where and how the module will be displayed via the module
settings panel. When you create the module it will open on the Module
tab.

**For standard usage of the module there are just a few settings:**

**Title**: Enter a name for the module. You can also choose whether or
not to show the title by toggling on and off. If you are going to show
the title, name it as you want it to appear.

**\# of Months**: Set the number of Months you want to display. These
will appear as links on the frontend. Set by using the up/down arrows or
directly enter a number into the field.

**Position**: Set a position where you want to display the module on the
front end. Positions are dictated by your template. In this example we
are using Joomla’s Cassiopeia template and have selected the Sidebar
Right position.

**Status**: By default, the module status is **Published**. Other
options are **Unpublished** and **Trash**.

**Other settings not shown in screenshot are:**

**Start Publishing**: You can schedule the start of publishing of the
module.

**Finish Publishing**: You can schedule when to stop publishing the
module.

**Access**: If you want to control who can see the module on the
frontend you can choose an access level.

**Ordering**: Used to control where the module displays within the
position you have selected. For example, you may have a number of
modules in the sidebar and want this one to be at the top or bottom – or
somewhere between others in the sidebar. It can be a little confusing at
first as the field shows a numbered position and a module name. The name
can be a module that is unpublished. The thing to remember is that the
lowest number will be at the top and highest number is at the bottom.

**Note**: Can be helpful to use the note field if for example you are
using the same module type in several places.

### Menu Assignment Tab

By default the module will be published **On all pages**.

Alternatively you can choose via a drop down list **No pages**, **Only
on the pages selected** or **On all pages except those selected**. The
last two options provide you with a menu tree of the menus used on the
website where you can select/deselect pages.

### Other Settings

**Advanced** tab has settings related to layout of the module when it is
output.

**Permissions** tab allows you to control what user groups can do with
the module.

You can find out more detailed information here:
<a href="https://docs.joomla.org/Help4.x:Menu_Item:_Article_Archived/en"
class="external text" target="_blank" rel="noreferrer noopener">Menu
Item: Article Archived</a>

## Publishing the Module

When you are ready, click the **Save & Close** button.

The module will be published in the sidebar of the website and display a
list of links dictated by the number of months you set the module to
display.

<img
src="https://docs.joomla.org/images/thumb/0/05/J4.x_archived_articles_module_published-en.png/800px-J4.x_archived_articles_module_published-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/0/05/J4.x_archived_articles_module_published-en.png 1.5x"
data-file-width="1000" data-file-height="322" width="800" height="258"
alt="J4.x archived articles module published-en.png" />

## Quick Tips

The more archived articles you have the greater the number of the links
displayed by the module. It may be more appropriate to limit the number
of links by using categories or you can use multiple Archived Articles
Modules named accordingly.
