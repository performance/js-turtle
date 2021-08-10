// Icosahedron Graph -- draw a two-dimensional graph of an icodahedron
// graph here describes the connections between vertices, more at
// Wikipedia.com

_విధానము_     pent(side) {
  // the below side variable are doing trigonometry without
  // the trig functions. Values found emperically.
  _సర్వత్ర_   angle2=180-(180-72)/2
  _సర్వత్ర_   side2 = 1.18*side
  _సర్వత్ర_   angle3 = 60
  _సర్వత్ర_   side3 = side2
  _సర్వత్ర_   angle4 = 156.5
  _సర్వత్ర_   side4 = 2.15 * side
  _సర్వత్ర_   angle5 = 31
  _సర్వత్ర_   side5 = 1.27 * side
  for (_సర్వత్ర_   i=0; i<5; i++) {
    రంగు_మార్చు("నలుపు")
    ముందుకు_జరుగు(side)
      ఎడమ_వైపు_తిరుగు(angle2)

      రంగు_మార్చు( ఎరుపు )
      కుడి_వైపు_తిరుగు(angle3)
      ముందుకు_జరుగు(side3)
      వెనుకకు_జరుగు(side3)
      ఎడమ_వైపు_తిరుగు(angle3)

      రంగు_మార్చు("నలుపు")
      ముందుకు_జరుగు(side2)

      రంగు_మార్చు( నీలము )
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

      రంగు_మార్చు("నలుపు")
      వెనుకకు_జరుగు(side2)
      కుడి_వైపు_తిరుగు(angle2)

    వెనుకకు_జరుగు(side)
    turn(72)
  }
  వృత్తము(2.13*side)
}

_విధానము_     ప్రదర్శన() {
  ఆది_స్థితి()
  size = .4 * Math.min( గరిష్ఠX(), గరిష్ఠY())
  //స్థానము_మార్చు(-50,-22)
  //కుడి_వైపు_తిరుగు(17)
  pent(size)
  కుంచికను_దాచు()
}
