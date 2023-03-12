<!-- Filename: Security_Checklist/Where_can_you_learn_more_about_file_permissions%3F / Display title: Security Checklist/Where can you learn more about file permissions? -->

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

For more detailed background information on what file permissions are,
see the Wikipedia article on:
<a href="https://en.wikipedia.org/wiki/Filesystem_permissions"
class="extiw" title="wikipedia:Filesystem permissions">Filesystem
permissions</a>

Most current file systems today have methods of administering
permissions or access rights to specific users and groups of users on
computers. These permissions control the ability of the users to view
and/or make changes to the contents of the files and/or the file
directory(folder). To simplfy this explanation here, remember
permissions are broken down by the following 3 designations in a
Unix/Linux server:

    r = Read permissions    (the ability to view the file/files in a directory)
    w = Write permissions   (the ability to write to the file/files in a directory)
    x = Execute permissions (the ability to execute the file/files in a directory)

<img
src="https://docs.joomla.org/images/thumb/4/41/Stop_hand_nuvola.svg.png/25px-Stop_hand_nuvola.svg.png"
decoding="async"
srcset="https://docs.joomla.org/images/thumb/4/41/Stop_hand_nuvola.svg.png/38px-Stop_hand_nuvola.svg.png 1.5x, https://docs.joomla.org/images/4/41/Stop_hand_nuvola.svg.png 2x"
data-file-width="40" data-file-height="40" width="25" height="25"
alt="Stop hand nuvola.svg.png" />Warning!

The application of file permissions, directory permissions and their
control depends on the operating system of the server and can be
complex. Please read about the [recommended permission settings for
Joomla!](https://docs.joomla.org/Verifying_permissions#Recommended_settings "Verifying permissions")
or [bad server
permission](https://docs.joomla.org/Security_Checklist/You_have_been_hacked_or_defaced#777_Permissions "Security Checklist/You have been hacked or defaced")
settings.

Please read more about permissions and how to change them using the
appropriate link to the correct server operating system or
configuration:

- [How do UNIX file permissions
  work?](https://docs.joomla.org/How_do_UNIX_file_permissions_work%3F "How do UNIX file permissions work?")
- [How do phpSuExec file permissions
  work?](https://docs.joomla.org/How_do_phpSuExec_file_permissions_work%3F "How do phpSuExec file permissions work?")

Microsoft Windows based servers, the IIS(Internet Information Server)
and PWS(Personal WebServer)

- [How do Windows file permissions
  work?](https://docs.joomla.org/How_do_Windows_file_permissions_work%3F "How do Windows file permissions work?")
