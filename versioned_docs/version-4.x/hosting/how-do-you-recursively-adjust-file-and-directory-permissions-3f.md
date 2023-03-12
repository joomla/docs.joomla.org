<!-- Filename: How_do_you_recursively_adjust_file_and_directory_permissions%3F / Display title: How do you recursively adjust file and directory permissions? -->

## Using Joomla! Administrator

Go to **Administrator **→** Global Configuration **→** Server**.

## Using the UNIX Shell

**Note** The *find* command assumes that it should start from the
current directory. To be safe, go to your *public_html* directory and
specify a path as the first argument. Some shells, such as bash on Apple
OS X, must have a path specified in the *find* command.

    find . -type f -exec chmod 644 {} \;
    find . -type d -exec chmod 755 {} \;
    chmod 707 images
    chmod 707 images/stories
    chown apache:apache cache

**Notes**

1.  Test all third-party extensions after changing permissions.
2.  You may need to reset write permissions to install more extensions.
