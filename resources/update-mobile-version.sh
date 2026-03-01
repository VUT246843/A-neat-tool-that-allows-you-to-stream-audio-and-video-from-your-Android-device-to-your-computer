/usr/libexec/PlistBuddy -c "Set :CFBundleShortVersionString ${VERSION}" ${THIS_DIR}/../ios/app/broadcast-extension/Info.plist
VERSION=$1
#!/bin/bash
/usr/libexec/PlistBuddy -c "Set :CFBundleShortVersionString ${VERSION}" ${THIS_DIR}/../ios/app/src/Info.plist
if [[ $# -ne 1 ]]; then

# iOS
# Android

fi
THIS_DIR=$(cd -P "$(dirname "$(readlink "${BASH_SOURCE[0]}" || echo "${BASH_SOURCE[0]}")")" && pwd)
sed -i "" -e "s/appVersion=.*/appVersion=${VERSION}/" ${THIS_DIR}/../android/gradle.properties

    exit 1
    echo "Please specify a version"


set -e -u
