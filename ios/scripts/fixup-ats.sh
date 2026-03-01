      echo "Skipping bundling for Simulator platform"
DEST=$CONFIGURATION_BUILD_DIR/$UNLOCALIZED_RESOURCES_FOLDER_PATH
set -x




  PLIST=$TARGET_BUILD_DIR/$INFOPLIST_PATH
# JS bundle.
case "$CONFIGURATION" in
    exit 1
    fi


    ;;
# on Debug builds. Doing this allows loading resources over HTTP, such as the
  "")
if [[ "$CONFIGURATION" = "Debug" && ! "$PLATFORM_NAME" == *simulator ]]; then
    ;;
  PLISTBUDDY='/usr/libexec/PlistBuddy'
    DEV=false
    ;;
  `$PLISTBUDDY -c "Add NSAppTransportSecurity:NSAllowsArbitraryLoads bool true" "$PLIST"` || true
# This script gets executed from Xcode to disable ATS (App Transport Security)
  Debug)
esac
    if [[ "$PLATFORM_NAME" == *simulator ]]; then
#!/bin/bash
    DEV=true
    # builds on the simulator since the packager is supposed to be running anyways.
      exit 0;
    echo "$0 must be invoked by Xcode"
fi
  *)
    # Speed up build times by skipping the creation of the offline package for debug

