<!-- Filename: Enabling_Search_Engine_Friendly_(SEF)_URLs_on_Nginx / Display title: Enabling Search Engine Friendly (SEF) URLs on Nginx -->

**Search engine friendly (SEF)**, **human-readable** or
<a href="https://en.wikipedia.org/wiki/Clean_URL" class="extiw"
title="wikipedia:Clean URL">clean URLs</a> are URLs that make sense to
both humans and search engines because they explain the path to the
particular page they point to. Since version 1.5, Joomla! is capable of
creating and parsing URLs in any format, including SEF URLs. This does
not depend on URL rewriting executed by the web server, so it works even
if Joomla! runs a server other than Apache with the mod_rewrite module.
The SEF URLs follow a certain fixed pattern, but the user can define a
[short descriptive text (alias)](https://docs.joomla.org/Alias "Alias")
for each segment of the URL.

Internally, the local part of a SEF URL (the part after the domain name)
is called a *route*. Creating and processing SEF URLs is therefore
referred to as *routing*, and the relevant code is called a *router*.

This article addresses SEF URLs under the popular, open-source
<a href="http://nginx.net" class="external text" target="_blank"
rel="nofollow noreferrer noopener">Nginx webserver</a>.

<img src="https://docs.joomla.org/images/5/53/Compat_icon_2_5.png"
decoding="async" data-file-width="40" data-file-height="17" width="40"
height="17" alt="Joomla 2.5" /> Since Joomla! 2.5, basic SEF URLs are
enabled by default.
<img src="https://docs.joomla.org/images/c/c8/Compat_icon_1_5.png"
decoding="async" data-file-width="40" data-file-height="17" width="40"
height="17" alt="Joomla 1.5" /> In prior versions you need to use the
Global Configuration to enable them. The instructions below still apply
if you want to use Apache's mod_rewrite/URL rewriting.

- Please add the next code to your server (vhost) configuration in the
  *nginx.conf* file:

<!-- -->

       # Support Clean (aka Search Engine Friendly) URLs
       location / {
          try_files $uri $uri/ /index.php?$args;
       }

- If the above does not work, add the next code to your server
  configuration in the *nginx.conf* file: (This worked with nginx 1.4.6
  on Ubuntu.)

<!-- -->

    server {
      ....
      location / {
         expires 1d;

         # Enable joomla SEF URL's inside Nginx
         try_files $uri $uri/ /index.php?$args;
      }
      ....
    }

- Log on to your Back-end and open the Global Configuration
- Enable the **Search Engine Friendly URLs** option and *Save*. This
  option converts the URLs from the native Joomla! format to the SEF
  format.
  Verify that your site works correctly. Your URLs should now look like
  `http://www.example.com/index.php/the-­news/1-­latest­-news/1­-welcome­-to­-joomla`.
  If your site does not work correctly, please see <a
  href="https://docs.joomla.org/Why_does_your_site_get_messed_up_when_you_turn_on_SEF_(Search_Engine_Friendly_URLs)%3F"
  class="mw-redirect"
  title="Why does your site get messed up when you turn on SEF (Search Engine Friendly URLs)?">Why
  does your site get messed up when you turn on SEF (Search Engine
  Friendly URLs)?</a>
- Enable the **Use Apache mod_rewrite/URL rewriting** option and *Save*.
  This option uses the Apache *mod_rewrite* function to eliminate the
  "index.php" portion of the URL
  Verify that your site works correctly. Your URLs should now look like
  `http://www.example.com/the-­news/1­-latest-­news/1-­welcome-­to­-joomla`.
  If this option causes errors, please see [How to check if mod rewrite
  is enabled on your
  server](https://docs.joomla.org/How_to_check_if_mod_rewrite_is_enabled_on_your_server "How to check if mod rewrite is enabled on your server").
  If it is not enabled and you have access to the file
  `apache/conf/httpd.conf`, open that file and verify that the line
  `LoadModule rewrite_module modules/mod_rewrite.so` is uncommented. If
  necessary, uncomment the line and restart the Apache web server.
  If *mod_rewrite* cannot be enabled, leave this option off. It does not
  matter if you leave the `.htaccess` file renamed.
- *If you think this is necessary*, enable **Add suffix to URLs** and
  *Save*. This option adds `.html` to the end of URLs. There are
  different opinions on whether this is necessary or even useful. Search
  engines do not seem to care if your URLs end in `.html` or not.
- Open the Plugin Manager and enable the **System - SEF plugin**. This
  plugin adds SEF support to links in your Joomla articles. It operates
  directly on the HTML and does not require a special tag.
