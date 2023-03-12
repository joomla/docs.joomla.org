<!-- Filename: J4.x:Updating_from_an_existing_version / Display title: Updating from an existing version -->

**Always back up your site before updating.**

## Introduction

The recommended way to update installations of Joomla! is to use the
Joomla Update Component.

A standard installation of Joomla 4 includes a helpful notifications
panel on the Home Dashboard after logging in. You can see at a glance if
an update is available and the version number.

Although Joomla will notify you when an update is available, it requires
you to carry out the update. It is a straight forward process and should
be carried out at the earliest opportunity to keep the site up to date.

If you are updating from a Joomla version prior to 4.x please see one or
more of the following:

- [Potential backward compatibility issues in Joomla
  4](https://docs.joomla.org/Potential_backward_compatibility_issues_in_Joomla_4 'Special:MyLanguage/Potential backward compatibility issues in Joomla 4')
- [Joomla 3.x to 4.x Step by Step
  Migration](https://docs.joomla.org/Joomla_3.x_to_4.x_Step_by_Step_Migration 'Special:MyLanguage/Joomla 3.x to 4.x Step by Step Migration')
- Updating 1.x or 2.x to 3.x: use [Updating Joomla (Install
  Method)](<https://docs.joomla.org/J3.x:Updating_Joomla_(Install_Method)> 'Special:MyLanguage/J3.x:Updating Joomla (Install Method)').

## Accessing the Update Component

If the notifications panel is displayed in the Home Dashboard, clicking
the notification takes you straight to the Update Component.

<img
src="https://docs.joomla.org/images/thumb/f/f5/J4x_joomla_update_notification-en.png/800px-J4x_joomla_update_notification-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/f/f5/J4x_joomla_update_notification-en.png 1.5x"
data-file-width="1000" data-file-height="444" width="800" height="355"
alt="J4x joomla update notification-en.png" />

Alternatively, to access the Update Component from the Administrator
sidebar menu, click **System**. This will take you to the **System
Dashboard**.

<img
src="https://docs.joomla.org/images/thumb/1/14/J4x_joomla_system_dashboard_update-en.png/800px-J4x_joomla_system_dashboard_update-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/1/14/J4x_joomla_system_dashboard_update-en.png 1.5x"
data-file-width="1000" data-file-height="399" width="800" height="319"
alt="J4x joomla system dashboard update-en.png" />

The System Dashboard has an _Update Panel_ which includes a Joomla link
that will show the available update version number. Click the **Joomla**
link and you will be taken to the Update Component.

## Carrying out the Update

<img
src="https://docs.joomla.org/images/thumb/5/5d/J4x_joomla_pre_update_check-en.png/800px-J4x_joomla_pre_update_check-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/5/5d/J4x_joomla_pre_update_check-en.png 1.5x"
data-file-width="1000" data-file-height="882" width="800" height="706"
alt="J4x joomla pre update check-en.png" />

When you arrive at the Joomla Update Component you will be presented
with a Pre-Update Check which provides you with information about the
readiness of your server, settings and installed extensions for the
update.

Pay careful attention to these and take action to rectify any issues
highlighted before updating. You may need to double check extensions and
update them first if necessary.

It is not uncommon to see warnings for _Recommended Settings_ as these
are often server specific and hosting related - it is likely they
existed when you installed Joomla and most likely won't prevent the
update from happening.

_Note the reminder that you are strongly advised to take a backup if you
haven't already!_

There is a link below the update button. In most cases you can ignore
this link. It provides an option to manually upload the update files if
your server is behind a firewall or otherwise unable to contact the
Joomla update servers.

When you have reviewed the Pre-Update Check and are happy, click
**Update**.

### Confirming the Update

<img
src="https://docs.joomla.org/images/thumb/c/c3/J4x_joomla_start_update-en.png/800px-J4x_joomla_start_update-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/c/c3/J4x_joomla_start_update-en.png 1.5x"
data-file-width="1000" data-file-height="645" width="800" height="516"
alt="J4x joomla start update-en.png" />

Click the checkbox to confirm you have made a backup and checked
extensions are compatible then click the **Start Update**.

### Update Progress

<img
src="https://docs.joomla.org/images/thumb/c/cd/J4x_joomla_update_progress-en.png/800px-J4x_joomla_update_progress-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/c/cd/J4x_joomla_update_progress-en.png 1.5x"
data-file-width="1000" data-file-height="193" width="800" height="154"
alt="J4x joomla update progress-en.png" />

Once the update starts a progress bar will appear as the Joomla files
are updated.

### Completion

<img
src="https://docs.joomla.org/images/thumb/9/9a/J4x_joomla_updated-en.png/800px-J4x_joomla_updated-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/9/9a/J4x_joomla_updated-en.png 1.5x"
data-file-width="1000" data-file-height="274" width="800" height="219"
alt="J4x joomla updated-en.png" />

When the progress bar reaches 100% a system message will confirm your
site has been updated and the version number. The version number will
also update in the top toolbar, next to the site name.

Click the **Back** button and you will be returned to the Joomla Update
Component where it is possible to check for updates again.

## Post Update Checks

Once the update is complete you should carry out some checks to make
sure everything went as expected, that no errors are present and that
there have been no changes that require further action.

### Frontend Check

Go to the front end of the website and check it is working and
displaying as it did prior to the update.

As a matter of course, clear your browser cache as this will load any
changes to stylesheets and scripts.

### System Checks

Joomla makes it easy to do a "health" check. From the sidebar menu click
**System** to be taken to the System Dashboard. This gives you an
overview of the current status of your Joomla site.

<img
src="https://docs.joomla.org/images/thumb/7/71/J4x_system_dashboard-en.png/800px-J4x_system_dashboard-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/7/71/J4x_system_dashboard-en.png 1.5x"
data-file-width="1000" data-file-height="715" width="800" height="572"
alt="J4x system dashboard-en.png" />

In this example we can see that since the update we have two items that
require attention. They are marked with a label that includes a number.
The number relates to how many items require attention. Clicking on each
one will allow you to fix them.

**Note** The System Dashboard makes a check each time the page is
loaded. Bear in mind that browser caching settings could affect this.
It's good practice to clear the browsers cache when checking.

**Recommended Steps and actions:** It is recommended that you follow
these steps when updating a production site:

1.  Back up your site before updating to a new version. That way, if
    something goes wrong during the update process, you can easily
    restore your site to the earlier version.
2.  Review the release notes for the new version to be familiar with
    what was changed.
3.  Update using one of the recommended methods outlined in this
    document. These methods install the new program files, delete
    unneeded old program files, and update the database as needed for
    the new Joomla version.
4.  Clear your browser cache and check that the update was successful,
    using the steps outlined in the **Checking Site** tab.

## Checking Your Site

After an update, it is a good idea to clear your browser cache and check
your site to make sure the update was successful. There are two quick
checks you can do from the Extension Manager.

Navigate to Extension Manager **→** Database. If your database is up to
date, you should see a screen similar to the one below:

<img
src="https://docs.joomla.org/images/thumb/0/08/J4x-update-screenshot-db-ok-en.png/800px-J4x-update-screenshot-db-ok-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/0/08/J4x-update-screenshot-db-ok-en.png 1.5x"
data-file-width="1000" data-file-height="434" width="800" height="347"
alt="Database Screen With No Problems" />

If your database is not up to date, you will see a screen listing the
problems found, similar to the one below:

<img
src="https://docs.joomla.org/images/thumb/4/42/J4x-update-screenshot-db-not-ok-en.png/800px-J4x-update-screenshot-db-not-ok-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/4/42/J4x-update-screenshot-db-not-ok-en.png 1.5x"
data-file-width="1000" data-file-height="527" width="800" height="422"
alt="Database Screen With 3 Database Problems" />

In this case, press the Fix button in the upper right corner. Joomla
will update your database to correct the issues listed and then it will
re-display the screen. If the fix was successful, the display will
indicate that the database is up to date.

**N.B.** If any errors still exist make sure all the database tables are
checked in.

## Extension Manager: Discover

In some cases, when you update to a new Joomla version, new core
extensions are added. If there were problems with the database update,
these extensions may not have been correctly installed. To check this,
navigate to **System **→** Discover**. Then click on the Discover icon
in the toolbar. The screen should show as follows:

<img
src="https://docs.joomla.org/images/thumb/1/12/J4x-update-screenshot-extensions-en.png/800px-J4x-update-screenshot-extensions-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/1/12/J4x-update-screenshot-extensions-en.png 1.5x"
data-file-width="1000" data-file-height="539" width="800" height="431"
alt="Discover Screen With No Extensions To Install" />

If so, you know that any new extensions added during the update were
correctly installed in the database.

If there are uninstalled extensions, they will show similar to the
following screen:

<img
src="https://docs.joomla.org/images/thumb/1/13/J4x-update-screenshot-uninstalled-ext-en.png/800px-J4x-update-screenshot-uninstalled-ext-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/1/13/J4x-update-screenshot-uninstalled-ext-en.png 1.5x"
data-file-width="1000" data-file-height="325" width="800" height="260"
alt="Discover Screen With One Extension To Install" />

In this case, check the boxes and click on the Install icon in the
toolbar. Joomla will install the extension(s) and then display the
screen showing no extensions discovered. At this point, the new
extensions have been installed in the database.

## Troubleshooting

If you have any questions, problems or errors before, during or after
the update, please ask them on the
**<a href="https://forum.joomla.org/viewforum.php?f=812" class="extiw"
title="jforum:812">Migrating and Upgrading to Joomla! 4.x Forum</a>**.

If you have problems or errors during the update process, here are some
tips.

- Clearing your browser cache. There may have been changes to the CSS or
  Javascript that will need to be reloaded by your Web browser after an
  update.
- If any database error messages show after the update, be sure to check
  the **System **→** Maintenance panel **→** Database** link. In some
  cases, if a database error occurs it will prevent all of the database
  updates from running. In this case, you can run them from the Database
  link and then use the **System **→** Install **→** Discover** method
  to check and install any new extensions.

## Troubleshooting Joomla Update

Joomla Update is a core component which is responsible for determining
if there is a newer version of Joomla available for installation of your
site, download it (or let you upload it) and install it. It has been
available in Joomla since Joomla 2.5.1 and as a third party extension
two years prior to that. You can access it at System, Update, Joomla.

The update process consists of several different steps. While every care
has been taken to make this process as trouble–free as possible there's
always a small chance that something may go wrong, typically due to a
very restrictive server configuration or network conditions on a very
small minority of sites.

The following troubleshooting instructions are organised by update step
to make it easier to find the information you are looking for.
Furthermore, it is an exhaustive resource, based on more than a decade
of experience troubleshooting all possible (and some borderline
impossible) problems with Joomla and extension updates. It lists
problems which are extremely unlikely to occur. Don't let its length
scare you; you are very unlikely to ever see any of these problems
occur.

### Determining if updates exist

Joomla will make a request to its update server over HTTPS and download
an XML file provided by the Joomla project listing the latest available
versions. The update server in use can be determined by going to System,
Update, Joomla, clicking on Options and examining which update server is
in use. You are recommended to use the _Default_ update server to
receive updates to your current major version of Joomla. Use _Joomla
Next_ when you want to upgrade your site to the next major version of
Joomla — this is best done on a copy of your site to avoid any nasty
surprises; not all third party extensions and templates will be
compatible across major Joomla versions. The major version of Joomla is
the first digit in the Joomla version, before the first dot. For
example, the major version of Joomla 4.0.1 is 4.

If Joomla cannot determine that an update is available please check the
following:

- The Joomla Update information is out of date in the database. Go to
  System, Update, Joomla and click on Check for Updates.
- The update sites information in Joomla is corrupt. Go to System,
  Update, Update Sites and click on Rebuild. Then go to System, Update,
  Joomla and click on Options. Select the Testing update channel. Click
  on Save & Close. Click on Options again. Select the Default or Joomla
  Next update channel — depending on your preference — and click on Save
  & Close.
- Your host prevents making outbound HTTPS requests at all or restricts
  them to predefined allowed IP addresses. Please ask them to allow
  outbound HTTP requests to
  <a href="https://update.joomla.org" class="external free"
  target="_blank" rel="noreferrer noopener">https://update.joomla.org</a>
  This is a CDN, meaning that the exact IP address will be different
  depending on where the world you are trying to access this URL from.
  Do tell your host; they will know what to do with this information.
- Your host may have an outdated SSL library which does not understand
  the modern TLS certificates used by the Joomla update CDN. Please ask
  your host about it.

### Determining if third party software is compatible with the new version you are about to install

Joomla does not have a magical way of evaluating third party code for
compatibility. Its report is based solely on the extension information
kept in Joomla's \#\_\_extensions table, the update sites provided by
the installed extensions and the update information provided by the
developers of third party extensions including but not limited to which
version of their software is compatible with which version of Joomla.

If the information displayed is incorrect please check the following:

- What is the minimum stability for extension updates? Go to System,
  Update, Extensions and click on Options. The ‘Minimum Extension
  Stability’ determines which is the minimum stability level of a third
  party software that Joomla will take into account when evaluating
  compatibility. For example, if this option is set to Stable but only a
  beta version of a third party extension is compatible with the Joomla
  version you want to upgrade to Joomla will tell you that there is no
  compatible version of the third party extension available.
- The update information may be out of date. Go to System, Update,
  Extensions and click on Check For Updates. Then go back to System,
  Update, Joomla and see if the extension now appears as compatible or
  if you are told than a compatible update to it is available.
- The update sites information in Joomla is corrupt. Go to System,
  Update, Update Sites and click on Rebuild. Then go to System, Update,
  Joomla and click on Options. Select the Testing update channel. Click
  on Save & Close. Click on Options again. Select the Default or Joomla
  Next update channel — depending on your preference — and click on Save
  & Close.
- Your host prevents making outbound HTTP/HTTPS requests at all or
  restricts them to predefined allowed IP addresses. This will prevent
  Joomla from retrieving update information from third party update
  sites. First go to System, Update, Update Sites. Below each update
  site you will see its URL. Make a list of those URLs. Then ask your
  host to allow your site to make requests to these URLs. Please note
  that some of these URLs may point to a CDN, meaning that the exact IP
  address will be different depending on where the world you are trying
  to access this URL from. Do tell your host; they will know what to do
  with this information.
- Your host may have an outdated SSL library which does not understand
  the modern TLS certificates used by most third party extension
  developers' update sites. Please ask your host about it.
- You may have “orphaned” extensions. Most modern Joomla extensions are
  delivered as ‘package’ type extensions which include two or more
  related extensions. When installing a package extension Joomla records
  a package extension in its database. It then records the package ID to
  each of the installed extensions from that package in the database.
  The update information is provided for the package, not each
  individual extension. This association may break if you used Discover
  to install the extensions, extracted the package and installed the
  separate extensions directly, Joomla failed to record the package ID
  for each extension when installing the package (most likely because an
  error occurred) or your site has been upgraded from an old version of
  Joomla which predates the use of packages in extensions. In this case
  even updating the extension will NOT update the package association.
  There is currently no solution to this except determining manually the
  compatibility of extensions with each Joomla version.
- In some cases the number of requests Joomla sends to your server as it
  determines compatibility for each extension may overwhelm the server
  and trigger a Denial of Service protection. In this case some or all
  of the extensions will appear as of indeterminate compatibility
  status. Unfortuantely, you will have to check the compatibility of
  each extension manually against the information published by
  extension's developer.

### Downloading the update

Joomla will need to download its update package, a ZIP file which is
very similar to the Joomla installation ZIP file but without the web
installer (the \`installation\` directory). This could fail for a few
reasons:

- The ZIP file is rather big. Joomla 4 update packages are around 25MiB.
  If your server is slow, overwhelmed or has poor connectivity with
  GitHub — where Joomla update packages are downloaded from — it may
  take a long time to download the package. If that time is longer than
  your server's PHP maximum execution time, its maximum CPU usage limit
  (as determined by ulimit -t in the server command line), the PHP-FPM
  timeout or the web server's timeout the download will fail and you
  will see an error page. You will have to ask your host for help with
  that.
- You may not have enough free space on your site. You need enough space
  to store the compressed update ZIP file and its extracted files. As a
  rule of thumb, you need about 50–60 MiB of free space for Joomla
  Update to work correctly. Do note that the free space reported by your
  hosting control panel is not always realtime, i.e. it may ‘lag’
  several minutes or hours behind the actual disk space usage on your
  site. Moreover, further limits may be imposed by your host. If unsure,
  please ask your host.
- Your host prevents making outbound HTTPS requests at all or restricts
  them to predefined allowed IP addresses. Please ask them to allow
  outbound HTTP requests to
  `<a href="https://github.com%60" class="external free" target="_blank" rel="nofollow noreferrer noopener">https://github.com</a>`. This is a
  CDN, meaning that the exact IP address will be different depending on
  where the world you are trying to access this URL from. Do tell your
  host; they will know what to do with this information.
- Your host may have an outdated SSL library which does not understand
  the modern TLS certificates used by GitHub. Please ask your host about
  it.

### Extracting the update

After the update ZIP file has downloaded Joomla needs to extract it on
your site. Since Joomla is effectively replacing itself and because this
process does take some time to complete it cannot happen within Joomla
itself. Instead, a separate file
(administrator/components/com_joomlaupdate/extract.php) is used to
perform the update. This file is inert except when an update is in
progress.

You may get an error during the extraction for one of the following
reasons:

- You cannot access the `extract.php` file because of a server protection
  e.g. a customised .htaccess file on Apache and Litespeed servers. Try
  accessing <a href="https://www.example.com/administrator/components/com_joomlaupdate/extract.php" target="_blank" rel="nofollow noreferrer noopener">https://www.example.com/administrator/components/com_joomlaupdate/extract.php</a>
  from a web browser, where
  `https://www.example.com` is to
  be replaced with the URL to your site. You should see the message
  `Invalid login`. If you see anything else
  you are being forbidden from accessing this file.
- If you can access the file but extracting the update fails immediately
  there is a different server protection on your site which prevents the
  request to `extract.php` from being handled by that file. Please
  contact your host about this.
- If you are using CloudFlare go to Rules and create a new Page Rule.
  Set the If URL Matches to
  \*/administrator/components/com_joomlaupdate/extract.php and Then The
  Settings Are to “Disable Security” and on a new line ”Cache Level”,
  ‘Bypass’. Set the Order to First. Click on Save and Deploy. This
  ensures that CloudFlare will not try to block the update extraction.
- The update ZIP file is corrupt or truncated. This could happen if
  downloading the update file failed with an error. Go back and retry.
  See also the previous section.
- If you are using upload and update i.e. you uploaded the update ZIP
  file yourself please make sure that you are using only the official
  Joomla Update ZIP files. The extraction script only supports a subset
  of the ZIP archive format used by the official update ZIP files.
- Did you run out of disk space? Please check the section above.
- Is the ownership and permissions of all files correct? Joomla needs
  write access to all of its files and folders. If unsure, ask your
  host. There is no specific set of “good” permissions! The permissions
  needed depend on the ownership of your files and which system user the
  web server runs under.
- Did you lose network connectivity or your network has very high
  latency? It's possible that the request fails because of that.
- The extraction takes place by making consecutive requests to the
  aforementioned extract.php file. Each request is set up to take
  between 3 and 4 seconds. The process repeats until the entirety of the
  update file has been extracted. On some servers this cadence of
  requests to the same file from the same IP address may trigger the
  server's security. On other servers it may trigger a different server
  protection, e.g. a maximum PHP time limit, a maximum CPU usage limit
  or another server timeout. On even fewer servers running on CloudLinux
  it could trigger a server memory outage situation if your server was
  already running low on memory. You need to contact your server about
  that; there is nothing you can do yourself to work around these server
  limitations.

### Finalising the update

This is a two step process.

Right after the update ZIP file has been extracted a final step will run
which removes old files. When upgrading to a new major version of Joomla
the list of files to remove is pretty big and the process may timeout.
Moreover, the point made in the previous section about ownership and
permissions of files is important here too; Joomla needs write
permissions to the old files and folders it has to remove. If this step
fails you can resume it from the command line. Go into the cli folder
and run _php joomla.php update:joomla:remove-old-files_ If you cannot do
it yourself ask your host to do it for you. You will also need to follow
the workaround for the next step.

Finally, Joomla reloads and you are logged back into the administrator
interface. At this point Joomla updates its database tables and performs
any database administration tasks. If this fails you can resume the
process by going to System, Maintenance, Database. Select Joomla CMS
from the list and click on Update Structure.
