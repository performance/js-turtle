// Naifeh Mizen Simple -- inspired by the are of Steven Naifeh of the same name
// for more information see https://stevennaifeh.com


function v (side, fColor) {
  // assume pointing up at upper left corner
  // invariant
  if (fColor != "") {
    beginShape()
  }
  ఎడమ_వైపు_తిరుగు( 30)
  ముందుకు_జరుగు( 3*side)
  కుడి_వైపు_తిరుగు( 120)
  ముందుకు_జరుగు( side)
  కుడి_వైపు_తిరుగు(60)
  ముందుకు_జరుగు(side)
  ఎడమ_వైపు_తిరుగు( 120)
  ముందుకు_జరుగు( side)
  కుడి_వైపు_తిరుగు(60)
  ముందుకు_జరుగు( side)
  కుడి_వైపు_తిరుగు( 120)
  ముందుకు_జరుగు( 3*side)
  కుడి_వైపు_తిరుగు(150)
  if (fColor != "") {
    fillShape(fColor)
  }
}


function mizen( side, lColor, fColor) {
  రంగు(lColor)
  కుడి_వైపు_తిరుగు(120)
  for (var i=0; i<6; i++) {
    v( side, fColor)
    కలమును_పైకి_ఎత్తు()
    కుడి_వైపు_తిరుగు(30)
    ముందుకు_జరుగు( side)
    ఎడమ_వైపు_తిరుగు( 60)
    ముందుకు_జరుగు( 2*side)
    ఎడమ_వైపు_తిరుగు(30)
    కలమును_కింద_పెట్టు()
    v( side, fColor)

    కలమును_పైకి_ఎత్తు()
    కుడి_వైపు_తిరుగు(30)
    ముందుకు_జరుగు( 2*side)
    కుడి_వైపు_తిరుగు( 150)
    కలమును_కింద_పెట్టు()
    v( side, fColor)

    కలమును_పైకి_ఎత్తు()
    కుడి_వైపు_తిరుగు(30)
    ముందుకు_జరుగు( side)
    కుడి_వైపు_తిరుగు(120)
    ముందుకు_జరుగు( 4*side)
    కుడి_వైపు_తిరుగు(150)
    కలమును_కింద_పెట్టు()
  }
}


function mizenSimple() {
  bColor = "red"
  lColor = "white"
  background ("tan")

  //center canvas more or less
  goto(-5*side, 3.5*side)
  వెడల్పు(1)
  కోణము(0)
  mizen( side, "black", "red")

  // do again to make lines stand out
  goto(-5*side, 3.5*side)
  వెడల్పు(3)
  కోణము(0)
  mizen( side, "white", "")
}

function demo() {
  reset()
  wrap(false)
  side = 40 // 1/2 basic face of hexagon, width...
  side = .15 * Math.min( maxX(), maxY())
  mizenSimple()
  తాబేలును_దాచు()
}
