// Naifah Jeresh -- inspired by the art of Steven Naifeh of the same name
// for more information see https://stevennaifeh.com

// this figure has some issues. To get the line weights to change
// you must stroke the entire figure after it is filled.


// GLOBALS
// 
_సర్వత్ర_   sColor = "నలుపు"  // stroke color
_సర్వత్ర_   sWidth = 3        // stroke width
_సర్వత్ర_   fColor = "white"  // fill color
_సర్వత్ర_   bColor = "green"  // background color

// FUNCTIONS
//
_విధానము_     tri( side, pointAngle, fill) {
  if (fill) {
    ఆకారము_ప్రారంభించు()
  }
  for (_సర్వత్ర_   i=0; i<3; i++) {
    ముందుకు_జరుగు( side)
    ఎడమ_వైపు_తిరుగు(60 - pointAngle)
    ముందుకు_జరుగు( side)
    కుడి_వైపు_తిరుగు( 180 - pointAngle)
  }
  if (fill) {
    ఆకారము_ముగించు(fColor)
  }
}


_విధానము_     jeresh (sid, pAngle, fill) {
  for (_సర్వత్ర_   i=0;i<6;i++) {
    కుంచికను_కింద_పెట్టు()
    tri( sid, pAngle, fill)

    _సర్వత్ర_   tx = కుంచిక.స్థానము.x
    _సర్వత్ర_   ty = కుంచిక.స్థానము.y
    _సర్వత్ర_   tHeading = కుంచిక.కోణము
    కుంచికను_పైకి_ఎత్తు()
    ముందుకు_జరుగు( sid)
    ఎడమ_వైపు_తిరుగు( 60 - pAngle)
    ముందుకు_జరుగు( sid)
    కుడి_వైపు_తిరుగు( 180 - pAngle)
    ముందుకు_జరుగు( sid)
    ఎడమ_వైపు_తిరుగు( 60)

    for (_సర్వత్ర_   j=0; j<3; j++) {
      కుంచికను_కింద_పెట్టు()
      tri(sid, pAngle, fill)
      కుంచికను_పైకి_ఎత్తు()
      ముందుకు_జరుగు(sid)
      ఎడమ_వైపు_తిరుగు(60)
    }
    స్థానము_మార్చు(tx,ty)

    కుంచిక.కోణము=tHeading
    కుంచికను_పైకి_ఎత్తు()
    ముందుకు_జరుగు( sid)
    ఎడమ_వైపు_తిరుగు(60)
  }
}


_విధానము_     ప్రదర్శన() {
  /* can vary point కోణము.
  0 and 120 is a hex tesselation
  60 and 180 are triangles
  90
  negative numbers have overlap, so
  something is not quite right
  */
  ఆది_స్థితి()
  కుంచికను_పైకి_ఎత్తు()
  _సర్వత్ర_   pointAngle = 30
  _సర్వత్ర_   side = 60
  side = .2* Math.min( గరిష్ఠX(), గరిష్ఠY())
  //center a bit
  స్థానము_మార్చు(side, -.3 * side)

  background(bColor)
  రంగు_మార్చు( sColor)
  వెడల్పు( 1)
  jeresh( side, pointAngle, true)
  వెడల్పు( 3)
  jeresh( side, pointAngle, false)

  కుంచికను_దాచు()
}
