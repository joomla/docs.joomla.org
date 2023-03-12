<!-- Filename: J4.x:Article_Tables / Display title: Article Tables -->

## About Tables

In HTML, tables consist of rows and columns of cells. For example, a
simple table may consist of 4 rows and 4 columns, giving 16 cells.
However, cells can be combined either horizontally or vertically to
create quite intricate table structures. Tables also have not so obvious
features such as a header, body, footer and captions. Tables can be
nested!

By default, table cells expand to accommodate their content. The only
styling comes from the table markup: header cells (

) have centred text while data cells (

) have left aligned text. However, Joomla provides a range of table
styles via Bootstrap.

Table usage should be reserved for strictly tabular data, such as a
Timetable or a Calendar, where it is important to maintain the row and
column structure. Tables should not be used for layout, such as
placement of images or text side by side.

For more information see these articles:

- <a
  href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Basics"
  class="external text" target="_blank"
  rel="nofollow noreferrer noopener">Table Basics</a>
- <a
  href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Advanced"
  class="external text" target="_blank"
  rel="nofollow noreferrer noopener">Advanced Features and
  Accessibility</a>
- <a
  href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Styling_tables"
  class="external text" target="_blank"
  rel="nofollow noreferrer noopener">Styling Tables</a>.

## Insert a Table

To get started with a table:

- Open the article you wish to edit.
- Place the cursor on a blank line where the table is to appear.
- Select the More (`...`) button in the editor toolbar to see all of the
  editor tools.
- Select the Table icon / Table item.
- Move the cursor to define the number of rows and columns. The keyboard
  arrows work for this too.
- Click to select or use the Enter key.
- Fill in the table cells.

The following screenshot shows some data for a conference programme:

<img
src="https://docs.joomla.org/images/thumb/2/2d/J4x-article-table-edit-en.png/800px-J4x-article-table-edit-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/2/2d/J4x-article-table-edit-en.png 1.5x"
data-file-width="1000" data-file-height="642" width="800" height="514"
alt="Article Table edit" />

## Format the Table

The TinyMCE editor is not a Joomla-specific editor and it adds in-line
styles to each table cell. It is best to remove these styles and use
Bootstrap styles instead.

- Select the Source code (\<\>) icon from the editor toolbar.
- In the Source code popup dialog, scroll down to the table.
- Remove all of the style statements and the border="1" statement.
- Select OK. Then Save the article.

Before removing the inline styles the table looks like this:



    Day

Morning

Afternoon

Evening

Tuesday

Welcome

Presentations

BBQ

Wendneday

Posters

Presentations

Banquet

Thursday

Plenary

Presentations

Cocktails

To add Bootstrap styles:

- Select the Source code icon again.
- Add class="table" to the table tag:
  .
- In the next two rows add opening and closing thead tags and move the
  first tr set to between these tags.
- In the thead set change the opening and closing td tags to th tags,
- In each opening th tag add scope="col":
  .

It should now look like this:



    Day

Morning

Afternoon

Evening

Tuesday

Welcome

Presentations

BBQ

Wednesday

Posters

Presentations

Banquet

Thursday

Plenary

Presentations

Cocktails

Select OK to save the changes and then Save the article. The table has
no styling in the edit form so have a look at it in the Site page. It
should look like this:

<img
src="https://docs.joomla.org/images/thumb/9/94/J4x-article-table-display-en.png/800px-J4x-article-table-display-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/9/94/J4x-article-table-display-en.png 1.5x"
data-file-width="1000" data-file-height="192" width="800" height="154"
alt="Article Table display" />

You can add more styles to the table if you wish:

- Stripe effect:
- Bordered:
- Responsive:
  \- table scrolls left/right on small screens.

See the Bootstrap documentation for more options.

## Modify a Table

- Open the Article for editing.
- Locate the table you wish to modify and select a cell.
- A small popup menu appears with icons to insert or delete rows or
  columns as illustrated below:

<img
src="https://docs.joomla.org/images/7/7c/J4x-article-table-modify-en.png"
class="thumbborder" decoding="async" data-file-width="485"
data-file-height="216" width="485" height="216"
alt="Article Table Modify menu" />

- To insert a new row: Select a cell in a row above or below where you
  wish to insert a new row. Then, select the *Insert row before* icon or
  *Insert row after* icon.
- To delete a row: Select a cell in the row you wish to delete. Then
  select the *Delete row* icon.
- To insert a new column: Select a cell in a column adjacent to where
  you wish to create a new column. Then select the *Insert column
  before* or *Insert column after* icon.
- To delete a column: select a cell in the column you wish to delete.
  Then select the *Delete column* icon.
- To merge a range of cells: Select and highlight the range of cells you
  wish to merge. This can be done vertically or horizontally with click
  and drag or via the keyboard. Then, from the Editor's Table drop-down
  list, select the Cell \> Merge Cells icon.
- To split merged cells: select a previously merged cell. Then from the
  Editor's Table drop-down list, select the Cell \> Split cell icon.
  Note: When a cell is split it will return to the format it was in
  before being merged. For example: a merged cell spanning 3 columns
  will return to 3 cells when split.
