<!-- Filename: J4.x:User_Actions_Log / Display title: User Actions Log -->

## Introduction

The User Actions Log component (com_actionlogs) provides an
infrastructure to create an audit log of website activities. The actions
that are logged can be fine tuned by the site administrator. Third party
extensions are able to hook into the component to add custom messages or
have the system process standard administrator actions.

**Note: Only Super Users have access to the User Actions Log
component.**

## User Actions Log

To view the the User Actions Log list:

- Select **Users **→** User Actions Log** from the Administrator menu.

<img
src="https://docs.joomla.org/images/thumb/7/7f/J4x-user-actions-log-list-en.png/800px-J4x-user-actions-log-list-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/7/7f/J4x-user-actions-log-list-en.png 1.5x"
data-file-width="1000" data-file-height="790" width="800" height="632"
alt="J4x-user-actions-log-list-en.png" />

From this page a Super User has a global overview of all user activities
performed on a site.

- Export Selected as CSV: this button exports only the items selected in
  the visible list.
- Export All as CSV: this button exports all records. The filters are
  ignored.
- Delete: this button deletes the selected items.
- Clear Log: this button deletes all log entries.
- Options: a configuration form to set the logging options.

## Options

The User Actions Log: Options form allows the Super User to select which
events to log and whether to include IP addresses in the log data.

<img
src="https://docs.joomla.org/images/thumb/e/e6/J4x-user-actions-log-options-en.png/800px-J4x-user-actions-log-options-en.png"
class="thumbborder" decoding="async"
srcset="https://docs.joomla.org/images/e/e6/J4x-user-actions-log-options-en.png 1.5x"
data-file-width="1000" data-file-height="529" width="800" height="423"
alt="J4x-user-actions-log-options-en.png" />

## Plugins

The action logging system uses a number of plugins:

### Action Log - Joomla

When enabled, this plugin records the users core actions, including such
actions as login/logout, update article, add module. The plugin has no
parameters,

### System - User Actions Log

When enabled, this plugin defines the number of days after which the
logs will be deleted. A value of zero will mean the logs are never
automatically deleted.

### Privacy - Action Logs

When enabled, this plugin exports the action log data for a user's
privacy request.

## Latest Actions Module

This module is displayed for Super Users only in the Home Dashboard.

<img
src="https://docs.joomla.org/images/7/7b/J4x-latest-actions-module-en.png"
class="thumbborder" decoding="async" data-file-width="559"
data-file-height="482" width="559" height="482"
alt="J4x-latest-actions-module-en.png" />

## How to hook an extension to the system

Please feel free to edit this section by improving or correcting it.

### Component Installation Script

Add the extension to the table (#\_\_action_logs_extensions) so that it
will appear in the configuration of User Action Logs.  

            $extension = 'com_mycomponent';
            $db = Factory::getDbo();
            $db->setQuery(' INSERT into #__action_logs_extensions (extension) VALUES ('.$db->Quote($extension).') ' );
            try {
                // If it fails, it will throw a RuntimeException
                $result = $db->execute();
            } catch (RuntimeException $e) {
                Factory::getApplication()->enqueueMessage($e->getMessage());
                return false;
            }

Add the extension configuration to the table (#\_\_action_log_config) so
that your actions data will be captured.  

           $logConf = new stdClass();
            $logConf->id = 0;
            $logConf->type_title = 'transaction';
            $logConf->type_alias = $extension;
            $logConf->id_holder = 'id';
            $logConf->title_holder = 'trans_desc';
            $logConf->table_name = '#__mycomponent_transaction';
            $logConf->text_prefix = 'COM_MYCOMPONENT_TRANSACTION';

            try {
                // If it fails, it will throw a RuntimeException
                // Insert the object into the table.
                $result = Factory::getDbo()->insertObject('#__action_log_config', $logConf);
            } catch (RuntimeException $e) {
                Factory::getApplication()->enqueueMessage($e->getMessage());
                return false;
            }

Of course it would be best to perform some checking to ensure that the
record doesn't already exist.

### Component Helper

In this example, the component helper is used to perform the storing of
actions.

       /**
         * Record transaction details in log record
         * @param   object  $user    Saves getting the current user again.
         * @param   int     $tran_id  The transaction id just created or updated
         * @param   int     $id  Passed id reference from the form to identify if new record
         * @return  boolean True
         */
        public static function recordActionLog($user = null, $tran_id = 0, $id = 0)
        {
                // get the component details such as the id
            $extension =  MycomponentHelper::getExtensionDetails('com_mycomponent');
            // get the transaction details for use in the log for easy reference
            $tran = MycomponentHelper::getTransaction($tran_id);
            $con_type = "transaction";
            if ($id === 0) { $type = 'New '; } else { $type = 'Update '; }

            $message = array();
            $message['action'] = $con_type;
            $message['type'] = $type . $tran->tran_type . ' - '.$tran->tran_desc . ' $' . $tran->tran_amount;
            $message['id'] = $tran->id;
            $message['title'] = $extension->name;
            $message['extension_name'] = $extension->name;
            $message['itemlink'] = "index.php?option=com_mycomponent&task=transaction.edit&id=".$tran->id;
            $message['userid'] = $user->id;
            $message['username'] = $user->username;
            $message['accountlink'] = "index.php?option=com_users&task=user.edit&id=".$user->id;
            
            $messages = array($message);
            
            $messageLanguageKey = Text::_('COM_MYCOMPONENT_TRANSACTION_LINK');
            $context = $extension->name.'.'.$con_type;
            
            $fmodel = MycomponentHelper::getForeignModel('Actionlog', 'ActionlogsModel');

            $fmodel->addLog($messages, $messageLanguageKey, $context, $user->id);

            return true;
        }

        /**
         * Get the Model from another component for use
         * @param   string  $name    The model name. Optional. Default to my own for safety.
         * @param   string  $prefix  The class prefix. Optional
         * @param   array   $config  Configuration array for model. Optional
         * @return object   The model
         */
        public function getForeignModel($name = 'Transaction', $prefix = 'MycomponentModel', $config = array('ignore_request' => true))
        {
            \Joomla\CMS\MVC\Model\ItemModel::addIncludePath(JPATH_ADMINISTRATOR . '/components/com_actionlogs/models', 'ActionlogsModelActionlog');
            $fmodel = \Joomla\CMS\MVC\Model\ItemModel::getInstance($name, $prefix, $config);

            return $fmodel;
        }

### Front End Transaction Form

Now that the foundations are set, we just need to trigger the process.
We're capturing information about a transaction that is created or
update and we have a model called `transactionform.php`. It is in the
Save method that we want to capture a log.

       // So the code above this point checks and does what it should do and then after the successful save of the record, we check for the parameter setting to see if logging is required, we pass key elements to recordActionLog.
            $table = $this->getTable();

            if ($table->save($data) === true) {

                /* ---------------------------------------------------------------- */
                // trigger transaction log if required
                $act_log = $params->get('act_log', 0);
                if ($act_log && $table->id) {
                    // gather information and log in a new action log record
                    MycomponentHelper::recordActionLog($user, $table->id, $data['id']);
                }
                /* ---------------------------------------------------------------- */

                return $table->id;
            } else {
                return false;
            }

### Language File

Finally, to help with the Action Log Listing in the admin side of
Joomla, we want to set some key elements of data to be displayed in the
language file en-GB/com_mycomponent.ini.  

    COM_MYCOMPONENT_TRANSACTION_LINK="User {username} created a transaction ( {type} )"
