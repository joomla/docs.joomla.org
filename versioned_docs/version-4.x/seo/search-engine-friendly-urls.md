<!-- Filename: Search_Engine_Friendly_URLs / Display title: Search Engine Friendly URLs -->

**Search engine friendly (SEF)**, **human-readable** or
<a href="https://en.wikipedia.org/wiki/Clean_URL" class="extiw"
title="wikipedia:Clean URL">clean URLs</a> are URLs that make sense to
both humans and search engines because they explain the path to the
particular page they point to. Since version 1.5, Joomla! is capable of
creating and parsing URLs in any format, including SEF URLs. This does
not depend on URL rewriting executed by the web server, so it works even
if Joomla! runs a server other than Apache with the mod_rewrite module.
The SEF URLs follow a certain fixed pattern, but the user can define a
[short descriptive text (alias)](https://docs.joomla.org/Alias "Alias")
for each segment of the URL.

Internally, the local part of a SEF URL (the part after the domain name)
is called a **route**. Creating and processing SEF URLs is therefore
referred to as **routing**, and the relevant code is called a
**router**.

A good example of routing is the URL to "Welcome to Joomla!" article in
the sample data.

- Without SEF URLs turned on, the URL is
  `http://www.example.com/index.php?option=com_content&view=article&id=1:welcome-to-joomla&catid=1:latest-news&Itemid=50`
- With SEF URLs on and mod_rewrite off, it's
  `http://www.example.com/index.php/the-­news/1-­latest­-news/1­-welcome­-to­-joomla`
- With both SEF URLs and mod_rewrite on, it's
  `http://www.example.com/the-­news/1­-latest-­news/1-­welcome-­to­-joomla`

Search engine friendly URLs can be activated by turning on the **Search
Engine Friendly URLs** option in the *Global Configuration*. This option
is on by default since Joomla! 1.6. See [Enabling Search Engine Friendly
(SEF)
URLs](https://docs.joomla.org/Enabling_Search_Engine_Friendly_(SEF)_URLs "Enabling Search Engine Friendly (SEF) URLs")
for more information.

## FAQs

### What do the numbers in the URL mean?

By comparing the old and the new URL we can see numbers in the old URL,

    http://www.example.com/index.php?option=com_content&view=article&id=1:welcome-to-joomla&catid=1:latest-news&Itemid=50

but also in the new URL:

    http://www.example.com/the-­news/1­-latest-­news/1-­welcome-­to­-joomla

These numbers are the parameters that are needed by Joomla! to get the
internal URL and show the page you want to see. (In this case, the first
numeral one is the ID of the category, the second numeral one is the ID
of the article.)

### There is no `index.php` in the URL anymore. Can I delete the file now?

No! The URL doesn't contain the `index.php` anymore, but internally the
mod_rewrite will only redirect to the original path without showing it
to you.

### What is the [Alias](https://docs.joomla.org/Alias "Alias") value? And how does it get created?

Alias is listed beneath the Title field in Articles, Categories,
Sections and Menu Items. Joomla! can automatically create the alias for
you. An automatic alias begins with the title. All upper case letters
are changed to lower case. Spaces and special characters not allowed in
a URL; they are changed to dashes.

### I want to specify my own value for Alias.

If you do not like the alias provided by Joomla!, you can enter a value
of your choosing into that field. Many believe using good keywords in
your URL helps search engine optimization. You can do so by including
those keywords in your title, and allowing Joomla! to create the alias,
or by creating the alias yourself.

### How is Alias used in a URL?

For a menu item, Joomla! uses the alias as the URL slug. Assume that you
use the first two SEF URL options and you create a menu item called
Products. Your URL would be example.com/products.

Joomla! also uses the primary key values of data within the URL to help
the router navigate to the correct page. Continuing with the previous
example, if your products menu item was for an Article­/Category Blog,
the link for the Article Title and/or Read More link would have three
parts:

- The menu item URL - example.com/products;

<!-- -->

- Plus, the primary key for the Category and the Category alias -
  32-fruit;

<!-- -->

- Plus, the primary key for the Article and the Article alias - 1-apple;

The complete URL is: `http://example.com/products/32-fruit/1-apple`

### How can I get rid of the numbers in the SEF URLs?

The numbers in the SEF URL are needed by Joomla!'s router to know how to
direct site traffic. Once the router logic stabilizes, simple third
party system plugins can be developed to augment the router capabilities
by allowing more choice. At that time, numbers will likely be removed
from the URL.

## Route Formats and the Routing Mechanism

*This section describes Joomla!'s core (built-in) routing mechanism.
Routing extensions may change the way routes are created on your
system.*

### Route Formats

To describe the Joomla! routing mechanism in more detail, we first need
to pin down what we refer to as a **route**. Suppose that Joomla! has
been installed in `http://example.com/sites/first/`. The installation
path is generally referred to as the **base URL**. A possible example
URL is `http://example.com/sites/first/products/32-fruit/1-apple`. The
first part of this URL is the aforementioned base URL, and neither
Joomla! nor any component router can create URLs with a different first
part. The second part, `products/32-fruit/1-apple`, is a **route**,
consisting of three **segment**s.

The first segment of a route is, for regular URLs, the alias of a menu
item. The SEF URL is said to be **routed through** that menu item. The
other segments are determined entirely by the router of the component
that provides the type of the menu item. The *Category - Blog* menu item
type, for example, is provided by the
[Content](https://docs.joomla.org/Content "Content") component, and
therefore that component's router is responsible for building and
parsing the remaining segments.

It is also possible (for extensions) to ask the system to create a route
without supplying a menu item to route through. In that case, the system
will usually decide to create a special route that has the word
`component` as the first segment. These routes are created using a fixed
format: the name of the component (without the leading `com_`) is
selected as the second segment and any parameters as the other segments.

### Limitations

It is important to note creating a menu item is the *only* way for a
Joomla! user to define a route that leads to a specific component. It
is, however, possible to create a route without showing it on the site
(in a menu). An often-applied method is to create a menu item in a menu
that isn't displayed anywhere. Such a menu is usually called a [hidden
menu](https://docs.joomla.org/Menu "Menu").

The previous paragraph implies that it is not possible to make one
component responsible for handling all routes. For example, it is not
possible to specify that the URL `http://example.com/thealias` should
display the Content item with the alias `thealias`, where `thealias`
could be any word. If this needs to be done for a small number of
articles, menu items can be created manually for these. Else a routing
extension is necessary.

This routing mechanism is therefore not as flexible as users sometimes
require. On the other hand, it has one large advantage: it reduces the
chance of ambiguous routes (routes that could lead to two different
pages). Since the first segment of a route is always a menu item alias,
the system immediately knows which component's router must be used to
parse it.

## Implementation Details

### Handling Routes

*This section describes the routing implementation. If you are a
component developer, see
<a href="https://docs.joomla.org/Supporting_SEF_URLs_in_your_component"
class="mw-redirect"
title="Supporting SEF URLs in your component">Supporting SEF URLs in
your component</a>.*

Joomla routes are created and resolved by <a
href="https://docs.joomla.org/index.php?title=JRouter&amp;action=edit&amp;redlink=1"
class="new" title="JRouter (page does not exist)">the JRouter class</a>.
This class looks in the component root of the currently active component
(specified in the `option` parameter in the query string) and includes
the `router.php` file in that component's root directory. It then calls
one of two functions: one for creating the SEF URL and one for
interpreting the SEF URL.

The JRouter class is overridden by the Joomla CMS in
`/includes/router.php`. In this file the build and parse functions are
overridden to properly build and parse the URLs for the Joomla CMS.

The `router.php` file in each component (for example,
`/components/com_content/router.php`) should contain the following two
functions:

- ContentBuildRoute - this builds the SEF URL
  - Parameters
    - \$query - this is a named array containing the querystring
      variables
  - Returns: an array of segments where each segment is separated by a
    '/' when later combined to create the actual URL (the items in the
    array should not contain '/' characters)
- ContentParseRoute - this interprets an SEF URL
  - Parameters
    - \$segments - this is an array that contains the segments of the
      URL requested.
  - Returns: a name =\> value array of the querystring variables that
    the link maps to

### The SEF Plugin

The Joomla *System - SEF* plugin inherits `JPlugin` and implements the
`onAfterRender()` function. In this function the body of the response
that will be sent to the browser is retrieved using
`JResponse::getBody()`. The body of the response is then searched for
links containing `/index.php...` and replaces them with a correct SEF
URL by calling `JRoute::_(`*`url`*`)`.

JRoute builds SEF URLs by instantiating a `JRouter` object and
requesting that it build the correct link from the passed in URL.

### Handling SEF URLs

By default the SEF URLs are handled by the `JRouterSite` object (from
`/includes/router.php`) and is called by a call to
`JApplication::route()` in index.php. This call is made on the `$app`
variable which is actually an instance of `JSite` (from
`/includes/application.php`).

`JApplication::route()` has a non-destructive result on the `$_GET`
array. That is, `JApplication::route()` sets variables in `$_GET` by
calling `JRequest::set()` with the overwrite flag set to false. Thus if
a variable name is returned from `JRouter::route()` that is already in
`$_GET`, it will not put that value into `$_GET`. This allows for custom
routing.

### Custom Routing

Joomla allows you to create your own routing mechanism. In order to
create this mechanism you must have a plugin that overrides the
`JPlugin::onAfterInitialise()` function. This function then parses the
URL and creates the needed variables in `$_GET` before the standard
Joomla routing is done.

*See <a
href="https://docs.joomla.org/Creating_a_System_Plugin_to_augment_JRouter"
class="mw-redirect"
title="Creating a System Plugin to augment JRouter">Creating a System
Plugin to augment JRouter</a> for an example.*
