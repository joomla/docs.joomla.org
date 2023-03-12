<!-- Filename: Smart_Search_configuration_options / Display title: Smart Search configuration options -->

Options allows you to manage the global settings for the extension. The
Options settings are inherited by views but the settings in the Menu
Item will override the Global setting.

The Options panel is separated into two parts. When you are finished
making adjustment click the Save button, otherwise click the Cancel
button to abandon any changes. To export the configuration settings to a
file (for example, before you upgrade Finder to a new version), click
the Export button and save the file in a safe location.

## Search Options

The search options control the behaviour of the search forms and search
results for the Finder front-end.

- **Result Description** - This option controls whether search results
  should be shown with descriptions. Defaults to Show.
- **Description Length** - This option controls the maximum character
  length of the search result descriptions. The descriptions are
  truncated to the maximum length but the truncation is always done at
  the last space character so as not to truncate in the middle of a
  word. Only effective when the Result Description option is set to
  Show. Defaults to 255 characters.
- **Result URL** - This option controls whether search results should be
  shown with URLs below the description (if enabled). Defaults to Show.
- **Advanced Search** - This option controls whether the advanced search
  options should be shown. Defaults to Show.
- **Expand Advanced Search** - The advanced search options are contained
  in a collapsible container. This option controls whether the advanced
  search options container should be expanded by default. Defaults to
  No.
- **Date Filters** - This option controls whether the date filters
  should be shown in the advanced search options. Defaults to Hide.
- **Result Labels** - This option controls whether search results should
  be shown with Labels. Requires JXtended Labels to be installed.
  Defaults to Show.
- **Highlight Search Terms** - This option controls whether search terms
  should be highlighted in search results. Defaults to Yes.

## Index Options

The index options control the behaviour of the indexer used to process
and analyse content for searching. Most settings such as the weight
multiplier and stemmer options will not produce immediate changes as
they are used during indexing and the effects of changing those settings
will only be seen after the index has been purged and run again.

- **Indexer Batch Size** - This option controls the indexer batch size.
  The Smart Search indexer breaks up the total indexing process into a
  number of batches to reduce server load and avoid PHP's memory and
  execution time limits. If the content items being indexed are
  particularly short and/or the server is particularly fast, the indexer
  can process more items per batch. However, if the content items being
  indexed are particularly long and/or the server is particularly slow,
  the indexer has to process fewer items per batch. Defaults to 50.
- **Memory Table Limit** - This option controls the memory table limit.
  The Smart Search indexer uses MySQL memory tables to temporarily store
  content data instead of storing the data in PHP's memory buffers
  because large content items will quickly exhaust PHP's default memory
  limit settings. However, MySQL memory tables also have adjustable size
  limits and readjusting them is not reliable. This setting is provided
  to deal with memory tables with smaller than usual size limits and
  should only be adjusted when encountering Table Full errors during
  indexing. Defaults to 30,000. If you encounter "table full" errors
  then try **reducing** this parameter. The optimum value should result
  in memory tables that are a little smaller than the <a
  href="http://dev.mysql.com/doc/refman/5.1/en/server-system-variables.html#sysvar_max_heap_table_size"
  class="external text" target="_blank"
  rel="nofollow noreferrer noopener"><em>max_heap_table_size</em></a>
  parameter in MySQL, which defaults to 16 megabytes.
- **Title Text Weight Multiplier** - This option controls how much
  influence the title text has on the overall relevance score of a
  search result. Defaults to 1.7.
- **Body Text Weight Multiplier** - This option controls how much
  influence the body text has on the overall relevance score of a search
  result. Defaults to 0.7.
- **Meta Data Weight Multiplier** - This option controls how much
  influence the meta-data text has on the overall relevance score of a
  search result. Defaults to 1.2.
- **Path Text Weight Multiplier** - This option controls how much
  influence the path/URL text has on the overall relevance score of a
  search result. Defaults to 2.0.
- **Miscellaneous Text Weight Multiplier** - This option controls how
  much influence the miscellaneous text has on the overall relevance
  score of a search result. Defaults to 0.3.
- **Stemmer** - This option controls which language stemmer should be
  used during indexing. The English Only stemmer is a pure PHP
  implementation which has no dependencies. The Snowball stemmer
  requires the Stem PHP extension but provides support for 14 languages
  including Danish, German, English, Spanish, Finnish, French,
  Hungarian, Italian, Norwegian, Dutch, Portuguese, Romanian, Russian,
  and Turkish. Defaults to English Only.
- **Enable Logging** - creates a log file during the index process.
  Defaults to no.
