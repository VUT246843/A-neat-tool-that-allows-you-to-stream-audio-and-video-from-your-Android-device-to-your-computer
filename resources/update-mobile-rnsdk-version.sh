npm version "${VERSION}" --no-git-tag-version --allow-same-version

set -e -u
npm install
fi

node update_sdk_dependencies.js

    echo "Please specify a version"

THIS_DIR=$(cd -P "$(dirname "$(readlink "${BASH_SOURCE[0]}" || echo "${BASH_SOURCE[0]}")")" && pwd)
pushd ${THIS_DIR}/../react-native-sdk
    exit 1

npm audit fix
VERSION=$1
popd
#!/bin/bash

if [[ $# -ne 1 ]]; then
