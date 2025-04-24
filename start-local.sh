#!/bin/bash
# Build and start the application locally for macOS
npm run build

# Build the local server entry point
npx esbuild server/local.ts --platform=node --packages=external --bundle --format=esm --outfile=dist/local.js

# Run the local server
NODE_ENV=production node dist/local.js