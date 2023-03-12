<!-- Filename: J4.x:Multilingual_Associations / Display title: Multilingual Associations -->

## Multilingual Sites

Install additional languages in your site and you may think you have a
multilingual site. Almost, but not quite. Human entered text has to be
translated by humans. That includes such things as article titles and
content, menu item titles, module titles and in some cases content, and
more. You can just create the same items in each language that you use.
That works just fine but it can be a bit tedious. That is where the
Multilingual Associations component comes in useful. It is designed to
display content in different languages side by side so that you can
easily translate from one language to another.

## Items for Association

The following items can be included in associations:

- Content: Articles and Categories
- Contacts: Contacts and Categories
- Menus: Menu Items
- News Feeds: News Feeds and Categories
- Others: Third party components may be coded to use associations.

The following screenshot shows an example list of articles in English
with their equivalents in other languages.

<img
src="https://docs.joomla.org/images/thumb/f/fa/J4x-multilingual-associations-list-en.png/800px-J4x-multilingual-associations-list-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/f/fa/J4x-multilingual-associations-list-en.png 1.5x"
data-file-width="1000" data-file-height="455" width="800" height="364"
alt="J4x-multilingual-associations-list-en.png" />

The last article on Mountains has not yet had equivalent articles
created in other languages. The missing articles can be translated from
the original English from this page.

## Creating an Article Translation

If you have created a multilingual site you will have created a language
category for each language and perhaps an article in your default
language. If not, do that now. The example article is entitled
Mountains. You can create the associated articles directly from the
Article: Edit form. This example uses the Multilingual Associations list
instead. The translated text for this example has been obtained with
Google Translate.

- Select **Components **→** Multilingual Associations** from the
  Administrator menu.
- For the article without associations, select one of the buttons in the
  Not Associated column, fr-FR in this example.
- In the Multilingual Associations: Edit Associations form enter a
  Target Title: Montagne
- In the Target Article Text enter the new text, translated or copied
  and pasted from a translation service.
- Set the Category to the the language category, French (fr-FR) in this
  example (not shown in the screenshot - it is further down).
- Select **Save Target** From the Toolbar.
- Select **Close**.
- Repeat for the other languages.

<img
src="https://docs.joomla.org/images/thumb/8/8f/J4x-multilingual-associations-edit-en.png/800px-J4x-multilingual-associations-edit-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/8/8f/J4x-multilingual-associations-edit-en.png 1.5x"
data-file-width="1000" data-file-height="594" width="800" height="475"
alt="J4x-multilingual-associations-edit-en.png" />

## Creating a Menu Translation

Continuing with the Mountains example:

- Select **Menus **→** Main Menu (en-GB)** assuming that is your default
  language specific menu.
- Select the **New** button from the Toolbar.
- In the Menus: New Item form enter a Title: **Mountains**.
- Use the Select button in the Menu Item Type field.
- Select **Articles **→** Single Article** from the popup Menu Item Type
  form.
- Use the Select button in the Select Article field.
- Select the **Mountains** from the Select an Article list.
- Select **English (en-GB)** from the Language drop-down list.
- Save.
- Select the **Associations** tab.
- For each Language use the **+Create** button to create an equivalent
  translated menu item.
  - Enter the translated **Title**.
  - Make sure the Menu is set to that for the selected language.
  - **Save & Close**

## Site View

Open or reload the site view to check that your menus and articles are
displayed as expected.

<img
src="https://docs.joomla.org/images/thumb/f/f5/J4x-multilingual-associations-site-en.png/800px-J4x-multilingual-associations-site-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/f/f5/J4x-multilingual-associations-site-en.png 1.5x"
data-file-width="1000" data-file-height="532" width="800" height="426"
alt="J4x-multilingual-associations-site-en.png" />
