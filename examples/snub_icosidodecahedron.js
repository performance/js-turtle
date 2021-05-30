// Snub Icosidodecahedron Half -- half pattern for model of snub icosidodecahedron

/*
Print two copies of this on card stock.
Score the lines to make it easier to fold.
Fold and glue the tabs together, so they
are inside the model. Mind the overlaps (10) and
the inner single tabs (5).

Have fun.
*/

function leftTriangle(side) {
  for (var i=0; i<3; i++) {
    ముందుకు_జరుగు(side)
    ఎడమ_వైపు_తిరుగు(120)
  }
}

function leftTab( side) {
  var x = turtle.pos.x
  var y = turtle.pos.y
  ఎడమ_వైపు_తిరుగు( 180 - 45)
  ముందుకు_జరుగు( side * .2)
  ఎడమ_వైపు_తిరుగు( 45)
  ముందుకు_జరుగు( side * .72)
  ఎడమ_వైపు_తిరుగు( 45)
  ముందుకు_జరుగు( side * .2)
  ఎడమ_వైపు_తిరుగు( 180 - 45)
  ముందుకు_జరుగు( side)
  goto( x, y)
}


function rightTriangle(side, tabs) {
  for (var i=0; i<3; i++) {
    ముందుకు_జరుగు(side)
    if (tabs.includes (""+i)) {
      leftTab(side)
    }
    కుడి_వైపు_తిరుగు(120)
  }
}

function leftPentagon(side) {
  for (var i=0; i<5; i++) {
    ముందుకు_జరుగు(side)
    ఎడమ_వైపు_తిరుగు(72)
    if (i  == 0) {
      rightTriangle(side, "1")
    }
    if (i  == 1 || i == 2) {
      rightTriangle(side, "1,2")
    }
    if (i == 3) {
      rightTriangle(side, "1")
      కుడి_వైపు_తిరుగు(60)
      //beginShape()
      rightTriangle(side, "1,2")
      //fillShape("red")
      ఎడమ_వైపు_తిరుగు(60)
    }
  }
}

function rightPentagon(side) {
  for (var i=0; i<5; i++) {
    ఎడమ_వైపు_తిరుగు(120)
    ముందుకు_జరుగు(side)
    కుడి_వైపు_తిరుగు(120)
    leftPentagon(side) // outer pentagon
    ఎడమ_వైపు_తిరుగు(120)
    వెనుకకు_జరుగు(side)
    కుడి_వైపు_తిరుగు(120)
    ముందుకు_జరుగు(side)
    ఎడమ_వైపు_తిరుగు(120)
    rightTriangle(side, "")
    కుడి_వైపు_తిరుగు(120)
    కుడి_వైపు_తిరుగు(72)
    leftTriangle(side)
  }
}


function demo() {
  ఆది_స్థితి()
  side = .25 * Math.min( గరిష్ఠX(), గరిష్ఠY())
  goto (-.666 * side, - .333 * side)
  rightPentagon(side) // inner pentagon
  కుంచికను_దాచు()
}
