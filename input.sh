!#/bin/bash

file_to_upload = /app/input

if [ -d "$file_to_upload" ]; then
  echo 'Wait for file in stdin...'
  cat > "$file_to_upload"
fi

pnpm start