// Hexapentakis-Truncated-Icosahedron Symmetric full -- full model for glue up
/*
this draws a modle for full hexapentakis truncated icosahedron
Print this on card stock. When cutting out leave glue tabs where appropriate,
as they are not shown.
more at Wikipedia.com
*/

//Global constants
_సర్వత్ర_   centralPentaAngle = 70.72
_సర్వత్ర_   basePentaAngle = 90 - centralPentaAngle/2
_సర్వత్ర_   centralHexaAngle = 58.58
_సర్వత్ర_   baseHexaAngle = 90 - centralHexaAngle/2
_సర్వత్ర_   baseAngle = 90 - centralPentaAngle/2


_విధానము_     penta (side, faceColor) {
  //assume pointing in direction of base and center is above
  // move around point CW
  _సర్వత్ర_   pentaSide = .8639 * side

  for( i=0; i<5; i++) {
    ఆకారము_ప్రారంభించు()
    ముందుకు_జరుగు( side)
    కుడి_వైపు_తిరుగు( 180-baseAngle)
    ముందుకు_జరుగు( pentaSide)
    కుడి_వైపు_తిరుగు( 180-centralPentaAngle)
    ముందుకు_జరుగు( pentaSide)
    కుడి_వైపు_తిరుగు( 180-basePentaAngle)
    ఆకారము_ముగించు(faceColor)
    ముందుకు_జరుగు( side)
    కుడి_వైపు_తిరుగు( 180-(2*basePentaAngle))
  }
}

_విధానము_     hexa (side, faceColor) {
  //assume pointing in direction of base and center is above
  // move around point CW
  _సర్వత్ర_   hexaSide = 1.022 * side

  for( _సర్వత్ర_   i=0; i<6; i++) {
    ఆకారము_ప్రారంభించు()
    ముందుకు_జరుగు( side)
    కుడి_వైపు_తిరుగు( 180-baseHexaAngle)
    ముందుకు_జరుగు( hexaSide)
    కుడి_వైపు_తిరుగు( 180-centralHexaAngle)
    ముందుకు_జరుగు( hexaSide)
    కుడి_వైపు_తిరుగు( 180-baseHexaAngle)
    ఆకారము_ముగించు(faceColor)
    ముందుకు_జరుగు( side)
    కుడి_వైపు_తిరుగు( 180-(2*baseHexaAngle))
  }
}

px = 0
py = 0
pangle = 0

_విధానము_     savePos () {
  px = కుంచిక.స్థానము.x
  py = కుంచిక.స్థానము.y
  pangle = కుంచిక.కోణము
}

_విధానము_     restorePos() {
  కుంచిక.స్థానము.x = px
  కుంచిక.స్థానము.y = py
  కుంచిక.కోణము = pangle
}

p2x = 0
p2y = 0
p2angle = 0

_విధానము_     savePos2 () {
  p2x = కుంచిక.స్థానము.x
  p2y = కుంచిక.స్థానము.y
  p2angle = కుంచిక.కోణము
}

_విధానము_     restorePos2() {
  కుంచిక.స్థానము.x = p2x
  కుంచిక.స్థానము.y = p2y
  కుంచిక.కోణము = p2angle
}

p3x = 0
p3y = 0
p3angle = 0

_విధానము_     savePos3 () {
  p3x = కుంచిక.స్థానము.x
  p3y = కుంచిక.స్థానము.y
  p3angle = కుంచిక.కోణము
}

_విధానము_     restorePos3() {
  కుంచిక.స్థానము.x = p3x
  కుంచిక.స్థానము.y = p3y
  కుంచిక.కోణము = p3angle
}

p4x = 0
p4y = 0
p4angle = 0

_విధానము_     savePos4 () {
  p4x = కుంచిక.స్థానము.x
  p4y = కుంచిక.స్థానము.y
  p4angle = కుంచిక.కోణము
}

_విధానము_     restorePos4() {
  కుంచిక.స్థానము.x = p4x
  కుంచిక.స్థానము.y = p4y
  కుంచిక.కోణము = p4angle
}

_విధానము_     ప్రదర్శన() {
  ఆది_స్థితి()
  side = .13* Math.min(గరిష్ఠX(), గరిష్ఠY())
  స్థానము_మార్చు(0,0)
  కుడి_వైపు_తిరుగు(80)
  penta (side, "green")
  కుడి_వైపు_తిరుగు( (2*basePentaAngle))
  for (_సర్వత్ర_   i=0; i<5; i++) {
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
    //restorePos4()
    if (i == 0) {
      ఎడమ_వైపు_తిరుగు(-2*baseHexaAngle)
      ముందుకు_జరుగు( side)
      ఎడమ_వైపు_తిరుగు( 180-2*baseHexaAngle)
      //ముందుకు_జరుగు( side)
      //కుడి_వైపు_తిరుగు( 180-2*baseHexaAngle)
      //ముందుకు_జరుగు(side)
      penta(side, "green")
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
