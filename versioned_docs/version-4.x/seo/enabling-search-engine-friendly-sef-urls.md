<!-- Filename: Enabling_Search_Engine_Friendly_(SEF)_URLs / Display title: Enabling Search Engine Friendly (SEF) URLs -->

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

The procedure for enabling Search Engine Friendly URLs differs depending
on the web server you are using. If you are using shared hosting, it is
probably Apache. Ask your hosting provider for more information if you
are uncertain.

Only the most popular web servers have been included on this page. Visit
[Enabling Search Engine Friendly (SEF) URLs on
IIS](https://docs.joomla.org/Enabling_Search_Engine_Friendly_(SEF)_URLs_on_IIS "Enabling Search Engine Friendly (SEF) URLs on IIS")
and [Category:Search Engine Friendly
URLs](https://docs.joomla.org/Category:Search_Engine_Friendly_URLs "Category:Search Engine Friendly URLs")
for more articles.

## Apache

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

## Hiawatha

Use the following UrlToolkit rule to enable clean URLs on the Hiawatha
webserver:

    UrlToolkit {
        ToolkitID = joomla
        Match base64_encode.*\(.*\) DenyAccess
        Match (<|%3C).*script.*(>|%3E) DenyAccess
        Match GLOBALS(=|\[|\%[0-9A-Z]{0,2}) DenyAccess
        Match _REQUEST(=|\[|\%[0-9A-Z]{0,2}) DenyAccess
        RequestURI exists Return
        Match /index.php Return
        Match ^/component/ Skip 2
        Match ^(/|\.php|\.html|\.htm|\.feed|\.pdf|\.raw|/[^.]*)$ Skip 1
        Skip 1
        Match .* Rewrite /index.php
    }

Enable an UrlToolkit rule for a virtual host via the UseToolkit setting:

    VirtualHost {
        ...
        UseToolkit = joomla
    }

## IIS 7

If you have a server running IIS 7 and PHP, you can take advantage of
IIS's own internal URL rewriting by using a *web.config* file similar to
the one listed below.

You can create the file yourself or use the GUI in the IIS7 Manager. You
can import *.htaccess* rules using the GUI/wizard.

This functionality depends on the presence of the *IIS URL Rewrite
Module*, which does not come with Windows. It is a free download and a
Microsoft product.

===GUI=== If the IIS URL Rewrite module is installed, your website
manager will have a tool for *URL Rewrite*, visible in the IIS Manager's
view of your site's configurable IIS modules. The interface is largely
self-explanatory. Regular expressions, wildcards or exact matches are
all supported.

In the Joomla config turn on both the SEF and Apache *mod_rewrite*. Next
create a rule under IIS URL Rewrite:

Pattern field: **^(\[^/\]+)/?\$**

Ignore case *ON*

Action type: *Rewrite*

Rewrite URL: *index.php/*

=== *web.config* === This has been tested on Joomla 1.5 with IIS 7 on
Windows Server 2008 with no problems so far. For more information on
converting *.htaccess* to *web.config*, see <a
href="https://learn.microsoft.com/en-us/iis/application-frameworks/install-and-configure-php-applications-on-iis/translate-htaccess-content-to-iis-webconfig"
class="external text" target="_blank"
rel="nofollow noreferrer noopener">Translate <em>.htaccess</em> Content
to IIS <em>web.config</em></a>


        
            
                
                    
                    
                        
                        
                            
                            
                            
                            
                            
                        
                        
                    
                    
                        
                        
                            
                        
                        
                    
                    
                        
                        
                            
                            
                            
                        
                        
                    
                
            
            
                
                    
                
            
        

## Nginx

- Please add this code to your server (vhost) configuration in the
  *nginx.conf* file:

<!-- -->

       # Support Clean (aka Search Engine Friendly) URLs
       location / {
          try_files $uri $uri/ /index.php?$args;
       }

- If the above does not work, add this code to your server configuration
  in the *nginx.conf* file: (This worked with *nginx 1.4.6* on Ubuntu.)

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

- Log on to your Backend and open the Global Configuration.

<!-- -->

- Enable the *Search Engine Friendly URLs* option and *Save*. This
  option converts the URLs from the native Joomla! format to the SEF
  format.

<!-- -->

- Verify that your site works correctly. Your URLs should now look like
  *https://www.example.com/index.php/the-­news/1-­latest­-news/1­-welcome­-to­-joomla*.

<!-- -->

- If your site does not work correctly, please see <a
  href="https://docs.joomla.org/Why_does_your_site_get_messed_up_when_you_turn_on_SEF_(Search_Engine_Friendly_URLs)%3F"
  class="mw-redirect"
  title="Why does your site get messed up when you turn on SEF (Search Engine Friendly URLs)?">Why
  does your site get messed up when you turn on SEF (Search Engine
  Friendly URLs)?</a>

<!-- -->

- Enable the *Use Apache mod_rewrite/URL rewriting* option and *Save*.
  This option uses the Apache *mod_rewrite* function to eliminate the
  *index.php* portion of the URL

<!-- -->

- Verify that your site works correctly. Your URLs should now look like
  *https://www.example.com/the-­news/1­-latest-­news/1-­welcome-­to­-joomla*.

<!-- -->

- If this option causes errors, please see [Common problems when
  enabling Search Engine Friendly (SEF)
  URLs](https://docs.joomla.org/Common_problems_when_enabling_Search_Engine_Friendly_(SEF)_URLs "Common problems when enabling Search Engine Friendly (SEF) URLs").

<!-- -->

- If it is not enabled and you have access to the file
  *apache/conf/httpd.conf*, open that file and verify that the line
  *LoadModule rewrite_module modules/mod_rewrite.so* is uncommented. If
  necessary, uncomment the line and restart the Apache web server.

<!-- -->

- If *mod_rewrite* cannot be enabled, leave this option off. It does not
  matter if you leave the *.htaccess* file renamed.

<!-- -->

- If you think this is necessary, enable *Add suffix to URLs* and
  *Save*. This option adds *.html* to the end of URLs. There are
  different opinions on whether this is necessary or even useful. Search
  engines do not seem to care if your URLs end in *.html* or not.

<!-- -->

- Open the Plugin Manager and enable the *System - SEF plugin*. This
  plugin adds SEF support to links in your Joomla articles. It operates
  directly on the HTML and does not require a special tag.
