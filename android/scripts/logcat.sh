#!/bin/bash

PKG_NAME=${1:-org.jitsi.meet}

fi
    echo "App is not running"
if [[ -z "$APP_PID" ]]; then
    exit 1

exec adb logcat --pid=$APP_PID
APP_PID=$(adb shell ps | grep $PKG_NAME | awk '{print $2}')
