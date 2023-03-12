<!-- Filename: J4.x:Template_Basics / Display title: Template Basics -->

## Introduction

In Joomla! a template is a collection of files that together define the
website appearance. Joomla 4 provides two templates: Atum is the
Administrator template used for site management; and Cassiopeia is the
Site template used for site visitors. Many more site templates are
available from independent suppliers, either free or for a modest
charge. Indeed there is a whole industry based on the provision of
specialist site templates.

A typical site template contains PHP files to lay out the content and
CSS files to style the content. There are often additional files such as
images used in the layout and JavaScript files used to interact with
site features such as links and buttons. The following screenshot shows
the Cassiopeia template folders and files in a new Joomla 4
installation:

<img
src="https://docs.joomla.org/images/thumb/4/45/J4x-templates-customise-cassiopeia-en.png/800px-J4x-templates-customise-cassiopeia-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/4/45/J4x-templates-customise-cassiopeia-en.png 1.5x"
data-file-width="1000" data-file-height="508" width="800" height="406"
alt="J4x-templates-customise-cassiopeia-en.png" />

Note the the php files are in the site /templates folder and the media
files are in the site /media folder.

## Template Positions

The site template defines the positions of the main content, for example
an individual article or a blog layout of featured articles, and any
modules to be displayed above, below, to the left or to the right of the
main content. The following illustration shows the positions available
in Cassiopeia:

<img
src="https://docs.joomla.org/images/2/28/J4x-cassiopeia_template_explained_positions.png"
class="thumbborder" decoding="async" data-file-width="786"
data-file-height="980" width="800" height="997"
alt="Template Positions" />

Also, you can see the template positions in any template by setting
Preview Module Positions to Enabled in the Template: Options form and
then appending ?tp=1 to the url. If there is already a query string
appended to the url then append &tp=1 instead.

## User Styling

Cassiopeia has some options that you can change to alter site appearance
(there is a separate article on Cassiopeia Customisation). That may not
be enough for your purposes. You can make your own changes to appearance
with a user.css style sheet. You have to create this yourself in the
Templates:Customise form. Just select New File and enter File Name:
user, select File Type: .css, and select css from the list of folders.
Then select the newly created user.css file in the Edit form and enter
some styles, for example, to make headings dark green:

    h1, h2, h3, h4, h5, h6 {
      color: darkgreen;
    }

## Template Overrides

In addition to the overall layout defined by the site template, each
component or module has a template to define its appearance within the
overall layout. Such templates are located in a tmpl folder within the
component or module. Some plugins also have templates. And there are
layouts that may be called from any type of extension.

Sometimes one of these *extension* templates is not quite to your
liking. In which case you can create a template override. This is a copy
of the code used to generate the extension layout for you to change to
suit your own purposes. The following screenshot shows the Template:
Customise Create Overrides form:

<img
src="https://docs.joomla.org/images/thumb/3/3b/J4x-cassiopeia_template_overrides-en.png/800px-J4x-cassiopeia_template_overrides-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/3/3b/J4x-cassiopeia_template_overrides-en.png 1.5x"
data-file-width="1000" data-file-height="688" width="800" height="550"
alt="Template Overrides" />

Cassiopeia has some overrides already installed. That may seem to be a
problem. If you change any of the default Cassiopeia files your changes
will be overwritten (hence lost) at the next Joomla update. The solution
is child templates.

## Alternative Layouts

A template, or a template override, defines the appearance of an
extension in a specific file, such as default.php. In some cases you may
wish to choose between the default layout and an alternative layout. For
example, a menu in a top position usually needs a different layout from
the same menu in a side position. In a menu module there is a Layout
parameter in the Advanced tab of the module edit form that allows you to
select from available alternative layouts. There is a separate tutorial
on Template Alternative Layouts.

## Child Templates

A child template uses the files in its parent template except for any
files that are in the child template. For example, you could have
different user.css files in parent and child so that different pages
could have different colour schemes. Or you could copy the index.php
file from the parent to the child and change the child to produce a
different layout from the parent. There is a separate tutorial on child
templates.

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
