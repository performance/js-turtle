// Triangle Tesselation -- tile a space using triangles

colors = ["red", "white", "blue", "yellow", "green"]

function triUp( side, fColor) {
  ఆకారము_ప్రారంభించు()
  for (var i=0; i<3; i++) {
    ముందుకు_జరుగు( side)
    ఎడమ_వైపు_తిరుగు( 120)
  }
  ఆకారము_ముగించు( fColor)
}

function triDown( side, fColor) {
  ఆకారము_ప్రారంభించు()
  for (var i=0; i<3; i++) {
    ముందుకు_జరుగు( side)
    కుడి_వైపు_తిరుగు( 120)
  }
  ఆకారము_ముగించు( fColor)
}

// nextColor could be completely random, if desired
function nextColor() { 
  c = colors[ count % colors.length]
  count = count + 1
  return c
}

function ప్రదర్శన() {
  ఆది_స్థితి()
  count = 0
  rowOffset = s/3 // offset between rows
   చుట్టొద్దు()
  స్థానము_మార్చు(కనిష్ఠX(), గరిష్ఠY())
  కుడి_వైపు_తిరుగు( 90)

  s = 50
  while (కుంచిక.స్థానము.y > కనిష్ఠY()) {
  while (కుంచిక.స్థానము.x < గరిష్ఠX()) {
    triDown(s, nextColor())
    ముందుకు_జరుగు(s)
  }
  కుడి_వైపు_తిరుగు(120)
  ముందుకు_జరుగు( s)
  కుడి_వైపు_తిరుగు(60)
  while (కుంచిక.స్థానము.x > కనిష్ఠX()) {
    triDown(s, nextColor())
    ముందుకు_జరుగు(s)
  }
  ఎడమ_వైపు_తిరుగు(180)
  ముందుకు_జరుగు(rowOffset)
  }
}
