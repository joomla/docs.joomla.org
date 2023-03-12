<!-- Filename: J4.x:Access_Control / Display title: Access Control -->

## Introduction

Joomla has a sophisticated mechanism for controlling who can see and
manipulate content on a Joomla site. The **who** part is set up in the
Users component options with User Groups and Access Levels. The
**manipulate** part is set up in Action Permissions, either in Global
Configuration settings or in Component settings or in Item settings. For
example, default values set up in Global Permissions can be overridden
in Articles Permissions (all articles) and Articles Permissions can be
overridden in individual Article Permissions.

## User Groups

User Groups are used to divide site users into groups with different
responsibilities. For example, members of the Author user group have
permission to login to the Site, create articles and edit their own
articles. Nothing else! Members of the Super Users group have
responsibility for all aspects of site management and operation. Joomla
provides nine default user groups and you can create more if you need
them.

<img
src="https://docs.joomla.org/images/thumb/b/bf/J4x-user-groups-en.png/800px-J4x-user-groups-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/b/bf/J4x-user-groups-en.png 1.5x"
data-file-width="1000" data-file-height="556" width="800" height="445"
alt="J4x-user-groups-en.png" />

The default user groups are set up with parent child relationships to
minimise duplication of permissions. Examples of inheritance:

- A member of the Registered group does not have Administrator Login
  permission. Neither do Editor or Publisher.
- A member of the Author group has permission to Create and Edit Own. So
  do Editor and Publisher but they have extra permissions

You can create new user groups for special purposes as required. For
example, you may wish to create a group that has Administrator Login
permission but with access restricted to a single component. There is an
example of such a custom user group towards the end of this tutorial.

## Access Levels

Each time you create an object, such as an article, a module or a menu
item, you will see an Access field, usually in the right column of the
data entry form. It is a drop-down list offering a choice from Public,
Guest, Registered, Special and Super Users. The default is Public. The
default viewing access levels are shown in the following screenshot:

<img
src="https://docs.joomla.org/images/thumb/9/99/J4x-user-access-levels-en.png/800px-J4x-user-access-levels-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/9/99/J4x-user-access-levels-en.png 1.5x"
data-file-width="1000" data-file-height="386" width="800" height="309"
alt="J4x-user-access-levels-en.png" />

Examples:

- If you create a site module and set Access to Registered it will only
  be seen by users who are logged in to the site.
- If you create a site menu item and set Access to Super Users it will
  only be seen by Super Users who are logged in to the site.

## Permissions

The Global Configuration Permissions are the starting point from which
permission settings in components or individual items may inherit or
override. Screenshot:

<img
src="https://docs.joomla.org/images/thumb/9/92/J4x-permissions-global-en.png/800px-J4x-permissions-global-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/9/92/J4x-permissions-global-en.png 1.5x"
data-file-width="1000" data-file-height="1016" width="800" height="813"
alt="J4x-permissions-global-en.png" />

The screenshot shows that members of the Public group do not have
permission to take any actions. If you select each group in turn you
will see how the permissions change from group to group. Note that
Manager and Administrator are allowed Administrator Login but Author,
Editor and Publisher are not. The latter are effectively Site roles
rather than Administrator roles.

All group permissions inherit from the Public group. It does not have
permission for any actions. However, by default items in the Public
group can be viewed, so assigning Public permission to an item will
allow it to be seen by all site visitors whether logged in or not.

### Articles Permissions

The Articles Permissions actions differ from the Global Configuration
Permissions actions. Not present are items related to login and present
are items related to workflows. This is a fairly typical pattern: a
component will have permissions relevant to the component; a component
item (such as an article) will have permissions relevant to that one
item.

<img
src="https://docs.joomla.org/images/thumb/7/7f/J4x-permissions-articles-en.png/800px-J4x-permissions-articles-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/7/7f/J4x-permissions-articles-en.png 1.5x"
data-file-width="1000" data-file-height="1037" width="800" height="830"
alt="J4x-permissions-articles-en.png" />

### Single Article Permissions

The single article permissions has just three items: Delete, Edit and
Edit State:

<img
src="https://docs.joomla.org/images/thumb/1/18/J4x-permissions-article-en.png/800px-J4x-permissions-article-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/1/18/J4x-permissions-article-en.png 1.5x"
data-file-width="1000" data-file-height="711" width="800" height="569"
alt="J4x-permissions-article-en.png" />

## Access Control Example: Special Purpose User

Suppose you need to create a User Group for users who have only one
responsibility, in this example an Article Administrator. Users in this
group should have Administrator Login permission but should not see
anything other than the Content items. Procedure:

### Create a new User Group

- Select **Users **→** Groups** from the Administrator menu.
- Select the `New` button in the Toolbar.
- Fill out the Group Title field: Article Administrator
- The Group Parent must be Public - it has no permissions for anything.

<img
src="https://docs.joomla.org/images/thumb/c/c6/J4x-permissions-article-administrator-en.png/800px-J4x-permissions-article-administrator-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/c/c6/J4x-permissions-article-administrator-en.png 1.5x"
data-file-width="1000" data-file-height="249" width="800" height="199"
alt="J4x-permissions-article-administrator-en.png" />

### Assign to Special

- Select **Users **→** Access Levels** from the Administrator menu.
- Select the **Special** item.
- Select the Article Administrator checkbox in the **Users: Edit Viewing
  Access Level** form.
- Save & Close.

<img
src="https://docs.joomla.org/images/thumb/5/59/J4x-permissions-article-administrator-special-en.png/800px-J4x-permissions-article-administrator-special-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/5/59/J4x-permissions-article-administrator-special-en.png 1.5x"
data-file-width="1000" data-file-height="470" width="800" height="376"
alt="J4x-permissions-article-administrator-special-en.png" />

### Global Configuration Permissions

- Select **Home Dashboard **→** Global Configuration** from the
  Administrator menu.
- Select the **Permissions** tab.
- Select the **Article Administrator** group.
- Set **Adminstrator Login** to Allowed.
- Save & Close

<img
src="https://docs.joomla.org/images/thumb/6/66/J4x-permissions-article-administrator-global-en.png/800px-J4x-permissions-article-administrator-global-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/6/66/J4x-permissions-article-administrator-global-en.png 1.5x"
data-file-width="1000" data-file-height="940" width="800" height="752"
alt="J4x-permissions-article-administrator-global-en.png" />

### Articles Options Permissions

- Select **Content **→** Articles** from the Administrator menu.
- Select the `Options` button from the Toolbar.
- Select the **Permissions** tab.
- Select the **Article Administrator** group.
- Set all items except the first two (Configure ACL & Options and
  Configure Options Only) to Allowed.
- Save & Close

<img
src="https://docs.joomla.org/images/thumb/e/ef/J4x-permissions-article-administrator-articles-en.png/800px-J4x-permissions-article-administrator-articles-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/e/ef/J4x-permissions-article-administrator-articles-en.png 1.5x"
data-file-width="1000" data-file-height="930" width="800" height="744"
alt="J4x-permissions-article-administrator-articles-en.png" />

### Create or Edit User

- Create a new user or edit an existing user who is not assigned to any
  groups
- Select **Article Administrator** in the **Assigned User Groups** tab
  of the User edit form.
- Save & Close.
- Login as a user in the Article Administrator Group only. The menu
  should show only article-related items:

<img
src="https://docs.joomla.org/images/thumb/4/40/J4x-permissions-article-administrator-menu-en.png/800px-J4x-permissions-article-administrator-menu-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/4/40/J4x-permissions-article-administrator-menu-en.png 1.5x"
data-file-width="1000" data-file-height="451" width="800" height="361"
alt="J4x-permissions-article-administrator-menu-en.png" />
