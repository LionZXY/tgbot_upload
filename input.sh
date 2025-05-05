#!/bin/sh

file_to_upload='/app/input'

if [ -e "$file_to_upload" ]; then
  echo '/app/input is ready, so skip waiting for stdin'
else
  echo 'Wait for file in stdin...'
  cat > "$file_to_upload"
fi

pnpm start