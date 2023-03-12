<!-- Filename: Enabling_Search_Engine_Friendly_(SEF)_URLs_on_IIS/IIS6/1.5 / Display title: Enabling Search Engine Friendly (SEF) URLs on IIS/IIS6/1.5 -->

There are several steps one must take to get [Search Engine Friendly
(SEF)
URLs](https://docs.joomla.org/Search_Engine_Friendly_URLs "Search Engine Friendly URLs")
to work properly when using Joomla! on Microsoft's Internet Information
Server (IIS) web servers. The following instructions should result in
functional SEF URLs using Joomla! 1.5 and IIS6. The only caveat is that
you need access to the server itself to install the ISAPI filter in step
1, so either you should be hosting your own server (not shared) or
leasing a dedicated server from your web host. If you're using shared
hosting, you will have to convince your web host to install it for you.

1\) Install an ISAPI filter onto the web server that mimics mod_rewrite.
There are several, some may be free but most are commercial
applications. The important thing to remember is that it must mimic
Apache's mod_rewrite. For example,
<a href="http://www.helicontech.com/isapi_rewrite/"
class="external text" target="_blank"
rel="nofollow noreferrer noopener">Helicon's ISAPI_Rewrite 3</a> is
commercial. There is a
<a href="http://www.helicontech.com/isapi_rewrite/doc/litever.htm"
class="external text" target="_blank"
rel="nofollow noreferrer noopener">free version</a> of the program which
is limited in that it only allows a single configuration for all sites
hosted on the server. To get individual site or directory
configurations, you must pay for the full version.

2\) Create a new file at the root of the Joomla! site called .htaccess
and place the following in that file:

    RewriteEngine On
    RewriteCond %{REQUEST_URI} (/[^.]*|\.(html?|php))$  [NC]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule .* /index.php

3\) Put the following after the opening

tag in Joomla!'s main index.php file:

    if (isset($_SERVER['HTTP_X_REWRITE_URL']))
    {
        $_SERVER['REQUEST_URI'] = $_SERVER['HTTP_X_REWRITE_URL'];
    }

4\) Enter a value for \$live_site in Joomla!'s configuration.php file:

    var $live_site = 'http://www.example.com/site1';

5\) In Joomla!'s Global Configuration page, check the boxes next to all
three SEF options and save the configuration, OR install a 3rd-party SEF
component and enable it
(<a href="http://www.smartsef.org/SmartSEF" class="external autonumber"
target="_blank" rel="nofollow noreferrer noopener">[1]</a> is known to
work with this configuration).

At this point you should have a working Joomla! install utilising SEF
URL's.
