<!-- Filename: Security_Checklist/Getting_Started / Display title: Security Checklist/Getting Started -->

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

### Security matters

Internet security is a fast moving challenge and ever present threat.
There is no one right way to secure a website, and all security methods
are subject to instant obsolescence, incremental improvement, and
constant revision. All public facing websites are open to constant
attack. Are you willing and able to invest the time it takes to
administer a dynamic, 24x7, world-accessible, database-driven,
interactive, user-authenticated website? Do you have the time and
resources to respond to the constant flow of new Internet security
issues? The [Top 10 Stupidest Administrator
Tricks](https://docs.joomla.org/Top_10_Stupidest_Administrator_Tricks "Top 10 Stupidest Administrator Tricks")
is a comic/tragic look at what can go wrong. Don't learn these tricks
the hard way! Depending on your own experience, reading the *Stupidest
Tricks* will either make you laugh or cry. Luckily, there are some
well-established principles upon which to base your defensive plans. The
following checklists point you toward current best practices for Joomla
security.

### How to read these documents

1.  Not all techniques are appropriate for every level of experience.
    Apply the techniques you understand and read up on the ones you
    don't.
2.  Not all techniques are appropriate for every server. If you use a
    shared server, you must depend on the settings established by your
    hosting provider. If you are using a virtual or dedicated server,
    you can apply more creative security tactics.
3.  Not all security tactics are appropriate for all versions of Joomla.
    Where a technique applies to only one version it is noted by one of
    the following icons:
     <img src="https://docs.joomla.org/images/4/43/Compat_icon_1_0.png"
    decoding="async" data-file-width="40" data-file-height="17" width="40"
    height="17" alt="Joomla 1.0" /> <img src="https://docs.joomla.org/images/c/c8/Compat_icon_1_5.png"
    decoding="async" data-file-width="40" data-file-height="17" width="40"
    height="17" alt="Joomla 1.5" /> <img src="https://docs.joomla.org/images/d/da/Compat_icon_1_6.png"
    decoding="async" data-file-width="40" data-file-height="17" width="40"
    height="17" alt="Joomla 1.6" /> <img src="https://docs.joomla.org/images/8/87/Compat_icon_1_7.png"
    decoding="async" data-file-width="40" data-file-height="17" width="40"
    height="17" alt="Joomla 1.7" /> <img src="https://docs.joomla.org/images/5/53/Compat_icon_2_5.png"
    decoding="async" data-file-width="40" data-file-height="17" width="40"
    height="17" alt="Joomla 2.5" /> <img src="https://docs.joomla.org/images/9/9e/Compat_icon_3_0.png"
    decoding="async" data-file-width="40" data-file-height="17" width="40"
    height="17" alt="Joomla 3.0" /> <img src="https://docs.joomla.org/images/d/d6/Compat_icon_3_1.png"
    decoding="async" data-file-width="40" data-file-height="17" width="40"
    height="17" alt="Joomla 3.1" />

### The most important guidelines

These checklists are long and growing because the full plot is thick,
complex, and expanding, but don't despair! Here are a few essential
guidelines for securing any website. Following them will protect you
from most catastrophes.

1.  **Back up early and often:** Set up (and use and test) a regular
    backup and recovery process. When done well, this ensures that you
    can recover from almost any imaginable disaster.
2.  **Update early and often:** Promptly update to the latest *stable*
    version of Joomla! and any installed third-party extensions. This
    ensures that your site is protected from the newest vulnerabilities
    as soon as a fix is released and from the latest attack methods as
    soon as a defense is developed.
3.  **Use a secure host**: Use a high-quality Web host. Do not be fooled
    by offers of 'unlimited bandwidth, unlimited hard drive space,
    unlimited databases, etc.
4.  **Use the community**: Don't forget the truism, "If a deal is too
    good to be true, it is." It seems that nothing on Earth is
    unlimited--except perhaps the gullibility of fools and the greed of
    those who prey upon them. Consider hiring professional assistance if
    you have inadequate experience or knowledge in this area. One of the
    advantages of GNU software is that user support is free. Take good
    advantage of this by asking good questions within the
    <a href="http://forum.joomla.org" class="external text" target="_blank"
    rel="noreferrer noopener">Joomla! Forums</a>. When doing so, be sure
    to use the the most appropriate board, such as Installation,
    Migration and Updating, Administration.

The most helpful posts in the Joomla! Security Forum are converted into
[Security and Performance
FAQs](https://docs.joomla.org/Security_and_Performance_FAQs "Security and Performance FAQs").
Many of the items on this list are explained in much greater detail in
the FAQs.

You may want to read the excellent
<a href="https://docs.joomla.org/Beginners" class="mw-redirect"
title="Beginners">Absolute Beginners Guide to Joomla!</a> It has wealth
of tips and tricks presented in an easy to understand format. Even
experienced Joomlaists find great ideas here.

Hunt down the many nuggets of wisdom found in the
<a href="http://forum.joomla.org" class="external text" target="_blank"
rel="noreferrer noopener">Joomla! Forums</a>, in particular the
<a href="http://forum.joomla.org/viewforum.php?f=714"
class="external text" target="_blank" rel="noreferrer noopener">Joomla!
3.x Security Forum</a> and the
<a href="http://forum.joomla.org/viewforum.php?f=621"
class="external text" target="_blank" rel="noreferrer noopener">Joomla!
2.x Security Forum</a>.

To receive all Joomla security announcements, subscribe to Joomla
Security News. There are several ways to subscribe:

1.  <a
    href="http://feedburner.google.com/fb/a/mailverify?uri=JoomlaSecurityNews"
    class="external text" target="_blank"
    rel="nofollow noreferrer noopener">Automatic Email Notification</a>
2.  <a href="http://feeds.joomla.org/JoomlaSecurityNews"
    class="external text" target="_blank" rel="noreferrer noopener">RSS
    feed</a>.

### The bad news

1.  **There is no perfect security on the Web!** As economists would
    say, "There's no free lunch." Don't be fooled by Joomla's award
    winning ease-of-use. Maintaining a secure Web site on the open
    Internet is not easy. Maintaining adequate security requires a wide
    and ever-growing range of skills and knowledge, constant
    watchfulness, and a robust backup and recovery process.
2.  **There's no one right way!** Due to the variety and complexity of
    modern web systems, security issues can't be resolved with simple,
    one-size-fits-all solutions. You (or someone you trust) must learn
    enough about your server infrastructure to make valid security
    decisions. Strong security is a moving target. Today's expert might
    be tomorrow's victim. Welcome to the game...
3.  **There's no substitute for experience!** To secure your Web site,
    you must gain real experience (some of which will be bitter), or get
    experienced help from others. If you haven't invested the
    considerable time it takes to learn how to maintain a secure Web
    site, be sure you can consult with someone who has. Read this
    tongue-in-cheek description of the [Top 10 Stupidest Administrator
    Tricks](https://docs.joomla.org/Top_10_Stupidest_Administrator_Tricks "Top 10 Stupidest Administrator Tricks")
    which illustrates typical, blow-by-blow examples of how to learn Web
    security the hard way.

### The good news

1.  **Even a beginner can start at the head of the herd** User forums
    for many systems are clogged with
    <a href="http://www.google.com/search?q=Help!+I&#39;ve+been+hacked"
    class="external text" target="_blank"
    rel="nofollow noreferrer noopener">Help! I've been hacked</a> posts
    by people who did NOT follow standard security practices. If you are
    studying this checklist before your site is attacked,
    congratulations, you're already ahead of the herd.
2.  **It's not as hard as it looks** If this is one of your first
    websites, security issues may seem overwhelming, but you don't have
    to deal with all of them at once. Start with the most critical
    issues. As you become more familiar with
    <a href="http://www.gnu.org" class="external text" target="_blank"
    rel="nofollow noreferrer noopener">GNU</a> tools and techniques,
    including
    <a href="http://www.gnu.org/" class="external text" target="_blank"
    rel="nofollow noreferrer noopener">GNU/Linux</a>,
    <a href="http://www.apache.org" class="external text" target="_blank"
    rel="nofollow noreferrer noopener">Apache</a>,
    <a href="http://www.mysql.com" class="external text" target="_blank"
    rel="nofollow noreferrer noopener">MySQL</a>,
    <a href="http://en.wikipedia.org/wiki/SQL" class="external text"
    target="_blank" rel="nofollow noreferrer noopener">SQL</a>,
    <a href="http://www.php.net" class="external text" target="_blank"
    rel="nofollow noreferrer noopener">PHP</a>,
    <a href="http://en.wikipedia.org/wiki/HTTP" class="external text"
    target="_blank" rel="nofollow noreferrer noopener">HTTP</a>,
    <a href="http://en.wikipedia.org/wiki/CSS" class="external text"
    target="_blank" rel="nofollow noreferrer noopener">CSS</a>,
    <a href="http://en.wikipedia.org/wiki/XML" class="external text"
    target="_blank" rel="nofollow noreferrer noopener">XML</a>,
    <a href="http://en.wikipedia.org/wiki/RSS" class="external text"
    target="_blank" rel="nofollow noreferrer noopener">RSS</a>,
    <a href="http://en.wikipedia.org/wiki/TCP/IP" class="external text"
    target="_blank" rel="nofollow noreferrer noopener">TCP/IP</a>,
    <a href="http://en.wikipedia.org/wiki/FTP" class="external text"
    target="_blank" rel="nofollow noreferrer noopener">FTP</a>,
    <a href="https://git-scm.com/" class="external text" target="_blank"
    rel="nofollow noreferrer noopener">Git</a>,
    <a href="http://en.wikipedia.org/wiki/JavaScript" class="external text"
    target="_blank" rel="nofollow noreferrer noopener">JavaScript</a>,
    and
    <a href="http://www.joomla.org" class="external text" target="_blank"
    rel="noreferrer noopener">Joomla!</a>, you'll add refinements to
    your set of security tactics.
3.  **You can get help** If you believe your website was attacked, **do
    not** simply post an announcement with full details in the Joomla!
    forums. If you are dealing with a new vulnerability or new form of
    attack, publishing that information could put other websites at
    risk. Instead, report possible security vulnerabilities to the
    <a href="http://developer.joomla.org/security" class="external text"
    target="_blank" rel="noreferrer noopener">Joomla! Security Task
    Force</a>.
