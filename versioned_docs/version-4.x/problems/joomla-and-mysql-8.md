<!-- Filename: Joomla_and_MySQL_8 / Display title: Joomla and MySQL 8 -->

## MySQL default authentication plugin issue

It is possible to connect to a MySQL 8 Database using Joomla
<img src="https://docs.joomla.org/images/4/4d/Compat_icon_3_x.png"
decoding="async" data-file-width="40" data-file-height="17" width="40"
height="17" alt="Joomla 3.x" />, however it requires a customisation on
the MySQL 8 installation configuration. The reason is that MySQL 8 has a
lot of low-level changes including the default authentication plugin
changing to `sha256_password` from `mysql_native_password`. The native
PHP MySQL-Driver doesn't currently support MySQL 8 with this plugin. <a
href="https://github.com/php/php-src/commit/d6e81f0bfd0cb90586dd83d4fd47a4302605261a"
class="external text" target="_blank"
rel="nofollow noreferrer noopener">PHP 7.3 (alpha)</a> is supporting
MySQL 8 though.

## MySQL configuration change to get Joomla working with MySQL 8

If you edit the configuration file for MySQL 8, you can change the
default authentication plugin for MySQL to use the older
mysql_native_password. Open your configuration file
`sudo nano /etc/my.cnf` (Please note that your file may be under a
different directory) and add the following configuration:

    [mysqld]
    default-authentication-plugin=mysql_native_password

If you don't have access to your config file then you can update your
user as follows:

    ALTER USER 'username'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

Replace username with the name of the user account and password with the
password belonging to the account. Restart MySQL and you are done
...well, only if you have Joomla 3.8 or 3.9 installed.

## How MySQL default authentication plugin works

The advantage of `mysql_native_password` is that it supports the
challenge-response mechanism which is very quick and does not require
encrypted connection. However, `mysql_native_password` relies on SHA1
algorithm and NIST has recommended to stop using it.

Further, if two user accounts use the same password,
`mysql_native_password` transformation is the same in the mysql.user
table. Although the hash does not expose information about the actual
password, it still tells which two users use the same password. To avoid
that, a salt should be used. A salt is basically a random number that is
used as one of the parameters to cryptographic hash functions used to
transform user passwords. Since a salt is random and different for each
execution, even if two users use the same passwords, the end result of
transformation would look very different. Since MySQL 5.6,
sha256_password authentication plugin is supported. It uses multiple
rounds of SHA256 hash on a salted password to make sure that the hash
transformation is more secure. However, it requires either encrypted
connections or support for an RSA key pair. So, while password security
is stronger, secure connections and multiple rounds of hash
transformations require more time in the authentication process.

caching_sha2_password tries to combine the best of both worlds.
<sup>[\[1\]](#cite_note-1)</sup>

1.  <span id="cite_note-1">[↑](#cite_ref-1) <a
    href="https://mysqlserverteam.com/mysql-8-0-4-new-default-authentication-plugin-caching_sha2_password/"
    class="external free" target="_blank"
    rel="nofollow noreferrer noopener">https://mysqlserverteam.com/mysql-8-0-4-new-default-authentication-plugin-caching_sha2_password/</a></span>
