<!-- Filename: J4.x:Article_Check-out_and_Check-in / Display title: Article Check-out and Check-in -->

## About Check-out

Many Joomla websites have multiple users who have permission to edit
articles. To prevent two users from trying to edit the same article at
the same time each article has a **checked_out** database field to
indicate whether or not it is in use. It is set when an article is
opened for editing and unset when the edit form is closed using either
the `Save & Close` or `Close` buttons.

Sometimes an article edit form is not closed properly, for example by
using the browser back button or by having the user session time out. In
this case the checked_out field is left set. This is marked in article
lists with a small padlock icon. The padlock icon is also seen where an
edit link should be when logged in to the site.

To restore normal operation, checked out items need to be checked in.

## Article Check-in

There are several methods available to check-in an article.

- If you were the last person to edit the article you will be able to
  edit the article from the backend or frontend without the need to
  check-in.
- Contact the last person to edit the article to see if they are
  finished with it. You can hover the cursor above the padlock and the
  tooltip popup will display the name of the user who checked out the
  article.
- If you are a Super User or Administrator you can select the padlock
  icon to check in this one item.
- If you cannot check-in the item yourself ask a Super User or
  Administrator to do it.

## Global Check-in

If you are a Super User or Administrator you can use the Global Check-in
utility to select items to be checked in.

This utility should be used very carefully, especially in multi-user
environments. It checks in all previously checked out items, whether
they were checked out by you or not. Possible undesirable side effects
may be that multiple editors end up working on the same document. In
this case whoever clicks the save button last has their version saved as
the final copy.

You should also be aware that many other extensions have **checked_out**
fields. For example, modules and categories can be checked out for
editing and accidentally left in that state.

From the Administrator menu:

- Select **Home Dashboard **→** Global Check-in** or
  **System **→** Maintenance panel **→** Global Check-in**.
- The list shows the number of items checked out.

<img
src="https://docs.joomla.org/images/thumb/6/65/J4x-global-checkin-en.png/800px-J4x-global-checkin-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/6/65/J4x-global-checkin-en.png 1.5x"
data-file-width="1000" data-file-height="296" width="800" height="237"
alt="Global Check-in" />

- From the list of database tables select the checkbox for the type of
  item to be checked in.
- Select `Check-in` from the Toolbar.

All of the checked out items in that table will be checked in.

## Tables with checked_out field

You can find out which tables have a checked out column with this query
used in phpMyAdmin:

    SELECT DISTINCT TABLE_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE COLUMN_NAME IN ('checked_out') AND TABLE_SCHEMA='j423sd';

And the result should be like this:

    TABLE_NAME     
    bi2hb_banner_clients
    bi2hb_banners
    bi2hb_categories
    bi2hb_contact_details
    bi2hb_content
    bi2hb_extensions
    bi2hb_fields
    bi2hb_fields_groups
    bi2hb_finder_filters
    bi2hb_menu
    bi2hb_modules
    bi2hb_newsfeeds
    bi2hb_scheduler_tasks
    bi2hb_tags
    bi2hb_update_sites
    bi2hb_user_notes
    bi2hb_workflow_stages
    bi2hb_workflow_transitions
    bi2hb_workflows
