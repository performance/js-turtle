// Herring Bone Tessellation -- tile a space using a herring bone brick laying pattern

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
  yB = maxY() + sSide
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
      vRect(sSide, lSide, "darkred")
      కలమును_పైకి_ఎత్తు()
      ముందుకు_జరుగు( sSide)
    }
    yB = yB - sSide

    goto (xB - lSide/2, yB)
    while( turtle.pos.x < maxX()) {
      కలమును_కింద_పెట్టు()
      hRect(sSide, lSide, "darkred")
      vRect(sSide, lSide, "darkred")
      కలమును_పైకి_ఎత్తు()
      ముందుకు_జరుగు( sSide)
    }
    yB = yB - sSide

    goto (xB - lSide, yB)
    while( turtle.pos.x < maxX()) {
      కలమును_కింద_పెట్టు()
      hRect(sSide, lSide, "darkred")
      vRect(sSide, lSide, "darkred")
      కలమును_పైకి_ఎత్తు()
      ముందుకు_జరుగు( sSide)
    }
    yB = yB - sSide

    goto (xB - 3/2 * lSide, yB)
    while( turtle.pos.x < maxX()) {
      కలమును_కింద_పెట్టు()
      hRect(sSide, lSide, "darkred")
      vRect(sSide, lSide, "darkred")
      కలమును_పైకి_ఎత్తు()
      ముందుకు_జరుగు( sSide)
    }
    yB = yB - sSide
  }
}
