// Dodecahedron Graph -- draw a 2-dimentional graph of a dodecahedron
// graph here describes the connections between vertices, more at
// Wikipedia.com

//   This would be easier to draw to points on concentric circles
//   This is just lines and not shadable polygons

function pent(side) {
  var angle2=72-(360-108)/2
  // the sides below are really trigonometric conversions
  // without the trig functions
  var side2 = .4*side
  var angle3 = 80
  var side3 = 1.05 * side
  var angle4 = 40
  var side4 = .5 * side
  var angle5 = 129
  var side5 = 2.65 * side
  for (var i=0; i<5; i++) {
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

function demo() {
  స్థానము_మార్చు(-50,-22)
  కుడి_వైపు_తిరుగు(17)
  pent(50)
  కుంచికను_దాచు()
}
