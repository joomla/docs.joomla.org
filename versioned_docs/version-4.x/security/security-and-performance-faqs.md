<!-- Filename: Security_and_Performance_FAQs / Display title: Security and Performance FAQs -->

## Getting Started

### Is GNU and Open Source Software Worth the Costs and Risks?

It's difficult, if not impossible, to argue against the value
proposition of GNU and Open Source software. Due to zero licensing fees,
lower administrative overhead, high-quality code, security releases that
are distributed in minutes or hours rather than months or marketing
cycles, and free online support from thousands of like-minded developers
and users, GNU and Open Source offerings are often the best solution.
The math is really quite compelling:

|                                   |                      |          |
| --------------------------------- | -------------------- | -------: |
| **Applications**                  | **Industry Leader**  | **Cost** |
| GNU/Linux                         | Yes                  |        0 |
| Apache Web Server                 | Yes                  |        0 |
| MySQL Relational Database         | Yes                  |        0 |
| PHP Scripting Language            | Yes                  |        0 |
| Joomla! Content Management System | Yes                  |        0 |
| Thousands of Joomla Extensions    | Varies               |        0 |
| **Support**                       | **Relative Quality** | **Cost** |
| Joomla! Project Leadership Team   | High                 |        0 |
| Joomla! Forge                     | High                 |        0 |
| Joomla! Online Forums             | High                 |        0 |
| Joomla! Documentation             | Medium               |        0 |
| Thousands of Online Volunteers    | High                 |        0 |
| Paid Professional Support         | Widely Available     |        0 |
| **Total**                         |                      |    **0** |

### What is the Joomla! Administrator's Security Checklist?

The
<a href="https://docs.joomla.org/Security_Checklist_1_-_Getting_Started"
class="mw-redirect"
title="Security Checklist 1 - Getting Started">Security Checklist</a> is
a concise selection of the best tips and tricks from the many
contributors in the Joomla Security Forums. Review this list BEFORE you
install Joomla for the first time.

### What are the Top Ten Stupidest Joomla! Security Tricks?

A good question, and sadly one that many did not ask in time. We proudly
present the [Top 10 Stupidest Administrator
Tricks](https://docs.joomla.org/Top_10_Stupidest_Administrator_Tricks 'Top 10 Stupidest Administrator Tricks').

### How Do I Choose a Quality Hosting Provider?

The following is a short list of security-related requirements.
Depending on your specific needs, you may have many other security
requirements such as shell access, cron access, SSL server, etc.

-   **Choose \*NIX:** Joomla! requires at least PHP and MySQL to run.
    Because Apache/PHP/MySQL run best on UNIX or GNU/LINUX servers, choose
    a host that offers these options.
-   **Use Secure FTP:** Choose a host that requires SFTP (Secure FTP) for
    transferring files. This prevents others from snooping your user name
    and password from packets as they travel over the Internet.

<!-- -->

-   **Set PHP register_globals OFF:** The most security conscious hosts
    turn PHP's Register Globals directive OFF by default. The next best
    allow you to turn it off in local _.htaccess_ or _php.ini_ files. A
    host that requires you to run a site with Register Globals ON should
    be avoided. This is true for any PHP enabled site, whether or not you
    are running Joomla!. There is a legitimate argument to be made by
    hosts for keeping Register Globals ON for PHP4 sites. This is that it
    would break too much legacy code. This argument should not be accepted
    for a PHP5 installation. Beginning with PHP5, the official PHP
    recommendation was to keep Register Globals is OFF. Note that
    beginning with PHP6, there will not even be a Register Globals
    setting, so don't get caught in a Register Globals backwater. Modify
    your code to work without Register Globals, and choose a host that
    encourages such practices.

<!-- -->

-   **Stay up-to-date:** Choose a host that stays up-to-date with the
    latest stable versions of core applications, including the operating
    system, database, and
    <a href="https://www.php.net/" class="external text" target="_blank"
    rel="nofollow noreferrer noopener">PHP</a>.

<!-- -->

-   **Avoid cheap shared servers:** Be sure users on your shared server
    can't view each others files and databases, for example through shell
    accounts and cpanels.

<!-- -->

-   **Proactive server management:** Choose a host that provides real
    information about security compromises, rather than simply shutting
    your site down. Check their user forums for evidence of how they've
    responded to cracks in the past. A good host may for example, inform
    you immediately that a security breach has occurred and will
    quarantine the problem file for you, while leaving it there for
    further investigation. A poor host will shut your site down and
    provide limited information on why. Watch out! All too many do this.

<!-- -->

-   **Require raw log access:** Be sure you have access to raw server
    logs. Reading these logs is a vital part of site security and
    recovery.

<!-- -->

-   **Performance matters:** Choose a host that limits the number of users
    per machine and the average CPU load per machine to some reasonable
    number (depending on hardware). Be sure they proactively move user
    sites as needed to balance load. Check the number of domains on a
    server using reverse IP lookup.

<!-- -->

-   **Data center:** Choose a host that manages its own data center. Check
    the data center infrastructure, such as redundant Internet access, hot
    swappable backups, full daily backups, environment and access
    controls, emergency generators, etc.

<!-- -->

-   **Know your neighbors:** Check that your host is not at risk of having
    its IP addresses blocked because it hosts SPAM sites.

<!-- -->

-   **Visit the Joomla Community Portal <a
    href="https://community.joomla.org/service-providers-directory/listings/category/view/116-hosting-providers.html"
    class="external text" target="_blank" rel="noreferrer noopener">hosting
    section</a>:** If you are looking for a Joomla Host, please ensure you
    make your own investigations as to the services offered and whether
    they suit your needs.

<!-- -->

-   **Grow with your site:** As sites grow in complexity, resource
    requirements, and security requirements, they may need to be moved off
    of a shared server environment. At that point, good options
    include, 1) **dedicated servers** offer the best possible security and
    performance, but at the highest expense, 2) **virtual servers** offer
    almost all the advantages of a dedicated server, but the hardware and
    configuration cost is shared among multiple virtual servers.

### What are the Best Practices for Site Backups?

There are three traditional backup types--full, cumulative and
differential.

**Full Backups**

A complete backup of all associated files and database at a known point
in time.

Both of these are considered Incremental backups, they can be used
independently of each other or in conjunction with each other but always
relate back to a FULL backup.

**Cumulative Backups**

This is a backup of the differences since the last FULL backup, so each
cumulative backup gets bigger each cycle as it is also backing up data
previously backup, since the last FULL backup.

**Incremental Backups**

This is a backup of the changes since the previous backup of any type,
i.e., full, cumulative, or incremental.

If you site is not too large, then FULL backups are the way to go, once
a week at least. If your content changes quite regularly or more
importantly cannot be recreated or is too costly to recreate, once a
night or more may be more effective.

If time, server resources, or the rate of data change is too high to
successfully obtain a FULL backup every night then the incremental
backups are needed.

If you choose to use a cumulative backup following a weekly full, the
backups each night will run quicker than a full backup, however as the
week progresses, each nightly cumulative backup will increase in size
and time, due to not only backing up the changes since last night's
backup, but it also backing up all changes each night and previous
nights since the last full backup was made. The benefit of this type of
backup, in conjunction with full backups is the speed of restoration. To
restore, you now only need to recover the most recent full and
cumulative backups to fully recover all information.

If time or server resources are paramount or data change overwhelms
cumulative backups, turn to differential backups, this style of backup
when used in conjunction with a full backup will provide a similar level
of protection, but restoration will be slower. Differential backups will
only backup changed data since the last backup of any type, not since
the last full backup, as with a cumulative backup. Thus, when restoring
data, you will need to recover the full backup, then each differential
backup in turn (oldest first) in order to fully recover all information.
This method also has the drawback of recovering any legitimately deleted
files, potentially "over-filling" the file-system.

**Data Protection Best Practice says**

1.  You should be able to completely recover from a catastrophic failure
    from at least two previous full backups. Just in case the most
    recent full backup is damaged, lost, or corrupt.
2.  A good backup regime should contain at least one full backup within
    a chosen cycle, normally weekly.
3.  A good backup practice is to store backups away from the current
    data location, preferably off site.
4.  Dynamic data should be backed up _offline_ or _hot_ to avoid _fuzzy_
    backups (data is changing as you back it up, potentially leading to
    related information not being in sync when backed up.

For the average Web site, a daily or weekly full backup of both site
files and database records is normally more than enough. Keeping a
number of backups for a period of time is always a good plan, maybe keep
each weekly backup for one month. This allows you to recover an old site
in the case of emergencies or if for some reason you have local backup
file corruption.

There are many PHP and Perl scripts on the Web that can be automated
through CRONTAB and can either email (if small enough) or FTP the backup
files to an off- or cross- server location. Remember that to some degree
with Joomla! you already have an instant backup of the core files, if
you haven't modified core, the Joomla! distribution files can be easily
restored. Then you need only worry about backing up changed files and
the database.

### Where Can I Learn About Vulnerable Extensions?

-   See the
    <a href="https://extensions.joomla.org/vulnerable-extensions/about/"
    class="external text" target="_blank"
    rel="noreferrer noopener">Vulnerable Extensions List</a>

### Where Can I Learn More About File Permissions?

-   [Unix Permissions
    Primer](https://docs.joomla.org/How_do_UNIX_file_permissions_work%3F 'How do UNIX file permissions work?')
-   <a href="https://docs.joomla.org/Using_phpSuExec" class="mw-redirect"
    title="Using phpSuExec">Using phpSuExec</a>
-   <a href="https://docs.joomla.org/Windows_Permissions_Primer"
    class="mw-redirect" title="Windows Permissions Primer">Windows
    Permissions Primer</a>

### How Do I Set Up a Powerful Password Scheme?

Most users may not need more than 3 levels of passwords and webmasters
no more than 5. Each level must be completely unrelated to the others in
terms of which ids and passwords are used.

**Directions**

-   **Level 5 (Public)** - is the password you use on public sites. It is
    not imperative that you use a different password on every site. In
    fact it's more effective to use a different username on every site
    than it is to use a different password truth be told! Knowing the
    username allows easy hacking...half the work is done! knowing the
    password is useless unless you know what account it goes to!

<!-- -->

-   **Level 4 (Webmaster)** - Reserved for SQL Only. this is a password
    that would only be used by SQL and limited to a specific database in
    SQL. The best way to protect SQL is by limiting each account to just
    being able to do the minimum that DB requires. In some cases it is
    even wise to have a read only account for display and a separate write
    account that the Backend write functions use. But that doesn't apply
    to J! at all... for J! the best practice is to set up an individual
    account (not root for sure) that only has read and write access to the
    J! DB nothing else.

<!-- -->

-   **Level 3 (Webmaster)** - FTP and Server Access. these can be the same
    user:pass combo since both if compromised can do the most damage.
    doesn't matter if the Backend or Cpanel is safe if the FTP is not and
    the same goes the other way!

<!-- -->

-   **Level 2 (Personal Data Access)** - This password should be used for
    any sites or locations that contain personal data with the exception
    of Banking (see level 1). these sites are often used for social
    engineering data such as medical records, service accounts and any
    financial records not directly related to banking! You want these to
    be secure but also different from the real threat of security...your
    money!

<!-- -->

-   **Level 1 (Banking!)** - this needs to be the most secure in fact if
    you have two different banks it actually pays to have a different
    user:pass for each just to be sure!

## Joomla! Core

### How Can I Check My Joomla! Installation's Overall Security and Health?

1\. Use the free Joomla extension, Joomla! Tools Suite (JTS), which is a
Joomla! environment audit, maintenance and diagnostic application
written in PHP. The JTS suite of tools can diagnose, report and advise
on common installation, health and security issues, including performing
several common performance and recovery actions.

Project Home:
<a href="http://jurnalfootage.net/web/jts/" class="external free"
target="_blank"
rel="nofollow noreferrer noopener">http://jurnalfootage.net/web/jts/</a>

### How Can I Add the Joomla! Security Announcements Feed to the Admin Control Panel?

1.  Login to your Joomla! sites Administration site
2.  From the menu, select Extensions -\> Module Manager
3.  From within the Module Manager, select Administrator
4.  From the Icon Menu (top right), select New
5.  From the choices available, select Feeds Display
6.  At the Feed Module configuration page, enter the appropriate details
    (Title (e.g. Security Announcements) and Feed as a minimum)
7.  Enter <a href="https://developer.joomla.org/security-centre.html"
    class="external free" target="_blank"
    rel="noreferrer noopener">https://developer.joomla.org/security-centre.html</a>
    in the Feed URL
8.  Select cpanel as the position
9.  Optional Select Apply from the Icon Menu (top right) and place the
    feed in the order where you want to see it in the Admin Control
    Panel
10. Select Save from the Icon Menu (top right)
11. Go back to your Admin Site main page (Site -\> Control Panel) and
    you should see your newly built Security Feed.

You can also use this technique to deliver your own "Customer Updates"
to sites that you build for others. It's a great way to communicate with
your customers after handing over the site to them. Every time they log
in to the Backend, they'll see your latest news.

### Why Should I Immediately Change the Name of the Default Admin User After a New Install?

All new Joomla installations start with a Super Administrator account
called, 'admin'. During the installation process, you will be asked to
give this account a password. That's great as far as it goes, but
because the user name of this highly-confidential account is generally
well known, 50% of the security of the username/password combination is
already exposed. Now all anyone needs to do is guess the password and
they're in.

By changing the user name to something more difficult to guess, you
greatly increase the difficulty of accessing the account. An attacker
must correctly guess both the user name and password at the same time to
gain access. This is several magnitudes more difficult than simply
guessing the right password.

**Directions**

1.  Log into the Backend
2.  Select User Manager
3.  Select the 'admin' user record
4.  Change the value in username. (Good user names contain a mix of
    letters and numbers.)
5.  Save
6.  Remember the new username!

### Why does the Backend session stay alive even though I set it to expire?

When you edit an item from the Backend, there is a keep-alive script
running that keeps the session active. This is a great convenience in
most cases, as it prevents you from losing all your edits if you wait
too long to submit the content. However, there are a few potential
security issues to be aware of:

1.  If you walk away from your computer while you are editing content,
    someone else can use your computer to attack the site.
2.  Due to the risk of
    <a href="https://en.wikipedia.org/wiki/Cross-site_request_forgery"
    class="external text" target="_blank"
    rel="nofollow noreferrer noopener">Cross-Site Request Forgery</a>
    attacks, it's never a good idea to browse the Internet in another
    window or tab while an open Joomla! Administrator session is active.
    Joomla! has been hardened against such attacks, but it's remotely
    possible that an as yet unknown vulnerability exists in the Joomla!
    core, a third-party extension, or the browser itself.

### How do I turn off RG_EMULATION? <img src="https://docs.joomla.org/images/4/43/Compat_icon_1_0.png"

decoding="async" data-file-width="40" data-file-height="17" width="40"
height="17" alt="Joomla 1.0" />

PHP's _register_globals_ option was a terrible idea from a security
point of view. It encouraged lazy programming and exposed many scripts
to needless risk. This is because RG allows variables passed by the user
to be automatically passed to the script. This breaks a cardinal rule:
Never trust user input.

Register Globals has been officially deprecated in PHP5, and beginning
with PHP6 will no longer even exist. Good riddance!

Joomla 1.0.x uses RG*Emulation functions which are somewhat safer than
standard PHP \_register_globals*, but it's still best not to allow any
form of automatic variable assignments. Note that poorly-written
extensions may fail with _register_globals_ turned off. Such failure is
a sign that the extension does not check user input correctly. Best
advise: Don't use such extensions.

**Joomla! 1.0.13**

Beginning with the 1.0.13 release, Register Globals Emulation has been
moved to the main configuration file and can be adjusting in the Backend
Administrator interface.

**Joomla! 1.0.12 and earlier**

Edit the file, _globals.php_, found in the root directory of your
Joomla! site. At about line 23 change:

    define('RG_EMULATION',1)

to

    define('RG_EMULATION',0)

### What Do Error 1, Error 2, and Error 3 Mean?

**Error 1 = FATAL ERROR: MySQL not supported...**

You need to compile MySQL support into PHP or the MySQL server is down.

**Error 2 = FATAL ERROR: Connection to database ...**

Joomla! cannot talk to the database, most likely you have a typo in the
username or password settings in _configuration.php_, or you are trying
to access a database table with the wrong table prefix.

**Error 3 = FATAL ERROR: Database not found...**

The database cannot be found. Check the database settings in
_configuration.php_

The MySQL variables in _configuration.php_ (found in Joomla!'s root
directory) can be modified to correct these problems.

For Joomla! 1.0.xx

    $mosConfig_host = 'localhost';
    $mosConfig_user = 'accountname__username';
    $mosConfig_password = 'userpassword';
    $mosConfig_db = 'accountname_dbName';
    $mosConfig_dbprefix = 'jos_';

Modifying the _\$mosConfig_host_ to an IP Address of a remote host works
for hosts that have separate MySQL servers from the client hosting
servers.

### How Do UNIX File Permissions Work?

Unix/Linux file permissions can be confusing. The basic UNIX permissions
come in three flavors;

    Owner Permissions : Control your own access to files.
    Group Permissions : Control access for you and anyone in your group.
    Other Permissions : Control access for all others.

In Unix, when permissions are configured the server allows you to define
different permissions for each of these three categories of users. In a
Web server environment permissions are used to control which Web site
owners can access which directories and files.

**What do Unix permissions look like?**

When viewing your files through an FTP client or from the servers
command line;

    filename.php username usergroup rwx r-x r-x

The first entry is the name of the file, the next entry is your username
on the server, the second entry is the group that you are a member of
and the last entry is the permissions assigned to that this file (or
directory). If you notice, I have intentionally spaced out the
permissions section, I have grouped the 9 characters into 3 sets of 3.
This separation is key to how the permissions system works. The first
set of 3 permissions (rwx) relate to the username seen above, the second
set of 3 permissions (r-x) relate to the usergroup seen above and the
final set of 3 permissions (r-x) relate to anyone else who is not
associated with the username or groupname.

**Owner (User) relates to username**

The Owner (User) is normally you, these permissions will be enforced on
your hosting account name.

**Group relates to usergroup**

The Group permissions will be enforced on other people that are in the
same group as you, within a hosting environment, there is rarely other
people in the same group as you. This protects your files and
directories from being made available to anybody else who may also have
a hosting account on the same server as you.

**Other relates to everyone else**

The Other permissions, these will be enforced on anybody else on the
server that is either not you or not in your group. So in a Web Serving
environment, remembering that no-one else is normally in your group,
then this is everybody else accessing the server except for you. Each of
the three sets of permissions are defined in the following manner;

    r = Read permissions
    w = Write permissions
    x = Execute permissions

    Owner Group Other
    r w x r w x r w x

As many of you already know, permissions are normally expressed as a
numeric value, something like 755 or 644. so, how does this relate to
what we have discussed above? Each character of the permissions are
assigned a numeric value, this is assigned in each set of three, so we
only need to use three values and reuse them for each set.

    Owner Group Other
    r w x r w x r w x
    4 2 1 4 2 1 4 2 1

Now that we have a value that represents each permission, we can express
them in numeric terms. The values are simply added together in the
respective sets of 3, which will in turn give us just three numbers that
will tell us what permissions are being set. If we are told that a file
has the permissions of 777, this would mean that the following was true.

    Owner Group Other
    r w x r w x r w x
    4 2 1 4 2 1 4 2 1

Thus...

      4+2+1 4+2+1 4+2+1
    =   7     7     7

The Owner of the file would have full Read, Write and Execute
permissions, the group would also have full Read, Write and Execute
permissions, and the rest of the world can also Read, Write and Execute
the file. The standard, default permissions that get assigned to files
and directories by the server are normally;

    Files = 644
    Directories = 755

These permissions would allow, for files;

    644 = rw- r-- r--
    Owner has Read and Write
    Group has Read only
    Other has Read only

and for directories;

    755 = rwx r-x r-x
    Owner has Read, Write and Execute
    Group has Read and Execute only
    Other has Read and Execute only

Now, things can get a little complicated when we start talking about
shared Web Servers, the Web Server software will be running with its own
username and groupname, most servers are configured for them to use
either "apache" and "apache" or "nobody" and "nobody" as username and
groupname. Here is the problem. Your Web Server runs as its own user,
and this user is not you or in your group, so the first two sets of
permissions do not apply to it. Only the world (other) permissions
apply. Therefore, if you configure a permissions set similar to 640 on
your website files, your Web Server will not be able to run your website
files.

    640 = rw- r-- ---
    Owner has Read and Write
    Group has Read only
    Other has no rights

The Web server is assigned no permissions at all and cannot Execute,
Write or more importantly, even Read the file to delivery its content to
a website visitors browser. If a directory was to be assigned 750
permissions, this would have the same effect, because the WebServer does
not even have permissions to read files in the directory, even if the
files inside that directory had favorable permissions.

    750 = rw- r-x ---
    Owner has Read and Write
    Group has Read and Execute
    Other has no rights

Directories have an extra quirk, if a directory does not have the
Execute permission set in the World set then even if Read and Write are
set, if the program is not run as the user or group, it will still not
be able to access the files within the directory. The Execute setting
allows the program to "Execute" commands in the directory, so without it
being on the program(in our case a Web Server) cannot execute the "Read"
command, thus cannot deliver your file to the users web browser.

**How Does this Relate to Joomla?**

Good question, well in the first instance this would be important during
the Web-Installer process. If you can remember back to when you ran the
Joomla! Web-Installer, we were looking for specific directories to be
designated as writable. We see quite a numbers of posts either stating
that there were problems during the install with permissions or asking
what permissions are recommended. Some even consider the message, asking
for "Writable" permissions to be too vague.

Unfortunately, as the Web-Installer does not know how your server is
configured, then it cannot be more specific, however, once you
understand the permissions settings and you know a little about Web
Serving environments, you will actually find that the term _writable_ is
actually specific and a more than adequate description of what Joomla!
needs. Thinking back to the above information, you may remember that
there are three places where _write_ permissions maybe set;

    Owner Writable
    Group Writable
    Other Writable

Also remembering that the Web Server generally doesn't run as your own
user or in the same group. When you run the Web Installer from a
browser, it is the Web Server trying to access the files, thus it is the
"Other" permissions that will apply to it. If the "Other" permissions do
not allow the Web Server to Read, Write or Execute commands in the
Joomla! directories, you will receive the message saying that the
directories are not _writable_.

In this case, you will need to configure the Other permissions to be "7"
on the directories listed in the Web Installer. So your total
permissions might be something like 757, in the worse case you might
need to set 777. These open permissions maybe reset back to 755 after
the installer runs to assist in the security of your directories and
files.

    757 = rwx r-x rwx
    Owner has Read, Write and Execute
    Group has Read and Execute
    Other has Read, Write and Execute

Just to make things even more confusing, many hosting firms make use of
software called phpsuExec or suExec, these tools change the way the Web
Server runs, where the Web Server would not normally run as your
username, in this case, it does. The use of the _other_ permissions, may
not be required, now you may only need to configure directories to be
_writable_ to your own username and groupname, this allows directory
permissions to be set as 755 or 775 instead of 757 or 777.

    755 = rwx r-x r-x
    Owner has Read, Write and Execute
    Group has Read and Execute
    Other has Read and Execute

    775 = rwx rwx r-x
    Owner has Read, Write and Execute
    Group has Read, Write and Execute
    Other has Read and Execute

The Web Server will still need to Execute set for the username and Read,
Execute groupname permissions set so that it can Execute the Read
command on files inside the directory. Again, these permissions may be
demoted back to 755 after the Web Installer completes. Thats the basics
for directories covered, what about files? This is where things get a
little simpler. Most of the files that Joomla! makes use of will be
quite happy with the 644 default permissions.

    644 = rw- r-- r--
    Owner has Read, Write
    Group has Read
    Other has Read

This is valid if you do not have a need to Write to the files from the
Web Server, the same rules apply as for directories if you do have this
need. One file that you may like to have "Writable" to the Web Server is
your configuration.php file. This is the Joomla! configuration file, if
you plan on changing configuration through the Web Admin interface, then
this file will need to be Writable to the Web Server.

If your server needed directory permissions to be set to "Other"
Writable for the install then this file will probably also need to be
757 or 777. Leaving this file as 757 or 777 is dangerous though, as you
are letting everyone have "Write" access, many Web Site exploits take
advantage of this fact, so in general it is not recommended to leave
this file with these permissions.

If your Web Server has one of the SU tools installed and you only needed
to configure 755 on directories for the installation, then you will
probably also only need to set 755 or 775 on this file to allow editing
through the Admin interface, and these permissions are generally
accepted as more secure than 757 or 777.

In conclusion, what permissions should be set for the Joomla!
installation? Well, as you can see, it depends!

I know this isn't as helpful as you would have liked and it certainly is
not a definitive answer, but in general, after the installation, any
insecure "7" settings can be reset back to something more secure. For
example:

    Files = 644
    Directories = 755

These permissions would allow, for files;

    644 = rw- r-- r--
    Owner has Read and Write
    Group has Read only
    Other has Read only

and for directories,

    755 = rwx r-x r-x
    Owner has Read, Write and Execute
    Group has Read and Execute only
    Other has Read and Execute only

If you have SSH shell access the following commands can be run from the
command line to reset all files and directories back to the server
defaults of 755 and 644. Change directories to the top directory (" / ")
of your Joomla! installation, then run:

    find . -type f -exec chmod 644 {} \;
    find . -type d -exec chmod 755 {} \;

If you only have FTP access, this can be a time consuming job, however,
unless you changed more directories during the installation that was
requested, you should only need to reset about 10 directories and the
_configuration.php_ file.

Keep in mind that to install any extensions or templates after the
actual Joomla! installation you may need to elevate the default
permissions again on the appropriate directories just for the
installation period, you may then demote them again after the add-on is
installed.

If you decide to use _caching_ the cache directory will need to be
_writable_ by the Web server user to allow it to write its temporary
files.

### What are the recommended file and directory permissions?

Depending on the security configuration of your Web server the
recommended default permissions of 755 for directories and 644 for files
should be reasonably secure.

### How can I avoid using chmod 0777 to enable installs?

On a private server with a small, controlled set of users, there is no
need to use a chmod 777 to make the Joomla! folders writable in order to
perform installs. You can set the server up so that both Apache and FTP
have control of site files.

**Directions**

1.  Edit the Apache user.conf file and tell apache to run under the FTP
    account.
2.  chmod the entire site to 644 or 744. Apache should be able to run
    just fine that way.

**Optional**

1.  chgrp the entire web space to the FTP group so that only those with
    FTP access can write to the server.
2.  chmod the entire web space to 764 or 664 will be possible giving
    other users write access as well

### Isn't locating all Joomla! files inside _public_html_ a security risk?

**Short answer**

Potentially, yes. Your site can be secure, but you must be careful and
vigilant.

**Long answer**

A common security principle is to create various security levels and
then grant access at each level only as required. On UNIX servers this
is done by setting the user, group, and world permissions on directories
and files.

Typically, the most insecure directory on a UNIX server is the one
serving Web files, usually called _public_html_. This is because it is
publicly accessible, world-readable, and in the case of a CMS-powered
site, possibly even world-writable. That status is the very definition
of officially, totally, and utterly insecure.

As long as you want the entire world to view your _public_html_
directory there is no problem. After all, that's exactly what it's
designed to do. But if you want to hide anything, the plot thickens. If
_public_html_ contains configuration files with secret data, or scripts
that write to databases, or scripts that modify other files, or scripts
that append to logs, or scripts that store temporary data in caches, or
scripts that support file and graphic uploads, or scripts that process
form input, or scripts that process financial and personal data, this
read-only directory becomes a world-accessible, read-write application.

If there are ANY vulnerabilities in ANY files in the _public_html_
directory, the entire server is potentially vulnerable, and not just
your Web site but possibly every Web site on your server. Such
vulnerabilities give attackers access to the scripting engines used to
run your site. PHP, Perl and other Web scripting languages are powerful
and easy to use. If programming vulnerabilities allow an attacker to
call arbitrary commands, your entire server could be toast.

One good way to block attackers, is to keep potential vulnerabilities
behind a secure fence. For this reason, it is often recommended to only
place files that require direct access from the Web in _public_html_.
Other files should be loaded into applications using such functions as
include and require. To access such files, attackers must first
penetrate your server, such as by discovering a root username/password.

**The incredible lightness of living outside the fence**

To provide incredibly easy installation, Joomla! follows a different
security model. It is possible to perform a complete Joomla!
installation using nothing more than a Web browser pointed at the
world-readable installation directory. An additional level of security
is provided by requiring that you remove this installation directory
after completing the install.

Granting a world-accessible installer the ability to write to files
outside of _public_html_ would be a huge security hole. Thus, by default
every Joomla! file ends up in the world-accessible _public_html_
directory. Not coincidentally, this is also the directory in which an
angry planetful of would-be attackers are hoping to find your files.

Currently, most Joomla extensions also have limited support for file
locations outside of _public_html_. This is a legacy of the Joomla!
1.0.x installation model.

**Joomla! defense**

Despite it's apparently vulnerable location, Joomla! uses various
effective methods for blocking exploits. Chief among them is to add a
line of code at the top of any PHP file that requires extra protection.
This method is effective as long as each and every file requiring such
protection, has it. One vulnerable file exposes the whole site.

**The challenge**

The practice of placing everything in _public_html_, and then building a
little fence inside each file can become an administrative nightmare.
One vulnerable file exposes the entire server. This is a glaring example
of an allow, then deny security model.

This model requires careful upgrades, constant log reviews, and
proactive plugging of new vulnerabilities as soon as they become known.
(Since you have to beat the attackers, you'll be in a hurry, and may
inadvertently do something stupid, potentially creating other
vulnerabilities.)

During installations and upgrades, you must verify (or trust someone
else to verify) every line of code, of every new file, for every known
vulnerability. And because scripts can have unintended consequences on
each other, you cannot forget to test, test, test. Of course this is
generally true for all software, but placing the entire application in
_public_html_ makes the issue extremely critical.

The recent wave of URL injection attacks against poorly-written third
party extensions would have been much less successful if those files had
been stored outside of _public_html_, and thus simply unavailable
through URLs. Note that in many cases the actual vulnerabilities could
still exist within the files, but being inside the fence (outside of
_public_html_) they would not be exposed to URL injections.

    To (Deny, then Allow), or (Allow, then Deny)?

The real problem with the above "all known" qualifier is that it is an
allow, then deny model. In other words, we first give everyone access to
every file and then deny access to specific files by adding a line of
code.

Consider the logic for a password authentication script. We have
essentially two choices:

1.  First allow all access, then deny any username/password combination
    that **does not** match the approved list.
2.  First deny all access, then allow any username/password combination
    that **does** match the approved list.

Obviously the second method is better. A passing familiarity with
regular expressions shows that the first method is much more difficult
to write securely. It fails anew each time a new variation of some
attack is developed, and tends to require constant revisions. Over time,
such revisions become so complex that the authentication system itself
becomes a source of vulnerabilities.

Conceptually, the second method is an example of building a strong fence
around your site (deny), and then granting access using a limited and
well-defined set of criteria (then allow). If the script fails, the most
likely result is that someone who should have access is blocked. That
may be highly inconvenient, but it's not usually a security breach.

**The good news**

1.  In Joomla! 1.0.x, some extensions, and the Joomla! framework, give
    you the option of locating critical directories outside of
    _public_html_ after you have completed the installation. Whenever
    possible you should do this.
2.  Joomla! 1.5 goes far in the right direction. It provides several new
    constants for specifying the location of particularly sensitive
    directories, including configuration, administrator, libraries, and
    installation.
3.  Joomla! 1.5 is able to run as an FTP account. This provides another
    method for protecting files on a file by file and directory by
    directory basis.

### How do I adjust Joomla 1.5 defines <img src="https://docs.joomla.org/images/c/c8/Compat_icon_1_5.png"

decoding="async" data-file-width="40" data-file-height="17" width="40"
height="17" alt="Joomla 1.5" />

There are two defines files that will generally need to be edited. The
_/includes/defines.php_ file is for the Frontend and
_/administrator/includes/defines.php_ is for the Backend. Below is the
relevant code.

    define( 'JPATH_ROOT' , implode( DS, $parts ) );
    define( 'JPATH_SITE' , JPATH_ROOT );
    define( 'JPATH_CONFIGURATION', JPATH_ROOT );
    define( 'JPATH_ADMINISTRATOR', JPATH_ROOT . DS . 'administrator' );
    define( 'JPATH_LIBRARIES' , JPATH_ROOT . DS . 'libraries' );
    define( 'JPATH_INSTALLATION' , JPATH_ROOT . DS . 'installation' );

.DS. = Directory Separator

### How do I block direct access to critical files using _.htaccess_?

1.  Make a backup copy of your _.htaccess_ file. Use your backup file to
    recover if the following fails. Be sure to delete the backup file
    once you are finished.
2.  Add the following to your _.htaccess_ file. This example will
    protect both the _configuration.php_ and _.htaccess_ files.

<!-- -->

    order allow,deny
    deny from all

    Order allow,deny
    Deny from all

You can also protect a lot of file extensions in one single rule.
Example (the file names between ' **(** ' and ' **)** ' in this rule are
the file extensions to protect ):

    Order allow,deny
    Deny from all

### How do I recursively adjust file and directory permissions?

**Using Joomla! Administration**

In the Backend, go to Site --\> Global Configuration --\> Server.

**Using the UNIX shell**

**Note:** The find command automatically assumes that it should start
from the current directory. To be safe, go to your _public_html_
directory and specify a path as the first argument. Some shells, such as
bash on Apple OS X, must have a path specified in the find command.

    find . -type f -exec chmod 644 {} \;
    find . -type d -exec chmod 755 {} \;
    chmod 707 images
    chmod 707 images/stories
    chown apache:apache cache

**Notes:**

1.  Test all third party extensions after changing permissions.
2.  You may need to reset write permissions to install more extensions.

### How can I set the administrator directory to use an SSL server? <img src="https://docs.joomla.org/images/4/43/Compat_icon_1_0.png"

decoding="async" data-file-width="40" data-file-height="17" width="40"
height="17" alt="Joomla 1.0" />

Use Joomla version 1.5 or newer

A standard Joomla! 1.0.x installation does not support SSL for
individual directories, however there are various (elegant and not so
elegant) hacks posted in the forums.

Note that earlier techniques involving the variable
_\$mosConfig_live_site_ are deprecated, and will not work with current
Joomla! versions due to increased security enhancements.

### Why isn't restricting access by IP recommended?

Restricting site access by IP address is not particularly effective long
term as many exploits are enacted from hijacked machines or via proxies,
masking the real attacker's actual IP Address. Attackers can attack from
many different compromised machines. Blocking them will block the
legitimate owners of that IP, but may not block the attackers.

## Joomla! Extensions

### Why are there vulnerable extensions?

A list of currently known
<a href="https://extensions.joomla.org/vulnerable-extensions/about/"
class="external text" target="_blank"
rel="noreferrer noopener">vulnerable extensions</a>.

Anyone may write and distribute a Joomla! extension. As a service to the
global community, this freedom is actively encouraged and supported by
the Joomla! Core team. Due to the openness and popularity of the Joomla!
project, there are a wide variety of extensions offering a vast array of
features. The quality and breadth of Joomla! extensions is one of the
main advantages of Joomla.

However this freedom comes with a price. It requires individual
responsibility, and can survive only where a majority of participants
act responsibly. Joomla's success has led to unwanted attention from
malicious types, such as script kiddies who run simple, automated
scripts in an effort to find and deface others' Web sites.

It is important to note that, script kiddies unintentionally perform a
valuable service. They help us identify vulnerable extensions and poorly
configured servers that might otherwise remain open to more serious
threats.

### What is a vulnerable extension?

A vulnerable extension is one that has been found to contain (or
contribute to) a security vulnerability.

Vulnerable extensions are not necessarily poorly-coded. As the Web
evolves, technical requirements and commonly accepted coding practices
change. Active projects release new versions of their extensions as
requirements change. For this reason, it is important to:

1.  Know the version numbers of all installed extensions.
2.  Use only the latest stable version of all extensions.
3.  Completely remove all files of insecure or unused extensions.

### How do I choose secure extensions?

The most important thing anyone can do is make good decisions regarding
the extensions they choose to use on a site. Once an insecure or
malicious extension is installed you should consider your entire site
compromised. There is NO POSSIBLE WAY to protect or stop a component
from accessing database tables it should not be accessing. There is no
possible way to stop a component from sending all of the information it
found back to a cracker website. Once an insecure or malicious component
is installed, your entire site is insecure.

With all of that said, here are some pretty easy tips for making good
choices regarding the extensions you install:

1\. When was the last version released?

If it has been over a year, consider the project abandoned and find
something else. Do not install old components.

2\. What kind of release is it? (Stable, Release Candidate (RC), Beta,
Alpha)

For production sites you should be sticking to Stable releases as much
as possible. If you cannot wait until a Stable release has been made
available, Release Candidates are the only other option you should
consider. I would not suggest anyone install any Beta or Alpha
extensions on a production site. This means they still have bugs, they
have not been tested enough, and could have any number of inconvenient
bugs or security issues that have not been fixed or worse, found.

3\. Does the extension have a history of good security practices?

This is obviously a bit more subjective but it is still a valid gauge of
future trustworthiness. It requires a bit of investigation and research.
Look around their download pages and archives, are there many security
release or patches? Are there a lot of reports of cracking activity
through this extension? Are the developers experienced and security
conscious? What do other community members think of this extension? One
example that comes to mind that has little to do with Joomla itself
(which makes it a fair example) is phpBB. This script has had more
security issues than I could get my head around and there routinely
seems to be newly disclosed issues. Because of this, I would never use
phpBB. In my opinion its is not trustworthy and there is a high
probability that there will be more major security issues.

4\. Is there a support community for this extension?

This is important for usability and security awareness. If there is a
support community for an extension there is a better chance of security
issues being known and dealt with. A support community means that people
would like to continue using the extension and that they care about the
extension. This furthers the chance that security issues will be found,
disclosed, and dealt with promptly.

5\. Is there only a Mambo version of this extension?

While this does not in itself make an extension insecure but is rather a
gauge of support, how recently the last realease was, and future
support. There is a pretty narrow chance that Mambo components will be
supported in 1.5 so save yourself the trouble and find a component made
to work with Joomla. It will make your life easier.

6\. Is the extension generally bug free?

I hinted on this a little bit in number three but I think it is worth
discussing in more depth. While it is almost impossible for an extension
to be completely bug free, the smaller the number of bugs, the better.
If there are bugs in the software it means there are mistakes in the
software. The more mistakes, the higher risk of usability issues and
security issues. Security issues are often a result of not one bug, but
several bugs or bad practices. For example, the recent 3rd party
vulnerabilities that allow for remote file inclusion are a result of:

**Bad Practices:**

1.  Having PHP's Register Globals enabled.
2.  Using out of date or abandoned extension.
3.  No other security checks enabled for PHP. (url_fopen off,
    open_basedir restrictions, disabled PHP functions)
4.  Poorly configured file permissions.
5.  No request filtering or software "firewall". (such as mod_rewrite
    rules or mod_security Apache modules)

**Bugs:**

1.  Not including defined('\_VALID_MOS') or die... statements
2.  Poorly constructed include() statements.

**Although the Joomla! core is secure when configured correctly, third
party extensions come in all flavors of age and quality. Unless you
absolutely trust the extension developer, always review the code should
before installing. The following is a list of typical areas of
concern.**

1\. How complex is the extension?

The larger it is, the more likely it is to have problems, and the more
carefully you should review it. If you can't tell what it's doing, you
should not trust it.

2\. Does the extension read or write files to your server?

Programs that read files may inadvertently violate access restrictions
you've set up, or pass sensitive system information to crackers.
Programs that write files have the potential to modify or damage
existing files, or introduce trojan horses.

3\. Does the extension interact with other programs on your system?

For example, many extensions send e-mail in response to a form input by
opening a connection with the sendmail program. Is it doing this in a
safe way?

4\. Does the extension run with suid (set-user-id) privileges?

In general this is dangerous; extensions need an excellent reasons for
doing this.

5\. Does the extension validate all user input, such as in form fields
and in the URL?

6\. Does the extension use explicit path names when invoking external
programs?

Relying on the PATH environment variable to resolve partial path names
is a dangerous practice.

7\. Is the extension secure against direct access through the URL?

For example:
www.yoursite.com/components/com_bad_extension.php?lots_of_bad_code_here

8\. Is the extension secure against remote file inclusions?

9\. Is the extension secure against SQL injections?

10\. Is the extension secure against Cross Site Scripting (XSS)?

11\. Does the extension need PHP register_globals ON, or Joomla! RG
Emulation ON?

If so, then it is probably violating number 7 above.

12\. Does the extension provide higher database access to less
privileged users?

For example does it allow guests or registered users to view data that
only publishers or administrators should be able to see?

### Why does the Extensions site include insecure extensions?

The Joomla! Extensions site exists as a free service to the community.
Anyone can post extensions there and extensions exist at all levels of
quality and maturity.

If an extension is found to contain vulnerabilities, it will be removed
from the site until a safer version is released, but there is no
guarantee that the vulnerabilities of every extension have been
discovered or reported.

To be safe, you must verify the security of every extension you install.

Below is the text of the Joomla! Extensions site disclaimer. Ignore it
at your peril.

**Disclaimer**

The extensions and reviews listed in this area have been submitted by
the community and their listing does not constitute or imply
endorsement, recommendation, or favouring by Joomla!/OSM.

This content is provided as a free service to our visitors, and, as
such, Joomla!/OSM cannot be held liable for the accuracy of the
information. Visitors wishing to verify that the information is correct
should contact the parties responsible for authoring the content and/or
development of the extension.

### Why is there a warning in the extensions install screen?

It's just a warning! You are of course free to install any extension you
want onto your own site, but remember that **YOU** are responsible for
the safety of your site and the quality of the applications you install.

The vast majority of reported Joomla! vulnerabilities are through
poorly-written or obsolete versions of third party extensions that
should not have been left on the server. Therefore, before installing
anything carefully evaluate the quality of the extension's code.

The <a href="https://extensions.joomla.org/vulnerable-extensions/about/"
class="external text" target="_blank"
rel="noreferrer noopener">Vulnerable Extensions List</a> is a valuable
source of information on what **not** to install.

### Why isn't unpublishing a vulnerable extension enough to protect my site?

Simply removing the menu links to an extension, or unpublishing a module
is NOT enough to protect your site! As long as the extension's files
exist on your server, you are vulnerable. Note how in the following
examples an attacker can bypass the Joomla! index file to directly
target any file, of any extension.

    www.your_site.org/components/com_bad_component/vulnerable_file.php
    www.your_site.org/modules/mod_bad_module/vulnerable_file.php

**Directions for removing a vulnerable extension**

1\. Make a list of files to remove

If you can locate it, read the extension's xml file to determine exactly
which directories, files, and database tables were added to your system.
The xml file is in the original zip archive used during the extension
install process. For example, the zip archive for an extension called
mod_vulnerable, would contain an xml file called, mod_vulnerable.xml,
and might contain a list of files such as the following:

    mod_vulnerable.php
    mod_vulnerable/vulnerable_file.txt
    mod_vulnerable/another_vulnerable_file.txt
    mod_vulnerable/yet_another_vulnerable_file.txt
    mod_vulnerable/index.html

2\. Uninstall via the Joomla Installer:

Using the Installer in the Joomla! Administrator backend, uninstall the
vulnerable extension. You may also need to uninstall related modules,
components, or plugins.

3\. Check that the uninstall process was complete:

Don't trust the extension to safely remove all of its files. Compare
directories and files on your system to the extension's xml list to
ensure that all related files were actually removed.

4\. Optionally, remove related database tables:

Check your database and remove any tables created by the extension. To
ease the upgrade process to new versions, many uninstall scripts do not
remove related database tables. You can find the list of tables in each
extension's XML file. (If you plan on installing a safer, compatible
version of the same extension and you want to reuse existing data, you
can usually leave the database tables as they are.)

## Apache

**Covers information on Apache Web server, Apache modules, _.htaccess_
files, etc.**

### How do I block directory scans using _.htaccess_?

**Directions**

Add one of the following Apache rewrite rules to your _.htaccess_ file.
The first example will internally rewrite all attempts to access files
with names starting with "phpMyAdmin" to index.php. Be wary of using
this as it allows a seemingly valid duplicate URL for your homepage. The
second rule is more safe. It simply returns a 403 response.

**Sample Apache Rewrite Rule**

    RewriteRule ^phpMyAdmin /index.php [L]
    RewriteRule ^phpMyAdmin - [F]

**Some Regular Expression Tips**

    ^ Means start of pattern
    . Means any character other than newlines
    + Means one or more of the previous character
    * Means zero or more of the previous character
    $ Means end of pattern
    \.  Literal periods must be escaped with a leading \

### How can I change PHP settings using _.htaccess_?

This FAQ explains how to set boolean PHP configuration directives using
php_flag. The format for php_flag is: php_flag name on\|off

**Directions**

1\. Open the _.htaccess_ file located in your site's home directory, or
if you don't have one, create a blank one now. Note the period character
(.) at the beginning of the file name.

2\. Add any of the following code samples to your _.htaccess_ file, each
on its own line. These sample commands will prevent common global
variable injection attacks, cross site scripting (XSS) sttacks, and code
injection attacks.

    php_flag register_globals off

    php_flag allow_url_fopen off

    php_flag magic_quotes_gpc on

_Note that although the magic_quotes_gpc directive adds a layer of
security, for performance reasons it is not considered a best practice.
If you have verified that your site correctly filters and validates all
user data (and every production site really should), then there is no
need to add this directive. If you have any doubt, add it._

3\. Save the _.htaccess_ file in your site's home directory.

4\. Test your site's Frontend and Backend.

### How Does FastCGI Affect Joomla?

When PHP runs from FastCGI, your server runs the PHP interpreter like an
Apache module, but with the rights of your user account. Usually, the
PHP interpreter is either running as the user of the webserver (which is
fast, but insecure, since everyone's scripts run with the same rights),
or as a CGI program, which is slow. Thus, FastCGI is a good solution for
shared hosting.

Since the PHP interpreter runs as a single instance, it does (AFAIK) not
parse the _.htaccess_ or _php.ini_ files per directory. To change
_php.ini_ settings, your host must offer you a method to set up or
modify your own _php.ini_, or at least parts of it. Here is how one of
host does this: it parses one _php.ini_ file (which the user can modify)
once an hour, and puts some well-defined settings into the web server's
main _php.ini_ file. Thus, users are able to change some settings for
their site only, such as turning register_globals off, switching between
PHP4 and PHP5.

If your server uses FastCGI, you can ask them to enable a method such as
the above example, or you may be able to ask them adjust some settings
for you.

### How can I check if mod_rewrite is enabled?

Many problems with search engine optimization (SEO) arise from the fact
that a host has not enabled mod_rewrite on the server.

1\. Enable SEO in your administrator! (administrator \> SEO \> Enable \>
Save)

2\. Rename your htaccess.txt to _.htaccess_, or use your existing
_.htaccess_ file.

3\. Place ONLY the following lines in your _.htaccess_ file in the
domain root folder.

          Options +FollowSymLinks
          RewriteEngine On
          RewriteRule ^joomla\.html http://www.joomla.org/ [R=301,L]

4\. Point your browser to:
<a href="http://www.example.com/joomla.html" class="external free"
target="_blank"
rel="nofollow noreferrer noopener">http://www.example.com/joomla.html</a>

(Replace 'example.com' with your site's actual URL.)

5\. If you are redirected to www.joomla.org, mod_rewrite is working. If
you get an error, mod_rewrite is not working.

6\. Note: if your site is located in a folder, for example "test" you
will need to modify the _.htaccess_ file as follows:

          Options +FollowSymLinks
          RewriteEngine On
          RewriteRule ^test/joomla\.html http://www.joomla.org/ [R=301,L]

### How Do I Switch to PHP5 using _.htaccess_?

Many shared server environments currently run _.php_ scripts using the
PHP4 interpreter and _.php5_ code using the PHP5 interpreter. Rather
than changing all your file extensions, and perhaps breaking many links,
use a _.htaccess_ file to dynamically map one extension to the other.

**IMPORTANT CAVEAT:** One common reason for doing this is that hosts
leave PHP4 configured with _register_globals_ ON in order to support
legacy code while offering PHP5 with _register_globals_ OFF. If you are
on a shared server at a host that has configured register_globals ON
server wide, you should be worried!

Turning register globals OFF via a local _php.ini_ or a _.htaccess_ file
will NOT offer you any extra protection. Another exploited account on
your server can simple hack yours. For server security, and since php
4.2, register globals is OFF server wide by default (php default). Any
host overriding this is inviting trouble. If you need register globals
ON for a specific site, simple use a _.htaccess_ file for that specific
directory, and server wide security will not be compromised. Of course,
if you do this be sure all effected scripts fully sanitize input data.

**Requirements**

1\. Your Apache server must be configured to use _.htaccess_ files. If
not, you may be able to request this from your host. 2. Your Apache
configuration must allow the following setting. If not, you may be able
to request this from your host. 3. Your host must have configured the
.php and .php5 file extensions as described above. If not, they may
possibly have chosen other extensions. Check with your host.

**Directions**

1\. Check to be sure your site is configured to use _.htaccess_ files.

2\. Make a backup of the _.htaccess_ file in your root public*http
directory. If you don't have a *.htaccess\_ file at this location, create
one now.

3\. There are various ways to set the command, depending on your server
configuration. One of the following will probably work. Add ONE the
following lines at the end of your _.htaccess_ file. If unsure which to
use, check with your hosting provider on which version works best for
your configuration.

    AddType x-mapp-php5 .php
    AddHandler application/x-httpd-php5 .php
    AddHandler cgi-php5 .php

4\. Carefully test.

5\. Delete the backup _.htaccess_ file. Don't leave backups of
_.htaccess_ files in public directories.

### How do I password protect directories using _.htaccess_?

This FAQ explains how to protect the Joomla! /administrator/ directory
on Apache servers using the htpasswd utility. You can easily adapt these
instructions to protect other directories. If you need help finding or
creating your _.htaccess_ file, start here.

**Caveat (From Apache.org)**

Basic authentication should not be considered secure for any
particularly rigorous definition of secure. Although the password is
stored on the server in encrypted format, it is passed from the client
to the server in plain text across the network. Anyone listening with
any variety of packet sniffer will be able to read the username and
password in the clear as it goes across.

Not only that, but remember that the username and password are passed
with every request, not just when the user first types them in. So the
packet sniffer need not be listening at a particularly strategic time,
but just for long enough to see any single request come across the wire.

And, in addition to that, the content itself is also going across the
network in the clear, and so if the web site contains sensitive
information, the same packet sniffer would have access to that
information as it went past, even if the username and password were not
used to gain direct access to the web site.

Don't use basic authentication for anything that requires real security.
It is a detriment for most users, since few people will take the
trouble, or have the necessary software and/or equipment, to find out
passwords. However, if someone had a desire to get in, it would take
very little for them to do so.

Basic authentication across an SSL connection, however, will be secure,
since everything is going to be encrypted, including the username and
password.

**Directions**

1\. If you are unfamiliar with the Apache htpasswd utility, you may want
to read the following link first. Apache Authentication, Authorization,
and Access Control

2\. Check to be sure your site is configured to use _.htaccess_ files.
If not sure, ask your host.

3\. Decide where to put your _.htaccess_ file. Because Apache
recursively searches all directories in a path for _.htaccess_ files,
the higher in your directory structure you place this file, the more
directories it will control. If there is already an _.htaccess_ file in
the directory you choose, it's probably best to add the new code to it.

4\. Decide where to store your _.htpasswd_ and _.htgroups_ files. These
files should **never** be publicly accessible through the Web. Below is
an example directory structure showing good locations for each file.
Note that the _/auth/_ directory in this example is NOT accessible from
the Web.

    /home/mysite/public_html/.htaccess
    /home/mysite/auth/.htpasswd/
    /home/mysite/auth/.htgroups/

5. Create the _.htpasswd_ and _.htgroups_ files as explained in the
   official Apache HowTo, referenced above. (Since you've read the always
   current and official documentation at Apache.org, we'll spare you the
   trouble of displaying it again here.)

6\. If a _.htaccess_ file already exists in the directory you have
chosen, make a backup copy. If the file does not exist, create a new
file with that name now. (Don't forget the dot at the beginning of the
name.)

7\. Add the following code to the _.htaccess_ file. Adjust the example
paths (marked in red) as needed for your server. Adjust the group name
that you created in step 5 if it differs from the below example.

    AuthUserFile /home/auth/.htpasswd
    AuthGroupFile /home/auth/.htgroups
    AuthType Basic
    AuthName "LWS"
    require group admins

8\. Test carefully.

9\. Remove all backup _.htaccess_ files from _public_http_ directories.

### How do I restrict directory access by IP address using _.htaccess_?

This can be a effective way to protect your Joomla! administrator
directory. Any other directory in _public_html_ can be protected in the
same way. This method only works if you have a static IP address
assigned to you. Anyone attempting to browse such directories using a
different IP Address will get a 403 Forbidden error.

**Directions**

1.  In the directory you wish to protect, open (or create) a file
    called, _.htaccess_. (Note the dot at the beginning of the file
    name.)
2.  Add the following code to this file, replacing 100.100.100.100 in
    this example with the static IP address you plan to allow:

<!-- -->

    Order Deny,Allow
    Deny from all
    Allow from 100.100.100.100

-   Optional: You can enter partial IP Addresses, such as, 100.100.100.
    This allows access to a range of addresses.

<!-- -->

-   Optional: You can add multiple addresses by separating them with
    comma's.

<!-- -->

    100.100.100.101, 100.100.100.102

### How do I convert an _htaccess.txt_ file into a _.htaccess_ file?

When using PHP as an Apache module, you can change the configuration
settings using directives in Apache configuration files (e.g. httpd.conf
and _.htaccess_ files). You will need "AllowOverride Options" or
"AllowOverride All" privileges to do so. If you control your own Apache
configuration, you can and should use httpd.conf. If you do not control
your Apache configuration (such as on a shared server), you must use
_.htaccess_ files.

**Directions**

1.  First look for the file, _htaccess.txt_ in your root directory. It
    should have been installed during the Joomla! installation. (Note
    that this file name does not begin with a dot.) Open and carefully
    read _htaccess.txt_. It contains important suggestions on how to
    protect your site.
2.  Make any adjustments to this file as appropriate for your site, and
    then save it in your site's home directory as, _.htaccess_
    (including the dot).
3.  Test your site's Frontend and Backend. If it produces errors, rename
    the file back to _htaccess.txt_, and troubleshoot your edits. If you
    are unable to get this working, you may have to leave the file named
    _htaccess.txt_.
4.  Use _phpinfo()_ to ensure that all configurations are set as you
    intended. Note: Web-accessible files that include _phpinfo()_ are
    potential security risks. They offer attackers lots of useful
    information about your server. Always remove such files after use.

**More Information**

-   <a href="https://www.php.net/configuration.changes"
    class="external text" target="_blank"
    rel="nofollow noreferrer noopener">Official PHP Manual: How to change
    configuration settings</a>
-   <a href="https://www.php.net/manual/en/ini.php#ini.list"
    class="external text" target="_blank"
    rel="nofollow noreferrer noopener">Official PHP Manual: List of PHP INI
    directives</a>

### How do I block direct hot linking to image files using _.htaccess_?

**Caveats**

1.  Your server must allow _.htaccess_ files for this technique to work.
2.  If you do not have a _.htaccess_ file in your root directory, see
    the related FAQ first.
3.  Do not use this method to redirect image hot links to HTML pages or
    to servers that are not your own.
4.  Hot linked images can only be replaced by other images, not with
    HTML pages.
5.  As with any _.htaccess_ rewrite, you may block legitimate traffic,
    such as users behind proxies or firewalls.

**Directions**

1.  Create a _jpeg_ image called _no_hot_link.jpe_. Note that the odd
    file extension (_.jpe_) is intentional and important. Place this
    file in your _images_ directory.
2.  Place the following code in the _.htaccess_ file of your root
    directory.

<!-- -->

     RewriteEngine On
     RewriteCond %{HTTP_REFERER} !^http://([^.]+\.)*your_site\.com/ [NC]
     RewriteCond %{HTTP_REFERER} !^$
     RewriteRule \.(jpe?g|gif|bmp|png)$ https://docs.joomla.org/images/no_hot_link.jpe [L]

**Explanation**

The first line begins the Apache rewrite rule. The second line matches
any requests from your own site, here called your_site.com url. The
\[NC\] flag means "aNy Case", which means, match any and all upper and
lower case characters. The third line allows empty referrals such as
when a user is behind a caching proxy. The last line matches any files
ending with the extension jpeg, jpg, gif, bmp, or png. This is then
replaced by the no_hot_link.jpe file in your images directory. This JPEG
file uses the extension jpe instead of jpg to prevent these rules from
blocking your replacement image.

**Block hot linking from specific domains**

To stop hotlinking from specific domains only, such as myspace.com,
blogspot.com and livejournal.com, while allowing other web sites to
hotlink to your images, use the following code:

     RewriteEngine On
     RewriteCond %{HTTP_REFERER} ^http://([^.]+\.)*myspace\.com/ [NC,OR]
     RewriteCond %{HTTP_REFERER} ^http://([^.]+\.)*blogspot\.com/ [NC,OR]
     RewriteCond %{HTTP_REFERER} ^http://([^.]+\.)*livejournal\.com/ [NC]
     RewriteRule \.(jpe?g|gif|bmp|png)$ https://docs.joomla.org/images/nohotlink.jpe [L]

You can add as many different domains as you want. Every RewriteCond
line except the last one should end with the \[NC,OR\] flags. NC means
to ignore case. OR means "Or Next", as in, match this line OR the next
line. The last RewriteCond omits the OR flag to stop matching after the
last RewriteCond.

**Display a 403 forbidden code**

Alternatively, you can display a 403 Forbidden error code. Replace the
last line of the previous examples with this line:

    RewriteRule \.(jpe?g|gif|bmp|png)$ - [F]

## PHP

### Why is Joomla! written in PHP?

Might as well get it from the horse's mouth. Rasmus Lerdorf, the
originator of PHP, sums up how and why PHP developed as it did.

_"What it all boils down to is that PHP was never meant to win any
beauty contests. It wasn't designed to introduce any new revolutionary
programming paradigms. It was designed to solve a single problem: the
Web problem. That problem can get quite ugly, and sometimes you need an
ugly tool to solve your ugly problem. Although a pretty tool may, in
fact, be able to solve the problem as well, chances are that an ugly PHP
solution can be implemented much quicker and with many fewer resources.
That generally sums up PHP's stubbornness."_

### What is the latest stable release of PHP?

Check the
<a href="https://www.php.net/downloads.php" class="external text"
target="_blank" rel="nofollow noreferrer noopener">official PHP download
page</a> for information on the latest PHP release.

### How do I tune for speed with PHP5 and MySQL5?

This is just a point by point summary of how I've been tuning and
tweaking our Joomla sites to get them running as quickly as possible.
For reference, we run all our sites off a Rackspace dedicated server,
with 1Gb RAM, a 2Ghz dual core Athlon, running Apache 2.0.x (current
revision), PHP 5.0.x (current revision) and MySQL 5.0.18.

These are listed in terms of apparent speed increase - that is, not the
sheer speed for the full page, but the speed before the page is usable
to view content, even if not all features are loaded.

1.  PHP caching. I had been running eAccelerator, but switched to APC
    today, and it has made the system even faster than before, and
    eAccelerator was a big boost over uncached PHP. Joomla is a big
    complex system, so using precompiled code is a big time saver. I use
    a 128Mb in-memory cache, which is plenty for our needs.
2.  MySQL Query Caching. This one will vary depending on how dynamic
    your site is, and you can really kill the benefits by using the
    wrong extensions (any date/time based will need checking), but if
    you are serving pretty much the same queries each page load, it will
    drop the load times noticably.
3.  Template Image optimisation - template images really slow down the
    initial page load for first time visitors, so optimising the hell
    out of them makes sense. Remember that your template is probably not
    going to change as often as your story content, so you can afford to
    spend more time on optimising the images for it that you would
    otherwise. I recommend Irfanview, with the pngout plugin active for
    PNG images, and it isn't bad for JPG and GIF images either. Don't
    forget to ramp up the compression level of PNGs, and, if possible,
    reducing them to indexed pallettes.
4.  CSS compression. Easy one this - put a little script to output a
    gzipped version of your CSS file(s) and point your _index.php_ at
    it. Example script below - I didn't write it, but it's short, to the
    point, and works.

<!-- -->

                 ob_start ("ob_gzhandler");
                 header("Content-type: text/css");
                 header("Cache-Control: must-revalidate");
                 $offset = 60 * 60 ;
                 $ExpStr = "Expires: " .
                 gmdate("D, d M Y H:i:s",
                 time() + $offset) . " GMT";
                 header($ExpStr);

1.  Strip unneeded modules, components, mambots from Joomla. If you
    haven't used them, the impact on your loading time is minimal, but
    with more components/modules active, there are more points of
    failure, and Apache errors are slow!
2.  Scrutinise the Apache error log. It is amazing how many errors can
    crop up even with a fairly minimal Joomla install, and they don't
    necessarily affect the appearance of the page. Check your error log,
    especially if you are using custom components/modules, or any
    non-standard config settings. Once you've noticed any problems, it's
    time to fix the code creating them, and test thoroughly before
    uploading the fixed versions.
3.  Keep rechecking as you add/remove features, redesign or change any
    server configuration options. Even things like adding virtual
    servers in Apache can affect speed of the server, as a missed config
    setting can cause general Apache delays.

### Should PHP run as a CGI script or as an Apache module?

There are two ways to configure Apache to use PHP:

1.  Configure Apache to load the PHP interpreter as an _Apache module_
2.  Configure Apache to run the PHP interpreter as a _CGI binary_

_(PS: Windows IIS normaly configures as CGI by the way)_

It is the intention of this post to provide you information relating to
the configuration and recognition of each method. "In general"
historically only one method or the other has been implemented, however,
with the architectural changes made to PHP starting with PHP5, it has
been quite common for hosting firms to configure for both. One version
running as CGI and one version running as a Module. It is generally
accepted more recently that running PHP as a CGI is more secure,
however, running PHP as an Apache Module does have a slight performance
gain and is generally how most pre-configured systems will be delivered
out of the box.

**What is the difference between CGI and Apache Module Mode?**

An Apache module is compiled into the Apache binary, so the PHP
interpreter runs in the Apache process, meaning that when Apache spawns
a child, each process already contains a binary image of PHP. A CGI is
executed as a single process for each request, and must make an exec()
or fork() call to the PHP executable, meaning that each request will
create a new process of the PHP interpreter. Apache is much more
efficient in its ability to handle requests, and managing resources,
making the Apache module slightly faster than the CGI (as well as more
stable under load).

CGI Mode on the other hand, is more secure because the server now
manages and controls access to the binaries. PHP can now run as your own
user rather than the generic Apache user. This means you can put your
database passwords in a file readable only by you and your PHP scripts
can still access it! The "Group" and "Other" permissions.

can now be more restrictive. CGI mode is also claimed to be more
flexible in many respects as you should now not see, with phpSuExec (
refer <a
href="http://www.joomlatutorials.com/joomla-tips-and-tricks/40-miscellaneous-joomla-tips/114-how-to-troubleshoot-a-joomla-installation.html"
class="external text" target="_blank"
rel="nofollow noreferrer noopener">" target="\_blank Permissions under
phpSuExec</a> issues with file ownership being taken over by the Apache
user, therefore you should no-longer have problems under FTP when trying
to access or modify files that have been uploaded through a PHP
interface, such as Joomla! upload options.

If your server is configured to run PHP as an Apache
mhttp://www.joomlatutorials.com/joomla-tips-and-tricks/40-miscellaneous-joomla-tips/114-how-to-troubleshoot-a-joomla-installation.htmlodule,
then you will have the choice of using either _php.ini_ or Apache
_.htaccess_ files, however, if your server runs PHP in CGI mode then you
will only have the choice of using _php.ini_ files locally to change
settings, as Apache is no longer in complete control of PHP.

**Testing and Reviewing Your PHP Installation**

_Also known as "Everything you ever wanted and didn't want to know about
PHP"_

To find out the PHP interpreter mode and to generally test your PHP
installation and to find out a vast amount of information about your PHP
environment, supported utilities, applications and settings, you create
a single PHP file containing _only_ the following lines;

    phpinfo();

This single line of code outputs an amazing amount of information, be
warned...

Save the file as any filename you wish, but with the ".php" extension.
FTP it to your server and open it in a browser.

**Other useful information**

The following are PHP functions, that when run from a PHP File can
provide some useful information, _(less than the above option)_ many
should run on most hosts, however many hosts disable some of these
functions for security. No Guarantee's offered...

Again, as above, make a file, name it anything you wish but make sure it
has the _.php_ extension, copy and paste the following lines in to it
and FTP to your server.

    <?
    echo "Hostname: ". @php_uname(n) ."";
    if (function_exists( 'shell_exec' )) { echo "Hostname: ".
    @gethostbyname(trim(`hostname`)); } else { echo "Server IP: ".
    $_SERVER['SERVER_ADDR'] .""; }
    echo "Platform: ". @php_uname(s) ." ". @php_uname(r) ." ". @php_uname(v) ."";
    echo "Architecture: ". @php_uname(m) ."";
    echo "Username: ". get_current_user () ." ( UiD: ". getmyuid() .", GiD: ". getmygid() ." )";
    echo "Curent Path: ". getcwd () ."";
    echo "Server Type: ". $_SERVER['SERVER_SOFTWARE'] . "";
    echo "Server Admin: ". $_SERVER['SERVER_ADMIN'] . "";
    echo "Server Signature: ". $_SERVER['SERVER_SIGNATURE'] ."";
    echo "Server Protocol: ". $_SERVER['SERVER_PROTOCOL'] ."";
    echo "Server Mode: ". $_SERVER['GATEWAY_INTERFACE'] ."";

    ?>

The Joomla! HISA or Joomla! Tools Suite can also assist to determine
which mode your server in running in, also providing a large amount of
other related information including recommendations on configuration.

**Joomla! Tools Suite** (JTS) is a complete suite of Tools to help you
troubleshoot and maintain Joomla! and include the "HISA" script.
<a href="http://joomlacode.org/gf/project/jts/" class="external text"
target="_blank" rel="nofollow noreferrer noopener">Download JTS Here</a>

**Joomla! Health, Installation and Security Audit** (HISA) is a single
standalone script that provides purely configuration information.
<a href="http://joomlacode.org/gf/project/hisa/" class="external text"
target="_blank" rel="nofollow noreferrer noopener">Download HISA
Here</a>

-   <a href="http://forum.joomla.org/viewtopic.php?t=136328"
    class="external text" target="_blank" rel="noreferrer noopener">Forum
    Discussion Here</a> (Project is
    <a href="http://forum.joomla.org/viewtopic.php?p=1804483#p1804483"
    class="external text" target="_blank"
    rel="noreferrer noopener"><em>Dormant</em></a> since August 2010)

<!-- -->

-   <a
    href="http://www.joomlatutorials.com/joomla-tips-and-tricks/40-miscellaneous-joomla-tips/114-how-to-troubleshoot-a-joomla-installation.html"
    class="external text" target="_blank"
    rel="nofollow noreferrer noopener">How to TroubleShoot A Joomla!
    Installation</a>

Another Indirect method, and possibly not 100% reliable, is that if you
are unable to make use of _.htaccess_ on Linux hosting and Apache based
servers then you are either running in CGI mode or your host has
disabled the use of _.htaccess_ even if your server is running PHP as an
Apache Module.

**Remove these files immediately after use, the information contained in
their output is extensive and explicit regarding your PHP and server
configurations, it will help those wishing to cause your site harm**

**For those wishing to know more about "How To..."**

Running PHP as an Apache module

To configure Apache to load PHP as a module to _parse_ your PHP scripts,
the _httpd.conf_ needs to be modified, typically found in _c:\Program
Files\Apache Group\Apache\conf\\_ or _/etc/httpd/conf/_.

Search for the section of the file that has a series of commented out
_LoadModule_ statements. (Statements prefixed by the hash "#" sign are
regarded as having been commented out.) If PHP is running in "Apache
Module" Mode you should see something similar to the following;

LoadModule php4_module "c:/php/php4apache.dll"

**Apache 1.x**

**For PHP5**

    LoadModule php5_module     C:/php/php5apache2.dll

    or (platform dependant)

    LoadModule php5_module     /usr/lib/apache/libphp5.so

**For PHP4**

    LoadModule php4_module libexec/libphp4.so

    or (platform dependant)

LoadModule php4_module C:/php/php4apache.dll

**_and_**

    AddModule mod_php4.c

_or_

    AddModule mod_php5.c

    Apache 2.x

**For PHP5**

    LoadModule php5_module     C:/php/php5apache2.dll

_or (platform dependant)_

    LoadModule php5_module     /usr/lib/apache/libphp5.so

**For PHP4**

    LoadModule php4_module     libexec/libphp4.so

_or (platform dependant)_
LoadModule php4_module C:/php/php4apache.dll

**_and_**
AddModule mod_php5.c

_or_
AddModule mod_php4.c

**Note:**
Don't worry that you can't find a "mod_php4.c" or "mod_php5.c" file
anywhere on your system. That directive does not cause Apache to search
for the file on your system. For the curious, it specifies the order in
which the various modules are enabled by the Apache server.

_If you're using Apache 2.x, you do not have to insert the AddModule
directive. It's no longer needed in that version. Apache 2.x has its own
internal method of determining the correct order of loading the
modules._

Now find the "AddType" section in the file, and add the following line
after the last "AddType" statement:

    AddType application/x-httpd-php .php

If you need to support other file types, such as _.php3_ and _.phtml_,
simply add them to the list, like this:

    AddType application/x-httpd-php .php3

    AddType application/x-httpd-php .phtml

Run a syntax check and if all is ok, restart Apache...

**Running PHP as a CGI binary**

To configure PHP to run as a CGI, again you will need to configure the
_httpd.conf_, but confirm that the above settings are not also
configured, unless you now what you are doing you can generate yourself
"HTTP 500" errors. Search your Apache configuration file for the
"ScriptAlias" section.

Add the following line below after the ScriptAlias for "cgi-bin".

**Note:**

The location will depend on where PHP is installed on your system, you
should substitute the appropriate path in place of "c:/php/" (for
example, "c:/Program Files/php/").

ScriptAlias /php/ "c:/php/"

Apache again needs to be configured for the PHP MIME type. Search for
the "AddType" section, and add the following line after it:

AddType application/x-httpd-php .php

As in the case of running PHP as an Apache module, you can add whatever
extensions you want Apache to recognise as PHP scripts, such as:

AddType application/x-httpd-php .php3
AddType application/x-httpd-php .phtml

Next, you will need to tell the server to execute the PHP executable
each time it encounters a PHP script. Add the following below any
existing entries in the "Action" section.

Action application/x-httpd-php "/php/php.exe"

If you notice, we have used the "ScriptAlias" reference, "/php/" portion
will be recognised as the scriptAlias configured above, this is sort a
path alias which will correlate to your PHP installation path configured
previously. In other words, don't put _c:/php/php.exe_ or _c:/Program
Files/php/php.exe_ in that directive. Put _/php/php.exe_. Apache will
work it out if correctly configured.

**Configuring the Default Index Page**

This section applies to all users, whether you are loading PHP as a
module or running it as a CGI binary, and has been seen often enough to
warrant a mention.

If you want to make your PHP script execute as the default page for a
directory, you have to add another line to the _httpd.conf_. Simply
search for the line in the file that begins with a _DirectoryIndex_ and
add _index.php_ to the list of files on that line. For example, if the
line used to be:

DirectoryIndex index.html

_change it to_

DirectoryIndex index.html index.php
_If you still wish .html files to be executed before .php files_

_or_
DirectoryIndex index.php index.html
_If you wish .php files to be executed before .html files_

The next time you access the site or a directory within a site without a
filename, Apache will "auto-magically" deliver "index.php" if available,
or "index.html" if "index.php" is not available.

### Why shouldn't I use PHP safe_mode?

Enabling safe_mode is not needed if other reasonable security
precautions are followed. Using safe_mode for web site security is a
poor compromise in a bad situation. It may make sense in some
situations, but there is almost always a better way. Because safe_mode
in some sense only gives the illusion of safety, it will be removed from
PHP starting with version 6.0.

The Joomla! core works fine with or without PHP safe_mode. The one
exception to this rule is the installation script. This is because
safe_mode, by design, turns off the PHP functions that enable easy
uploading via a Web browser. If you do use safe_mode, and need to
perform installs via the Web browser, temporarily turn safe_mode OFF,
and turn it back ON when finished.

Some third-party extensions may require the specific PHP functions that
are blocked by safe_mode. Such extensions should be carefully evaluated
to be sure you understand exactly why they require such powerful and
potentially dangerous functions.

**From the official PHP site**

_"The PHP safe mode is an attempt to solve the shared-server security
problem. It is architecturally incorrect to try to solve this problem at
the PHP level, but since the alternatives at the web server and OS
levels aren't realistic, many people, especially ISPs, use safe mode for
now."_ **More Information**

1.  <a
    href="http://us3.php.net/manual/en/features.safe-mode.php#ini.safe-mode"
    class="external text" target="_blank"
    rel="nofollow noreferrer noopener">Official PHP Manual: PHP Security and
    Safe Mode Configuration Directives</a>
2.  <a href="http://us3.php.net/manual/en/features.safe-mode.functions.php"
    class="external text" target="_blank"
    rel="nofollow noreferrer noopener">Official PHP Manual: PHP Functions
    restricted/disabled by safe mode</a>

## Development

### How do I setup a secure demo site?

In /includes/version.php look for:

    /** @var string Whether site is a production = 1 or demo site = 0 */
    var $SITE = 1;
    /** @var string Whether site has restricted functionality mostly used for demo sites: 0 is default */
    var $RESTRICT = 0;

For a demo site it is advised to following:

    /** @var string Whether site is a production = 1 or demo site = 0 */
    var $SITE = 0;
    /** @var string Whether site has restricted functionality mostly used for demo sites: 0 is default */
    var $RESTRICT = 1;

    $SITE = 0
    // Allows multiple user logins with only one account. By default Joomla!
    // allows only one active session per account as a security feature.

    $RESTRICT = 1
    // Disables those logging in, both Frontend and Backend from changing
    // user details - like password and username

These settings are used on the official demo site
<a href="http://demo.joomla.org" class="external free" target="_blank"
rel="noreferrer noopener">http://demo.joomla.org</a>

You should also make all files and folders nonwriteable - especially the
_configuration.php_ file. Also recommend you setup an automatic cron job
that refreshes the database at a set interval (in our case 60mins) from
a db script.

### How can I view a live site while developing, but hide it from others?

The method described below should be used for relatively minor
modifications, such as adjusting menus or quickly reorganizing content
sections. More complex tasks, such as installing new components or
adjusting complex configuration settings should be performed and tested
on a development server first. Not only does this keep your public site
up and running, but it also lets you test at your leisure, thus reducing
errors. One way to do it is to create a sub-domain (i.e.,
dev.yourdomain.com) and install Joomla! there just as it is installed on
your public site.

**Directions**

1\. Login to the administrator section, and choose: Site \> Global
Configuration.

2\. The first option you'll see is is to set the site offline. Choose
"Yes" and press the Save button. This will hide prevent display of all
site pages, and replace them with the following message:

    "This site is down for maintenance. Please check back again soon. message instead."

3\. While you are logged into the Backend administrator system, you can
still view the Frontend, by choosing Site \> Template \> Preview. This
will display the site as it would appear to users along with a warning
at the top that the site is down for maintenance.

## Site Recovery

### Help! My Site's Been Compromised. Now What?

**Directions**

1.  **Change all relevant passwords:** Assume your passwords have been
    harvested and immediately change all critical passwords, including
    shell access, FTP access, Joomla! Administrator accounts, and the
    database account.
2.  **Check raw logs:** Identify when and how the attackers gained
    access to your site by carefully reviewing your raw server logs.
    Make careful note of the date/time and names of attacked files. Note
    that these logs may have been deleted or altered, so a lack of
    evidence does not prove a lack of activity.
3.  **List recently modified files:** Before making any changes to your
    site, generate a list of recently modified files. Here's a php
    script that will list the files for you. Remove this script as soon
    as you have your list and don't publish a link to it!
4.  **Note suspicious newly-created files:** Use this list to identify
    new files that don't belong. Pay particular attention to their
    creation and modification dates, and correlate them to the dates of
    attacks shown in your log files.
5.  **Note suspicious recently-modified files:** Check the modified
    files list for any files that were recently changed. Pay particular
    attention to the modification, and correlate them to the dates of
    attacks shown in your log files.
6.  **Check for bogus CRON Jobs:** Hacked cron jobs can be setup to
    reinfect your site over and over again.
7.  **Coordinate with your host:** If you have identified how you were
    cracked, report the method to your host. If you are on a shared
    server, you may have been attacked through another vulnerable site
    on your server. Report this to your host. A reputable host will
    appreciate your efforts in this area.
8.  **Delete the entire _public_html_ directory:** This is the best way
    to guarantee that every potential vulnerability in that site is
    removed.
9.  **Delete related database records:** This step may only be possible
    if you have good backups. Simple script kiddies, who are only trying
    to mark your index page, may not attack your database, but
    professionals are usually interested in confidential data, such as
    passwords. They may pose as script kiddies to avoid suspicion while
    repeatedly harvesting confidential information from your database.
10. **Reinstall everything:** Use pre-crack backups. If you don't have
    good backups, reinstall everything anyways.
11. **Reset critical passwords again:** You must reset your passwords
    again now that your server is finally cleaned of any possible hidden
    trojan horses.
12. **Rebuild site:** If you are unable to rebuild from clean backups,
    rebuild your entire site using original, pre-crack installs. Use
    only the latest stable versions of all software, and check the List
    of Vulnerable Extensions
13. **Review security processes:** Follow standard security precautions
    for important settings in _php.ini_, _globals.php_,
    configuration.php, _.htaccess_, etc.
14. **Review backup processes:** If you don't already have one, add a
    dependable backup process to your site administration practices.
15. **Stay watchful:** Attackers often return repeatedly. Closely
    monitor your raw logs for suspicious activity.

### How do I reset an administrator password?

**Note:** This method is for Joomla versions up to and including
1.0.12<img src="https://docs.joomla.org/images/4/43/Compat_icon_1_0.png"
decoding="async" data-file-width="40" data-file-height="17" width="40"
height="17" alt="Joomla 1.0" />. For later versions of Joomla and Joomla
1.5.xx versions please use this **(<a
href="https://docs.joomla.org/How_do_you_recover_your_admin_password%3F"
class="mw-redirect"
title="How do you recover your admin password?">FAQ</a>)**

Because passwords are stored using a one-way MD5 hash which prevents
recovering the password, you cannot recover an existing password, but
you can reset it to a new password by editing the password field in the
database. In the following directions, you will set the password MD5
value to a known value and then log-in using the password that matches
that value. Once logged in, you can change the password again using
normal Joomla! user access screens.

**Enhanced Password Encryption Note Joomla! 1.0.13+ and Joomla! 1.5.x**
This method works with the new salt-enhanced passwords. This is because
Joomla! will automatically update passwords in the earlier format.

**Directions**

1\. Use a MySQL utility such as phpMyAdmin or MySQL Query Browser .

2\. Open the correct database and select the table, jos_users . (Change
default table prefix, 'jos\_' to your table prefix if it is different.)

3\. Select the record (or table row) for your administrator account.
(The default Super Administrator is user number 62.)

4\. Copy and paste a known MD5 hash into the password field. You can use
one of the below examples. **Warning:** You must paste the password's
hash value, not the password itself. You can use any of the following
hashs, or create your own using one of the MD5 tools listed below.

    password = "MD5 hash of password"
    ------------------------------------------------------
    admin = 21232f297a57a5a743894a0e4a801fc3
    secret = 5ebe2294ecd0e0f08eab7690d2a6ee69
    OU812 = 7441de5382cf4fecbaa9a8c538e76783

5\. Save the user record.

6\. Point a browser to your site and log in using the Super
Administrator account you just modified.

7\. **IMPORTANT:** Once logged in, use the Joomla interface to change
the password to one that only you know. This step is vital as it will
'salt' your new password, thus adding an additional level of security on
top of the MD5 hash.

Note: This technique can be used to modify any other accounts password.
You can also use it to change Usernames.

**Generating your own MD5 hash from a password of your choice**

Alternatively, you can set the password to a value of your own choice.
Use tools, such as the following, to create your own strong hashed
password. Use the above directions once you've generated a hash with
these tools.

**Online MD5 hash creation tools**

-   JavaScript MD5 -
    <a href="https://pajhome.org.uk/crypt/md5/" class="external free"
    target="_blank"
    rel="nofollow noreferrer noopener">https://pajhome.org.uk/crypt/md5/</a>

**Free MD5 utilities for download**

-   MD5 & Hashing Utilities - <a
    href="https://www.digital-detective.net/digital-forensic-software/free-tools/"
    class="external free" target="_blank"
    rel="nofollow noreferrer noopener">https://www.digital-detective.net/digital-forensic-software/free-tools/</a>
-   SlavaSoft HashCalc -
    <a href="http://www.slavasoft.com/hashcalc/index.htm"
    class="external free" target="_blank"
    rel="nofollow noreferrer noopener">http://www.slavasoft.com/hashcalc/index.htm</a>

**Other MD5 tools**

-   There are many free online and downloadable MD5 utilities. Google _MD5
    hash tool_

### How do I find exploits using the \*NIX shell?

**Check the active processes**

Use the _ps_ command to look for odd or unknown processes. If you aren't
sure what to look for there, user _netstat -ae \| grep irc_ and _netstat
-ea \| grep 666_ and look for ports 6666, 6667, 6668, 6669. These are
common ports used for running IRC bots. They may have the name _irc_
listed against them, or may have _httpd_ or sometimes other regular
services names.

**Check crontab**

Check your crontab and see if there is a strange entry, these are used
in many exploits to restart IRC bots, even when admins or automated
process monitors are used to kill a rogue process.

**Check for hidden files or directories**

Check for hidden files or directories you dont expect to see, those
starting with "." (dots) and also look for ". " (dot, space) often
favored to try and catch searches for hidden directories.

Other examples of searches that may help pin down exploits and/or
unexpected files and folders:

    find /home -type f | xargs grep -l MultiViews
    find . -type f | xargs grep -l base64_encode <<< this can produce false positives, it is valid in many mail/graphics scripts
    find . -type f | xargs grep -l error_reporting
    find / -name "[Bb]itch[xX]"
    find / -name "psy*"
    ls -lR | grep rwxrwxrwx > listing.txt

### What are these strange (URL-Encoded) characters doing in my code?

Attackers sometimes hide code away from prying eyes by URL Encoding it.

The purpose of URL Encoding is to allow non-URL compatible characters to
be passed via the URL. There are many legitimate reasons for doing this,
such as hiding email from spammers, dealing with spaces in file names.
etc.

However, if you find odd, URL-encoded text in your site's files, you
should investigate immediately. URL encoded text is easy to translate
using PHP, JavaScript, or one of the many free, online translators.

Here are some trivial, non-functioning examples of URL Encoded text:

**Resources**

1.  <a href="http://www.linkedresources.com/tools/unescaper_v0.2b1.html"
    class="external text" target="_blank"
    rel="nofollow noreferrer noopener">Text Unescape Utility</a>
2.  <a href="https://www.w3schools.com/tags/ref_urlencode.asp"
    class="external text" target="_blank"
    rel="nofollow noreferrer noopener">HTML URL-encoding Reference</a>
