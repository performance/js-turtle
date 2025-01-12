// Connected Points -- points connected by spikeys

//draw the radials
_విధానము_     drawRadials(side) {
  for (_సర్వత్ర_   i=0; i<16; i++) {
    స్థానము_మార్చు(0,0)
    కోణము(i/16 * 360)
    ముందుకు_జరుగు( size)
  }
}

_విధానము_     spikey ( points, revs, వ్యాసార్థము, x, y, head) {
  కుంచికను_పైకి_ఎత్తు()
  స్థానము_మార్చు(x, y)
  దిశ_మార్చు(head)
  ముందుకు_జరుగు(వ్యాసార్థము)
  _సర్వత్ర_   turnAngle = 360 * revs/points
  _సర్వత్ర_   angleA = ( 180 - turnAngle)/2
  _సర్వత్ర_   stroke = 2 * వ్యాసార్థము * Math.cos( degToRad( angleA))
  కుడి_వైపు_తిరుగు( 180 - angleA)
  కుంచికను_కింద_పెట్టు()

  for( _సర్వత్ర_   i = 0; i < points; i = i + 1) { //>
    ముందుకు_జరుగు( stroke)
    కుడి_వైపు_తిరుగు( turnAngle)
  }
}



_విధానము_     ప్రదర్శన() {
  ఆది_స్థితి()
   చుట్టొద్దు()
  size = .9* Math.min( గరిష్ఠX(), గరిష్ఠY())
  //size=200
  inr = .33* size
  వెడల్పు(.5)
  spikey( 16, 2, size, 0, 0, 0)
  spikey( 16, 2, size, 0, 0, 360/16)
  వెడల్పు(.25)
  spikey( 16, 4, size, 0, 0, 0)
  spikey( 16, 4, size, 0, 0, 360/16)
  spikey( 16, 4, size, 0, 0, 2*360/16)
  spikey( 16, 4, size, 0, 0, 3*360/16)
  spikey( 16, 6, size, 0, 0, 0)
  spikey( 16, 6, size, 0, 0, 360/16)
  వెడల్పు(.7)
  spikey( 8, 3, inr, 0, 0, 0)
  spikey( 8, 1, inr, 0, 0, 0)
  వెడల్పు(1)
  drawRadials( size)
  స్థానము_మార్చు(0,0)
  వృత్తము( inr)
  కుంచికను_దాచు()
}
