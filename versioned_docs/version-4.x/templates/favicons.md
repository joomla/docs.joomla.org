<!-- Filename: J4.x:Favicons / Display title: Favicons -->

## The Joomla! Favicons

Favicons are the small icons that appear in the browser tab alongside
your site name. Near the top of the template index.php are three
instructions to load favicons into the page:

    // Browsers support SVG favicons
    $this->addHeadLink(HTMLHelper::_('image', 'joomla-favicon.svg', '', [], true, 1), 'icon', 'rel', ['type' => 'image/svg+xml']);
    $this->addHeadLink(HTMLHelper::_('image', 'favicon.ico', '', [], true, 1), 'alternate icon', 'rel', ['type' => 'image/vnd.microsoft.icon']);
    $this->addHeadLink(HTMLHelper::_('image', 'joomla-favicon-pinned.svg', '', [], true, 1), 'mask-icon', 'rel', ['color' => '#000']);

For the Cassiopeia template, Joomla will look for the favicons in the
following locations:

1.  **media/templates/site/cassiopeia/images** - they are not there so
    Joomla will look in the next location.
2.  **media/system/images** - they are there so Joomla will use them
    from there.

If you want to use your own favicons rather than Joomla favicons you
upload them to the first location:
**media/templates/site/cassiopeia/images**. You can do that using the
Templates: Customise form. They will not be affected by any update to
the Cassiopeia template.

Favicons are sometimes used at larger sizes and in places other than the
browser tab. For example, this is a screenshot of part of a Firefox
start page showing some of the User's favourite locations:

<img
src="https://docs.joomla.org/images/1/13/J4x-favicons-firefox-start-collection-en.png"
class="thumbborder" decoding="async" data-file-width="588"
data-file-height="144" width="588" height="144"
alt="J4x-favicons-firefox-start-collection-en.png" />

All modern browsers support SVG icons so you should make creation of an
SVG icon a priority.

## About SVG

SVG is an acronym for Scalable Vector Graphics. An SVG file contains
text in a format that defines the locations and shapes of lines with
line colours, fill colours and so on. The following screenshot shows the
*joomla-favicon.svg* file opened in a text editor. The line numbers are
created by the text editor. They are not present in the file. The long
lines represent curves and are truncated here for display purposes.

<img
src="https://docs.joomla.org/images/6/6f/J4x-favicons-joomla-favicon-svg-text-en.png"
class="thumbborder" decoding="async" data-file-width="950"
data-file-height="369" width="950" height="369"
alt="J4x-favicons-joomla-favicon-svg-text-en.png" />

To create an SVG file you need to use an appropriate application such as
Inkscape. Raster graphics applications such as Photoshop or The GIMP
will not do. If you would prefer to design an icon in a raster graphics
application, or you have an existing raster graphic logo that can be
adapted for an icon you can import the resulting PNG file into Inkscape
and there trace it to produce an SVG file. The traced image must be
deleted after tracing!

Actual creation of an SVG favicon is beyond the scope of this article.
Creation of a standard *favicon.ico* file starting from a
*joomla-favicon.svg* file is very simple--plenty of sites do it online
for free.

## How to Create Favicons

If you want to create your own favicons the best way to do it is to
create an SVG favicon and then use an online tool to generate all of the
other formats with that as input. In this example an icon is needed to
suit a child template named Cassiopeia Green. An icon needs to be square
and not too elaborate as the minimum display size is 16x16 pixels. Some
devices need higher resolutions, such as 32x32 or 180x180, and Google
recommends multiples of 48x48 pixels. If you start with an SVG you do
not need to worry about any of that - just create a nearly square image
with a suitable design. In this example, the favicon will be the letters
*J4* in dark green.

### Inkscape

Inkscape is a free, Open Source, cross-platform, vector graphics
application used to work with SVG files. It works on Linux, Mac and
Windows. Go to
<a href="https://inkscape.org/" class="external text" target="_blank"
rel="nofollow noreferrer noopener">the Inkscape site</a> to download a
copy for your platform. The following illustrations shows the Inkscape
screen part way through the following instructions.

<img
src="https://docs.joomla.org/images/thumb/6/62/J4x-templates-inkscape-favicon-en.png/800px-J4x-templates-inkscape-favicon-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/thumb/6/62/J4x-templates-inkscape-favicon-en.png/1200px-J4x-templates-inkscape-favicon-en.png 1.5x, https://docs.joomla.org/images/thumb/6/62/J4x-templates-inkscape-favicon-en.png/1600px-J4x-templates-inkscape-favicon-en.png 2x"
data-file-width="2622" data-file-height="1633" width="800" height="498"
alt="J4x-templates-inkscape-favicon-en.png" />

### Create an SVG

1.  Start Inkscape and make the window a comfortable size: select View /
    Zoom / Zoom Page
2.  Select the Text Tool, marked with letter A in the left Toolbar
3.  Select Arial, Normal, 48 and px
4.  Drag to define box anywhere on the page
5.  Type in Text: J4
6.  Select View / Zoom Selection
7.  Select Path / Object to Path - no visible change but the words are
    no longer text
8.  Select File / Document Properties
9.  Select Resize to Content
10. Zoom out for a better view - but make sure all of the letters are
    still selected
11. Set the height box to the same value as the width box. Type it!
12. Close the Document Properties dialog
13. View / Zoom Page again - the characters need to be centered
14. Edit / Select All
15. Objects / Align and Distribute
16. Move selection as group / Relative to Page / Center on horizontal
    axis - you should see J4 move to the vertical mid point
17. Select the Fill and Stroke right - the right hand panel has a
    dropdown list marked with a down chevron
18. In the Fill and Stroke panel, select Fill and the first filled
    square
19. In the RGB panel enter 006400ff in the RGBA field near the bottom
    right - the code for CSS style *darkgreen*
20. File / Save
21. In the Save dialog, enter a suitable file name, for example
    green-favicon-j4.svg
22. Select a suitable location, for example
    *~/Documents/joomla-dev/svgs*
23. Select Optimised SVG (*.svg*) from the dropdown list at the bottom
    of the form.
24. Select *Save*
25. Select *OK* for all of the Defaults in the Optimised SVG Output form
26. Close the SVG you are working on - there is an opportunity to save
    the image in Inkscape format but you don't really need to do that.

### Edit the SVG with a Text Editor

Start your favourite text editor to make some changes that were not
possible in Inkscape.

1.  Open your newly created SVG file - notice that the first line is an
    XML specification
2.  You can delete the second line - a comment containing Created with
    Inkscape
3.  If present, you can delete the line containing as there is no text
4.  Open the original joomla-favicon.svg file - it is in
    *joomla_root/media/system/images*
5.  Copy the style block and paste it into your SVG on the line
    following the SVG statement
6.  Close the original *joomla-favicon-svg* file to avoid accidental
    changes to it
7.  In the style block of your own SVG file change path {fill: \#000;}
    to path {fill: \#006400;}, the value in the line
8.  Remove *fill="#006400"* from the line
9.  Save
10. Open the image in your browser. For Firefox that is File / Open
    File...

You should see the image in your browser. The example shows J4 at 47
pixels square. The next stage is to create the other type of icons you
need using your newly created SVG as a master.

### Online Processing

Go to the
<a href="https://realfavicongenerator.net/" class="external text"
target="_blank" rel="nofollow noreferrer noopener">Real Favicon
Generator site</a>. Other sites are available but this one seems
particularly comprehensive.

1.  Select the button labeled *Select your Favicon image*
2.  The site will show you your Master Image. It also says *Your picture
    is not square (688x512). We can fix this by adding transparent
    margins*
3.  Select the *Continue with this picture* button below the Master
    Image.
4.  There are subforms with pale blue backgrounds for several types of
    icon - fill out each one checking the preview suits you.
5.  Best to stick with Favicon Generator Options defaults unless you
    know better. Except:
6.  Path, select the I cannot ... option and enter:
    *media/templates/cassiopeia-green/images*
7.  Select the *Generate your Favicons and HTML Code* button
8.  After a short delay, there is a new form, select the Download your
    package: *Favicon* package button
9.  Save the download ...
10. Select and copy the block of links to save somewhere.
11. Close the online processing site

The download is a *zip* file containing 10 items: *favicon.ico*,
*safari-pinned-tab.svg*, six PNG files, *browserconfig.xml* and
*site.webmanifest*.

### Deployment

To use the standard set of Joomla favicons you need to rename and move
the icons to *joomla_root/media/templates/yourtemplate/images*:

- Your master SVG image, *green-favicon-j4.svg*, must be renamed to
  *joomla-favicon.svg*
- The downloaded *safari-pinned-tab.svg* file needs to be renamed to
  *joomla-favicon-pinned.svg*
- The downloaded *favicon.ico* file just needs to be moved

### The Link Block

The link block copied previously contains:






You probably don't need to make use of it!
