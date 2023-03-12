<!-- Filename: Why_isn%27t_un-publishing_a_vulnerable_extension_enough_to_protect_your_site%3F / Display title: Why isn't un-publishing a vulnerable extension enough to protect your site? -->

Simply removing the menu links to an extension, or unpublishing a module
is **not** enough to protect your site! As long as the extension's files
exist on your server, you are vulnerable. Note how in the following
examples an attacker can bypass the Joomla! index file to directly
target any file, of any extension.

    www.your_site.org/components/com_bad_component/vulnerable_file.php
    www.your_site.org/modules/mod_bad_module/vulnerable_file.php

### Removing a Vulnerable Extension

#### Make a List of Files to Remove

If you can locate it, read the extension's xml file to determine exactly
which directories, files, and database tables were added to your system.
The XML file is in the original zip archive used during the extension
install process. For example, the zip archive for an extension called
mod_vulnerable, would contain an XML file called, mod_vulnerable.xml,
and might contain a list of files such as the following:

    mod_vulnerable.php
    mod_vulnerable/vulnerable_file.txt
    mod_vulnerable/another_vulnerable_file.txt
    mod_vulnerable/yet_another_vulnerable_file.txt
    mod_vulnerable/index.html

#### Uninstall Via the Joomla Installer

Using the Installer in the Joomla! Administrator backend, uninstall the
vulnerable extension. You may also need to uninstall related modules,
components, or plugins.

#### Verify that the Uninstall Process was Complete

Don't trust the extension to safely remove all its files. Compare
directories and files on your system to the extension's XML list to
ensure that all related files were actually removed.

#### Optionally, Remove the Related Database Tables

Check your database and remove any tables created by the extension. To
ease the upgrade process to new versions, many uninstall scripts do not
remove related database tables. You can find the list of tables in each
extension's XML file.

If you plan to install a safer, compatible version of the same extension
and you want to reuse existing data, you can usually leave the database
tables as is.
