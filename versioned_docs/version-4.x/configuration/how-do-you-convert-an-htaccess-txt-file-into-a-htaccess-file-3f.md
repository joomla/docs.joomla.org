<!-- Filename: How_do_you_convert_an_htaccess.txt_file_into_a_.htaccess_file%3F / Display title: How do you convert an htaccess.txt file into a .htaccess file? -->

### Introduction

When using PHP as an Apache module, you can change the configuration
settings using directives in Apache configuration files (e.g. httpd.conf
and .htaccess files). You will need "AllowOverride Options" or
"AllowOverride All" privileges to do so. If you control your own Apache
configuration, you can and should use httpd.conf. If you do not control
your Apache configuration (such as on a shared server), you must use
.htaccess files.

### Directions

1.  First look for the file, htaccess.txt in your root directory using
    FTP to connect to your server. The file should have been installed
    during the Joomla! installation. (Note that this file name does not
    begin with a dot.) Open and carefully read htaccess.txt. It contains
    important suggestions on how to protect your site.
2.  Make any adjustments to this file as appropriate for your site, and
    then save it in your site's home directory as, .htaccess (including
    the dot). Make sure you uncheck the "Hide filenames that begin with
    a period" option within your FTP program.
3.  Test your site's front end and back end. If it produces errors,
    rename the file back to htaccess.txt, and troubleshoot your edits.
    If you are unable to get this working, you may have to leave the
    file named as htaccess.txt.
4.  Use phpinfo() to ensure that all configurations set as you intended.
    Note: Web-accessible files that include phpinfo() are potential
    security risks they offer attackers lots of useful information about
    your server. Always remove such files after use.

### More Information

- <a href="http://us2.php.net/configuration.changes" class="external text"
  target="_blank" rel="nofollow noreferrer noopener">Official PHP Manual:
  How to change configuration settings</a>
- <a href="http://us2.php.net/manual/en/ini.php#ini.list"
  class="external text" target="_blank"
  rel="nofollow noreferrer noopener">Official PHP Manual: List of PHP INI
  directives</a>
