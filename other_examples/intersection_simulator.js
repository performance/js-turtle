// Intersection Simulator -- simulates a traffic intersection and its lights
/*
current problems to be fixed
 - turn green not extending
*/
/*
Simple Traffic Light Simulator

This simulates a set of traffic lights at an intersection.
There are sets of lights for each direction: north, south, east, west.
Each set of lights includes:
  - the green, yellow, and red lights for the main traffic flow
  - the green, yellow, and red left turn arrows
  - a green Walk and red Don\'t Walk signs
  
The location of the signal display is as follows:
       w |N|
       m | |
       l | |
       W | | N lmw
---------------------
W                   E
---------------------
   wml S | | E
         | | l
         | | m
         |S| w
where N, S, E, W indicates the direction of travel
      l is the left turn signal
      m is the main traffic signal
      w is the walk signal


rules for lights
  
basic duration rules
  flashing don\'t walk duration is fixed
    let those crossing get across but no new starts
  yellow has a fixed duration (for this simulation, it could vary based on insection size)
  green duration can be extended based on queued traffid
  number unqueued is dependent on duration of green
  green has a maximum duration (see next)
  periodically allow cross traffic, even if not seen
  periodically allow turn traffic, even if not seen 
  lights flash 1/2 sec on, 1/2 sec off -- not implemented yet
  don\'t want to cut off flashing -- not implemented yet
  east and west greens (and walks) set together, except turns
  north and south greens (and walks) set together, except turns
  lights are protected from cross traffic with guard times
  while a queue is implemented as in integer, it is treated as a binary for modeling purposes
    to emulate a simple loop detector
  
 traffic arrivals
   independent random intervals for E, W, N, S cars, left turns and people

 events (one direction)
  lights normally procede from red to green to yellow and back to red
  lights may flash red -- not implemented yet
  start of extendable green time
  end of turn guard time
  end of main guard time
*/

//**** GLOBALS ****
// reporting and debug constants
_సర్వత్ర_   NO_MESSAGES =      0;
_సర్వత్ర_   QUEUE_MESSAGES =   1;
_సర్వత్ర_   OVERALL_MESSAGES = 2;
_సర్వత్ర_   STATE_MESSAGES =   3;
_సర్వత్ర_   EVENT_MESSAGES =   4;
_సర్వత్ర_   DEBUG_LEVEL = QUEUE_MESSAGES;

// drawing constants
_సర్వత్ర_   roadWidth = 80;
_సర్వత్ర_   crossWalkWidth = 8;
_సర్వత్ర_   stopLineSeparation = 4;
_సర్వత్ర_   stopLineWidth = 2;

// light states
_సర్వత్ర_   red = "red";
_సర్వత్ర_   green = "green";
_సర్వత్ర_   yellow = "yellow";

// light types
_సర్వత్ర_   main = "main";
_సర్వత్ర_   leftTurn = "leftTurn";
_సర్వత్ర_   walk = "walk";

// light duration constants
// all of the below times are in milliseconds
_సర్వత్ర_   minimumGreenDuration =      5 * 1000;
_సర్వత్ర_   maximumGreenDuration =     30 * 1000;
_సర్వత్ర_   mainPerCar =              1.5 * 1000;
_సర్వత్ర_   yellowDuration =            5 * 1000;
_సర్వత్ర_   mainGuardDuration =         1 * 1000;

_సర్వత్ర_   minimumTurnDuration =       4 * 1000;
_సర్వత్ర_   maximumTurnDuration =      20 * 1000;
_సర్వత్ర_   turnPerCar =                2 * 1000;
_సర్వత్ర_   turnGuardDuration =         1 * 1000;

_సర్వత్ర_   minimumGreenWalkDuration =  4 * 1000;
_సర్వత్ర_   ewWalkDuration =           20 * 1000;
_సర్వత్ర_   nsWalkDuration =           25 * 1000;

_సర్వత్ర_   extendDuration =            1 * 1000;
_సర్వత్ర_   extendDelayDuration =       3 * 1000; // must be less than minimum green duration and minimum walk duration
_సర్వత్ర_   extendDelayDuration = Math.min (minimumGreenWalkDuration, minimumGreenDuration) - .5 * 1000; // must be less than minimum green duration and minimum walk duration

// light data structures (object)

_విధానము_     Light(id, type, aveArrivalTime, aveDepartureTime) {
    // create a Light object
    this.id = id;
    this.type = type;
    this.state = red;
    this.queue = [];
    this.aveArrivalTime = aveArrivalTime;
    this.aveDepartureTime = aveDepartureTime;
    this.nextArrivalTime = undefined;
    this.nextDepartureTime = undefined;
    this.nextTime = undefined;
    this.maxNextTime = undefined;
    this.nextState = "turnRed";
}

//  milliseconds per hour / arrivals per hour = ave milliseconds /arrival
//                  id       type, ave arrival time per hour, ave departure msec
_సర్వత్ర_   ebMain = new Light("ebMain", main,     3600000 / 600, 1200);
_సర్వత్ర_   ebTurn = new Light("ebTurn", leftTurn, 3600000 / 300, 1700);
_సర్వత్ర_   ebWalk = new Light("ebWalk", walk,     3600000 /  25,    0);
_సర్వత్ర_   wbMain = new Light("wbMain", main,     3600000 / 600, 1200);
_సర్వత్ర_   wbTurn = new Light("wbTurn", leftTurn, 3600000 / 300, 1700);
_సర్వత్ర_   wbWalk = new Light("wbWalk", walk,     3600000 /  25,    0);
_సర్వత్ర_   nbMain = new Light("nbMain", main,     3600000 / 600, 1200);
_సర్వత్ర_   nbTurn = new Light("nbTurn", leftTurn, 3600000 / 300, 1700);
_సర్వత్ర_   nbWalk = new Light("nbWalk", walk,     3600000 /  25,    0);
_సర్వత్ర_   sbMain = new Light("sbMain", main,     3600000 / 600, 1200);
_సర్వత్ర_   sbTurn = new Light("sbTurn", leftTurn, 3600000 / 300, 1700);
_సర్వత్ర_   sbWalk = new Light("sbWalk", walk,     3600000 /  25,    0);


_విధానము_     testRates () {
  // testRates -- test assumptions to see if they can handle the indicated traffic
  _సర్వత్ర_   totalCycleTime = 2 * (Math.max( maximumGreenDuration + yellowDuration + mainGuardDuration,
                              minimumGreenWalkDuration + ewWalkDuration + mainGuardDuration) +
                            maximumTurnDuration + yellowDuration + turnGuardDuration);
  
  testRate (nbMain);
  testRate (nbWalk);
  testRate (nbTurn);
  testRate (sbMain);
  testRate (sbWalk);
  testRate (sbTurn);
  testRate (ebMain);
  testRate (ebWalk);
  testRate (ebTurn);
  testRate (wbMain);
  testRate (wbWalk);
  testRate (wbTurn);

  _విధానము_     testRate (signal) {
    // testRate -- test assumptions to see if a signal can handle the indicated traffic
  
    _సర్వత్ర_   cycleArrivalRate = totalCycleTime / signal.aveArrivalTime;
    if (signal.type === leftTurn) {
      _సర్వత్ర_   cycleDepartureRate = maximumTurnDuration / signal.aveDepartureTime;
    } else if (signal.type === main) {
      _సర్వత్ర_   cycleDepartureRate = maximumGreenDuration / signal.aveDepartureTime;
    } else { // assume walkers
      _సర్వత్ర_   cycleDepartureRate = 10000; // assuming no walker delay or congestion
    }
    if (cycleArrivalRate > .90 * cycleDepartureRate) {
      throw "Cycle arrival rate exceeded departure rate for " + signal.id;
    }
  }
}

testRates();

//**** FUNCTIONS ****

//** Drawing functions **
_విధానము_     drawEWstreet() {
   చుట్టొద్దు();
  స్థానము_మార్చు(కనిష్ఠX(),0);
  కోణము(90);
  కుంచికను_కింద_పెట్టు();
  రంగు_మార్చు("నలుపు");
  వెడల్పు(roadWidth);
  ముందుకు_జరుగు(గరిష్ఠX() + గరిష్ఠX());
}

_విధానము_     drawNSstreet() {
  స్థానము_మార్చు(0,గరిష్ఠY());
  కోణము(180);
  కుంచికను_కింద_పెట్టు();
  రంగు_మార్చు("నలుపు");
  వెడల్పు(roadWidth);
  ముందుకు_జరుగు(గరిష్ఠY() + గరిష్ఠY());
}

_విధానము_     drawEWstripe() {
  స్థానము_మార్చు(కనిష్ఠX(),0);
  కోణము(90);
  రంగు_మార్చు( పసుపు );
  వెడల్పు(1);
  ముందుకు_జరుగు(గరిష్ఠX() - roadWidth / 2 - crossWalkWidth);
  కుంచికను_పైకి_ఎత్తు();
  ముందుకు_జరుగు(roadWidth + 2 * crossWalkWidth);
  కుంచికను_కింద_పెట్టు();
  ముందుకు_జరుగు(గరిష్ఠX() - roadWidth / 2 - crossWalkWidth);
}

_విధానము_     drawNSstripe() {
  స్థానము_మార్చు(0,గరిష్ఠY());
  కోణము(180);
  రంగు_మార్చు( పసుపు );
  వెడల్పు(1);
  ముందుకు_జరుగు(గరిష్ఠY() - roadWidth / 2 - crossWalkWidth);
  కుంచికను_పైకి_ఎత్తు();
  ముందుకు_జరుగు(roadWidth + 2 * crossWalkWidth);
  కుంచికను_కింద_పెట్టు();
  ముందుకు_జరుగు(గరిష్ఠY() - roadWidth / 2 - crossWalkWidth);
}

_విధానము_     drawCrossWalk(x, y, dir) {
  // draw stripes for a crosswalk
  // x,y is coordinates of travel side of road
  // dir is direction across road
    
  // draw inner cross walk line
  రంగు_మార్చు( తెలుపు );
  స్థానము_మార్చు(x, y);
  కోణము(dir);
  వెడల్పు(1);
  కుంచికను_కింద_పెట్టు();
  ముందుకు_జరుగు(roadWidth);
    
  // draw outer cross walk line
  కుంచికను_పైకి_ఎత్తు();
  ఎడమ_వైపు_తిరుగు(90);
  ముందుకు_జరుగు(crossWalkWidth);
  ఎడమ_వైపు_తిరుగు(90);
  కుంచికను_కింద_పెట్టు();
  ముందుకు_జరుగు(roadWidth);
    
  // draw stop line
  కుంచికను_పైకి_ఎత్తు();
  కుడి_వైపు_తిరుగు(90);
  ముందుకు_జరుగు(stopLineSeparation);
  కుడి_వైపు_తిరుగు(90);
  ముందుకు_జరుగు(2);
  వెడల్పు(stopLineWidth);
  కుంచికను_కింద_పెట్టు();
  ముందుకు_జరుగు(roadWidth / 2 - 4);
  వెడల్పు(1);
}

_విధానము_     drawTurnArrow(x, y, dir) {
  కుంచికను_దాచు();
  స్థానము_మార్చు(x,y);
  కోణము (dir);
  కుంచికను_కింద_పెట్టు();
  రంగు_మార్చు( తెలుపు );
  వెడల్పు(5);
  ముందుకు_జరుగు(5);
  ఎడమవైపు_చాపము(5,90);
  ముందుకు_జరుగు(4);
  వెడల్పు(2);
  ఎడమ_వైపు_తిరుగు(130);
  ముందుకు_జరుగు(5);
  కుడి_వైపు_తిరుగు(160);
  ముందుకు_జరుగు(9);
  కుడి_వైపు_తిరుగు(120);
  ముందుకు_జరుగు(9);
  కుడి_వైపు_తిరుగు(160);
  ముందుకు_జరుగు(5);
}
  

_విధానము_     drawStreets() {
  drawNSstreet();
  drawEWstreet();

  drawNSstripe();
  drawEWstripe();

  drawTurnArrow(-18,75,180);
  drawTurnArrow(-75,-18,90);
  drawTurnArrow(18,-75,0);
  drawTurnArrow(75,18,270);

  drawCrossWalk( roadWidth / 2,  roadWidth / 2, 180 );
  drawCrossWalk( roadWidth / 2, -roadWidth / 2, 270 );
  drawCrossWalk(-roadWidth / 2, -roadWidth / 2, 0 );
  drawCrossWalk(-roadWidth / 2,  roadWidth / 2, 90 );
}

//** Light Drawing Functions **

_విధానము_     setLightColor(lightColor, stateColor) {
  _సర్వత్ర_   signalBackground = "lightgray"; // color of an "off" signal light
  if (lightColor === stateColor) {
    రంగు_మార్చు(lightColor);
  } else {
    రంగు_మార్చు(signalBackground);
  }
}

_విధానము_     drawArrow() { // assume pointing up, color set and pen up
  _సర్వత్ర_   penWidth = కుంచిక.వెడల్పు;
  _సర్వత్ర_   arrowSize = 8;
  _సర్వత్ర_   vertOffset = 5;
  వెనుకకు_జరుగు(vertOffset);
  కుంచికను_కింద_పెట్టు();
  వెడల్పు(3);
  ఎడమ_వైపు_తిరుగు(45);
  ముందుకు_జరుగు(arrowSize);
  కుడి_వైపు_తిరుగు(90);
  ముందుకు_జరుగు(arrowSize);
  కుంచికను_పైకి_ఎత్తు();
  వెనుకకు_జరుగు(arrowSize);
  ఎడమ_వైపు_తిరుగు(90);
  వెనుకకు_జరుగు(arrowSize);
  కుడి_వైపు_తిరుగు(45);
  వెడల్పు(penWidth);
  ముందుకు_జరుగు(vertOffset);
}

_విధానము_     drawTurnSignal(state) {
  ఎడమ_వైపు_తిరుగు(90);
  ముందుకు_జరుగు(13);
  setLightColor("green", state);
  drawArrow();

  వెనుకకు_జరుగు(13);
  setLightColor("yellow", state);
  drawArrow();

  వెనుకకు_జరుగు(13);
  setLightColor("red", state);
  drawArrow();

  ముందుకు_జరుగు(13);
  కుడి_వైపు_తిరుగు(90);
}

_విధానము_     drawMainSignal(state) { // main signal is straight ahead
  ఎడమ_వైపు_తిరుగు(90);
  ముందుకు_జరుగు(13);
  setLightColor("green", state);
  నిండు_వృత్తము();

  వెనుకకు_జరుగు(13);
  setLightColor("yellow", state);
  నిండు_వృత్తము();

  వెనుకకు_జరుగు(13);
  setLightColor("red", state);
  నిండు_వృత్తము();

  ముందుకు_జరుగు(13);
  కుడి_వైపు_తిరుగు(90);
}

_విధానము_     drawWalkSignal(state) {
  // should do the flashing red for don\'t start
  // could do the flash down counter
  setLightColor("green", state);
  ఎడమ_వైపు_తిరుగు(90);
  ముందుకు_జరుగు(5);
  కుడి_వైపు_తిరుగు(90);
  వ్రాయి("WALK");

  ఎడమ_వైపు_తిరుగు(90);
  వెనుకకు_జరుగు(5);
  కుడి_వైపు_తిరుగు(90);
  setLightColor("red", state);
  if (state === "yellow") {
    రంగు_మార్చు( పసుపు )
  }
  కుడి_వైపు_తిరుగు(90);
  ముందుకు_జరుగు(8);
  ఎడమ_వైపు_తిరుగు(90);
  వ్రాయి("DONT");

  కుడి_వైపు_తిరుగు(90);
  ముందుకు_జరుగు(13);
  ఎడమ_వైపు_తిరుగు(90);
  వ్రాయి("WALK");

  కుడి_వైపు_తిరుగు(90);
  వెనుకకు_జరుగు(25);
  ఎడమ_వైపు_తిరుగు(90);
}

_విధానము_     drawSignal(x, y, orient, mainState, turnState, walkState) {
  // move కుంచిక to position and కోణము depending on street direction
  స్థానము_మార్చు(x, y);
  కోణము(orient);
  drawTurnSignal(turnState);

  ముందుకు_జరుగు(10);
  drawMainSignal(mainState);

  ముందుకు_జరుగు(10);
  drawWalkSignal(walkState);
}

_విధానము_     drawSignals() {
  drawSignal( 50,  65,  90, nbMain.state, nbTurn.state, nbWalk.state);
  drawSignal(-50, -65, 270, sbMain.state, sbTurn.state, sbWalk.state);
  drawSignal( 65, -50, 180, ebMain.state, ebTurn.state, ebWalk.state);
  drawSignal(-65,  50,   0, wbMain.state, wbTurn.state, wbWalk.state);
}


_విధానము_     printQueues () {
  console.log (currentSecs +
               " Northbound main: " + nbMain.queue.length +
               ", turn: " +           nbTurn.queue.length +
               ", walk: " +           nbWalk.queue.length + 
               " Southbound main: " + sbMain.queue.length +
               ", turn: " +           sbTurn.queue.length +
               ", walk: " +           sbWalk.queue.length);

  console.log (currentSecs +
               " Eastbound main: " +  ebMain.queue.length +
               ", turn: " +           ebTurn.queue.length +
               ", walk: " +           ebWalk.queue.length +
               " Westbound main: " +  wbMain.queue.length +
               ", turn: " +           wbTurn.queue.length +
               ", walk: " +           wbWalk.queue.length);
}


_విధానము_     writeQueues () {
  writeQueueSizes(55,  -గరిష్ఠY()+5,  0, "N",
    nbTurn.queue.length, nbMain.queue.length, nbWalk.queue.length);
  writeQueueSizes(-68,  గరిష్ఠY()-20, 0, "S",
    sbTurn.queue.length, sbMain.queue.length, sbWalk.queue.length);
  writeQueueSizes(-గరిష్ఠX()+5, -55, 90, "E",
    ebTurn.queue.length, ebMain.queue.length, ebWalk.queue.length);
  writeQueueSizes( గరిష్ఠX()-20, 68, 90, "W",
    wbTurn.queue.length, wbMain.queue.length, wbWalk.queue.length);
}

_విధానము_     writeQueueSizes(x, y, orientation, dir, turn, main, walk) {
//write the number waiting for each signal
//  x is the x position of the text start
//  y is the y position of the text start
//  orientation is the direction of the text
//  dir is directon of traffic
//  turn is the turn light queue
//  main is the main light queue
//  walk is the walk light queue
  స్థానము_మార్చు(x,y)
  కోణము(orientation)
/*
  if (dir === "N") {
    స్థానము_మార్చు(55,-గరిష్ఠY()+5);
    కోణము(0);
  } else if (dir === "S") {
    స్థానము_మార్చు(-68,గరిష్ఠY()-20);
    కోణము(0);
  } else if (dir === "E") {
    స్థానము_మార్చు(-గరిష్ఠX()+5, -55);
    కోణము(90);
  } else if (dir === "W") {
    స్థానము_మార్చు(గరిష్ఠX()-20, 68);
    కోణము(90);
  } else {
    స్థానము_మార్చు(-200,200);
    కోణము(90);
  }
*/
  వెడల్పు(1);
  రంగు_మార్చు("నలుపు");
  if (dir === "S" || dir === "W") { // South and West are in opposite order
    వ్రాయి(walk);
  } else {
    వ్రాయి(turn);
  }

  కుడి_వైపు_తిరుగు(90);
  ముందుకు_జరుగు(12);
  ఎడమ_వైపు_తిరుగు(90);
  వ్రాయి(main);

  కుడి_వైపు_తిరుగు(90);
  ముందుకు_జరుగు(12);
  ఎడమ_వైపు_తిరుగు(90);
  if (dir === "S" || dir === "W") {
    వ్రాయి(turn);
  } else {
    వ్రాయి(walk);
  }
  వ్రాయి("     " + dir); // debug statement
}

_విధానము_     drawQueues() {
  //SB
  drawQueue( -10,   55,   0, sbTurn.queue, 12);
  drawQueue( -30,   55,   0, sbMain.queue, 12);
  drawQueue( -50,  105,   0, sbWalk.queue,  6);

  //WB
  drawQueue(  55,   10,  90, wbTurn.queue, 12);
  drawQueue(  55,   30,  90, wbMain.queue, 12);
  drawQueue( 105,   50,  90, wbWalk.queue,  6);

  //NB
  drawQueue(  10,  -55, 180, nbTurn.queue, 12);
  drawQueue(  30,  -55, 180, nbMain.queue, 12);
  drawQueue(  50, -105, 180, nbWalk.queue,  6);

  //EB
  drawQueue( -55,  -10, 270, ebTurn.queue, 12);
  drawQueue( -55,  -30, 270, ebMain.queue, 12);
  drawQueue(-105,  -50, 270, ebWalk.queue,  6);
}

_విధానము_     drawQueue(x, y, dir, queue, len) {
  స్థానము_మార్చు(x, y);
  కోణము(dir);
  వెడల్పు(10);
  for (_సర్వత్ర_   i=0; i<queue.length; i++) {
    కుంచికను_కింద_పెట్టు();
    రంగు_మార్చు(queue[i].color);
    ముందుకు_జరుగు(len); 
    కుంచికను_పైకి_ఎత్తు();
    ముందుకు_జరుగు(4);
  }
}

//** Safety Functions **

_విధానము_     safetyCheck() {
/*
 safetyCheck makes sure that traffic is not allowed in cross
 directions (even if a programmer made an error)
 
 no cross traffic is allowed for any green or yellow light

*/
  _సర్వత్ర_   fault = false;
  if ( (ebMain.state === green || ebMain.state === yellow ||
        ebWalk.state === green || ebWalk.state === yellow) &&
       !(nbMain.state === red && sbMain.state === red &&
         nbTurn.state === red && sbTurn.state === red &&
         wbTurn.state === red) ) {
    console.log (currentSecs + " East bound main or walk conflict");
    fault = true;
  }
  if ( (wbMain.state === green || wbMain.state === yellow ||
        wbWalk.state === green || wbWalk.state === yellow) &&
       !(nbMain.state === red && sbMain.state === red &&
         nbTurn.state === red && sbTurn.state === red &&
         ebTurn.state === red) ) {
    console.log (currentSecs + " West bound main or walk conflict");
    fault = true;
  }
  if ( (ebTurn.state === green || ebTurn.state === yellow) &&
       !(nbMain.state === red && sbMain.state === red &&
         nbTurn.state === red && sbTurn.state === red &&
         wbMain.state === red) ) {
    console.log (currentSecs + " East bound turn conflict");
    fault = true;
  }
  if ( (wbTurn.state === green || wbTurn.state === yellow) &&
       !(nbMain.state === red && sbMain.state === red &&
         nbTurn.state === red && sbTurn.state === red &&
         ebMain.state === red) ) {
    console.log (currentSecs + " West bound turn conflict");
    fault = true;
  }
  
  if ( (nbMain.state === green || nbMain.state === yellow ||
        nbWalk.state === green || nbWalk.state === yellow) &&
       !(ebMain.state === red && wbMain.state === red &&
         ebTurn.state === red && wbTurn.state === red &&
         sbTurn.state === red) ) {
    console.log (currentSecs + " North bound main or walk conflict");
    fault = true;
  }
  if ( (sbMain.state === green || sbMain.state === yellow ||
        sbWalk.state === green || sbWalk.state === yellow) &&
       !(ebMain.state === red && wbMain.state === red &&
         ebTurn.state === red && wbTurn.state === red &&
         nbTurn.state === red) ) {
    console.log (currentSecs + " South bound main or walk conflict");
    fault = true;
  }
  if ( (nbTurn.state === green || nbTurn.state === yellow) &&
       !(ebMain.state === red && wbMain.state === red &&
         ebTurn.state === red && wbTurn.state === red &&
         sbMain.state === red) ) {
    console.log (currentSecs + " North bound turn conflict");
    fault = true;
  }
  if ( (sbTurn.state === green || sbTurn.state === yellow) &&
       !(ebMain.state === red && wbMain.state === red &&
         ebTurn.state === red && wbTurn.state === red &&
         nbMain.state === red) ) {
    console.log (currentSecs + " South bound turn conflict");
    fault = true;
  }
  
  if (fault) {
    /*
state s/b flashing red all around, may restart after a time
    turnFlashingRed(ebMain, -1);
    turnFlashingRed(ebTurn, -1);
    turnFlashingRed(ebWalk, -1);
    turnFlashingRed(wbMain, -1);
    turnFlashingRed(wbTurn, -1);
    turnFlashingRed(wbWalk, -1);
    turnFlashingRed(nbMain, -1);
    turnFlashingRed(nbTurn, -1);
    turnFlashingRed(nbWalk, -1);
    turnFlashingRed(sbMain, -1);
    turnFlashingRed(sbTurn, -1);
    turnFlashingRed(sbWalk, -1);
     */
    throw "safety fault";
  }
}

// ** Light State Machines and Functions ***
// the light state machines advances the light from one state to the next
// usually based on the expiry of a timer, but may change due to a callback

_సర్వత్ర_   baseTime;
_విధానము_     msToSec(msecs) {
  if (baseTime === undefined) {
    baseTime = msecs;
  }
  _ఫలము_  (msecs - baseTime) % 1000000/1000;
}

_విధానము_     logEvent (id, eventName, duration) {
  if (duration === undefined) {
    duration =  "undefined"
  } else {
    duration = (duration/1000) + " secs"; // convert from msec to seconds
  }
  if (DEBUG_LEVEL >= EVENT_MESSAGES) {
    console.log(currentSecs.toFixed(3) + "     " + id + " turned " + eventName + " for " + duration);
  }
}

_విధానము_     turnGreen(signal, duration) {
  logEvent (signal.id, "green", duration)
  signal.state = green;
  greenCount = greenCount + 1;
  if (signal.type === main) {
    signal.nextState = "extendGreen";
  } else if (signal.type === turn) {
    signal.nextState = "extendTurn";
  } else {
    signal.nextState = "turnYellow";
  }
  signal.nextTime = currentTime + duration;
}

_విధానము_     extendTurn (signal, duration) {
  logEvent (signal.id, "extendTurn", duration);
  signal.nextState = "extendTurn";
  signal.nextTime = currentTime + duration;
}

_విధానము_     extendGreen(signal, duration) {
  logEvent (signal.id, "extending green", duration)
  // signal should already be green, assume no extension, so ignor duration
  signal.nextState = "turnYellow";
  if (duration === undefined || duration < 0) {
    signal.nextTime = undefined;
  } else {
    signal.nextTime = currentTime + duration;
  }
}

_విధానము_     turnYellow(signal, duration) {
  logEvent (signal.id, "yellow", duration)
  signal.state = yellow;
  signal.nextState = "turnRed";
  signal.nextTime = currentTime + duration;
}

_విధానము_     turnRed(signal, duration) {
  logEvent (signal.id, "red", duration)
  signal.state = red;
  signal.nextState = "turnGuardRed";
  if (duration === undefined || duration < 0) {
    signal.nextTime = undefined;
  } else {
    signal.nextTime = currentTime + duration;
  }
}

_విధానము_     turnGuardRed(signal, duration) {
  logEvent (signal.id, "guard red", duration)
  signal.state = red;
  signal.nextState = "turnGreen";
  if (duration === undefined || duration < 0) {
    signal.nextTime = undefined;
  } else {
    signal.nextTime = currentTime + duration;
  }
}

_విధానము_     turnFlashingRed(signal, duration) {
  logEvent (signal.id, "flashing red", duration)
  signal.state = red;
  signal.nextState = "turnGreen";
  if (duration === undefined || duration < 0) {
    signal.nextTime = undefined;
  } else {
    signal.nextTime = currentTime + duration;
  }
}

_విధానము_     enableTransition(signal, nextState) { // allow light state machine to fire on next go around
  signal.nextState = nextState;
  signal.nextTime = currentTime;
}

_విధానము_     turnStateMachine(signal, currentTime) {
  if (signal.nextTime !== undefined && currentTime >= signal.nextTime) { // state change is due
    changed = true;
    if (DEBUG_LEVEL >= STATE_MESSAGES) {
      console.log(currentSecs.toFixed(3) + "   time-out for " + signal.id + " turned " + signal.nextState);
    }
    switch (signal.nextState) {

    case "turnGreen":
      turnGreen(signal,minimumTurnDuration);
      signal.maxNextTime = currentTime + maximumTurnDuration;
      extendTurn(signal, minimumTurnDuration);
    break;

    case "extendTurn":
      if (signal.queue.length > 0 && currentTime + extendDuration < signal.maxNextTime) {
        extendTurn(signal, extendDuration);
      } else {
        turnYellow(signal, yellowDuration);
      }
    break;

    case "turnYellow":
      turnYellow(signal, yellowDuration);
    break;

    case "turnRed":
      turnRed(signal, turnGuardDuration);
    break;

    case "turnGuardRed":
      turnGuardRed(signal, undefined); // wait for overall to start the turn
      redGuardComplete(signal);
    break;

    default:
      ఆట_ఆపు();
      throw "unknown next turn state for " + signal.id;
    }
  }
}

_విధానము_     walkStateMachine(signal, currentTime) {
  if (signal.nextTime !== undefined && currentTime >= signal.nextTime) { // state change is due
    changed = true;
    if (DEBUG_LEVEL >= STATE_MESSAGES) {
      console.log(currentSecs.toFixed(3) + "   time-out for " + signal.id + " turned " + signal.nextState);
    }
    switch (signal.nextState) {

    case "turnGreen":
      if (signal.id == "nbWalk" || signal.id == "sbWalk") {
        signal.maxNextTime = currentTime + maximumGreenDuration + yellowDuration - nsWalkDuration;
      } else {
        signal.maxNextTime = currentTime + maximumGreenDuration + yellowDuration - ewWalkDuration;
      }
      turnGreen(signal, minimumGreenWalkDuration);
    break;

    case "turnYellow":
      if (signal.id == "nbWalk" || signal.id == "sbWalk") {
        turnYellow(signal, nsWalkDuration);
      } else {
        turnYellow(signal, ewWalkDuration);
      }
    break;

    case "turnRed":
      turnRed(signal, mainGuardDuration);
    break;

    case "turnGuardRed":
      turnGuardRed(signal, undefined); // wait for overall to start the turn
      redGuardComplete(signal);
    break;

    default:
      ఆట_ఆపు();
      throw "unknown next walk state for " + signal.id;
    }
  }
}

_విధానము_     mainStateMachine(signal, currentTime) {
  if (signal.nextTime !== undefined && currentTime >= signal.nextTime) { // state change is due
    changed = true;
    if (DEBUG_LEVEL >= STATE_MESSAGES) {
      console.log(currentSecs.toFixed(3) + "   time-out for " + signal.id + " turned " + signal.nextState);
    }
    switch (signal.nextState) {

    case "turnGreen":
      signal.maxNextTime = currentTime + maximumGreenDuration;
      turnGreen(signal, minimumGreenDuration);
    break;

    case "extendGreen":
      extendGreen(signal, extendDuration);
    break;

    case "turnYellow":
      turnYellow(signal, yellowDuration);
    break;

    case "turnRed":
      turnRed(signal, mainGuardDuration);
    break;

    case "turnGuardRed":
      turnGuardRed(signal, undefined); // wait for sync
      redGuardComplete(signal);
    break;

    default:
      ఆట_ఆపు();
      throw "unknown next main state for " + signal.id;
    }
  }
}


//** Traffic Simulation Functions **

_విధానము_     incDecQueue(signal) {
  // check for departures when light is green
   // should only do this when light is green and start new departure timer when light goes green
  _సర్వత్ర_   spread;
  spread = 0.5;
  _సర్వత్ర_   possibleDepartureTime = currentTime +
            యాదృచ్ఛిక_సంఖ్య((1 - spread) * signal.aveDepartureTime, (1 + spread) * signal.aveDepartureTime);
  if (signal.state === green) {
    if (signal.aveDepartureTime === 0) { // special case for walkers
      signal.queue = [];
      changed = true;
    } else if (signal.nextDepartureTime === undefined) {
      signal.nextDepartureTime = possibleDepartureTime;
    } else if (currentTime > signal.nextDepartureTime) {
      if (signal.queue.length > 0) { // queue has member to leave
        changed = true;
        signal.queue.shift();
        signal.nextDepartureTime = possibleDepartureTime;
      }
    } else {
      // no departure pending
    }
  } else { // light is not green, so no departures
    signal.nextDepartureTime = undefined;
  }
  
  // check for arrivals
  if (signal.nextArrivalTime === undefined || currentTime > signal.nextArrivalTime) {
    changed = true;
    signal.queue.push ({color:యాదృచ్ఛిక_సంఖ్య(16), arrivalTime:currentTime});
    // adjust the average to give it some variation within the average
    spread = 0.95;
    signal.nextArrivalTime = currentTime +
      యాదృచ్ఛిక_సంఖ్య((1 - spread) * signal.aveArrivalTime, (1 + spread) * signal.aveArrivalTime);
  }
}


_విధానము_     simulateTraffic() {
  incDecQueue(ebTurn);
  incDecQueue(ebWalk);
  incDecQueue(ebMain);
  incDecQueue(wbTurn);
  incDecQueue(wbWalk);
  incDecQueue(wbMain);
  incDecQueue(nbTurn);
  incDecQueue(nbWalk);
  incDecQueue(nbMain);
  incDecQueue(sbTurn);
  incDecQueue(sbWalk);
  incDecQueue(sbMain);
}

// ** Overall State Machine and Functions

// *Globals*
_సర్వత్ర_   overallNextState;
_సర్వత్ర_   overallNextTime;
_సర్వత్ర_   turnCount = 0;
_సర్వత్ర_   greenCount = 0;

_విధానము_     nextOverallState(nextState, time) {
  overallNextState = nextState;
  overallNextTime = time;
}

_విధానము_     redGuardComplete(signal) {
  /* callback when red guard time complete for a particular signal */
  _సర్వత్ర_   id = signal.id;
  if (id === nbTurn || id === sbTurn || id === ebTurn || id === wbTurn) {
    turnCount = turnCount - 1; //global
    if (turnCount < 0) {
      throw "Turn counter negative by " + id;
    }
  }
  greenCount = greenCount - 1;
  if (greenCount < 0) {
    throw "Green counter made negative by " + id;
  } else if (greenCount === 0) {
    overallNextTime = currentTime;
  }
}

_విధానము_     startNS() {
  /* entry point to start overall machine into motion */
  nextOverallState("startNS", currentTime);
}


_విధానము_     overallStateMachine() {
/*
- controls the start of travel in either direction
- extends the main green
- has callbacks for competion of turns to advance cross traffic
- has callbacks for competion of guard red to advance cross traffic

 turn lights are autonomous
 increment left turn counter when changing individual turn light to green
 decrement left turn counter when changing individual turn ight ends guard red

when left turn counter is 0, main green may be extended after the minimum green

overall starts NS and EW alternatively based on completion of guard red
overall extends main green in a coordinated way
  starts when both directions have completed minimum green
  ends on either walking yellow or main yellow
*/
  if (overallNextTime !== undefined && currentTime >= overallNextTime) { // state change is due
    if (DEBUG_LEVEL >= OVERALL_MESSAGES) {
      console.log (currentSecs.toFixed(3) + " overall " + overallNextState);
    }
    switch (overallNextState) {
  
    case "startNS":
      //nextOverallState("startEW", undefined); // wait for sync
      if (DEBUG_LEVEL >= QUEUE_MESSAGES) {
         printQueues();
      }
      if (nbTurn.queue.length > 0) {
        enableTransition(nbTurn, "turnGreen");
        turnCount = turnCount + 1;
        if (sbTurn.queue.length === 0) {
          enableTransition(nbMain, "turnGreen");
        }
        nextOverallState("startNSMainOnly", undefined); // wait for sync
      }
      if (sbTurn.queue.length > 0) {
        enableTransition(sbTurn, "turnGreen");
        turnCount = turnCount + 1;
        if (nbTurn.queue.length === 0) {
          enableTransition(sbMain, "turnGreen");
        }
        nextOverallState("startNSMainOnly", undefined); // wait for sync
      }
      if (nbTurn.queue.length === 0 && sbTurn.queue.length === 0) {
        enableTransition(nbMain, "turnGreen");
        enableTransition(sbMain, "turnGreen");
        if (nbWalk.queue.length > 0) {
          enableTransition(nbWalk, "turnGreen");
        }
        if (nbWalk.queue.length > 0) {
          enableTransition(sbWalk, "turnGreen");
        }
        // extend main green invoked after minimum main green
        nextOverallState("extendMainGreenNS", extendDelayDuration);
      }
    break;

    case "startNSMainOnly":
      if (nbTurn.state === red && sbTurn.state === red) {
        enableTransition(nbMain, "turnGreen");
        enableTransition(sbMain, "turnGreen");
        if (nbWalk.queue.length > 0 || sbWalk.queue.length > 0) {
          enableTransition(nbWalk, "turnGreen");
          enableTransition(sbWalk, "turnGreen");
        }
        nextOverallState("extendMainGreenNS", extendDelayDuration);
      } else {
        nextOverallState("startNSMainOnly", undefined); // wait for sync
      }
    break;
  
    case "extendMainGreenNS":
      // assume nbMain.state === green && sbMain.state === green
      if (nbMain.queue.length > 0 || sbMain.queue.length > 0) { //time extension warrented
        if (nbWalk.state === green || sbWalk.state === green) {
          if ( (currentTime + extendDuration < nbMain.maxNextTime) &&
               (currentTime + extendDuration < sbMain.maxNextTime) &&
               (currentTime + extendDuration < nbWalk.maxNextTime) &&
               (currentTime + extendDuration < sbWalk.maxNextTime) ) { //walk extension OK
            extendGreen(nbWalk, undefined);
            extendGreen(sbWalk, undefined);
            extendGreen(nbMain, undefined);
            extendGreen(sbMain, undefined);
            overallNextTime = currentTime + extendDuration; // just stay in extendMainGreenNS
          } else { //end walk extension
            enableTransition(nbWalk, "turnYellow");
            enableTransition(sbWalk, "turnYellow");
            extendGreen(sbMain, nsWalkDuration - yellowDuration);
            extendGreen(nbMain, nsWalkDuration - yellowDuration);
            nextOverallState("startEW", undefined); // wait for sync
          }
        } else { // walks do not apply
          if ( (currentTime + extendDuration < nbMain.maxNextTime) &&
               (currentTime + extendDuration < sbMain.maxNextTime) ) { //main extension OK
            extendGreen(nbMain, undefined);
            extendGreen(sbMain, undefined);
            overallNextTime = currentTime + extendDuration; // just stay in extendMainGreenNS
          } else { // end main extension
            enableTransition(nbMain, "turnYellow");
            enableTransition(sbMain, "turnYellow");
            nextOverallState("startEW", undefined); // wait for sync
          }
        }
      } else { // extension not warrented
        if (nbWalk.state === green || sbWalk.state === green) {
          enableTransition(nbWalk, "turnYellow");
          enableTransition(sbWalk, "turnYellow");
          extendGreen(sbMain, nsWalkDuration - yellowDuration);
          extendGreen(nbMain, nsWalkDuration - yellowDuration);
          nextOverallState("startEW", undefined); // wait for sync
        } else { // walks do not apply
          enableTransition(nbMain, "turnYellow");
          enableTransition(sbMain, "turnYellow");
          nextOverallState("startEW", undefined); // wait for sync
        }
      }
    break;

    case "startEW":
      nextOverallState("startEWMainOnly", undefined); // wait for sync
      if (ebTurn.queue.length > 0) {
        enableTransition(ebTurn, "turnGreen");
        if (wbTurn.queue.length === 0) {
          enableTransition(ebMain, "turnGreen");
        }
      }
      if (wbTurn.queue.length > 0) {
        enableTransition(wbTurn, "turnGreen");
        if (ebTurn.queue.length === 0) {
          enableTransition(wbMain, "turnGreen");
        }
      }
      if (ebTurn.queue.length === 0 && wbTurn.queue.length === 0) {
        enableTransition(ebMain, "turnGreen");
        enableTransition(wbMain, "turnGreen");
        if (ebWalk.queue.length > 0) {
          enableTransition(ebWalk, "turnGreen");
          // set up the maximum time that the walk light can be green
          ebWalk.maxNextTime = currentTime + maximumGreenDuration - ewWalkDuration;
        }
        if (wbWalk.queue.length > 0) {
          enableTransition(wbWalk, "turnGreen");
          // set up the maximum time that the walk light can be green
          wbWalk.maxNextTime = currentTime + maximumGreenDuration - ewWalkDuration;
        }
        nextOverallState("extendMainGreenEW", undefined);
      }
    break;
  
    case "startEWMainOnly":
      nextOverallState("startEWMainOnly", undefined); // wait for sync
      if (ebTurn.state === red && wbTurn.state === red) {
          enableTransition(ebMain, "turnGreen");
          enableTransition(wbMain, "turnGreen");
        if (ebWalk.queue.length > 0 || wbWalk.queue.length > 0) {
          enableTransition(ebWalk, "turnGreen");
          enableTransition(wbWalk, "turnGreen");
        }
        nextOverallState("extendMainGreenEW", extendDelayDuration);
      }
    break;
  
    case "extendMainGreenEW":
      // assume ebMain.state === green && sbMain.state === green
      if (ebMain.queue.length > 0 || wbMain.queue.length > 0) { //time extension warrented
        if (ebWalk.state === green || wbWalk.state === green) {
          if ( (currentTime + extendDuration < ebMain.maxNextTime) &&
               (currentTime + extendDuration < wbMain.maxNextTime) &&
               (currentTime + extendDuration < ebWalk.maxNextTime) &&
               (currentTime + extendDuration < wbWalk.maxNextTime) ) { //walk extension OK
            extendGreen(ebWalk, undefined);
            extendGreen(wbWalk, undefined);
            extendGreen(ebMain, undefined);
            extendGreen(wbMain, undefined);
            overallNextTime = currentTime + extendDuration; // just stay in extendMainGreenEW
          } else { //end walk extension
            enableTransition(ebWalk, "turnYellow");
            enableTransition(wbWalk, "turnYellow");
            extendGreen(wbMain, ewWalkDuration - yellowDuration);
            extendGreen(ebMain, ewWalkDuration - yellowDuration);
            nextOverallState("startNS", undefined); // wait for sync
          }
        } else { // walks do not apply
          if ( (currentTime + extendDuration < ebMain.maxNextTime) &&
               (currentTime + extendDuration < wbMain.maxNextTime) ) { //main extension OK
            extendGreen(ebMain, undefined);
            extendGreen(wbMain, undefined);
            overallNextTime = currentTime + extendDuration; // just stay in extendMainGreenEW
          } else { // end main extension
            enableTransition(ebMain, "turnYellow");
            enableTransition(wbMain, "turnYellow");
            nextOverallState("startNS", undefined); // wait for sync
          }
        }
      } else { // extension not warrented
        if (ebWalk.state === green || wbWalk.state === green) {
          enableTransition(ebWalk, "turnYellow");
          enableTransition(wbWalk, "turnYellow");
          extendGreen(wbMain, ewWalkDuration - yellowDuration);
          extendGreen(ebMain, ewWalkDuration - yellowDuration);
          nextOverallState("startNS", undefined); // wait for sync
        } else { // walks do not apply
          enableTransition(ebMain, "turnYellow");
          enableTransition(wbMain, "turnYellow");
          nextOverallState("startNS", undefined); // wait for sync
        }
      }
    break;
    }
  }
}



_సర్వత్ర_   date = new Date();
_సర్వత్ర_   currentTime = date.getTime();
_సర్వత్ర_   currentSecs = msToSec(currentTime);
_సర్వత్ర_   changed = false;
startNS(); // start up the overall machine 

_విధానము_     loop() {
  changed = false;
  date = new Date();
  currentTime = date.getTime();
  currentSecs = msToSec(currentTime);
  
  // check individual light state machines
  turnStateMachine(ebTurn, currentTime);
  walkStateMachine(ebWalk, currentTime);
  mainStateMachine(ebMain, currentTime);
  
  turnStateMachine(wbTurn, currentTime);
  walkStateMachine(wbWalk, currentTime);
  mainStateMachine(wbMain, currentTime);
  
  turnStateMachine(nbTurn, currentTime);
  walkStateMachine(nbWalk, currentTime);
  mainStateMachine(nbMain, currentTime);
  
  turnStateMachine(sbTurn, currentTime);
  walkStateMachine(sbWalk, currentTime);
  mainStateMachine(sbMain, currentTime);

  // check overall state machine and process changes caused by individual lights
  overallStateMachine();

  // simulate traffic
  simulateTraffic();

  // update drawing
  if (changed) {
    చెరిపి_వేయి();
    drawStreets();
    drawSignals();
    drawQueues();
  }
  //writeQueues (); // for debugging

  // make sure all is safe
  safetyCheck();
}
 
_విధానము_     ప్రదర్శన() {
  ఆడించు(loop, 100);
}
