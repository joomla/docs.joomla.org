<!-- Filename: Robots.txt_file / Display title: Robots.txt file -->

## About Robots

Web robots, also known as crawlers, web wanderers or spiders, are
programs that traverse the web automatically. Among many uses, search
engines use them to index the web content.

The robots.txt file implements the
<a href="https://en.wikipedia.org/wiki/Robots_exclusion_standard"
class="extiw" title="wp:Robots exclusion standard">Robots Exclusion
Protocol</a> (REP), which allows the website administrator to define
what parts of the site are off limits to specific robot user agents. Web
administrators can Allow access to their web content and Disallow access
to cgi, private and temporary directories, for example, if they do not
want pages in those areas indexed.

## Where to Place the *robots.txt* File

A standard *robots.txt* file is included in your Joomla root. The
*robots.txt* file must reside in the root of the domain or subdomain and
must be named `robots.txt`.

### Joomla in a Subdirectory

A robots.txt file located in a subdirectory isn't valid. The bots only
check for this file in the root of the domain. If the Joomla site is
installed within a folder such as *example.com/joomla/*, the
*robots.txt* file **must** be moved to the site root at
*example.com/robots.txt*.

Note: The Joomla folder name **must** be prefixed to the disallowed
path. For example, the Disallow rule for the `/administrator/` folder
**must** be changed to read `Disallow: /joomla/administrator/`

## Joomla *robots.txt* Contents

This is the contents of a <a
href="https://github.com/joomla/joomla-cms/blob/4.2-dev/robots.txt.dist"
class="external text" target="_blank"
rel="nofollow noreferrer noopener">standard Joomla robots.txt</a>:

    User-agent: *
    Disallow: /administrator/
    Disallow: /api/
    Disallow: /bin/
    Disallow: /cache/
    Disallow: /cli/
    Disallow: /components/
    Disallow: /includes/
    Disallow: /installation/
    Disallow: /language/
    Disallow: /layouts/
    Disallow: /libraries/
    Disallow: /logs/
    Disallow: /modules/
    Disallow: /plugins/
    Disallow: /tmp/

## Robot Exclusion

You can exclude directories or block robots from your site by adding a
Disallow rule to the *robots.txt* file. For example, to prevent any
robots from visiting the */tmp* directory, add this rule:

    Disallow: /tmp/

See also:

- <a
  href="https://support.google.com/webmasters/topic/4598466?hl=en&amp;ref_topic=9427949"
  class="external text" target="_blank"
  rel="nofollow noreferrer noopener">Block access to your content</a> at
  Google's Help Center.

## Syntax Checking

For syntax checking you can use a validator for *robots.txt* files. Try
one of these:

- <a href="https://support.google.com/webmasters/answer/6062598"
  class="external text" target="_blank"
  rel="nofollow noreferrer noopener">Test your <em>robots.txt</em> with
  the robots.txt Tester</a> at Google.
- <a
  href="http://www.searchenginepromotionhelp.com/m/robots-text-tester/robots-checker.php"
  class="external text" target="_blank"
  rel="nofollow noreferrer noopener"><em>robots.txt</em> Checker</a> by
  Search Engine Promotion Help.

### General Information

- <a href="http://www.robotstxt.org/" class="external text"
  target="_blank" rel="nofollow noreferrer noopener">The Web Robots
  Pages</a> The main Website for *robots.txt*.
- <a href="http://www.robotstxt.org/orig.html" class="external text"
  target="_blank" rel="nofollow noreferrer noopener">A Standard for Robot
  Exclusion</a> The original standard.
- <a
  href="https://developers.google.com/search/docs/advanced/robots/robots_meta_tag"
  class="external text" target="_blank"
  rel="nofollow noreferrer noopener">Robots meta tag, data-nosnippet, and
  X-Robots-Tag specifications</a>
- <a href="https://searchtools.com/robots/robots-txt.html"
  class="external text" target="_blank"
  rel="nofollow noreferrer noopener">Robots.txt and Search Indexing</a>
