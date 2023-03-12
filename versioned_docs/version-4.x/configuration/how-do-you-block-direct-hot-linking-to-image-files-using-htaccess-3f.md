<!-- Filename: How_do_you_block_direct_hot_linking_to_image_files_using_htaccess%3F / Display title: How do you block direct hot linking to image files using htaccess? -->

### Caveats

1.  Your server must allow *.htaccess* files for this technique to work.
2.  If you do not have an *.htaccess* file in your root directory, see
    the related FAQ first.
3.  Do not use this method to redirect image hot links to HTML pages or
    to servers that are not your own.
4.  Hot linked images can only be replaced by other images, not with
    HTML pages.
5.  As with any *.htaccess* rewrite, you may block legitimate traffic,
    such as users behind proxies or firewalls.

### Directions

1.  Create a JPEG image called *no_hot_link.jpe*. Note that the odd file
    extension (*.jpe*) is intentional and important. Place this file in
    your *images* directory.
2.  Place the following code in the *.htaccess* file of your root
    directory.

<!-- -->

     RewriteEngine On
     RewriteCond %{HTTP_REFERER} !^http://(.+\.)?your_site\.com/ [NC]
     RewriteCond %{HTTP_REFERER} !^$
     RewriteRule .*\.(jpe?g|gif|bmp|png)$ https://docs.joomla.org/images/no_hot_link.jpe [L]

### Explanation

The first line begins the Apache rewrite rule. The second line matches
any requests from your own site, here called *your_site.com*. The
*\[NC\]* flag means *No Case*, that is, match both upper and lower case
characters. The third line allows empty referrals. The last line matches
any files ending with the extension *jpeg*, *jpg*, *gif*, *bmp* or
*png*. This is then replaced by the *no_hot_link.jpe* file in your
images directory. This JPEG file uses the extension *jpe* instead of
*jpg* to prevent these rules from blocking your replacement image.

### Block Hot Linking from Specific Domains

To stop hotlinking from specific domains only, such as *myspace.com*,
*blogspot.com* and *livejournal.com*, while allowing other websites to
hotlink to your images, use the following code:

     RewriteEngine On
     RewriteCond %{HTTP_REFERER} ^http://(.+\.)?myspace\.com/ [NC,OR]
     RewriteCond %{HTTP_REFERER} ^http://(.+\.)?blogspot\.com/ [NC,OR]
     RewriteCond %{HTTP_REFERER} ^http://(.+\.)?livejournal\.com/ [NC]
     RewriteRule .*\.(jpe?g|gif|bmp|png)$ https://docs.joomla.org/images/nohotlink.jpe [L]

You can add as many different domains as you want. Every *RewriteCond*
line except the last one should end with the *\[NC,OR\]* flags. *NC*
means to ignore case. *OR* means "Or Next", as in, match this line
**or** the next line. The last *RewriteCond* omits the *OR* flag to stop
matching after the last *RewriteCond*.

### Display a 403 Forbidden Code

Alternatively, you can display a *403 Forbidden* error code. Replace the
last line of the previous examples with this line:

     RewriteRule .*\.(jpe?g|gif|bmp|png)$ - [F]
