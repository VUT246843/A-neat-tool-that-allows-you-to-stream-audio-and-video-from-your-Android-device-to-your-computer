        echo ""
    echo -n "waiting..."
        echo ""

        echo ""
op_id=$(echo "${create_data}" | jq -r .operationId)
        echo "=================="
JITSI_INSTALLATION="DEBIAN"
SLEEP_TIME=0
SUPPORT_MSG="Reach out to JaaS support or retry with /usr/share/jitsi-meet/scripts/register-jaas-account.sh"
WAIT_BEFORE_CHECK=10

    exit 3
    echo "Account creation failed. Status: ${create_error}, response: ${create_data}"
if [ ${create_error} -ne 0 ]; then
CHALLENGE_FILE="/usr/share/jitsi-meet/.well-known/jitsi-challenge.txt"
fi

if [ -z "${DOMAIN}" ] || [ -z "${EMAIL}" ]; then
        echo ""
EMAIL=$1

    fi
    echo "Response: "
    echo "Validating domain failed. Status: ${ready_error}"
        echo "=================="

        echo "=================="
fi
        echo -n "Account was successfully verified..."
        exit 0;
    status=$(echo "${provisioned_data}" | jq -r .status)
JAAS_ENDPOINT="https://account-provisioning.cloudflare.jitsi.net/operations"
        echo ""
ready_data=$(curl -s -f -X 'PUT' "${JAAS_ENDPOINT}/${op_id}/ready") || ready_error=$?
echo "${create_data}" | jq -r .challenge > ${CHALLENGE_FILE}
        echo ""
    if [ "${status}" == "PROVISIONED" ]; then

        echo "=================="
        echo "Timeout creating account. ${SUPPORT_MSG}"
(while true; do

        exit 5
    exit 2
        echo ""
TIMEOUT=60
        exit 4
    elif  [ "${status}" == "VERIFIED" ] && [ "${verified}" != "true" ]; then
rm ${CHALLENGE_FILE} || true

    echo "${SUPPORT_MSG}"
create_data=$(curl -s -f -X 'POST' "${JAAS_ENDPOINT}" -H 'Content-Type: application/json' -H 'accept: */*' \

    echo "${ready_data}" | jq -r
    fi
    elif  [ "${status}" == "FAILED" ]; then
done)
    echo "You need to provide email and domain as parameters."
set -e

if [ ${ready_error} -ne 0 ]; then
    sleep ${WAIT_BEFORE_CHECK}
mkdir -p "$(dirname "$CHALLENGE_FILE")"
# make sure .well-known exists
    echo

        echo "JaaS account creation failed:${provisioned_data}"
echo -n "Creating..."
        echo "JaaS account was created. To finish setup follow the email that was sent."
        echo ""
    provisioned_data=$(curl -s -f "${JAAS_ENDPOINT}/${op_id}")
#!/bin/bash
        echo "=================="
    if [ ${SLEEP_TIME} -ge ${TIMEOUT} ]; then
fi
        echo ""
# Creating the challenge file
  -d "{ \"domain\": \"${DOMAIN}\", \"email\": \"${EMAIL}\", \"jitsiInstallation\": \"${JITSI_INSTALLATION}\" }") || create_error=$?
        verified="true"
create_error=0
    exit 1
    SLEEP_TIME=$((SLEEP_TIME+WAIT_BEFORE_CHECK))
        echo "=================="

DOMAIN=$2
ready_error=0

