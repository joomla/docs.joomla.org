<!-- Filename: J4.x:Article_Pagination / Display title: Article Pagination -->

## Long Articles

The only limit on the length of an article in Joomla is the size of the
database field used to contain the article text. That is very large!
Long articles may contain many images and and take time to process,
which may prove an inconvenience for the reader and the website. So
there is a simple mechanism to break long articles into separate pages
with a table of contents.

## Insert a Page Break

To add page breaks, first open your article in your text editor, TinyMCE
is the default, and proceed as follows:

- Position the cursor at the location where a page break is to occur.
- From the **CMS Content** drop-down list select the `Page Break` item.
- In the Page Break dialog box enter:
  - Page Title - this will be appended to the existing page title.
    Example: Page 2
  - Table of Contents Alias - this will be used as text in the Table of
    Contents. Example: Chapter 2
- Select the `Insert Page Break` button.

<img
src="https://docs.joomla.org/images/thumb/b/b4/J4x-article-page-break-edit-en.png/800px-J4x-article-page-break-edit-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/b/b4/J4x-article-page-break-edit-en.png 1.5x"
data-file-width="1000" data-file-height="508" width="800" height="406"
alt="Article Page Break edit" />

- Repeat for each page break you wish to create.
- Save the article and have a look at the site view.

<img
src="https://docs.joomla.org/images/thumb/a/a9/J4x-article-page-break-display-en.png/800px-J4x-article-page-break-display-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/a/a9/J4x-article-page-break-display-en.png 1.5x"
data-file-width="1000" data-file-height="508" width="800" height="406"
alt="Article Page Break display" />

## Edit or Move a Page Break

You can select a page break and delete it. However, you can't cut and
paste it and you can't open an existing page break in the Page Break
form. So to move or change a page break use the Source Code editor as
follows.

- Select the text editor's More icon `...` to see the complete list of
  editor tools.
- Select the Source Code icon `<>`.
- Scroll down to the page break you wish to edit or move.

<img
src="https://docs.joomla.org/images/thumb/f/f3/J4x-article-page-break-source-code-en.png/800px-J4x-article-page-break-source-code-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/f/f3/J4x-article-page-break-source-code-en.png 1.5x"
data-file-width="1000" data-file-height="508" width="800" height="406"
alt="Article Page Break source code" />

- To move:
  - Select and Cut the line containing the page break. (Use the keyboard
    or mouse right click).
  - Place the cursor at the new position and Paste the cut line.
- To edit:
  - Change the title text and/or the alt text as you see fit.
- Select OK
- Save the article and have a look at the site view.
