<!-- Filename: Setting_up_Apache,_PHP_and_MySQL_manually / Display title: Setting up Apache, PHP and MySQL manually -->

## Overview

Here's a brief overview of the steps to setup a Apache, PHP and MySQL in
a Windows environment and also refer to various related tools to
maintain and work with most of the tasks related to Joomla!.

In order to make the instruction clear and succinct, we will assume that
wherever we are not stating any explicit instruction, you will let the
default setup paths apply without modification.

### Warning

If you already have any of the prepackaged AMP stacks installed on your
machine:

- Going back to your AMP stack will be difficult. The various
  installations we will do below will overwrite registry values and make
  general environment changes. (This applies at least to the PC/Windows
  environment.)
- If you need to maintain any configuration (Apache, MySQL or PHP) or
  data (your existing websites and related databases), before making
  attempts of following this instruction, make proper backups.

(needs to be expanded with specific advice on how to achieve the
above...)

## MySQL Setup

1.  <a href="https://dev.mysql.com/downloads/mysql/" class="external text"
    target="_blank" rel="nofollow noreferrer noopener">Download</a> the
    appropriate MySQL installer option for your platform.
2.  Start the installation and choose Custom installation path.
3.  Click through the whole installation process and click Finish.
4.  You will now be presented with the *MySQL Server Instance
    Configuration Wizard*.
    1.  Make sure that the *Standard Configuration* is selected and go
        to Next.
    2.  If you already have MySQL installed you may get the message *A
        Windows service with the name MySQL already exists. Please
        uninstall this service correctly or choose a different name for
        the new service.* If so, choose an alternative service name.
    3.  In the next window check for *Include Bin Directory in Windows
        PATH*. By doing this you will be able to access the various
        MySQL utilities from the command line.
    4.  In the next window you will be able to create password for your
        root MySQL user, the user with highest access level on your
        server.
    5.  In the final window all the changes you have configured so far
        will be saved when you press the *Execute* button and the
        windows service for this instance will be started.

### Notes

1.  In order to make the instruction as accessible as possible we
    skipped a number of configuration scenarios of your MySQL instance,
    such as being able to relocate your database files.
2.  MySQL installs as default with a STRICT mode which might give rise
    to some errors when using extensions or applications that haven't
    considered this.

### Resources

- <a href="https://www.heidisql.com/" class="external text"
  target="_blank" rel="nofollow noreferrer noopener">HeidiSQL</a> An
  easy to use and extensible full-client replacement of phpMyAdmin under
  constant development.
- <a href="https://dev.mysql.com/downloads/workbench/"
  class="external text" target="_blank"
  rel="nofollow noreferrer noopener">MySQL Workbench</a> Various tools
  among which you will appreciate the Administrator, which helps you to
  configure your MySQL instance. Requires the
  <a href="https://dotnet.microsoft.com/en-us/" class="external text"
  target="_blank" rel="nofollow noreferrer noopener">.Net framework</a>.
- <a href="https://www.phpmyadmin.net/" class="external text"
  target="_blank" rel="nofollow noreferrer noopener">phpMyAdmin</a> A
  powerful web based MySQL client for administrating anything related to
  MySQL.
- <a href="https://dev.mysql.com/doc/" class="external text"
  target="_blank" rel="nofollow noreferrer noopener">MySQL
  documentation</a>

## Apache Setup

1.  <a href="https://httpd.apache.org/download.cgi" class="external text"
    target="_blank" rel="nofollow noreferrer noopener">Download the
    installer</a> of your preference.
2.  Run the installer wizard and click through each step until you reach
    the Server Information window. Give the options below respectively
    and in the given order in each of the fields unless you have any
    specific requirements as to how your web server is setup:
    1.  localhost,
    2.  localhost and
    3.  admin@localhost
3.  Click through the wizard which will install and start the Apache web
    server as a windows service.
4.  In the windows status bar you will now see a pink colored feather
    with a green colored play button indicating Apache is up and
    running. Point your browser to
    <a href="http://localhost/" class="external free" target="_blank"
    rel="nofollow noreferrer noopener">http://localhost/</a> and you
    should get a page indicating its working.
5.  Let us now go to the location where Apache is installed which
    commonly is at *C:\Program Files\Apache Software
    Foundation\Apache2.2* and go through the various directories
    1.  *bin* - contains the various binary files some of which are
        listed below. In order to access these applications, most of
        which are command based, we would need to add the path to the
        *bin* directory in our global PATH variable. To do that, right
        click on My Computer \> Properties \> Advanced \> Environments
        Variables and in the System Variables list locate and select the
        Variable PATH and click on Edit and add a trailing a semi-colon,
        if not already there, followed by the absolute path to your bin
        directory. Click out from the System Properties dialogue by
        accepting.
        1.  *httpd.exe* which is the Apache webserver itself, which is
            spawned to several child processes while serving as many
            simultaneous incoming clients requests as required by
            MaxClients directive;
        2.  *ab.exe* is a benchmarking tool that comes with Apache
            allowing you to see how well your application can perform
            per time unit
    2.  *conf* - folder where various configuration files are located of
        which the following are of most interest in our case
        1.  *httpd.conf* - most of the server directives are located in
            this file and for easy access you should associate the
            *.conf* file type with a user friendly editor, i.e. anything
            other than the default Notepad.
        2.  *extra\httpd-vhosts.conf* - contains directives that would
            allow you use your local server as virtual host, i.e. able
            to run several servers on your PC. One usage scenario is
            that during a development phase if you want to map the
            actual domain you are working for to your local copy, you
            would be able to do so by making minor tweaks in this file.
            We will discuss this in more detail below.
    3.  *htdocs* - the default web server root, this is where the
        <a href="http://localhost/" class="external free" target="_blank"
        rel="nofollow noreferrer noopener">http://localhost/</a> is
        mapped, i.e. if you don't reconfigure it in *httpd.conf* above.
    4.  *logs* - access and error logs, when trying to address various
        issues related to your server or even your application

### Virtual Hosting

### Resources

- The
  <a href="https://httpd.apache.org/docs/current/" class="external text"
  target="_blank" rel="nofollow noreferrer noopener">Apache reference
  documentation</a>

## PHP Setup

1.  <a href="https://windows.php.net/download/" class="external text"
    target="_blank" rel="nofollow noreferrer noopener">Download PHP</a>
    and choose commonly VC6 x86 Thread Safe in Zip format. The various
    options have to do with how the PHP code base was compiled to binary
    and is probably nothing you should worry about for now.
2.  Create a folder under your C:\Program Files\\ (or wherever your
    program directory is located) a folder called PHP.
3.  Locate your downloaded Zip file and move it to the newly created
    folder and unpack it directly into the folder.
4.  Let us now add the PHP path to our global PATH variable by following
    the instruction above.

### Configuring PHP

The configuration amounts to editing the *php.ini* file. A sample file
for different scenarios is already in your PHP folder. Let us rename
*php.ini-development* to *php.ini* and open it in your favourite text
editor. The common values to tweak are as follows and all of these
variables are well documented in the *php.ini* file. (Note that this is
a server wide setting applying to all your projects.):

- *max_execution_time* - whenever you have scripts that run for too long
  and the server returns various unexpected results which you think is
  due to not being able to run through the whole process
- *memory_limit*
- *error_reporting*
- *display_errors*
- *log_errors* - a variable you would need to take note of in production
  scenarios
- *upload_tmp_dir*
- *upload_max_filesize*
- *extension_dir' - in order to avoid complications we will point out
  the directory where the following extensions are located by
  uncommenting this variable and assign the absolute location of the
  folder. The complete line should read as follows*

<!-- -->

    extension_dir = "C:\Program Files\PHP\ext"

- Dynamic extensions section contains various additional modules that
  you want to be loaded with, and the commented ones are those that
  comes prepackaged with PHP and can be found in the *ext* directory in
  your PHP folder. If you want to activate any, just remove the
  commenting as you should do with the following extensions:
  - php_curl.dll
  - php_gd2.dll
  - php_mbstring.dll
  - php_mysql.dll
  - php_mysqli.dll
  - php_pdo.dll
  - php_pdo_mysql.dll
  - php_xsl.dll
- session.save_path

### Configuring Apache to Work with PHP

Now that we have configured PHP to work as we want it, let's go to
Apache and do the same.

- Open *httpd.conf* and in the "Dynamic Shared Object (DSO) Support"
  section add the following directives. (If you have located your PHP
  folder differently do make corresponding change for php5apache2_2.dll
  below.):

<!-- -->

    LoadModule php5_module "C:/Program Files/PHP/php5apache2_2.dll" 
    AddType application/x-httpd-php .php

- In the DirectoryIndex add *index.php* and *index.htm* as possible
  files to serve when directory is requested as follows:

<!-- -->

    DirectoryIndex index.html index.htm index.php

- At the end of the file add the following line which will point out
  where the *php.ini* file is located

<!-- -->

    PHPIniDir "C:/Program Files/PHP"

### Restart and Test PHP

As soon as you make any change to *php.ini*, *httpd.conf* or any other
configuration files, you need to restart Apache to see the effect of the
changes. So let's now restart Apache by using the Apache Monitor tool
that you can find in your Windows status bar. Hopefully you are not
prompted with any dialogues and the Apache Monitor continues to run
green.

We will now test that PHP is working. Go to your web server's document
root (in the default case *C:\Program Files\Apache Software
Foundation\Apache2.2\htdocs*) and add a file called *phpinfo.php* with
the following content:

     

This will render a page containing information about your PHP setup and
about the various modules/extensions that are currently loaded. Point
your browser to
<a href="http://localhost/phpinfo.php" class="external free"
target="_blank"
rel="nofollow noreferrer noopener">http://localhost/phpinfo.php</a>.

### Installing and Configuring *xdebug*

1.  Point your browser to
    <a href="https://xdebug.org/wizard" class="external text"
    target="_blank" rel="nofollow noreferrer noopener">Xdebug Installation
    Wizard</a>. This page will assist you to find a suitable version of
    Xdebug.
2.  Copy the entire page of the *phpinfo* page we ran above and paste it
    into the textarea and follow the instructions provided to install.

### Resources

- The <a href="https://www.php.net/docs.php" class="external text"
  target="_blank" rel="nofollow noreferrer noopener">PHP Manual</a>
  Excellent and up to date documentation with valuable additional
  comments from users. Downloadable versions are available.
- The
  <a href="https://xdebug.org/docs/" class="external text" target="_blank"
  rel="nofollow noreferrer noopener">Xdebug 3 Documentation</a>
