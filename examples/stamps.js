// Stamps -- demonstrate stamping of a star design multiple times

function star (side) {
  కలమును_పైకి_ఎత్తు()
  ముందుకు_జరుగు(.54*side)
  turn (180-18)
  కలమును_కింద_పెట్టు()
  var i=0
  while (i<5){
    ముందుకు_జరుగు(side)
    కుడి_వైపు_తిరుగు(180-36)
    i = i + 1
  }
  turn (180+18)
}

function stamps () {
  ఆది_స్థితి()
  wrap(false)
  var x = minX()
  while (x <= maxX()) {
    var y = minY()
    while (y <= maxY()) {
      goto (x,y)
      కోణము (0);
      star (25);
      y = y+30
    }
    x = x+30
  }
}

  
demo = stamps
