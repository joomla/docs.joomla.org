<!-- Filename: Enabling_Search_Engine_Friendly_(SEF)_URLs_on_Apache / Display title: Enabling Search Engine Friendly (SEF) URLs on Apache -->

  
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
is called a **route**. Creating and processing SEF URLs is therefore
referred to as **routing**, and the relevant code is called a
**router**.

This article addresses SEF URLs under the popular, open-source Apache
webserver. SEF URL implementation is possible under Microsoft's IIS
webserver as well, please see [Enabling Search Engine Friendly (SEF)
URLs on
IIS](https://docs.joomla.org/Enabling_Search_Engine_Friendly_(SEF)_URLs_on_IIS "Special:MyLanguage/Enabling Search Engine Friendly (SEF) URLs on IIS").

Since Joomla!
<img src="https://docs.joomla.org/images/d/da/Compat_icon_1_6.png"
decoding="async" data-file-width="40" data-file-height="17" width="40"
height="17" alt="Joomla 1.6" />, basic SEF urls are enabled by default.
In prior versions you need to use the Global Configuration to enable
them. The instructions below still apply if you want to use Apache's
mod_rewrite/URL rewriting.

## Verify .htaccess is Enabled

Check that your Apache config file allows .htaccess overrides. You must
make sure overrides are enabled or the .htaccess file in your Joomla!
root directory will be ignored or cause an error. In the section of your
virtual host configuration file or in the main (`httpd.conf`)
configuration file you must have something similar to the example below
enabling overrides:

      AllowOverride All



      AllowOverride All Options=[an option],[an option],...

There are other ways to test if `.htaccess` is enabled if you do not
have access to your site's configuration files. Please refer to the
<a href="http://httpd.apache.org/docs/current/howto/htaccess.html"
class="external text" target="_blank"
rel="nofollow noreferrer noopener">.htaccess tutorial</a> found on
<a href="http://www.apache.org/" class="external text" target="_blank"
rel="nofollow noreferrer noopener">The Apache Software Foundation</a>
website for additional information.

## Step by Step

These are step-by-step instructions. Please follow them in the order
they are presented here. If a step fails, **do not** continue until you
have solved the problem.

1.  Rename the file `"htaccess.txt"` in your Joomla!'s base folder to
    `".htaccess"`.

2.  *This step may not be necessary.* Open `.htaccess` in a text editor.
    Uncomment `RewriteBase /` (remove the first character, \#). If
    Joomla is installed in its own folder, the enter the Joomla folder
    name after the forward slash. e.g. `RewriteBase /yourjoomlafolder`.

3.  Log on to your Back-end and open the Global Configuration.

4.  Enable the **Use Apache mod_rewrite/URL rewriting** option and
    *Save*. This option uses the Apache *mod_rewrite* function to
    eliminate the "index.php" portion of the URL.

    Check if your site works correctly. Your URLs should now look like:

        http://www.example.com/the-­news/1­-latest-­news/1-­welcome-­to­-joomla

    If this option causes errors, please see [How to check if mod
    rewrite is enabled on your
    server](https://docs.joomla.org/How_to_check_if_mod_rewrite_is_enabled_on_your_server "Special:MyLanguage/How to check if mod rewrite is enabled on your server").

    - If it is not enabled and you have access to the file
      `apache/conf/httpd.conf`, open that file and check if the line
      `LoadModule rewrite_module modules/mod_rewrite.so` is uncommented.
      If necessary, uncomment the line and restart the Apache web
      server.
    - If *mod_rewrite* cannot be enabled, leave this option off. It does
      not matter if you leave the `.htaccess` file renamed.

5.  *If you think this necessary*, enable **Add suffix to URLs** and
    *Save*. This option adds `.html` to the end of URLs. There are
    different opinions on whether this is necessary or even useful.
    Search engines do not seem to care if your URLs end in `.html` or
    not.

6.  Open the Plugin Manager and enable the **System - SEF plugin**. This
    plugin adds SEF support to links in your Joomla articles. It
    operates directly on the HTML and does not require a special tag.
