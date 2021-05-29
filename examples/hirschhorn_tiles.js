// Hircshhorn Tiles -- Hirschhorn 6-fold-rotational symmetry pentagonal tiling

// CONSTRAINTS
// six ang0 = 360
//ang0 + ang1 + ang4 = 360
//ang1 + ang3 + ang3 = 360
//ang2 + ang4 + ang4 = 360
//ang0 + ang3 = ang1 ... about the inner circle
//ang2+ ang3 + ang2 + ang3 = 360
//  restated: ang2 + ang3 = 180
//
//ang0 = 60
//ang1 = ang3 + 60
//3*ang3 = 300
//ang3 = 100
//ang2 = 180 - ang3 = 180-100 = 80
//ang1 = 360 - 2*ang3 = 360 - 200 = 160
//ang4 = 360 - ang0 = ang1 = 360 - 60 - 160 = 140

//sides
//side0 = side4
//side0 = side3
//side1 = side4
//side2 = side3
//side1 = side3
// this means that
// side0 = side4 = side3 = side2 = side1... equalateral

ang0 = 360/6 //point కోణము
ang1 = 160
ang2 = 80
ang3 = 100
ang4 = 140
CCW = true
CW = false

angles = [ang0, ang1, ang2, ang3, ang4 ]
//angles = [60, 160, 80, 100, 140 ]

fColors = [
           "yellow",
           "నారింజ",
           "lime",
           "red",
           "purple",
           "cyan",
           "cyan",
           "blue",
           "blue",
           "కపిలము",
           "కపిలము",
           "కపిలము",
           "tan",
           "tan",
           "tan",
           "aqua",
           "aqua",
           "aqua",
           "aqua",
           "salmon",
           "salmon",
           "salmon",
           "salmon",
           "బూడిద",
           "బూడిద",
           "బూడిద",
           "బూడిద",
           "బూడిద",
           "black",
           "black",
           "black",
           "black",
           "black",
           ]
/*
fColors = [
           "wheat",
           "tan",
           "tan",
           "wheat",
           "tan",
           "wheat",
           "wheat",
           "tan",
           "tan",
           "wheat",
           "wheat",
           "wheat",
           "tan",
           "tan",
           "tan",
           "wheat",
           "wheat",
           "wheat",
           "wheat",
           "tan",
           "tan",
           "tan",
           "tan",
           "బూడిద",
           "బూడిద",
           "బూడిద",
           "బూడిద",
           "బూడిద",
           "black",
           "black",
           "black",
           "black",
           "black",
           ]
*/
colorlayer = 0

function pentagon(side, fColor) {
  // direction of the point
  // invariant
  beginShape()
  ఎడమ_వైపు_తిరుగు( ang0/2)
  ముందుకు_జరుగు( side)
  కుడి_వైపు_తిరుగు( 180 - ang1)
  ముందుకు_జరుగు( side)
  కుడి_వైపు_తిరుగు( 180 - ang2)
  ముందుకు_జరుగు( side)
  కుడి_వైపు_తిరుగు( 180 - ang3)
  ముందుకు_జరుగు( side)
  కుడి_వైపు_తిరుగు( 180 - ang4)
  ముందుకు_జరుగు( side)
  కుడి_వైపు_తిరుగు( 180 - ang0/2)
  fillShape( fColor)
}

function p(pNum, ccw, side, fColor) {
  if (ccw) {
    r = -1
  } else {
    r = 1
  }
  beginShape()
  ఎడమ_వైపు_తిరుగు( angles[pNum]/2)
  for (var i=1; i<5; i++) {
    ముందుకు_జరుగు( side)
    //write( angles[(i+pNum)%5])
    కుడి_వైపు_తిరుగు( 180 - angles[(5+r*i+pNum)%5])  
  }
  ముందుకు_జరుగు( side)
  కుడి_వైపు_తిరుగు( 180 - angles[pNum]/2)
  fillShape( fColor)
}

function hirchhorn(side) {
  for (var i=0; i<6; i++) {
    //pentagon( s, fColors[colorlayer])
    p( 0, CW, side, fColors[colorlayer])
    ఎడమ_వైపు_తిరుగు( 60)
  }
  colorlayer++

  ఎడమ_వైపు_తిరుగు(30)
  for (var i=0; i<6; i++) {
    ముందుకు_జరుగు( side)
    ఎడమ_వైపు_తిరుగు( 10)
    //pentagon( s, fColors[colorlayer])
    p( 0, CW, side, fColors[colorlayer])
    కుడి_వైపు_తిరుగు( 10)
    వెనుకకు_జరుగు( side)
    ఎడమ_వైపు_తిరుగు( 60)
  }
  colorlayer++

  for (var i=0; i<6; i++) {
    ముందుకు_జరుగు( side)
    కుడి_వైపు_తిరుగు( 180 - ang1)
    ముందుకు_జరుగు( side)
    ఎడమ_వైపు_తిరుగు( 180 - ang4 - ang4/2 )

    p ( 4, 0, side, fColors[colorlayer])
    కుడి_వైపు_తిరుగు( 180 - ang4 - ang4/2 )
    వెనుకకు_జరుగు( side)
    ఎడమ_వైపు_తిరుగు( 180 - ang1)
    వెనుకకు_జరుగు(side)
    ఎడమ_వైపు_తిరుగు( 60)
  }
  colorlayer++
  
  ముందుకు_జరుగు( side)
  కుడి_వైపు_తిరుగు( 180 - ang1)
  ముందుకు_జరుగు( side)
  ఎడమ_వైపు_తిరుగు( 180 - ang4)
  ముందుకు_జరుగు( side)
  ఎడమ_వైపు_తిరుగు( 180 - ang3 - ang0/2)
  
  cl = colorlayer
  for( var i=0; i<18; i++) {
    colorlayer = cl
    p( 0, CCW, side, fColors[colorlayer])
    colorlayer++
    కుడి_వైపు_తిరుగు( ang0/2)
    ముందుకు_జరుగు( side)
    ఎడమ_వైపు_తిరుగు( 180 - ang1 - ang3/2)
    p( 3, CCW, side, fColors[colorlayer])
    colorlayer++
    కుడి_వైపు_తిరుగు( ang3/2)

    ముందుకు_జరుగు(side)
    ఎడమ_వైపు_తిరుగు( 180- ang4 - ang0/2)
    p( 0, CW, side, fColors[colorlayer])
    colorlayer++

    ఎడమ_వైపు_తిరుగు( ang0/2)
    ముందుకు_జరుగు( side)
    ఎడమ_వైపు_తిరుగు( 180 - ang0)
    ముందుకు_జరుగు( side)
    కుడి_వైపు_తిరుగు( 180 - ang0/2)
    p( 0, CW, side, fColors[colorlayer])//purple
    colorlayer++

    ఎడమ_వైపు_తిరుగు( ang0/2)
    ముందుకు_జరుగు( side)
    కుడి_వైపు_తిరుగు( 180- ang1)
    ముందుకు_జరుగు( side)
    కుడి_వైపు_తిరుగు( 180 - ang2 - ang2/2)
    p( 2, CCW, side, fColors[colorlayer])
    colorlayer++

    కుడి_వైపు_తిరుగు( ang2/2)
    ముందుకు_జరుగు( side)
    ఎడమ_వైపు_తిరుగు( ang2/2)
    p( 2, CCW, side, fColors[colorlayer])
    colorlayer++

    కుడి_వైపు_తిరుగు( ang2/2)
    ముందుకు_జరుగు( side)
    ఎడమ_వైపు_తిరుగు( 180 - ang3)
    ముందుకు_జరుగు( side)
    ఎడమ_వైపు_తిరుగు( 180 - ang4 - ang0/2)
    p( 0, CW, side, fColors[colorlayer])
    colorlayer++

    ఎడమ_వైపు_తిరుగు( ang0/2)
    ముందుకు_జరుగు( side)
    ఎడమ_వైపు_తిరుగు( 180 - ang0)
    ముందుకు_జరుగు( side)
    కుడి_వైపు_తిరుగు( 180 - ang0/2)
    p( 0, CW, side, fColors[colorlayer])
    colorlayer++

    ఎడమ_వైపు_తిరుగు( ang0/2)
    ముందుకు_జరుగు( side)
    ఎడమ_వైపు_తిరుగు( 180 - ang0)
    ముందుకు_జరుగు( side)
    కుడి_వైపు_తిరుగు( 180 - ang0/2)
    p( 0, CW, side, fColors[colorlayer])
    colorlayer++

    ఎడమ_వైపు_తిరుగు( ang0/2)
    ముందుకు_జరుగు( side)
    కుడి_వైపు_తిరుగు( 180 - ang1)
    ముందుకు_జరుగు( side)
    కుడి_వైపు_తిరుగు( 180 - ang2 - ang2/2)
    p( 2, CCW, side, fColors[colorlayer])
    colorlayer++

    కుడి_వైపు_తిరుగు( ang2/2)
    ముందుకు_జరుగు( side)
    ఎడమ_వైపు_తిరుగు( ang2/2)
    p( 2, CCW, side, fColors[colorlayer])
    colorlayer++

    కుడి_వైపు_తిరుగు( ang2/2)
    ముందుకు_జరుగు( side)
    ఎడమ_వైపు_తిరుగు( ang2/2)
    p( 2, CCW, side, fColors[colorlayer])
    colorlayer++

    కుడి_వైపు_తిరుగు( ang2/2)
    ముందుకు_జరుగు( side)
    ఎడమ_వైపు_తిరుగు( ang2)
    ముందుకు_జరుగు( side)
    ఎడమ_వైపు_తిరుగు( 180 - ang4 - ang0/2)
    p( 0, CW, side, fColors[colorlayer])
    colorlayer++

    ఎడమ_వైపు_తిరుగు( ang0/2)
    ముందుకు_జరుగు( side)
    ఎడమ_వైపు_తిరుగు( 180 - ang0)
    ముందుకు_జరుగు( side)
    కుడి_వైపు_తిరుగు( 180 - ang0/2)
    p( 0, CW, side, fColors[colorlayer])
    colorlayer++

    ఎడమ_వైపు_తిరుగు( ang0/2)
    ముందుకు_జరుగు( side)
    ఎడమ_వైపు_తిరుగు( 180 - ang0)
    ముందుకు_జరుగు( side)
    కుడి_వైపు_తిరుగు( 180 - ang0/2)
    p( 0, CW, side, fColors[colorlayer])
    colorlayer++

    ఎడమ_వైపు_తిరుగు( ang0/2)
    ముందుకు_జరుగు( side)
    ఎడమ_వైపు_తిరుగు( 180 - ang0)
    ముందుకు_జరుగు( side)
    కుడి_వైపు_తిరుగు( 180 - ang0/2)
    p( 0, CW, side, fColors[colorlayer])
    colorlayer++

    ఎడమ_వైపు_తిరుగు( ang0/2)
    ముందుకు_జరుగు( side)
    కుడి_వైపు_తిరుగు( 180 - ang1)
    ముందుకు_జరుగు( side)
    కుడి_వైపు_తిరుగు( 180 - ang2 - ang2/2)
    p( 2, CCW, side, fColors[colorlayer])
    colorlayer++

    కుడి_వైపు_తిరుగు( ang2/2)
    ముందుకు_జరుగు( side)
    ఎడమ_వైపు_తిరుగు( ang2/2)
    p( 2, CCW, side, fColors[colorlayer])
    colorlayer++

    కుడి_వైపు_తిరుగు( ang2/2)
    ముందుకు_జరుగు( side)
    ఎడమ_వైపు_తిరుగు( ang2/2)
    p( 2, CCW, side, fColors[colorlayer])
    colorlayer++

    కుడి_వైపు_తిరుగు( ang2/2)
    ముందుకు_జరుగు( side)
    ఎడమ_వైపు_తిరుగు( ang2/2)
    p( 2, CCW, side, fColors[colorlayer])
    colorlayer++

    // and back again
    కుడి_వైపు_తిరుగు( ang2/2)
    ముందుకు_జరుగు( side)
    కుడి_వైపు_తిరుగు( 180 - ang3)

    ముందుకు_జరుగు( side)
    కుడి_వైపు_తిరుగు( 180 - ang4)
    ముందుకు_జరుగు( side)

    కుడి_వైపు_తిరుగు( 180 - ang0 - ang4)
    ముందుకు_జరుగు( side)
    కుడి_వైపు_తిరుగు( 180 - ang3 - ang3)
    ముందుకు_జరుగు( side)
    కుడి_వైపు_తిరుగు( 180 - ang4)
    ముందుకు_జరుగు( side)

    కుడి_వైపు_తిరుగు( 180 - ang0 - ang4)
    ముందుకు_జరుగు( side)
    కుడి_వైపు_తిరుగు( 180 - ang3 - ang3)
    ముందుకు_జరుగు( side)
    కుడి_వైపు_తిరుగు( 180 - ang4)
    ముందుకు_జరుగు( side)

    కుడి_వైపు_తిరుగు( 180 - ang0 - ang4)
    ముందుకు_జరుగు( side)

    కుడి_వైపు_తిరుగు( 180 - ang3 - ang1)
    ముందుకు_జరుగు( side)

    కుడి_వైపు_తిరుగు( 180 - ang0)
    ముందుకు_జరుగు( side)
    కుడి_వైపు_తిరుగు( 180 - ang4 - ang0/2)

  }
  
}

function demo() {
  reset()
  wrap(false)
  size = .07* Math.min(maxX(), maxY())
  hirchhorn(size)
}
