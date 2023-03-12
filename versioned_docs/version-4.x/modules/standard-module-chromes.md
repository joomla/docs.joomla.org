<!-- Filename: Standard_Module_Chromes / Display title: Standard Module Chromes -->

Note that this example includes class additions because the examples are
taken using mod_mainmenu. The suffix "\_menu" to the div class and the
"menu" class on the ul tag are not present with other modules.

**Comparison of the Joomla! standard Module chromes** These are the same
from Joomla! 1.5 through 3.x

Style

Output

Appearance

rounded  

      
        
          
            Main Menu
            
              
            
          
        
      

<img src="https://docs.joomla.org/images/8/8d/Module_chrome_rounded.png"
decoding="async" data-file-width="204" data-file-height="190"
width="204" height="190" alt="Module chrome rounded.png" />

none

      

<img src="https://docs.joomla.org/images/1/18/Module_chrome_none.png"
decoding="async" data-file-width="204" data-file-height="150"
width="204" height="150" alt="Module chrome none.png" />

table

      
        Main Menu

- 

<img src="https://docs.joomla.org/images/9/9d/Module_chrome_table.png"
decoding="async" data-file-width="204" data-file-height="160"
width="204" height="160" alt="Module chrome table.png" />

horz

      
        
          
            
              Main Menu

- 

<img src="https://docs.joomla.org/images/2/24/Module_chrome_horz.png"
decoding="async" data-file-width="204" data-file-height="170"
width="204" height="170" alt="Module chrome horz.png" />

xhtml

      Main Menu
      
        
      

<img src="https://docs.joomla.org/images/8/83/Module_chrome_xhtml.png"
decoding="async" data-file-width="206" data-file-height="165"
width="206" height="165" alt="Module chrome xhtml.png" />

html5

      Main Menu
      
        
      

<img src="https://docs.joomla.org/images/9/9f/Module_chrome_html5.png"
decoding="async" data-file-width="227" data-file-height="205"
width="227" height="205" alt="Module chrome html5.png" />

outline

      left[outline]
      
        
          
        
      

<img src="https://docs.joomla.org/images/1/12/Module_chrome_outline.png"
decoding="async" data-file-width="198" data-file-height="151"
width="198" height="151" alt="Module chrome outline.png" />

Note that the Module chrome doesn't necessarily change the appearance
all that much - this depends on the CSS used in the template. For
example, the '`none`' and '`horz`' chromes look very similar, although
the underlying HTML code is very different.

Other notes: The `horz` is just the `table` layout, wrapped in a
`table`, `tr`, and `td`.

Until Joomla! 3: The software controlling these is in the file
`/templates/system/html/modules.php`.

**Changes since Joomla! 4**

- The standard chromes `horz`, `rounded` and `xhtml` have been removed
  from core.
- The core module chromes are controlled by `JLayout` files in directory
  `/layouts/chromes/`.
