// Naifeh Mizen Six -- inspired by the art of Steven Naifeh of the same name
// for more information see https://stevennaifeh.com

function v (side, fColor) {
  // assume pointing up at upper left corner
  // invariant
  if (fColor != "") {
    ఆకారాము_ప్రారంభించు()
  }
  ఎడమ_వైపు_తిరుగు( 30)
  ముందుకు_జరుగు( 3*side)
  కుడి_వైపు_తిరుగు( 120)
  ముందుకు_జరుగు( side)
  కుడి_వైపు_తిరుగు(60)
  ముందుకు_జరుగు(side)
  ఎడమ_వైపు_తిరుగు( 120)
  ముందుకు_జరుగు( side)
  కుడి_వైపు_తిరుగు(60)
  ముందుకు_జరుగు( side)
  కుడి_వైపు_తిరుగు( 120)
  ముందుకు_జరుగు( 3*side)
  కుడి_వైపు_తిరుగు(150)
  if (fColor != "") {
    ఆకారాము_ముగించు(fColor)
  }
}


function mizen( side, lColor, fColor) {
  // assume pointing up at upper left corner
  // ends up rotated 120 CW at same point
  రంగు_మార్చు(lColor)
  కుడి_వైపు_తిరుగు(120)
  for (var i=0; i<6; i++) {
    కలమును_కింద_పెట్టు()
    v( side, fColor)
    కలమును_పైకి_ఎత్తు()
    కుడి_వైపు_తిరుగు(30)
    ముందుకు_జరుగు( side)
    ఎడమ_వైపు_తిరుగు( 60)
    ముందుకు_జరుగు( 2*side)
    ఎడమ_వైపు_తిరుగు(30)
    కలమును_కింద_పెట్టు()
    v( side, fColor)

    కలమును_పైకి_ఎత్తు()
    కుడి_వైపు_తిరుగు(30)
    ముందుకు_జరుగు( 2*side)
    కుడి_వైపు_తిరుగు( 150)
    కలమును_కింద_పెట్టు()
    v( side, fColor)

    కలమును_పైకి_ఎత్తు()
    కుడి_వైపు_తిరుగు(30)
    ముందుకు_జరుగు( side)
    కుడి_వైపు_తిరుగు(120)
    ముందుకు_జరుగు( 4*side)
    కుడి_వైపు_తిరుగు(150)
    కలమును_కింద_పెట్టు()
  }
}



function mizen6(side) {
  కలమును_పైకి_ఎత్తు()
  for (var j=0; j<6; j++) {
    mx = కుంచిక.స్థానము.x
    my = కుంచిక.స్థానము.y
    ma = కుంచిక.కోణము
    వెడల్పు(0)
    mizen( side, "white", "blue")

    // do it again for the border lines
    స్థానము_మార్చు( mx, my)
    కోణము( radToDeg( ma))
    వెడల్పు(.1 * side)
    mizen( side, "white", "")

    కలమును_పైకి_ఎత్తు()
    ఎడమ_వైపు_తిరుగు(30)
    ముందుకు_జరుగు(13 * side)
    ఎడమ_వైపు_తిరుగు(120)
    ముందుకు_జరుగు( 3*side)
    కుడి_వైపు_తిరుగు(90)
    కలమును_కింద_పెట్టు()
  }
  కుంచికను_దాచు()
}


function ప్రదర్శన() {
  ఆది_స్థితి()
  side = .08 * Math.min( గరిష్ఠX(), గరిష్ఠY())
  //center canvas more or less
  స్థానము_మార్చు(-8*side, 9*side)
  mizen6( side)
}
