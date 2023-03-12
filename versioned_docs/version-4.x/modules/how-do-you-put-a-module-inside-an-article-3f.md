<!-- Filename: How_do_you_put_a_module_inside_an_article%3F / Display title: How do you put a module inside an article? -->

Joomla!  <span class="small">≥ </span>2.5 series

You will usually want to associate modules with articles in some way.
The modules are allocated to module positions and the module positions
appear somewhere on the Web page as determined by the template. However,
it is sometimes useful to have a module actually embedded within the
article. Joomla core provides three ways to do that: loadposition,
loadmodule and loadmoduleid. The plugin "Content - Load Modules" must be
enabled.

Syntax:

- {loadposition position,\[style\]}
- {loadmodule mod_type,the title,\[style\]}
- {loadmoduleid moduleId}

## loadposition

To insert a module inside an article, you publish the module to a
position and load that position in the article as follows:

1.  Create a module and set its position to ***myposition***.
    ***myposition*** can be any value that doesn't conflict with an
    existing template position. Type in the position ***myposition***
    and press enter instead of selecting it from the drop-down list.
2.  Assign the module to **All** the Menu Items. This will make sure
    that it always appears, no matter how the visitor got to the
    article. The module will not show unless you put the command to load
    the module in an
    [article](https://docs.joomla.org/article "Special:MyLanguage/article").
3.  Edit the articles where you want this module to appear and insert
    the text ***{loadposition myposition}*** in the article at the place
    where you want the module.

\*Note that this only works when the [*Content - Load Module* plugin is
enabled](https://docs.joomla.org/Help25:Extensions_Plugin_Manager_Edit#Content_-_Load_Modules "Special:MyLanguage/Help25:Extensions Plugin Manager Edit").
If this plugin is disabled, the text *{loadposition myposition}* shows
unchanged in the article. Also, the name of the position should be all
lowercase. CamelCapitalization will fail.

## loadmodule

An alternative to "{loadposition xx}" is the "{loadmodule yyy}"
variation which is handled by the same plugin.

In this case the plugin looks for the first module who's **type**
matches the string 'yyy'. So you could load a "mod_login" module by
placing {loadmodule login} in your text. If you wish to load a specific
instance of a module, because you have more than one login module e.g.
titled as Login 1, Login 2, etc. you have to use {loadmodule
mod_modType, modTitle} where mod\_**modType** would be mod_login and
**modTitle** is name/title given to your instance of that module. So in
the example above you end up with **{loadmodule mod_login Login 2}**.
You can also add the style that is used for rendering the module. To do
so, add the style as the third parameter like {loadmodule
login,login2,xhtml}. If you don't add a style, then "none" is used.

## loadmoduleid

Since Joomla! version 3.9.0 an alternative to `{loadposition xx}` and
`{loadmodule yyy}` is the variation `{loadmoduleid z}` which is handled
by the same plugin.

In this case the plugin looks for the module who's `id` matches the
number `z`. So you could load the module with id 200 by placing
`{loadmoduleid 200}` in your text. This variant does not "understand"
additional parameters like the `style` parameter.

## Editor Button (since Joomla! version 3.5)

If the editor-xtd plugin "Button - Module" is activated you can use the
editor button "Module" to insert above described tags more easily into
the editor text. Since Joomla! 3.9 also the `loadmouleid` variant.

## Modules within Modules

It is possible in Joomla! 2.5+ and Joomla! 3.x+ to include a module
within a "Custom HTML" module. They are processed by content plugins in
the same way as articles.

To make this work, the option **Prepare content** must be enabled as
shown in this screenshot.

<img
src="https://docs.joomla.org/images/d/de/J3x_custom_html_prepare_content_option-en.png"
decoding="async" data-file-width="633" data-file-height="298"
width="633" height="298"
alt="Showing the Prepare Content option in a Custom HTML module." />

You should remember when doing this that you might experience formatting
issues as the "chrome" of the "Custom HTML" module will surround the
"chrome" of the included module potential having undesirable effects of
the formatting or layout. That's the reason why the "Module" editor
button is not available in modules of type "Custom".
