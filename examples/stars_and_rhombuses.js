// Stars and Rhombuses -- tesselation found on a wall paper pattern

function quadRhom( side) {
  for( var i=0; i<4; i++) {
    for ( var j=0; j<4; j++) {
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

function demo() {
  ఆది_స్థితి()
   చుట్టు( false)
  కుంచికను_దాచు()
  ang = 60
  side = 20
  xoffset = 0
  chord = 2* side * Math.cos(degToRad(ang/2))

  for (var fy=గరిష్ఠY(); fy>కనిష్ఠY(); fy=fy - chord) {   
    for (var fx=కనిష్ఠX(); fx<గరిష్ఠX(); fx=fx + 2*chord) {
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
