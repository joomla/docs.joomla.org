<!-- Filename: J4.x:FatalError / Display title: FatalError -->

## Introduction

From time to time Joomla may display an error page instead of the page
you were expecting. There are two types of error pages:

- The system error page has a red background. It is invoked if there is
  a serious error before the site or administrator template is rendered.
- The template error page looks like the normal site or administrator
  template but the content area is replaced with an error message. This
  is invoked when the error occurs in content code.

### System Error Page

<img src="https://docs.joomla.org/images/9/9d/Joomla-j4-fatal.png"
class="thumbborder" decoding="async" data-file-width="800"
data-file-height="355" width="800" height="355"
alt="Joomla-j4-fatal.png" />

### Template Error Page

<img src="https://docs.joomla.org/images/6/6d/J4x-template-error.png"
class="thumbborder" decoding="async" data-file-width="800"
data-file-height="406" width="800" height="406"
alt="J4x-template-error.png" />

## How to Resolve

There are a number of possible reasons for fatal errors to occur. Here
are just a few:

- A change in your host, for example an updated PHP version that is not
  compatible with Joomla or one of your Extensions.
- A problem with disk space, memory usage or script time-out.
- A newly installed or enabled Extension that is not compatible with
  Joomla. A bad plugin may disable Administrator login!

### Enable Debug

If your Administrator interface **is** still working go to **Home
Dashboard **→** System panel **→** Global Configuration**. In the System
tab set *Debug System* to *Yes* and in the Server tab set *Error
Reporting* to *Maximum*. Then *Save & Close*.

If your Administrator interface is **not** working, edit the
*configuration.php* file in the root folder of your Joomla website.

1.  Change the permissions from *444* or *-r--r--r--* (no one has
    permission to write to the file) to *644* or *-rw-r--r--* (only the
    Owner has permission to write).
2.  Inside the file, set *\$debug* to *true* and *\$error_reporting* to
    *maximum*.
3.  *Save* the file.

With the changes made, reload the page that was causing the error. Now
you should see a stack trace. Example:

<img
src="https://docs.joomla.org/images/e/ef/J4x-template-error-stack-trace.png"
class="thumbborder" decoding="async" data-file-width="800"
data-file-height="393" width="800" height="393"
alt="J4x-template-error-stack-trace.png" />

The first item in the stack trace indicates where the error was
triggered. Sometimes that is enough to identify the faulty Extension.
Sometimes the faulty Extension is farther down the stack trace. It may
not mean much to you but the stack trace is invaluable to the experts
who answer questions in the Joomla Forums.

If you can identify the faulty Extension, disable it. You can do that
using the Administrator interface if it is working. Otherwise, use
phpMyAdmin to find the Extension in the *\#\_\_extensions* database
table and set its *enabled* value to *0*. You should not need to disable
any core Joomla Extensions.

## Forum Post Assistant

To help resolve problems you should download the
<a href="https://forumpostassistant.github.io/docs/"
class="external text" target="_blank"
rel="nofollow noreferrer noopener">Forum Post Assistant</a> (FPA) and
load it in the root of your Joomla website. The link to find it is also
near the top of each Joomla Forum page. The FPA is a stand-alone PHP
script that analyses your Joomla installation and tells you what might
be wrong. Again, it might not mean much to you but the experts who
answer questions in the Forums may ask to see it.

## Cleaning Up

When your problem is resolved:

1.  Go to **Administrator **→** Dashboard **→** System
    panel **→** Global Configuration**
2.  Select the System tab and set *Debug System* to *No*.
3.  Select the Server tab and set *Error Reporting* to *System Default*.
4.  *Save & Close*.
5.  Remove the Forum Post Assistant.

<img
src="https://docs.joomla.org/images/thumb/4/41/Stop_hand_nuvola.svg.png/25px-Stop_hand_nuvola.svg.png"
decoding="async"
srcset="https://docs.joomla.org/images/thumb/4/41/Stop_hand_nuvola.svg.png/38px-Stop_hand_nuvola.svg.png 1.5x, https://docs.joomla.org/images/4/41/Stop_hand_nuvola.svg.png 2x"
data-file-width="40" data-file-height="40" width="25" height="25"
alt="Stop hand nuvola.svg.png" />Warning!

Do not forget to set the *configuration.php* file back to read-only (444
or *r--r--r--*). That is an important part of the Joomla! security
concept. All you need to do is load and save the Global Configuration
form. Joomla will reset the permissions to *444*.
