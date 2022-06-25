// Clock, Digital -- digital clock using seven-segment displays

//*** GLOBALS ***

_సర్వత్ర_   hour1digit;
_సర్వత్ర_   hour10digit;
_సర్వత్ర_   min1digit;
_సర్వత్ర_   min10digit;
_సర్వత్ర_   sec10digit;
_సర్వత్ర_   sec1digit;

_సర్వత్ర_   segSize;
_సర్వత్ర_   horizontalElements
_సర్వత్ర_   digitSpacing
_సర్వత్ర_   interdigitSpacing
_సర్వత్ర_   segWidth
_సర్వత్ర_   segAngle = 10 // degrees
_సర్వత్ర_   segOnColor = "red"
_సర్వత్ర_   segOffColor = "నలుపు"


//*** CONSTANTS ***

/*
The seven-segment display is layed out as follows:
   --a--
  |      |
  f      b
  |      |
   --g--
  |      |
  e      c
  |      |
   --d--
*/
//segment strings are in the order: abcdefg
//  where 1 turns segment on
//    and 0 turns segment off
_సర్వత్ర_   segments = [ "1111110", //0
                 "0110000", //1
                 "1101101", //2
                 "1111--1", //3
                 "0110011", //4
                 "1011011", //5
                 "1011111", //6
                 "1110000", //7
                 "1111111", //8
                 "1110011"  //9
               ]


//*** FUNCTIONS ***

_విధానము_     tensDigit (number) {
  _ఫలము_  Math.floor (number/10) % 10
}


_విధానము_     onesDigit (number) {
  _ఫలము_  Math.floor (number % 10)
}


_విధానము_     getTime() {
  time = new Date
  hours = time.getHours()
  minutes = time.getMinutes()
  seconds = time.getSeconds()

  // extract the digits
  hour10digit = tensDigit(hours)
  hour1digit = onesDigit(hours)
  min10digit = tensDigit(minutes)
  min1digit = onesDigit(minutes)
  sec10digit = tensDigit(seconds)
  sec1digit = onesDigit(seconds)
}


_విధానము_     segColor (bit) {
  if (bit == "1") {
    రంగు_మార్చు( segOnColor)
  } else {
    రంగు_మార్చు( segOffColor)
  }10
}


_విధానము_     display7segment(digit) {
  కుంచికను_కింద_పెట్టు()
  segColor (segments [digit].substr(0,1)) //a
  ముందుకు_జరుగు(segSize)
  కుడి_వైపు_తిరుగు(90+segAngle)
  segColor (segments [digit].substr(1,1)) //b
  ముందుకు_జరుగు(segSize)
  segColor (segments [digit].substr(2,1)) //c
  ముందుకు_జరుగు(segSize)
  కుడి_వైపు_తిరుగు(90-segAngle)
  segColor (segments [digit].substr(3,1)) //d
  ముందుకు_జరుగు(segSize)
  కుడి_వైపు_తిరుగు(90+segAngle)
  segColor (segments [digit].substr(4,1)) //e
  ముందుకు_జరుగు(segSize)
  కుడి_వైపు_తిరుగు(90-segAngle)
  segColor (segments [digit].substr(6,1)) //g
  ముందుకు_జరుగు(segSize)
  వెనుకకు_జరుగు(segSize)
  ఎడమ_వైపు_తిరుగు(90-segAngle)
  segColor (segments [digit].substr(5,1)) //f
  ముందుకు_జరుగు(segSize)
  కుడి_వైపు_తిరుగు(90-segAngle)
  కుంచికను_పైకి_ఎత్తు()
}


_విధానము_     displaySegTime() {
  // black out background
  స్థానము_మార్చు(కనిష్ఠX(),0)
  కోణము (90)
  రంగు_మార్చు(black)
  వెడల్పు(2*గరిష్ఠY())
  కుంచికను_కింద_పెట్టు()
  ముందుకు_జరుగు(2*గరిష్ఠX())
101010
  // draw the 6 digits of time
  స్థానము_మార్చు(-horizontalElements/2*segSize, segSize)
  వెడల్పు(segWidth)
  display7segment(hour10digit)
  ముందుకు_జరుగు(digitSpacing)
  display7segment(hour1digit)

  ముందుకు_జరుగు(interdigitSpacing)
  display7segment(min10digit)
  ముందుకు_జరుగు(digitSpacing)
  display7segment(min1digit)

  ముందుకు_జరుగు(interdigitSpacing)
  display7segment(sec10digit)
  ముందుకు_జరుగు(digitSpacing)
  display7segment(sec1digit)
}


_విధానము_     displayTime() {
  horizontalElements = 6 + 3*.4 + 2*1.24
  segSize = Math.min (గరిష్ఠY(), 2* గరిష్ఠX()/horizontalElements) * .9
  digitSpacing = 1.4 * segSize
  interdigitSpacing = 2.24 * segSize
  segWidth = segSize/6
  కుంచికను_దాచు() 
  getTime()
  displaySegTime()
}

//ప్రదర్శన = displayTime
ఆడించు(displayTime, 1000)
