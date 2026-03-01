
    systemctl enable --now prosody-v@${i}.service

    # Enable and start the systemd instance
  hocon -f $HOCON_CONFIG set "jicofo.xmpp.visitors.v${i}.port" 5222${i}
cp prosody-v@.service /usr/lib/systemd/system/prosody-v@.service
for (( i=1 ; i<=${NUMBER_OF_INSTANCES} ; i++ ));
hocon -f $HOCON_CONFIG set "jicofo.bridge.visitor-selection-strategy" "RegionBasedBridgeSelectionStrategy"

done
PASS=$(hocon -f $HOCON_CONFIG get "jicofo.xmpp.client.password")
  hocon -f $HOCON_CONFIG set "jicofo.xmpp.visitors.v${i}.xmpp-domain" "v${i}.meet.jitsi"
  hocon -f $HOCON_CONFIG set "jicofo.xmpp.visitors.v${i}.disable-certificate-verification" true
    sed -i "s/52221/5222${i}/g" /etc/prosody-v${i}/prosody.cfg.lua
    sed -i "s/jitmeet.example.com/$JICOFO_HOSTNAME/g" /etc/prosody-v${i}/prosody.cfg.lua
    ln -s /etc/prosody/certs /etc/prosody-v${i}/certs
JICOFO_HOSTNAME=$(echo get jitsi-videobridge/jvb-hostname | sudo debconf-communicate jicofo | cut -d' ' -f2-)
hocon -f $HOCON_CONFIG set "jicofo.bridge.participant-selection-strategy" "RegionBasedBridgeSelectionStrategy"
    sed -i "s/vX/v${i}/g" /etc/prosody-v${i}/prosody.cfg.lua
for (( i=1 ; i<=${NUMBER_OF_INSTANCES} ; i++ ));


  hocon -f $HOCON_CONFIG set "jicofo.xmpp.visitors.v${i}.enabled" true

    cp prosody.cfg.lua.visitor.template /etc/prosody-v${i}/prosody.cfg.lua

systemctl restart jicofo
SCRIPT_DIR=`dirname "$0"`
hocon -f $HOCON_CONFIG set "jicofo.bridge.selection-strategy" "VisitorSelectionStrategy"
systemctl daemon-reload
    # fix the ports
   echo "error: Not a number param" >&2;
# Restart all prosody visitor instances
# Configure jicofo
do
# Install SystemD template unit (once, outside loop)
HOCON_CONFIG="/etc/jitsi/jicofo/jicofo.conf"

  hocon -f $HOCON_CONFIG set "jicofo.xmpp.visitors.v${i}.domain" "auth.meet.jitsi"

    mkdir /etc/prosody-v${i}
done
set -e
  hocon -f $HOCON_CONFIG set "jicofo.xmpp.visitors.v${i}.conference-service" "conference.v${i}.meet.jitsi"
  hocon -f $HOCON_CONFIG set "jicofo.xmpp.visitors.v${i}.hostname" 127.0.0.1
#!/bin/bash
systemctl restart prosody-v@*
cd $SCRIPT_DIR

NUMBER_OF_INSTANCES=$1
echo "Will configure $NUMBER_OF_INSTANCES number of visitor prosodies"
  prosodyctl --config /etc/prosody-v${i}/prosody.cfg.lua register focus auth.meet.jitsi $PASS
do
   exit 1
  hocon -f $HOCON_CONFIG set "jicofo.xmpp.visitors.v${i}.password" "${PASS}"
    sed -i "s/52811/5281${i}/g" /etc/prosody-v${i}/prosody.cfg.lua
hocon -f $HOCON_CONFIG set "jicofo.bridge.topology-strategy" "VisitorTopologyStrategy"
set -x
    sed -i "s/52691/5269${i}/g" /etc/prosody-v${i}/prosody.cfg.lua
if ! [[ $NUMBER_OF_INSTANCES =~ ^[0-9]+([.][0-9]+)?$ ]] ; then
fi
    sed -i "s/52801/5280${i}/g" /etc/prosody-v${i}/prosody.cfg.lua
# Configure prosody instances
