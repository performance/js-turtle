// Stars and Rhombuses -- tesselation found on a wall paper pattern

_విధానము_     quadRhom( side) {
  for( _సర్వత్ర_   i=0; i<4; i++) {
    for ( _సర్వత్ర_   j=0; j<4; j++) {
      ముందుకు_జరుగు( side)
      కుడి_వైపు_తిరుగు( ang)
      ముందుకు_జరుగు( side)
      కుడి_వైపు_తిరుగు( 180- ang)
      ముందుకు_జరుగు( side)
      కుడి_వైపు_తిరుగు( ang)
      ముందుకు_జరుగు( side)
      కుడి_వైపు_తిరుగు( 180- ang)
    }
    కుడి_వైపు_తిరుగు( 90)
  }
}

_విధానము_     ప్రదర్శన() {
  ఆది_స్థితి()
   చుట్టొద్దు()
  కుంచికను_దాచు()
  ang = 60
  side = 20
  xoffset = 0
  chord = 2* side * Math.cos(degToRad(ang/2))

  for (_సర్వత్ర_   fy=గరిష్ఠY(); fy>కనిష్ఠY(); fy=fy - chord) {   
    for (_సర్వత్ర_   fx=కనిష్ఠX(); fx<గరిష్ఠX(); fx=fx + 2*chord) {
      స్థానము_మార్చు( fx+xoffset, fy)
      కోణము( 90 - ang/2)
      quadRhom( side)
    }
    if (xoffset>0) {
      xoffset = 0
    } else {
      xoffset = chord
    }
  }
}
