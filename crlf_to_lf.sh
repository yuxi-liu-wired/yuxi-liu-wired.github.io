#!/bin/bash

# Set global Git configuration for line endings
git config --global core.eol lf
git config --global core.autocrlf input

# Create or update .gitattributes file
echo "* text=auto eol=lf" > .gitattributes

# Recursively replace CRLF with LF in all files, excluding the .git directory
find . -type f ! -path '*/.git/*' -exec sed -i 's/\r$//' {} +

