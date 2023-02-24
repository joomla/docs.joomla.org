<!-- Filename: Help4.x:Component:_New_or_Edit_Field / Display title: Fields: Edit -->

## Description

This is where you can add and edit Fields in Articles, Contacts, and
Users.

The helpscreen show as example Users.

## How to Access

**Users **→** Fields**

To add a Field:

- click the **New** toolbar button

To edit a Field:

- Select a **Title** from the list

## Screenshot

<img
src="https://docs.joomla.org/images/thumb/6/6f/Help-4x-Fields-Edit-screen-en.png/800px-Help-4x-Fields-Edit-screen-en.png"
decoding="async"
srcset="https://docs.joomla.org/images/thumb/6/6f/Help-4x-Fields-Edit-screen-en.png/1200px-Help-4x-Fields-Edit-screen-en.png 1.5x, https://docs.joomla.org/images/thumb/6/6f/Help-4x-Fields-Edit-screen-en.png/1600px-Help-4x-Fields-Edit-screen-en.png 2x"
data-file-width="2720" data-file-height="1700" width="800" height="500"
alt="Help-4x-Fields-Edit-screen-en.png" />

## Form Fields

- **Title**. The Title for this field.

### General

**Left Panel**

Parameters for all fields:

- **Type**. If you create a field you can choose one of the 16 field
  types. When you save the field this type is permanent. [Learn
  more.](https://docs.joomla.org/J3.x:Adding_custom_fields/Calendar_Field/en "J3.x:Adding custom fields/Calendar Field/en")
- **Name**. The name will be used to identify the field. Leave this
  blank and Joomla will fill in a default value from the title.
- **Label**. Use a descriptive text of the field for the label of the
  field. This text is not translatable. If you do not enter any text for
  a label the title text will also used as label text.
- **Description**. The description of the field. A text that will be
  shown as a tool tip when the user moves the mouse over the text box
  while he use it in the Backend creating an article or a contact or a
  third party component that supports fields. This text is not
  translatable. You do not see this description in the Frontend.
- **Required**. Is this a mandatory field? In this case the field has to
  be filled before submitting an article or a contact or a third party
  component that supports fields.

**Right Panel**

- **Status**. The published status of this field.
  - Published: The field is visible while editing an article or an
    contact. And it is visible in the Frontend.
  - Unpublished: The field will not be visible to users while editing an
    article or an contact.
  - Archived: The field will no longer show on edition an article or an
    contact. You can open it in
    [Fields](https://docs.joomla.org/Help4.x:Fields/en#selectstatus "Help4.x:Fields/en")
    when you set the filter to archived.
  - Trashed: The field is deleted but still in the database. It can be
    permanently deleted from the database in
    [Fields](https://docs.joomla.org/Help4.x:Fields/en#selectstatus "Help4.x:Fields/en")
    with the Empty Trash function. [Learn
    more.](https://docs.joomla.org/J4.x:Deleting_an_Article/en "J4.x:Deleting an Article/en")
- **Field Group**. You can assign a field to one or more field groups.
- **Category**. You can assign a field to one or more categories. Note
  that the default 'All' does not include 'uncategorised' articles.
- **Access**. Select the viewing access level for this field. The access
  levels depend on what has been set up in [Users: Access
  Levels](https://docs.joomla.org/Help4.x:Users:_Viewing_Access_Levels/en "Help4.x:Users: Viewing Access Levels/en").
- **Language**. Select the language for this field. If you are not using
  the [multi-language
  feature](https://docs.joomla.org/Help4.x:Extensions:_Languages/en "Help4.x:Extensions: Languages/en")
  of Joomla, keep the default of 'All'.
- **Note**. An optional field to make your personal notes for the field.

### Options

<img
src="https://docs.joomla.org/images/thumb/5/55/Help-4x-Fields-Edit-options-subscreen-en.png/600px-Help-4x-Fields-Edit-options-subscreen-en.png"
decoding="async"
srcset="https://docs.joomla.org/images/thumb/5/55/Help-4x-Fields-Edit-options-subscreen-en.png/900px-Help-4x-Fields-Edit-options-subscreen-en.png 1.5x, https://docs.joomla.org/images/thumb/5/55/Help-4x-Fields-Edit-options-subscreen-en.png/1200px-Help-4x-Fields-Edit-options-subscreen-en.png 2x"
data-file-width="1259" data-file-height="531" width="600" height="253"
alt="Help-4x-Fields-Edit-options-subscreen-en.png" />

**Form Options**

- **Placeholder**. A placeholder text which will appear inside the field
  as a hint for the input. The placeholder is active in the Backend
  while creating an article or a contact or a third party component that
  supports fields. You do do not see it in the Frontend.
- **Field Class**. The class attributes of the field when the field is
  rendered. If different classes are needed, list them with spaces.
- **Label Class (Form)**. CSS class to apply to the field label when it
  is in edit mode (entering input into a field).
- **Editable In**. On which part of the site should the field be shown.
  In the Backend, in the Frontend or both?
- **Showon Attribute**. Conditionally show or hide the field depending
  on the value of other fields. The syntax to use here, for example:
  `list-of-items:value1[OR]list-of-items:value2`
  - list-of-items â€“ It is the *name* of an already created field on
    which this field will depends to be show.
  - value1 â€“ Is the value need have the field on which it depends to
    be show.
  - \[OR\] â€“ To create a choice among multiple fields. In the example,
    this field will show when *list-of-items* field have the value:
    *value1* OR *value2*
  - \[AND\] â€“ To combine multiple fields. This field will show only
    when *list-of-items* field have the value: *value1* AND *value2*
  - You can also use value 'does not equal' as in
    **list-of-items!:value1**. The syntax will show this field only when
    *list-of-items* is not equal to *value1*
  - To show this field when *list-of-items* field has been selected and
    have not a empty value, use the syntax *list-of-items!:* (without a
    value specified).
  - **Note:** Subform fields handle different the identifier *name* of
    *list-of-items*. If you create a Subform custom field and you add
    this conditional field you are creating to there, you need use
    *field\[ID\]* instead of *list-of-items*, where ID is the id of the
    field *list-of-items*. Therefore, the showon attribute for this
    conditional field you are creating need be:

`field36:value1[OR]field36:value2` where 36 is the ID of the field 'List
of items'.

- **Layout: (Default / Table / Form)** Subform have this extra form
  option to select the layout for editing the fields.

**Display Options**

- **Display Class**. The class of the field container in the output.
- **Value Class**. The class of the field value in the output.
- **Label**. Show the label when the field renders.
- **Label Class (Output)**. CSS class to apply to the field label when
  it is displayed (displaying the output of a field).
- **Automatic Display**. Joomla offers some content events which are
  triggered during the content creation process. This is the place to
  define how the fields should be integrated into content. You can
  choose
  - After Title
  - Before Display Content
  - After Display Content
  - Do not automatically display
- **Prefix**. Fixed text to be displayed before a field, for example Â£.
- **Suffix**. Fixed text to be displayed after a field, for example EUR.
- **Layout**. If there is a custom layout then it would be selected
  here.
- **Display When Read-Only**. If the field is read only (perhaps the
  user doesn't have the access level) should the field be displayed or
  hidden.

### Publishing

<img
src="https://docs.joomla.org/images/thumb/7/77/Help-4x-Fields-Edit-publishing-subscreen-en.png/600px-Help-4x-Fields-Edit-publishing-subscreen-en.png"
decoding="async"
srcset="https://docs.joomla.org/images/thumb/7/77/Help-4x-Fields-Edit-publishing-subscreen-en.png/900px-Help-4x-Fields-Edit-publishing-subscreen-en.png 1.5x, https://docs.joomla.org/images/thumb/7/77/Help-4x-Fields-Edit-publishing-subscreen-en.png/1200px-Help-4x-Fields-Edit-publishing-subscreen-en.png 2x"
data-file-width="2880" data-file-height="980" width="600" height="204"
alt="Help-4x-Fields-Edit-publishing-subscreen-en.png" />

- **Created Date**. The current time when the field was created. Enter
  in a different date and time or click on the calendar icon to find the
  desired date.
- **Created By**. Name of the User who created this field. This will
  default to the currently logged-in user. If you want to change this to
  a different user, click the Select User button.
- **Modified Date**. Date of last modification.
- **Modified By**. Username who performed the last modification.
- **ID**. A unique identification number for this field, you cannot
  change this number. When creating a new field, this field displays "0"
  until you save the new entry.

### Permissions

This is where you can enter permissions for this field. [Learn
more.](https://docs.joomla.org/J3.x:Access_Control_List_Tutorial/en#hierarchylevels "J3.x:Access Control List Tutorial/en")

<img
src="https://docs.joomla.org/images/thumb/c/c0/Help-4x-Fields-Edit-permissions-subscreen-en.png/600px-Help-4x-Fields-Edit-permissions-subscreen-en.png"
decoding="async"
srcset="https://docs.joomla.org/images/thumb/c/c0/Help-4x-Fields-Edit-permissions-subscreen-en.png/900px-Help-4x-Fields-Edit-permissions-subscreen-en.png 1.5x, https://docs.joomla.org/images/thumb/c/c0/Help-4x-Fields-Edit-permissions-subscreen-en.png/1200px-Help-4x-Fields-Edit-permissions-subscreen-en.png 2x"
data-file-width="2880" data-file-height="1260" width="600" height="263"
alt="Help-4x-Fields-Edit-permissions-subscreen-en.png" />

To change the permissions for this field, do the following.

1.  Select the **Group** by clicking its title located on the left.
2.  Find the desired **Action**.
    - **Delete**. Users can delete this field.
    - **Edit**. Users can edit this field.
    - **Edit State**. User can change the published state and related
      information for this field.
    - **Edit Custom Field Value.** Users can edit the field value.
3.  Select the desired permission for the action you wish to change.
    - **Inherited**. Inherited for users in this Group from the [Global
      Configuration](https://docs.joomla.org/Help4.x:Site_Global_Configuration/en#permissions "Help4.x:Site Global Configuration/en"),
      parent group, or category.
    - **Allowed**. Allowed for users in this Group.Note: If this action
      is Denied at one of the higher levels, the Allowed permission here
      will not take effect. A Denied setting cannot be overridden.
    - **Denied**. Denied for users in this Group.
4.  Click **Save** in **Toolbar** at top. When the screen refreshes, the
    Calculated Setting column will show the effective permission for
    this Group and Action.

## Toolbar

At the top of the page you will see the toolbar shown in the
[Screenshot](#screenshot) above.

- **Save**. Saves the field and stays in the current screen.
- **Save & Close**. Saves the field and closes the current screen.
  - **Save & New**. Saves the field and keeps the editing screen open
    and ready to create another field.
  - **Save as Copy**. Saves your changes to a copy of the current field.
    Does not affect the current field.
- **Close**. Closes the current screen and returns to the previous
  screen without saving any modifications you may have made.
- **Help**. Opens this help screen.

## Quick Tips

If you want to know how to use fields: [Managing Custom
Fields](https://docs.joomla.org/J3.x:Adding_custom_fields/en "J3.x:Adding custom fields/en").

## Related Information

- This
  [Portal](https://docs.joomla.org/Portal:Joomla_4/en "Portal:Joomla 4/en")
  brings together information related specifically to Joomla 4.

|                                                                                                             |                                                                                                                                                      |
|-------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| Related Help Screens                                                                                        | Description                                                                                                                                          |
| [Fields](https://docs.joomla.org/Help4.x:Fields/en "Help4.x:Fields/en")                                     | Fields are used to display additional attributes of Articles, Contacts and Users. The data are entered in the Backend and displayed in the Frontend. |
| [Fields: Edit](https://docs.joomla.org/Help4.x:Fields:_Edit/en "Help4.x:Fields: Edit/en")                   | This is where you can add and edit Fields in Articles, Contacts, and Users.                                                                          |
| [Field Groups](https://docs.joomla.org/Help4.x:Field_Groups/en "Help4.x:Field Groups/en")                   | The Field Groups screen is used to list, add and edit Field Groups.                                                                                  |
| [Field Groups: Edit](https://docs.joomla.org/Help4.x:Field_Groups:_Edit/en "Help4.x:Field Groups: Edit/en") | Field Groups are used to collect related fields under a named Tab in a data entry form.                                                              |
