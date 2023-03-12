<!-- Filename: Setting_up_automatic_Smart_Search_indexing / Display title: Setting up automatic Smart Search indexing -->

Although the Smart Search index is automatically kept up-to-date
whenever content items are amended, there are some circumstances where
you need to re-run the indexer. You can do this manually using the Index
toolbar button in the [Manage Indexed
Content](https://docs.joomla.org/Help25:Components_Finder_Manage_Indexed_Content "Help25:Components Finder Manage Indexed Content")
screen, however if you need to re-index content automatically then it is
also possible to run the indexer as a command-line application. This
makes it particularly convenient to run the indexer from a *cron* job.

The Smart Search CLI application is located in the `cli` directory in
your site's root directory (that is, the same directory as your
*configuration.php* file). In this directory you will find the
`finder_indexer.php` file. Simply enter this command to run the indexer:

    php finder_indexer.php

In Joomla 4:

    php -d memory_limit=512M joomla.php finder:index

Typical output from the command-line indexer looks like this:

    Smart Search INDEXER
    ============================

    Starting Indexer
    Setting up Finder plugins
    Setup 154 items in 0.094 seconds.
     * Processed batch 1 in 0.213 seconds.
     * Processed batch 2 in 0.182 seconds.
     * Processed batch 3 in 0.177 seconds.
     * Processed batch 4 in 0.009 seconds.
    Total Processing Time: 0.676 seconds.

## Purging Before Indexing

Ordinarily, running the indexer will do an incremental update of the
index. That is, it will only update the index for those content items
that have changed since the index was last updated. However, if you need
to completely clear all the existing index entries before completely
rebuilding the index, then you need to do a "purge and then index"
operation. To do that you can add the `--purge` argument to the command
line, like this

    php finder_indexer.php --purge

Note that this will attempt to preserve any static filters you may have
set up, whereas clicking on the "Purge" toolbar button in the
Administrator will **not** preserve your static filters.

## Setting Up a *cron* Job

Whilst the specifics are beyond the scope of this article, in general
you will merely have to enter the above command into the *cron* job
manager and specify the time or times on which the job is to be run. You
will probably need to include the full path to the indexer. For example,
like this

    php /var/www/myjoomla/cli/finder_indexer.php

## Out of Memory Issues

If your site has particularly complex indexing requirements it is
possible that the standard memory allocation will not be sufficient for
the indexer to run to completion. You can increase the memory allocated
to the command-line indexer using an extra parameter on the
command-line, like this:

    php -d memory_limit=256M finder_indexer.php

Replace the `256M` with whatever is appropriate for your circumstances.

The command-line indexer uses the same parameters as the indexer on the
[Manage Indexed
Content](https://docs.joomla.org/Help25:Components_Finder_Manage_Indexed_Content "Help25:Components Finder Manage Indexed Content")
screen. You can change the parameters using the Options toolbar button
on that screen. Note that both the **Indexer Batch Size** and **Memory
Table Limit** fields affect the amount of memory used by the indexer.
