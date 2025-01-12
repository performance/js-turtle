// Naifah Ajlun -- inspired by the art of Steven Naifeh of the same name
// for more information see https://stevennaifeh.com

// kite has side b and h, square has side s
// b = s + h
// either vary the కోణము or vary the sides
// try calulating the కోణము


_విధానము_     quadrangle( ){
  // start at lower left corner of outer square
  ఆకారము_ప్రారంభించు()
  ముందుకు_జరుగు(longSide)
  కుడి_వైపు_తిరుగు( 180 - angleA)
  ముందుకు_జరుగు(longSide)
  కుడి_వైపు_తిరుగు(90)
  ముందుకు_జరుగు( shortSide)
  కుడి_వైపు_తిరుగు(180 - angleC)
  ముందుకు_జరుగు(shortSide)
  కుడి_వైపు_తిరుగు(90)
  కుంచికను_పైకి_ఎత్తు()
  ముందుకు_జరుగు( longSide + shortSide)
  కుడి_వైపు_తిరుగు(90)
  కుంచికను_కింద_పెట్టు()
  ఆకారము_ముగించు("lightblue")
}

_విధానము_     ప్రదర్శన() {
  ఆది_స్థితి()
   చుట్టొద్దు()
  rows = 4
  columns = 5

  side = 1.7 * Math.min(గరిష్ఠX()/(columns*3+1), గరిష్ఠY()/(rows*3+1))
console.log ("side:"+side)

  // sides and angles of the quadrangle
  shortSide = side  // matter of convenience, could be something else
  longSide = side*2 // matter of convenience
  angleA = 2* radToDeg(Math.atan(shortSide/longSide))
  angleC = 180 - angleA
  offsetAngle = radToDeg( Math.atan( side/(shortSide + longSide)))

  // center this more or less
  స్థానము_మార్చు(-.5 * columns * (shortSide + longSide) + .4 *side, .5 * (rows-2) * (shortSide + longSide) + .4*side)
  ఎడమ_వైపు_తిరుగు( offsetAngle)
  for (_సర్వత్ర_   k=0; k<rows; k++) {
    for (_సర్వత్ర_   j=0; j<columns; j++) { // across row
      for (_సర్వత్ర_   i=0; i<4; i++) { // around inner square
        quadrangle()
      }
      కుంచికను_పైకి_ఎత్తు()
      కుడి_వైపు_తిరుగు(90)
      ముందుకు_జరుగు( shortSide + longSide)
      కుడి_వైపు_తిరుగు(90)
      ముందుకు_జరుగు( side)
      ఎడమ_వైపు_తిరుగు(180)
      కుంచికను_కింద_పెట్టు()
    }
    కుంచికను_పైకి_ఎత్తు()
    ఎడమ_వైపు_తిరుగు( 90- offsetAngle)
    ముందుకు_జరుగు( columns * (shortSide + longSide)/Math.sin( degToRad( 90-offsetAngle)))
    ఎడమ_వైపు_తిరుగు( offsetAngle)
    ముందుకు_జరుగు( side)
    ఎడమ_వైపు_తిరుగు(90)
    ముందుకు_జరుగు( shortSide + longSide)
    ఎడమ_వైపు_తిరుగు( 180)
    కుంచికను_కింద_పెట్టు()
    కుంచికను_దాచు()
  }
}
