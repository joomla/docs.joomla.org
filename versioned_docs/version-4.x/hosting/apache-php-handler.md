<!-- Filename: J4.x:Apache_PHP_Handler / Display title: Apache PHP Handler -->

## Notes

To determine which method your web server is using to handle php files
use the Administrator / System / Information links and select the PHP
Information tab. Search the page for **Server API**. The common ways for
an Apache web server to handle PHP files include the following:

### mod_php

- **Advantage:** one of the fastest handlers available.
- **Disadvantage:** only works with a single version of PHP, files saved
  by php scripts are owned by the Apache user.
- **To recognise:** Server API - Apache 2.0 Handler

### CGI/FastCGI

- **Advantage:** scripts run as the domain or subdomain user, very fast
  handler.
- **Disadvantage:** slower than mod_php, cannot put PHP configuration
  changes in an .htaccess file.
- **To Recognise:** Server API - CGI/FastCGI

### FPM/FastCGI

- **Advantage:** very fast, additional level of flexibility.
- **Disadvantage:** uses more memory than most of the others, cannot put
  PHP configuration changes in an .htaccess file.
- **To Recognise:** Server API - FPM/FastCGI

On a local laptop or desktop computer you can use mod_php but you need
to set the Apache user to your own username and point the document root
to a location in your own file space. Otherwise you will have file and
folder permissions problems.

On a hosting service you need to use one of the FastCGI alternatives.
Hosting services may give you a choice.
