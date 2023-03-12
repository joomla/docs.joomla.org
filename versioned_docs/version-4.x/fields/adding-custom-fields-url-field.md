<!-- Filename: J3.x:Adding_custom_fields/Url_Field / Display title: Adding custom fields/Url Field -->

## URL Field

**Articles in this Series**

1.  [Introduction](https://docs.joomla.org/J3.x:Adding_custom_fields "Special:MyLanguage/J3.x:Adding custom fields")
2.  [Parameters for all Custom
    Fields](https://docs.joomla.org/J3.x:Adding_custom_fields/Parameters_for_all_Custom_Fields "Special:MyLanguage/J3.x:Adding custom fields/Parameters for all Custom Fields")
3.  [Calendar
    Field](https://docs.joomla.org/J3.x:Adding_custom_fields/Calendar_Field "Special:MyLanguage/J3.x:Adding custom fields/Calendar Field")
4.  [Checkboxes
    Field](https://docs.joomla.org/J3.x:Adding_custom_fields/Checkboxes_Field "Special:MyLanguage/J3.x:Adding custom fields/Checkboxes Field")
5.  [Color
    Field](https://docs.joomla.org/J3.x:Adding_custom_fields/Color_Field "Special:MyLanguage/J3.x:Adding custom fields/Color Field")
6.  [Editor
    Field](https://docs.joomla.org/J3.x:Adding_custom_fields/Editor_Field "Special:MyLanguage/J3.x:Adding custom fields/Editor Field")
7.  [Integer
    Field](https://docs.joomla.org/J3.x:Adding_custom_fields/Integer_Field "Special:MyLanguage/J3.x:Adding custom fields/Integer Field")
8.  [List
    Field](https://docs.joomla.org/J3.x:Adding_custom_fields/List_Field "Special:MyLanguage/J3.x:Adding custom fields/List Field")
9.  [List of Images
    Field](https://docs.joomla.org/J3.x:Adding_custom_fields/ListOfImages_Field "Special:MyLanguage/J3.x:Adding custom fields/ListOfImages Field")
10. [Media
    Field](https://docs.joomla.org/J3.x:Adding_custom_fields/Media_Field "Special:MyLanguage/J3.x:Adding custom fields/Media Field")
11. [Radio
    Field](https://docs.joomla.org/J3.x:Adding_custom_fields/Radio_Field "Special:MyLanguage/J3.x:Adding custom fields/Radio Field")
12. [Repeatable
    Field](https://docs.joomla.org/J3.x:Adding_custom_fields/Repeatable_Field "Special:MyLanguage/J3.x:Adding custom fields/Repeatable Field")
13. [Sql
    Field](https://docs.joomla.org/J3.x:Adding_custom_fieldshttps://docs.joomla.org/J3.x:Adding%20custom%20fields/Sql%20Field)
14. [Text
    Field](https://docs.joomla.org/J3.x:Adding_custom_fields/Text_Field "Special:MyLanguage/J3.x:Adding custom fields/Text Field")
15. [Textarea
    Field](https://docs.joomla.org/J3.x:Adding_custom_fields/Textarea_Field "Special:MyLanguage/J3.x:Adding custom fields/Textarea Field")
16. [Url
    Field](https://docs.joomla.org/J3.x:Adding_custom_fields/Url_Field "Special:MyLanguage/J3.x:Adding custom fields/Url Field")
17. [User
    Field](https://docs.joomla.org/J3.x:Adding_custom_fields/User_Field "Special:MyLanguage/J3.x:Adding custom fields/User Field")
18. [Usergroup
    Field](https://docs.joomla.org/J3.x:Adding_custom_fields/Usergroup_Field "Special:MyLanguage/J3.x:Adding custom fields/Usergroup Field")
19. [How can you group custom
    fields](https://docs.joomla.org/J3.x:Adding_custom_fields/How%CC%9E_can_you_group_custom_fields "Special:MyLanguage/J3.x:Adding custom fields/How̞ can you group custom fields")
20. [What components are supporting custom
    fields](https://docs.joomla.org/J3.x:Adding_custom_fields/What_components_are_supporting_custom_fields "Special:MyLanguage/J3.x:Adding custom fields/What components are supporting custom fields")
21. [Implementation into your
    component](https://docs.joomla.org/J3.x:Adding_custom_fields/Implement_into_your_component "Special:MyLanguage/J3.x:Adding custom fields/Implement into your component")
22. [Use custom fields in your
    overrides](https://docs.joomla.org/J3.x:Adding_custom_fields/Overrides "Special:MyLanguage/J3.x:Adding custom fields/Overrides")

### Url

Provides a URL text input field.

#### Options

Special options within this field are:

- Schemes  
  The allowed schemes are HTTP, HTTPS, FTP, FTPS, MAILTO, URL and FILE.
  This custom field essentially is a text field with the type of url in
  the backend while creating an article or a contact or a third party
  component that supports custom fields. It is only possible to fill in
  a qualified url - that is one with a scheme and domain such as
  `http://example.com`. The url will be translated into
  <a href="https://en.wikipedia.org/wiki/Punycode" class="external text"
  target="_blank" rel="nofollow noreferrer noopener">punycode</a> prior
  to saving. This assures that the url will work as intended regardless
  of environment.
- Relative  
  Use this option to determine whether or not relative URLs are allowed.

#### Related Information

See [URL form field
type](https://docs.joomla.org/URL_form_field_type "Special:MyLanguage/URL form field type")

#### Screenshots

##### Creating the field

Let's say you create a field with the options shown in the next figure.

<img
src="https://docs.joomla.org/images/thumb/f/f4/Url_field_create-en.png/800px-Url_field_create-en.png"
decoding="async"
srcset="https://docs.joomla.org/images/thumb/f/f4/Url_field_create-en.png/1200px-Url_field_create-en.png 1.5x, https://docs.joomla.org/images/f/f4/Url_field_create-en.png 2x"
data-file-width="1291" data-file-height="661" width="800" height="410"
alt="Url field create-en.png" />

##### Using the field in the backend

In the backend while creating an article or a contact you see the field
like in the following imageː

<img
src="https://docs.joomla.org/images/thumb/c/ce/URL-en.png/800px-URL-en.png"
decoding="async"
srcset="https://docs.joomla.org/images/thumb/c/ce/URL-en.png/1200px-URL-en.png 1.5x, https://docs.joomla.org/images/c/ce/URL-en.png 2x"
data-file-width="1291" data-file-height="661" width="800" height="410"
alt="URL-en.png" />

##### Using the field in the frontend

In the frontend, you can see the field as you see in the following
image. The option *Automatic display* is responsible for the position of
the field and your template is responsible for the design of the
field.  
Fields are only displayed in the frontend if you have filled them with
data in the article. If it is not a required field, can you forget it?

<img
src="https://docs.joomla.org/images/thumb/c/c7/Url_field_frontend-en.png/800px-Url_field_frontend-en.png"
decoding="async"
srcset="https://docs.joomla.org/images/thumb/c/c7/Url_field_frontend-en.png/1200px-Url_field_frontend-en.png 1.5x, https://docs.joomla.org/images/c/c7/Url_field_frontend-en.png 2x"
data-file-width="1291" data-file-height="661" width="800" height="410"
alt="Url field frontend-en.png" />

<a
href="https://docs.joomla.org/J3.x:Adding_custom_fields/Textarea_Field"
id="content-button" class="button expand success">Prev: Textarea
Field</a>
<a href="https://docs.joomla.org/J3.x:Adding_custom_fields/User_Field"
id="content-button" class="button expand">Next: User Field</a>
