<!-- Filename: J4.x:Developer:_Required_Software / Display title: Developer: Required Software -->

## Introduction

This tutorial is aimed at newcomers to Joomla code development who wish
to prepare extensions on a local computer. There are other tutorials
that cover setting up a Joomla environment on remote or local hosts, and
setting up on a local host to contribute to core code. This tutorial
should be self-contained and a little simpler.

To get started on your own laptop or desktop computer, which usually has
the domain name localhost, you will need to install a standard set of
separate items of software. The group is often referred to as a stack
and may be named LAMP, MAMP or WAMP, where the letters in the acronym
mean the following:

- **L, M or W** platform. L for Linux, M for Mac and W for Windows.
- **A: Apache** web server. Other web servers are available but
  newcomers should stick with Apache.
- **M: MySQL or MariaDB** database. Other databases are available but
  newcomers should stick with one of these. The two are interchangeable
- **P: PHP** scripting language. A widely used scripting language. There
  is no alternative as Joomla is coded in PHP.

In addition to thee items you will also need:

- **phpMyAdmin** a tool used for managing MySQL and MariaDB databases.
- **xDebug** an extension to PHP used for debugging.

## Software Stacks

If you are have a Linux or Macintosh computer you will find that you can
install each of the required software items independently from the
remote repositories that support your OS. It is possible they may be
installed and ready to go. To test, open your favourite web browser and
enter **localhost** in the url bar. You will see a placeholder page or
connection error page.

If Apache is not running on your computer consider using a package that
installs everything you need in one go. See the
**[XAMPP](https://docs.joomla.org/XAMPP "XAMPP")** tutorial for one way
to do that on all three common platforms. Otherwise, install the items
individually. Look up how to do that for your platform, there is too
much variation to cover here.

## Web Server Document Root Directory

On installation, your Apache server will have set a default document
root directory. The location varies from platform to platform and you
either need to know where it is or create a virtual host to put it where
you want it. Example default locations:

- Mac OS: "/Library/WebServer/Documents"
- Linux: /var/www/html
- Windows: ...

To avoid later problems with file permissions it is often convenient to
create a virtual host to point to the public_html directory of your own
file space. That could be /home/username/public_html on Linux or
/Users/username/Sites on Mac.

This is an example Mac virtual host entry in file
/etc/apache2/vhosts/localhost.conf:

            DocumentRoot "/Users/username/Sites"
            ServerName localhost
            ErrorLog "/private/var/log/apache2/localhost-error_log"
            CustomLog "/private/var/log/apache2/localhost-access_log" common
            
                AllowOverride All
                Require all granted
            

Alternatively, you may be able to create a symbolic link from the
default document root to the public_html folder of your personal file
space. That you would access in your browser using localhost/username.

## Database Setup with phpMyAdmin

Before installing Joomla you need an empty database ready to be
populated. You also need a database user.

- **Start phpMyAdmin** Enter localhost/phpmyadmin in your browser url
  bar.
- **Login** Depending on how it was installed, the username will be root
  or admin and ther may or may not be a password.
- **Select Databases** from the phpMyAdmin Home page top menu.
- **Create Database / Database name** enter a short name in place of the
  hint, For example, j4test123.
- **Collation** Select utf8mb4_unicode_ci from next to bottom of the
  drop-down list.
- **Select Create** to create the database.
- **Select User Accounts** from the Home top menu.
- **Select Add User Account** from the New panel beneath the list of
  current users (if any).
- **Enter a Username** this can be a short name you will need later
  during Joomla installation. Example: j4test.
- **Select Local** from the Hostname field list. It will set localhost
  in the adjacent value field.
- **Generate a password** using the Generate button. You need to copy
  the generated value and paste it into a text editor for use later. You
  do not need to remember it. 8t8mGQq.gw\[\]8lp(
- **Save** skip the Database for user and Global privileges sections of
  the form. The Go (Save) button is at the bottom,
- **Select Database** with the User account selected, if necessary via
  Home / User accounts / User name.
- **Add privileges** select the database you created in the previous
  step. Select Go to save.
- **Database specific privileges** Check all and then Go to save.

That is it! You can now logout of phpMyAdmin. Did you forget to write
down the database user password? Go back and edit the User account you
created to change it.

## Install Joomla

This is just a short summary of the steps involved:

- **Download** the latest full version from the Joomla Downloads page:
  <a href="https://downloads.joomla.org/" class="external free"
  target="_blank"
  rel="noreferrer noopener">https://downloads.joomla.org/</a>
- **Save** the download file in your Document root or a subfolder of the
  root.
- **Uncompress** the download file in place. Some operating systems will
  create a folder with the same name as the download zip file, minus the
  zip. That is good - you can just rename the folder with a short name
  and move it if necessary. Other operating systems will unpack the
  files and folders in place. That is bad if you have put the download
  in your root folder where there are existing folders with other sites.
  You will have to create a short folder name and move all the newly
  extracted files and folders into it. The objective is to end up with a
  folder that you can access with your web browser via localhost/j4test.
- **Install** point your browser at localhost/j4test and fill out the
  installation forms.

## Configuration

Some suggestions:

- **Global Configuration / Site / Cookie / Cookie Path** set to the
  folder containing you joomla installation (/j4text).
- **Global Configuration / System / Debug / Debug System** set to Yes.
- **Global Configuration / System / Session Lifetime** set to 60 -
  otherwise get logged out whilst thinking.
- **Global Configuration / Sever / Server / Error Reporting** set to
  Maximum.
- **Plugin System - Debug / Plugin / Refresh Assets** set to No unless
  you are debugging css or javascript.

That is it. If Joomla is working you are ready to use it for extension
development.
