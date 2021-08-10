// Naifeh Petra -- inspired by the art of Steven Naifeh of the same name
// for more information see https://stevennaifeh.com

/* want to do this in a rasterized way
row of backslashs
row of dashs
row of slashes

This does not support using a wider pen width.
*/

_విధానము_     backslash (fColor) {
  // assume pointing up at upper left corner
  // invariant
  ఆకారము_ప్రారంభించు()
  కుడి_వైపు_తిరుగు( 150)
  ముందుకు_జరుగు( 2*size)
  ఎడమ_వైపు_తిరుగు( 120)
  ముందుకు_జరుగు( size)
  ఎడమ_వైపు_తిరుగు( 60)
  ముందుకు_జరుగు( 2* size)
  ఎడమ_వైపు_తిరుగు( 120)
  ముందుకు_జరుగు( size)
  కుడి_వైపు_తిరుగు( 150)
  ఆకారము_ముగించు(fColor)
}

_విధానము_     slash (fColor) {
  // assume pointing up at upper left corner
  // invariant
  ఆకారము_ప్రారంభించు()
  ఎడమ_వైపు_తిరుగు( 150)
  ముందుకు_జరుగు( 2*size)
  ఎడమ_వైపు_తిరుగు( 120)
  ముందుకు_జరుగు( size)
  ఎడమ_వైపు_తిరుగు( 60)
  ముందుకు_జరుగు( 2* size)
  ఎడమ_వైపు_తిరుగు( 120)
  ముందుకు_జరుగు( size)
  కుడి_వైపు_తిరుగు( 90)
  ఆకారము_ముగించు(fColor)
}

_విధానము_     dash () {
  // assume pointing up at upper left corner
  // invariant
  ఆకారము_ప్రారంభించు()
  కుడి_వైపు_తిరుగు( 150)
  ముందుకు_జరుగు( size)
  ఎడమ_వైపు_తిరుగు( 60)
  ముందుకు_జరుగు( 2*size)
  ఎడమ_వైపు_తిరుగు( 120)
  ముందుకు_జరుగు( size)
  ఎడమ_వైపు_తిరుగు( 60)
  ముందుకు_జరుగు( 2*size)
  కుడి_వైపు_తిరుగు( 90)
  ఆకారము_ముగించు(fColor)
}

_విధానము_     dashBackslashes(count, mode, fColor) {
  // assume pointing up at upper left corner
  // mode = 0 normal; mode =1 skip first
  // invariant
  backup = 0
  for (_సర్వత్ర_   i=0; i<count; i++) {
    కుంచికను_కింద_పెట్టు()
    if (i % 2 == 0) {
      if (mode == 0 || i != 0){
        dash()
      }
      కుంచికను_పైకి_ఎత్తు()
      కుడి_వైపు_తిరుగు(90)
      ముందుకు_జరుగు( 2*size)
      ఎడమ_వైపు_తిరుగు(90)
      కుంచికను_కింద_పెట్టు()
      backup = backup + 2
    } else {
      backslash(fColor)
      కుంచికను_పైకి_ఎత్తు()
      కుడి_వైపు_తిరుగు(90)
      ముందుకు_జరుగు( size)
      ఎడమ_వైపు_తిరుగు(90)
      కుంచికను_కింద_పెట్టు()
      backup = backup + 1
    }
  }
  కుంచికను_పైకి_ఎత్తు()
  ఎడమ_వైపు_తిరుగు(90)
  ముందుకు_జరుగు(backup * size)
  కుడి_వైపు_తిరుగు(90)
  కుంచికను_కింద_పెట్టు()
}


_విధానము_     slashes(count, fColor) {
  // assume pointing up at upper left corner
  // invariant
  for (_సర్వత్ర_   i=0; i<count; i++) {
    slash( fColor)
    కుంచికను_పైకి_ఎత్తు()
    కుడి_వైపు_తిరుగు(90)
    ముందుకు_జరుగు( 3*size)
    ఎడమ_వైపు_తిరుగు(90)
    కుంచికను_కింద_పెట్టు()
  }
  కుంచికను_పైకి_ఎత్తు()
  ఎడమ_వైపు_తిరుగు(90)
  ముందుకు_జరుగు(count * 3 * size)
  కుడి_వైపు_తిరుగు(90)
  కుంచికను_కింద_పెట్టు()
  కుంచికను_పైకి_ఎత్తు()
}


_విధానము_     ప్రదర్శన() {
  ఆది_స్థితి()
  fColor = "blue"
  size = .17 * Math.min( గరిష్ఠX(), గరిష్ఠY())
  రంగు_మార్చు( తెలుపు )
  //వెడల్పు(.1* size)

  //center canvas more or less
  pointUp = false
  if (pointUp) {
    కోణము(90)
    స్థానము_మార్చు(4*size, 3.5*size)
  } else {
    కోణము(-60)
    స్థానము_మార్చు(-5.5*size, -1*size)
  }
  కుంచికను_దాచు()

  dashBackslashes(4, 0, fColor)

  కుడి_వైపు_తిరుగు(150)
  ముందుకు_జరుగు( size)
  ఎడమ_వైపు_తిరుగు(150)
  slashes( 3, fColor)

  ఎడమ_వైపు_తిరుగు(150)
  ముందుకు_జరుగు(2*size)
  కుడి_వైపు_తిరుగు(60)
  ముందుకు_జరుగు(size)
  కుడి_వైపు_తిరుగు(90)
  dashBackslashes(6, 0, fColor)

  కుడి_వైపు_తిరుగు(150)
  ముందుకు_జరుగు(size)
  ఎడమ_వైపు_తిరుగు(150)
  slashes(4, fColor)

  ఎడమ_వైపు_తిరుగు(150)
  ముందుకు_జరుగు(2*size)
  కుడి_వైపు_తిరుగు(60)
  ముందుకు_జరుగు(size)
  కుడి_వైపు_తిరుగు(90)
  dashBackslashes(7, 1, fColor)

  కుంచికను_పైకి_ఎత్తు()
  కుడి_వైపు_తిరుగు(90)
  ముందుకు_జరుగు(3*size)
  కుడి_వైపు_తిరుగు( 60)
  ముందుకు_జరుగు( size)
  ఎడమ_వైపు_తిరుగు(150)
  కుంచికను_కింద_పెట్టు()
  slashes(3, fColor)
  
  ఎడమ_వైపు_తిరుగు(150)
  ముందుకు_జరుగు(2*size)
  కుడి_వైపు_తిరుగు(60)
  ముందుకు_జరుగు(size)
  కుడి_వైపు_తిరుగు(90)
  dashBackslashes(5, 1, fColor)
}
