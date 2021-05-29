// Miura Origami -- fold pattern for the miura origami

function horiz( size){
  hy = maxY()
  while (hy > minY()) {
    goto (minX(), hy)
    కోణము(90)
    ముందుకు_జరుగు( 2*maxX())
    hy = hy - size
  } 
}

function vert( size) {
  vx = minX()
  while ( vx < maxX()) {
    vy = maxY()
    while (vy > minY()) {
      goto( vx, vy)
      కోణము( 180 - 6)
      ముందుకు_జరుగు( size * Math.cos( degToRad(6)))
      కుడి_వైపు_తిరుగు( 12)
      ముందుకు_జరుగు( size * Math.cos( degToRad(6)))
      vy = vy - 2 * size

    }
    vx = vx + size
  }
}


function demo() {
  ఆది_స్థితి()
  wrap( false)
  size = 100
  horiz( size)
  vert( size)
}
