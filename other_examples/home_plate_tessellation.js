// Home Plate Tessellation -- tile a space using simple pentagon
//
// this pattern could be the same as a hexagonal pattern with the hexagons
// split into two halves
//
// For more pentagonal tessellations see wikipedia

colors = ["red", "white", "blue", "yellow", "green"]

_విధానము_     pentUp( side, fColor) {
  ఆకారము_ప్రారంభించు()
  ముందుకు_జరుగు( side)
  ఎడమ_వైపు_తిరుగు( 90)
  ముందుకు_జరుగు( side/2)
  ఎడమ_వైపు_తిరుగు( 45)
  ముందుకు_జరుగు( side * .5 * Math.sqrt(2))
  ఎడమ_వైపు_తిరుగు( 90)
  ముందుకు_జరుగు( side * .5 * Math.sqrt(2))
  ఎడమ_వైపు_తిరుగు( 45)
  ముందుకు_జరుగు( side/2)
  ఎడమ_వైపు_తిరుగు(90)
  ఆకారము_ముగించు( fColor)
}


_విధానము_     pentDown( side, fColor) {
  ఆకారము_ప్రారంభించు()
  ముందుకు_జరుగు( side)
  కుడి_వైపు_తిరుగు( 90)
  ముందుకు_జరుగు( side/2)
  కుడి_వైపు_తిరుగు( 45)
  ముందుకు_జరుగు( side * .5 * Math.sqrt(2))
  కుడి_వైపు_తిరుగు( 90)
  ముందుకు_జరుగు( side * .5 * Math.sqrt(2))
  కుడి_వైపు_తిరుగు( 45)
  ముందుకు_జరుగు( side/2)
  కుడి_వైపు_తిరుగు(90)
  ఆకారము_ముగించు( fColor)
}


// nextColor could be completely random, if desired
_విధానము_     nextColor() { 
  c = colors[ count % colors.length]
  count = count + 1
  _ఫలము_  c
}

_విధానము_     ప్రదర్శన() {
  ఆది_స్థితి()
  count = 0
  s = 50
  rowOffset = s/3 // offset between rows
   చుట్టొద్దు()
  స్థానము_మార్చు(కనిష్ఠX(), గరిష్ఠY())
  కుడి_వైపు_తిరుగు( 90)

  s = 50
  while (కుంచిక.స్థానము.y > కనిష్ఠY()) {
  while (కుంచిక.స్థానము.x < గరిష్ఠX()) {
    pentDown(s, nextColor())
    ముందుకు_జరుగు(s)
  }
  కుడి_వైపు_తిరుగు(90)
  ముందుకు_జరుగు( 3/2*s)
  కుడి_వైపు_తిరుగు(90)
  వెనుకకు_జరుగు(s/2)
  while (కుంచిక.స్థానము.x > కనిష్ఠX()) {
    pentDown(s, nextColor())
    ముందుకు_జరుగు(s)
  }
  ఎడమ_వైపు_తిరుగు(180)
  }
}
