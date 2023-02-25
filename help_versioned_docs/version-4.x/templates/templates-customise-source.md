<!-- Filename: Help4.x:Templates:_Customise_Source / Display title: Templates: Customise Source -->

## Description

This screen is where the source code of template files is edited. It
provides a plain text interface to edit the template files. HTML and PHP
programming syntax is highlighted to make the source code files easier
to read.

## How to Access

- Select **System **→** Templates Panel **→** Site Templates** from the
  Administrator menu. Or...
- Select **System **→** Templates Panel **→** Administrator Templates**
  from the Administrator menu. Then...
  - Select a template name from the **Templates** column. Then...
    - Select a file to edit from the Editor tab.

## Screenshot

<img
src="https://docs.joomla.org/images/9/90/Help-4x-Extensions-Template-Manager-Templates-Edit-Source-screen-en.png"
decoding="async" data-file-width="800" data-file-height="430"
width="800" height="430"
alt="Help-4x-Extensions-Template-Manager-Templates-Edit-Source-screen-en.png" />

## Form Fields

### Editor Tab

- Select a file to edit. The edit area shows syntax highlighted text for
  most types of file.

### Create Overrides Tab

- Select an item to override. This is done immediately with no prompt
  for confirmation. The override is placed in the appropriate location.
  There is a confirmation message, example: Override created in
  /templates/cassiopeia/html/mod_whosonline

### Updated Files Tab

If there have been no updates to the template since overrides were
created this tab will contain a simple message:

- **Notice.** Overridden files are up to date. Nothing has been changed
  in the last extension or Joomla update.

If there have been updates, a table will show a list of overrides that
need to be reviewed.

### Template Description Tab

- **Thumbnail and Description.** Information on this template.

## Toolbar

At the top of the page you will see the toolbar shown in the Screenshot
above. The functions are:

The Toolbar icons change with the action being taken. You may see:

- **Save.** Saves the item and stays in the current screen.
- **Save & Close**. Saves the item and closes the current screen.
- **Copy Template.** Copies the current template. A dialog box prompts
  for a new name.
- **Template Preview.** Select to open the Site in a new browser tab.
- **Manage Folders.** Allows creation and deletion of template folders
  using a dialog box.
- **New File.** Allows upload of a file from your computer to the
  template file hierarchy using a dialog box.
- **Rename File.** Select a file to edit. Select the Rename button to
  prompt for a new name.
- **Delete File.** You will be prompted to Confirm or Cancel.
- **Close File.** Closes the open file and returns to the Editor Tab.
- **Help**. Opens this help screen.

The Toolbar icons change with the action being taken. Some of the above
are absent on some screens.

## Quick Tips

- Important: Do not delete the default template files using FTP because
  it generates an error in both the front-end and back-end.
- Before editing the HTML and the CSS file of the template, it is a good
  idea to make a backup of the file you are editing. Also, you can edit
  these files outside of Joomla! using the HTML or CSS editor of your
  choice.

## Related Information

- To install templates: [Extension Manager:
  Install](https://docs.joomla.org/Help4.x:Extensions:_Install/en "Help4.x:Extensions: Install/en")
