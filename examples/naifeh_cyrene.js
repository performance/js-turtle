// Naifah Cyrene -- inspired by the art of Steven Naifeh of the same name.
// for more information see https://stevennaifeh.com

/* need to focus on the kites to form bow ties, rather than the squares.
this may be a little harder to do, but
easier to rasterize
row of bowties
row of up and down kites
etc.

The quadrangle must be symmetrical, in that the short sides are equal and
the long sides are equal. The ratio between the two may vary.
*/

function bowties (count, back){
  //assume on left edge pointing up, moving to right
  // routine has invariance
  // back = 0 big end first, =1 small end first
  కుడి_వైపు_తిరుగు( 90)
  for (var i=0; i<count; i++) {
    కలమును_కింద_పెట్టు()
    if (i % 2 == back) {
      downKite()
    } else {
      upKite()
    }
    కలమును_పైకి_ఎత్తు()
    ముందుకు_జరుగు( hypoteneuse)
  }
  ఎడమ_వైపు_తిరుగు(180)
  కలమును_పైకి_ఎత్తు()
  ముందుకు_జరుగు( count * hypoteneuse)
  కలమును_కింద_పెట్టు()
  కుడి_వైపు_తిరుగు(90)
}


function upKite() {
  //assume direction is in the axis of the kite
  beginShape()
  కుడి_వైపు_తిరుగు( shortAngle)
  ముందుకు_జరుగు( longSide)
  ఎడమ_వైపు_తిరుగు( 90)
  ముందుకు_జరుగు( shortSide)
  ఎడమ_వైపు_తిరుగు( 180 - 2 * longAngle)
  ముందుకు_జరుగు( shortSide)
  ఎడమ_వైపు_తిరుగు( 90)
  ముందుకు_జరుగు( longSide)
  కుడి_వైపు_తిరుగు(180+ shortAngle)
  fillShape("lightblue")
}

function downKite() {
  //assume direction is in the axis of the kite
  beginShape()
  కుడి_వైపు_తిరుగు( longAngle)
  ముందుకు_జరుగు( shortSide)
  ఎడమ_వైపు_తిరుగు( 90)
  ముందుకు_జరుగు( longSide)
  ఎడమ_వైపు_తిరుగు(180 - 2 * shortAngle)
  ముందుకు_జరుగు( longSide)
  ఎడమ_వైపు_తిరుగు( 90)
  ముందుకు_జరుగు( shortSide)
  కుడి_వైపు_తిరుగు( 180 + longAngle)
  fillShape("lightblue")
}

function kites( count, back) {
  //assume pointing up, perpendicular to flow
  // routine has invariance
  ఎడమ_వైపు_తిరుగు(180)
  for( var i=0; i<count; i++) {
    కలమును_కింద_పెట్టు()
    if (i % 2 == back) {
      downKite()
    } else {
      upKite()
    }

    కలమును_పైకి_ఎత్తు()
    ఎడమ_వైపు_తిరుగు(90)
    ముందుకు_జరుగు( hypoteneuse)
    కుడి_వైపు_తిరుగు(90)
    కలమును_కింద_పెట్టు()
  }
  కలమును_పైకి_ఎత్తు()
  కుడి_వైపు_తిరుగు(90)
  ముందుకు_జరుగు( count * hypoteneuse)
  కుడి_వైపు_తిరుగు(90)
  కలమును_కింద_పెట్టు()
}


function demo() {
  ఆది_స్థితి()
  తాబేలును_దాచు()
  side = 2.5 * Math.min( maxX()/9, maxY()/8)

  //side = 50 // size of the basic block not the inner square
  ratio = 2 // ratio of long side to short side of the quadragon.
  verticalCount = 7
  horizontalCount = 8

  longSide = side * ratio / (1 + ratio)
  shortSide = side - longSide

  hypoteneuse = Math.sqrt(longSide * longSide + shortSide * shortSide)

  shortAngle = radToDeg(Math.atan(shortSide/longSide))
  longAngle = 90 - shortAngle

  // center the figure
  కలమును_పైకి_ఎత్తు()
  ముందుకు_జరుగు(side * horizontalCount * 1.3 / 4)
  ఎడమ_వైపు_తిరుగు(90)
  ముందుకు_జరుగు(side * verticalCount * 1.7 /4)
  కుడి_వైపు_తిరుగు(90)
  కలమును_కింద_పెట్టు()

  for (var i=0; i<verticalCount; i++) {
    bowties( horizontalCount, i % 2)
    kites( horizontalCount+1, 1 - (i % 2)) // change 1 to 0 and 0 to 1
    కలమును_పైకి_ఎత్తు()
    కుడి_వైపు_తిరుగు(180)
    ముందుకు_జరుగు( hypoteneuse)
    కుడి_వైపు_తిరుగు(180)
    కలమును_కింద_పెట్టు()
  }
  bowties( horizontalCount,i%2) // row across bottom to be neat
}
