// Compass Rose 2 -- draws compass rose.

function compassRose (x, y, n, outerRadius, innerRadius) {
  goto (x, y);
  circle (outerRadius); //outer circle
  circle (innerRadius);

  angleA= Math.atan((innerRadius* Math.sin(Math.PI/4))/(outerRadius-innerRadius* Math.cos(Math.PI/4))) //radians
  side1= outerRadius/(1+Math.tan(angleA)/Math.tan(Math.PI/4))
  side2= side1/Math.cos(angleA)
  for (i=0; i<4; i++) {
    goto (x, y);
    కోణము (i/4 * 360);
    కలమును_పైకి_ఎత్తు()
    ముందుకు_జరుగు( innerRadius)
    కలమును_కింద_పెట్టు()
    ముందుకు_జరుగు(outerRadius-innerRadius);
    కుడి_వైపు_తిరుగు( 180-radToDeg( angleA));
    ముందుకు_జరుగు( side2);
    వెనుకకు_జరుగు( side2);
    కుడి_వైపు_తిరుగు( radToDeg( 2* angleA));
    ముందుకు_జరుగు( side2);
  }

  side3= outerRadius/(1+Math.tan(angleA)/Math.tan(Math.PI/8))
  r3= side3/Math.cos(angleA)
  console.log( "side3:"+side3 + " r3: " + r3)
  for (i=0; i<4; i++) {
    goto (x, y);
    కోణము (45 + i/4 * 360);
    కలమును_పైకి_ఎత్తు()
    ముందుకు_జరుగు( innerRadius)
    కలమును_కింద_పెట్టు()
    ముందుకు_జరుగు(outerRadius-innerRadius);
    కుడి_వైపు_తిరుగు( 180-radToDeg( angleA));
    ముందుకు_జరుగు( r3);
    వెనుకకు_జరుగు( r3);
    కుడి_వైపు_తిరుగు( radToDeg( 2* angleA));
    ముందుకు_జరుగు( r3);
  }

  r4=outerRadius/2

  side4= outerRadius/(1+Math.tan(angleA)/Math.tan(Math.PI/16))
  r4= side4/Math.cos(angleA)
  console.log( "side4:"+side4 + " r4: " + r4)
  for (i=0; i<8; i++) {
    goto (x, y);
    కోణము (22.5 + i/8 * 360);
    కలమును_పైకి_ఎత్తు()
    ముందుకు_జరుగు(outerRadius);
    కలమును_కింద_పెట్టు()
    కుడి_వైపు_తిరుగు( 180-radToDeg( angleA));
    ముందుకు_జరుగు( r4);
    వెనుకకు_జరుగు( r4);
    కుడి_వైపు_తిరుగు( radToDeg( 2* angleA));
    ముందుకు_జరుగు( r4);
  }

  r5 = .1 * outerRadius
  base = 2* r5* Math.sin(angleA)
  for (i=0; i<16; i++) {
    goto (x, y);
    కోణము (11.25 + i/16 * 360);
    కలమును_పైకి_ఎత్తు()
    ముందుకు_జరుగు(outerRadius);
    కలమును_కింద_పెట్టు()
    కుడి_వైపు_తిరుగు( 180-radToDeg( angleA));
    ముందుకు_జరుగు( r5);
    కుడి_వైపు_తిరుగు(90+radToDeg(angleA))
    ముందుకు_జరుగు(base)
    కుడి_వైపు_తిరుగు(90+radToDeg(angleA))
    ముందుకు_జరుగు( r5);
  }
}



function demo () {
  ఆది_స్థితి();
  size = Math.min( maxX(), maxY()) * .9
  తాబేలును_దాచు();
  //రంగు( random(16));
  compassRose( 0, 0, 16, size, .2*size);
}
