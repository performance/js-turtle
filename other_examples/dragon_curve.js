// Dragon Curve -- draw a fractal curve formed by folding a shape onto itself
//  more infomration at wikipedia  https://en.wikipedia.org/wiki/Dragon_curve


//*** GLOBALS ***
_సర్వత్ర_   gen = 0
_సర్వత్ర_   side


//*** CONSTANTS ***

_సర్వత్ర_   root2 = Math.sqrt(2)
//  X ↦ X+YF+
//  Y ↦ −FX−Y.
// కోణము is 90
// start is order * 45°


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

_విధానము_     X (side, gen) {
  if (gen <= 0) {
     ముందుకు_జరుగు(side)
  }
  else {
    X(side/root2, gen-1)
    ఎడమ_వైపు_తిరుగు(90)
    Y(side/root2, gen-1)
    //ముందుకు_జరుగు(side/2)
    ఎడమ_వైపు_తిరుగు(90)
  }
}

_విధానము_     Y (side, gen) {
  if (gen <= 0) {
    ముందుకు_జరుగు(side)
  }
  else {
    కుడి_వైపు_తిరుగు(90)
    //ముందుకు_జరుగు(side/root2)
    X (side/root2, gen-1)
    కుడి_వైపు_తిరుగు(90)
    Y (side/root2, gen-1)
  }
}


_విధానము_     delayedDragon () {
  ఆది_స్థితి()
  కుంచికను_దాచు()
  స్థానము_మార్చు(-side * .4, +side *.2)
  దిశ_మార్చు(90+ gen * 45)
  కుంచికను_కింద_పెట్టు()
  X (side, gen)
  caption( "Dragon curve, generation " + gen)

  if (gen < 13) {
    gen = gen + 1
  } else {
    gen = 0
  }
  విలంబించు( delayedDragon, 3000)
}  
    

_విధానము_     ప్రదర్శన() {
  side = .9 * Math.min(గరిష్ఠX(), 2*గరిష్ఠY())
  gen = 0
  delayedDragon()
}  
