// Naifeh Saida Inverse -- draws the inverse of the Steven Naifeh Saida sculpture
// for more information see https://stevennaifeh.com


_విధానము_     antilayer (side, innerSide, offset) {
  ఎడమ_వైపు_తిరుగు( offset)
  for (_సర్వత్ర_   i=0; i<8; i++){
    కుంచికను_పైకి_ఎత్తు()
    ముందుకు_జరుగు( side)
    కుంచికను_కింద_పెట్టు()
  
    ఆకారము_ప్రారంభించు()
    ఎడమ_వైపు_తిరుగు(45 + 22.5)
    ముందుకు_జరుగు(innerSide)
    ఎడమ_వైపు_తిరుగు(90)
    ముందుకు_జరుగు(innerSide)
    ఎడమ_వైపు_తిరుగు(180)
    ముందుకు_జరుగు(innerSide)
    కుడి_వైపు_తిరుగు(90)
    ముందుకు_జరుగు(innerSide)
    ఎడమ_వైపు_తిరుగు(180-22.5)

    ముందుకు_జరుగు(side)
    ఎడమ_వైపు_తిరుగు(135)
    ముందుకు_జరుగు( side)
    ఎడమ_వైపు_తిరుగు(45)
    ఆకారము_ముగించు("నలుపు")
    కుంచికను_పైకి_ఎత్తు()
    ముందుకు_జరుగు( side)
    కుంచికను_కింద_పెట్టు()
    ఎడమ_వైపు_తిరుగు(180)
  }
  కుడి_వైపు_తిరుగు(offset)
}

_విధానము_     ప్రదర్శన() {
  ఆది_స్థితి()
   చుట్టొద్దు()
  కుంచికను_దాచు()
  side = .023 * Math.min( గరిష్ఠX(), గరిష్ఠY())

  factor = Math.sqrt( 2+ Math.sqrt(2))
  //side = 10
  outside = factor * side
  antilayer( outside, side, 22.5)
  side = outside
  outside = factor * side
  antilayer( outside, side, 0)
  side = outside
  outside = factor * side
  antilayer( outside, side, 22.5)
  side = outside
  outside = factor * side
  antilayer( outside, side, 0)
  side = outside
  outside = factor * side
  antilayer( outside, side, 22.5)
}
