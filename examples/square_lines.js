// Square Lines -- draw a set of overlapping squares without turns

function demo() {
  reset()
  wrap(false)
  side = 30
  side2 = side + side
  offset = true
  for (var i=minY(); i<maxY(); i = i + side) {
    goto(minX(),i)
    కోణము(90)
    if (offset) {
      కలమును_పైకి_ఎత్తు()
      ముందుకు_జరుగు( side)
      కలమును_కింద_పెట్టు()
    }
    offset = !offset
    for (var j=minX(); j<maxX(); j = j + 3*side) {
      ముందుకు_జరుగు( side2)
      కలమును_పైకి_ఎత్తు()
      ముందుకు_జరుగు( side)
      కలమును_కింద_పెట్టు()
    }
  }

  offset = true
  for (var i=minX(); i<maxX(); i = i + side) {
    goto(i, minY())
    కోణము(0)
    if (offset) {
      ముందుకు_జరుగు( side)
    }
    offset = !offset
    for (var j=maxY(); j>minY(); j = j - 3*side) {
      కలమును_పైకి_ఎత్తు()
      ముందుకు_జరుగు( side)
      కలమును_కింద_పెట్టు()
      ముందుకు_జరుగు( side2)
    }
  }
}
