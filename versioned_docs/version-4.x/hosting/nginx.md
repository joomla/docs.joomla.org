<!-- Filename: Nginx / Display title: Nginx -->

<a href="http://nginx.org/" class="external text" target="_blank"
rel="nofollow noreferrer noopener">Nginx</a> is a lightweight Web server
that powers
<a href="https://en.wikipedia.org/wiki/Nginx" class="external text"
target="_blank" rel="nofollow noreferrer noopener">about 33%</a> of Web
servers across all domains. Unless you have specific requirements that
demand a heavy Web server like Apache, you are much better off using
Nginx.

Below are instructions on how to get Joomla! running with <a
href="https://www.nginx.com/resources/wiki/start/topics/examples/phpfcgi/"
class="external text" target="_blank"
rel="nofollow noreferrer noopener">PHP FastCGI Example</a>.

## Install Nginx

For Ubuntu, run *aptitude install Nginx*. For other distributions, run
the corresponding package manager or see the <a
href="https://www.nginx.com/resources/wiki/start/topics/tutorials/install/"
class="external text" target="_blank"
rel="nofollow noreferrer noopener">Nginx Install page</a>.

## Install PHP FastCGI

For Ubuntu, read <a
href="https://www.nginx.com/resources/wiki/start/topics/examples/phpfcgi/"
class="external text" target="_blank"
rel="nofollow noreferrer noopener">PHP FastCGI Example</a>.

For Gentoo, PHP will run as a FastCGI service (FPM), so the Nginx server
will run PHP as a separate process:

    # echo "dev-lang/php gd gd2 curl simplexml tokenizer dom tidy sqlite xml fpm cgi" >> /etc/portage/package.use
    # emerge php

The default settings of PHP-FPM are good for most servers. For special
configurations, visit the
<a href="http://php.net/manual/en/install.fpm.php" class="external text"
target="_blank" rel="nofollow noreferrer noopener">PHP FPM site</a>.

## Configure Nginx

Nginx configuration files reside in:

- `/etc/nginx/sites-available/` on Ubuntu (for sites running on that
  Nginx instance)
- `/etc/nginx/nginx.conf` on Gentoo and Raspbian (Debian optimized for
  Raspberry Pi)

Here is an sample Nginx configuration file, *joomla.conf*, that you can
reuse over all your Nginx enabled-sites.

    server {
      listen 80;
        server_name YOUR_DOMAIN;
        server_name_in_redirect off;

        access_log /var/log/nginx/localhost.access_log;
        error_log /var/log/nginx/localhost.error_log info;

        root PATH_ON_SERVER;
        index index.php index.html index.htm default.html default.htm;
        # Support Clean (aka Search Engine Friendly) URLs
        location / {
            try_files $uri $uri/ /index.php?$args;
        }

        # add global x-content-type-options header
        add_header X-Content-Type-Options nosniff;

        # deny running scripts inside writable directories
        location ~* /(images|cache|media|logs|tmp)/.*\.(php|pl|py|jsp|asp|sh|cgi)$ {
            return 403;
            error_page 403 /403_error.html;
        }

        location ~ \.php$ {
          fastcgi_pass  127.0.0.1:9000;
          fastcgi_index index.php;
          include fastcgi_params;
          fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
          include /etc/nginx/fastcgi.conf;
        }

        # caching of files 
        location ~* \.(ico|pdf|flv)$ {
            expires 1y;
        }

        location ~* \.(js|css|png|jpg|jpeg|gif|swf|xml|txt)$ {
            expires 14d;
        }

    }

Pay attention to a few things:

1.  The parameter *fastcgi_pass* is set to *127.0.0.1:9000*,
    corresponding to the port that FPM is configured to listen to. This
    means you can run the PHP processes on separate servers. On Gentoo,
    you can find this configuration in the
    */etc/php/fpm-php5.3/php-fpm.conf/* file.
2.  Don't forget to replace YOUR_DOMAIN & PATH_ON_SERVER above depending
    on your domain and the path of Joomla on your server.

## GZip Support

If you need GZip compression support, add the following section to the
*http* section of the main Nginx configuration file:

    gzip on;
    gzip_http_version 1.1;
    gzip_comp_level 6;
    gzip_min_length 1100;
    gzip_buffers 4 8k;
    gzip_types text/plain application/xhtml+xml text/css application/xml application/xml+rss text/javascript application/javascript application/x-javascript
    gzip_proxied any;
    gzip_disable "MSIE [1-6]\.";

## Sources

- <a href="https://wiki.gentoo.org/wiki/Nginx" class="external text"
  target="_blank" rel="nofollow noreferrer noopener">Nginx in Gentoo</a>
- <a href="https://kevinworthington.com/nginx-for-windows/"
  class="external text" target="_blank"
  rel="nofollow noreferrer noopener">Nginx for Windows</a>
- <a
  href="https://ubuntu.com/tutorials/install-and-configure-nginx#1-overview"
  class="external text" target="_blank"
  rel="nofollow noreferrer noopener">Nginx in Ubuntu</a>
- <a
  href="https://www.debianadmin.com/howto-install-nginx-webserver-in-debian.html"
  class="external text" target="_blank"
  rel="nofollow noreferrer noopener">Nginx in Debian</a>
- <a href="https://www.php.net/manual/en/install.fpm.php"
  class="external text" target="_blank"
  rel="nofollow noreferrer noopener">PHP-FPM installation and
  configuration</a>
- <a
  href="https://docs.nginx.com/nginx/admin-guide/web-server/compression/"
  class="external text" target="_blank"
  rel="nofollow noreferrer noopener">Compression and Decompression</a>
- <a href="https://www.nginx.com/blog/creating-nginx-rewrite-rules/"
  class="external text" target="_blank"
  rel="nofollow noreferrer noopener">Creating NGINX Rewrite Rules</a>
- <a href="http://nginx.org/en/docs/http/request_processing.html"
  class="external text" target="_blank"
  rel="nofollow noreferrer noopener">How Nginx processes a request</a>
