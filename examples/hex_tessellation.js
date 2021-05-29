// Hexagon Tessellation -- tile a surface with hexagons

function hexagon (side) {
  కలమును_పైకి_ఎత్తు();
  ముందుకు_జరుగు(side);
  కుడి_వైపు_తిరుగు(120);
  కలమును_కింద_పెట్టు();
  repeat (6, function () {
    ముందుకు_జరుగు(side);
    కుడి_వైపు_తిరుగు(60);
  })
}

function repeatToRight (side) {
  while (turtle.pos.x < maxX()) {
    hexagon(side);
    కలమును_పైకి_ఎత్తు();
    ముందుకు_జరుగు(side * 2);
    ఎడమ_వైపు_తిరుగు(120);
    కలమును_కింద_పెట్టు();
  }
}

function repeatToLeft(side) {
  while (turtle.pos.x > minX())
   {
    hexagon(side);
    కలమును_పైకి_ఎత్తు();
    ముందుకు_జరుగు(side * 2);
    ఎడమ_వైపు_తిరుగు(120);
    కలమును_కింద_పెట్టు();
  }
}

function demo() {
  
  side = 50;
  
  
  reset();
  wrap(false);
  వెడల్పు(1);
  goto(minX()-1, maxY()-1);
  
  while (turtle.pos.y > minY()) {
    repeatToRight(side); // draw a row of hexagons
  
    //advance to next row on right side
    కలమును_పైకి_ఎత్తు();
    ఎడమ_వైపు_తిరుగు(120);
    ముందుకు_జరుగు(side);
    ఎడమ_వైపు_తిరుగు(60);
    ముందుకు_జరుగు(side)
    కలమును_కింద_పెట్టు();
  
    repeatToLeft (side);  // draw a row of hexagons
  
    //advance on next row on left side
    కలమును_పైకి_ఎత్తు();
    ఎడమ_వైపు_తిరుగు(60);
    ముందుకు_జరుగు(side);
    కుడి_వైపు_తిరుగు(60);
    ముందుకు_జరుగు(side);
    కుడి_వైపు_తిరుగు(180);
    కలమును_కింద_పెట్టు();
    draw();
  }
}
