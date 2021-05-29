// Clock, BCD -- digital clock using Binary Coded Decimal (BCD) digits

//*** GLOBALS ***

var hour10;
var hour1;
var minute10;
var minute1;
var second10;
var second1;
var hSpacing;
var vSpacing;

var hourColor = "red"
var minuteColor = "green"
var secondColor = "blue"
var offColor = "lightgray"


//*** FUNCTIONS ***

function tensDigit (number) {
  return Math.floor (number/10) % 10
}


function onesDigit (number) {
  return Math.floor (number % 10)
}


function getBinaryTime() {
  time = new Date
  hours = time.getHours()
  minutes = time.getMinutes()
  seconds = time.getSeconds()

  // extract the digits
  //hour10 =   hour1 =  onesDigit(hours)
  //min10 =  tensDigit(minutes)
  //min1 =   onesDigit(minutes)
  //sec10 =  tensDigit(seconds)
  //sec1 =   onesDigit(seconds)

  //pad digits with leading 0s
  //hour10 = "0000" + hour10.toString(2)
  //hour1 =  "0000" + hour1.toString(2)
  //min10 =  "0000" + min10.toString(2)
  //min1 =   "0000" + min1.toString(2)
  //sec10 =  "0000" + sec10.toString(2)
  //sec1 =   "0000" + sec1.toString(2)

  //use only 4 digits
  //hour10 = hour10.slice(-4)
  //hour1 =  hour1.slice(-4)
  //min10 =  min10.slice(-4)
  //min1 =   min1.slice(-4)
  //sec10 =  sec10.slice(-4)
  //sec1 =   sec1.slice(-4)
  hour10 = ("0000" + tensDigit(hours).toString(2)).slice(-4)
  hour1 =  ("0000" + onesDigit(hours).toString(2)).slice(-4)
  min10 =  ("0000" + tensDigit(minutes).toString(2)).slice(-4)
  min1 =   ("0000" + onesDigit(minutes).toString(2)).slice(-4)
  sec10 =  ("0000" + tensDigit(seconds).toString(2)).slice(-4)
  sec1 =   ("0000" + onesDigit(seconds).toString(2)).slice(-4)
}


function drawDot (digit, onColor, offColor, step) {
  if (digit == 1) {
    రంగు( onColor)
  } else {
    రంగు( offColor)
  }
  dot ()
  ముందుకు_జరుగు(step)
}


function drawNumberDots (digitString, onColor, offColor, spacing) {
  drawDot( digitString[0], onColor, offColor, spacing)
  drawDot( digitString[1], onColor, offColor, spacing)
  drawDot( digitString[2], onColor, offColor, spacing)
  drawDot( digitString[3], onColor, offColor, spacing)
  వెనుకకు_జరుగు(60)
}


function displayBinaryDots(hSpacing, vSpacing) {
  bottom = vSpacing * 1.5
  leftSide = -hSpacing * 2.5
  కలమును_పైకి_ఎత్తు()
  goto (leftSide + hSpacing *0, bottom)
  drawNumberDots (hour10, hourColor, offColor, vSpacing)

  goto (leftSide + hSpacing *1, bottom)
  drawNumberDots (hour1, hourColor, offColor, vSpacing)

  goto (leftSide + hSpacing *2, bottom)
  drawNumberDots (min10, minuteColor, offColor, vSpacing)

  goto (leftSide + hSpacing *3, bottom)
  drawNumberDots (min1, minuteColor, offColor, vSpacing)

  goto (leftSide + hSpacing *4, bottom)
  drawNumberDots (sec10, secondColor, offColor, vSpacing)

  goto (leftSide + hSpacing *5, bottom)
 drawNumberDots (sec1, secondColor, offColor, vSpacing)
}


function displayTime() {
  clear()
  కోణము(180)
  spacing = Math.min(maxX(), maxY()) *1.8/6
  hSpacing = spacing
  vSpacing = spacing
  వెడల్పు(spacing/10)
  తాబేలును_దాచు()
  getBinaryTime()
  displayBinaryDots(hSpacing, vSpacing)
}

demo = displayTime
animate(displayTime, 1000)
