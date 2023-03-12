<!-- Filename: J4.x:Setup_a_Multilingual_Site / Display title: Setup a Multilingual Site -->

## Sample Data

Joomla comes with two sets of sample data: Blog and Multilingual. There
is a third Testing set but only for users working with the Joomla
Development version. If you have an existing site with articles, menus
and modules, it will be similar in principle to a site with Blog sample
data installed.

In the Home Dashboard, the Multilingual Sample data says **Before
launching, make sure you have at least 2 languages installed with their
Content Languages and that no sample data has been installed**. That
will probably lead you to create a Multilingual site by manually
executing the required steps one by one. That is an error-prone
procedure in which you are likely to make a mistake, especially if you
using several languages. Mistakes can be fixed but the whole process is
a little tedious and can be confusing.

You can ignore that advice and use the Multilingual Sample Data to set
up a multilingual site if you understand how to make some corrections to
the original menus and modules later.

## Initial Site

A newly installed Joomla site has a **Main Menu** in the right sidebar.
It contains a single menu item named **Home** of Featured Articles type.
There is also a **Login Form** in the right side bar.

Initially, there are no featured articles so the main part of the page
is empty.

## Blog Sample Data

If you have created your own site content you should **not** install the
Blog Sample Data. However, please read through this section to see how
it compares. Otherwise:

- Select **Install** from the Multilingual Sample Data section of the
  Home Dashboard. The installation stages will briefly appear and then
  disappear.
- You should notice that several new menus are installed (reload the
  administrator page and expand the Menus menu):
  - Main Menu Blog.
  - Bottom Menu, containing Login/Logout menu items.
  - Special Menu, seen after login.
- Select the **Open Frontend** icon from the top Status bar or reload
  the Site if it is already open in a separate tab.

You should expect to see a layout full of Featured Articles information:

- At the top is the new **Main Menu Blog** menu for various blog layouts
  and articles.
- In the right sidebar are modules for a Login Form, a Main Menu and a
  My Blog RSS feed.
- After login, the right sidebar has a Special Menu for Administrator
  only actions.
- The Main Menu **Home** item leads to the Featured Articles layout.
- The top **Blog** menu item leads to a Category Blog layout somewhat
  different from the Featured Articles layout.

Take a few minutes to explore the menu items and the types of
information they lead to.

## Multilingual Sample Data

Before installing the Multilingual Sample Data you should install all
the languages you intend to use. If you need to install an additional
language later you will need to complete the configuration steps for
that language one by one manually. That will be covered elsewhere. For
this tutorial French, German and Welsh were added to the site default
English language during Joomla Installation. To add languages after
installation:

- Select **System **→** Install Languages** from the Administrator menu.
- Select the **Install** button for each language you propose to use.

Installation of the Multilingual Sample Data has effects that you will
have to deal with later:

- Menus in the right sidebar will be unpublished. That means that the
  Main Menu module will be unpublished and there will be no link to the
  Featured Articles layout. If you had other links in the Main Menu they
  will be unavailable too.
- The Special Menu will be unpublished. That provided a link to create a
  new post.

The Multilingual Sample Data provides the following additional features:

- An article category for each language.
- An article configured for each language, although in Lorem ipsum
  pseudo text.
- A separate menu for each language. You will see this in the
  **Administrator **→** Menus** list.
- A **Main Menu xx-YY** menu module in the Site right sidebar, where
  xx-YY is a language code such as en-GB.
- The **Main** menu item now leads to a Category Blog layout for
  articles in the selected Language. It contains just one article.
- There is a **Language Switcher** module in the right sidebar. It is
  untitled to avoid the need for a separate module for each language
  with translated titles. Selection is by language flag. Try it out.

Something to notice: words that are supplied by Joomla will be
translated, for example in the Breadcrumbs and the Login Form. Words
that are typed by users need to be manually translated, for example
Login Form and Main Menu. More on that later.

## Fixing Initial Problems

### Language Order

You may notice that the language switcher has languages in reverse
alphabet order. To change the order:

- Select **System **→** Content Languages** from the Administrator menu.
- Use vertical ellipsis icons to drag the languages into the desired
  order.
- Reload the Site and see the Language Switcher now has languages in
  your preferred order.

### Right Sidebar Module Order

The module order in the right sidebar is a matter of personal
preference. To change the order:

- Select **Content **→** Site Modules** from the Administrator menu.
- Filter by **Position **→** sidebar-right**.
- Select the order column icon to reveal the ordering drag handles
  (vertical ellipsis icons). The column heading icon should be a chevron
  pointing upwards.
- Drag items into order:
  - Language Switcher
  - Main Menu (all variants - order does not matter).
  - Special Menu
  - Login Form
  - Archived Articles
  - Syndication

### Featured Articles

The original Main Menu is unpublished but the Home menu item it contains
can be reproduced elsewhere. The most convenient place is the top menu.

- Select **Menus **→** Main Menu Blog** from the Administrator menu.
- Select the **New** button from the Toolbar.
- Enter a **Title** in the **Menus: New Item** form, for example
  **Featured**.
- Use the **Select** button in the **Menu Item Type** field.
- Select **Articles **→** Featured Articles** from the **Menu Item
  Type** list.
- Select **Save** from the Toolbar.
- In the **Ordering** field select **- First -**.
- In the **Blog Layout** tab set **Intro Articles** to 3.
- Select **Save & Close** from the Toolbar.

### Site Module Assignment

The original Home page Featured Articles layout was produced by
assigning selected modules to appear only on that one page. The new
Featured page needs to be added for each of those modules.

- Select **content **→** Site Modules** from the Administrator menu.
- Find and select the **Image** item.
- In the **Menu Assignment** tab, find and check the **Featured** item
  in the **Main Menu Blog** section.
- Select **Save & Close** from the Toolbar.
- Find and select the **Latest Posts** item.
- In the **Menu Assignment** tab, find and check the **Featured** item
  in the **Main Menu Blog** section.
- Select **Save & Close** from the Toolbar.

## Reload Site

When you reload the site the first item in the top menu will be the
Featured link leading to the Featured Articles layout. The adjacent Blog
item is a more compact Category Blog layout. Try the language switcher.
The Joomla supplied text, in the breadcrumbs and Login Form changes
accordingly. Also, the Featured articles now include one article from
the Multilingual Sample Data, that in the selected language.

### Hybrid or Pure Multilingual Site

At this stage you have a hybrid site: some content is available in all
languages and some content is available in a specific language. If you
want a pure Multilingual Site you will need to unpublish the top Main
Menu Blog module and perhaps others. In some cases you may wish to
produce language specific modules, for example the Login Form could have
versions with titles Formulaire de connexion, Login Formular and
Ffurflen Mewngofnodi.

What you do next is up to you!

## Original Main Menu

Your original Main Menu module, which is now unpublished, may have
contained additional menu items. You could publish it. The snag is that
the Home item links to the same location as each of the language
specific menu Home pages, but in English only. You can get around that
as follows:

- Select **Menus **→** Main Menu** from the Administrator menu.
- Select the **Home** menu item.
- Select the **Link Type** tab.
- Set **Display in Menu** to **No**.
- Select **Save & Close** from the Toolbar.
- Select **Content **→** Site Modules** from the Administrator menu.
- Find the **Main Menu** and Publish it, turning the grey cross to a
  green tick.

The visible items in the original Main Menu should now work normally.

## Adding an Extra Language

After the initial setup of a multilingual site, if you wish to add
another language you will have to go through the steps manually one by
one:

### Step 1: Install the Language

- Select **System **→** Install **→** Languages** from the Administrator
  menu.
- Find the required language in the **Extensions: Languages** list.
- Select the **Install** button.
- There will be a message: **Installation of the language pack was
  successful.**

In this example sequence the extra language is Spanish.

### Step 2: Publish and Order

- Select **System **→** Manage **→** Content Languages** from the
  Administrator menu.
- Enable the newly installed language: select the Status button to turn
  the grey cross into a green tick.
- Use vertical ellipsis icons to drag the languages into the desired
  order.

### Step 3: Create a Menu

- Select **Menus **→** Manage** from the Administrator menu.
- Select the **New** button from the Toolbar.
- Enter a suitable menu title and unique name, examples: Main Menu
  (es-ES) and mainmenu-es-es.
- Enter a Description, example: The main menu for the site in language
  Spanish (es-ES).

### Step 4: Add Menu Module

- Select **Menus **→** Manage** from the Administrator menu.
- Select the **Add a module for this menu** button for the newly created
  menu.
- Enter a suitable title, example: Main Menu es-ES
- Select a Position: Sidebar-right
- Select a Language: Spanish (es-ES)
- Select **Save**.
- Order the module: from the Ordering list select the item after which
  this new item should appear.
- Select **Save & Close**.

### Step 5: Add a Category

- Select **Content **→** Categories** from the Administrator menu.
- Select the **New** button in the Toolbar.
- Enter a suitable title, example: Categoría (es-es)
- Select the correct language: Spanish (es-ES)
- Select the **Associations** tab.
- For each language select a Category. There is only one choice in each
  case.

### Step 6: Add a Menu Item

- Select **Menus **→** Main Menu (es-ES)**, the newly created menu.
- Select the **New** button in the Toolbar.
- Enter a suitable title, example: Página de inicio
- Use the Select button at the end of the **Menu Item Type** field to
  select an item type.
- From the popup list select **Articles **→** Category Blog**.
- In the Choose a Category field use the Select button.
- From the popup Category list select the Categoría (es-es) category.
- Set the **Default Page** field to **Yes**.
- In the **Language** drop-down list select **Spanish (es-ES)**.
- **Save & Close**

### Step 7: Add an Article

The easy way to add an article for the new language is to copy an
existing article.

- Select **Content **→** Articles** from the Administrator menu.
- Select the article to copy, in this example **Article (en-GB)**.
- In the **Articles: Edit** form change the title to **Article
  (es-ES)**.
- Change the **Category** to **Categoria (es-es) (es-ES)**.
- Change the **Language** to Spanish (es-ES)**.**
- Select **Save as Copy** from the **Save & Close** drop-down list in
  the Toolbar. **Care!**
- Select the **Associations** tab.
- For each language select an article to be associated - the equivalent
  article in each language.
- Select **Save & Close** from the Toolbar.

## Adding a Multilingual Article

Suppose you wish to create an article in each of your selected
languages.

- Select **Content **→** Articles **→** +** from the Administrator menu
  or the **New** button from the Toolbar in the Articles list.
- Enter a title for the article, example **William Shakespeare**.
- Set the **Category** field to **Category (en-gb) (en-GB)**.
- Set the **Language** field to **English (en-GB)**.
- Enter the **Article Text**, example from Wikipedia:

“William Shakespeare (bapt. 26 April 1564 – 23 April 1616) was an
English playwright, poet and actor. He is widely regarded as the
greatest writer in the English language and the world's greatest
dramatist. He is often called England's national poet and the "Bard of
Avon" (or simply "the Bard"). His extant works, including
collaborations, consist of some 39 plays, 154 sonnets, three long
narrative poems, and a few other verses, some of uncertain authorship.
His plays have been translated into every major living language and are
performed more often than those of any other playwright. He remains
arguably the most influential writer in the English language, and his
works continue to be studied and reinterpreted.”

- Select **Save** from the Toolbar.
- Select the **Associations** tab.
- For each language:
  - Select the **Create** button.
  - In the popup **New Article** form enter a translated title,
    **William Shakespeare**.
  - Set the Category to that for the language you selected.
  - Enter the translated text into the **Article Text** field (you can
    try <a href="https://translate.google.com/" class="external free"
    target="_blank"
    rel="nofollow noreferrer noopener">https://translate.google.com/</a>).
  - Select **Save & Close**.
- After a new article for each language has been created, select **Save
  & Close**.

## Main Menu

If you have a link to an article for All Languages in the Main Menu and
you later use that article as a basis for associated articles in other
languages you will need to change the Main Menu link. Otherwise,
switching languages with that article selected will lead to a Page Not
Found error in the selected language.

- Select **Menus **→** Main Menu** from the Administrator menu.
- Select the menu item you need to change, for example **William
  Shakespeare**.
- Change the **Language** field to **English (en-GB)**.
- Select **Save & Close** from the Toolbar.

If there is only that one item in the Main Menu that module will
disappear when switching to other languages.
