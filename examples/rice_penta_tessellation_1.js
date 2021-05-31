// Rice Penta Tessellation 1 -- pentagon tessellation discovered by Margorie Rice

c1 = "yellow"
c2 = "నారింజ"
c3 = "red"
c4 = "blue"
c5 = "blue"
c6 = "red"
c7 = "yellow"
c8 = "నారింజ"

function pr(fill) {
  ఆకారాము_ప్రారంభించు()
  ముందుకు_జరుగు(sidea)
  ఎడమ_వైపు_తిరుగు(180-angleB)
  ముందుకు_జరుగు(sideb)
  ఎడమ_వైపు_తిరుగు(180-angleC)
  ముందుకు_జరుగు(sidec)
  ఎడమ_వైపు_తిరుగు(180-angleD)
  ముందుకు_జరుగు(sided)
  ఎడమ_వైపు_తిరుగు(180-angleE)
  ముందుకు_జరుగు(sidee)
  ఎడమ_వైపు_తిరుగు(180-angleA)
  ఆకారాము_ముగించు(fill)
}

function pl(fill) {
  ఆకారాము_ప్రారంభించు()
  ముందుకు_జరుగు(sidea)
  కుడి_వైపు_తిరుగు(180-angleB)
  ముందుకు_జరుగు(sideb)
  కుడి_వైపు_తిరుగు(180-angleC)
  ముందుకు_జరుగు(sidec)
  కుడి_వైపు_తిరుగు(180-angleD)
  ముందుకు_జరుగు(sided)
  కుడి_వైపు_తిరుగు(180-angleE)
  ముందుకు_జరుగు(sidee)
  కుడి_వైపు_తిరుగు(180-angleA)
  ఆకారాము_ముగించు(fill)
}


function కలమును_పైకి_ఎత్తు() { // penta unit
  pr(c1)
  pl(c2)

  ముందుకు_జరుగు( 2*sidea)
  ఎడమ_వైపు_తిరుగు(180)
  pr(c3)
  pl(c4)


  ఎడమ_వైపు_తిరుగు( angleA)
  ముందుకు_జరుగు( sidee)
  ఎడమ_వైపు_తిరుగు( 180 - angleC)
  ముందుకు_జరుగు( sideb)
  ఎడమ_వైపు_తిరుగు( 180- angleB)
  ముందుకు_జరుగు( sidea)
  కుడి_వైపు_తిరుగు(180)

  pl(c5)
  pr(c6)

  ముందుకు_జరుగు( 2 * sidea)
  కుడి_వైపు_తిరుగు(180)
  pr(c7)
  pl(c8)
}

function demo() {
  ఆది_స్థితి()
   wrap( false)
  size = 10

  sidea = size
  sideb = 5.9 * size // fudging to make work
  sidec = 2.8 * size // fudging to make work
  sided = sidec
  sidee = 2 * sidec
  angleA = 120
  angleB = 90
  angleC = 120
  angleD = 90
  angleE = 120
  స్థానము_మార్చు(కనిష్ఠX(), గరిష్ఠY())
  స్థానము_మార్చు(కనిష్ఠX(),గరిష్ఠY())
  bigX = కనిష్ఠX() + 2*size
  bigY = గరిష్ఠY()
  దిశ_మార్చు(44)
  while (కుంచిక.స్థానము.x < గరిష్ఠX()) {
    స్థానము_మార్చు(bigX, bigY)
    while (కుంచిక.స్థానము.y > కనిష్ఠY()-8*size) {
      కలమును_పైకి_ఎత్తు()
      ఎడమ_వైపు_తిరుగు( angleA)
      ముందుకు_జరుగు( sidee)
      కుడి_వైపు_తిరుగు( 180 - angleE)
      ముందుకు_జరుగు( 2* sidec)
      ఎడమ_వైపు_తిరుగు( 180 - angleE)
      ముందుకు_జరుగు( sidec)
      కుడి_వైపు_తిరుగు( 180 - angleD)
      ముందుకు_జరుగు( sided)
      ఎడమ_వైపు_తిరుగు( 180- angleA)
      ముందుకు_జరుగు( 2* sidea)
      కుడి_వైపు_తిరుగు( 180)
    }
    bigX = bigX + 20.72 * size
    bigY = bigY + .4 * size
  }
}
