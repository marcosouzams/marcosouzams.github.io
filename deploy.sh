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

# Create .gitignore in out directory to keep necessary files
echo "node_modules" > out/.gitignore

echo "Build completed! Files are in the 'out' directory."
echo ""
echo "Now follow these steps:"
echo "1. Go to your GitHub repository settings"
echo "2. Navigate to Pages section"
echo "3. Under 'Build and deployment', select 'Deploy from a branch'"
echo "4. Select 'main' branch and '/out' folder"
echo "5. Save the settings"
echo ""
echo "Then commit and push your changes:"
echo "  git add ."
echo "  git commit -m 'Setup GitHub Pages deployment'"
echo "  git push origin main"
