<!-- Filename: Updating_PHP / Display title: Updating PHP -->

## Updating PHP

If you’ve logged into your Joomla Administrator area and have been
greeted with a message like the one below, don’t panic. Joomla has a
recommended minimum PHP requirement at the time of writing of PHP 7.3 or
higher. The current official release of PHP is version 7.4. In addition
to the PHP Version Check message that can appear if you’re using a
version of PHP lower than 7.3, Joomla 3.10 will have a PHP warning
message about PHP versions before you attempt to migrate to Joomla 4
when it is released.

<img src="https://docs.joomla.org/images/6/66/PHP_Version_warning.jpg"
class="thumbimage" decoding="async" data-file-width="764"
data-file-height="221" width="764" height="221"
alt="PHP Version warning.jpg" />

With Joomla 4 a large amount of previous legacy code has been removed.
At the same time, a lot of new modern code has been added. Having the
correct version of PHP is going to be essential for Joomla 4 to work, as
the new code utilises the improved features and functions PHP 7.3+
provides.

### Technical Requirements for Joomla

There are a range of technical requirements recommended for hosting
Joomla sites. The Production Department review the requirements from
time to time, and so you should reference the Joomla Downloads site for
current <a href="https://downloads.joomla.org/technical-requirements"
class="external text" target="_blank"
rel="noreferrer noopener">Technical Requirements</a>.

Though the PHP minimum requirement is 5.3.10, many Joomla extensions
additionally have features that may push up the minimum required version
of PHP need. Should you get a white screen of death when trying to use
Joomla on PHP 5.x, it is highly likely that an installed extension is
not compatible with PHP 5.x and the easiest solution would be to upgrade
your PHP to a <a href="https://www.php.net/supported-versions.php"
class="external text" target="_blank"
rel="nofollow noreferrer noopener">currently supported version of
PHP</a>.

### Updating your PHP Version

There's a variety of ways to update your PHP version. The main ones are
covered in an article in the September 2020 issue of Joomla Community
Magazine: <a
href="https://magazine.joomla.org/all-issues/september-2020/how-do-i-update-my-php-version"
class="external text" target="_blank" rel="noreferrer noopener">How do I
update my PHP version?</a>.

If you have additional notes on updating your PHP Version, please
contribute them here.

### Troubleshooting Tips

PHP is a server-level application layer. So this means that when
something goes wrong, it really goes wrong, and most commonly brings
your website down with a number of errors.

Over time I’ve only encountered a handful of errors when switching PHP
versions, and the two most common (both which I triggered while creating
screenshots for this article) are:

- **503 Error - Service Unavailable** - A 503 error may occur
  temporarily while the server changes settings for your account. If it
  continues to display after a few minutes, revert the version change
  you made.
- **502 Error - Bad Gateway** - 502 errors are a permanent issue when
  they occur. Usually, it means that the change you made is not
  compatible with the settings on the server. I triggered a 502 error
  when changing the Plesk version, as instead of keeping the “run PHP
  as” option set to what it was originally set to. Changing the setting
  to match the original setting cleared the 502 error.
