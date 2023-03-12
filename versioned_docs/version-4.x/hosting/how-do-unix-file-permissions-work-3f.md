<!-- Filename: How_do_UNIX_file_permissions_work%3F / Display title: How do UNIX file permissions work? -->

Unix/Linux file permissions can be confusing. The basic UNIX permissions
come in three flavors;

    Owner Permissions : Control your own access to files.
    Group Permissions : Control access for you and anyone in your group.
    Other Permissions : Control access for all others.

In Unix, when permissions are configured the server allows you to define
different permissions for each of these three categories of users. In a
Web server environment permissions are used to control which Web site
owners can access which directories and files.

### What do Unix permissions look like?

When viewing your files through an FTP client or from the servers
command line;

    filename.php username usergroup rwx r-x r-x

The first entry is the name of the file, the next entry is your username
on the server, the second entry is the group that you are a member of
and the last entry is the permissions assigned to that this file (or
directory). If you notice, I have intentionally spaced out the
permissions section, I have grouped the 9 characters into 3 sets of 3.
This separation is key to how the permissions system works. The first
set of 3 permissions (rwx) relate to the username seen above, the second
set of 3 permissions (r-x) relate to the usergroup seen above and the
final set of 3 permissions (r-x) relate to anyone else who is not
associated with the username or groupname.

#### Owner (User) relates to username

The Owner (User) is normally you, these permissions will be enforced on
your hosting account name.

#### Group relates to usergroup

The Group permissions will be enforced on other people that are in the
same group as you, within a hosting environment, there is very rarely
other people in the same group as you. This protects your files and
directories from being made available to anybody else who may also have
a hosting account on the same server as you.

#### Other relates to everyone else

The Other permissions, these will be enforced on anybody else on the
server that is either not you or not in your group. So in a Web Serving
environment, remembering that no-one else is normally in your group,
then this is everybody else accessing the server except for you. Each of
the three sets of permissions are defined in the following manner;

    r = Read permissions
    w = Write permissions
    x = Execute permissions

    Owner Group Other
    r w x r w x r w x

As many of you already know, permissions are normally expressed as a
numeric value, something like 755 or 644. so, how does this relate to
what we have discussed above? Each character of the permissions are
assigned a numeric value, this is assigned in each set of three, so we
only need to use three values and reuse them for each set.

    Owner Group Other
    r w x r w x r w x
    4 2 1 4 2 1 4 2 1

Now that we have a value that represents each permission, we can express
them in numeric terms. The values are simply added together in the
respective sets of 3, which will in turn give us just three numbers that
will tell us what permissions are being set. If we are told that a file
has the permissions of 777, this would mean that the following was true.

    Owner Group Other
    r w x r w x r w x
    4 2 1 4 2 1 4 2 1

Thus...

      4+2+1 4+2+1 4+2+1
    =   7     7     7

The Owner of the file would have full Read, Write and Execute
permissions, the group would also have full Read, Write and Execute
permissions, and the rest of the world can also Read, Write and Execute
the file. The standard, default permissions that get assigned to files
and directories by the server are normally;

    Files = 644
    Directories = 755

These permissions would allow, for files;

    644 = rw- r-- r--
    Owner has Read and Write
    Group has Read only
    Other has Read only

and for directories;

    755 = rwx r-x r-x
    Owner has Read, Write and Execute
    Group has Read and Execute only
    Other has Read and Execute only

Now, things can get a little complicated when we start talking about
shared Web Servers, the Web Server software will be running with its own
username and groupname, most servers are configured for them to use
either "apache" and "apache" or "nobody" and "nobody" as username and
groupname. Here is the problem. Your Web Server runs as its own user,
and this user is not you or in your group, so the first two sets of
permissions do not apply to it. Only the world (other) permissions
apply. Therefore, if you configure a permissions set similar to 640 on
your website files, your Web Server will not be able to run your website
files.

    640 = rw- r-- ---
    Owner has Read and Write
    Group has Read only
    Other has no rights

The Web server is assigned no permissions at all and cannot Execute,
Write or more importantly, even Read the file to delivery its content to
a website visitors browser. If a directory was to be assigned 750
permissions, this would have the same effect, because the WebServer does
not even have permissions to read files in the directory, even if the
files inside that directory had favorable permissions.

    750 = rw- r-x ---
    Owner has Read and Write
    Group has Read and Execute
    Other has no rights

Directories have an extra quirk, if a directory does not have the
Execute permission set in the World set then even if Read and Write are
set, if the program is not run as the user or group, it will still not
be able to access the files within the directory. The Execute setting
allows the program to "Execute" commands in the directory, so without it
being on the program(in our case a Web Server) cannot execute the "Read"
command, thus cannot deliver your file to the users web browser.

### How Does this Relate to Joomla?

Good question, well in the first instance this would be important during
the Web-Installer process. If you can remember back to when you ran the
Joomla! Web-Installer, we were looking for specific directories to be
designated as writable. We see quite a numbers of posts either stating
that there were problems during the install with permissions or asking
what permissions are recommended. Some even consider the message, asking
for "Writable" permissions to be too vague.

Unfortunately, as the Web-Installer does not know how your server is
configured, then it cannot be more specific, however, once you
understand the permissions settings and you know a little about Web
Serving environments, you will actually find that the term *writable* is
actually very specific and a more than adequate description of what
Joomla! needs. Thinking back to the above information, you may remember
that there are three places where *write* permissions maybe set;

    Owner Writable
    Group Writable
    Other Writable

Also remembering that the Web Server generally doesn't run as your own
user or in the same group. When you run the Web Installer from a
browser, it is the Web Server trying to access the files, thus it is the
"Other" permissions that will apply to it. If the "Other" permissions do
not allow the Web Server to Read, Write or Execute commands in the
Joomla! directories, you will receive the message saying that the
directories are not *writable*.

In this case, you will need to configure the Other permissions to be "7"
on the directories listed in the Web Installer. So your total
permissions might be something like 757, in the worse case you might
need to set 777. These very open permissions maybe reset back to 755
after the installer runs to assist in the security of your directories
and files.

    757 = rwx r-x rwx
    Owner has Read, Write and Execute
    Group has Read and Execute
    Other has Read, Write and Execute

Just to make things even more confusing, many hosting firms make use of
software called phpsuExec or suExec, these tools change the way the Web
Server runs, where the Web Server would not normally run as your
username, in this case, it does. The use of the *other* permissions, may
not be required, now you may only need to configure directories to be
*writable* to your own username and groupname, this allows directory
permissions to be set as 755 or 775 instead of 757 or 777.

    755 = rwx r-x r-x
    Owner has Read, Write and Execute
    Group has Read and Execute
    Other has Read and Execute

    775 = rwx rwx r-x 
    Owner has Read, Write and Execute
    Group has Read, Write and Execute
    Other has Read and Execute

The Web Server will still need to Execute set for the username and Read,
Execute groupname permissions set so that it can Execute the Read
command on files inside the directory. Again, these permissions may be
demoted back to 755 after the Web Installer completes. Thats the basics
for directories covered, what about files? This is where things get a
little simpler. Most of the files that Joomla! makes use of will be
quite happy with the 644 default permissions.

    644 = rw- r-- r-- 
    Owner has Read, Write
    Group has Read
    Other has Read

This is valid if you do not have a need to Write to the files from the
Web Server, the same rules apply as for directories if you do have this
need. One file that you may like to have "Writable" to the Web Server is
your configuration.php file. This is the Joomla! configuration file, if
you plan on changing configuration through the Web Admin interface, then
this file will need to be Writable to the Web Server.

If your server needed directory permissions to be set to "Other"
Writable for the install then this file will probably also need to be
757 or 777. Leaving this file as 757 or 777 is dangerous though, as you
are letting everyone have "Write" access, many Web Site exploits take
advantage of this fact, so in general it is not recommended to leave
this file with these permissions.

If your Web Server has one of the SU tools installed and you only needed
to configure 755 on directories for the installation, then you will
probably also only need to set 755 or 775 on this file to allow editing
through the Admin interface, and these permissions are generally
accepted as more secure than 757 or 777.

In conclusion, what permissions should be set for the Joomla!
installation? Well, as you can see, it depends!

I know this isn't as helpful as you would have liked and it certainly is
not a definitive answer, but in general, after the installation, any
insecure "7" settings can be reset back to something more secure. For
example:

    Files = 644
    Directories = 755

These permissions would allow, for files;

    644 = rw- r-- r--
    Owner has Read and Write
    Group has Read only
    Other has Read only

and for directories,

    755 = rwx r-x r-x 
    Owner has Read, Write and Execute
    Group has Read and Execute only
    Other has Read and Execute only

If you have SSH shell access the following commands can be run from the
command line to reset all files and directories back to the server
defaults of 755 and 644. Change directories to the top directory (" / ")
of your Joomla! installation, then run:

    find . -type f -exec chmod 644 {} \;
    find . -type d -exec chmod 755 {} \;

If you only have FTP access, this can be a very time consuming job,
however, unless you changed more directories during the installation
that was requested, you should only need to reset about 10 directories
and the *configuration.php* file.

Keep in mind that to install any extensions or templates after the
actual Joomla! installation you may need to elevate the default
permissions again on the appropriate directories just for the
installation period, you may then demote them again after the add-on is
installed.

If you decide to use *caching* the cache directory will need to be
*writable* by the Web server user to allow it to write its temporary
files.
