<!-- Filename: Security_Checklist/You_have_been_hacked_or_defaced / Display title: Security Checklist/You have been hacked or defaced -->

## You have been hacked/defaced ?

We are sorry for any basic language used in this document. Before you
post in the
<a href="https://forum.joomla.org/viewforum.php?f=714" class="extiw"
title="jforum:714">Joomla! Security Forum</a>
<a href="http://forum.joomla.org/viewtopic.php?f=432&amp;t=475313"
class="external text" target="_blank" rel="noreferrer noopener">please
read this</a> checklist summary, then use it as a post template.

### On Line Action List

-   Take your [website
    offline](https://docs.joomla.org/Taking_the_website_temporarily_offline#Using_the_htaccess_method_.28cpanel.29 'Taking the website temporarily offline')
    (**We recommend the htaccess method**)

<!-- -->

-   Run the
    <a href="https://github.com/ForumPostAssistant/FPA/zipball/en-GB"
    class="external text" target="_blank"
    rel="nofollow noreferrer noopener">forum post assistant and security
    tool</a> The simple Instructions are
    <a href="http://forum.joomla.org/viewtopic.php?f=621&amp;t=582860"
    class="external text" target="_blank"
    rel="noreferrer noopener">available here</a>. More detailed
    instructions are included in the download package. You will need to
    unzip this package and upload the fpa-en.php file to your server
    Joomla root The FPA is also
    <a href="https://github.com/ForumPostAssistant/FPA/tarball/en-GB"
    class="external text" target="_blank"
    rel="nofollow noreferrer noopener">available in a tar.gz package</a>
    for those who desire or need a unix style package. The fpa-en.php file
    from the package will need to be uploaded to your server Joomla root.

<!-- -->

-   Scan all machines with FTP, Joomla super admin, and Joomla admin
    access for malware, virus, trojans, spyware, etc. (see [Local
    Security](#Local_Security) below)

<!-- -->

-   Ensure you have downloaded the **latest version** of
    <a href="http://www.joomla.org/download.html" class="external text"
    target="_blank" rel="noreferrer noopener">Joomla</a> for the series of
    Joomla used on the site. (see [Incompatible
    Versions](#incompatible_versions) below)

<!-- -->

-   **Notify your host** and work with them to clean up the site, and to
    make sure there are no back doors to your site.

<!-- -->

-   Review
    <a href="http://vel.joomla.org/" class="external text" target="_blank"
    rel="noreferrer noopener">Vulnerable Extensions List</a> to see if you
    have any vulnerable extensions and deal with them. A clue to any
    extensions being targeted is your logs file. Here is an example of
    what to look for,

<!-- -->

    //administrator/components/com_extension/admin.extension.php?mosConfig.absolute.path=http:

or

    ../../../../../../../../../../../../../../../../proc/self/environ

-   Review and action [Security
    Checklist](https://docs.joomla.org/Security_Checklist 'Security Checklist')
    to make sure you've gone through all of the steps (please note some
    steps are optional, but please review them all).

<!-- -->

-   **Change all passwords** and if possible user names for the domains
    control panel, mysql, FTP, [Joomla! Super
    Admin](https://docs.joomla.org/Why_should_you_immediately_change_the_name_of_the_default_admin_user%3F 'Why should you immediately change the name of the default admin user?'),
    and Joomla! Admin password; do change them often. Passwords should be
    at least 12 mixed alphanumeric characters and contain no common word
    phrases.
-   Do not use the standard Admin user, [disable
    it](https://docs.joomla.org/Why_should_you_immediately_change_the_name_of_the_default_admin_user%3F 'Why should you immediately change the name of the default admin user?').
    If you need to reset your admin password, see <a
    href="https://docs.joomla.org/How_do_you_recover_your_admin_password%3F"
    class="mw-redirect"
    title="How do you recover your admin password?">these instructions</a>.

<!-- -->

-   **Delete and Replace** all templates and files with clean copies,
-   **Check** and/or replace all .pdf, image, photo files for exploits.
    Delete any that are suspicious
-   Check you server logs for IP's calling suspicious files or attempting
    POST commands to non-form's
-   Use proper permissions on files and directories. They **should never
    be 777<sup>[\[1\]](#cite_note-1)</sup>, but ideal is 644 for files and
    755 folders**.
-   Disable <a
    href="http://docs.cpanel.net/twiki/bin/view/AllDocumentation/CpanelDocs/AnonymousFTP"
    class="external text" target="_blank"
    rel="nofollow noreferrer noopener">anonymous</a> FTP

## chmod and cron

IF you have permissions to access SSH (secure shell) via putty you can
chmod the files and directories. If you do not have shell access, you
can run the commands from
<a href="http://en.wikipedia.org/wiki/Cron" class="external text"
target="_blank" rel="nofollow noreferrer noopener">cron</a> by setting
up a temporary cron job. Copy and paste the command into a cron job. Run
the job about 2 minutes after saving the job. When using the command by
putty or a cron job, the use of the full physical path to public_html is
recommended for best results.

For files use:

    find /home/xxxxxx/domains/xxxxxxx.com/public_html -type f -exec chmod 644 {} \;

and for directories use:

    find /home/xxxxxx/domains/xxxxxxx.com/public_html -type d -exec chmod 755 {} \;

### Monitoring for File Changes

To check for recent file changes on your system use these commands from
putty (SSH - secure shell) or via a cron job. If you run the command
from a cron job you can schedule it to check for changed files several
times each day. Results will be sent to the domain account owner and
show the time/date stamp for any changed files. When using the command
by putty or a cron job, the use of the full physical path to public_html
is recommended for best results.

    find /home/xxxxxx/domains/xxxxxxx.com/public_html -type f -ctime -1 -exec ls -ls {} \;

Please note your sites files may be located in public_html, httpdocs,
www, or a similar place, and your physical path may also be different
than in the examples. Adjust the physical path accordingly.

## 777 Permissions

**If** the server your are on requires 777 permissions for Joomla to
work correctly, then **request to be put on another server** with php as
cgi and suphp and up-to-date serverside software (apache, php etc) on
your existing host or find another server host if necessary.

To protect directories that seemed to need 777 permissions to run or as
a default in your images/media folder try this code within a .htaccess
file within the open folder.

    # secure directory by disabling script execution
    AddHandler cgi-script .php .pl .py .jsp .asp .htm .shtml .sh .cgi
    Options -ExecCGI

especially in your images folder

-   Make sure that is in a htaccess file in a directory that will not run
    any scripts or remove the extensions as required

Do check with your hosting provider to see if they have purposely
secured the server your site is on; and that they **or you** perform
regular (weekly) security updates to keep the server up to date. Check
you have jail shell. A rule of thumb is the less you pay, the less they
care

## A Safe route for disaster relief

-   save the configuration.php file and your images and personal files one
    by one, (not the folder as it may contain unwanted files)
-   wipe the entire folder where Joomla! is installed
-   upload a new clean full package latest version of joomla 1.5.x or
    Joomla 2.5.x, joomla 3.x (minus the install
    folder)<sup>[\[2\]](#cite_note-2)</sup>
-   reupload your configuration file & images.
-   reupload or reinstall the latest versions of your extensions ,
    templates (even better is to use original clean copies to ensure that
    the hacker/defacer did not leave any shell script files in your site)

To do this will take your site off line for around 15 minutes. To track
down your hacked/defaced html may take hours or even longer.

### Local Security

-   Don't store user name/password in ftp program
    -   Use a password manager such as the free
        <a href="http://keepass.info/" class="external text" target="_blank"
        rel="nofollow noreferrer noopener">keepass</a>

<!-- -->

-   Scan all machines with FTP, Joomla super admin, and Joomla admin
    access for malware, virus, trojans, spyware, etc.

<!-- -->

-   Several packages available are
    -   <a href="http://www.eset.com/" class="external text" target="_blank"
        rel="nofollow noreferrer noopener">ENOD32</a> from eSet
    -   <a href="http://www.safer-networking.org/" class="external text"
        target="_blank" rel="nofollow noreferrer noopener">Spybot Search and
        Destroy</a>
    -   <a href="http://www.malwarebytes.org/" class="external text"
        target="_blank" rel="nofollow noreferrer noopener">Malwarebytes</a>
    -   <a href="http://www.microsoft.com/security/" class="external text"
        target="_blank" rel="nofollow noreferrer noopener">Microsoft Malicious
        Software Removal Tool</a>
    -   <a
        href="http://www.free-av.com/de/tools/12/avira_antivir_rescue_system.html"
        class="external text" target="_blank"
        rel="nofollow noreferrer noopener">Linux AntiVirus boot cd</a>
    -   <a href="http://www.javacoolsoftware.com/spywareblaster.html"
        class="external text" target="_blank"
        rel="nofollow noreferrer noopener">spyware blaster</a>
    -   <a href="http://www.siteadvisor.com/" class="external text"
        target="_blank" rel="nofollow noreferrer noopener">siteadvisor</a>
-   Consider the
    <a href="http://ubcd4win.com/" class="external text" target="_blank"
    rel="nofollow noreferrer noopener">Ultimate Boot CD for Windows</a>
    used for repairing, restoring, or diagnosing almost any home computer
    problem

### Other Considerations

-   Do not use the standard jos\_ table prefix and avoid one click
    installers where possible

<!-- -->

-   Set the
    <a href="http://feeds.joomla.org/JoomlaSecurityNews?format=xml"
    class="external text" target="_blank" rel="noreferrer noopener">joomla
    security newsfeed</a> as the main top module in your joomla admin
    control panel. <a
    href="https://docs.joomla.org/Screen.modulesadministrator.edit.15#Feed_Display"
    class="mw-redirect" title="Screen.modulesadministrator.edit.15">Set up
    the Security Newsfeed</a>
    -   <a
        href="https://docs.joomla.org/Screen.modulesadministrator.edit.15#How_to_access"
        class="mw-redirect" title="Screen.modulesadministrator.edit.15">Add the
        Admin Feed Display Module</a> if it is missing. Enable it to the
        first place on your sites back end control panel.

<!-- -->

-   Consider adding a
    <a href="http://forum.joomla.org/viewtopic.php?p=1568940#p1568940"
    class="external text" target="_blank" rel="noreferrer noopener">bot
    block list</a> to your .htaccess file

<!-- -->

-   Use <a href="http://en.wikipedia.org/wiki/SSH_file_transfer_protocol"
    class="external text" target="_blank"
    rel="nofollow noreferrer noopener">sFTP</a> instead of FTP where
    possible

<!-- -->

-   Do not enable or use <a
    href="http://en.wikipedia.org/wiki/File_Transfer_Protocol#Anonymous_FTP"
    class="external text" target="_blank"
    rel="nofollow noreferrer noopener">anonymous ftp</a> accounts for any
    reason.

<!-- -->

-   Use a server that has
    <a href="http://www.modsecurity.org/" class="external text"
    target="_blank" rel="nofollow noreferrer noopener">mod_security</a>
    installed properly

<!-- -->

-   Check for any added sub domains and/or added directories

<!-- -->

-   Check for any
    <a href="http://en.wikipedia.org/wiki/Common_Gateway_Interface"
    class="external text" target="_blank"
    rel="nofollow noreferrer noopener">cgi scripts</a>

<!-- -->

-   Check
    <a href="http://en.wikipedia.org/wiki/Cron" class="external text"
    target="_blank" rel="nofollow noreferrer noopener">cron</a> for any
    cron jobs not set up by domain administrator

<!-- -->

-   Download and <sup>[\[3\]](#cite_note-3)</sup>

<!-- -->

-   Deny any IP's that you got to the IP ban on your site but it may
    belong to a proxy site.

<!-- -->

    Was your site hacked in the past and proper site sanitation not used to remove actual
    (and hidden) hack thus leaving a backdoor for reinfection.

-   Consider removing "<a
    href="https://docs.joomla.org/How_do_you_remove_or_change_the_%22Welcome_to_the_Frontpage%22_title%3F"
    class="mw-redirect"
    title="How do you remove or change the &quot;Welcome to the Frontpage&quot; title?">Welcome
    to the front page</a>" to reduce <a
    href="http://www.google.co.uk/search?q=intext%3A+welcome+to+the+front+page+joomla&amp;"
    class="external text" target="_blank"
    rel="nofollow noreferrer noopener">search engine attacks</a>.

<!-- -->

-   Completely remove/uninstall, don't unpublish unused or vulnerable
    extensions. [Un-publishing a vulnerable extension will not protect
    your
    site.](https://docs.joomla.org/Why_isn%27t_un-publishing_a_vulnerable_extension_enough_to_protect_your_site%3F "Why isn't un-publishing a vulnerable extension enough to protect your site?")

### Malicious Code or Odd Links appearing on your site

Check that the original template file does or does not insert the
<a href="http://forum.joomla.org/viewtopic.php?f=432&amp;t=411735"
class="external text" target="_blank" rel="noreferrer noopener">unwanted
code/Malicious Javascript</a> or that you downloaded a paid for template
from a non trusted source eg file sharing sites

**<a href="http://www.iss.net/threats/gumblar.html" class="external text"
target="_blank" rel="nofollow noreferrer noopener">Gumblar</a>** doesn’t
use any particular script vulnerability. This script is injected into
every web page ( I would imagine though not confirmed, if infected page
is edited then saved it will also be in database) on a site. Script
changes every time it is accessed. It has been seen on phpBB, SMF and
vBulletin forums, on WordPress 2.7.1 blogs, on proprietary PHP sites.
The script starts with _(function(_ and has no name and is obfusticated.
A common Gumblar version breaks sites due to a bug in script.

**iFrames**

In recent iframe exploits the malicious code was only injected into
files with most common filenames (e.g. index.html, index.php, etc.).
<a href="http://forum.joomla.org/viewtopic.php?f=432&amp;t=411735"
class="external text" target="_blank" rel="noreferrer noopener">Related
Forum Sticky</a>

### Contributors & Editing

<a
href="http://forum.joomla.org/memberlist.php?mode=viewprofile&amp;u=28000"
class="external text" target="_blank"
rel="noreferrer noopener">mandville</a> <a
href="http://forum.joomla.org/memberlist.php?mode=viewprofile&amp;u=67439"
class="external text" target="_blank"
rel="noreferrer noopener">PhilD</a> <a
href="http://forum.joomla.org/memberlist.php?mode=viewprofile&amp;u=3701"
class="external text" target="_blank"
rel="noreferrer noopener">fw116</a> <a
href="http://forum.joomla.org/memberlist.php?mode=viewprofile&amp;u=322239"
class="external text" target="_blank"
rel="noreferrer noopener">JeffChannell</a> <a
href="http://forum.joomla.org/memberlist.php?mode=viewprofile&amp;u=339316"
class="external text" target="_blank"
rel="noreferrer noopener">dynamicnet</a>

## References

1.  <span id="cite_note-1">[↑](#cite_ref-1) Permissions should never be
    777</span>
2.  <span id="cite_note-2">[↑](#cite_ref-2) Incompatible Versions</span>
3.  <span id="cite_note-3">[↑](#cite_ref-3) Review raw access and error
    logs.</span>

When your hosting provider runs PHP as an Apache Module it executes as
the user/group of the webserver which is usually "nobody", "httpd" or
"apache". Under this (ownership) mode, files or directories that you
require your php scripts to be able to write do need 777 permissions
(read/write/execute at user/group/world level) if the ownership of the
files and directories are not Chown (Change Owner) to the User. Such a
scenario is absolute unacceptable from a security perspective since
'777' not only allows the webserver to write to the file; it also allows
anyone else to read or write to the file. If your provider is not able
to change this, one should strongly consider changing host!

**Logs** Make sure that in your control panel your raw access logs have
been activated for review!

Raw Access Logs allow you to see who has accessed your site without the
use of graphs, charts or other graphics. in cPanel for instance you can
use the Raw Access Logs menu to download a zipped version of the
server's access log for your site. This can be very useful when you need
to see who is accessing your site quickly. Many people forget that this
needs to be activated by the user of the account and is not
automatically activated upon the creation of a hosting account in cPanel
for instance!

**Incompatible Versions**

This document applies to all versions of Joomla. Use the latest version
of Joomla that is compatible with your existing Joomla websites version
to repair your site. Some version upgrades require a <a
href="https://docs.joomla.org/Migrating_from_Joomla_1.5_to_Joomla_2.5"
class="mw-redirect" title="Migrating from Joomla 1.5 to Joomla 2.5">site
migration</a> and will render your Joomla site inoperative if used to
replace an earlier version of Joomla when repairing site hacking. For
example: Do not replace a 1.5.xx based site with version 2.5.xx of
Joomla. Doing so will leave the site in an inoperative state and may
also result in a loss of data.
