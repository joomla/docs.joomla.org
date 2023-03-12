<!-- Filename: How_do_you_password_protect_directories_using_htaccess%3F / Display title: How do you password protect directories using htaccess? -->

This FAQ explains how to protect the Joomla! */administrator/* directory
on Apache servers using the *htpasswd* utility. You can easily adapt
these instructions to protect other directories. If you need help
finding or creating your *.htaccess* file, start here.

### Caveat (From Apache.org)

Basic authentication should not be considered secure for any
particularly rigorous definition of secure. Although the password is
stored on the server in encrypted format, it is passed from the client
to the server in plain text across the network. Anyone listening with
any variety of packet sniffer will be able to read the username and
password as it goes across.

Remember that the username and password are passed with every request,
not just when the user first types them in. So the packet sniffer need
not be listening at a particularly strategic time, but just for long
enough to see any single request come across the wire.

In addition to that, the content itself is also going across the network
in the clear, and so if the website contains sensitive information, the
same packet sniffer would have access to that information, even if the
username and password were not used to gain direct access to the
website.

Don't use basic authentication for anything that requires real security.
It is a detriment for most users, since very few people will take the
trouble, or have the necessary software or equipment, to find out
passwords. However, if someone had a desire to get in, it would take
very little for them to do so.

Basic authentication across an SSL connection, however, will be secure,
since everything is going to be encrypted, including the username and
password.

### Directions

1.  If you are unfamiliar with the Apache *htpasswd* utility, read the
    <a href="https://httpd.apache.org/docs/2.4/howto/auth.html"
    class="external text" target="_blank"
    rel="nofollow noreferrer noopener">Apache Authentication and
    Authorization</a> page first.

2.  Check to be sure your site is configured to use *.htaccess* files.
    If not sure, ask your host.

3.  Decide where to put your *.htaccess* file. Because Apache
    recursively searches all directories in a path for *.htaccess*
    files, the higher in your directory structure you place this file,
    the more directories it will control. If there is already an
    *.htaccess* file in the directory you choose, it's best to add the
    new code to it.

4.  Decide where to store your *.htpasswd* and *.htgroups* files. These
    files should **never** be publicly accessible through the web. Below
    is an example directory structure showing good locations for each
    file. Note that the */auth/* directory in this example is **not**
    accessible from the web.
    - */home/mysite/public_html/.htaccess*
    - */home/mysite/auth/.htpasswd/*
    - */home/mysite/auth/.htgroups/*

5.  Create the *.htpasswd* and *.htgroups* files as explained in the
    official Apache HowTo referenced above.

6.  If a *.htaccess* file already exists in the directory you have
    chosen, make a backup copy. If the file does not exist, create a new
    file with that name now. (Don't forget the dot at the beginning of
    the name.)

7.  Add the following code to the *.htaccess* file. Adjust the example
    paths (marked in red) as needed for your server. Adjust the group
    name that you created in step 5 if it differs from the below
    example.

        AuthUserFile /home/auth/.htpasswd
        AuthGroupFile /home/auth/.htgroups
        AuthType Basic
        AuthName "LWS"
        require group admins

8.  Test carefully.

If you cannot use the Apache *htpasswd* utility, there's a free
<a href="https://www.htaccessredirect.net/" class="external text"
target="_blank" rel="nofollow noreferrer noopener"><em>.htaccess</em>
generator</a> that creates the necessary files for you. You'll need to
know the user name, password, and path. The script does the rest for
you. Note that for more advanced configurations, such as the use of
groups, you'll need to edit the resulting files.
