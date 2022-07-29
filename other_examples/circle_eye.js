// Circle Eye -- draws a set of n inscribed circles within circle

_విధానము_     circleEye (x, y, n, outerRadius) {
  స్థానము_మార్చు(x, y);
  వృత్తము(outerRadius); //outer circle

  for (i=0; i<n; i++) {
    స్థానము_మార్చు(x, y);
    కోణము (i/n * 360);
    కుంచికను_పైకి_ఎత్తు();
    ముందుకు_జరుగు(outerRadius/2);
    కుంచికను_కింద_పెట్టు();
    వృత్తము(outerRadius/2); // one inscribed circle
  }
}



_విధానము_     ప్రదర్శన() {
  ఆది_స్థితి();
  size = Math.min( గరిష్ఠX(), గరిష్ఠY()) * .9
  కుంచికను_దాచు();
  రంగు_మార్చు( యాదృచ్ఛిక_సంఖ్య(16));
  circleEye( 0, 0, 16, size);
}