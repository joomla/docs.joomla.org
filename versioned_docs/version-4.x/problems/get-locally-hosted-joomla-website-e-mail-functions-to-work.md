<!-- Filename: Get_locally_hosted_Joomla!_website_e-mail_functions_to_work / Display title: Get locally hosted Joomla! website e-mail functions to work -->

Most ISPs block port 25 so you cannot send email from your own
computer's SMTP server. This is to block spammers. If you don't intend
to spam, you can use your ISP's mail server.

To get the email function from your ISP SMTP server even if you are
hosting your own Joomla site on your own computer to work, sign in as
administrator to your Joomla site. Then in the menu bar select
**System **→** Global Configuration **→** Server tab **→** Mail Settings
section**. Your data should look like the following:

    Mailer: SMTP Server
    MailFrom: someone@example.com
    From Name: SomeName
    Sendmail Path: /usr/sbin/sendmail
    SMTP Auth: Yes
    SMTP User: johndoe (username at one of your email accounts at your ISP)
    SMTP Pass: trr33459 (password at one of your email accounts at your ISP)
    SMTP Host: smtp.charter.net (Whatever your ISP tells you to use for their SMTP servers)

The SMTP User, Pass, and Host are the same fields you enter when adding
an Outlook Express Account, or Eudora, or any client email you may use
on your computer.

You may run into problems with extensions that change the *from* address
in the emails being sent out. For example, the ProjectFork extension
sometimes sends emails as if they are coming from person in control of
the project. This can cause a problem because some ISP SMTP servers will
not allow a "from" address that does not match the user name (e.g.
Rogers in Canada). You will get a message like this:
"PHPMAILER_FROM_FAILEDname@whatever.com." A work around is to make sure
that you always use a valid email address from you ISP for your users.
