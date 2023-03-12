<!-- Filename: J4.x:Fix_%22Cannot_reorder_menu_entries%22 / Display title: Fix "Cannot reorder menu entries" -->

## Errors reported

When reordering submenu items, the new ordering is not saved. See
<a href="https://github.com/joomla/joomla-cms/issues/37778"
class="external text" target="_blank"
rel="nofollow noreferrer noopener">the following issue for a detailed
description</a>.

## Versions affected

General Information

This affects only the following Joomla! version(s): **4.1.3**

## What is the cause

Conflicting parameters are send to the server which prevent Joomla! from
saving the new ordering.

## How to fix

See this <a href="https://github.com/joomla/joomla-cms/pull/37781"
class="external text" target="_blank"
rel="nofollow noreferrer noopener">Pull Request</a> for the fix,
especially <a
href="https://github.com/joomla/joomla-cms/pull/37781#issuecomment-1124536569"
class="external text" target="_blank"
rel="nofollow noreferrer noopener">this comment</a> for the files.
