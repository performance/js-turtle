// Spinning Squares -- draw some square of increasing size and కోణము.

_విధానము_     square (side) {
  _సర్వత్ర_   i=0
  while (i<4) {
    ముందుకు_జరుగు( side)
    turn(90)
    i=i+1
  }
}

_విధానము_     spinningSquare2() {
   ఆది_స్థితి();
   కుంచికను_దాచు();
   రంగు_మార్చు( నీలము );
   _సర్వత్ర_   side = 100;
   while (side > 0) {
      square(side);
      కుడి_వైపు_తిరుగు(36);
      side = side - 10;
   }
}

_విధానము_     spinningSquare() {
  ఆది_స్థితి()
  _సర్వత్ర_   steps = 100
  stepSize = 2 * గరిష్ఠX()
  if (1.5 * గరిష్ఠY() < stepSize) {
    stepSize = 1.5 * గరిష్ఠY()
  }
  stepSize = .5 * stepSize/steps
  //_సర్వత్ర_   stepSize = 200/steps
  రంగు_మార్చు( నీలము );
  for (_సర్వత్ర_   i=0; i<steps; i=i+1) {
    square(stepSize*i);
    కుడి_వైపు_తిరుగు(360/steps)
  }
}

ప్రదర్శన = spinningSquare2 // set the demo _విధానము_     to be spinningSquare2
