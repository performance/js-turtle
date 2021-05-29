// Dragon Curve -- draw a fractal curve formed by folding a shape onto itself
//  more infomration at wikipedia  https://en.wikipedia.org/wiki/Dragon_curve


//*** GLOBALS ***
var gen = 0
var side


//*** CONSTANTS ***

var root2 = Math.sqrt(2)
//  X ↦ X+YF+
//  Y ↦ −FX−Y.
// కోణము is 90
// start is order * 45°


//*** FUNCTIONS ***

function caption (message) {
  // save your current position, heading, etc.
  var savedX = turtle.pos.x
  var savedY = turtle.pos.y
  var savedHeading = turtle.కోణము / 2 / Math.PI * 360 //convert radians to degrees
  var savedColor = turtle.color
  var savedWidth = turtle.width

  goto (minX()+10, minY()+10)
  setheading( 90)

  // erase what will be in the path
  రంగు( తెలుపు )
  వెడల్పు(10)
  ముందుకు_జరుగు(maxY() * 2 - 12)
  goto (minX()+10, minY()+5)
  రంగు("black")

  అక్షరరూపము_స్థాపించు( "bold 12px Helvitica,sans-serif")
  write( message)

  //go back from whence you came
  goto( savedX, savedY)
  setheading( savedHeading)
  రంగు( savedColor)
  వెడల్పు(savedWidth)
}

function X (side, gen) {
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

function Y (side, gen) {
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


function delayedDragon () {
  ఆది_స్థితి()
  తాబేలును_దాచు()
  goto (-side * .4, +side *.2)
  setheading (90+ gen * 45)
  కలమును_కింద_పెట్టు()
  X (side, gen)
  caption( "Dragon curve, generation " + gen)

  if (gen < 13) {
    gen = gen + 1
  } else {
    gen = 0
  }
  delay( delayedDragon, 3000)
}  
    

function demo() {
  side = .9 * Math.min(maxX(), 2*maxY())
  gen = 0
  delayedDragon()
}  
