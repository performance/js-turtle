// Random Stick Men -- draw stick men randomly on the canvas

// stick man
_విధానము_     stickMan (height) {
  _సర్వత్ర_   headDiameter = height/4;
  _సర్వత్ర_   torsoLength = height/3;
  _సర్వత్ర_   neckLength = torsoLength/3
  _సర్వత్ర_   armLength = height/3;
  _సర్వత్ర_   legLength = height/2;

  //assume center of man is center of torso and up is in the pointed direction
  కుంచికను_పైకి_ఎత్తు();
  ముందుకు_జరుగు(torsoLength/2 + neckLength + headDiameter/2); 
  కుంచికను_కింద_పెట్టు();
  వృత్తము(headDiameter/2); //draw head
  కుంచికను_పైకి_ఎత్తు();
  కుడి_వైపు_తిరుగు(180); //down
  ముందుకు_జరుగు(headDiameter/2);
  కుంచికను_కింద_పెట్టు()
  ముందుకు_జరుగు(neckLength); //neck
  కుడి_వైపు_తిరుగు(120);
  ముందుకు_జరుగు(armLength); //left arm
  కుంచికను_పైకి_ఎత్తు();
  వెనుకకు_జరుగు(armLength);
  కుడి_వైపు_తిరుగు(120);
  కుంచికను_కింద_పెట్టు();
  ముందుకు_జరుగు(armLength); //right arm
  కుంచికను_పైకి_ఎత్తు();
  వెనుకకు_జరుగు(armLength);
  కుడి_వైపు_తిరుగు(120);
  కుంచికను_కింద_పెట్టు();
  ముందుకు_జరుగు(torsoLength); // torso
  కుడి_వైపు_తిరుగు(30);
  ముందుకు_జరుగు(legLength); //left leg
  కుంచికను_పైకి_ఎత్తు();
  వెనుకకు_జరుగు(legLength);
  ఎడమ_వైపు_తిరుగు(60);
  కుంచికను_కింద_పెట్టు();
  ముందుకు_జరుగు(legLength); //right leg
  కుంచికను_పైకి_ఎత్తు();
  వెనుకకు_జరుగు(legLength);
  కుడి_వైపు_తిరుగు(30+180);
  ముందుకు_జరుగు(torsoLength/2);
}

_విధానము_     ప్రదర్శన() {
  ఆది_స్థితి();
  కుంచికను_దాచు();
  number = 0.0005 *  గరిష్ఠX() * గరిష్ఠY() // uniform density no matter size
  for (i=0; i<number; i++) {
    స్థానము_మార్చు(యాదృచ్ఛిక_సంఖ్య( కనిష్ఠX()+20, గరిష్ఠX()-20),యాదృచ్ఛిక_సంఖ్య( కనిష్ఠY()+20, గరిష్ఠY()-20));
    రంగు_మార్చు(యాదృచ్ఛిక_సంఖ్య(16));
    stickMan(random (30,60));
  }
}
