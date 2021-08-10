// Square Tessellation -- tile a space using squares

colors = ["red", "white", "blue","yellow", "green"]

_విధానము_     squ( side, fColor) {
  ఆకారము_ప్రారంభించు()
  for (_సర్వత్ర_   i=0; i<4; i++) {
    ముందుకు_జరుగు( side)
    కుడి_వైపు_తిరుగు( 90)
  }
  ఆకారము_ముగించు( fColor)
}

_విధానము_     squLeft( side, fColor) {
  ఆకారము_ప్రారంభించు()
  for (_సర్వత్ర_   i=0; i<4; i++) {
    ముందుకు_జరుగు( side)
    ఎడమ_వైపు_తిరుగు( 90)
  }
  ఆకారము_ముగించు( fColor)
}

// nextColor could be a random _విధానము_     or use less colors
_విధానము_     nextColor() {
  c = colors[ count % colors.length]
  count = count + 1
  _ఫలము_  c
}

_విధానము_     ప్రదర్శన() {
  ఆది_స్థితి()
  count = 0
  rowOffset = s/3
   చుట్టొద్దు()
  స్థానము_మార్చు(కనిష్ఠX(), గరిష్ఠY())
  కుడి_వైపు_తిరుగు( 90)

  s = 50
  while (కుంచిక.స్థానము.y > కనిష్ఠY()) {
    while (కుంచిక.స్థానము.x < గరిష్ఠX()) {
      squ(s, nextColor())
      ముందుకు_జరుగు(s)
    }
    కుడి_వైపు_తిరుగు(90)
    ముందుకు_జరుగు( s)
    కుడి_వైపు_తిరుగు(90)
    వెనుకకు_జరుగు(rowOffset)
    while (కుంచిక.స్థానము.x > కనిష్ఠX()) {
      squLeft(s, nextColor())
      ముందుకు_జరుగు(s)
    }
    ఎడమ_వైపు_తిరుగు(90)
    ముందుకు_జరుగు(s)
    ఎడమ_వైపు_తిరుగు(90)
    ముందుకు_జరుగు(rowOffset)
  }
}
