// Miura Origami -- fold pattern for the miura origami

function horiz( size){
  hy = గరిష్ఠY()
  while (hy > కనిష్ఠY()) {
    స్థానము_మార్చు(కనిష్ఠX(), hy)
    కోణము(90)
    ముందుకు_జరుగు( 2*గరిష్ఠX())
    hy = hy - size
  } 
}

function vert( size) {
  vx = కనిష్ఠX()
  while ( vx < గరిష్ఠX()) {
    vy = గరిష్ఠY()
    while (vy > కనిష్ఠY()) {
      స్థానము_మార్చు( vx, vy)
      కోణము( 180 - 6)
      ముందుకు_జరుగు( size * Math.cos( degToRad(6)))
      కుడి_వైపు_తిరుగు( 12)
      ముందుకు_జరుగు( size * Math.cos( degToRad(6)))
      vy = vy - 2 * size

    }
    vx = vx + size
  }
}


function ప్రదర్శన() {
  ఆది_స్థితి()
   చుట్టొద్దు()
  size = 100
  horiz( size)
  vert( size)
}
