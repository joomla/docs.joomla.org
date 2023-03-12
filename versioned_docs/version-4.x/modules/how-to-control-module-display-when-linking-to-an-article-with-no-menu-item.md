<!-- Filename: How_to_control_module_display_when_linking_to_an_article_with_no_menu_item / Display title: How to control module display when linking to an article with no menu item -->

Normally, you control which modules display on a page by assigning
modules to a menu item. However, in some cases you may not have a menu
item that corresponds to each page of your website.

## Linking From One Article to Another

One case where this is true is when you are linking to articles from
another article. For example, you may have articles in your site that
will not have specific menu items associated with them. Instead, you may
be linking to these articles from other articles. In this case, you will
not have a way to assign modules to individual articles.

You can still control which modules display on which articles by
manually setting the Itemid portion of the link URL. Say, for example,
that you will have five different "page types" that will display,
depending on the article. Each "page type" will have its own combination
of displayed modules. Here is how you can set this up:

1.  Create a menu called "hidden" and add a menu item for each of the
    five "page types." The menu item type will be an Article Layout.
    - Make sure the menu items are 'Published'
    - Do not create a "mod_mainmenu" module for the hidden menu. This
      menu will never be shown on your site, so no menu module is
      needed.
    - Assign the desired modules to each of these menu items in the
      normal way.
2.  Note the ID numbers of each of these five menu items. The ID number
    is shown in the Menu Item Manager screen.
3.  Create the link to the article, using one of the following:
    - Create the link manually by copying a normal Joomla link that is
      in the format:
      `index.php?option=com_content&view=article&id=xx&Itemid=yy`, where
      xx is the ID of the desired article (from the Article Manager) and
      yy is the ID of the desired menu item "page type" (from the Menu
      Item Manager).
    - Use an extension such as the <a
      href="http://extensions.joomla.org/component/option,com_mtree/task,viewlink/link_id,88/Itemid,35/"
      class="external text" target="_blank" rel="noreferrer noopener">JCE
      editor</a> or <a
      href="http://extensions.joomla.org/component/option,com_mtree/task,viewlink/link_id,4010/Itemid,35/"
      class="external text" target="_blank"
      rel="noreferrer noopener">Linkr</a> to create the link from the
      editor. Link to the desired article and manually add "&Itemid=yy"
      to the link, again where yy is the ID of the desired menu item
      "page type."
    - Any SEF component, such as
      <a href="http://dev.anything-digital.com/sh404SEF/"
      class="external text" target="_blank"
      rel="nofollow noreferrer noopener">sh404SEF</a> or
      <a href="http://www.artio.net/en/joomsef/artio-joomsef-3-x"
      class="external text" target="_blank"
      rel="nofollow noreferrer noopener">JoomSEF</a>, that allows you to
      create custom URL's will work as well. When you create the menu
      item for one of the 5 "page types" that is linked to an arbitrary
      article (consider a dummy article), simply copy the non-SEF URL
      from that menu item creation page. It is referred to as the
      "Link." Then in your SEF component, create a custom SEF URL with
      that link you just copied, only edit the &id=xx where xx is your
      desired articles id number and add the &Itemid=yy where yy is the
      ItemID from your custom "page type." If it doesn't work, make sure
      you assigned the modules to your custom "page type" in the the
      module manager.

When these links are displayed, the modules assigned to the Menu Item
corresponding to the Itemid=yy will display along with the Article
corresponding to the id=xx. Note that you can still use the Joomla SEF
URL option. In this case, the URL will be converted to the SEF format,
but the correct Itemid will still be used.

## Linking to an Article from a Module

The example above assumes that you have control over the URL used for
the link. However, in some cases, the link is created automatically for
you and therefore you don't have the option of manually changing the
Itemid of the URL. Examples of this include the Latest News and Most
Popular modules, both of which give you links to articles automatically.
In this situation, you can still control which modules display when you
link to an article. Here are three possible approaches.

1.  The simplest trick is to assign modules to *All* menu items. That
    way they show up no matter what. But you have to be OK with having
    the modules on every page.
2.  Another possibility is to use a hidden menu item with a Section or
    Category layout. You can do this on a "hidden" menu and not create a
    menu module for this "hidden" menu. This gives you a menu item so
    that you can then assign the desired modules to each layout. If you
    don't have an article layout for the article being linked to, Joomla
    will try to find a "similar" menu item and use the modules for that
    item. For example, if you create a hidden menu item with a section
    layout and assign the modules that that menu item, then when you
    link to an article in that section, the modules assigned to the
    hidden section layout will display. This also works for category
    layouts. There is a hierarchy for this, as follows:
    1.  Article Layout
    2.  Category Blog Layout
    3.  Category List Layout

    Note that, if you have the Breadcrumbs module enabled, these hidden
    menu items will show in the breadcrumbs. This means that a user will
    be able to navigate to the hidden menu item (for example, the
    section list layout) from the link in the breadcrumbs.
3.  The sure way to fix this (but also the most work) is to create a
    separate menu item for each article. This is the most work, but it
    allows you to completely control the modules displayed for each
    article.

## Controlling Module Display With an Extension

Another approach to the problem is to display modules using an extension
that provides detailed control over where a module displays. A list of
module management extensions can be found on the <a
href="http://extensions.joomla.org/extensions/style-a-design/modules-management"
class="external text" target="_blank" rel="noreferrer noopener">JED
(Joomla Extension Directory)</a>.
