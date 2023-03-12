<!-- Filename: Creating_a_Smart_Search_plug-in / Display title: Creating a Smart Search plug-in -->

Smart Search plug-ins are gathered together for convenience into a
plug-in group called "finder". Take a look in the `plugins/finder`
directory and you will see the plug-ins that support the core Joomla
content types. It is best to create your own plug-in by taking a copy of
one of these plug-ins and adapting it to meet your specific needs.

All Smart Search plug-ins extend the FinderIndexerAdapter class which
contains a good many methods to deal with maintaining the index. For the
vast majority of custom content requirements you will only need to
override a few of these methods.

There is some additional information on writing a Smart Search plug-in
<a
href="https://magazine.joomla.org/issues/issue-feb-2012/item/671-Developing-a-Smart-Search-Plugin"
class="external text" target="_blank" rel="noreferrer noopener">here</a>.

## The principal properties

Before looking at the methods, there are a few properties that need to
be set up correctly:

- \$context
  This should be a unique identifier for the plug-in and establishes the
  context that the plug-in will respond to (eg. "Content").
- \$extension
  The name of the extension (component) that handles the content type
  (eg. "com_content").
- \$layout
  The sublayout to use when rendering search results. For example, of
  \$layout is set to "article" then the default view will look for a
  layout file called `default_article.php` when it needs to render a
  search result of this type. If no such file is found then the layout
  file called `default_result.php` will be used instead.
- \$table
  The name of the table to retrieve data from (eg. "#\_\_content").
- \$state_field
  The database field in your table that the published state of an item
  is stored in; default's to "state".

## The principal methods

The first methods you will want to override when developing a new Smart
Search plug-in are the setup, index and getListQuery methods. In the
vast majority of cases those three methods will be enough to get your
content indexed, although the plug-in will not be complete as there are
other methods that must be implemented to deal with issues such as
updating the index when the content changes. But those three methods are
the working core of the plug-in.

- setup
  This method is called by the indexer once before an indexing run
  begins. It can be used to load libraries or initialise variables for
  the plug-in. Must return true.
- index
  This is the main method called by the indexer. It is called once for
  each content item that is to be indexed (or the index updated). The
  index method essentially describes the content to the indexer by
  telling the indexer which fields to parse for terms/phrases and their
  relative weights, which fields to map into branches of the content map
  and what data to include in the index as "payload". This method is
  described in more detail later.
- getListQuery
  This method must return a JDatabaseQuery object that will form the
  basis of a query that will return a list of objects of the given
  content type. There are constraints on this query to ensure that it is
  compatible with other methods used by the indexer. This method is
  described in more detail later.

## Some other methods

For a complete Smart Search plug-in there are a number of other methods
you may need to override.

- translateState
  Given a content item this method translates the native state of the
  content item into a state that the indexer can use. It must return an
  integer 0 if the content item is not to appear in search results, or
  an integer 1 if the content item can appear in search results.
- getURL
  Returns the non-SEF URL for an item. The default return, using
  plg_finder_content for example, is
  'index.php?option=com_content&view=article&id=1'.
- getStateQuery
  This method is used to build a generic query for checking the access
  and state of items and their parent categories. This method uses the
  \$table and \$state_field properties to select the correct data.

## Event methods

The following methods are called via the Smart Search content plug-in in
response to specific trigger events in Joomla.

- onFinderBeforeSave
  Called in response to an onContentBeforeSave event.
- onFinderAfterSave
  Called in response to an onContentAfterSave event.
- onFinderAfterDelete
  Called in response to an onContentDelete event.
- onFinderChangeState
  Called in response to an onContentChangeState event.
- onFinderCategoryChangeState
  Called in response to an onCategoryChangeState event.

## Methods in more details

### getListQuery

This method must return a JDatabaseQuery object that will form the basis
of a query that will return a list of objects of the given content type.
There are constraints on this query to ensure that it is compatible with
other methods used by the indexer. If the following conditions are not
true then you will need to override other methods in the
FinderIndexerAdapter class.

- The primary database table that is being indexed must have an alias of
  "a".<sup>[\[1\]](#cite_note-1)</sup>

### index

This method is called whenever a content item needs to be indexed (or
re-indexed). It is passed an object of type FinderIndexerResult and its
purpose is to make adjustments to that object and to add metadata before
handing control to FinderIndexer::index method to do the indexing
proper.

### setup

This method is called prior to the index method and is used to set up
the index process. In this method is where you would typically include
any externally required classes to allow for proper indexing.

## FinderIndexerResult properties

- url
- route
- title
- description
- published
- state
- access
- language
- publish_start_date
- publish_end_date
- extension (only used in core for com_categories plugin)

## Testing

Testing a finder plugin can be a bit difficult due to the fact that it
is typically run using an ajax process, so you don't tend to actually
see any results from the process.

As such, one way to test is to use the command line
indexer.<sup>[\[2\]](#cite_note-2)</sup>

Open a command prompt/ssh session on the server and go to the root
directory of the website. From there, you can run the indexer and errors
and log messages will go to the screen. `php cli/finder_indexer.php`

## Notes

1.  <span id="cite_note-1">[↑](#cite_ref-1) If this condition is not
    true you will also have to override the getItem,
    getUpdateQueryByTime and getUpdateQueryByIds methods</span>
2.  <span id="cite_note-2">[↑](#cite_ref-2) <a
    href="http://docs.joomla.org/Setting_up_automatic_Smart_Search_indexing"
    class="external text" target="_blank" rel="noreferrer noopener">Setting
    up automatic Smart Search Indexing</a></span>
