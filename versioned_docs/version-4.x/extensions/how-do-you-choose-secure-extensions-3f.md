<!-- Filename: How_do_you_choose_secure_extensions%3F / Display title: How do you choose secure extensions? -->

The most important thing anyone can do is make good decisions regarding
the extensions they choose to use on a site. Once an insecure or
malicious extension is installed you should consider your entire site
compromised. There is **no possible way** to protect or stop a component
from accessing database tables it should not be accessing. There is no
possible way to stop a component from sending all of the information it
found back to a cracker website. Once an insecure or malicious component
is installed, your entire site is insecure.

## Easy tips for making good choices regarding the extensions you install

- When was the last version released?

If it has been over a year, consider the project abandoned and find
something else. Do not install old components.

- What kind of release is it? (Stable, Release Candidate (RC), Beta,
  Alpha)

For production sites you should be sticking to Stable releases as much
as possible. If you cannot wait until a Stable release has been made
available, Release Candidates are the only other option you should
consider. It is not suggested that anyone install any Beta or Alpha
extensions on a production site. This means they still have bugs, they
have not been tested enough, and could have any number of inconvenient
bugs or security issues that have not been located or fixed.

- Does the extension have a history of good security practices?

This is obviously a bit more subjective but it is still a very valid
gauge of future trustworthiness. It requires a bit of investigation and
research. Look around the developer's download pages and archives. Are
there many security release or patches? Are there a lot of reports of
hacking activity through this extension? Is the developer experienced
and security conscious? What do other community members think of this
extension?

- Is there a support community for this extension?

This is very important for usability and security awareness. If there is
a support community for an extension there is a better chance of
security issues being known and resolved. A support community means that
people would like to continue using the extension and that they care
about the extension. This furthers the chance that security issues will
be found, disclosed, and dealt with promptly.

- Is there a version compatible with the most recent Joomla?

This point is important in the transition period between two Joomla
versions, where two valid Joomla versions are still in use. It's
important to know if the extension is compatible with the current Joomla
version, when the older version will reach it's end of life. Updating
Joomla is much easier if an extension is compatible with the most recent
version of Joomla available.

- Is the extension generally bug free?

While it is almost impossible for an extension to be completely bug
free, the smaller the number of bugs, the better. If there are bugs in
the software it means there are mistakes in the software. The more
mistakes, the higher risk of usability issues and security issues.
Security issues are often a result of not one bug, but several bugs or
bad practices. For example, the recent 3rd party vulnerabilities that
allow for remote file inclusion are a result of:

## Bad Practices

- Having PHP's Register Globals enabled.
- Using out of date or abandoned extension.
- No other security checks enabled for PHP. (url_fopen off, open_basedir
  restrictions, disabled PHP functions)
- Poorly configured file permissions.
- No request filtering or software "firewall". (such as mod_rewrite
  rules or mod_security Apache modules)

## Bugs

- Not including defined('\_VALID_MOS') or die... statements
- Poorly constructed include() statements.

## Important things to remember

**Although the Joomla! core is secure when configured correctly, third
party extensions come in all flavors of age and quality.** Unless you
absolutely trust the extension developer, always review the code should
before installing. The following is a list of typical areas of concern.

1\. How complex is the extension?

The larger it is, the more likely it is to have problems, and the more
carefully you should review it. If you can't tell what it's doing, you
should not trust it.

2\. Does the extension read or write files to your server?

Programs that read files may inadvertently violate access restrictions
you've set up, or pass sensitive system information to crackers.
Programs that write files have the potential to modify or damage
existing files, or introduce trojan horses.

3\. Does the extension interact with other programs on your system?

For example, many extensions send e-mail in response to a form input by
opening a connection with the sendmail program. Is it doing this in a
safe way?

4\. Does the extension run with suid (set-user-id) privileges?

In general this is very dangerous; extensions need an excellent reasons
for doing this.

5\. Does the extension validate all user input, such as in form fields
and in the URL?

6\. Check here, if the extension is listed as [vulnerable
extension](https://docs.joomla.org/What_is_a_vulnerable_extension%3F "Special:MyLanguage/What is a vulnerable extension?")

7\. Does the extension use explicit path names when invoking external
programs?

Relying on the PATH environment variable to resolve partial path names
is a dangerous practice.

8\. Is the extension secure against direct access throught the URL?

For example:
`www.yoursite.com/components/com_bad_extension.php?lots_of_bad_code_here`

9\. Is the extension secure against remote file inclusions?

10\. Is the extension secure against SQL injections?

11\. Is the extension secure against Cross Site Scripting (XSS)?

12\. Does the extension need PHP register_globals ON, or Joomla! RG
Emulation ON?

If so, then it is probably violating number 7 above.

13\. Does the extension provide higher database access to less
privileged users?

For example does it allow guests or registered users to view data that
only publishers or administrators should be able to see?

## More information

- See: <a
  href="https://extensions.joomla.org/support/knowledgebase/for-jed-users/choosing-secure-extensions/"
  class="external text" target="_blank" rel="noreferrer noopener">Choosing
  Secure Extensions on the JED website</a>
- See:
  <a href="https://extensions.joomla.org/vulnerable-extensions/about/"
  class="external text" target="_blank"
  rel="noreferrer noopener">Vulnerable Extension List</a>
