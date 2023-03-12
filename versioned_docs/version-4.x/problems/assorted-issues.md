<!-- Filename: J4.x:Assorted_Issues / Display title: Assorted Issues -->

## Redirect Issue After Upgrade to 4.0.6

That is a bug! Line 243 of *plugins/system/redirect/redirect.php*:

       $db->updateObject('#__redirect_links', $redirect, 'id');

should be

       $this->db->updateObject('#__redirect_links', $redirect, 'id');

## A Page Displays with No Styling

Possible cause: A gzip section in *.htaccess* is compressing the
already-compressed CSS and JavaScript files.

See this section of the *.htaccess* file:

    ## These directives are only enabled if the Apache mod_headers module is enabled.
    ## This section will check if a .gz file exists and if so will stream it
    ##     directly or fallback to gzip any asset on the fly
    ## If your site starts to look strange after enabling this, and you see
    ##     ERR_CONTENT_DECODING_FAILED in your browser console network tab,
    ##     then your server is already gzipping css and js files and you don't need this
    ##     block enabled in your .htaccess

    ...

If present, comment out or remove.

## The List of Site Modules is Empty

Possible cause: The MySQL sort buffer size may be too small.

Using phpMyAdmin, go to **Home **→** Variables **→** Sort buffer size**.

It should be at least 256K and preferably 512K. On some shared hosting
services, it may be set to 128K. Ask the hosting service to increase it.

## Update Fails after Updating to 4.0.4

Cause: an essential change to the Update procedure affecting a small
number of users.

Look in *.htaccess* for this line:

    RewriteRule ^administrator/components/com_joomlaupdate/restore\.php$ - [L]

Change it to:

    RewriteRule ^administrator\/components\/com_joomlaupdate\/extract\.php$ - [L]

For further information see:

<a
href="https://www.joomla.org/announcements/release-news/5850-changes-to-update-process-that-you-need-to-be-aware-of.html"
class="external text" target="_blank" rel="noreferrer noopener">Changes
to Update Process that you need to be aware of</a>

## Articles Visible in Database and Frontend but Not Visible in Backend

This occurs when articles are imported directly into the database, which
worked fine in Joomla 3 but not in Joomla 4. One user's solution is as
follows:

    I imported articles directly in the database into the #__content table like I often did in Joomla 3.
    However in Joomla 4 they were not visible.

    In Content > Categories, the category item counters counted the imported articles.
    But they were not visible in Content > Articles.

    I solved it by creating the necessary references in the #__workflow_associations table for each imported article:
    item_id = article ID, stage_id = 1 and extension = com_content.article.

With this from another user:

This query should do it for you. Replace \#\_\_ with your own database
prefix.

This query prevents duplicate items in the workflow associations table

    INSERT INTO #__workflow_associations (item_id, stage_id, extension) 
    SELECT c.id as item_id, '1', 'com_content.article' FROM #__content AS c 
    WHERE NOT EXISTS (SELECT wa.item_id FROM #__workflow_associations AS wa WHERE wa.item_id = c.id);
