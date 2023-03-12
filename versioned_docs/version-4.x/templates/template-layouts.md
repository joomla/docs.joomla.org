<!-- Filename: J4.x:Template_Layouts / Display title: Template Layouts -->

## Template Layouts

In Joomla!, each extension that generates html output places the output
code in a template file within the extension file structure, often in a
folder named tmpl. Some examples:

- /modules/mod_login/tmpl/default.php
- /modules/mod_login/tmpl/default_logout.php
- /components/com_content/tmpl/article/default.php
- /plugins/content/vote/tmpl/vote.php

### Template Overrides

In a template override, a file of the same name is created within the
template file structure and that is used instead of the file in the
extension file structure. Corresponding examples:

- /templates/cassiopeia/html/mod_login/default.php
- /templates/cassiopeia/html/mod_login/default_logout.php
- /templates/cassiopeia/html/com_content/article/default.php
- /templates/cassiopeia/html/plg_content_vote/vote.php

This allows you to customise the output to suit your needs. However, you
do not have the option to choose whether or not to use your override. It
is always used.

### Template Layouts

In a template layout, you create a file with a different name from the
original but in the same template folder. The new name must not contain
an underline character. You also create any file that shares the first
part of the original name. An example:

- /templates/cassiopeia/html/mod_login/expires.php
- /templates/cassiopeia/html/mod_login/expires_logout.php

It then becomes possible to choose whether to use the original default
layout or the alternative layout. The choice is made in the module or
component edit form (Advanced tab for modules, Options tab for
Articles). Note that not all extensions allow either overrides or
alternative layouts.

**Beware:** plugins do not provide a mechanism to select alternative
layouts.

## Module Alternative Layouts

Creating an alternative layout for a module is similar to creating a
template override for a module. In both cases, you create a folder
called `templates//html/`. For example, the folder for a "mod_login"
template override or alternative layout for the cassiopeia template
would be `templates/cassiopeia/html/mod_login/`.

There are two important differences between a template override and an
alternative layout. The first is the file name. For the template
override, you would name the file `default.php` to match the core file
name. For an alternative layout, you use a different name. The only rule
is that **the file name should not have any underscores in it**.

The second important difference is that, unlike template override files
which are used automatically whenever the module is displayed using the
template with the override, an alternative layout file is only used if
you select it as a parameter in the Module parameter settings.

### A worked example - mod_login

- Go to **System **→** Site Templates **→** Cassiopeia Details and
  Files**
- Select the **Create Overrides** tab.
- From the Module list select the **mod_login** item.
- In the Editor tab, select **html **→** mod_login** to see your newly
  created copies of the mod_login output templates.
- Rename **default.php** to something else without an underline,
  **expires.php** in this example.
- Rename **default_logout.php** to **expires_logout.php**.

You now have two files with exactly the same content as the originals.
Change the content of expires_logout.php to add a message informing the
user at what time the session will expire after each page load.

On line 16 immediately beneath the existing use statements add the
following:

    use Joomla\CMS\Factory;

    date_default_timezone_set('Europe/London');
    $config = Factory::getContainer()->get('config');
    $lifetime = $config->get('lifetime', 0);
    $time = time() + $lifetime * 60;
    $endTime = date('H:i:s', $time); // time() returns a time in seconds already

And on line 36 immediately following the line containing an endif
statement add this code:

    Your session will expire at 
      

Close the Cassiopeia files. Select **Content **→** Site Modules** and
open the Login module. In the Advanced tab, Layout item you will find
that you have a choice between **-- From Module -- / Default** and **--
From cassiopeia Template -- / expires**.

<img
src="https://docs.joomla.org/images/e/ee/J4x-alternative-layouts-example-en.png"
class="thumbborder" decoding="async" data-file-width="742"
data-file-height="546" width="742" height="546"
alt="J4x-alternative-layouts-example-en.png" />

One way you might use this feature is to have two Login forms, one with
Public access and the other with Super Users access, In the latter
select the **expires** option and only Super Users will see the reminder
of session expiry time.

It is important to understand that if specified in the Module parameters
screen, an alternative layout file for a module will be used for that
module regardless of what template is used to display the page where the
module is shown. It is therefore the administrator's responsibility to
make sure that the layout file will work as desired in any templates
where this module may be shown.

### Translation

You can translate the file name using Language Overrides. Try the
following procedure:

- Select **System **→** Manage panel **→** Language Overrides**
- Select your language and the Administrator location.
- Select the **New** button and fill out the form. In this example the
  language key is **TPL_CASSIOPEIA_MOD_LOGIN_LAYOUT_EXPIRES** and the
  text might be **Login / Logout with expire time**
- Save and Close and go back to the Login module form.

<img
src="https://docs.joomla.org/images/3/32/J4x-alternative-layouts-language-override-form-en.png"
class="thumbborder" decoding="async" data-file-width="1000"
data-file-height="508" width="1000" height="508"
alt="J4x-alternative-layouts-language-override-form-en.png" />

The module layout selection form field with **expires** translated:

<img
src="https://docs.joomla.org/images/c/c3/J4x-alternative-layouts-example-translated-en.png"
decoding="async" data-file-width="312" data-file-height="98" width="312"
height="98" alt="J4x-alternative-layouts-example-translated-en.png" />

## Component Alternative Layouts

Component alternative layouts work similarly to module layouts. A file
is placed in the same folder where you would place a template override
file. For example, to create an alternative layout for an article for
the template "cassiopeia", you would put a file in the folder
`templates/cassiopeia/html/com_content/article/`. As with module
layouts, the file must not be named the same as the core file and must
not include underscores in the name. Additionally, there should not be
an XML file of the same name in this folder. (We'll discuss XML files
below under Menu Item Alternative Layouts.)

You can set a global value for component layouts in the Options window
of the component. For example, in the Article: Options window, there is
a `Choose a Layout` parameter as shown below:

<img
src="https://docs.joomla.org/images/thumb/7/7a/J4x-article-global-alternative-layouts-en.png/800px-J4x-article-global-alternative-layouts-en.png"
decoding="async"
srcset="https://docs.joomla.org/images/7/7a/J4x-article-global-alternative-layouts-en.png 1.5x"
data-file-width="1000" data-file-height="508" width="800" height="406"
alt="J4x-article-global-alternative-layouts-en.png" />

As with module layouts, the component layouts are shown as parameter
options in the individual component edit screen. For example, for an
article, the parameter shows in the Articles: Edit Options tab as shown
below.

<img
src="https://docs.joomla.org/images/thumb/b/b0/J4x-article-alternative-layout-en.png/800px-J4x-article-alternative-layout-en.png"
decoding="async"
srcset="https://docs.joomla.org/images/b/b0/J4x-article-alternative-layout-en.png 1.5x"
data-file-width="1000" data-file-height="507" width="800" height="406"
alt="J4x-article-alternative-layout-en.png" />

As with other parameters, the Use Global setting will use the setting
from the Options parameter. The From Component's Default setting will
use the component's default layout. Alternative layouts that you have
created for different templates are shown under each template heading.

File names may be translated. The line below:

    TPL_CASSIOPEIA_COM_CONTENT_ARTICLE_LAYOUT_MYLAYOUT="Title Only No XML"

will translate a file called "mylayout.php" as "Title Only No XML".

You can have more than one file for a layout. The initial file must be
named without underscores and any additional files must have
underscores.

Component alternative layouts may be used with articles, contacts, or
news feeds.

Component alternative layouts are only used when two conditions are met:
(1) they are specified in the component parameters; and (2) there is no
menu item for this specific component. For example, if you have one or
more menu items of type "Single Article" set up for a given article,
then the alternative layout for that article will not be used. Instead,
the layout specified in the menu item will be used. This is consistent
with the general way that component parameters work, where the most
specific (in this case a single-article menu item) overrides the less
specific (in this case, the article parameters).

## Category Alternative Layouts

Category alternative layouts work like component layouts. The rules for
specifying layout files are the same. The only difference is that the
folder is the category folder, not the component folder. For example, a
contact category alternative layout for cassiopeia would go in the
folder `templates/cassiopeia/html/com_contact/category`.

You can set category layouts globally, in the Options screen of each
component. Below is an example from the Contacts: Options / Category
form:

<img
src="https://docs.joomla.org/images/thumb/e/ea/J4x-contact-component-options-category-alternative-layout-en.png/800px-J4x-contact-component-options-category-alternative-layout-en.png"
decoding="async"
srcset="https://docs.joomla.org/images/e/ea/J4x-contact-component-options-category-alternative-layout-en.png 1.5x"
data-file-width="1000" data-file-height="385" width="800" height="308"
alt="J4x-contact-component-options-category-alternative-layout-en.png" />

Category alternative layouts show up when you add or edit a category in
the Component: Edit Category / Options form as shown below.

<img
src="https://docs.joomla.org/images/thumb/b/b0/J4x-category-options-alternative-layout-en.png/800px-J4x-category-options-alternative-layout-en.png"
decoding="async"
srcset="https://docs.joomla.org/images/b/b0/J4x-category-options-alternative-layout-en.png 1.5x"
data-file-width="1000" data-file-height="494" width="800" height="395"
alt="J4x-category-options-alternative-layout-en.png" />

Category alternative layouts may be used for articles, banners, contacts
and news feeds.

As with component layouts, a category layout will be used only if:

1.  it is selected in the global or category parameters.
2.  there is no menu item specifically for the category.

If there is a menu item set up for a specific category, that layout
selected in the menu will be used instead of the alternative category
layout.

## Article Category Blog and List

For articles, there are two core category layouts available: Blog and
List. Each of these layouts appears in the Articles: Options form
Category tab under the "From Component" heading. Alternative layouts
also appear in the list allowing Blog or List or alternative template
layouts to be selected as the default category layout either globally or
when editing a single article category.

<img
src="https://docs.joomla.org/images/thumb/3/3c/J4x-articles-options-category-alternative-layout-en.png/800px-J4x-articles-options-category-alternative-layout-en.png"
decoding="async"
srcset="https://docs.joomla.org/images/3/3c/J4x-articles-options-category-alternative-layout-en.png 1.5x"
data-file-width="1000" data-file-height="425" width="800" height="340"
alt="J4x-articles-options-category-alternative-layout-en.png" />

This means that, like other layout options, you can control whether
article category links use blog or list layouts. It is important to
understand that, like other layout parameters, this option will only
take effect when there is no single-category menu item for the category.

## Alternative Menu Items

Alternative Menu Items have one important difference with the others. To
create a menu item alternative layout, you must include an XML file
whose name matches the initial layout file. For example, to create an
alternative menu item called "myarticle" for an article in the
cassiopeia template, you would create two files in the
`templates/cassiopeia/html/com_content/article` folder called
`myarticle.php` and `myarticle.xml`. If you wanted to include more
layout files, you would add these files with underscores in the file
names.

The XML file uses the same format as the core Menu Item XML files. This
allows you not only to create a customized layout for this menu item but
also allows you to create customized parameters. For example, you could
hide some parameters or add new parameters.

Alternative Menu Items show up when you select a menu item type in the
Menu Manager as shown below.

<img
src="https://docs.joomla.org/images/thumb/e/e3/J4x-template-layouts-menu-blog-alternate-layout-en.png/800px-J4x-template-layouts-menu-blog-alternate-layout-en.png"
decoding="async"
srcset="https://docs.joomla.org/images/e/e3/J4x-template-layouts-menu-blog-alternate-layout-en.png 1.5x"
data-file-width="1000" data-file-height="508" width="800" height="406"
alt="J4x-template-layouts-menu-blog-alternate-layout-en.png" />

Alternative Menu Items are used and work the same way as standard menu
items. Since they are already based on customized layouts, template
overrides do not apply to alternative menu items.

As indicated above, menu item layouts take priority over component or
category alternative layouts.

Translation of alternative menu items is done with the following tags in
the XML files. The format is `"TPL_"___`

\_. For example, these lines below will translate the title, option, and
description for an alternative menu item called "catmenuitem".

    TPL_CASSIOPEIA_COM_CONTENT_CATEGORY_VIEW_CATMENUITEM_TITLE="cassiopeia Custom Category Layout"
    TPL_CASSIOPEIA_COM_CONTENT_CATEGORY_VIEW_CATMENUITEM_OPTION="cassiopeia Custom"
    TPL_CASSIOPEIA_COM_CONTENT_CATEGORY_VIEW_CATMENUITEM_DESC="Description for cassiopeia custom category layout."

These strings have to be added to
`administrator/language/overrides/en-GB.override.ini` but you can use
the Language Overrides form described above.

The catmenuitem.xml would start with:


       
          
          
             TPL_CASSIOPEIA_COM_CONTENT_CATEGORY_VIEW_CATMENUITEM_DESC
          
       

## Controlling the Template for Alternative Menu Items

As discussed above, the presence of an XML file makes an alternative
layout a menu item. The format of the XML file is the same as the format
for core menu item XML files. With this XML file, you can add the
parameters you wish to include for this menu item. They can be the same
as one of the core menu items, or you can omit core parameters or add
new ones. Note that if you add new parameters, these can be used in the
layout file but will not be used in the core model or view files.

It is also possible to override parameter settings for core parameters.
One example of this is to control which templates an alternative menu
item layout can be displayed with. In some cases, you may want to allow
a custom menu item to be displayed with any template for the site. In
other cases, you may wish to limit that menu item's layout to one
specific template. In this situation, you would just add the following
parameter to the menu item's XML file:

      
      
     

This will override the core `template_style_id` parameter. Setting the
template equal to "cassiopeia" in this case will limit the user to only
selecting template styles for the "cassiopeia" template.

## Further Information

- [Template
  Basics](https://docs.joomla.org/J4.x:Template_Basics "Special:MyLanguage/J4.x:Template Basics")
- [Cassiopeia Template Folders and
  Files](https://docs.joomla.org/J4.x:Cassiopeia_Template_Folders_and_Files "Special:MyLanguage/J4.x:Cassiopeia Template Folders and Files")
- [Cassiopeia Template
  Customisation](https://docs.joomla.org/J4.x:Cassiopeia_Template_Customisation "Special:MyLanguage/J4.x:Cassiopeia Template Customisation")
- [Template
  Overrides](https://docs.joomla.org/J4.x:Template_Overrides "Special:MyLanguage/J4.x:Template Overrides")
- [Template
  Layouts](https://docs.joomla.org/J4.x:Template_Layouts "Special:MyLanguage/J4.x:Template Layouts")
- [Cassiopeia Template Simplified - A Case
  Study](https://docs.joomla.org/J4.x:Cassiopeia_Template_Simplified_-_A_Case_Study "Special:MyLanguage/J4.x:Cassiopeia Template Simplified - A Case Study") -
  a simple template based on Cassiopeia
