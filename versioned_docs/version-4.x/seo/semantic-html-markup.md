<!-- Filename: Semantic_HTML_Markup / Display title: Semantic HTML Markup -->

## Semantic HTML

### What is Semantic HTML?

Semantic HTML is a way of using HTML coding to create or enhance the
structure of a page. In other words, it's a way of using HTML markup -
classes, divs, tags and so forth - to complement the actual words or
resources on a page. This helps 'bots' and visitors using screen readers
to understand the structure and context of the information on the page,
along with its importance, relevance, and how it is related to other
resources.

### How to use Semantic HTML Markup

It is important to have an understanding of Semantic HTML if you are
developing websites or writing content for them, as you will need to use
the structural markup regularly.

An example of misuse of Semantic Markup can be found when an article has
been written using normal text, but at some point in the text the writer
wants to emphasise a particular phrase. They like the styling of the H1
tag, so they apply H1 to this phrase to 'make it look pretty'.
Unfortunately, this is confusing to a search engine 'bot' and to users
of screen readers, because they are told that this is the main heading
of the page - rather than emphasised or important text.

Semantic HTML markup should only ever be used to add structure to a
page - not to change the way it looks (this is done using Cascading
Style Sheets (CSS) or in-line styling)

### An example of Semantic HTML Markup

For example, lets say we have an article:

    Using headings
    This is an article about the importance of headings

    Why use headings?
    It is important to use headings so that search engine bots can tell what is an important part of your article

    Types of headings
    You can use set types of headings, but they should be ordered, and structured, within your page.  H1 should be your page title, with H2 being used for sub-headings of the page.  Any headings within your sub-headings should cascade using H3, H4, and H5 as appropriate.

    Is it hard to implement headings?
    It is really easy to implement headings, you just use the appropriate HTML code

    Using headings on dynamic pages
    On dynamic pages, simply wrap your main heading within a H1 (for example, the title of a category listing page would be H1) then wrap all subsequent headings in H2.

Here, a search engine 'bot' could clearly see the structure - h1, h2,
h3 - but if we were to simply make these titles bold, underlined and
larger font, it would be much more difficult to identify the structure.
It is also possible to identify that the word 'important' is an
emphasised word, something that is important within the page.

Semantic HTML is also

- Easier to read (in the code)
- Easier for accessibility purposes - screen readers function in a
  similar way to search engine bots to identify important headings
- Potentially better for search engine optimisation

In the example provided below of this page in Google search results, you
can see how the heading tags are being used by Google to identify
smaller links within the main page which may be of interest to the
person searching for a term (displayed in small blue hyperlinked text
beneath the description) - another reason to ensure you structure your
content well!

<img src="https://docs.joomla.org/images/5/58/SEF-Titles.png"
decoding="async" data-file-width="532" data-file-height="105"
width="532" height="105" alt="SEF-Titles.png" />

### Microdata

Microdata is a more advanced form of Semantic HTML Markup which allows
you to give even more contextual information about the content and
structure of your website - for more information see :
[Microdata](https://docs.joomla.org/Microdata "Special:MyLanguage/Microdata").

<a href="http://en.wikipedia.org/wiki/Semantic_HTML"
class="external text" target="_blank"
rel="nofollow noreferrer noopener">Wikipedia article on Semantic
HTML</a>
