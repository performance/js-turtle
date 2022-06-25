// Dodecahedron Graph -- draw a 2-dimentional graph of a dodecahedron
// graph here describes the connections between vertices, more at
// Wikipedia.com

//   This would be easier to draw to points on concentric circles
//   This is just lines and not shadable polygons

_విధానము_     pent(side) {
  _సర్వత్ర_   angle2=72-(360-108)/2
  // the sides below are really trigonometric conversions
  // without the trig functions
  _సర్వత్ర_   side2 = .4*side
  _సర్వత్ర_   angle3 = 80
  _సర్వత్ర_   side3 = 1.05 * side
  _సర్వత్ర_   angle4 = 40
  _సర్వత్ర_   side4 = .5 * side
  _సర్వత్ర_   angle5 = 129
  _సర్వత్ర_   side5 = 2.65 * side
  for (_సర్వత్ర_   i=0; i<5; i++) {
    ముందుకు_జరుగు(side)
      కుడి_వైపు_తిరుగు(angle2)
      ముందుకు_జరుగు(side2)
        కుడి_వైపు_తిరుగు(angle3)
        ముందుకు_జరుగు(side3)
          ఎడమ_వైపు_తిరుగు(angle4)
          ముందుకు_జరుగు(side4)
            ఎడమ_వైపు_తిరుగు(angle5)
            ముందుకు_జరుగు(side5)
            వెనుకకు_జరుగు(side5)
            కుడి_వైపు_తిరుగు(angle5)
          వెనుకకు_జరుగు(side4)
          కుడి_వైపు_తిరుగు(angle4)
        వెనుకకు_జరుగు(side3)
        ఎడమ_వైపు_తిరుగు(angle3)
        ఎడమ_వైపు_తిరుగు(angle3)
        ముందుకు_జరుగు(side3)
        వెనుకకు_జరుగు(side3)
        కుడి_వైపు_తిరుగు(angle3)
      వెనుకకు_జరుగు(side2)
      ఎడమ_వైపు_తిరుగు(angle2)
    కుడి_వైపు_తిరుగు(72)
  }
}

_విధానము_     ప్రదర్శన() {
  స్థానము_మార్చు(-50,-22)
  కుడి_వైపు_తిరుగు(17)
  pent(50)
  కుంచికను_దాచు()
}
