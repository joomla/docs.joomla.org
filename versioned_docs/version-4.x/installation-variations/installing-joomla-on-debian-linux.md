<!-- Filename: Installing_Joomla_on_Debian_Linux / Display title: Installing Joomla on Debian Linux -->

<img
src="https://docs.joomla.org/images/thumb/4/47/Copyedit.png/25px-Copyedit.png"
decoding="async"
srcset="https://docs.joomla.org/images/thumb/4/47/Copyedit.png/38px-Copyedit.png 1.5x, https://docs.joomla.org/images/thumb/4/47/Copyedit.png/50px-Copyedit.png 2x"
data-file-width="200" data-file-height="200" width="25" height="25"
alt="Copyedit.png" />This Article Needs Your Help

*This article is tagged because it* **TECHNICAL REVIEW***. You can help
the Joomla! Documentation Wiki by <a
href="https://docs.joomla.org//docs.joomla.org/index.php?title=Installing_Joomla_on_Debian_Linux&amp;action=edit"
class="external text" target="_blank"
rel="noreferrer noopener">contributing to it</a>.  
<span class="small">More pages that need help similar to this one are <a
href="https://docs.joomla.org/index.php?title=Category:Technical_review&amp;action=edit&amp;redlink=1"
class="new"
title="Category:Technical review (page does not exist)">here</a>.</span>
<span class="small">**NOTE-If you feel the need is satistified, please
remove this notice.**</span>*  
**Reason:** Needs updating to latest Joomla, PHP, MySQL Versions

## Preface

This document guides you through the manual installation of Joomla! on
*Debian GNU Linux* or one of its derivatives such as *Ubuntu*, *Knoppix*
or *GRML*. Note that this guide applies to Joomla!
<img src="https://docs.joomla.org/images/5/53/Compat_icon_2_5.png"
decoding="async" data-file-width="40" data-file-height="17" width="40"
height="17" alt="Joomla 2.5" />
<img src="https://docs.joomla.org/images/0/0e/Compat_icon_3_5.png"
decoding="async" data-file-width="40" data-file-height="17" width="40"
height="17" alt="Joomla 3.5" />
<img src="https://docs.joomla.org/images/3/3c/Compat_icon_3_6.png"
decoding="async" data-file-width="40" data-file-height="17" width="40"
height="17" alt="Joomla 3.6" />
<img src="https://docs.joomla.org/images/b/bd/Compat_icon_4_x.png"
decoding="async" data-file-width="40" data-file-height="17" width="40"
height="17" alt="Joomla 4.x" />. It has been successfully tested on
Debian 4.0 \[Etch\], Debian 5.0 \[Lenny\], Ubuntu 8.04 LTS \[Hardy
Heron\], Ubuntu 10.10 \[maverick\] and Ubuntu 11.10 (Oneiric Ocelot). It
will work for all Debian-based Linux distributions as well.

Also note that this guide assumes you're installing Joomla! in a single
hosting environment, running PHP as module. If you want to run multiple
websites as a web hosting service provider, for security reasons you
should consider setting up an suPHP (php5-cgi, libapache2-mod-suphp)
environment, where every virtual Apache host runs under its own UID.

## Installing Joomla!

### Prerequisites

You will need to install Apache2, *mysql-server-5.0*, *mysql-client-5.0*
and *php5* in order to have a web server for Joomla!.

### Which Stack Should I Choose?

- [XAMPP](https://docs.joomla.org/Installing_Joomla_on_Debian_Linux#XAMPP "Installing Joomla on Debian Linux")
  automatically configures ownership.
- [LaMp](https://docs.joomla.org/Installing_Joomla_on_Debian_Linux#LaMp "Installing Joomla on Debian Linux")
  requires use of the *chown* command.
- [BitNami Joomla!
  Stack](https://docs.joomla.org/Installing_Joomla_on_Debian_Linux#BitNami_Joomla.21_stack "Installing Joomla on Debian Linux")
  is free, self-contained and automatically configures the LAMP stack
  and Joomla!

## XAMPP

Download
<a href="https://sourceforge.net/projects/xampp/files/XAMPP%20Linux/"
class="external text" target="_blank"
rel="nofollow noreferrer noopener">XAMPP</a> for Linux to your your Home
folder.

### Install XAMPP

Open Terminal and enter:

    sudo tar xvfz xampp-linux-1.8.3.tar.gz -C /opt

(Replace *xampp-linux-1.8.3.tar.gz* with the version of XAMPP you
downloaded).

This installs Apache2, MySQL and PHP as well as an FTP server.

    sudo /opt/lampp/lampp start

and

    sudo /opt/lampp/lampp stop

...starts/stops all the services.

### Test Your XAMPP Localhost Server

Open your Browser and point it to

    http://localhost

The *index.php* will redirect to

    http://localhost/xampp

There you will find instructions on how to change default usernames and
passwords. On a PC that does not serve files to the Internet or LAN,
changing the defaults is a personal choice.

### Multiple Versions of XAMPP

It can be useful to have access to several versions of XAMPP on your PC.
(To have available different versions of PHP for testing.) XAMPP doesn't
make this easy but it is possible - see <a
href="https://stackoverflow.com/questions/47498835/installing-two-versions-of-php-with-xampp-on-ubuntu-system"
class="external text" target="_blank"
rel="nofollow noreferrer noopener">"how to" article</a>. (For Linux
only.)

### Get Joomla

Download the latest Joomla installation zip
<a href="https://downloads.joomla.org/us/" class="external autonumber"
target="_blank" rel="noreferrer noopener">[1]</a>

Unzip to your hard drive

Connect to localhost with XAMPP's FTP client Default

    nobody
    lampp

Use FTP to create a folder for your Joomla on the localhost server

FTP the unpacked Joomla installation files to the newly-created Joomla
folder.

**Important**

- The XAMPP installation sets the correct Ownership of the files and
  permissions.
- Using the *chown* command will cause ownership problems with XAMPP.
- Using Nautilus to manipulate folders/files on localhost will cause
  ownership problems with XAMPP.

### Configure Joomla

In your Browser type:

    http://localhost/yournewjoomlafolder

In the first Joomla installation screen if error reporting is shown as
on then:

In your Terminal type

    sudo gedit /opt/lampp/etc/php.ini

In the *php.ini* file, locate

    error_reporting =

And change the value to

    error_reporting = E_ALL & ~E_NOTICE & ~E_DEPRECATED

Also locate

    display_errors = On

And change the value to

    display_errors = Off

Stop then restart XAMPP for the new settings to take effect.

FTP layer is **not** needed

**Database info**

**Host**: *localhost*

**Database name**: *test*

*(XAMPP will automatically create a database of the name you specify).*

**Default Database user**: *root*

There is no Password for **Database user**: *root*.

Administrator password is your choice.

Installing Sample Data is recommended for the novice user.

After installation delete the installation directory and point your
Browser to:

    http://localhost/yournewjoomlafolder

or

    http://localhost/yournewjoomlafolder/administrator

### Create a Link in the Ubuntu Menu

**To create a GUI for XAMPP connected to your Ubuntu menu**

Open up the Terminal and type

    sudo gedit /usr/share/applications/xampp-control-panel.desktop

Then copy the following into the gedit and save.

    [Desktop Entry]
    Encoding=UTF-8
    Name=XAMPP Control Panel
    Comment=Start and Stop XAMPP
    Exec=gksudo "python /opt/lampp/share/xampp-control-panel/xampp-control-panel.py"
    Icon=/usr/share/icons/Tango/scalable/devices/network-wired.svg
    Terminal=false
    Type=Application
    Categories=GNOME;Application;Network;
    StartupNotify=true

**N.B.** Ubuntu 11.10 needs *python-glade2* installed in order to run
the GUI. *python-glade2* can be found in the Ubuntu Software Center.

## LaMp

You will find instructions on
<a href="https://wiki.debian.org/LaMp" class="external text"
target="_blank" rel="nofollow noreferrer noopener">wiki.debian.org</a>.
Make sure that you have installed *bzip2* for extracting the downloaded
Joomla! package.

You can check this by the following command:

    $ dpkg -l | grep bzip2

Note that the dollar sign '\$' shell prompt is indicating you're a
*regular user*. We will later see a hash mark (#) shell prompt, which
indicates that you're the super user *root* after issuing an *su* or
*sudo*. The first policy for a secure Linux system administration on the
command line (but under X also) is to issue commands with the lowest
permission as possible.

If *bzip2* is not installed, you won't get an output. Then you can
quickly install it via aptitude:

    $ su -c "aptitude install bzip2"

Here we see the first command executed with root permissions, because a
regular user is not allowed to install new software. The '-c' option
passes the following command to *su* and hereafter it terminates instead
of switching to a root shell.

### Configure PHP5

In the pre -install check (you get to that when the install is complete
and are setting up Joomla at the web page), Output Buffering was On and
it's recommended that it should be Off. To do so: edit
/etc/php5/apache2/php.ini , comment out this line: output_buffering =
4096 , by putting a ';' in front. it'll look like this when done:

    ;output_buffering = 4096

There were also warnings on the install screen regarding *suhosin*. To
make the suggested changes, edit this file:

    /etc/php5/conf.d/suhosin.ini

I set these:

    suhosin.post.max_array_index_length = 256
    suhosin.post.max_totalname_length = 8192
    suhosin.post.max_vars = 2048
    suhosin.request.max_array_index_length = 256
    suhosin.request.max_totalname_length = 8192
    suhosin.request.max_vars = 2048

### Configure MySQL

It is time to create a database for Joomla! You can do this by the
following commands:

    mysqladmin -u root -p create joomla

Replace *joomla* with the name of choice for Joomla!'s database.

Now create a MySQL user different from root for Joomla!'s database.
First enter into MySQL system with:

    mysql -u root -p

Then at the *mysql\>* prompt, enter the following. Make sure you replace
*joomla* with the name of Joomla!'s database from above. Replace
*yourusername* with the user name you choose for the MySQL user
accessing Joomla!'s database, and replace *yourpassword* with your
password of choice for the MySQL user.

    GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, INDEX, ALTER, CREATE TEMPORARY TABLES, \
    LOCK TABLES ON joomla.* TO 'yourusername'@'localhost' IDENTIFIED BY 'yourpassword';

Activate the settings and quit : \[ there will be a mysql\> prompt:

    FLUSH PRIVILEGES;
    \q

After disconnecting from the database server, you should remove the
login information of your just new created MySQL user by editing MySQL's
history file.

    vi ~/.mysql_history

You can use any editor of your choice such as *nano*, *vi* or *emacs*
that is installed on your system.

### Get Joomla! Source

Now it is time to download the Joomla! sources. Currently you will find
download links on the
<a href="https://downloads.joomla.org/us/" class="external text"
target="_blank" rel="noreferrer noopener">Joomla Downloads</a> page. For
version 1.5.11, you may do the following from command line, assuming
your current working directory is your home folder */home/user*:

    $ wget http://joomlacode.org/gf/download/frsrelease/10209/40306/Joomla_1.5.11-Stable-Full_Package.tar.bz2
    $ cd /var/www
    $ su
    # mkdir -m 0755 joomla
    # cd joomla
    # tar -xvjf /home/user/Joomla_1.5.11-Stable-Full_Package.tar.bz2

for 1.7 use this wget line:

    wget http://joomlacode.org/gf/download/frsrelease/15278/66553/Joomla_1.7.0-Stable-Full_Package.tar.bz2

Check <a href="http://joomlacode.org/gf/project/joomla/frs/"
class="external free" target="_blank"
rel="nofollow noreferrer noopener">http://joomlacode.org/gf/project/joomla/frs/</a>
for an updated package.

Here is the first time we see this hash mark (#) shell prompt. We call
*su* without any options, because we want to issue root commands more
than only one time. Calling *su* that way will prompt us for the super
user's password and then change the actual shell environment,
respectively \$UID and \$EUID.

### Set Ownership and Permissions

If you want to allow writing in the entire Joomla folder, simply do:

    chown -R www-data:www-data /var/www/joomla

If you want a more restrictive approach, do this instead:

    chown -R root:root /var/www/joomla
    cd /var/www/joomla
    PLACES='
    administrator/backups
    administrator/components
    administrator/modules
    administrator/templates
    cache
    components
    images
    images/banners
    images/stories
    language
    mambots
    mambots/content
    mambots/editors
    mambots/editors-xtd
    mambots/search
    media
    modules
    templates
    '
    for i in $PLACES; do chown -R www-data:www-data $i; done

Now set file and directory permissions:

    find /var/www/joomla -type f -exec chmod 0644 {} \;
    find /var/www/joomla -type d -exec chmod 0755 {} \;

### Configure Joomla!

Open your web browser, and point it to
<a href="http://localhost/joomla" class="external free" target="_blank"
rel="nofollow noreferrer noopener">http://localhost/joomla</a>. Replace
*localhost* with your servers IP or domain name if it you are installing
on a remote system.

You will be guided through the final steps of setting up Joomla!, have
your MySQL user, password and database name available.

When you reach the final screen with congratulations on installing
Joomla!, remove the installation directory. From root terminal:

    # rm -rf /var/www/joomla/installation/
    # exit
    $

And that's it! Now you can log into the Administrator interface of your
fresh installed Joomla!.

## BitNami Joomla! Stack

### What is BitNami Joomla! Stack?

BitNami Joomla! Stack is an all-in-one installer that makes it easy to
install Joomla on your computer. It is free, easy to use and
self-contained. That means it bundles and automatically configures every
piece of software (dependency) necessary to run Joomla for development
or production purposes, including Apache, MySQL and PHP. You can
<a href="https://bitnami.com/stack/joomla" class="external text"
target="_blank" rel="nofollow noreferrer noopener">download the latest
version of BitNami Joomla! stack</a> for Windows, Linux and OS X.

### Installing Joomla! Stack

Regardless of which operating system you are running
(Windows/Linux/Mac), the install process is the same.

Find the installer you just downloaded. The filename will be similar to
*bitnami-joomla-VERSION-linux-installer.run*. Double click on the icon
to launch the installer.

    Note: If you are using Linux you will have to give executable permissions to the file first, using this command:
    chmod +x /path/to/bitnami-joomla-VERSION-linux-installer.run

<img src="https://docs.joomla.org/images/6/69/Joomla_welcome.png"
decoding="async" data-file-width="516" data-file-height="441"
width="516" height="441" alt="Joomla welcome.png" />

Click *Forward*.

<img src="https://docs.joomla.org/images/e/ec/Joomla_components.png"
decoding="async" data-file-width="516" data-file-height="441"
width="516" height="441" alt="Joomla components.png" />

Select the components you want to install. If you are not sure, leave
the default components checked. Click *Forward* when you are done.

<img src="https://docs.joomla.org/images/b/bd/Joomla_directory.png"
decoding="async" data-file-width="516" data-file-height="441"
width="516" height="441" alt="Joomla directory.png" />

Now it will ask where you want to install the program. Provide the
location where you want to install the BitNami Joomla! stack and click
*Forward* when you are done.

<img src="https://docs.joomla.org/images/0/05/Joomla_userdata.png"
decoding="async" data-file-width="516" data-file-height="441"
width="516" height="441" alt="Joomla userdata.png" />

The user and password you provide here will be used to create the
Administrator account in Joomla! Click *Forward* when done.

<img src="https://docs.joomla.org/images/0/02/Joomla_sitename.png"
decoding="async" data-file-width="516" data-file-height="441"
width="516" height="441" alt="Joomla sitename.png" />

Type in the name you want to use for your Joomla site, and click
*Forward*.

<img src="https://docs.joomla.org/images/6/69/JoomlaReadytoinstall.png"
decoding="async" data-file-width="516" data-file-height="441"
width="516" height="441" alt="JoomlaReadytoinstall.png" />

The installer is now ready to begin the installation process. Click
*Forward*.

<img src="https://docs.joomla.org/images/5/55/JoomlaCopyingfiles.png"
decoding="async" data-file-width="516" data-file-height="441"
width="516" height="441" alt="JoomlaCopyingfiles.png" />

Wait a minute while the installer copies the files and configures your
Joomla! installation.

<img src="https://docs.joomla.org/images/b/b7/Joomlafinalscreen.png"
decoding="async" data-file-width="516" data-file-height="441"
width="516" height="441" alt="Joomlafinalscreen.png" />

Joomla! is now set up and ready to be used. Click *Finish* to launch the
application.

<img
src="https://docs.joomla.org/images/1/1c/Joomlaapplicationscreen.png"
decoding="async" data-file-width="600" data-file-height="514"
width="600" height="514" alt="Joomlaapplicationscreen.png" />

You can now log in using the username and password you provided during
the installation.
