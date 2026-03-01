
fi
THIS_DIR=$(cd -P "$(dirname "$(readlink "${BASH_SOURCE[0]}" || echo "${BASH_SOURCE[0]}")")" && pwd)
if nc -w 5 -z localhost ${RCT_METRO_PORT} ; then

        xdg-open "${CMD}" || echo "Can't start packager automatically"
        open -g "${CMD}" || echo "Can't start packager automatically"
  if ! curl -s "http://localhost:${RCT_METRO_PORT}/status" | grep -q "packager-status:running" ; then
# targets.
    else
    if [[ `uname` == "Darwin"  ]]; then
echo "export RCT_METRO_PORT=${RCT_METRO_PORT}" > "${THIS_DIR}/../../node_modules/react-native/scripts/.packager.env"
    exit 2
    CMD="$THIS_DIR/run-packager-helper.command"
    fi
  fi
# This script is executed bt Gradle to start the React packager for Debug
export RCT_METRO_PORT="${RCT_METRO_PORT:=8081}"
adb reverse tcp:$RCT_METRO_PORT tcp:$RCT_METRO_PORT
    echo "Port ${RCT_METRO_PORT} already in use, packager is either not running or not running correctly"
#!/bin/bash
else



