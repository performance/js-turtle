// Compass Rose -- draw a compass rose with the same triangles

// The triangle functions could provide shading and color

function triangle (side){
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

function triangleL (side){
  ముందుకు_జరుగు(side)
  a = 45
  b = (180-a)/2
  ఎడమ_వైపు_తిరుగు(180 - b)
  ముందుకు_జరుగు(side * 2 * Math.sin(a/2/360*6.28))
  ఎడమ_వైపు_తిరుగు(180 - b)
  ముందుకు_జరుగు(side)
  ఎడమ_వైపు_తిరుగు(180-a)
}

function halfTri(side) {
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

function flipIt (side) {
  //not quite symmetrical...
  కలమును_పైకి_ఎత్తు()
  ముందుకు_జరుగు( side*3)
  కుడి_వైపు_తిరుగు( 45)
  ముందుకు_జరుగు(side*3)
  కుడి_వైపు_తిరుగు(180-45)
  కలమును_కింద_పెట్టు()
  thirdTri(side)
  కలమును_పైకి_ఎత్తు()
  కుడి_వైపు_తిరుగు(45)
  ముందుకు_జరుగు(side*3)
  ఎడమ_వైపు_తిరుగు(45)
  ముందుకు_జరుగు(side*3)
  ఎడమ_వైపు_తిరుగు(180)
  కలమును_కింద_పెట్టు()
}


function flipHalf (side) {
  //not quite symmetrical...
  కలమును_పైకి_ఎత్తు()
  ముందుకు_జరుగు( side*3)
  కుడి_వైపు_తిరుగు( 45)
  ముందుకు_జరుగు(side*3)
  కుడి_వైపు_తిరుగు(180-45)
  కలమును_కింద_పెట్టు()
  halfTri(side)
  కలమును_పైకి_ఎత్తు()
  కుడి_వైపు_తిరుగు(45)
  ముందుకు_జరుగు(side*3)
  ఎడమ_వైపు_తిరుగు(45)
  ముందుకు_జరుగు(side*3)
  ఎడమ_వైపు_తిరుగు(180)
  కలమును_కింద_పెట్టు()
}


function flipPoint (side) {
  //not quite symmetrical...
  కలమును_పైకి_ఎత్తు()
  ముందుకు_జరుగు( side*3)
  కుడి_వైపు_తిరుగు( 45)
  ముందుకు_జరుగు(side*3)
  కుడి_వైపు_తిరుగు(180-45)
  కలమును_కింద_పెట్టు()
  //triangle(side/2)
  halfTri(side/2)
  కలమును_పైకి_ఎత్తు()
  కుడి_వైపు_తిరుగు(45)
  ముందుకు_జరుగు(side*3)
  ఎడమ_వైపు_తిరుగు(45)
  ముందుకు_జరుగు(side*3)
  ఎడమ_వైపు_తిరుగు(180)
  కలమును_కింద_పెట్టు()
}

function thirdTri(side) {
  triangle (side)//1
  కలమును_పైకి_ఎత్తు()
  ముందుకు_జరుగు(side)
  కలమును_కింద_పెట్టు()
  triangle (side)//2
  కలమును_పైకి_ఎత్తు()
  ముందుకు_జరుగు(side)
  కలమును_కింద_పెట్టు()
  triangle (side)//3
  కలమును_పైకి_ఎత్తు()
  కుడి_వైపు_తిరుగు(45+(180-45)/2)
  ముందుకు_జరుగు(side * 2 * Math.sin( 45/2/360*6.28))
  ఎడమ_వైపు_తిరుగు(180-(180-45)/2)
  కలమును_కింద_పెట్టు()
  triangle(side)//4
  కలమును_పైకి_ఎత్తు()
  వెనుకకు_జరుగు(side)
  కలమును_కింద_పెట్టు()
  triangle(side)//5
  కలమును_పైకి_ఎత్తు()
  కుడి_వైపు_తిరుగు(45)
  ముందుకు_జరుగు( side)
  ఎడమ_వైపు_తిరుగు(45)
  కలమును_కింద_పెట్టు()
  triangle(side)//6
  కలమును_పైకి_ఎత్తు()
  ఎడమ_వైపు_తిరుగు(180-45)
  ముందుకు_జరుగు( side * 2)
  కుడి_వైపు_తిరుగు(180-45)
  కలమును_కింద_పెట్టు()
}


function boxTheCompass(size) {
  కలమును_పైకి_ఎత్తు()
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
      setfont("normal " + pointSize + "pt Helvetica")
    } else if (fontSize == 2) {
      pointSize = size/48
      textLen = boxedCompass[i].length*pointSize/2
      వెనుకకు_జరుగు(textLen)
      setfont("bold " + pointSize + "pt Helvetica")
    } else {
      pointSize = size/40
      textLen = boxedCompass[i].length*pointSize/2
      వెనుకకు_జరుగు(textLen)
      setfont("bold " + pointSize + "pt Helvetica")
    }
    write(boxedCompass[i])
    ముందుకు_జరుగు(textLen)
    ఎడమ_వైపు_తిరుగు(90)
    వెనుకకు_జరుగు(textRadius)
    కుడి_వైపు_తిరుగు(360/32)
  }
}


function demo () {
  reset()
  wrap(false)
  తాబేలును_దాచు() // do not want it to show, so do this early
  redrawOnMove(false) // do not redraw image each move
  size = 2* Math.min(maxX(), maxY())
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
  //redrawOnMove(true)
  draw() // just to render the final product
}

demo()
