<!-- Filename: Moving_the_site_among_directories/sub-directories / Display title: Moving the site among directories/sub-directories -->

Many times you install Joomla in a sub-directory and then want to move
it to a higher level directory, here's a short tutorial on how to do it.

Say you have installed Joomla in the following folder:
public_html/tryjoomla. Now that you are satisfied with the site, you'll
want to move to public_html.

1\. Move all the files from the sub-directory (i.e.,
public_html/tryjoomla) to the upper level directory (i.e., public_html).
You can use your favourite FTP client or the control panel that your
hosting service provides.

2\. Download and open the configuration.php file in a text editor.

3\. Simply remove the tryjoomla folder name from the path. Look for the
following lines

    var $live_site = '';
    var $log_path = '/home/username/public_html/tryjoomla/administrator/logs';
    var $tmp_path = '/home/username/public_html/tryjoomla/tmp';
    var $ftp_root = 'public_html/tryjoomla';

Change to:

    var $live_site = '';
    var $log_path = '/home/username/public_html/administrator/logs';
    var $tmp_path = '/home/username/public_html/tmp';
    var $ftp_root = 'public_html';

N.B. The \$live_site variable rarely needs to be given a value. But if
it was given a value during installation then edit that path as well.

    var $live_site = 'http://www.example.com/tryjoomla';

Change to:

    var $live_site = 'http://www.example.com';

4\. Check your site's .htaccess file. The subfolder should be removed
there as well. The RewriteBase directive should be commented out. Check
for a RewriteRule that contains the old subdirectory.

5\. Verify that no redirect orders to the old subdirectory are in place
in your hosting control panel.

If you have cache enabled, login to the administrator backend (which
will now be at
<a href="http://www.example.com/administrator" class="external free"
target="_blank"
rel="nofollow noreferrer noopener">http://www.example.com/administrator</a>
and not <a href="http://www.example.com/tryjoomla/administrator"
class="external free" target="_blank"
rel="nofollow noreferrer noopener">http://www.example.com/tryjoomla/administrator</a>).
Go to Tools -\> Clean Cache and delete all cache files.
