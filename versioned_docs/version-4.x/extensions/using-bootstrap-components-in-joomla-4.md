<!-- Filename: J4.x:Using_Bootstrap_Components_in_Joomla_4 / Display title: Using Bootstrap Components in Joomla 4 -->

## Introduction

### Bootstrap Components

Some of the components described in the Bootstrap documentation use CSS
only. For example, the Breadcrumbs component is rendered with CSS and
requires no JavaScript support. Others respond to user actions such as
click or hover, and need JavaScript support. The latter are referred to
here as Interactive Components. This article explains how to use them in
Articles and a Custom Module.

See: <a
href="https://getbootstrap.com/docs/5.0/getting-started/introduction/"
class="external text" target="_blank"
rel="nofollow noreferrer noopener">Bootstrap Documentation</a>

### Joomla 4 Introduces a Modular Approach for Interactive Components

- What is a modular approach?
- The functionality is broken down into individual components supported
  by individual files. There is no **one file** approach as it was with
  Bootstrap in Joomla 3. The modular approach is more efficient and
  offers performance gains (send only the code that is needed instead of
  delivering everything in case some page will need some component).

### Using Interactive Components: Coders

- Load what you need per case! There are helper functions to set up
  individual components with appropriate arguments.
- See the list of Bootstrap Interactive Components.

### Using Interactive Components: Non-Coders

- Using components in articles is not so easy because the helper
  functions cannot be called from an article or standard Custom HTML
  module. Three possible solutions are suggested later in this tutorial:
  - A custom module
  - A custom plugin
  - A custom module override
- Skip or scan the list of Bootstrap Interactive Components. You won't
  be using these function calls directly.

## Bootstrap Interactive Components

### Alert

Assuming you have the HTML part already in your Layout, you will also
need to include the interactivity (the JavaScript part):

    \Joomla\CMS\HTML\HTMLHelper::_('bootstrap.alert', '.selector');

- The **.selector** refers to the CSS selector for the alert. You can
  call this function multiple times with different CSS selectors
- No extra options available

### Button

Assuming you have the HTML part already in your Layout, you will also
need to include the interactivity (the JavaScript part):

    \Joomla\CMS\HTML\HTMLHelper::_('bootstrap.button', '.selector');

- The **.selector** refers to the CSS selector for the button. You can
  call this function multiple times with different CSS selectors
- No extra options available

### Carousel

Assuming you have the HTML part already in your Layout, you will also
need to include the interactivity (the JavaScript part):

    \Joomla\CMS\HTML\HTMLHelper::_('bootstrap.carousel', '.selector', []);

- The **.selector** refers to the CSS selector for the carousel. You can
  call this function multiple times with different CSS selectors
- The third argument refers to the options available for carousel

Options for the carousel can be:

- **interval**, number, default:**5000**, The amount of time to delay
  between automatically cycling an item. If false, carousel will not
  automatically cycle.
- **keyboard**, boolean, default:**true** Whether the carousel should
  react to keyboard events.
- **pause**, string\|boolean, **hover** Pauses the cycling of the
  carousel on mouseenter and resumes the cycling of the carousel on
  mouseleave.
- **slide**, string\|boolean, default:**false** Autoplays the carousel
  after the user manually cycles the first item. If "carousel",
  autoplays the carousel on load.

### Collapse

Assuming you have the HTML part already in your Layout, you will also
need to include the interactivity (the JavaScript part):

    \Joomla\CMS\HTML\HTMLHelper::_('bootstrap.collapse', '.selector', []);

- The **.selector** refers to the CSS selector for the collapse. You can
  call this function multiple times with different CSS selectors
- The third argument refers to the options available for collapse

Options for the collapse can be:

- **parent**, string, default:**false** If parent is provided, then all
  collapsible elements under the specified parent will be closed when
  this collapsible item is shown.
- **toggle**, boolean default:**true** Toggles the collapsible element
  on invocation

### Dropdown

Assuming you have the HTML part already in your Layout, you will also
need to include the interactivity (the JavaScript part):

    \Joomla\CMS\HTML\HTMLHelper::_('bootstrap.dropdown', '.selector', []);

- The **.selector** refers to the CSS selector for the dropdown. You can
  call this function multiple times with different CSS selectors
- The third argument refers to the options available for dropdown

Options for the collapse can be:

- **flip**, boolean, default:**true** Allow Dropdown to flip in case of
  an overlapping on the reference element
- **boundary**, string, default:**scrollParent** Overflow constraint
  boundary of the dropdown menu
- **reference**, string, default:**toggle** Reference element of the
  dropdown menu. Accepts **toggle** or **parent**
- **display**, string, default:**dynamic** By default, we use Popper for
  dynamic positioning. Disable this with **static**

### Modal

Assuming you have the HTML part already in your Layout, you will also
need to include the interactivity (the JavaScript part):

    \Joomla\CMS\HTML\HTMLHelper::_('bootstrap.modal', '.selector', []);

- The **.selector** refers to the CSS selector for the modal. You can
  call this function multiple times with different CSS selectors
- The third argument refers to the options available for modal

Options for the modal can be:

- **backdrop**, string\|boolean default:**true** Includes a
  modal-backdrop element. Alternatively, specify static for a backdrop
  which doesn't close the modal on click.
- **keyboard**, boolean default:**true** Closes the modal when escape
  key is pressed
- **focus**, boolean default:**true** Closes the modal when escape key
  is pressed

### Offcanvas

Assuming you have the HTML part already in your Layout, you will also
need to include the interactivity (the JavaScript part):

    \Joomla\CMS\HTML\HTMLHelper::_('bootstrap.offcanvas', '.selector', []);

- The **.selector** refers to the CSS selector for the offcanvas. You
  can call this function multiple times with different CSS selectors
- The third argument refers to the options available for offcanvas

Options for the offcanvas can be:

- **backdrop**, boolean, default:**true** Apply a backdrop on body while
  offcanvas is open
- **keyboard**, boolean, default:**true** Closes the offcanvas when
  escape key is pressed
- **scroll**, boolean, default:**false** Allow body scrolling while
  offcanvas is open

### Popover

Assuming you have the HTML part already in your Layout, you will also
need to include the interactivity (the JavaScript part):

    \Joomla\CMS\HTML\HTMLHelper::_('bootstrap.popover', '.selector', []);

- The **.selector** refers to the CSS selector for the popover. You can
  call this function multiple times with different CSS selectors
- The third argument refers to the options available for popover

Options for the popover can be:

- **animation**, boolean, default:**true** Apply a CSS fade transition
  to the popover
- **container**, string\|boolean, default:**false** Appends the popover
  to a specific element. Eg.: **body**
- **content**, string, default:**null** Default content value if
  data-bs-content attribute isn't present
- **delay**, number, default:**0** Delay showing and hiding the popover
  (ms) does not apply to manual trigger type
- **html**, boolean, default:**true** Insert HTML into the popover. If
  **false**, innerText property will be used to insert content into the
  DOM.
- **placement**, string, default:**right** How to position the popover -
  **auto** \| **top** \| **bottom** \| **left** \| **right**. When auto
  is specified, it will dynamically reorient the popover
- **selector**, string, default:**false** If a selector is provided,
  popover objects will be delegated to the specified targets.
- **template**, string, default:**null** Base HTML to use when creating
  the popover.
- **title**, string, default:**null** Default title value if **title**
  tag isn't present
- **trigger**, string, default:**click** How popover is triggered -
  **click** \| **hover** \| **focus** \| **manual**
- **offset**, integer, default:**0** Offset of the popover relative to
  its target.

### Scrollspy

Assuming you have the HTML part already in your Layout, you will also
need to include the interactivity (the JavaScript part):

    \Joomla\CMS\HTML\HTMLHelper::_('bootstrap.scrollspy', '.selector', []);

- The **.selector** refers to the CSS selector for the scrollspy. You
  can call this function multiple times with different CSS selectors
- The third argument refers to the options available for scrollspy

Options for the Scrollspy can be:

- **offset** number Pixels to offset from top when calculating position
  of scroll.
- **method** string Finds which section the spied element is in.
- **target** string Specifies element to apply Scrollspy plugin.

### Tab

Assuming you have the HTML part already in your Layout, you will also
need to include the interactivity (the JavaScript part):

    \Joomla\CMS\HTML\HTMLHelper::_('bootstrap.tab', '.selector', []);

- The **.selector** refers to the CSS selector for the tab. You can call
  this function multiple times with different CSS selectors
- The third argument refers to the options available for tab

Options for the Tab can be:

### Tooltip

Assuming you have the HTML part already in your Layout, you will also
need to include the interactivity (the JavaScript part):

    \Joomla\CMS\HTML\HTMLHelper::_('bootstrap.tooltip', '.selector', []);

- The **.selector** refers to the CSS selector for the tooltip. You can
  call this function multiple times with different CSS selectors
- The third argument refers to the options available for tooltip

Options for the tooltip can be:

- **animation**, boolean apply a css fade transition to the popover
- **container**, string\|boolean Appends the popover to a specific
  element: { container: **body** }
- **delay**, number\|object delay showing and hiding the popover (ms) -
  does not apply to manual trigger type If a number is supplied, delay
  is applied to both hide/show Object structure is: delay: { show: 500,
  hide: 100 }
- **html**, boolean Insert HTML into the popover. If false, jQuery's
  text method will be used to insert content into the dom.
- **placement**, string\|function how to position the popover - **top**
  \| **bottom** \| **left** \| **right**
- **selector** string If a selector is provided, popover objects will be
  delegated to the specified targets.
- **template**, string Base HTML to use when creating the popover.
- **title**, string\|function default title value if **title** tag isn't
  present
- **trigger**, string how popover is triggered - hover \| focus \|
  manual
- **constraints**, array An array of constraints - passed through to
  Popper.
- **offset**, string Offset of the popover relative to its target.

### Toast

Assuming you have the HTML part already in your Layout, you will also
need to include the interactivity (the JavaScript part):

    \Joomla\CMS\HTML\HTMLHelper::_('bootstrap.toast', '.selector', []);

- The **.selector** refers to the CSS selector for the toast. You can
  call this function multiple times with different CSS selectors
- The third argument refers to the options available for toast

Options for the toast can be:

- **animation**, boolean, default:**true** Apply a CSS fade transition
  to the toast
- **autohide**, boolean, default:**true** Auto hide the toast
- **delay**, number , default:**5000** Delay hiding the toast (ms)

### See Also

- **Accordian** uses Collapse to display panels of data.
- **List Group** can be combined with Tab to display tabbed content.

## Using Bootstrap Components in Articles

The HTML mark-up for most components can be included in an article or a
module that can itself be included in an article. The snag is that the
HTMLHelper call to set up the JavaScript support cannot be included
there. There are several possible approaches to this problem. Three
approaches are suggested here, using a custom Module, using a Plugin or
using a Template override.

**Caution:** The TinyMCE and JCE editors remove white space on Save and
make editing code difficult! The simple solution is to go to the top
right of your Administrator screen and select **User Menu **→** Edit
Account** and set the Editor to Code Mirror.

## Approach 1: Using a Custom Module

This is probably the least error prone approach because the Bootstrap
component support options are selected with check boxes. The steps
involved are as follows:

- Download, install and enable this module: <a
  href="https://github.com/ceford/j4xdemos-mod-custom-bscompos/raw/master/mod_custom_bscompos.zip"
  class="external free" target="_blank"
  rel="nofollow noreferrer noopener">https://github.com/ceford/j4xdemos-mod-custom-bscompos/raw/master/mod_custom_bscompos.zip</a>
- From the Administrator menu go to **Content **→** Site
  Modules **→** New**
- Select **Custom BS Components**
- Enter a Title
- Toggle the Editor to plain text mode and paste in or type in the HTML
  code for the component you want to use.
- In the Options tab scroll down to the list of BS Components and select
  type of component in this instance of the module. Note that you can
  select more than one if your using more than one component.
- Select a module Position: either
  - a template defined position if you want to use the module in a
    specific location or
  - type in a position if you wish to use the module within a specific
    article: in the article type in {loadposition whatever}
- Save and go to the site to Test!

### Selectors

For some components JavaScript action is triggered by a specific
**class** in the HTML code. In other components action is triggered by a
**data-bs-whatever** attribute. The following are the current triggers
and may change:

- **Alert** triggered by class="alert ..."
- **Button** triggered by data-bs-toggle="button"
- **Carousel** triggered by data-bs-ride="whatever"
- **Collapse** triggered by data-bs-toggle="collapse"
- **Dropdown** triggered by data-bs-toggle="dropdown"
- **Modal** triggered by data-bs-toggle="modal"
- **Offcanvas** triggered by data-bs-toggle="offcanvas"
- **Popover** triggered by class="btn ..." or
  tag (could be changed to class="haspopover ...") AND
  data-bs-toggle="popover"
- **Scrollspy** triggered by data-bs-spy="scroll"
- **Tab** triggered by data-bs-toggle="tab"
- **Toast** triggered by class="toast ..."
- **Tooltip** triggered by class="btn ..." or
  tag (could be changed to class="hastooltip ...") AND
  data-bs-toggle="tooltip"

### Example 1: Alert

Alerts may be used in html code without JavaScript support. This is only
needed for the dismiss capability. HTML code example:

      Holy guacamole! You should check in on some of those fields below.
      

Example result of including a module in an article:

<img
src="https://docs.joomla.org/images/4/4c/Using-bootstrap-components-in-joomla-4-alert-demo.png"
class="thumbborder" decoding="async" data-file-width="800"
data-file-height="143" width="800" height="143" alt="Alert Demo" />

Note that without JavaScript support, the alert will appear exactly as
above but a click on the close button \[X\] will not dismiss the alert.
Also, the alert will appear on every page load.

### Example 2: Buttons

Buttons may be used in HTML code without JavaScript support. This is
only needed for the sometimes subtle change of style applied to buttons
with a change of state, styled active. Bootstrap example code:

    Toggle button
    Active toggle button
    Disabled toggle button

    Toggle link
    Active toggle link
    Disabled toggle link

With this style in the template user.css:

    .btn.btn-primary.active {
        background-color: green;
    }

<img
src="https://docs.joomla.org/images/e/e9/Using-bootstrap-components-in-joomla-4-button-demo.png"
class="thumbborder" decoding="async" data-file-width="985"
data-file-height="239" width="985" height="239" alt="Button Demo" />

The buttons toggle between blue and green.

### Example 3: Carousel

The Carousel offers a slide show cycling through a series of images or
text panes. The following example used images from the Joomla 4 Sample.
Bootstrap code:

        
             
             
            
        
        
            
                
                    First slide label
                    Some representative placeholder content for the first slide.
                
            
            
                
                    Second slide label
                    Some representative placeholder content for the second slide.
                
            
            
                
                    Third slide label
                    Some representative placeholder content for the third slide.
                
            
        
         
            Previous 
         
         
            Next 
        

Result:

<img
src="https://docs.joomla.org/images/5/5d/Using-bootstrap-components-in-joomla-4-carousel-demo.jpg"
class="thumbborder" decoding="async" data-file-width="998"
data-file-height="447" width="998" height="447" alt="Carousel Demo" />

### Example 4: Collapse

Collapse is widely used in Joomla and you may not need to use a module
or plugin to trigger action. The click opens a pane with extra
information. Example Bootstrap code:

         Link with href  
         
            Button with data-bs-target 
        


        
            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
        

Result:

<img
src="https://docs.joomla.org/images/3/3c/Using-bootstrap-components-in-joomla-4-collapse-demo.png"
class="thumbborder" decoding="async" data-file-width="1011"
data-file-height="261" width="1011" height="261" alt="Collapse Demo" />

### Example 5: Dropdown

Dropdowns are toggleable, contextual overlays for displaying lists of
links and more. Example Bootstrap code:

         Action 
        
            Action
            Another action
            Something else here
            
            Separated link
        

Result:

<img
src="https://docs.joomla.org/images/3/36/Using-bootstrap-components-in-joomla-4-dropdown-demo.png"
class="thumbborder" decoding="async" data-file-width="996"
data-file-height="258" width="996" height="258" alt="Dropdown Demo" />

### Example 6: Modal

The Modal component opens a dialog box in the middle of the screen.
There are quite a few options to control the size and content of the
modal. See the Bootstrap documentation for more details. Example
Bootstrap code:

     Launch demo modal 

        
            
                
                    Modal title
                    
                
                
                    ...
                
                
                    Close 
                    Save changes
                
            
        

Result:

<img
src="https://docs.joomla.org/images/2/23/Using-bootstrap-components-in-joomla-4-modal-demo.png"
decoding="async" data-file-width="1000" data-file-height="212"
width="1000" height="212" alt="Modal Demo" />

### Example 7: Offcanvas

At the moment this component is not supported in Joomla. Watch this
space - coming soon!

### Example 8: Popover

Popovers are like Tooltips but with a Title. They have some
accessibility and performance issues so should be used with caution.
Example Bootstrap code:

    Click to toggle popover

Result:

<img
src="https://docs.joomla.org/images/a/a8/Using-bootstrap-components-in-joomla-4-popover-demo.png"
class="thumbborder" decoding="async" data-file-width="1000"
data-file-height="180" width="1000" height="180" alt="Popover Demo" />

### Example 9: Scrollspy

Example code:

        
            
                Navbar
                Item 1
                
                    Item 1-1 
                    Item 1-2
                
                Item 2 
                Item 3
                
                    Item 3-1 
                    Item 3-2
                
            
        
        
            
                Item 1
                Placeholder content for the scrollspy example. This one relates to item 1. Takes you miles high, so high, 'cause she’s got that one international smile. There's a stranger in my bed, there's a pounding in my head. Oh, no. In another life I would make you stay. ‘Cause I, I’m capable of anything. Suiting up for my crowning battle. Used to steal your parents' liquor and climb to the roof. Tone, tan fit and ready, turn it up cause its gettin' heavy. Her love is like a drug. I guess that I forgot I had a choice.
                Item 1-1
                Placeholder content for the scrollspy example. This one relates to the item 1-1. You got the finest architecture. Passport stamps, she's cosmopolitan. Fine, fresh, fierce, we got it on lock. Never planned that one day I'd be losing you. She eats your heart out. Your kiss is cosmic, every move is magic. I mean the ones, I mean like she's the one. Greetings loved ones let's take a journey. Just own the night like the 4th of July! But you'd rather get wasted.
                Item 1-2
                Placeholder content for the scrollspy example. This one relates to the item 1-2. Her love is like a drug. All my girls vintage Chanel baby. Got a motel and built a fort out of sheets. 'Cause she's the muse and the artist. (This is how we do) So you wanna play with magic. So just be sure before you give it all to me. I'm walking, I'm walking on air (tonight). Skip the talk, heard it all, time to walk the walk. Catch her if you can. Stinging like a bee I earned my stripes.
                Item 2
                Placeholder content for the scrollspy example. This one relates to item 2. Don't need apologies. There is no fear now, let go and just be free, I will love you unconditionally. Last Friday night. Don't be a shy kinda guy I'll bet it's beautiful. Summer after high school when we first met. 'Cause she's the muse and the artist. What? Wait. No, no, no, no. Thought that I was the exception.
                Item 3
                Placeholder content for the scrollspy example. This one relates to item 3. Word on the street, you got somethin' to show me, me. All this money can't buy me a time machine. Make it like your birthday everyday. So we hit the boulevard. You make me feel like I'm livin' a teenage dream, the way you turn me on Skip the talk, heard it all, time to walk the walk. Word on the street, you got somethin' to show me, me. It's no big deal, it's no big deal, it's no big deal.
                Item 3-1
                Placeholder content for the scrollspy example. This one relates to item 3-1. Baby do you dare to do this? This is no big deal. Yeah, you're lucky if you're on her plane. Just own the night like the 4th of July! Standing on the frontline when the bombs start to fall. So just be sure before you give it all to me.
                Item 3-2
                Placeholder content for the scrollspy example. This one relates to item 3-2. You're original, cannot be replaced. All night they're playing, your song. California girls we're undeniable. Like a bird without a cage. There is no fear now, let go and just be free, I will love you unconditionally. I can see the writing on the wall. You could travel the world but nothing comes close to the golden coast.
            
        

Result:

<img
src="https://docs.joomla.org/images/1/19/Using-bootstrap-components-in-joomla-4-scrollspy-demo.png"
class="thumbborder" decoding="async" data-file-width="1000"
data-file-height="482" width="1000" height="482" alt="Scrollspy Demo" />

Also, some styling is needed in user.css:

    .scrollspy-example {
        height: 350px;
        overflow-y: scroll;
    }

Snag: the menu does not coordinate well with the content in this
example!

### Example 10: Tab

Tabs are often used as navigation elements combined with dropdowns.
Bootstrap example code:

        Active
        Dropdown
            
                Action
                Another action
                Something else here
                
                Separated link
            
        
        Link
        Disabled

Result:

<img
src="https://docs.joomla.org/images/a/a7/Using-bootstrap-components-in-joomla-4-tab-demo.png"
class="thumbborder" decoding="async" data-file-width="1000"
data-file-height="246" width="1000" height="246" alt="Tab Demo" />

Remember to check both the Tab and Dropdown options for the dropdown
part to work.

### Example 11: Toast

Toasts are lightweight notifications designed to mimic the push
notifications that have been popularized by mobile and desktop operating
systems. They’re built with flexbox, so they’re easy to align and
position. Example Bootstrap code:

        
             
            Bootstrap 11 mins ago 
            
        
        Hello, world! This is a toast message.

Result:

<img
src="https://docs.joomla.org/images/6/64/Using-bootstrap-components-in-joomla-4-toast-demo.png"
class="thumbborder" decoding="async" data-file-width="1000"
data-file-height="196" width="1000" height="196" alt="Toast Demo" />

Note that the Bootstrap demo that uses a button to show the Toast
message needs some extra JavaScript. It seems this component needs a
coder to make good use of it!

### Example 12: Tooltip

A tooltip is a small piece of text that appears on hover over a button
or link element to explain what it is or does. The tooltip can be
positioned above or below or to the left or right of the element. If not
specified the default position is top. The tooltip will switch to
another position if there is insufficient room in the specified
position. Example Bootstrap code:

     Tooltip on left  
     Tooltip  
     Tooltip on top  
     Tooltip on right  
     Tooltip on bottom  
     Tooltip with HTML 
    Tooltip triggered by class: Alert!

Result:

<img
src="https://docs.joomla.org/images/b/b0/Using-bootstrap-components-in-joomla-4-tooltip-demo.png"
class="thumbborder" decoding="async" data-file-width="1000"
data-file-height="238" width="1000" height="238" alt="Tooltip Demo" />

## Approach 2: Using a Content Plugin

The steps involved:

- Download, install and enable this plugin: <a
  href="https://github.com/ceford/j4xdemos-plg-bscompos/raw/master/plg_j4xdemos_bscompos.zip"
  class="external free" target="_blank"
  rel="nofollow noreferrer noopener">https://github.com/ceford/j4xdemos-plg-bscompos/raw/master/plg_j4xdemos_bscompos.zip</a>
- In the article add the text that the plugin acts on, for example
  {bscompos modal carousel} will trigger loading of the JavaScript
  necessary to support a modal dialog and a carousel. The plugin removes
  the trigger text and enclosing (now) empty
  tags.
- Include the Bootstrap Component HTML code directly in the article or
  in a module included in the article. There is example HTML code below
  for a simple Modal and a Modal containing a Carousel. Note that this
  will not work if the HTML code is in a module in a template location.
- This will also work for a standard Custom module if the Prepare
  Content Option is set to Yes.
- Test it!

## Approach 3: Using a Template Override

The steps involved:

- Create a mod_custom template override.
- Add a mod_custom module containing the component markup and trigger
  classes.
- Include the module in an article.

### The mod_custom Template Override

- In the Administrator interface go to **System **→** Site
  Templates **→** Cassiopeia Details and Files**.
- Select **Create Overrides **→** mod_custom **→** default.php**.
- On the line following defined('\_JEXEC') or die; add the following
  code:

<!-- -->

    $module_class = $params->get('moduleclass_sfx');
    if (!empty($module_class))
    {
        $classes = explode(' ', $module_class);
        foreach ($classes as $class)
        {
        switch ($class)
            {
              case 'bs-alert':
                \Joomla\CMS\HTML\HTMLHelper::_('bootstrap.alert', '.alert');
                break;
              case 'bs-button':
                \Joomla\CMS\HTML\HTMLHelper::_('bootstrap.button', '.btn');
                break;
              case 'bs-carousel':
                \Joomla\CMS\HTML\HTMLHelper::_('bootstrap.carousel', '.selector', []);
                break;
              case 'bs-collapse':
                \Joomla\CMS\HTML\HTMLHelper::_('bootstrap.collapse', '.selector', []);
                break;
              case 'bs-dropdown':
                \Joomla\CMS\HTML\HTMLHelper::_('bootstrap.dropdown', '.selector', []);
                break;
              case 'bs-modal':
                \Joomla\CMS\HTML\HTMLHelper::_('bootstrap.modal', '.selector', []);
                break;
              case 'bs-offcanvas':
                // Not Found
                //\Joomla\CMS\HTML\HTMLHelper::_('bootstrap.offcanvas', '.btn', []);
                break;
              case 'bs-popover':
                \Joomla\CMS\HTML\HTMLHelper::_('bootstrap.popover', '.btn', []);
                \Joomla\CMS\HTML\HTMLHelper::_('bootstrap.popover', 'a', []);
                break;
              case 'bs-scrollspy':
                \Joomla\CMS\HTML\HTMLHelper::_('bootstrap.scrollspy', '.selector', []);
                break;
              case 'bs-tab':
                \Joomla\CMS\HTML\HTMLHelper::_('bootstrap.tab', '.selector', []);
                break;
              case 'bs-tooltip':
                \Joomla\CMS\HTML\HTMLHelper::_('bootstrap.tooltip', '.btn', []);
                \Joomla\CMS\HTML\HTMLHelper::_('bootstrap.tooltip', 'a', []);
                break;
              case 'bs-toast':
                \Joomla\CMS\HTML\HTMLHelper::_('bootstrap.toast', '.selector', []);
                break;
              default:
                // do nothing
            }
        }
    }

This code searches for class names set in mod_custom and makes the
HTMLHelper call to set up the JavaScript support. Note that the last
item in each call is a selector that may or may not be used to trigger
action. Many of the components are triggered by data attributes in the
mark-up and they do not use the selectors here. For some, the selector
is needed. For example, it makes sense to use the **.btn** class and the
**a** tag to trigger Tooltips.

### A mod_custom Module for a Modal Component

- Go to **Content **→** Site Modules **→** New**.
- Select the **Custom** module.
- Fill out the form:
  - Title: Demo Modal
  - In the Position field type in **demomodal** for use in an article;
  - Module Content: Toggle Editor for plain text entry.
  - Paste in the following code from the Bootstrap documentation:

<!-- -->

    Modal

     Launch demo modal 


        
            
                
                    Modal title
                    
                
                
                    ...
                
                
                    Close 
                    Save changes
                
            
        

- Select the Advanced tab and in the Module Class field enter
  **bs-modal**
- Optional: set Ttitle to Hide to use the H2 in the pasted code.
- Save and Close (do not worry that the modal looks all wrong in the
  editor).

### Create an Article and Menu Item

- Create a new article, Demo Modal, and in plain text entry mode set the
  content to

      {loadposition demomodal}

- Create a Single Article menu item.

- Test it:

<img src="https://docs.joomla.org/images/9/9a/Demomodal.png"
decoding="async" data-file-width="1440" data-file-height="742"
width="1440" height="742" alt="Bootstrap Modal in an Article" />

### A Modal Component Containing a Carousel

- Create a new Custom module with a new Title: Demo Modal Carousel
- Position: demomodalcarousel
- **Advance tab **→** Module Class**: bs-modal bs-carousel
- Module Custom content in plain text:

<!-- -->

    Modal with Carousel

         
         Launch demo modal 


        
            
                
                     
                        × 
                    
                
                
                    
                        
                             
                             
                            
                        
                        
                            
                                
                                
                                    First slide label
                                    Some representative placeholder content for the first slide.
                                
                            
                            
                                
                                
                                    Second slide label
                                    Some representative placeholder content for the second slide.
                                
                            
                            
                                
                                
                                    Third slide label
                                    Some representative placeholder content for the third slide.
                                
                            
                        
                         
                            Previous 
                         
                         
                            Next 
                        
                    
                
            
        

- Create a new Article with {loadposition demomodalcarousel} in the
  content.
- Create a new single article menu item: Demo Modal Carousel
- Test it:

<img src="https://docs.joomla.org/images/f/f8/Demomodalcarousel.png"
decoding="async" data-file-width="1440" data-file-height="742"
width="1440" height="742" alt="Demo Modal containing a Carousel" />
