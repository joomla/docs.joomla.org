<!-- Filename: Installing_Joomla_on_a_Raspberry_Pi / Display title: Installing Joomla on a Raspberry Pi -->

<img
src="https://docs.joomla.org/images/thumb/e/e5/Quill_icon.png/30px-Quill_icon.png"
decoding="async"
srcset="https://docs.joomla.org/images/thumb/e/e5/Quill_icon.png/45px-Quill_icon.png 1.5x, https://docs.joomla.org/images/thumb/e/e5/Quill_icon.png/60px-Quill_icon.png 2x"
data-file-width="71" data-file-height="59" width="30" height="25"
alt="Quill icon.png" />Content is Incomplete

This article or section **is incomplete, which means it may be lacking
information.** You are welcome to assist in its completion by editing it
as well. If this article or section <a
href="https://docs.joomla.org//docs.joomla.org/index.php?title=Installing_Joomla_on_a_Raspberry_Pi/en&amp;action=history"
class="external text" target="_blank" rel="noreferrer noopener"></a> <a
href="https://docs.joomla.org//docs.joomla.org/index.php?title=Installing_Joomla_on_a_Raspberry_Pi/en&amp;action=history"
class="external text" target="_blank" rel="noreferrer noopener">has not
been edited in several days</a>, please consider helping complete the
content.  
<span class="small">This article was <a
href="https://docs.joomla.org//docs.joomla.org/index.php?title=Installing_Joomla_on_a_Raspberry_Pi/en&amp;diff=cur"
class="external text" target="_blank" rel="noreferrer noopener">last
edited</a> by
[FuzzyBot](https://docs.joomla.org/User:FuzzyBot "User:FuzzyBot")
([talk](https://docs.joomla.org/User_talk:FuzzyBot "User talk:FuzzyBot")\|
[contribs](https://docs.joomla.org/Special:Contributions/FuzzyBot "Special:Contributions/FuzzyBot"))
3 years ago. *(<a
href="https://docs.joomla.org//docs.joomla.org/index.php?title=Installing_Joomla_on_a_Raspberry_Pi/en&amp;action=purge"
class="external text" target="_blank"
rel="noreferrer noopener">Purge</a>)*</span>

**Note: Work-in-progress. This document is not yet ready & fully tested.
Please wait with translation until it is finished. Thanks!**

The <a href="https://www.raspberrypi.org/" class="external text"
target="_blank" rel="nofollow noreferrer noopener">Raspberry Pi</a> is a
small single-board computer that was originally developed to promote the
teaching of basic computer science in schools and developing countries.
Because of its versatility it has become very popular and is used as
media player, small stand-alone server, etc. You can use it as webserver
and install Joomla! on it. This page shows you how to get a your Joomla!
website running on the Raspberry Pi.

## Hardware

- **Rasberry Pi version 3 Model B** - There are various models of
  Raspberry Pi. You can use most models that have an Ethernet port (the
  Model B types). However for performance we will use the latest version
  with most RAM memory.
- **micro SD card** - For the operating system + webserver + Joomla.
  (RPi version 3 model B uses micro SD other versions might use normal
  SD cards)
- **5 Volt adapter (1 Amp)** - to power the Raspberry Pi you'll need to
  convert the mains power (230V or 110V) to 5 Volt. The Rasperry Pi
  needs about 1 Amp, and maybe more if you connect USB devices to it.
- standard **Ethernet cable** - to connect the RPi to your Local Area
  Network / router / the internet.

## Installing Operating System

The operating system Raspbian is a Debian Linux version specially
compiled for the Raspberry Pi. There are two versions of
<a href="https://www.raspberrypi.org/downloads/raspbian/"
class="external text" target="_blank"
rel="nofollow noreferrer noopener">Raspbian</a> available: **Raspbian
Jessie with Pixel Lite** (version with PIXEL desktop based on Debian
Jessie) and **Raspbian Jessie Lite** (minimal version based on Debian
Jessie). Because we use the Raspberry Pi as webserver for Joomla, we
won't need the GUI.

**Download** <a href="https://www.raspberrypi.org/downloads/raspbian/"
class="external text" target="_blank"
rel="nofollow noreferrer noopener">Raspbian Jessie Lite</a> and unzip
the downloaded file, e.g. 2016-09-23-raspbian-jessie-lite**.zip** (306
MB) to 2016-09-23-raspbian-jessie-lite**.img** (1.4 GB).

Now we need to copy the .img file to the (micro) SD card. You can use a
tool with graphical interface like
<a href="https://unetbootin.github.io/" class="external text"
target="_blank" rel="nofollow noreferrer noopener">UNetbootin</a> (for
Windows, Mac OS X and Linux) or do it on the command line).

**Be very careful** when writing the .img disk image to another disk. In
case you use the wrong destination disk, you will overwrite that disk
with the .img which makes that disk unusable, resulting in data loss.

### Windows

In a terminal (CMD) check which device corresponds with the SD Card and
do something like:

    dd bs=1M if=c:\temp\2016-09-23-raspbian-jessie-lite.img od=[the device of your SD Card]

See also <a
href="https://www.raspberrypi.org/documentation/installation/installing-images/windows.md"
class="external text" target="_blank"
rel="nofollow noreferrer noopener">Installing Operating System Images
using Windows</a>

### Apple OSX

Check which device is used for your SD Card. In our case it's disk1s1
and we'll do in Terminal:

    sudo dd bs=1M if=~/Downloads/2016-09-23-raspbian-jessie-lite.img of=/dev/disk1s1

See also: <a
href="https://www.raspberrypi.org/documentation/installation/installing-images/mac.md"
class="external text" target="_blank"
rel="nofollow noreferrer noopener">Installing Operating System Images on
MacOS</a>

### Linux

We connect a SD Card reader with the (micro) SD Card to a computer. With
**dmesg** we can find the device name of the SD Card. In our case dmesg
shows something like

    [xxxxxx.xxxxxxx]  sdd: sdd1 sdd2

meaning that we have a SD Card with 2 partitions. Do not write the
Raspbian image to a partition but to the whole disk **sdd**.

We will use **dd** ("Disk Dump") to write an Input File (**if**) to an
Output File (**of**) using a specified Block Size (**bs**).

**Be VERY careful**: dd will write to a device without any warning.
Triple double check that that you write to the right device! If you
write to the wrong disk, then you'll always remember the dd command as
"Disk Destroyer".

    sudo dd if=~/Downloads/2016-09-23-raspbian-jessie-lite.img of=/dev/sdd bs=4M

See also <a
href="https://www.raspberrypi.org/documentation/installation/installing-images/linux.md"
class="external text" target="_blank"
rel="nofollow noreferrer noopener">Installing Operating System Images on
Linux</a>

  
**WARNING for raspbian stretch version** : to have a ssh server working
from boot you need to create an empty file ssh on the root partition.

## Connecting Raspberry Pi to LAN

When we have installed the Raspbian Operating System on the SD Card, we
will:

- Insert the micro SD card in the SD Card slot on the Raspberry Pi.
- Connect an an Ethernet cable to the Raspberry Pi and to the Local Area
  Network (connect it to our router).
- Connect the 5V power supply to the the Raspberry Pi.

Booting up the Raspberry Pi takes roughly 30 seconds. We've to find the
IP address to connect to it using SSH. We can use different approaches
for that:

- log into the webinterface of your router and look up the connected
  devices;
- use a mobile phone connected the Wifi router using a network scanning
  App called **Fing Overlook**;
- use a command like **nmap**. Assuming that our PC has IP address
  **192.168.0**.25 we can find all other devices in the same network
  range by doing the following:

<!-- -->

    sudo nmap -sP 192.168.0/24

Which might show the following details:

    Starting Nmap 6.47 ( http://nmap.org ) at 2016-10-22 17:42 CEST
    Nmap scan report for 192.168.0.35
    Host is up (0.00042s latency).
    MAC Address: 42:42:42:42:42:42 (Raspberry Pi Foundation)

To log into our Raspberry Pi, we'll use the command **ssh**.

    ssh pi@192.168.0.35

The first time you'll connect to it, it will show something like:

    The authenticity of host '192.168.0.35 (192.168.0.35)' can't be established.
    ECDSA key fingerprint is 42:42:42:42:42:42:42:42:42:42:42:42:42:42:42:42. 
    Are you sure you want to continue connecting (yes/no)?

We'll choose "**Yes**"

    Warning: Permanently added '192.168.0.35' (ECDSA) to the list of known hosts.
    pi@192.168.0.35's password: 

and use the **default password**: **raspberry** which on successful
login will show:

    The programs included with the Debian GNU/Linux system are free software;
    the exact distribution terms for each program are described in the
    individual files in /usr/share/doc/*/copyright.

    Debian GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent
    permitted by applicable law.
    pi@raspberrypi:~ $ 

We can configure the Raspberry Pi using a text interface via:

    sudo raspi-config

### Raspberry Pi Software Configuration Tool (raspi-config)

With this configuration tool we'll only change the following settings.

#### 1 Expand Filesystem

By default the disk space on the SD Card is the same size as the 1.4GB
.img file that you used to create the SD card for your Raspberry Pi. You
can use this option to gain the rest of the disk space.

#### 2 Change User Password

For security reasons it's best to **change the default password**
"raspberry" as soon as possible.

#### 3 Boot Options

We would like the Raspberry Pi to boot the Text console

##### B2 Console Autologin Text console, automatically logged in as 'pi' user

#### 9 Advanced Options

##### A3 Memory Split

Because we will use the Raspberry Pi as a headless server without
connecting it to a monitor, we can decrease the memory used for the GPU
from 64 to **16**

#### 5 Internationalisation Options

##### I2 Change Timezone

We'll change the Timezone to our own time zone (e.g. Europe/Amsterdam)

After all changes we'll Reboot the Raspberry Pi, and will login again
with our new password.

    ssh pi@192.168.0.35

Now it's time to install everything else.

## Update software

Before installing anything else, we'll:

- **update** the list of software versions from all external
  repositories

<!-- -->

    sudo apt-get update

- **upgrade** all installed software

<!-- -->

    sudo apt-get upgrade

**Updating the version list and upgrading all software is something that
should be done regularly.**

## Nginx Webserver

A fast and lightweight alternative for Apache web server is the
increasingly becoming popular **Nginx** web server.

### Installation of Nginx

We will install nginx and all dependencies (read: software that nginx
needs to work) with

    sudo apt-get install nginx

We'll get a message like:

    Reading package lists... Done
    Building dependency tree       
    Reading state information... Done
    The following extra packages will be installed:
     fontconfig-config fonts-dejavu-core libfontconfig1 libgd3 libjbig0 libtiff5 libvpx1 libxpm4 libxslt1.1 nginx-common nginx-full
    Suggested packages:
     libgd-tools fcgiwrap nginx-doc ssl-cert
    The following NEW packages will be installed:
     fontconfig-config fonts-dejavu-core libfontconfig1 libgd3 libjbig0 libtiff5 libvpx1 libxpm4 libxslt1.1 nginx nginx-common nginx-full
    0 upgraded, 12 newly installed, 0 to remove and 0 not upgraded.
    Need to get 3,550 kB of archives.
    After this operation, 8,666 kB of additional disk space will be used.
    Do you want to continue? [Y/n] y

By choosing "y" nginx and all needed packages will be installed.

You can check the installation with a browser. Go to the IP address of
your Raspberry pi, in our case
<a href="http://192.168.0.35/" class="external free" target="_blank"
rel="nofollow noreferrer noopener">http://192.168.0.35/</a> We should
see a message like:

    Welcome to nginx on Debian!
    If you see this page, the nginx web server is successfully installed and working on Debian. Further configuration is required.
    For online documentation and support please refer to nginx.org
    Please use the reportbug tool to report bugs in the nginx package with Debian. 
    However, check existing bug reports before reporting a  new bug.
    Thank you for using debian and nginx.

#### Starting and stopping Nginx

After installation Nginx will automatically be started. You can:

- Stop Nginx: sudo service nginx stop
- Start Nginx: sudo service nginx start
- Restart Nginx: sudo service nginx restart

### Configure Nginx

#### Global Nginx configuration

In the global configuration of Nginx we can configure default caching
etc. The Raspberry Pi 3 uses 1.2 GHz 64-bit **quad-core** ARM Cortex-A53
processor. If you have an earlier version with less CPU cores, then you
should use

    sudo nano /etc/nginx/nginx.conf

to change the "worker_processes" to fit the amount of CPUs of your
device. By default it's configured as

    worker_processes 4;

so for Raspberry Pi 3 you don't have to change it.

After changing the Nginx configuration or virtual domain configuration,
you have to do a

    sudo nginx reload

to make the changes effective.

#### Virtual Domains

It's possible to run multiple Joomla websites on the same server using
virtual domains.

Put every website in a separate folder in the default webroot /var/www/
for example:

- /var/www/example.com/
- /var/www/voorbeeld.nl/

<!-- -->

    sudo mkdir /var/www/example.com
    sudo mkdir /var/www/voorbeeld.nl

For every site we will create a virtual domain which is basically a text
file with domain specific information:

- /etc/nginx/sites-available/example.com

<!-- -->

    server {
    listen 80;
    server_name example.com www.example.com;
    root /var/www/example.com;

    access_log /var/log/nginx/example.com.access_log;
    error_log /var/log/nginx/example.com.error_log info;

    location / {
      index index.php index.html index.htm;
      }
    }

- /etc/nginx/sites-available/voorbeeld.nl

<!-- -->

    server {
    listen 80;
    server_name voorbeeld.nl www.voorbeeld.nl;
    root /var/www/voorbeeld.nl;

    access_log /var/log/nginx/voorbeeld.nl.access_log;
    error_log /var/log/nginx/voorbeeld.nl.error_log info;

    location / {
      index index.php index.html index.htm;
      }
    }

We need to enable every site by linking from /etc/nginx/sites-enabled/
to the virtual domain in "sites-available". We create a symbolic link
for each virtual domain:

    sudo ln -s /etc/nginx/sites-available/example.com /etc/nginx/sites-enabled/example.com
    sudo ln -s /etc/nginx/sites-available/voorbeeld.nl /etc/nginx/sites-enabled/voorbeeld.nl

To make this virtual domain configuration effective, we do

    sudo nginx reload

and when everything has been configured correctly it will respond:

    Reloading nginx configuration: nginx.

## Database

We can install MariaDB or MySQL; Joomla will work with both. Let's
install MariaDB with:

    sudo apt-get install mariadb-server

During the installation you've to add a password for the **root** user.
Lets create a **database password**, for example
**correcthorsebatterystaple**.

Finally let's improve the security of our MariaDB installation by
removing root accounts that are accessible from outside the local host,
anonymous-user accounts and the test database. We can do that with

    mysql_secure_installation

## PHP

For PHP we will install the **php-fpm** (FastCGI Process Manager) that
runs as a daemon and receives Fast/CGI requests. Furthermore we will
install **php5-mysql** which is a module for MySQL database connections
directly from PHP scripts.

more recent php7 should be installed with

    sudo apt-get install php-fpm php-mysql

Now we need to let Nginx know that it should use php-fpm for .php files.
We add a couple of lines to our virtual domains:

    sudo nano /etc/nginx/sites-available/example.com

add:

    location ~ \.php$ {
    fastcgi_pass unix:/var/run/php/php7.0-fpm.sock;
    fastcgi_index index.php;
    include fastcgi_params;
    }

Test it by creating the following PHP file

    sudo nano /var/www/example.com/test.php

We use a browser to test if we see the PHP configuration page at
<a href="http://192.168.0.35/example.com/test.php" class="external free"
target="_blank"
rel="nofollow noreferrer noopener">http://192.168.0.35/example.com/test.php</a>

## Joomla!

- to do

<!-- -->

    sudo wget https://github.com/joomla/joomla-cms/releases/download/3.6.3/Joomla_3.6.3-Stable-Full_Package.zip
    sudo unzip -x Joomla_3.6.3-Stable-Full_Package.zip

## Connecting Raspberry Pi to Internet

We want people on the internet to be able to visit our Joomla website on
our Raspberry Pi. In order to do that we need to **configure our
Internet router** to forward all **incoming traffic** on port 80 **to
our Raspberry Pi**.

Use your web browser to connect to the Web Interface of your router. A
router is usually located on the first number of your IP range, in our
case on 192.168.0.1. In our router we configure **Port Forwarding**:

- External IP Address: 0.0.0.0
- External Start Port: 80
- External End Port: 80
- Internal IP Address: 192.168.0.35 ( = our Raspberry Pi)
- Internal Start Port: 80
- Internal End Port: 80
- Protocol: TCP

Make sure that it is enabled.

If everything is working correctly then you should see your own Joomla
website on the Raspberry Pi by visiting your external IP address (Find
your external IP address with a tool like
<a href="http://www.whatsmyip.org/" class="external text"
target="_blank" rel="nofollow noreferrer noopener">whatsmyip.org</a>).

### Using a domain name

Let's assume that our external IP address is 42.42.42.42. Let's also
assume that we have registered a domain name called example.com. We
would like to serve our Joomla site on our Raspberry Pi to visitors
visiting example.com. If your domain name registrar gives us the
possibility to configure the **Domain Name System (DNS)** server, then
we'll need to create an **MX record** in the DNS that points our
**domain name to** our **IP address** 42.42.42.42. Note that it can take
up to 24 hours till all internet providers will redirect the traffic of
their customers to the configured MX record.

### Static IP address

Most routers will keep assigning the same internal IP address to your
Raspberry Pi. Sometimes it's better to configure your Raspberry Pi to
use a static IP address:

    sudo nano /etc/network/interfaces

change

    iface eth0 inet static 

to

    iface eth0 inet static 
    address 192.168.0.35 
    netmask 255.255.255.0
    gateway 192.168.0.1

The gateway is the IP address of your router. You can also find it using

    route

# External links

- <a href="https://raspberrypi.org" class="external text" target="_blank"
  rel="nofollow noreferrer noopener">Raspberry Pi Foundation</a> (RPF) -
  official website and forums
- <a href="http://elinux.org/RaspberryPiBoard" class="external text"
  target="_blank" rel="nofollow noreferrer noopener">Raspberry Pi Wiki</a>,
  supported by the RPF
- Video of presentation
  <a href="https://youtu.be/u2MFQCoexD0" class="external text"
  target="_blank" rel="nofollow noreferrer noopener">Joomla on Raspberry
  Pi (with Nginx)</a> at Joomladay Germany 2013 in Nuremberg, Germany
