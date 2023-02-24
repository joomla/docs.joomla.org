<!-- Filename: Help4.x:Languages:_Edit_Override / Display title: Languages: Edit Override -->

## Description

Overrides allow you to change a core Joomla string.

In the Joomla code, text strings that are to appear in the User
Interface, either the Site interface or the Administrator interface, are
expressed as string constants. For example, the string *Your session has
expired. Please log in again.* is expressed as
*JLIB_ENVIRONMENT_SESSION_EXPIRED*. The text string can be translated
into any language. The default language is British English. There are
thousands of such strings in a Joomla installation.

If a string does not suit your site you can use the Language Override
feature to replace the original.

## How to Access

- Select **System **→** Manage Panel **→** Language Overrides**. Then...
  - Select a **Language and Client** from the drop down list. Then...
    - Select the **New** button in the Toolbar to create a new override.
      Or...
    - Select the constant link in the **Constant** column to edit an
      existing override.

## Screenshot

<img
src="https://docs.joomla.org/images/thumb/0/01/Help-4x-Extensions-Language-Manager-Overrides-Edit-screen-en.png/800px-Help-4x-Extensions-Language-Manager-Overrides-Edit-screen-en.png"
decoding="async"
srcset="https://docs.joomla.org/images/0/01/Help-4x-Extensions-Language-Manager-Overrides-Edit-screen-en.png 1.5x"
data-file-width="1151" data-file-height="927" width="800" height="644"
alt="Help-4x-Extensions-Language-Manager-Overrides-Edit-screen-en.png" />

## Form Fields

**Right Panel: Search text you want to change**

- **Search For.** Start here! You are more likely to know the Value
  (expired) than the Constant (\_EXPIRED). In either case, the search is
  a case insensitive for the partial string.
- **Search Text.** Enter the text to search for and select the
  **Search** button.
- **Search Results.** A list of strings containing the search term
  appears in a separate panel. Select the one you are looking for. The
  constant and text will be copied into the **Create a New Override**
  panel, labelled **Edit this Override** if you editing an existing
  override.

**Left Panel: Create a New Override or Edit this Override**

- **Language Constant.** This is the strings used in the code by the
  developer. If the value does not exist in the code the string will
  never be used.
- **Text.** This is where you override the default term with your
  version.
- **File.** This shows where the override file is located in the file
  system. You might need to know this for trouble-shooting.

## Toolbar

Near the top of the page you will see the filter bar shown in the
Screenshot above. The functions are:

- **Save**. Saves the item and stays in the current screen.

<!-- -->

- **Save & Close**. Saves the item and closes the current screen.

<!-- -->

- **Save & New**. Saves the item and keeps the editing screen open and
  ready to create another item.

<!-- -->

- **Cancel**. Closes the current screen and returns to the previous
  screen without saving any modifications you may have made. Or

<!-- -->

- **Close**. Closes the current screen and returns to the previous
  screen without saving any modifications you may have made. This
  toolbar icon is not shown if you are creating a new item.

<!-- -->

- **Help**. Opens this help screen.
