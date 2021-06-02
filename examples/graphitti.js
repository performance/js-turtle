// Graphitti -- draw randomly placed coloured stripes

//** Globals **

var గరిష్ఠ_X =  imageContext.canvas.width/2;
var గరిష్ఠ_Y =  imageContext.canvas.height/2;
var కనిష్ఠ_X =  -గరిష్ఠ_X;
var కనిష్ఠ_Y =  -గరిష్ఠ_Y;
var maxVelocity = 12;


function plotOne() {
  స్థానము_మార్చు(యాదృచ్ఛిక_సంఖ్య(కనిష్ఠ_X, గరిష్ఠ_X), యాదృచ్ఛిక_సంఖ్య(కనిష్ఠ_Y, గరిష్ఠ_Y));
  రంగు_మార్చు(యాదృచ్ఛిక_సంఖ్య(16));
  కోణము(యాదృచ్ఛిక_సంఖ్య(0, 180));
  వెడల్పు(యాదృచ్ఛిక_సంఖ్య(1, 20));
  ముందుకు_జరుగు(యాదృచ్ఛిక_సంఖ్య(10, 30));
}

function ప్రదర్శన() {
  ఆది_స్థితి()
  ఆడించు(plotOne, 20);
}
