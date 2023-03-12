<!-- Filename: Copying_a_Joomla_website / Display title: Copying a Joomla website -->

<span id="main-portal-heading">Tutorial  
Copying a Joomla! website</span>

  
Copying a Joomla! website is a two-part process: you must copy the files
and you must copy the database (which is where the content is stored).
Copying the files and copying the database are separate operations.
Which you carry out first will depend on your particular circumstances
but in most cases it does not really matter. If your website is being
updated frequently and you need to take your website offline while the
copy takes place then you will probably want to perform the database
copy last so as to minimize downtime.

## Copying a website (common method)

#### Akeeba

- Akeeba Backup produces a .jpa file
- The .jpa file contains all the folders/files and database files.
- The .jpa file also contains an installer
- Kickstart.php (from Akeeba) unpacks the .jpa file
- You then run the installer and install your site like a Joomla install
- The installer changes the configuration for restoring to a different
  location and prompts for the new database details.

After you create the Database for your Joomla download and install
Akeeba, it can be download from <a
href="https://extensions.joomla.org/extensions/extension/access-a-security/site-security/akeeba-backup/"
class="external text" target="_blank" rel="noreferrer noopener">Joomla
extension directory</a>. There is a link to full instructions there as
well.

### Copying the files with FTP

One method of copying the files from one Joomla! installation to another
is to use standard desktop FTP software to first download all of the
files comprising your Web site from their location on your Web server,
then upload these files to the location of the new Joomla! installation.
Depending on where you're placing the copy of your Joomla! site, the new
location could be a different directory on the same Web server, or it
could be a new location on a completely different Web server. When
copying a Joomla installation on the same server (i.e. for testing
purposes), it is advisable to use a sub domain rather than a sub
directory. This will avoid errors and possible issues in running both
installations in unison.

It is important to maintain the same directory structure for all of your
folders and files as you move them from one location to another.
Fortunately, desktop FTP software will handle this automatically as you
upload and download sets of files and folders. (Your FTP software should
contain Help documentation which explains FTP and how to use the FTP
software interface). Note that after you move the files from one
location to another, you may still need to edit Joomla! configuration
files to get your copy of Joomla! working at the new location; you may
also need to change settings for aspects of your Web server to get the
copy of your Joomla! site working.

In rare instances, a file may become corrupted during an FTP transfer,
where only part of the file is successfully transmitted. If you
encounter strange or unexpected errors with your new Joomla!
installation after you copy over the files, you may want to try
re-uploading your files in case of corruption during transfer.

#### Download files from server to your computer

1.  Use FTP software (e.g. FileZilla) to connect to the server
2.  Select the directory you want to download (mostly /public_html/ or
    /htdocs/)
3.  Right click + select files/folder to download, or drag + drop the
    folder from the "Remote site" view to the "Local site" view
4.  The downloading of the remote files will start
5.  After you've downloaded the files, check the "Failed transfers" to
    see if there weren't any errors

#### Upload files from your computer to a server

1.  Make sure that configuration.php has the right settings for the
    server (especially: localhost, database, database user, database
    password, log_path, tmp_path)
2.  Use FTP software (e.g. FileZilla) to connect to the server
3.  Select the directory you want to upload, and to where (mostly to
    /public_html/ or /htdocs/)
4.  Right click + select files/folder to upload, or drag + drop the
    folder from the "Local site" view to the "Remote site" view
5.  The uploading of the local files to the remote server will start
6.  After you've uploaded the files, check the "Failed transfers" to see
    if there weren't any errors

### Copying the database with phpMyAdmin

The phpMyAdmin tool can be used to export and import a database,
providing a simple way to duplicate a copy of a database using a
different name on our servers.

#### Exporting a copy of the database to your computer

1.  Login to the database that you want to duplicate using phpMyAdmin
2.  Click the database name on the left-hand side of the page
3.  Select the Export tab
4.  Select the Save as file option
5.  Click Go

You'll then be prompted to save the database file on your personal
computer.

#### Importing the copy into a new database

You'll first need to create the new, empty database on your server using
the account control panel. It needs to be UTF8 (utf8_general_ci). After
the new database has been created:

1.  Login to the new database using phpMyAdmin
2.  Click the database name on the left-hand side of the page
3.  Select the Import tab
4.  Click the Browse button under "File to import", then select the
    database file from your computer
5.  Click Go to import the database

**Hint:** If you see a "No database selected" error, it's probably
because you forgot to first click on the database name in the left-hand
column.

### Changing configuration.php

In order to get Joomla to work on the new server, you should make the
necessary changes in configuration.php to reflect the new server
settings. You should check/edit the following to

       var $host = 'localhost'; // usually "localhost". If it's different for your server then your hosting provider should be able to tell you that.
        var $user = 'the_db_username';
        var $db = 'the_databasename';
        var $password = 'the_db_password';
            var $live_site = ''; // is usually empty.
            var $cookie_domain = ''; // Should be empty.

Joomla will work, even if \$log_path and \$tmp_path are wrong, though
you won't be able to install extensions. Login into the back-end of your
new Joomla site.

Go to: System \> System Information \> Directory Permissions.  
Look at the bottom 4 rows:

    cache (Cache Directory) Writable
    administrator/cache (Cache Directory)  Writable
    /var/www/some/other/folder/example.com/logs/ (Log directory) Unwritable
    /var/www/some/other/folder/example.com/tmp (Temp directory)  Unwritable

If the `$log_path` and `$tmp_path` are "Unwritable", you'll need to
change the values in `configuration.php`.

Use the values of the "Cache Directory" without the "/cache/" part and
change `$log_path` and `$tmp_path` to

       var $log_path = '/var/www/example.com/logs';
       var $tmp_path = '/var/www/example.com/tmp';

If the Directory Permissions show that `$log_path` and `$tmp_path` are
"Writable", then you should be able to install extensions.

## Copying a website using SSH command line (method for experienced users)

### Copying the files using a compressed archive file method

Copying a large number of individual files using FTP can sometimes be
unreliable. If you have command-line access to the both source and
destination systems then you can create a compressed archive file
containing all the files on the source system, then transfer that single
file to the destination system where it can be decompressed.

#### Creating an archive file

On Unix-style systems (eg. Linux) you can use the **gzip** program to
create .zip files, or the **tar** program to create .tar.gz or .tar.bz2
files. For detailed instructions type **man gzip** or **man tar** at the
command line. For example,

    tar cvfz joomlabackup.tar.gz /path-to-joomla

will create a gzip-compressed archive file, called
*joomlabackup.tar.gz*, containing all of the files in your Joomla!
installation.

**Important note!** You need to make sure you are NOT in the folder you
are trying to backup when you run the tar command or you will create an
endless loop.

#### Extracting an archive file

Having copied the archive file to the destination system, you now need
to unpack it. Use the equivalent command that you used to create the
archive file. For example, to unpack the archive file created in the
example above, enter

    cd /path-to-joomla
    tar xvfz joomlabackup.tar.gz

If the user or group IDs are not the same between the source and
destination systems, then you will need to amend the ownership of the
files you just extracted. For example, on an Apache system, you might
need to enter the command

    cd /path-to-joomla
    chown -R www-user:www-group *

so that Apache has ownership of the Joomla! files.

*Please ask your hosting provider for the correct group and user names,
`www-group` and `www-user`, on your system.*

### Copying the database with MySQL command line method

Usually you run `mysqldump` to create a database copy:

    $ mysqldump -u user -p db-name > db-name.out

Copy `db-name.out` file using sftp/ssh to remote MySQL server:

    $ scp db-name.out user@remote.box.com:/backup

Restore database at remote server (login over ssh):

    $ mysql -u user -p db-name < db-name.out
