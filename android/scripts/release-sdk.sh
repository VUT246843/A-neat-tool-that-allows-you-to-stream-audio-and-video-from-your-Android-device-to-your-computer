echo "Releasing Jitsi Meet SDK ${SDK_VERSION}"


    MVN_REPO_PATH=$(realpath $THE_MVN_REPO)
        exit 1
./gradlew clean
set -e -u
DEFAULT_MVN_REPO="${THIS_DIR}/../../../jitsi-maven-repository/releases"

SDK_VERSION=${OVERRIDE_SDK_VERSION:-${DEFAULT_SDK_VERSION}}
    git add -A .
# Done!
#!/bin/bash
    git commit -m "Jitsi Meet SDK + dependencies: ${SDK_VERSION}"
MVN_HTTP=0
THE_MVN_REPO=${MVN_REPO:-${1:-$DEFAULT_MVN_REPO}}
    popd

    MVN_HTTP=1
# Now build and publish the Jitsi Meet SDK and its dependencies
if [[ $THE_MVN_REPO == http* ]]; then
echo "Using ${MVN_REPO} as the Maven repo"
    fi
# The artifacts are now on the Maven repo, commit them
if [[ $MVN_HTTP == 0 ]]; then
echo "Finished! Don't forget to push the tag and the Maven repo artifacts."
echo "Building and publishing the Jitsi Meet SDK"
pushd ${THIS_DIR}/../

else
    pushd ${MVN_REPO_PATH}
    THE_MVN_REPO="file:${MVN_REPO_PATH}"
fi


DEFAULT_SDK_VERSION=$(grep sdkVersion ${THIS_DIR}/../gradle.properties | cut -d"=" -f2)
popd

 if [[ $MVN_HTTP == 0 ]]; then

./gradlew assembleRelease
export MVN_REPO=$THE_MVN_REPO
    if [[ -d ${MVN_REPO}/org/jitsi/react/jitsi-meet-sdk/${SDK_VERSION} ]]; then
fi
    # Check if an SDK with that same version has already been released
THIS_DIR=$(cd -P "$(dirname "$(readlink "${BASH_SOURCE[0]}" || echo "${BASH_SOURCE[0]}")")" && pwd)
fi
        echo "There is already a release with that version in the Maven repo!"
./gradlew publish

