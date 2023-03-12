<!-- Filename: Help4.x:Banners:_Edit / Display title: Banners: Edit -->

## Description

Used to add or edit banners which can be displayed on your Joomla!
website. Remember to create at least one [Banner
Client](https://docs.joomla.org/Help4.x:Banners:_Clients/en 'Help4.x:Banners: Clients/en')
and one [Banner
Category](https://docs.joomla.org/Help4.x:Banners:_Categories/en 'Help4.x:Banners: Categories/en')
before creating any Banners.

## How to Access

To '**add'** a new Banner or '**edit'** an existing Banner, navigate to
the [Banner
Manager](https://docs.joomla.org/Help4.x:Banners/en 'Help4.x:Banners/en'):

- Select **Components **→** Banners **→** New** to create a new Banner.
- Select **Components **→** Banners** and click on a Banner name to
  '**Edit'** an existing Banner.

## Screenshot

A banner may be a clickable image or some custom code. The Image Type is
shown in the screenshot below. The custom type has the image selection
box replaced with a code text area.

<img
src="https://docs.joomla.org/images/thumb/d/da/Help-4x-Components-Banners-Banners-Edit-screen-en.png/800px-Help-4x-Components-Banners-Banners-Edit-screen-en.png.jpeg"
decoding="async"
srcset="https://docs.joomla.org/images/thumb/d/da/Help-4x-Components-Banners-Banners-Edit-screen-en.png/1200px-Help-4x-Components-Banners-Banners-Edit-screen-en.png.jpeg 1.5x, https://docs.joomla.org/images/d/da/Help-4x-Components-Banners-Banners-Edit-screen-en.png 2x"
data-file-width="1440" data-file-height="1208" width="800" height="671"
alt="Help-4x-Components-Banners-Banners-Edit-screen-en.png" />

## Form Fields

- **Name.** The name of the Banner. This is the name that will display
  in the _Name_ column of the [Banner
  Manager](https://docs.joomla.org/Help4.x:Banners/en 'Help4.x:Banners/en').

<!-- -->

- **Alias**. The internal name of the item. Normally, you can leave this
  blank and Joomla will fill in a default value Title in lower case and
  with dashes instead of spaces. [Learn
  more.](https://docs.joomla.org/Alias/en 'Special:MyLanguage/Alias/en')

### Details Tab

**Left Panel**

- **Type**. The type of banner to display. Options are an image file or
  custom HTML code.
  - **Image**. Image file to display for the banner. Click the _Select_
    button to browse and select the image file to use. Use the
    [Media](https://docs.joomla.org/Help4.x:Media/en 'Help4.x:Media/en')
    page to upload Banner image files to your site. Images for Banners
    have to be in the https://docs.joomla.org/images/banners/ directory.
    - **Width**. The fixed width to resize the banner image to. Leave
      this blank if you want to use the actual width of the banner image
      file.
    - **Height**. The fixed height to resize the banner image to. Leave
      this blank if you want to use the actual height of the banner
      image file.
    - **Alternative Text**. Text to display in place of the banner image
      in the event the image cannot be displayed.
    - **Alternative Text**. Alternative text for the Banner's image.
  - **Custom**. Select Custom if you want to enter a custom code for
    your banner.
- **Click URL**. The URL to navigate to when the User clicks on the
  Banner.
- **Description**. Enter a description for the Banner.

**Right Panel**

- **Status**. The published status of the item.

<!-- -->

- **Pinned**. _(Yes or No)_ Whether or not the Banner is "pinned". If
  one or more Banners in a Category are designated "sticky," they will
  take priority over Banners that are not sticky.

_For example, if two Banners in a Category are pinned and a third Banner
is not pinned, the third Banner will not display if the Banner display
module setting is "Pinned, Randomise" or "Pinned, Ordering." Only the
two pinned Banners will display. If the pinned banners have a fixed
number of impressions, once those impressions are used up, the pinned
banners will no longer display, and the non-pinned banners will begin
displaying automatically._

- **Language**. Item language.

<!-- -->

- **Version Note**. Optional field to identify this version of the item
  in the item's [Version
  History](https://docs.joomla.org/Help40:Components_Version_History/en 'Special:MyLanguage/Help40:Components Version History/en')
  window.

### Banner Details Tab

<img
src="https://docs.joomla.org/images/0/09/Help-4x-Components-Banners-Banners-Edit-Banners-Details-Tab-en.png"
decoding="async" data-file-width="600" data-file-height="411"
width="800" height="548"
alt="Help-4x-Components-Banners-Banners-Edit-Banners-Details-Tab-en.png" />

- **Max. Impressions.** The number of Impressions purchased for this
  Banner. Impressions are the number of times a Banner will be displayed
  on a page. Check the 'Unlimited' checkbox if an unlimited number of
  Impressions is allowed.
- **Total Impressions.** The number of times this Banner has been
  displayed on a web page to a user. No entry is allowed. You can reset
  this number to 0 by pressing the 'Reset impressions' button.
- **Total Clicks.** The number of times this Banner has been clicked. No
  entry is allowed. You can reset this number to 0 by pressing the
  'Reset clicks' button.

<!-- -->

- **Client.** The Client for this Banner. Clients are entered using the
  Banner Client Manager.

Select one from the drop-down list box of existing Clients.

- **Purchase Type:** The purchase type of the banner. This is used to
  indicate how the banner client purchased the display time for the
  banner.

The following options are: (_-Use Client Default-, Unlimited, Yearly,
Monthly, Weekly, Daily_).

- **Track Impressions.** Whether or not to track the number of times the
  banner is displayed to web site visitors.
- **Track Clicks.** Whether or not to track the number of times the
  banner is clicked by web site visitors.

### Publishing Tab

<img
src="https://docs.joomla.org/images/9/90/Help-4x-Components-Banners-Banners-Edit-Publishing-Options-Tab-en.png"
decoding="async" data-file-width="600" data-file-height="680"
width="800" height="907"
alt="Help-4x-Components-Banners-Banners-Edit-Publishing-Options-Tab-en.png" />

- **Start Publishing**. Date the Banner will publish and be available
  for website.

Enter the date (time optional) in format _year-month-date hrs:min:sec_
as '2013-01-07 14:10:00' or alternatively, use the modal 'pop up' window
and select a date from the calendar.

- **Finish Publishing**. Date the Banner will stop being published and
  will no longer be available for website.

Enter the date (time optional) in format _year-month-date hrs:min:sec_
as '2013-01-07 14:10:00' or alternatively, use the modal 'pop up' window
and select a date from the calendar.

- **Created Date**. Date the item(Article, Category, Weblink, etc.) was
  created.

<!-- -->

- **Created By**. Name of the Joomla User who created this item. This
  will default to the currently logged-in user. If you want to change
  this to a different user, click the Select User button to select a
  different user.

<!-- -->

- **Created by Alias**. This optional field allows you to enter in an
  alias for this Author for this Article. This allows you to display a
  different Author name for this Article.

<!-- -->

- **Modified Date**. Date of last modification.

<!-- -->

- **Modified By**. Username who performed the last modification.

<!-- -->

- **Revision**. Number of revisions to this item.

<!-- -->

- **Keywords**. Optional entry for keywords. Must be entered separated
  by commas (for example, "cats, dogs, pets") and may be entered in
  upper or lower case. (For example, "CATS" will match "cats" or
  "Cats"). Keywords can be used in several ways:
  1.  To help Search Engines and other systems classify the content of
      the Article.
  2.  In combination with Banner tags, to display specific Banners based
      on the Article content. For example, say you have one Banner with
      an ad for dog products and another Banner for cat products. You
      can have your dog Banner display when a User is viewing a
      dog-related Article and your cat Banner display for a cat-related
      Article. To do this, you would:
      - Add the keywords "dog" and "cat" to the appropriate Articles.
      - Add the Tags "dog" and "cat" to the appropriate Banners in
        [Banners:
        Edit](https://docs.joomla.org/Help40:Banners:_Edit/en 'Special:MyLanguage/Help40:Banners: Edit/en').
      - Set the Banner module Parameter 'Search By Tags' to "Yes" in
        [Site Modules:
        Banners](https://docs.joomla.org/Help40:Site_Modules:_Banners/en 'Special:MyLanguage/Help40:Site Modules: Banners/en').
  3.  For articles only, in combination with the ['Articles - Related'
      module](https://docs.joomla.org/Help40:Site_Modules:_Articles_-_Related/en 'Special:MyLanguage/Help40:Site Modules: Articles - Related/en'),
      to display Articles that share at least one keyword in common. For
      example, if the current Article displayed has the keywords "cats,
      dogs, monkeys", any other Articles with at least one of these
      keywords will show in the 'Articles - Related' module.

<!-- -->

- **Use Own Prefix.** Whether or not to use the banner's prefix or that
  of the client. Select _No_ if you want to use the prefix of the banner
  client.

<!-- -->

- **Meta Keyword Prefix:** When matching meta keywords, only search for
  meta keywords with these optional prefixes. This improves performance.

## Toolbar

At the top of the page you will see the toolbar shown in the
[Screenshot](#Screenshot) above. The functions are:

- **Save**. Saves the item and stays in the current screen.

<!-- -->

- **Save & Close**. Saves the item and closes the current screen.

<!-- -->

- **Save & New**. Saves the item and keeps the editing screen open and
  ready to create another item.

<!-- -->

- **Save as Copy**. Saves your changes to a copy of the current item.
  Does not affect the current item. This toolbar icon is not shown if
  you are creating a new item.

<!-- -->

- **Cancel**. Closes the current screen and returns to the previous
  screen without saving any modifications you may have made. Or

<!-- -->

- **Close**. Closes the current screen and returns to the previous
  screen without saving any modifications you may have made. This
  toolbar icon is not shown if you are creating a new item.

<!-- -->

- **Versions**. Opens the Item Version History window to show any prior
  versions of this item. This allows you to view older versions of this
  item and, if desired, restore from an older version. See [Version
  History](https://docs.joomla.org/Help40:Components_Version_History/en 'Special:MyLanguage/Help40:Components Version History/en')
  for more information.

<!-- -->

- **Help**. Opens this help screen.

## Quick Tips

- Banners are placed on specific pages by adding Modules of type
  'Banners' using the [Module
  Manager](https://docs.joomla.org/Help4.x:Modules/en 'Help4.x:Modules/en').
- If you have a series of Banners that you would like to display on one
  or more pages in random order:
  1.  Create the Banners you wish to include, making sure they have the
      same Client and Category.
  2.  Create a Banner Module for this Client and Category, and in the
      Menu Assignment pick the Menu Selections for the module to display
      on.
  3.  In the Banner Module, set the 'Randomise' value to 'Sticky,
      Randomise'.

With these settings, the different Banners for that Client and Category
will display on the selected pages in random order.

## Related Information

**More Component Banner Help:**

|                                                                                                                                              |                                                                                                                                                                                                                                                                                                                           |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Related Help Screens                                                                                                                         | Description                                                                                                                                                                                                                                                                                                               |
| [Banners](https://docs.joomla.org/Help4.x:Banners/en 'Help4.x:Banners/en')                                                                   | Used to view a list of existing Banners, edit current and create new Banners. There must be at least one Banner Client and Banner Category before a Banner can be created.                                                                                                                                                |
| [Banners: Options](https://docs.joomla.org/Help4.x:Banners:_Options/en 'Help4.x:Banners: Options/en')                                        | Global options (configuration) for Banner Clients.                                                                                                                                                                                                                                                                        |
| [Banners: Categories](https://docs.joomla.org/Help4.x:Banners:_Categories/en 'Help4.x:Banners: Categories/en')                               | Used to view a list of existing Banner Categories, edit current and create new Banner Categories. Note that Banner Categories are separate from other Categories, such as for Articles, Contacts, News Feeds, and Web Links. There must be at least one Banner Client and Banner Category before a Banner can be created. |
| [Banners: New or Edit Category](https://docs.joomla.org/Help4.x:Banners:_New_or_Edit_Category/en 'Help4.x:Banners: New or Edit Category/en') | This is where you can add a new Banner Category or edit an existing one. Note that you need to create at least one Banner Category before you can create a Banner. Also, Banner Categories are separate from other types of Categories, such as those for Articles, Contacts, and News Feeds.                             |
| [Banners: Clients](https://docs.joomla.org/Help4.x:Banners:_Clients/en 'Help4.x:Banners: Clients/en')                                        | The Banner Client Manager is where you can edit existing Banner Clients or create new ones. Note that you must have at least one Banner Client and one Banner Category defined before you can add your first Banner.                                                                                                      |
| [Banners: New or Edit Client](https://docs.joomla.org/Help4.x:Banners:_New_or_Edit_Client/en 'Help4.x:Banners: New or Edit Client/en')       | This is where you add a new Banner Client or edit an existing one. Note that you need to create at least one Banner Client before you can create a Banner.                                                                                                                                                                |
| [Banners Tracks](https://docs.joomla.org/Help4.x:Banners:_Tracks/en 'Help4.x:Banners: Tracks/en')                                            | Used to view a list of existing Banner Tracking information.                                                                                                                                                                                                                                                              |

**To place Banners on Pages:**

|                                                                                                                |                                                                   |
| -------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| Related Help Screens                                                                                           | Description                                                       |
| [Modules Banners](https://docs.joomla.org/Help4.x:Site_Modules:_Banners/en 'Help4.x:Site Modules: Banners/en') | The Banner Module displays the active Banners from the Component. |
