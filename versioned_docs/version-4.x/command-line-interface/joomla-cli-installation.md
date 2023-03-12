<!-- Filename: J4.x:Joomla_CLI_Installation / Display title: Joomla CLI Installation -->

## Introduction

Starting with Joomla! 4.3, the Joomla CLI installation is available. It
allows setting up the *Content Management System* (CMS) directly on the
server console without the need of a web browser. This allows automated
deployments, for example for autoinstallers for an ISP. By eliminating
the HTML interface, the installation process is significantly
accelerated.

Experienced users and developers can easily deploy multiple instances of
Joomla this way.

**The CLI installer is part of the standard Joomla package.**

## System Requirements

Joomla requires PHP, a database and a web server. For the latest
information about the supported software and the minimum and recommended
versions, please visit
<a href="https://downloads.joomla.org/technical-requirements"
class="external free" target="_blank"
rel="noreferrer noopener">https://downloads.joomla.org/technical-requirements</a>.

## Processing Installation

Basically, the CLI installation can be performed via two methods:

1.  Manual installation
2.  Script-driven automatic installation

### Manual installation

Manual installation offers the highest level of control possible during
the installation process. Each step is visible in the terminal and can
be aborted with `Ctrl+C` in case of an incorrect entry.

#### Steps to be done

1.  Uploading the installation package into the web server's (resp.
    virtual host's) document root
2.  Move to corresponding document root
3.  Uncompress zip file (or tarball)
4.  Run PHP command: `php installation/joomla.php install`. Gradually
    the most important parameters for installation and operation of the
    new website will be prompted ([see next
    section](#Requested_Information_on_Install_Joomla)).  
    **Note:** Pay careful attention to your input. It is not possible to
    step back in the script. If the input is incorrect, the script must
    be aborted.  
    Several parameters can be added to the command ([see table
    below](#joomla.php_Options)).
5.  Once the script is successfully completed, the new website can be
    accessed.  
    <img
    src="https://docs.joomla.org/images/thumb/a/ad/Cli_installer_success.png/400px-Cli_installer_success.png"
    decoding="async"
    srcset="https://docs.joomla.org/images/a/ad/Cli_installer_success.png 1.5x"
    data-file-width="492" data-file-height="182" width="400" height="148"
    alt="Cli installer success.png" />

##### Requested Information on Install Joomla

- **Login Data:**
  - `Enter the name of your Joomla site.:` Do enter here the hostname of
    the new website. If the new Joomla website is installed on a public
    server, it has to be a fully qualified domain name
    (<a href="https://en.wikipedia.org/wiki/Fully_qualified_domain_name"
    class="external text" target="_blank"
    rel="nofollow noreferrer noopener">FQDN</a>).
  - `Enter the real name of your Super User. :` The prompt is quite
    obvious.
  - `Set the username for your Super User account.:` Be absolutely
    careful to avoid a name similar to *admin* here. It is potentially
    insecure as it can be easily guessed by a hacker.
  - `Enter the email address of the website Super User.:` The prompt is
    quite obvious.

<!-- -->

- **Database Configuration:**
  - `Database type. Supported: mysql, mysqli, pgsql [mysqli]:` Default
    is *mysqli*. Supported database types are MySQL (mysql) and
    PostgreSQL (pgsql) databases and compatible types (e.g. MariaDB).
    *mysqli* stands for the advanced variant on MySQL.
  - `Database host [localhost]:` Default is *localhost*. An IP address
    or a host name should be entered here only if the responsible
    database server is installed on another host. However, the terminal
    user has to have write permissions on the selected host. You will
    get get this information from your internet provider (ISP).
  - `Database username:` The login name of the database user, it is
    usually different from the name of the SuperUsers. You will get get
    this information from your ISP.
  - `Database password:` The password for the Joomla database. You will
    get get this information from your ISP.
  - `Database name [joomla_db]:` The value *joomla_db* is predefined,
    but another name is used regularly. You will get get this
    information from your ISP.
  - `Prefix for the database tables [s61vo_]:` The prefix for the Joomla
    database tables. This value is used to separate the Joomla tables
    from other tables contained in the database, if the database is used
    by other applications as well. The value is randomly generated every
    time you call the script and should be changed only in exceptional
    cases.
  - `Encryption for the database connection. Values: 0=None, 1=One way, 2=Two way [0]:`
    Select the type of database encryption here. You will get this
    information from your ISP.

### Script-driven automatic installation

The complete Joomla installation is controlled by the
<span class="kbd">joomla.php</span> file, which is located in the
*/installation* subfolder after unpacking the cli installation package.

Any programming language that allows calling and executing PHP files
allows you to create a script that automates the necessary preparations
and the actual installation using custom variables.

With this script, steps 1-3 from the manual installation ([see
above](#Steps_to_be_done)) should be completed before the joomla.php
file is called up. The process of this file can be controlled exactly
with the help of several parameters. It has to be started from the root
directory of the new Joomla website. The call is done with:

    php installation/joomla.php install [options]

In the terminal screen, the contents of the lower table may be retrieved
with the following command: <span class="kbd">php
installation/joomla.php help install</span>

##### joomla.php Options

|                                                                              |                                                                                                                                |
|------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| **Options**                                                                  | **Description**                                                                                                                |
| <span class="kbd">--site-name=SITE_NAME</span>                               | Name of the website                                                                                                            |
| <span class="kbd">--admin-user=ADMIN_USER</span>                             | Real name of the Super User account                                                                                            |
| <span class="kbd">--admin-username=ADMIN_USERNAME</span>                     | Username of your Super User account                                                                                            |
| <span class="kbd">--admin-password=ADMIN_PASSWORD</span>                     | Password of your Super User account                                                                                            |
| <span class="kbd">--admin-email=ADMIN_EMAIL</span>                           | Email address of the website's Super User account                                                                              |
| <span class="kbd">--db-type=DB_TYPE</span>                                   | Database type. Supported by Joomla: mysql (=MySQL (PDO)), mysqli (=MySQLi), pgsql (=PostgreSQL (PDO)) \[default: "mysqli"\]    |
| <span class="kbd">--db-host=DB_HOST</span>                                   | Database host \[default: "localhost"\]                                                                                         |
| <span class="kbd">--db-user=DB_USER</span>                                   | Database username                                                                                                              |
| <span class="kbd">--db-pass=DB_PASS</span>                                   | Database password                                                                                                              |
| <span class="kbd">--db-name=DB_NAME</span>                                   | Database name \[default: "joomla_db"\]                                                                                         |
| <span class="kbd">--db-prefix=DB_PREFIX</span>                               | Prefix for the database tables \[default: "vlqhe\_"\]. The default value is randomly generated every time you call the script. |
| <span class="kbd">--db-encryption=DB_ENCRYPTION</span>                       | Connection Encryption \[default: "0"\]                                                                                         |
| <span class="kbd">--db-sslkey\[=DB_SSLKEY\]</span>                           | SSL key for the database connection. Requires encryption to be set to 2                                                        |
| <span class="kbd">--db-sslcert\[=DB_SSLCERT\]</span>                         | Path to the SSL certificate for the database connection. Requires encryption to be set to 2                                    |
| <span class="kbd">--db-sslverifyservercert\[=DB_SSLVERIFYSERVERCERT\]</span> | Verify SSL certificate for database connection. Values: 0=No, 1=Yes. Requires encryption to be set to 1 or 2 \[default: "0"\]  |
| <span class="kbd">--db-sslca\[=DB_SSLCA\]</span>                             | Path to CA file to verify encryption against                                                                                   |
| <span class="kbd">--db-sslcipher\[=DB_SSLCIPHER\]</span>                     | Supported Cipher Suite (optional)                                                                                              |
| <span class="kbd">-h, --help</span>                                          | Display the help information                                                                                                   |
| <span class="kbd">-q, --quiet</span>                                         | Flag indicating that all output should be silenced                                                                             |
| <span class="kbd">-V, --version</span>                                       | Displays the application version                                                                                               |
| <span class="kbd">--ansi</span>                                              | Force ANSI output                                                                                                              |
| <span class="kbd">--no-ansi</span>                                           | Disable ANSI output                                                                                                            |
| <span class="kbd">-n, --no-interaction</span>                                | Flag to disable interacting with the user                                                                                      |
| <span class="kbd">-v,-vv,-vvv, --verbose</span>                              | Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug                             |

## Related Information

- [Installing
  Joomla](https://docs.joomla.org/J4.x:Installing_Joomla "Special:MyLanguage/J4.x:Installing Joomla")
- [Hosting
  Setup](https://docs.joomla.org/J4.x:Hosting_Setup "Special:MyLanguage/J4.x:Hosting Setup")
- [Using a terminal
  session](https://docs.joomla.org/Using_a_terminal_session "Special:MyLanguage/Using a terminal session")
- [Hosting and Server
  Setup](https://docs.joomla.org/Security_Checklist/Hosting_and_Server_Setup "Special:MyLanguage/Security Checklist/Hosting and Server Setup")
- [Creating A VPS Testing
  Server](https://docs.joomla.org/Creating_A_VPS_Testing_Server "Special:MyLanguage/Creating A VPS Testing Server")
- [Web Server
  Nginx](https://docs.joomla.org/Nginx "Special:MyLanguage/Nginx")
- [Creating a Database for
  Joomla!](https://docs.joomla.org/Creating_a_Database_for_Joomla! "Special:MyLanguage/Creating a Database for Joomla!")
- [Connecting to an external
  database](https://docs.joomla.org/Connecting_to_an_external_database "Special:MyLanguage/Connecting to an external database")
- [How do UNIX file permissions
  work?](https://docs.joomla.org/How_do_UNIX_file_permissions_work%3F "Special:MyLanguage/How do UNIX file permissions work?")
- [Setting up your local
  environment](https://docs.joomla.org/J4.x:Setting_Up_Your_Local_Environment "Special:MyLanguage/J4.x:Setting Up Your Local Environment")
