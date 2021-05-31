// Home Plate Tessellation -- tile a space using simple pentagon
//
// this pattern could be the same as a hexagonal pattern with the hexagons
// split into two halves
//
// For more pentagonal tessellations see wikipedia

colors = ["red", "white", "blue", "yellow", "green"]

function pentUp( side, fColor) {
  ఆకారాము_ప్రారంభించు()
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
  ఆకారాము_ముగించు( fColor)
}


function pentDown( side, fColor) {
  ఆకారాము_ప్రారంభించు()
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
  ఆకారాము_ముగించు( fColor)
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
  s = 50
  rowOffset = s/3 // offset between rows
   wrap(false)
  స్థానము_మార్చు(కనిష్ఠX(), గరిష్ఠY())
  కుడి_వైపు_తిరుగు( 90)

  s = 50
  while (కుంచిక.pos.y > కనిష్ఠY()) {
  while (కుంచిక.pos.x < గరిష్ఠX()) {
    pentDown(s, nextColor())
    ముందుకు_జరుగు(s)
  }
  కుడి_వైపు_తిరుగు(90)
  ముందుకు_జరుగు( 3/2*s)
  కుడి_వైపు_తిరుగు(90)
  వెనుకకు_జరుగు(s/2)
  while (కుంచిక.pos.x > కనిష్ఠX()) {
    pentDown(s, nextColor())
    ముందుకు_జరుగు(s)
  }
  ఎడమ_వైపు_తిరుగు(180)
  }
}
