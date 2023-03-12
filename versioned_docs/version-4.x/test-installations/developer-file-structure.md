<!-- Filename: J4.x:Developer:_File_Structure / Display title: Developer: File Structure -->

## Introduction

As an individual starting out with some Joomla development work on a
personal computer, laptop or desktop, you need to set up a suitable file
structure for your code. The location of your Joomla site is predefined
by your operating system and Apache installation. The location of the
code you create is up to you. It should not be in the web tree.

## Test Web Site Location

The best advice for local development is to place your working Joomla
test site in a sub-folder of your document root. That allows you to have
as many web sites as you like for all sorts of different projects,
including some not related to Joomla at all. For my work on a MacBook
Pro laptop I have set up the document root to point to my Sites folder
(/Users/username/Sites). On my Linux desktop I use my public_html folder
(/home/username/public_html). This is a screenshot of part of my Sites
folder list showing how many test sites I have created over the past few
years:

<img
src="https://docs.joomla.org/images/6/69/J4x-developer-file-structure-mac-finder-en.png"
class="thumbborder" decoding="async" data-file-width="800"
data-file-height="383" width="800" height="383"
alt="Mac Finder Sites" />

## Test Web Site File Structure

If you have not done so already, you will need to become familiar with
the structure of your web site. The following illustration shows a
typical clean Joomla file and folder tree, with the Administrator folder
expanded to show its contents.

<img
src="https://docs.joomla.org/images/a/a2/J4x-developer-joomla-file-structure-mac-finder-en.png"
class="thumbborder" decoding="async" data-file-width="800"
data-file-height="639" width="800" height="639"
alt="Mac Finder Joomla Tree" />

So that is where the working code will be. Your development code will be
somewhere else.

## Developer Code Location

The code of your extension is normally in your personal file space but
not in your web site tree. I keep mine in /Users/username/git because I
can spell git and I use git for version control. You do not have to do
that - git will be covered in a later tutorial. This is a screenshot
showing a partial list of projects:

<img
src="https://docs.joomla.org/images/c/c0/J4x-developer-git-project-folcders-mac-finder-en.png"
class="thumbborder" decoding="async" data-file-width="800"
data-file-height="388" width="800" height="388" alt="Project folders" />

Notice that some of the folder names start with j4xdemos. I adopted that
to use as the first part of the namespace used for projects created for
Joomla tutorial purposes. It is not necessary as part of the folder name
but it is something to think about: the first part of your namespace
needs to be something unique to you or your organisation.

### Project Folder Structure

In the illustration above, the j4xdemos-com-mywalks folder is shown
expanded. Ignore all of the pale grey folders starting with a period(.)
as they are related to Git and the Eclipse IDE that will be explained
elsewhere. All of the code that will go into the extension is inside the
com_mywalks folder. When this is compressed, the com_mywalks.zip file is
created. This is the zip file used for installation in Joomla. None of
the other files in the root are included in the zip file. README.md is
markdown text containing a brief description of the extension. Resources
contains some screen grabs used for documentation.

### Project Code Structure

In the following illustration the com_mywalks folder is expanded to show
the project code structure. The mywalks.xml file is a manifest file that
tells Joomla what to install where. The admin and site folders contain
code that will go into administrator/components/com_mywalks and
components/com_mywalks. Except that language folders my go into
administrator/languages and languages or they may stay in folders in the
component.

<img
src="https://docs.joomla.org/images/e/e4/J4x-developer-git-com_mywalks-project-folders-mac-finder-en.png"
class="thumbborder" decoding="async" data-file-width="800"
data-file-height="388" width="800" height="388" alt="Project folders" />

Ready to create some code?
