// Circle Eye -- draws a set of n inscribed circles within circle

function circleEye (x, y, n, outerRadius) {
  స్థానము_మార్చు(x, y);
  వృత్తము(outerRadius); //outer circle

  for (i=0; i<n; i++) {
    స్థానము_మార్చు(x, y);
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
  రంగు_మార్చు( యాదృచఛిక_సంఖ్య(16));
  circleEye( 0, 0, 16, size);
}
