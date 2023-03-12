<!-- Filename: J4.x:Article_Links / Display title: Article Links -->

## Accessible Links

Select a link in a document and your browser opens the linked document,
either in the same window, a new window or a new tab. A person using a
screen reader my be navigating by links alone so link text needs to be
meaningful.

The following is an example of **bad practice**.

    To find out more, click here

The following is an example of **good practice**:

    To find out more, read our Manifesto

To find out more about accessible links see this article on <a
href="https://www.a11yproject.com/posts/creating-valid-and-accessible-links/"
class="external text" target="_blank"
rel="nofollow noreferrer noopener">Creating valid and accessible
links</a>.

## Insert an External Link

For an external link you will need to copy the link to the clipboard
from the url bar of your browser. For this purpose it is helpful to have
separate windows or tabs open for your Joomla administrator Articles:
Edit form, your Joomla site article view and the remote site you are
creating a link to.

Open your article for editing. There are several methods available for
link creation. One method is to type in sentence that contains the text
to be used for the link text. For example:

`For more information, please visit the Joomla! website.`

Then:

- Select the word or words to be linked, in this case `Joomla! website`.
- either Select **Insert **→** Link** from the Article Text menu.
- or double click the selected text to open a popup menu that contains a
  link icon to select.

Either method will open an Insert/Edit Link dialog box:

<img
src="https://docs.joomla.org/images/thumb/f/ff/J4x-articles-external-link-dialog-en.png/800px-J4x-articles-external-link-dialog-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/f/ff/J4x-articles-external-link-dialog-en.png 1.5x"
data-file-width="1000" data-file-height="508" width="800" height="406"
alt="Article Insert/Edit Link" />

In the Insert/Edit Link dialog:

- In the `URL` field, paste the link copied from the destination window
  url bar.
- The `Text to display` field should contain the text you selected
  before opening the dialog. If not, any text you type here will be
  inserted into the article so needs to be something that makes
  contextual sense. Avoid `Click here` or `Read more`.
- The `Title` field creates a link Title attribute but its use by
  browsers is inconsistent and controversial for accessibility purposes.
  If in doubt, leave it blank.
- The `Rel` field has a number of options. If in doubt, leave it set to
  `None`. There is a list of options available in the *mdn web docs* <a
  href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel"
  class="external text" target="_blank"
  rel="nofollow noreferrer noopener">article on HTML attribute: rel</a>
- The `Open link in...` field is a simple choice between
  `Current Window` and `New Window`. The browser settings control
  whether that results in a new separate window or a new tab.
- Save

After saving the article, switch to the site view and check that the
link looks good and works properly. Also, try it with a Screen Reader!

## Insert an Article Link

The process to insert a link to an article in the same website is
similar up to the point where the link text is selected. For example:

- Type in the sentence containing the link text:
  `For more information, please see the Typography page.`
- Select the link text: `Typography`
- From the `CMS Content` drop-down list select `Article`.
- An Article dialog appears with a list of articles. Select the
  Typography article title.

Save the article and try it out in the site view.

## Remove a Link

The easy way:

- Click on the link.
- Select the ellipsis icon (...) to open the editor's expanded menu.
- Select the `Remove Link` icon.

The text remains but the link is gone.

An alternative:

- Double click on the link.
- Select the Link icon in the small popup.
- In the Insert/Edit Link dialog, delete the content of the URL field.
- Save

The text remains but the link is gone.
