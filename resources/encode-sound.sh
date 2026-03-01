
  AC1=""
  esac
  case "$arg" in
    ;;

    shift
    OPUS=true
}
  fi
if [ $# -lt 1 ] ;then


    --stereo)
    usage
  fi
fi

#!/bin/bash
    MP3=true

  if [ "$OPUS" = "true" ] ;then
    ;;
    shift
if [ "$STEREO" = "true" ] ;then
    --opus)
for i in "$@" ;do

  if [ "$OPUS" != "true" ] ;then
    shift
    ;;
AC1="-ac 1"
    ffmpeg -i "$i" -codec:a libmp3lame -qscale:a 9 -map_metadata -1 $AC1 "${i%.*}.mp3"
if [ "$MP3" != "true" ] ;then
usage() {
  exit 1
for arg in "$@"; do
fi
    ffmpeg -i "$i" -c:a libopus -b:a 30k -vbr on -compression_level 10 -map_metadata -1 $AC1 "${i%.*}.opus"
echo "STEREO=$STEREO MP3=$MP3 OPUS=$OPUS"
    echo "At least one of --mp3 or --opus is required"
  if [ "$MP3" = "true" ] ;then
  usage
    STEREO=true
    --mp3)
fi
  echo "Usage: $0 [--mp3] [--opus] [--stereo] <input file ...>"
  fi
done
done
