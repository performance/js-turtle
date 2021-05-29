// Square Tessellation -- tile a space using squares

colors = ["red", "white", "blue","yellow", "green"]

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

// nextColor could be a random function or use less colors
function nextColor() {
  c = colors[ count % colors.length]
  count = count + 1
  return c
}

function demo() {
  ఆది_స్థితి()
  count = 0
  rowOffset = s/3
  wrap(false)
  goto (minX(), maxY())
  కుడి_వైపు_తిరుగు( 90)

  s = 50
  while (turtle.pos.y > minY()) {
    while (turtle.pos.x < maxX()) {
      squ(s, nextColor())
      ముందుకు_జరుగు(s)
    }
    కుడి_వైపు_తిరుగు(90)
    ముందుకు_జరుగు( s)
    కుడి_వైపు_తిరుగు(90)
    వెనుకకు_జరుగు(rowOffset)
    while (turtle.pos.x > minX()) {
      squLeft(s, nextColor())
      ముందుకు_జరుగు(s)
    }
    ఎడమ_వైపు_తిరుగు(90)
    ముందుకు_జరుగు(s)
    ఎడమ_వైపు_తిరుగు(90)
    ముందుకు_జరుగు(rowOffset)
  }
}
