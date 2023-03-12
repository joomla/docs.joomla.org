<!-- Filename: Where_are_the_web_pages%3F / Display title: Where are the web pages? -->

If you are coming from a traditional website made up of separate HTML
pages, you may well wonder where the pages are.

In Joomla! almost everything that you would normally think of as a web
page is actually stored in a database. When you create a new page, your
content is stored in a database record, not in a separate file.

Then when your site is viewed, Joomla! calls up different items from
your database and puts them together to make what is displayed to the
user.

One exception is that your images are usually stored in the images
directory and not the database.

Your MySQL database usually is created by you during the installation
process (unless you use a Fantastico or a similar installer that will
create the database automatically). If you have a control panel on a
linux host, you can usually access you database through a program called
<a href="http://www.phpmyadmin.net/" class="external text"
target="_blank" rel="nofollow noreferrer noopener">phpMyAdmin</a>. This
will allow you to view your database.

For a short tutorial on converting a static HTML web site to Joomla!,
see [Converting an existing website to a Joomla!
website](https://docs.joomla.org/Converting_an_existing_website_to_a_Joomla!_website "Converting an existing website to a Joomla! website").
