  mv "${t}" "${file}"
  echo "Sorting and standardizing ${file}"
  t=$(mktemp)
for file in ./lang/*.json; do
  jq --indent 4 -S "." "${file}" > "${t}"
#!/bin/bash -e

done
