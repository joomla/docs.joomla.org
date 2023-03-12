<!-- Filename: J4.x:Workflow/Scenarios / Display title: Workflow/Scenarios -->

## Implementing Workflows

The general order of tasks to create a new workflow are:

1.  Plan
2.  Add new **User Groups** (optional)
3.  Add new **Users** and assign them to appropriate **User Groups**
    (optional)
4.  Create the new **Workflow**
5.  Create the **State(s)** for that **Workflow** with the
    **Condition(s)**
6.  Create the **Transition(s)** of the Workflow
7.  Add or Edit the applicable **Category** to add the **Workflow**
8.  Edit the **Permissions** of the **Category** so that the new **User
    Groups** have permissions to do only what they need to do
9.  Set up notifications if desired
10. Set up login access for the **Users** on the frontend (or the
    backend: not included in this tutorial) (optional)

## Planning

Plan what your workflow will do. Planning is always the most important
part. Answer these questions to help you plan:

- How many groups of users (even if there is only one user in the group)
  need to take an action?
- How many actions will there be in the Workflow?
- Will any of the groups need to receive notifications to do their
  action?
- Will the groups do their actions from the frontend or the backend or
  combination of both?
- Which Categories will have a/this Workflow?
- Will different Categories have different Workflows?

## Scenario \#1

- One User Group adds blog posts but cannot publish them
- Second User Group approves blog posts and publishes them

### Create New User Groups

1.  Go to **Users** **→** **Groups** **→** New
2.  Enter the **Group Title**: *Blog Posters*
3.  Select the **Group Parent**: Registered
4.  Click Save & New
5.  Enter the **Group Title**: *Blog Approvers*
6.  Select the **Group Parent**: Registered
7.  Click Save & Close

### Create New Users (or edit existing Users)

Using the directions on [create your new
**Users**](https://docs.joomla.org/Adding_a_new_user "Special:MyLanguage/Adding a new user").

1.  Create **User(s)** and assign them to the *Blog Posters* **User
    Group**.
2.  Create **User(s)** and assign them to the *Blog Approvers* **User
    Group**.

**NOTE**: If you want your **Users** to receive notifications for a
**Transition** (see more below) then select Yes for **Receives System
Emails** for each **User** to receive notifications.

### Create the Workflow

1.  Go to **Content** **→** **Workflows** **→** New
2.  Enter the **Title**: *Blog Workflow*
3.  Click Save & Closed

**NOTE**: Only mark this Default if it will be the Default Workflow for
ALL NEW Articles created in Categories **without** an assigned Workflow.
Existing Articles will not be changed.

### Create the State(s) of the Workflow

1.  From the **Workflows** list view, click the “**manage**” link in the
    **States** column next to the *Blog Workflow*. You will see the
    default **State** of Published.
2.  Click the **Default State** for Published and change the **Title**
    to: *Publish new blog post*.
3.  The **Condition of items in this state: Published** will remain
    unchanged.
4.  Click Save & New.
5.  Enter the **Title**: *New blog post, unpublished*.
6.  Change the **Condition** of items in this **State** to Unpublished.
7.  Change the **Default** to Yes (Green) since this is the **Default
    State** for Articles in this Workflow.
8.  Click Save & Close.

### Create Transition for the Workflow

There are two ways to access **Transitions**:

1.  Click **Transitions** from the sidebar while in the States list
    view.
2.  Click the blue line with arrows in both directions from the
    **Workflow** list view.

<!-- -->

1.  Go to **Transitions**.
2.  Click New.
3.  Add the **Title**: *Approve/Publish*
4.  Select the **State** *New blog post – unpublished* in the **From
    state** field drop-down.
5.  Select the **State** *Publish new blog post* in the **To state**
    field drop-down.
6.  Click Save and remain in this **Transition**.
7.  Click the **Permissions** tab of the **Transition**.
8.  Select the **User Group** *Blog Approvers*.
9.  For the **Action** **Execute transition**, select **Allowed** from
    the **Select New Setting** drop-down.
10. Click Save & Close.

**NOTE**: You can quickly access your **States** and **Transitions**
from the **Workflow** list view. The orange circle is the States and has
the quantity of States listed next to the Workflow Title. The blue line
with arrows in both directions is for Transitions and shows the quantity
of Transitions for the Workflow.

### Assign Workflow & User Group Permissions to the Category

1.  Go to **Content** **→** **Categories**
2.  Access the *Blog* **Category** (or create it if necessary) and click
    the **Workflow** tab.
3.  Click the drop-down and select *Blog Workflow*.
4.  Click the **Permissions** tab.
5.  Click on the *Blog Poster* **User Group**.
6.  For the **Action** Create and Edit, change the **Select New
    Setting** drop-down to Allowed.
7.  Click on the *Blog Approvers* **User Group**.
8.  For the **Action** Delete, Edit, Edit State and Edit Own, change the
    **Select New Setting** drop-down to Allowed.
9.  Click Save & Close.

For more information on ACL and assigning permissions to User Groups,
see the [ACL
Tutorial](https://docs.joomla.org/J3.x:Access_Control_List_Tutorial "Special:MyLanguage/J3.x:Access Control List Tutorial").

### Setting up Notifications

Notifications use the Joomla core Messaging component. It is very basic.
When enabled for Workflows, it will send a message to the User
associated with the Group assigned to the Transition. The message simply
states that they have a message in the site. It will then be their
responsibility to login and check the articles that need approval and
publish them.

**To set up notifications for the Workgroup Transitions:**

1.  Go to **Extensions** **→** **Plugins**
2.  Click the **Table Options** button and **Select Type** of content
3.  Click on **Content – Joomla** and then toggle Yes for **Email on
    transition execution**
4.  Then make sure that the **Users** themselves have **Receive System
    Emails** toggled to Yes in **Users** **→** **Manage**.

### To set it up so that Users can Post and Approve from the frontend

1.  Create a **Menu Item** for the **Menu Item Type** Login so that your
    Blog Posters can login.  
    **Menus** **→** *Choose or create a
    menu* **→** New **→** **Users** **→** **Login**  
    OR
2.  Create a module for Login so that your Blog Posters can login.  
    **Extensions** **→** **Modules** **→** New **→** **Login**
3.  Add a **Menu Item** to a Menu that displays only for the
    **Registered User Group** to Add an article  
    **Menu Item Type Articles** **→** **Create Article**  
    **NOTE**: this will display for all Registered Users unless you
    create an Access Level for your Blog Poster User Group and select
    this in the Menu Item under Access.
4.  When your **User** logs in, they add an **Article**, enter the
    content and Save.
5.  This will trigger a notification to the Blog Approvers Users that
    there is a new private message on the site. It doesn’t get more
    specific than that. Approvers should just come to the site and
    approve the Article. It will also send a message to Super Admins.
6.  When the Blog Approver logs in, they can navigate to where the new
    article will appear. They will be able to see the unpublished
    article and edit it/approve it/publish it. Then they can Save &
    Close and logout.

**Admin note**: Super Admins can use Batch to move existing Articles to
a different workflow than it is currently assigned. It won’t make a
difference if the Articles are already published.

## Scenario \#2

Add another scenario here to help others see the power of Workflows.
Docs can be edited or added to by anyone with an account.

## Related Information

See also:

- [Publishing Workflow
  Implementation](https://docs.joomla.org/Publishing_Workflow_Implementation "Special:MyLanguage/Publishing Workflow Implementation")
- [Publishing
  Workflow](https://docs.joomla.org/Publishing_Workflow "Special:MyLanguage/Publishing Workflow")
