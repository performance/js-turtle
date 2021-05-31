// Square Lines -- draw a set of overlapping squares without turns

function demo() {
  ఆది_స్థితి()
   చుట్టు(false)
  side = 30
  side2 = side + side
  offset = true
  for (var i=కనిష్ఠY(); i<గరిష్ఠY(); i = i + side) {
    స్థానము_మార్చు(కనిష్ఠX(),i)
    కోణము(90)
    if (offset) {
      కలమును_పైకి_ఎత్తు()
      ముందుకు_జరుగు( side)
      కలమును_కింద_పెట్టు()
    }
    offset = !offset
    for (var j=కనిష్ఠX(); j<గరిష్ఠX(); j = j + 3*side) {
      ముందుకు_జరుగు( side2)
      కలమును_పైకి_ఎత్తు()
      ముందుకు_జరుగు( side)
      కలమును_కింద_పెట్టు()
    }
  }

  offset = true
  for (var i=కనిష్ఠX(); i<గరిష్ఠX(); i = i + side) {
    స్థానము_మార్చు(i, కనిష్ఠY())
    కోణము(0)
    if (offset) {
      ముందుకు_జరుగు( side)
    }
    offset = !offset
    for (var j=గరిష్ఠY(); j>కనిష్ఠY(); j = j - 3*side) {
      కలమును_పైకి_ఎత్తు()
      ముందుకు_జరుగు( side)
      కలమును_కింద_పెట్టు()
      ముందుకు_జరుగు( side2)
    }
  }
}
