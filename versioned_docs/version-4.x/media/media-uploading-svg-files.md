<!-- Filename: J4.x:Media:_Uploading_SVG_files / Display title: Media: Uploading SVG files -->

## Introduction

SVG (Scalable Vector Graphics) files are not supported in Joomla by
default. A few steps are necessary to allow the Media Manager to support
them.

## How to Add Support to SVG files

In the Joomla Administrator interface, you need to access the global
configurations settings of the Media Manager.

### How to Access the Media Settings

There are several ways to access the Media Manager settings:

- From the Media Manager click on **Options**.
- From the Home Dashboard click on **Global Configuration**, then go to
  the **Media** section.

### What Media Settings Should Be Modified

There are 3 areas in the settings where changes should be applied (the
last 2 are necessary only if uploads are restricted):

- In *Legal Image Extensions*, add at the end of the already available
  value: `,svg`.
- In *Allowed Extensions*, add at the end of the already available
  value: `,svg`.
- In *Legal MIME Types*, add at the end of the already available value:
  `,image/svg+xml`.

From now on, you should be able to upload SVG files into the Media
Manager.

## Why is Joomla preventing me from uploading SVG files still?

SVG is not a raster image format (like PNG files, which contain pixels),
it is written in XML (Extensible Markup Language). It is text-based,
usable directly inside the DOM (Document Object Model), CSS can change
properties and JavaScript can add interactivity.

As such, SVG files are susceptible to all XML related attack patterns:

Cross-site scripting – or XSS (through its 

\</tt\> tag and events).\</li\> \<li\>HTML injections (through
the \<tt\>\<foreignObject\>\</tt\> element – foreignObject allows you to
include elements from a different XML namespace).\</li\> \<li\>Denial of
service (if the \<tt\>\<xlink:href\>\</tt\> element is misused).\</li\>
\</ul\> \<p\>Starting with Joomla 4.1, a sanitizer tool is used to check
the content of any SVG file uploaded through the Media Manager. The
rules are strict and ensure files cannot harm the site. Therefore, some
files may need to be \<i\>cleaned\</i\> manually (remember, SVG files
are text files and can be edited in a text editor) or through an outside
tool before they can be uploaded successfully. \</p\> \<p\>Tip: Opening
a SVG file in a text editor and in a separate graphical interface (such
as \<i\>Inkscape\</i\>, a free open source editor) simultaneously will
help prevent you from removing necessary code from the original file.
\</p\> \<h2\>Further Information\</h2\> \<p\>In this series of
tutorials: \</p\> \<ul\> \<li\>\<a
href="https://docs.joomla.org/J4.x:Managing_Media"
title="Special:MyLanguage/J4.x:Managing Media"\> Managing
Media\</a\>\</li\> \<li\>\<a
href="https://docs.joomla.org/J4.x:Media:\_Upload_Delete_Rename"
title="Special:MyLanguage/J4.x:Media: Upload Delete Rename"\> Media:
Upload Delete Rename\</a\>\</li\> \<li\>\<a
href="https://docs.joomla.org/J4.x:Media:\_Image_Crop_Resize_Rotate"
title="Special:MyLanguage/J4.x:Media: Image Crop Resize Rotate"\> Media:
Image Crop Resize Rotate\</a\>\</li\> \<li\>\<a
href="https://docs.joomla.org/J4.x:Media:\_Options"
title="Special:MyLanguage/J4.x:Media: Options"\> Media:
Options\</a\>\</li\> \<li\>\<a
href="https://docs.joomla.org/J4.x:Media:\_Uploading_SVG_files"
title="Special:MyLanguage/J4.x:Media: Uploading SVG files"\> Media:
Uploading SVG files\</a\>\</li\> \</ul\> \<!-- NewPP limit report Cached
time: 20230209040401 Cache expiry: 86400 Dynamic content: false
Complications: \[\] CPU time usage: 0.138 seconds Real time usage: 0.147
seconds Preprocessor visited node count: 24/1000000 Post‐expand include
size: 0/2097152 bytes Template argument size: 0/2097152 bytes Highest
expansion depth: 2/40 Expensive parser function count: 0/100 Unstrip
recursion depth: 0/20 Unstrip post‐expand size: 349/5000000 bytes --\>
\<!-- Transclusion expansion time report (%,ms,calls,template) 100.00%
0.000 1 -total --\> \<!-- Saved in parser cache with key
docsj_mediawiki:pcache:idhash:416574-0!canonical and timestamp
20230209040401 and revision id 996469 --\>
