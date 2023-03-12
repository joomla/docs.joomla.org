<!-- Filename: Enabling_Search_Engine_Friendly_(SEF)_URLs_on_IIS/IIS7 / Display title: Enabling Search Engine Friendly (SEF) URLs on IIS/IIS7 -->

If you have a server running IIS 7 and PHP, you can take advantage of
IIS's own internal URL rewriting by using a web.config file similar to
the one listed below.

You can create the file yourself or use the GUI in the IIS7 Manager. You
can import .htaccess rules using the GUI/wizard.

This functionality depends on the presence of the **IIS URL Rewrite
Module**, which does not come with Windows. It is a free download and a
Microsoft product.

### GUI

If the IIS URL Rewrite module is installed, your website manager will
have a tool for "URL Rewrite", visible in the IIS Manager's view of your
site's configurable IIS modules. The interface is largely
self-explanatory. Regular expressions, wildcards or exact matches are
all supported.

In the Joomla config turn on both the SEF and Apache mod_rewrite, next
create a rule under IIS URL Rewrite:

Pattern field: **^(\[^/\]+)/?\$**

Ignore case **ON**

Action type: **Rewrite**

Rewrite URL: **index.php/**

### web.config

This has been tested on Joomla 1.5 with IIS 7 on Windows Server 2008
with no problems so far. For more information on converting .htaccess to
web.config, check out <a
href="http://learn.iis.net/page.aspx/557/translate-htaccess-content-to-iis-webconfig/"
class="external free" target="_blank"
rel="nofollow noreferrer noopener">http://learn.iis.net/page.aspx/557/translate-htaccess-content-to-iis-webconfig/</a>


        
            
                
                    
                    
                        
                        
                            
                            
                            
                            
                            
                        
                        
                    
                    
                        
                        
                            
                        
                        
                    
                    
                        
                        
                            
                            
                            
                        
                        
                    
                
            
            
                
                    
                
            
        
