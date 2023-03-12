<!-- Filename: Installing_an_extension / Display title: Installing an extension -->

Before starting it always is wise to read the documentation associated
with an extension. Most extensions have homepages and forums, and it is
a good idea to look at them first. If there is a README file included
with the extension, you should read it.

For most extensions and most users, the procedure will be:

- Download the extension to your local machine as a zip file package.
- From the backend of your Joomla site (administration) select
  Extensions  **→**  Install/Uninstall.
- Click the Browse button and select the extension package on your local
  machine.
- Click the Upload File & Install button.
- Some extensions may provide further instructions on installation.
- Note that modules and plugins must be enabled before they will work.

There are some situations in which this procedure will not work.

Sometimes you need to unzip the file locally prior to installing. If you
get an error saying that the file is not in the correct format, the need
to unzip is a common cause of this. After unzipping try installing the
individual items. Note that the files you upload using the installer
still need to be zipped.

Sometimes you cannot use the automated installer. For example, very
large extensions may exceed the maximum upload size allowed by your
host.

Also, If you see an error like this:

    Warning: is_dir() [function.is-dir]: open_basedir restriction in effect. File(/) is not within the allowed path(s): ...

this is because of a restriction of your hosting account which leads
Joomla! to try to check if the root directory exists. You will not be
able to use the automated installer.

## Manual Installation

First, unzip all of the files in a local directory (for instance
`com_installer`). Then transfer the directory (using FTP) to a folder
under the install directory (for instance `administrator/components`),
appropriate for the type of extension you are installing (visible in its
xml file, a line like

). Then use the installer, but select "install from directory"
indicating the correct folder name. This folder name should be an
absolute path from the root of the filesystem.
