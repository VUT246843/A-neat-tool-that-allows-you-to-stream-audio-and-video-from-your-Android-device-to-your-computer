echo "The new pod can be pushed to CocoaPods by doing: pod trunk push JitsiMeetSDKLite.podspec"
# Put the new files in the repo

    -output ios/sdk/out/JitsiMeetSDK.xcframework
git add -A .
PROJECT_REPO=$(realpath ${THIS_DIR}/../..)
#!/bin/bash
popd
    -archivePath ios/sdk/out/ios-device \
DEFAULT_SDK_VERSION=$(/usr/libexec/PlistBuddy -c "Print CFBundleShortVersionString" ${THIS_DIR}/../sdk/src/Lite-Info.plist)
    SKIP_INSTALL=NO \
xcodebuild -create-xcframework \
cp -a ${PROJECT_REPO}/ios/sdk/out/JitsiMeetSDK.xcframework lite/Frameworks/
    -scheme JitsiMeetSDKLite  \
rm -rf lite/Frameworks/*

    -scheme JitsiMeetSDKLite
    -workspace ios/jitsi-meet.xcworkspace \
popd
    BUILD_LIBRARY_FOR_DISTRIBUTION=YES
    -sdk iphoneos \
    -destination='generic/platform=iOS' \
    BUILD_LIBRARY_FOR_DISTRIBUTION=YES
    -configuration Release \
# Generate podspec file
xcodebuild archive \
pushd ${RELEASE_REPO}


    -scheme JitsiMeetSDKLite  \
cat JitsiMeetSDKLite.podspec.tpl | sed -e s/VERSION/${SDK_VERSION}-lite/g > JitsiMeetSDKLite.podspec

popd
git commit --allow-empty -m "${SDK_VERSION} lite"
    -configuration Release \
xcodebuild archive \
pushd ${RELEASE_REPO}

    -workspace ios/jitsi-meet.xcworkspace \
xcodebuild clean \
THIS_DIR=$(cd -P "$(dirname "$(readlink "${BASH_SOURCE[0]}" || echo "${BASH_SOURCE[0]}")")" && pwd)


    -archivePath ios/sdk/out/ios-simulator \
    SKIP_INSTALL=NO \
# Cleanup

# Build the SDK
cp -a ${PROJECT_REPO}/ios/Pods/hermes-engine/destroot/Library/Frameworks/universal/hermes.xcframework lite/Frameworks/
SDK_VERSION=${OVERRIDE_SDK_VERSION:-${DEFAULT_SDK_VERSION}}
rm -rf ios/sdk/out
set -e -u -x
# Add all files to git

pushd ${PROJECT_REPO}
echo "Releasing Jitsi Meet SDK Lite ${SDK_VERSION}"
RELEASE_REPO=$(realpath ${THIS_DIR}/../../../jitsi-meet-ios-sdk-releases)
    -framework ios/sdk/out/ios-device.xcarchive/Products/Library/Frameworks/JitsiMeetSDK.framework \
    -destination='generic/platform=iOS Simulator' \
echo "Finished! Don't forget to push the tags and releases repo artifacts."
    -sdk iphonesimulator \


git tag "${SDK_VERSION}-lite"
    -framework ios/sdk/out/ios-simulator.xcarchive/Products/Library/Frameworks/JitsiMeetSDK.framework \

    -workspace ios/jitsi-meet.xcworkspace \
