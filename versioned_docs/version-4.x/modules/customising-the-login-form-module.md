<!-- Filename: Customising_the_Login_Form_module / Display title: Customising the Login Form module -->

## What does the Login Form module do?

<img
src="https://docs.joomla.org/images/6/6f/Login_module_example-en.png"
class="thumbimage" decoding="async" data-file-width="168"
data-file-height="232" width="168" height="232"
alt="Login module example-en.png" />

The Login Form module presents site visitors with a form with username
and password fields. If the user enters a valid username/password
combination they will be granted access to additional resources on your
website. Which additional resources they will have access to can be
configured separately. See
<a href="https://forum.joomla.org/viewtopic.php?t=376371"
class="external text" target="_blank"
rel="noreferrer noopener">restricting user access to resources</a> for
more information.

Once logged in, the Login Form module presents the user with a Logout
button. Logged in users who are inactive for a predetermined period of
time will be automatically logged out.

To be visible to site visitors the Login Form module must be enabled and
assigned to one or more web pages on your Joomla! site.

The Login Form module will appear in whatever module position it is
assigned to in the current template. It is also possible to have a Login
Form that will appear in place of regular content when a Menu Item is
clicked. To learn how to do this see [Creating a Login Form menu
item](https://docs.joomla.org/Screen.menus.edit.15#Internal_Link_-_User "Special:MyLanguage/Screen.menus.edit.15").

## To change the Login Form module settings

To change settings which control the information shown in the Login Form
module and some aspects of its behaviour, do this:

1.  Log in to the Administrator back-end. To learn how to do this read:
    [Logging in or out of the Administrator
    back-end](https://docs.joomla.org/Logging_in_or_out_of_the_Administrator_back-end "Special:MyLanguage/Logging in or out of the Administrator back-end").
2.  Click the **Extensions **→** Modules** menu item.
3.  From the list of Modules find the type one called "Login". There may
    be several pages of Modules listed so you might need to look on
    subsequent pages. You can make the search easier by clicking the
    drop-down list containing *Select Type* and clicking the "Login"
    item (they are listed in alphabetical order).
4.  Click the Module Name, ie. **Login Form**.
5.  You will see the "Module: \[Edit\]" screen which contains four
    groups of fields: Module, Menu Assignment, Advanced and Module
    Permissions.
6.  Make the changes you need to make.
7.  Click the **Save** or **Save & Close** toolbar button to implement
    the new settings:
    - The **Save** toolbar button will save your changes but leave you
      in the Module Edit screen.
    - The **Save & Close** toolbar button will save your changes and
      return you to the Module list screen.
8.  You should see a green message: "Module successfully saved" which
    confirms that your changes have been saved.

## To enable the Login Form module

<img
src="https://docs.joomla.org/images/thumb/b/b5/Login_module_j39.png/300px-Login_module_j39.png"
class="thumbimage" decoding="async"
srcset="https://docs.joomla.org/images/thumb/b/b5/Login_module_j39.png/450px-Login_module_j39.png 1.5x, https://docs.joomla.org/images/thumb/b/b5/Login_module_j39.png/600px-Login_module_j39.png 2x"
data-file-width="900" data-file-height="520" width="300" height="173" />
<a href="https://docs.joomla.org/File:Login_module_j39.png"
class="internal" title="Enlarge"></a>Login Module in Module Manager

To enable Login functionality on your website, the Login Form module
must be published. To publish the Login Form module:

1.  Log in to the Administrator back-end.
2.  Click the **Extensions **→** Modules** menu item.
3.  Locate the module called "Login Form".
4.  If the Status is a green tick, it is already enabled. If the Status
    is a red cross, it is currently disabled. Click on the red cross to
    enable.

To learn more see [Changing the Login Form module
settings](https://docs.joomla.org/Changing_the_Login_Form_module_settings "Special:MyLanguage/Changing the Login Form module settings");

### See also

- [Logging in or out of the Administrator
  back-end](https://docs.joomla.org/J3.x:Logging_in_or_out_of_the_Administrator_back-end "Special:MyLanguage/J3.x:Logging in or out of the Administrator back-end")
- [Setting user registration
  policy](https://docs.joomla.org/Setting_user_registration_policy "Special:MyLanguage/Setting user registration policy")

## To assign the Login Form module to selected web pages

You can make the Login Form module appear on one or more pages by
assigning it to selected Menu Items. This is done using the fields in
the Menu Assignment group on the Module Edit screen. To learn how to do
this see [Changing the Login Form module
settings](https://docs.joomla.org/Changing_the_Login_Form_module_settings "Special:MyLanguage/Changing the Login Form module settings").
The following list describes the settings in the Menu Assignment group.

- **Menus**: Is a radio button field with the following options:
  - **All**: The Login Form module will appear on all screens.
  - **None**: The Login Form module will not appear on any screens.
  - **Select Menu Item(s) from the List**: The Login Form module will
    appear on those screens selected in the **Menu Selection** field.
- **Menu Selection**: Shows a list of all the Menus and Menu Items from
  which one or more may be selected. This field is only used if the
  **Menus** field is set to **Select Menu Item(s) from the List**. To
  select more than one Menu Item on the list, you *Shift-click* to
  select a range of items, or *Control-click* to select or deselect
  individual items.

## To customise the information shown in the Login Form module

If you wish to customise the information in the Login Module you will
need to [navigate to the login module edit page in the Administration
section of
Joomla](https://docs.joomla.org/Changing_the_Login_Form_module_settings "Changing the Login Form module settings").
Then consult [the help screen
page](https://docs.joomla.org/Help310:Extensions_Module_Manager_Login "Help310:Extensions Module Manager Login")
