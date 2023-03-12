<!-- Filename: J3.x:Adding_custom_fields/List_of_Images_Field / Display title: Adding custom fields/List of Images Field -->

## List of Images Field

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

### List of Images

Provides a drop down list of image files.

#### Options

Special options within this field are:

- Directory  
  The filesystem path to the directory containing the image files to be
  listed.
- Multiple  
  Allow multiple values to be selected.
- Image̠ Class  
  The class which is added to the image.

#### Related Information

See [Imagelist form field
type](https://docs.joomla.org/Imagelist_form_field_type "Special:MyLanguage/Imagelist form field type")

#### Screenshots

##### Creating the field

Let's say you create a field with the options shown in the next figure.

<img
src="https://docs.joomla.org/images/thumb/9/9c/Image_field_create-en.png/800px-Image_field_create-en.png"
decoding="async"
srcset="https://docs.joomla.org/images/thumb/9/9c/Image_field_create-en.png/1200px-Image_field_create-en.png 1.5x, https://docs.joomla.org/images/9/9c/Image_field_create-en.png 2x"
data-file-width="1291" data-file-height="663" width="800" height="411"
alt="Image field create-en.png" />

##### Using the field in the backend

In the backend while creating an article or a contact you see the field
like in the following imageː

<img
src="https://docs.joomla.org/images/thumb/9/9e/Image-en.png/800px-Image-en.png"
decoding="async"
srcset="https://docs.joomla.org/images/thumb/9/9e/Image-en.png/1200px-Image-en.png 1.5x, https://docs.joomla.org/images/9/9e/Image-en.png 2x"
data-file-width="1291" data-file-height="663" width="800" height="411"
alt="Image-en.png" />

##### Using the field in the frontend

In the frontend, you can see the field as you see in the following
image. The option *Automatic display* is responsible for the position of
the field and your template is responsible for the design of the
field.  
Fields are only displayed in the frontend if you have filled them with
data in the article. If it is not a required field, can you forget it?

<img
src="https://docs.joomla.org/images/thumb/f/f3/Image_field_frontend-en.png/800px-Image_field_frontend-en.png"
decoding="async"
srcset="https://docs.joomla.org/images/thumb/f/f3/Image_field_frontend-en.png/1200px-Image_field_frontend-en.png 1.5x, https://docs.joomla.org/images/f/f3/Image_field_frontend-en.png 2x"
data-file-width="1291" data-file-height="663" width="800" height="411"
alt="Image field frontend-en.png" />

<a href="https://docs.joomla.org/J3.x:Adding_custom_fields/List_Field"
id="content-button" class="button expand success">Prev: List Field</a>
<a href="https://docs.joomla.org/J3.x:Adding_custom_fields/Media_Field"
id="content-button" class="button expand">Next: Media Field</a>
