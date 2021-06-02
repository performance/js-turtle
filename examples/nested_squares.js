// Nested Squares -- draw a set of nested squares

//draw a square
function square(side) {
   ఆవర్తించు(4, function () {
      ముందుకు_జరుగు(side);
      కుడి_వైపు_తిరుగు(90);
   });
}


// draw some nested squares
function nestedSquares(count) {
  చెరిపి_వేయి();
  స్థానము_మార్చు(0,0);
  కుంచికను_దాచు();
  for (s=1; s<count*4; s=s+4) {
    కలమును_పైకి_ఎత్తు();
    // move down and back 2 spaces
    ఎడమ_వైపు_తిరుగు(90);
    ముందుకు_జరుగు(2);
    ఎడమ_వైపు_తిరుగు(90);
    ముందుకు_జరుగు(2);
    ఎడమ_వైపు_తిరుగు(180);
    కలమును_కింద_పెట్టు();
    రంగు_మార్చు(యాదృచ్ఛిక_సంఖ్య(16));
    square (s);
  }
}

function demo1() {
  ఆది_స్థితి()
  size = 2* గరిష్ఠY()
  if (2* గరిష్ఠX() < size) {
    size = 2*గరిష్ఠX()
  }
  number = .9 * size /4  // 4 is the difference in square size
  function nest25 () {
    nestedSquares (size);
  }
  // animate a simple parameterless function
  ఆడించు( nest25, 200);
}

function ప్రదర్శన() {
  // animate with function needing a parameter passed
  ఆది_స్థితి()
  size = 2* గరిష్ఠY()
  if (2* గరిష్ఠX() < size) {
    size = 2*గరిష్ఠX()
  }
  number = .9 * size /4  // 4 is the difference in square size
  ఆడించు( function () { nestedSquares(number)} ,200);
}
