// Circle Eye -- draws a set of n inscribed circles within circle

function circleEye (x, y, n, outerRadius) {
  goto (x, y);
  circle (outerRadius); //outer circle

  for (i=0; i<n; i++) {
    goto (x, y);
    కోణము (i/n * 360);
    కలమును_పైకి_ఎత్తు();
    ముందుకు_జరుగు(outerRadius/2);
    కలమును_కింద_పెట్టు();
    circle(outerRadius/2); // one inscribed circle
  }
}



function demo () {
  reset();
  size = Math.min( maxX(), maxY()) * .9
  తాబేలును_దాచు();
  రంగు( random(16));
  circleEye( 0, 0, 16, size);
}
