<!-- Filename: WebAuthn_Passwordless_Login / Display title: WebAuthn Passwordless Login -->

Joomla!  4.x

## System - WebAuthn Passwordless Login

Web Authentication, or WebAuthn for short, allows a user to securely log
into a site without using a password — though you still need to provide
your username. It does using strong cryptography and in a manner which
is extremely resistant to the most common problems of passwords: someone
guessed it (brute force attack), someone intercepted it (man in the
middle attack), someone tricked you into divulging it (phishing attack),
someone cracked it after getting ahold of a copy of your database data
(SQL injection attacks) or someone stole it.

WebAuthn is not just very secure; it is also very user friendly! You no
longer have to remember long passwords or use a password manager. All
you need is an *authenticator*, sometimes also called a *passkey*. An
authenticator can have many forms, physical or virtual. It can be a
separate hardware key connecting to your device via USB, Bluetooth or
NFC. It can be your device itself, unlocking its built-in authenticator
with a PIN, fingerprint reader, facial scan or similar biometric check.
This feature already works on Android and iOS/iPadOS devices and we're
working on enabling it on Windows as well. It can even be your phone —
currently this is possible with Android phones but this feature is also
coming to iOS / iPadOS devices.

WebAuthn only works over HTTPS and only when your site is using a valid,
trusted certificate for it. Don't worry, you don't have to spend any
extra money; free of charge services like Let's Encrypt are typically
integrated into web hosting control panels and work perfectly fine with
WebAuthn.

WebAuthn uses public key cryptography, the same proven technology that
keeps your sites safe with HTTPS, your banking information secure and so
on. The private key never leaves the authenticator. Your site only
stores a public key. Even if you suffer a data breach the attacker will
be left with a practically useless public key; it would take them
thousands to millions of CPU years to crack it as opposed to a few
minutes or hours required to crack the hash of a fixed password that you
can remember.

WebAuthn is the future of authentication. Easy, secure and hassle-free.
Everything that fixed passwords are not.

The following picture shows a hardware device inserted into a laptop
computer's USB port. It cost £15 in February, 2022.

<img
src="https://docs.joomla.org/images/2/2e/J4x-passwordless-login-hardware-device.jpg"
decoding="async" data-file-width="300" data-file-height="225"
width="300" height="225" alt="Hardware device" />

WebAuthn uses a system plugin that is enabled by default. A **Web
Authentication** button will be present in default Joomla 4 login
screens, as illustrated in the Administrator login screen:

<img
src="https://docs.joomla.org/images/2/20/J4x-passwordless-login-admin-login.png"
class="thumbborder" decoding="async" data-file-width="400"
data-file-height="474" width="400" height="474"
alt="Administrator Login" />

## User Configuration

The user must first register with a normal Username and Password. After
logging in go to the User Profile form. For an Administrator:

- Select **User Menu **→** Edit Account **→** W3C Web Authentication
  (WebAuthn) Login** to bring up the form, initially with no
  authenticators registered.
- Select **Add New Authenticator**

The exact presentation of the next step depends on your browser.
Typically, you will see an alert, message or window asking you to select
an authenticator type or, if you're using a hardware authenticator
attached to your device, reminding you to press the button on the
hardware authenticator. For security and practical reasonts there is a
relatively short time interval allowed for activating the authenticator:
60 seconds.

<img
src="https://docs.joomla.org/images/3/38/J4x-passwordless-login-hardware-propmpt.png"
decoding="async" data-file-width="400" data-file-height="139"
width="400" height="139" alt="Hardware Prompt" />

Once you unlock your authenticator — tapping on a button, scanning your
fingerprint / face, entering a PIN or a combination of the above
depending on your authenticator — the message disappears, the
authenticator is registered and the screen appears as follows:

<img
src="https://docs.joomla.org/images/6/69/J4x-passwordless-login-registered-authenticator.png"
decoding="async" data-file-width="508" data-file-height="366"
width="508" height="366" alt="Registered Authenticator" />

It is very important to note that you can only register or remove
authenticators on your own user account. For security reasons, even a
Super User is disallowed from registering, editing or adding
authenticators on other user accounts.

### Authenticators

You can use any FIDO U2F or FIDO2 authenticator. FIDO U2F is an older
standard which supports a more limited, less secure selection of
cryptographic methods. FIDO2 is the newer standard which supports much
more secure cryptographic methods including Elliptic Curve Cryptography,
a cryptographic method which is believed to be resistant even to quantum
computing (if and when it becomes a practical reality). Moreover, FIDO2
authenticators can be set up to have additional protections such as a
PIN or a biometric control (e.g. fingerprint scan) which means that even
if you lose physical possession of the authenticator itself whoever
finds it cannot log into your sites.

If you are looking to buy a hardware authenticator you can look for
"FIDO2" in your favorite marketplace, such as Amazon. There is a wide
selection to choose from.

You may also use a software FIDO key such as Krypton as your
authenticator.

Many devices have built-in FIDO2-compliant authentication:

- Windows 10 and 11 have Windows Hello with a PIN, fingerprint scanner,
  facial recognition camera or a combination of hardware key and PIN.
  Support for Windows Hello is being added to the plugin with a release
  target of Joomla 4.2.0.
- macOS has TouchID on all laptops with the T2 chipset or those based on
  Apple Silicon using the built-in TouchID sensor, as well as all Apple
  Silicon–based desktops using the new Apple Aluminium keyboard with a
  fingerprint scanner.
- iOS / iPadOS has TouchID on all devices with a fingerprint scanner and
  FaceID on all newer devices with a FaceID infrared dot projection
  camera.
- Some Android devices have a fingerprint scanner or a face recognition
  camera. These can also work as FIDO2 authenticators, on Android 9 or
  later using Google Chrome at least.
- Other devices may be available too. For example, Android phones using
  <a
  href="https://groups.google.com/a/fidoalliance.org/g/fido-dev/c/go6GoFW27Dw/m/9flCLR5pBQAJ?pli=1"
  class="external text" target="_blank"
  rel="nofollow noreferrer noopener">caBLE</a>

### WebAuthn compatible browsers

Chromium and Firefox based browsers have supported WebAuthn since early
2019.

Safari and all iOS/iPadOS browsers (which are, in fact, Safari with a
different skin) fully support WebAuthn since iOS/iPadOS 13 released late
2019.

Practically speaking, if your operating system and browser were released
after mid-2020 you should have no problem. Only some very uncommon
browsers still lack support for WebAuthn.

## Authentication

To login you must enter your username in the login form Username field.
You do not need to enter your password but if your browser enters it for
you just leave it. The password is NOT sent to the server when the form
is submitted via the Web Authentication button.

It follows that you can login with either your Username and Password or
Username and Web Authentication.

## How To Disable the Plugin

If you do not wish to allow WebAuthn just go to the list of plugins and
find System - WebAuthn Passwordless Login in the System group and
disable it. There are no parameters to set.

## Server Requirements

For WebAuthn to work the following preconditions must be met:

- HTTPS with a valid, signed certificate. Most hosts let you use free of
  charge certificates issues by Let's Encrypt. These work perfectly fine
  with WebAuthn.
- The OpenSSL extension for PHP must be installed and enabled.
- The PHP extension GMP or the PHP extension BCmath must be installed
  and enabled (either will do).
- The Sodium library should ideally be enabled; it enables the use of
  Elliptic Curve Cryptography on compatible FIDO2 authenticators which,
  as we said, is the most secure cryptographic method.

## Frequently Asked Questions and Troubleshooting

### I can't see the “Web Authentication” login button

You are not accessing your site under HTTPS. WebAuthn is only available
for HTTPS sites with a valid certificate. This is a security precaution
baked into the WebAuthn standard. The plugin actually checks if the site
is accessed through HTTPS using Joomla's Uri class. In rare cases where
the server lies about the protocol you might not see the button even
though your site (claims to be) HTTPS. Same goes if you have edited your
configuration.php file and set up the optional \$live_site configuration
parameter with an http:// protocol prefix instead of https://.

Also note that third party login modules and components implementing
their own login form may not display these buttons just yet. We added
new infrastructure to support them, much like what we had to do in
Joomla! 3.2 to support Two Factor Authentication.

### I still need to provide a username. Isn't WebAuthn supposed to get rid of usernames?

Not really, no. The current specification of WebAuthn does not provide
identity management. Web browsers require us to send them a list of
acceptable WebAuthn public keys during the login phase. This means that
we need your username to fetch them.

That said, using WebAuthn finally makes it clear that usernames *are not
to be considered secrets*. They are considered public information which
can be freely transmitted to an adversary, just like the public keys
stored in the site's database. The only secret is stored in the
authenticator itself and never leaves the authenticator!

### I have registered an authenticator but trying to log in tells me that I haven't. Is this a bug?

It is a bug but not with the WebAuthn plugin itself.

One or more plugins on your site throw PHP Notices, Warnings or Errors,
thus corrupting the reply sent back by your server. As a result the
JavaScript on the page cannot parse the server response and is unsure
whether any authenticators are registered by the user.

Go to your site's backend, System, Global Configuration and set Error
Reporting to None. In most cases of misbehaving core and 3PD plugins
this is enough. Otherwise please examine the output of the request using
your browser's developer tools to see what is corrupting the request.

### There is no prompt on Safari to use my authenticator

This should no longer be happening with iOS 13, iPadOS 13 and macOS
Catalina or any later version.

This is a Safari bug in older versions of Safari. Older versions of
Safari only included support for WebAuthn as an experimental feature and
not quite finished.

### I cannot use a biometric sensor (TouchID, fingerprint, Windows Hello)

Some older Chromium-based browsers (except Google Chrome proper) didn't
have full support for built-in authenticators. They would crash or hang
when you tried using one. These issues were fixed in these browsers
around mid-2020.

If you are using Windows please remember that your device MUST have a
Trusted Platform Module (TPM) chip and it must be enabled in the BIOS.
Just having a Windows Hello-compatible biometric sensor won't do the
trick. This is a security precaution in the WebAuthn standard itself:
the authenticator information must be processed using secure,
tamper-resistant hardware to prevent key subversion (e.g. malware
running on the computer cannot steal the key used for authentication).

Finally, do keep in mind that Windows Hello support is still being
worked on and will be released with Joomla 4.2.

### If I can use a software authenticator why should I bother with a hardware token?

The linchpin of WebAuthn is the absolute secrecy of the private key. It
is only known to the authenticator and it should be impossible to
communicate to the outside world.

In the case of a hardware authenticator, be it a discrete hardware
device or a TPM / Secure Enclave built into your device, this is a given
by the very nature of that hardware.

A software authenticator generates a secret key and stores it in the
filesystem. However, it is still a regular software application which
runs inside your regular operating system, be it your phone's or your
computer's. As a result it is susceptible to several classes of attacks
which can be used to surreptitiously steal information (security issues
in the software itself, malware using Spectre-class vulnerabilities in
modern CPUs etc).

So, a software authenticator is far more convenient and secure than a
regular password but a hardware authenticator offers the best security.
Choose your authenticator based on your budget and security needs.

Considering that the price of a FIDO key –which is compatible with
WebAuthn– is under €10 on Amazon you can use a hardware authenticator in
most practical use cases.

### Why are the credentials encrypted in the database? Isn't this an overkill?

The only thing stored in the database is the public key returned by the
authenticator when we are performing the attestation ceremony (that's
the formal name of registering an authenticator per the WebAuthn
specification). Being a public key it does not need protecting from
reading. Even if an unauthorised user was able to read this information
they would not be able to impersonate the authenticator e.g. by cloning
it.

However, if a malicious user had write access just to the
\#\_\_webauthn_credentials database table, without read access to the
filesystem and without write access to any other table, they could
conceivably **add** their own authenticator, therefore being able to
impersonate the targeted user on the system. This is a very theoretical
attack since they would also need to know the user handle for the user
they are attacking which is harder to derive without some inside
knowledge of the site itself. Besides, having write access to just this
table and not the entire database (in which case they could create a new
Super User) is extremely unlikely. Still, we are encrypting the
credentials to make it impossible for even this entirely theoretical
attack to succeed.

We are fully aware that if a user has read access to the server
filesystem they have access to the encryption key and the database
connection information, all of which is stored in configuration.php.
However, in this case you are already hacked: the attacker can read
configuration.php therefore they know how to connect to your database.
In this case they can do whatever they please to your site, including
deleting all existing Super Users and creating their own Super User
account. Therefore there's no reason to try to address this situation;
you'd be fully compromised (hacked). The only that could be a saving
grace is regular, tested, off-site backups.

### I have set up Two Factor Authentication but I am logged in without providing my Secret Key. Isn't this insecure?

No, it's intentional and by design.

When we added Two Factor Authentication (TFA) in Joomla! 3.2 you were
only able to log into your site using a username and password. Passwords
can be stolen or guessed. Therefore TFA was the only way to provide a
modicum of security on high risk and high value targets. That was back
in 2013.

WebAuthn is an entirely different authentication solution which has none
of the problem of fixed passwords. It uses strong cryptography and
secure hardware to make it practically impossible to subvert the
authentication cryptographic keys. It's also unphishable, i.e. you
cannot be fooled into using it on an impersonating site since the
WebAuthn credential is tied to the exact domain name it was issued for
(yes, if you use multiple domains for your site or transfer your site to
another domain you'll need to re-register all your WebAuthn
authenticators – you got that right!). As a result, authentication with
WebAuthn is incredibly secure and supersedes the reasons that
necessitated TFA. This means that if you successfully authenticate using
WebAuthn the TFA secret key needs not be –and is therefore not– checked
at all.

In an ideal world, you would only be able to log into your site using
WebAuthn. This is a feature we are working on and you may not want to
enable; after all, if your domain name changes or you lose access to or
reset all of your WebAuthn authenticators you'd be locked out of your
site. Therefore you should still enable TFA on your user account on the
basis that password login can still be used as a fallback to logging
into your site and must be protected from known attacks against fixed
passwords.

### Isn't TFA good enough? Why do we need WebAuthn?

TFA alone is good enough in most cases but suffers from two issues.

First, it has a rather awkward user experience. You need to provide your
ever-changing secret key with your username and password. Most people
use TOTP (the six digit PIN that changes every 30 seconds) which slows
down logging in and tends to frustrate users. Using a YubiKey is much
faster but also more expensive and more complicated to provision when
you have more than a couple of users on the site. A YubiKey also has an
expected life of about 2 years of everyday use when generating One Time
Passwords (it runs out of the write-once memory it uses to keep track of
the signatures it has issued).

Second, if you are using TOTP you still are susceptible to security
issues such as keyloggers, phishing and the possibility that the secret
key used for generating the TOTP is stolen. Moreover, with one million
possibilities and thirty seconds to try them it is conceivable that an
attacker can get lucky since Joomla doesn't lock your account or
otherwise employ rate limiting for failed login attempts. While these
protections could be implemented, the implementation itself could be
abused to create a denial of service situation which locks a legitimate
user out of their site while the attacker is busy infiltrating it. It's
a case of the remedy being worse than the disease.

WebAuthn greatly improves the user experience. Major browsers embraced
WebAuthn and offer a compelling user experience, guiding the users into
using authenticators successfully. Logging in with WebAuthn is more
convenient even when compared to using a password manager's auto-fill
feature. With recent versions of mobile operating systems even that
experience, once slightly confusing, is rapidly becoming easier than
passwords and TFA ever were.

Where WebAuthn is truly killing it is at the security front. By virtue
of using secure hardware and strong validation of the site's domain name
it is practically immune to keyloggers, phishing and key subversion. It
even has built-in protection against key cloning. Yes, you can still
lose your hardware — but FIDO2 authenticators, be they external devices
or built-in, can be locked out with a PIN or biometrics. Overall, using
WebAuthn with FIDO2 authenticators is more theft- and loss-resistant
than your house or car keys.

## Developer Notes

### Extra login buttons

The plugin module and com_users now use the onUserLoginButtons event,
defined and called in
Joomla\CMS\Helper\AuthenticationHelper::getLoginButtons, to retrieve the
definitions of any additional buttons which need to be placed after the
regular login button.

All developers implementing a login module or, more generally, a login
form should also use the
Joomla\CMS\Helper\AuthenticationHelper::getLoginButtons public static
method to retrieve said definitions and render these buttons to make
their software fully compatible with Joomla 4.

Developers wishing to implement custom buttons should look at how the
WebAuthn system plugin implements this functionality. Such buttons can
be used for implementing third party single-sign-on services or even
logging in using third party identity services such as those offered by
popular social media (Facebook, Google, Twitter, GitHub etc).

This change does not adversely impact backwards compatibility. Third
party login modules and login forms will continue functioning normally
even if they do not implement the extra login buttons feature with the
notable omission of integrations afforded by said feature such as Web
Authentication itself. That is to say they won't stop functioning (which
would be a b/c break) but they won't be feature-complete.

### Allowing com_ajax in the backend login page

The Administrator login page whitelists com_ajax in
AdministratorApplication so it can be used to handle requests by guest
users.

This change does not cause any backwards compatibility issues as long as
developers use sane practices and do not assume that being called by
com_ajax in the backend is proof that the user is logged into the
backend. That would be a bad security practice. The sane practice is to
use Joomla's User object to detect if it's a guest user and if not
whether the user is allowed a permission required to effect the action
requested through com_ajax. That is to say, if this change has broken
your code then your code was already broken and needed to be reworked
anyway.

## Further Information

*The initial documentation of this feature is in the pull request at
<a href="https://github.com/joomla/joomla-cms/pull/28094"
class="external text" target="_blank"
rel="nofollow noreferrer noopener">PR #28094</a>.*
