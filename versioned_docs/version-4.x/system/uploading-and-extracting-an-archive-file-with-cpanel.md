<!-- Filename: Uploading_and_extracting_an_archive_file_with_CPanel / Display title: Uploading and extracting an archive file with CPanel -->

Instead of FTP or Secure Shell, you can use CPanel to transfer
installation or upgrade files to your Joomla installation location.

## CPanel File Manager

Using your browser, log in to the CPanel for your site.

- Click on "File Manager" icon
- Navigate to the directory where you want to place the archive file.
  e.g. `acountname/public_html/domain_name`

## Upload the Archive File

To upload the archive file to your web server:-

- Click on "Upload Files".
- In the popup window navigate to the archive file. For example, a
  typical archive file would have a file extension of .zip, .tar.gz or
  .tar.bz2.
- Click on the "Okay" or "Save" button to upload the file.

## Extract the Archive File

<img
src="https://docs.joomla.org/images/thumb/4/41/Stop_hand_nuvola.svg.png/25px-Stop_hand_nuvola.svg.png"
decoding="async"
srcset="https://docs.joomla.org/images/thumb/4/41/Stop_hand_nuvola.svg.png/38px-Stop_hand_nuvola.svg.png 1.5x, https://docs.joomla.org/images/4/41/Stop_hand_nuvola.svg.png 2x"
data-file-width="40" data-file-height="40" width="25" height="25"
alt="Stop hand nuvola.svg.png" />Warning!

Extracted files will overwrite the current files with the same name.
Please make sure you have a backup before overwriting your current
files.

To extract the contents of the archive file:-

- Click on the uploaded file.
- Click on the "Extract File Contents" option on the file manager
  interface. The files will then be extracted.

## Notes

- Some versions of cPanel will only overwrite the old files if you have
  downloaded the tar.gz version of the upgrade package.
