<!-- Filename: FreeBSD_Installation / Display title: FreeBSD Installation -->

This article is a guide detailing how to install Joomla! Content
Management System on a FreeBSD based system.  
This guide details installation of the following application versions of
the FAMP stack:  
  
FreeBSD 13.0  
Apache 2.4  
MySQL 8.0  
PHP 8.0  
Joomla! 3.9.x  
  
NOTE: Intended as a quick-start installation guide, this article does
not address optimal [security
settings](https://docs.joomla.org/Security_Checklist "Special:MyLanguage/Security Checklist"),
performance tuning, etc.  
  

## Preparations

Open a terminal and log on to the FreeBSD system as root.

If you will be installing the required ports using `pkg` then skip to
the next section to begin the installation.

If you intend to compile the ports from sources then ensure the file
`/etc/make.conf` exists and contains DEFAULT_VERSIONS that reflect the
versions you intend to install on the system.  

    DEFAULT_VERSIONS+= php=8.0 python=3.9 python3=3.9 perl5=5.32 mysql=8.0

## Installing Apache Web Server

Execute the following command to install apache24 as your webserver.  
`pkg install apache24` or  
`make -C /usr/ports/www/apache24/ install clean -DBATCH`

Add the following lines to `/etc/rc.conf`:

    apache24_enable="YES"
    apache24_http_accept_enable="YES"

Start the apache server.  
`service apache24 start`  
  

## Installing PHP

The following commands will install PHP 8.0 to your system.  
`pkg install php80` or  
`make -C /usr/ports/lang/php80 install clean -DBATCH`  

Also install Apache PHP module mod_php80.  
`pkg install mod_php80` or  
`make -C /usr/ports/lang/php80 install clean -DBATCH`  

As instructed by the post-install message, add the following lines to
`/usr/local/etc/apache24/httpd.conf`:  

        SetHandler application/x-httpd-php


        SetHandler application/x-httpd-php-source

Also modify the following line:  

    DirectoryIndex index.html

changing it to:  

    DirectoryIndex index.php index.html

## Installing Required PHP Extensions

Joomla requires the following PHP extensions:

- CURL
- MYSQLI
- SESSION
- SIMPLEXML
- XML
- XMLREADER
- ZIP
- ZLIB

To install the required extensions via pkg:  
`pkg install php80-curl php80-mysqli php80-session php80-simplexml php80-xml php80-xmlreader php80-zip php80-zlib`  

To simplify installation from sources, the php80-extensions meta-port
can be used:  
`make -C /usr/ports/lang/php80-extensions/ config`  
select the required extensions and deselect all others then:  
`make -C /usr/ports/lang/php80-extensions/ install clean -DBATCH`  

Optimally to configure the php80-mysqli extension to use MySQL 8.0
server's default authentication mechanism instead of the php80-mysqli
package default authentication:  
`make -C /usr/ports/databases/php80-mysqli/ config`  
deselect 'Use MySQL Native Driver'  
  
NOTE: When configured this way, the php80-mysqli port will depend on
mysql80-client, which will also be installed. Significant compilation
time can optionally be saved by first installing mysql80-client via pkg
prior to compiling php80-mysqli:  
`pkg install mysql80-client`  
  
Compile and reinstall php80-mysqli:  
`make -C /usr/ports/databases/php80-mysqli/ `**`reinstall`**` clean -DBATCH`  

## Configuring PHP

Create a new php.ini file by copying one of the sample files.  
`cd /usr/local/etc/`  
`cp php.ini-production php.ini`  

Open and edit `/usr/local/etc/php.ini` and adjust the following values:

    output_buffering = Off
    post_max_size = 20M
    upload_tmp_dir = /usr/local/www/apache24/data/tmp/
    upload_max_filesize = 20M

After installing and configuring PHP restart the Apache service.  
`service apache24 restart`  
  

## Installing MySQL Database Server

Execute the following commands to install MySQL 8.0 server.  
`pkg install mysql80-server` or  
`make -C /usr/ports/databases/mysql80-server/ install clean -DBATCH`  
  

Add the following line to `/etc/rc.conf`:  

    mysql_enable="YES"

NOTE: MySQL 8 server initially defaults to creating users using
authentication. Joomla will connect to it's database using a user with a
if the php80-mysqli extension is configured and compiled from source.
More details provided in previous section: [Installing Required PHP
Extensions](https://docs.joomla.org/FreeBSD_Installation#Installing_Required_PHP_Extensions "FreeBSD Installation").

If you prefer to use authentication,  
edit `/usr/local/etc/mysql/my.cnf` and add the following line to the
`[mysqld]` section:  

    default_authentication_plugin   = mysql_native_password

Start the MySQL server.  
`service mysql-server start`  
  
Upon initial installation, the MySQL 8.0 server's root user has no
password.  
  
Login to the mysql server on the command line as root and set your
desired password.  
`mysql -u root`  
root@localhost
\[(none)\]\>`ALTER USER 'root'@'%' IDENTIFIED BY 'password';`  
  
Create a database for the Joomla web site with your preferred database
name.  
root@localhost \[(none)\]\>`create database joomla;`  
  
Create a dedicated MySQL user with your preferred username and
password.  
root@localhost
\[(none)\]\>`create user 'joomla'@'%' identified by 'password';`  
  
Grant the user all privileges to the Joomla database.  
root@localhost
\[(none)\]\>`grant all privileges on joomla.* to 'joomla'@'%';`  
root@localhost \[(none)\]\>`flush privileges;`  
  
`exit` to close the connection to MySQL server.  
  

## Installing Joomla! CMS

Download the
<a href="https://downloads.joomla.org/latest" class="external text"
target="_blank" rel="noreferrer noopener">Joomla installation
package</a> ending with .zip  
Unzip the file to apache's data directory.  
`unzip Joomla_*.zip -d /usr/local/www/apache24/data/`  

Change ownership of the data directory and everything in it to 'www'
thus allowing the Joomla! configuration script to write into this
directory.  
`chown -R www /usr/local/www/apache24/data/`  

At this point you should be able to begin installing and configuring
Joomla!  

Open and direct your web browser to one of the following...  
If browsing directly on the server:
<a href="http://localhost" class="external free" target="_blank"
rel="nofollow noreferrer noopener">http://localhost</a>  
If browsing from a remote system: http:// or http:// (if configured)  

You will see the Joomla Web Installer page.  

  
In step 1 Configuration:  
fill in the fields as required.  

  
In step 2 Database:  
Username:  
Password:  
Database name:  

  
Leave the other settings unchanged:  
Database Type: MySQLi  
Hostname: localhost  
Table Prefix: unchanged  

  
The final step of the web installer will be to delete the installation
folder.  
Once that is done you can browse to your newly installed Joomla! web
site!  
  

## Post Installation

Research how to optimally configure and harden the security of your
Joomla! FAMP web server!  
  

## Troubleshooting

Configuration **changes** made to either apache's **httpd.conf** or
PHP's **php.ini** will require that the apache service be restarted for
the changes to take effect.  
`service apache24 restart`  

  
Apache's error log is located at `/var/log/httpd-error.log`  
MySQL log files are located in `/var/db/mysql/` and are named `.err` and
`-slow.log` by default.  
MySQL databases are also located in `/var/db/mysql/`  
