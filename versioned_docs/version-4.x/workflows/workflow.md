<!-- Filename: J4.x:Workflow / Display title: Workflow -->

Joomla!  4.x

## Introduction

The Publishing Workflow component is used to replace static states
(unpublished, published, trashed and archived) with a more generic
approach. This way you can easily create a customized workflow to manage
your articles within a component.

- The article backend view in Joomla 3.x:

<img
src="https://docs.joomla.org/images/thumb/a/a4/Article_view_3-en.png/800px-Article_view_3-en.png"
decoding="async"
srcset="https://docs.joomla.org/images/thumb/a/a4/Article_view_3-en.png/1200px-Article_view_3-en.png 1.5x, https://docs.joomla.org/images/thumb/a/a4/Article_view_3-en.png/1600px-Article_view_3-en.png 2x"
data-file-width="2538" data-file-height="766" width="800" height="241"
alt="Article view 3-en.png" />

- The article backend view in Joomla 4.x:

<img
src="https://docs.joomla.org/images/thumb/9/94/J4_Articles_Backend-en.png/800px-J4_Articles_Backend-en.png"
decoding="async"
srcset="https://docs.joomla.org/images/9/94/J4_Articles_Backend-en.png 1.5x"
data-file-width="1200" data-file-height="332" width="800" height="221"
alt="J4 Articles Backend-en.png" />

The article tool range is now smaller and the view generally tidier. You
can create customized states for the articles and group them in
categories.

There is a tutorial page containing steps for the creation of your first
workflow:
[Scenarios](https://docs.joomla.org/J4.x:Workflowhttps://docs.joomla.org/J4.x:Workflow/Scenarios).  
You can find more information about the implementation of the component
in other areas on the page of the Google Summer of Code project DOC:
[Publishing Workflow
Implementation](https://docs.joomla.org/Publishing_Workflow_Implementation "Special:MyLanguage/Publishing Workflow Implementation")

You can disable workflows at any time by visiting "articles" or
"workflows" and clicking "options" in the top right. Switch to the tab
"Integration" and scroll down to "Enable Workflow".

## Terms & Definitions

- *Workflows:* You can create several workflows. Each workflow contains
  states, possible transitions and item conditions.
- *Stages:* Stages are the start points and end points within a
  workflow.
- *State:* The state of an item can be unpublished, published, trashed
  or archived. A state can be changed by executing a transition
- *Transitions:* Transitions occur between stages. They are where the
  actions happen.
- *Categories:* Articles can be assigned to categories.

## Workflows

The workflow resembles a sequence of steps. It can be accessed via the
main top menu under "Content". You will be directed to the "Workflows
List", an overview of all your existing workflows. A workflow contains
several states of different conditions. Items (e.g. articles) can
transit through those states.

<img
src="https://docs.joomla.org/images/thumb/e/e2/Workflows-en.png/800px-Workflows-en.png"
decoding="async"
srcset="https://docs.joomla.org/images/thumb/e/e2/Workflows-en.png/1200px-Workflows-en.png 1.5x, https://docs.joomla.org/images/thumb/e/e2/Workflows-en.png/1600px-Workflows-en.png 2x"
data-file-width="1906" data-file-height="455" width="800" height="191"
alt="Workflows List" />

- You see the status of the workflow (published / unpublished)
- Next to the status is the title. By clicking on the title you can
  *edit the workflow*
  - *Editable*: Title \| Description \| Status \| Default Option \|
    Permissions (Rights Management)
- Next to the title you find the option to *Manage* the workflow stages
  (for more info see
  [Stages](https://docs.joomla.org/Publishing_Workflow#Stages "Special:MyLanguage/Publishing Workflow"))
- Next to the "Stages" is the default option
- You find a yellow icon, next to "default", representing the number of
  existing stages in this workflow
- Next to the yellow circle is a blue icon that represents the number of
  existing transitions in this workflow (for more info see
  [Transitions](https://docs.joomla.org/Publishing_Workflow#Transitions "Special:MyLanguage/Publishing Workflow"))
- You can also see the workflow ID.

## Stages

The stages are accessed via the "Workflows List" container via clicking
on the yellow icon showing the number of stages. You can edit the name
of a stage by clicking on it.

  
<img
src="https://docs.joomla.org/images/thumb/a/ac/Stages-en.png/800px-Stages-en.png"
decoding="async"
srcset="https://docs.joomla.org/images/a/ac/Stages-en.png 1.5x"
data-file-width="1200" data-file-height="251" width="800" height="167"
alt="Stages View" />

<img
src="https://docs.joomla.org/images/thumb/7/7f/Stages--edit-en.png/800px-Stages--edit-en.png"
decoding="async"
srcset="https://docs.joomla.org/images/7/7f/Stages--edit-en.png 1.5x"
data-file-width="1200" data-file-height="404" width="800" height="269"
alt="The Edit Stage view" />

- In the second picture you can edit the stage. You can enable or
  disable it and write a note. It also has a "default" toggle. If there
  is only one item you will not be able to toggle this.

## Transitions

Articles can transit from one stage to another. The transitions can be
managed through the "Workflows List" container via clicking on the blue
icon. You can set several transitions that items can go through. The
possible stages are based on the ones you have created for this specific
workflow.

The *current stage* will define where this transition is applied. You
can choose all stages, or a specific stage.

The *target stage* is the stage the workflow will end up at after the
transition has taken place.

<img
src="https://docs.joomla.org/images/thumb/4/45/Transitions--edit--description-en.png/800px-Transitions--edit--description-en.png"
decoding="async"
srcset="https://docs.joomla.org/images/4/45/Transitions--edit--description-en.png 1.5x"
data-file-width="1200" data-file-height="456" width="800" height="304"
alt="Edit Transitions View" />

The *transition actions* tab allows you to define what state the item
will be in after the transition is complete. For example if the item is
an article it could become unpublished, which is exactly what happens in
the *unpublish* transition. You can also define whether the item is
featured or not by the end of the state.

<img
src="https://docs.joomla.org/images/thumb/2/27/Transitions--edit--transition-actions-en.png/800px-Transitions--edit--transition-actions-en.png"
decoding="async"
srcset="https://docs.joomla.org/images/2/27/Transitions--edit--transition-actions-en.png 1.5x"
data-file-width="1200" data-file-height="429" width="800" height="286"
alt="Edit Transition Actions" />

The *transition notifications* tab allows you to define whether a
notification is sent during that state. For example if an article has
been written but needs to be proofread, you could send an email
notification to the editor.

You can also add additional message text. This will also allow you to
use a [language
string](https://docs.joomla.org/J3.x:Language_Overrides_in_Joomla "J3.x:Language Overrides in Joomla")
which would make the message text translatable.

The Usergroups option will allow you to define who will receive the
notification. In the example we have chosen we would choose *editor* as
the usergroup. In that example all users within that usergroup would get
a notification.

Finally there is the "more receivers" option. This allows you to choose
individual users to receive this notification.

<img
src="https://docs.joomla.org/images/thumb/5/57/Transitions--edit--notification-en.png/800px-Transitions--edit--notification-en.png"
decoding="async"
srcset="https://docs.joomla.org/images/5/57/Transitions--edit--notification-en.png 1.5x"
data-file-width="1200" data-file-height="481" width="800" height="321"
alt="Edit Transition Notification" />

The final tab is the permissions tab. This allows you to set who can use
this transition.

- *Example:* In the transition "Next Step: Publishing" items are
  originally of the state "unpublished". They are, for example, in need
  of a review. After they have been reviewed, they can transit to the
  state "published".

<!-- -->

- All the workflow transition actions are Joomla! workflow plugins. If
  you go to System **→** Plugins. Then change the "type" dropdown to
  "workflow" you will see the plugins. These can be disabled like any
  other plugin.

<img
src="https://docs.joomla.org/images/thumb/9/96/Workflows--plugins--workflows-en.png/800px-Workflows--plugins--workflows-en.png"
decoding="async"
srcset="https://docs.joomla.org/images/9/96/Workflows--plugins--workflows-en.png 1.5x"
data-file-width="1200" data-file-height="358" width="800" height="239"
alt="Workflows Plugins" />

## Categories

Articles can be assigned to categories. They correspond to a certain
workflow and can be customized in various ways. You can set a status,
parent category and also restrict the access as well as the permissions.
This option is not within the workflows screen. For this option you need
to go to Content **→** Categories. Once there open any category and you
will see a "workflows" tab.

- *Example:* You have certain articles that you want to be available
  only for administrators or users of a higher rank. You can call your
  category "Restricted" and set all permissions on "Allowed" for
  administrators or higher. This way you do not have to set those
  permissions for every article concerned but can move them into this
  special category and save time instead.

<img
src="https://docs.joomla.org/images/thumb/d/dd/Workflow-categories-en.png/800px-Workflow-categories-en.png"
decoding="async"
srcset="https://docs.joomla.org/images/d/dd/Workflow-categories-en.png 1.5x"
data-file-width="1200" data-file-height="431" width="800" height="287"
alt="Workflow-categories-en.png" />

## Versioning

When the workflow is enabled fields managed by the workflow are excluded
from the versioning (like "state" and "featured") to avoid permission
conflicts.

## Related Information

See also:

- [Publishing Workflow
  Implementation](https://docs.joomla.org/Publishing_Workflow_Implementation "Special:MyLanguage/Publishing Workflow Implementation")
- [Scenarios](https://docs.joomla.org/J4.x:Workflowhttps://docs.joomla.org/J4.x:Workflow/Scenarios)
