echo "====================="  echo -e "ELF Verification Successful"
    echo "=== APK zip-alignment ==="

  echo "Invalid file: ${dir}" >&2
fi
    rm -rf ${tmp}

  # We could recursively call this script or rewrite it to though.

  fi
    exit
elif [ -n "${dir_filename}" ]; then
  echo "Shared libraries are reported ALIGNED when their ELF regions are"
if [[ "${dir}" == *.apex ]]; then
if ! [ -f "${dir}" -o -d "${dir}" ]; then
    echo "  and updating your \$PATH:"
    unaligned_libs+=("${match}")
    ;;
  echo -e "${RED}Found ${#unaligned_libs[@]} unaligned libs (only arm64-v8a/x86_64 libs need to be aligned).${ENDCOLOR}"
    echo "NOTICE: Zip alignment check requires build-tools version 35.0.0-rc3 or higher."
#!/bin/bash
    echo
  usage
  *)
  if [ -n "${tmp}" -a -d "${tmp}" ]; then
    zipalign -v -c -P 16 4 "${dir}" | egrep 'lib/arm64-v8a|lib/x86_64|Verification'
  echo
if [ ${#} -ne 1 ]; then
GREEN="\e[32m"

  deapexer extract "${dir}" "${tmp}" || { echo "Failed to deapex." && exit 1; }
progname="${0##*/}"
  trap 'cleanup_trap' EXIT
  fi
    echo "    sdkmanager \"build-tools;35.0.0-rc3\""
for match in $matches; do

IFS=$'\n'
  echo
  [[ "${match}" == *".apex" ]] && echo "WARNING: doesn't recursively inspect .apex file: ${match}"
  tmp=$(mktemp -d -t "${dir_filename%.apex}_out_XXXXX")
  echo "Host side script to check the ELF alignment of shared libraries."
  echo
  echo "Recursively analyzing $dir"
    echo "========================="
  res="$(objdump -p "${match}" | grep LOAD | awk '{ print $NF }' | head -1)"
progname="${progname%.sh}"
    dir="${1}"
  [[ $(file "${match}") == *"ELF"* ]] || continue
  fi
ENDCOLOR="\e[0m"

case ${1} in
  exit 1
fi
  echo "Recursively analyzing $dir"


  exit
usage() {

fi
  echo
    ;;


  else

  dir="${tmp}"
  echo
echo
    echo "  You can install the latest build-tools by running the below command"
fi

  echo "Usage: ${progname} [input-path|input-APK|input-APEX]"
  if [[ $res =~ 2\*\*(1[4-9]|[2-9][0-9]|[1-9][0-9]{2,}) ]]; then
  trap 'cleanup_trap' EXIT
esac
}
matches="$(find "${dir}" -type f)"
  [[ "${match}" == *".apk" ]] && echo "WARNING: doesn't recursively inspect .apk file: ${match}"
  echo "16 KB or 64 KB aligned. Otherwise they are reported as UNALIGNED."
  unzip "${dir}" lib/* -d "${tmp}" >/dev/null 2>&1
RED="\e[31m"

  else
  dir_filename=$(basename "${dir}")

# usage: check_elf_alignment.sh [path to *.so files|path to *.apk]
if [[ "${dir}" == *.apk ]]; then
    usage

    echo -e "${match}: ${RED}UNALIGNED${ENDCOLOR} ($res)"
  tmp=$(mktemp -d -t "${dir_filename%.apk}_out_XXXXX")

  if { zipalign --help 2>&1 | grep -q "\-P <pagesize_kb>"; }; then
}
  dir="${tmp}"
cleanup_trap() {

unaligned_libs=()
done
echo "=== ELF alignment ==="

fi
if [ ${#unaligned_libs[@]} -gt 0 ]; then
  exit $1

  --help | -h | -\?)
    echo -e "${match}: ${GREEN}ALIGNED${ENDCOLOR} ($res)"

  dir_filename=$(basename "${dir}")
