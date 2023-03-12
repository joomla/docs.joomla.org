<!-- Filename: Joomla_help_system / Display title: Joomla help system -->

## What is the Joomla Help System

The Joomla Help system provides context-sensitive information to users
logged in to the Administrator. Generally this is accessed by clicking
on the Help toolbar button located at the top right of almost all
screens. (Note that the toolbar button may be located elsewhere if you
are not using one of the Administrator templates shipped with Joomla.)
Clicking on this toolbar button will open a new browser window with
information relevant to the screen on which it was pressed.

In addition, by clicking on the **Help **→** Joomla Help** menu item, a
list of Help topics will be displayed. Clicking on any of these topic
titles will bring up relevant information on the same page.

The Help system can access information stored locally, as part of the
Joomla system, or from a remote Help server. It is fully multilingual
and can be localised using one of the official translations, or by
providing your own Help information using a separately-hosted Help
server. Third-party extension developers can integrate Help information
for components that they supply, either from the local component file
structure, or from a remote Help server.

## How the Joomla Help System Works

In order for relevant information to be retrieved from the Help server
when the Help toolbar button is pressed on a particular screen, it is
necessary to pass a "key reference" from the toolbar button to the Help
server. For Joomla itself, these Help screen key references are
standardised and a complete list is
[available](https://docs.joomla.org/Help16:Help_screens "Help16:Help screens").
Extension developers are free to construct their own key reference
scheme.

The key reference is used to construct a URL that provides the location
of the Help information. Available Help servers are defined in an XML
file that contains separate entries for each of the available languages.
The default Help server is set in the Global Configuration and may be
overridden by individual users in their user profiles. The list of
available Help servers can be changed by manually editing this XML file,
which is /administrator/help/helpsites-MM.xml, where MM is the major and
minor Joomla version numbers concatenated (e.g. '16' for Joomla 1.6).
For example, the helpsites file for Joomla 1.6 is
/administrator/help/helpsites-16.xml

If no URL is specified then by default the Help system will look for
local Help files in the /administrator/help/ln-LN/ directory.

The URL that will be accessed when a given Help toolbar button is
pressed, is constructed by merging the URL given in the helpsites XML
file with the Help screen key reference and other contextual
information. This is achieved by including predefined substitution codes
in the URL given in the helpsites XML file. These codes are replaced by
the contextual information to give the URL that will be used by the Help
system.

In order for the URLs themselves to be fully-localised, Help screen key
references are passed through the Joomla language system before being
substituted into the URL.

For example, the Article Manager screen is associated with the key
reference "JHELP_CONTENT_ARTICLE_MANAGER". This is a language key that
is looked up in the currently loaded language files and in the case of
British English the language file en-GB.ini contains the entry

JHELP_CONTENT_ARTICLE_MANAGER="Content_Article_Manager"

So the string "Content_Article_Manager" will be substituted into the
URL. The helpsites-16.xml file defines the URL to be:

http://help.joomla.org/proxy/index.php?option=com_help&keyref=Help{major}{minor}:{keyref}

This contains a number of substitution codes, including the key
reference. In this example, the {major} and {minor} codes are replaced
by the major and minor Joomla revision numbers respectively, so that the
final URL that will be used will be:

http://help.joomla.org/proxy/index.php?option=com_help&keyref=Help16:Content_Article_Manager

The complete list of available substitution codes is:

|               |                                                                                |
|---------------|--------------------------------------------------------------------------------|
| Code          | Will be substituted by                                                         |
| {app}         | Application name (e.g. "Administrator" in the Joomla CMS back-end)             |
| {component}   | Component name (e.g. "com_content" in the Article Manager)                     |
| {keyref}      | Help screen key reference (after passing through the translation system)       |
| {major}       | Joomla major revision number (e.g. "1" in Joomla 1.6).                         |
| {minor}       | Joomla minor revision number (e.g. "6" in Joomla 1.6)                          |
| {maintenance} | Joomla maintenance revision number (e.g. "3" in Joomla 1.6.3).                 |
| {language}    | Full language code (e.g. "en-GB")                                              |
| {langcode}    | Language tag part of the language code (e.g. "en" if the full code is "en-GB") |
| {langregion}  | Region tag part of the language code (e.g. "GB" if the full code is "en-GB")   |

There are no restrictions on the structure of the Help URL as defined in
the helpsites XML file. If you want to a Joomla instance as a Help
server, you can use the "traditional" access mechanism using a URL of
the form:

http://www.domain.com/index2.php?option=com_content&task=findkey&tmpl=component&keyref={keyref}.{major}{minor}

In this case you need to add the key reference into the "Key reference"
field associated with each Joomla article. For example, if you want to
provide Help information associated with a key reference of
"MyComponent_Manager" then you should enter the information into an
article on the Joomla Help server and enter "MyComponent_Manager" into
the key reference field at the bottom right of the article editor
screen. The title (or alias) that you give to the article does not
matter as it is not used to retrieve the article when accessed via the
Help system.

Note that the Help screen key references changed considerably between
Joomla 1.5 and Joomla 1.6. The key references used in Joomla 1.5 can be
found
[here](https://docs.joomla.org/Help15:Help_screens "Help15:Help screens").

## Serving Help Screens from a MediaWiki Installation

Starting with Joomla 1.6 the official English Help screens are being
served from the wiki at the
<a href="https://docs.joomla.org/Main_Page" class="external text"
target="_blank" rel="noreferrer noopener">Joomla Documentation
website</a> making it easier and quicker for the Joomla community to
keep them accurate and up-to-date. However, there is a general issue
with serving Help screens from another website. Extraneous information
such as headers, footers, advertising modules, menu items and so on, are
difficult to remove when presenting the information to the user.

Generally, the solution to this problem is to create a stripped-down
template for the Help server site that does not present any of this
unwanted information. However this is not easy when the same website is
used for purposes other than serving Help screens. The solution adopted
from Joomla 1.6 onwards is to serve the Help screens from the wiki via a
proxy that uses the MediaWiki web API to pull data from the wiki and
present it with a stripped-down template. The proxy happens to be a
Joomla instance running a component developed for this purpose, but
other solutions are also possible.

## Local Help Files

Local Help files are served from the /administrator/help/ln-LN/
directory in the local Joomla file structure, where "ln-LN" is the
current language code, rather than a remote web server. In order for
local Help to work, it is necessary to ensure that every key reference
in Joomla has a corresponding file in this directory. The name of each
file must be a valid key reference after localisation by the Joomla
language system.

For example, the Help screen associated with the Article Manager is
determined by passing the language tag "JHELP_CONTENT_ARTICLE_MANAGER"
through the language system as described earlier, to give the key
reference "Content_Article_Manager". If the current language is British
English, the Help system will look for a file called either
"Content_Article_Manager.html" or "Content_Article_Manager.xml" in the
/administrator/help/en-GB directory. Note that because Help files may
use the ".xml" extension, it is possible to write Help screens using any
XML dialect including DocBook XML.

## Administrator Help Area

Under the **Help **→** Joomla Help** menu item you will see a general
Help area that lists all the available Help screens on the left, with
the content of the currently-selected screen on the right. It is
important to note that the content list is always generated by scanning
the contents of the local Help directory regardless of whether local or
remote Help is being used.

Since the name of each file in the /administrator/help/ln-LN directory
must be a valid key reference, Joomla uses this fact to automatically
construct a language tag "JHELP_CONTENT_ARTICLE_MANAGER" by removing the
extension, upper-casing and adding a "JHELP\_" prefix.

The language tag is then looked up in the currently-loaded language
files and in this case en-GB.ini contains the entry:

JHELP_CONTENT_ARTICLE_MANAGER="Content_Article_Manager"

which gives the "key reference" as "Content_Article_Manager". This is
then used to construct the URL that is used to retrieve the Help screen.
For example, if the Help URL is:

http://help.joomla.org/proxy/index.php?option=com_help&keyref=Help{major}{minor}:{keyref}

then this will result in the URL:

http://help.joomla.org/proxy/index.php?option=com_help&keyref=Help16:Content_Article_Manager

in Joomla 1.6.x. If the Help URL is not specified, the default Help URL
is: /help/{language}/{keyref}

resulting in the file:

http://www.domain.com/administrator/help/en-GB/Content_Article_Manager.html

being retrieved.

## Adding Help Support to a Component

\<\>
