<!-- Filename: Module_Class_Suffix / Display title: Module Class Suffix -->

Module Class Suffix is a parameter in Joomla! modules. It is set Module:
\[Edit\] screen under Advanced Parameters. Setting this parameter causes
Joomla! to either add a new CSS class or modify the existing CSS class
for the `div` element for this specific module.

When Joomla! generates a module, it automatically create a CSS class
called "moduletable" to allow styling of the module -- for example,

To create a new class, enter the parameter with a leading space. For
example, entering a space plus "myNewClass" will create a new CSS class
called "myNewClass". The HTML will be changed to

To change the name of the existing class, enter in the parameter without
a leading space. For example, entering "\_mySuffix" (no leading space)
will cause the HTML to changed to

Generally, it is recommended to use a leading space to create a new
class. This way, CSS styling for this module that uses the standard
class names will continue to work. You can use the new class name to add
any desired styling to the module without needing to re-create all of
the existing CSS code. Note that, if you create a new class name, make
sure it has a unique name and doesn't conflict with any existing class
names.

See [Using Class
Suffixes](https://docs.joomla.org/Using_Class_Suffixes "Using Class Suffixes")
for more information.

## Usage

If you enter a Module Class Suffix with a leading space, a new CSS class
will be created. If your parameter does not have a leading space, the
CSS class "moduletable" is modified. The first method is often
preferred, since then you don't break any of the existing styling for
the module, and you only need to add new CSS code for the new styling.

If you don't use a leading space, you will need to copy all of the
styling code for the "moduletable" class and duplicate it for the new
CSS class before making your CSS changes.

See [the tutorial Using Class
Suffixes](https://docs.joomla.org/Using_Class_Suffixes "Using Class Suffixes")
for a detailed example of using Page and Module Class Suffixes.
