// Polygon -- draw a polygon of n sides of length m

// draw a polygon with n sides of length m
function polygon(sides,side) {
  repeat(sides, function () {
    ముందుకు_జరుగు(side);
    కుడి_వైపు_తిరుగు(360/sides);
  });
}

// draw a random polygon
function demo() {
   ఆది_స్థితి();
   side = maxY()
   if (maxX() < side) {
     side = maxX()
   }
   side = .4 *side
   goto(-.4 * side, -.5 * side)
   తాబేలును_దాచు();
   polygon( random( 3,10), side);
}
