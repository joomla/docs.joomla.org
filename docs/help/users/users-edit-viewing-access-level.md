<!-- Filename: Help4.x:Users:_Edit_Viewing_Access_Level / Display title: Users: Edit Viewing Access Level -->

## Description

Access levels control which users can view which objects on your site.
Objects include menu items, modules, categories, and component items
(articles, contacts, and so on). Each object in the site is assigned to
one access level. User groups are also assigned to each access level.

If a user is a member of a group that in turn has permission for an
access level, then that user can view all objects assigned to that
access level. It is important to understand that user groups can be
arranged in a parent-child hierarchy. If so, then a child group has
access to all access levels that the parent group has access to. So you
don't need to assign a child group access to levels that its parent
group already has access to.

## How to access

- Select **Users **→** Access Levels** from the Administrator menu.
  Then...
  - Select a link from the **Level Name** column to edit an existing
    level. Or...
  - Select the New button to create a new access level.

## Screenshot

<img
src="https://docs.joomla.org/images/b/b8/Help-4x-users-user-manager-add-new-viewing-access-level-en.png"
decoding="async" data-file-width="600" data-file-height="562"
width="600" height="562"
alt="Help-4x-users-user-manager-add-new-viewing-access-level-en.png" />

## Level Details

- **Level Title:** Enter a Title for this Access level.
- **User Groups With Viewing Access** Check any Group to have this
  Access Level.

## User Groups With Viewing Access

Select a check box to add a user group to a viewing level. In the
example shown all Groups are childs of Public so it not necessary to
check any of the child groups. They inherit the Public access
permissions. This feature should only be used for custom groups!

## Toolbar

At the top of the page you will see the toolbar shown in the
[Screenshot](#Screenshot) above. The functions are:

- **Save**. Saves the item and stays in the current screen.

<!-- -->

- **Save & Close**. Saves the item and closes the current screen.

<!-- -->

- **Save & New**. Saves the item and keeps the editing screen open and
  ready to create another item.

<!-- -->

- **Cancel**. Closes the current screen and returns to the previous
  screen without saving any modifications you may have made.

<!-- -->

- **Help**. Opens this help screen.

## Quick tips

- If you add a new group, you may need to edit any access levels that
  this group should have access to.

## Related information

- [Users: Viewing Access
  Levels](https://docs.joomla.org/Help4.x:Users:_Viewing_Access_Levels/en "Help4.x:Users: Viewing Access Levels/en")
- [User Manager: User:
  Groups](https://docs.joomla.org/Help4.x:Users:_Groups/en "Help4.x:Users: Groups/en")
- [ACL Tutorial for Joomla!
  3.x](https://docs.joomla.org/J3.x:Access_Control_List_Tutorial/en "J3.x:Access Control List Tutorial/en")
