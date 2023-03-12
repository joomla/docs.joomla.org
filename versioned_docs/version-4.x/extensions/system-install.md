<!-- Filename: J4.x:System_Install / Display title: System Install -->

## Extensions

The System / Install / Extensions form is fairly well documented in the
Help screen. What is not so obvious is that each of the install methods
is a plugin. In early editions of Joomla 4 the Install from Web plugin
was first in the list and it is possible that is still the case in
versions that have been updated. Having that method first is
inconvenient if you usually use one of the other methods because it
takes a few seconds to fetch data from the Joomla Extensions Directory
site.

To change the order:

- Go to **Home Dashboard / Plugins**
- Select **installer** from the **Select Type** drop-down filter.
- Select the **Sort Order** icon to reveal the sorting grab handles
  (vertical ellipsis).
- Drag the **Installer - Install from Web** item to the bottom of the
  list.
- Go back to **System / Install / Extensions** to view the result.

## Discover

As described in the Help screen, the Discover function allows you to
install extensions that are too big for some systems, especially
low-cost shared hosting environments. Something that may not be obvious
is that you may have to create folders in different places on your
hosting service, typically:

- Upload site files to siteroot/components/com_mybigcomponent
- Upload administrator files to
  siteroot/administrator/components/com_mybigcomponent
- Upload media (css and javascript) to siteroot/media/com_mybigcomponent
- Upload site language files to siteroot/language/en-GB if they are not
  in a language folder in the component site folder.
- Upload administrator language files to
  siteroot/administrator/language/en-GB if they are not in a language
  folder in the component administrator folder.

With that done, Discover should find and allow installation of the
component and it might actually work.

## Languages

The default language is English GB. It cannot be removed or installed.
It may not be obvious but every page loads appropriate en-GB strings
first to ensure that language keys used by coders do not appear in the
page output. If the user selected language is not English then the user
language is loaded, overwriting the English strings. If a language has
not been fully translated the result will be a mixture of user language
and English strings. This may look strange but it is better than a
mixture of user language and coder keys.
