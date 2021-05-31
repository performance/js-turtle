#!/bin/bash
#find broken links and development placeholders

#bugs... things to do
# have to handle single quoted references

# filetype
#/ start with # is anchor local to the particular file
#/ start with http: or https: is an internet URL
# need to do something with కుంచిక.html?example=something links ... i don't know if an error is returned
#   since this is internal, we can test these individually,
#      ?code=   this can be any valid code, hard to test, should only be used dynamically
#      ?example=   check that valid example identifiers have been used, i.e., list in కుంచిక.html   ** existing code=
#      ?command=   check that valid Turtle Graphics commands have been used
#          ... most/all of these links are dynamically set up, so we won't see them
# handle mailto:
# handle file:
#/ else local url

DEBUG=false

grep -q no_picture.png *html
if [ $? -eq 0 ]; then
	echo '*****The following files have "no_picture.png" links:'
	grep no_picture.png *html |sed -e "s/^/     /"
#	exit 1
fi


#FILE=javascript.html
FILES=`ls *html`
#FILES=nerd.html
#FILES=about.html
#FILES=కుంచిక.html
FILES=examples.html
for FILE in $FILES
do
	echo
	echo
	echo "links for $FILE"
	REFS=`grep href= $FILE | sed -Ee 's/.*href="?([^">]*)[">].*/ "\1"/g; s/^/     /;s/ /%20/g' |sort|uniq`
	REFS2=`grep src= $FILE | sed -Ee 's/.*src="?([^">]*)[">].*/ "\1"/g; s/^/     /;s/ /%20/g;' |sort|uniq`
	for REF in $REFS $REFS2
	do
		REF=`echo $REF |sed -Ee 's/%20/ /g;s/"//g; s/^ *//;'`
		echo "   checking \"$REF\""
		if [[ $REF == \# ]]; then
			:
			#echo "   # matches current file"
		elif [[ $REF == \#* ]]; then
			REF=`echo $REF | sed -e 's/\#//'`
			grep -q "id=$REF" $FILE
			if [ $? -ne 0 ]; then
				grep -q "id=\"$REF\"" $FILE
				if [ $? -ne 0 ]; then
					echo "***No anchor in $FILE for \"$REF\"."
				fi
			fi
		elif [[ $REF == https://en.wikipedia.org* ]]; then #this stopped working???
			echo "   skipping"
		elif [[ $REF == https* ]]; then
			echo "   Looking for $REF"
			wget -qO- -v -t 2 --timeout 10 --no-check-certificate $REF &> /dev/null
			if [ $? -ne 0 ]; then
				echo "***Bad link to \"$REF\"."
			fi
		elif [[ $REF == http* ]]; then
			echo "   Looking for $REF"
			wget -qO- -v -t 2 --timeout 10 --no-check-certificate $REF &> /dev/null
			if [ $? -ne 0 ]; then
				echo "***Bad link to \"$REF\"."
			fi
		elif [[ $REF == *కుంచిక.html?example=* ]]; then
			EXAMPLE=`echo $REF | sed -Ee 's/.*కుంచిక\.html\?example=(.*)/\1/'`
			echo "   Looking for example $EXAMPLE"
			grep '<option value="'$EXAMPLE'">' కుంచిక.html
			if [ $? -ne 0 ]; then
				echo "***Bad example link: \"$EXAMPLE\"."
				if [ -f "examples/$EXAMPLE.js" ]; then
					echo "   examples/$EXAMPLE.js exists."
				else
					echo "   examples/$EXAMPLE.js does not exist."
				fi
			fi
		else
			if [ ! -f "$REF" ]; then
				echo "***File not found! $REF"
			fi
		fi
	done
done
exit
