// Simple Story -- simple framework for story frames
// shows how to construct a story using frames. There is a text generator,
// "explain" that puts text on the screen, but a frame can be anything:
// a drawing, a turtle graphics image, or a turtle graphics animation
// (hopefully of a finite duration).

//**** GLOBALS ****

var frameNumber = 0
var frameDelay = 0


//**** FUNCTIONS ****

function explain( text) {
  // lines within the text string are separated with an at "@" character.
  ఆది_స్థితి();
  var cWidth = 2* గరిష్ఠX();
  var cHeight = 2* గరిష్ఠY();
  var lineNumber = 0;
  goto(-.90 * cWidth + గరిష్ఠX(), .9 * cHeight - గరిష్ఠY());
  కోణము(90);
  అక్షరరూపము_స్థాపించు("bold 20px arial,sans-serif");

  var lines = text.split("@");
  for (var i=0; i<lines.length; i++) {
    console.log( lines[i])
    goto (-.90 * cWidth + గరిష్ఠX(), గరిష్ఠY() -(i+1) * .1 * cHeight)
    write (lines[i]);
    lineNumber = lineNumber + 1;
  }
  కుంచికను_దాచు();
}

function textDemo () {
  explain ("In a time@long, long ago@and a place far, far away@there was a battle@that changed the history@of the entire@universe.");
}

function frame() {
  switch (frameNumber) {
  case 0:
    frameDelay = 1000;
    explain ("@@@@A Simple Story")
    break;
  case 1:
    explain ("@@@@By a Wacky Programmer")
    break;
  case 2:
    explain ("@@@@Produced by Turtle Graphics")
    break;
  case 3:
    explain ("@@@@Distributed by JavaScript and HTML")
    frameDelay = 1500;
    break;
  case 4:
    explain ("")
    frameNumber = 9;
    frameDelay = 1000;
    break;
  case 10:
    explain ("@@@@@@@@@@In a time");
    break;
  case 11:
    explain ("@@@@@@@@@In a time@long, long ago");
    break;
  case 12:
    explain ("@@@@@@@@In a time@long, long ago@and a place far, far away");
    break;
  case 13:
    explain ("@@@@@@@In a time@long, long ago@and a place far, far away@there was a software program");
    break;
  case 14:
    explain ("@@@@@@In a time@long, long ago@and a place far, far away@there was a software program@that changed the history");
    break;
  case 15:
    explain ("@@@@@In a time@long, long ago@and a place far, far away@there was a software program@that changed the history@of the entire");
    break;
  case 16:
    explain ("@@@@In a time@long, long ago@and a place far, far away@there was a software program@that changed the history@of the entire@(yes, the ENTIRE).");
    break;
  case 17:
    explain ("@@@In a time@long, long ago@and a place far, far away@there was a software program@that changed the history@of the entire@(yes, the ENTIRE)@universe.");
    break;
  case 18:
    explain ("@@In a time@long, long ago@and a place far, far away@there was a software program@that changed the history@of the entire@(yes, the ENTIRE)@universe.");
    break;
  case 19:
    explain ("@In a time@long, long ago@and a place far, far away@there was a software program@that changed the history@of the entire@(yes, the ENTIRE)@universe.");
    break;
  case 20:
    explain ("In a time@long, long ago@and a place far, far away@there was a software program@that changed the history@of the entire@(yes, the ENTIRE)@universe.");
    break;
  case 21:
    explain ("long, long ago@and a place far, far away@there was a software program@that changed the history@of the entire@(yes, the ENTIRE)@universe.");
    break;
  case 22:
    explain ("and a place far, far away@there was a software program@that changed the history@of the entire@(yes, the ENTIRE)@universe.");
    break;
  case 23:
    explain ("there was a software program@that changed the history@of the entire@(yes, the ENTIRE)@universe.");
    break;
  case 24:
    explain ("that changed the history@of the entire@(yes, the ENTIRE)@universe.");
    break;
  case 25:
    explain ("of the entire@(yes, the ENTIRE)@universe.");
    break;
  case 26:
    explain ("(yes, the ENTIRE)@universe.");
    break;
  case 27:
    explain ("universe.");
    break;
  case 28:
    explain ("");
    frameDelay = 2000;
    break;
  default:
    explain("@@@@@The end.")
    frameNumber = -1;
    break;
  }
  if (frameNumber >= 0) {
    frameNumber = frameNumber + 1;
    delay(frame, frameDelay)
  }
}
  
function demo() {
  // show three text frames
  frameDelay = 1000;
  frameNumber = 0;
  frame();
}
