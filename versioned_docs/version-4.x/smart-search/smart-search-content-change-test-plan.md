<!-- Filename: Smart_Search_content_change_test_plan / Display title: Smart Search content change test plan -->

The following is a rough test plan covering (mainly) updating of the
Smart Search index when various kinds of content updates occur.

Smart Search needs to be tested for each of the supported core content
types. These are:

- Articles
- Categories
- Contacts
- News feeds
- Web links

For each of the above content types, we need to test the following:

## Text changes

Changing various text fields within a content item should change the
search terms in the index (with one notable exception described below).
There is no need to test all text fields for a given content type since
if it works for one it will work for them all, so just choose one for
each content type. The following text fields are indexed for the core
components:

- Articles
  - Title
  - Alias
  - Article text
  - Metadata description
  - Metadata keywords
  - Metadata author
  - Author
  - Created by alias
- Categories
  - Title
  - Alias
  - Description
  - Link ??? (not sure there is such a field)
  - Metadata description
  - Metadata keywords
  - Metadata author
  - Author
- Contacts
  - Name
  - Alias
  - Linked user name
  - Other information
  - Position (if enabled in Options)
  - Address (if enabled in Options)
  - City (if enabled in Options)
  - Region (if enabled in Options)
  - Country (if enabled in Options)
  - Zip (if enabled in Options)
  - Telephone (if enabled in Options)
  - Fax (if enabled in Options)
  - Email (if enabled in Options)
  - Mobile (if enabled in Options)
  - Web page (if enabled in Options)
- News feeds
  - Title
  - Alias
  - Link
  - Metadata description
  - Metadata keywords
  - Metadata author
  - Author
  - Created by alias
- Web links
  - Title
  - Alias
  - URL
  - Description
  - Metadata description
  - Metadata keywords
  - Metadata author
  - Author
  - Created by alias

To test, simply add some random string, such as "xyz", within a bunch of
regular text and towards the top, then try searching for that term on
the front-end.

- your random string should appear in the autocompleter list as you type
  it.
- your random string should appear 3 times in the autocompleter list.
  - on its own
  - together with the next word following it
  - together with the next 2 words following it
- the content item containing your random string should appear in the
  list of search results.
- your random string should be highlighted in the search results,
  provided you entered it near the top of the text (because the text in
  the search results is truncated).

Remove your random string from the text: This should remove the 3 search
terms/phrases from the index. Searching for any of the 3 search terms
should produce no search results.

Delete the content item: This will remove all search terms/phrases used
in the content item from the index, except where those search
terms/phrases are still used in other content
items.<sup>[\[1\]](#cite_note-1)</sup>

The deleted content item should not appear in any search results list.

## Content item state changes

Find a content item of the required type using Smart Search. Then do
these tests:

- Trash the item and repeat the search. The item should no longer appear
  in the search results.
- Publish the item again and repeat the search. The item should appear
  in search results again.
- Unpublish the item and repeat the search. The item should no longer
  appear in the search results.
- Archive the item and repeat the search. The item should appear in
  search results again.

## Content map (taxonomy) changes

Although changes to the category are a special case of content map
changes, we also need to test changes to non-category content map
branches because category changes exercise some different code. These
are the non-category fields that are subject to content maps in the core
components:

- Articles
  - Author
  - Category
  - Language
- Contacts
  - Category
  - Country
  - Language
  - Region
- News feeds
  - Category
  - Language
- Web links
  - Category
  - Language

So, pick one (if one works, they will all work for that content type) of
the above that is appropriate to the content type and check that:

- changing the field results in the item appearing in a search using the
  relevant drop-down (in advanced search) for the field you changed.
  <sup>[\[2\]](#cite_note-2)</sup>
- the content item does not appear in a search using the old value of
  the field.

Delete the content item and check that it no longer appears in search
results using the relevant drop-down filter. Note that it is **not**
expected that an unused node will be removed from the relevant filter
drop-down. <sup>[\[3\]](#cite_note-3)</sup>

## Category state changes

Changing the state of the category to which an item belongs should
update the index for that item. Furthermore, changing the state of a
parent category of the category to which an item belongs should also
update the index for that item. To test, find or create an item with the
following structure:

    Category A containing Category A.1 containing content item

Change the status of Category A.1 and test as follows:

- Trash Category A.1 and repeat the search. The item should no longer
  appear in the search results.
- Publish Category A.1 again and repeat the search. The item should
  appear in search results again.
- Unpublish Category A.1 and repeat the search. The item should no
  longer appear in the search results.
- Archive Category A.1 and repeat the search. The item should appear in
  search results again.

Restore Category A.1, then change the status of Category A and test as
follows:

- Trash Category A and repeat the search. The item should no longer
  appear in the search results.
- Publish Category A again and repeat the search. The item should appear
  in search results again.
- Unpublish Category A and repeat the search. The item should no longer
  appear in the search results.
- Archive Category A and repeat the search. The item should appear in
  search results again.

## Content item access level changes

Change the access level of a content item to something that a front-end
user should not be able to see.

- check that the content item does not appear in search results lists.

Change the access level back to something that a front-end user should
be able to see.

- check that the content item now appears in search results lists.

Note that search terms within the content item will still appear in the
autocompleter list even if the user does not have access to the content
item itself. This is expected behaviour, although it is something we
might want to look into. <sup>[\[4\]](#cite_note-4)</sup>

## Category access level changes

Changing the access level of the category to which an item belongs
should update the index for that item. Furthermore, changing the access
level of a parent category of the category to which an item belongs
should also update the index for that item. To test, find or create an
item with the following structure:

    Category A containing Category A.1 containing content item

Carry out the following tests:

- Change the access level of Category A.1 to something that a front-end
  user should not be able to see.
  Check that the content item does not appear in search results lists.
- Change the access level of Category A.1 back to something that a
  front-end user should be able to see.
  Check that the content item now appears in search results lists.
- Change the access level of Category A to something that a front-end
  user should not be able to see.
  Check that the content item does not appear in search results lists.
- Change the access level of Category A back to something that a
  front-end user should be able to see.
  Check that the content item now appears in search results lists.

## Smart Search state changes

In the Administrator → Components → Smart Search → Content Maps screen
it is possible to change the publish/unpublish state of content map
branches and nodes. The following tests should be performed:

- Unpublish a content map branch (eg. Author).
  Check that the filter drop-down for that branch is no longer visible
  in advanced search.
- Unpublish a content map node (within a published branch). For example,
  "Animals" within the "Category" branch.
  Check that the node is not listed in filter drop-down for the branch
  in advanced search.

In the Administrator → Components → Smart Search → Indexed Content
screen do the following test:

- Unpublish a content item.
  Check that the content item no longer appears in search results.

In the Administrator → Extensions → Plug-in Manager screen do the
following test:

- Set the "Select type" filter to "finder" or "smart search".
- Pick one of the content type plug-ins and unpublish it.
  All data for that content type should be removed from the index.

Note: If you publish the plug-in again it will not add the data back in
to the index. This is expected behaviour. You will need to run the
indexer again to get the data back.

## Notes

1.  <span id="cite_note-1">[↑](#cite_ref-1) The old JXtended Finder for
    Joomla 1.5 contained a bug which prevented unused search
    terms/phrases from being deleted from the index when a content item
    was updated or deleted. A fix is available by email from
    chris.davenport@joomla.org</span>
2.  <span id="cite_note-2">[↑](#cite_ref-2) The current Smart Search
    code and the old JXtended Finder for Joomla 1.5 both fail to create
    a new taxonomy (content map) node on-the-fly. This could be
    considered a bug, however there may be use cases where adding an
    extra node on-the-fly is not desirable (eg. it might mess up a
    front-end layout), so perhaps a parameter is needed to define the
    behaviour. Something for a future release.</span>
3.  <span id="cite_note-3">[↑](#cite_ref-3) Not removing unused taxonomy
    nodes on-the-fly might be considered a bug, but I would argue that
    we probably need a parameter to define that behaviour. I can think
    of use cases where empty nodes should be retained in the search
    filters. Something for a future release, I think. If nodes are to be
    deleted then any static filters that contain the deleted node should
    also be updated.</span>
4.  <span id="cite_note-4">[↑](#cite_ref-4) I think it would be quite
    difficult to implement an autocompleter that does not list search
    terms for content items that the user does not have access to.
    Consequently there is potential for information "leakage" to occur
    if a site has restricted information and the autocompleter is
    enabled. Something to consider for the future, but for now it just
    needs to be documented.</span>
