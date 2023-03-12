<!-- Filename: Should_PHP_run_as_a_CGI_script_or_as_an_Apache_module%3F / Display title: Should PHP run as a CGI script or as an Apache module? -->

There are two ways to configure Apache to use PHP:

1.  Configure Apache to load the PHP interpreter as an *Apache module*
2.  Configure Apache to run the PHP interpreter as a *CGI binary*

*(PS: Windows IIS normaly configures as CGI by the way)*

It is the intention of this post to provide you information relating to
the configuration and recognition of each method. "In general"
historically only one method or the other has been implemented, however,
with the architectural changes made to PHP starting with PHP5, it has
been quite common for hosting firms to configure for both. One version
running as CGI and one version running as a Module. It is generally
accepted more recently that running PHP as a CGI is more secure,
however, running PHP as an Apache Module does have a slight performance
gain and is generally how most pre-configured systems will be delivered
out of the box.

See also: [J4.x:Apache PHP
Handler](https://docs.joomla.org/J4.x:Apache_PHP_Handler "J4.x:Apache PHP Handler")

## What is the difference between CGI and apache Module Mode?

An **Apache module** is compiled into the Apache binary, so the PHP
interpreter runs in the Apache process, meaning that when Apache spawns
a child, each process already contains a binary image of PHP. A CGI is
executed as a single process for each request, and must make an exec()
or fork() call to the PHP executable, meaning that each request will
create a new process of the PHP interpreter. Apache is much more
efficient in it's ability to handle requests, and managing resources,
making the Apache module slightly faster than the CGI (as well as more
stable under load).

**CGI Mode** on the other hand, is more secure because the server now
manages and controls access to the binaries. PHP can now run as your own
user rather than the generic Apache user. This means you can put your
database passwords in a file readable only by you and your php scripts
can still access it! The "Group" and "Other" permissions (refer <a
href="https://docs.joomla.org/Where_can_you_learn_more_about_file_permissions%3F"
class="mw-redirect"
title="Where can you learn more about file permissions?">Where can you
learn more about file permissions?</a>) can now be more restrictive. CGI
mode is also claimed to be more flexible in many respects as you should
now not see, with phpSuExec (refer <a
href="http://joomlatutorials.com/joomla-tips-and-tricks/40-miscellaneous-joomla-tips/111-permissions-under-phpsuexec.html"
class="external text" target="_blank"
rel="nofollow noreferrer noopener">Permissions under phpSuExec</a>)
issues with file ownership being taken over by the Apache user,
therefore you should no longer have problems under FTP when trying to
access or modify files that have been uploaded through a PHP interface,
such as Joomla! upload options.

If your server is configured to run PHP as an Apache module, then you
will have the choice of using either php.ini or Apache .htaccess files,
however, if your server runs PHP in CGI mode then you will only have the
choice of using php.ini files locally to change settings, as Apache is
no longer in complete control of PHP.

## Testing and Reviewing Your PHP Installation

*Also known as "Everything you ever wanted and didn't want to know about
PHP"*

To find out the PHP interpreter mode and to generally test your PHP
installation and to find out a vast amount of information about your PHP
environment, supported utilities, applications and settings, you create
a single PHP file containing **only** the following lines:

This single line of code outputs an amazing amount of information, be
warned.... <img src="https://docs.joomla.org/images/f/fa/Icon_wink.gif"
decoding="async" data-file-width="19" data-file-height="19" width="19"
height="19" alt="Icon wink.gif" />

Save the file as any filename you wish, but with the ".php" extension.
FTP it to your server and open it in a browser.

## Other useful information

The following are PHP functions, that when run from a PHP File can
provide some useful information, **(less than the above option)** many
should run on most hosts, however many hosts disable some of these
functions for security. No guarantees offered...

Again, as above, make a file, name it anything you wish but make sure it
has the ".php" extension, copy and paste the following lines in to it
and FTP to your server.

The **Joomla! HISA** or **Joomla! Tools Suite** can also assist to
determine which mode your server in running in, also providing a large
amount of other related information including recommendations on
configuration.

- **Joomla! Tools Suite** (JTS) is a complete "Suite" of Tools to help
  you troubleshoot and maintain Joomla! and includes the "HISA" script.
  <a href="http://joomlacode.org/gf/project/jts/" class="external text"
  target="_blank" rel="nofollow noreferrer noopener">Download JTS Here</a>
- **Joomla! Health, Installation and Security Audit** (HISA) is a single
  standalone script that provides purely configuration information.
  <a href="http://joomlacode.org/gf/project/hisa/" class="external text"
  target="_blank" rel="nofollow noreferrer noopener">Download HISA
  Here</a>

<a href="http://forum.joomla.org/index.php/topic,136328.0.html"
class="external text" target="_blank" rel="noreferrer noopener">Forum
Discussion Here</a>

<a href="http://www.joomlatutorials.com/faq/60.html"
class="external text" target="_blank"
rel="nofollow noreferrer noopener">How to TroubleShoot A Joomla!
Installation</a>

Another **indirect method**, and possibly not 100% reliable, is that if
you are unable to make use of .htaccess on Linux hosting and Apache
based servers then you are either running in CGI mode or your host has
disabled the use of .htaccess even if your server is running PHP as an
Apache Module.

**Remove these files immediately after use, the information contained in
their output is extensive and explicit regarding your PHP and server**
configurations, it will help those wishing to cause your site harm

## How to...

**For those wishing to know more about "How To..."**

### Running PHP as an Apache module

To configure Apache to load PHP as a module to **parse** your PHP
scripts, the httpd.conf needs to be modified, typically found in
"c:\Program Files\Apache Group\Apache\conf\\ or "/etc/httpd/conf/".

Search for the section of the file that has a series of commented out
"LoadModule" statements. (Statements prefixed by the hash "#" sign are
regarded as having been commented out.) If PHP is running in "Apache
Module" Mode you should see something very similar to the following;

    LoadModule php4_module "c:/php/php4apache.dll"

#### Apache 1.x

##### For PHP5

    LoadModule php5_module C:/php/php5apache2.dll

*or (platform dependent)*

    LoadModule php5_module /usr/lib/apache/libphp5.so

**and**

    AddModule mod_php5.c

##### For PHP4

    LoadModule php4_module libexec/libphp4.so

*or (platform dependent)*

    LoadModule php4_module C:/php/php4apache.dll

**and**

    AddModule mod_php4.c

#### Apache 2.x

##### For PHP5

    LoadModule php5_module C:/php/php5apache2.dll

*or (platform dependent)*

    LoadModule php5_module /usr/lib/apache/libphp5.so

**and**

    AddModule mod_php5.c

##### For PHP4

    LoadModule php4_module libexec/libphp4.so

*or (platform dependent)*

    LoadModule php4_module C:/php/php4apache.dll

**and**

    AddModule mod_php4.c

#### Note

Don't worry that you can't find a "mod_php4.c" or "mod_php5.c" file
anywhere on your system. That directive does not cause Apache to search
for the file on your system. For the curious, it specifies the order in
which the various modules are enabled by the Apache server.

*If you're using Apache 2.x, you do not have to insert the AddModule
directive. It's no longer needed in that version. Apache 2.x has its own
internal method of determining the correct order of loading the
modules.*

Now find the "AddType" section in the file, and add the following line
after the last "AddType" statement:

    AddType application/x-httpd-php .php

If you need to support other file types, like ".php3" and ".phtml",
simply add them to the list, like this:

    AddType application/x-httpd-php .php3
    AddType application/x-httpd-php .phtml

Run a syntax check and if all is ok, restart Apache...

### Running PHP as a CGI binary

To configure PHP to run as a CGI, again you will need to configure the
httpd.conf, but confirm that the above settings are not also configured,
unless you know what you are doing you can generate yourself "HTTP 500"
errors. Search your Apache configuration file for the "ScriptAlias"
section.

Add the following line below after the ScriptAlias for "cgi-bin".
**Note:** The location will depend on where PHP is installed on your
system, you should substitute the appropriate path in place of "c:/php/"
(for example, "c:/Program Files/php/").

    ScriptAlias /php/ "c:/php/"

Apache again needs to be configured for the PHP MIME type. Search for
the "AddType" section, and add the following line after it:

    AddType application/x-httpd-php .php

As in the case of running PHP as an Apache module, you can add whatever
extensions you want Apache to recognise as PHP scripts, such as:

    AddType application/x-httpd-php .php3
    AddType application/x-httpd-php .phtml

Next, you will need to tell the server to execute the PHP executable
each time it encounters a PHP script. Add the following below any
existing entries in the "Action" section.

    Action application/x-httpd-php "/php/php.exe"

If you notice, we have used the "ScriptAlias" reference, "/php/" portion
will be recognised as the scriptAlias configured above, this is sort a
path alias which will correlate to your PHP installation path configured
previously. *In other words, don't put "c:/php/php.exe" or "c:/Program
Files/php/php.exe" in that directive, put "/php/php.exe", Apache WILL
work it out if correctly configured.*

### Configuring the Default Index Page

This section applies to all users, whether you are loading PHP as a
module or running it as a CGI binary, and has been seen often enough to
warrant a mention.

If you want to make your PHP script execute as the default page for a
directory, you have to add another line to the "httpd.conf". Simply
search for the line in the file that begins with a "DirectoryIndex" and
add "index.php" to the list of files on that line. For example, if the
line used to be:

    DirectoryIndex index.html

*change it to the following if you still wish .html files to be executed
before .php files*

    DirectoryIndex index.html index.php

*or change it to the following if you wish .php files to be executed
before .html files*

    DirectoryIndex index.php index.html

The next time you access the site or a directory within a site without a
filename, Apache will "auto-magically" deliver "index.php" if available,
or "index.html" if "index.php" is not available.
