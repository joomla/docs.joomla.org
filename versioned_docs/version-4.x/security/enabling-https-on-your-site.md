<!-- Filename: Enabling_HTTPS_on_your_site / Display title: Enabling HTTPS on your site -->

## What is SSL/TLS?

Transport Layer Security (TLS) is the successor to Secure Sockets Layer
(SSL) - although most people still refer to it as SSL in blog posts.
Ever noticed the lock sign next to the URL when your browsing the
internet? That means that all the data you send to that website is being
sent encrypted so anyone who may have hacked your network (or similar)
and can intercept your requests is unable to view any of the data - they
can only see what URLs you are accessing.

## Why Use TLS?

Google (and most other search engines) now treat sites using https with
preference<sup>[\[1\]](#cite_note-1)</sup>. Furthermore many browsers
flag any website with a form (such as a login or contact form) that
isn't using https<sup>[\[2\]](#cite_note-2)</sup>

## How do I setup TLS?

For setting up the certificate, the simplest way is to get your host to
do it for you.

The correct certificate to buy depends on the security protections
required on your website. If you don't know then probably the cheapest
and easiest option is to use
<a href="https://letsencrypt.org/" class="external text" target="_blank"
rel="nofollow noreferrer noopener">Let's Encrypt</a> - it's free and
depending on your host can be often be configured straight from your
cpanel or plesk hosting dashboard.

If you've bought a Dedicated IP and SSL certificate, simply ask your
host to help and they will get it signed and install it in the correct
location for you.

## How do I redirect all my traffic to https

### In Joomla

The easiest way to enforce https traffic is to do it within Joomla. In
Global Configuration there is a "Force HTTPS" option which allows you to
force HTTPS either in the Administrator area only or for the entire
site. You'll pretty much always want the latter.

<img
src="https://docs.joomla.org/images/thumb/6/6d/Enable_HTTPS_In_Global_Config-en.png/800px-Enable_HTTPS_In_Global_Config-en.png"
decoding="async"
srcset="https://docs.joomla.org/images/thumb/6/6d/Enable_HTTPS_In_Global_Config-en.png/1200px-Enable_HTTPS_In_Global_Config-en.png 1.5x, https://docs.joomla.org/images/6/6d/Enable_HTTPS_In_Global_Config-en.png 2x"
data-file-width="1512" data-file-height="1012" width="800" height="535"
alt="Image Showing the Force HTTPS option in the Joomla 3.x default backend template" />

### In .htaccess

    RewriteEngine on
    RewriteCond %{SERVER_PORT} !^443$
    RewriteRule .* https://%{HTTP_HOST}%{REQUEST_URI} [QSA,R=301,L]

    Redirect permanent / https://www.yourdomainname.com

#### More complex .htaccess Examples

As an example, to switch from HTTP to HTTPS on any page that has
'abc/def' or 'ghi' in the URL, add something like this:

Code:

    RewriteCond %{HTTPS} off
    RewriteRule ^(abc/def|ghi)(.*)/?$ https://%{HTTP_HOST}%{REQUEST_URI} [R=301,NC,L]

... and to switch from HTTPS back to HTTP on any page that has 'home' or
'help' in the URL, do something like this:

Code:

    RewriteCond %{HTTPS} on
    RewriteRule ^(home|help)(.*)/?$ http://%{HTTP_HOST}%{REQUEST_URI} [R=301,NC,L]

If you want to force SSL on a specific folder you can insert the code
below into a .htaccess file placed in that specific folder:

Code:

    RewriteEngine On
    RewriteCond %{REQUEST_URI} folder
    RewriteRule ^(.*)$ https://www.example.com/folder/$1 [R,L]

Make sure you change the folder reference to the actual folder name.
Then be sure to replace www.example.com/folder with your actual domain
name and folder you want to force the SSL on.

1.  <span id="cite_note-1">[↑](#cite_ref-1) <a
    href="https://webmasters.googleblog.com/2014/08/https-as-ranking-signal.html"
    class="external free" target="_blank"
    rel="nofollow noreferrer noopener">https://webmasters.googleblog.com/2014/08/https-as-ranking-signal.html</a></span>
2.  <span id="cite_note-2">[↑](#cite_ref-2) <a
    href="https://www.blog.google/products/chrome/milestone-chrome-security-marking-http-not-secure/"
    class="external free" target="_blank"
    rel="nofollow noreferrer noopener">https://www.blog.google/products/chrome/milestone-chrome-security-marking-http-not-secure/</a></span>
