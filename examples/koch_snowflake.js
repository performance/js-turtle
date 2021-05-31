// Koch Snowflakes -- draw an animated set of Koch snowflakes


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

function kochSnowflake (length, order) {
  కోణము (30);
  స్థానము_మార్చు(-length/2,-.3 * length);
  kochLine (length, order);
  కుడి_వైపు_తిరుగు(120);
  kochLine (length, order);
  కుడి_వైపు_తిరుగు(120);
  kochLine (length, order);
  కుడి_వైపు_తిరుగు(120);
}
  

ఆది_స్థితి();

var steps = 6;
var span = 240;
var i = 0;

function kochLines () {
  for (i=0; i<steps; i++) {
    స్థానము_మార్చు(span/2 - i*span/steps, - span/2);
    kochLine (span,i);
  }
}

function kochSnowflakeDelay() {

  చెరిపి_వేయి();
  var side = గరిష్ఠY() - కనిష్ఠY();
  if (side > గరిష్ఠX() - కనిష్ఠX()) {
    side = గరిష్ఠX() - కనిష్ఠX()
  }
  kochSnowflake (.8 * side,i);
  స్థానము_మార్చు(కనిష్ఠX(),కనిష్ఠY());
  కోణము(90);
  అక్షరరూపము_స్థాపించు("Helvetica,san-serif 12pt")
  వ్రాయి("Koch snowflake of order " +i);
  చిత్రీకరించు();
  i = i + 1;
  if (i < steps) {
    delay (kochSnowflakeDelay, 2000);
  }
}

function demo() {
  కుంచికను_దాచు();
  i = 0;
  kochSnowflakeDelay();
}
