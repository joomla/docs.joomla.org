<!-- Filename: Help4.x:Smart_Search:_Options / Display title: Smart Search: Options -->

## Description

Smart Search Options configuration allows setting of parameters used
globally for Smart Search.

## How to Access

- Select **Components **→** Smart Search **→** Index** from the
  Administrator menu. Then...
  - Select the Options button from the Toolbar.

## Screenshot

<img
src="https://docs.joomla.org/images/a/a0/Help4.x-Components-Finder-Options-en.png"
decoding="async" data-file-width="800" data-file-height="810"
width="800" height="810"
alt="Help4.x-Components-Finder-Options-en.png" />

## Form Fields

### Smart Search Tab

- **Result Taxonomy.** (Yes/No) ...
- **Result Description.** (Show/Hide) Toggle if the description should
  be displayed with search results.

<!-- -->

- **Description Length**. Number of characters of the description in
  search results. Enter \<number\> in field, default is 255.
- **Result Date.** (Show/Hide) Show the start and end date filters in
  the advanced search.
- **Result URL.** (Show/Hide) Show the result item's URL in search
  results. The URL is located under the description.
- **Gather Search Statistics.** (Yes/No) Record the search phrases
  submitted by visitors.

<!-- -->

- **Allow Empty Search**. Only if a filter is selected. Allows an empty
  search string to initiate a search with the filter constraints.
- **Search Suggestions.** (Show/Hide) Toggle if automatic search
  suggestions should be displayed.

<!-- -->

- **Did You Mean**. Whether to suggest alternative search terms when a
  search produces no result.

<!-- -->

- **Query Explanation**. Show or hide a detailed explanation of the
  search requested.
- **Advanced Search.** (Show/Hide) Toggle if users should be able to see
  advanced search options.
- **Advanced Tips.** (Show/Hide) Toggle if users should be able to see
  advanced search tips.
- **Expand Advanced Search.** (Show/Hide) Toggle if the advanced search
  options should be expanded by default.
- **Sort Field.** (Relevance/Date/List price) Field to sort the search
  results.
- **Sort Direction.** (Descending/Ascending) Direction to sort search
  results.
- **Highlight Search Terms.** (Yes/No) Toggle if search terms should be
  highlighted in search results.
- **Enable OpenSearch.** (Yes/No)
- **OpenSearch Name.** Name displayed for this site as a search
  provider.
- **OpenSearch Description.** Description displayed for this site as a
  search provider.

### Index Tab

<img
src="https://docs.joomla.org/images/thumb/2/23/Help4x-Components-Finder-Options-Index-en.png/600px-Help4x-Components-Finder-Options-Index-en.png"
decoding="async"
srcset="https://docs.joomla.org/images/2/23/Help4x-Components-Finder-Options-Index-en.png 1.5x"
data-file-width="788" data-file-height="1231" width="600" height="937"
alt="Help4x-Components-Finder-Options-Index-en.png" />

- **Search for Phrases.** (Disabled/Enabled) Performance versus quality
  of results.
- **Indexer Batch Size.** The batch size controls how many items are
  processed per batch. Large batch sizes require lots of memory whereas
  small batch sizes require less memory but execute more requests which
  tends to take longer.
- **Memory Table Limit.** The memory table limit should not be changed
  unless you are getting errors indicating that the finder_tokens or
  finder_tokens_aggregate tables are full. The default is 30,000.
- **Title Text Weight Multiplier.** The multiplier is used to control
  how much influence matching text has on the overall relevance score of
  a search result. A multiplier is considered in relationship to the
  other multipliers. The title text comes from the title of the content
- **Body Text Weight Multiplier.** The multiplier is used to control how
  much influence matching text has on the overall relevance score of a
  search result. A multiplier is considered in relationship to the other
  multipliers. The body title text comes from the summary and/or body of
  the content.
- **Metadata Weight Multiplier.** The multiplier is used to control how
  much influence matching text has on the overall relevance score of a
  search result. A multiplier is considered in relationship to the other
  multipliers. The metadata comes from a number of sources including the
  meta keywords and meta description, author names, etc.
- **Path Text Weight Multiplier.** The multiplier is used to control how
  much influence matching text has on the overall relevance score of a
  search result. A multiplier is considered in relationship to the other
  multipliers. The path text comes from the SEF URL of the content.
- **Misc. Text Weight Multiplier.** The multiplier is used to control
  how much influence matching text has on the overall relevance score of
  a search result. A multiplier is considered in relationship to the
  other multipliers. The miscellaneous text comes from a number of
  sources including comments and other associated data.
- **Enable Logging.** Enable this option to create a log file in your
  site's logs folder during the index process. This file is useful for
  troubleshooting issues with the index process. It is recommended that
  logging be disabled unless necessary.
- **Default Language.** (Default Site Language/None/English (United
  Kingdom))
- **Filter Common Words.** (Yes/No)
- **Filter Numeric Terms.** (Yes/No)

### Permissions Tab

This section shows permissions for Smart Search. The screen shows as
follows.

<img
src="https://docs.joomla.org/images/6/6d/Help4x-Components-Finder-Options-Permissions-en.png"
decoding="async" data-file-width="600" data-file-height="670"
width="600" height="670"
alt="Help4x-Components-Finder-Options-Permissions-en.png" />

  
To change the permissions for this extension, do the following.

- Select the **Group** by clicking its title located on the left.
- Find the desired **Action**. Possible Actions are:
  - **Configure ACL & Options.** Users can edit the options and
    permissions of this extension.
  - **Configure Options Only.** Users can edit the options except the
    permissions of this extension.
  - **Access Administration Interface.** Users can access user
    administration interface of this extension.
  - **Create.** Users can create content of this extension.
  - **Delete.** Users can delete content of this extension.
  - **Edit.** Users can edit content of this extension.
  - **Edit State.** User can change the published state and related
    information for content of this extension.
  - **Edit Own.** Users can edit own created content of this extension.
- Select the desired permission for the action you wish to change.
  Possible settings are:
  - ***Inherited.*** Inherited for users in this Group from the Global
    Configuration permissions of this extension.
  - ***Allowed.*** Allowed for users in this Group. Note that, if this
    action is Denied at one of the higher levels, the Allowed permission
    here will not take effect. A Denied setting cannot be overridden.
  - ***Denied.*** Denied for users in this Group.
- Click **Save** in **Toolbar** at top. When the screen refreshes, the
  Calculated Setting column will show the effective permission for this
  Group and Action.

## Toolbar

At the top of the page you will see the toolbar shown in the
[Screenshot](#Screenshot) above. The functions are:

- **Save**. Saves the item and stays in the current screen.

<!-- -->

- **Save & Close**. Saves the item and closes the current screen.

<!-- -->

- **Cancel**. Closes the current screen and returns to the previous
  screen without saving any modifications you may have made.

<!-- -->

- **Help**. Opens this help screen.
