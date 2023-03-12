<!-- Filename: Security_Checklist/Testing_and_Development / Display title: Security Checklist/Testing and Development -->

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

## Secure Testing and Development

### Develop locally, deploy globally

Develop and test your site on a local machine first. Installing Joomla
locally is not as hard as it may sound, and the exercise will greatly
boost your confidence.

### Use an IDE

Consider using an Integrated Development Environment (IDE). One free IDE
that many Joomla! developers use is
<a href="https://code.visualstudio.com/" class="external text"
target="_blank" rel="nofollow noreferrer noopener">Visual Studio
Code</a>. See also [Configuring Visual Studio Code for joomla
development](https://docs.joomla.org/Visual_Studio_Code "Special:MyLanguage/Visual Studio Code")
for instructions on installing and configuring Visual Studio Code.

### Use a versioning system

Be able to roll back to an earlier version of your site using a modern
version control system, normally
<a href="https://git-scm.com/" class="external text" target="_blank"
rel="nofollow noreferrer noopener">git</a>. The Visual Studio Code IDE
indicated above includes plugins for git. This allows you to work with
the Joomla! source repository hosted on
<a href="https://github.com/joomla/joomla-cms/releases"
class="external text" target="_blank"
rel="nofollow noreferrer noopener">GitHub</a> as well as any other
projects on GitHub, GitLab or BitBucket (the 3 most popular git
versioning systems).

### More suggested tools

Check out the Joomla! community's list of popular
<a href="http://forum.joomla.org/index.php/topic,25307.0.html"
class="external text" target="_blank"
rel="noreferrer noopener">Developer Software and Tools</a>.

## Setup a backup process first

### The most important rule

**Thou shalt at all time be able to return your site to a previous
working state through regular use of a strong, off-site backup and
recovery process.**

Be sure your backup and recovery process is ready and tested BEFORE your
site goes live.

This is the single best way (and often the only way) to recover from
such inevitable catastrophes as:

1.  A compromised/cracked site.
2.  Broken site due to a faulty upgrade.
3.  Hardware failure, such as dead hard drives, power failures, server
    theft, etc.
4.  Authoritarian government intervention. (More common than some
    think.)
5.  Needing to quickly relocate to a new server or hosting provider.
