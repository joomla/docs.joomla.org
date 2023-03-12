<!-- Filename: J4.x:Template_SVG_Logos / Display title: Template SVG Logos -->

## Cassioepeia Logo

The default Joomla 4 site template, Cassiopeia, uses the word CASSIOPEIA
as a Brand Logo. It appears at the top of every page unless you set
Brand to No in the Templates: Edit Style form, Advanced tab, or you use
a Title word instead of a graphic. That word is actually a Scaled Vector
Graphic (SVG) file. You can choose an alternative graphic but it is
quite tricky to create and use an alternative SVG Logo. This brief set
of instructions may help.

## Inkscape

Inkscape is an open source, cross platform vector graphics application,
meaning you can download it for free and use it on Linux, Mac or
Windows. So to get started go to the Inkscape website and download the
version for your laptop or desktop computer. Start Inkscape and you are
ready to create an SVG Brand Logo. The screenshot below shows Inkscape
part way through creation of a new SVG Logo.

<img
src="https://docs.joomla.org/images/thumb/d/d1/J4x-templates-inkscape-en.png/800px-J4x-templates-inkscape-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/d/d1/J4x-templates-inkscape-en.png 1.5x"
data-file-width="1000" data-file-height="623" width="800" height="498"
alt="J4x-templates-inkscape-en.png" />

## Instructions

For this article a logo is needed that shows **GREEN CASSIOPEIA** at the
same size as **CASSIOPEIA** in the default logo, which is 32 pixels
high:

1.  Start Inkscape, make the window a comfortable size, select View /
    Zoom / Zoom Page
2.  Select the Text Tool, marked with letter A in the left Toolbar
3.  Select Arial, Bold, 40 and px
4.  Drag to define box occupying most of the page width
5.  Type in Text: GREEN CASSIOPEIA
6.  Select View / Zoom Selection
7.  Select the Select tool, marked by an arrow - at the top of the left
    Toolbar
8.  Lock Horizontal and Vertical size values - the lock symbol in the
    top bar
9.  Set the measurement unit to px
10. Change height to 32 - you will see logo change to new size
11. Select Path / Object to Path - no visible change but the words are
    no longer text
12. Select File / Document Properties
13. Select Resize to Content
14. Zoom out for a better view
15. Set the Fill to white - click the white box in the bottom colour
    palette
16. File / Save to
    local-site-roothttps://docs.joomla.org/images/headers/green-cassiopeia-optimised.svg
    1.  If you save somewhere else you will have to use a file manager
        or ftp to upload svg files. The Media component can use SVG
        files but at the present time it will not upload them.
17. Select Optimised SVG (.svg) from the file type list at the bottom of
    the Save dialog.
18. Save, OK for all of the Defaults in the Optimised SVG Output form
19. Set some Joomla Administrator Options to allow use of SVG files
20. Go to Content / Media / Options
    1.  Append to Allowed extensions: ,svg
    2.  Append to Legal Image Extensions (File Types): ,svg
    3.  Append to Legal MIME Types: ,image/svg+xml
21. Save & Close
22. Go to System / Site Templates / Options
    1.  Append to Valid Image Formats: ,svg
23. Save & Close
24. Go to System / Site Template Styles
25. Select your template
26. In the Advanced tab Logo field use Select to find your newly created
    Logo
27. Save and reload your Site page

<img
src="https://docs.joomla.org/images/9/9f/J4x-templates-cassiopeia-green-svg-en.png"
class="thumbborder" decoding="async" data-file-width="588"
data-file-height="201" width="800" height="273"
alt="J4x-templates-cassiopeia-green-svg-en.png" />

QED!
