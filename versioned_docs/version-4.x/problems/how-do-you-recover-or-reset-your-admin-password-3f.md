<!-- Filename: How_do_you_recover_or_reset_your_admin_password%3F / Display title: How do you recover or reset your admin password? -->

Joomla! 2.5 and higher Password Recovery

This page is only for Joomla! 2.5 and higher versions. If you are still
using Joomla! 1.5  [instructions can be found
here](https://docs.joomla.org/J1.5:How_do_you_recover_or_reset_your_admin_password%3F "Special:MyLanguage/J1.5:How do you recover or reset your admin password?").

Normally, you can add, edit and delete users and passwords from the
back-end User Manager. To do this, you must be logged in as a member of
the Super Administrator group.

In some situations, this may not be possible. For example, your site may
have been "hacked" and had the passwords or users changed. Or perhaps
the person who knew the passwords is no longer available. Or maybe you
have forgotten the password that was used.

In these cases, it is still possible to alter the Joomla! database so
you can log back in as a Super Administrator. These are the possible
methods available to Joomla! administrators.

## Method 1: configuration.php file

If you have access to your `configuration.php` file for the Joomla
installation on your server, then you can recover the password using the
following method:

1\. Using an FTP program connect to your site. Find the
configuration.php file and look at the file permissions. If the
permissions are 444 or some other value, then change the permissions of
the configuration.php file to 644. This will help prevent issues when
uploading the changed configuration.php file later in this process.

2\. Download the configuration file.

3\. Open the configuration.php file that was downloaded in a text editor
such as notepad++ and add this line

    public $root_user='myname';

to the bottom of the list where myname is a username with administrator
access that you know the password for. A username that is in the Author
User Group view access level or higher can also be used in place of a
username with administrator access.

4\. Save the configuration.php file and upload it back to the site. You
may leave the permissions on the configuration.php file at 644.

This user will now be a temporary super administrator.

5\. Login to the back end and change the password of the administrator
user you don't have the password for or create a new super admin user.
If you create the new user you may want to block or delete the old user
depending on your circumstances.

6\. When finished, make sure to use the "Click here to try to do it
automatically" link that appears in the alert box to remove the line
that was added to the configuration.php file. If using the link was not
successful, then go back and delete the added line from your
configuration.php file using a text editor. Upload the configuration.php
file back to the site.

7\. Using your FTP program verify the file permissions of the
configuration.php file, they should be 444. If you manually removed the
added line, then change the file permissions on the configuration.php
file to 444.

If you have no users who know their passwords and you can't utilize
front end registration you may need to make a change in your database as
outlined below in this document.

## Method 2: Direct Editing of Database

If the methods above did not work, you have two other options, both of
which require working with the MySQL database directly.

### Change the Password in the Database

If the admin user is still defined, the simplest option is to change the
password in the database to a known value. This requires that you have
access to the MySQL database using phpMyAdmin or another client.

<img
src="https://docs.joomla.org/images/thumb/4/41/Stop_hand_nuvola.svg.png/25px-Stop_hand_nuvola.svg.png"
decoding="async"
srcset="https://docs.joomla.org/images/thumb/4/41/Stop_hand_nuvola.svg.png/38px-Stop_hand_nuvola.svg.png 1.5x, https://docs.joomla.org/images/4/41/Stop_hand_nuvola.svg.png 2x"
data-file-width="40" data-file-height="40" width="25" height="25"
alt="Stop hand nuvola.svg.png" />Make sure you change your password once
you regain access

These instructions show how to manually change a password to the word -
"secret"

1.  Navigate to phpMyAdmin and select the database for the Joomla! site
    in the left-hand drop-down list box. This will show the database
    tables on the left side of the screen.

2.  Find and click on the table with "\_users" appended in the list of
    tables (note: you may have a prefix that is not jos\_, simply go to
    the \_users table for your prefix).

3.  Click on the "Browse" button in the top toolbar. This will show all
    of the users that are set up for this site.

4.  Find the user whose password you want to change and press the Edit
    icon for this row.

5.  A form will display that allows you to edit the password field. Copy
    the value

        d2064d358136996bd22421584a7cb33e:trd7TvKHx6dMeoMmBVxYmg0vuXEA4199

    into the password field and press the *Go* button. phpMyAdmin should
    display the message "Affected rows: 1". At this point, the password
    should be changed to **"secret"**.

6.  Log in with this user and password and change the password of this
    user to a secure value. Check all of the users using the User
    Manager to make sure they are legitimate. If you have been hacked,
    you may want to change all of the passwords on the site.

### Add a New Super Administrator User

If changing the password won't work, or you aren't sure which user is a
member of the Super Administrator group, you can use this method to
create a new user.

1.  Navigate to phpMyAdmin and select the database for the Joomla! site
    in the left-hand drop-down list box. This will show the database
    tables on the left side of the screen.
2.  Press the "SQL" button in the toolbar to run an SQL query on the
    selected database. This will display a field called "Run SQL
    query/queries on database ".
3.  Delete any text in this field and copy and paste the following query
    below and press the *Go* button to execute the query and add the new
    Administrator user to the table.
4.  Use the SQL query below to add another administrator account.

<img
src="https://docs.joomla.org/images/thumb/4/41/Stop_hand_nuvola.svg.png/25px-Stop_hand_nuvola.svg.png"
decoding="async"
srcset="https://docs.joomla.org/images/thumb/4/41/Stop_hand_nuvola.svg.png/38px-Stop_hand_nuvola.svg.png 1.5x, https://docs.joomla.org/images/4/41/Stop_hand_nuvola.svg.png 2x"
data-file-width="40" data-file-height="40" width="25" height="25"
alt="Stop hand nuvola.svg.png" />Make sure you match your db table
prefix!

The following code uses jos31\_ as the table name prefix which is only
an example table prefix. The prefix when you first installed Joomla is
**RANDOM** or what you set it specifically too. You will need to change
all occurrences of **jos31\_**(your install set prefix) found in the
code below to the prefix your installation is using.

**SQL code for use with Joomla
 <img src="https://docs.joomla.org/images/5/53/Compat_icon_2_5.png"
decoding="async" data-file-width="40" data-file-height="17" width="40"
height="17" alt="Joomla 2.5" /> <img src="https://docs.joomla.org/images/4/4d/Compat_icon_3_x.png"
decoding="async" data-file-width="40" data-file-height="17" width="40"
height="17" alt="Joomla 3.x" /> <img src="https://docs.joomla.org/images/b/bd/Compat_icon_4_x.png"
decoding="async" data-file-width="40" data-file-height="17" width="40"
height="17" alt="Joomla 4.x" />**

    INSERT INTO `jos31_users`
       (`name`, `username`, `password`, `params`, `registerDate`, `lastvisitDate`, `lastResetTime`)
    VALUES ('Administrator2', 'admin2',
        'd2064d358136996bd22421584a7cb33e:trd7TvKHx6dMeoMmBVxYmg0vuXEA4199', '', NOW(), NOW(), NOW());
    INSERT INTO `jos31_user_usergroup_map` (`user_id`,`group_id`)
    VALUES (LAST_INSERT_ID(),'8');

At this point, you should be able to log into the back end of Joomla!
with the username of "admin2" and password of "secret". After logging
in, go to the User Manager and change the password to a new secure value
and add a valid e-mail address to the account. If there is a chance you
have been "hacked", be sure to check that all users are legitimate,
especially any members of the Super Administrator group.

<img
src="https://docs.joomla.org/images/thumb/4/41/Stop_hand_nuvola.svg.png/25px-Stop_hand_nuvola.svg.png"
decoding="async"
srcset="https://docs.joomla.org/images/thumb/4/41/Stop_hand_nuvola.svg.png/38px-Stop_hand_nuvola.svg.png 1.5x, https://docs.joomla.org/images/4/41/Stop_hand_nuvola.svg.png 2x"
data-file-width="40" data-file-height="40" width="25" height="25"
alt="Stop hand nuvola.svg.png" />Warning!

Warning: The password values shown on this page are public knowledge and
are only for recovery. Your site may be hacked if you do not change the
password to a secure value after logging in. Be sure you change the
password to a secure value after logging in.

  
The examples above change the password to "secret". Two other possible
values are shown below:

    - password = "this is the MD5 and salted hashed password"
    ------------------------------------------------------
    - admin  = 433903e0a9d6a712e00251e44d29bf87:UJ0b9J5fufL3FKfCc0TLsYJBh2PFULvT
    - secret = d2064d358136996bd22421584a7cb33e:trd7TvKHx6dMeoMmBVxYmg0vuXEA4199
    - OU812  = 5e3128b27a2c1f8eb53689f511c4ca9e:J584KAEv9d8VKwRGhb8ve7GdKoG7isMm
