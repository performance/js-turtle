// Naifeh Saida -- inspired by the art of Steven Naifeh with the same name
// for more information see https://stevennaifeh.com


_విధానము_     square (side) {
  ఆకారము_ప్రారంభించు()
  for (_సర్వత్ర_   i=0; i<4; i++){
    ముందుకు_జరుగు(side)
    కుడి_వైపు_తిరుగు(90)
  }
  ఆకారము_ముగించు("blue")
}


_విధానము_     layer (side, offsetAngle) {
  ఎడమ_వైపు_తిరుగు( offsetAngle)
  for (_సర్వత్ర_   i=0; i<8; i++){
    కుంచికను_పైకి_ఎత్తు()
    ముందుకు_జరుగు( side)
    ఎడమ_వైపు_తిరుగు(45)
    కుంచికను_కింద_పెట్టు()
    square(side)
    కుంచికను_పైకి_ఎత్తు()
    కుడి_వైపు_తిరుగు(45)
    వెనుకకు_జరుగు( side)
    కుడి_వైపు_తిరుగు(45)
  }
  కుడి_వైపు_తిరుగు(offsetAngle)
}


_విధానము_     ప్రదర్శన() {
  ఆది_స్థితి()
   చుట్టొద్దు()
  side = 14
  side = .033 * Math.min( గరిష్ఠX(), గరిష్ఠY())
  factor = Math.sqrt(2 + Math.sqrt( 2))
  //    side, వ్యాసార్థము, offsetAngle
  layer(      side, 0)
  side = side * factor
  layer( side, 22.5)
  side = side * factor
  layer( side, 0)
  side = side * factor
  layer( side,   22.5)
  side = side * factor
  layer( side,   0)
  కుంచికను_దాచు()
}
