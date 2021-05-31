// Two Square Tessellation -- tile a space using two sizes of squares

// this assumes that the smaller square is 1/2 of the larger square.
// that need not be the case

colors = ["red", "blue", "yellow", "green"]
offsets = [0, -1, -2, -.5, -1.5]

function squ( side, fColor) {
  ఆకారాము_ప్రారంభించు()
  for (var i=0; i<4; i++) {
    ముందుకు_జరుగు( side)
    కుడి_వైపు_తిరుగు( 90)
  }
  ఆకారాము_ముగించు( fColor)
}

function squLeft( side, fColor) {
  ఆకారాము_ప్రారంభించు()
  for (var i=0; i<4; i++) {
    ముందుకు_జరుగు( side)
    ఎడమ_వైపు_తిరుగు( 90)
  }
  ఆకారాము_ముగించు( fColor)
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
  column = కనిష్ఠX()
  row = గరిష్ఠY()
   wrap(false)
  కుడి_వైపు_తిరుగు( 90)

  s = 50
  while( కుంచిక.స్థానము.y > కనిష్ఠY()) {
    స్థానము_మార్చు(కనిష్ఠX()+offsets[ rowCount % offsets.length]*s, గరిష్ఠY()-rowCount*s/2+s/2)
    while( కుంచిక.స్థానము.x < గరిష్ఠX()) {
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
