<!-- Filename: Content_editors / Display title: Content editors -->

The standard editors available in
<img src="https://docs.joomla.org/images/7/7b/Compat_icon_CMS.png"
decoding="async" data-file-width="87" data-file-height="17" width="87"
height="17" alt="Joomla multi" />

## TinyMCE editor

**TinyMCE** is the default editor for both Frontend and Backend users.
TinyMCE is a **WYSIWYG** (what you see is what you get) editor that
allows users a familiar word-processing interface to use when editing
Articles and other content.

TinyMCE can be configured with 3 different sets of toolbar buttons

- **Set 2** is assigned to 'Public'.
- **Set 1** is assigned to the 'Manager' and 'Registered'.
- **Set 0** is the most extended toolbar and is by default assigned to
  the 'Administrator', 'Editor' and 'Super Users'.

<img
src="https://docs.joomla.org/images/thumb/f/fb/Help30-editor-tinymce-advanced-en.png/600px-Help30-editor-tinymce-advanced-en.png"
decoding="async"
srcset="https://docs.joomla.org/images/f/fb/Help30-editor-tinymce-advanced-en.png 1.5x"
data-file-width="669" data-file-height="114" width="600" height="102"
alt="Help30-editor-tinymce-advanced-en.png" />

Learn about Toolbars, Editor Buttons and Accessibility of
[TinyMCE](https://docs.joomla.org/Chunk30:TinyMCE "Special:MyLanguage/Chunk30:TinyMCE").

## Code Mirror

The CodeMirror editor is designed to make it easy to enter HTML code in
an article or description. CodeMirror supports syntax highlighting and
auto-completion, as shown in this screenshot.

<img
src="https://docs.joomla.org/images/thumb/e/e2/Help25-screenshot-editor-codemirror-example-en.png/320px-Help25-screenshot-editor-codemirror-example-en.png"
decoding="async"
srcset="https://docs.joomla.org/images/e/e2/Help25-screenshot-editor-codemirror-example-en.png 1.5x"
data-file-width="326" data-file-height="165" width="320" height="162"
alt="Help25-screenshot-editor-codemirror-example-en.png" />

CodeMirror offers some of the same advantages of using No Editor, but
makes it somewhat easier to work with raw HTML code.

To set options: [CodeMirror Editor
Plugin](https://docs.joomla.org/Help310:Extensions_Plugin_Manager_Edit#Editor_-_CodeMirror "Special:MyLanguage/Help310:Extensions Plugin Manager Edit")

## No editor

If 'No editor' is selected for a User, then a simple text editor
displays. This allows you to enter in raw, unformatted HTML. You can use
the toolbar 'Preview' button to preview how the HTML will display.

Note that the 'No Editor' option can be useful if you are entering in
'boilerplate' or custom HTML, for example to create a PayPal link.
TinyMCE automatically re-formats and strips some HTML when a file is
saved. This can cause complex HTML to not work correctly.

If this happens, you can temporarily change the editor to 'No Editor'
and create the desired content. Note that if you wish to edit this
content in the future, you should be careful to change your editor to
'No Editor'. Otherwise, if you open and save the content with TinyMCE,
you may lose your custom HTML.
