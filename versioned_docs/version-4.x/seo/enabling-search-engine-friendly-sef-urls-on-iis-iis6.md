<!-- Filename: Enabling_Search_Engine_Friendly_(SEF)_URLs_on_IIS/IIS6 / Display title: Enabling Search Engine Friendly (SEF) URLs on IIS/IIS6 -->

Under IIS6, a third-party add-on must be used to enable [Search Engine
Friendly
URLs](https://docs.joomla.org/Search_Engine_Friendly_URLs "Search Engine Friendly URLs").
Helicon provides one which directly supports .htaccess rules.

Tutorials are available for at least the following versions:

- <span class="mw-selflink selflink">IIS6</span>
  - [1.0](https://docs.joomla.org/Enabling_Search_Engine_Friendly_(SEF)_URLs_on_IIS/IIS6/1.0 "Enabling Search Engine Friendly (SEF) URLs on IIS/IIS6/1.0")
  - [1.5](https://docs.joomla.org/Enabling_Search_Engine_Friendly_(SEF)_URLs_on_IIS/IIS6/1.5 "Enabling Search Engine Friendly (SEF) URLs on IIS/IIS6/1.5")

Some of these tutorials are included below.

### Joomla! 1.5 <img src="https://docs.joomla.org/images/c/c8/Compat_icon_1_5.png"
decoding="async" data-file-width="40" data-file-height="17" width="40"
height="17" alt="Joomla 1.5" /> and newer

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

### Joomla! 1.0 <img src="https://docs.joomla.org/images/4/43/Compat_icon_1_0.png"
decoding="async" data-file-width="40" data-file-height="17" width="40"
height="17" alt="Joomla 1.0" />

First job is to install ISAPI rewriter of your choice
<a href="http://www.isapirewrite.com/" class="external free"
target="_blank"
rel="nofollow noreferrer noopener">http://www.isapirewrite.com/</a> or
<a href="http://cheeso.members.winisp.net/IIRF.aspx"
class="external free" target="_blank"
rel="nofollow noreferrer noopener">http://cheeso.members.winisp.net/IIRF.aspx</a>

ISAPI ReWrite has a lite version (limited) and IIRF (IonicIsapiRewriter)
is freeware always updated and the source is free!

Both are configured via file IsapiRewrite4.ini (you dont need to worry
about .htaccess.txt ignore it). (if you are using IIRF
IonicIsapiRewriter 2.x see below for a change in filename).

The following entries for ISAPI REWRITE:

    RewriteLog  D:\temp\iirfLog.out
    RewriteLogLevel 3

    IterationLimit 10

    # Joomla/Mambo rewrite rules
    RewriteRule  ^/$                      /index.php [L]
    RewriteRule ^/content/blogsection/([^/]+)/([^/]+)/ /index.php?option=com_content&task=blogsection&id=$1&Itemid=$2 [L]
    RewriteRule ^/content/blogcategory/([^/]+)/([^/]+)/ /index.php?option=com_content&task=blogcategory&id=$1&Itemid=$2 [L]
    RewriteRule ^/content/section/([^/]+)/([^/]+)/ /index.php?option=com_content&task=section&id=$1&Itemid=$2 [L]
    RewriteRule  ^/component/option,([^/]+)/([^/]+),([^/]+)/([^/]+),([^/]+)/([^/]+),([^/]+) /index.php?option=$1&$2=$3&$4=$5&$6=$7 [L]
    RewriteRule ^/component/option,([^/]+)/([^/]+),([^/]+)/([^/]+),([^/]+) /index.php?option=$1&$2=$3&$4=$5 [L]
    RewriteRule ^/component/option,([^/]+)/([^/]+),([^/]+)/ /index.php?option=$1&$2=$3 [L]
    RewriteRule ^/content/category/([^/]+)/([^/]+)/([^/]+)/ /index.php?option=com_content&task=category&sectionid=$1=&id=$2&Itemid=$3 [L]
    RewriteRule ^/content/view/([^/]+)/([^/]+)/([^/]+)/([^/]+)/ /index.php?option=com_content&task=view&id=$1&Itemid=$2&limit=$3&limitstart=$4 [L]
    RewriteRule ^/content/view/([^/]+)/([^/]+)/ /index.php?option=com_content&task=view&id=$1&Itemid=$2 [L]

The following is for IIRF IonicIsapiRewriter 1.x:

    IterationLimit 10

Remark: If you are using IIRF IonicIsapiRewriter Version 2.x you must
have a "global" configuration file in the directory where the DLL is and
a site specific file (see Artio JoomSEF below as example) in the Joomla
root. The filename for 2.x is no longer IsapiRewrite4.ini but changed to
Iirf.ini (!)

Example for IirGlobal.ini:

    RewriteEngine On
    RewriteFilterPriority MEDIUM
    StatusUrl /iirfStatus  RemoteOK
    # Turn NotifyLog off if you can to optimize speed. If you need to log the original URL turn it on.
    NotifyLog Off

Tested and working with ARTIO JoomSEF:

    RewriteCond %{HTTP_URL}             (/[^.]*|\.(html?|php))$  [I] 
    RewriteCond %{REQUEST_FILENAME}     !-f
    RewriteCond %{REQUEST_FILENAME}     !-d
    RewriteRule (.*)                /index.php                      [U,L]
    # only use the U of the [U,L] if you have turned "NotifyLog ON" specified in your IirGlobal.ini
    MaxMatchCount 10

Tested and working with default Joomla SEO:

    RewriteRule ^/$                      /index.php [L]
    RewriteRule ^/content/([^/]+)/([^/]+)/([^/]+)/([^/]+)/([^/]+)/ /index.php?option=com_content&task=$1&id=$2&Itemid=$3&limit=$4&limitstart=$5 [L]
    RewriteRule ^/content/([^/]+)/([^/]+)/([^/]+)/ /index.php?option=com_content&task=$1&id=$2&Itemid=$3 [L]
    RewriteRule  ^/component/option,([^/]+)/([^/]+),([^/]+)/([^/]+),([^/]+)/([^/]+),([^/]+) /index.php?option=$1&$2=$3&$4=$5&$6=$7 [L]
    RewriteRule ^/component/option,([^/]+)/([^/]+),([^/]+)/ /index.php?option=$1&$2=$3 [L]

Tested and working with sh404SEF:

    RewriteLogLevel 4 #Make it 0 in to turn debugging off
    RewriteLog c:\IIRfLogfile.log #Write the absolute path of your file here 

    MaxMatchCount 10

    # don't rewrite any request that goes to administrator
    RewriteRule ^/administrator   -   [L]

    RewriteCond %{HTTP_URL} (/[^.]*|\.(html?|php)|!administrator)$  
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule (.*) /index.php [U,L]

Other Third party SEO should work once to follow there rewrite
conditions/rules. I run IonicIsapiRewriter-1.2.12b the betas are rock
solid and I use it on my production servers with no issues. Please
follow vendors installation instructions to get the ISAPI filter working
on your IIS server.
