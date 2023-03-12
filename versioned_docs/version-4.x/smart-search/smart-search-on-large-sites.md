<!-- Filename: Smart_Search_on_large_sites / Display title: Smart Search on large sites -->

Read this page if your Joomla site has a large number of pages and/or
some of your pages are particularly large.

Smart Search is suitable for the majority of Joomla sites. However,
search presents particular challenges for large sites and both the old
and new search methods are likely to present difficulties; just in
different ways. It should be remembered that Smart Search is a pure PHP
implementation of a search engine and particularly large sites may be
better off using a standalone search engine such as Solr.

To use Smart Search on a large site you will probably need to adjust
some of the configuration settings. What follows is some general advice
on what to look out for and what to try tweaking. There are a number of
known outstanding issues with regard to running Smart Search on large
sites which will hopefully be addressed in future versions and these are
also described here.

Smart Search works by creating and maintaining an independent index of
search terms in a number of database tables. The problem for large sites
is that the indexing process can be quite heavy in CPU, memory and disk
usage. Even after the initial construction of the index, incremental
updates can also be heavy. The good news is that querying the index is a
relatively quick and lightweight operation.

## Always Use the CLI Indexer

Because the initial indexing process can take a long time, it is best to
run the indexer from the command line to avoid any issues from browser
sessions timing out. The CLI indexer will not timeout regardless of how
long it takes to complete and it can be easily aborted if problems are
encountered. Furthermore, error messages are visible with the CLI
indexer, whereas they are hidden when running from the Administrator.

For instructions on using the CLI indexer see [Setting up automatic
Smart Search
indexing](https://docs.joomla.org/Setting_up_automatic_Smart_Search_indexing "Setting up automatic Smart Search indexing")

## Batching

The indexer breaks the indexing job into batches of content items. By
default the batch size is set at 30 meaning that up to 30 content items
will be indexed per batch. Increasing the batch size will potentially
make the indexing process faster, but it will use more memory and
possibly more temporary disk space.

## Out of Memory Issues

If the indexer is running out of memory, try making the following
adjustments one at a time until the problem is resolved.

1.  Decrease the batch size. If you have particularly large content
    items the indexer can run out of memory on even a single content
    item, so try dropping it to 5 initially and if you still run out of
    memory, drop it to 1.
2.  If you are able to allocate more memory to the indexer, do so. You
    can increase the memory allocated to the command-line indexer using
    an extra parameter on the command-line. For example, to increase the
    memory limit to 256Mb use the following command, replacing the
    *256M* with as much memory as you can safely allocate to a process
    on your system.
    *php -d memory_limit=256M finder_indexer.php*
3.  Reduce the memory table limit. The default is 30000 terms which
    means that as soon as the temporary in-memory *jos_finder_tokens*
    table reaches this number of rows, the indexer will switch to using
    a disk table instead of a memory table. It may be that you don't
    have enough memory to handle a full or nearly full memory table so
    reducing the limit will tell the indexer to switch to disk sooner
    and so use less memory. Try 10000 or even much smaller numbers.
4.  Change the database engine used for the *jos_finder_tokens* and
    *jos_finder_tokens_aggregate*tables from MEMORY to MyISAM or InnoDB.
    This could seriously impact performance as more of the indexing
    process will use the disk instead of memory, but it might allow the
    indexer to finish without running out of memory. Expect the indexing
    process to run for much longer. This will not affect search
    performance however.
5.  Try to identify which content items are causing the indexer to run
    out of memory. If it's not obvious then you might try disabling all
    Smart Search plugins except one. Running the indexer with only one
    plugin enabled at a time should reveal which content type(s) are
    causing the issue. As a last resort consider breaking a few
    exceptionally large content items into separate items. If the
    problem is with a custom content type, look at the plugin code and
    consider indexing less of the available content per item.

## Out of Disk Space Issues

The Smart Search index tables can grow quickly! The
*jos_finder_links_termsX* tables (where *X* is a single hexadecimal
character) contain one row per term/phrase per content item and a single
Joomla article containing 1000 words will typically result in
approximately 3000 rows being added to these tables. A second article of
a similar size will add a similar number of rows even if both articles
contain the same words. A site with tens of thousands of articles, some
of which may contain thousands of words, is likely to end up with these
mapping tables containing millions of rows. It is not unusual for the
index tables to occupy several gigabytes of disk space in such
circumstances.

With the present version of Smart Search there isn't much you can do
about this. However, it is hoped that in the next release you will be
able to adjust the number of words per phrase that get indexed. At
present this is hard-wired at 3, meaning that every word that gets
indexed is also indexed as part of a pair of adjacent words and as part
of a triplet of adjacent words. This is useful for the auto-completion
feature and generally improves the quality of search results. On sites
where disk space is an issue, it would be good to reduce this to 2 or
even 1, so that the mapping tables would be correspondingly smaller.

## Notes

1.  There is currently no concurrency locking to prevent more than one
    process running the indexer at the same time. This will almost
    certainly result in a corrupt index. Even someone saving changes to
    a content item while a full index is being carried out could
    potentially damage the index.
