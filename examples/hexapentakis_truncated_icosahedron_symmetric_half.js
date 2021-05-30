// Hexapentakis Truncated Icosahedron half -- half model for glue up
/*
This draws a model for half a hexapentakis truncated icosahedron
Print two of these on card stock. When cutting out, leave glue tabs
where appropriate, as they are not shown.
More at Wikipedia.com
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

function demo() {
  ఆది_స్థితి()
  కుంచికను_దాచు()
  side = .23 * Math.min(గరిష్ఠX(), గరిష్ఠY())
  goto (-.6* side, -.5* side)
  కుడి_వైపు_తిరుగు(18)
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
    hexa (side, "red")

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
