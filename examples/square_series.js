// Square Series -- draw a set of overlapping squares

// lower right is not quite right, it gets left out.

function paddle (side) {
  side2 = side + side
  ముందుకు_జరుగు( side2)
  కుడి_వైపు_తిరుగు( 90)
  ముందుకు_జరుగు( side)
  ఎడమ_వైపు_తిరుగు( 90)
  ముందుకు_జరుగు( side2)
  ఎడమ_వైపు_తిరుగు( 90)
  ముందుకు_జరుగు( side2)
  ఎడమ_వైపు_తిరుగు( 90)
  ముందుకు_జరుగు( side2)
  ఎడమ_వైపు_తిరుగు( 90)
  ముందుకు_జరుగు( side)
  కలమును_పైకి_ఎత్తు()
  కుడి_వైపు_తిరుగు( 90)
  ముందుకు_జరుగు( side2)
  కుడి_వైపు_తిరుగు( 180)
  కలమును_కింద_పెట్టు()
}


function cwGroup( side) {
  for( var i=0; i<4; i++) {
    paddle( side)
    కలమును_పైకి_ఎత్తు()
    ముందుకు_జరుగు( side)
    కుడి_వైపు_తిరుగు( 90)
    కలమును_కింద_పెట్టు()
  }
}


function ccwGroup( side) {
  for( var i=0; i<4; i++) {
    paddle( side)
    కలమును_పైకి_ఎత్తు()
    ముందుకు_జరుగు( side)
    ఎడమ_వైపు_తిరుగు( 90)
    కలమును_కింద_పెట్టు()
  }
}


function cwRow( side) {
  for (var i=minX(); i<maxX(); i = i + 6*side) {
    setx(i)
    cwGroup( side)
  }
}


function ccwRow( side) {
  for (var i=minX() + 4*side; i<maxX(); i = i + 6*side) {
                     // offset row 3 sides + 1 for cw/ccw flip
    setx(i)
    ccwGroup( side)
  }
}


function demo() {
  wrap(false)
  side = 30
  for (var i=minY(); i<maxY(); i = i + 6*side) {
    sety(i)
    cwRow( side)
    sety(i + 3*side)
    రంగు( ఎరుపు )
    ccwRow( side)
    రంగు("black")
  }
}
