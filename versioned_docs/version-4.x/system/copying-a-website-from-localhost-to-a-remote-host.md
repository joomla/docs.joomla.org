<!-- Filename: Copying_a_website_from_localhost_to_a_remote_host / Display title: Copying a website from localhost to a remote host -->

  
When you are first trying out Joomla!, it is often recommended that you
install it on your local system. *localhost* for example with
<a href="https://en.wikipedia.org/wiki/XAMPP" class="external text"
target="_blank" rel="nofollow noreferrer noopener">XAMPP</a>, and get
your site running locally. Eventually you may want to copy this site to
your remote host. Fortunately, this is easy to do.

This article assumes you have installed Joomla! on your local computer,
you have created a website and you now wish to copy this website to your
remote host.

## Using Akeeba Backup to Move a Site (Preferred Method)

- Akeeba Backup produces a *.jpa* file.
- The *.jpa* file contains all the folders, files and the contents of
  the database.
- The *.jpa* file also contains an installer.
- The *kickstart.php* file from
  <a href="https://www.akeeba.com/products/akeeba-kickstart.html"
  class="external text" target="_blank"
  rel="nofollow noreferrer noopener">Akeeba</a> unpacks the *.jpa* file.
- You then run the *kickstart.php* program and install your site.
- The installer has an option to change the configuration for restoring
  to a different location.

Akeeba Backup can be downloaded from <a
href="https://extensions.joomla.org/extension/access-a-security/site-security/akeeba-backup/"
class="external text" target="_blank" rel="noreferrer noopener">Joomla
extension directory</a>. There is a link to full instructions there as
well.

## Alternate Method

### Create a Place on Your Remote Host to Install Joomla!

If this is a new site, it will just be your home directory. If you have
an existing site, for example *www.domain.com*, that you wish to keep
while you work with Joomla!, you may be able to create a subdomain, for
example, *mytest.domain.com* to hold your Joomla! site.

### Copy Files and Directories of Your Local Joomla Directory to the Remote Host

You have two methods:

1.  Upload all files by FTP
2.  Upload only a compressed file by FTP

#### Upload All Files by FTP

Normally, the easiest way to copy these files is using an FTP client
program, such as
<a href="https://filezilla-project.org" class="external text"
target="_blank" rel="nofollow noreferrer noopener">Filezilla</a>.

Select all files from the directory localhost. (With XAMPP, the
directory will be */xampp/www/directory*.) Upload to the remote host
HTML directory for a domain or to the remote host HTML subdirectory.

|                                                                     |                                                                       |                                                                          |
|---------------------------------------------------------------------|-----------------------------------------------------------------------|--------------------------------------------------------------------------|
| Dir LocalHost                                                       | Upload to Html Root                                                   | Or Upload Sub. Html Root                                                 |
| <img src="https://docs.joomla.org/images/0/0c/Filezilladircopy.png" 
 decoding="async" data-file-width="120" data-file-height="284"        
 width="120" height="284" alt="Select Dir." />                        | <img src="https://docs.joomla.org/images/6/6f/Filezilladirectory.png" 
                                                                       decoding="async" data-file-width="185" data-file-height="140"          
                                                                       width="185" height="140" alt="Dir Filezilla." />                       | <img src="https://docs.joomla.org/images/9/9c/Filezillasubdirectory.png" 
                                                                                                                                               decoding="async" data-file-width="185" data-file-height="140"             
                                                                                                                                               width="185" height="140" alt="Subdir Filezilla." />                       |

Select Dir Host and Upload to remote host or subdirectory remote host

#### Upload a Compressed File

Copying a large number of individual files using FTP can be unreliable.
If you have command-line access to the both source and destination
systems, you can create a compressed archive file containing all the
files on the source system. Then transfer that single file to the
destination system where it can be decompressed.

##### Creating an Archive File

On Unix-style systems such as Linux, you can use the
<a href="https://www.gnu.org/software/gzip/" class="external text"
target="_blank" rel="nofollow noreferrer noopener">Gzip program</a> to
create *.zip* files, or the
<a href="https://www.gnu.org/software/tar/" class="external text"
target="_blank" rel="nofollow noreferrer noopener">Tar program</a> to
create *.tar.gz* or *.tar.bz2* files. For detailed instructions, type
*man gzip* or *man tar* at the command line. For example,

     tar cvfz joomlabackup.tar.gz /path-to-joomla

will create a gzip-compressed archive file, called
*joomlabackup.tar.gz*. It contains all the files in your Joomla!
installation. Important note! You need to make sure you are **not** in
the folder you are trying to backup when you run the tar command or you
will create an endless loop.

##### Extracting an Archive File

Having copied the archive file to the destination system, you now need
to unpack it. Use the equivalent command that you used to create the
archive file. For example, to unpack the archive file created in the
example above, enter

    cd /path-to-joomla
    tar xvfz joomlabackup.tar.gz

If the user or group IDs are not the same between the source and
destination systems, you will need to amend the ownership of the files
you just extracted. For example, on an Apache system, you might need to
enter the command

    cd /path-to-joomla
    chown -R www-group.www-user *

### Copy the Contents of Your Local MySQL Database to the Host MySQL Database

In Joomla!, all the contents of the site (articles, menus, users, and so
on) are stored in the MySQL database. You need to copy this information
to the host database. This is done by creating an export file on your
local system and then importing this file into your host MySQL database,
as follows:

1.  Open phpMyAdmin on your local system by navigating to its URL with
    your browser. On your local system, this URL will normally be
    *//localhost/phpmyadmin*. Note: If you have a password on your
    database, you will be prompted for it.
2.  The phpMyAdmin screen will display as shown below. Select the Export
    link.

<img
src="https://docs.joomla.org/images/a/a0/Screenshotphpmyadmin_1.png"
decoding="async" data-file-width="794" data-file-height="402"
width="794" height="402" alt="ScreenShot Phpmyadmin." />

Select the database you want to export in the upper right-hand list. In
the example below, the database *joomla15* is selected. Keep all the
default options, including *SQL* as the export type.

<img
src="https://docs.joomla.org/images/2/25/Screenshotphpmyadmin_2.png"
decoding="async" data-file-width="791" data-file-height="275"
width="791" height="275" alt="ScreenShot Phpmyadmin." />

Check the *Save as file* box at the bottom of the screen and enter the
name of the export file, as shown below.

<img
src="https://docs.joomla.org/images/6/6f/Screenshot_phpmyadmin3.png"
decoding="async" data-file-width="505" data-file-height="83" width="505"
height="83" alt="ScreenShot Phpmyadmin." />

Press the *Go* button in the lower right corner. An *Open/Save/Cancel*
dialog will display. Press *Save* and select a folder to save the file
in. The export will complete and the file will be saved in the chosen
location.

1.  Open up the phpMyAdmin on the remote server.
2.  Select the *Import* tab.
3.  Click the *Browse* button under *File to import*. Then select the
    database file from your computer.
4.  Click *Go* to import the database.

At this point you have installed the database.

If you want to create a database copy, you can also use the MySQL
command line method. Usually you run *mysqldump* to create a database
copy:

    $ mysqldump -u user -p db-name > db-name.out

Copy db-name.out file using sftp/ssh to remote MySQL server:

    $ scp db-name.out user@remote.box.com:/backup

Restore the database at the remote server (login over SSH):

    $ mysql -u user -p db-name < db-name.out

### Configure the Site and Edit the *configuration.php* File

Manually edit *configuration.php* to tell Joomla! about your site. The
file *configuration.php* contains settings specific to your system. This
file was created for you when you installed Joomla! on your localhost.
The settings in the *configuration.php* file that you typically need to
change are shown below. This example is from a Windows XP localhost
system.

    var $log_path = 'C:\\xampp\\htdocs\\joomla15\\logs';
    var $tmp_path = 'C:\\xampp\\htdocs\\joomla15\\tmp';
    var $live_site = '';
    var $host = 'localhost';
    var $user = 'root';
    var $db = 'your_local_db_name';
    var $password = 'your_local_db_password';

Now at your remote host system, the settings in the *configuration.php*
file that you typically need to change are shown below:

    var $log_path = '/var/www/vhost/domain.com/home/html/logs';
    var $tmp_path = '/var/www/vhost/domain.com/home/html/tmp';
    var $live_site = '';
    var $host = 'name your remote host';
    var $user = 'your_user_db_name';
    var $db = 'your_db_name';
    var $password = 'your_db_password';

If you uploaded Joomla! files to a subdirectory, remember that you are
working on subdirectory. The settings that you need will be:

    var $log_path = '/var/www/vhost/domain.com/subdirectory/html/logs';
    var $tmp_path = '/var/www/vhost/domain.com/subdirectory/html/tmp';
    var $live_site = '';
    var $host = 'name your remote host';
    var $user = 'your_user_db_name';
    var $db = 'your_db_name';
    var $password = 'your_db_password';

At this point, your Joomla! website on your host should be operational
with the same information as your localhost site. If you installed it on
a subdirectory, navigate to that subdirectory to see or administer the
site.

http://mytest.domain.com/ (for navigation to the site)

http://mytest.domain.com/administrator (Login to the Joomla admin area
with your user and password that you had at your localhost
installation.)

and if you installed it on root directory, to see the site:

http://www.domain.com/ (for navigation to the site)

http://www.domain.com/administrator (login to admin area)
