<!-- Filename: Using_an_FTP_client_to_upload_files / Display title: Using an FTP client to upload files -->

Since many hosting companies do not allow their users shell/local access
to their files, users wishing to send (upload) new files to their
hosting space must make use of a File Transfer Program.
<a href="https://en.wikipedia.org/wiki/FTP_client" class="extiw"
title="wikipedia:FTP client">FTP</a> clients allow users to upload files
that have been locally edited to a server. There are a variety
<a href="https://en.wikipedia.org/wiki/FTP_client" class="extiw"
title="wikipedia:FTP client">FTP</a> clients available and
<a href="https://en.wikipedia.org/wiki/Comparison_of_FTP_clients"
class="extiw" title="wikipedia:Comparison of FTP clients">this chart</a>
nicely details the strengths of numerous popular programs, many of which
are open source and/or free to download.

If you are using Firefox, may we suggest
<a href="http://fireftp.mozdev.org/" class="external text"
target="_blank" rel="nofollow noreferrer noopener">FireFTP</a> as a
useful add-on. FireFTP will be used for this tutorial.

You may want enable the display of hidden files so that you don't lose
your .htaccess file (on a linux box) when you upload.

## Using Windows Explorer

If you have a Windows Operating System installed, you can use Windows
Explorer to connect to FTP.

### Launching Windows Explorer

The images that follow are taken from Windows Vista but the process
remains identical.

There are many ways to launch Windows Explorer. You can either just open
a folder or My Computer, or you can Hold down the **Windows Key** and
press **R**. Type **explorer.exe** and click **Run**.

<img src="https://docs.joomla.org/images/f/f2/Runexplorer-en.png"
decoding="async" data-file-width="427" data-file-height="233"
width="427" height="233" alt="Runexplorer-en.png" />

### Connecting to FTP

To connect to your FTP server, you will require the login details
provided to you by your host or administrator. In the address bar, type
**`ftp://USERNAME:PASSWORD@example.com`** replacing the username,
password and example.com with your own credentials. If you are running
Windows Vista, you may be required to double click on the address bar to
enable you to enter text. Press **enter** on your keyboard once you have
filled out the details correctly, and Windows Explorer will connect to
your FTP server.

If you entered the credentials incorrectly, you will receive an error
similar to this:

<img src="https://docs.joomla.org/images/2/2a/Errorwindowsftp-en.png"
decoding="async" data-file-width="496" data-file-height="345"
width="496" height="345" alt="Errorwindowsftp-en.png" />

If this is the case, re-enter your user details in the boxes provided
and try again.

You should see a page listing all of the folders/files on your server
similar to the following image:

<img
src="https://docs.joomla.org/images/a/ab/Connectedwindowsftp-en.png"
decoding="async" data-file-width="680" data-file-height="411"
width="680" height="411" alt="Connectedwindowsftp-en.png" />

*For security reasons `files/folders` on the example screenshot have
been removed*

### Transferring files

The benefit of using Windows Explorer as your FTP application is that
you will most likely be familiar with how transferring files work. The
interface is the same as you would if you were copying/moving to another
folder on your computer.

The trick is to work out which folder you will upload the files into. In
most cases, you will need to upload into a folder called
**"public_html"**, **"htdocs"** or **"www"**. You will need to check
this with your host or administrator.

To upload a file, simply drag the file from it's original folder into
the window that is connected to your FTP server. Here's an example:

<img src="https://docs.joomla.org/images/0/07/Transferftpwin-en.png"
decoding="async" data-file-width="1069" data-file-height="566"
width="1069" height="566" alt="Transferftpwin-en.png" />

### Closing your FTP connection

To close your FTP connection, simply close the Windows Explorer window.
To do this, press the red **X** on the top right hand corner of the
window, as per the following screenshot.

<img src="https://docs.joomla.org/images/8/86/Closewin-en.png"
decoding="async" data-file-width="380" data-file-height="201"
width="380" height="201" alt="Closewin-en.png" />

## Using FireFTP

<a href="http://fireftp.mozdev.org/" class="external text"
target="_blank" rel="nofollow noreferrer noopener">FireFTP</a> is a
great tool for FTP transfer if you use Mozilla FireFox.

### Launching FireFTP

To begin a file transfer, open FireFox then click **Tools \>\>
FireFTP**. FireFTP will open in a new tab.

<img src="https://docs.joomla.org/images/8/8d/Fireftpmenu-en.png"
decoding="async" data-file-width="226" data-file-height="280"
width="226" height="280" alt="Fireftpmenu-en.png" />

### Configure your FTP Details

If this is the first time you are connecting to an FTP server, you will
need to configure FireFTP to connect to the appropriate server. You will
need to obtain the details from your host or administrator.
