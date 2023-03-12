<!-- Filename: J4.x:Read_More_Links / Display title: Read More Links -->

## Blog and Featured Article Layouts

These layouts usually show the article title and a fragment of text as a
taster for the full article. The user can choose to see the complete
article either by selection of a title link or by selection of a Read
More button. Each of these items can be disabled or enabled in the
Articles: Options form.

## Articles: Options

To set appropriate Article Options:

- Select **Content **→** Articles **→** ** from the Administrator menu.
- Select the **Options** button from the Toolbar.
- Set **Linked Titles** to **Yes** to use Titles as links. Or set to
  **No** to rely on the Read More button only
- Set **"Read More" Link** to **Show** to use a Read More button. Or set
  **Hide** to rely on the Title link only.
- Set **Read More with Title** to **Show**. Or set **Hide** to show Read
  More without a title.
- Set **Read More Limit (characters)** to a suitable number (the default
  is 100). This is the number of characters appearing in the Read More
  button after the words `Read More:`.
- Save and check the result in your site view.

You might wish to experiment with these settings to find a suitable
combination.

## Articles: Edit

For individual articles you can change the Read More: text. For example,
you could shorten it to `Read On:` or `More:`:

- Select **Content **→** Articles **→** ** from the Administrator menu.
- Select the article you wish to edit.
- Select the **Options** tab.
- Scroll down to the **Read More Text** field and enter your new
  wording.
- Save and check the result in your site view.

## Language Override

If you wish to change the default wording of the Read more button,
proceed as follows:

- Select **System **→** Manage panel **→** Language Overrides**.
- Select **English (United Kingdom) - Site** for the
  `Select Language and Client` list.
- Select the **New** button.
- In the Languages: Edit Override form enter **Read more** in Search
  Text box and Value in the Search For box.
- Select **Search**
- Oh dear! It turns out that **Read more** is used in many different
  places with slight differences.
- Select the item that says JGLOBAL_READ_MORE_TITLE with Read more: %s
  as the value. It will be copied to the Create a New Override part of
  the form.
- Change the wording of the text but **make sure to keep the %s part**
  as that is the Title placeholder.
- Save and check your site view. All of the Read more buttons should
  have the override wording **except** any articles where the wording
  was set in the Article itself.

Some of the other places where Read More is used occur in modules and
news feeds. You may wish to change some of them or all of them!
