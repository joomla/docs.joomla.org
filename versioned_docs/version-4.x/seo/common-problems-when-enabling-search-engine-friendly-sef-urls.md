<!-- Filename: Common_problems_when_enabling_Search_Engine_Friendly_(SEF)_URLs / Display title: Common problems when enabling Search Engine Friendly (SEF) URLs -->

Enabling Search Engine Friendly (SEF) URLs can cause problems if your
website hosting is not properly configured to support the re-writing of
URLs. There are many different combinations of server technologies and
operating systems, so it is not possible to give definitive answers to
every problem with SEF URLs, however some of the more common problems
are listed below.

## Is your server running Apache?

When you enable SEF URLS in Joomla! there is an option to re-write the
URLs without /index.php/ which requires mod_rewrite (or the IIS
equivalent) - if your server is not running Apache, or does not have the
ability to rewrite URLs in this way, you will come across error messages
with this option enabled. Try turning this option to 'no' and see if
this method of re-writing works for you.

Also make sure that you have a 'Directory' section in your Apache config
file that allows .htaccess overrides, otherwise the .htaccess file in
your Joomla! root directory WILL BE IGNORED. The directive needed is:

     AllowOverride all

## Is your server running IIS?

If you are using IIS check out these links which may be useful:

- [IIS](https://docs.joomla.org/IIS "IIS")
- <a href="https://docs.joomla.org/IIS6_and_SEF_URLs_using_Joomla_1.5x"
  class="mw-redirect" title="IIS6 and SEF URLs using Joomla 1.5x">IIS6 and
  SEF URLs using Joomla 1.5x</a>
- <a href="https://docs.joomla.org/IIS7_and_SEF_URLs_using_Joomla_1.5x"
  class="mw-redirect" title="IIS7 and SEF URLs using Joomla 1.5x">IIS7 and
  SEF URLs using Joomla 1.5x</a>

## Did you clear your cache?

When you make any changes to SEF settings it is advisable to make sure
that you clear your cache, and if you are caching URLS (for example
using a third-party SEF extension) make sure that you change any
settings there, and purge cached URLs if necessary.

## Have you moved domains?

Sometimes if you have changed domains (for example from a localhost or
test environment to the live domain) you will need to edit the value for
the `$live_site` variable in the configuration.php file found in the
root directory of your Joomla site files. The value of the variable must
be manually edited, it cannot be accessed via the Global Configuration
screens.

Typically, it would look like:

    var $live_site = 'http://example.com';

Or, if you access your website in a sub-folder called joomla, it would
be like this:

    var $live_site = 'http://example.com/joomla';

When you move domains, this value may need updating to reflect your new
domain name:

    var $live_site = 'http://mynewdomain.com';

Often, there is no need to specify this variable at all - in which place
simply leave it blank:

    var $live_site = '';

Often, there is no need to specify this variable at all - in which place
simply leave it blank:

    var $live_site = '';

- See <a
  href="http://www.scribd.com/doc/2300167/Joomla-v-15-Configure-and-troubleshoot-SEF-URLs"
  class="external text" target="_blank"
  rel="nofollow noreferrer noopener">Scribd</a> by
  <a href="https://docs.joomla.org/GHOP_students/Benjamin_H%C3%A4ttasch"
  class="mw-redirect" title="GHOP students/Benjamin Hättasch">Benjamin
  Hättasch</a> which contains step-by-step instructions for installing
  and trouble-shooting your SEF URLs.
