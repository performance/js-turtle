// Conway Pinwheel -- Conway\'s pinwheel tessellation
// the British mathematician John Conway devised a tesselation using triagles
// that has no periodicity called the pinwheel tesselation.

/*
from a point can:
 - draw a triangle X
 - draw a triangle and 4 siblings as a newer larger triangle
 - divide a triangle into 5 offspring triangles

Recursion for:
  expanding a set of triangles from a point
  dividing a set of triangles from a point.

need routines for
  recursive expansion
  - expand, move to new base, change size
  move to 5 base points dividing a triangle
  move to 5 base points expanding a triangle
  conditionally draw triangle or subdivide

  * optionally have a delay for animation

  * options to grid certain triangles (all, none, prime, non-prime)

  * option to change width of triangle outline (level, triangle)
*/


//*** GLOBALS ***

_సర్వత్ర_   levels = 4
_సర్వత్ర_   targetSide = .80 * Math.min( గరిష్ఠY()*2, గరిష్ఠX()) // base of big encompassing triangle
_సర్వత్ర_   delayedSide = 0		// current side being worked

_సర్వత్ర_   mainColor = "tan"
_సర్వత్ర_   subColor = "wheat"
_సర్వత్ర_   dividerColor = "నలుపు"
_సర్వత్ర_   stepsize = 1.5       //spacing between shading lines
_సర్వత్ర_   specialTriangle = 0  // triangle number selected for highlighting (1-5, 0 for none)


//*** CONSTANTS ***

_సర్వత్ర_   root5 = Math.sqrt(5)
_సర్వత్ర_   anglea = Math.asin( 1 / root5) * 360 / 2 / Math.PI
_సర్వత్ర_   angleb = Math.asin( 2 / root5) * 360 / 2 / Math.PI
_సర్వత్ర_   CCW = false
_సర్వత్ర_   CW = true


//*** FUNCTIONS ***

_విధానము_     dturn( dir, degrees) { // allows turning based on triangle type
  if (dir) {
    కుడి_వైపు_తిరుగు( degrees)
  } else {
    ఎడమ_వైపు_తిరుగు( degrees)
  }
}


_విధానము_     drawTriangle (dir, side) {
  ముందుకు_జరుగు(2*side)
  dturn(dir, 180-anglea)
  ముందుకు_జరుగు(root5*side)
  dturn (dir, 180-angleb)
  ముందుకు_జరుగు(side)
  dturn (dir, 90)
}


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
  వ్రాయి( message)

  //go back from whence you came
  స్థానము_మార్చు( savedX, savedY)
  దిశ_మార్చు( savedHeading)
  రంగు_మార్చు( savedColor)
  వెడల్పు(savedWidth)
}



_విధానము_     shadeTriangle( dir, side, stepsize) {
  console.log( "sT: " + dir + " " + side + " " + stepsize)
  _సర్వత్ర_   x = కుంచిక.స్థానము.x
  _సర్వత్ర_   y = కుంచిక.స్థానము.y
  _సర్వత్ర_   steps = Math.floor( side/stepsize)

  for (_సర్వత్ర_   i=0; i< steps; i++) {
     ముందుకు_జరుగు( 2*side * (steps-i)/steps)
     వెనుకకు_జరుగు( 2*side * (steps-i)/steps)
     కుంచికను_పైకి_ఎత్తు()
     dturn( dir, 90)
     ముందుకు_జరుగు( stepsize)
     dturn( !dir, 90)
     కుంచికను_కింద_పెట్టు()
  }
  //_ఫలము_  to start
  కుంచికను_పైకి_ఎత్తు()
  dturn( !dir, 90)
  ముందుకు_జరుగు( side)
  dturn( dir, 90)
  //స్థానము_మార్చు(x,y) // cancel cumulative error
  కుంచికను_కింద_పెట్టు()
}


_విధానము_     recursiveDivide( dir, side, level, triangle) {
  //console.log("rD: " + level + " " + triangle)
  if (level > 0) {
    side = 0. + side/root5
    _సర్వత్ర_   x = కుంచిక.స్థానము.x
    _సర్వత్ర_   y = కుంచిక.స్థానము.y
    
    //draw the first line to point A
    dturn( dir, angleb)
    కుంచికను_కింద_పెట్టు()
    ముందుకు_జరుగు(2*side)

    //sub triangle 1
    కుడి_వైపు_తిరుగు(180)
    recursiveDivide( !dir, side, level-1, 1)
    కుడి_వైపు_తిరుగు(180)

    //draw the second line to point B
    dturn( !dir, 180-angleb)
    కుంచికను_కింద_పెట్టు()
    ముందుకు_జరుగు(root5*side)
    
    //draw third line to point C
    dturn( dir, 180-angleb)
    ముందుకు_జరుగు(side)
    కుంచికను_పైకి_ఎత్తు()

i    //sub triangle 4
    dturn( dir, 90)
    recursiveDivide( dir, side, level-1, 4)

    //sub triangle 5
    కుడి_వైపు_తిరుగు( 180)
    recursiveDivide( !dir, side, level-1, 5)
    dturn( dir, 90)
    
    //retreat to point B
    వెనుకకు_జరుగు(side)
    dturn( dir, 90)
    
    //draw fourth line to point D
    కుంచికను_కింద_పెట్టు()
    ముందుకు_జరుగు( 2*side)
    కుంచికను_పైకి_ఎత్తు()

    //sub triangle 2
    కుడి_వైపు_తిరుగు( 180)
    recursiveDivide( !dir, side, level-1, 2)

    //sub triangle 3
    recursiveDivide( dir, side, level-1, 3)
    
    //retreat to origin
    dturn( !dir, 90)
    కుంచికను_పైకి_ఎత్తు()
    ముందుకు_జరుగు( side)
    కుంచికను_కింద_పెట్టు()
    dturn( dir, 180-angleb)
    //స్థానము_మార్చు(x,y) //cancel cumulative error
//  } else {
//    if (triangle == 3) {
//    if (triangle == specialTriangle) {
//      shadeTriangle (dir, side, stepsize)
//    }
  }
}


_విధానము_     moveToExpandOrigin (side) {
  కుంచికను_పైకి_ఎత్తు()
  కుడి_వైపు_తిరుగు( 90)
  ముందుకు_జరుగు( side)
  ఎడమ_వైపు_తిరుగు( 180 - angleb)
  కుంచికను_కింద_పెట్టు()
}


_విధానము_     startDelayedDivide() {
  // move to the origin of the big triangle
  ఆది_స్థితి()
  రంగు_మార్చు(mainColor)
  కుంచికను_పైకి_ఎత్తు()

  side = targetSide
  వెనుకకు_జరుగు(side/2)
  కుడి_వైపు_తిరుగు(90)
  వెనుకకు_జరుగు(side)
  కుంచికను_కింద_పెట్టు()

  iterations = 4
  level = 0

  కుంచికను_కింద_పెట్టు()
  రంగు_మార్చు("నలుపు")
  delayedDivide()
}


_విధానము_     delayedDivide() {
  //console.log ("dD: "+ side + " " + level)
  recursiveDivide( CCW, side, level, 0)
  drawTriangle( CCW, side)
  caption( "Division, generation " + level)
  level = level + 1
  if (level <= iterations) {
    విలంబించు( delayedDivide,1000)
  } else {
    విలంబించు( startDelayedExpansion, 3000)
  }
}

_విధానము_     startDelayedExpansion() {
  //move to the origin of the big triangle
  reset ()
   చుట్టొద్దు()
  రంగు_మార్చు(mainColor)
  కుంచికను_పైకి_ఎత్తు()

  _సర్వత్ర_   tempSide = targetSide
  వెనుకకు_జరుగు(side/2)
  కుడి_వైపు_తిరుగు(90)
  వెనుకకు_జరుగు(side)

  iterations = 4
  depth = 0
  dir = CCW

  // move the starting point so that it ends where it starts
  for (_సర్వత్ర_   i=0; i<iterations; i++) {
    tempSide = tempSide/root5
  }
  delayedSide = tempSide
  for (_సర్వత్ర_   i=0; i<iterations; i++) {
    tempSide = tempSide * root5
  }
  for (_సర్వత్ర_   i=0; i<iterations; i++) {
    కుంచికను_కింద_పెట్టు()
    drawTriangle( dir, tempSide)
    కుంచికను_పైకి_ఎత్తు()
    dturn( dir, angleb)
    ముందుకు_జరుగు( tempSide/root5)
    dturn( !dir, 90)
    tempSide = tempSide / root5
    drawTriangle( tempSide) // really just for reference
    console.log(i)
  }

  కుంచికను_కింద_పెట్టు()
  రంగు_మార్చు( నీలము )
  shadeTriangle( CCW, tempSide, stepsize)
  రంగు_మార్చు("నలుపు")
  విలంబించు( delayedExpansion,1000)
}

_విధానము_     delayedExpansion() {
  /* on entry
    delayedSide is the size of the base triangle.
    depth is how many generations to do.
  */

  moveToExpandOrigin( delayedSide)
  delayedSide = delayedSide * root5
  //console.log( "dE: " + depth + " " + iterations + " " + delayedSide)
  recursiveDivide( CCW, delayedSide, depth+1, 0)
  drawTriangle( CCW, delayedSide)
  caption( "Expansion, generation " + (depth+1))

  depth = depth + 1
  if (depth < iterations) {
    విలంబించు( delayedExpansion,1000)
  } else {
    delayedSide = targetSide
    విలంబించు( startDelayedDivide, 3000)
  }
}


//***MAIN***

console.log ("Starting")
stepsize = 1.5
iterations = 4
iterations = 2
level = 1
depth = 0
CCW = false // triangle is to the left side of the right కోణము ( height, hypotenuse, base)
CW = true // triangle is to the right side of the right కోణము( height, hypotenuse, base)
mainColor = "tan"
subColor = "wheat"
specialTriangle = 0


_విధానము_     ప్రదర్శన() {
  /* want demo to show a mix of divide and expand with animation

basically:
  starts up with a delayed division set up
  when that is over
  continue with a delayed expansion
*/
  ఆది_స్థితి()
  కుంచికను_దాచు()
  side = targetSide
   చుట్టొద్దు()
  రంగు_మార్చు(mainColor)
  కుంచికను_పైకి_ఎత్తు()
  వెనుకకు_జరుగు(side/2)
  కుడి_వైపు_తిరుగు(90)
  వెనుకకు_జరుగు(side)
  కుంచికను_కింద_పెట్టు()

  startDelayedExpansion()
}
