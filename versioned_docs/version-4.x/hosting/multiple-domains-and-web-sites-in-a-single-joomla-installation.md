<!-- Filename: Multiple_Domains_and_Web_Sites_in_a_single_Joomla!_installation / Display title: Multiple Domains and Web Sites in a single Joomla! installation -->

Although it's a best-practice to give every Website its own domain,
Joomla! installation and database there can be special conditions in
which a multi-site solution under a single Joomla! install is warranted.

## An Example Application

A small business, 'Johnson Candies', has two separate but related
brands: *Red Candy* and *Yellow Candy*. They require a single
Joomla!-based Website where both candy types are visible, each with its
own home page on the Joomla! site which corresponds to the domains
*www.redjohnsoncandy.com* and *www.yellowjohnsoncandy.com*.

Additionally, each brand and site **requires its own design**: a yellow
template for one; a red template, for the other.

## Benefits

By including both brands in a single Joomla! web installation, Johnson
Candies is able to save editing time (only one login), share articles
and data across both brands (or sites) and use a single feature, such as
a Contact Us form, for both brands.

## Implementation Procedure

### Prepare Your Domains

Use a single domain for your hosting account, as normal. Create the
required add-on domains in the control panel of your hosting account.
For the purpose of this tutorial, we will use *www.redjohnsoncandy.com*
in addition to the base *www.yellowjohnsoncandy.com* domain name.

### Install and Setup Joomla!

Install and setup Joomla! normally. Then develop articles, menus and
modules for each site.

### Create Templates

Next develop and install the necessary templates - one for each site
that you wish to have. In the above example, you would create a template
for *red candy* named *Red Template* and a template for *yellow candy*
named *Yellow Template*. Once the templates are installed, assign them
to the relevant menu items, using the Joomla! template manager in the
Joomla! Administrator area.

### Add a Redirect

#### Option \#1: Create an .htaccess (Apache) redirect

**Note** *Enable SEF URLs in Joomla! First*

One option is to use .htaccess (Apache) to redirect inquiries to a given
domain to a specific Joomla! page.

Our goal is to redirect any inquries to the Red Candy domain name to a
given page on the Joomla! site. In this example, we redirect any
inquiries to www.redjohnsoncandy.com to a category-blog page. You would
have previously assigned the 'red candy' template to this menu item, to
create the illusion of a separate site.

    #The following rule works, but it changes which domain name displays.
    RewriteCond %{HTTP_HOST} ^(www\.)?redjohnsoncandy\.com$
    RewriteRule (.*) http://www.yellowjohnsoncandy.com/index.php?option=com_content&view=category&layout=blog&id=3&Itemid=12 [R=301,L]

Well, that works - but you can see the drawback immediately. Although
the user is successfully viewing the Red Candy site, they will still see
the Yellow Candy domain name. Unfortunately, if you are using both
.htaccess and domain-parking (technically a redirect) - this is
necessary in order to avoid creating a LOOP.

#### Option \#2: Create a PHP Header Redirect

This solution has the benefit of keeping the illusion of separate
domains/web sites apparent to the visitor. Instead of using .htaccess
(Apache) for our redirect, we use one of the templates on the site.

In this example, the base domain is www.redjohnsoncandy.com. You have
created a template for that area named *Red Template*. The trick is to
open 'Red Template's' index.php file and add the following AS THE VERY
FIRST LINES of the install's primary index.php.

Here's the benefit: The visitor will now be redirected to the
appropriate *Red Site* page, that has the *Red Template* assigned to it
**only** in the case where they have arrived at the 'red site' domain
name. Otherwise, the conditional PHP rule is ignored, and the Yellow
Site loads.

It is important to remember to request also de URI (url that follows the
pure domain) so that you can make redirections to the same domain. When
the URI is invisible in the url the variable becomes a "/" sign. That is
why you have to compare your pure url with a "/" sign at the end. This
way you´ll be able to make 301 redirects in the same domain. Otherwise
you´ll create an infinite loop in the redirection process.

#### Option \#3: Create a PHP Header Redirect, for multiple domains with specific domain redirects for custom templates

Solution for single webspace, with different domains, one Joomla install
and depending on the user landing domain, redirects to a different
default page. Paste following PHP code AS THE VERY FIRST THING in the
install's primary index.php file. To assign another domain, just
copy/past the "if" function and edit it with the values of the other
domain in the same fashion. Further to setup the template views, you
will have to assign different module item/link alias and setup template
views within the Joomla! template manager. The alias setting is needed
when you use SEF settings.
