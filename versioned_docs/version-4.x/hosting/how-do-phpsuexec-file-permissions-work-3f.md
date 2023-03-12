<!-- Filename: How_do_phpSuExec_file_permissions_work%3F / Display title: How do phpSuExec file permissions work? -->

## Permissions under phpsuexec

#### What is phpSuExec?

On most Apache servers, PHP runs as an Apache module. This is the
default method of installation. Many hosts have this setup because it is
default and potentially they do not realize that it is also possible to
configure PHP as a CGI. Running PHP as a CGI can be more secure whilst
also avoiding file and directory ownership issues.

PHPSuExec provides the facility to have all scripts running the relevant
user account instead of under the Web Servers account. This facility
allows the server Administrators to isolate and manage malicious or
runaway script usage very quickly, avoiding unwanted or un-authorised
scripts from running for a lengthy period of time.

#### What does phpSuExec Do?

##### 777 Permissions

With non- phpSuExec configurations, PHP runs as an Apache Module it
executes as the user/group of the webserver which is usually "nobody",
"httpd" or "apache". Under this mode, files or directories that you
require your php scripts to be able to write to need 777 permissions
(read/write/execute at user/group/world level). This is not very secure
because it allows the webserver to write to the file, it also allows
anyone else to read or write to the file.

Under phpSuExec configurations, PHP running as a CGI with "suexec"
enabled (su = switch user, allowing one user to "switch" to another if
authorised) - Your php scripts now execute under your own user/group
level. Files or directories that you require your php scripts to be able
to write to no longer need to have 777 permissions. In fact, 777
permissions are no longer allowed, having 777 permissions on your
scripts or the directories they reside in will not run and will instead
cause a "500 internal server error" when attempting to execute them,
this is done to protect you from someone abusing your scripts. Your
scripts and directories can now, only have a maximum of 755 permissions
(read/write/execute by you, read/execute by everyone else).

##### Goodbye ".htaccess" and Welcome ".ini"

Under the old Apache Module mode it was possible to manipulate the PHP
settings from within a ".htaccess" file placed in the script's top-level
directory, this was also recursively applied to all other directories
below it.

     For example you could turn on the php setting "magic_quotes_gpc" with this line in .htaccess:

     php_value magic_quotes_gpc on

Now, when PHP is running as a CGI and phpSuExec protected, manipulating
the PHP settings is still possible however you can no longer make use of
a ".htaccess" file. Using .htaccess with the required PHP prefix of
"php_value" will cause a "500 internal server error" when attempting to
access the scripts. This is due to php no longer running as an Apache
module, thus Apache is unable to handle those directives any longer.

If your host has, or is, implementing phpSuExec, ALL php values should
be removed from your .htaccess files to avoid the 500 internal server
error. Instead, you will now be creating and using your own "Local
php.ini" file to manipulate the desired php settings.

##### What is a php.ini file?

The php.ini file is a configuration file that the server looks at to see
what PHP options have been made available to the server or what their
setting are, if different from the server's default php.ini. While the
name may seem advanced to those unfamiliar with it, it is in essence a
simple text file with the name php.ini

##### How to create a php.ini file

To create a php.ini file, just open up a text editor, add in the lines
you need and save the file. You can name the file whatever you wish when
saving, to ensure the correct FTP transfer mode is used, you might wish
to name it "php.ini.txt". Once you have configured all your settings,
upload the file to the directory where your script is located and then
rename it back to php.ini.

     For example you can turn on the php setting "magic_quotes_gpc" with this line in php.ini:

     magic_quotes_gpc = on

In many cases, you might need to have multiple copies of the same
php.ini file in different directories, unlike .htaccess files, php.ini
files are not applied recursively to lower directories. If you need the
same functionality across all lower directries also, you will then need
to copy the php.ini file each directory in turn that will have .php
scripts running from within them.

##### Troubleshooting, something went wrong

My php script doesn't work or I have an error message.

1.  Check that the php script that you are attempting to execute has
    permissions of no more than 755.  
    644 will work just fine normally, this is not something that will
    need to be changed in most cases.

<!-- -->

1.  1.  Check that the directory permissions that the script resides
        within is set to a maximum of 755.  
        This also includes directories that the script would need to
        have access to also.
        1.  Check that you do not have a .htaccess file with php_values
            within it.  
            They will cause a 500 Internal server error, when attempting
            to execute the script.  
            The php_values will need to be removed from your .htaccess
            file and a php.ini put in its place,  
            containing the php directives as explained above.

##### My script requires 777

So what about php scripts that say they require 777 permissions on some
of their directory or files to work, such as a Joomla!, Forums, photo
galleries and alike? Due to the transparent nature of phpSuExec this is
solved very simply, any directories stated as requiring to be "writable"
or "777" can safely be set to 755 (the maximum recommended) or 700 (the
minimum that will normally work) instead. This is because, now that the
web server runs under your own user account, only your own user account
needs full write and execute permissions.

These rules have been applied to .cgi and .pl files historically and are
now being applied php files also.
