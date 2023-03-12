<!-- Filename: How_do_you_add_a_PayPal_button%3F / Display title: How do you add a PayPal button? -->

Joomla!  3.x Joomla!  2.5

PayPal, Google Checkout and other ecommerce sites often provide HTML
code that you can use to insert links such as *Add to Cart* and *Buy
Now* buttons into your Website.

It is generally preferable to create a Custom HTML module instead of
just pasting the code into an article. This way you can put the link in
a module position on as many page as you like. You can also put the
module inside an article using the [{loadposition
myposition}](https://docs.joomla.org/How_do_you_put_a_module_inside_an_article%3F "Special:MyLanguage/How do you put a module inside an article?")
command.

## PayPal Technical Documentation

Specifications and examples of the HTML code are shown in the
<a href="https://www.paypal.com/uk/webapps/mpp/standard"
class="external text" target="_blank"
rel="nofollow noreferrer noopener">PayPal Website Payments Standard
Integration Guide</a>.

## HTML Editor Pitfalls

You can insert this type of HTML code, including forms, either inside an
Article or in a Custom HTML Module. However, the TinyMCE editor will
normally strip out HTML code. If you try to paste in some types of HTML
code using this editor, it will not work; the editor will remove the
code when you save the Article or Module.

### TinyMCE Editor Solution

To avoid this problem while using the TinyMCE editor:

1.  Go to the User Manager and change the User Editor to *No editor*.
2.  Go to the article or Custom HTML module and paste in the desired
    HTML code.
3.  Go back to the User Manager and change the User Editor back to
    TinyMCE.

Note that you will need to repeat this any time you want to edit the
code (unless you use the alternate solution below).

### JCE Editor Solution

1.  Install the JCE editor from
    <a href="https://extensions.joomla.org/extension/jce/"
    class="external text" target="_blank" rel="noreferrer noopener">the
    Joomla Extensions Directory</a>
2.  Change the default editor (Global Configuration \> Site \> Default
    WYSIWYG Editor) to JCE from TinyMCE. You may also need to change the
    default editor for other users.
3.  Go to the article or Custom HTML module and hit the *show/hide*
    button, which will change the edit box to allow you to input HTML
    code instead of WYSIWYG text.
4.  Paste the HTML code into the editor.

When you navigate back to the article or module in the back end, it will
already be set to HTML input; the code will not get garbled. This is
easier than having to change the user settings each time you want to
edit the code while you are testing different button settings.

## Email Cloaking Pitfalls

The PayPal code includes an email address for your Website. Joomla! has
a Plugin called *Content - Email Cloaking* that attempts to disguise
emails in Articles. If you wish to paste the PayPal code directly inside
an Article, you may need to disable this Plugin. Navigate to Extensions
/ Plugins, find the Plugin *Content - Email Cloaking* and click the
green checkbox in the Enabled column to disable it.

Plugins are not processed in modules, so should you use a Custom HTML
module, you will still be able to have email cloaking enabled.

### Article-Specific Email Cloaking Switch

You can disable email cloaking in an article by entering
*{emailcloak=off}* anywhere in the article before the email address.
With this control, you do not need to disable global email cloaking.

### Secure Merchant Account ID in Place of the Email Address

PayPal offers a Secure Merchant Account ID (an alphanumeric string used
in place of the merchant email address) at no cost. It is available for
Web Payments Standard customers as well as in the extra-cost plans.
Email cloaking does not affect the Secure Merchant Account ID.

## PayPal Button Function Invoked by a Joomla Menu Item

You may use a menu item to act as a PayPal button. For example, the
PayPal View Cart button simply sends a query string as part of a Uniform
Resource Locator (URL) using an HTML form. You can create a Joomla menu
item that performs the same function.

In the Menu Item Manager create a new External Link menu item. In the
Menu Item Details section, go to the Link field and enter at URL of the
form:

    https://www.paypal.com/us/cgi-bin/webscr&business=myusername@mysite.com&cmd=_cart&display=1

Replace *myusername@mysite.com* in the URL example above with the unique
username of **your** PayPal account.

To test the operation in the PayPal Sandbox, simply modify the URL
slightly so that *www.paypal.com* becomes *www.sandbox.paypal.com*.

    https://www.sandbox.paypal.com/us/cgi-bin/webscr&business=myusername@mysite.com&cmd=_cart&display=1
