<!-- Filename: Keyboard_Shortcuts / Display title: Keyboard Shortcuts -->

## Introduction

Since Joomla! 4.2.0 (and a GSoC project in 2021) users can use their
keyboard on the Administrator site to cause certain actions. For
example, saving the current page, going to the home dashboard or opening
the options. There is also an overview with all the possible shortcuts,
which opens up by pressing ***J*** and ***X*** sequentially (not at the
same time!). Unless you change the plugin settings you must press the
keys within 2 seconds.

The feature is enabled by default. It can be disabled or configured
under **Administrator **→** System **→** Plugins **→** System - Keyboard
Shortcuts**. Currently the only configuration is the timeout how long
the system will wait for your next key input. By default it waits for
2000 milliseconds (2 seconds).

## Default Shortcuts in Joomla

- J + A - Save current content
- J + S - For Save & Close
- J + Q - Cancels the current page
- J + N - Presses the *New* button
- J + F - Sets focus on the Search field
- J + O - Goes to Options
- J + H - Help window opens (could trigger a browser pop-up warning)
- J + M - Toggles the menu bar
- J + X - Displays a list of available Shortcuts
- J + D - Goes directly to the Home Dashboard

## Third Party Shortcuts

Other developers can add their shortcuts too. The Joomla plugin calls
the *onLoadShortcuts* Event, which can be used by other plugins as well.
The event needs to be added to the list of *getSubscribedEvents* inside
the plugin. The assigned function could look like this:

    public function onLoadShortcuts(EventInterface $event): void {
       $shortcuts = $event->getArgument('shortcuts');
       $exampleShortcuts = array('example' => (object)['shortcut' => 'E', 'title' => 'Great Example', 'selector' => '#menu-collapse']);
       $event->setArgument('shortcuts',  array_merge($shortcuts, $exampleShortcuts));
    }

Pay close attention to the array_merge part: When the already existing
shortcuts are not merged with the new ones, the old ones are
overwritten.

Developers can provide an array with shortcut objects:

    { shortcut: string, selector: string, title: string }

- The *Shortcut* needs to be a keyboard input, separated by a plus e.g.
  "Y" or "ALT + Z + 7" (currently there is really no filtering). Keep in
  mind that every shortcut sequence will start with ***J***.
- *Selectors* are CSS-selectors or URLs to specify the target. When it
  is an input element, the shortcut gives focus as it is the case for
  the search field. Otherwise the element will be clicked or the URL
  will be called.
- The *Title* will be displayed in the overview. It could be the name of
  the target for example.

## Backgrounds

Some may wonder about the decision to use sequential shortcuts or the
*J* as the start instead of Ctrl or something else. The main reasons are
accessibility and the avoidance of interruption by other software. For
example Ctrl + S would be nice for saving an article, but is already
used by browsers. The same can happen for screen readers or password
managers etc. So the safer option was to use something Joomla specific
like the J at the start.

Now the other problem is that it is not always possible to press more
than one key at once. Windows has the Sticky Key mode for this, but it
is only working for modifier keys like Shift, Ctrl and Alt. So the
plugin uses sequentially input right from the start which makes it
usable by more people even without the help of OS-modes.
