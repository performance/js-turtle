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
    వృత్తము(outerRadius/2); // one inscribed circle
  }
}



function demo () {
  ఆది_స్థితి();
  size = Math.min( గరిష్ఠX(), గరిష్ఠY()) * .9
  కుంచికను_దాచు();
  రంగు_మార్చు( random(16));
  circleEye( 0, 0, 16, size);
}
