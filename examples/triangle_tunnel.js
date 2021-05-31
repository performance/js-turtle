// Triangle Tunnel -- animate a set of mesmerizing nested triangle for a tunnel effect
// this uses an array to hold the colors of the current triangles

// GLOBALS
var sides = 80;


function triangle (side) {
  if (side < maxSide) {
    కేంద్రకమునకు_వెళ్ళు()
    కలమును_పైకి_ఎత్తు();
    ముందుకు_జరుగు(side/2);
    కుడి_వైపు_తిరుగు(150);
    కలమును_కింద_పెట్టు();
    for (var i=0; i<3; i++) {
      ముందుకు_జరుగు(side);
      కుడి_వైపు_తిరుగు(120);
    }
  }
}


function nestTri () {
  console.log("one more" + tColor + " sides:"+ sides)
  tColor.push(random (15));
  tColor.shift();
  for (var i=0; i<sides; i++) {
    రంగు_మార్చు(tColor[i]);
    triangle (i*15);
  }
}


function ప్రదర్శన() {
  ఆది_స్థితి()
  కుంచికను_దాచు()

  maxSide = 1.8* Math.min( గరిష్ఠX(), గరిష్ఠY())
  tColor = []
  for (var i=0; i<sides; i++) {
    tColor [i] = random (15)
  }
  ఆడించు(nestTri,1);
}

