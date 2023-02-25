<!-- Filename: Help4.x:Redirects:_New_or_Edit / Display title: Redirects: New or Edit -->

## Description

This is where you can add a new redirect or edit an existing one. The
URL you want to redirect from must not be a working one on your website
which actually loads a web page. It can be the URL to a web page which
you have disabled in the Joomla! back-end administrator interface. The
Source URL you specify when you create the redirect should be the full
URL as you would type it in your web browser. The Destination URL you
specify when you create a redirect must be the full URL as well.

## How to access

- Select **System **→** Redirects** from the Administrator menu. Then...
  - To create a new redirect click the **New** button in the Toolbar.
  - To edit an existing redirect click its link in the **Expired URL**
    column.

## Screenshot

<img
src="https://docs.joomla.org/images/6/64/Help-4x-Components-Redirect-Manager-Edit-screen-en.png"
decoding="async" data-file-width="800" data-file-height="493"
width="800" height="493"
alt="Help-4x-Components-Redirect-Manager-Edit-screen-en.png" />

## Form Fields

**Edit/New Link \#1**

- **Expired URL.** The URL to be redirected.

<!-- -->

- **New URL.** The URL to redirect to.

<!-- -->

- **Status**: Published status of the item. Possible values are:
  - *Published*: The item is published. This is the only state that will
    allow regular website users to view this item.
  - *Unpublished*: The item is unpublished.
  - *Archived*: The item has been archived.
  - *Trashed*: The item has been sent to the Trash.

<!-- -->

- **Comment.** A comment that is only viewable in the administrator
  back-end. It is primarily intended for administrator reference only.

<!-- -->

- **ID**. This is a unique identification number for this item assigned
  automatically by Joomla. It is used to identify the item internally,
  and you cannot change this number. When creating a new item, this
  field displays "0" until you save the new entry, at which point a new
  ID is assigned to it.

<!-- -->

- **Created Date**. Date the item(Article, Category, Weblink, etc.) was
  created.

<!-- -->

- **Last Updated Date.** Shows the last date the item was modified.

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

- **Close**. Closes the current screen and returns to the previous
  screen without saving any modifications you may have made. This
  toolbar icon is not shown if you are creating a new item.

<!-- -->

- **Help**. Opens this help screen.

## Function

### How to Create a Redirect

1.  First ensure that you have enabled the option *Use URL Rewriting* in
    the Global Configuration options of your Joomla! installation. Note
    that just enabling the *Use URL Rewriting* option is not enough. You
    must also take the additional step of renaming the htaccess.txt file
    in the web server directory where you installed Joomla! to .htaccess
    or to whatever file name your Apache web server requires for
    additional configuration directives. In the Apache configuration
    file this setting is named 'AccessFileName' and by default this is
    set to '.htaccess'
2.  Next open the
    <a href="https://docs.joomla.org/Help4.x:Components_Redirect_Manager/en"
    class="mw-redirect"
    title="Help4.x:Components Redirect Manager/en">Redirect: Links</a>
    screen and click the 'New' toolbar button.
3.  In the screen that appears, enter the redirect information. When
    entering URLs into the *Expired URL* and *New URL* fields, enter the
    complete URL as you would type it into your web browser to view it.
    The *Expired URL* should be a URL that does not resolve to any valid
    web page on your website. You can specify a source URL for a Joomla!
    web page that you have put into a disabled state in the
    administrator back-end. Ensure the *State* option is set to
    **Enabled**.
4.  Press the **Save & Close** toolbar button to save your new redirect
    and put it into effect.

## Quick Tips

- When entering URLs into the *Expired/Source URL* and *New/Destination
  URL* fields, enter the complete URL as you would type it into your web
  browser to view the web page.
