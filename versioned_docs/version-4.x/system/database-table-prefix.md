<!-- Filename: Database_Table_Prefix / Display title: Database Table Prefix -->

The database table prefix is a string (a few characters long) prepended
to the name of Joomla!'s
[tables](https://docs.joomla.org/Tables "Tables"). Using a prefix
enables you to run multiple installations of Joomla! using a single
database.

The database table prefix can be set during installation. Changing it
later is possible, but requires access to the database through a
non-Joomla medium or a Joomla Extension such as Akeeba Admin Tools and
will cause some downtime.

[Extension](https://docs.joomla.org/Extension "Extension") developers
need to use the string `#__` to represent the prefix. This will be
replaced by the real prefix during runtime by Joomla.

## See also

- [Creating a Database for
  Joomla!](https://docs.joomla.org/Creating_a_Database_for_Joomla! "Creating a Database for Joomla!")
