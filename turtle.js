/************************************************************************
*  turtle.js -- javascript for the turtle graphic language extensions
*
*  Copyright (c) 2015-2019 Kirk Carlson
*  MIT license
*
*  would like to allow optional animation of each line drawn
*  see jsfiddle.net/epistemex/c85cmy0z/ for example of how to do this
************************************************************************/
/*************************************************************************************
Coordinate systems...

Drawing a circle became a pain because of the number of different coordinate
systems being used. These are:
  - the javascript canvas.
    * origin is at the top left
    * origin has positive going down, no negatives
    * origin has been translated to mimic cartesian coordinates
    * arcs are referenced with 0 at 3 o'clock going clockwise
  - cartesian coodinates
    * origin is at center with positive up
    * 0 కోణము is at 3 o'clock going counterclockwise
  - the turtle graphic space.
    * Origin at center to mimic cartesian coordinates
    * heading is referenced with 0 కోణము at 12 o'clock going clockwise

Canvases:

Two canvases are used:
  imageCanvas to hold the image drawn by the turtle
  turtleCanvas to hold the image of the turtle AND the image drawn by the turtle
The imageCanvas is not visable, only the turtleCanvas is visible.
#### the above should change, there should be two layers, the turtle and the image.
#### if the turtle is not visible, that layer is invisible and not updated.
#### this is a major change, so commit it out
The "redraw" boolean function controls whether the turtle is drawn after each move.
##### this includes an image copy, which is the expensive operation, use layers instead!

"wrap" only works for straight lines, not curves, circles, or dots.

This is an experimental version that allows export of svg graphic in addition to
the png for the canvas. Turtle moves are accumulated and then exported enmass.

*************************************************************************************/


// get a handle for the canvases in the document
var imageCanvas = document.getElementById("imagecanvas");
var imageContext = imageCanvas.getContext("2d");

imageContext.textAlign = "center";
imageContext.textBaseline = "middle";

var turtleCanvas = document.getElementById("turtlecanvas");
var turtleContext = turtleCanvas.getContext("2d");

// the turtle takes precedence when compositing
turtleContext.globalCompositeOperation = "destination-over";



//////RENDERING FUNCTIONS


function Pos (x,y) {
  this.x = x
  this.y = y
}

function Turtle () {
  this.pos = new Pos(0,0)
  this.కోణము = 0
  this.penDown = true
  this.వెడల్పు = 1
  this.visible = true // controls turtle visibility
  this.redraw = true //  controls redrawing turtle every move
  this.shape = false //  controls inclusion of segments from a filled shape
  this.wrap = true //    controls wraping at the edge
  this.font = "10pt normal Helvetica, sans-serif"
  this.రంగు = "నలుపు"
};

// initialize the state of the turtle
var turtle = new Turtle();
console.log("Tangle:" + turtle.కోణము + "Tfont: "+ turtle.font )

/*******************************************************************************
 * initialize -- initialize the turtle graphics system
 *
 * arguments: None
 *
 * returns: None
 ******************************************************************************/
function initialize() {
  turtle.pos.x = 0
  turtle.pos.y = 0
  turtle.కోణము = 0
  turtle.penDown = true
  turtle.వెడల్పు = 1
  turtle.visible = true
  turtle.redraw = true
  turtle.shape = false
  turtle.wrap = true
  turtle.font = "10pt normal Helvetica, sans-serif"
  turtle.రంగు = "నలుపు"
/*
   turtle = { pos: {
                 x: 0,
                 y: 0
              },
              కోణము: 0, //12 o'clock
              penDown: true,
              వెడల్పు: 1,
              visible: true, // controls turtle visibility
              redraw: true, //  controls redrawing turtle every move
              shape: false, //  controls inclusion of segments from a filled shape
              wrap: true, //    controls wraping at the edge
              font: "10pt normal Helvetica, sans-serif",
              రంగు: "నలుపు"
            };
*/
  //turtle = Turtle();
  imageContext.font = turtle.font;
  imageContext.lineWidth = turtle.వెడల్పు;
  imageContext.strokeStyle = turtle.రంగు;
  imageContext.globalAlpha = 1;

  svgInitialize()
}


function round( n, digits) {
    // round n to the digits number of digits
    // n is the number to be rounded
    // digits is the number of digits
    if (digits === undefined) {
      digits = 0
    }
    magnitude = Math.pow( 10, digits)
    return Math.round( n * magnitude) / magnitude
}


// **** SVG VARIABLES ****

const svgPrecision = 3
var svgBlob = ""
var svgD = ""
var svgLastMove = undefined;
var svgPath = "";
var svgBackground = "";
var pathCount = 0
var svgXHighWater = 0
var svgXLowWater = 0
var svgYHighWater = 0
var svgYLowWater = 0

function svgInitialize() {
// వెడల్పు and height are problemmatic here as not all or more of the canvas may be used.
  svgBlob = ""
  svgD = ""
  svgPath = "";
  svgBackground = "";
  pathCount = 0
  svgXHighWater = 0
  svgXLowWater = 0
  svgYHighWater = 0
  svgYLowWater = 0
}

/*  ***SAMPLE SVG***

<svg id="turtle-svg" xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="300">
  <path id="turtle-path-0" stroke="black" d="M 250 250 M 100 100 l 0 50 l -50 0 l 0 -50 l 50 0 " fill="none" vector-effect="non-scaling-stroke" />
  //<path id="turtle-path-1" stroke="blue" d="M 250 250 M 200 200 l 0 50 l -50 0" fill="none" vector-effect="non-scaling-stroke" />
  //<path id="turtle-path-2" stroke="red" d="M150 250 l0 -50 l50 0" fill="none" vector-effect="non-scaling-stroke" />
  <path stroke="blue" d="M 250 250 M 200 200 l 0 50 l -50 0" fill="none" vector-effect="non-scaling-stroke" />
  <path stroke="red" d="M150 250 l0 -50" fill="none" vector-effect="non-scaling-stroke" />
  <path stroke="red" stroke-width="3" d="M150 200 l50 0" fill="none" vector-effect="non-scaling-stroke" />

</svg>


<svg viewBox="-40 0 150 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <g fill="grey"
     transform="rotate(-10 50 100)
                translate(-36 45.5)
                skewX(40)
                scale(1 0.5)
                matrix(3 1 -1 3 30 40)" />
                matrix(1 0 0 -1 xLowWater yHighWater)" />
  </g>
 
  <use xlink:href="#heart" fill="none" stroke="red"/>
</svg>
*/


// what calls this?
// forward only when a path isn't already open?
//   might be the easiest
//   then it can Close a path because it just appends
function svgOpenPath( x, y) {
   // TODO(DSR) : uncomment this.
   // console.log( "sOP:", x, y, svgD)
   if (svgPath == "") { // no path open
     svgPath = '<path stroke="' + turtle.రంగు
     svgD =  ' d="M ' + round( x, svgPrecision) + ' ' + round( y, svgPrecision)
     svgLastMove = undefined
   }
  // TODO(DSR) : uncomment this.
  // console.log( "sOP svgD:",svgD)
}


function updateHighWater( x, y, radx, rady) {
  if (radx === undefined) {
    radx = turtle.వెడల్పు
  }
  if (rady === undefined) {
    rady = turtle.వెడల్పు
  }
  if (x + radx> svgXHighWater) {
    svgXHighWater = x + radx
  }
  if (x - radx < svgXLowWater) {
    svgXLowWater = x - radx
  }
  if (y + rady > svgYHighWater) {
    svgYHighWater = y + rady
  }
  if (y - rady < svgYLowWater) {
    svgYLowWater = y - rady
  }
}


function svgAppendPath( rx, ry) {
  // TODO(DSR) : uncomment this.
  // console.log( "sAP:",rx, ry, turtle.penDown, "last:", svgLastMove)
  updateHighWater( turtle.pos.x, turtle.pos.y)

  if (turtle.penDown) { // pen down
    if (svgPath === "") { // path not open, putting off as long as possible
      svgOpenPath( turtle.pos.x - rx, turtle.pos.y - ry); // position of where turtle started line segment
      svgLastMove = undefined; // since the open was absolute, don't need lead in
      updateHighWater( turtle.pos.x - rx, turtle.pos.y - ry)
    }
    if (svgLastMove !== undefined) { // move the accumulated movement
      svgD = svgD + " m " + round( svgLastMove[0], svgPrecision) + " " + round( svgLastMove[1], svgPrecision)
      svgLastMove = undefined
    }
    svgD = svgD + " l " + round( rx, svgPrecision) + " " + round( ry, svgPrecision)
  } else { // pen up
    if (svgLastMove !== undefined) {
      svgLastMove[0] = svgLastMove[0] + rx
      svgLastMove[1] = svgLastMove[1] + ry
    } else {
      svgLastMove = [rx, ry]
    }
  }
  // TODO(DSR) : uncomment this.
  // console.log( "sAP svgD:",svgD)
}


// assuming on రంగు change, వెడల్పు change or shape begin or shape end, the current path is closed
// really should not close path if nothing has marked... can this be done in the open path?
function svgClosePath() {
  if (svgPath !== "") { // something to close
    //if (svgLastMove !== undefined) { // output accumulated movement
    //  svgD = svgD + " m " + round( svgLastMove[0], svgPrecision) + " " + round( svgLastMove[1], svgPrecision)
    //} //else no move accumulated, nothing to do, but close the stroke
    svgPath = svgPath + '"' + svgD + '" fill="none" vector-effect="non-scaling-stroke" />\n'
    svgBlob = svgBlob + svgPath
    svgD = ""
    svgPath = ""
  } // else no path open, nothing to close or add.
  svgLastMove = undefined // just toss it out
}

function svgClose() {
//really want to set the size of the blob here and provide a transform
// so svgBlog = preamble + svgBlob + '</svg'
  svgClosePath();
  var svgOpenBlob = '<svg id="turtle-svg" xmlns="http://www.w3.org/2000/svg" version="1.1" width="' + round( svgXHighWater - svgXLowWater, svgPrecision) + '"'
  svgOpenBlob = svgOpenBlob + ' height="' + round( svgYHighWater - svgYLowWater, svgPrecision) + '">\n'
  if (svgBackground !== "") {
    svgOpenBlob = svgOpenBlob + '<rect width="100%" height="100%" fill="' + svgBackground + '"/>\n';
  }
  svgOpenBlob = svgOpenBlob + '<g transform="matrix(1 0 0 -1 ' + round( -svgXLowWater, svgPrecision) + ' ' + round( svgYHighWater, svgPrecision) + ')">\n'
  svgBlob = svgOpenBlob + svgBlob
  svgBlob = svgBlob + '</g>\n';
  svgBlob = svgBlob + '</svg>';
}


/*******************************************************************************
 * drawIf -- draw the turtle and the current image if redraw is true
 *           Complicated drawings render faster if redraw is false
 *
 * arguments: None
 *
 * returns: None
 ******************************************************************************/
function drawIf() {
   if (turtle.redraw) {
      draw();
   }
}


/*******************************************************************************
 * draw -- draw the turtle and the current image
 *
 * arguments: None
 *
 * returns: None
 ******************************************************************************/
function draw() {
   clearContext(turtleContext);
   // draw the turtle, if it is visible
   if (turtle.visible) {
      var x = turtle.pos.x;
      var y = turtle.pos.y;
      var w = 10;
      var h = 15;
      turtleContext.save();
      // use canvas centered coordinates facing upwards
      centerCoords(turtleContext);
      // move the origin to the turtle center
      turtleContext.translate(x, y);
      // rotate about the center of the turtle
      turtleContext.rotate(-turtle.కోణము);
      // move the turtle back to its position
      turtleContext.translate(-x, -y);
      // draw the turtle icon
      turtleContext.beginPath();
      turtleContext.moveTo(x - w/2, y);
      turtleContext.lineTo(x + w/2, y);
      turtleContext.lineTo(x, y + h);
      turtleContext.closePath();
      turtleContext.fillStyle = "green";
      turtleContext.fill();
      turtleContext.restore();
   }
   // now draw the background
   turtleContext.drawImage(imageCanvas, 0, 0, turtleContext.canvas.width,
       turtleContext.canvas.height, 0, 0, turtleContext.canvas.width,
       turtleContext.canvas.height);
}


/*******************************************************************************
 * centerCoords -- center the coordinates on a given canvas context
 *
 * arguments:
 *   context: context of a canvas
 *
 * returns: None
 ******************************************************************************/
// use canvas centered coordinates facing upwards
function centerCoords (context) {
   var వెడల్పు = context.canvas.width;
   var height = context.canvas.height;
   context.translate(వెడల్పు/2, height/2);
   context.transform(1, 0, 0, -1, 0, 0);
}


/*******************************************************************************
 * చెరిపి_వేయి -- చెరిపి_వేయి the display, don't move the turtle
 *
 * arguments: None
 *
 * returns: None
 ******************************************************************************/
function చెరిపి_వేయి() {
   clearContext(imageContext);
   drawIf();
}
clear = చెరిపి_వేయి;

/*******************************************************************************
 * clearContext -- చెరిపి_వేయి the specified context
 *
 * arguments: context for an image
 *
 * returns: None
 ******************************************************************************/
function clearContext(context) {
   context.save();
   context.setTransform(1,0,0,1,0,0);
   context.clearRect(0,0,context.canvas.width,context.canvas.height);
   context.restore();
}


/*******************************************************************************
 * ఆది_స్థితి -- reset the turtle graphics and move turtle to center facing North
 * ఆది_స్థితి 
 * arguments: None
 *
 * returns: None
 ******************************************************************************/
function ఆది_స్థితి() {
   //console.log(document.getElementById("stopButton").onClick)
   initialize();
   చెరిపి_వేయి();
   draw();
   stopAnimation();
   turtle.shape = false;
}
reset = ఆది_స్థితి;

/*******************************************************************************
 * home -- move the turtle to center facing North
 *
 * arguments: None
 *
 * returns: None
 ******************************************************************************/
// move the turtle to the origin and set heading to 0
function home() {
   setposition (0,0);
   దిశ_మార్చు(0);
}


/*******************************************************************************
 * stopAnimation -- stop all animations in progress
 *
 * arguments: None
 *
 * returns: None
 ******************************************************************************/
function stopAnimation() {
  while (intervals.length > 0) {
    clearInterval(intervals.pop());
  }
  while (timeouts.length > 0) {
    clearTimeout(timeouts.pop());
  }
  document.getElementById("stopButton").hidden = true;
}


/*******************************************************************************
 * redrawOnMove -- set the state of the redraw flag
 *
 * arguments:
 *   bool: desired state of redraw flag
 *
 * returns: None
 ******************************************************************************/
// turn on/off redrawing
function redrawOnMove(bool) {
   turtle.redraw = bool;
}


/*******************************************************************************
 * wrap -- set the desired state of the boundary wrapping function
 *
 * arguments:
 *   bool: desired state of boundary wrapping function
 *
 * returns: None
 ******************************************************************************/
function wrap(bool) {
   turtle.wrap = bool;
}


/*******************************************************************************
 * beginshape -- mark the beginning of a filled shape
 *
 * arguments: None
 *
 * returns: None
 ******************************************************************************/
function beginshape() {
  turtle.shape = true;
  imageContext.beginPath();
}

beginShape = beginshape;


/*******************************************************************************
 * fillshape -- fill shape
 *
 * arguments:
 *   styl: fill style (రంగు, gradient, or pattern), defaulting to turtle రంగు
 *
 * returns: None
 ******************************************************************************/
function fillshape( styl) {
  if (turtle.shape) {
    if (styl == undefined) {
       styl = turtle.రంగు;
    }
    if (typeof(styl) === "number") {
      if (styl < 16) { // assume standard logo turtle రంగు
        styl = logoColors [styl];
      } //else {
        //రంగు is assumed to be a 32-bit రంగు value
      //}
    } else if (typeof(styl) != "string") { // col is not a supported type
      styl = "నలుపు";
    }

    //imageContext.save()
    imageContext.closePath();
    imageContext.fillStyle=styl;
    imageContext.strokeStyle=turtle.రంగు; //stroke and fill can be different
    if (turtle.penDown) {
      imageContext.stroke();
      imageContext.fill();
    }
    //imageContext.restore();
    drawIf();
  }
  turtle.shape = false;
}

fillShape = fillshape;


//////Movement Functions

/*******************************************************************************
 * forward -- move the turtle forward, allowing for possible wrap-around
 * ముందుకు_జరుగు 
 * arguments:
 *   distance: number of pixels to move ముందుకు_జరుగు
 *
 * returns: None
 ******************************************************************************/
function ముందుకు_జరుగు(distance) {
   // define some local variables and functions
   var cosAngle = Math.cos(turtle.కోణము);
   var sinAngle = Math.sin(turtle.కోణము);
   var entryX;
   var entryY;
   var newX;
   var newY;
   var distance;
   var entryX = turtle.pos.x;
   var entryY = turtle.pos.y;
   var x = turtle.pos.x;
   var y = turtle.pos.y;

   // get the boundaries of the canvas
   var గరిష్ఠ_X = imageContext.canvas.width / 2;
   var కనిష్ఠ_X = -imageContext.canvas.width / 2;
   var గరిష్ఠ_Y = imageContext.canvas.height / 2;
   var కనిష్ఠ_Y = -imageContext.canvas.height / 2;


   // wrap on the X boundary
   function xWrap(cutBound, otherBound) {
      var distanceToEdge = Math.abs((cutBound - x) / sinAngle);
      var edgeY = cosAngle * distanceToEdge + y;
      imageContext.lineTo(cutBound, edgeY);
      distance -= distanceToEdge;
      x = otherBound;
      y = edgeY;
      turtle.pos.x = x;
      turtle.pos.y = y;
      svgAppendPath( x - entryX, y - entryY)
   }

   // wrap on the Y boundary
   function yWrap(cutBound, otherBound) {
      var distanceToEdge = Math.abs((cutBound - y) / cosAngle);
      var edgeX = sinAngle * distanceToEdge + x;
      imageContext.lineTo(edgeX, cutBound);
      distance -= distanceToEdge;
      x = edgeX;
      y = otherBound;
      turtle.pos.x = x;
      turtle.pos.y = y;
      svgAppendPath( x - entryX, y - entryY)
   }

   // don't wrap the turtle on any boundary
   function noWrap(x, y) {
      imageContext.lineTo(x, y);
      turtle.pos.x = x;
      turtle.pos.y = y;
      distance = 0;
      svgAppendPath( x - entryX, y - entryY)
   }


   imageContext.save();
   centerCoords(imageContext);
   if (! turtle.shape) {
      imageContext.beginPath();
   }

   // trace out the forward steps
   while (distance > 0) {
      // move the to current location of the turtle
      if (! turtle.shape) {
        imageContext.moveTo(x, y);
      }
      // calculate the new location of the turtle after doing the forward movement
      newX = x + sinAngle * distance;
      newY = y + cosAngle * distance;

      // if wrap is on, trace a part segment of the path and wrap on boundary if necessary
      if (! turtle.shape && turtle.wrap) {
         if (newX > గరిష్ఠ_X) {
            xWrap(గరిష్ఠ_X, కనిష్ఠ_X);
         }
         else if (newX < కనిష్ఠ_X) {
            xWrap(కనిష్ఠ_X, గరిష్ఠ_X);
         }
         else if (newY > గరిష్ఠ_Y) {
            yWrap(గరిష్ఠ_Y, కనిష్ఠ_Y);
         }
         else if (newY < కనిష్ఠ_Y) {
            yWrap(కనిష్ఠ_Y, గరిష్ఠ_Y);
         }
         else {
            noWrap(newX, newY);
         }
      } else { // wrap is not on.
         noWrap(newX, newY);
      }
   }
   // draw only if the pen is currently down.
   if (! turtle.shape && turtle.penDown) {
      imageContext.stroke();
   }
   imageContext.restore();
   if (! turtle.shape) {
      drawIf();
   }
}

fd = ముందుకు_జరుగు;
forward = ముందుకు_జరుగు;

/*******************************************************************************
 * వెనుకకు_జరుగు -- move the turtle backward, allowing for possible wrap-around
 *
 * arguments:
 *   distance: number of pixels to move backward
 *
 * arguments: None
 *
 * returns: None
 ******************************************************************************/
function వెనుకకు_జరుగు(distance) {
  కుడి_వైపు_తిరుగు(180);
  ముందుకు_జరుగు(distance);
  కుడి_వైపు_తిరుగు(180);
}

bk = వెనుకకు_జరుగు;
back = వెనుకకు_జరుగు;
backward = వెనుకకు_జరుగు;

/*******************************************************************************
 * కుడి_వైపు_తిరుగు -- turn the turtle right a number of degrees
 * కుడి_వైపు_తిరుగు 
 * arguments:
 *   కోణము: కోణము in degrees to turn
 *
 * returns: None
 ******************************************************************************/
function కుడి_వైపు_తిరుగు(కోణము) {
   turtle.కోణము += degToRad(కోణము);
   drawIf();
}

turn = కుడి_వైపు_తిరుగు;
rt = కుడి_వైపు_తిరుగు;


/*******************************************************************************
 * ఎడమ_వైపు_తిరుగు -- turn the turtle left a number of degrees
 *
 * arguments:
 *   కోణము: కోణము in degrees to turn
 *
 * arguments: None
 *
 * returns: None
 ******************************************************************************/
function ఎడమ_వైపు_తిరుగు(కోణము) {
   turtle.కోణము -= degToRad(కోణము);
   drawIf();
}

lt = ఎడమ_వైపు_తిరుగు;




/*******************************************************************************
 * curveleft -- move the turtle forward along a path curving to the left
 *
 * arguments:
 *   వ్యాసార్థము: వ్యాసార్థము of the curve
 *   extent: number of degrees in the curve
 *
 * returns: None
 ******************************************************************************/
function curveleft (వ్యాసార్థము, extent) {
  if (extent == undefined) {
    extent = 359.9999; // this doesn't work if closer to 360, don't know why
  }
  var startAngle = turtle.కోణము; // in radians from 12 o'clock .. heading is same as start
  var counterclockwise = true;
  var centerX = turtle.pos.x - వ్యాసార్థము * Math.cos (turtle.కోణము); // left of turtle
  var centerY = turtle.pos.y + వ్యాసార్థము * Math.sin (turtle.కోణము);
  stopAngle = constrain( (startAngle - degToRad(extent)), 0, 2*Math.PI); // in radians CCW
  turtle.కోణము = stopAngle;
  turtle.pos.x = centerX + వ్యాసార్థము * Math.cos(stopAngle);
  turtle.pos.y = centerY - వ్యాసార్థము * Math.sin(stopAngle);

  // correct for flipping of x values, this changes rotation and angles
  counterclockwise = !counterclockwise;
  startAngle = -startAngle;
  stopAngle = -stopAngle;

  imageContext.save();
  centerCoords(imageContext);
  imageContext.beginPath();
  imageContext.arc (centerX, centerY, వ్యాసార్థము, startAngle, stopAngle, counterclockwise);
  // draw it
  if (turtle.penDown) {
    imageContext.stroke();
  }
  imageContext.restore();
  drawIf();
}
/*
part of a path d= expression:
a rx ry x-axis-rotation large-arc-flag sweep-flag dx dy
rx and ry are the radia of an elipse
x-axis-rotation is the rotation of the elipse
large-arg-flag
sweep-flag
dx and dy are the center of the arc

so this translates "curveleft (వ్యాసార్థము, extent)" roughly to:

<path ... d="... a <వ్యాసార్థము> <వ్యాసార్థము> 0 1 <turtle.pos.x> + <వ్యాసార్థము> * sin(<turtle.heading>) <turtle.pos.x> + <వ్యాసార్థము> * cos(<turtle.heading>)
   "l <x of arc end> <y of arc end>"
arc end is determined from the center of the arc through extent degrees
*/
curveLeft = curveleft;


/*******************************************************************************
 * curveright -- move the turtle forward along a path curving to the right
 *
 * arguments:
 *   వ్యాసార్థము: వ్యాసార్థము of the curve
 *   extent: number of degrees in the curve
 *
 * returns: None
 ******************************************************************************/
function curveright (వ్యాసార్థము, extent) {
  if (extent == undefined) {
    extent = 359.9999; // this doesn't work if closer to 360, don't know why
  }
  var startAngle = Math.PI + turtle.కోణము; // in radians .. heading is same as start
  var counterclockwise = false;
  var centerX = turtle.pos.x + వ్యాసార్థము * Math.cos (turtle.కోణము); // right of turtle
  var centerY = turtle.pos.y - వ్యాసార్థము * Math.sin (turtle.కోణము);
  stopAngle = constrain( startAngle + degToRad(extent), 0, 2*Math.PI); // in radians CW
  turtle.కోణము = stopAngle + Math.PI;
  turtle.pos.x = centerX + వ్యాసార్థము * Math.cos(stopAngle);
  turtle.pos.y = centerY - వ్యాసార్థము * Math.sin(stopAngle);

  // correct for flipping of x values, this changes rotation and angles
  counterclockwise = !counterclockwise;
  startAngle = -startAngle;
  stopAngle = -stopAngle;
    //write(startAngle + "  " + stopAngle + "  " + startAngle+degToRad(extent))
  imageContext.save();
  centerCoords(imageContext);
  imageContext.beginPath();
  imageContext.arc (centerX, centerY, వ్యాసార్థము, startAngle, stopAngle, counterclockwise);
  // draw it
  if (turtle.penDown) {
    imageContext.stroke();
  }
  imageContext.restore();
  drawIf();
}

curveRight = curveright;


/*******************************************************************************
 * వృత్తము -- draw a cirle about the current turtle position
 *
 * arguments:
 *   వ్యాసార్థము:  వ్యాసార్థము of వృత్తము in pixels
 *   extent:  size of arc in degrees (optional, defaults to full వృత్తము)
 *   CW:      boolean for direction of arc (optional defaults to true or clockwise)
 *
 * returns: None
 ******************************************************************************/
function వృత్తము(వ్యాసార్థము, extent, CW) {
  if (CW === undefined) {
    CW = true;
  }
  startAngle = turtle.కోణము - Math.PI/2; // translate turtle to normal canvas coordinate
  imageContext.save();
  centerCoords(imageContext);
  imageContext.beginPath();
  imageContext.strokeStyle=turtle.రంగు;
  //imageContext.fillStyle=turtle.రంగు;
  // negate angles and CW due to context translation
  if (extent === undefined) {
    imageContext.arc (turtle.pos.x, turtle.pos.y, వ్యాసార్థము, 0, 2*Math.PI);
    svgClosePath()
    svgBlob = svgBlob + '<circle cx="' + round( turtle.pos.x, svgPrecision) + '" cy="' + round( turtle.pos.y, svgPrecision)
              + '" r="' + round( వ్యాసార్థము, svgPrecision) + '"'
              + ' style="stroke:' + turtle.రంగు + '; stroke-width:' + turtle.వెడల్పు + '; fill:none"/>\n'; 
    updateHighWater( turtle.pos.x, turtle.pos.y,  వ్యాసార్థము + turtle.వెడల్పు, వ్యాసార్థము + turtle.వెడల్పు)
   
  } else if (CW) {
    imageContext.arc (turtle.pos.x, turtle.pos.y, వ్యాసార్థము, -startAngle, -(startAngle+degToRad(extent)), CW);
  } else {
    imageContext.arc (turtle.pos.x, turtle.pos.y, వ్యాసార్థము, -startAngle, -(startAngle-degToRad(extent)), CW);
  }
  // draw it regardless of pen up or down
  imageContext.stroke();
  //imageContext.fill();
  imageContext.restore();
  drawIf();
}
circle = వృత్తము;
/*
<circle cx="40" cy="40" r="24"
    style="stroke:#006600;
           stroke-width: 3;
           stroke-dasharray: 10 5;
           fill:#00cc00"/>

so the partial arc problem can be part of a path d= expression:
a rx ry x-axis-rotation large-arc-flag sweep-flag dx dy
rx and ry are the radii of an elipse
x-axis-rotation is the rotation of the elipse
large-arg-flag
sweep-flag
dx and dy are the center of the arc

so this translates "వృత్తము (వ్యాసార్థము, extent, CW)" roughly to:

need to compute path start, path end and వృత్తము center
కోణము start = turtle.heading
వృత్తము center = turtle.pos
path start = turtle.pos.x + వ్యాసార్థము * Math.cos( turtle.కోణము), turtle.pos.y + వ్యాసార్థము * Math.sin( turtle.కోణము)
path end = turtle.pos.x + వ్యాసార్థము * Math.cos( turtle.కోణము + extent), turtle.pos.y + వ్యాసార్థము * Math.sin( turtle.కోణము + extent)
<path ... d="M <pathStartX> <pathStartY a <వ్యాసార్థము> <వ్యాసార్థము> 0 1 0 circleCenterX circleCenterY l pathEndX pathEndY
   "l <x of arc end> <y of arc end>"
arc end is determined from the center of the arc through extent degrees
*/
arc = వృత్తము;
చాపము = arc;
/*******************************************************************************
 * dot -- draw a filled వృత్తము at the turtle position
 *
 * arguments:
 *   size:  వ్యాసార్థము of dot in pixels (optional defaults to గరిష్ఠ of pensize+4, 2*pensize)
 *
 * returns: None
 ******************************************************************************/
function dot(size) {
  if (size == undefined) {
    size = Math.max(turtle.వెడల్పు+4, turtle.వెడల్పు*2);
  }
  imageContext.save();
  centerCoords(imageContext);
  imageContext.beginPath();
  imageContext.fillStyle=turtle.రంగు;
  imageContext.strokeStyle=turtle.రంగు;
  imageContext.arc (turtle.pos.x, turtle.pos.y, size, 0, 2*Math.PI);
  // draw it regardless of pen up or down
  imageContext.stroke();
  imageContext.fill();
  imageContext.restore();
  svgClosePath()
  svgBlob = svgBlob + '<circle cx="' + round( turtle.pos.x, svgPrecision) + '" cy="' + round( turtle.pos.y, svgPrecision)
            + '" r="' + round( size, svgPrecision) + '"'
            + ' style="stroke:' + turtle.రంగు + '; stroke-width:' + turtle.వెడల్పు + '; fill:' + turtle.రంగు + '"/>\n';
  drawIf();
}


/*******************************************************************************
 * కలమును_పైకి_ఎత్తు -- lift the turtle pen up (set marking state to false)
 * కలమును_పైకి_ఎత్తు 
 * arguments: None
 *
 * returns: None
 ******************************************************************************/
function కలమును_పైకి_ఎత్తు() {
  turtle.penDown = false;
}

pu = కలమును_పైకి_ఎత్తు;
up = కలమును_పైకి_ఎత్తు;
penUp = కలమును_పైకి_ఎత్తు;


/*******************************************************************************
 * కలమును_కింద_పెట్టు -- drop the turtle pen (set marking state to true)
 * కలమును_కింద_పెట్టు 
 * arguments: None
 *
 * returns: None
 ******************************************************************************/
function కలమును_కింద_పెట్టు() {
  turtle.penDown = true;
}

pd = కలమును_కింద_పెట్టు;
down = కలమును_కింద_పెట్టు;
penDown = కలమును_కింద_పెట్టు;


/*******************************************************************************
 * కుంచికను_దాచు -- do not draw the turtle
 * కుంచికను_దాచు 
 * arguments: None
 *
 * returns: None
 ******************************************************************************/
function కుంచికను_దాచు() {
   turtle.visible = false;
   drawIf();
}

ht = కుంచికను_దాచు;
hideTurtle = కుంచికను_దాచు;


/*******************************************************************************
 * show turtle -- draw the turtle
 *
 * arguments: None
 *
 * returns: None
 ******************************************************************************/
function కుంచికను_చూపు() {
   turtle.visible = true;
   drawIf();
}

st = కుంచికను_చూపు;
showTurtle = కుంచికను_చూపు;


/*******************************************************************************
 * స్థితి_మార్చు -- move the turtle to an x,y position without leaving a mark
 * స్థితి_మార్చు
 * arguments:
 *   x: x coordinate
 *   y: y coordinate
 *
 * returns: None
 ******************************************************************************/
function స్థితి_మార్చు(x,y) {
   turtle.pos.x = x;
   turtle.pos.y = y;
   drawIf();
}

setposition = స్థితి_మార్చు;
setpos = స్థితి_మార్చు;
setPosition = స్థితి_మార్చు;
setPos = స్థితి_మార్చు;
goto = స్థితి_మార్చు;


/*******************************************************************************
 * setx -- change the turtle x-coordinate without leaving a mark
 *
 * arguments:
 *   x: x coordinate
 *
 * returns: None
 ******************************************************************************/
function setx(x) {
   turtle.pos.x = x;
   drawIf();
}

setX = setx;


/*******************************************************************************
 * sety -- change the turtle y-coordinate without leaving a mark
 *
 * arguments:
 *   y: y coordinate
 *
 * returns: None
 ******************************************************************************/
function sety(y) {
   turtle.pos.y = y;
   drawIf();
}

setY = sety;


/*******************************************************************************
 * కోణము -- set the కోణము of the turtle in degrees
 *
 * arguments:
 *   కోణము: (int) కోణము in degrees clockwise from the top center.
 *
 * returns: None
 ******************************************************************************/
function కోణము(కోణము) {
   turtle.కోణము = degToRad(కోణము);
   drawIf();
}

setheading = కోణము;
setHeading = కోణము;
seth = కోణము;
దిశ_మార్చు = కోణము;

/*******************************************************************************
 * background -- set the background రంగు
 *
 * arguments:
 *   styl: fill style (రంగు, gradient, or pattern), defaulting to turtle రంగు
 *
 * returns: None
 ******************************************************************************/

function background( styl) {
    if (styl == undefined) {
       styl = turtle.రంగు;
    }
    if (typeof(styl) === "number") {
      if (styl < 16) { // assume standard logo turtle రంగు
        styl = logoColors [styl];
      } //else {
        //రంగు is assumed to be a 32-bit రంగు value
      //}
    } else if (typeof(styl) != "string") { // col is not a supported type
      styl = "నలుపు";
    }
    imageContext.fillStyle = styl;
    imageContext.fillRect(0, 0, imageCanvas.width, imageCanvas.height);
    svgBackground = styl;
    //imageContext.fill;
}


/*******************************************************************************
 * write -- print some text along path of turtle, turtle does not move
 *
 * arguments:
 *   msg: text to be printed
 *
 * returns: None
 ******************************************************************************/
function write(msg) {
   imageContext.save();
   centerCoords(imageContext);
   imageContext.translate(turtle.pos.x, turtle.pos.y);
   imageContext.transform(1, 0, 0, -1, 0, 0);
   imageContext.rotate(turtle.కోణము - Math.PI/2);
   imageContext.textAlign = "left";
   imageContext.textBaseline = "bottom";
   imageContext.fillStyle = turtle.రంగు;
   imageContext.fillText(msg, 0, 0);
   imageContext.restore();
   drawIf();
}


/*******************************************************************************
 * random -- generate a random integer between low (or 0 if unspecified) and high
 *
 * arguments:
 *   low: low limit of the random number (0, if only one parameter is used)
 *   high: high limit of the random number
 *
 * returns:
 *   (int) generated random number
 ******************************************************************************/
function random(low, high) {
   if (high == undefined) {
     return Math.floor( (low + 1) * Math.random ());
   } else {
     return Math.floor(Math.random() * (high - low + 1) + low);
   }
}


/*******************************************************************************
 * ఆవర్తించు -- repeat an action n times
 *
 * arguments:
 *   ఎన్ని_సార్లు_చేయాలి: number of times to repeat the action
 *   క్రియ: a reference to a function
 *
 * returns: None
 ******************************************************************************/
function ఆవర్తించు(ఎన్ని_సార్లు_చేయాలి, క్రియ) {
   let ఎన్ని_సార్లు_చేసింది = 0;
   for (ఎన్ని_సార్లు_చేసింది = 0; ఎన్ని_సార్లు_చేసింది < ఎన్ని_సార్లు_చేయాలి; ఎన్ని_సార్లు_చేసింది += 1) {
      క్రియ();
      if (errorFound)
        break;
   }
}
repeat = ఆవర్తించు;

యావత్_పరిక్రమ = (సంసక్త, కార్యము) => {
  while( సంసక్త() ) కార్యము()
};


/*******************************************************************************
 * sleep -- just wait in place for a number of milliseconds
 *
 * note:
 *   this is not a very efficient or elegant way of doing this
 *   this does not cause the drawing to be rendered, use delay instead
 *
 * arguments:
 *   ms: number of milliseconds of delay before executing function f
 *
 * returns: None
 ******************************************************************************/
function sleep(ms) {
  var start = new Date().getTime();
  var limit = 1000 * 60 * 1; // set గరిష్ఠ time to 1 minute
  var i = 0;
  for (i = 0; i < limit; i += 1) {
    if ((new Date().getTime() - start) > ms) {
      break;
    }
  }
}

pause = sleep;


///////ATTRIBUTE FUNCTIONS


/*******************************************************************************
 * వెడల్పు -- set the వెడల్పు of the line
 * వెడల్పు 
 * arguments:
 *   w: (int) వెడల్పు of the line
 *
 * returns: None
 ******************************************************************************/
function వెడల్పు(w) {
   turtle.వెడల్పు = w;
   imageContext.lineWidth = w;
}

pensize = వెడల్పు;
penwidth = వెడల్పు;
penSize = వెడల్పు;
penWidth = వెడల్పు;
width = వెడల్పు;

/*******************************************************************************
 * రంగు -- set the రంగు of the line and fill using turtle graphic and CSS colors
 *
 * arguments:
 *   col: రంగు in one of several formats:
 *     Hexadecimal colors (e.g., "#ff0000", "#f00")
 *     RGB colors (e.g., "rgb(255,0,0)")
 *     RGBA colors (e.g., "rgba(255,0,0,1)")
 *     HSL colors (e.g., "hsl(120, 100%, 50%)")
 *     HSLA colors (e.g., "hsla(120, 100%, 50%, 1)")
 *     Predefined/Cross-browser రంగు names (e.g., "red")
 *     logo రంగు numbers 0 to 15 as index into:*/
const నలుపు = "నలుపు";
const నీలము = "నీలము";
const నిమ్మ = "నిమ్మ";
// "cyan", 
const ఎరుపు = "ఎరుపు";
// "magenta"
const పసుపు = "పసుపు";
const తెలుపు = "తెలుపు";
const కపిలము = "కపిలము";
// "tan"
const ఆకుపచ్చ = "ఆకుపచ్చ";
const సముద్రము = "సముద్రము";
// "salmon",
// "purple", 
const నారింజ = "నారింజ";
const బూడిద = "బూడిద";

రంగుల_పేర్లు = ["నలుపు", "నీలము", "నిమ్మ", "cyan", "ఎరుపు", "magenta", "పసుపు", "తెలుపు",
"కపిలము", "tan", "ఆకుపచ్చ", "సముద్రము", "salmon", "purple", "నారింజ", "బూడిద"]
logoColors = ["black", "blue", "lime", "cyan", "red", "magenta", "yellow", "white",
              "brown", "tan", "green", "aqua", "salmon", "purple", "orange", "gray"]
/*
 * returns: None
 ******************************************************************************/
function రంగు (col) {
  svgClosePath();
  if (typeof(col) === "number") {
    if (col < 16) { // assume standard logo turtle రంగు
      col = logoColors [col];
      console.log( "col, logoColors [col] = ", col, logoColors [col] );
    } //else {
      //రంగు is assumed to be a 32-bit రంగు value
    //}
  } else if (typeof(col) != "string") { // col is not a supported type
    col = "నలుపు";
  } 
  else {
    const idx = రంగుల_పేర్లు.indexOf(col);
    // TODO(DSR) : uncomment this.
    // console.log( "col, idx = ", col, idx );
    if ( idx > 0 ) {
      console.log( " రంగు = ", logoColors[idx] );
      col = logoColors[idx];
    }  
  }
  turtle.రంగు = col;
  imageContext.strokeStyle = col;
}

colour = రంగు;
color = రంగు;


/*******************************************************************************
 * అక్షరరూపము_స్థాపించు -- set the font used by the write function
 * అక్షరరూపము_స్థాపించు 
 * arguments:
 *   font: string defining the font characteristics (style, variant, weight, size,
 *         and font-family for fi ads a subsequent writes.
 *         Example: అక్షరరూపము_స్థాపించు("italic small-caps bold 12px courier")
 *
 * returns: None
 ******************************************************************************/
function అక్షరరూపము_స్థాపించు(font) {
   turtle.font = font;
   imageContext.font = font;
}

setFont = అక్షరరూపము_స్థాపించు;
setfont = అక్షరరూపము_స్థాపించు;


/*******************************************************************************
 * గరిష్ఠX -- get the గరిష్ఠ X value
 *
 * arguments: None
 *
 * returns:
 *   (int) the గరిష్ఠ X value for the current canvas
 ******************************************************************************/
function గరిష్ఠX () {
  return (imageContext.canvas.width / 2);
}

maxx = గరిష్ఠX;
maxX = గరిష్ఠX;

/*******************************************************************************
 * కనిష్ఠX -- get the కనిష్ఠ X value
 *
 * arguments: None
 *
 * returns:
 *   (int) the కనిష్ఠ X value for the current canvas
 ******************************************************************************/
function కనిష్ఠX () {
  return (-imageContext.canvas.width / 2);
}

minx = కనిష్ఠX;
minX = కనిష్ఠX;

/*******************************************************************************
 * గరిష్ఠY -- get the గరిష్ఠ Y value
 *
 * arguments: None
 *
 * returns:
 *   (int) the గరిష్ఠ Y value for the current canvas
 ******************************************************************************/
function గరిష్ఠY () {
  return (imageContext.canvas.height / 2);
}

maxy = గరిష్ఠY;
maxY = గరిష్ఠY;


/*******************************************************************************
 * కనిష్ఠY -- get the కనిష్ఠ Y value
 * కనిష్ఠY 
 * arguments: None
 *
 * returns:
 *   (int) the కనిష్ఠ Y value for the current canvas
 ******************************************************************************/
function కనిష్ఠY () {
  return (-imageContext.canvas.height / 2);
}

miny = కనిష్ఠY;
minY = కనిష్ఠY;


///////ANIMATION SUB-MODULE
//This maybe should be broken out as a separate module sometime

// some globals
var intervals = []; //array of inteval IDs started with the animate function
var timeouts = []; //array of time out IDs started with the delay function


/*******************************************************************************
 * ఆడించు -- repeat an action every ms millisecond to animate drawing
 *
 * arguments:
 *   f: a reference to a function
 *   ms: number of milliseconds between execution of function f
 *
 * returns: None
 ******************************************************************************/
function ఆడించు(f, ms) {
   intervals.push (setInterval( function (){
      f()
      if (errorFound)
        stop()
   }, ms));
   document.getElementById("stopButton").hidden=false;
}

animate = ఆడించు;

/*******************************************************************************
 * delay -- delay an action for ms milliseconds to animate drawing
 *
 * arguments:
 *   f: a reference to a function
 *   ms: number of milliseconds of delay before executing function f
 *
 * returns: None
 ******************************************************************************/
function delay(f, ms) {
   timeouts.push (setTimeout(function () {
       timeouts.pop(); // pop the current timer
       if (timeouts.length == 0) {
         document.getElementById("stopButton").hidden=true;
       }
       f();
       if (errorFound)
         stop()
     }, ms));
   document.getElementById("stopButton").hidden=false;
}


///////SUPPORT FUNCTIONS


/*******************************************************************************
 * degToRad -- convert angular degress into radians
 *
 * arguments:
 *   deg: (int) number of degrees
 *
 * returns:
 *   (int) number of radians
 ******************************************************************************/
function degToRad(deg) {
   return deg / 180 * Math.PI;
}


/*******************************************************************************
 * radToDeg -- convert radians into angular degrees
 *
 * arguments:
 *   rad: (int) number of radians
 *
 * returns:
 *   (int) number of degrees
 ******************************************************************************/
function radToDeg(rad) {
   return rad * 180 / Math.PI;
}


/*******************************************************************************
 * గాడిలో_పెట్టు -- constrain an కోణము to between high and low limits
 *
 * arguments: 
 *   n: (int or float) number which may be contrained
 *   low: (int or float) lowest possible return value
 *   high: (int or float) highest possible return value
 *
 * returns:
 *   (int or float) constrained value
 ******************************************************************************/
function గాడిలో_పెట్టు(n, low, high) {
  var modulo = high - low;
  while (n < low) {
    n = n + modulo;
  }
  while (n > high) {
    n = n - modulo;
  }
  return n;
}
constrain = గాడిలో_పెట్టు;

var turtleState = new Turtle();

function saveTurtleState(tState) {
  // tState is an object defining the state of a turtle
  // turtle is an object defining the current state of the turtle
  //what about the font
  tState.pos.x = turtle.pos.x
  tState.pos.y = turtle.pos.y
  tState.కోణము = turtle.కోణము
  tState.penDown = turtle.penDown
  tState.వెడల్పు = turtle.వెడల్పు
  tState.visible = turtle.visible
  tState.redraw = turtle.redraw
  tState.shape = turtle.shape
  tState.wrap = turtle.wrap
  tState.font = turtle.font
  tState.రంగు = turtle.రంగు
  console.log("sTS font: "+ tState.font + " రంగు:" + tState.రంగు)
}


function restoreTurtleState(tState) {
  // tState is an object defining the state of a turtle
  // turtle is an object defining the current state of the turtle
  //what about the font
  turtle.pos.x = tState.pos.x
  turtle.pos.y = tState.pos.y
  turtle.కోణము = tState.కోణము
  turtle.penDown = tState.penDown
  turtle.వెడల్పు = tState.వెడల్పు
  turtle.visible = tState.visible
  turtle.redraw = tState.redraw
  turtle.shape = tState.shape
  turtle.wrap = tState.wrap
  turtle.font = tState.font
  turtle.రంగు = tState.రంగు

  imageContext.font = tState.font;
  imageContext.lineWidth = tState.వెడల్పు;
  imageContext.strokeStyle = tState.రంగు;
  console.log("rTS font: "+ turtle.font + " రంగు:" + turtle.రంగు)
  console.log("rTS font: "+ imageContext.font + " రంగు:" + imageContext.strokeStyle)
}


function logTurtle( where) {
  // t is an object defining the state of a turtle
  if (where === undefined) where = "???"
  console.log (where + " x:" + turtle.pos.x + " y:" + turtle.pos.y + " కోణము:" + turtle.కోణము + " రంగు:" + turtle.రంగు)
  console.log ("  penDown:" + turtle.penDown + " వెడల్పు:" + turtle.వెడల్పు + " visible:" + turtle.visible)
  console.log ("  redraw:" + turtle.redraw + " shape:" + turtle.shape + " wrap:" + turtle.wrap)
  console.log ("  font:" + turtle.font)
}


ఆది_స్థితి();
