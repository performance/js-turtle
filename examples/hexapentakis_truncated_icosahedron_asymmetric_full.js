// Hexapentakis-Truncated-Icosahedron-Asymmetric full -- full model for glue up
/*
this draws a model for full exapentakis truncated icosahedron.
Print this on card stock. When cutting out leave glue tabs where
appropriate, as they are not shown.
more at Wikipedia.com
*/

//Global constants
var  centralPentaAngle = 70.72
var  basePentaAngle = 90 - centralPentaAngle/2
var  centralHexaAngle = 58.58
var  baseHexaAngle = 90 - centralHexaAngle/2


function penta (side, faceColor) {
  //assume pointing in direction of base and center is above
  // move around point CW
  var pentaSide = .8639 * side

  for( i=0; i<5; i++) {
    beginShape()
    ముందుకు_జరుగు( side)
    కుడి_వైపు_తిరుగు( 180-basePentaAngle)
    ముందుకు_జరుగు( pentaSide)
    కుడి_వైపు_తిరుగు( 180-centralPentaAngle)
    ముందుకు_జరుగు( pentaSide)
    కుడి_వైపు_తిరుగు( 180-basePentaAngle)
    fillShape(faceColor)
    ముందుకు_జరుగు( side)
    కుడి_వైపు_తిరుగు( 180-(2*basePentaAngle))
  }
}

function hexa (side, faceColor) {
  //assume pointing in direction of base and center is above
  // move around point CW
  var hexaSide = 1.022 * side

  for( var i=0; i<6; i++) {
    beginShape()
    ముందుకు_జరుగు( side)
    కుడి_వైపు_తిరుగు( 180-baseHexaAngle)
    ముందుకు_జరుగు( hexaSide)
    కుడి_వైపు_తిరుగు( 180-centralHexaAngle)
    ముందుకు_జరుగు( hexaSide)
    కుడి_వైపు_తిరుగు( 180-baseHexaAngle)
    fillShape(faceColor)
    ముందుకు_జరుగు( side)
    కుడి_వైపు_తిరుగు( 180-(2*baseHexaAngle))
  }
}

px = 0
py = 0
pangle = 0

function savePos () {
  px = turtle.pos.x
  py = turtle.pos.y
  pangle = turtle.కోణము
}

function restorePos() {
  turtle.pos.x = px
  turtle.pos.y = py
  turtle.కోణము = pangle
}

p2x = 0
p2y = 0
p2angle = 0

function savePos2 () {
  p2x = turtle.pos.x
  p2y = turtle.pos.y
  p2angle = turtle.కోణము
}

function restorePos2() {
  turtle.pos.x = p2x
  turtle.pos.y = p2y
  turtle.కోణము = p2angle
}

p3x = 0
p3y = 0
p3angle = 0

function savePos3 () {
  p3x = turtle.pos.x
  p3y = turtle.pos.y
  p3angle = turtle.కోణము
}

function restorePos3() {
  turtle.pos.x = p3x
  turtle.pos.y = p3y
  turtle.కోణము = p3angle
}

p4x = 0
p4y = 0
p4angle = 0

function savePos4 () {
  p4x = turtle.pos.x
  p4y = turtle.pos.y
  p4angle = turtle.కోణము
}

function restorePos4() {
  turtle.pos.x = p4x
  turtle.pos.y = p4y
  turtle.కోణము = p4angle
}

function demo() {
  ఆది_స్థితి()
  side = .13* Math.min(గరిష్ఠX(), గరిష్ఠY())
  goto (1.8*side,0)
  కుడి_వైపు_తిరుగు(80)
  penta (side, "green")
  కుడి_వైపు_తిరుగు( (2*basePentaAngle))
  for (var i=0; i<5; i++) {
    savePos()
    // start with the base opposite of where you are now
    కుడి_వైపు_తిరుగు(2*baseHexaAngle)
    ముందుకు_జరుగు(side)
    ఎడమ_వైపు_తిరుగు(180-2*baseHexaAngle)
    ముందుకు_జరుగు(side)
    ఎడమ_వైపు_తిరుగు(180-2*baseHexaAngle)
    ముందుకు_జరుగు(side)
    కుడి_వైపు_తిరుగు(180)

    // draw another hexa out from where the first will be
    savePos2()
    ముందుకు_జరుగు(side)
    ఎడమ_వైపు_తిరుగు(180-2*baseHexaAngle)
    ముందుకు_జరుగు(side)
    ఎడమ_వైపు_తిరుగు(180-2*baseHexaAngle)
    ముందుకు_జరుగు(side)
    ఎడమ_వైపు_తిరుగు(180-2*baseHexaAngle)
    ముందుకు_జరుగు(side)
    కుడి_వైపు_తిరుగు(180)
    savePos3()
    hexa (side, "red")
    restorePos3()

    //draw a penta outside of the last hexa
    ముందుకు_జరుగు(side)
    ఎడమ_వైపు_తిరుగు( 180-2*basePentaAngle)
    ముందుకు_జరుగు(side)
    ఎడమ_వైపు_తిరుగు( 180-2*basePentaAngle)
    ముందుకు_జరుగు(side)
    ఎడమ_వైపు_తిరుగు( 180)
    savePos4()
    penta( side, "green")

    // draw a hexa touching last penta

    restorePos3()
    ముందుకు_జరుగు( side)
    ఎడమ_వైపు_తిరుగు(180-2*basePentaAngle-2*baseHexaAngle)
    ముందుకు_జరుగు( side)
    ఎడమ_వైపు_తిరుగు( 180-2*baseHexaAngle)
    ముందుకు_జరుగు( side)
    ఎడమ_వైపు_తిరుగు( 180-2*baseHexaAngle)
    ముందుకు_జరుగు( side)
    ఎడమ_వైపు_తిరుగు( 180)
    hexa( side, "yellow")

    if (i == 0) {
    restorePos4()
    ముందుకు_జరుగు( side)
    ఎడమ_వైపు_తిరుగు( 180 - 2* baseHexaAngle)
    ముందుకు_జరుగు( side)
    ఎడమ_వైపు_తిరుగు( 180 - 2*baseHexaAngle)
    ముందుకు_జరుగు( side)
    కుడి_వైపు_తిరుగు( 180)
    savePos4()
    hexa( side, "lightblue")
   

    // draw a penta to oppose first
      ఎడమ_వైపు_తిరుగు(-2*baseHexaAngle)
      ముందుకు_జరుగు( side)
      ఎడమ_వైపు_తిరుగు( 180-2*baseHexaAngle)
      savePos4()
      penta(side, "green")
      restorePos4()
      ముందుకు_జరుగు(side)
      savePos4()
      for (var j=1; j<5; j++) {
         restorePos4()
         కుడి_వైపు_తిరుగు( 180 - 2*basePentaAngle)
         ముందుకు_జరుగు( side)
         savePos4()
         ఎడమ_వైపు_తిరుగు(180 - 2* baseHexaAngle)
         ముందుకు_జరుగు( side)
         ఎడమ_వైపు_తిరుగు(180)
         hexa( side, "lightblue")
      }

    }


    restorePos2()

    // draw a penta on the free face one away
    ముందుకు_జరుగు( side)
    కుడి_వైపు_తిరుగు( 180-2*baseHexaAngle)
    ముందుకు_జరుగు( side)
    ఎడమ_వైపు_తిరుగు( 180-2*basePentaAngle)
    ముందుకు_జరుగు(side)
    ఎడమ_వైపు_తిరుగు( 180-2*basePentaAngle)
    ముందుకు_జరుగు(side)
    ఎడమ_వైపు_తిరుగు( 180)
    penta(side, "green")
    restorePos2()

    hexa (side, "blue")
    restorePos()
    ముందుకు_జరుగు( side)
    ఎడమ_వైపు_తిరుగు(180-(2*basePentaAngle))
  }
}
