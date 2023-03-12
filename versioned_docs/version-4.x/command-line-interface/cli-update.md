<!-- Filename: J4.x:CLI_Update / Display title: CLI Update -->

<span id="main-portal-heading">GSoC 2018  
CLI Update  
Documentation</span> [<img
src="https://docs.joomla.org/images/thumb/7/7d/Gsoc2016.png/75px-Gsoc2016.png"
decoding="async"
srcset="https://docs.joomla.org/images/thumb/7/7d/Gsoc2016.png/113px-Gsoc2016.png 1.5x, https://docs.joomla.org/images/thumb/7/7d/Gsoc2016.png/150px-Gsoc2016.png 2x"
data-file-width="373" data-file-height="373" width="75" height="75"
alt="Gsoc2016.png" />](https://docs.joomla.org/GSOC_2018 "GSOC 2018")
Joomla!  4.x

## Introduction

Performing some minor task on the Joomla! administrator dashboard might
seem cumbersome and slow. The CLI Update is introducing a faster way to
perform some of these operations through the command line. It brings
forward a way to integrate things faster in the Joomla! app. With it,
small tests can be done faster without having to go through the process
of the web dashboard. It is a CLI Application to the Joomla! CMS that
enables user to perform updates in the CMS.

This documentation shows how the CLI Update can be used and how you can
extend its functionality as a developer.

### Requirements

As it goes for all CLI (Command Line Interface) Apps, access to your
Joomla! installation via the command line is required to use the tools
provided by the CLI Update. You might want to consider having SSH access
for your live server.

### Terms and definitions

- CLI - Command Line Interface
- SSH - Secure SHell

## Using the CLI Update

In other for you to use the tools provided by CLI Update, as said in
former section, you need access to a CLI into the root of the Joomla
Installation. In other words you have to be in the root folder of your
Joomla CMS as all commands will run from the root folder.

<img
src="https://docs.joomla.org/images/thumb/e/ee/All_commands.png/800px-All_commands.png"
decoding="async"
srcset="https://docs.joomla.org/images/thumb/e/ee/All_commands.png/1200px-All_commands.png 1.5x, https://docs.joomla.org/images/thumb/e/ee/All_commands.png/1600px-All_commands.png 2x"
data-file-width="1980" data-file-height="1460" width="800" height="590"
alt="All commands.png" />

## General Command Usage

In this section we will talk about the usage of commands, we will talk
about different commands, what they are and how you can use them. We
will go by checking out available commands in the CLI Update.

### Available commands

There are quite a number of commands available in the CLI Update that
are ready for use. These commands are grouped based on the area of the
Joomla! CMS that they are touching.

#### Checking for Core Updates

The CLI Update provides a command to check for Joomla! updates, it works
just like the web version of `com_joomlaupdate`, it retrieves update and
tells if update is available or not. To run the update check, we will
just issue the command like this from the root directory:  
`php cli/joomla.php core:check-updates`  
The command runs and the output displays an available update version, if
available, or tell otherwise that the current installation is up to
date.

<img
src="https://docs.joomla.org/images/thumb/4/4f/Check_updates.png/800px-Check_updates.png"
decoding="async"
srcset="https://docs.joomla.org/images/thumb/4/4f/Check_updates.png/1200px-Check_updates.png 1.5x, https://docs.joomla.org/images/thumb/4/4f/Check_updates.png/1600px-Check_updates.png 2x"
data-file-width="2330" data-file-height="676" width="800" height="232"
alt="Check updates.png" />

#### Extension commands

The next group of commands are the extension based commands, simply put,
the commands allows us to manage extensions within the Jommla! core, the
CLI Update ships with commands to install, list and remove extensions.

###### Listing installed extensions

This command allows us to list all installed extensions. This command
can run in two different ways which are:

- *General Listing*: Lists all the extensions installed, by extensions
  it means components, languages, plugins, modules will be listed
  together when you run this command. This is how you call the
  command:`php cli/joomla.php extension:list` <img
  src="https://docs.joomla.org/images/thumb/7/71/Extension_list.png/800px-Extension_list.png"
  decoding="async"
  srcset="https://docs.joomla.org/images/thumb/7/71/Extension_list.png/1200px-Extension_list.png 1.5x, https://docs.joomla.org/images/thumb/7/71/Extension_list.png/1600px-Extension_list.png 2x"
  data-file-width="1980" data-file-height="1460" width="800" height="590"
  alt="Extension list.png" />
- *Listing By types*: General listing of extension can be tedious if
  you're looking for a particular extension out of the big list,
  however, you can beat down the numbers specifying the type of
  extensions you can the command to display by adding a type option to
  the command. Here is how that is done:
  `php cli/joomla.php extension:list --type=language`<img
  src="https://docs.joomla.org/images/thumb/c/ca/Extension_list_type.png/800px-Extension_list_type.png"
  decoding="async"
  srcset="https://docs.joomla.org/images/thumb/c/ca/Extension_list_type.png/1200px-Extension_list_type.png 1.5x, https://docs.joomla.org/images/thumb/c/ca/Extension_list_type.png/1600px-Extension_list_type.png 2x"
  data-file-width="1980" data-file-height="648" width="800" height="262"
  alt="Extension list type.png" />

This will list out only language based extensions, you can specify type
as module, plugin and component as well.

###### Installing an Extension

Joomla provides installing an extension through an URL to the zip file
or a path to the file, the CLI Update provides both as well and how you
can use them is described below.

- *Installing from URL*: To install an extension from URL we will run
  the command like this and provide an argument and option for the
  `extension:install`
  command.`php cli/joomla.php extension:install --url=`<a
  href="https://github.com/joomla-extensions/patchtester/releases/download/3.0.0-beta3/com_patchtester.zip"
  class="external free" target="_blank"
  rel="nofollow noreferrer noopener"><code>https://github.com/joomla-extensions/patchtester/releases/download/3.0.0-beta3/com_patchtester.zip</code></a>This
  will download and install the `com_patchtester` extension.

<img
src="https://docs.joomla.org/images/thumb/4/49/Extension_install_url.png/800px-Extension_install_url.png"
decoding="async"
srcset="https://docs.joomla.org/images/thumb/4/49/Extension_install_url.png/1200px-Extension_install_url.png 1.5x, https://docs.joomla.org/images/thumb/4/49/Extension_install_url.png/1600px-Extension_install_url.png 2x"
data-file-width="1758" data-file-height="328" width="800" height="149"
alt="Extension install url.png" />

- *Installing from a PATH*:To install an extension from a PATH we will
  run the same `extension:install` command and specify arguments for
  paths like
  this:`php cli/joomla.php extension:install --path=/Users/bosunski/docs/com_pathtester.zip`
  <img
  src="https://docs.joomla.org/images/thumb/e/eb/Extension_install_path.png/800px-Extension_install_path.png"
  decoding="async"
  srcset="https://docs.joomla.org/images/thumb/e/eb/Extension_install_path.png/1200px-Extension_install_path.png 1.5x, https://docs.joomla.org/images/thumb/e/eb/Extension_install_path.png/1600px-Extension_install_path.png 2x"
  data-file-width="2050" data-file-height="1208" width="800" height="471"
  alt="Extension install path.png" />

This loads the extension and performs the installation as expected.

###### Removing an extension

The last command under this category is the `extension:remove` command
that is used to remove extensions from the Joomla CMS. This command
takes in the `extension_id` as an argument, you can always use the
`extension:list` to display extension id. This is how we remove an
extension of id `803`  
`php cli/joomla.php extension:remove 803`

<img
src="https://docs.joomla.org/images/thumb/5/50/Extension_Remove.png/800px-Extension_Remove.png"
decoding="async"
srcset="https://docs.joomla.org/images/thumb/5/50/Extension_Remove.png/1200px-Extension_Remove.png 1.5x, https://docs.joomla.org/images/thumb/5/50/Extension_Remove.png/1600px-Extension_Remove.png 2x"
data-file-width="1980" data-file-height="1208" width="800" height="488"
alt="Extension Remove.png" />

#### Updating the Joomla Core

As much as the CLI Update provides a command to check update, it also
provides a command to perform the update if an update is available. To
perform update we will just run this:  
`php cli/joomla.php core:update`  
This command updates the Joomla core updating it to the latest version
available.

<img
src="https://docs.joomla.org/images/thumb/a/ac/Core_update.png/800px-Core_update.png"
decoding="async"
srcset="https://docs.joomla.org/images/thumb/a/ac/Core_update.png/1200px-Core_update.png 1.5x, https://docs.joomla.org/images/thumb/a/ac/Core_update.png/1600px-Core_update.png 2x"
data-file-width="2330" data-file-height="984" width="800" height="338"
alt="Core update.png" />

#### Installing Joomla! via the CLI

The next command here is the `core:install` command that lets
installation of Joomla CMS to be done via the CLI. This command can work
in 2 modes: The Interactive mode and the Non-interactive mode.

##### Interactive installation

To have a fresh installation of Joomla using the interactive mode we
will just run the `extension:install` command like so:  
`php cli/joomla.php extension:install`

The default installation mode will run and will ask you to input the
settings as it's required, once all options have been provided and
validated, the installations will run and Joomla will be installed.

<img
src="https://docs.joomla.org/images/thumb/e/ec/Core_install_interactive.png/800px-Core_install_interactive.png"
decoding="async"
srcset="https://docs.joomla.org/images/thumb/e/ec/Core_install_interactive.png/1200px-Core_install_interactive.png 1.5x, https://docs.joomla.org/images/thumb/e/ec/Core_install_interactive.png/1600px-Core_install_interactive.png 2x"
data-file-width="2442" data-file-height="1852" width="800" height="607"
alt="Core install interactive.png" />

##### Non-interactive Installation

The next type of installation is the Non-interactive mode. In this mode
you will not be asked to input the options but rather all options will
be specified within a file and the command will take in an option that
specifies the path to the file you want to load the options from, it's
done like this:  
`php cli/joomla.php core:install --file=/path/to/config.json`

<img
src="https://docs.joomla.org/images/thumb/d/dd/Core_install_file.png/800px-Core_install_file.png"
decoding="async"
srcset="https://docs.joomla.org/images/thumb/d/dd/Core_install_file.png/1200px-Core_install_file.png 1.5x, https://docs.joomla.org/images/thumb/d/dd/Core_install_file.png/1600px-Core_install_file.png 2x"
data-file-width="1980" data-file-height="760" width="800" height="307"
alt="Core install file.png" />

An example of the contents of `config.json` can be:  

    {
      "language":"en-GB",
      "site_name":"Joomla",
      "admin_email":"email@example.com",
      "admin_user":"user",
      "admin_password":"password",
      "db_type":"mysql",
      "db_host":"localhost",
      "db_user":"root",
      "db_pass":"xcdxcx",
      "db_name":"jtest",
      "db_prefix":"efs0k_",
      "db_old":"remove",
      "helpurl":"https://joomla.org"
    }

OR as sample `config.ini`

    site_name="gsoc"
    admin_email="user@example.com"
    admin_user="user"
    admin_password="secret"
    db_type="mysql"
    db_host="localhost"
    db_user="root"
    db_pass=""
    db_name="joomla"
    db_prefix="prefix_"

The options defined are loaded and validated after which the
installation will run.

#### Configuration based commands

The next set of commands we will be looking at is for setting and
viewing configuration options inside the Joomla installation:

##### Setting configurations

The CLI Update provides a command to change the value of an option
existing in the configuration. Using the `config:get` command you can
set any configuration option that exists inside the `configuration.php`.
This is how to use command:  
`php cli/joomla.php config:set mailer=mail`

<img
src="https://docs.joomla.org/images/thumb/6/6e/Config_set_single.png/800px-Config_set_single.png"
decoding="async"
srcset="https://docs.joomla.org/images/thumb/6/6e/Config_set_single.png/1200px-Config_set_single.png 1.5x, https://docs.joomla.org/images/thumb/6/6e/Config_set_single.png/1600px-Config_set_single.png 2x"
data-file-width="1980" data-file-height="648" width="800" height="262"
alt="Config set single.png" />

You can even add multiple option-value pairs like this:  
`php cli/joomla.php config:set mailer=mail fromname=Joomla! sitename="Joomla Site"`
This will set multiple options at once.

<img
src="https://docs.joomla.org/images/thumb/8/8b/Config_set_multiple.png/800px-Config_set_multiple.png"
decoding="async"
srcset="https://docs.joomla.org/images/thumb/8/8b/Config_set_multiple.png/1200px-Config_set_multiple.png 1.5x, https://docs.joomla.org/images/thumb/8/8b/Config_set_multiple.png/1600px-Config_set_multiple.png 2x"
data-file-width="1980" data-file-height="984" width="800" height="398"
alt="Config set multiple.png" />

##### Getting configurations

The next command in this category is the `config:get` command, as the
name suggests it gets the value of an option that exists inside the
`configuration.php`, when no argument is supplied to the command, it
will display all the options available in a tabulated form. Here is the
command:  
`php cli/joomla.php config:get sitename`

This will return the value for the option `sitename`.

<img
src="https://docs.joomla.org/images/thumb/3/3b/011-cli.png/800px-011-cli.png"
decoding="async"
srcset="https://docs.joomla.org/images/thumb/3/3b/011-cli.png/1200px-011-cli.png 1.5x, https://docs.joomla.org/images/thumb/3/3b/011-cli.png/1600px-011-cli.png 2x"
data-file-width="2050" data-file-height="564" width="800" height="220"
alt="011-cli.png" />

`php cli/joomla.php config:get`

This will return all the values for the available options.

<img
src="https://docs.joomla.org/images/thumb/d/d9/Config_get_all.png/800px-Config_get_all.png"
decoding="async"
srcset="https://docs.joomla.org/images/thumb/d/d9/Config_get_all.png/1200px-Config_get_all.png 1.5x, https://docs.joomla.org/images/thumb/d/d9/Config_get_all.png/1600px-Config_get_all.png 2x"
data-file-width="1980" data-file-height="956" width="800" height="386"
alt="Config get all.png" />

##### Getting grouped configurations

The CLI Update adds an option to `config:get` command that allows us to
get logically grouped options, say for example you want to view all your
database related options, or you want to view all email related options.
To achieve this the CLI Update provides an option to specify a group of
options to display, here is how to do that:

`php cli/joomla.php config:get --group=mail`

<img
src="https://docs.joomla.org/images/thumb/f/fb/Config_get_group.png/800px-Config_get_group.png"
decoding="async"
srcset="https://docs.joomla.org/images/thumb/f/fb/Config_get_group.png/1200px-Config_get_group.png 1.5x, https://docs.joomla.org/images/thumb/f/fb/Config_get_group.png/1600px-Config_get_group.png 2x"
data-file-width="1980" data-file-height="816" width="800" height="330"
alt="Config get group.png" />

The command takes in the `group` option and given the value of `mail`.
CLI Update currently supports group values: mail, db and session.

#### Site down and Site up commands

As their name suggests, these commands allow you to quickly put your
Joomla powered website into offline or online mode. Here is how to use
the commands:  
`php cli/joomla.php site:up`

<img
src="https://docs.joomla.org/images/thumb/d/d2/Site_up.png/800px-Site_up.png"
decoding="async"
srcset="https://docs.joomla.org/images/thumb/d/d2/Site_up.png/1200px-Site_up.png 1.5x, https://docs.joomla.org/images/thumb/d/d2/Site_up.png/1600px-Site_up.png 2x"
data-file-width="1980" data-file-height="816" width="800" height="330"
alt="Site up.png" />

`php cli/joomla.php site:down`

<img
src="https://docs.joomla.org/images/thumb/8/82/Site_down.png/800px-Site_down.png"
decoding="async"
srcset="https://docs.joomla.org/images/thumb/8/82/Site_down.png/1200px-Site_down.png 1.5x, https://docs.joomla.org/images/thumb/8/82/Site_down.png/1600px-Site_down.png 2x"
data-file-width="1980" data-file-height="816" width="800" height="330"
alt="Site down.png" />

The second command puts the website in offline mode while the first
command brings the website to online mode.

## Contributing to CLI Update as a developer

### Adding more commands

The CLI Update ships with some commands which are added based on the
need seen as of the time. However, the CLI Update allows other commands
to be added easily and this is what this section is for. A video
tutorial is included below.

### Calling other commands within command classes

Should in case a command you want to write for the CLI Update is going
to be require that you call an existing command internally, this is how
that can be achieved from within another command class:

    getApplication()->getCommand('say:hello');
            $code = $command->execute();

            if($code === 0) {
                // command ran successfully, do something
            }
        }

        ...
    }

Here, we're attempting to call the `say:hello` command created in the
Video above.

### Some important things to checkout

- Symfony Style Documentation:
  <a href="https://symfony.com/doc/current/console/style.html"
  class="external text" target="_blank"
  rel="nofollow noreferrer noopener">How to Style a Console Command</a>

<!-- -->

-   
-   
-   
-   
- Write a CLI Application with Joomla 4 [J4.x:Writing A CLI
  Application](https://docs.joomla.org/J4.x:Writing_A_CLI_Application "J4.x:Writing A CLI Application")
