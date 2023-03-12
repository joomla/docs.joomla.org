<!-- Filename: J4.x:Template_Overrides / Display title: Template Overrides -->

## Introduction

Joomla extensions define their output appearance with template files,
which contain HTML and PHP generated HTML markup, and CSS files that
define layout, colour scheme, fonts and so on. That may be perfectly
suited to your needs, especially as you can alter appearance with your
own CSS styles. Sometimes you want to show additional information or
perhaps less information. For that you need to create a template
override.

Many of the Joomla extensions have quite complex output templates that
are difficult to read. You need a good understanding of HTML, PHP and
CSS to tackle some of them. So this article illustrates the process by
creating an override for the logout form which is actually in the login
module, mod_login. The site owner would like the logout form to show the
time at which automatic logout will occur after a period of inactivity.

## Example: Template Override for mod_login

Start by selecting **System **→** Templates **→** Site Templates** in
the Administrator menu and then select the Cassiopeia Details and Files
item. That will open the Templates: Customise (Cassiopeia) form:

<img
src="https://docs.joomla.org/images/thumb/4/45/J4x-templates-customise-cassiopeia-en.png/800px-J4x-templates-customise-cassiopeia-en.png"
decoding="async"
srcset="https://docs.joomla.org/images/4/45/J4x-templates-customise-cassiopeia-en.png 1.5x"
data-file-width="1000" data-file-height="508" width="800" height="406"
alt="Cassiopeia Files" />

**Important:** do not edit any of the files supplied as part of the
Cassiopeia template. At the next Joomla update those files may be
overwritten and your edits will be lost.

The html folder is where overrides are located. If you expand the html
folder you will see that there are already overrides for layouts,
mod_custom, mod_menu and tinymce. Expand each to see what is in them.
There is no mod_login at this stage.

## Create Overrides

Select the Create Overrides tab to see the list of Modules, Components,
Plugins and Layouts for which you may create overrides:

<img
src="https://docs.joomla.org/images/thumb/3/3b/J4x-cassiopeia_template_overrides-en.png/800px-J4x-cassiopeia_template_overrides-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/3/3b/J4x-cassiopeia_template_overrides-en.png 1.5x"
data-file-width="1000" data-file-height="688" width="800" height="550"
alt="Template Overrides" />

Select the mod_login item. The mod_login template php files will be
copied into the html folder and you will be returned to the Editor tab.
Expand the html and mod_login folders. You will see default.php and
default_logout.php.

You do not want the default.php file as that is an override for the
login form. Select it and then the **Delete File** button in the
Toolbar. In the alert dialog, Confirm that you wish to delete the file.

Note how easy it is to delete files if you change your mind. And with
the Manage Folders button you can delete entire folders too. Be careful
not to delete something you did not create yourself.

## Edit default_logout.php

In the Editor tab, select the default_logout.php file. Notice the
buttons at the top right: Show Original File and Show Differences. The
latter has been set to Yes for the following screenshot to show some
lines of code added near the top of the file. These lines of code
calculate when the user session will expire after loading the page
containing the logout form.

<img
src="https://docs.joomla.org/images/thumb/5/55/J4x-cassiopeia-template-customisation-logout-override-en.png/800px-J4x-cassiopeia-template-customisation-logout-override-en.png"
decoding="async"
srcset="https://docs.joomla.org/images/5/55/J4x-cassiopeia-template-customisation-logout-override-en.png 1.5x"
data-file-width="1000" data-file-height="969" width="800" height="775"
alt="Edit override file" />

The Diff area shows added lines with a green background and deleted
lines with a red background. There are no deleted lines in this case.
The code is shown here should you wish to copy it to try this yourself.

    use Joomla\CMS\Factory;

    date_default_timezone_set('Europe/London');
    $config = Factory::getContainer()->get('config');
    $lifetime = $config->get('lifetime', 0);
    $time = time() + $lifetime * 60;
    $endTime = date('H:i:s', $time); // time() returns a time in seconds already

Further down the override file, line 36, some more lines have been added
to output the desired message:

    Your session will expire at 
      

Save and reload the site page containing the logout form.

<img
src="https://docs.joomla.org/images/c/c0/J4x-cassiopeia-template-customisation-logout-override-result-en.png"
decoding="async" data-file-width="318" data-file-height="218"
width="318" height="218" alt="Override Result" />

You should see the logout form change each time the page is reloaded.
But what if you should change your mind? Or have different options for
different User groups? Welcome to Layouts, the subject of a separate
article.

## Other Overrides

The Create Overrides tab of the Templates: Customise (Cassiopeia) form
is used to create any of the elements of Joomla output for which it is
possible to create overrides. The override folder names mostly start
with com\_, mod\_ or plg\_. Note that the second part of a plugin
override folder signifies the plugin group. Here is an example selection
of override folders:

<img
src="https://docs.joomla.org/images/3/3d/J4x-cassiopeia-template-customisation-example-override-folder-en.png"
class="thumbborder" decoding="async" data-file-width="244"
data-file-height="403" width="244" height="403"
alt="J4x-cassiopeia-template-customisation-example-override-folder-en.png" />

## Layout Overrides

Small layout files are often used for individual elements of Joomla!
pages. The articles Read More button, the Intro image and the Full image
are all examples of elements that are generated by their own layout
files. These micro-layouts are found in the /layouts folder. For
example, in the Category Blog view, the blog_item.php file contains the
code to place the article title, an intro image, the intro text, as well
as various other relevant parts of the page. It does so by using a
LayoutHelper call passing the layout to use as a parameter. This is an
example, the call to insert the Article Title in the blog layout:

    item); ?>

The location of the file for this particular element is found by
replacing the dot symbols with slash symbols, prepending /layouts/ and
appending .php:

    JOOMLAROOT/layouts/joomla/content/blog_style_default_item_title.php

When an override file is created it is found in:

    JOOMLAROOT/templates/cassiopeia/html/layouts/joomla/content/blog_style_default_item_title.php

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
