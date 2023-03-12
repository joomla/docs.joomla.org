<!-- Filename: Template_Considerations_During_Migration / Display title: Template Considerations During Migration -->

<img
src="https://docs.joomla.org/images/thumb/4/47/Copyedit.png/25px-Copyedit.png"
decoding="async"
srcset="https://docs.joomla.org/images/thumb/4/47/Copyedit.png/38px-Copyedit.png 1.5x, https://docs.joomla.org/images/thumb/4/47/Copyedit.png/50px-Copyedit.png 2x"
data-file-width="200" data-file-height="200" width="25" height="25"
alt="Copyedit.png" />This Article Needs Your Help

*This article is tagged because it* **NEEDS UPDATING***. You can help
the Joomla! Documentation Wiki by <a
href="https://docs.joomla.org//docs.joomla.org/index.php?title=Template_Considerations_During_Migration/en&amp;action=edit"
class="external text" target="_blank"
rel="noreferrer noopener">contributing to it</a>.  
<span class="small">More pages that need help similar to this one are
[here](https://docs.joomla.org/Category:Needs_updating "Category:Needs updating").</span>
<span class="small">**NOTE-If you feel the need is satistified, please
remove this notice.**</span>*  
**Reason:** See section 3.4 and 4

Templates sometimes throw people for a loop during a migration. It need
not be so. With a little explanation things can become clear as to what
your options are.

## Intro

Templates are an extension. Just like components, modules, and plugins
are extensions so is a template.

In a migration setting you will need to decide what to do about your
current template (which determines the current “look and feel” of your
site).

For the most part your template scenario will fit into one of the
options below:

- You are using a template that was purchased from a template club.
- You are using a template that was a one time purchase from some
  template provider.
- You had a custom template designed for you.
- You are using a default template that came with your Joomla
  installation which may have been customised significantly or not at
  all:
  - Joomla! 1.5 default templates are Rhuk_milkyway, JA Purity, Beez.
  - Joomla! 2.5 default templates are Atomic, Beez3, and Beez25.
  - Joomla! 3 default templates are Protostar and Beez3.
  - Joomla! 4 default template is Cassiopeia only.

## Assessing your Template Scenario

Before deciding what to do, you will want to assess if you want to keep
the existing look of your current website. If you want a change, this is
the time to decide that. Perhaps the biggest reason you may want to
change out your template is to utilize newer technology found in
templates of the current day. Responsive templates were not available in
1.5 at the beginning of the 2.5 life cycle.

Let’s take these scenarios one at a time:

### You are using Protostar

Protostar is not compatible with Joomla 4.x. The migration will work on
the one-click from Joomla 3.10.x to 4.x but the template will disappear
and be replaced with Cassiopeia upon migration. You will need to plan on
using Cassiopeia or some other template in Joomla 4.

#### Why can't you carry forward Protostar into Joomla 4?

Protostar is based on an old version of Bootstrap (Bootstrap 2) and
jQuery (1.x). The versions of these components are outdated and have
known security issues (Joomla 3 maintained forked versions of these
libraries with security patches applied) - and Joomla 4 has updated
these to the latest version - Bootstrap 5. However this means that
templates need to be updated to use the new HTML syntax that Bootstrap 5
requires.

### You are using a template that was purchased from a template club

This is the easiest one - most of the time. If you purchased a template
from a template club, go back to the company and see if they have a
version of your template for Joomla 4.x. If so, excellent, with a few
things to think about. If you’re running 1.5 going to 4.x, check to see
if the version for Joomla 4 is responsive if that’s important to you. If
you’re going from 1.5 to 4, chances are good that there will be some
differences in the 1.5 version of the template and the 4 version of the
template. Be prepared to make some customisations to the template if you
want to get it to look *exactly* the same. If you are going from 1.5 to
4.x, chances are you will need to start with a new template.

If you’re going from 2.5 to 4.x or 3.10.x to 4.x, check to see if the
2.5 and 4.x versions or 3.10.x and 4.x versions are packed in the same
package from the developer. If they are not, check with the developer on
steps to upgrade from Joomla 2.5 to 3.x and then 3.10.x to 4.x. If 2.5
and 3.x, or 3.10.x and 4.x are in the same package, you’re golden. If
they’re not, you might still be golden. It just depends on the upgrade
path of the developer.

### You are using a template that was a one time purchase from some template provider

If you purchased a template from a template provider that was a one time
purchase, go back to the company and see if there’s a version available
for Joomla 3.x or 4.x (depending on the migration you're doing). If
there isn’t, you’re probably out of luck. Yet you can try contacting
someone from the company to see if they can update it for you and make
it compatible with Joomla 3.x or 4.x.

If that fails, then you will need to either:

1.  Choose a new template.
2.  Convert the template to be compatible with Joomla 4.x. (Note: may
    not be responsive.)

*Item 1* is self explanatory. You can choose a template from a
commercial provider or customise the Cassiopeia default template (see
more on Cassiopeia below) that installs with Joomla 4.x.  
*Item 2* not as simple. In order to convert your existing template to be
compatible with Joomla 3 (and in time Joomla 4), see the following
section.

## Template Conversions or Template Migrations

### 1.5 to 3 Template Conversions

- [Migrating a Template from Joomla 1.5 to
  3.x](https://docs.joomla.org/Migrating_a_Template_from_Joomla_1.5_to_3.x "Special:MyLanguage/Migrating a Template from Joomla 1.5 to 3.x")

### 1.5 to 2.5 Template Conversions

- [Upgrading a Joomla 1.5 template to Joomla
  2.5](https://docs.joomla.org/Upgrading_a_Joomla_1.5_template_to_Joomla_2.5 "Special:MyLanguage/Upgrading a Joomla 1.5 template to Joomla 2.5")
- <a
  href="http://magazine.joomla.org/issues/issue-may-2012/item/740-How-to-convert-Joomla-15-template-to-Joomla-25"
  class="external free" target="_blank"
  rel="noreferrer noopener">http://magazine.joomla.org/issues/issue-may-2012/item/740-How-to-convert-Joomla-15-template-to-Joomla-25</a>

### 2.5 to 3 Template Conversions

- [J3.x:Converting A Previous Joomla! Version
  Template](https://docs.joomla.org/J3.x:Converting_A_Previous_Joomla!_Version_Template "Special:MyLanguage/J3.x:Converting A Previous Joomla! Version Template")
- <a
  href="http://stackoverflow.com/questions/16055707/convert-joomla-2-5-template-to-3-0"
  class="external free" target="_blank"
  rel="nofollow noreferrer noopener">http://stackoverflow.com/questions/16055707/convert-joomla-2-5-template-to-3-0</a>
- <a href="https://www.youtube.com/watch?v=E13QMWgvwlA"
  class="external free" target="_blank"
  rel="nofollow noreferrer noopener">https://www.youtube.com/watch?v=E13QMWgvwlA</a>

### 3.10.x to 4 Template Conversions

This section needs content. If you have knowledge on converting
templates built for Joomla 3 to make them compatible with Joomla 4,
please write a magazine article or post a YouTube or something that can
be linked from this area. Thanks in advance.

### You had a custom template designed for you

If you had a custom template designed for your 1.5, 2.5, or 3.x site, it
will need to be converted to be compatible with Joomla 4. See links in
the previous section. If you need to hire someone to convert your
existing template to be compatible with Joomla 4.x, check out the
Joomla! Community Portal
<a href="https://community.joomla.org/service-providers-directory/"
class="external text" target="_blank" rel="noreferrer noopener">Service
Providers Directory</a> for either the <a
href="https://community.joomla.org/service-providers-directory/listings/category/view/124-template-development.html"
class="external text" target="_blank" rel="noreferrer noopener">Template
Development</a> or <a
href="https://community.joomla.org/service-providers-directory/listings/category/view/119-migrations-upgrades.html"
class="external text" target="_blank"
rel="noreferrer noopener">Migrations &amp; Upgrades</a> categories.

### You are using a default template that came with your Joomla installation

Joomla! 1.5 default templates are Rhuk_milkyway, JA Purity, and Beez.
Joomla! 2.5 default templates are Atomic and two different versions of
Beez. Joomla! 3 default templates are Beez3 and Protostar. It may have
been customised significantly or not at all. If you are using a 2.5
default template and going to Joomla 3.x, you will be able to do a
one-click update. If you are using a 1.5 default template then you will
need to go through one of the steps above to update it for Joomla 3.x.
(If someone finds this information incorrect, please contribute and fix
it). Joomla 3 default templates are **not** compatible with Joomla 4.
You will not be able to use Protostar or Beez3 in Joomla 4.

Before deciding if you want to convert your 1.5 template to Joomla 4,
you may want to seriously consider finding a new template with
similarities to your existing template. Chances are it will be cheaper
and faster to use a new one then convert the old one. If you want to
convert the old one and don’t have the skills to do it yourself, visit
the Joomla! Community Portal Service Providers Directory <a
href="https://community.joomla.org/service-providers-directory/listings/category/view/119-migrations-upgrades.html"
class="external text" target="_blank"
rel="noreferrer noopener">Migrations &amp; Upgrades</a> category.

Protostar, the template that ships with Joomla 3.x is **not** compatible
with Joomla 4.x. You will need to go through one of the steps above to
update it for Joomla 4.x.

### When choosing templates

- Only look at one template company at a time or it gets overwhelming
- If you start to get overwhelmed, take a break even if that means
  another day
- Try to look past the busy and flashy demos. You’re going to be putting
  your content into the template, not doing everything the template can
  do.
- Look at the module positions and variations of the templates
- Drink plenty of water while looking for templates and stretch every
  hour or so

## Using the Cassiopeia default template in Joomla 4.x

This section is incomplete. If you have knowledge in this topic, please
participate by adding to this document. In the interim, a Google search
on customising Cassiopeia will yield you many results outside of Joomla!
Docs.
