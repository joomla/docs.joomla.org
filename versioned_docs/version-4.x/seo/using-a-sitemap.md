<!-- Filename: Using_A_Sitemap / Display title: Using A Sitemap -->

## Using a Sitemap

While search engines can usually find your pages by the way they are
linked from other places on the internet, it is good practice to create
a Sitemap which gives search engine 'bots' a list of the pages on your
website - think of it as a map to find all the content on your site.  
Sitemaps are not only important for search engines, they are also very
helpful for people with disabilities who may need a simple interface to
view your site structure and navigate around the site without using your
menu structures. <a href="https://www.w3.org/TR/WCAG20-TECHS/G63.html"
class="external text" target="_blank"
rel="nofollow noreferrer noopener">W3C Working Group Note on
Sitemaps</a>  

A sitemap serves several purposes:

- Provides a structured list showing an overview of all content on your
  website
- Allows a visitor to quickly get an overview of your site structure
- Provides an alternative way of navigating your website, without the
  need for complex menu structures
- Provides search engines with a means of finding content which might
  not be available through your menu structures (e.g. landing pages)

### Types of Sitemap

It is possible to provide sitemaps for specific types of information,
including:

- Video <a href="https://support.google.com/webmasters/answer/80471"
  class="external text" target="_blank"
  rel="nofollow noreferrer noopener">Google help on video sitemaps</a>
- Images <a
  href="https://support.google.com/webmasters/answer/answer.py?answer=178636"
  class="external text" target="_blank"
  rel="nofollow noreferrer noopener">Google help on image sitemaps</a>
- News <a href="https://support.google.com/news/publisher/answer/75717"
  class="external text" target="_blank"
  rel="nofollow noreferrer noopener">Google help on News sitemaps</a>
- International <a
  href="https://support.google.com/webmasters/answer/2620865?hl=en&amp;ref_topic=2370587"
  class="external text" target="_blank"
  rel="nofollow noreferrer noopener">Google help on International
  sitemaps</a>

These specialist sitemaps allow you to provide information relating to
the specific media type - for example with a video sitemap you can
provide information about the running time, category and family friendly
status; with image sitemaps you can specify the subject of the image,
its license for use, and type of image.

### Creating a sitemap

On a static site, creating a sitemap is simply a case of manually
creating an XML file using the appropriate standards, and saving it as
an XML file. On a dynamic site, where content changes regularly, this is
not really an option - you would have to manually update the sitemap
file every time you added some new content!

For this reason there are several sitemap extensions available on the
Joomla Extensions Directory (<a
href="https://extensions.joomla.org/category/structure-a-navigation/site-map"
class="external text" target="_blank" rel="noreferrer noopener">Sitemap
category on Joomla Extensions Directory</a>) which allow you to
dynamically build a sitemap which meets the sitemap standards expected
by search engines.
<a href="https://www.sitemaps.org/" class="external text"
target="_blank" rel="nofollow noreferrer noopener">Sitemaps protocol</a>

Most of these extensions work by choosing menu items which you wish to
include in a sitemap, and specifying how often they change (see Update
Frequency). It is also possible to include sub-pages from those menu
items (for example, a menu item might lead to a category blog page, but
you want to display all the articles which are shown on this page as
individual items - another example might be a menu item pointing at a
shop category page, and in the sitemap you would want to list the
category, and then each product within it as a separate link).

### Update Frequency

While you can manually specify in your Sitemap how frequently search
engine spiders should visit your website, most search engines have
in-built systems which automatically adjust the frequency of return
visits based on how often the page in question has changed.

So, for example, if you tell search engine bots to visit your page on a
daily basis, but when it visits the page nothing has changed for a week,
it may adjust the frequency of revisits accordingly and not return as
often as you told it to. You can request, via the various webmasters
portals, for the revisit rate to be amended if required.

This would suggest, therefore, that if you have regularly changing
content, your website will be 'spidered' more frequently - leading to
content being indexed quicker than websites which do not change often.

It is generally sensible to specify pages which are static to be crawled
less frequently than those which change regularly. For example, a static
text article might be set with an update frequency of once a month,
whereas your blog or news page may be set with an update frequency of
once a day or once a week, depending on how often you add new content.

### HTML Sitemaps

An HTML sitemap is essentially a table of contents for your site which
you can make available to visitors of your website. This serves two
purposes:

1.  It provides a place where visitors can go to easily get to any
    content on your site, even if it isn't necessarily easy to access by
    other navigation aids on the site
2.  It provides a centralised store of links to the content on your site
    that can be easily indexed by search engines
3.  It allows users with disabilities to be able to quickly navigate
    your website with a simple list of links, rather than through
    complex menus

At the very least, a sitemap should link to the main sections and pages
within your site, but the more detailed you can make it, the better.

There are available extensions previously mentioned that create sitemaps
automatically based on Joomla content.

### XML Sitemaps

XML Sitemaps are an easy way for webmasters to inform search engines
about new and existing pages on their sites that are available for
crawling. In its simplest form, a Sitemap is an XML file that lists URLs
for a site along with additional metadata about each URL (when it was
last updated, how often it usually changes, and how important it is,
relative to other URLs in the site) so that search engines can more
intelligently crawl the site.

Using the Sitemap protocol does not guarantee that web pages are
included in search engines, but provides hints for web crawlers to do a
better job of crawling your site.

1.  An XML sitemap provides a list of links to the content on your site
    that can be easily indexed by search engines
2.  It is possible to create specific XML sitemaps for News, Mobile
    URLs, Images, and Video

There are available extensions that create XML sitemaps automatically
based on Joomla content.
