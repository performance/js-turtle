// Pentahex -- game pieces consisting of five hexagons in a 10x11 field

// This sets up a pseudo interpreter. Each move is a కుడి_వైపు_తిరుగు(r) or ఎడమ_వైపు_తిరుగు(l)
// token. Each piece consists of a set of such moves to from the outline
// of the piece.

_విధానము_     r() {
  ముందుకు_జరుగు( side)
  కుడి_వైపు_తిరుగు( 60)
}

_విధానము_     l() {
  ముందుకు_జరుగు( side)
  ఎడమ_వైపు_తిరుగు( 60)
}

  I5=[l,l,r,l,r,l,r,l,r,l,l,l,l,r,l,r,l,r,l,r,l,l]
  D5=[l,l,r,l,r,l,l,l,r,l,l,r,l,l,r,l]
  T5=[l,l,r,r,l,r,l,l,l,l,r,r,l,l,l,r,l,r,l,l]
  N5=[l,l,r,r,l,l,r,l,r,l,l,l,l,r,l,r,r,l,l,r,l,l]
  P5=[l,l,r,l,r,r,l,l,l,r,l,l,l,r,l,r,l,r,l,l]
  E5=[l,l,r,r,l,l,l,r,r,l,l,l,l,r,l,r,l,r,l,l]
  G5=[l,l,r,r,l,l,r,l,l,r,l,l,l,l,r,r,r,l,l,r,l,l]
  A5=[l,r,l,l,l,r,r,l,l,l,l,r,r,l,l,l,r,l]
  J5=[l,r,l,l,r,l,r,l,r,l,l,l,l,r,l,r,l,r,r,l,l,l]
  Y5=[l,l,r,l,r,r,l,l,l,l,r,r,l,l,l,l,r,r,l,r,l,l]
  X5=[l,l,r,r,l,l,l,r,l,l,l,r,r,l,l,l,r,l]
  y5=[l,l,r,r,l,l,l,l,r,r,r,l,l,l,l,r,l,l,r,r,l,l]
  u5=[l,l,r,l,r,l,l,r,l,l,l,l,r,r,r,l,l,l,r,l]
  V5=[l,l,r,l,r,l,l,l,l,r,r,r,l,l,l,l,r,l,r,l]
  U5=[l,r,l,l,r,l,l,l,l,r,r,r,r,l,l,l,l,r,l,l,r,l]
  C5=[l,l,l,r,r,l,r,r,l,l,l,l,r,l,l,r,l,r,l,l,r,l]
  q5=[l,l,r,r,l,r,l,l,l,r,l,l,l,r,r,l,l,r,l,l]
  r5=[l,l,r,l,r,r,r,l,l,l,l,r,l,l,r,l,l,r,l,r,l,l]
  L5=[l,r,l,r,l,l,l,l,r,l,r,r,l,r,l,l,l,l,r,l,r,l]
  W5=[l,l,r,r,l,l,r,r,l,l,l,l,r,l,l,r,r,l,l,r,l,l]
  S5=[l,l,l,r,r,l,r,l,l,r,l,l,l,l,r,r,l,r,l,l,r,l]
  p5=[l,l,r,l,r,l,l,r,l,l,l,r,l,l,r,r,l,l]

_విధానము_     shape( bx, by, axis, turns, fillColor ) {
  // draw a shape at board position bx, by, with the piece oriented
  // on one of six axises. The shape consists of an array of turns.
  కుంచికను_పైకి_ఎత్తు()
  స్థానము_మార్చు( baseX, baseY)
  కోణము(0)
  ముందుకు_జరుగు( 2* by * side * Math.cos(degToRad(30)))
  కుడి_వైపు_తిరుగు(60)
  ముందుకు_జరుగు( 2* bx * side * Math.cos(degToRad(30)))
  కుంచికను_పైకి_ఎత్తు()
  నిండు_వృత్తము()  //center of start cell
  కోణము(60 * axis )
  ఎడమ_వైపు_తిరుగు( 180 - 30)
  ముందుకు_జరుగు( side)
  ఎడమ_వైపు_తిరుగు(120) 
  కుంచికను_కింద_పెట్టు()
  ఆకారము_ప్రారంభించు()
  for (j=0; j< turns.length; j++) {
    turns[j]()
  }
  ఆకారము_ముగించు( fillColor)
  కుంచికను_పైకి_ఎత్తు()

  ఎడమ_వైపు_తిరుగు( 60)
  ముందుకు_జరుగు(side)
  నిండు_వృత్తము()
  వెనుకకు_జరుగు(side)
  కుడి_వైపు_తిరుగు( 60)

// _ఫలము_  to the start position, not really necessary
  ఎడమ_వైపు_తిరుగు(60)
  ముందుకు_జరుగు( side)
  ఎడమ_వైపు_తిరుగు( 30)
}

_విధానము_     drawAll() {
  ఆది_స్థితి()
  side = 15
  baseX = -200
  baseY = -200

  shape(0,0,0,D5)
  shape(3,0,0,u5)
  shape(6,0,0,V5)
  shape(9,0,0,r5)
  shape(12,0,0,y5)
  shape(15,0,0,L5)
  shape(0,4,0,U5)
  shape(3,4,0,Y5)
  shape(6,4,0,p5)
  shape(9,4,0,C5)
  shape(12,4,0,A5)
  shape(15,4,0,J5)
  shape(0,7,0,I5)
  shape(3,8,0,T5)
  shape(6,8,0,N5)
  shape(9,8,0,P5)
  shape(12,8,0,G5)
  shape(15,8,0,E5)
  shape(0,12,0,S5)
  shape(3,12,0,q5)
  shape(6,12,0,W5)
  shape(9,12,0,X5)
}

_విధానము_     ప్రదర్శన() {
  ఆది_స్థితి()
   చుట్టొద్దు()
  కుంచికను_దాచు()

  side =   Math.min( 2*గరిష్ఠX()/ 12/ 1.5, 2*గరిష్ఠY()/ 16/ Math.sqrt(3))
  //side = 20

  baseX = -5 * 1.5 * side
  baseY = -7 * Math.sqrt(3) * side

  shape(0,2,3,D5, "red")
  shape(2,0,1,u5, "lightgreen")
  shape(5,0,1,V5, "blue")
  shape(10,0,4,r5, "yellow")
  shape(3,1,5,y5, "blue")
  shape(10,1,5,L5, "red")
  shape(5,3,3,U5, "red")
  shape(3,2,0,Y5, "yellow")
  shape(1,3,0,X5, "lightgreen")
  shape(0,5,0,W5, "red")
  shape(9,2,4,q5, "blue")
  shape(5,4,5,p5, "lightgreen")
  shape(9,3,5,S5, "yellow")
  shape(10,5,4,C5, "lightgreen")
  shape(8,6,1,A5, "yellow")
  shape(8,5,4,J5, "red")
  shape(3,7,1,I5, "blue")
  shape(0,7,0,T5, "yellow")
  shape(1,9,1,N5, "lightgreen")
  shape(3,9,1,P5, "yellow")
  shape(7,8,1,G5, "red")
  shape(7,9,1,E5, "blue")
}
