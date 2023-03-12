<!-- Filename: How_to_debug_SMTP_mail_in_Joomla_4 / Display title: How to debug SMTP mail in Joomla 4 -->

Go to **Home Dashboard **→** Site **→** Plugins**. Enable the *System -
Debug* plugin and configure it with the following setting, which
restricts the debug output to your own login session at both the Backend
and the Frontend. If you do not want to login to the Frontend as Super
User, create a unique user group for your testing activities and select
that user group from the list of allowed user groups:

- Allowed Groups: Super Users

Save this setting.

Go to **Home Dashboard **→** System **→** Global
Configuration **→** System tab **→** Debug**. Set *Debug System* to
*Yes*.

Go to **Home Dashboard **→** System **→** Global
Configuration **→** Server tab**. Set *Error Reporting* to *Maximum*.

Go to **Home Dashboard **→** System **→** Global
Configuration **→** Logging tab**. Note the contents of *Path to Log
Folder*, usually *\[something\]/administrator/logs*. Also select *Log
Almost Everything*.

Go to the *Custom logging* section and the *Log Categories* field. Enter
*mail* (no quotation marks) into this field.

Save the settings.

In **Home Dashboard **→** System **→** Global Configuration **→** Server
tab**, press *Send Test Email*. Alternatively, log into the Frontend
using your user name in the unique user group meant for testing
activities and perform the function that will send an email.

Once the testing is finished, download the log file
*administrator/logs/everything.php*. If the website was migrated from
Joomla 2.5, the log file *everything.php* may reside in the *logs*
folder at the top level of the Joomla folder.
