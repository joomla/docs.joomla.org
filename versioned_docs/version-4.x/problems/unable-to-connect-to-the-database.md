<!-- Filename: Unable_to_connect_to_the_database / Display title: Unable to connect to the database -->

## Unable to Connect to the Database: Could Not Connect to MySQL

If during or after installation, you received an "**Unable to connect to
the database**" error, verify that you have entered your MySQL/MariaDB
database details correctly. The installation script will not allow you
to continue unless the details are correct. Note that you are not
expected to create a password for the database during installation - the
error may then be due to entering a password which doesn't exist:.

If the failure occurs after moving your site to another host, check the
following items of your *configuration.php* file. The normal database
settings are the following:

    var $dbtype = 'mysql';
    var $host = 'localhost';
    var $user = 'user_with_database_access';
    var $db = 'the_actual_database_name';
    var $dbprefix = 'table_prefix_';

## The Most Common Reasons

1.  Sometimes you will see this message if MySQL/MariaDB has stopped
    running on your server. Your server administrator may temporarily
    shut down MySQL/MariaDB to perform maintenance. In such
    circumstances, your site will likely return shortly.
2.  Your database user has been deleted. If this is the case, you will
    need to recreate your database user with the same username and
    password that existed when you first installed Joomla. Use your
    domain control panel to administer this or contact your server
    administrator.
3.  Your database username or password has changed.
