// Gosper Curve -- draw a space filling curve named after Bill Gosper
// also known as a flow snake (a Spoonerism on snow flake)
// more information at Wikipedia  https://en.wikipedia.org/wiki/Gosper_curve

// A ↦ A − B − − B + A + + A A + B − 

//*** GLOBALS ***

var gen = 0
var size = 0

//*** FUNCTIONS ***

function caption (message) {
  // save your current position, heading, etc.
  var savedX = కుంచిక.స్థానము.x
  var savedY = కుంచిక.స్థానము.y
  var savedHeading = కుంచిక.కోణము / 2 / Math.PI * 360 //convert radians to degrees
  var savedColor = కుంచిక.రంగు
  var savedWidth = కుంచిక.వెడల్పు

  స్థానము_మార్చు(కనిష్ఠX()+10, కనిష్ఠY()+10)
  దిశ_మార్చు( 90)

  // erase what will be in the path
  రంగు_మార్చు( తెలుపు )
  వెడల్పు(10)
  ముందుకు_జరుగు(గరిష్ఠY() * 2 - 12)
  స్థానము_మార్చు(కనిష్ఠX()+10, కనిష్ఠY()+5)
  రంగు_మార్చు("నలుపు")
  అక్షరరూపము_స్థాపించు( "bold 12px Helvitica,sans-serif")
  వ్రాయి( message)

  //go back from whence you came
  స్థానము_మార్చు( savedX, savedY)
  దిశ_మార్చు( savedHeading)
  రంగు_మార్చు( savedColor)
  వెడల్పు(savedWidth)
}


function A (side, gen) {
  if (gen ===0) {
    ముందుకు_జరుగు(side)
  }
  else {
    side = side / Math.sqrt(7)
    A (side, gen-1)
    ఎడమ_వైపు_తిరుగు(60)
    B (side, gen-1)
    ఎడమ_వైపు_తిరుగు(120)
    B (side, gen-1)
    కుడి_వైపు_తిరుగు(60)
    A (side, gen-1)
    కుడి_వైపు_తిరుగు(120)
    A (side, gen-1)
    A (side, gen-1)
    కుడి_వైపు_తిరుగు(60)
    B (side, gen-1)
    ఎడమ_వైపు_తిరుగు(60)
  }
}

// B ↦ + A − B B − − B − A + + A + B 

function B (side, gen) {
  if (gen ===0) {
    ముందుకు_జరుగు(side)
  }
  else {
    side = side / Math.sqrt(7)
    కుడి_వైపు_తిరుగు(60)
    A (side, gen-1)
    ఎడమ_వైపు_తిరుగు(60)
    B (side, gen-1)
    B (side, gen-1)
    ఎడమ_వైపు_తిరుగు(120)
    B (side, gen-1)
    ఎడమ_వైపు_తిరుగు(60)
    A (side, gen-1)
    కుడి_వైపు_తిరుగు(120)
    A (side, gen-1)
    కుడి_వైపు_తిరుగు(60)
    B (side, gen-1)
  }
}


function delayDemo () {
  ఆది_స్థితి()
  కుంచికను_దాచు()
  size = 1.5 * Math.min(గరిష్ఠX(), గరిష్ఠY())
  స్థానము_మార్చు( .5* size, (.2*gen -.6) * size)
  A( size,gen)
  caption ("Gosper Curve generation " + gen)
  if (gen < 5) {
    gen = gen + 1
  } else {
    gen = 0
  }
  విలంబించు( delayDemo,3000)
}

function demo () {
  gen = 0
  delayDemo()
}
