// Triangle Tesselation -- tile a space using triangles

colors = ["red", "white", "blue", "yellow", "green"]

function triUp( side, fColor) {
  beginShape()
  for (var i=0; i<3; i++) {
    ముందుకు_జరుగు( side)
    ఎడమ_వైపు_తిరుగు( 120)
  }
  fillShape( fColor)
}

function triDown( side, fColor) {
  beginShape()
  for (var i=0; i<3; i++) {
    ముందుకు_జరుగు( side)
    కుడి_వైపు_తిరుగు( 120)
  }
  fillShape( fColor)
}

// nextColor could be completely random, if desired
function nextColor() { 
  c = colors[ count % colors.length]
  count = count + 1
  return c
}

function demo() {
  ఆది_స్థితి()
  count = 0
  rowOffset = s/3 // offset between rows
  wrap(false)
  goto (minX(), maxY())
  కుడి_వైపు_తిరుగు( 90)

  s = 50
  while (turtle.pos.y > minY()) {
  while (turtle.pos.x < maxX()) {
    triDown(s, nextColor())
    ముందుకు_జరుగు(s)
  }
  కుడి_వైపు_తిరుగు(120)
  ముందుకు_జరుగు( s)
  కుడి_వైపు_తిరుగు(60)
  while (turtle.pos.x > minX()) {
    triDown(s, nextColor())
    ముందుకు_జరుగు(s)
  }
  ఎడమ_వైపు_తిరుగు(180)
  ముందుకు_జరుగు(rowOffset)
  }
}
