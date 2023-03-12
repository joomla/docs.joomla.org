<!-- Filename: Pre-Update_Check / Display title: Pre-Update Check -->

New to Joomla! 3.10.x is the Pre-Update Check. This view of the Joomla
Update component shows technical specifications of the server the site
is on and core and third-party extensions that use the Update Server in
a list form.

**To navigate to the Update-screen:**

- Click the 'Live Update' tab.

**To navigate to the Pre-Update Check-screen:**

- Click in the top bar **Components **→** Joomla! Update** menu item.
- If you don´t see the Pre-Update Check-screen, click on the **Check for
  Updates** button or clear cache and refresh the page.
- Also verify that the site is on the Joomla Next Update Channel.
  **Administrator **→** Components **→** Joomla
  Update **→** Options **→** Update Channel**. Select *Joomla Next*,
  then *Save & Close*.

## Technical Specifications

The top portion of the Pre-Update Check shows whether your current
server environment is compatible with the current target version Joomla
for both the required PHP and database settings. The data on the
<a href="https://downloads.joomla.org/technical-requirements"
class="external text" target="_blank"
rel="noreferrer noopener">Technical Requirements</a> page show the specs
we are checking against.

<img
src="https://docs.joomla.org/images/thumb/b/b0/Php_and_database_settings-en.png/800px-Php_and_database_settings-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/thumb/b/b0/Php_and_database_settings-en.png/1200px-Php_and_database_settings-en.png 1.5x, https://docs.joomla.org/images/thumb/b/b0/Php_and_database_settings-en.png/1600px-Php_and_database_settings-en.png 2x"
data-file-width="1890" data-file-height="996" width="800" height="422"
alt="Required PHP and Database Settings portion of the Pre-Update Check Component" />
<img
src="https://docs.joomla.org/images/thumb/d/d1/Recommended_php_settings-en.png/800px-Recommended_php_settings-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/thumb/d/d1/Recommended_php_settings-en.png/1200px-Recommended_php_settings-en.png 1.5x, https://docs.joomla.org/images/thumb/d/d1/Recommended_php_settings-en.png/1600px-Recommended_php_settings-en.png 2x"
data-file-width="1869" data-file-height="733" width="800" height="314"
alt="Recommended PHP Settings portion of the Pre-Update Check Component" />

What's important is to check if anything is red and not compatible with
Joomla 4.x. If it isn't, you'll need to talk to your host or change
hosts before migrating to Joomla 4.x. During a migration is a great time
to change hosts. See the [Migration
Funnel](https://docs.joomla.org/Why_Migrate "Special:MyLanguage/Why Migrate")
for more information on planning and step-by-step instructions.

## Extensions Pre-Update Check

The extension portion of the Pre-Update Check component pulls
third-party extensions.

The list is broken into sections based on the *targetplatform* tag, the
extensions you are or are not using. For developers, see [Deploying an
Update
Server](https://docs.joomla.org/Deploying_an_Update_Server "Special:MyLanguage/Deploying an Update Server")
for more information about these tags and how to deploy an Update
Server. For more information about the Joomla Update System, see the <a
href="https://extensions.joomla.org/support/knowledgebase/submission-requirements/joomla-update-system-requirement/"
class="external text" target="_blank" rel="noreferrer noopener">Joomla!
Update System Requirement</a> and <a
href="https://docs.joomla.org/Help39:Extensions_Extension_Manager_Update"
class="external text" target="_blank"
rel="noreferrer noopener">Extensions Extension Manager Update</a> pages.

By clicking the **More Detail** link to the right in each colour
heading, you can see additional information about the extensions
installed on your site.

<img
src="https://docs.joomla.org/images/thumb/4/40/Pre_upgrade_checker_error-en.png/800px-Pre_upgrade_checker_error-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/thumb/4/40/Pre_upgrade_checker_error-en.png/1200px-Pre_upgrade_checker_error-en.png 1.5x, https://docs.joomla.org/images/thumb/4/40/Pre_upgrade_checker_error-en.png/1600px-Pre_upgrade_checker_error-en.png 2x"
data-file-width="1850" data-file-height="648" width="800" height="280"
alt="Update Information Unaviable" />

The extensions listed here do not support yet the Joomla Update system
or atleast do not have an targetplatform tag that indicates support for
the selected target Joomla Version. (see [Deploying an Update
Server](https://docs.joomla.org/Deploying_an_Update_Server "Deploying an Update Server"))
Please contact the developer of the listed extensions to make sure they
are compatible with 4.x

<img
src="https://docs.joomla.org/images/thumb/1/12/Pre_upgrade_checker_warning-en.png/800px-Pre_upgrade_checker_warning-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/thumb/1/12/Pre_upgrade_checker_warning-en.png/1200px-Pre_upgrade_checker_warning-en.png 1.5x, https://docs.joomla.org/images/thumb/1/12/Pre_upgrade_checker_warning-en.png/1600px-Pre_upgrade_checker_warning-en.png 2x"
data-file-width="1874" data-file-height="434" width="800" height="185"
alt="Update Required" />

The extensions listed here require an update to work correctly on 4.x.
Please contact the developer of the listed extensions to make sure
whether you have to update the component before or after the upgrade.

<img
src="https://docs.joomla.org/images/thumb/1/19/Pre_upgrade_checker_ok-en.png/800px-Pre_upgrade_checker_ok-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/thumb/1/19/Pre_upgrade_checker_ok-en.png/1200px-Pre_upgrade_checker_ok-en.png 1.5x, https://docs.joomla.org/images/thumb/1/19/Pre_upgrade_checker_ok-en.png/1600px-Pre_upgrade_checker_ok-en.png 2x"
data-file-width="2038" data-file-height="600" width="800" height="236"
alt="No Update Required" />

The extensions listed here claim to be 4.x compatible and no update is
required.

## What is it about that *Potential Upgrade Issue*

Plugins with the type ('system', 'user', 'authentication', 'actionlog',
'twofactorauth') could be triggered while we are processing the upgrade.
When there is a critical issue within that plugins that could result
into a broken upgrade and make the site unusable. For that reason any
plugin from that type that is not explicite listed as compatible has to
be even more carefully reviewed before you hit the upgrade button. It is
**strongly** recommended to disable the plugins in question and to check
with the original developer.

<img
src="https://docs.joomla.org/images/thumb/1/1e/Pre_upgrade_checker_popup-en.png/200px-Pre_upgrade_checker_popup-en.png"
decoding="async"
srcset="https://docs.joomla.org/images/thumb/1/1e/Pre_upgrade_checker_popup-en.png/300px-Pre_upgrade_checker_popup-en.png 1.5x, https://docs.joomla.org/images/thumb/1/1e/Pre_upgrade_checker_popup-en.png/400px-Pre_upgrade_checker_popup-en.png 2x"
data-file-width="492" data-file-height="446" width="200" height="181"
alt="The popup warning for potencial upgrade issue" />

On the *Live Update* Tab you will be preseted again with the full list
of potential breaking extensions.

<img
src="https://docs.joomla.org/images/thumb/b/b1/Live_upgrade_tab_errors-en.png/800px-Live_upgrade_tab_errors-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/thumb/b/b1/Live_upgrade_tab_errors-en.png/1200px-Live_upgrade_tab_errors-en.png 1.5x, https://docs.joomla.org/images/thumb/b/b1/Live_upgrade_tab_errors-en.png/1600px-Live_upgrade_tab_errors-en.png 2x"
data-file-width="2042" data-file-height="787" width="800" height="308"
alt="The Live Update message on potential breaking extensions" />

It is **strongly** recommended to disable all extensions including the
plugins listed here before you run the upgrade because the extensions
listed here seem not to be compatible with your target version but could
break your upgrade.

You know what you are doing? You want to choose to ignore the warnings
and run the upgrade anyway you can do so by checking the checkbox. As
that is taking your site at risk of breaking without an easy recovery
this is the last time to remind you to take a backup!

## Questions and Answers

Let's break this down into some questions and answers.

**Q: What do the tags mean?**

A: The green **No Update Required** tag means that the extension has
been tagged by the developer that the extension as ready for Joomla 4.
It *should* migrate with the one-click from 3.10.x to 4.x. Verifying
with the developer is suggested.

The red **Update Information Unavailable** tag means that the extension
has not added compatibility information the extension. Check with the
developer on the migration path from 3.10.x to 4.x.

The yellow/orange **Yes (x.x.x)** tag means that the extension has been
tagged by the developer that the extension may need an update in order
to be compatible with Joomla 4. Update the extension and see if it turns
to a green Yes. If it doesn't, check with the developer on the migration
path from 3.10.x to 4.x.

The gray **Missing Compatibility Tag** means that the extension doesn't
have a tag **or** does not use the Update Server. The developer hasn't
said yes or no or needs an update. In some cases, a package may have
been installed and the component portion has a tag but the additional
plugins or modules are missing tags. As always, you'll need to check
with each extension developer to verify the migration path from 3.10.x
to 4.x.

**Q: What about the Joomla core components?**

A: Joomla core extensions will migrate from 3.10.x to 4.x on the
one-click with these exceptions:

The language packs are not yet ready for Joomla 4 (as of September
2020). Over time, they will be. If your site depends on other language
packs, wait to migrate until all the language packs are ready.

The Weblinks component is not yet ready for Joomla 4 (as of September
2020). If you're going to continue using Weblinks in your Joomla 4 site,
wait to migrate until the Weblinks component is ready.

**Q: What about templates?**

A: Because of the changes in Joomla 4, your template may or may not be
compatible with Joomla 4. The core templates like Protostar, Beez3,
Beez5, and so on will *convert* to the new Cassiopeia template on the
one click and the older templates will be completely removed. If you're
using a club template from a third-party developer that is not
compatible with Joomla 4, you'll need to change your default template to
Protostar (or Beez3) before you do the one-click. If you have older
administrator templates or core templates, it's recommended to uninstall
all of them except whichever of the core templates you will set as
default. This includes Bluestork, Hathor, the other beez templates. You
will keep Isis as the administrator template. You will keep either your
compatible third-party template, Protostar or Beez3 as default. You will
uninstall the rest.

**Q: Can I uninstall plg_content_geshi?**

A: Yes. This is leftover from the 2.5 life cycle and **must** be
uninstalled.

**Q: What about all that FOF, fef, etc.?**

A: Many extensions in the red or yellow/orange headings **will/may**
make it through the one-click and migrate fine. It is recommended that
you go to Extensions→Manage→Manage and check all extensions. Typically
the ones authored by Joomla will migrate on the one click. Typically the
Akeeba extensions will too. Again, check with extension developers to
verify the migration path on **all** third-party extensions.

**Q: Does the Extensions Pre-Update Check show all the extensions
installed on my site?**

A: The Pre-Update Check will show all extensions. Only extensions that
use the Update Server are given compatibility information. Those
extensions that do not use the Update Server will show in the list with
the **Missing Compatibility Tag**.

## Summary

From a migration perspective, it is my belief that the Pre-Update Check
should be used a guide. You'll want to have a second tab open with
*Extensions→Manage→Manage* open in order to uninstall any extensions or
check who they're authored by so you can contact third-party extension
developers on the migration path they've established to migrate their
extensions.
