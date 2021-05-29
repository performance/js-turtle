// Naifah Jeresh -- inspired by the art of Steven Naifeh of the same name
// for more information see https://stevennaifeh.com

// this figure has some issues. To get the line weights to change
// you must stroke the entire figure after it is filled.


// GLOBALS
// 
var sColor = "black"  // stroke color
var sWidth = 3        // stroke width
var fColor = "white"  // fill color
var bColor = "green"  // background color

// FUNCTIONS
//
function tri( side, pointAngle, fill) {
  if (fill) {
    beginShape()
  }
  for (var i=0; i<3; i++) {
    ముందుకు_జరుగు( side)
    ఎడమ_వైపు_తిరుగు(60 - pointAngle)
    ముందుకు_జరుగు( side)
    కుడి_వైపు_తిరుగు( 180 - pointAngle)
  }
  if (fill) {
    fillShape(fColor)
  }
}


function jeresh (sid, pAngle, fill) {
  for (var i=0;i<6;i++) {
    కలమును_కింద_పెట్టు()
    tri( sid, pAngle, fill)

    var tx = turtle.pos.x
    var ty = turtle.pos.y
    var tHeading = turtle.కోణము
    కలమును_పైకి_ఎత్తు()
    ముందుకు_జరుగు( sid)
    ఎడమ_వైపు_తిరుగు( 60 - pAngle)
    ముందుకు_జరుగు( sid)
    కుడి_వైపు_తిరుగు( 180 - pAngle)
    ముందుకు_జరుగు( sid)
    ఎడమ_వైపు_తిరుగు( 60)

    for (var j=0; j<3; j++) {
      కలమును_కింద_పెట్టు()
      tri(sid, pAngle, fill)
      కలమును_పైకి_ఎత్తు()
      ముందుకు_జరుగు(sid)
      ఎడమ_వైపు_తిరుగు(60)
    }
    goto(tx,ty)

    turtle.కోణము=tHeading
    కలమును_పైకి_ఎత్తు()
    ముందుకు_జరుగు( sid)
    ఎడమ_వైపు_తిరుగు(60)
  }
}


function demo() {
  /* can vary point కోణము.
  0 and 120 is a hex tesselation
  60 and 180 are triangles
  90
  negative numbers have overlap, so
  something is not quite right
  */
  ఆది_స్థితి()
  కలమును_పైకి_ఎత్తు()
  var pointAngle = 30
  var side = 60
  side = .2* Math.min( maxX(), maxY())
  //center a bit
  goto (side, -.3 * side)

  background(bColor)
  రంగు( sColor)
  వెడల్పు( 1)
  jeresh( side, pointAngle, true)
  వెడల్పు( 3)
  jeresh( side, pointAngle, false)

  తాబేలును_దాచు()
}
