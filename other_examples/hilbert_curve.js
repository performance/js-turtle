// Hilbert Curve -- draw a space filling fractal curve described by David Hilbert
// more information at Wikipedia  https://en.wikipedia.org/wiki/Hilbert_curve

// A → − B F + A F A + F B −


//*** GLOBALS ***
_సర్వత్ర_   gen = 0


//*** FUNCTIONS ***

_విధానము_     caption (message) {
  // save your current position, heading, etc.
  _సర్వత్ర_   savedX = కుంచిక.స్థానము.x
  _సర్వత్ర_   savedY = కుంచిక.స్థానము.y
  _సర్వత్ర_   savedHeading = కుంచిక.కోణము / 2 / Math.PI * 360 //convert radians to degrees
  _సర్వత్ర_   savedColor = కుంచిక.రంగు
  _సర్వత్ర_   savedWidth = కుంచిక.వెడల్పు

  స్థానము_మార్చు(కనిష్ఠX()+10, కనిష్ఠY()+10)
  దిశ_మార్చు( 90)

  // erase wha will be in the path
  రంగు_మార్చు( తెలుపు )
  వెడల్పు(10)
  ముందుకు_జరుగు(గరిష్ఠY() * 2 - 12)
  స్థానము_మార్చు(కనిష్ఠX()+10, కనిష్ఠY()+5)
  రంగు_మార్చు("నలుపు")
  అక్షరరూపము_స్థాపించు("bold 12pt Ariel,sans-serif")
  వ్రాయి( message)

  //go back from whence you came
  స్థానము_మార్చు( savedX, savedY)
  దిశ_మార్చు( savedHeading)
  రంగు_మార్చు( savedColor)
  వెడల్పు(savedWidth)
}


_విధానము_     A (side,gen) {
  if (gen === 0) {
    ఎడమ_వైపు_తిరుగు(90)
    ముందుకు_జరుగు(side)
    కుడి_వైపు_తిరుగు(90)
    ముందుకు_జరుగు(side)
    కుడి_వైపు_తిరుగు(90)
    ముందుకు_జరుగు(side)
    ఎడమ_వైపు_తిరుగు(90)
  }
  else {
    ఎడమ_వైపు_తిరుగు(90)
    B (side, gen-1)
    ముందుకు_జరుగు(side)
    కుడి_వైపు_తిరుగు(90)
    A (side, gen-1)
    ముందుకు_జరుగు(side)
    A (side, gen-1)
    కుడి_వైపు_తిరుగు(90)
    ముందుకు_జరుగు(side)
    B (side, gen-1)
    ఎడమ_వైపు_తిరుగు(90)
  }
}
//  B → + A F − B F B − F A +
//Here, "F" means "draw forward", "−" means "turn left 90°", "+" means "turn right 90°" (see కుంచిక graphics), and "A" and "B" are ignored during drawing.

_విధానము_     B (side,gen) {
  if (gen === 0) {
    కుడి_వైపు_తిరుగు(90)
    ముందుకు_జరుగు(side)
    ఎడమ_వైపు_తిరుగు(90)
    ముందుకు_జరుగు(side)
    ఎడమ_వైపు_తిరుగు(90)
    ముందుకు_జరుగు(side)
    కుడి_వైపు_తిరుగు(90)
  }
  else {
    కుడి_వైపు_తిరుగు(90)
    A (side, gen-1)
    ముందుకు_జరుగు(side)
    ఎడమ_వైపు_తిరుగు(90)
    B (side, gen-1)
    ముందుకు_జరుగు(side)
    B (side, gen-1)
    ఎడమ_వైపు_తిరుగు(90)
    ముందుకు_జరుగు(side)
    A (side, gen-1)
    కుడి_వైపు_తిరుగు(90)
  }
}


_విధానము_     delayedHilbert () {
  ఆది_స్థితి()
   చుట్టొద్దు()

  // targeting 80% of window
  size = .80 * Math.min( గరిష్ఠX(),గరిష్ఠY())*2
  _సర్వత్ర_   side = 10

  /*overall side seems to be: gen 0: 1
    gen 1: 3 (2*gen 0 + 1)
    gen 2: 7 (2*gen 1 + 1)
    gen 3: 15(2*gen 2 +1)
   */  _సర్వత్ర_   overallSides = 1
  for (i=1; i<=gen; i++)
    overallSides = 2*overallSides + 1
  side = size/overallSides
  స్థానము_మార్చు( overallSides/2*side,-overallSides/2*side)
  A (side, gen)
  caption( "Hilbert curve, generation " + gen)

  if (gen < 5) {
    gen = gen + 1
  } else {
    gen = 0
  }
  విలంబించు( delayedHilbert, 3000)
}


_విధానము_     ప్రదర్శన() {
  gen = 0
  delayedHilbert()
}
