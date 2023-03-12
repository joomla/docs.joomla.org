<!-- Filename: Planning_Migration_-_Joomla_1.5_to_4 / Display title: Planning Migration - Joomla 1.5 to 4 -->

Going from Joomla! 1.5 to 4.x is considered a migration or a major
migration. This means that considerable changes in how Joomla works,
tables, technology have occurred that require a migration instead of an
upgrade or update. Both Joomla core extensions and any third-party
extensions will need to migrate to Joomla 4.x. This includes the
template. Every single thing needs to be looked at, planned, decided
upon, and executed. You will need to be diligent with staying organized
throughout the process.

## Intro

The fabulous thing about migration is that it is a great time to
reassess goals, create a new look and feel (template), clean up, and
develop other areas/elements of your site. The more organized you can be
with your ideas/thoughts/plans the better. Plan, plan, plan. Planning
makes execution easier.

Start planning by asking the following questions or doing the tasks
listed below. You may have more items to plan for depending on the
complexity of your site. Sadly, there is no way we can list every
possible scenario.

You can ask specific questions on the
<a href="https://forum.joomla.org/viewforum.php?f=808" class="extiw"
title="jforum:808">Joomla 4.x General Questions/New to Joomla 4.x
Forum</a>.

## Planning Action Items

### General

1.  Assess your original site goals. Migration is an opportunity to get
    back into focus with your goals or change direction.
2.  Does your server meet the minimum
    <a href="http://www.joomla.org/about-joomla/technical-requirements.html"
    class="external text" target="_blank"
    rel="noreferrer noopener">technical requirements</a> for Joomla 4?
    If not, you will need to change hosts. No better time to change
    hosts than during a migration.
3.  What kind of development environment will you use? A development
    environment on your local device? A subdomain or subdirectory on
    your server? A new server/hosting account due to technical
    specifications?

### Joomla Core

1.  Clean-up your current site. Take a look at your Sections,
    Categories, and Articles. Sections are converted to higher level
    categories from Joomla 2.5 on. Is there clean-up that needs to be
    done so that you don’t migrate unnecessary content? Document what
    you want to delete. Alternatively, you may want to document what you
    want to bring over depending on quantity.
2.  Organize your content on the current site. Do the Categories you
    have still apply? Document new categories you may want to add in
    your new site.
3.  Do you have any articles in the trash? If so, delete them (and any
    applicable media that may be associated with them if not in use
    elsewhere on the site). Articles (categories and menu items too)
    left in the trash can cause duplicate alias issues once migrated.
4.  The Media Manager: Decide whether you want to bring your entire
    /images directory over or just part of it. If your Media Manager has
    become a disaster, you may decide to bring over specific images via
    FTP or cPanel instead of migrating the entire directory. In the
    future, organize folders in the Media Manager so you don’t end up
    with a big mess.
5.  If you are using core components like Joomla Contacts, Web Links, or
    Newsfeeds, document this as you will need to bring those over.
6.  Check your menus and determine if you will bring them all over or
    only specific menus and menu items. Delete any menu items from the
    trash to prevent duplicate aliases.
7.  If you redesign or make changes to your site design or navigation,
    will you have obsolete pages that will require a redirect? Track all
    URLs that need redirects on a spreadsheet or notepad.
8.  Did you “hack the core” of your 1.5 site? If so, those changes will
    not migrate to Joomla 4. You will want to find alternatives to
    hacking the core in Joomla 4 (<a
    href="https://docs.joomla.org/How_to_override_the_output_from_the_Joomla!_core"
    class="new"
    title="Special:MyLanguage/How to override the output from the Joomla! core (page does not exist)">How
    to override the output from the Joomla! core</a>, [Understanding
    Output
    Overrides](https://docs.joomla.org/Understanding_Output_Overrides "Special:MyLanguage/Understanding Output Overrides"),
    [Layout Overrides in
    Joomla](https://docs.joomla.org/Layout_Overrides_in_Joomla "Special:MyLanguage/Layout Overrides in Joomla")).
9.  Check your User Manager. Are you intending to bring them all over?
    Is there clean up required? Perhaps Super Administrators that no
    longer should have access or spam users that need to be deleted? Are
    you using some kind of third-party extension to enhance User
    Profiles? This part needs careful planning. Especially if the user
    data changes frequently.
10. Are there new features of Joomla that you wish to use, like Access
    Control Levels (ACLs), tags, workflows, or custom fields? If so,
    start planning for that now. Planning ACLs is cautious business.
    Being thorough is very important.

### Third-party Extensions

1.  Make a list of all third-party extensions in use. This includes
    components, modules, plugins, languages, and templates. You may
    copy/paste them from the Manage page into a document for reference
    if you’d like. A piece of paper and a pen will suffice. Include if
    these extensions are used heavily, moderately, hardly ever, or not
    at all.
2.  Determine whether the third-party extensions you rely on are ready
    for the version of Joomla you are migrating to.
3.  Determine if you really need all the extensions you are using. Could
    it be that Joomla 4 has built in features that could eliminate the
    use of a third-party extension?
4.  What about your template? If you purchased your template from a
    third-party source, is there a 4.x version released for it? Would
    you like to continue using it? Is there a migration path published
    by the developer? Is the new version of it responsive? Is your
    template a custom template? Or was it heavily customized from a
    third-party template? For an expansion of Template based
    considerations, see [Template Considerations During
    Migration](https://docs.joomla.org/Template_Considerations_During_Migration "Special:MyLanguage/Template Considerations During Migration").
5.  If you are changing out your template for a new one, will it require
    any new images? For example, if your current site has a white
    background and your logo or other images are .jpg images with a
    white background it won’t look very nice against a new template with
    an off-white or coloured background.

<a
href="https://docs.joomla.org/Joomla_1.5_to_4.x_Step_by_Step_Migration"
id="content-button" class="button expand">Joomla! 1.5 to 4.x Step by
Step Migration</a>
