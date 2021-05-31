// Square Tessellation -- tile a space using squares

colors = ["red", "white", "blue","yellow", "green"]

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
   చుట్టు(false)
  స్థానము_మార్చు(కనిష్ఠX(), గరిష్ఠY())
  కుడి_వైపు_తిరుగు( 90)

  s = 50
  while (కుంచిక.pos.y > కనిష్ఠY()) {
    while (కుంచిక.pos.x < గరిష్ఠX()) {
      squ(s, nextColor())
      ముందుకు_జరుగు(s)
    }
    కుడి_వైపు_తిరుగు(90)
    ముందుకు_జరుగు( s)
    కుడి_వైపు_తిరుగు(90)
    వెనుకకు_జరుగు(rowOffset)
    while (కుంచిక.pos.x > కనిష్ఠX()) {
      squLeft(s, nextColor())
      ముందుకు_జరుగు(s)
    }
    ఎడమ_వైపు_తిరుగు(90)
    ముందుకు_జరుగు(s)
    ఎడమ_వైపు_తిరుగు(90)
    ముందుకు_జరుగు(rowOffset)
  }
}
