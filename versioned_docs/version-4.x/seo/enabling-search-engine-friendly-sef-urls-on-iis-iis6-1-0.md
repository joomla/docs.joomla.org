<!-- Filename: Enabling_Search_Engine_Friendly_(SEF)_URLs_on_IIS/IIS6/1.0 / Display title: Enabling Search Engine Friendly (SEF) URLs on IIS/IIS6/1.0 -->

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
