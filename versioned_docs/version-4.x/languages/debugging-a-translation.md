<!-- Filename: Debugging_a_translation / Display title: Debugging a translation -->

<img
src="https://docs.joomla.org/images/thumb/6/69/Split-icon.png/25px-Split-icon.png"
decoding="async"
srcset="https://docs.joomla.org/images/thumb/6/69/Split-icon.png/38px-Split-icon.png 1.5x, https://docs.joomla.org/images/thumb/6/69/Split-icon.png/50px-Split-icon.png 2x"
data-file-width="200" data-file-height="67" width="25" height="8"
alt="Split-icon.png" />Split Page into Specific Joomla! Versions - J2.5
and 3.x

It has been suggested that this article or section be split into
specific version
*[Namespaces](https://docs.joomla.org/JDOC:Namespaces "JDOC:Namespaces")*.
(<a
href="https://docs.joomla.org/index.php?title=Talk:Debugging_a_translation/en&amp;action=edit&amp;redlink=1"
class="new"
title="Talk:Debugging a translation/en (page does not exist)">Discuss</a>).
If version split is not obvious, please allow split request to remain
for 1 week pending discussions. <span class="small">*Proposed since **2
years ago***.</span>

  
Joomla supports some useful debugging mechanisms that can make it easier
to locate untranslated strings and diagnose problems with language
translations in installed extensions.

#### Debug Language

<img
src="https://docs.joomla.org/images/thumb/f/fd/Global-config-language-debug-en.png/250px-Global-config-language-debug-en.png"
decoding="async"
srcset="https://docs.joomla.org/images/thumb/f/fd/Global-config-language-debug-en.png/375px-Global-config-language-debug-en.png 1.5x, https://docs.joomla.org/images/thumb/f/fd/Global-config-language-debug-en.png/500px-Global-config-language-debug-en.png 2x"
data-file-width="1220" data-file-height="776" width="250" height="159"
alt="Global-config-language-debug-en.png" />

You activate language debugging via the Administration Back-end by going
into Global Configuration and clicking on the System tab. Find the Debug
Language field, change the value to “Yes” and save your changes.

With this option active all translatable strings are shown surrounded
with special characters that indicate their status

|                    |                                                                                                                                                  |
|--------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| Code               | Status                                                                                                                                           |
| \*\*Joomla CMS\*\* | *(text surrounded by asterisks)* indicates that a match has been found in the language definition file and the string has been translated.       |
| ??Joomla CMS??     | *(text surrounded by pairs of question marks)* indicates that the string is translatable but no match was found in the language definition file. |
| Joomla CMS         | *(text with no surrounding characters)* indicates that the string is not translatable.                                                           |

#### Debug System

Additional language debugging information can be obtained by activating
system debugging. This is done by going into Global Configuration and
clicking on the System tab. Find the Debug System field, change the
value to “Yes” and save your changes.

With this option active all screens have additional debugging
information at the end of each page. Currently this includes

- **Profile information.** This is the amount of time taken to execute
  code up to various mark points in the code.
- **Memory usage.** The amount of system RAM used.
- **SQL queries executed.** All of the SQL queries executed in the
  process of building the page.
- **Language files loaded.** A list of all the language files loaded in
  the process of building the page, including full path information.
  This can be useful to check that the expected files have been loaded.
  The number after each file path is the number of times that the file
  was referenced.
- **Untranslated strings diagnostic.** A list of all the untranslated
  strings found and the likely file location given where the **JText**
  call was made.
- **Untranslated strings designer.** A list of all the untranslated
  strings found but listed in a KEY=Value format so they can be
  copy-pasted directly into a language definition file (INI).

#### Debug Plugin

<img src="https://docs.joomla.org/images/6/61/Debug-plugin-en.png"
decoding="async" data-file-width="400" data-file-height="399"
width="400" height="399" alt="Debug-plugin-en.png" />

This system plugin controls what is displayed when debugging is
activated in **Global Configuration**. It is enabled by default. You can
access the parameters for the plugin from **Extensions → Plugin
Manager**. Locate the “System - Debug” plugin and click on it. There are
three settings of interest to translators.

- **Display loaded language files**. If set to “Yes” then the debug
  information will include a list of the language files that were
  requested as the current page was being generated.
- **Display undefined language strings.** If set to “diagnostic mode”
  then a list of untranslated strings and the location of the file
  containing the call to **JText** is included in the debug information.
  If set to “designer mode” then a list of untranslated strings in a
  format that can be copy-pasted directly into a language definition
  file is included in the debug information. That is, it displays the
  list in KEY=String format. If set to “All modes” then both the
  diagnostic mode and designer mode lists are included in the debug
  information.
- **Strip Key Prefix**. Only used when **Display undefined language
  strings** is set to “Designer mode” or "All modes". This allows you to
  strip a prefix from the string to form the key. This is useful if the
  designer uses a common prefix for their extensions when using
  **JText** methods. See example below.

Note that the display of untranslated strings will only display the
value passed to the appropriate **JText** method. For example, with the
following code:

    echo JText::_( 'Reports Import Configuration' );

If untranslated, Designer mode will display this as:

    # /administrator/components/com_reports/views/reports/tmpl/default.php
    REPORTS IMPORT CONFIGURATION=Reports Import Configuration

If the Strip Key Prefix is set to "Reports", then the display would
change slightly to:

    # /administrator/components/com_reports/views/reports/tmpl/default.php
    REPORTS IMPORT CONFIGURATION=Import Configuration

Note that the path shown is only a best guess based on a call to the PHP
*debug_backtrace* function. Sometimes it is accurate, sometimes it is
not and there are also cases where no file could be determined. In those
cases you have to use your best judgement.
