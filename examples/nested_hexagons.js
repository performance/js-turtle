// Nested Hexagons -- draw a set of nested hexagons

// draw a polygon of n sides of length m
function polygon(sides,side) {
  ఆవర్తించు(sides, function () {
    ముందుకు_జరుగు(side);
    కుడి_వైపు_తిరుగు(360/sides);
  });
}

// draw a set of nested hexagons
function ప్రదర్శన() {
   size = గరిష్ఠY()
   if (గరిష్ఠX() < size) {
     size = గరిష్ఠX()
   }
   steps = size/10 // 10 is the step size
   ఆది_స్థితి();
   కుంచికను_దాచు();
   for(step=1; step < steps; step=step+1) {
      రంగు_మార్చు(యాదృచ్ఛిక_సంఖ్య(16));
      polygon(6,step*10);
      కలమును_పైకి_ఎత్తు();
      ఎడమ_వైపు_తిరుగు(120)
      ముందుకు_జరుగు(10);
      కుడి_వైపు_తిరుగు(120);
      కలమును_కింద_పెట్టు();
   }
}
