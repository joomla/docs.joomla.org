<!-- Filename: J4.x:Create_and_Manage_Article_Categories / Display title: Create and Manage Article Categories -->

## Introduction

Imagine a library without a classification system: books are just placed
on the shelves in the order in which they are received. That is not very
helpful if the library has millions of books and you are looking for
something on History, Gardening or Science. The same sort of argument
applies to Articles. If you have dozens, hundreds or thousands of
articles you really need a method to classify them so that you can
easily find what you need. That is what Categories are for.

A Joomla! category can contain both articles and sub-categories in a
tree-like structure nested to any depth, although it is unlikely that
you will want to go beyond a depth of three or four. For example, if
your articles are about Nature you might classify them as follows:

- Animals
  - Birds
    - Hawks
    - Finches
    - Gulls
  - Mammals
    - Apes
    - Monkeys
    - Rodents
- Plants
  - Flowers
    - Daisies
    - Roses
  - Trees
    - Oaks
    - Elms

In this example the Animals category might contain articles about
animals in general as well as sub-categories for articles on different
types of animal.

Joomla provides a single default category named Unclassified. Any
article not assigned to a specific category that you have created
becomes a member of the Unclassified category. You create categories as
required to suit the nature of your articles.

An article can only be in one category. In some circumstances that is
not quite enough. Suppose for example you wish to look for books of all
sorts written in a particular language, or all plants that are poisonous
or all animals that are dangerous. That is where Tags come in useful.
They are covered elsewhere.

### Using Categories

In the administrator Articles list the Filter Options form has a **-
Select Category -** drop-down list that displays your category tree
allowing you to filter for articles in the selected Category. You can
also create Category Blog and Category List menu item types to display
articles from a selected category to site visitors.

## Adding Categories and Sub Categories

### Via the Home Dashboard

<img
src="https://docs.joomla.org/images/thumb/0/0a/J4x_home_dashboard_add_category-en.png/800px-J4x_home_dashboard_add_category-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/0/0a/J4x_home_dashboard_add_category-en.png 1.5x"
data-file-width="1000" data-file-height="301" width="800" height="241"
alt="J4x home dashboard add category-en.png" />

Dependant on whether your Home Dashboard has been customised after
installation, you will have one or two options to generate a new
category:

1.  In the Sidebar Menu click the **Content** link, then from the
    dropdown menu click the **plus (+) symbol** to the right of the
    **Categories** link.
2.  If it is displayed, in the Home Dashboard Site Panel click the
    **plus (+) symbol** to the right of the **Articles Categories**
    icon.

### Via the Article: Categories List

<img
src="https://docs.joomla.org/images/thumb/7/79/J4x_article_categories_list_add_category-en.png/800px-J4x_article_categories_list_add_category-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/7/79/J4x_article_categories_list_add_category-en.png 1.5x"
data-file-width="1000" data-file-height="101" width="800" height="81"
alt="J4x article categories list add category-en.png" />

Click the **New** button.

Either of these options will open up a page: **Articles: New Category**
that is ready for input.

<img
src="https://docs.joomla.org/images/thumb/e/ec/J4x_add_article_category-en.png/800px-J4x_add_article_category-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/e/ec/J4x_add_article_category-en.png 1.5x"
data-file-width="1000" data-file-height="354" width="800" height="283"
alt="J4x add article category-en.png" />

Add the name of your new category to the **Title** field. This is the
only mandatory information required.

You can add a description for the category using the editor. This is a
matter of preference.

When you create a new category, by default the settings panel **Status**
will be set to **Published**. You can change the status to *Published*,
*Unpublished*, *Archived* or *Trashed*.

<img
src="https://docs.joomla.org/images/thumb/8/80/J4x_article_category_settings-en.png/300px-J4x_article_category_settings-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/8/80/J4x_article_category_settings-en.png 1.5x"
data-file-width="378" data-file-height="601" width="300" height="477"
alt="J4x article category settings-en.png" />

Besides Status, the other settings are:

**Parent:** The process for adding a new category or sub-category is
almost the same. The only difference is that you set the category as
**-No parent-** (the default setting) or select a parent by choosing an
existing category which makes your new category a sub-category of the
selected parent.

**Access:** By default access is set to Public. Other options to
restrict access are *Guest*, *Registered*, *Special* and *Super Users*.

**Tags:** If you use them, you can add one or more tags to the category.
Setting tags at category level is a good way to maintain consistency.

**Note** and **Version Note:** Use these to add relevant notes if
required.

Click **Save & Close**. If you are creating more categories you can
click **Save & New** instead and will open up a new input page.

<img
src="https://docs.joomla.org/images/thumb/1/10/J4x_article_category_saved-en.png/800px-J4x_article_category_saved-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/1/10/J4x_article_category_saved-en.png 1.5x"
data-file-width="1000" data-file-height="51" width="800" height="41"
alt="J4x article category saved-en.png" />

Once the category has been saved you will be returned to the **Articles:
Categories** page.

<img
src="https://docs.joomla.org/images/thumb/4/4d/J4x_article_sub_category_list_view-en.png/800px-J4x_article_sub_category_list_view-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/4/4d/J4x_article_sub_category_list_view-en.png 1.5x"
data-file-width="1000" data-file-height="722" width="800" height="578"
alt="J4x article sub category list view-en.png" />

The screenshot above, for articles on pets, shows an example of how some
categories have been set up. It is easy to see that the list includes
sub-categories (grouped and shown offset to the right below the parent).

Once you have created your categories they are available for use in your
articles.

## Quick Tips

- You can also create article categories from within an article.
- Remember that you can only assign one category to an article.
- As both parent categories and sub-categories can have further
  sub-categories, plan and organise categories carefully. A complicated
  category hierarchy can become a challenge to manage.
- Another method of grouping content in Joomla is the use of the
  **Tags** Component allowing you to add multiple tags to your articles.
  Using categories and tags can help minimise the number of
  sub-categories and provides an efficient way to structure your website
  content and provide visitors with more features to navigate your
  website content.
