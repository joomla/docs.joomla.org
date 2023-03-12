<!-- Filename: J3.x:Update_fails_with_an_error_message / Display title: Update fails with an error message -->

Joomla!  3.6.1

## Errors reported

When you are updating your Joomla! website to the Joomla! 3.6.1 version
using the built in Joomla! Update extension, the following error message
will appear: <img
src="https://docs.joomla.org/images/9/98/Joomla-3.6.1-error-message-en.png"
decoding="async" data-file-width="782" data-file-height="36" width="782"
height="36" alt="Joomla-3.6.1-error-message-en.png" />

## Versions affected

General Information

This pertains only to Joomla! version(s): **3.6.1**

## What is the cause?

3.6.1 introduced a CSRF token check to the update component as an extra
level of security. 3.6.0 down to 2.5.4 (every version with the update
component) will hit the issue with the CSRF token because those versions
don't generate the needed code to pass the check. Future updates will
work correctly

## How to fix?

### Updating from Joomla! 3.6.0

- Go back to your administration panel `example.com/administrator`
- Then go to Extensions  **→**  Manage  **→**  Database
- You should see a message that the dababase is out of date
- Click on the Fix button in the toolbar.

### Updating from Joomla! UNDER 3.6.0

If you are running a version under 3.6.0:  

- Update first to Joomla! 3.6.0 and **NOT** directly to Joomla! 3.6.1  
- Update the `com_joomlaupdate` via the extension manager  
- and then run your update from Joomla! 3.6.0 to Joomla! 3.6.1.

The new version of the `com_joomlaupdate` is available in the backend
through the regular extension updater.

For more information

Please see the official announcement related to this issue <a
href="https://www.joomla.org/announcements/release-news/5666-the-joomla-3-6-1-update.html"
class="external text" target="_blank" rel="noreferrer noopener">HERE</a>

**Note**: If your website is running with PHP 5.3, this error message
may be displayed when trying to log in:  
` 0 Failed to start the session: already started by PHP ($_SESSION is set).`  
Joomla! 3.6.2 will fix this issue. See
<a href="https://github.com/joomla/joomla-cms/pull/11430"
class="external text" target="_blank"
rel="nofollow noreferrer noopener">Fix logging in in PHP 5.3</a>.
