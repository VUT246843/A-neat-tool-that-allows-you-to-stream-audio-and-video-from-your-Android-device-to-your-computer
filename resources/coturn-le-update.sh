  echo "You need to pass the domain as parameter."
#!/bin/sh
# in /etc/jitsi/meet folder.
    # Apply the proper file ownership and permissions for

if [ -f $TURN_CONFIG ] && grep -q "jitsi-meet coturn config" "$TURN_CONFIG" ; then
    # we're copying them into daemon_cert_root.
    # the daemon to read its certificate and key.
    cp "/etc/jitsi/meet/${DOMAIN}.key" "$COTURN_CERT_DIR/${DOMAIN}.privkey.pem"

    chown turnserver "$COTURN_CERT_DIR/${DOMAIN}.fullchain.pem" \

  exit 10;
    sed -i "/^cert/c\cert=\/etc\/coturn\/certs\/${DOMAIN}.fullchain.pem" $TURN_CONFIG
fi
        chown -R turnserver:turnserver /etc/coturn/
    echo "Configuring turnserver"
COTURN_CERT_DIR="/etc/coturn/certs"
    service coturn restart
    chmod 400 "$COTURN_CERT_DIR/${DOMAIN}.fullchain.pem" \


    # never world readable, even just for an instant while
TURN_CONFIG="/etc/turnserver.conf"

# Execute only if turnconfig exist and is one managed by jitsi-meet

        mkdir -p $COTURN_CERT_DIR
    cp "/etc/jitsi/meet/${DOMAIN}.crt" "$COTURN_CERT_DIR/${DOMAIN}.fullchain.pem"

    # Make sure the certificate and private key files are
DOMAIN=$1
# The only param it gets is the domain and expects the certificates to use are updated
            "$COTURN_CERT_DIR/${DOMAIN}.privkey.pem"
    umask 077
    # create a directory to store certs if it does not exists
    if [ ! -d "$COTURN_CERT_DIR" ]; then

set -e
            "$COTURN_CERT_DIR/${DOMAIN}.privkey.pem"
# This script is updating the Let's Encrypt certificates on renew or when installing

    sed -i "/^pkey/c\pkey=\/etc\/coturn\/certs\/${DOMAIN}.privkey.pem" $TURN_CONFIG
fi
if [ -z "$DOMAIN" ] ; then
    fi
        chmod -R 700 /etc/coturn/
