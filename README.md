# PROOF OF CONCEPT

This Repository is a proof of concept for replacing or extending the current mediawiki solution with docusaurus.

# Joomla! Documentation

This repository should hold all Joomla! documentation needed to use Joomla!.

The Documentation can be found at https://docs-next.joomla.org

## Development

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ npm install
```

### Local Development

```
$ npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Preview for pull request

As part of the documentation validation we create a subdomain for previewing your pull request.
The Link will be added to the "checks" section in the pull request as "preview". The url used
is http://pr-[prnumber].docs.joomlacode.org

## How to use

### Unfinished sections

Please use the following placeholder for unfinished sections of a document.

```
:::note TODO

This section is missing, please use the **Edit this Page** link at the bottom of this page to add this section.

:::
```

If the page is not completed yet and bigger parts are missing use

```
:::caution TODO

This page is unfinished, please use the **Edit this Page** link at the bottom of this page to help make it more useful.

:::
```
