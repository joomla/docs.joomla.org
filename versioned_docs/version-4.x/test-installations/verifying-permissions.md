<!-- Filename: Verifying_permissions / Display title: Verifying permissions -->

## Recommended settings

The following information refers to Unix/Linux based server. If your web
server is a Microsoft Windows based server(IIS), you should read:[How do
Windows file permissions
work?](https://docs.joomla.org/How_do_Windows_file_permissions_work%3F "How do Windows file permissions work?").
Then apply the applicable recommended settings below to your Windows
based server.

- Depending on the security configuration of your Web server the
  recommended default permissions are:
  - 755 for directories
  - 644 for files
  - Don't use extensions that require 777 permissions!

<img
src="https://docs.joomla.org/images/thumb/4/41/Stop_hand_nuvola.svg.png/25px-Stop_hand_nuvola.svg.png"
decoding="async"
srcset="https://docs.joomla.org/images/thumb/4/41/Stop_hand_nuvola.svg.png/38px-Stop_hand_nuvola.svg.png 1.5x, https://docs.joomla.org/images/4/41/Stop_hand_nuvola.svg.png 2x"
data-file-width="40" data-file-height="40" width="25" height="25"
alt="Stop hand nuvola.svg.png" />Warning!

**Note:** On file permissions, in general never use 777 if you don't
know what you are doing.

## How to Locate them

There are a variety of methods to view the permissions of your website's
files. For example, your host's cpanel file browser or a common
<a href="https://en.wikipedia.org/wiki/File_Transfer_Protocol"
class="extiw" title="wikipedia:File Transfer Protocol">FTP(File Transfer
Protocol)</a> program.

Depending on what you are using, you should see something like this
image.

<img
src="https://docs.joomla.org/images/6/65/Verifying_Permissions_FTP.png"
class="thumbimage" decoding="async" data-file-width="533"
data-file-height="277" width="533" height="277"
alt="Verifying Permissions FTP.png" />

Again, depending on what method you are using, changing the permissions.

<img
src="https://docs.joomla.org/images/3/37/Verifying_Permissions_FTP_Changing.png"
class="thumbimage" decoding="async" data-file-width="431"
data-file-height="300" width="431" height="300"
alt="Verifying Permissions FTP Changing.png" />

Correct file permissions

<img
src="https://docs.joomla.org/images/c/c3/Verifying_Permissions_FTP_Correct.png"
class="thumbimage" decoding="async" data-file-width="528"
data-file-height="295" width="528" height="295"
alt="Verifying Permissions FTP Correct.png" />

## Learning the numbers

Each octal digit corresponds to a group of three letters in a specific
group. Therefore, the three digits also corresponds to each group as a
set of permissions:

      -rwxrwxrwx (is broken up into the three distinct groups)
        \   \   \
     -(rwx)(rwx)(rwx)
        /   /    /
    Owner Group Others (always in this order, Owner, Group, Others)
      7    7     7

     d stands for directory and shows as: drwxrwxrwx instead of -drwxrwxrwx

#### Remember

- First digit = owner, or User
- second digit = group (other Users on your server)
- third digit = others (everyone else, the world!)

  
**Note:** On some servers you may not see the numbers as shown above,
what you see is -rwxrwxrwx or something similar.

## Meaning of the numbers

It is much easier to say the "octal" sum of a file or directory has 755
permissions than to call out the permissions:`-rwxr-xr-x`

The permission \# is a three-digit octal number where the three digits
correspond to the access rights of the user who owns the file, the group
and other users. Each octal digit is the sum of the permissions granted.
To make it easy to understand, just remember:

     r = Read    = 4
     w = Write   = 2
     x = Execute = 1

If read permission is granted the "octal" number is 4. Add 2 to 4 for a
6 if write permission is granted along with read permission. Then you
can finally add 1 if execute permission is granted along with the Read
and Write permission. If there are no permission at all, the sum is 0.
Just do the Octal Math:

|            |        |         |           |                         |
|------------|--------|---------|-----------|-------------------------|
| "Octal" \# | (r)ead | (w)rite | e(x)ecute | User or Group or Others |
| 0          | no     | no      | no        | `---` 0+0+0 = 0         |
| 1          | no     | no      | yes       | `--x` 0+0+1 = 1         |
| 2          | no     | yes     | no        | `-w-` 0+2+0 = 2         |
| 3          | no     | yes     | yes       | `-wx` 0+2+1 = 3         |
| 4          | yes    | no      | no        | `r--` 4+0+0 = 4         |
| 5          | yes    | no      | yes       | `r-x` 4+0+1 = 5         |
| 6          | yes    | yes     | no        | `rw-` 4+2+0 = 6         |
| 7          | yes    | yes     | yes       | `rwx` 4+2+1 = 7         |

Now it is time to put it all together. User, Group, Others(Everyone or
the World) into a 3 digit "octal" permission number.

- 777 means EVERYONE can read, write and execute ANY file or
  `-rwxrwxrwx`

<img
src="https://docs.joomla.org/images/thumb/4/41/Stop_hand_nuvola.svg.png/25px-Stop_hand_nuvola.svg.png"
decoding="async"
srcset="https://docs.joomla.org/images/thumb/4/41/Stop_hand_nuvola.svg.png/38px-Stop_hand_nuvola.svg.png 1.5x, https://docs.joomla.org/images/4/41/Stop_hand_nuvola.svg.png 2x"
data-file-width="40" data-file-height="40" width="25" height="25"
alt="Stop hand nuvola.svg.png" />Warning!

This something you **NEVER** want to be allowed on your server/website
unless you are absolutely sure you know what you are doing.

- 755 is rwx (owner), r-x (group) and r-x (others) or in other words
  everyone may read and execute (run) but only the owner(you) may make
  changes to the file. It would look like this when it is all put
  together: `-rwxr-xr-x`
- 644 is rw-, r--, r-- or EVERYONE can read the file but only the owner
  may write to the file or `-rw-r--r--`
- Permissions can be applied to directories as well which is why you
  might see this `drwxrwxrwx`, the "d" is for directory. Of course this
  is a 777 permission and not recommended!
- For a complete explanation read the Wikipedia article:
  <a href="https://en.wikipedia.org/wiki/Filesystem_permissions"
  class="extiw" title="wikipedia:Filesystem permissions">Filesystem
  permissions</a>

## Additional reading

- <a
  href="https://docs.joomla.org/Where_can_you_learn_more_about_file_permissions%3F"
  class="mw-redirect"
  title="Where can you learn more about file permissions?">Where can you
  learn more about file permissions?</a>
- [Why can't you install any
  extensions?](https://docs.joomla.org/Why_can%27t_you_install_any_extensions%3F "Why can't you install any extensions?")
- [Why are my file permissions wrong after
  upgrading](https://docs.joomla.org/Why_are_my_file_permissions_wrong_after_upgrading "Why are my file permissions wrong after upgrading")
- [What are the recommended file and directory
  permissions?](https://docs.joomla.org/What_are_the_recommended_file_and_directory_permissions%3F "What are the recommended file and directory permissions?")
- [How do you recursively adjust file and directory
  permissions?](https://docs.joomla.org/How_do_you_recursively_adjust_file_and_directory_permissions%3F "How do you recursively adjust file and directory permissions?")
