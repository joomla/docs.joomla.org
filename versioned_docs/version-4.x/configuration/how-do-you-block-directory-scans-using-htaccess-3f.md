<!-- Filename: How_do_you_block_directory_scans_using_htaccess%3F / Display title: How do you block directory scans using htaccess? -->

**Directions**

Add Apache rewrite rules to your `.htaccess` file. For example, the
following will redirect all attempts to access files with names starting
with, "phpMyAdmin" to `index.php`.

  
**Sample Apache Rewrite Rule**

    RewriteRule ^/phpMyAdmin.*$ /index.php

  
**Some Regular Expression Tips**

    ^ Means start of filename
    . Means any character other than newlines
    * Means one or more of the previous character
    $ Means end of line
