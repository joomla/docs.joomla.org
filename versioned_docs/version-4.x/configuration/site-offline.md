<!-- Filename: J4.x:Site_Offline / Display title: Site Offline -->

## Site Users Only

There may be occasions when you need to make your Joomla! website
unavailable to visitors for a short time. There is a simple **Site
Offline** configuration switch for this purposes that can be changed
from **No** to **Yes** as required. When set to Yes all site visitors
see an offline message page with login form:

<img
src="https://docs.joomla.org/images/8/84/J4x-configuration-site-offline-en.png"
class="thumbborder" decoding="async" data-file-width="495"
data-file-height="643" width="495" height="643"
alt="J4x-configuration-site-offline-en.png" />

The Site Offline switch does not apply to the administrator interface
and users who can login to the back end can continue to login to the
front end. Frontend login is denied only to users in the Registered,
Author, Editor and Publisher user groups.

## To Toggle Offline

- Select **Home Dashboard **→** Global Configuration** from the
  Administrator menu.
- In the **Site** tab set the **Site Offline** switch to **Yes**.
- You can then choose to use either
  - A custom message, which is the text in the Custom Message box. Or
    ...
  - The Site Language Default message, which is **This site is down for
    maintenance.  
    Please check back again soon.** in English or the equivalent in the
    selected Site language. Or ...
  - **Hide** to show no message at all.
- Optional: choose a banner image as in the screenshot above.
- Select **Save & Close** from the Toolbar.
- Do whatever maintenance needs to be done.
- Return to the Global Configuration form.
- Set the Site Offline switch to **No**.
- Select **Save & Close** from the Toolbar.

## All Users

You can limit access to your website by password protecting the Joomla
directory. Only users who know the directory access username and
password will be able to access the site. You can set up more than one
such user. With cPanel Hosting Control Panel:

- Login into your cPanel account.
- In the Files section select **Directory Privacy**.
- If the root of your site is in a sub-directory of public_html
  - Select the public_html directory
- Select the Edit button for the directory containing your site
  (public_html if your site is in the web root).
- Check the **Password protect this directory.** checkbox.
- Enter a name for the protected directory: the default may be
  sufficient.
- Select the **Save** button.
- There is a Success message page with a Go Back link, select it.
- Create a user for access to the protected directory.
- Enter a username
- Enter a password and repeat (remember it or write it down).
- Select **Save**.

Now, verify that the directory requires a password to access via the
web. When you visit your site you will be prompted for your directory
access username and password. They may be completely different from your
Joomla username and password.

To remove directory password protection:

- Login into your cPanel account.
- In the Files section select **Directory Privacy**.
- If the root of your site is in a sub-directory of public_html
  - Select the public_html directory
- Select the **Edit** button for the directory containing your site
  (public_html if your site is in the web root). It will now show a lock
  symbol and Yes under the Private heading.
- **Uncheck** the **Password protect this directory.** checkbox.
- Select the **Save** button.

To verify that password protection has been removed, use a different
browser to access your site or close and reopen your existing browser
and then access your site afresh.
