<!-- Filename: Purging_expired_cache_files / Display title: Purging expired cache files -->

Cache files are temporary files that are created to improve the
performance of your site. You need to ensure that cache files that have
expired, so they are no longer needed, are removed from the system
otherwise you will eventually run out of disk space.

## Purging Expired Cache Files

Expired cache files can be purged at any time using one of the following
procedures:

- From the Administrator, use the [Purge Expired
  Cache](https://docs.joomla.org/Help25:Site_Maintenance_Purge_Expired_Cache "Help25:Site Maintenance Purge Expired Cache")
  option.
- From the command line, run the *garbagecron.php* script, described
  below.

## Purging Expired Cache Files from the Command Line

The purge expired cache files CLI application is located in the *cli*
directory in your site's root directory (that is, the same directory as
your *configuration.php* file). In this directory you will find a file
called *garbagecron.php*. Simply enter this command to purge expired
cache files:

    php garbagecron.php

This program does not produce any output unless some sort of error
occurs.

## Automatically Purging Expired Cache Files

If your host supports it, you can set up an automatic process to purge
expired cache files on a regular basis.

Whilst the specifics are beyond the scope of this article, in general
you will merely have to enter the relevant command into the
*<a href="https://en.wikipedia.org/wiki/cron" class="extiw"
title="wikipedia:cron">cron</a>* job manager and specify the time or
times on which the job is to be run. You will probably need to include
the full path to the indexer. For example:

    php /var/www/myjoomla/cli/garbagecron.php

Most *cron* job managers will allow you to enter an email address to
which a report will be sent if an error occurs. Because
*garbagecron.php* does not produce any output unless an error occurs,
you will not receive an email if the program runs successfully.

## Notes

- Caching is switched off by default. To enable the cache for your site
  see [Help25:Site Global
  Configuration](https://docs.joomla.org/Help25:Site_Global_Configuration "Help25:Site Global Configuration").
