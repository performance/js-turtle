// Nested Hexagons -- draw a set of nested hexagons

// draw a polygon of n sides of length m
function polygon(sides,side) {
  repeat(sides, function () {
    ముందుకు_జరుగు(side);
    కుడి_వైపు_తిరుగు(360/sides);
  });
}

// draw a set of nested hexagons
function demo() {
   size = maxY()
   if (maxX() < size) {
     size = maxX()
   }
   steps = size/10 // 10 is the step size
   reset();
   తాబేలును_దాచు();
   for(step=1; step < steps; step=step+1) {
      color (random(16));
      polygon(6,step*10);
      కలమును_పైకి_ఎత్తు();
      ఎడమ_వైపు_తిరుగు(120)
      ముందుకు_జరుగు(10);
      కుడి_వైపు_తిరుగు(120);
      కలమును_కింద_పెట్టు();
   }
}
