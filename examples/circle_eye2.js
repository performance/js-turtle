// Circle Eye2 -- draws a set of n inscribed circles between two concentric circles.

function circleEye (x, y, n, outerRadius, innerRadius) {
  goto (x, y);
  //circle (outerRadius); //outer circle
  //circle (innerRadius)
  radius = outerRadius-innerRadius

  for (i=0; i<n; i++) {
    goto (x, y);
    కోణము (i/n * 360);
    కలమును_పైకి_ఎత్తు();
    ముందుకు_జరుగు(innerRadius + radius/2);
    కలమును_కింద_పెట్టు();
    circle(radius/2); // one inscribed circle
  }
}



function demo () {
  reset();
  size = Math.min( maxX(), maxY()) * .9
  తాబేలును_దాచు();
  రంగు( random(16));
  circleEye( 0, 0, 32, size, .2*size);
}
