<!-- Filename: J4.x:Optional_Technical_Requirements / Display title: Optional Technical Requirements -->

## Optional Requirements for Joomla! 4.x

This page lists *optional* technical requirements which are not required
to install and run Joomla! but are required for some internal APIs.

|                           |                                                                                                                                                 |
|---------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| **Application**           |                                                                                                                                                 |
| JApplicationDaemon        | Requires PHP's `ext/pcntl` and `ext/posix`                                                                                                      |
| **Archive**               |                                                                                                                                                 |
| BZ2                       | Requires PHP's `ext/bz2`                                                                                                                        |
| GZip                      | Requires PHP's `ext/zlib`                                                                                                                       |
| Zip                       | Requires PHP's `ext/zip` or `ext/zlib`                                                                                                          |
| **Cache**                 |                                                                                                                                                 |
| APC                       | Requires PHP's `ext/apc` on PHP 5.3 or 5.4, `ext/apcu` on PHP 5.5 or 5.6, unsupported on PHP 7.x (Note: THIS NEED TO BE CHECKED)                |
| APCu                      | Requires PHP's ext/apcu on PHP 5.3+                                                                                                             |
| CacheLite                 | Requires the PEAR Cache_Lite package (tested on 1.7.16, will work with 1.8)                                                                     |
| Memcache                  | Requires PHP's `ext/memcache` and a Memcache server (Note: The Memcache extension is not compatible with PHP 7.x)                               |
| Memcached                 | Requires PHP's `ext/memcached` and a Memcached server                                                                                           |
| Redis                     | Requires PHP's `ext/redis` and a Redis server                                                                                                   |
| Wincache                  | Requires PHP's `ext/wincache` (Windows only)                                                                                                    |
| XCache                    | Requires PHP's `ext/xcache`                                                                                                                     |
| **Client adapters**       |                                                                                                                                                 |
| LDAP                      | Requires PHP's `ext/ldap`                                                                                                                       |
| HTTP/Curl                 | Requires PHP's `ext/curl`                                                                                                                       |
| HTTP/Socket               | Requires PHP's `fsockopen()` function be enabled                                                                                                |
| HTTP/Stream               | Requires PHP's `fopen()` function and `allow_url_fopen` enabled                                                                                 |
| **Cryptography**          |                                                                                                                                                 |
| JCrypt                    | Requires PHP's `ext/mcrypt` for all ciphers except the SodiumCipher which requires `ext/sodium`                                                 |
| JKeychain                 | Requires PHP's `ext/openssl`                                                                                                                    |
| **Database**              |                                                                                                                                                 |
| Microsoft SQL Azure       | Requires PHP's `ext/sqlsrv` (the PHP 5.x extension only supports Windows, a Linux compatible version of the extension is available for PHP 7.x) |
| Microsoft SQL Server      | Requires PHP's `ext/sqlsrv` (the PHP 5.x extension only supports Windows, a Linux compatible version of the extension is available for PHP 7.x) |
| MySQL                     | Requires PHP's `ext/mysql` (unsupported on PHP 7.x)                                                                                             |
| MySQLi                    | Requires PHP's `ext/mysqli`                                                                                                                     |
| Oracle                    | Requires PHP's `ext/pdo` with Oracle support (available for 3PD only; the CMS won't run with it)                                                |
| PDO MySQL                 | Requires PHP's `ext/pdo` with MySQL support                                                                                                     |
| PostgreSQL                | Requires PHP's `ext/pgsql`                                                                                                                      |
| SQLite                    | Requires PHP's `ext/pdo` with SQLite support (available for 3PD only; the CMS won't run with it)                                                |
| **Image**                 |                                                                                                                                                 |
|                           | Requires PHP's `ext/gd`                                                                                                                         |
|                           | Requires PHP's `ext/fileinfo`                                                                                                                   |
| **Session**               |                                                                                                                                                 |
| APC                       | Requires PHP's `ext/apc` on PHP 5.3 or 5.4, `ext/apcu` on PHP 5.5 or 5.6, unsupported on PHP 7.x (Note: THIS NEEDS TO BE CHECKED)               |
| Memcache                  | Requires PHP's `ext/memcache` and a Memcache server (Note: The Memcache extension is not compatible with PHP 7.x)                               |
| Memcached                 | Requires PHP's `ext/memcached` and a Memcached server                                                                                           |
| Wincache                  | Requires PHP's `ext/wincache` (Windows only)                                                                                                    |
| XCache                    | Requires PHP's `ext/xcache`                                                                                                                     |
| **OPTIONAL IMPROVEMENTS** |                                                                                                                                                 |
| **String**                |                                                                                                                                                 |
| mbstring                  | Enable PHP's `ext/mbstring` for the phputf8 library to use native functions                                                                     |
