<!-- Filename: Why_are_the_backgrounds_of_your_WYSIWYG_editor_fields_colored%3F / Display title: Why are the backgrounds of your WYSIWYG editor fields colored? -->

The simple answer as to why this happens is in the term *WYSIWYG*.
Content editors such as TinyMCE attempt to allow users to see what the
text they're entering will look like when it appears on the Frontend of
the website. To this end, they show the text against the color or image
specified in the *template.css* file of whatever template the Frontend
of the website is using.

This often presents a problem for users when their website is designed
to appear as a lighter content pane floating over a dark background. The
darker background is what appears in the editor windows, making the text
almost impossible to see. In such cases, it may be necessary to tell the
editor not to use the *template.css* file as a reference, but rather to
use a different CSS file.

**Note** Some editors such as JCE and FCK have configuration interfaces
that allow you to override the *template.css* file or to ignore template
classes. Explore this option before trying the solution below.

Step 1: Create a customized CSS file. The first thing you'll need to do
is to write a customized *.css* file for your editor. It doesn't have to
be very complicated, and you can use the file below for reference.

    /* CSS Document */
    /* Editor Assigned Styles */
    /*make sure that any styles you put here also exist in your ''template.css' file or they will have no effect in the front end */
    p.rightalign {
    text-align: right;
    }
    .red {
    color: #c00;
    }
    .green {
    color: #0c0;
    }
    .highlight {
    background-color: Yellow;
    color: Blue;
    padding: 0;
    }
    p.code {
    background-color: #ddd;
    border: 1px solid #bbb;
    }
    .small {
    color: #999999;
    font-size: 10px;
    }
    /* Body Tag for Background Color and Font Specs. */
    body {
    font-family: Arial, Helvetica, Sans Serif;
    font-size: 12px;
    color: #333333;
    background: #ffffff;
    }
    /* Optional Basic Stuff you can use to make everything look like it does on the site itself */
    /* you can get this stuff right out of your template.css file, or you can just leave it out */
    ul
    {
    margin: 0;
    padding: 0;
    list-style: none;
    }
    li
    {
    line-height: 16px;
    padding-left: 16px;
    padding-top: 0px;
    background-image: url(..https://docs.joomla.org/images/arrow.png); /* use the real image path that you have on your site. An absolute path is okay. */
    background-repeat: no-repeat;
    background-position: 0px 2px;
    }
    td {
    text-align: left;
    font-size: 12px;
    }
    a, a:link, a:visited {
    color: #c64934; text-decoration: none;
    font-weight: bold;
    }
    a:hover {
    color: #900; text-decoration: none;
    font-weight: bold;
    }

Make note of the comments in the file above. The first section consists
of text classes; you'll want to go into your template's *template.css*
file and find the text classes (*.highlight*, *.small*, etc.) it
specifies that you'll be likely to use in your content and make sure to
copy them into the *editor_content.css* file as well. The same is true
of the styles defined in the last section (*a:hover*, *td*, *ul* etc.).

The key part that fixes the background issue is the *body* style
specified in the middle. You can change parts of this to match your
template if you like, but leave the *background* rule set to *\#FFFFFF*.
This will make the editor windows white, as opposed to the dark
background color of your site template.

Incidentally, if your website uses a background **image** in addition to
a color, the same thing applies.

Also, if this is too much work, you **can** just copy and paste your
template's *template.css* file into a new CSS file and change the *body*
style so that the background is set to *\#FFFFFF*. This is less neat and
orderly, but you'll be sure you have all of the classes and such defined
properly this way.

When you've finished, save your new CSS file as *editor_content.css*.

Step 2: Upload your CSS file to the correct directory.

You'll use an FTP client for this. If Joomla! is in a separate folder,
you'll navigate to:

*joomla/templates/\[the template you're using\]/css/*

If you don't have Joomla! in a separate folder, just go to whatever
directory houses your Joomla! files. The key is to make sure you're in
the correct Frontend template folder for your website. Upload your
*editor_content.css* file to the CSS folder under this template
directory.

Note that in most cases, the only other file in this directory is a file
called *template.css*. If you see that file, you're probably in the
right place. Also, note that there is a *css* directory in
*joomla/templates/* as well, but this IS **not** the directory you're
looking for. You want the CSS directory under the template you're using.

Step 3: Point your Editor to the new CSS.

Now go back to your site and into the Administrator area. Click on
*Mambots* and *Site Mambots* to see the list of Mambots currently in use
in your website. Check TinyMCE WYSIWYG (or whatever WYSIWYG editor
you're using) and then *Edit* to open the editing pane for the editor.

Look to the right side under *Parameters* and scroll down until you see
the option entitled *Template CSS Classes*. Click the radio button to
*no*. Right under this is a field entitled *Custom CSS Classes*. In this
field type:

*templates/\[template you're using\]/css/editor_content.css*

Then *Save and exit*.

This should correct the background issue in your editor. If it doesn't,
you've either set up your *editor_content.css* file incorrectly or
you've uploaded the file to the wrong directory.
