// Conway Fractal -- Conway\'s pinwheel tessellation as a fractal
// the British mathematician John Conway devised a tesselation using triagles
// that has no periodicity called the pinwheel tesselation.  This is a fractal
// form of that tessellation.

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

var level = 0
var targetLevel = 5
var side = .80 * Math.min( గరిష్ఠY()*2, గరిష్ఠX()) // base of big triangle
var mainColor = "tan"
var subColor = "wheat"
var dividerColor = "నలుపు"
var stepsize = 1.5       //spacing between shading lines
var specialTriangle = 0  // triangle number selected for highlighting (1-5, 0 for none)


//*** CONSTANTS ***

var targetLevel = 4
var root5 = Math.sqrt(5)
var anglea = Math.asin( 1 / root5) * 360 / 2 / Math.PI
var angleb = Math.asin( 2 / root5) * 360 / 2 / Math.PI
var CCW = false
var CW = true


//*** FUNCTIONS ***

function dturn( dir, degrees) {
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

  // erase what will be in the path
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
    //if (triangle == 3) {
//    if (triangle == specialTriangle) {
//      shadeTriangle (dir, side, stepsize)
//    }
  }
}

function recursiveDivideBlocks( dir, side, level, triangle, background, highlight) {
  //console.log( "rDB: " + level + " " + triangle + " " + background + " " + highlight)
  if (level > 0) {
    side = side/root5
    var x = కుంచిక.స్థానము.x
    var y = కుంచిక.స్థానము.y

    //move to point A
    కలమును_పైకి_ఎత్తు()
    dturn( dir, angleb)
    ముందుకు_జరుగు(2 * side)

    //sub triangle 1
    కుడి_వైపు_తిరుగు(180)
    కలమును_కింద_పెట్టు()
    recursiveDivideBlocks( !dir, side, level-1, 1, background, highlight)
    కలమును_పైకి_ఎత్తు()
    కుడి_వైపు_తిరుగు(180)

    //move to pint B
    dturn( !dir, 180-angleb)
    ముందుకు_జరుగు(root5*side)
    
    //move to point C
    dturn( dir, 180-angleb)
    ముందుకు_జరుగు(side)

    //sub triangle 4
    dturn( dir, 90)
    కలమును_కింద_పెట్టు()
    recursiveDivideBlocks( dir, side, level-1, 4, background, highlight)
    కలమును_పైకి_ఎత్తు()

    //sub triangle 5
    కుడి_వైపు_తిరుగు( 180)
    కలమును_కింద_పెట్టు()
    recursiveDivideBlocks( !dir, side, level-1, 5, background, highlight)
    కలమును_పైకి_ఎత్తు()

    //retreat to point B
    dturn( dir, 90)
    వెనుకకు_జరుగు(side)

    //move to point B
    dturn( dir, 90)
    ముందుకు_జరుగు( 2*side)

//sub triangle 2
    కుడి_వైపు_తిరుగు( 180)
    కలమును_కింద_పెట్టు()
    recursiveDivideBlocks( !dir, side, level-1, 2, background, highlight)

    //sub triangle 3
    recursiveDivideBlocks( dir, side, level-1, 3, highlight, highlight)
    కలమును_పైకి_ఎత్తు()

    //move to origin
    dturn( !dir, 90)
    ముందుకు_జరుగు(side)

    dturn( dir, 180-angleb)
    స్థానము_మార్చు(x,y) //cancel cumulative error
  } else {
    if (triangle == 3) {
    //if (triangle == specialTriangle) {
      రంగు_మార్చు( highlight)
      console.log("shading " + highlight)
      shadeTriangle (dir, side, stepsize)
    } else {
      రంగు_మార్చు( background)
      shadeTriangle (dir, side, stepsize)
    }
  }
}


function delayedDivide() {
  level = level + 1
  if (level <= targetLevel) {
    recursiveDivideBlocks( CCW, side, level, 0, mainColor, subColor)
    రంగు_మార్చు(dividerColor)
    recursiveDivide( CCW, side, level, 0)
    drawTriangle( CCW, side)
    caption( "Fractal divide, generation " + level)
    విలంబించు( delayedDivide, 3000)
  }
}


//*** MAIN ***

function ప్రదర్శన() {
  // initialize
  ఆది_స్థితి()
   wrap(false)
  కుంచికను_దాచు()
  కలమును_పైకి_ఎత్తు()
  వెనుకకు_జరుగు(side/4)
  కుడి_వైపు_తిరుగు(90)
  వెనుకకు_జరుగు(side)

  // label the sides of the triangle
  అక్షరరూపము_స్థాపించు("bold 14px sans-serif")
  ఎడమ_వైపు_తిరుగు( anglea)
  ముందుకు_జరుగు( side+50)
  కుడి_వైపు_తిరుగు( anglea)
  వ్రాయి( "√5")
  ఎడమ_వైపు_తిరుగు( anglea)
  వెనుకకు_జరుగు( side+50)
  కుడి_వైపు_తిరుగు( anglea)
  కుడి_వైపు_తిరుగు( 90)
  ముందుకు_జరుగు(20)
  ఎడమ_వైపు_తిరుగు( 90)
  ముందుకు_జరుగు( side)
  వ్రాయి(2)
  వెనుకకు_జరుగు( side+20)
  ఎడమ_వైపు_తిరుగు( 90)
  ముందుకు_జరుగు( side/2 + 20)
  కుడి_వైపు_తిరుగు( 90)
  వ్రాయి( 1)
  ముందుకు_జరుగు( 20)
  కుడి_వైపు_తిరుగు(90)
  ముందుకు_జరుగు(side/2)
  ఎడమ_వైపు_తిరుగు(90)

  కలమును_కింద_పెట్టు()
  drawTriangle( CCW, side)

  level = 0

  విలంబించు( delayedDivide, 3000)
}
