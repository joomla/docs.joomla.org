<!-- Filename: J3.x:Updating_Joomla_(Update_Method) / Display title: Updating Joomla (Update Method) -->

This is the recommend method of updating a Joomla CMS website.

Not only is this the recommended method, it is the easiest method of
updating the Joomla CMS. Sometimes this method is referred to as a
***One click update***. If you are unable to use this method because of
specific use cases (distributions, languages, host speed), you can
update the Joomla CMS using the **[install
method](https://docs.joomla.org/J3.x:Updating_Joomla_(Install_Method) "Special:MyLanguage/J3.x:Updating Joomla (Install Method)")**.

This method is suitable for  

- All Joomla CMS **3.x.x** to **3.x.x** - updates (maintenance update)

This method is not suitable for  

- Joomla CMS **3.1.2** to **≥ 3.1.3** - see [Special Instructions for
  Version 3.1.2
  Upgrades](https://docs.joomla.org/J3.x:Detailed_instructions_for_updating_from_3.1.2_to_3.1.4 "Special:MyLanguage/J3.x:Detailed instructions for updating from 3.1.2 to 3.1.4")

## How to Update

Do you need to update your Joomla installation? If an update is
available there will be a message indicating an update with a button to
press.

<img
src="https://docs.joomla.org/images/thumb/3/35/J3-update-control-panel-notify-en.PNG/450px-J3-update-control-panel-notify-en.PNG"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/3/35/J3-update-control-panel-notify-en.PNG 1.5x"
data-file-width="571" data-file-height="331" width="450" height="261"
alt="J3-update-control-panel-notify-en.PNG" />

You will also see a notice in the 'left sidebar' at the bottom.

<img
src="https://docs.joomla.org/images/a/a2/J3-update-control-panel-notify-alternative-en.PNG"
class="thumbborder" decoding="async" data-file-width="229"
data-file-height="209" width="229" height="209"
alt="J3-update-control-panel-notify-alternative-en.PNG" />

Joomla will notify you on your Administrator home page (control panel)
when an update is available. It will not automatically do the update for
you. It is the responsibility of the administrator to start and verify
the update was successful.

The following are the recommended steps needed to complete an update to
your Joomla CMS installation.

### Step 1: Backup

Make sure you have a **CURRENT BACKUP** of your site! In many cases,
your host will make periodic site backups. **DO NOT** rely on these
backups! It is **STRONGLY RECOMMENDED** you preform your own backup.

### Step 2: The Update Component

You will need to navigate to the update component. Click the update
'button' or the 'sidebar link' previously shown above or use the main
menu, select and click **Components **→** Joomla! Update**. You will now
see the below image.

<img
src="https://docs.joomla.org/images/2/26/J3-joomla-update-component-en.PNG"
class="thumbborder" decoding="async" data-file-width="975"
data-file-height="389" width="975" height="389"
alt="J3-joomla-update-component-en.PNG" />

Select, 'Write files directly' (default) or 'Write files using FTP' as
the method of uploading the new core files to your installation. Did you
backup? See Step 1 above.

### Step 3: Start the Update

Click the "Install the Update" button and the updating will begin.

<img
src="https://docs.joomla.org/images/0/08/J3-updating-your-joomla-files-en.PNG"
class="thumbborder" decoding="async" data-file-width="787"
data-file-height="390" width="787" height="390"
alt="J3-updating-your-joomla-files-en.PNG" />

When the update has completed, you will see a success notice with the
new version.

<img
src="https://docs.joomla.org/images/c/c0/J3-jooml-update-successful-en.PNG"
class="thumbborder" decoding="async" data-file-width="659"
data-file-height="301" width="659" height="301"
alt="J3-jooml-update-successful-en.PNG" />

When the update has completed you may need to empty your browser cache
to adjust for any template CSS changes.

## Joomla Update Configurations

In most cases you will not have to change these settings. The default
choices make sure your Joomla CMS installation is always being checked
against the correct update server and the appropriate person with
administrator access can update the installation.

The options screen is reached by clicking the 'options' button on the
main Joomla! Update screen. Once you click the 'options' button, you
will see the following image.

<img
src="https://docs.joomla.org/images/1/18/J3-update-component-configure-server-en.PNG"
class="thumbborder" decoding="async" data-file-width="818"
data-file-height="438" width="818" height="438"
alt="J3-update-component-configure-server-en.PNG" />

### Setting Update Server

The update notice you will see on the home administrator depends on the
setting of the Update Server and caching.

<img
src="https://docs.joomla.org/images/9/91/J3-update-component-configure-server-options-en.PNG"
class="thumbborder" decoding="async" data-file-width="459"
data-file-height="260" width="459" height="260"
alt="J3-update-component-configure-server-options-en.PNG" />

The first option shows the latest update of the major release in use
(default). The second option shows the latest update of the latest
major. Caching may cause not detecting an available update and you must
purge the cache.

### Permissions

<img
src="https://docs.joomla.org/images/f/fe/J3-update-component-configure-server-permissions-en.PNG"
class="thumbborder" decoding="async" data-file-width="846"
data-file-height="494" width="846" height="494"
alt="J3-update-component-configure-server-permissions-en.PNG" />
