// Icosahedron Graph -- draw a two-dimensional graph of an icodahedron
// graph here describes the connections between vertices, more at
// Wikipedia.com

function pent(side) {
  // the below side variable are doing trigonometry without
  // the trig functions. Values found emperically.
  var angle2=180-(180-72)/2
  var side2 = 1.18*side
  var angle3 = 60
  var side3 = side2
  var angle4 = 156.5
  var side4 = 2.15 * side
  var angle5 = 31
  var side5 = 1.27 * side
  for (var i=0; i<5; i++) {
    రంగు("black")
    ముందుకు_జరుగు(side)
      ఎడమ_వైపు_తిరుగు(angle2)

      రంగు( ఎరుపు )
      కుడి_వైపు_తిరుగు(angle3)
      ముందుకు_జరుగు(side3)
      వెనుకకు_జరుగు(side3)
      ఎడమ_వైపు_తిరుగు(angle3)

      రంగు("black")
      ముందుకు_జరుగు(side2)

      రంగు( నీలము )
      కుడి_వైపు_తిరుగు(180-angle3)
      ముందుకు_జరుగు(side3)

        ఎడమ_వైపు_తిరుగు(angle4)

        కుడి_వైపు_తిరుగు(angle5)
        ముందుకు_జరుగు(side5)
        వెనుకకు_జరుగు(side5)
        ఎడమ_వైపు_తిరుగు(angle5)

        ముందుకు_జరుగు(side4)
 
        కుడి_వైపు_తిరుగు(180-angle5)
        ముందుకు_జరుగు(side5)
        వెనుకకు_జరుగు(side5)
        ఎడమ_వైపు_తిరుగు(180-angle5)


        వెనుకకు_జరుగు(side4)
        కుడి_వైపు_తిరుగు(angle4)

      వెనుకకు_జరుగు(side3)
      ఎడమ_వైపు_తిరుగు(180-angle3)

      రంగు("black")
      వెనుకకు_జరుగు(side2)
      కుడి_వైపు_తిరుగు(angle2)

    వెనుకకు_జరుగు(side)
    turn(72)
  }
  circle(2.13*side)
}

function demo() {
  ఆది_స్థితి()
  size = .4 * Math.min( maxX(), maxY())
  //goto (-50,-22)
  //కుడి_వైపు_తిరుగు(17)
  pent(size)
  తాబేలును_దాచు()
}
