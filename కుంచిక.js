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

//  // ಕನ್ನಡ
// const ಹೌದು = అవును;
// const ಅಲ್ಲ = కాదు;

// const ಇದೆ = ఉంది;
// const ಇಲ್ಲ = లేదు;


//////RENDERING FUNCTIONS


function Pos (x,y) {
  this.x = x
  this.y = y
}

function Turtle () {
  this.mouse_స్థానము = new Pos(0,0)
  this.mousedown_handled = true
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
console.log("కుంచిక కోణము: " + కుంచిక.కోణము + ", అక్షర రూపము: "+ కుంచిక.font)

/*******************************************************************************
 * initialize -- initialize the కుంచిక graphics system
 *
 * arguments: None
 *
 * returns: None
 ******************************************************************************/
function initialize() {
  కుంచిక.mouse_స్థానము.x = 0
  కుంచిక.mouse_స్థానము.y = 0
  కుంచిక.mousedown_handled = true
  కుంచిక.స్థానము.x = 0
  కుంచిక.స్థానము.y = 0
  కుంచిక.కోణము = 0
  కుంచిక.penDown = true
  కుంచిక.వెడల్పు = 1
  కుంచిక.visible = true
  కుంచిక.redraw = true
  కుంచిక.ఆకారాము = false
  కుంచిక.wrap = true
  కుంచిక.font = "10pt normal Helvetica, sans-serif"
  కుంచిక.రంగు = "నలుపు"
/*
   కుంచిక = { pos: {
                 x: 0,
                 y: 0
              },
              కోణము: 0, //12 o'clock
              penDown: true,
              వెడల్పు: 1,
              visible: true, // controls కుంచిక visibility
              redraw: true, //  controls redrawing కుంచిక every move
              shape: false, //  controls inclusion of segments from a filled shape
              wrap: true, //    controls wraping at the edge
              font: "10pt normal Helvetica, sans-serif",
              రంగు: "నలుపు"
            };
*/
  //కుంచిక = Turtle();
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
// const ಚಿತ್ರಿಸಿ =  చిత్రీకరించు; // ಕನ್ನಡ


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
clear = చెరిపి_వేయి;
// ತೆರವುಗೊಳಿಸಿ = చెరిపి_వేయి;  // ಕನ್ನಡ

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
reset = ఆది_స్థితి;
// ಆದಿ_ಸ್ಥಿತಿ = ఆది_స్థితి;  // ಕನ್ನಡ

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
home = కేంద్రకమునకు_వెళ్ళు;
go_home = కేంద్రకమునకు_వెళ్ళు;
goHome = కేంద్రకమునకు_వెళ్ళు;
// ಕೇಂದ್ರಕ್ಕೆ_ಹೋಗಿ = కేంద్రకమునకు_వెళ్ళు;  // ಕನ್ನಡ

/*******************************************************************************
 * ఆట_ఆపు -- stop all animations in progress
 * ఆట_ఆపు 
 * arguments: None
 *
 * returns: None
 ******************************************************************************/
function ఆట_ఆపు() {
  యావత్_పరిక్రమ( () => (intervals.length > 0), () =>  {
    clearInterval(intervals.pop());
  } );
  యావత్_పరిక్రమ( () => (timeouts.length > 0), () => {
    clearTimeout(timeouts.pop());
  } );
  document.getElementById("stopButton").hidden = true;
}
stopAnimation = ఆట_ఆపు;
// ಆಟೆ_ನಿಲ್ಲಿಸಿ = ఆట_ఆపు; // ಕನ್ನಡ

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
// ಕುಂಚಿಕ_ಚಲಿಸುದಾಗಲೂ_ಚಿತ್ರಿಸಿ = కుంచిక_కదిలిన_ప్రతి_సారీ_చిత్రీకరించు;  // ಕನ್ನಡ


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
చుట్టు = () => wrap( true );
చుట్టొద్దు = () => wrap( false );
// ಸುತ್ತು = చుట్టు;  // ಕನ್ನಡ
// ಸುತ್ತಬೇಡಿ = చుట్టొద్దు;  // ಕನ್ನಡ

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

beginShape = ఆకారము_ప్రారంభించు;
// ಆಕಾರವನ್ನು_ಪ್ರಾರಂಭಿಸಿ = ఆకారము_ప్రారంభించు; // ಕನ್ನಡ

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

fillShape = ఆకారము_ముగించు;
// ಆಕಾರವನ್ನು_ಮುಗಿಸಿ = ఆకారము_ముగించు; // ಕನ್ನಡ

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

fd = ముందుకు_జరుగు;
forward = ముందుకు_జరుగు;
// ಮುಂದೆ_ಹೋಗಿ =  ముందుకు_జరుగు; // ಕನ್ನಡ

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

bk = వెనుకకు_జరుగు;
back = వెనుకకు_జరుగు;
backward = వెనుకకు_జరుగు;
// ಹಿಂದೆ_ಹೋಗಿ = వెనుకకు_జరుగు; // ಕನ್ನಡ

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

turn = కుడి_వైపు_తిరుగు;
rt = కుడి_వైపు_తిరుగు;
turn_right = కుడి_వైపు_తిరుగు;
// ಬಲಕ್ಕೆ_ತಿರುಗಿ = కుడి_వైపు_తిరుగు; // ಕನ್ನಡ

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

lt = ఎడమ_వైపు_తిరుగు;
// ಎಡಕ್ಕೆ_ತಿರುಗಿ = ఎడమ_వైపు_తిరుగు; // ಕನ್ನಡ



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
curveLeft = ఎడమవైపు_చాపాము;
curveleft = ఎడమవైపు_చాపాము;
// ಎಡಕ್ಕೆ_ಚಾಪ  = ఎడమవైపు_చాపాము; // ಕನ್ನಡ

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

curveRight = కుడివైపు_చాపాము;
curveright = కుడివైపు_చాపాము; 
// ಬಲಕ್ಕೆ_ಚಾಪ  = కుడివైపు_చాపాము;  // ಕನ್ನಡ

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
వృత్తము = వృత్తము;
// ವೃತ್ತ = వృత్తము;  // ಕನ್ನಡ

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
arc = వృత్తము;
చాపము = వృత్తము;
// ಚಾಪ = వృత్తము;  // ಕನ್ನಡ

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
dot = నిండు_వృత్తము;
బిందువు = నిండు_వృత్తము;
// ತುಂಬಿದ_ವೃತ್ತ = నిండు_వృత్తము;   // ಕನ್ನಡ

//కేంద్రకమునకు_వెళ్ళు

/*******************************************************************************
 * కుంచికను_పైకి_ఎత్తు -- lift the కుంచిక pen up (set marking state to false)
 * కుంచికను_పైకి_ఎత్తు 
 * arguments: None
 *
 * returns: None
 ******************************************************************************/
function కుంచికను_పైకి_ఎత్తు() {
  కుంచిక.penDown = false;
}

pu = కుంచికను_పైకి_ఎత్తు;
up = కుంచికను_పైకి_ఎత్తు;
penUp = కుంచికను_పైకి_ఎత్తు;
కలమును_పైకి_ఎత్తు = కుంచికను_పైకి_ఎత్తు;
// ಕುಂಚಿಕವನ್ನು_ಎತ್ತಿ =  కుంచికను_పైకి_ఎత్తు;   // ಕನ್ನಡ

/*******************************************************************************
 * కుంచికను_కింద_పెట్టు -- drop the కుంచిక pen (set marking state to true)
 * కుంచికను_కింద_పెట్టు 
 * arguments: None
 *
 * returns: None
 ******************************************************************************/
function కుంచికను_కింద_పెట్టు() {
  కుంచిక.penDown = true;
}

pd = కుంచికను_కింద_పెట్టు;
down = కుంచికను_కింద_పెట్టు;
penDown = కుంచికను_కింద_పెట్టు;
కలమును_కింద_పెట్టు = కుంచికను_కింద_పెట్టు;
// ಕುಂಚಿಕವನ್ನು_ಕೆಳಗೆ_ಇರಿಸಿ = కుంచికను_కింద_పెట్టు;  // ಕನ್ನಡ

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

ht = కుంచికను_దాచు;
hideTurtle = కుంచికను_దాచు;
// ಕುಂಚಿಕವನ್ನು_ಮರೆಮಾಡಿ = కుంచికను_దాచు; // ಕನ್ನಡ

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

st = కుంచికను_చూపు;
showTurtle = కుంచికను_చూపు;
// ಕುಂಚಿಕವನ್ನು_ತೋರಿಸಿ = కుంచికను_చూపు; // ಕನ್ನಡ

/*******************************************************************************
 * ప్రస్తుత_స్థానము -- return the current location of the కుంచిక
 * ప్రస్తుత_స్థానము 
 * arguments:
 *
 * returns: None
 ******************************************************************************/
function ప్రస్తుత_స్థానము() {
  return కుంచిక.స్థానము;
}



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

setposition = స్థానము_మార్చు;
setpos = స్థానము_మార్చు;
setPosition = స్థానము_మార్చు;
setPos = స్థానము_మార్చు;
goto = స్థానము_మార్చు;
// ಸ್ಥಾನ_ಬದಿಲಿಸಿ = స్థానము_మార్చు;  // ಕನ್ನಡ

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

setX = xనియోగించు;
setx = xనియోగించు;
// xಸ್ಥಾಪಿಸಿ = xనియోగించు;   // ಕನ್ನಡ
// ಅಡ್ಡಗೆರೆ_ಸ್ಥಾಪಿಸಿ = xనియోగించు;  // ಕನ್ನಡ

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

sety = yనియోగించు;
setY = yనియోగించు;
// ಲಂಬವಾದ_ಸ್ಥಾಪಿಸಿ =  yనియోగించు;  // ಕನ್ನಡ
// yಸ್ಥಾಪಿಸಿ =  yనియోగించు;  // ಕನ್ನಡ


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

setheading = కోణము;
setHeading = కోణము;
seth = కోణము;
దిశ_మార్చు = కోణము;
// ಕೋಣ  = కోణము;  // ಕನ್ನಡ
// ದಿಕ್ಕನ್ನು_ಬದಲಿಸಿ  = కోణము;  // ಕನ್ನಡ

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
write = వ్రాయి;
// ಬರೆ  = వ్రాయి;  // ಕನ್ನಡ

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
random = యాదృచ్ఛిక_సంఖ్య;
// ಯಾದೃಚ್ಛಿಕ_ಸಂಖ್ಯೆ = యాదృచ్ఛిక_సంఖ్య;  // ಕನ್ನಡ


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

/*******************************************************************************
 * లెక్క_పెడుతూ_ఆవర్తించు -- క్రియను an action n times, enumerating iterations
 *
 * arguments:
 *   ఎన్ని_సార్లు_చేయాలి: number of times to repeat the action
 *   క్రియ: a reference to a function that takes one number.
 *
 * returns: None
 ******************************************************************************/
లెక్క_పెడుతూ_ఆవర్తించు = (ఎన్ని_సార్లు_చేయాలి, క్రియ) => {
  let ఎన్ని_సార్లు_చేసింది = 0;
  for (ఎన్ని_సార్లు_చేసింది = 0; ఎన్ని_సార్లు_చేసింది < ఎన్ని_సార్లు_చేయాలి; ఎన్ని_సార్లు_చేసింది += 1) {
     క్రియ(ఎన్ని_సార్లు_చేసింది);
     if (errorFound)
       break;
  }
}
// repeat = ఆవర్తించు;



/*******************************************************************************
 * యావత్_పరిక్రమ -- సంసక్త నిజమయ్యే వరుకు కార్యము చేస్తూ ఉంటుంది
 *
 * arguments:
 *   సంసక్త: పరీక్షించ వలసినది
 *   కార్యము: ప్రక్రియ, a reference to a callable lambda or function
 *
 * returns: None
 ******************************************************************************/
యావత్_పరిక్రమ = (సంసక్త, కార్యము) => {
  while ( సంసక్త() ) { కార్యము(); }
};

/*******************************************************************************
 * యది_తర్హి_అన్యథా -- సంసక్త నిజమైతే, యది_కార్యము చేస్తుంది. కాకపోతే అన్యథ_కార్యము చేస్తుంది.
 *  
 *
 * arguments:
 *   సంసక్త: పరీక్షించ వలసినది
 *   యది_కార్యము: ప్రక్రియ, a reference to a callable lambda or function
 *   అన్యథ_కార్యము: ప్రక్రియ, a reference to a callable lambda or function
 *
 * returns: None
 ******************************************************************************/
 యది_తర్హి_అన్యథా = (సంసక్త, యది_కార్యము, అన్యథ_కార్యము) => 
  ( సంసక్త() ) ? యది_కార్యము() : అన్యథ_కార్యము();
  

/*******************************************************************************
 * యది_తర్హి -- సంసక్త నిజమైతే, కార్యము చేస్తుంది.
 *  
 *
 * arguments:
 *   సంసక్త: పరీక్షించ వలసినది
 *   కార్యము: ప్రక్రియ, a reference to a callable lambda or function
 *
 * returns: None
 ******************************************************************************/
యది_తర్హి = (సంసక్త, కార్యము) => యది_తర్హి_అన్యథా(సంసక్త, కార్యము, ()=>{});


/*******************************************************************************
 * విరామము -- just wait in place for a number of milliseconds
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
function విరామము(ms) {
  let start = new Date().getTime();
  let limit = 1000 * 60 * 1; // set గరిష్ఠ time to 1 minute
  let i = 0;
  for (i = 0; i < limit; i += 1) {
    if ((new Date().getTime() - start) > ms) {
      break;
    }
  }
}
pause = విరామము;
sleep = విరామము;


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

pensize = వెడల్పు;
penwidth = వెడల్పు;
penSize = వెడల్పు;
penWidth = వెడల్పు;
width = వెడల్పు;
// ಅಗಲ =  వెడల్పు;  // ಕನ್ನಡ

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

రంగుల_పేర్లు = ["నలుపు", "నీలము", "నిమ్మ", "cyan", "ఎరుపు", "magenta", "పసుపు", "తెలుపు",
"కపిలము", "tan", "ఆకుపచ్చ", "సముద్రము", "salmon", "purple", "నారింజ", "బూడిద"]
logoColors = ["black", "blue", "lime", "cyan", "red", "magenta", "yellow", "white",
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

colour = రంగు_మార్చు;
color = రంగు_మార్చు;
changeColor = రంగు_మార్చు;
setColor = రంగు_మార్చు;
setcolor = రంగు_మార్చు;
// ವರ್ಣ =  రంగు_మార్చు;  // ಕನ್ನಡ
// ವರ್ಣ_ಸ್ಥಾಪಿಸಿ =  రంగు_మార్చు;  // ಕನ್ನಡ
// ವರ್ಣ_ಬದಲಿಸಿ =  రంగు_మార్చు;  // ಕನ್ನಡ

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

setFont = అక్షరరూపము_స్థాపించు;
setfont = అక్షరరూపము_స్థాపించు;
// ಅಕ್ಷರರೂಪವನ್ನು_ಸ್ಥಾಪಿಸಿ = అక్షరరూపము_స్థాపించు;  // ಕನ್ನಡ

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
// ಗರಿಷ್ಠX = గరిష్ఠX;  // ಕನ್ನಡ

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
// ಕನಿಷ್ಠX = కనిష్ఠX;  // ಕನ್ನಡ

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
// ಗರಿಷ್ಠY = గరిష్ఠY;  // ಕನ್ನಡ

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
// ಕನಿಷ್ಠY = కనిష్ఠY;  // ಕನ್ನಡ


///////ANIMATION SUB-MODULE
//This maybe should be broken out as a separate module sometime

// some globals
let intervals = []; //array of inteval IDs started with the animate function
let timeouts = []; //array of time out IDs started with the delay function


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
 * విలంబించు 
 * arguments:
 *   f: a reference to a function
 *   ms: number of milliseconds of delay before executing function f
 *
 * returns: None
 ******************************************************************************/
function విలంబించు(f, ms) {
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
delay = విలంబించు;

కుంచికCanvas.addEventListener( "mousedown", function(e){
  let rect = కుంచికCanvas.getBoundingClientRect();
  let old_pos = కుంచికState.mouse_స్థానము
  కుంచికState.mouse_స్థానము.x = e.clientX - rect.x
  కుంచికState.mouse_స్థానము.y = e.clientY - rect.y
  కుంచికState.mousedown_handled = false
} )


function waitForMouseDown(f) {
  let tick = 0;
  while (కుంచికState.mousedown_handled) {
    విలంబించు(()=>{
      console.log("Waiting for mouse click" + tick)
    }, 1000);
    tick = tick + 1;
    sleep(1000);
  }
  f();
  కుంచికState.mousedown_handled = true;
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
  let modulo = high - low;
  యావత్_పరిక్రమ( () => (n < low), () => {
    n = n + modulo;
  } );
  యావత్_పరిక్రమ( () => (n > high), () => {
    n = n - modulo;
  } );
  return n;
}
constrain = గాడిలో_పెట్టు;
// ನಿರ್ಬಂಧಿಸಿ = గాడిలో_పెట్టు;  // ಕನ್ನಡ

var కుంచికState = new Turtle();


function saveTurtleState(tState) {
  // tState is an object defining the state of a కుంచిక
  // కుంచిక is an object defining the current state of the కుంచిక
  //what about the font
  tState.mouse_స్థానము.x = కుంచిక.mouse_స్థానము.x
  tState.mouse_స్థానము.y = కుంచిక.mouse_స్థానము.y
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
  కుంచిక.mouse_స్థానము.x = tState.mouse_స్థానము.x
  కుంచిక.mouse_స్థానము.y = tState.mouse_స్థానము.y
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

const ಹೌದು = అవును;
const ಅಲ್ಲ = కాదు;

const ಇದೆ = ఉంది;
const ಇಲ್ಲ = లేదు;

const ಚಿತ್ರಿಸಿ =  చిత్రీకరించు;
const ತೆರವುಗೊಳಿಸಿ = చెరిపి_వేయి;
const ಆದಿ_ಸ್ಥಿತಿ = ఆది_స్థితి;
const ಕೇಂದ್ರಕ್ಕೆ_ಹೋಗಿ = కేంద్రకమునకు_వెళ్ళు;
const ಆಟೆ_ನಿಲ್ಲಿಸಿ = ఆట_ఆపు;
const ಕುಂಚಿಕ_ಚಲಿಸುದಾಗಲೂ_ಚಿತ್ರಿಸಿ = కుంచిక_కదిలిన_ప్రతి_సారీ_చిత్రీకరించు;
const ಸುತ್ತು = చుట్టు;
const ಸುತ್ತಬೇಡಿ = చుట్టొద్దు;
const ಆಕಾರವನ್ನು_ಪ್ರಾರಂಭಿಸಿ = ఆకారము_ప్రారంభించు;
const ಆಕಾರವನ್ನು_ಮುಗಿಸಿ = ఆకారము_ముగించు;
const ಮುಂದೆ_ಹೋಗಿ =  ముందుకు_జరుగు;
const ಹಿಂದೆ_ಹೋಗಿ = వెనుకకు_జరుగు;
const ಬಲಕ್ಕೆ_ತಿರುಗಿ = కుడి_వైపు_తిరుగు;
const ಎಡಕ್ಕೆ_ತಿರುಗಿ = ఎడమ_వైపు_తిరుగు;
const ಎಡಕ್ಕೆ_ಚಾಪ  = ఎడమవైపు_చాపాము;
const ಬಲಕ್ಕೆ_ಚಾಪ  = కుడివైపు_చాపాము;
const ವೃತ್ತ = వృత్తము;
const ಚಾಪ = వృత్తము;
const ತುಂಬಿದ_ವೃತ್ತ = నిండు_వృత్తము;
const ಕುಂಚಿಕವನ್ನು_ಎತ್ತಿ =  కుంచికను_పైకి_ఎత్తు;
const ಕುಂಚಿಕವನ್ನು_ಕೆಳಗೆ_ಇರಿಸಿ = కుంచికను_కింద_పెట్టు;
const ಕುಂಚಿಕವನ್ನು_ಮರೆಮಾಡಿ = కుంచికను_దాచు;
const ಕುಂಚಿಕವನ್ನು_ತೋರಿಸಿ = కుంచికను_చూపు;
const ಸ್ಥಾನ_ಬದಿಲಿಸಿ = స్థానము_మార్చు;
const xಸ್ಥಾಪಿಸಿ = xనియోగించు;
const ಅಡ್ಡಗೆರೆ_ಸ್ಥಾಪಿಸಿ = xనియోగించు;
const ಲಂಬವಾದ_ಸ್ಥಾಪಿಸಿ =  yనియోగించు;
const yಸ್ಥಾಪಿಸಿ =  yనియోగించు;
const ಕೋಣ  = కోణము;
const ದಿಕ್ಕನ್ನು_ಬದಲಿಸಿ  = కోణము;

const ಬರೆ  = వ్రాయి;
const ಯಾದೃಚ್ಛಿಕ_ಸಂಖ್ಯೆ = యాదృచ్ఛిక_సంఖ్య;
const ಅಗಲ =  వెడల్పు;
const ವರ್ಣ_ಸ್ಥಾಪಿಸಿ =  రంగు_మార్చు;
const ವರ್ಣ_ಬದಲಿಸಿ =  రంగు_మార్చు;
const ಅಕ್ಷರರೂಪವನ್ನು_ಸ್ಥಾಪಿಸಿ = అక్షరరూపము_స్థాపించు;
const ಗರಿಷ್ಠX = గరిష్ఠX;
const ಕನಿಷ್ಠX = కనిష్ఠX;
const ಗರಿಷ್ಠY = గరిష్ఠY;
const ಕನಿಷ್ಠY = కనిష్ఠY;
const ನಿರ್ಬಂಧಿಸಿ = గాడిలో_పెట్టు;

const ಆವರ್ತಿಸಿ = ఆవర్తించు;
const ಎಣಿಸುವಾಗ_ಆವರ್ತಿಸಿ = లెక్క_పెడుతూ_ఆవర్తించు;
const ಯಾವತ್_ಪರಿಕ್ರಮ = యావత్_పరిక్రమ;
const ಅವರಿಗು_ಅವರ್ತಿಸಿ = యావత్_పరిక్రమ;
const ಯದಿ_ತರ್ಹಿ_ಅನ್ಯಥಾ = యది_తర్హి_అన్యథా;
const ಯದಿ_ತರ್ಹಿ = యది_తర్హి;
const ವಿರಾಮ = విరామము;
const ಆಡಿಸಿ = ఆడించు;
const ವಿಲಂಬಿಸಿ = విలంబించు;


///////////////////

const आम् = అవును;
const न = కాదు;

const अस्ति = ఉంది;
const नास्ति = లేదు;

const चित्रय =  చిత్రీకరించు; 
const मार्जय = చెరిపి_వేయి; // ??
const आदिस्थितिः = ఆది_స్థితి; 
const केन्द्रं_गच्छ = కేంద్రకమునకు_వెళ్ళు; 
const केलीं_रुन्धि = ఆట_ఆపు; 
const कूर्चे_चालिते_विलिख = కుంచిక_కదిలిన_ప్రతి_సారీ_చిత్రీకరించు;
const परिवर्तस्व = చుట్టు; 
const न_परिवर्तस्व = చుట్టొద్దు; 
const आकारम्_प्रारभस्व = ఆకారము_ప్రారంభించు; 
const आकारम्_पूरय = ఆకారము_ముగించు; 
const अग्रे_गच्छतु =  ముందుకు_జరుగు;  
const पृष्ठतो_गच्छतु = వెనుకకు_జరుగు;  
const दक्षिणं_वर्तस्व = కుడి_వైపు_తిరుగు;  
const वामं_वर्तस्व = ఎడమ_వైపు_తిరుగు; 
const वामतश्चापः  = ఎడమవైపు_చాపాము; 
const दक्षिणतश्चापः  = కుడివైపు_చాపాము; 
const वृत्तम् = వృత్తము; 
const चापः = వృత్తము; 
const पूरितं_वृत्तम् = నిండు_వృత్తము; 
const कुंचिकं_उन्नय =  కుంచికను_పైకి_ఎత్తు;  
const कुंचिकं_अवतार = కుంచికను_కింద_పెట్టు; 
const कुंचिकं_गोपाय = కుంచికను_దాచు;  
const कुंचिकं_दर्शय = కుంచికను_చూపు;  
const स्थानम्_परिवर्तय = స్థానము_మార్చు;  
const x_स्थापय = xనియోగించు;  
const तिर्यग्रेखे_स्थापय = xనియోగించు; 
const y_स्थापय =  yనియోగించు;
const ऊर्ध्वरेखे_स्थापय =  yనియోగించు;
const कोणः  = కోణము;
const दिशाम्_परिवर्तय  = కోణము;  

const लिख  = వ్రాయి;  
const यादृच्छिकसङ्ख्या = యాదృచ్ఛిక_సంఖ్య; 
const दीर्घता =  వెడల్పు; 
const वर्णं_स्थापय =  రంగు_మార్చు; 
const वर्णं_परिवर्तय =  రంగు_మార్చు;  
const अक्षररूपं_स्थापय = అక్షరరూపము_స్థాపించు;
const गरिष्ठ_X = గరిష్ఠX;
const कनिष्ठ_X = కనిష్ఠX;
const गरिष्ठ_Y = గరిష్ఠY;
const कनिष्ठ_Y = కనిష్ఠY;
const निर्बध्नाहि  = గాడిలో_పెట్టు; 

const आवर्तय = ఆవర్తించు;
const गणयन्_आवर्तय = లెక్క_పెడుతూ_ఆవర్తించు;
const आवर्तय_यावत् = యావత్_పరిక్రమ;
const यदि_तर्हि_अन्यथा = యది_తర్హి_అన్యథా;
const यदि_तर्हि = యది_తర్హి;
const विरामः = విరామము;
const चालय = ఆడించు;
const विलंबय = విలంబించు;


// Belarusian
const так = అవును;
const няма = కాదు;
const існуе = ఉంది;
const не_існуе = లేదు;
const маляваць =  చిత్రీకరించు; 
const сціраць = చెరిపి_వేయి; // ??
const пачатковы_стан = ఆది_స్థితి; 
const ісці_ў_цэнтр = కేంద్రకమునకు_వెళ్ళు; 
const спыніць_гульню = ఆట_ఆపు; 
const вакол = చుట్టు; 
const Не_абмотваць = చుట్టొద్దు; 
const пачніце_маляваць_форму = ఆకారము_ప్రారంభించు; 
const спыніць_маляваць_форму = ఆకారము_ముగించు; //хопіць
const ісці_наперад =  ముందుకు_జరుగు;  
const ісці_назад = వెనుకకు_జరుగు;  
const павярнуць_направа = కుడి_వైపు_తిరుగు;  
const павярнуць_налева = ఎడమ_వైపు_తిరుగు; 
const дуга_налева  = ఎడమవైపు_చాపాము; 
const дуга_направа  = కుడివైపు_చాపాము; 
const круг = వృత్తము; 
const дуга = వృత్తము; 
const запоўнены_круг = నిండు_వృత్తము; 
const падніміце_пэндзаль =  కుంచికను_పైకి_ఎత్తు;  
const пакладзеце_пэндзаль = కుంచికను_కింద_పెట్టు; 
const схавайце_пэндзаль = కుంచికను_దాచు;  
const выявіць_пэндзаль = కుంచికను_చూపు;  
const змяніць_становішча = స్థానము_మార్చు;  
const змяніць_X = xనియోగించు;  
const змяніць_гарызанталь = xనియోగించు; 
const змяніць_Y =  yనియోగించు;
const змяніць_вертыкаль =  yనియోగించు;
const вугал  = కోణము;
const змінниць_кіруна  = కోణము;  
const запісаць  = వ్రాయి;  
const выпадковы_лік = యాదృచ్ఛిక_సంఖ్య; 
const усталяваць_шырыню  =  వెడల్పు; 
const змяніць_колер_на =  రంగు_మార్చు;  
const ўсталяваць_шрыфт = అక్షరరూపము_స్థాపించు;
const максімум_X = గరిష్ఠX;
const мінімум_X = కనిష్ఠX;
const максімум_Y = గరిష్ఠY;
const мінімум_Y = కనిష్ఠY;
const абмежаваць_у_дыяпазоне  = గాడిలో_పెట్టు; 
const паўтараць = ఆవర్తించు;
const паўтарыць_лічачы = లెక్క_పెడుతూ_ఆవర్తించు;
const Паўтараць_пакуль = యావత్_పరిక్రమ;
const Калі_тады_інакш = యది_తర్హి_అన్యథా;
const Калі_тады = యది_తర్హి;
const Паўза = విరామము;
const гуляць = ఆడించు;
const адкласці = విలంబించు;
//

////////
// Spanish 



const sí = అవును;
const no = కాదు;
const existe = ఉంది;
const no_existe = లేదు;
const dibujar = చిత్రీకరించు;
const borrar = చెరిపి_వేయి;
const estado_inicial = ఆది_స్థితి;
const ir_al_centro = కేంద్రకమునకు_వెళ్ళు;
const detener_el_juego = ఆట_ఆపు;
const alrededor = చుట్టు;
const no_enrollar = చుట్టొద్దు;
const comenzar_a_dibujar_una_forma = ఆకారము_ప్రారంభించు;
const dejar_de_dibujar_una_forma = ఆకారము_ముగించు;
const avanzar = ముందుకు_జరుగు;
const retroceder = వెనుకకు_జరుగు;
const girar_a_la_derecha = కుడి_వైపు_తిరుగు;
const girar_a_la_izquierda = ఎడమ_వైపు_తిరుగు;
const arco_a_la_izquierda = ఎడమవైపు_చాపాము;
const arco_a_la_derecha = కుడివైపు_చాపాము;
const círculo_lleno = నిండు_వృత్తము;
const círculo = వృత్తము;
const levantar_el_pincel = కుంచికను_పైకి_ఎత్తు;
const dejar_el_pincel = కుంచికను_కింద_పెట్టు;
const esconder_el_pincel = కుంచికను_దాచు;
const mostrar_el_pincel = కుంచికను_చూపు;
const cambiar_la_posición = స్థానము_మార్చు;
const usar_x = xనియోగించు;
const usar_y = yనియోగించు;
const ángulo = కోణము;
const cambiar_la_dirección = దిశ_మార్చు;
const escribir = వ్రాయి;
const número_aleatorio = యాదృచ్ఛిక_సంఖ్య;
const ancho = వెడల్పు;
const cambiar_el_color_a = రంగు_మార్చు;
const establecer_la_fuente = అక్షరరూపము_స్థాపించు;
const máximo_X = గరిష్ఠX;
const mínimo_X = కనిష్ఠX;
const máximo_Y = గరిష్ఠY;
const mínimo_Y = కనిష్ఠY;
const limitar_en_un_rango = గాడిలో_పెట్టు;
const repetir_contando = లెక్క_పెడుతూ_ఆవర్తించు;
const repetir = ఆవర్తించు;
const repetir_mientras = యావత్_పరిక్రమ;
const si_entonces_de_lo_contrario = యది_తర్హి_అన్యథా;
const si_entonces = యది_తర్హి;
const pausa = విరామము;
const jugar = ఆడించు;
const aplazar = విలంబించు;


/////////////
// Japanese
const はい = అవును;
const いいえ = కాదు;
const あります = ఉంది;
const ありません = లేదు;
const えがく = చిత్రీకరించు;
const けす = చెరిపి_వేయి;
const しょいたい = ఆది_స్థితి;
const ちゅうしんにいく = కేంద్రకమునకు_వెళ్ళు;
const げーむをとめる = ఆట_ఆపు;
const まわり = చుట్టు;
const まわさないで = చుట్టొద్దు;
const かたちをはじめめる = ఆకారము_ప్రారంభించు;
const かたちをおわる = ఆకారము_ముగించు;
const すすむ = ముందుకు_జరుగు;
const もどる = వెనుకకు_జరుగు;
const みぎにまがる = కుడి_వైపు_తిరుగు;
const ひだりにまがる = ఎడమ_వైపు_తిరుగు;
const ひだりのカーブ = ఎడమవైపు_చాపాము;
const みぎのカーブ = కుడివైపు_చాపాము;
const いっぱいのまる = నిండు_వృత్తము;
const まる = వృత్తము;
const ふでをあげる = కుంచికను_పైకి_ఎత్తు;
const ふをおろす = కుంచికను_కింద_పెట్టు;
const ふをかす = కుంచికను_దాచు;
const ふをみせる = కుంచికను_చూపు;
const いちをうつる = స్థానము_మార్చు;
const xをつかう = xనియోగించు;
const yをつかう = yనియోగించు;
const かくど = కోణము;
const ほうこうをかえる = దిశ_మార్చు;
const かく = వ్రాయి;
const らんすう = యాదృచ్ఛిక_సంఖ్య;
const はば = వెడల్పు;
const いろをかえる = రంగు_మార్చు;
const フォントをせっていする = అక్షరరూపము_స్థాపించు;
const さいだいX = గరిష్ఠX;
const さいしょうX = కనిష్ఠX;
const さいだいY = గరిష్ఠY;
const さいしょうY = కనిష్ఠY;
const げんかいにおさめる = గాడిలో_పెట్టు;
const かぞえながらくりかえす = లెక్క_పెడుతూ_ఆవర్తించు;
const くりかえす = ఆవర్తించు;
const くりかえし = యావత్_పరిక్రమ;
const もしこうならそうじゃないなら = యది_తర్హి_అన్యథా;
const もしこうなら = యది_తర్హి;
const やすみ = విరామము;
const あそぶ = ఆడించు;
const おくらせる = విలంబించు;


////// 
// Korean 

///////////////////

const 예 = అవును;
const 아니요 = కాదు;

const 있다 = ఉంది;
const 없는 = లేదు;

const 그려주세요 =  చిత్రీకరించు; 
const 초기화 = చెరిపి_వేయి; // ?? reset vs 지워주세요 == "please erase"
const 초기상태 = ఆది_స్థితి; 
const 중심로가주세요 = కేంద్రకమునకు_వెళ్ళు; 
const 그만살려 = ఆట_ఆపు; 
// const कूर्चे_चालिते_विलिख = కుంచిక_కదిలిన_ప్రతి_సారీ_చిత్రీకరించు;
const 포장하다 = చుట్టు; 
const 포장하지_마십시오 = చుట్టొద్దు; 
const 모양을_시작 = ఆకారము_ప్రారంభించు; 
const 모양을_완성하다 = ఆకారము_ముగించు; 
const 나아가다 =  ముందుకు_జరుగు;  
const 뒤로가다 = వెనుకకు_జరుగు;  
const 우회전 = కుడి_వైపు_తిరుగు;  
const 왼쪽으로돌아 = ఎడమ_వైపు_తిరుగు; 

const 시계반대방향  = ఎడమవైపు_చాపాము; 
const 시계방향  = కుడివైపు_చాపాము; 
const 원 = వృత్తము; 
const 곡선 = వృత్తము; 
const 완전한원 = నిండు_వృత్తము; 

const 솔질하다 =  కుంచికను_పైకి_ఎత్తు;  
const 브러시를_사용 = కుంచికను_కింద_పెట్టు; 
const 브러시_숨기기 = కుంచికను_దాచు;  
const 브러시를_보여 = కుంచికను_చూపు;  

const 현재_위치 = ప్రస్తుత_స్థానము;
const 위치_변경 = స్థానము_మార్చు;  
const 변경_x = xనియోగించు;  
const 수평_변경 = xనియోగించు; 
const 변경_y =  yనియోగించు;
const 세로_변경 =  yనియోగించు;
const 각도  = కోణము;
const 방향전환 = కోణము;  

const 쓰다 = వ్రాయి;  
const 난수 = యాదృచ్ఛిక_సంఖ్య; 
const 너비 =  వెడల్పు; 
const 색상을설정 =  రంగు_మార్చు; 
const 색상변경 =  రంగు_మార్చు;  
const 편지얼굴 = అక్షరరూపము_స్థాపించు;

const 최고_X = గరిష్ఠX;
const 최소한도_X = కనిష్ఠX;
const 최고_Y = గరిష్ఠY;
const 최소한도_Y = కనిష్ఠY;
const 억누르다 = గాడిలో_పెట్టు; 

const 반복하다 = ఆవర్తించు;
const 계산하는동안반복 = లెక్క_పెడుతూ_ఆవర్తించు;
const 동안반복 = యావత్_పరిక్రమ;
const 면_그럼_또다른 = యది_తర్హి_అన్యథా;
const 면_그럼 = యది_తర్హి;
const 휴식을취하다 = విరామము;
const 생명있는 = ఆడించు;
const 미루다 = విలంబించు;
// const 데모 = ప్రదర్శన;
//////////////////


ఆది_స్థితి();


//////////////////



ఆది_స్థితి();
