<!-- Filename: J4.x:Restricting_access_to_an_Article / Display title: Restricting access to an Article -->

<span id="main-portal-heading">**Tutorial**  
How to Restrict Access to an Article</span> Joomla!  4.0

## Introduction

A key part of a Content Management System (CMS), is its ability to do
just that - manage content. Joomla! provides an easy way for you to
deliver your content to who you want to, when you want to.

This Tutorial looks specifically at restricting access to articles,
either completely or for specific types of users.

Utilising it's powerful Access Control List (ACL), Joomla! provides you
with an easy way to control who can see your articles by restricting
access from within each article by changing the **Access Level**.

**Note:** By default an article will be set as **Public** - accessible
by everyone.

## Considerations

Consider why you want to restrict access to the article:

1.  Is it an incomplete article? If so you could set the article to
    *Unpublished*.
2.  Is it an article that is being drafted for review by others? You can
    set the article so it is restricted to users that have the necessary
    access level.

**Note:** Joomla! 4 has introduced a new feature, *Workflows* allowing
you to define specific stages for article creation through to
publication.

## Changing the Access Level of the Article

If you are changing the access level of an existing article:

- Log in to the Administrator Home Dashboard.
- From the Home Dashboard Site Panel click on Articles or from the
  Sidebar Menu navigate to **Content **→** Articles** to open the
  Articles List.
- Find the article you want to restrict access to and click its title to
  open it.

Under most circumstances you would normally set access levels on an
article when you create it. Remember that the default access level of an
article is **Public**.

<img
src="https://docs.joomla.org/images/thumb/c/c1/J4.x_article_access_levels-en.png/300px-J4.x_article_access_levels-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/c/c1/J4.x_article_access_levels-en.png 1.5x"
data-file-width="442" data-file-height="638" width="300" height="433"
alt="J4.x article access levels-en.png" />

### Available Access Levels

**Public:** Can be viewed by everyone - logged in users and non logged
in users.

**Guest:** This access level restricts access to users who are **NOT**
logged in.

**Registered:** This level restricts access to users who are logged in.
An article set to registered will require a front end login before the
article can be viewed.

**Special:** This level restricts access to users who are logged in and
are in a specific user group other than Registered. In addition, it is
possible to differentiate content that some logged in users can access
but others can't. Typically this might be a website where subscriptions
are required to access additional content.

**Super Users:** Setting this level means only a Super User can access
the article.

Once you have the set the relevant access level select the **Save &
Close** button in the toolbar.

## Quick Tips

- Instead of on the article itself, you can set the access level on the
  menu item for the article.
