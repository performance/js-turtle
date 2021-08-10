// Compass Rose -- draw a compass rose with the same triangles

// The triangle functions could provide shading and color

_విధానము_     triangle (side){
  ముందుకు_జరుగు(side)
  a = 45
  b = (180-a)/2
  కుడి_వైపు_తిరుగు(180 - b)
  //ముందుకు_జరుగు(.748* side)
  ముందుకు_జరుగు(side * 2 * Math.sin(a/2/360*6.28))
  కుడి_వైపు_తిరుగు(180 - b)
  ముందుకు_జరుగు(side)
  కుడి_వైపు_తిరుగు(180-a)
}

_విధానము_     triangleL (side){
  ముందుకు_జరుగు(side)
  a = 45
  b = (180-a)/2
  ఎడమ_వైపు_తిరుగు(180 - b)
  ముందుకు_జరుగు(side * 2 * Math.sin(a/2/360*6.28))
  ఎడమ_వైపు_తిరుగు(180 - b)
  ముందుకు_జరుగు(side)
  ఎడమ_వైపు_తిరుగు(180-a)
}

_విధానము_     halfTri(side) {
  triangle (side)
  ముందుకు_జరుగు(side)
  triangle (side)
  కుడి_వైపు_తిరుగు(45+(180-45)/2)
  ముందుకు_జరుగు(side * 2 * Math.sin( 45/2/360*6.28))
  ఎడమ_వైపు_తిరుగు(180-(180-45)/2)
  triangle(side)
  ఎడమ_వైపు_తిరుగు(180-45)
  ముందుకు_జరుగు( side)
  కుడి_వైపు_తిరుగు(180-45)
}

_విధానము_     flipIt (side) {
  //not quite symmetrical...
  కుంచికను_పైకి_ఎత్తు()
  ముందుకు_జరుగు( side*3)
  కుడి_వైపు_తిరుగు( 45)
  ముందుకు_జరుగు(side*3)
  కుడి_వైపు_తిరుగు(180-45)
  కుంచికను_కింద_పెట్టు()
  thirdTri(side)
  కుంచికను_పైకి_ఎత్తు()
  కుడి_వైపు_తిరుగు(45)
  ముందుకు_జరుగు(side*3)
  ఎడమ_వైపు_తిరుగు(45)
  ముందుకు_జరుగు(side*3)
  ఎడమ_వైపు_తిరుగు(180)
  కుంచికను_కింద_పెట్టు()
}


_విధానము_     flipHalf (side) {
  //not quite symmetrical...
  కుంచికను_పైకి_ఎత్తు()
  ముందుకు_జరుగు( side*3)
  కుడి_వైపు_తిరుగు( 45)
  ముందుకు_జరుగు(side*3)
  కుడి_వైపు_తిరుగు(180-45)
  కుంచికను_కింద_పెట్టు()
  halfTri(side)
  కుంచికను_పైకి_ఎత్తు()
  కుడి_వైపు_తిరుగు(45)
  ముందుకు_జరుగు(side*3)
  ఎడమ_వైపు_తిరుగు(45)
  ముందుకు_జరుగు(side*3)
  ఎడమ_వైపు_తిరుగు(180)
  కుంచికను_కింద_పెట్టు()
}


_విధానము_     flipPoint (side) {
  //not quite symmetrical...
  కుంచికను_పైకి_ఎత్తు()
  ముందుకు_జరుగు( side*3)
  కుడి_వైపు_తిరుగు( 45)
  ముందుకు_జరుగు(side*3)
  కుడి_వైపు_తిరుగు(180-45)
  కుంచికను_కింద_పెట్టు()
  //triangle(side/2)
  halfTri(side/2)
  కుంచికను_పైకి_ఎత్తు()
  కుడి_వైపు_తిరుగు(45)
  ముందుకు_జరుగు(side*3)
  ఎడమ_వైపు_తిరుగు(45)
  ముందుకు_జరుగు(side*3)
  ఎడమ_వైపు_తిరుగు(180)
  కుంచికను_కింద_పెట్టు()
}

_విధానము_     thirdTri(side) {
  triangle (side)//1
  కుంచికను_పైకి_ఎత్తు()
  ముందుకు_జరుగు(side)
  కుంచికను_కింద_పెట్టు()
  triangle (side)//2
  కుంచికను_పైకి_ఎత్తు()
  ముందుకు_జరుగు(side)
  కుంచికను_కింద_పెట్టు()
  triangle (side)//3
  కుంచికను_పైకి_ఎత్తు()
  కుడి_వైపు_తిరుగు(45+(180-45)/2)
  ముందుకు_జరుగు(side * 2 * Math.sin( 45/2/360*6.28))
  ఎడమ_వైపు_తిరుగు(180-(180-45)/2)
  కుంచికను_కింద_పెట్టు()
  triangle(side)//4
  కుంచికను_పైకి_ఎత్తు()
  వెనుకకు_జరుగు(side)
  కుంచికను_కింద_పెట్టు()
  triangle(side)//5
  కుంచికను_పైకి_ఎత్తు()
  కుడి_వైపు_తిరుగు(45)
  ముందుకు_జరుగు( side)
  ఎడమ_వైపు_తిరుగు(45)
  కుంచికను_కింద_పెట్టు()
  triangle(side)//6
  కుంచికను_పైకి_ఎత్తు()
  ఎడమ_వైపు_తిరుగు(180-45)
  ముందుకు_జరుగు( side * 2)
  కుడి_వైపు_తిరుగు(180-45)
  కుంచికను_కింద_పెట్టు()
}


_విధానము_     boxTheCompass(size) {
  కుంచికను_పైకి_ఎత్తు()
  కోణము( 0)
  boxedCompass=["N", "NxE", "NNE", "NExN", "NE", "NExE", "ENE", "ExN", "E", "ExS", "ESE", "SExE", "SE", "SExS", "SSE", "SxE", "S", "SxW", "SSW", "SWxS", "SW", "SWxW", "WSW", "WxS", "W", "WxN", "WNW", "NWxW", "NW", "NWxN", "NNW", "NxW"]
  textRadius = size/14  * 5.6
  for (i=0; i<32; i++) {
  
    ముందుకు_జరుగు(textRadius)
    కుడి_వైపు_తిరుగు(90)
    //textLen = boxedCompass[i].length*10/2
   // వెనుకకు_జరుగు(textLen)
    fontSize = i % 4
    if (fontSize == 1 || fontSize == 3) {
      pointSize = size/48
      textLen = boxedCompass[i].length*pointSize/2
      వెనుకకు_జరుగు(textLen)
      అక్షరరూపము_స్థాపించు("normal " + pointSize + "pt Helvetica")
    } else if (fontSize == 2) {
      pointSize = size/48
      textLen = boxedCompass[i].length*pointSize/2
      వెనుకకు_జరుగు(textLen)
      అక్షరరూపము_స్థాపించు("bold " + pointSize + "pt Helvetica")
    } else {
      pointSize = size/40
      textLen = boxedCompass[i].length*pointSize/2
      వెనుకకు_జరుగు(textLen)
      అక్షరరూపము_స్థాపించు("bold " + pointSize + "pt Helvetica")
    }
    వ్రాయి(boxedCompass[i])
    ముందుకు_జరుగు(textLen)
    ఎడమ_వైపు_తిరుగు(90)
    వెనుకకు_జరుగు(textRadius)
    కుడి_వైపు_తిరుగు(360/32)
  }
}


_విధానము_     ప్రదర్శన() {
  ఆది_స్థితి()
   చుట్టొద్దు()
  కుంచికను_దాచు() // do not want it to show, so do this early
  కుంచిక_కదిలిన_ప్రతి_సారీ_చిత్రీకరించు(false) // do not redraw image each move
  size = 2* Math.min(గరిష్ఠX(), గరిష్ఠY())
  side = size/14
  ఎడమ_వైపు_తిరుగు(22.5)
  for (i=0; i<8; i++) {
    thirdTri (side)
    flipIt (side)
    కుడి_వైపు_తిరుగు(45)
  }
  for (i=0; i<8; i++) {
    halfTri (side/2)
    కుడి_వైపు_తిరుగు(45)
  }
  కుడి_వైపు_తిరుగు(22.5)
  for (i=0; i<84; i++) {
    flipHalf (side)
    కుడి_వైపు_తిరుగు(45)
  }
  కుడి_వైపు_తిరుగు(11.25)
  side = size/14
  for (i=0; i<16; i++) {
    flipPoint (side)
    కుడి_వైపు_తిరుగు(22.5)
  }

  boxTheCompass(size)
  //కుంచిక_కదిలిన_ప్రతి_సారీ_చిత్రీకరించు(true)
  చిత్రీకరించు() // just to render the final product
}

ప్రదర్శన()
