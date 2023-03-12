<!-- Filename: Smart_Search_quickstart_guide / Display title: Smart Search quickstart guide -->

## Enabling the Smart Search content plug-in

Smart Search is not enabled by default in Joomla 2.5. To start using
Smart Search you will need to enable the Smart Search content plug-in,
which can be done using the following procedure:

1.  Log in to the Administrator.
2.  Click on the Extensions → Plug-in Manager menu item.
3.  Filter the plug-in list so that only content plug-ins are shown by
    selecting "content" from the "Select Type" filter drop-down.
4.  Find "Content - Smart Search" on the list of plug-ins.
5.  Click on the red circle icon in the Status column for the Smart
    Search plug-in. The red circle should change to a green tick
    indicating that the plug-in is now enabled.

**Important Note** Be aware that if you have content items that are not
available for public view then the auto-completion feature will still
show terms contained in those content items. The content items
themselves cannot be viewed and will not be listed in search results,
but if revealing the presence of a word or phrase in a restricted
content item is of concern then you should disable auto-completion. To
disable auto-completion use the following procedure:

1.  Log in to the Administrator.
2.  Click on Components → Smart Search.
3.  Click on the Options toolbar button.
4.  Change "Search Suggestions" from "Show" to "Hide".
5.  Click Save and Close.

## Preparing Smart Search plug-ins

For content to be displayed in search results it must first be indexed
by one of the Smart Search plug-ins. Before starting the indexer, it is
recommended that you review the available plug-ins and disable any that
will not be necessary for your site. To review the available Smart
Search plug-ins use the following procedure:

1.  Log in to the Administrator.
2.  Click on the Extensions → Plug-in Manager menu item.
3.  Filter the plug-in list so that only Smart Search plug-ins are shown
    by selecting "finder" from the "Select Type" filter drop-down.
4.  Review the list of plug-ins and disable any that will not be
    necessary for your site by clicking on the green tick icon in the
    Status column for the plug-in. This should change to a red circle to
    indicate that the plug-in is disabled.

## Running the Indexer

After you have reviewed the search plug-ins, it is time to start the
Smart Search indexer. This will scan the content on your Website and
build an index that will enable fast and intelligent searching by your
site visitors. To run the indexer use the following procedure:

1.  Log in to the Administrator.
2.  Click on the Components → Smart Search menu item.
3.  Click on the Index button in the toolbar to start the indexer. This
    will cause a modal window to load with some indexer status
    information and a progress bar. Depending on the size of your site,
    this can take a few minutes to a few hours to complete. The indexer
    uses AJAX requests to complete the overall process in small chunks
    so as to avoid timeouts and memory problems. Indexing is complete
    when the progress bar disappears and you see a message indicating
    that it is now safe to close the modal window.

Once the indexer has finished, closing the modal window will cause the
Indexed Content screen in the background to refresh with an updated list
of all the indexed content. If you would prefer that specific items not
be displayed in search results, you can unpublish them from the Smart
Search database by selecting the checkbox next to the title of the item
and then pressing the Unpublish button. For more information on the
Indexed Content screen see the [Manage Indexed Content help
screen](https://docs.joomla.org/Help25:Components_Finder_Manage_Indexed_Content "Help25:Components Finder Manage Indexed Content").

**IMPORTANT NOTE**: If your site has a large amount of content, or
particularly large content items, or has restricted disk space, you
should read about [Smart Search on large
sites](https://docs.joomla.org/Smart_Search_on_large_sites "Smart Search on large sites").

## Exposing Smart Search to Site Users

Now that the Smart Search index is prepared and ready, you need to
expose Smart Search to your Website's users. Smart Search offers two
ways to do this:

### The Module Interface

Smart Search includes a module that can be enabled to display a simple
search form on any page in virtually any position. To enable the Smart
Search module use the following procedure:

1.  Log in to the Administrator.
2.  Click on the Extensions → Module Manager menu item.
3.  Click the New button in the Module Manager toolbar.
4.  Select "Smart Search Module" from the list of module types shown.
5.  Configure the module by (at least) entering a title, selecting the
    module position, and adjusting the pages for it to display on if
    desired. Additional module configuration options are described on
    the [Smart Search module help
    screen](https://docs.joomla.org/Help25:Extensions_Module_Manager_Smart_Search "Help25:Extensions Module Manager Smart Search").
6.  Click on the Save button in the toolbar to publish the module.

### The Component Interface

Smart Search can also be linked to via a Joomla menu item so that users
can navigate directly to the main search form. To create a menu item
link to Smart Search use the following procedure:

1.  Log in to the Administrator.
2.  Click on the Extensions → Module Manager menu item.
3.  Press the New button in the Menu Manager toolbar.
4.  Click the Select button next to the Menu Item Type field.
5.  Click on "Search" under the "Smart Search" entry on the list of menu
    item types shown.
6.  Configure the menu item by (at least) entering a Menu Title and
    adjusting the parent item if desired.
7.  Click on the Save button in the toolbar to publish the menu item.

## Testing, Testing, Testing

To test Smart Search, navigate to one of the menu items you created and
enter a query in the search form or enter a query into one of the
instances of Smart Search module. You should be taken to a list of
search results if any could be found for the word or phrase you entered.
If no results could be found, a message will be displayed indicating
that no results could be found. If no results could be found and the
system has a search suggestion based on your term, the suggested search
phrase will display above the message indicating no results could be
found.

## Finalizing the Switch

To finalize the switch to Smart Search, you should remove all instances
of mod_search and all menu items linking to com_search. Smart Search
does not interact with the old Joomla search system and exposing both
systems may create a negative user experience by giving inconsistent and
confusing search results.

## Removing Joomla Search Modules

If you have the old Joomla search still available then you will probably
want to remove it once you have Smart Search running correctly. To
remove old Joomla search modules, use the following procedure:

1.  Log in to the Administrator.
2.  Click on the desired menu under the Menus menu item.
3.  Filter the modules listed so that only search modules are shown by
    selecting "Search" from the "Select Type" filter drop-down. If no
    such modules are listed then there are no instances of the old
    search available and you can skip this part.
4.  Select the checkbox at the top of the table to select all of the
    items in the list. Once all the instances of the old search have
    been selected, press the Delete button in the Module Manager
    toolbar. Be careful that you do not accidentally delete any other
    modules in the process.

## Removing Joomla Search Menu Items

Unfortunately, there is no quick and easy way to remove all links to the
old Joomla search system. To remove all the menu items to the old Joomla
search system you will have to browse the menu items in each of your
site's menus and manually remove the links. To make this process
somewhat quicker, adjust the order of the table to list menu items by
type in reverse alphabetical order. Now scroll down and look for links
with type "Search \>\> Search". Delete those menu items by checking the
checkbox to the left of the title and then pressing the Delete button in
the Menu Manager toolbar.
