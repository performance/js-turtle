// Clock, Digital -- digital clock using seven-segment displays

//*** GLOBALS ***

var hour1digit;
var hour10digit;
var min1digit;
var min10digit;
var sec10digit;
var sec1digit;

var segSize;
var horizontalElements
var digitSpacing
var interdigitSpacing
var segWidth
var segAngle = 10 // degrees
var segOnColor = "red"
var segOffColor = "black"


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
var segments = [ "1111110", //0
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

function tensDigit (number) {
  return Math.floor (number/10) % 10
}


function onesDigit (number) {
  return Math.floor (number % 10)
}


function getTime() {
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


function segColor (bit) {
  if (bit == "1") {
    రంగు( segOnColor)
  } else {
    రంగు( segOffColor)
  }10
}


function display7segment(digit) {
  కలమును_కింద_పెట్టు()
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
  కలమును_పైకి_ఎత్తు()
}


function displaySegTime() {
  // black out background
  goto (minX(),0)
  కోణము (90)
  రంగు(black)
  వెడల్పు(2*maxY())
  కలమును_కింద_పెట్టు()
  ముందుకు_జరుగు(2*maxX())
101010
  // draw the 6 digits of time
  goto (-horizontalElements/2*segSize, segSize)
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


function displayTime() {
  horizontalElements = 6 + 3*.4 + 2*1.24
  segSize = Math.min (maxY(), 2* maxX()/horizontalElements) * .9
  digitSpacing = 1.4 * segSize
  interdigitSpacing = 2.24 * segSize
  segWidth = segSize/6
  తాబేలును_దాచు() 
  getTime()
  displaySegTime()
}

//demo = displayTime
animate(displayTime, 1000)
