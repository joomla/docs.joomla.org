<!-- Filename: How_do_you_restrict_directory_access_by_IP_address_using_htaccess%3F / Display title: How do you restrict directory access by IP address using htaccess? -->

**Overview**

This can be an effective way to protect your Joomla! Administrator
directory. Any other directory in *public_html* can be protected in the
same way. This method only works if you have a static IP address
assigned to you. Anyone attempting to browse such directories using a
different IP Address will get a 403 Forbidden error.

**Directions**

1.  In the directory you wish to protect, open (or create) an
    *.htaccess* file. (Note the dot at the beginning of the file name.)
2.  Add the following code to this file, replacing 100.100.100.100 in
    this example with the static IP address you plan to allow:

<!-- -->

    Order Deny,Allow
    Deny from all
    Allow from 100.100.100.100

- Optional: You can enter partial IP Addresses, such as, 100.100.100.
  This allows access to a range of addresses.

<!-- -->

- Optional: You can add multiple addresses by separating them with
  commas.

<!-- -->

    100.100.100.101, 100.100.100.102

If comma separation does not work, enter each IP address (or partial
address) on its own *Allow from* line, such as:

    Allow from 100.100.100.101
    Allow from 100.100.100.102
