<!-- Filename: How_do_I_use_Gmail_as_my_mail_server%3F / Display title: How do I use Gmail as my mail server? -->

If you have a working Gmail account you can use Gmail as your mail
server by setting it in the global configuration.

On the server tab set the following:

- Mailer: SMTP
- SMTP Host: smtp.gmail.com
- SMTP Port 465
- SMTP Security: SSL/TLS
- SMTP Authentication: Yes
- Set the next two lines with your information. You need to use an app
  specific password (ASP), described below.
- SMTP Username: your gmail username
- SMTP Password: the app specific password (ASP) you generated,
  described below.

The following are also working combinations:

- SMTP Port 587
- SMTP Security: STARTTLS

<!-- -->

- SMTP Port 25
- SMTP Security: STARTTLS

The SSL module does not need to be enabled in Apache.

The OpenSSL extension needs to be enabled in PHP. The details can be
found at the
<a href="https://www.php.net/manual/en/openssl.installation.php"
class="external text" target="_blank"
rel="nofollow noreferrer noopener">php.net Installation page</a>.

If you are using WAMP on Windows, the openssl module is not enabled by
default and you need to enable it. To do this:

1.  Open the php.ini file and uncomment the line
    `extension=php_openssl.dll` by removing the semicolon ; from the
    beginning of the line.
2.  Save the php.ini file and restart the Apache service.

Note

Note that if you use 2-step verification in Gmail, you need to add a new
password in Settings - Accounts - Change accounts settings - Other
Google Account settings - Security - 2-step verification - Manage your
application specific passwords.

When the new Application Specific Password (ASP) is presented in groups
of four characters separated by spaces, make sure that you **do NOT
enter the spaces** into the SMTP password in the mail server settings in
Joomla.

- Application Specific Passwords (ASPs): See the Google Support
  <a href="https://support.google.com/accounts/answer/185833"
  class="external text" target="_blank"
  rel="nofollow noreferrer noopener">Sign in with App Passwords</a>
  page.
- 2-Step Verification: See the Google Support
  <a href="https://support.google.com/accounts/answer/185839"
  class="external text" target="_blank"
  rel="nofollow noreferrer noopener">Turn on 2-Step Verification</a>
  page.
