// Naifah Jeresh -- inspired by the art of Steven Naifeh of the same name
// for more information see https://stevennaifeh.com

// this figure has some issues. To get the line weights to change
// you must stroke the entire figure after it is filled.


// GLOBALS
// 
var sColor = "నలుపు"  // stroke color
var sWidth = 3        // stroke width
var fColor = "white"  // fill color
var bColor = "green"  // background color

// FUNCTIONS
//
function tri( side, pointAngle, fill) {
  if (fill) {
    ఆకారాము_ప్రారంభించు()
  }
  for (var i=0; i<3; i++) {
    ముందుకు_జరుగు( side)
    ఎడమ_వైపు_తిరుగు(60 - pointAngle)
    ముందుకు_జరుగు( side)
    కుడి_వైపు_తిరుగు( 180 - pointAngle)
  }
  if (fill) {
    ఆకారాము_ముగించు(fColor)
  }
}


function jeresh (sid, pAngle, fill) {
  for (var i=0;i<6;i++) {
    కలమును_కింద_పెట్టు()
    tri( sid, pAngle, fill)

    var tx = కుంచిక.స్థానము.x
    var ty = కుంచిక.స్థానము.y
    var tHeading = కుంచిక.కోణము
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
    స్థానము_మార్చు(tx,ty)

    కుంచిక.కోణము=tHeading
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
  side = .2* Math.min( గరిష్ఠX(), గరిష్ఠY())
  //center a bit
  స్థానము_మార్చు(side, -.3 * side)

  background(bColor)
  రంగు_మార్చు( sColor)
  వెడల్పు( 1)
  jeresh( side, pointAngle, true)
  వెడల్పు( 3)
  jeresh( side, pointAngle, false)

  కుంచికను_దాచు()
}
