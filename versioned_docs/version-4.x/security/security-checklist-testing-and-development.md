<!-- Filename: Security_Checklist/Testing_and_Development / Display title: Security Checklist/Testing and Development -->

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
development](https://docs.joomla.org/Visual_Studio_Code 'Special:MyLanguage/Visual Studio Code')
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
