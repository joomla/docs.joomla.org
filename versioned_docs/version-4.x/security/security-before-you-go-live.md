<!-- Filename: Security_-_Before_you_go_live / Display title: Security - Before you go live -->

## Security FAQ — Before You Go Live

This security list has been compiled from several sources. Some of these
sources are linked at the bottom of this article. As such you may find
duplicate suggestions. Don't skip anything because of this!

This list does not provide instructions. It is only a list for you to
check off each item as you perform the tasks. This list might generate
questions. Please post to the Joomla.org
<a href="https://forum.joomla.org/viewforum.php?f=813%7C"
class="external text" target="_blank" rel="noreferrer noopener">Security
forum</a>

## During Installation

Change database tables prefix from *jos\_* to anything else. When
changing this, do not use any *reserved* prefixes such as *bak\_*

- You may use numbers and letters and **yes**, you may use more than
  three characters. *b37qm2\_* is a valid name.
- Don't forget the underscore "\_". This makes it **much** easier to
  read your table entries.

## Joomla Backend

- It does not matter if your host does backups. Do it yourself and store
  copies at a location other than the server.
- Backup up often! You would be amazed at how many sites **never**
  perform regular backups.

**Note** The *Akeeba Backup* extension is highly recommended for
backups. You will find alternatives under the Joomla Extension Directory
<a href="https://extensions.joomla.org/tags/backup/"
class="external text" target="_blank" rel="noreferrer noopener">Backup
Category</a>.

## PHP

1.  Ask your hosting company if they offer PHPsuExec, php_suexec or
    suPHP.
2.  Use *php.ini* files if your server allows. With this you can disable
    functions that are not needed or dangerous.
3.  *register_globals* = 0 (off). Many servers default this to ON.
4.  *expose_php* = 0 (off)
5.  *safe_mode* = 0 (off)
6.  Use *open_basedir*. It limits which files/folders can be opened.

## Files

1.  Move *configuration.php* outside of your public directory.
2.  On file permissions, in general never use *777*. Use *755* for
    directories and *644* for files. See FAQ: [Verifying
    permissions](https://docs.joomla.org/Verifying_permissions "Verifying permissions")

## Others

1.  Change username *admin* to anything else in Joomla, PhpBB, and
    anywhere else it used.
2.  Instead of renaming, you can also create a second super user account
    and remove the first. This way, the user id will be different.
3.  Change username or add password to username *root* in PhpMyAdmin.
    Default is **no** password! This is not usually an issue on remote
    servers however if you have a local server it may be.
4.  Remove unused templates, extensions and unneeded files from your
    site. This includes compressed archives.
5.  Check Joomla.org Vulnerable Extensions List (VEL).
6.  Check regularly for updates for Joomla, PHP, SQL and **every**
    extension you use.
7.  Avoid encrypted code in extensions.
8.  Use some form of intrusion detection either through a cron job or an
    extension (such as Eyesite).
9.  Check your log files **often** for unusual activity.
10. Test your site for weaknesses or hire someone to perform this for
    you. Make sure you tell your host first what you are doing or you
    may get your site removed from the server!
11. Use *.htaccess* to add extra protection to your administrator
    directory or use an extension (such as kSecure).
12. Get an SSL certificate for financial transactions and other
    sensitive data exchange.
13. Change the paths (directories) where your log, temp (*.tmp*) files
    are stored. Don't just move them, you have to change the setting in
    Global Configuration as well. You also have to ensure your new paths
    fall under the scope of *open_basedir*.
14. Don't save FTP user and password in your FTP tool of choice on your
    workstation (especially if you are on Windows).
15. If you don't need them, don't enter the FTP user/password or remove
    them.

**NOTE** If your Administrator password is changed by hackers (or you
forget it), follow this procedure to restore it: <a
href="https://docs.joomla.org/How_do_you_recover_your_admin_password%3F"
class="mw-redirect" title="How do you recover your admin password?">How
do you recover your admin password?</a>

## Additional Reading

- <a
  href="http://old.marcofolio.net/joomla/7_tips_to_optimize_joomla_security.html"
  class="external text" target="_blank"
  rel="nofollow noreferrer noopener">7 Tips to Optimize Joomla!
  Security</a> from Marco Folio
- <a
  href="http://old.marcofolio.net/features/how_you_can_prevent_an_sql_injection.html"
  class="external text" target="_blank"
  rel="nofollow noreferrer noopener">How You Can Prevent an SQL
  Injection</a> by Marco Folio
- <a href="https://docs.joomla.org/Category:Security_Checklist"
  class="external text" target="_blank"
  rel="noreferrer noopener">Joomla.org Security Checklist</a>
- <a href="https://docs.joomla.org/Vulnerable_Extensions_List"
  class="mw-redirect" title="Vulnerable Extensions List">Joomla.org
  Vulnerable Extensions List</a>
