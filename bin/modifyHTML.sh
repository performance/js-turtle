#!/bin/bash
#########################################################################
# script to add examples as options to select in కుంచిక.html file
#
# usage:
#   modifyHTML.sh directory
#########################################################################

DIRECTORY=$1 # name of directory containing a set of javascript programs

if [ ${1}NotSpecified =  NotSpecified ]; then
	echo Input directory not specified
	exit 1
fi

echo '          <option selected value='example'>Examples</option>' > tmp

for FILE_NAME in `ls $DIRECTORY` ; do
	echo "   working on $FILE_NAME"
	OPTION_NAME=`head -1 $DIRECTORY/$FILE_NAME |sed -Ee "s/^\/\/ *(.*) --.*$/\1/"`
	echo "   $OPTION_NAME"
	echo "$FILE_NAME" | sed -Ee "s/(.*)\.js/          <option value=\"\1\"><\/option>/" -e "s/></>$OPTION_NAME</" >>tmp
done

# add the new options to the కుంచిక.html file
BACKUP_FILE=backups/కుంచిక.html.`date "+%Y-%m-%d.%H.%M.%S"`
cp -f కుంచిక.html $BACKUP_FILE
(
	sed -n -e "1,/<select id=examples>/p" <$BACKUP_FILE
	cat tmp
	sed -n -e "/<\/select>/,\$p" <$BACKUP_FILE
) > కుంచిక.html

# clean up
rm -f tmp 
exit 0
