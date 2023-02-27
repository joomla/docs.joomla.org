#!/bin/bash

# This will copy the files to translate after we run - npm run docusaurus write-translations - to
# the desire folders structure we want to upload to crowdin

# to-do
# Check if folders exist. If yes, delete it for create it again.
# After up the folders to crowdin, this folders are not longer neccessary

# we need create each folder in the root for get at crowdin the structure we want
# if we create a parent folder for the 3 folders, then the structure will be the same at crowdin
user_documentation="user_documentation"
help_pages_documentation="help_pages_documentation"
website="website_elements"

echo "Copy all versions content from /versioned_docs/ to user_documentation/"
mkdir $user_documentation
cp -rv versioned_docs/* $user_documentation/

echo "Copy all versions content from /help_versioned_docs/ to help-page/"
mkdir $help_pages_documentation
cp -rv help_versioned_docs/* $help_pages_documentation/

echo "Create the website folder and copy the .json files"
mkdir -p $website/$user_documentation/
mkdir -p $website/$help_pages_documentation/
mkdir -p $website/theme/
cp -rv i18n/en/docusaurus-plugin-content-docs/* $website/$user_documentation/
cp -rv i18n/en/docusaurus-plugin-content-docs-help/* $website/$help_pages_documentation/
cp -rv i18n/en/docusaurus-theme-classic/* $website/theme/
cp -rv i18n/en/code.json $website/
