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

var levels = 4
var targetSide = .80 * Math.min( గరిష్ఠY()*2, గరిష్ఠX()) // base of big encompassing triangle
var delayedSide = 0		// current side being worked

var mainColor = "tan"
var subColor = "wheat"
var dividerColor = "నలుపు"
var stepsize = 1.5       //spacing between shading lines
var specialTriangle = 0  // triangle number selected for highlighting (1-5, 0 for none)


//*** CONSTANTS ***

var root5 = Math.sqrt(5)
var anglea = Math.asin( 1 / root5) * 360 / 2 / Math.PI
var angleb = Math.asin( 2 / root5) * 360 / 2 / Math.PI
var CCW = false
var CW = true


//*** FUNCTIONS ***

function dturn( dir, degrees) { // allows turning based on triangle type
  if (dir) {
    కుడి_వైపు_తిరుగు( degrees)
  } else {
    ఎడమ_వైపు_తిరుగు( degrees)
  }
}


function drawTriangle (dir, side) {
  ముందుకు_జరుగు(2*side)
  dturn(dir, 180-anglea)
  ముందుకు_జరుగు(root5*side)
  dturn (dir, 180-angleb)
  ముందుకు_జరుగు(side)
  dturn (dir, 90)
}


function caption (message) {
  // save your current position, heading, etc.
  var savedX = కుంచిక.స్థానము.x
  var savedY = కుంచిక.స్థానము.y
  var savedHeading = కుంచిక.కోణము / 2 / Math.PI * 360 //convert radians to degrees
  var savedColor = కుంచిక.రంగు
  var savedWidth = కుంచిక.వెడల్పు

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



function shadeTriangle( dir, side, stepsize) {
  console.log( "sT: " + dir + " " + side + " " + stepsize)
  var x = కుంచిక.స్థానము.x
  var y = కుంచిక.స్థానము.y
  var steps = Math.floor( side/stepsize)

  for (var i=0; i< steps; i++) {
     ముందుకు_జరుగు( 2*side * (steps-i)/steps)
     వెనుకకు_జరుగు( 2*side * (steps-i)/steps)
     కలమును_పైకి_ఎత్తు()
     dturn( dir, 90)
     ముందుకు_జరుగు( stepsize)
     dturn( !dir, 90)
     కలమును_కింద_పెట్టు()
  }
  //return to start
  కలమును_పైకి_ఎత్తు()
  dturn( !dir, 90)
  ముందుకు_జరుగు( side)
  dturn( dir, 90)
  //స్థానము_మార్చు(x,y) // cancel cumulative error
  కలమును_కింద_పెట్టు()
}


function recursiveDivide( dir, side, level, triangle) {
  //console.log("rD: " + level + " " + triangle)
  if (level > 0) {
    side = 0. + side/root5
    var x = కుంచిక.స్థానము.x
    var y = కుంచిక.స్థానము.y
    
    //draw the first line to point A
    dturn( dir, angleb)
    కలమును_కింద_పెట్టు()
    ముందుకు_జరుగు(2*side)

    //sub triangle 1
    కుడి_వైపు_తిరుగు(180)
    recursiveDivide( !dir, side, level-1, 1)
    కుడి_వైపు_తిరుగు(180)

    //draw the second line to point B
    dturn( !dir, 180-angleb)
    కలమును_కింద_పెట్టు()
    ముందుకు_జరుగు(root5*side)
    
    //draw third line to point C
    dturn( dir, 180-angleb)
    ముందుకు_జరుగు(side)
    కలమును_పైకి_ఎత్తు()

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
    కలమును_కింద_పెట్టు()
    ముందుకు_జరుగు( 2*side)
    కలమును_పైకి_ఎత్తు()

    //sub triangle 2
    కుడి_వైపు_తిరుగు( 180)
    recursiveDivide( !dir, side, level-1, 2)

    //sub triangle 3
    recursiveDivide( dir, side, level-1, 3)
    
    //retreat to origin
    dturn( !dir, 90)
    కలమును_పైకి_ఎత్తు()
    ముందుకు_జరుగు( side)
    కలమును_కింద_పెట్టు()
    dturn( dir, 180-angleb)
    //స్థానము_మార్చు(x,y) //cancel cumulative error
//  } else {
//    if (triangle == 3) {
//    if (triangle == specialTriangle) {
//      shadeTriangle (dir, side, stepsize)
//    }
  }
}


function moveToExpandOrigin (side) {
  కలమును_పైకి_ఎత్తు()
  కుడి_వైపు_తిరుగు( 90)
  ముందుకు_జరుగు( side)
  ఎడమ_వైపు_తిరుగు( 180 - angleb)
  కలమును_కింద_పెట్టు()
}


function startDelayedDivide() {
  // move to the origin of the big triangle
  ఆది_స్థితి()
  రంగు_మార్చు(mainColor)
  కలమును_పైకి_ఎత్తు()

  side = targetSide
  వెనుకకు_జరుగు(side/2)
  కుడి_వైపు_తిరుగు(90)
  వెనుకకు_జరుగు(side)
  కలమును_కింద_పెట్టు()

  iterations = 4
  level = 0

  కలమును_కింద_పెట్టు()
  రంగు_మార్చు("నలుపు")
  delayedDivide()
}


function delayedDivide() {
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

function startDelayedExpansion() {
  //move to the origin of the big triangle
  reset ()
   wrap( false)
  రంగు_మార్చు(mainColor)
  కలమును_పైకి_ఎత్తు()

  var tempSide = targetSide
  వెనుకకు_జరుగు(side/2)
  కుడి_వైపు_తిరుగు(90)
  వెనుకకు_జరుగు(side)

  iterations = 4
  depth = 0
  dir = CCW

  // move the starting point so that it ends where it starts
  for (var i=0; i<iterations; i++) {
    tempSide = tempSide/root5
  }
  delayedSide = tempSide
  for (var i=0; i<iterations; i++) {
    tempSide = tempSide * root5
  }
  for (var i=0; i<iterations; i++) {
    కలమును_కింద_పెట్టు()
    drawTriangle( dir, tempSide)
    కలమును_పైకి_ఎత్తు()
    dturn( dir, angleb)
    ముందుకు_జరుగు( tempSide/root5)
    dturn( !dir, 90)
    tempSide = tempSide / root5
    drawTriangle( tempSide) // really just for reference
    console.log(i)
  }

  కలమును_కింద_పెట్టు()
  రంగు_మార్చు( నీలము )
  shadeTriangle( CCW, tempSide, stepsize)
  రంగు_మార్చు("నలుపు")
  విలంబించు( delayedExpansion,1000)
}

function delayedExpansion() {
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


function demo() {
  /* want demo to show a mix of divide and expand with animation

basically:
  starts up with a delayed division set up
  when that is over
  continue with a delayed expansion
*/
  ఆది_స్థితి()
  కుంచికను_దాచు()
  side = targetSide
   wrap(false)
  రంగు_మార్చు(mainColor)
  కలమును_పైకి_ఎత్తు()
  వెనుకకు_జరుగు(side/2)
  కుడి_వైపు_తిరుగు(90)
  వెనుకకు_జరుగు(side)
  కలమును_కింద_పెట్టు()

  startDelayedExpansion()
}
