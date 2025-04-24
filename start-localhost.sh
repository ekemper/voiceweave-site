#!/bin/bash
# Build and start the application on localhost (port 3000)
npm run build

# Build the localhost server entry point that uses 127.0.0.1 and port 3000
npx esbuild server/localhost.ts --platform=node --packages=external --bundle --format=esm --outfile=dist/localhost.js

# Run the localhost server
NODE_ENV=production node dist/localhost.js