// Basket Weave Tessellation -- tile a space using basket weave pattern

// this assumes that the smaller square is 1/2 of the larger square.
// that need not be the case

small = 20
sSide = 2.5 * small
lSide = sSide + 2 * small

function vRect( sSide, lSide, fColor) {
  ఆకారాము_ప్రారంభించు()
  for (var i=0; i<2; i++) {
    ముందుకు_జరుగు( sSide)
    కుడి_వైపు_తిరుగు(90)
    ముందుకు_జరుగు( lSide)
    కుడి_వైపు_తిరుగు(90)
  }
  ఆకారాము_ముగించు( fColor)
  ముందుకు_జరుగు( sSide)
}

function hRect( sSide, lSide, fColor) {
  ఆకారాము_ప్రారంభించు()
  for (var i=0; i<2; i++) {
    ముందుకు_జరుగు( lSide)
    కుడి_వైపు_తిరుగు(90)
    ముందుకు_జరుగు( sSide)
    కుడి_వైపు_తిరుగు(90)
  }
  ఆకారాము_ముగించు( fColor)
  ముందుకు_జరుగు( lSide)
}

function square ( side, fColor) {
  ఆకారాము_ప్రారంభించు()
  for (var i=0; i<4; i++) {
    ముందుకు_జరుగు( side)
    కుడి_వైపు_తిరుగు(90)
  }
  ఆకారాము_ముగించు( fColor)
  ముందుకు_జరుగు( side)
}


function ప్రదర్శన() {
  ఆది_స్థితి()
  count = 0
  yB = గరిష్ఠY() + small
  xB = కనిష్ఠX()
   చుట్టొద్దు()
  కుడి_వైపు_తిరుగు( 90)

  s = 50
  while( కుంచిక.స్థానము.y > కనిష్ఠY()) {
    స్థానము_మార్చు(xB, yB)
    while( కుంచిక.స్థానము.x < గరిష్ఠX()) {
      కలమును_కింద_పెట్టు()
      square(small, "yellow")
      కలమును_పైకి_ఎత్తు()
      ముందుకు_జరుగు( sSide)
      కలమును_కింద_పెట్టు()
      square(small, "yellow")
      vRect(sSide, lSide, "lightblue")
    }
    yB = yB - small

    స్థానము_మార్చు(xB, yB)
    while( కుంచిక.స్థానము.x < గరిష్ఠX()) {
      కలమును_కింద_పెట్టు()
      hRect(sSide, lSide, "red")
      కలమును_పైకి_ఎత్తు()
      ముందుకు_జరుగు( sSide)
    }
    yB = yB - sSide

    స్థానము_మార్చు(xB, yB)
    while( కుంచిక.స్థానము.x < గరిష్ఠX()) {
      కలమును_కింద_పెట్టు()
      square(small, "yellow")
      vRect(sSide, lSide, "lightblue")
      square(small, "yellow")
      కలమును_పైకి_ఎత్తు()
      ముందుకు_జరుగు( sSide)
      కలమును_కింద_పెట్టు()
    }
    yB = yB - small

    స్థానము_మార్చు(xB- lSide +small, yB)
    while( కుంచిక.స్థానము.x < గరిష్ఠX()) {
      కలమును_కింద_పెట్టు()
      hRect(sSide, lSide, "red")
      కలమును_పైకి_ఎత్తు()
      ముందుకు_జరుగు(sSide)
    }
    yB = yB - sSide
  }
}
