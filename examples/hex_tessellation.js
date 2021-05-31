// Hexagon Tessellation -- tile a surface with hexagons

function hexagon (side) {
  కలమును_పైకి_ఎత్తు();
  ముందుకు_జరుగు(side);
  కుడి_వైపు_తిరుగు(120);
  కలమును_కింద_పెట్టు();
  ఆవర్తించు(6, function () {
    ముందుకు_జరుగు(side);
    కుడి_వైపు_తిరుగు(60);
  })
}

function repeatToRight (side) {
  while (కుంచిక.స్థానము.x < గరిష్ఠX()) {
    hexagon(side);
    కలమును_పైకి_ఎత్తు();
    ముందుకు_జరుగు(side * 2);
    ఎడమ_వైపు_తిరుగు(120);
    కలమును_కింద_పెట్టు();
  }
}

function repeatToLeft(side) {
  while (కుంచిక.స్థానము.x > కనిష్ఠX())
   {
    hexagon(side);
    కలమును_పైకి_ఎత్తు();
    ముందుకు_జరుగు(side * 2);
    ఎడమ_వైపు_తిరుగు(120);
    కలమును_కింద_పెట్టు();
  }
}

function ప్రదర్శన() {
  
  side = 50;
  
  
  ఆది_స్థితి();
   చుట్టొద్దు();
  వెడల్పు(1);
  స్థానము_మార్చు(కనిష్ఠX()-1, గరిష్ఠY()-1);
  
  while (కుంచిక.స్థానము.y > కనిష్ఠY()) {
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
    చిత్రీకరించు();
  }
}
