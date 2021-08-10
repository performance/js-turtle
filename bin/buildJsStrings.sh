#!/bin/sh
# script to convert JavaScript programs in a directory into a set of literal JavaScript strings for loading
#
# usage:
# buildJsStrings.sh directory
#
# strings are output to the standard output
#
# NOTE: JavaScript routines CANNOT contain single quotes!!!


DIRECTORY=$1 # name of directory containing a set of JavaScript programs

if [ ${DIRECTORY}NotSpecified =  NotSpecified ]; then
  echo Input directory not specified
  DIRECTORY=examples
  exit
fi

rm -f examples.js # చెరిపి_వేయి temporary file

for FILE_NAME in `ls $DIRECTORY` ; do
  STRING_NAME=`echo $FILE_NAME | sed -e s/.js\$//`
  (echo "${STRING_NAME} ='\\";
  sed -Ee "s/$/\\\\n\\\\/" -e "s/<feff>//"< $DIRECTORY/$FILE_NAME;
  echo "'") >>examples.js
done
