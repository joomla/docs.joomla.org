<!-- Filename: Backup_Basics_for_a_Joomla!_Web_Site / Display title: Backup Basics for a Joomla! Web Site -->

Always keep a recent backup of your site. Accidents happen, but there
are many other reasons to have your backup files handy before the need
arises. **N.B. backups should not be used to restore a hacked site
because the hack could have been on the site for some time could have
been backed up with the site.**

The causes of data loss are many. Joomla sites can be compromised by
malicious attackers if the site administrator has not paid attention to
security or in cases when hackers bypass the best security. Joomla! is
designed for teamwork, and even good editors can make an error that
harms the site.

There are many reasons website administrators need to revert the site to
a previous working state.

Practice both backup and restore. Nobody should wait for an emergency to
test their skills and tools for dealing with an emergency. Very often
people create a backup of something that is empty or corrupted and
discover that none of their critical data was backed up. Nobody likes a
ship that sinks with empty lifeboats. It's also wise to practice getting
people out of the lifeboats and into a new working system.

Having a backup is not just about accidents; a person well versed in
backup can help with safe development of new features. Backup and
restore help web managers create a staging website where new changes can
be practiced without risking the production website. The clone can be
created on a local machine acting as a test server or any other folder
or web hosting account supporting the SQL and PHP versions used by the
site you've backed up.

It's easy for anyone to mix up their live site and staging site, so
change the color of your staging site template to remind developers that
the staging site is not live to the public.

## Back Up a Joomla Website Using Akeeba (Common method)

This is the preferred method using the Akeeba Backup Extension.

- Akeeba Backup produces a *.jpa* file.
- The compressed *.jpa* file contains all the Website's files and the
  content of the database.
- The *.jpa* file also includes an installer.
- Akeeba's *kickstart.php* unpacks the *.jpa* file.
- You then run the installer and install your site like a Joomla
  install.
- The installer changes the configuration for restoring to a different
  location and prompts for the new database details.

You can download the Akeeba Backup extension from the <a
href="https://extensions.joomla.org/extensions/extension/access-a-security/site-security/akeeba-backup/"
class="external text" target="_blank" rel="noreferrer noopener">Joomla
extension directory</a>. There is a link to full instructions there as
well.

## Backup Two-Part Method

There are two parts to a complete back up of your Joomla site. They are:

1.  The database information, most often found in your MySQL database.
2.  The files and folders on your website, as hosted on most static HTML
    websites.

If you do not backup your files and database, your backup is incomplete.

### Database Backup

One of the first steps to backup your Joomla site is to close the site
to the public, backup the files and then re-open the site. The steps
from <a href="https://docs.phpmyadmin.net/en/latest/index.html"
class="external text" target="_blank"
rel="nofollow noreferrer noopener">the phpMyAdmin documentation</a> omit
this much needed operation. Go to **Joomla Administrator **→** Global
Configuration **→** Site** tab, set *Site Offline* = 'Yes*.*

This will then change the *configuration.php* file in the root of your
Joomla website.

An administrator will need to use your hosting control panel to view
that file or use FTP to download and view the file. Inside the
*configuration.php* file you can find the name of your database that
will need backing up.

Look for the line with code resembling `var $db = 'x1234';` or
`public $db = 'x1234';` Where *x1234* is the name of your database.

Using the logon information for your server or hosting company open the
phpMyAdmin tool. Open the database and look for the table named *users*
and then click the icon to *view* the data in that table.

You should see the names of staff who have accounts on your Joomla site.
This view provides you the confidence that you are about to backup the
correct database.

Click the *export* tab, then *Go*.

Your browser will download your database into an SQL file.

Find where you browser put that file, then move the file to a much more
secure drive or location.

Server SQL databases can be backed up without phpMyAdmin and instead
using the SQL command line. If you know how to do that, you're most
likely not in need of this documentation.

It is recommended that you back up the database at least twice per week
or even everyday (and more) if you have an active site.

### File System Backup

Continue with your site offline, see above. Your Joomla folder and files
can be backed up by downloading them with an FTP utility or using the
file manager of your web hosting company. Both of these file options
work, neither is better.

FTP tools move thousands of Joomla files and use more time. The FTP
process can be slow and interrupted. Most hosting companies provide a
control panel for taking thousands of files in one folder and then
creating a zip file very quickly.

This means your site is offline for a shorter amount of time and you
have only one zip file. Go to your hosting control panel and look for
their file manager icon.

If you use your hosting file manager, practice using that interface to
select your server folder and creating a zip file. Download the zip file
locally and then expand it locally to to see what files are inside that
zip file. This option also let's you expand the same zip file for
restoration to a staging site.

Backing up the Joomla files with FTP is no different than backing up a
static HTML website. Download all the files and folders that exist in
the main Joomla directory. The downloaded location is a folder on your
local computer. Be sure that the file and directory structure remains
the same as it is in the live site. When you restore the files, you will
use the FTP utility to upload the files to a new server.

**As soon as you've downloaded your files, via zip or FTP, change your
site to be online.**

## More Backup Documentation

Most administrators of a Joomla website have access to their MySQL data
using the GUI interface called phpMyAdmin, see <a
href="https://docs.phpmyadmin.net/en/latest/faq.html#how-can-i-backup-my-database-or-table"
class="external text" target="_blank"
rel="nofollow noreferrer noopener">How can I backup my database or
table?</a> for more information.

There are several automated backup extensions for Joomla! located in the
<a href="https://extensions.joomla.org/" class="external text"
target="_blank" rel="noreferrer noopener">Joomla! Extensions
Directory</a>. Here is a link for <a
href="https://extensions.joomla.org/extension/?searchall=backup&amp;controller=filter"
class="external text" target="_blank" rel="noreferrer noopener">Joomla!
Backup Extensions</a>.

When servers are hosted in the same building as the staff, the web
administrators should make extra care to store the backup copies of the
database and files in a different building. Fire, theft, water or other
damage often wipes out the live website **and** backups. On a regular
basis the web administrators should burn both the database and files to
a CD or save to an external hard drive off site.

## Special Notes

### Two Factor Authentication (2FA)

If you use two factor authentication (available since Aug 2014) and you
are locked out of your site, you can rename the folder
*plugins/twofactorauth* to *twofactorauth.BAK* and log in to your site's
back-end. Then disable all plugins under the *twofactorauth* group.
Finally, rename the *plugins/twofactorauth.BAK* folder of your site to
*twofactorauth*.

- See also the [Two Factor
  Authentication](https://docs.joomla.org/J3.x:Two_Factor_Authentication "Special:MyLanguage/J3.x:Two Factor Authentication")
  tutorial.
