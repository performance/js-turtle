// Hilbert Curve -- draw a space filling fractal curve described by David Hilbert
// more information at Wikipedia  https://en.wikipedia.org/wiki/Hilbert_curve

// A → − B F + A F A + F B −


//*** GLOBALS ***
var gen = 0


//*** FUNCTIONS ***

function caption (message) {
  // save your current position, heading, etc.
  var savedX = turtle.pos.x
  var savedY = turtle.pos.y
  var savedHeading = turtle.కోణము / 2 / Math.PI * 360 //convert radians to degrees
  var savedColor = turtle.రంగు
  var savedWidth = turtle.వెడల్పు

  goto (కనిష్ఠX()+10, కనిష్ఠY()+10)
  దిశ_మార్చు( 90)

  // erase wha will be in the path
  రంగు_మార్చు( తెలుపు )
  వెడల్పు(10)
  ముందుకు_జరుగు(గరిష్ఠY() * 2 - 12)
  goto (కనిష్ఠX()+10, కనిష్ఠY()+5)
  రంగు_మార్చు("నలుపు")
  అక్షరరూపము_స్థాపించు("bold 12pt Ariel,sans-serif")
  write( message)

  //go back from whence you came
  goto( savedX, savedY)
  దిశ_మార్చు( savedHeading)
  రంగు_మార్చు( savedColor)
  వెడల్పు(savedWidth)
}


function A (side,gen) {
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
//Here, "F" means "draw forward", "−" means "turn left 90°", "+" means "turn right 90°" (see turtle graphics), and "A" and "B" are ignored during drawing.

function B (side,gen) {
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


function delayedHilbert () {
  ఆది_స్థితి()
  wrap(false)

  // targeting 80% of window
  size = .80 * Math.min( గరిష్ఠX(),గరిష్ఠY())*2
  var side = 10

  /*overall side seems to be: gen 0: 1
    gen 1: 3 (2*gen 0 + 1)
    gen 2: 7 (2*gen 1 + 1)
    gen 3: 15(2*gen 2 +1)
   */  var overallSides = 1
  for (i=1; i<=gen; i++)
    overallSides = 2*overallSides + 1
  side = size/overallSides
  goto( overallSides/2*side,-overallSides/2*side)
  A (side, gen)
  caption( "Hilbert curve, generation " + gen)

  if (gen < 5) {
    gen = gen + 1
  } else {
    gen = 0
  }
  delay( delayedHilbert, 3000)
}


function demo () {
  gen = 0
  delayedHilbert()
}
