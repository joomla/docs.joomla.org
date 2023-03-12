<!-- Filename: Htaccess_examples_(security) / Display title: Htaccess examples (security) -->

*Credit for this .htaccess file goes to Ronald van den Heetkamp,
Nicholas Dionysopoulos, g1smd, and others where listed*

## Suggested Master htaccess file

This can be discussed in <a
href="http://forum.joomla.org/viewtopic.php?f=432&amp;t=549841&amp;start=330#p2555002"
class="external text" target="_blank" rel="noreferrer noopener">this
forum topic</a>

**Warning: Read the hashed areas! Incorrect settings on some servers may
cause 500 page errors. The only way to figure out which rule(s) or
section(s) are causing the errors is by trial and error.**

This .htaccess file is not meant to be just dropped in your site. You
should go through all sections and modify the file to match your site.
Most notably, all instances of example.com and example\\com should be
replaced with your real domain name. Some sections may cause problems
with legitimate requests.

Joomla!  2.5 Experimental

You are ultimately responsible for disabling sections or writing
exception rules for legitimate requests that fail. Most notably, the
advanced server protection section will cause issues with several
minifiers, eXtplorer, VirtueMart and other extensions which use
non-standard scripts as their entry points. You must add exceptions
manually to the proper area of the file.

    ###############################################################################
    ## The Master .htaccess
    ##
    ## Version 2.5 (proposed) - May 16th, 2011
    ##
    ## ----------
    ## This file is designed to be the template .htaccess file to put on your new
    ## sites, increasing your site's security and performance. It is not meant to
    ## be just dropped in your site, though. You should go through all of its
    ## sections and modify it to match your site. Most notably, all instances of
    ## example.com and example\.com should be replaced with your real domain name.
    ##
    ## Some sections are too picky and may cause problems with legitimate requests.
    ## You are ultimately responsible for disabling them or writing exception rules
    ## for your requests. Most notably, the advanced server protection section will
    ## cause issues with several minifiers, eXtplorer, VirtueMart and other exten-
    ## sions which use non-standard scripts as their entry points. You must add
    ## exceptions for them manually.
    ##
    ## Some sections - depending on your server configuration - may cause your site
    ## to throw 500 Internal Server Error. The only way to figure out which one is
    ## causing it is trial and error.
    ##
    ## Big thank you's to Brian Teeman, Ken Crowder, Radek Suski and Fotis
    ## Evangelou for sharing their .htaccess rules with the world and inspiring
    ## the creation of this file. Special thanks to Jon Brown for sharing his
    ## research and helping me improve this file.
    ##
    ## Additional thank-yous to John for his remarks and g1smd for taking the
    ## time to optimize the speed of the file.
    ##
    ## It is usually prudent to remove the comments from the file when using it
    ## on a live host to minimize the parsing time.
    ##
    ## ----------------------------------------------------------------------
    ## Do you want to customize this .htaccess file with a few clicks?
    ## Admin Tools Professional by AkeebaBackup.com does this and much more.
    ##
    ## Learn more: http://www.akeebabackup.com/software/admin-tools.html
    ## ----------------------------------------------------------------------
    ##
    ## Have fun, stay safe.
    ##
    ## Nicholas K. Dionysopoulos
    ## Lead Developer, AkeebaBackup.com
    ##
    ## CHANGELOG:
    ## Version 2.5 (proposed) (May 16th, 2011)
    ## - Placeholders for custom code. Correction of ruleset ordering.
    ## Version 2.4 (April 18th, 2011)
    ## - Dozens of speed optimisations and many logic and syntax corrections.
    ## Version 2.3 (November 18th, 2010)
    ## - Added .ico to the pass-through rules, for favicons to load
    ## Version 2.2 (October 25th, 2010)
    ## - Bug in the tmpl=component rule
    ## Version 2.1 (October 19th, 2010)
    ## - index.php to root redirection would kill some AJAX requests
    ## - Referer filtering was screwed up
    ## - Simplified and more thorough PHP Easter Egg code (thanks Jon!)
    ## - The tp/template/tmpl filter was not thorough and killed some components
    ## - Optimized Joomla! core SEF section
    ## - Bot filters and GZip optimization would never run for dynamic content
    ## - Content expiration optimization got more optimized
    ## - Added ETag rule
    ##
    ###############################################################################

    ########## Begin - RewriteEngine enabled
    RewriteEngine On
    ########## End - RewriteEngine enabled

    ########## Begin - RewriteBase
    # Uncomment following line if your webserver's URL
    # is not directly related to physical file paths.
    # Update Your Joomla! Directory (just / for root)

    # RewriteBase /
    ########## End - RewriteBase

    ########## Begin - No directory listings
    ## Note: +FollowSymlinks may cause problems and you might have to remove it
    IndexIgnore *
    Options +FollowSymLinks All -Indexes
    ########## End - No directory listings

    ########## Begin - File execution order, by Komra.de
    DirectoryIndex index.php index.html
    ########## End - File execution order

    ########## Begin - ETag Optimization
    ## This rule will create an ETag for files based only on the modification
    ## timestamp and their size. This works wonders if you are using rsync'ed
    ## servers, where the inode number of identical files differs.
    ## Note: It may cause problems on your server and you may need to remove it
    FileETag MTime Size
    ########## End - ETag Optimization

    ########## Begin - Common hacking tools and bandwidth hoggers block
    ## By SigSiu.net and @nikosdion.
    # This line also disables Akeeba Remote Control 2.5 and earlier
    SetEnvIf user-agent "Indy Library" stayout=1
    # WARNING: Disabling wget will also block the most common method for
    # running CRON jobs. Remove if you have issues with CRON jobs.
    SetEnvIf user-agent "Wget" stayout=1
    # The following rules are for bandwidth-hogging download tools
    SetEnvIf user-agent "libwww-perl" stayout=1
    SetEnvIf user-agent "Download Demon" stayout=1
    SetEnvIf user-agent "GetRight" stayout=1
    SetEnvIf user-agent "GetWeb!" stayout=1
    SetEnvIf user-agent "Go!Zilla" stayout=1
    SetEnvIf user-agent "Go-Ahead-Got-It" stayout=1
    SetEnvIf user-agent "GrabNet" stayout=1
    SetEnvIf user-agent "TurnitinBot" stayout=1
    # This line denies access to all of the above tools
    deny from env=stayout
    ########## End - Common hacking tools and bandwidth hoggers block

    ########## Begin - Automatic compression of resources
    # Compress text, html, javascript, css, xml, kudos to Komra.de
    # May kill access to your site for old versions of Internet Explorer
    # The server needs to be compiled with mod_deflate otherwise it will send HTTP 500 Error.
    # mod_deflate is not available on Apache 1.x series. Can only be used with Apache 2.x server.
    # AddOutputFilterByType is now deprecated by Apache. Use mod_filter in the future.
    AddOutputFilterByType DEFLATE text/plain text/html text/xml text/css application/xml application/xhtml+xml application/rss+xml application/javascript application/x-javascript
    ########## End - Automatic compression of resources

    ########## Begin - Add optional bad user agent or IP blocking code
    #
    # If you need to block certain user agents or IP addresses and
    # other signatures, place that code here. Ensure the rules use
    # the correct RewriteRule syntax and the [F] flag.
    #
    ########## End - Add optional bad user agent or IP blocking code

    ########## Begin - Rewrite rules to block out some common exploits
    ## If you experience problems on your site block out the operations listed below
    ## This attempts to block the most common type of exploit `attempts` to Joomla!
    #
    # If the request query string contains /proc/self/environ (by SigSiu.net)
    RewriteCond %{QUERY_STRING} proc/self/environ [OR]
    # Block out any script trying to set a mosConfig value through the URL
    # (these attacks wouldn't work w/out Joomla! 1.5's Legacy Mode plugin)
    RewriteCond %{QUERY_STRING} mosConfig_[a-zA-Z_]{1,21}(=|\%3D) [OR]
    # Block out any script trying to base64_encode or base64_decode data within the URL
    RewriteCond %{QUERY_STRING} base64_(en|de)code[^(]*\([^)]*\) [OR]
    ## IMPORTANT: If the above line throws an HTTP 500 error, replace it with these 2 lines:
    # RewriteCond %{QUERY_STRING} base64_encode\(.*\) [OR]
    # RewriteCond %{QUERY_STRING} base64_decode\(.*\) [OR]
    # Block out any script that includes a  tag in URL
    RewriteCond %{QUERY_STRING} (<|%3C)([^s]*s)+cript.*(>|%3E) [NC,OR]
    # Block out any script trying to set a PHP GLOBALS variable via URL
    RewriteCond %{QUERY_STRING} GLOBALS(=|\[|\%[0-9A-Z]{0,2}) [OR]
    # Block out any script trying to modify a _REQUEST variable via URL
    RewriteCond %{QUERY_STRING} _REQUEST(=|\[|\%[0-9A-Z]{0,2})
    # Return 403 Forbidden header and show the content of the root homepage
    RewriteRule .* index.php [F]
    #
    ########## End - Rewrite rules to block out some common exploits

    ########## Begin - File injection protection, by SigSiu.net
    RewriteCond %{REQUEST_METHOD} GET
    RewriteCond %{QUERY_STRING} [a-zA-Z0-9_]=http:// [OR]
    RewriteCond %{QUERY_STRING} [a-zA-Z0-9_]=(\.\.//?)+ [OR]
    RewriteCond %{QUERY_STRING} [a-zA-Z0-9_]=/([a-z0-9_.]//?)+ [NC]
    RewriteRule .* - [F]
    ########## End - File injection protection

    ########## Begin - Basic antispam Filter, by SigSiu.net
    ## I removed some common words, tweak to your liking
    ## This code uses PCRE and works only with Apache 2.x.
    ## This code will NOT work with Apache 1.x servers.
    RewriteCond %{QUERY_STRING} \b(ambien|blue\spill|cialis|cocaine|ejaculation|erectile)\b [NC,OR]
    RewriteCond %{QUERY_STRING} \b(erections|hoodia|huronriveracres|impotence|levitra|libido)\b [NC,OR]
    RewriteCond %{QUERY_STRING} \b(lipitor|phentermin|pro[sz]ac|sandyauer|tramadol|troyhamby)\b [NC,OR]
    RewriteCond %{QUERY_STRING} \b(ultram|unicauca|valium|viagra|vicodin|xanax|ypxaieo)\b [NC]
    ## Note: The final RewriteCond must NOT use the [OR] flag.
    RewriteRule .* - [F]
    ## Note: The previous lines are a "compressed" version
    ## of the filters. You can add your own filters as:
    ## RewriteCond %{QUERY_STRING} \bbadword\b [NC,OR]
    ## where "badword" is the word you want to exclude.
    ########## End - Basic antispam Filter, by SigSiu.net

    ########## Begin - Advanced server protection - query strings, referrer and config
    # Advanced server protection, version 3.2 - May 2011
    # by Nicholas K. Dionysopoulos

    ## Disallow PHP Easter Eggs (can be used in fingerprinting attacks to determine
    ## your PHP version). See http://www.0php.com/php_easter_egg.php and
    ## http://osvdb.org/12184 for more information
    RewriteCond %{QUERY_STRING} \=PHP[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12} [NC]
    RewriteRule .* - [F]

    ## SQLi first line of defense, thanks to Radek Suski (SigSiu.net) @
    ## http://www.sigsiu.net/presentations/fortifying_your_joomla_website.html
    ## May cause problems on legitimate requests
    RewriteCond %{QUERY_STRING} concat[^\(]*\( [NC,OR]
    RewriteCond %{QUERY_STRING} union([^s]*s)+elect [NC,OR]
    RewriteCond %{QUERY_STRING} union([^a]*a)+ll([^s]*s)+elect [NC]
    RewriteRule .* - [F]

    ## Referrer filtering for common media files. Replace with your own domain name.
    ## This blocks most common fingerprinting attacks ;)
    ## Note: Change www\.example\.com with your own domain name, substituting the
    ## dots with \.  i.e. use www\.example\.com for www.example.com
    RewriteRule ^images/stories/([^/]+/)*([^/.]+\.)+(jp(e?g|2)?|png|gif|bmp|css|js|swf|ico)$ - [L]
    RewriteCond %{HTTP_REFERER} .
    RewriteCond %{HTTP_REFERER} !^https?://(www\.)?example\.com [NC]
    RewriteCond %{REQUEST_FILENAME} -f
    RewriteRule \.(jp(e?g|2)?|png|gif|bmp|css|js|swf|ico)$ - [F]

    ## Disallow visual fingerprinting of Joomla! sites (module position dump)
    ## Initial idea by Brian Teeman and Ken Crowder, see:
    ## http://www.slideshare.net/brianteeman/hidden-joomla-secrets
    ## Improved by @nikosdion to work more efficiently and handle template
    ## and tmpl query parameters
    RewriteCond %{QUERY_STRING} (^|&)tmpl=(component|system) [NC]
    RewriteRule .* - [L]
    RewriteCond %{QUERY_STRING} (^|&)t(p|emplate|mpl)= [NC]
    RewriteRule .* - [F]

    ## Disallow access to htaccess.txt, configuration.php, configuration.php-dist and php.ini
    RewriteRule ^(htaccess\.txt|configuration\.php(-dist)?|php\.ini)$ - [F]

    ########## End - Advanced server protection - query strings, referrer and config

    ########## Begin - Advanced server protection rules exceptions ####
    ##
    ## These are sample exceptions to the Advanced Server Protection 3.1
    ## rule set further down this file.
    ##
    ## Allow UddeIM CAPTCHA
    RewriteRule ^components/com_uddeim/captcha15\.php$ - [L]
    ## Allow Phil Taylor's Turbo Gears
    RewriteRule ^plugins/system/GoogleGears/gears-manifest\.php$ - [L]
    ## Allow JoomlaWorks AllVideos
    RewriteRule ^plugins/content/jw_allvideos/includes/jw_allvideos_scripts\.php$ - [L]
    ## Allow Admin Tools Joomla! updater to run
    RewriteRule ^administrator/components/com_admintools/restore\.php$ - [L]
    ## Allow Akeeba Backup Professional's integrated restoration script to run
    RewriteRule ^administrator/components/com_akeeba/restore\.php$ - [L]
    ## Allow Akeeba Kickstart
    RewriteRule ^kickstart\.php$ - [L]

    # Add more rules to single PHP files here

    ## Allow Agora attachments, but not PHP files in that directory!
    RewriteCond %{REQUEST_FILENAME} !(\.php)$
    RewriteCond %{REQUEST_FILENAME} -f
    RewriteRule ^components/com_agora/img/members/ - [L]

    # Add more rules for allowing full access (except PHP files) on more directories here

    ## Uncomment to allow full access to the cache directory (strongly not recommended!)
    #RewriteRule ^cache/ - [L]
    ## Uncomment to allow full access to the tmp directory (strongly not recommended!)
    #RewriteRule ^tmp/ - [L]

    # Add more full access rules here

    ########## End - Advanced server protection rules exceptions ####

    ########## Begin - Advanced server protection - paths and files
    # Advanced server protection, version 3.2 - May 2011
    # by Nicholas K. Dionysopoulos

    ## Back-end protection
    ## This also blocks fingerprinting attacks browsing for XML and INI files
    RewriteRule ^administrator/?$ - [L]
    RewriteRule ^administrator/index\.(php|html?)$ - [L]
    RewriteRule ^administrator/index[23]\.php$ - [L]
    RewriteRule ^administrator/(components|modules|templates|images|plugins)/([^/]+/)*([^/.]+\.)+(jp(e?g|2)?|png|gif|bmp|css|js|swf|html?|mp(eg?|[34])|avi|wav|og[gv]|xlsx?|docx?|pptx?|zip|rar|pdf|xps|txt|7z|svg|od[tsp]|flv|mov)$ - [L]
    RewriteRule ^administrator/ - [F]

    ## Explicitly allow access only to XML-RPC's xmlrpc/index.php or plain xmlrpc/ directory
    RewriteRule ^xmlrpc/(index\.php)?$ - [L]
    RewriteRule ^xmlrpc/ - [F]

    ## Disallow front-end access for certain Joomla! system directories
    RewriteRule ^includes/js/ - [L]
    RewriteRule ^(cache|includes|language|libraries|logs|tmp)/ - [F]

    ## Allow limited access for certain Joomla! system directories with client-accessible content
    RewriteRule ^(components|modules|plugins|templates)/([^/]+/)*([^/.]+\.)+(jp(e?g|2)?|png|gif|bmp|css|js|swf|html?|mp(eg?|[34])|avi|wav|og[gv]|xlsx?|docx?|pptx?|zip|rar|pdf|xps|txt|7z|svg|od[tsp]|flv|mov)$ - [L]
    ## Uncomment this line if you have extensions which require direct access to their own
    ## custom index.php files. Note that this is UNSAFE and the developer should be ashamed
    ## for being so lame, lazy and security unconscious.
    # RewriteRule ^(components|modules|plugins|templates)/([^/]+/)*(index\.php)?$ - [L]
    ## Uncomment the following line if your template requires direct access to PHP files
    ## inside its directory, e.g. GZip compressed copies of its CSS files
    # RewriteRule ^templates/([^/]+/)*([^/.]+\.)+php$ - [L]
    RewriteRule ^(components|modules|plugins|templates)/ - [F]

    ## Disallow access to rogue PHP files throughout the site, unless they are explicitly allowed
    RewriteCond %{REQUEST_FILENAME} \.php$
    RewriteCond %{REQUEST_FILENAME} !/index[23]?\.php$
    ## The next line is to explicitly allow the forum post assistant(fpa-xx)script to run
    RewriteCond %{REQUEST_FILENAME} !/fpa-[a-z]{2}\.php
    RewriteCond %{REQUEST_FILENAME} -f
    RewriteRule ^([^/]+/)*([^/.]+\.)+php$ - [F]

    ########## End - Advanced server protection - paths and files

    ########## Begin - Google Apps redirection, by Komra.de
    ## Uncomment the following line to enable:
    # RewriteRule ^mail http://mail.google.com/a/example.com [R=301,L]
    ## If the above doesn't work on your server, try this:
    ## RewriteRule ^mail http://mail.google.com/a/example.com [R,L]
    ########## End - Google Apps redirection

    ########## Begin - Custom redirects
    #
    # If you need to redirect some pages, place that code here. Ensure those
    # redirects use the correct RewriteRule syntax and the [R=301,L] flags.
    #
    ########## End - Custom redirects

    ########## Begin - Redirect (www.)olddomain.com to www.example.com
    ## Note: olddomain.com is your old domain name, you want to redirect FROM,
    ## whereas www.example.com is the new domain name you want to redirect TO.
    ## Change those names to reflect your current configuration. Remember, this
    ## small part of the file is supposed to be placed in www.olddomain.com!
    ## Note: Replace [R=301,L] with [R,L] if you get error 500.
    ## Uncomment the following lines to enable:
    # RewriteCond %{HTTP_HOST} ^(www\.)?olddomain\.com [NC]
    # RewriteRule (.*) http://www.example.com/$1 [R=301,L]
    ## Note: The above section is only required if you are changing your domain name.
    ########## End - Redirect (www.)olddomain.com to www.example.com

    ########## Begin - Force HTTPS for certain pages
    # Force the page foobar.html to run in HTTPS mode, no matter what Joomla! says.
    # This is a sample redirection for foobar.html. Do note that you have to change
    # www.example.com to reflect your own domain. Remember to escape the dots using
    # \. in the left hand side of each rule. You need BOTH LINES PER URL for the rule
    # to work.
    RewriteCond %{SERVER_PORT} !^443$
    ## Alternatively, comment the above line and uncomment the following line:
    # RewriteCond %{HTTPS} ^off$ [NC]
    RewriteRule ^foobar\.html$ https://www.example.com/foobar.html [R=301,L]
    ## NOTE: If you get an HTTP 500 error, please swap [R=301,L] with [R,L]
    # Add more rules below this line as required
    ########## End - Force HTTPS for certain pages

    ########## Begin - Redirect index.php to /
    ## Note: Change example.com to reflect your own domain name
    RewriteCond %{THE_REQUEST} !^POST
    RewriteCond %{THE_REQUEST} ^[A-Z]{3,9}\ /index\.php\ HTTP/
    RewriteCond %{SERVER_PORT}>s ^(443>(s)|[0-9]+>s)$
    RewriteRule ^index\.php$ http%2://www.example.com/$1 [R=301,L]
    ## If the above line throws a 500 error, change [R=301,L] to [R,L]
    ########## End - Redirect index.php to /

    ########## Begin - Redirect non-www to www
    RewriteCond %{HTTP_HOST} !^www\. [NC]
    RewriteRule ^(.*)$ http://www.%{HTTP_HOST}/$1 [R=301,L]
    ## If the above throws an HTTP 500 error, swap [R=301,L] with [R,L]
    ########## End - Redirect non-www to www

    ########## Begin - Redirect www to non-www
    ## WARNING: Comment out the non-www to www rule if you choose to use this
    # RewriteCond %{HTTP_HOST} ^www\.(.+)$ [NC]
    # RewriteRule ^(.*)$ http://%1/$1 [R=301,L]
    ## If the above throws an HTTP 500 error, swap [R=301,L] with [R,L]
    ########## End - Redirect non-www to www

    ########## Begin - Custom internal rewrites
    #
    # If you need to internally rewrite some specific URL requests,
    # place that code here. Ensure those internal rewrites use the
    # correct RewriteRule syntax without domain name and with [L] flag.
    #
    ########## End - Custom internal rewrites

    ########## Begin - Joomla! core SEF Section
    #
    RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]
    #
    # If the requested path and file is not /index.php and the request
    # has not already been internally rewritten to the index.php script
    RewriteCond %{REQUEST_URI} !^/index\.php
    # and the request is for the site root, or for an extensionless URL,
    # or the requested URL ends with one of the listed extensions
    RewriteCond %{REQUEST_URI} /component/|(/[^.]*|\.(php|html?|feed|pdf|vcf|raw|ini|zip|json|file))$ [NC]
    # and the requested path and file doesn't directly match a physical file
    RewriteCond %{REQUEST_FILENAME} !-f
    # and the requested path doesn't directly match a physical folder
    RewriteCond %{REQUEST_FILENAME} !-d
    # internally rewrite the request to the index.php script
    RewriteRule .* index.php [L]
    #
    ########## End - Joomla! core SEF Section

    ########## Begin - Optimal default expiration time
    ## Note: this might cause problems and you might have to comment it out by
    ## placing a hash in front of this section's lines
    <IfModule mod_expires.c>
    # Enable expiration control
    ExpiresActive On

    # Default expiration: 1 hour after request
    ExpiresDefault "now plus 1 hour"

    # CSS and JS expiration: 1 week after request
    ExpiresByType text/css "now plus 1 week"
    ExpiresByType application/javascript "now plus 1 week"
    ExpiresByType application/x-javascript "now plus 1 week"

    # Image files expiration: 1 month after request
    ExpiresByType image/bmp "now plus 1 month"
    ExpiresByType image/gif "now plus 1 month"
    ExpiresByType image/jpeg "now plus 1 month"
    ExpiresByType image/jp2 "now plus 1 month"
    ExpiresByType image/pipeg "now plus 1 month"
    ExpiresByType image/png "now plus 1 month"
    ExpiresByType image/svg+xml "now plus 1 month"
    ExpiresByType image/tiff "now plus 1 month"
    ExpiresByType image/vnd.microsoft.icon "now plus 1 month"
    ExpiresByType image/x-icon "now plus 1 month"
    ExpiresByType image/ico "now plus 1 month"
    ExpiresByType image/icon "now plus 1 month"
    ExpiresByType text/ico "now plus 1 month"
    ExpiresByType application/ico "now plus 1 month"
    ExpiresByType image/vnd.wap.wbmp "now plus 1 month"
    ExpiresByType application/vnd.wap.wbxml "now plus 1 month"
    ExpiresByType application/smil "now plus 1 month"

    # Audio files expiration: 1 month after request
    ExpiresByType audio/basic "now plus 1 month"
    ExpiresByType audio/mid "now plus 1 month"
    ExpiresByType audio/midi "now plus 1 month"
    ExpiresByType audio/mpeg "now plus 1 month"
    ExpiresByType audio/x-aiff "now plus 1 month"
    ExpiresByType audio/x-mpegurl "now plus 1 month"
    ExpiresByType audio/x-pn-realaudio "now plus 1 month"
    ExpiresByType audio/x-wav "now plus 1 month"

    # Movie files expiration: 1 month after request
    ExpiresByType application/x-shockwave-flash "now plus 1 month"
    ExpiresByType x-world/x-vrml "now plus 1 month"
    ExpiresByType video/x-msvideo "now plus 1 month"
    ExpiresByType video/mpeg "now plus 1 month"
    ExpiresByType video/mp4 "now plus 1 month"
    ExpiresByType video/quicktime "now plus 1 month"
    ExpiresByType video/x-la-asf "now plus 1 month"
    ExpiresByType video/x-ms-asf "now plus 1 month"
    </IfModule>
    ########## End - Optimal expiration time</pre>
    <p>If not using the suggested master htaccess file, the following suggestions will need RewriteEngine set to On, and will likely also need Options +FollowSymLinks too:
    </p>
    <pre> # mod_rewrite in use
     RewriteEngine On
     Options +FollowSymLinks</pre>
    <h2>Other useful settings</h2>
    <pre> ServerSignature Off
     RewriteCond %{REQUEST_METHOD} ^(HEAD|TRACE|DELETE|TRACK) [NC,OR]
     RewriteCond %{THE_REQUEST} (\\r|\\n|%0A|%0D) [NC,OR]

     RewriteCond %{HTTP_REFERER} (<|>|’|%0A|%0D|%27|%3C|%3E|%00) [NC,OR]
     RewriteCond %{HTTP_COOKIE} (<|>|’|%0A|%0D|%27|%3C|%3E|%00) [NC,OR]
     RewriteCond %{REQUEST_URI} ^/(,|;|:|<|>|”>|”<|/|\\\.\.\\).{0,9999} [NC,OR]

     RewriteCond %{HTTP_USER_AGENT} ^$ [OR]
     RewriteCond %{HTTP_USER_AGENT} ^(java|curl|wget) [NC,OR]
     RewriteCond %{HTTP_USER_AGENT} (winhttp|HTTrack|clshttp|archiver|loader|email|harvest|extract|grab|miner) [NC,OR]
     RewriteCond %{HTTP_USER_AGENT} (libwww-perl|curl|wget|python|nikto|scan) [NC,OR]
     RewriteCond %{HTTP_USER_AGENT} (<|>|’|%0A|%0D|%27|%3C|%3E|%00) [NC,OR]
     
     #Block mySQL injects
     RewriteCond %{QUERY_STRING} (;|<|>|’|”|\)|%0A|%0D|%22|%27|%3C|%3E|%00).*(/\*|union|select|insert|cast|set|declare|drop|update|md5|benchmark) [NC,OR]

     RewriteCond %{QUERY_STRING} \.\./\.\. [OR]

     RewriteCond %{QUERY_STRING} (localhost|loopback|127\.0\.0\.1) [NC,OR]
     RewriteCond %{QUERY_STRING} \.[a-z0-9] [NC,OR]
     RewriteCond %{QUERY_STRING} (<|>|’|%0A|%0D|%27|%3C|%3E|%00) [NC]
     # Note: The final RewriteCond must NOT use the [OR] flag.

     # Return 403 Forbidden error.
     RewriteRule .* index.php [F]</pre>
    <h2>Block bad user agents</h2>
    <pre> ########## Block bad user agents
     ## The following list may include bots that no longer exist or are not a problem
     ## for your site. The list will always be incomplete and it is therefore wise to
     ## follow discussions on one of the many "security" mailing lists or on a forum
     ## such as http://www.webmasterworld.com/search_engine_spiders/
     ## It is also unwise to rely on this list as your ONLY security mechanism.
     RewriteCond %{HTTP_USER_AGENT} ^BlackWidow [OR]
     RewriteCond %{HTTP_USER_AGENT} ^Bot\ mailto:craftbot@yahoo.com [OR]
     RewriteCond %{HTTP_USER_AGENT} ^ChinaClaw [OR]
     RewriteCond %{HTTP_USER_AGENT} ^Custo [OR]
     RewriteCond %{HTTP_USER_AGENT} ^DISCo [OR]
     RewriteCond %{HTTP_USER_AGENT} ^Download\ Demon [OR]
     RewriteCond %{HTTP_USER_AGENT} ^eCatch [OR]
     RewriteCond %{HTTP_USER_AGENT} ^EirGrabber [OR]
     RewriteCond %{HTTP_USER_AGENT} ^EmailSiphon [OR]
     RewriteCond %{HTTP_USER_AGENT} ^EmailWolf [OR]
     RewriteCond %{HTTP_USER_AGENT} ^Express\ WebPictures [OR]
     RewriteCond %{HTTP_USER_AGENT} ^ExtractorPro [OR]
     RewriteCond %{HTTP_USER_AGENT} ^EyeNetIE [OR]
     RewriteCond %{HTTP_USER_AGENT} ^FlashGet [OR]
     RewriteCond %{HTTP_USER_AGENT} ^GetRight [OR]
     RewriteCond %{HTTP_USER_AGENT} ^GetWeb! [OR]
     RewriteCond %{HTTP_USER_AGENT} ^Go!Zilla [OR]
     RewriteCond %{HTTP_USER_AGENT} ^Go-Ahead-Got-It [OR]
     RewriteCond %{HTTP_USER_AGENT} ^GrabNet [OR]
     RewriteCond %{HTTP_USER_AGENT} ^Grafula [OR]
     RewriteCond %{HTTP_USER_AGENT} ^HMView [OR]
     RewriteCond %{HTTP_USER_AGENT} HTTrack [NC,OR]
     RewriteCond %{HTTP_USER_AGENT} ^Image\ Stripper [OR]
     RewriteCond %{HTTP_USER_AGENT} ^Image\ Sucker [OR]
     RewriteCond %{HTTP_USER_AGENT} Indy\ Library [NC,OR]
     RewriteCond %{HTTP_USER_AGENT} ^InterGET [OR]
     RewriteCond %{HTTP_USER_AGENT} ^Internet\ Ninja [OR]
     RewriteCond %{HTTP_USER_AGENT} ^JetCar [OR]
     RewriteCond %{HTTP_USER_AGENT} ^JOC\ Web\ Spider [OR]
     RewriteCond %{HTTP_USER_AGENT} ^larbin [OR]
     RewriteCond %{HTTP_USER_AGENT} ^LeechFTP [OR]
     RewriteCond %{HTTP_USER_AGENT} ^Mass\ Downloader [OR]
     RewriteCond %{HTTP_USER_AGENT} ^MIDown\ tool [OR]
     RewriteCond %{HTTP_USER_AGENT} ^Mister\ PiX [OR]
     RewriteCond %{HTTP_USER_AGENT} ^Navroad [OR]
     RewriteCond %{HTTP_USER_AGENT} ^NearSite [OR]
     RewriteCond %{HTTP_USER_AGENT} ^NetAnts [OR]
     RewriteCond %{HTTP_USER_AGENT} ^NetSpider [OR]
     RewriteCond %{HTTP_USER_AGENT} ^Net\ Vampire [OR]
     RewriteCond %{HTTP_USER_AGENT} ^NetZIP [OR]
     RewriteCond %{HTTP_USER_AGENT} ^Octopus [OR]
     RewriteCond %{HTTP_USER_AGENT} ^Offline\ Explorer [OR]
     RewriteCond %{HTTP_USER_AGENT} ^Offline\ Navigator [OR]
     RewriteCond %{HTTP_USER_AGENT} ^PageGrabber [OR]
     RewriteCond %{HTTP_USER_AGENT} ^Papa\ Foto [OR]
     RewriteCond %{HTTP_USER_AGENT} ^pavuk [OR]
     RewriteCond %{HTTP_USER_AGENT} ^pcBrowser [OR]
     RewriteCond %{HTTP_USER_AGENT} ^RealDownload [OR]
     RewriteCond %{HTTP_USER_AGENT} ^ReGet [OR]
     RewriteCond %{HTTP_USER_AGENT} ^SiteSnagger [OR]
     RewriteCond %{HTTP_USER_AGENT} ^SmartDownload [OR]
     RewriteCond %{HTTP_USER_AGENT} ^SuperBot [OR]
     RewriteCond %{HTTP_USER_AGENT} ^SuperHTTP [OR]
     RewriteCond %{HTTP_USER_AGENT} ^Surfbot [OR]
     RewriteCond %{HTTP_USER_AGENT} ^tAkeOut [OR]
     RewriteCond %{HTTP_USER_AGENT} ^Teleport\ Pro [OR]
     RewriteCond %{HTTP_USER_AGENT} ^VoidEYE [OR]
     RewriteCond %{HTTP_USER_AGENT} ^Web\ Image\ Collector [OR]
     RewriteCond %{HTTP_USER_AGENT} ^Web\ Sucker [OR]
     RewriteCond %{HTTP_USER_AGENT} ^WebAuto [OR]
     RewriteCond %{HTTP_USER_AGENT} ^WebCopier [OR]
     RewriteCond %{HTTP_USER_AGENT} ^WebFetch [OR]
     RewriteCond %{HTTP_USER_AGENT} ^WebGo\ IS [OR]
     RewriteCond %{HTTP_USER_AGENT} ^WebLeacher [OR]
     RewriteCond %{HTTP_USER_AGENT} ^WebReaper [OR]
     RewriteCond %{HTTP_USER_AGENT} ^WebSauger [OR]
     RewriteCond %{HTTP_USER_AGENT} ^Website\ eXtractor [OR]
     RewriteCond %{HTTP_USER_AGENT} ^Website\ Quester [OR]
     RewriteCond %{HTTP_USER_AGENT} ^WebStripper [OR]
     RewriteCond %{HTTP_USER_AGENT} ^WebWhacker [OR]
     RewriteCond %{HTTP_USER_AGENT} ^WebZIP [OR]
     RewriteCond %{HTTP_USER_AGENT} ^Widow [OR]
     RewriteCond %{HTTP_USER_AGENT} ^WWWOFFLE [OR]
     RewriteCond %{HTTP_USER_AGENT} ^Xaldon\ WebSpider [OR]
     RewriteCond %{HTTP_USER_AGENT} ^Zeus
     ## Note: The final RewriteCond must NOT use the [OR] flag.

     ## Return 403 Forbidden error.
     RewriteRule .* - [F]</pre>
    <h2>External links</h2>
    <p><a target="_blank" rel="nofollow noreferrer noopener" class="external text" href="http://perishablepress.com/press/tag/htaccess/">.htaccess tag archive @ perishablepress.com</a>
    </p>
    <p><a target="_blank" rel="nofollow noreferrer noopener" class="external free" href="https://github.com/nikosdion/master-htaccess">https://github.com/nikosdion/master-htaccess</a> Proposed "master htaccess" (by Nicholas v3.3) DO read the intro by Nicholas!]
    </p>
    <p>The original file contained a number of syntax errors, several rules that would never work, and a number of expressions that could be more efficiently coded.
    </p>
    <p>Primary discussion of bugs and enhancements discussed at: <a target="_blank" rel="noreferrer noopener" class="external free" href="http://forum.joomla.org/viewtopic.php?f=432&t=549841">http://forum.joomla.org/viewtopic.php?f=432&t=549841</a>
    </p>
    <p>Secondary discussion was also at: <a target="_blank" rel="nofollow noreferrer noopener" class="external free" href="http://snipt.net/g1smd/joomla-patch/">http://snipt.net/g1smd/joomla-patch/</a>
    </p>
    <p>The new proposed file: <a target="_blank" rel="nofollow noreferrer noopener" class="external free" href="http://code.google.com/p/joomla-master-htaccess/source/list">http://code.google.com/p/joomla-master-htaccess/source/list</a> and at: <a target="_blank" rel="nofollow noreferrer noopener" class="external free" href="https://github.com/nikosdion/master-htaccess">https://github.com/nikosdion/master-htaccess</a>
    </p>
    <p>The changes explained, line by line:
    </p>
    <p><a target="_blank" rel="nofollow noreferrer noopener" class="external free" href="http://codereview.appspot.com/4312049/diff/1/joomla-master-htaccess.txt">http://codereview.appspot.com/4312049/diff/1/joomla-master-htaccess.txt</a>
    </p>
    <p><a target="_blank" rel="nofollow noreferrer noopener" class="external free" href="http://codereview.appspot.com/4290071/diff/1/joomla-master-htaccess.txt">http://codereview.appspot.com/4290071/diff/1/joomla-master-htaccess.txt</a>
    </p>
    <p><a target="_blank" rel="nofollow noreferrer noopener" class="external free" href="http://codereview.appspot.com/4290071/diff/8001/joomla-master-htaccess.txt">http://codereview.appspot.com/4290071/diff/8001/joomla-master-htaccess.txt</a>
    </p>
    <p><a target="_blank" rel="nofollow noreferrer noopener" class="external free" href="http://codereview.appspot.com/4370051/diff/3/joomla-master-htaccess.txt">http://codereview.appspot.com/4370051/diff/3/joomla-master-htaccess.txt</a>
    </p>
    <p><a target="_blank" rel="nofollow noreferrer noopener" class="external free" href="http://codereview.appspot.com/4314051/diff/1001/joomla-master-htaccess.txt">http://codereview.appspot.com/4314051/diff/1001/joomla-master-htaccess.txt</a>
    </p>
    <p><a target="_blank" rel="nofollow noreferrer noopener" class="external free" href="http://codereview.appspot.com/4430062/diff/1/joomla-master-htaccess.txt">http://codereview.appspot.com/4430062/diff/1/joomla-master-htaccess.txt</a>
    </p>
    <p><a target="_blank" rel="nofollow noreferrer noopener" class="external free" href="http://codereview.appspot.com/4528051/diff/1/joomla-master-htaccess.txt">http://codereview.appspot.com/4528051/diff/1/joomla-master-htaccess.txt</a>
    </p>
    <!-- 
    NewPP limit report
    Cached time: 20230208222031
    Cache expiry: 86400
    Dynamic content: false
    Complications: []
    CPU time usage: 0.039 seconds
    Real time usage: 0.075 seconds
    Preprocessor visited node count: 195/1000000
    Post‐expand include size: 1918/2097152 bytes
    Template argument size: 154/2097152 bytes
    Highest expansion depth: 8/40
    Expensive parser function count: 0/100
    Unstrip recursion depth: 0/20
    Unstrip post‐expand size: 27344/5000000 bytes
    -->
    <!--
    Transclusion expansion time report (%,ms,calls,template)
    100.00%   16.016      1 -total
    100.00%   16.016      1 Template:Joomla_version
     78.33%   12.546      1 Template:Joomla_version/layout
     42.26%    6.768      2 Template:Version-msg-latest-tooltip/en
     15.25%    2.443      2 Template:CurrentSTSVer4
     13.90%    2.226      2 Template:Translation_language
     12.73%    2.039      2 Template:CurrentSTSVer
    -->

    <!-- Saved in parser cache with key docsj_mediawiki:pcache:idhash:3533-0!canonical and timestamp 20230208222031 and revision id 142813
     -->
