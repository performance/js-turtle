// Naifeh Saida -- inspired by the art of Steven Naifeh with the same name
// for more information see https://stevennaifeh.com


function square (side) {
  beginShape()
  for (var i=0; i<4; i++){
    ముందుకు_జరుగు(side)
    కుడి_వైపు_తిరుగు(90)
  }
  fillShape("blue")
}


function layer (side, offsetAngle) {
  ఎడమ_వైపు_తిరుగు( offsetAngle)
  for (var i=0; i<8; i++){
    కలమును_పైకి_ఎత్తు()
    ముందుకు_జరుగు( side)
    ఎడమ_వైపు_తిరుగు(45)
    కలమును_కింద_పెట్టు()
    square(side)
    కలమును_పైకి_ఎత్తు()
    కుడి_వైపు_తిరుగు(45)
    వెనుకకు_జరుగు( side)
    కుడి_వైపు_తిరుగు(45)
  }
  కుడి_వైపు_తిరుగు(offsetAngle)
}


function demo() {
  reset()
  wrap(false)
  side = 14
  side = .033 * Math.min( maxX(), maxY())
  factor = Math.sqrt(2 + Math.sqrt( 2))
  //    side, radius, offsetAngle
  layer(      side, 0)
  side = side * factor
  layer( side, 22.5)
  side = side * factor
  layer( side, 0)
  side = side * factor
  layer( side,   22.5)
  side = side * factor
  layer( side,   0)
  తాబేలును_దాచు()
}
