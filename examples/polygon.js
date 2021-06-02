// Polygon -- draw a polygon of n sides of length m

// draw a polygon with n sides of length m
function polygon(sides,side) {
  ఆవర్తించు(sides, function () {
    ముందుకు_జరుగు(side);
    కుడి_వైపు_తిరుగు(360/sides);
  });
}

// draw a random polygon
function ప్రదర్శన() {
   ఆది_స్థితి();
   side = గరిష్ఠY()
   if (గరిష్ఠX() < side) {
     side = గరిష్ఠX()
   }
   side = .4 *side
   స్థానము_మార్చు(-.4 * side, -.5 * side)
   కుంచికను_దాచు();
   polygon( యాదృచ్ఛిక_సంఖ్య( 3,10), side);
}
