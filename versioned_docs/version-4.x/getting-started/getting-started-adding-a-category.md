<!-- Filename: J4.x:Getting_Started:_Adding_a_Category / Display title: Getting Started: Adding a Category -->

## Introduction

Website owners with more than a handful of articles should think about
how best to present content for ease of navigation. For example, if you
have a zoo, a museum, a mineral collection or just a large garden you
may have perhaps 1000 specimens to describe. One article for each
specimen, with photographs, needs some organisational structure. If the
articles were files you would probably put them in a file hierarchy. In
a CMS, articles are not files but categories provide for a similar
tree-like structure. Example :

|            |                                        |
|------------|----------------------------------------|
| Category   | Sub-categories                         |
| Mammals    | Apes, Monkeys, Ungulates, Dogs, Cats   |
| Reptiles   | Snakes, Lizards, Crocodiles, Turtles   |
| Amphibians | Frogs, Toads                           |
| Birds      | Raptors, Ducks, Gulls, Finches, Tits   |
| Insects    | Spiders, Butterflies, Bees, Locusts    |
| Fish       | Sharks, Salmon, Cod, Herring, Mackerel |

Sub-categories may have further sub-categories too. An optimal number
seems to be about seven.

## Menu Item Types

There are two menu item types designed to work with Categories:

- **Category Blog.** This is a page layout that has one or two leading
  article tasters, often full page width, then several more tasters in
  two or three columns, and finally a pagination mechanism to link to
  more articles in the same category. The taster is the content before
  the page-break. The Site Home page is a category blog that includes
  All Categories.
- **Category List.** This is a list layout that displays a list of
  article titles in a category.

## Create a Category

The article mentioned in this Getting Started series, *My First
Article*, was a bit of an experiment. There may be more experiments so
why not create an Experiments category? Proceed as follows:

- Expand the Content item in the Administrator menu and select the **+**
  icon alongside the Categories menu item. Note that other components,
  such as Banners and Contacts, can have categories too. They are kept
  separate from Content Categories.
- The **Articles: New Category.** form has only one compulsory field:
  the Title, in this case Experiments.
- The **Description.** field is optional but it is best to fill it in as
  it used in some lists.
- The **Parent.** field specifies whether this is category, -No Parent-,
  or a sub-category, selected from the list of categories.

<img
src="https://docs.joomla.org/images/thumb/0/01/J4.x-getting-started-category-screenshot-en.png/800px-J4.x-getting-started-category-screenshot-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/thumb/0/01/J4.x-getting-started-category-screenshot-en.png/1200px-J4.x-getting-started-category-screenshot-en.png 1.5x, https://docs.joomla.org/images/0/01/J4.x-getting-started-category-screenshot-en.png 2x"
data-file-width="1440" data-file-height="1134" width="800" height="630"
alt="J4.x-getting-started-category-screenshot-en.png" />

Save and Close! This takes you to the **Articles: Categories** list
screen.

## Change Article Category

- Select the **Articles** item from the **Administrator **→** Content**
  menu.
- Select the article title link the **Title** column to open the article
  for editing.
- In the **Category** field select the Experiments category from the
  drop-down list.
- **Save and Close.** There is no change in the Site Home page because
  the article is still marked as featured and the Home page is a
  category blog for All Categories.

## Create Category List Menu Item

- Select **Menus **→** Main Menu **→** +** from the Administrator menu
  to open the Menus: New Item form.
- Select **Articles **→** Category List** in the Menu Item Type field.
- Select **Select **→** Experiments** in the Choose a Category field.
- Enter a Title, Experiments in this case.
- Save and Close.

Go to the Site Home page and reload. Select the new Experiments menu
item.

<img
src="https://docs.joomla.org/images/thumb/0/07/J4.x-getting-started-category-list-screenshot-en.png/800px-J4.x-getting-started-category-list-screenshot-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/0/07/J4.x-getting-started-category-list-screenshot-en.png 1.5x"
data-file-width="852" data-file-height="272" width="800" height="255"
alt="J4.x-getting-started-category-list-screenshot-en.png" />

Not too pretty at this stage but the layout can be improved. Later...
