# Guided Tours

## Description

The guided tours give users the ability to complete walk-throughs (or tours) to better understand the interface they are learning to use.

Each tour has mandatory associated steps.

Joomla comes with built-in tours, a good starting point to create new tours.

## How to Access

**System** -> **Manage** -> **Guided Tours**

To add a Tour:

- Click the **New** toolbar button

To edit a Tour:

- Select a **Title** from the list

To edit a Tour's steps:

- Select the **steps number** from the Steps column

## Screenshot

![Guided tours list view](assets/guidedtours_tours.png)

## Column Headers

- **Checkbox**. Check this box to select tours. To select all tours, check the box in the column heading. After boxes are checked the toolbar button 'Actions' get active.

- **Ordering**. You can change the order of a tour within a list as follows:
  
  - Select the Ordering icon ![Ordering icon](assets/ordering-colheader-icon.png) in the List heading to make it active.
  - Select one of the Three dots icons ![Dots icon](assets/ordering-colheader-grab-bar-icon.png) and drag it up or down to change the position of that row in the list.
  - In the Filter Options you may limit the list to tours that are assigned, for example to a Language.
  
  The ordering of tours in the console determines the order of the tours in 'Take a tour'.

- **Title**. The title of the tour. Edit the tour by clicking on the Title.

- **Description**. A truncated description of the tour.

- **Steps**. Access to the steps for the tour. Select the number to access the list of
   steps.

- **Access**. The viewing Access Level for this tour.

- **Language**. Tours language, default is 'All'. When using 'All', title and description can be language keys that will be properly translated into each user's language (assuming the language key values are available). Default tours are using language keys.

- **ID**. A unique identification number for this tour, you cannot change this number.

## List Filters

**Search bar**. Near the top of the page you will see the search bar shown in the [Screenshot](#screenshot) above.

- **Search by Text**. Enter part of the search term and click the Search icon. Hover to see a Tooltip indicating which fields will be searched.  
  To 'Search by ID' enter "id:x", where "x" is the ID number (for example, "id:19").

        Note that when tour titles and descriptions are language keys, they are not searchable.

- **Filter Options**. Click to display the additional filters.

- **Clear**. Click to clear the Filter field and restore the list to its unfiltered state.

- **Ordering**. Shows the current list ordering field. 2 ways to change the order:
  
  - Select from the dropdown list. Ordering may be in ascending or descending order.
  
  - Click a column heading. The column heading toggles between ascending and
     descending order.

- **Number to Display**. Shows the number of tours in a list. Select from the dropdown list to change the number displayed.  
  The default for a site is '20' but this may be changed in the Global Configuration.

## Filter options

Near the top of the page you will see the filter bar shown in the [Screenshot](#screenshot) above.

- **Select Status**. Select from Trashed / Unpublished / Published / Archived / All.

- **Select Access**. Select from the list of available viewing access levels.

- **Select Language**. Select from the list of available languages.

## Pagination

**Page Controls**. When the number of tours is more than one page, you will see a page control bar near the bottom of the page shown in the [Screenshot](#screenshot) above. The current page number being viewed has a dark colour background.

- **Start**. Click to go to the first page.
- **Prev**. Click to go to the previous page.
- **Page numbers**. Click to go to the desired page.
- **Next**. Click to go to the next page.
- **End**. Click to go to the last page.

## Toolbar

At the top of the page you will see the toolbar shown in the [Screenshot](#screenshot) above.

- **New**. Opens the editing screen to create a new tour.

- **Actions**. Reveals a list of actions for selected tours. Check one or more tours checkboxes to activate the list.
  
  - **Publish**. Makes the selected tours available in Take a tour.
  
  - **Unpublish**. Makes the selected tours unavailable in Take a tour
  
  - **Archive**. Changes the status of the selected tours to indicate that they are archived.
  
  - **Check-in**. Checks-in the selected tours.
  
  - **Trash**. Changes the status of the selected tours to indicate that they are trashed.
  
  - **Duplicate**. Creates new tours with their associated steps from the selected tours.

- **Options**. Opens Guided Tours: Options.

- **Help**. Opens this help screen.

## Quick Tips

- To see trashed and archived tours, set the Status filter to 'All'.
- To empty the trash, set the Status filter to 'Trashed'. Select the tours to trash. In the toolbar, select 'Empty Trash'. The associated steps are deleted as well.
