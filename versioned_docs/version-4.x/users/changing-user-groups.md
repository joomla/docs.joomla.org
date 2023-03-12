<!-- Filename: Changing_user_groups / Display title: Changing user groups -->

## Changing User Groups

You can change a user's group by following these steps. You must log in
as an Administrator or a Super User to be able to change a user's
groups. Also, an Administrator cannot make himself or others a Super
User.

1.  Log into the Administrator Backend via the */administrator* URL.
2.  Click on *Site*, then *User Manager*
3.  Click on the check box next to the user you want to change, then
    click *Edit* in the top right corner.
4.  In the *User Details* section, change the user's group.
5.  Click *Save*.

## Access Control List (ACL) for Joomla

The following lists the [Access Control
List](https://docs.joomla.org/Access_Control_List "Access Control List")
(ACL) for Joomla. The user group is listed, and the bullets below
describe the permissions associated with that group.

### Frontend Groups

#### Guest

- View public site and public articles

#### Registered

- Guest Group privileges
- View registered articles

#### Author

- Registered Group privileges
- Create new articles
- Edit articles they own
- View special content

#### Editor

- Author Group privileges
- Edit all articles, including unpublished ones

#### Publisher

- Editor Group privileges
- Publish articles

### Backend Groups

These groups allow you to log into the Administrator via the
*/administrator* URL.

#### Manager

- Publisher Group privileges
- Access Administrator Backend

#### Administrator

- Manager Group privileges
- Create new users
- Install extensions

#### Super User

- Administrator privileges
- Change site template
- Change global configuration
