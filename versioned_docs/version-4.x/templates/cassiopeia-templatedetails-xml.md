<!-- Filename: J4.x:Cassiopeia_templateDetails.xml / Display title: Cassiopeia templateDetails.xml -->

## Location and Purpose

You can see an example of a `templateDetails.xml` file listed in
**System **→** Site Templates **→** Cassiopeia Details and Files**. You
can edit it there too if you have good reason to do so. Otherwise, leave
it alone! Every template has such a file and a child template initially
consists of a file structure containing only this one file.

The `templateDetails.xml` file contains the data that Joomla! needs to
manage and display the template. This includes meta-data used to provide
information about the template, the locations of folders and files, the
template module positions and the user selectable configuration options.
The content of the templateDetails.xml file will differ from template to
template.

## Cassiopeia templateDetails.xml

Files in xml format have a well-defined structure. An xml file must be
have the correct syntax or it will not work!

### XML Format

The first line of every `templateDetails.xml` must start with the XML
doctype definition.

The next line tells Joomla! that the data in this file is for a site
template extension. All template data is contained within the opening
and the closing tags.

    ...

### Metadata

The first section of template data usually defines template information,
for example: names, dates, contact information, copyrights, version
number and description.

        cassiopeia
        1.0
        2017-02
        Joomla! Project
        admin@joomla.org
        (C) 2017 Open Source Matters, Inc.
        TPL_CASSIOPEIA_XML_DESCRIPTION
        1

Notice that a template that can have child templates has the ineritable
value set to 1. Child templates have this value set to 0. This data is
used in the Templates: Templates (Site) listing as shown below.

<img
src="https://docs.joomla.org/images/thumb/d/da/J4x-templates-list-en.png/800px-J4x-templates-list-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/d/da/J4x-templates-list-en.png 1.5x"
data-file-width="1000" data-file-height="508" width="800" height="406"
alt="J4x-templates-list-en.png" />

The description contains a language key and not the actual description
text string. The key is replaced by the text obtained from a language
file at run time. The language files are defined in the in the language
section of `templateDetails.xml`.

<img
src="https://docs.joomla.org/images/thumb/d/d6/J4x-templates-cassiopeia-language-string-en.png/800px-J4x-templates-cassiopeia-language-string-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/d/d6/J4x-templates-cassiopeia-language-string-en.png 1.5x"
data-file-width="1000" data-file-height="347" width="800" height="278"
alt="J4x-templates-cassiopeia-language-string-en.png" />

### Folders and Files

Folders and files for the Cassiopeia template are stored in two separate
places. The php and related files are stored in the site/templates
folder. The media files (css, images, js and scss) are stored in the
site/media folder. Those locations are defined in the xml file as
follows:

       
            component.php
            error.php
            index.php
            joomla.asset.json
            offline.php
            templateDetails.xml
            html
        
        
            js
            css
            scss
            images
        

This is the pattern seen in all modern Joomla 4 templates. The structure
can be seen in the Templates: Customise (Cassiopeia) form:

<img
src="https://docs.joomla.org/images/thumb/8/88/J4x-templates-cassiopeia-customise-en.png/800px-J4x-templates-cassiopeia-customise-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/8/88/J4x-templates-cassiopeia-customise-en.png 1.5x"
data-file-width="1000" data-file-height="438" width="800" height="350"
alt="J4x-templates-cassiopeia-customise-en.png" />

### Module Positions

The available module positions are defined as follows:

       
            topbar
            below-top
            menu
            search
            banner
            top-a
            top-b
            main-top
            main-bottom
            breadcrumbs
            sidebar-left
            sidebar-right
            bottom-a
            bottom-b
            footer
            debug
        

Each tag creates a module position that is available from the position
list in a module edit form. The simple format of the position list means
it can be customized easily. For example, to add a new module position
to the list **in a child template**, simply add a new tag inside the tag
with a unique name using all lowercase letters with no spaces. Keep in
mind that this only adds the position to module edit forms and
additional development in other template files is required to render the
new position on the front end.

Cassiopeia has enough template positions! If you think you need an extra
one you are probably wrong. Remember that any number of modules can be
assigned to a single position and sorted into order in the Modules list
page. Available positions:

<img
src="https://docs.joomla.org/images/2/28/J4x-cassiopeia_template_explained_positions.png"
class="thumbborder" decoding="async" data-file-width="786"
data-file-height="980" width="786" height="980"
alt="Template Positions" />

You can also see the module positions in any template: from
**System **→** Site Templates** selet the Options button in the Toolbar.
In the Options form set the Preview Module Positions field to Enabled.
Save and Close. Go to your site and add ?tp=1 to the end of any url (or
&tp=1 if there is already a ? in the url). Joomla will display all of
the available template positions, even those that have not been used:

<img
src="https://docs.joomla.org/images/thumb/e/e5/J4x-templates-cassiopeia-template-positions-en.png/800px-J4x-templates-cassiopeia-template-positions-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/e/e5/J4x-templates-cassiopeia-template-positions-en.png 1.5x"
data-file-width="1000" data-file-height="508" width="800" height="406"
alt="J4x-templates-cassiopeia-template-positions-en.png" />

### Languages

Language files allow translation of static text in the template. The
tpl_cassiopeia.ini file contains key to text translations for text that
will be viewed by the User. The tpl_cassiopeia.sys.ini file contains key
to text translations for text that will be seen by the Administrator.

       
            en-GB/tpl_cassiopeia.ini
            en-GB/tpl_cassiopeia.sys.ini
        

The language files for the default English GB language are are stored in
site/language/en-GB/. Other languages would be stored similarly in files
with the appropriate ISO language code, for example fr-FR for French in
France or de-DE for German in Germany (which might be different from
Swiss German and Austrian German).

### Options

A template may offer display options that can be chosen by the
Administrator in the Template: Edit Style form. For example, the
Advanced tab of the Cassiopeia template allows an Administrator to
change the Brand, add a Logo, select a Fonts Scheme, and more.

<img
src="https://docs.joomla.org/images/thumb/8/83/J4x-templates-cassiopeia-edit-style-en.png/800px-J4x-templates-cassiopeia-edit-style-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/8/83/J4x-templates-cassiopeia-edit-style-en.png 1.5x"
data-file-width="1000" data-file-height="922" width="800" height="738"
alt="J4x-templates-cassiopeia-edit-style-en.png" />

The template options are defined within a structure that creates fields
within fieldsets. Each feildset appears as a tab in the edit form. This
is the structure that creates the Advanced tab seen above.

       
            
                
                    
                        JNO
                        JYES
                    
                    ...
                
            
        

Individual options are defined with the tag. Each

, and each parameter within a

, require a unique name defined by a **name** attribute. This name
defines the parameter itself and is used to pass settings to the front
end files. Each parameter also contain a **label** attribute and a
**description** attribute. The label text appears with the parameter in
the settings screen to identify what the setting is used for and more
detailed information can be included in the description.

A parameter field can be virtually any type of form input with
corresponding options. This is selected by the **type** attribute. Any
necessary options, such as radio button or select choices, are defined
in tags. CSS class names can be defined with the **class** attribute and
a default value can be defined using the **default** attribute.

Below are the option definitions in the default Cassiopeia template. In
this example, all Labels, Descriptions and Options are using language
string definitions from the Language files defined in the previous
section, as well as some from the Joomla! core, so they can be
translated into different languages as necessary.

       
            
                
                    
                        JNO
                        JYES
                    

                    

                    

                    

                    
                        JNONE
                        
                            Roboto (local)
                        
                        
                            Fira Sans (web)
                            Roboto + Noto Sans (web)
                        
                    

                    

                    
                        TPL_CASSIOPEIA_COLOR_NAME_STANDARD
                        TPL_CASSIOPEIA_COLOR_NAME_ALTERNATIVE
                    

                    
                        TPL_CASSIOPEIA_STATIC
                        TPL_CASSIOPEIA_FLUID
                    

                    
                        JNO
                        JYES
                    

                    
                        JNO
                        JYES
                    
                
            
        

In this example, the

tag encloses all of the parameters and it uses the **name** attribute to
create the "Advanced" tab in the interface. All that is necessary to
create another tab in the interface is another

tag with a different **name** attribute. With this in mind, it is
relatively simple to create as many additional tabs and parameters as
necessary in a template.

One potential use of extra parameters is in overrides or layouts for
either parent or child templates.

## Summary

This is the templateDetails.xml file used by Cassiopeia:


        cassiopeia
        1.0
        2017-02
        Joomla! Project
        admin@joomla.org
        (C) 2017 Open Source Matters, Inc.
        TPL_CASSIOPEIA_XML_DESCRIPTION
        1
        
            component.php
            error.php
            index.php
            joomla.asset.json
            offline.php
            templateDetails.xml
            html
        
        
            js
            css
            scss
            images
        
        
            topbar
            below-top
            menu
            search
            banner
            top-a
            top-b
            main-top
            main-bottom
            breadcrumbs
            sidebar-left
            sidebar-right
            bottom-a
            bottom-b
            footer
            debug
        
        
            en-GB/tpl_cassiopeia.ini
            en-GB/tpl_cassiopeia.sys.ini
        
        
            
                
                    
                        JNO
                        JYES
                    

                    

                    

                    

                    
                        JNONE
                        
                            Roboto (local)
                        
                        
                            Fira Sans (web)
                            Roboto + Noto Sans (web)
                        
                    

                    

                    
                        TPL_CASSIOPEIA_COLOR_NAME_STANDARD
                        TPL_CASSIOPEIA_COLOR_NAME_ALTERNATIVE
                    

                    
                        TPL_CASSIOPEIA_STATIC
                        TPL_CASSIOPEIA_FLUID
                    

                    
                        JNO
                        JYES
                    

                    
                        JNO
                        JYES
                    
                
            
        
