<!-- Filename: Entering_raw_HTML_in_editors / Display title: Entering raw HTML in editors -->

If you want to enter raw
<a href="https://en.wikipedia.org/wiki/HTML" class="extiw"
title="wikipedia:HTML">HTML</a> in a Joomla! editor field, you may
encounter problems such as tags and attributes disappearing after you
save the item you are editing. This is usually caused by a filtering
mechanism; either your editor's or Joomla!'s.

## Global Text Editor Coniguration

On the [Administrator
panel](https://docs.joomla.org/Administrator_(Application) "Administrator (Application)"),
take the following steps to disable filtering:

### Disable Your Editor

Since each editor has its own filtering mechanism and it is not always
possible to turn it off, disabling your editor is the easiest way of
eliminating it as a possible source of the problem. Open your user
configuration from the *Administrator* → *Users* menu. Select the *Basic
Settings* tab. Change the *Editor* to *Editor - None*. Select *Save &
Close*.

### Disable Joomla's Filtering

Open the *Global Configuration* from the *Site* menu and go to the *Text
Filters* tab. Set the *Filter Type* to *No Filtering* for the user group
that you are in - *Administrator*, *Super Users*, or both (this is
site-dependent). **Caution**: Do not use the *No Filtering* setting for
user groups that are not fully trusted – that would introduce a sizeable
security risk.

You should be able to enter raw HTML in any editor field now. You may
try to re-enable your editor to see whether it influences the process.
If the editor does mangle the HTML you are trying to enter, consult its
documentation to see if there is a way to disable its filtering.

## When the Text Editor in Use is TinyMCE

You may be able to make some adjustments to it **and** keep your WYSIWYG
editor.

- Go to Administrator → Extensions → Plugins.
- Search for TinyMCE and open it for editing.
- Choose the Set 0 tab or whichever set has *Super-Users* or your
  desired user group.
- Scroll down to Prohibited Elements.
- Remove *,iframe* or whatever text you need to stop being prohibited.
- Select Save & Close.

Always be wary of doing this. Users may intentionally or unintentionally
(hacked accounts) post something malicious which could affect your
guests.
