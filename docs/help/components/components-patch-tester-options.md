<!-- Filename: Help4.x:Components_Patch_Tester_Options / Display title: Components Patch Tester Options -->

## Description

The Joomla! Patch Tester is used by Testers to check that code patches
produced by Developers actually do what they are supposed to do without
unwanted side effects. The Options page is used to set up the Github
connection.

More Information:

- <a
  href="https://brian.teeman.net/joomla/873-a-dummies-guide-to-joomla-bug-testing"
  class="external text" target="_blank"
  rel="nofollow noreferrer noopener">A Dummies Guide to Joomla Bug
  Testing</a>

## How to Access

- Select **Components **→** Patch Tester** from the Administrator menu.
  - Click the *Options* button on the Toolbar.

## Screenshot

<img
src="https://docs.joomla.org/images/a/a3/Help-4x-Component-Patch-Tester-Options-screenshot-en.png"
decoding="async" data-file-width="800" data-file-height="290"
width="800" height="290"
alt="Help-4x-Component-Patch-Tester-Options-screenshot-en.png" />

## Form Fields

### GitHub Repository Tab

- **GitHub Repository.** The default is Joomla! CMS. Use it.

### Github Authentication Tab

You need a Github account and a Github Token. All free - see the GitHub
Authentication Tab for details.

<img
src="https://docs.joomla.org/images/5/5c/Help-4x-Component-Patch-Tester-Options-github-authentication-subscreen-en.png"
decoding="async" data-file-width="600" data-file-height="459"
width="600" height="459"
alt="Help-4x-Component-Patch-Tester-Options-github-authentication-subscreen-en.png" />

- **GitHub Authentication Method.** Choose the Token method. The
  Credentials method will not work from September 2020.

<!-- -->

- **GitHub Token.** Paste in the Token obtained from GitHub.

### CI Server Settings Tab

These settings are used for automated testing. Use the defaults for
manual testing

<img
src="https://docs.joomla.org/images/7/7c/Help-4x-Component-Patch-Tester-Options-ci-server-settings-subscreen-en.png"
decoding="async" data-file-width="600" data-file-height="257"
width="600" height="257"
alt="Help-4x-Component-Patch-Tester-Options-ci-server-settings-subscreen-en.png" />

- **CI Server Address.** Default:
  <a href="https://ci.joomla.org" class="external free" target="_blank"
  rel="noreferrer noopener">https://ci.joomla.org</a>
- **Switch CI Integration.** Default: Off.

### Permissions Tab

It is most unlikely that a Tester will wish to change the Permissions
for this Component!

<img
src="https://docs.joomla.org/images/b/b6/Help-4x-Component-Patch-Tester-Options-permissions-subscreen-en.png"
decoding="async" data-file-width="600" data-file-height="518"
width="600" height="518"
alt="Help-4x-Component-Patch-Tester-Options-permissions-subscreen-en.png" />

To change the permissions for this extension, do the following.

- Select the **Group** by clicking its title located on the left.
- Find the desired **Action**. Possible Actions are:
  - **Configure ACL & Optons**. Users can edit the options and
    persimissions of this extension.
  - **Access Administration Interface**. Users can access user
    administration interface of this extension.

<!-- -->

- Select the desired permission for the action you wish to change.
  Possible settings are:
  - ***Inherited:*** Inherited for users in this Group from the Global
    Configuration permissions of this extension.
  - ***Allowed:*** Allowed for users in this Group. Note that, if this
    action is Denied at one of the higher levels, the Allowed permission
    here will not take effect. A Denied setting cannot be overridden.
  - ***Denied:*** Denied for users in this Group.
- Click **Save** in **Toolbar** at top. When the screen refreshes, the
  Calculated Setting column will show the effective permission for this
  Group and Action.

## Toolbar

At the top of the page you will see the toolbar shown in the Screenshot
above. The functions are:

- **Save.** Saves the item and stays in the current screen.

<!-- -->

- **Save & Close**. Saves the item and closes the current screen.

<!-- -->

- **Close**. Closes the current screen and returns to the previous
  screen without saving any modifications you may have made.

<!-- -->

- **Help**. Opens this help screen.

## Quick Tips

## Related Information

- [Component Patchtester for
  Testers](https://docs.joomla.org/Component_Patchtester_for_Testers "Component Patchtester for Testers")
- [Testing Joomla
  Patches](https://docs.joomla.org/Testing_Joomla!_patches "Testing Joomla! patches")
- <a
  href="https://www.pizza-bugs-fun.com/en/guides?view=article&amp;id=41&amp;catid=2"
  class="external text" target="_blank"
  rel="nofollow noreferrer noopener">Manual Patch Tester</a>
