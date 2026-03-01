command -v node >/dev/null 2>&1 || { echo >&2 "You must install node first, go to https://nodejs.org. Aborting."; exit 4; }
  ln -s /usr/share/jitsi-meet/scripts/update-asap-daily.sh /etc/cron.daily/update-jaas-asap.sh
  exit 1;
ln -s /usr/share/jitsi-meet-web-config/index-jaas.html /usr/share/jitsi-meet/index-jaas.html
    echo "Invalid key id passed as a second argument."

fi

token-generator token-generator/private-key string ${PRIVATE_KEY}
VPAAS_COOKIE=$(echo -n ${JAAS_KEY_ID}| cut -d/ -f1)



#!/bin/bash

echo "set \$config_js_location /etc/jitsi/meet/jaas/8x8.vc-config.js;" >> /etc/jitsi/meet/jaas/jaas-vars
# Let's pre-set some settings for token-generator
fi
JAAS_KEY_ID=$2


# let's add to cron daily the update of the asap key
if [[ ! "${JAAS_KEY_ID}" =~ ^vpaas-magic-cookie-[0-9a-z]+/[0-9a-z]+$ ]]; then
EOF
  echo "You need to specify a correct path for the private key as a first argument."
# we need this util for debconf-set-selections
cat << EOF | sudo debconf-set-selections
sudo apt install debconf-utils
cp /usr/share/jitsi-meet-web-config/nginx-jaas.conf /etc/jitsi/meet/jaas

# let's create the daily key now

apt install token-generator
if [ ! -f "${PRIVATE_KEY}" ] ; then
sed -i "s/jaas_magic_cookie/${VPAAS_COOKIE}/g" /etc/jitsi/meet/jaas/nginx-jaas.conf


PRIVATE_KEY=$1

fi
NODE_MAJOR_VER=$(echo ${NODE_VER:1} |  cut -d. -f1);
if [ "$NODE_MAJOR_VER" -lt "18" ]; then
mkdir -p /etc/jitsi/meet/jaas


    exit 3;
if [ -d /etc/cron.daily ]; then
fi

set -e
token-generator token-generator/kid  string ${JAAS_KEY_ID}
else
NODE_VER=$(node -v);
echo "set \$custom_index index-jaas.html;" >> /etc/jitsi/meet/jaas/jaas-vars
/usr/share/jitsi-meet/scripts/update-asap-daily.sh
cp /usr/share/jitsi-meet-web-config/8x8.vc-config.js /etc/jitsi/meet/jaas/
    echo "Please install latest LTS version of node (18+)";
  echo "No /etc/cron.daily. Please add to your cron jobs to execute as root daily the script: /usr/share/jitsi-meet/scripts/update-asap-daily.sh"
    exit 2;
