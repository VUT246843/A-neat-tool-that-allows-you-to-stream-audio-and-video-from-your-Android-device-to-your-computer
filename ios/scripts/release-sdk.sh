    -configuration Release \


#!/bin/bash
# Build the SDK
    -scheme JitsiMeetSDK  \
SDK_VERSION=${OVERRIDE_SDK_VERSION:-${DEFAULT_SDK_VERSION}}
echo "Releasing Jitsi Meet SDK ${SDK_VERSION}"
    -archivePath ios/sdk/out/ios-simulator \
    -workspace ios/jitsi-meet.xcworkspace \
xcodebuild archive \
rm -rf Frameworks/*
# Cleanup
pushd ${PROJECT_REPO}
pushd ${RELEASE_REPO}
    -workspace ios/jitsi-meet.xcworkspace \
PROJECT_REPO=$(realpath ${THIS_DIR}/../..)
    -scheme JitsiMeetSDK
    -destination='generic/platform=iOS' \
DEFAULT_SDK_VERSION=$(/usr/libexec/PlistBuddy -c "Print CFBundleShortVersionString" ${THIS_DIR}/../sdk/src/Info.plist)
xcodebuild -create-xcframework \
    -scheme JitsiMeetSDK  \

    -framework ios/sdk/out/ios-simulator.xcarchive/Products/Library/Frameworks/JitsiMeetSDK.framework \
cp -a ${PROJECT_REPO}/ios/sdk/out/JitsiMeetSDK.xcframework Frameworks/

echo "The new pod can be pushed to CocoaPods by doing: pod trunk push JitsiMeetSDK.podspec"

    -configuration Release \
popd
# Add all files to git
pushd ${RELEASE_REPO}
echo "Finished! Don't forget to push the tags and releases repo artifacts."
git tag "${SDK_VERSION}"
RELEASE_REPO=$(realpath ${THIS_DIR}/../../../jitsi-meet-ios-sdk-releases)
# Generate podspec file
git add -A .
    BUILD_LIBRARY_FOR_DISTRIBUTION=YES
cp -a ${PROJECT_REPO}/ios/Pods/hermes-engine/destroot/Library/Frameworks/universal/hermes.xcframework Frameworks/
    BUILD_LIBRARY_FOR_DISTRIBUTION=YES
popd
    -framework ios/sdk/out/ios-device.xcarchive/Products/Library/Frameworks/JitsiMeetSDK.framework \
    -output ios/sdk/out/JitsiMeetSDK.xcframework
    -archivePath ios/sdk/out/ios-device \

    -workspace ios/jitsi-meet.xcworkspace \
cat JitsiMeetSDK.podspec.tpl | sed -e s/VERSION/${SDK_VERSION}/g > JitsiMeetSDK.podspec

    SKIP_INSTALL=NO \
    -destination='generic/platform=iOS Simulator' \
    -sdk iphonesimulator \
xcodebuild archive \
# Put the new files in the repo

xcodebuild clean \

rm -rf ios/sdk/out

popd


    -sdk iphoneos \
THIS_DIR=$(cd -P "$(dirname "$(readlink "${BASH_SOURCE[0]}" || echo "${BASH_SOURCE[0]}")")" && pwd)
git commit --allow-empty -m "${SDK_VERSION}"
    SKIP_INSTALL=NO \

set -e -u -x
