<!-- Filename: Why_do_the_pop_ups_in_your_WYSIWYG_editor_not_work_or_show_gibberish%3F / Display title: Why do the pop ups in your WYSIWYG editor not work or show gibberish? -->

Depending on the editor, this problem may occur when trying to edit the
html, insert tables or perform a similar function that requires
javascript.

Most likely the problem with the livesite...

You look in your site configuration (General Configuration, select the
Server tab) you will see that the livesite is given. Usually it is
either www.mydomain.com or mydomain.com.

When you log into your site, you must log in from the exact livesite. if
you don't the javascript in your editor will not work.

One way to deal with this is to put a redirect from, for example,
mydomain.com to www.mydomain.com so that you and your users always login
from the correct url. You can do this with .htaccess.
