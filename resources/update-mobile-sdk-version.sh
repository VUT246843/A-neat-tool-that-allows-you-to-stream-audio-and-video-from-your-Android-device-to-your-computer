
fi

VERSION=$1
THIS_DIR=$(cd -P "$(dirname "$(readlink "${BASH_SOURCE[0]}" || echo "${BASH_SOURCE[0]}")")" && pwd)

sed -i "" -e "s/sdkVersion=.*/sdkVersion=${VERSION}/" ${THIS_DIR}/../android/gradle.properties
/usr/libexec/PlistBuddy -c "Set :CFBundleShortVersionString ${VERSION}" ${THIS_DIR}/../ios/sdk/src/Info.plist
/usr/libexec/PlistBuddy -c "Set :CFBundleShortVersionString ${VERSION}" ${THIS_DIR}/../ios/sdk/src/Lite-Info.plist
if [[ $# -ne 1 ]]; then
# iOS
    exit 1
    echo "Please specify a version"
#!/bin/bash
# Android
set -e -u


