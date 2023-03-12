<!-- Filename: Security_Checklist/Hosting_and_Server_Setup / Display title: Security Checklist/Hosting and Server Setup -->

<table class="navbox" data-cellspacing="0">

<tbody>
<tr class="odd">
<td><table class="nowraplinks navbox-inner" data-cellspacing="0">

<tbody>
<tr class="header">
<th colspan="2" class="navbox-title" scope="col">Security Checklist <img
src="https://docs.joomla.org/images/7/7b/Compat_icon_CMS.png"
decoding="async" data-file-width="87" data-file-height="17" width="87"
height="17" alt="Joomla CMS" /></th>
</tr>
&#10;<tr class="odd">
<td></td>
<td></td>
</tr>
<tr class="even">
<td colspan="2" class="navbox-abovebelow"></td>
</tr>
<tr class="odd">
<td></td>
<td></td>
</tr>
<tr class="even">
<td colspan="2" class="navbox-list navbox-odd"><table
class="nowraplinks navbox-subgroup" data-cellspacing="0">

<tbody>
<tr class="header">
<th colspan="2" class="navbox-title" scope="col"><em>Articles in this
series</em></th>
</tr>
&#10;<tr class="odd">
<td></td>
<td></td>
</tr>
<tr class="even">
<td colspan="2" class="navbox-list navbox-odd"><ul>
<li><a href="https://docs.joomla.org/Security_Checklist/Getting_Started"
title="Special:MyLanguage/Security Checklist/Getting Started">Getting
Started</a></li>
<li><a
href="https://docs.joomla.org/Security_Checklist/Hosting_and_Server_Setup"
title="Special:MyLanguage/Security Checklist/Hosting and Server Setup">Hosting
and Server Setup</a></li>
<li><a href="https://docs.joomla.org/Enabling_HTTPS_on_your_site"
title="Special:MyLanguage/Enabling HTTPS on your site">Enabling HTTPS on
your site</a></li>
<li><a
href="https://docs.joomla.org/Security_Checklist/Where_can_you_learn_more_about_file_permissions%3F"
title="Special:MyLanguage/Security Checklist/Where can you learn more about file permissions?">Learn
about file permissions</a></li>
<li><a
href="https://docs.joomla.org/Security_Checklist/Testing_and_Development"
title="Special:MyLanguage/Security Checklist/Testing and Development">Testing
and Development</a></li>
<li><a href="https://docs.joomla.org/Security_Checklist/Joomla!_Setup"
title="Special:MyLanguage/Security Checklist/Joomla! Setup">Joomla!
Setup</a></li>
<li><a
href="https://docs.joomla.org/Security_Checklisthttps://docs.joomla.org/Security%20Checklist/Site%20Administration">Site
Administration</a></li>
<li><a
href="https://docs.joomla.org/Security_Checklisthttps://docs.joomla.org/Security%20Checklist/Site%20Recovery">Site
Recovery</a></li>
<li><a
href="https://docs.joomla.org/Security_Checklist/You_have_been_hacked_or_defaced"
title="Special:MyLanguage/Security Checklist/You have been hacked or defaced">You
have been hacked or defaced</a></li>
</ul></td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table></td>
</tr>
</tbody>
</table>

## Choose a Qualified Hosting Provider

### The most important decision

Probably no decision is more critical to site security than the choice
of hosts and servers. However, due to the wide variety of hosting
options and configurations, it's not possible to provide a complete list
for all situations. Check this
<a href="https://resources.joomla.org/en/category/hosting-providers"
class="external text" target="_blank" rel="noreferrer noopener">list of
hosts</a> who meet the security requirements of a typical Joomla site.
([FAQ](https://docs.joomla.org/Security_and_Performance_FAQs#How_do_I_choose_a_quality_hosting_provider.3F "Special:MyLanguage/Security and Performance FAQs"))

### Shared server risks

If you are on a tight budget and your site does not process highly
confidential data, you can probably get by with a shared server, but you
must understand the unavoidable risks. Most of the tips listed below are
appropriate for securing sites on shared server environments.

## Configuring Apache

### Use Apache .htaccess

*See also [.htaccess
examples](https://docs.joomla.org/htaccess_examples_(security) "Special:MyLanguage/htaccess examples (security)")*

Block typical exploit attempts with local Apache *.htaccess* files. This
option is not enabled on all servers. Check with your host if you run
into problems. Using *.htaccess*, you can password protect sensitive
directories, such as administrator, restrict access to sensitive
directories by IP Address, and depending on your server's configuration,
you may be able to increase security by switching to PHP7.

Joomla ships with a [preconfigured
.htaccess](https://docs.joomla.org/Preconfigured_htaccess "Special:MyLanguage/Preconfigured htaccess")
file, but \*you\* need to choose to use it. The file is called
htaccess.txt. To use it, rename it to .htaccess and place it in the root
of your site using FTP. One important point to note is that as the
distributed file is called htaccess.txt and the live file on your site
is called .htaccess, the file your site actually uses is NOT updated
when you update your site to use to a new version of Joomla. You must
manually make the changes to use the new file version.

Consider following the "Least Privilege" principle for running PHP using
tools such as PHPsuExec, php_suexec or suPHP. (Note: These are advanced
methods that require agreement and coordination with your hosting
provider. Such options are enabled or disabled on a server-wide basis
and are not individually adjustable on shared servers.)

Consider using a serverside filtering solution like Apache
mod_security - a great starting point is the OWASP ModSecurity
<a href="https://coreruleset.org/" class="external text" target="_blank"
rel="nofollow noreferrer noopener">CoreRuleSet</a>

### PHP Being Run as an Apache Module

This causes ownership issues and thus permission problems which will
lead to security issues. It is better to select a server setup/host that
runs php as a cgi process (such as cgi-fcgi) along with using phpSuExec
or a similar configuration.

The two best tutorials and explanations on permissions, ownerships and
their relations are from this official Joomla doc page:

- [File
  Permissions](https://docs.joomla.org/Where_can_you_learn_more_about_file_permissions%3F "Special:MyLanguage/Where can you learn more about file permissions?")
- [File ownership
  advice](https://docs.joomla.org/Why_can%27t_you_install_any_extensions%3F#File_ownership_advice_from_ianmac "Special:MyLanguage/Why can't you install any extensions?")

Specific topics to read would be the following two:

- [Unix Permissions
  Primer](https://docs.joomla.org/How_do_UNIX_file_permissions_work%3F "Special:MyLanguage/How do UNIX file permissions work?")

And for information on phpSuExec and similar implementations:

- [Using
  phpSuExec](https://docs.joomla.org/Using_phpSuExec "Special:MyLanguage/Using phpSuExec")

### Use Apache mod_security

Configure Apache mod_security and mod_rewrite filters to block PHP
attacks. See
<a href="https://www.google.com/search?q=apache%20mod_security"
class="external text" target="_blank"
rel="nofollow noreferrer noopener">Google search for mod_security</a>
and <a href="https://www.google.com/search?q=apache%20mod_rewrite"
class="external text" target="_blank"
rel="nofollow noreferrer noopener">Google search for mod_rewrite</a>.
(Note: These are advanced methods that usually require agreement and
coordination with your hosting provider. Such options are enabled or
disabled on a server-wide basis and are not individually adjustable on
shared servers.)

## Configuring MySQL

### Secure the database

Be sure MySQL accounts are set with limited access. The initial install
of MySQL is insecure and careful configuration is required. (See the
<a href="http://dev.mysql.com/doc/" class="external text"
target="_blank" rel="nofollow noreferrer noopener">MySQL Manuals</a>)
Note: This item applies only to those administering their own servers,
such as dedicated servers. Users of shared servers are dependent on
their hosting provider to set proper database security.)

## Configuring PHP

### Understand how PHP works

Understand how to work with the php.ini file, and how PHP configurations
are controlled. Study the
<a href="http://us3.php.net/manual/en/ini.php#ini.list"
class="external text" target="_blank"
rel="nofollow noreferrer noopener">Official List of php.ini
Directives</a> at
<a href="http://www.php.net" class="external free" target="_blank"
rel="nofollow noreferrer noopener">http://www.php.net</a>, and the
well-documented default php.ini file included with every PHP install.

### Use PHP7

PHP versions become deprecated and some have become obsolete. Some
hosting providers still have several available on servers to support
outdated scripts. Joomla
<img src="https://docs.joomla.org/images/4/4d/Compat_icon_3_x.png"
decoding="async" data-file-width="40" data-file-height="17" width="40"
height="17" alt="Joomla 3.x" /> and higher should be using PHP7.x. (See
<a href="https://downloads.joomla.org/technical-requirements"
class="external text" target="_blank" rel="noreferrer noopener">Joomla
Requirements</a>)

### Use local php.ini files

On shared servers you can't edit the main php.ini file, but you may be
able to add custom, local php.ini files. If so, you'll need to copy the
php.ini files to every sub-directory that requires custom settings.

**There are a few important things to keep in mind.**

1.  Local *php.ini* files ***only*** have an effect if your server is
    configured to use them. This includes a *php.ini* file in your
    *http_root* directory. You can test whether or not these file affect
    your site by setting an obvious directive in the local *php.ini*
    file to see if it affects your site.
2.  Local *php.ini* files only affect *.php* files that are located
    within the same directory (or included() or required() from those
    files). This means that there are normally only two Joomla!
    directories in which you would want to place a *php.ini* file. They
    are your *http_root*(your actual directory name may vary), which is
    where Joomla's Front-end *index.php* file is located, and the
    Joomla! *administrator* directory, which is where the backend
    administrator *index.php* file is located. Other directories that
    don't have files called via the Web do not need local *php.ini*
    files.
3.  If you have a *php.ini* file in every directory, some script
    probably did this for you. If you didn't intend it to happen, you
    probably should root them out, but given \#2 above, you probably
    only have to panic about the *php.ini* files in *http_root* and the
    *administrator* directories.

### Use PHP disable_functions

Use *disable_functions* to disable dangerous PHP functions that are not
needed by your site. Here is a typical setup for a Joomla! site:

         disable_functions = show_source, system, shell_exec, passthru, exec, phpinfo, popen, proc_open

### Consider Using PHP open_basedir

You *might* consider enabling *open_basedir*. This directive limits the
files that can be opened by PHP to the specified directory-tree. This
directive is NOT affected by whether Safe Mode is ON or OFF.

The restriction specified with open_basedir is a prefix, not a directory
name. This means that *open_basedir = /dir/incl* allows access to
*/dir/include* and */dir/incls* if they exist. To restrict access to
only the specified directory, end with a slash. For more information,
see <a
href="http://us3.php.net/manual/en/features.safe-mode.php#ini.safe-mode"
class="external text" target="_blank"
rel="nofollow noreferrer noopener">PHP Security and Safe Mode
Configuration Directives</a>.

        open_basedir = /home/users/you/public_html

Additionally, if *open_basedir* is set it may be necessary to set PHP
*upload_tmp_dir* configuration directive to a path that falls within the
scope of *open_basedir* or, alternatively, add the *upload_tmp_dir* path
to *open_basedir* using the appropriate path separator for the host
system.

        open_basedir = /home/users/you/public_html:/tmp

PHP will use the system's temporary directory when *upload_tmp_dir* is
not set or when it is set but the directory does not exist, therefore it
may be necessary to add it to *open_basedir* as above to avoid uploading
errors within Joomla.

### Adjust magic_quotes_gpc

**<span class="small">*This PHP feature has been depreciated as of PHP
5.3.0 (30-06-2009) and has been removed from php as of PHP
5.4.0.*</span>**

Adjust the *magic_quotes_gpc* directive as needed for your site.

- Joomla! 3.0 and above **requires** *magic_quotes_gpc* to be set to off
  and will not install if *magic_quotes_gpc* is on.
- Joomla! advises *magic_quotes_gpc* to be set to off when using Joomla
  2.5.xx.
- Joomla! 1.5 ignores the magic_quotes setting and works fine either
  way. The safest method is to turn magic_quotes_gpc off and avoid all
  poorly-written extensions.
- The recommended settings for Joomla! 1.0.x is ON to protect against
  poorly-written third-party extensions.

For more information, see either [Magic quotes and
security](https://docs.joomla.org/Magic_quotes_and_security "Special:MyLanguage/Magic quotes and security")
or <a href="http://php.net/magic_quotes" class="external text"
target="_blank" rel="nofollow noreferrer noopener">PHP Manual, Chapter
31. Magic Quotes</a>.

    to turn off    magic_quotes_gpc = 0
    to turn on     magic_quotes_gpc = 1

### Don't use PHP safe_mode

**<span class="small">*This PHP feature has been DEPRECATED as of PHP
5.3.0 and REMOVED as of PHP 5.4.0*</span>**

Relying on this feature is highly discouraged. Avoid the use of PHP
safe_mode. This was an attempt to solve shared security problems and
provides a false sense of security. Safe mode can also cause ownership
problems with applications and any files created by the applications.
See the official PHP site for more information.
<a href="http://php.net/manual/en/features.safe-mode.php"
class="external text" target="_blank"
rel="nofollow noreferrer noopener">PHP Manual: Safe Mode</a>

         safe_mode = 0

### Don't use PHP register_globals

**<span class="small">*This PHP feature has been DEPRECATED as of PHP
5.3.0 and REMOVED as of PHP 5.4.0*</span>**

Automatically registering global variables was probably one of the
dumbest decisions the developers of PHP made. This directive determines
whether or not to register the EGPCS (Environment, GET, POST, Cookie,
Server) variables as global variables where they become immediately
available to all PHP scripts, and where they can easily overwrite your
own variable if you're not careful. Luckily, the PHP developers long
since realized the mistake and have deprecated this 'feature'.

If your site is on a shared server with a hosting provider that insists
*register_globals* must be on, you should be very worried. Although you
can often turn register_globals off for your own site with a local
php.ini file, this adds little security as other sites on the same
server remain vulnerable to attacks which can then launch attacks
against your site from within the server.

For more information, see
<a href="http://php.net/manual/en/security.globals.php"
class="external text" target="_blank"
rel="nofollow noreferrer noopener">PHP Manual: Using Register
Globals</a>.

         register_globals = 0

### Don't use PHP allow_url_include

Do not use PHP *allow_url_include*. This PHP option allows a programmer
to include a remote file using an URL rather than a local file path.
This is insecure. If an application (or extension) can be tricked into
including content from a URL outside itself, an attacker could force the
application (or extension) to start running code from their own web
site. If an application or extension claims to require this feature to
function, you should look into alternatives, as a requirement to use of
this feature indicates serious design flaws within the application or
extension.

### Use allow_url_fopen

This option enables the URL-aware fopen wrappers that enable accessing
URL object like files. Default wrappers are provided for the access of
remote files using the ftp or http protocol, some extensions like zlib
may register additional wrappers. Note: This can only be set in php.ini
due to security reasons. **Enable and use allow_url_fopen to allow
Joomla's One-Click-Update to work properly.**

For more information see: <a
href="http://www.php.net/manual/en/filesystem.configuration.php#ini.allow-url-fopen"
class="external text" target="_blank"
rel="nofollow noreferrer noopener">PHP Manual: allow_url_fopen and
allow_url_include</a>

       Proper setup will have this:
                    allow_url_fopen = 1
                  allow_url_include = 0
      
       PHP default: allow_url_fopen is enabled
       PHP default: allow_url_include is disabled

## File permissions

If a Joomla installation is hosted on Apache with mod_php, then all
virtual hosts on that server run in the same context as your joomla
code. If the files are owned by some other user than 'nobody' or
'wwwrun', the safest permissions are those which **prevent** changes to
the joomla code, unless via an authorised channel (e.g. FTP:

- DocumentRoot directory: 750 (e.g. public_html)
- Files: 644
- Directories: 755 (711 if you are paranoid, but not for directories
  which need to be listed) (owner: some user)

With these permissions set, you will need to use FTP to update your
Joomla installation. Not all modules support this. Remove modules which
do not support FTP upgrades.

Other processes running under mod_php can read **your**
configuration.php. You can frustrate automated hacks by renaming this
file. You should not store your FTP password in your configuration file
on such hosts, as your account *will* be compromised.

If a Joomla installation is hosted on Apache with fast-cgi, suphp or cgi
that runs as a different user, then you should set your permissions as
follows:

- DocumentRoot directory: 750 (e.g. public_html)
- PHP files: 600 (400 if you are truly paranoid)
- HTML and image files: 644 (444 if you are truly paranoid)
- Directories: 755 (711 if you are paranoid, but not for directories
  which need to be listed)

**If** the server your are on requires 777 permissions for Joomla to
work correctly, then **request to be put on another server** with php as
cgi and suphp and up-to-date serverside software (apache, php etc) on
your existing host or find another server host if necessary.

Do check with your hosting provider to see if they have purposely
secured the server your site is on; and that they or you perform regular
(weekly) security updates to keep the server up to date. Check you have
jail shell. A rule of thumb is the less you pay, the less they care.

More information on file permissions can be found here: [File
permissions](https://docs.joomla.org/Security_Checklist/Where_can_you_learn_more_about_file_permissions%3F "Special:MyLanguage/Security Checklist/Where can you learn more about file permissions?")

## Setup a backup and recovery process

### The most important rule

You should at all time be able to return your site to a previous working
state through regular use of a strong, off-site backup and recovery
process. Be sure your backup and recovery process is in place and tested
BEFORE you go live. This is the single best way (and often the only way)
to recover from such inevitable catastrophes as:

1.  Broken site due to a faulty upgrade.
2.  Hardware failure, such as dead hard drives, power failures, server
    theft, etc.
3.  Authoritarian government intervention. (More common than some
    think.)
4.  Needing to quickly relocate to a new server or hosting provider.

Backups are not recommended for restoring a compromised/hacked site as
it is possible the backups will contain the altered and hack files.
Using the backups to restore a hacked site would just restore the hack
to the site.
