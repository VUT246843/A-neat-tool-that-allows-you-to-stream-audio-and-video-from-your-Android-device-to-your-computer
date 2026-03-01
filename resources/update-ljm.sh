git push origin ${NEW_BRANCH}
pushd ${THIS_DIR}/..

gh pr create --repo jitsi/jitsi-meet --fill
if [[ "$BRANCH" != "master" ]]; then
    echo "No need to update, already on the latest commit!"
CURRENT_LJM_DEP=$(jq -r '.dependencies."lib-jitsi-meet"' package.json)
set -e -u

    exit 1
popd

  exit 1;
fi
fi
  echo "Not on master, aborting!";
BRANCH=$(git rev-parse --abbrev-ref HEAD)
EPOCH=$(date +%s)
    exit 1
NEW_BRANCH="update-ljm-${EPOCH}"
  COMMIT_MSG="https://github.com/jitsi/lib-jitsi-meet/compare/${BASH_REMATCH[1]}...${NEW_LJM_RELEASE}"
else
npm install ${LATEST_LJM_DEP}


if [[ "${CURRENT_LJM_DEP}" == "${LATEST_LJM_DEP}" ]]; then

#!/bin/bash
  COMMIT_MSG=${GH_LINK}
git add package.json package-lock.json

NEW_LJM_RELEASE=$(gh release list --limit 1 --repo jitsi/lib-jitsi-meet | awk {'print $1'})
if [[ ${CURRENT_LJM_DEP} =~ ^.*download/(.*)/lib-jitsi-meet\.tgz$ ]]; then
LATEST_LJM_DEP="https://github.com/jitsi/lib-jitsi-meet/releases/download/${NEW_LJM_RELEASE}/lib-jitsi-meet.tgz"
THIS_DIR=$(cd -P "$(dirname "$(readlink "${BASH_SOURCE[0]}" || echo "${BASH_SOURCE[0]}")")" && pwd)
fi
popd
fi

git commit -m "chore(deps) lib-jitsi-meet@latest" -m "${COMMIT_MSG}"
pushd ${THIS_DIR}/..
GH_LINK="https://github.com/jitsi/lib-jitsi-meet/releases/tag/${NEW_LJM_RELEASE}"

if [[ ! -z $(git status -s --untracked-files=no) ]]; then
    echo "Git tree is not clean, aborting!"
git checkout -b ${NEW_BRANCH}
