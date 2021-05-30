// Koch Lines -- draw an animated set of Koch lines

function kochLine (length, order) {
  //assume drawn on the current కోణము
  if (order == 0) {
    ముందుకు_జరుగు(length);
  } else {
    //break line and bump out to the left
    kochLine (length/3, order-1);
    ఎడమ_వైపు_తిరుగు(60); 
    kochLine (length/3, order-1);
    కుడి_వైపు_తిరుగు(120); 
    kochLine (length/3, order-1);
    ఎడమ_వైపు_తిరుగు(60); 
    kochLine (length/3, order-1);
  }
}


function kochLineDelay() {
;
  చెరిపి_వేయి();
  var side = గరిష్ఠY() - కనిష్ఠY();
  if (side > గరిష్ఠX() - కనిష్ఠX()) {
    side = గరిష్ఠX() - కనిష్ఠX()
  }
  కోణము(90)
  side = .9 * side
  goto (-side/2, -1/4 * side)
  kochLine (side, i);
  goto(కనిష్ఠX(),కనిష్ఠY());
  కోణము(90);
  అక్షరరూపము_స్థాపించు("bold 12pt Ariel,san-serif")
  write ("Koch line of order " +i);
  draw();
  i = i + 1;
  if (i < steps) {
    delay (kochLineDelay, 2000);
  }
}

function demo() {
  ఆది_స్థితి();
  కుంచికను_దాచు();
  steps = 6;
  span = 240;
  i = 0;

  kochLineDelay();
}
