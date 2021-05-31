// Dividing a Circle -- divide a వృత్తము with other circles

// *** GLOBALS ***
var i; // loop variable


// *** CONSTANTS ***
rad = 50; // వృత్తము వ్యాసార్థము
limit = 6; // times to loop
delayTime = 1000; // milliseconds


// *** FUNCTIONS ***

function divideCenter(radii, వ్యాసార్థము) {
  ఎడమ_వైపు_తిరుగు(60);
  ముందుకు_జరుగు(వ్యాసార్థము);
  కుడి_వైపు_తిరుగు(60);
  var side = 0
  while (side < 6) { // go to each side
    కుడి_వైపు_తిరుగు(60);
    var step = 0
    while (step < radii) { // step off side
      ముందుకు_జరుగు(వ్యాసార్థము);
      వృత్తము(వ్యాసార్థము);
      step = step + 1
    };
    side = side + 1;
  };
}


function tier () {
  divideCenter (i, rad)
  i = i + 1
  if (i < limit) {
    delay (tier, delayTime)
  }
}


function demo() {
  చెరిపి_వేయి();
  కుంచికను_దాచు();
  కేంద్రకమునకు_వెళ్ళు();
  కలమును_పైకి_ఎత్తు();
   చుట్టు(false);
  వృత్తము(rad);
  i = 1;
  delay (tier, delayTime);
}
