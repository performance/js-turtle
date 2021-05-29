// Spinning Squares -- draw some square of increasing size and కోణము.

function square (side) {
  var i=0
  while (i<4) {
    ముందుకు_జరుగు( side)
    turn(90)
    i=i+1
  }
}

function spinningSquare2() {
   ఆది_స్థితి();
   తాబేలును_దాచు();
   రంగు( నీలము );
   var side = 100;
   while (side > 0) {
      square(side);
      కుడి_వైపు_తిరుగు(36);
      side = side - 10;
   }
}

function spinningSquare() {
  ఆది_స్థితి()
  var steps = 100
  stepSize = 2 * maxX()
  if (1.5 * maxY() < stepSize) {
    stepSize = 1.5 * maxY()
  }
  stepSize = .5 * stepSize/steps
  //var stepSize = 200/steps
  రంగు( నీలము );
  for (var i=0; i<steps; i=i+1) {
    square(stepSize*i);
    కుడి_వైపు_తిరుగు(360/steps)
  }
}

demo = spinningSquare2 // set the demo function to be spinningSquare2
