<!-- Filename: J4.x:Fix_%22Database_Table_Structure_NOT_Up_to_Date%22_before_Update / Display title: Fix "Database Table Structure NOT Up to Date" before Update -->

## Errors Reported

When updating Joomla! the database table structure has to be up to date
before the process can start.

The *Pre-Update Check for Joomla* complains if this is not the case.

<img
src="https://docs.joomla.org/images/6/66/J4-database-table-structure-up-to-date-no.jpg"
decoding="async" data-file-width="1716" data-file-height="135"
width="1716" height="135"
alt="Joomla! 4 - Pre-Update Check - database table structure not up to date" />

But when you go to
**Administrator **→** System **→** Maintenance **→** Database**, there
is no entry available.

## Versions Affected

General Information

This was reported in any Joomla! 4.x versions.

## What is the Cause

This is caused by an empty *\#\_\_schemas* table in the database. Most
likely this occurs when the Joomla! instance is not installed by the
official Joomla! installer but through a customized script which did not
fill in all required data.

## How to Fix

You can fix this by adding the missing value to the table. First, you
need the ID from Joomla!. Go to the *\#\_\_extensions* table via
phpMyAdmin (or another database client). Search for name=*files_joomla*
and write down the ID (in our case *211*).

Second, you need to know the latest SQL script which is installed. Go to
*administrator/components/com_admin/sql/updates/mysql* and get the file
name with the highest version. In this example, assume
*4.0.3-2021-09-05.sql* is the file name with the highest version. Now
you have to add this in your insert query as the second value:

    INSERT INTO `#__schemas` (`extension_id`, `version_id`) VALUES
    (211, '4.0.3-2021-09-05');

or for PostgreSQL:

    INSERT INTO "#__schemas" ("extension_id", "version_id") VALUES
    (211, '4.0.3-2021-09-05');

Replace *\#\_\_* with your database prefix (see Global Configuration)
before running the statements.

Then go to
**Administrator **→** System **→** Maintenance **→** Database** and fix
the tables.

Now the update should work as expected.
