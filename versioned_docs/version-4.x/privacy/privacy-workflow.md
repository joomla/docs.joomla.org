<!-- Filename: J4.x:Privacy_Workflow / Display title: Privacy Workflow -->

## Creating a Request

Processing requests for personal information is the main purpose of the
privacy component. Users may ask for a summary of their personal data or
for all of their personal data to be removed. A request can be created
either by an authenticated user through the request form or by a super
user.

In this context, a user means any individual or organization who has
made a request, regardless of whether there is a registered user
account. For example, requests may come to the site administrator from
individuals or organisations who have been added to the site as
contacts.

Personal data is based on email addresses and automated processing is
limited to extensions that report privacy capabilities.

*IMPORTANT* To create and process information requests, your website
MUST be able to send emails due to the requirement for the information
owner to confirm the request.

### Authenticated User Request

Registered users may submit an information request via a *Privacy
Information Request* menu link available only after login. A good place
for such a link is in the same menu where there is a link to the site
**Privacy Policy**. A Bottom Menu in the site footer is often a favoured
location. When submitting an information request, the user must provide:

- The request type: Export or Remove selected from the drop-down list.

<img
src="https://docs.joomla.org/images/thumb/5/56/J4x-privacy-workflow-user-request-en.png/800px-J4x-privacy-workflow-user-request-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/5/56/J4x-privacy-workflow-user-request-en.png 1.5x"
data-file-width="1000" data-file-height="491" width="800" height="393"
alt="J4x-privacy-workflow-user-request-en.png" />

On submission a message will indicate either that the request has been
accepted and a verification email is on its way:

<img
src="https://docs.joomla.org/images/thumb/a/a5/J4x-privacy-workflow-user-request-accepted-en.png/800px-J4x-privacy-workflow-user-request-accepted-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/a/a5/J4x-privacy-workflow-user-request-accepted-en.png 1.5x"
data-file-width="1000" data-file-height="290" width="800" height="232"
alt="J4x-privacy-workflow-user-request-accepted-en.png" />

or that *Your information request could not be created. There is already
an active information request for this email address and request type.
Please contact the site owner for updates on this request.*

### Super User Creation

Through the **Privacy: Information Requests** page, any super user may
create a new information request. This is the only way to create
information requests for users who do NOT have accounts on the website.
To create a request:

- Select **Users **→** Privacy **→** Requests** from the Administrator
  menu.
- Select the **New** button from the Toolbar.
- In the **Email** field enter the user email address.
- In the **Request Type** field select Export or Remove from the
  drop-down list.
- **Save & Close**.

Once created the request cannot be edited. It can only be Invalidated or
Processed.

## Confirming a Request

Once a request has been created, regardless of how it is created, the
user will receive an email containing a link to a confirmation form.

<img
src="https://docs.joomla.org/images/thumb/1/10/J4x-privacy-workflow-user-request-confirm-en.png/800px-J4x-privacy-workflow-user-request-confirm-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/1/10/J4x-privacy-workflow-user-request-confirm-en.png 1.5x"
data-file-width="1000" data-file-height="379" width="800" height="303"
alt="J4x-privacy-workflow-user-request-confirm-en.png" />

The user must enter the token provided in the email and submit the form.
The token is valid for 24 hours. If a request is not confirmed in that
time-frame, the request will be marked as **Invalid** in the Privacy
Requests list and a new request must be submitted.

Once the user confirms the request, an email will be sent to Super Users
to indicate that action is required.

- Select **Users **→** Privacy **→** Requests** from the Administrator
  menu.
- Requests requiring action will be marked as **Confirmed**.

<img
src="https://docs.joomla.org/images/thumb/c/c0/J4x-privacy-information-requests-en.png/800px-J4x-privacy-information-requests-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/c/c0/J4x-privacy-information-requests-en.png 1.5x"
data-file-width="1000" data-file-height="363" width="800" height="290"
alt="J4x-privacy-information-requests-en.png" />

## Processing an Export Request

Once an export request has been confirmed, there are two actions
available to super users.

- Export Data: This will collect all data for the information request's
  subject and create an XML file that will be downloaded to your
  computer. This is useful to enable site owners to review the data
  export prior to sending it to the user.
- Email Data Export: This will collect all data for the information
  request's subject, create an XML file (the same as generated by the
  Export Data action), and send an email to the user with the exported
  data file attached.

**Important:** The export action can only collect data from extensions
that have privacy support. Therefore, the super user who is acting on
the request should review the export and if necessary include data
contained in extensions that store personal data but do not have privacy
support.

## Processing a Removal Request

Once a remove request has been confirmed, there is only one action
available to super users.

- Delete Data: This process will anonymize and/or remove data related to
  the information subject. For requests where the information owner also
  has a registered user account, this process will anonymize the
  account's name, username, and email address, as well as block the
  account from being logged into and log the user out of the site if
  they are logged in at the time the request is processed.

**Important:** The delete action can only collect data from extensions
that have privacy support. Therefore, the super user who is acting on
the request should review the export and if necessary manually anonymize
or remove data contained in extensions that store personal data but do
not have privacy support.

On selection of the **Delete Data** button there is a **Data Removed**
confirmation message but the Privacy: Information Requests list is
otherwise unchanged. The user data is removed or anonymised but not the
data in the \#\_\_action_logs, \#\_\_messages and \#\_\_privacy_requests
tables (see below).

## Completing a Request

After the request has been processed it should be marked as completed.
This will indicate that the request has been fulfilled and there is no
further action to be taken.

- In the **Privacy: Information Requests** list select the email address
  of request being processed.
- In the **Privacy: Review Information Request** form:
  - Review the data.
  - Select the appropriate **Export**, **Email** or **Delete** button
    from the Toolbar if not already done from the list view.
- Select the **Complete** button from the Toolbar (or the **Invalidate**
  button if this judged an invalid request),

<img
src="https://docs.joomla.org/images/thumb/4/4d/J4x-privacy-workflow-review-information-request-en.png/800px-J4x-privacy-workflow-review-information-request-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/4/4d/J4x-privacy-workflow-review-information-request-en.png 1.5x"
data-file-width="1000" data-file-height="508" width="800" height="406"
alt="J4x-privacy-workflow-review-information-request-en.png" />

## Finally

To remove User Actions Log data:

- Select **Users **→** User Actions Log** from the Administrator menu.
- Search for the username or email address of the deleted user.
- Select the **Check All Items** checkbox.
- Select the **Delete** button in the Toolbar.

To remove Private Message data and Privacy Request data:

- There is no easy way to batch remove either of these types of data
  from within Joomla. The quickest method is to search for the Username
  (email address) in the database with phpMyAdmin and delete the records
  there. Here is an example screenshot:

<img
src="https://docs.joomla.org/images/e/ed/J4x-privacy-workflow-delete-with-phpmyadmin-en.png"
class="thumbborder" decoding="async" data-file-width="438"
data-file-height="339" width="438" height="339"
alt="J4x-privacy-workflow-delete-with-phpmyadmin-en.png" />

## Additional Resources

- [Developer's Guide for the Privacy Tool
  Suite](https://docs.joomla.org/J3.x:Integrate_Extensions_with_the_Privacy_Component "Special:MyLanguage/J3.x:Integrate Extensions with the Privacy Component")
