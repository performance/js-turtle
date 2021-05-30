// Random Stick Men -- draw stick men randomly on the canvas

// stick man
function stickMan (height) {
  var headDiameter = height/4;
  var torsoLength = height/3;
  var neckLength = torsoLength/3
  var armLength = height/3;
  var legLength = height/2;

  //assume center of man is center of torso and up is in the pointed direction
  కలమును_పైకి_ఎత్తు();
  ముందుకు_జరుగు(torsoLength/2 + neckLength + headDiameter/2); 
  కలమును_కింద_పెట్టు();
  circle (headDiameter/2); //draw head
  కలమును_పైకి_ఎత్తు();
  కుడి_వైపు_తిరుగు(180); //down
  ముందుకు_జరుగు(headDiameter/2);
  కలమును_కింద_పెట్టు()
  ముందుకు_జరుగు(neckLength); //neck
  కుడి_వైపు_తిరుగు(120);
  ముందుకు_జరుగు(armLength); //left arm
  కలమును_పైకి_ఎత్తు();
  వెనుకకు_జరుగు(armLength);
  కుడి_వైపు_తిరుగు(120);
  కలమును_కింద_పెట్టు();
  ముందుకు_జరుగు(armLength); //right arm
  కలమును_పైకి_ఎత్తు();
  వెనుకకు_జరుగు(armLength);
  కుడి_వైపు_తిరుగు(120);
  కలమును_కింద_పెట్టు();
  ముందుకు_జరుగు(torsoLength); // torso
  కుడి_వైపు_తిరుగు(30);
  ముందుకు_జరుగు(legLength); //left leg
  కలమును_పైకి_ఎత్తు();
  వెనుకకు_జరుగు(legLength);
  ఎడమ_వైపు_తిరుగు(60);
  కలమును_కింద_పెట్టు();
  ముందుకు_జరుగు(legLength); //right leg
  కలమును_పైకి_ఎత్తు();
  వెనుకకు_జరుగు(legLength);
  కుడి_వైపు_తిరుగు(30+180);
  ముందుకు_జరుగు(torsoLength/2);
}

function demo () {
  ఆది_స్థితి();
  కుంచికను_దాచు();
  number = 0.0005 *  గరిష్ఠX() * గరిష్ఠY() // uniform density no matter size
  for (i=0; i<number; i++) {
    goto (random( కనిష్ఠX()+20, గరిష్ఠX()-20),random( కనిష్ఠY()+20, గరిష్ఠY()-20));
    రంగు_మార్చు(random(16));
    stickMan(random (30,60));
  }
}
