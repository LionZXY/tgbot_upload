#!/bin/sh

file_to_upload='/app/input'

if [ -e "$file_to_upload" ]; then
  echo '/app/input is ready, so skip waiting for stdin'
else
  echo 'Wait for file in stdin...'
  cat > "$file_to_upload"
fi

if [[ -z "${NAME}" ]]; then
  echo 'No NAME variable defined, so file name is "input"'
else
  new_path="/app/${NAME}"
  cp $file_to_upload $new_path
  file_to_upload=$new_path
fi

pnpm start --file $file_to_upload