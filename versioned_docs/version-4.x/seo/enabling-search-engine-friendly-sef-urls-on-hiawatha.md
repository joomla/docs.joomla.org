<!-- Filename: Enabling_Search_Engine_Friendly_(SEF)_URLs_on_Hiawatha / Display title: Enabling Search Engine Friendly (SEF) URLs on Hiawatha -->

Use the following UrlToolkit rule to enable clean URLs on the Hiawatha
webserver:

    UrlToolkit {
        ToolkitID = joomla
        Match base64_encode.*\(.*\) DenyAccess
        Match (<|%3C).*script.*(>|%3E) DenyAccess
        Match GLOBALS(=|\[|\%[0-9A-Z]{0,2}) DenyAccess
        Match _REQUEST(=|\[|\%[0-9A-Z]{0,2}) DenyAccess
        RequestURI exists Return
        Match /index.php Return
        Match ^/component/ Skip 2
        Match ^(/|\.php|\.html|\.htm|\.feed|\.pdf|\.raw|/[^.]*)$ Skip 1
        Skip 1
        Match .* Rewrite /index.php
    }

Enable an UrlToolkit rule for a virtual host via the UseToolkit setting:

    VirtualHost {
        ...
        UseToolkit = joomla
    }
