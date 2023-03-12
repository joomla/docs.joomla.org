<!-- Filename: J4.x:Fields_and_Field_Groups / Display title: Fields and Field Groups -->

## Introduction

Fields are used to display additional attributes of Articles, Contacts
or Users. The data are entered in an Administrator Edit form and
displayed in the Site. An example:

Suppose you write articles about aspects of nature, sometimes Flowers,
sometimes Animals. One field you might wish to record and display for
both is the Latin Name, requiring a text field. Another might be
Habitat: Woodland, Pond, Meadow, and so on, requiring a drop-down list.
For flowers you may wish to record Flowering Season using 4 checkboxes,
one for each season, or 12 checkboxes, one for each month.

Empty fields in the input form are not displayed in the Site output, so
you could keep all fields in one long list. However it is usually better
to use categories for your Articles, say Flowers and Animals. Fields can
be assigned to more than one Category. So Latin Name and Habitat fields
would be assigned to both but Flowering Season would only be assigned to
the Flowers category.

If a field is not assigned to a group it will appear in the Edit form in
a Fields tab. If a field is assigned to a group it will appear in a tab
with that name. So for the Flowers group it seems appropriate to create
a group named Flower Data (or just Flowers, although using the same name
for different things gets confusing). And for the other common fields
you could use a Nature group.

## A Worked Example - Garden Life

Before working with fields, this example sets up Article Categories to
make it simple to create Category Blog or List layouts for Nature, the
parent Category or any one of Birds, Flowers, Mammals or Trees.
Creepy-crawlies have wriggled off the bottom of the screenshot!

<img
src="https://docs.joomla.org/images/5/55/J4x-fields-and-field-groups-garden-categories.png"
decoding="async" data-file-width="800" data-file-height="406"
width="800" height="406" alt="Garden Article Categories" />

Some obvious features of Nature to note:

- All of the items have Common names and Latin Names.
- Flowers and Trees have a Flowering Season, Height and Spread but Birds
  and Mammals do not.
- Birds have Wingspan, and Length whilst Mammals have Height and Length.

The point here is that it may be necessary to set up Fields OR Field
Groups for common features, such as Latin Name, and separate Field
Groups for each category of nature.

## Field Groups

Creating Field Groups for Articles is very simple: Select
**Content **→** Field Groups** from the Administrator menu and select
the **New** button in the toolbar. Enter a suitable **Title** and select
**Save & Close** from the toolbar. The illustration below shows the
Field Groups list with two groups created.

<img
src="https://docs.joomla.org/images/6/63/J4x-fields-and-field-groups-garden-field-groups.png"
decoding="async" data-file-width="800" data-file-height="217"
width="800" height="217" alt="Garden Article Field Groups" />

## Fields

To create a new article Field select **Content **→** Fields** from the
Administrator menu and fill in the form. Some examples are illustrated
below.

### Text - Latin Name

Note in the screenshot that this field has not been assigned to a Field
Group but it has been assigned to the Nature category. This should
ensure that it always appears in articles in the Nature category or any
sub-category.

<img
src="https://docs.joomla.org/images/5/59/J4x-fields-and-field-groups-no-group.png"
decoding="async" data-file-width="800" data-file-height="406"
width="800" height="406" alt="Field with no Group" />

### Checkboxes - Flowering Season

Checkboxes appear in the Article Edit form for you to tick to select the
flowering season. In the article display only those with a tick will be
listed. For example, if you tick Spring and Summer the output will show
Flowering Season: Spring, Summer.

Note that in this screenshot the Field has been assigned to the Flowers
group and to the Flowers Category. That should ensure that the field is
only present in articles bout flowers.

<img
src="https://docs.joomla.org/images/e/e5/J4x-fields-and-field-groups-checkboxes-flowering-season.png"
decoding="async" data-file-width="800" data-file-height="636"
width="800" height="636" alt="Checkboxes for Flowering Season" />

### Color - Colour

Just to be confusing, the name of the field type is Color (US Spelling)
but the label in documentation is Colour (British Spelling).

And possibly even more confusing, the colour is actually selected in the
article edit form:

<img
src="https://docs.joomla.org/images/thumb/b/b5/J4x-fields-and-field-groups-color-in-article-form.png/800px-J4x-fields-and-field-groups-color-in-article-form.png"
decoding="async"
srcset="https://docs.joomla.org/images/thumb/b/b5/J4x-fields-and-field-groups-color-in-article-form.png/1200px-J4x-fields-and-field-groups-color-in-article-form.png 1.5x, https://docs.joomla.org/images/b/b5/J4x-fields-and-field-groups-color-in-article-form.png 2x"
data-file-width="1440" data-file-height="846" width="800" height="470"
alt="Colour" />

### Integer - Hardiness

The hardiness of a plant is an integer from 1 to 10. There is no field
for a real number so length and height have to be integers with the
scale (cm or m or ft) included in the label. If there is no obvious
upper limit then leave the Last: field empty.

<img
src="https://docs.joomla.org/images/a/aa/J4x-fields-and-field-groups-integer-hardiness.png"
decoding="async" data-file-width="800" data-file-height="557"
width="800" height="557" alt="Integer for Hardiness" />

## Article Edit Form

When an Articles: New form is opened the default Category is
Uncategorised and the form tabs do not include Fields and Flowers.
Select the Flowers category and the form is reloaded with those tabs
present.

### Fields Tab

The Fields tab contains fields that were not included in a Field Group.
Enter data as appropriate. Example:

<img
src="https://docs.joomla.org/images/9/9e/J4x-fields-and-field-groups-article-edit-form-fields-tab.png"
decoding="async" data-file-width="800" data-file-height="343"
width="800" height="343" alt="Integer for Hardiness" />

### Flowers Tab

The Flowers tab contains fields included in that Field Group. Enter data
as appropriate. It is shown above in the Color - Colour section.

## Site Result

Take a look at the result seen in your site. In this example the article
was marked as Featured so it appears on the site Home page:

<img
src="https://docs.joomla.org/images/f/fd/J4x-fields-and-field-groups-article-site-result.png"
decoding="async" data-file-width="800" data-file-height="513"
width="800" height="513" alt="Integer for Hardiness" />

Not what you were expecting? You could go back to the Field edit form
and set some Display Options. You will need to know some CSS and add
code to user.css in your site template. In this example some dummy
values have been added to the options:


        Common Name: 
        my-prefix
        Saxifrage
        my-suffix


        Latin Name: 
        Saxifraga - Peter Pan


        Flowering Season: 
        Autumn, Winter


        Colour: 
        #fa9bab


        Height: 
        10


        Spread: 
        30


        Hardiness: 
        5

## Custom User Fields

If you wish to display a custom user field, for example an avatar in the
Login module after login, here are the steps required:

- Go to Users / Fields / New and add a field of type Media. In this
  example it is named User Photo and the name is user-photo.
- Save and Close.
- Go to your the User Menu / Edit Account item and select a suitable
  photo from the Fields tab or the field group if you created one.
- Save and Close.
- Go to System / Site Templates / Cassiopeia Details and Files / Create
  Overrides.
- Select mod_login to create overrides. You will find the overrides in
  the Editor tab / html / mod_login.
- Open default_logout.php and add the following lines after the last use
  statament (line 17):

<!-- -->

    // custom code to access custom field 'user-photo'
    use Joomla\CMS\Factory;
    use Joomla\Component\Fields\Administrator\Helper\FieldsHelper;
    $customFields   = FieldsHelper::getFields('com_users.user', Factory::getUser(), true); 
    $photo      = '';
    foreach ($customFields as $field)
    {
        switch ($field->name)
         {
             case 'user-photo':
                $photo  = $field->value;
            default:
        }
    }
    if (!empty($photo))
    {
        echo $photo;
    }

More in another tutorial?
