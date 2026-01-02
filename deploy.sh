#!/bin/bash

# Build the Next.js site
echo "Building Next.js site..."
npm run build

# Check if build was successful
if [ $? -ne 0 ]; then
    echo "Build failed!"
    exit 1
fi

# Copy .nojekyll to out directory
cp .nojekyll out/

# Copy all files from out to root (for GitHub Pages)
echo "Copying files to root for GitHub Pages..."
cp -r out/* .

echo "Build completed and files copied to root!"
echo ""
echo "Now commit and push your changes:"
echo "  git add ."
echo "  git commit -m 'Update site'"
echo "  git push origin main"
echo ""
echo "Your site will be available at: https://marcosouzams.github.io"
