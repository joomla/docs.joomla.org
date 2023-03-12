<!-- Filename: J4.x:How_To_Use_Content_Tags_in_Joomla / Display title: How To Use Content Tags in Joomla -->

Joomla!  4.0 <span id="main-portal-heading">**Tutorial**  
Using the Tags Component</span>

## Introduction

Joomla! is a powerful Content Management System (CMS) and the use of
tags provides you with an easy to use and efficient way to organise and
display your content. The Joomla **Tags Component** allows you to set up
tags that can be utilised across different content types including
articles, categories, contacts and newsfeeds. The Tags Component
supports the creation of parent and child tags.

Unlike Joomla **Categories**, where only one category can be assigned to
an item, you can assign multiple tags to an item making the Tags
Component an extremely flexible way to organise content. For more
information about categories read [Joomla!
Category](https://docs.joomla.org/Category "Special:MyLanguage/Category").

Note that unlike categories, it is not a requirement to assign tags to
items.

Once an item is tagged with a specific tag, clicking the tag button on
content displaying tags will take you to a page that displays a list of
all items that have been tagged with that particular tag. For this
reason, tags are often used as a way to present *filtered* lists of
content.

As Joomla has evolved the development team have recognised that site
builders and users may use different approaches to build and manage
sites and like numerous tasks in Joomla, Tags can be added in several
places giving you flexibility to work the way that suits you best. This
tutorial therefore covers several approaches.

- Log in to the Administrator Home Dashboard. To learn how to do this
  read: [Logging in or out of the Administrator
  Dashboard](https://docs.joomla.org/J4.x:Logging_in_to_Joomla "Special:MyLanguage/J4.x:Logging in to Joomla").

## Considerations

Before starting, consider the purpose of tags on the website, especially
if others will be adding content. Unless they are added and managed
correctly, tags can become counter productive. Common problems include
content writers adding new unnecessary tags and miss-spelled tag names.
Some Site Administrators may choose to change the permissions via the
Joomla ACL so that only specific users can add new tags.

When tags are created they will be shown as links on the items you have
allocated them to, provided that they have not been disabled by an
Administrator to be shown. How the tags look and the position they are
displayed is defined by the template your website uses. The tag links
will usually have styles applied with the site's Cascading Style Sheet/s
(CSS) to display the tag links as buttons or labels.

Note that when using the Tags Component, Joomla allows you to switch off
the display of the tags in your content. This may seem illogical but it
is a useful feature where tags are used, for example, to filter content
for specific use cases.

## Adding Tags

### Via the Tags Component

<img
src="https://docs.joomla.org/images/thumb/3/37/J4.x_access_tag_manager-en.png/800px-J4.x_access_tag_manager-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/thumb/3/37/J4.x_access_tag_manager-en.png/1200px-J4.x_access_tag_manager-en.png 1.5x, https://docs.joomla.org/images/3/37/J4.x_access_tag_manager-en.png 2x"
data-file-width="1343" data-file-height="547" width="800" height="326"
alt="J4.x access tag manager-en.png" />

In the Administrator Sidebar Menu click the **Components** dropdown and
then click **Tags**.

You will be taken to the **Tags List**.

<img
src="https://docs.joomla.org/images/thumb/3/34/J4.x_create_new_tag-en.png/800px-J4.x_create_new_tag-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/thumb/3/34/J4.x_create_new_tag-en.png/1200px-J4.x_create_new_tag-en.png 1.5x, https://docs.joomla.org/images/3/34/J4.x_create_new_tag-en.png 2x"
data-file-width="1353" data-file-height="131" width="800" height="77"
alt="J4.x create new tag-en.png" />

Click **New** in the Tags Toolbar.

<img
src="https://docs.joomla.org/images/thumb/4/4b/J4.x_name_and_save_tag-en.png/800px-J4.x_name_and_save_tag-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/thumb/4/4b/J4.x_name_and_save_tag-en.png/1200px-J4.x_name_and_save_tag-en.png 1.5x, https://docs.joomla.org/images/4/4b/J4.x_name_and_save_tag-en.png 2x"
data-file-width="1345" data-file-height="513" width="800" height="305"
alt="J4.x name and save tag-en.png" />

The only required information is in the **Title** field. Whatever you
add in the Title field will become the Alias when the new tag is saved.

If you wish you can add a description in the Editor. Before saving the
tag, there are a few settings you can amend:

<img
src="https://docs.joomla.org/images/thumb/6/6d/J4.x_tag_properties-en.png/300px-J4.x_tag_properties-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/6/6d/J4.x_tag_properties-en.png 1.5x"
data-file-width="324" data-file-height="472" width="300" height="437"
alt="J4.x tag properties-en.png" />

\- **Parent:** Like Categories, you can use a Tag as a **Parent**.
Choose a parent tag from the list. Use the Parent field to do this.

\- **Status:** You will note that the **Status** field is set as
**Published** by default. It can be set to *Unpublished*, *Archived* or
*Trashed*.

\- **Access:** You can change the Access Level.

\- **Note** and **Version Note:** If required you can add notes.

You can now click **Save & Close** and the new tag will appear in the
Tags List. If you are creating multiple tags you can choose to click
**Save & New** instead to carry on and create another.

<img
src="https://docs.joomla.org/images/thumb/7/73/J4.x_tag_saved-en.png/800px-J4.x_tag_saved-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/thumb/7/73/J4.x_tag_saved-en.png/1200px-J4.x_tag_saved-en.png 1.5x, https://docs.joomla.org/images/7/73/J4.x_tag_saved-en.png 2x"
data-file-width="1344" data-file-height="205" width="800" height="122"
alt="J4.x tag saved-en.png" />

Once saved the tag will be available for use across the various content
types that use them.

### From within an Article

It is possible to add new tags whilst creating or editing an article. In
the article settings **Tags Field** enter the name of the new tag and
press **Enter** to save and assign the tag to the article.

For more information about tagging articles read [Article
Settings.](https://docs.joomla.org/J4.x:Adding_a_New_Article "Special:MyLanguage/J4.x:Adding a New Article").

### From within a Category

Tags can be added when creating a new category. On the **Category** Tab
enter the tag name in the **Tags Field** and press **Enter** to create
and assign the new tag.

For more information about categories read [Adding and Managing Article
Categories](https://docs.joomla.org/J4.x:Create_and_Manage_Article_Categories "Special:MyLanguage/J4.x:Create and Manage Article Categories").

### From within a Contact

Tags can be added when creating a new Contact. On the **New Contact**
Tab enter the tag name in the **Tags Field** and press **Enter** to
create and assign the new tag. You can also add new tags when creating
Contact Categories.

### From within a Newsfeed

Tags can be added when creating a new Newsfeed. On the**New News Feed**
Tab enter the tag name in the **Tags Field** and press **Enter** to
create and assign the new tag. You can also add new tags when creating
Newsfeed Categories.

## Managing Tags

Wherever you add new Tags within Joomla, they will appear in the Tags
List (In the Administrator Sidebar Menu click the **Components**
dropdown and then click **Tags**).

Adding tags from outside the Tags Component allows you to do just that.
To manage tags you must use the Tags List to open and adjust tag
settings.

### The Tags List

The Tags List shows all the tags created on your website.

For a more detailed overview click the **Help** button in the top
toolbar.

### Tags List Toolbar

<img
src="https://docs.joomla.org/images/thumb/f/fa/J4.x_tag_filter_options-en.png/800px-J4.x_tag_filter_options-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/f/fa/J4.x_tag_filter_options-en.png 1.5x"
data-file-width="992" data-file-height="198" width="800" height="160"
alt="J4.x tag filter options-en.png" />

You can manipulate the list in a number of ways. You can search for a
tag, you can reorder the list, you can publish or unpublish tags or
change settings in the **Options**.

<img
src="https://docs.joomla.org/images/thumb/9/98/J4.x_tag_actions-en.png/800px-J4.x_tag_actions-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/9/98/J4.x_tag_actions-en.png 1.5x"
data-file-width="998" data-file-height="255" width="800" height="204"
alt="J4.x tag actions-en.png" />

The **Actions** button will be activated only when one or more tags are
selected with the checkboxes on the left.

Actions include Publish, Unpublish, Archive, Check-in or Trash. Batch
allows you to set access settings to multiple tags in one action.

### Tag Settings

To make changes to a tag's settings, from the Tags List click on the
relevant tag.

This will open the **Tag Item**.

On the **Tag Details** tab you will find the settings as covered above.

On the **Options** Tab you can:

1.  Change the layout of the tag's page (the page that appears when you
    click on the tag link - for example, mysite.com/tags/my-tag). This
    layout is normally the default setting and template dependant.
2.  Add a CSS Class to apply a different style (appearance) to the link
    for the tag. This would normally only be used by the Site
    Administrator.
3.  Set images for the tag - a teaser image for the tag list and/or a
    full image for the tag page.

On the **Publishing** tab, if required, you can set Metadata for the tag
page. This can be helpful for Search Engine Optimisation (SEO).

## How Joomla Outputs Tags

Once tags have been created on your site they are available for use not
only on content but also by some useful modules; **Popular Tags** and
**Similar Tags**. The following examples show how these look on a
standard installation using the default **Cassiopeia** Template.

<img
src="https://docs.joomla.org/images/thumb/7/7d/J4.x_using_tags_examples-en.png/800px-J4.x_using_tags_examples-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/7/7d/J4.x_using_tags_examples-en.png 1.5x"
data-file-width="1000" data-file-height="933" width="800" height="746"
alt="J4.x using tags examples-en.png" />

When you click on one of the tags you will be taken to a page that lists
all items assigned to that particular tag:

<img
src="https://docs.joomla.org/images/thumb/1/1c/J4.x_tagged_item_list-en.png/800px-J4.x_tagged_item_list-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/1/1c/J4.x_tagged_item_list-en.png 1.5x"
data-file-width="1000" data-file-height="345" width="800" height="276"
alt="J4.x tagged item list-en.png" />

Clicking a tag will take you to a page that outputs a list of all items
assigned with that particular tag - in effect it is a filtered list of
your tagged website content. A filter box is provided to make it easier
to find items as the list grows. You can also set the number of results
you want to see in a single view.

## Tags Configuration

Configuration is outside the scope of this tutorial but **global
configuration** is accessed from the sidebar menu, **Components \>
Tags**. Click the **Options** button in the upper toolbar.

For more information read: [Tags:
Options](https://docs.joomla.org/Help4.x:Tags:_Options "Special:MyLanguage/Help4.x:Tags: Options").

Global configuration can be overridden at menu item level.

## Quick Tips

- Remember that Tags are used across multiple content types
- You can add more than one Tag to an item
- Use the Help button when unsure
