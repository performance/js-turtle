// Brick Tessellation -- tile a space using a basic brick laying pattern

sSide = 15
lSide = 2* sSide 

function vRect( sSide, lSide, fColor) {
  beginShape()
  for (var i=0; i<2; i++) {
    ముందుకు_జరుగు( sSide)
    కుడి_వైపు_తిరుగు(90)
    ముందుకు_జరుగు( lSide)
    కుడి_వైపు_తిరుగు(90)
  }
  fillShape( fColor)
  ముందుకు_జరుగు( sSide)
}

function hRect( sSide, lSide, fColor) {
  beginShape()
  for (var i=0; i<2; i++) {
    ముందుకు_జరుగు( lSide)
    కుడి_వైపు_తిరుగు(90)
    ముందుకు_జరుగు( sSide)
    కుడి_వైపు_తిరుగు(90)
  }
  fillShape( fColor)
  ముందుకు_జరుగు( lSide)
}

function demo() {
  reset()
  count = 0
  yB = maxY()
  xB = minX()
  wrap(false)
  కుడి_వైపు_తిరుగు( 90)
  color("white")

  s = 50
  while( turtle.pos.y > minY()) {
    goto (xB, yB)
    while( turtle.pos.x < maxX()) {
      కలమును_కింద_పెట్టు()
      hRect(sSide, lSide, "darkred")
      కలమును_పైకి_ఎత్తు()
    }
    yB = yB - sSide

    goto (xB - lSide/2, yB)
    while( turtle.pos.x < maxX()) {
      కలమును_కింద_పెట్టు()
      hRect(sSide, lSide, "darkred")
      కలమును_పైకి_ఎత్తు()
    }
    yB = yB - sSide
  }
}
