/************************************************************************
*  కుంచిక.js -- javascript for the కుంచిక graphic language extensions
*
*  Copyright (c) 2015-2019 Kirk Carlson
*  MIT license
*
*  would like to allow optional animation of each line drawn
*  see jsfiddle.net/epistemex/c85cmy0z/ for example of how to do this
************************************************************************/
/*************************************************************************************
Coordinate systems...

Drawing a వృత్తము became a pain because of the number of different coordinate
systems being used. These are:
  - the javascript canvas.
    * origin is at the top left
    * origin has positive going down, no negatives
    * origin has been translated to mimic cartesian coordinates
    * arcs are referenced with 0 at 3 o'clock going clockwise
  - cartesian coodinates
    * origin is at center with positive up
    * 0 కోణము is at 3 o'clock going counterclockwise
  - the కుంచిక graphic space.
    * Origin at center to mimic cartesian coordinates
    * heading is referenced with 0 కోణము at 12 o'clock going clockwise

Canvases:

Two canvases are used:
  imageCanvas to hold the image drawn by the కుంచిక
  కుంచికCanvas to hold the image of the కుంచిక AND the image drawn by the కుంచిక
The imageCanvas is not visable, only the కుంచికCanvas is visible.
#### the above should change, there should be two layers, the కుంచిక and the image.
#### if the కుంచిక is not visible, that layer is invisible and not updated.
#### this is a major change, so commit it out
The "redraw" boolean function controls whether the కుంచిక is drawn after each move.
##### this includes an image copy, which is the expensive operation, use layers instead!

"wrap" only works for straight lines, not curves,  వృత్తములు, or నిండు_వృత్తములు.

This is an experimental version that allows export of svg graphic in addition to
the png for the canvas. Turtle moves are accumulated and then exported enmass.

*************************************************************************************/
import { ఆవర్తించు, లెక్క_పెడుతూ_ఆవర్తించు, యావత్_పరిక్రమ, యది_చేత్_అన్యథ, యది_చేత్, విరామము } from "./కార్యభాషా.js";
import { intervals, timeouts, errorFound } from "./కార్యభాషా.js";

// get a handle for the canvases in the document
var imageCanvas = document.getElementById("imagecanvas");
var imageContext = imageCanvas.getContext("2d");

imageContext.textAlign = "center";
imageContext.textBaseline = "middle";

var కుంచికCanvas = document.getElementById("కుంచికcanvas");
var కుంచికContext = కుంచికCanvas.getContext("2d");

// the కుంచిక takes precedence when compositing
కుంచికContext.globalCompositeOperation = "destination-over";

const అవును = true;
const కాదు = false;

const ఉంది = true;
const లేదు = false;


//////RENDERING FUNCTIONS


function Pos (x,y) {
  this.x = x
  this.y = y
}

function Turtle () {
  this.స్థానము = new Pos(0,0)
  this.కోణము = 0
  this.penDown = true
  this.వెడల్పు = 1
  this.visible = true // controls కుంచిక visibility
  this.redraw = true //  controls redrawing కుంచిక every move
  this.ఆకారాము = false //  controls inclusion of segments from a filled shape
  this.wrap = true //    controls wraping at the edge
  this.font = "10pt normal Helvetica, sans-serif"
  this.రంగు = "నలుపు"
};

// initialize the state of the కుంచిక
var కుంచిక = new Turtle();
console.log("Tangle:" + కుంచిక.కోణము + "Tfont: "+ కుంచిక.font )

/*******************************************************************************
 * initialize -- initialize the కుంచిక graphics system
 *
 * arguments: None
 *
 * returns: None
 ******************************************************************************/
function initialize() {
  కుంచిక.స్థానము.x = 0
  కుంచిక.స్థానము.y = 0
  కుంచిక.కోణము = 0
  కుంచిక.penDown = true
  కుంచిక.వెడల్పు = 1
  కుంచిక.visible = true // controls కుంచిక visibility
  కుంచిక.redraw = true //  controls redrawing కుంచిక every move
  కుంచిక.ఆకారాము = false //  controls inclusion of segments from a filled shape
  కుంచిక.wrap = true //    controls wraping at the edge
  కుంచిక.font = "10pt normal Helvetica, sans-serif"
  కుంచిక.రంగు = "నలుపు"
  imageContext.font = కుంచిక.font;
  imageContext.lineWidth = కుంచిక.వెడల్పు;
  imageContext.strokeStyle = కుంచిక.రంగు;
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
    const magnitude = Math.pow( 10, digits)
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

<svg id="కుంచిక-svg" xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="300">
  <path id="కుంచిక-path-0" stroke="black" d="M 250 250 M 100 100 l 0 50 l -50 0 l 0 -50 l 50 0 " fill="none" vector-effect="non-scaling-stroke" />
  //<path id="కుంచిక-path-1" stroke="blue" d="M 250 250 M 200 200 l 0 50 l -50 0" fill="none" vector-effect="non-scaling-stroke" />
  //<path id="కుంచిక-path-2" stroke="red" d="M150 250 l0 -50 l50 0" fill="none" vector-effect="non-scaling-stroke" />
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
     svgPath = '<path stroke="' + కుంచిక.రంగు
     svgD =  ' d="M ' + round( x, svgPrecision) + ' ' + round( y, svgPrecision)
     svgLastMove = undefined
   }
  // TODO(DSR) : uncomment this.
  // console.log( "sOP svgD:",svgD)
}

function updateHighWater( x, y, radx, rady) {
  if (radx === undefined) {
    radx = కుంచిక.వెడల్పు
  }
  if (rady === undefined) {
    rady = కుంచిక.వెడల్పు
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
  // console.log( "sAP:",rx, ry, కుంచిక.penDown, "last:", svgLastMove)
  updateHighWater( కుంచిక.స్థానము.x, కుంచిక.స్థానము.y)

  if (కుంచిక.penDown) { // pen down
    if (svgPath === "") { // path not open, putting off as long as possible
      svgOpenPath( కుంచిక.స్థానము.x - rx, కుంచిక.స్థానము.y - ry); // position of where కుంచిక started line segment
      svgLastMove = undefined; // since the open was absolute, don't need lead in
      updateHighWater( కుంచిక.స్థానము.x - rx, కుంచిక.స్థానము.y - ry)
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
  let svgOpenBlob = '<svg id="కుంచిక-svg" xmlns="http://www.w3.org/2000/svg" version="1.1" width="' + round( svgXHighWater - svgXLowWater, svgPrecision) + '"'
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
 * drawIf -- draw the కుంచిక and the current image if redraw is true
 *           Complicated drawings render faster if redraw is false
 *
 * arguments: None
 *
 * returns: None
 ******************************************************************************/
function drawIf() {
   if (కుంచిక.redraw) {
      చిత్రీకరించు();
   }
}

/*******************************************************************************
 * draw -- draw the కుంచిక and the current image
 *
 * arguments: None
 *
 * returns: None
 ******************************************************************************/
function చిత్రీకరించు() {
   clearContext(కుంచికContext);
   // draw the కుంచిక, if it is visible
   if (కుంచిక.visible) {
      let x = కుంచిక.స్థానము.x;
      let y = కుంచిక.స్థానము.y;
      let w = 10;
      let h = 15;
      కుంచికContext.save();
      // use canvas centered coordinates facing upwards
      centerCoords(కుంచికContext);
      // move the origin to the కుంచిక center
      కుంచికContext.translate(x, y);
      // rotate about the center of the కుంచిక
      కుంచికContext.rotate(-కుంచిక.కోణము);
      // move the కుంచిక back to its position
      కుంచికContext.translate(-x, -y);
      // draw the కుంచిక icon
      కుంచికContext.beginPath();
      కుంచికContext.moveTo(x - w/2, y);
      కుంచికContext.lineTo(x + w/2, y);
      కుంచికContext.lineTo(x, y + h);
      కుంచికContext.closePath();
      కుంచికContext.fillStyle = "green";
      కుంచికContext.fill();
      కుంచికContext.restore();
   }
   // now draw the background
   కుంచికContext.drawImage(imageCanvas, 0, 0, కుంచికContext.canvas.width,
       కుంచికContext.canvas.height, 0, 0, కుంచికContext.canvas.width,
       కుంచికContext.canvas.height);
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
   let వెడల్పు = context.canvas.width;
   let height = context.canvas.height;
   context.translate(వెడల్పు/2, height/2);
   context.transform(1, 0, 0, -1, 0, 0);
}

/*******************************************************************************
 * చెరిపి_వేయి -- చెరిపి_వేయి the display, don't move the కుంచిక
 *
 * arguments: None
 *
 * returns: None
 ******************************************************************************/
function చెరిపి_వేయి() {
   clearContext(imageContext);
   drawIf();
}
const clear = చెరిపి_వేయి;

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
 * ఆది_స్థితి -- reset the కుంచిక graphics and move కుంచిక to center facing North
 * ఆది_స్థితి 
 * arguments: None
 *
 * returns: None
 ******************************************************************************/
function ఆది_స్థితి() {
   //console.log(document.getElementById("stopButton").onClick)
   initialize();
   చెరిపి_వేయి();
   చిత్రీకరించు();
   ఆట_ఆపు();
   కుంచిక.ఆకారాము = false;
}
const reset = ఆది_స్థితి;

/*******************************************************************************
 * కేంద్రకమునకు_వెళ్ళు -- move the కుంచిక to center facing North
 *
 * arguments: None
 *
 * returns: None
 ******************************************************************************/
// move the కుంచిక to the origin and set heading to 0
function కేంద్రకమునకు_వెళ్ళు() {
  స్థానము_మార్చు(0,0);
   దిశ_మార్చు(0);
}
const home = కేంద్రకమునకు_వెళ్ళు;
const go_home = కేంద్రకమునకు_వెళ్ళు;
const goHome = కేంద్రకమునకు_వెళ్ళు;


/*******************************************************************************
 * ఆట_ఆపు -- stop all animations in progress
 * ఆట_ఆపు 
 * arguments: None
 *
 * returns: None
 ******************************************************************************/
function ఆట_ఆపు() {
  యావత్_పరిక్రమ( () => (intervals.length > 0), () =>  {
    window.clearInterval(intervals.pop());
  } );
  యావత్_పరిక్రమ( () => (timeouts.length > 0), () => {
    window.clearTimeout(timeouts.pop());
  } );
  document.getElementById("stopButton").hidden = true;
}
const stopAnimation = ఆట_ఆపు;

/*******************************************************************************
 * కుంచిక_కదిలిన_ప్రతి_సారీ_చిత్రీకరించు -- set the state of the redraw flag
 *  కుంచిక_కదిలిన_ప్రతి_సారీ_చిత్రీకరించు 
 * arguments:
 *   bool: desired state of redraw flag
 *
 * returns: None
 ******************************************************************************/
// turn on/off redrawing
function కుంచిక_కదిలిన_ప్రతి_సారీ_చిత్రీకరించు(bool) {
   కుంచిక.redraw = bool;
}
const redrawOnMove = కుంచిక_కదిలిన_ప్రతి_సారీ_చిత్రీకరించు;


/*******************************************************************************
 * wrap -- set the desired state of the boundary wrapping function
 * wrap 
 * arguments:
 *   bool: desired state of boundary wrapping function
 *
 * returns: None
 ******************************************************************************/
function wrap(bool) {
   కుంచిక.wrap = bool;
}
const చుట్టు = () => wrap( true );
const చుట్టొద్దు = () => wrap( false );
// wrap = wrap;


/*******************************************************************************
 * ఆకారము_ప్రారంభించు -- mark the beginning of a filled shape
 * ఆకారము_ప్రారంభించు 
 * arguments: None
 *
 * returns: None
 ******************************************************************************/
function ఆకారము_ప్రారంభించు() {
  కుంచిక.ఆకారాము = true;
  imageContext.beginPath();
}

const beginShape = ఆకారము_ప్రారంభించు;


/*******************************************************************************
 * ఆకారము_ముగించు -- fill shape
 *  ఆకారము_ముగించు  
 * arguments:
 *   styl: fill style (రంగు, gradient, or pattern), defaulting to కుంచిక రంగు
 *
 * returns: None
 ******************************************************************************/
function ఆకారము_ముగించు( styl) {
  if (కుంచిక.ఆకారాము) {
    if (styl == undefined) {
       styl = కుంచిక.రంగు;
    }
    if (typeof(styl) === "number") {
      if (styl < 16) { // assume standard logo కుంచిక రంగు
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
    imageContext.strokeStyle=కుంచిక.రంగు; //stroke and fill can be different
    if (కుంచిక.penDown) {
      imageContext.stroke();
      imageContext.fill();
    }
    //imageContext.restore();
    drawIf();
  }
  కుంచిక.ఆకారాము = false;
}

const fillShape = ఆకారము_ముగించు;


//////Movement Functions

/*******************************************************************************
 * forward -- move the కుంచిక forward, allowing for possible wrap-around
 * ముందుకు_జరుగు 
 * arguments:
 *   distance: number of pixels to move ముందుకు_జరుగు
 *
 * returns: None
 ******************************************************************************/
function ముందుకు_జరుగు( ఎన్ని_బిందువులు) {
   // define some local variables and functions
   let cosAngle = Math.cos(కుంచిక.కోణము);
   let sinAngle = Math.sin(కుంచిక.కోణము);
   let newX;
   let newY;
   let distance = ఎన్ని_బిందువులు;
   let entryX = కుంచిక.స్థానము.x;
   let entryY = కుంచిక.స్థానము.y;
   let x = కుంచిక.స్థానము.x;
   let y = కుంచిక.స్థానము.y;

   // get the boundaries of the canvas
   let గరిష్ఠ_X = imageContext.canvas.width / 2;
   let కనిష్ఠ_X = -imageContext.canvas.width / 2;
   let గరిష్ఠ_Y = imageContext.canvas.height / 2;
   let కనిష్ఠ_Y = -imageContext.canvas.height / 2;


   // wrap on the X boundary
   function xWrap(cutBound, otherBound) {
      let distanceToEdge = Math.abs((cutBound - x) / sinAngle);
      let edgeY = cosAngle * distanceToEdge + y;
      imageContext.lineTo(cutBound, edgeY);
      distance -= distanceToEdge;
      x = otherBound;
      y = edgeY;
      కుంచిక.స్థానము.x = x;
      కుంచిక.స్థానము.y = y;
      svgAppendPath( x - entryX, y - entryY)
   }

   // wrap on the Y boundary
   function yWrap(cutBound, otherBound) {
      let distanceToEdge = Math.abs((cutBound - y) / cosAngle);
      let edgeX = sinAngle * distanceToEdge + x;
      imageContext.lineTo(edgeX, cutBound);
      distance -= distanceToEdge;
      x = edgeX;
      y = otherBound;
      కుంచిక.స్థానము.x = x;
      కుంచిక.స్థానము.y = y;
      svgAppendPath( x - entryX, y - entryY)
   }

   // don't wrap the కుంచిక on any boundary
   function noWrap(x, y) {
      imageContext.lineTo(x, y);
      కుంచిక.స్థానము.x = x;
      కుంచిక.స్థానము.y = y;
      distance = 0;
      svgAppendPath( x - entryX, y - entryY)
   }


   imageContext.save();
   centerCoords(imageContext);
   if (! కుంచిక.ఆకారాము) {
      imageContext.beginPath();
   }

   // trace out the forward steps
   యావత్_పరిక్రమ( () => (distance > 0),() => {
      // move the to current location of the కుంచిక
      if (! కుంచిక.ఆకారాము) {
        imageContext.moveTo(x, y);
      }
      // calculate the new location of the కుంచిక after doing the forward movement
      newX = x + sinAngle * distance;
      newY = y + cosAngle * distance;

      // if wrap is on, trace a part segment of the path and wrap on boundary if necessary
      if (! కుంచిక.ఆకారాము && కుంచిక.wrap) {
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
   });
   // draw only if the pen is currently down.
   if (! కుంచిక.ఆకారాము && కుంచిక.penDown) {
      imageContext.stroke();
   }
   imageContext.restore();
   if (! కుంచిక.ఆకారాము) {
      drawIf();
   }
}

const fd = ముందుకు_జరుగు;
const forward = ముందుకు_జరుగు;

/*******************************************************************************
 * వెనుకకు_జరుగు -- move the కుంచిక backward, allowing for possible wrap-around
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

const bk = వెనుకకు_జరుగు;
const back = వెనుకకు_జరుగు;
const backward = వెనుకకు_జరుగు;

/*******************************************************************************
 * కుడి_వైపు_తిరుగు -- turn the కుంచిక right a number of degrees
 * కుడి_వైపు_తిరుగు 
 * arguments:
 *   కోణము: కోణము in degrees to turn
 *
 * returns: None
 ******************************************************************************/
function కుడి_వైపు_తిరుగు(కోణము) {
   కుంచిక.కోణము += degToRad(కోణము);
   drawIf();
}

const turn = కుడి_వైపు_తిరుగు;
const rt = కుడి_వైపు_తిరుగు;


/*******************************************************************************
 * ఎడమ_వైపు_తిరుగు -- turn the కుంచిక left a number of degrees
 *
 * arguments:
 *   కోణము: కోణము in degrees to turn
 *
 * arguments: None
 *
 * returns: None
 ******************************************************************************/
function ఎడమ_వైపు_తిరుగు(కోణము) {
   కుంచిక.కోణము -= degToRad(కోణము);
   drawIf();
}

const lt = ఎడమ_వైపు_తిరుగు;




/*******************************************************************************
 * ఎడమవైపు_చాపాము -- move the కుంచిక forward along a path curving to the left
 * ఎడమవైపు_చాపాము 
 * arguments:
 *   వ్యాసార్థము: వ్యాసార్థము of the curve
 *   extent: number of degrees in the curve
 *
 * returns: None
 ******************************************************************************/
function ఎడమవైపు_చాపాము (వ్యాసార్థము, extent) {
  if (extent == undefined) {
    extent = 359.9999; // this doesn't work if closer to 360, don't know why
  }
  let startAngle = కుంచిక.కోణము; // in radians from 12 o'clock .. heading is same as start
  let counterclockwise = true;
  let centerX = కుంచిక.స్థానము.x - వ్యాసార్థము * Math.cos (కుంచిక.కోణము); // left of కుంచిక
  let centerY = కుంచిక.స్థానము.y + వ్యాసార్థము * Math.sin (కుంచిక.కోణము);
  stopAngle = constrain( (startAngle - degToRad(extent)), 0, 2*Math.PI); // in radians CCW
  కుంచిక.కోణము = stopAngle;
  కుంచిక.స్థానము.x = centerX + వ్యాసార్థము * Math.cos(stopAngle);
  కుంచిక.స్థానము.y = centerY - వ్యాసార్థము * Math.sin(stopAngle);

  // correct for flipping of x values, this changes rotation and angles
  counterclockwise = !counterclockwise;
  startAngle = -startAngle;
  stopAngle = -stopAngle;

  imageContext.save();
  centerCoords(imageContext);
  imageContext.beginPath();
  imageContext.arc (centerX, centerY, వ్యాసార్థము, startAngle, stopAngle, counterclockwise);
  // draw it
  if (కుంచిక.penDown) {
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

so this translates "ఎడమవైపు_చాపాము (వ్యాసార్థము, extent)" roughly to:

<path ... d="... a <వ్యాసార్థము> <వ్యాసార్థము> 0 1 <కుంచిక.స్థానము.x> + <వ్యాసార్థము> * sin(<కుంచిక.heading>) <కుంచిక.స్థానము.x> + <వ్యాసార్థము> * cos(<కుంచిక.heading>)
   "l <x of arc end> <y of arc end>"
arc end is determined from the center of the arc through extent degrees
*/
const curveLeft = ఎడమవైపు_చాపాము;
const curveleft = ఎడమవైపు_చాపాము;


/*******************************************************************************
 * కుడివైపు_చాపాము -- move the కుంచిక forward along a path curving to the right
 * కుడివైపు_చాపాము 
 * arguments:
 *   వ్యాసార్థము: వ్యాసార్థము of the curve
 *   extent: number of degrees in the curve
 *
 * returns: None
 ******************************************************************************/
function కుడివైపు_చాపాము(వ్యాసార్థము, extent) {
  if (extent == undefined) {
    extent = 359.9999; // this doesn't work if closer to 360, don't know why
  }
  let startAngle = Math.PI + కుంచిక.కోణము; // in radians .. heading is same as start
  let counterclockwise = false;
  let centerX = కుంచిక.స్థానము.x + వ్యాసార్థము * Math.cos (కుంచిక.కోణము); // right of కుంచిక
  let centerY = కుంచిక.స్థానము.y - వ్యాసార్థము * Math.sin (కుంచిక.కోణము);
  stopAngle = constrain( startAngle + degToRad(extent), 0, 2*Math.PI); // in radians CW
  కుంచిక.కోణము = stopAngle + Math.PI;
  కుంచిక.స్థానము.x = centerX + వ్యాసార్థము * Math.cos(stopAngle);
  కుంచిక.స్థానము.y = centerY - వ్యాసార్థము * Math.sin(stopAngle);

  // correct for flipping of x values, this changes rotation and angles
  counterclockwise = !counterclockwise;
  startAngle = -startAngle;
  stopAngle = -stopAngle;
    //వ్రాయి(startAngle + "  " + stopAngle + "  " + startAngle+degToRad(extent))
  imageContext.save();
  centerCoords(imageContext);
  imageContext.beginPath();
  imageContext.arc (centerX, centerY, వ్యాసార్థము, startAngle, stopAngle, counterclockwise);
  // draw it
  if (కుంచిక.penDown) {
    imageContext.stroke();
  }
  imageContext.restore();
  drawIf();
}

const curveRight = కుడివైపు_చాపాము;
const curveright = కుడివైపు_చాపాము; 


/*******************************************************************************
 * వృత్తము -- draw a cirle about the current కుంచిక position
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
  startAngle = కుంచిక.కోణము - Math.PI/2; // translate కుంచిక to normal canvas coordinate
  imageContext.save();
  centerCoords(imageContext);
  imageContext.beginPath();
  imageContext.strokeStyle=కుంచిక.రంగు;
  //imageContext.fillStyle=కుంచిక.రంగు;
  // negate angles and CW due to context translation
  if (extent === undefined) {
    imageContext.arc (కుంచిక.స్థానము.x, కుంచిక.స్థానము.y, వ్యాసార్థము, 0, 2*Math.PI);
    svgClosePath()
    svgBlob = svgBlob + '<circle cx="' + round( కుంచిక.స్థానము.x, svgPrecision) + '" cy="' + round( కుంచిక.స్థానము.y, svgPrecision)
              + '" r="' + round( వ్యాసార్థము, svgPrecision) + '"'
              + ' style="stroke:' + కుంచిక.రంగు + '; stroke-width:' + కుంచిక.వెడల్పు + '; fill:none"/>\n'; 
    updateHighWater( కుంచిక.స్థానము.x, కుంచిక.స్థానము.y,  వ్యాసార్థము + కుంచిక.వెడల్పు, వ్యాసార్థము + కుంచిక.వెడల్పు)
   
  } else if (CW) {
    imageContext.arc (కుంచిక.స్థానము.x, కుంచిక.స్థానము.y, వ్యాసార్థము, -startAngle, -(startAngle+degToRad(extent)), CW);
  } else {
    imageContext.arc (కుంచిక.స్థానము.x, కుంచిక.స్థానము.y, వ్యాసార్థము, -startAngle, -(startAngle-degToRad(extent)), CW);
  }
  // draw it regardless of pen up or down
  imageContext.stroke();
  //imageContext.fill();
  imageContext.restore();
  drawIf();
}
const circle = వృత్తము;
/*
<వృత్తము cx="40" cy="40" r="24"
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
కోణము start = కుంచిక.heading
వృత్తము center = కుంచిక.స్థానము
path start = కుంచిక.స్థానము.x + వ్యాసార్థము * Math.cos( కుంచిక.కోణము), కుంచిక.స్థానము.y + వ్యాసార్థము * Math.sin( కుంచిక.కోణము)
path end = కుంచిక.స్థానము.x + వ్యాసార్థము * Math.cos( కుంచిక.కోణము + extent), కుంచిక.స్థానము.y + వ్యాసార్థము * Math.sin( కుంచిక.కోణము + extent)
<path ... d="M <pathStartX> <pathStartY a <వ్యాసార్థము> <వ్యాసార్థము> 0 1 0 circleCenterX circleCenterY l pathEndX pathEndY
   "l <x of arc end> <y of arc end>"
arc end is determined from the center of the arc through extent degrees
*/
const arc = వృత్తము;
const చాపము = arc;
/*******************************************************************************
 * నిండు_వృత్తము -- draw a filled వృత్తము at the కుంచిక position
 * నిండు_వృత్తము 
 * arguments:
 *   size:  వ్యాసార్థము of నిండు_వృత్తము in pixels (optional defaults to గరిష్ఠ of pensize+4, 2*pensize)
 *
 * returns: None
 ******************************************************************************/
function నిండు_వృత్తము(size) {
  if (size == undefined) {
    size = Math.max(కుంచిక.వెడల్పు+4, కుంచిక.వెడల్పు*2);
  }
  imageContext.save();
  centerCoords(imageContext);
  imageContext.beginPath();
  imageContext.fillStyle=కుంచిక.రంగు;
  imageContext.strokeStyle=కుంచిక.రంగు;
  imageContext.arc (కుంచిక.స్థానము.x, కుంచిక.స్థానము.y, size, 0, 2*Math.PI);
  // draw it regardless of pen up or down
  imageContext.stroke();
  imageContext.fill();
  imageContext.restore();
  svgClosePath()
  svgBlob = svgBlob + '<circle cx="' + round( కుంచిక.స్థానము.x, svgPrecision) + '" cy="' + round( కుంచిక.స్థానము.y, svgPrecision)
            + '" r="' + round( size, svgPrecision) + '"'
            + ' style="stroke:' + కుంచిక.రంగు + '; stroke-width:' + కుంచిక.వెడల్పు + '; fill:' + కుంచిక.రంగు + '"/>\n';
  drawIf();
}
const dot = నిండు_వృత్తము;
const బిందువు = నిండు_వృత్తము;

//కేంద్రకమునకు_వెళ్ళు

/*******************************************************************************
 * కలమును_పైకి_ఎత్తు -- lift the కుంచిక pen up (set marking state to false)
 * కలమును_పైకి_ఎత్తు 
 * arguments: None
 *
 * returns: None
 ******************************************************************************/
function కలమును_పైకి_ఎత్తు() {
  కుంచిక.penDown = false;
}

const pu = కలమును_పైకి_ఎత్తు;
const up = కలమును_పైకి_ఎత్తు;
const penUp = కలమును_పైకి_ఎత్తు;


/*******************************************************************************
 * కలమును_కింద_పెట్టు -- drop the కుంచిక pen (set marking state to true)
 * కలమును_కింద_పెట్టు 
 * arguments: None
 *
 * returns: None
 ******************************************************************************/
function కలమును_కింద_పెట్టు() {
  కుంచిక.penDown = true;
}

const pd = కలమును_కింద_పెట్టు;
const down = కలమును_కింద_పెట్టు;
const penDown = కలమును_కింద_పెట్టు;


/*******************************************************************************
 * కుంచికను_దాచు -- do not draw the కుంచిక
 * కుంచికను_దాచు 
 * arguments: None
 *
 * returns: None
 ******************************************************************************/
function కుంచికను_దాచు() {
   కుంచిక.visible = false;
   drawIf();
}

const ht = కుంచికను_దాచు;
const hideTurtle = కుంచికను_దాచు;


/*******************************************************************************
 * show కుంచిక -- draw the కుంచిక
 *
 * arguments: None
 *
 * returns: None
 ******************************************************************************/
function కుంచికను_చూపు() {
   కుంచిక.visible = true;
   drawIf();
}

const st = కుంచికను_చూపు;
const showTurtle = కుంచికను_చూపు;


/*******************************************************************************
 * స్థానము_మార్చు -- move the కుంచిక to an x,y position without leaving a mark
 * స్థానము_మార్చు 
 * arguments:
 *   x: x coordinate
 *   y: y coordinate
 *
 * returns: None
 ******************************************************************************/
function స్థానము_మార్చు(x,y) {
   కుంచిక.స్థానము.x = x;
   కుంచిక.స్థానము.y = y;
   drawIf();
}

const setposition = స్థానము_మార్చు;
const setpos = స్థానము_మార్చు;
const setPosition = స్థానము_మార్చు;
const setPos = స్థానము_మార్చు;
const goto = స్థానము_మార్చు;


/*******************************************************************************
 * xనియోగించు -- change the కుంచిక x-coordinate without leaving a mark
 *
 * arguments:
 *   x: x coordinate
 *
 * returns: None
 ******************************************************************************/
function xనియోగించు(x) {
   కుంచిక.స్థానము.x = x;
   drawIf();
}

const setX = xనియోగించు;
const setx = xనియోగించు;


/*******************************************************************************
 * yనియోగించు -- change the కుంచిక y-coordinate without leaving a mark
 * yనియోగించు
 * arguments:
 *   y: y coordinate
 *
 * returns: None
 ******************************************************************************/
function yనియోగించు(y) {
   కుంచిక.స్థానము.y = y;
   drawIf();
}

const setY = yనియోగించు;
const sety = yనియోగించు;


/*******************************************************************************
 * కోణము -- set the కోణము of the కుంచిక in degrees
 *
 * arguments:
 *   కోణము: (int) కోణము in degrees clockwise from the top center.
 *
 * returns: None
 ******************************************************************************/
function కోణము(కోణము) {
   కుంచిక.కోణము = degToRad(కోణము);
   drawIf();
}

const setheading = కోణము;
const setHeading = కోణము;
const seth = కోణము;
const దిశ_మార్చు = కోణము;

/*******************************************************************************
 * background -- set the background రంగు
 *
 * arguments:
 *   styl: fill style (రంగు, gradient, or pattern), defaulting to కుంచిక రంగు
 *
 * returns: None
 ******************************************************************************/

function background( styl) {
    if (styl == undefined) {
       styl = కుంచిక.రంగు;
    }
    if (typeof(styl) === "number") {
      if (styl < 16) { // assume standard logo కుంచిక రంగు
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
 * write -- print some text along path of కుంచిక, కుంచిక does not move
 * వ్రాయి 
 * arguments:
 *   msg: text to be printed
 *
 * returns: None
 ******************************************************************************/
function వ్రాయి(msg) {
   imageContext.save();
   centerCoords(imageContext);
   imageContext.translate(కుంచిక.స్థానము.x, కుంచిక.స్థానము.y);
   imageContext.transform(1, 0, 0, -1, 0, 0);
   imageContext.rotate(కుంచిక.కోణము - Math.PI/2);
   imageContext.textAlign = "left";
   imageContext.textBaseline = "bottom";
   imageContext.fillStyle = కుంచిక.రంగు;
   imageContext.fillText(msg, 0, 0);
   imageContext.restore();
   drawIf();
}
const write = వ్రాయి;

/*******************************************************************************
 * యాదృచ్ఛిక_సంఖ్య -- generate a యాదృచ్ఛిక_సంఖ్య integer between low (or 0 if unspecified) and high
 * యాదృచ్ఛిక_సంఖ్య 
 * arguments:
 *   low: low limit of the యాదృచ్ఛిక_సంఖ్య number (0, if only one parameter is used)
 *   high: high limit of the యాదృచ్ఛిక_సంఖ్య number
 *
 * returns:
 *   (int) generated యాదృచ్ఛిక_సంఖ్య number
 ******************************************************************************/
function యాదృచ్ఛిక_సంఖ్య(low, high) {
   if (high == undefined) {
     return Math.floor( (low + 1) * Math.random ());
   } else {
     return Math.floor(Math.random() * (high - low + 1) + low);
   }
}
const random = యాదృచ్ఛిక_సంఖ్య;


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
   కుంచిక.వెడల్పు = w;
   imageContext.lineWidth = w;
}

const pensize = వెడల్పు;
const penwidth = వెడల్పు;
const penSize = వెడల్పు;
const penWidth = వెడల్పు;
const width = వెడల్పు;

/*******************************************************************************
 * రంగు -- set the రంగు of the line and fill using కుంచిక graphic and CSS colors
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

const రంగుల_పేర్లు = ["నలుపు", "నీలము", "నిమ్మ", "cyan", "ఎరుపు", "magenta", "పసుపు", "తెలుపు",
"కపిలము", "tan", "ఆకుపచ్చ", "సముద్రము", "salmon", "purple", "నారింజ", "బూడిద"]
const logoColors = ["black", "blue", "lime", "cyan", "red", "magenta", "yellow", "white",
              "brown", "tan", "green", "aqua", "salmon", "purple", "orange", "gray"]
/*
 * returns: None
 ******************************************************************************/
function రంగు_మార్చు( col ) {
  svgClosePath();
  if (typeof(col) === "number") {
    if (col < 16) { // assume standard logo కుంచిక రంగు
      col = logoColors [col];
      // console.log( "col, logoColors [col] = ", col, logoColors [col] );
    } //else {
      //రంగు is assumed to be a 32-bit రంగు value
    //}
  } else if (typeof(col) != "string") { // col is not a supported type
    col = "నలుపు";
  } 
  
  const idx = రంగుల_పేర్లు.indexOf(col);
  // TODO(DSR) : uncomment this.
  console.log( "col, idx = ", col, idx );
  if ( idx >= 0 ) {
    // console.log( " రంగు = ", logoColors[idx] );
    col = logoColors[idx];
  }  

  కుంచిక.రంగు = col;
  imageContext.strokeStyle = col;
}

const colour = రంగు_మార్చు;
const color = రంగు_మార్చు;
const changeColor = రంగు_మార్చు;
const setColor = రంగు_మార్చు;
const setcolor = రంగు_మార్చు;


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
   కుంచిక.font = font;
   imageContext.font = font;
}

const setFont = అక్షరరూపము_స్థాపించు;
const setfont = అక్షరరూపము_స్థాపించు;


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

const maxx = గరిష్ఠX;
const maxX = గరిష్ఠX;

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

const minx = కనిష్ఠX;
const minX = కనిష్ఠX;

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

const maxy = గరిష్ఠY;
const maxY = గరిష్ఠY;


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

const miny = కనిష్ఠY;
const minY = కనిష్ఠY;



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
  let modulo = high - low;
  యావత్_పరిక్రమ( () => (n < low), () => {
    n = n + modulo;
  } );
  యావత్_పరిక్రమ( () => (n > high), () => {
    n = n - modulo;
  } );
  return n;
}
const constrain = గాడిలో_పెట్టు;

let కుంచికState = new Turtle();


function saveTurtleState(tState) {
  // tState is an object defining the state of a కుంచిక
  // కుంచిక is an object defining the current state of the కుంచిక
  //what about the font
  tState.స్థానము.x = కుంచిక.స్థానము.x
  tState.స్థానము.y = కుంచిక.స్థానము.y
  tState.కోణము = కుంచిక.కోణము
  tState.penDown = కుంచిక.penDown
  tState.వెడల్పు = కుంచిక.వెడల్పు
  tState.visible = కుంచిక.visible
  tState.redraw = కుంచిక.redraw
  tState.ఆకారాము = కుంచిక.ఆకారాము
  tState.wrap = కుంచిక.wrap
  tState.font = కుంచిక.font
  tState.రంగు = కుంచిక.రంగు
  console.log("sTS font: "+ tState.font + " రంగు:" + tState.రంగు)
}

function restoreTurtleState(tState) {
  // tState is an object defining the state of a కుంచిక
  // కుంచిక is an object defining the current state of the కుంచిక
  //what about the font
  కుంచిక.స్థానము.x = tState.స్థానము.x
  కుంచిక.స్థానము.y = tState.స్థానము.y
  కుంచిక.కోణము = tState.కోణము
  కుంచిక.penDown = tState.penDown
  కుంచిక.వెడల్పు = tState.వెడల్పు
  కుంచిక.visible = tState.visible
  కుంచిక.redraw = tState.redraw
  కుంచిక.ఆకారాము = tState.ఆకారాము
  కుంచిక.wrap = tState.wrap
  కుంచిక.font = tState.font
  కుంచిక.రంగు = tState.రంగు

  imageContext.font = tState.font;
  imageContext.lineWidth = tState.వెడల్పు;
  imageContext.strokeStyle = tState.రంగు;
  console.log("rTS font: "+ కుంచిక.font + " రంగు:" + కుంచిక.రంగు)
  console.log("rTS font: "+ imageContext.font + " రంగు:" + imageContext.strokeStyle)
}

function logTurtle( where) {
  // t is an object defining the state of a కుంచిక
  if (where === undefined) where = "???"
  console.log (where + " x:" + కుంచిక.స్థానము.x + " y:" + కుంచిక.స్థానము.y + " కోణము:" + కుంచిక.కోణము + " రంగు:" + కుంచిక.రంగు)
  console.log ("  penDown:" + కుంచిక.penDown + " వెడల్పు:" + కుంచిక.వెడల్పు + " visible:" + కుంచిక.visible)
  console.log ("  redraw:" + కుంచిక.redraw + " shape:" + కుంచిక.ఆకారాము + " wrap:" + కుంచిక.wrap)
  console.log ("  font:" + కుంచిక.font)
}


// ఆది_స్థితి();

export {svgPrecision,clear,reset,home,go_home,goHome,stopAnimation,redrawOnMove,beginShape,fillShape,fd,forward,bk,back,backward,turn,rt,lt,curveLeft,curveleft,curveRight,curveright,circle,arc,dot,
  pu,up,penUp,pd,down,penDown,ht,hideTurtle,st,showTurtle,setposition,setpos,setPosition,setPos,goto,setX,setx,setY,sety,setheading,setHeading,seth,write,random,pensize,penwidth,penSize,penWidth,width,
  logoColors,colour,color,changeColor,setColor,setcolor,setFont,setfont,maxx,maxX,minx,minX,maxy,maxY,miny,minY,constrain};
export {Pos, Turtle, initialize, round, svgInitialize, svgOpenPath, updateHighWater, svgAppendPath, svgClosePath, svgClose, drawIf, 
    centerCoords, clearContext, wrap, background, degToRad, radToDeg, saveTurtleState, restoreTurtleState, logTurtle };
    
export {అవును,కాదు,ఉంది,లేదు,చుట్టు,చుట్టొద్దు,చాపము,బిందువు,దిశ_మార్చు,
  నలుపు,నీలము,నిమ్మ,ఎరుపు,పసుపు,తెలుపు,కపిలము,ఆకుపచ్చ,సముద్రము,నారింజ,బూడిద,రంగుల_పేర్లు,
};

export {చిత్రీకరించు, చెరిపి_వేయి, ఆది_స్థితి, కేంద్రకమునకు_వెళ్ళు, ఆట_ఆపు, కుంచిక_కదిలిన_ప్రతి_సారీ_చిత్రీకరించు, 
ఆకారము_ప్రారంభించు, ఆకారము_ముగించు, ముందుకు_జరుగు, వెనుకకు_జరుగు, కుడి_వైపు_తిరుగు, ఎడమ_వైపు_తిరుగు, 
ఎడమవైపు_చాపాము, కుడివైపు_చాపాము, వృత్తము, నిండు_వృత్తము, కలమును_పైకి_ఎత్తు, కలమును_కింద_పెట్టు, కుంచికను_దాచు, 
కుంచికను_చూపు, స్థానము_మార్చు, xనియోగించు, yనియోగించు, కోణము, వ్రాయి, యాదృచ్ఛిక_సంఖ్య, వెడల్పు, రంగు_మార్చు, 
అక్షరరూపము_స్థాపించు, గరిష్ఠX, కనిష్ఠX, గరిష్ఠY, కనిష్ఠY, గాడిలో_పెట్టు }; 

export{కుంచికState,imageContext,imageCanvas};