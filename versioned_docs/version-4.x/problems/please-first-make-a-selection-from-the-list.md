<!-- Filename: Please_first_make_a_selection_from_the_list / Display title: Please first make a selection from the list -->

This error message manifests on Administrator Forms for many non-core
extensions even when an item has been selected.

This backwards compatibility error will be fixed in core for 2.5.1.

### Temporary Workaround

Install the plugin from this forum item
<a href="http://forum.joomla.org/viewtopic.php?f=625&amp;t=691865"
class="external autonumber" target="_blank"
rel="noreferrer noopener">[1]</a>

### Extension Developers

To address this problem now so that your users do not have to wait for a
core fix, update your Administrator forms and change name="adminForm" to
id="adminForm". If backwards compatibility is required, simply use both
values in the form definition. In future releases, Joomla will only
support id="adminForm"

### Patch

A <a
href="http://joomlacode.org/gf/project/joomla/tracker/?action=TrackerItemEdit&amp;tracker_item_id=27880"
class="external text" target="_blank"
rel="nofollow noreferrer noopener">patch has been created</a> to fix the
backwards compatibility in 2.5.1
