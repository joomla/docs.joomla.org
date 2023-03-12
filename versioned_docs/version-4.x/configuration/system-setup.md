<!-- Filename: J4.x:System_Setup / Display title: System Setup -->

## Global Configuration

The System Setup panel contains a link to the Global Configuration form.
You may also access the form from the Home Dashboard. The form contains
options that apply to your site as a whole. On installation the options
are populated by mostly suitable default values. If an option turns out
to be unsuitable for your site you can change it permanently. Or you may
need to make temporary changes for trouble-shooting purposes.

## Inline Help

The form has a **Toggle Inline Help** button in the Toolbar. Try it -
information about some of the fields will appear or disappear with each
click of the button. That often avoids the need to look up other
information in Help screens or Tutorials like this one.

## The configuration.php file

In the root of your Joomla installation is a file named
configuration.php. It is created during installation and is never
overwritten by an update because a file with that name is not present in
any installation or update package. The file contains the options you
set in the Global Configuration form. It is assigned **read only**
permissions in most hosting environments so normally you should not edit
it with a text editor. When you make a change and save the Global
Configuration form Joomla changes the permissions, writes out the new
options and then changes the permissions back to read only. If something
goes badly wrong you may be advised to edit this file to make some
changes manually. In that case you need to change the file permissions
to read-write yourself.

## Site / Cookie

Under the Site tab there is a Cookie panel. Both fields are normally
empty. However, if you run multiple Joomla installations from one parent
folder you may wish to set the Cookie Path the folder name of the
installation to avoid clashes, sometimes in third party extensions.

If you enter anything in the Cookie Domain field you will find that
after logout you will be unable to login again. This is one instance
where you will have to edit configuration.php with a text editor, find
the line that says *public \$cookie_domain = 'garbage';* and remove
whatever is present between quotation marks, garbage in this example.

## Trouble Shooting

If your site displays an error message you will normally have little
information on what has gone wrong. There are two things to do in the
first instance:

- In the **System / Debug** panel set Debug System to Yes.
- In the **Server / Server** panel set Error Reporting to Maximum.

Save and go back to the page that was displaying the error. This time
you will see a Stack Trace, a list of points in the code where the error
was triggered. With that information you, or someone in the Joomla
Forums, may be able to figure out what went wrong. Take a screen shot of
the stack trace for your Forum question.

## Debug Mode

Setting Debug to Yes has several effects:

- Joomla delivers uncompressed versions of javascript and css files that
  are human readable for debugging purpose.
- At the bottom left of the screen there is a button to open a panel of
  information about your site. This is a potential security risk so only
  stay in Debug mode for long enough to obtain a stack trace.

## Session Handler

In the System / Session panel there is an option to select a Session
Handler. Database is the deafult because it is the only one guaranteed
to work. If it did not work then Joomla itself would not even install.
If you change the Session Handler and your site crashes you need to edit
configuration.php and set *public \$session_handler = 'database';*.

## Mail

In the Server / Mail panel the default settings that have Mailer set to
PHP Mail are likely to work on a hosting service but not on localhost on
your own computer. For localhost change the Mail to SMTP and set the
SMTP Host to the one you use for outgoing mail in your mail client. You
need to use the same credentials as your mail client uses. Select the
**Send Test Mail** button to check if it is working. Joomla may return a
green success message but the mail my never get through.

## Logging

It is sometime helpful to use logging to help with debugging but it
should not be used on a working site. In the Logging panel set **Log
Almost Everything** to **Yes** and in the **Custom Logging** panel
remove the **All** category and select the **Error** category. Load the
page that is giving trouble and then use a text editor to open
administrator/logs/error.php (just look for files in the logs folder and
select the most obvious).

The error log may be similar to the stack trace mentioned previously. It
may help you to identify the source of a problem.

**Set Log Almost Everything to No when done!**
