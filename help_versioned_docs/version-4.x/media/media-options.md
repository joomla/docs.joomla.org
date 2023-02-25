<!-- Filename: Help4.x:Media:_Options / Display title: Media: Options -->

## Description

Media Options configuration allows setting of parameters used globally
for Media. Control the file types allowed for uploading, MIME type
check, MIME type blacklisting, and more options.

## How to Access

**Content **→** Media**

- click the **Options** toolbar button

## Screenshot

<img
src="https://docs.joomla.org/images/thumb/2/29/Help-4x-Media-Options-screen-en.png/800px-Help-4x-Media-Options-screen-en.png"
decoding="async"
srcset="https://docs.joomla.org/images/thumb/2/29/Help-4x-Media-Options-screen-en.png/1200px-Help-4x-Media-Options-screen-en.png 1.5x, https://docs.joomla.org/images/thumb/2/29/Help-4x-Media-Options-screen-en.png/1600px-Help-4x-Media-Options-screen-en.png 2x"
data-file-width="2720" data-file-height="1700" width="800" height="500"
alt="Help-4x-Media-Options-screen-en.png" />

## Form Fields

### Media

- **Maximum Size (in MB)**. Use zero for no limit. Note: The server has
  a maximum limit.
- **Path to Files Folder**. Enter the path to the files folder relative
  to the root of your webspace.Changing to another path than the default
  'images' may break your links. Do not start the path with a slash.
- **Path to Images Folder**. Enter the path to the images folder
  relative to the root of your webspace.This path has to be the same as
  path to files (default) or to a subfolder of the path to file folder.
  Do not start the path with a slash.
- **Restrict Uploads**. Restrict uploads for lower than manager users to
  images if 'Fileinfo' or 'MIME Magic' isn't installed.
  - **Allowed Extensions**. Restrict uploads for lower than manager
    users to files in the list.
  - **Check MIME Types**. Use 'Fileinfo' or 'MIME Magic' to attempt to
    verify files. Try disabling this if you get invalid mime type
    errors.
- **Legal Image Extensions (File Types)**. Image extensions (file types)
  you are allowed to upload (comma separated). These are used to check
  for valid image headers and to select images with the [Media form
  field](https://docs.joomla.org/Media_form_field_type "Media form field type").
- **Legal Audio Extensions (File Types)**. Audio extensions (file types)
  you are allowed to upload (comma separated). These are used to check
  for valid audio headers and to select audio files with the [Media form
  field](https://docs.joomla.org/Media_form_field_type "Media form field type").
- **Legal Video Extensions (File Types)**. Video extensions (file types)
  you are allowed to upload (comma separated). These are used to check
  for valid video headers and to select videos with the [Media form
  field](https://docs.joomla.org/Media_form_field_type "Media form field type").
- **Legal Document Extensions (File Types)**. Document extensions (file
  types) you are allowed to upload (comma separated). These are used to
  check for valid document headers and to select documents with the
  [Media form
  field](https://docs.joomla.org/Media_form_field_type "Media form field type").
- **Ignored Extensions**. Ignored file extensions for MIME type checking
  and restricted uploads.
- **Legal MIME Types.** A comma separated list of legal MIME types to
  upload.

### Permissions

This section lets you set up the default [Access Control
List](https://docs.joomla.org/Access_Control_List/en "Access Control List/en")
permissions for all media.

<img
src="https://docs.joomla.org/images/thumb/c/c3/Help-4x-Media-Options-permissions-subscreen-en.png/600px-Help-4x-Media-Options-permissions-subscreen-en.png"
decoding="async"
srcset="https://docs.joomla.org/images/thumb/c/c3/Help-4x-Media-Options-permissions-subscreen-en.png/900px-Help-4x-Media-Options-permissions-subscreen-en.png 1.5x, https://docs.joomla.org/images/thumb/c/c3/Help-4x-Media-Options-permissions-subscreen-en.png/1200px-Help-4x-Media-Options-permissions-subscreen-en.png 2x"
data-file-width="2001" data-file-height="1340" width="600" height="402"
alt="Help-4x-Media-Options-permissions-subscreen-en.png" />

To change the permissions for media, do the following.

1.  Select the **Group** by clicking its title located on the left.
2.  Find the desired **Action**.
    - **Configure ACL & Options**. Users can edit the options and
      permissions.
    - **Configure Options Only**. Users can edit the options exept the
      permissions.
    - **Access Administration Interface**. Users can access user
      administration interface.
    - **Create**. Users can create media.
    - **Delete**. Users can delete media.
    - **Edit**. Users can edit media.
3.  Select the desired permission for the action you wish to change.
    - **Inherited**. Inherited for users in this Group from the [Global
      Configuration](https://docs.joomla.org/Help4.x:Site_Global_Configuration/en#permissions "Help4.x:Site Global Configuration/en")
      permissions.
    - **Allowed**. Allowed for users in this Group. Note: If this action
      is Denied at one of the higher levels, the Allowed permission here
      will not take effect. A Denied setting cannot be overridden.
    - **Denied**. Denied for users in this Group.
4.  Click **Save** in **Toolbar** at top. When the screen refreshes, the
    Calculated Setting column will show the effective permission for
    this Group and Action.

## Toolbar

At the top of the page you will see the toolbar shown in the
[Screenshot](#screenshot) above.

- **Save**. Saves the Media options and stays in the current screen.
- **Save & Close**. Saves the Media options and closes the current
  screen.
- **Close**. Closes the current screen and returns to the previous
  screen without saving any modifications you may have made.
- **Toggle Inline Help**. Show help text below some options.
- **Help**. Opens this help screen.

## Quick Tips

- If you are a beginning user, you can just keep the default values here
  until you learn more about using global options.
- If you are an advanced user, you can save time by creating good
  default values here.

## Related Information

- Related Help screen:
  [Media](https://docs.joomla.org/Help4.x:Media/en "Help4.x:Media/en").
- Tutorial: [Managing
  Media](https://docs.joomla.org/J4.x:Managing_Media/en "J4.x:Managing Media/en").
