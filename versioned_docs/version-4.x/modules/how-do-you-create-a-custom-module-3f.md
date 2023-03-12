<!-- Filename: How_do_you_create_a_custom_module%3F / Display title: How do you create a custom module? -->

## Quick Overview

To insert a custom module in your website, go to
**Administrator **→** Extensions **→** Modules** and select the *New*
icon. You will see a list of available modules. Select the *Custom* icon
and edit the module.

## Detail

A module is a special program, or even a special type of article, that
can be displayed in the module positions available in your website's
template.

To see all of your template's available module positions, add the code
*?tp=1* after one of your page's URLs. For example,
*http://www.yoursite.com/?tp=1*

To see the list of all the modules available on your site, go to
**Administrator **→** Extensions **→** Modules**.

Before you create a new module, look at an example:

**Login Form**

It is of a particular type: *mod_login*.

**Title** - The title of this module.

**Show Title** - Display or hide the title.

**Position** - This relates to your available Module Positions mentioned
above.

**Order** - The order in which the module is displayed if there is more
than one module in the selected position. (You control this after
*saving* the module and looking at all the modules for this position.
See **Order of the Modules for a Position**, below)

**Menu Assignment** - This is where you choose where this module will be
displayed. For example, the login form might only be displayed on the
Home page.

**Options** - Some modules have parameters associated with them that are
set from this tab.

## Create Your New Custom Module

To display some information on some or all pages, in say the left
column, you can go to the Module Manager and create a New custom module.

In **Administrator **→** Extensions **→** Modules** select the *New*
button. Then choose *Custom*.

- Enter a title
- Choose to show or hide the title
- Select the module position
- Set the *Status* to *Published*
- Switch to the *Menu Assignment* tab and designate the pages on which
  the module will be displayed

### Advanced Options

Note that Module Class Suffix is a setting that will relate to your
template. Refer to the template's documentation to use this parameter.

### Try It Out

Put in a test module and see what you can achieve. Set Status to
*Unpublished* to turn it off if you are not ready to display it to the
world.

### Order of the Modules for a Position

In **Administrator **→** Extensions **→** Modules**, restrict which
modules you are looking at by choosing **Search Tools **→** Select
Position**. Enable the drag and drop ordering tool by selecting the up
and down arrows icon at the top of the far left column. You can now use
your cursor to grab one of the first column icons to reorder the
modules.

### Access

You use this to control who can see a module. For example, the User Menu
module might have the access set to *Registered*. This means that this
module is only seen when a registered user is logged in.

As a Super User, you can restrict the Access level to *Special*. Then
only you and the other Administrators will see a module when you are
logged in on the front of the site.
