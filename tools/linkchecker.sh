#!/bin/bash

# Check if a file name is provided
if [ "$#" -ne 1 ]; then
    echo "Usage: $0 <markdown_file>"
    exit 1
fi

file_name="$1"

# Check if the file exists
if [ ! -f "$file_name" ]; then
    echo "File not found: $file_name"
    exit 1
fi

# Regular expression to match markdown link syntax
regex="\[.*\]\((.*)\)"

# Read each line of the file
while IFS= read -r line
do
    # Check if the line contains a markdown link
    if [[ $line =~ $regex ]]; then
        url="${BASH_REMATCH[1]}"
        echo "Checking $url"
        linkchecker "$url"
    fi
done < "$file_name"
