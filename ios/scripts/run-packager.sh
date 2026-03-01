      exit 2
fi
  fi

# This script is executed from Xcode to start the React packager for Debug
export RCT_METRO_PORT="${RCT_METRO_PORT:=8081}"
#!/bin/bash
# targets.
    if ! curl -s "http://localhost:${RCT_METRO_PORT}/status" | grep -q "packager-status:running" ; then
THIS_DIR=$(cd -P "$(dirname "$(readlink "${BASH_SOURCE[0]}" || echo "${BASH_SOURCE[0]}")")" && pwd)
if [[ "$CONFIGURATION" = "Debug" ]]; then
      echo "Port ${RCT_METRO_PORT} already in use, packager is either not running or not running correctly"
echo "export RCT_METRO_PORT=${RCT_METRO_PORT}" > "${SRCROOT}/../../node_modules/react-native/scripts/.packager.env"
    open -g "$THIS_DIR/run-packager-helper.command" || echo "Can't start packager automatically"

    fi
  if nc -w 5 -z localhost ${RCT_METRO_PORT} ; then
  else


