// Jumping Jack -- stick man doing jumping jacks

/*
This example shows a couple of concepts.
One is the use of variables. The stick man is created based on proprotions of its
height. Changing the height variable changes the size of the other body parts.

Drawing of the body parts is done so that the కుంచిక is returned to its starting point.
This allows the body parts to be drawn in any order or for the center of the stick man
to be moved. Each body part is draw with a _విధానము_     (also called a sub-routine) to
make the problem easier to understand.

The drawLeftLeg(), drawRightLeg(), drawLeftArm(), and drawRightArm() functions use a
parameter that is used to determine the కోణము of
the particular appendage being drawn. This way the same _విధానము_     can be used without
regard to the arm or leg position.

The drawBody() _విధానము_     ties everything together and draws all of the body parts.
It has two parameters, one for the arm కోణము and one for the leg కోణము. This assumes
that the arms move together and the legs move together, but that is not a requirement.
You can change this.

To make this a bit more fun, this can be animated, so the figure\'s arms and legs move
as if it were doing jumping jacks. To do this we want to vary the కోణము of the
arms, from 45 degrees to almost 180 degrees, say 175. The legs should vary from a 
135 degree కోణము to almost 180, lets say 175.  The two extreme positions of the
body can be drawn as:
  drawBody(45, 45);
and
  drawBody(175, 5);

(hint: You can try each one separately in the command box.)

For smooth motion, there should be 4 steps. (This is really a guess, there could be
more or there could be less, but for now lets assume that 4 is a good number.)
A step would be the base movement plus one quarter of the total movement. The moveBody()
_విధానము_     uses the variable
n to step throught the various movements with n=0, n=1, n=2, n=3, and n=4
successively.

For the arms: 45 + n * (175-45)/4

For the legs: 45 - n * (45-5)/4

The direction of the movement changes at either end, that is when
n = 0 or n = 4; So when n is zero, n should be increased by one to get to 1. When n is
4, n should be decreased by one (add a negative one) to get to 3. Using a direction
variable allows the moveBody() _విధానము_     to remember what direction it is moving.

Successive calls to moveBody() are controlled by the విలంబించు() function. This _విధానము_     is set
to repeat in 100 ms. You could change the time to make it faster or slower.

*/



// GLOBALS
_సర్వత్ర_   height;
_సర్వత్ర_   headDiameter;
_సర్వత్ర_   torsoLength;
_సర్వత్ర_   neckLength;
_సర్వత్ర_   armLength;
_సర్వత్ర_   legLength;

/*
  The body parts are drawn with the following asumptions
  - the center of figure is the center of torso
  - the కుంచిక is returned to the center of the figure
  - the కుంచిక is pointed up 
  - the pen of the కుంచిక is up
*/


_విధానము_     drawHead() {
  ముందుకు_జరుగు(torsoLength/2 + neckLength + headDiameter/2); 
  కుంచికను_కింద_పెట్టు();
  వృత్తము(headDiameter/2); //draw head
  కుంచికను_పైకి_ఎత్తు();
  కుడి_వైపు_తిరుగు(180);
  ముందుకు_జరుగు(torsoLength/2 + neckLength + headDiameter/2); 
  కుడి_వైపు_తిరుగు(180);
}

_విధానము_     drawNeck() {
  ముందుకు_జరుగు(torsoLength/2 ); 
  కుంచికను_కింద_పెట్టు();
  ముందుకు_జరుగు(neckLength); //neck
  కుంచికను_పైకి_ఎత్తు();
  వెనుకకు_జరుగు(torsoLength/2 + neckLength); 
}

_విధానము_     drawTorso() {
  వెనుకకు_జరుగు(torsoLength/2); 
  కుంచికను_కింద_పెట్టు();
  ముందుకు_జరుగు(torsoLength); 
  కుంచికను_పైకి_ఎత్తు();
  వెనుకకు_జరుగు(torsoLength/2); 
}

_విధానము_     drawLeftLeg(కోణము){
  కుడి_వైపు_తిరుగు(180);
  ముందుకు_జరుగు(torsoLength/2);
  ఎడమ_వైపు_తిరుగు(కోణము);
  కుంచికను_కింద_పెట్టు();
  ముందుకు_జరుగు(legLength); //left leg
  కుంచికను_పైకి_ఎత్తు();
  వెనుకకు_జరుగు(legLength);
  కుడి_వైపు_తిరుగు(కోణము);
  కుడి_వైపు_తిరుగు(180);
  ముందుకు_జరుగు(torsoLength/2); 
} 

_విధానము_     drawRightLeg(కోణము) {
  కుడి_వైపు_తిరుగు(180);
  ముందుకు_జరుగు(torsoLength/2);
  కుడి_వైపు_తిరుగు(కోణము);
  కుంచికను_కింద_పెట్టు();
  ముందుకు_జరుగు(legLength); //right leg
  కుంచికను_పైకి_ఎత్తు();
  వెనుకకు_జరుగు(legLength);
  ఎడమ_వైపు_తిరుగు(కోణము);
  కుడి_వైపు_తిరుగు(180);
  ముందుకు_జరుగు(torsoLength/2); 
}

_విధానము_     drawLeftArm(కోణము){
  ముందుకు_జరుగు(torsoLength/2);
  కుడి_వైపు_తిరుగు(కోణము);
  కుంచికను_కింద_పెట్టు();
  ముందుకు_జరుగు(armLength); //left arm
  కుంచికను_పైకి_ఎత్తు();
  వెనుకకు_జరుగు(armLength);
  ఎడమ_వైపు_తిరుగు(కోణము);
  వెనుకకు_జరుగు(torsoLength/2); 
} 

_విధానము_     drawRightArm(కోణము) {
  ముందుకు_జరుగు(torsoLength/2);
  ఎడమ_వైపు_తిరుగు(కోణము);
  కుంచికను_కింద_పెట్టు();
  ముందుకు_జరుగు(armLength); //left arm
  కుంచికను_పైకి_ఎత్తు();
  వెనుకకు_జరుగు(armLength);
  కుడి_వైపు_తిరుగు(కోణము);
  వెనుకకు_జరుగు(torsoLength/2); 
}

_విధానము_     drawBody(armAngle, legAngle) {
  drawTorso();
  drawHead();
  drawNeck();
  drawLeftArm(armAngle);
  drawRightArm(armAngle);
  drawLeftLeg(legAngle);
  drawRightLeg(legAngle);
}

_సర్వత్ర_   n = 0;
_సర్వత్ర_   direction = +1;


_విధానము_     moveBody () {
  చెరిపి_వేయి();
  height = 40;
  height = 1.5 * Math.min( గరిష్ఠX(), గరిష్ఠY())
  headDiameter = .25 * height;
  torsoLength = .3 * height;
  neckLength = .5 * torsoLength;
  armLength = .4 * height;
  legLength = .5 * height;
  వెడల్పు( .05*height)

  drawBody(45 + n * (175-45)/4,
    45 - n * (45-5)/4);
  n = n + direction;
  if (n>=4 || n<=0) {
    direction = -direction;
  }
  విలంబించు(moveBody,100);
}


_విధానము_     ప్రదర్శన() {
  ఆది_స్థితి();
  కుంచికను_దాచు();
  n = 0;
  direction = +1;
  moveBody();
}
