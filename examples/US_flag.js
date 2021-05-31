// US Flag -- draw an American Flag

function star (size) {
  కలమును_పైకి_ఎత్తు()
  ముందుకు_జరుగు(.54*size)
  turn (180-18)
  కలమును_కింద_పెట్టు()
  var i=0
  ఆకారాము_ప్రారంభించు()
  while (i<5){
    ముందుకు_జరుగు(size)
    కుడి_వైపు_తిరుగు(180-36)
    i = i + 1
  }
  ఆకారాము_ముగించు("white")
  turn (180+18)
  వెనుకకు_జరుగు(.54*size)
}


function starLine(count, size, sep) {
  while (count > 0) {
    star(size)
    కలమును_పైకి_ఎత్తు()
    కుడి_వైపు_తిరుగు(90)
    ముందుకు_జరుగు(sep)
    ఎడమ_వైపు_తిరుగు(90)
    కలమును_కింద_పెట్టు()
    count = count -1;
  }
}


function rectangle (width, height) {
  // assume x, y at upper right hand corner in and out
  // assume కోణము is 90 in and out
  కోణము (90)
  ముందుకు_జరుగు(width)
  కుడి_వైపు_తిరుగు(90)
  ముందుకు_జరుగు(height)
  కుడి_వైపు_తిరుగు(90)
  ముందుకు_జరుగు(width)
  కుడి_వైపు_తిరుగు(90)
  ముందుకు_జరుగు(height)
  కుడి_వైపు_తిరుగు(90)
}


function stripes (width, spacing, number) {
  //assume x, y is at right side of stripe
  //assume కోణము is -90
  var i = 0
  while (i<number) {
    కలమును_కింద_పెట్టు()
    ముందుకు_జరుగు(width)
    కలమును_పైకి_ఎత్తు()
    // make the turn
    if (i%2 == 0) {
      ఎడమ_వైపు_తిరుగు(90)
      ముందుకు_జరుగు(spacing)
      ఎడమ_వైపు_తిరుగు(90)
    } else {
      కుడి_వైపు_తిరుగు(90)
      ముందుకు_జరుగు(spacing)
      కుడి_వైపు_తిరుగు(90)
    }
    i = i + 1
  }
}


function flag() {
  // ***Constants
  //var xBase = -200 // base is upper left corner
  //var yBase = 200
  //var flagHeight = 250 // everything else is proportional to flagHeight
 
  var flagHeight =  1.8 * Math.min(గరిష్ఠX()/1.9, గరిష్ఠY())
  var flagWidth = 1.9 * flagHeight
console.log("X="+2*గరిష్ఠX()+ " Y="+2*గరిష్ఠY() + " W="+flagWidth + "H="+flagHeight)
  var xBase = -flagWidth/2
  var yBase = flagHeight/2 

  var stripeWidth = flagHeight/13
  var fieldWidth = .76 * flagHeight
  var fieldHeight = 7 * stripeWidth
  var xSeparation = .063 * flagHeight
  var ySeparation = .054 * flagHeight
  starSize = .05 *flagHeight // star size
  //outline flag and field
  ఆది_స్థితి()
   wrap(false)
  కుంచికను_దాచు()
  స్థానము_మార్చు(xBase, yBase)
  కోణము (90)
  రంగు_మార్చు("నలుపు")

  వెడల్పు(1)
  rectangle (flagWidth, flagHeight)
  rectangle (fieldWidth, fieldHeight)

  //  draw stripes
  రంగు_మార్చు( ఎరుపు );
  వెడల్పు(stripeWidth);
  స్థానము_మార్చు(xBase+flagWidth, yBase-stripeWidth/2)
  కోణము (-90)
  stripes (flagWidth-fieldWidth, 2*stripeWidth, 4)
  stripes (flagWidth, 2*stripeWidth, 3)

  //draw field
  రంగు_మార్చు( నీలము )
  స్థానము_మార్చు(xBase+fieldWidth, yBase-stripeWidth/2)
  కోణము (-90)
  stripes (fieldWidth, stripeWidth, 7)

  //draw field of stars
  కోణము(0)
  వెడల్పు(2)
  రంగు_మార్చు( తెలుపు )
  కలమును_కింద_పెట్టు()

  var row = 0
  while (row<9) {
   if (row % 2 == 0) {
      స్థానము_మార్చు(xBase + xSeparation, yBase - (row +1) * ySeparation)
      starLine(6, starSize, xSeparation*2)
    } else {
      స్థానము_మార్చు(xBase + 2* xSeparation, yBase - (row +1) * ySeparation)
      starLine(5, starSize, xSeparation * 2)
    }
    row = row + 1;
  }
}
  
demo = flag
