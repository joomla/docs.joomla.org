<!-- Filename: Custom_fields_type:_Subfields / Display title: Custom fields type: Subfields -->

## Introduction

This is a feature of Joomla! 4.0

Custom fields in Joomla! is a technology to extend various item types
(content articles, contact items, etc.) with custom-made fields. We
could e.g. extend a content article with a text field named
*fact_checked_by*, and every content article would then get a text field
where the administrator could enter a name. For a basic introduction
into this topic see [J3.x:Adding custom
fields](https://docs.joomla.org/J3.x:Adding_custom_fields "J3.x:Adding custom fields").

This wiki page is an introduction into a specific type of custom fields,
called *subfields*. The type of a custom field defines it's behavior -
think of the just mentioned *fact_checked_by* field, which is of type
'text' - you directly know what that means, it is a textfield where you
can enter text, and that text is then being displayed.

The *subfields* type is a bit more complex; the aim of it is to provide
the user the possibility to create a repeatable custom field for an item
with multiple related fields. That sounds more complex than it is. It
basically means: A *subfields* field is a custom field which can contain
an arbitrary amount of other fields, forming a repeatable list. For
instance: Adding a *subfields* custom field with the name *ingredients*
and the subfields *description* (text) and *amount* (integer) to a
content article. What do we have then? We have an article which can
contain a list of descriptions and amounts. What is that? Correct, e.g.
a list of ingredients - so we basically added information to our article
that allows is to interpret it, for example, as a recipe.

A very short note on terminology, just for people who take it very
accurate: As you might have noticed, we use the term "subfields" to
describe two different things: First, *subfields* is the **type** of a
custom field that is being added to an item, so the type of the
top-level "parent field" - so like other custom fields can be of type
*text* or *integer*, we use the term *subfields* to describe the type of
a custom field. But, second, we also call the configured "child fields"
of this parent field *subfields*, just because that is comfortable: We
have a parent field which contains child fields, so calling those child
fields subfields is handy. This maybe can get confusing, but we think it
should always be clear what is being meant due to context. If that
shouldn't be the case anywhere, we try to use different terms (like
above, when we spoke of parent and child fields). Additionally, we will
always write the type as *subfields* while when talking about the child
fields, we will just call them subfields. This is just a note for very
attentive readers, and most of the people who are reading this should
not care about this.

## Adding a Custom Field to be Used as a Subfield

Before creating a new *subfields* instance you must create one or more
normal custom fields that serve as child fields for that *subfields*
instance. So, for example, when you want to add a repeatable *subfields*
instance called *ingredients* to an article with the subfields
*description* (type text) and *amount* (type integer), you have to first
create the two custom fields *description* and *amount* as separate, own
custom fields.

**Note about subfields-only fields**: By default, a newly-created custom
field will have its *Category* assignment set to *All*. This means that
this custom field will be used for all items of all categories of the
relevant context (e.g. content articles). When you integrate such a
custom field into a *subfields* instance, you basically will see the
subfield twice when editing an item: One time as a standalone field as
part of that item, and the other time included into the *subfields*
instance as a subfield. You can circumvent this problem by declaring the
subfield to be not available for an item directly: To do this, simply
set the *Category* of that subfield to *None*. By doing this, this
custom field will not be part of any item itself, being only part of the
*subfields* instance.

## The *subfields* Field

Provides a possibility to add several (repeatable) subfields to an item.
The subfields are each rendered by themselves and the result will by
default be shown as a comma-separated list (this can be changed, see
further down).

### The *subfields* Specific Options

- Repeatable, *repeat* (mandatory) Boolean, default true.

Whether the subfields should be repeatable, i.e. allowing multiple lines
of values.

- subfields (mandatory)

A list of other custom field items that shall be used as subfields for
this item.

Render values, *render_values* (mandatory) Boolean, default true.
Whether the value of this subfield shall get rendered or not (see next
chapter).

### Disable Rendering for a Subfield

When creating a *subfields* instance and selecting, which other custom
fields should be used as subfields, you are able to select whether you
want Joomla! to render this subfields' value, when the value of the
parent field is being rendered. **Normally, this is what you want to
do.** That's why the default value is *true*.

Turning this off will have consequences for subfield types for which the
value, which is saved in the database, is not equal to the rendered
string which is normally being used in the Frontend: E.g. the *media*
type stores a path to a media file in the database, but normally renders
as an

-tag. Turning this option off would mean that the default rendering
process of the subfield will now show the path the file instead of the

-tag.

So, why does this option exist? Because rendering of multiple fields,
maybe multiple hundreds of fields, costs performance, and rendering of
many subfields of many items takes much performance and time. And this
is not always what you want, nor what you need: You are able to switch
this option off and create your own rendering procedure by creating a
layout override for your subfields (see next chapter), so this will
render the subfields exactly as you want it, and you can disable the
Joomla! default rendering with it.

## Changing the Rendering with a Layout Override

By default, the value of all individual subfields will be rendered and
the result will be shown as a comma-separated list in the Frontend. This
default behavior is implemented in the file
*plugins/fields/subfields/tmpl/subfields.php*, please take a look at it
to get a first impression on how to change the rendering in general.

The first thing to do to change the rendering is to create a layout
override for that template, e.g. by creating a new file
*templates/\$YOUR_TEMPLATE/html/plg_fields_subfields/subfields.php*, see
<a href="https://docs.joomla.org/Layout_Overrides_in_Joomla"
class="mw-redirect" title="Layout Overrides in Joomla">Layout Overrides
in Joomla</a> for further info.

The next thing to do is to get an idea about the structure of the
*\$field* object that is being passed to the template. That object has 2
important properties:

- *\$field-\>name* is a string containing the name of the custom field.
- *\$field-\>subfields_rows* is an array containing arrays, which
  contain the subfields. So, basically, *\$field-\>subfields_rows*
  contains rows of data, and each row contains a list of subfield
  instances/objects. Each of those instances is a fully-featured field
  instance/object itself, and has properties such as *name*, *type*,
  etc. along with *value* and *rawvalue*, containing the rendered and
  unrendered value respectively.

You can use the *name* property of *\$field* to make distinctions in
your template, dependent on which *subfields* instance is being
rendered.

The *subfields_rows* property might sound a bit complicated in the first
place, but when you create your own layout override and play around with
it, look at different states (e.g. by using a debugger, or *var_dump()*)
etc., you should get a good feeling about how it behaves very quickly.

### Example 1

Suppose we have created a *subfields* instance named *ingredients* for
an article, that contains the subfields *description* and *image* of
type *text* and *media* respectively. We now want to display those in a
nice way when we are asked to render them. We could do this in the
following way. Note the different use of *rawvalue* and *value* here,
which we use to get access to the rendered value of the *media* field
(which is, normally, an

HTML tag):

    name == 'ingredients'): ?>
      
        subfields_rows as $row): ?>
          
            Description: rawvalue); ?>

            Image: value; ?>
          
        
      

Additionally, you could disable the rendering of the *description*
subfield in this example (because the rendered value is not being used,
only the raw value), see also previous chapter.

### Example 2

The *subfields_rows* object can get a little complicated. The following
code will render all subfields in a comma-separated list, using their
*rawvalue* and prefixing them with their name. This example shows how
the *subfield_rows* object can be used on a more basic-level, not using
any rendered values.

    subfields_rows as $row)
    {
      echo '';
      $buffer = array();
      foreach ($row as $subfield)
      {
        $buffer[] = (
          $subfield->name . ': '
          . $subfield->rawvalue
        );
      }
      echo implode(', ', $buffer);
      echo '';
    }
    echo '';
