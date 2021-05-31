// Naifeh Mamluk -- inspired by the art of Steven Naifeh of same name
// for more information see https://stevennaifeh.com


function decagon(s, fcolor) {
  // position at base of the decagon  parallel to bottom
  // invariant
  // note:
  //   this shape basically replaces a hexagon,
  //   but only with two sides.
  //   the cutouts are for an outscribed rectangle
  //   2*side by sqrt(3)*side

  ఆకారాము_ప్రారంభించు()
  ముందుకు_జరుగు( s)
  ఎడమ_వైపు_తిరుగు( 120)
  ముందుకు_జరుగు( d1)
  కుడి_వైపు_తిరుగు( 90)
  ముందుకు_జరుగు( d2)
  ఎడమ_వైపు_తిరుగు( 120)
  ముందుకు_జరుగు( d2)
  కుడి_వైపు_తిరుగు(90)
  ముందుకు_జరుగు(d1)
  ఎడమ_వైపు_తిరుగు(120)
  ముందుకు_జరుగు( s)

  ఎడమ_వైపు_తిరుగు( 120)
  ముందుకు_జరుగు( d1)
  కుడి_వైపు_తిరుగు( 90)
  ముందుకు_జరుగు( d2)
  ఎడమ_వైపు_తిరుగు( 120)
  ముందుకు_జరుగు( d2)
  కుడి_వైపు_తిరుగు(90)
  ముందుకు_జరుగు(d1)
  ఎడమ_వైపు_తిరుగు(120)
  ఆకారాము_ముగించు( fcolor)
}

function ప్రదర్శన() {
  ఆది_స్థితి()
   wrap( false)
  కుడి_వైపు_తిరుగు(90)
  side = 40
  side = .25 * Math.min( గరిష్ఠX(), గరిష్ఠY())
  స్థానము_మార్చు(-.5* side, side)

  //derived distances
  d1 = side/2
  d2 = side * Math.sqrt(3)/2

  for( var i=0; i<6; i++) {
    decagon( side, "blue")

    కలమును_పైకి_ఎత్తు()
    ఎడమ_వైపు_తిరుగు(90)
    ముందుకు_జరుగు( Math.sqrt(3) * side)
    ఎడమ_వైపు_తిరుగు(30)
    కలమును_కింద_పెట్టు()

    decagon( side, "blue")

    కలమును_పైకి_ఎత్తు()
    ఎడమ_వైపు_తిరుగు(150)
    ముందుకు_జరుగు( Math.sqrt(3) * side)
    ఎడమ_వైపు_తిరుగు( 90)
    కలమును_కింద_పెట్టు()

    ముందుకు_జరుగు( side)
    కుడి_వైపు_తిరుగు( 60)
  }
  కుంచికను_దాచు()
}
