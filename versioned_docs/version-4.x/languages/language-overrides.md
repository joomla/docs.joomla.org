<!-- Filename: J4.x:Language_Overrides / Display title: Language Overrides -->

## Language File Locations

Most Joomla! language files are located in language folders, one in the
site root and another in the administrator folder. Each language has its
own subfolder based on the RFC3066 standard language codes. Each
extension stores its translations with a name derived from the extension
name. Some examples:

    siteroot/language/en-GB/com_content.ini
    siteroot/administrator/language/en-GB/com_content.ini
    siteroot/administrator/language/en-GB/com_content.sys.ini

The files contain lines consisting of a key and its translation:

    COM_CONTENT="Articles"
    COM_CONTENT_ADD_NEW_MENU_ITEM="New Menu Item"
    COM_CONTENT_ARTICLE_CONTENT="Content"
    COM_CONTENT_ARTICLES_TABLE_CAPTION="Table of Articles"
    COM_CONTENT_ARTICLES_TITLE="Articles"

The Joomla PHP code uses the key. It is replaced by the text translation
at run-time. The .ini file contains translations used by the extension.
The sys.ini files contain translations used by Joomla to manage the
extension. There may be hundreds of lines in a language file.

Third party extensions are advised to store their language files in
language folders within the extension. There they are safe from deletion
should an administrator decide to uninstall a language. Example:

    siteroot/components/com_countrybase/language/en-GB/com_countrybase.ini
    siteroot/administrator/components/com_countrybase/language/en-GB/com_countrybase.ini
    siteroot/administrator/components/com_countrybase/language/en-GB/com_countrybase.sys.ini

**Never edit any Joomla! core or third party language file! Any changes
you make will be lost at the next update. If you wish to change the
wording of any language item use the formal Language Override
component.**

Language overloads are your replacements for core or extension language
key translations. These are individual translations, one or two, not a
whole file! The language overrides for a given language are all stored
in one file:

    siteroot/language/overrides/en-GB.override.ini
    siteroot/language/overrides/fr-FR.override.ini
    siteroot/language/overrides/de-DE.override.ini

    siteroot/administrator/language/overrides/en-GB.override.ini
    siteroot/administrator/language/overrides/fr-FR.override.ini
    siteroot/administrator/language/overrides/de-DE.override.ini

### Language Load Order

On each page load, the en-GB language translations are loaded first.
This ensures that no keys are seen by site users. If another language is
in use the translations for that language are loaded next, replacing the
en-GB translations. Other languages tend to lag behind en-GB in creating
translations so users may occasionally see words or phrases in English
amongst those of their own language.

Finally, translations are loaded from the language override file. This
allows the site to use alternative words or phrses to suit local
circumstances.

## Language Overrides

Occasionally, you may wish to replace a single translated language item
with something more suited to local circumstances. A common case is
where you create a template override or layout and wish to add some
content that uses a new language key. The following example illustrates
a case where some text has been added to the logout layout of the login
module, described in the article on Template Layouts. The alternative
layout has this code:

    Your session will expire at 
      

For a multilingual site using English, French and German the code needs
to change:


      

Note: if you have followed the Template Layout tutorial you may already
have a key TPL_CASSIOPEIA_MOD_LOGIN_LAYOUT_EXPIRES that translates as
Expires. But that is used in siteroot/administrator/language/overrides.

The new key can now be translated into each language. The translations
will be saved in siteroot/language/overrides.

- Select **System **→** Manage panel **→** Language Overrides**
- Select your language and the Site location.
- Select the **New** button and fill out the form. In this example the
  language key is **TPL_CASSIOPEIA_MOD_LOGIN_SESSION_EXPIRES_AT** and
  the text might be **Your session will expire at**
- Save & Close the form.
- Repeat the translation process for each language.

<img
src="https://docs.joomla.org/images/thumb/7/7c/J4x-language-overrides-form-en.png/800px-J4x-language-overrides-form-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/7/7c/J4x-language-overrides-form-en.png 1.5x"
data-file-width="1000" data-file-height="508" width="800" height="406"
alt="J4x-language-overrides-form-en.png" />

Finally, check that the translation has been implemented.

<img
src="https://docs.joomla.org/images/c/c0/J4x-cassiopeia-template-customisation-logout-override-result-en.png"
decoding="async" data-file-width="318" data-file-height="218"
width="318" height="218" alt="Override Result" />
