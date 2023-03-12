<!-- Filename: IIS / Display title: IIS -->

Whilst IIS (Internet Information Services, a Microsoft web server)
accounts for relatively few users, compared to Apache, there are enough
to warrant providing information which is unique.

PHP can run on IIS, so a Joomla! web site also can run on IIS.

The PHP.net website should be referenced, regarding the installation of
PHP on Windows and the configuration of IIS to process PHP webpages and
scripts.

To get started, here are some helpful links for developers who want to
install PHP and Joomla! on IIS.

- Install Joomla for Windows and IIS using the Web Platform Installer -
  <a href="http://www.microsoft.com/web/joomla" class="external free"
  target="_blank"
  rel="nofollow noreferrer noopener">http://www.microsoft.com/web/joomla</a>
- PHP on Windows and IIS; building an IIS-optimized PHP -
  <a href="http://www.microsoft.com/web/php" class="external free"
  target="_blank"
  rel="nofollow noreferrer noopener">http://www.microsoft.com/web/php</a>

The two most common problems encountered by Joomla! admins whose sites
are on IIS webservers are:

- Setting the website's directory/filesystem permissions correctly
- Enabling SEF URLs

## Setting the filesystem permissions

### Conceptual Overview

Windows filesystem permissions are more complex than the 3-level,
3-value Unix-style `rw-r--r--` conventions.

Windows servers have a user called `IUSR`, which corresponds to the
`apache` user on many Linux systems. PHP scripts run under the IUSR
account. (For IIS 7.5, this may be the group WEB\Users)

#### Levels

A directory or file does have an `owner`, and Windows does have
`group`s, but there is no `"everyone else"` under Windows.

There is a group called `Users`. This corresponds to all accounts used
by human beings to deliberately interact with the server. But accounts
for services, system operations, and software user permisions do not
belong to that group, and in fact **no** accounts at all (human or
otherwise) have **any** privileges which aren't explicitly granted
either directly to the user or by membership in some group.

#### Values

Beyond `Read`, `Write` and `Execute`, Windows permissions include
additional values. The important ones to know about for a Joomla website
are `Read` and `Write`.

### HowTo configure the permissions

When logged in to the Windows server, run Windows Explorer, and navigate
to inetpub.

Right-click the directory which holds your Joomla site.
Get Properties, tab to Security.
Click ADD.
Make sure that the LOCATION field is set to the local computer, not a
domain controller.
Type iis_iusrs into the field for identifying the user/group you are
granting access to.
Confirm.
Highlight the iis_iusrs entry in the access control list.
Check the boxes for Read & Execute, List Folder Contents, Read, and
Write
Confirm, put the security window away now.
Open Start -. Administrator -\> Computer Management.
Navigate to Local Users and Groups -\> Groups.
Find or create the group iis_iusrs
Add a member to the group:
again, make sure that the LOCATION field is set to the local computer,
not a domain controller.
Type IUSR into the field for identifying the user/group you are granting
access to.
Confirm.
Save.

Run the Joomla installer again, and enjoy your PHP user's write
privileges in your website folder.

## [Search Engine Friendly URLs](https://docs.joomla.org/Search_Engine_Friendly_URLs 'Search Engine Friendly URLs')

The functioning of SEF URLs depends on "URL rewriting" - matching
patterns in incoming HTTP requests, and passing the request to the
webserver in a different format. Joomla can only understand the
parameters present in the "ugly" request, so the human-readable path in
the incoming HTTP request needs to be re-written for Joomla.

### Apache's mod_rewrite

`mod_rewrite` is the familiar way by which many webmasters translate
nice human-readable, spider-friendly URL requests like
`/about_us/contact_information` into the "ugly" internal server path
like `/index.php?option=com_content&view=article&id=999&Itemid=23` that
makes Joomla serve up some content. A text file called .htaccess
contains the rewrite rules, which are written according to a specific
syntax.

### IIS

Before Windows Server 2008 and IIS7, only third-party add-ons could add
URL rewriting functionality to an IIS webserver. For servers today still
running IIS6 or earlier, these are still available. CodePlex is a
website and code-sharing developer forge associated with Microsoft, and
it hosts at least two good-quality URL rewrite solutions for IIS6. At
least one of these modules will parse and execute the same rewrite rules
which work in Apache .htaccess files.

Windows Server 2008 comes with IIS7, which is the first webserver for
which Microsoft provides a native module which provides URL rewriting
functionality.

The module is called "IIS URL Rewrite Module" and is free to download
and install on your IIS7 webserver.

The IIS7 module configures and stores its rules in a very different way
than the format Apache provides via .htaccess. The rules are stored as
XML data in the web.config file in a website's root. The IIS Management
Console provides a GUI and wizard for creating and testing rules. The
wizard is capable of reading a text file with .htaccess-type rules and
converting them to the native format.

See [Enabling Search Engine Friendly (SEF) URLs on
IIS](<https://docs.joomla.org/Enabling_Search_Engine_Friendly_(SEF)_URLs_on_IIS> 'Enabling Search Engine Friendly (SEF) URLs on IIS')
for instructions.

<a href="https://docs.joomla.org/index.php?title=Restricting_access_to_the_backend_by_IP_address&amp;action=edit&amp;redlink=1"
class="new"
title="Restricting access to the backend by IP address (page does not exist)">Restricting
access to the backend by IP address</a>

You can utilise server based IP protection. If you're running IIS 7.5 on
Windows Server 2008, you can use the IP and Domain Security option. Go
to the Server Manager MMC panel and select "Roles" and then "Web Server
(IIS). From here select "Add Role Services" and in the window that pops
up, scroll down to security and select the "IP And Domain Security
Option" (see screenshot below)
<img src="https://docs.joomla.org/images/6/6b/IPrestrictionIIS.jpg"
decoding="async" data-file-width="776" data-file-height="585"
width="776" height="585" alt="IPrestrictionIIS.jpg" /> and then hit next
to install. Once you've got it installed, open up the IIS Manager MMC
panel (if you have it open already, you will need to restart it for the
appropriate panel to appear; this also means the server manager one
might not be useful to you) and navigate down to the administrator
directory of the site. Click on the "IPv4 Address and Domain
Restrictions". You can change the default behaviour by clicking "Edit
Feature Settings" and setting the default value for unspecified clients
to deny. Then add allow entries for your trusted IP addresses or
subnets. Check out the following article for details as well: \[<a
href="http://www.iis.net/ConfigReference/system.webServer/security/ipSecurity"
class="external autonumber" target="_blank"
rel="nofollow noreferrer noopener">[1]</a>\] (thanks to Sam Moffat for
above info)
