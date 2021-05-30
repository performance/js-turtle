// Graphitti -- draw randomly placed coloured stripes

//** Globals **

var గరిష్ఠ_X =  imageContext.canvas.width/2;
var గరిష్ఠ_Y =  imageContext.canvas.height/2;
var కనిష్ఠ_X =  -గరిష్ఠ_X;
var కనిష్ఠ_Y =  -గరిష్ఠ_Y;
var maxVelocity = 12;


function plotOne() {
  goto(random(కనిష్ఠ_X, గరిష్ఠ_X), random(కనిష్ఠ_Y, గరిష్ఠ_Y));
  రంగు_మార్చు(random(16));
  కోణము(random(0, 180));
  వెడల్పు(random(1, 20));
  ముందుకు_జరుగు(random(10, 30));
}

function demo () {
  ఆది_స్థితి()
  animate (plotOne, 20);
}
