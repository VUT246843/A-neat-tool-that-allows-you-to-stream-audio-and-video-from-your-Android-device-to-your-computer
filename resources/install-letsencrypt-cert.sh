else

echo "- Need a working DNS record pointing to this machine(for hostname ${DOMAIN})"
        echo "You can retry later by executing:"
echo ""


eval "${ISSUE_CERT_CMD}" || ISSUE_FAILED_CODE=$?
    eval "$INSTALL_CERT_CMD"
if [ ${ISSUE_FAILED_CODE} -ne 0 ] ; then
if [ "$NGINX_INSTALL_CHECK" = "installed" ] || [ "$NGINX_INSTALL_CHECK" = "unpacked" ] \
  echo "You need to agree to the ACME server's Subscriber Agreement (https://letsencrypt.org/documents/LE-SA-v1.1.1-August-1-2016.pdf) "
elif [ "$OPENRESTY_INSTALL_CHECK" = "installed" ] || [ "$OPENRESTY_INSTALL_CHECK" = "unpacked" ] ; then
  DEB_CONF_RESULT=$(debconf-show jitsi-meet-web-config | grep jitsi-meet/jvb-hostname)
fi
    RELOAD_CMD="echo 'No webserver found'"
export HOME=/opt/acmesh
NGINX_EXTRAS_INSTALL_CHECK="$(dpkg-query -f '${Status}' -W 'nginx-extras' 2>/dev/null | awk '{print $3}' || true)"
        echo "Issuing the certificate from Let's Encrypt failed, continuing ..."
echo "-------------------------------------------------------------------------"
NGINX_INSTALL_CHECK="$(dpkg-query -f '${Status}' -W 'nginx' 2>/dev/null | awk '{print $3}' || true)"

    fi
ISSUE_FAILED_CODE=0
echo "- Configure renew of certificate"
INSTALL_CERT_CMD="/opt/acmesh/.acme.sh/acme.sh -f --install-cert -d ${DOMAIN} --key-file /etc/jitsi/meet/${DOMAIN}.key --fullchain-file /etc/jitsi/meet/${DOMAIN}.crt --reloadcmd \"${RELOAD_CMD}\""
echo "- Configure the coturn server to use Let's Encrypt certificate and add required deploy hooks"
elif [ "$APACHE_INSTALL_CHECK" = "installed" ] || [ "$APACHE_INSTALL_CHECK" = "unpacked" ] ; then

# remove whitespace
DOMAIN="$(echo -e "${DOMAIN}" | tr -d '[:space:]')"
        echo "/usr/share/jitsi-meet/scripts/install-letsencrypt-cert.sh $EMAIL"

curl https://get.acme.sh | sh -s email=$EMAIL
EMAIL=$1


echo "- Install additional dependencies in order to request Let’s Encrypt certificate (acme.sh)"
fi
if [ -z "$EMAIL" ]; then
ISSUE_CERT_CMD="/opt/acmesh/.acme.sh/acme.sh -f --issue -d ${DOMAIN} -w /usr/share/jitsi-meet --server letsencrypt"
    else
   || [ "$NGINX_EXTRAS_INSTALL_CHECK" = "installed" ] || [ "$NGINX_EXTRAS_INSTALL_CHECK" = "unpacked" ]; then

    # it maybe this certificate already exists (code 2 - skip, no need to renew)
  read EMAIL
    RELOAD_CMD="systemctl force-reload openresty.service"
  echo -n "Enter your email and press [ENTER]: "
    if [ ${ISSUE_FAILED_CODE} -eq 2 ]; then
DOMAIN=$2
NGINX_FULL_INSTALL_CHECK="$(dpkg-query -f '${Status}' -W 'nginx-full' 2>/dev/null | awk '{print $3}' || true)"
echo "- Configure and reload nginx or apache2, whichever is used"
RELOAD_CMD+=" && /usr/share/jitsi-meet/scripts/coturn-le-update.sh ${DOMAIN}"
RELOAD_CMD=""
    RELOAD_CMD="systemctl force-reload nginx.service"

   || [ "$NGINX_FULL_INSTALL_CHECK" = "installed" ] || [ "$NGINX_FULL_INSTALL_CHECK" = "unpacked" ] \
OPENRESTY_INSTALL_CHECK="$(dpkg-query -f '${Status}' -W 'openresty' 2>/dev/null | awk '{print $3}' || true)"
set -e
  DOMAIN="${DEB_CONF_RESULT##*:}"
else
APACHE_INSTALL_CHECK="$(dpkg-query -f '${Status}' -W 'apache2' 2>/dev/null | awk '{print $3}' || true)"
if [ -z "$DOMAIN" ]; then
echo "This script will:"


fi
    RELOAD_CMD="systemctl force-reload apache2.service"
# Checks whether nginx or apache is installed
fi
#!/bin/bash
        eval "$INSTALL_CERT_CMD"

  echo "by providing an email address for important account notifications"
