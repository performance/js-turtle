// Naifah Ajlun -- inspired by the art of Steven Naifeh of the same name
// for more information see https://stevennaifeh.com

// kite has side b and h, square has side s
// b = s + h
// either vary the కోణము or vary the sides
// try calulating the కోణము


function quadrangle( ){
  // start at lower left corner of outer square
  beginShape()
  ముందుకు_జరుగు(longSide)
  కుడి_వైపు_తిరుగు( 180 - angleA)
  ముందుకు_జరుగు(longSide)
  కుడి_వైపు_తిరుగు(90)
  ముందుకు_జరుగు( shortSide)
  కుడి_వైపు_తిరుగు(180 - angleC)
  ముందుకు_జరుగు(shortSide)
  కుడి_వైపు_తిరుగు(90)
  కలమును_పైకి_ఎత్తు()
  ముందుకు_జరుగు( longSide + shortSide)
  కుడి_వైపు_తిరుగు(90)
  కలమును_కింద_పెట్టు()
  fillShape("lightblue")
}

function demo() {
  ఆది_స్థితి()
  wrap(false)
  rows = 4
  columns = 5

  side = 1.7 * Math.min(maxX()/(columns*3+1), maxY()/(rows*3+1))
console.log ("side:"+side)

  // sides and angles of the quadrangle
  shortSide = side  // matter of convenience, could be something else
  longSide = side*2 // matter of convenience
  angleA = 2* radToDeg(Math.atan(shortSide/longSide))
  angleC = 180 - angleA
  offsetAngle = radToDeg( Math.atan( side/(shortSide + longSide)))

  // center this more or less
  goto(-.5 * columns * (shortSide + longSide) + .4 *side, .5 * (rows-2) * (shortSide + longSide) + .4*side)
  ఎడమ_వైపు_తిరుగు( offsetAngle)
  for (var k=0; k<rows; k++) {
    for (var j=0; j<columns; j++) { // across row
      for (var i=0; i<4; i++) { // around inner square
        quadrangle()
      }
      కలమును_పైకి_ఎత్తు()
      కుడి_వైపు_తిరుగు(90)
      ముందుకు_జరుగు( shortSide + longSide)
      కుడి_వైపు_తిరుగు(90)
      ముందుకు_జరుగు( side)
      ఎడమ_వైపు_తిరుగు(180)
      కలమును_కింద_పెట్టు()
    }
    కలమును_పైకి_ఎత్తు()
    ఎడమ_వైపు_తిరుగు( 90- offsetAngle)
    ముందుకు_జరుగు( columns * (shortSide + longSide)/Math.sin( degToRad( 90-offsetAngle)))
    ఎడమ_వైపు_తిరుగు( offsetAngle)
    ముందుకు_జరుగు( side)
    ఎడమ_వైపు_తిరుగు(90)
    ముందుకు_జరుగు( shortSide + longSide)
    ఎడమ_వైపు_తిరుగు( 180)
    కలమును_కింద_పెట్టు()
    తాబేలును_దాచు()
  }
}
