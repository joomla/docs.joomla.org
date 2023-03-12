<!-- Filename: Smart_Search_Frequently_Asked_Questions / Display title: Smart Search Frequently Asked Questions -->

## Why Should I Use Smart Search?

Search technology has improved considerably over the years since Joomla
was first launched and yet the standard, basic search component has not
changed much over that time. It is still very crude and lacks the kind
of search features that web users have come to expect, especially given
the prevalence of advanced search engines such as Google. Smart Search
allows you to incorporate some of those more advanced search features
into your website.

## Why Create a Smart Search Plugin?

Generally, if you have a type of content that is not handled by the core
Joomla components, and you want to give your site visitors the
opportunity to search that content, you will need to write a Smart
Search Plugin to support it. For example, suppose you have a component
that stores information about different animal species. The component
maintains a database table containing fields such as scientific name,
vernacular name, classification and a description. Then you will need to
create a Plugin that will tell the Smart Search indexer how to index the
data in that table. As well as indexing individual words and phrases,
you can also have the Plugin add each record to a content map, which
might in this case include the
<a href="https://en.wikipedia.org/wiki/Taxonomy_(biology)"
class="external text" target="_blank"
rel="nofollow noreferrer noopener">kingdom, phylum, class, order and
family biological classifications</a>. Content maps can then be used to
filter search results.

## Can Multiple Nodes Be Selected From the Filter Drop-downs?

Yes, this is fully supported by Smart Search itself. Indeed, you can use
whatever user interface you care to devise for the filters. Just take a
look at the code provided in the standard Frontend module and component
and you will see how you need to do it.

## I Have a Large Site. Can I Use Smart Search?

Large sites may be better off with a dedicated standalone search engine,
such as Solr, rather than the pure-PHP implementation used in Smart
Search. In this first iteration of advanced search in Joomla it is
likely that issues relating to scaling and performance will be revealed.
There is also the potential for race conditions to occur when updating
the index on frequent content changes. These issues are expected to be
addressed more fully in a future version of Joomla.

## Why Does Smart Search Have So Many Tables?

Smart Search adds quite a few new tables to a Joomla installation,
including 16 "mapping tables". These mapping tables resolve the
many-to-many relationship between search terms and the content items
that contain them. In theory those 16 tables could be merged into a
single table and doing so would have negligible impact on small sites.
However, on larger sites there would be a substantial impact on
performance because the mapping table would have a very large number of
entries and updating such a large table can be time-consuming.

## Why Does Smart Search Use So Much Disk Space?

Maintaining a search term index requires a fair amount of disk space,
which increases the more terms that content items contain. Since phrases
are also indexed, the longer the phrases, the more disk space required.
For Smart Search in Joomla 2.5 the maximum length of a phrase has been
fixed at 3 terms as a reasonable compromise between search usability and
disk space usage. It is likely that this will be a parameter that can be
tuned in a future version of Smart Search.

## Why Are the Entries in the Mapping Tables Not Uniformly Distributed?

It is perhaps surprising that the number of entries in each of the
mapping tables is not even roughly the same. Surely performance would be
improved with uniform distribution? Actually no, there is a trade-off
between insertion performance and search performance with a uniform
distribution being good for the former but poor for the latter. This is
an area of continuing research with the number of tables and the
distribution algorithm subject to change in the light of experience.

## Why is There a Separate Smart Search Content Plugin?

This is just a convenience that makes it easier to enable or disable all
the Smart Search Plugins with a single operation. This was considered
desirable because Smart Search is not enabled by default in Joomla 2.5.
It is likely that Plugins will not be required at all when we move to
search in Joomla 3.x.

## Why Do Smart Search Plugins Use Separate Events such as *onFinderContentAfterSave*?

Smart Search uses its own events, such as onFinderContentAfterSave,
rather than the generic equivalent onContentAfterSave, purely as a
convenience to make it easy to enable or disable Smart Search indexing
by enabling/disabling a single Plugin.

## Why is Smart Search Not Enabled by Default in Joomla 2.5 and Joomla 3.x?

Because Joomla 2.5 is the last in the 1.x/2.x series it must maintain a
high degree of backwards-compatibility with the previous release in the
series. As Smart Search is something entirely new and does not bear any
resemblance to the regular search component of this or earlier releases
it was considered important that users upgrading from those earlier
versions would not be forced to change the way search works on their
sites. Indeed, activation of Smart Search is something that should be
done in a carefully considered way.

## Why is There No Search API?

The focus of the present version of Smart Search was in moving code from
the old JXtended Finder component into the latest version of Joomla. As
that code was already considered stable and there was only a short
window of opportunity to port the code over, it was felt that a major
redevelopment of Finder was out of scope for the Joomla 2.5 release.
Consequently, the code uses Plugins to avoid any changes to the core CMS
code, rather than developing a proper search API. We will be looking to
create such an API for a future iteration of Joomla.

## Can Smart Search Do Faceted Search?

Yes. The advanced search available from the search results page and the
smart search module provide an example of how you can filter search
results to produce faceted search. There is nothing stopping you from
creating your own variations on these basic ideas. For example, you
could change the simple drop-downs to accept multiple selections, or you
could replace the drop-downs with an array of check boxes.

## Why Are Wildcard Searches Not Supported?

The old Joomla search used a very primitive method of searching which
relied on the FULLTEXT search provided by the database. This was very
inefficient but provided a simple means of handling wildcard search
queries. Smart Search provides an autocompletion feature which is
effectively a wildcard search of terms in the index, but full wildcard
searching is not supported due to the potential for crippling the server
if the feature were to be abused. In most cases wildcard searching is
used to cater for variations in a search term. For example, searching
for *juggl\** in order to catch references to *juggling* as well as
*juggler*. Smart Search attempts to avoid the need for wildcard
searching by instead supporting word stemming where words that have the
same stem are considered equivalent so that searching for *juggler* will
also retrieve instances of *juggling* without the need to use wildcards.

## Can Smart Search Be Used on Multilingual Sites?

Yes, but there are still some issues to be resolved, especially
regarding support for Asian languages.

- To be indexed correctly, you must ensure that all content is valid
  UTF-8.
- The *Did you mean?* feature uses the Soundex function to find
  phonetically similar search phrases. However, Soundex does not work
  well for non-English languages and for many languages is doesn't work
  at all. We are currently researching alternative methods of providing
  this feature.

If you use Smart Search on a multilingual site and come across any
issues, please report them on the tracker so that we can better
understand the problems that need to be resolved.

## Will *jXTended* Finder Plugins Work with Smart Search?

No. You will need to update Finder Plugins to work with Smart Search.
However, the changes should not be difficult to implement and in most
cases will result in significantly less code. If you take a look at the
current Smart Search Plugins you should see that updating a Finder
Plugin is pretty straightforward.

## References
