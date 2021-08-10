// Rhombic Star Tessellation -- a star tessellation using rhombus

colors = ["red", "white", "blue", "yellow", "green"]
numColors = colors.length

_విధానము_     rh(side, fillColor) {
  ఆకారము_ప్రారంభించు()
  ముందుకు_జరుగు( side)
  ఎడమ_వైపు_తిరుగు( 45)
  ముందుకు_జరుగు( side)
  ఎడమ_వైపు_తిరుగు( 180-45)
  ముందుకు_జరుగు( side)
  ఎడమ_వైపు_తిరుగు( 45)
  ముందుకు_జరుగు( side)
  ఎడమ_వైపు_తిరుగు( 180-45)
  ఆకారము_ముగించు(fillColor)
}

_విధానము_     sideBySide( count, side, fillColor) {
  for( _సర్వత్ర_   j=0; j<count; j++) {
    కుంచికను_కింద_పెట్టు()
    rh( side, fillColor)
    కుంచికను_పైకి_ఎత్తు()
    కుడి_వైపు_తిరుగు( (180-45)/2)
    ముందుకు_జరుగు( 2* side * Math.sin( degToRad( 22.5)))
    ఎడమ_వైపు_తిరుగు( ( 180-45)/2)
  }
  ఎడమ_వైపు_తిరుగు( ( 180-45)/2 + 45)
  ముందుకు_జరుగు( 2 * count * side * Math.sin( degToRad( 22.5)))
  కుడి_వైపు_తిరుగు( (180-45)/2)
}

_విధానము_     cent(side, count) {
  for( _సర్వత్ర_   i=0; i<8; i++) { // draw the center
    rh( side, colors[0%numColors])
    ఎడమ_వైపు_తిరుగు( 45)
  }

  for( _సర్వత్ర_   i=0; i<8; i++) { // draw the second tier
    ముందుకు_జరుగు( side)
    rh( side, colors[1%numColors])
    కుడి_వైపు_తిరుగు( 45)
    rh( side, colors[1%numColors])
    ఎడమ_వైపు_తిరుగు(45)
    వెనుకకు_జరుగు( side)
    ఎడమ_వైపు_తిరుగు(45)
  }

  for( _సర్వత్ర_   j=2; j<count; j++) { // draw the other tiers
    for( _సర్వత్ర_   i=0; i<8; i++) {
      ముందుకు_జరుగు( j*side)
      కుంచికను_కింద_పెట్టు()
      rh( side, colors[j%numColors])
      కుడి_వైపు_తిరుగు( 45)
      sideBySide(j, side, colors[j%numColors])
      వెనుకకు_జరుగు( j*side)
      ఎడమ_వైపు_తిరుగు(45)
    }
  }
}

// nextColor could be completely random, if desired
_విధానము_     nextColor() { 
  c = colors[ count % color.length]
  count = count + 1
  _ఫలము_  c
}

_విధానము_     ప్రదర్శన() {
  ఆది_స్థితి()
   చుట్టొద్దు()
  side = .075 * Math.min(గరిష్ఠX(), గరిష్ఠY())
  cent( side, 12)
  కుంచికను_దాచు()
}
