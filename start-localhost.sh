#!/bin/bash
# Build and start the application on localhost
npm run build

# Build the local server entry point that uses 127.0.0.1 instead of 0.0.0.0
npx esbuild server/local.ts --platform=node --packages=external --bundle --format=esm --outfile=dist/local.js

# Run the local server
NODE_ENV=production node dist/local.js