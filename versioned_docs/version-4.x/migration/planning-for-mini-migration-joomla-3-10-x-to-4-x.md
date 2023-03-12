<!-- Filename: Planning_for_Mini-Migration_-_Joomla_3.10.x_to_4.x / Display title: Planning for Mini-Migration - Joomla 3.10.x to 4.x -->

Going from Joomla 3.10.x to 4.x is considered a mini-migration or a
minor migration. This means that Joomla core extensions will upgrade
with a “one-click update” but third-party extensions are debatable and
need to be taken on a case by case basis.

## Intro

Migrations are a great time to reassess goals, clean up, and develop
other areas/elements of your site. The more organised you can be with
your ideas/thoughts/plans the better. Plan, plan, plan. Planning makes
execution easier.

Start planning by asking the following questions or doing the tasks
listed below. You may have more items to plan for depending on the
complexity of your site. Sadly, there is no way we can list every
possible scenario. Please post to the
<a href="https://forum.joomla.org/viewforum.php?f=812"
class="external text" target="_blank"
rel="noreferrer noopener">Migrating and Upgrading to Joomla 4.x
Forum</a> for assistance.

## The 3.10.x Bridge

Joomla 3.10.x is intended to be a bridge between the Joomla 3 life cycle
and the Joomla 4 life cycle. Joomla 3.10.x will primarily be a release
containing backports of API changes from the Joomla 4.x development
branch to help ease the transition to the next major release for the
community. New to Joomla 3.10.x is an excellent feature to the Joomla!
Update component to help you with your mini-migration process: the
[Pre-Update
Check](https://docs.joomla.org/Pre-Update_Check "Special:MyLanguage/Pre-Update Check").
Once your website is updated to 3.10, the pre-update check will allow
you to check the compatibility with Joomla 4.0 of your PHP and SQL
options, settings, and the extensions you are using as long as extension
developers utilised the targetplatform tag. See [Pre-Update
Check](https://docs.joomla.org/Pre-Update_Check "Special:MyLanguage/Pre-Update Check")
documentation for more.

## Planning Action Items

The following assumes that you have already updated your Joomla 3.x site
to version 3.10.x. This will allow you to take advantage of the
Pre-Update Checker as part of your planning.

1.  Make sure your website is running 3.10.x.
2.  Assess your original site goals. Migration is an opportunity to get
    back into focus with your goals or change direction.
3.  Does your server meet the minimum <a
    href="https://www.joomla.org/about-joomla/technical-requirements.html"
    class="external text" target="_blank"
    rel="noreferrer noopener">technical requirements</a> for Joomla 4?
    If not, you will need to change hosts. No better time to change
    hosts than during a migration.
4.  What kind of development environment will you use? A development
    environment on your local device? A subdomain or subdirectory on
    your server? A new server/hosting account due to technical
    specifications?
5.  Make a list of all third-party extensions in use. This includes
    components, modules, plugins, languages, and templates. You may just
    copy/paste them into a document for reference, or a paper and pen
    works too. Include if these extensions are used heavily, moderately,
    hardly ever, or not at all.
6.  Determine whether the third-party extensions you rely on are ready
    for the version of Joomla you are migrating to by selecting the
    Joomla Next option (once running Joomla 3.10.x) in the Joomla Update
    Component and checking if they show compatibility with Joomla 4.
    Don’t run the update to 4.x, just select Joomla Next in the Joomla
    Update Options so that the Pre-Update Checker can display. This will
    help you get a summary view of extensions in use and their
    compatibility. It is not a substitute for still needing to use
    Extensions → Manage. More on that in the Step-by-Step and the
    documentation for the [Pre-Update
    Check](https://docs.joomla.org/Pre-Update_Check "Special:MyLanguage/Pre-Update Check")
    component. This is simply to get prepared on what third-party
    extensions will stay or go or be replaced.
7.  Determine if you really need all the extensions you are using. Could
    it be that Joomla 4 has built in features that could eliminate the
    use of a third-party extension?
8.  Take a look at your Categories and Articles. Is there clean-up that
    needs to be done so that you don’t migrate unnecessary content?
9.  What about your template? If you purchased your template from a
    third-party source, is there a 4.x version released for it? Would
    you like to continue using it? Is there an upgrade path published by
    the developer? Is the new version of it responsive? Is your template
    a custom template? Or was it heavily customised from a third-party
    template? The Joomla core template for Joomla 3.x, **Protostar is
    NOT compatible with Joomla 4**. Upon migration it will disappear.
    Using the Joomla core template for Joomla 4.x, Cassiopeia might be
    an option for you. For an expansion of Template based
    considerations, see [Template Considerations During
    Migration](https://docs.joomla.org/Template_Considerations_During_Migration "Special:MyLanguage/Template Considerations During Migration").
10. If you are changing out your template for a new one, will it require
    any new images? For example, if your current site has a white
    background and your logo or other images are .jpg images with a
    white background it won’t look very nice against a new template with
    an off-white or coloured background.
11. If you redesign or make changes to your site design or navigation,
    will you have obsolete pages that will require a redirect? If so,
    document them. A spreadsheet is helpful for documenting links that
    will need to change.

<a
href="https://docs.joomla.org/Joomla_3.x_to_4.x_Step_by_Step_Migration"
id="content-button" class="button expand">Joomla 3.10 to 4.x Step by
Step Migration</a>
