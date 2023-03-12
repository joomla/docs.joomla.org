<!-- Filename: Security_FAQ / Display title: Security FAQ -->

This security list has been compiled from several sources. Some of these
sources are linked at the bottom of this article. As such you may find
duplicate suggestions. **Don't** skip anything because of this!

This list for the main part does not provide instructions. It is only a
list for you to check off each item as you perform the tasks.

This list might generate many questions. Please post to the
<a href="https://forum.joomla.org/viewforum.php?f=813"
class="external text" target="_blank" rel="noreferrer noopener">Security
in Joomla! 4.x</a> or the
<a href="https://forum.joomla.org/viewforum.php?f=714"
class="external text" target="_blank" rel="noreferrer noopener">Security
in Joomla! 3.x</a> forums.

## Security Checklist

1.  Change username *admin* to anything else in Joomla, phpBB, and
    anywhere else it used.
2.  Change database tables prefix from *jos\_* to anything else.
3.  Change username or add password to username *root* in phpMyAdmin.
    Default is **no** password! This is not usually an issue on remote
    servers. However if you have a local server, it may be.
4.  It does not matter if your host does backups. Do it yourself and
    store them anywhere other than the server.
5.  Backup up often! You would be amazed at how many site owners
    **never** perform regular backups. Don't be one of those persons.
6.  Test your backup. Verify that your backup procedure works.
7.  Remove unused templates, extensions and unneeded files from your
    site. This includes compressed archives.
8.  Check <a
    href="https://extensions.joomla.org/vulnerable-extensions/vulnerable/"
    class="external text" target="_blank" rel="noreferrer noopener">Joomla
    Vulnerable Extensions List (VEL)</a>
9.  Check regularly for updates for Joomla, PHP, SQL and **every**
    extension you use.
10. Avoid encrypted code in extensions.
11. Use some form of intrusion detection either through a cron job or an
    extension (like Eyesite).
12. Check your log files OFTEN for unusual activity.
13. Test your site for weaknesses or hire someone to perform this for
    you. Make sure you tell your host first what you are doing or you
    may get your site removed from the server!
14. Ask your server if they offer PHPsuExec, php_suexec or suPHP.
15. Use *php.ini* files if your server allows. With this you can disable
    functions that are not needed or dangerous.
16. *register_globals = 0* (off) Many servers default this to ON.
17. *expose_php = 0* (off)
18. *safe_mode = 0* (off)
19. Use '.htaccess' to add extra protection to your Administrator
    directory or use an extension (like kSecure).
20. Move *configuration.php* outside of your public directory.
21. Get an SSL certificate for financial transactions and other
    sensitive data exchange.
22. Use *open_basedir*. It limits which files/folders can be opened.
23. Change the paths (directories) where your *log*, *temp* (*tmp*)
    files are stored. Don't just move them, you have to change the
    setting in Global Configuration as well. You also have to ensure
    your new paths fall under the scope of *open_basedir*.
24. If your Administrator password is changed by hackers (or you forget
    it) follow this procedure to restore it: <a
    href="https://docs.joomla.org/How_do_you_recover_or_reset_your_admin_password%3F"
    class="external text" target="_blank" rel="noreferrer noopener">How do
    you recover or reset your admin password?</a>

## More Tips

<a
href="http://old.marcofolio.net/joomla/7_tips_to_optimize_joomla_security.html"
class="external text" target="_blank"
rel="nofollow noreferrer noopener">7 tips to optimize Joomla!
security</a>

<a
href="http://old.marcofolio.net/features/how_you_can_prevent_an_sql_injection.html"
class="external text" target="_blank"
rel="nofollow noreferrer noopener">How you can prevent an SQL
injection</a>

[Joomla! Security Checklist
Category](https://docs.joomla.org/Category:Security_Checklist "Category:Security Checklist")

<a
href="https://extensions.joomla.org/vulnerable-extensions/vulnerable/"
class="external text" target="_blank" rel="noreferrer noopener">Joomla
Vulnerable Extensions List (VEL)</a>
