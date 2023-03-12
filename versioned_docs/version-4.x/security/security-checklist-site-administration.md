<!-- Filename: Security_Checklist/Site_Administration / Display title: Security Checklist/Site Administration -->

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

## Site Administration

### Use well-formed passwords

Change passwords regularly and keep them unique. A strong password has a
random combination of letters, numbers, or symbols. Avoid using single
names or words found in a dictionary. Never use the names of your
relatives, pets, etc. Search the forums for a script supplied by Wizzie
that automatically changes passwords. This is a great tool for
administrators or multiple sites. There are numerous handy websites that
have <a href="http://strongpasswordgenerator.com" class="external text"
target="_blank" rel="nofollow noreferrer noopener">strong password
generators</a>.

### Follow a password leveling scheme

Most users may not need more than three levels of passwords and
webmasters no more than five. Each level must be completely unrelated to
the others in terms of which usernames and passwords are used. We'll let
the UK Government Cyber Security Center give the best and latest advice:
<a
href="https://www.ncsc.gov.uk/blog-post/three-random-words-or-thinkrandom-0"
class="external text" target="_blank"
rel="nofollow noreferrer noopener">Click here</a>

### Maintain a strong site backup process

Never rely on others' backups. Take responsibility for your backup
procedures. Many ISPs state in their contract that you cannot rely
solely on their backups.

### Monitor crack attempts

VPS and dedicated server users can run
<a href="http://www.tripwire.com/" class="external text" target="_blank"
rel="nofollow noreferrer noopener">TripWire</a> or
<a href="http://la-samhna.de/samhain/" class="external text"
target="_blank" rel="nofollow noreferrer noopener">SAMHAIN</a>. These
applications provide exhaustive file checking and reporting
functionality, and can be installed in a stealthy manner to help protect
themselves in the event of a serious infiltration. (Note: Users of
shared servers cannot use this technique.)

### Perform automated intrusion detection

Use an Intrusion Prevention/Detection Systems to block/alert on
malicious HTTP requests.

- <a href="http://www.google.com/search?q=Intrusion+Prevention"
  class="external text" target="_blank"
  rel="nofollow noreferrer noopener">Google search</a>

### Perform manual intrusion detection

Regularly check raw logs for suspicious activity. Don't rely on
summaries and graphs.

### Stay current with security patches and upgrades

Apply vendor-released security patches ASAP.

- Review the
  <a href="https://vel.joomla.org/" class="external text" target="_blank"
  rel="noreferrer noopener">vulnerable extensions</a>

### Proactively seek site vulnerabilities

Perform frequent web scanning.

- <a href="http://www.google.com/search?q=%22web+scanning"
  class="external text" target="_blank"
  rel="nofollow noreferrer noopener">Google Search</a>

### Proactively seek SQL injections vulnerabilities

Use tools for conducting automated SQL Injection tests against your PHP
applications.

- <a href="http://www.google.com/search?q=%22SQL+Injection"
  class="external text" target="_blank"
  rel="nofollow noreferrer noopener">Google Search</a>
- <a href="http://en.wikipedia.org/wiki/SQL_injection"
  class="external text" target="_blank"
  rel="nofollow noreferrer noopener">Wikipedia Article</a>

### Use shell scripts to automate security tasks

Search the forums for these popular scripts:

- Joomla! Version Checking
- Joomla! Component/Module Version Checking
- Exploit Checking

### Learn about security software

There is not a single tool that can protect your site. If there were, it
would be so heavily targeted that it would probably become a liability.

### Don't reinvent every wheel

Every now and then, hire a professional Joomla! security consultant to
review your configurations. Do you remember the adage, *"Anyone who acts
as their own lawyer has a fool for a client."?* The same goes for Web
development. Don't expect to catch all of your own security mistakes.
