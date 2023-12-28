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

echo "buildJsString:: ${DIRECTORY} was given as input directory"

if [ ${DIRECTORY}NotSpecified =  NotSpecified ]; then
  echo Input directory not specified
  DIRECTORY=examples
  exit
fi

rm -f examples.js # చెరిపి_వేయి temporary file

for SUB_DIR_NAME in `ls -l ${DIRECTORY}| grep ^d | awk '{print $9}'` ; do
  echo "///////////////////////"
  echo "// Begin ${SUB_DIR_NAME} "
  echo "// Begin ${SUB_DIR_NAME} " >> examples.js
  for FILE_NAME in `ls ${DIRECTORY}/${SUB_DIR_NAME}/*.js` ; do
    STRING_NAME=`echo $(basename ${FILE_NAME}) | sed -e s/.js\$//`
    (echo "${STRING_NAME} ='\\";
    sed -Ee "s/$/\\\\n\\\\/" -e "s/<feff>//"< ${FILE_NAME};
    echo "'") >>examples.js
  done
  echo "// End ${SUB_DIR_NAME} " >> examples.js
  echo "// End ${SUB_DIR_NAME} "
  echo "///////////////////////"
done

# for FILE_NAME in `ls $DIRECTORY` ; do
#   STRING_NAME=`echo $FILE_NAME | sed -e s/.js\$//`
#   (echo "${STRING_NAME} ='\\";
#   sed -Ee "s/$/\\\\n\\\\/" -e "s/<feff>//"< $DIRECTORY/$FILE_NAME;
#   echo "'") >>examples.js
# done
