// Two Square Tessellation -- tile a space using two sizes of squares

// this assumes that the smaller square is 1/2 of the larger square.
// that need not be the case

colors = ["red", "blue", "yellow", "green"]
offsets = [0, -1, -2, -.5, -1.5]

function squ( side, fColor) {
  beginShape()
  for (var i=0; i<4; i++) {
    ముందుకు_జరుగు( side)
    కుడి_వైపు_తిరుగు( 90)
  }
  fillShape( fColor)
}

function squLeft( side, fColor) {
  beginShape()
  for (var i=0; i<4; i++) {
    ముందుకు_జరుగు( side)
    ఎడమ_వైపు_తిరుగు( 90)
  }
  fillShape( fColor)
}

function nextColor() {
  c = colors[ count % colors.length]
  count = count + 1
  return c
}

function demo() {
  ఆది_స్థితి()
  count = 0
  rowCount = 0
  column = minX()
  row = maxY()
  wrap(false)
  కుడి_వైపు_తిరుగు( 90)

  s = 50
  while( turtle.pos.y > minY()) {
    goto(minX()+offsets[ rowCount % offsets.length]*s, maxY()-rowCount*s/2+s/2)
    while( turtle.pos.x < maxX()) {
      కలమును_కింద_పెట్టు()
      squ(s, nextColor())
      కలమును_పైకి_ఎత్తు()
      ముందుకు_జరుగు(s*2)
      కలమును_కింద_పెట్టు()
      squ( s/2, nextColor())
      ముందుకు_జరుగు( s/2)
    }
    rowCount = rowCount + 1
  }
}
