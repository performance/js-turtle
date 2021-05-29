// Mountain Tessellation -- tessellation with a mountain shaped heptiamond
// a heptiamond is a shape composed of 7 equalateral triangles
//
//
//// Triangle Tessellation -- tile a space using triangles

colors = ["red", "white", "blue", "yellow", "green"]

function shapeUp (side, fillColor) {
  // assume pointing in direction of base
  beginShape()
  ముందుకు_జరుగు(3* side)
  ఎడమ_వైపు_తిరుగు(120)
  ముందుకు_జరుగు(2*side)
  ఎడమ_వైపు_తిరుగు( 120)
  ముందుకు_జరుగు(side)
  కుడి_వైపు_తిరుగు( 120)
  ముందుకు_జరుగు( side)
  ఎడమ_వైపు_తిరుగు( 120)
  ముందుకు_జరుగు( 2*side)
  ఎడమ_వైపు_తిరుగు(120)
  fillShape( fillColor)
}

function mountainUnit(side){
  కలమును_కింద_పెట్టు()
  shapeUp(side, "darkgreen")//1,1
  కలమును_పైకి_ఎత్తు()
  ఎడమ_వైపు_తిరుగు(60)
  ముందుకు_జరుగు(side)
  కుడి_వైపు_తిరుగు(60)
  ముందుకు_జరుగు(5*side)
  కుడి_వైపు_తిరుగు(180)
  కలమును_కింద_పెట్టు()
  shapeUp(side, "skyblue")//1,0
  కలమును_పైకి_ఎత్తు()

  ముందుకు_జరుగు(3*side)
  ఎడమ_వైపు_తిరుగు(180)
  కలమును_కింద_పెట్టు()
  shapeUp(side, "green") //0,0

  కలమును_పైకి_ఎత్తు()
  ఎడమ_వైపు_తిరుగు(60)
  ముందుకు_జరుగు(2*side)
  ఎడమ_వైపు_తిరుగు(120)
  కలమును_కింద_పెట్టు()
  shapeUp(side, "lightblue")//0,1
  ముందుకు_జరుగు( 3*side)
  ఎడమ_వైపు_తిరుగు( 180)
  కలమును_పైకి_ఎత్తు()

}

// nextColor could be completely random, if desired
function nextColor() {
  c = colors[ count % color.length]
  count = count + 1
  return c
}


function newRow(lastx, lasty) {
  // function to determine where the new row should start
}

function demo() {
  reset()
  wrap(false)
  side = 20
  rowx = minX() - side // - 5.5 * side
  rowy = minY()// +2*side
  కుడి_వైపు_తిరుగు(90)
  mx = rowx
  my = rowy

console.log("xy<: " + minX() + " " + minY())
  // row until run off bottom or off right side
  // column when end is off screen

  // while ( x<maxX() && y>minY()) {
  var done = false
  var i = 0
  var sqrt3 = Math.sqrt(3)
  while (!done){
console.log("xy: " + i + " " + mx + " " + my)
    goto (mx, my)
    mountainUnit( side)
    //goto (mx+2.2*side, my+1*sqrt3*side)
    //write(i)
    
    mx = mx + 4.5 * side
    my = my -sqrt3/2 * side

    if (mx > maxX() || my < (minY() - 1.5 * sqrt3 * side)) {
      console.log( "New row")
      if (my > maxY()) {
        done = true
      }
      // move up one row
      rowx = rowx + 0.5 * side
      rowy = rowy + 1.5 * sqrt3 * side
      if (rowy > maxY() + sqrt3 * side) {
        while (rowy> maxY() + sqrt3 * side) {
          // step forward one more unit
           console.log( "Stepping forward one")
           rowx = rowx + 4.5 * side
           rowy = rowy - sqrt3/2 * side
        }
      } else if (rowx > minX() - 1 * side) {
         console.log( "Backing up one")
         // back up one more unit
         rowx = rowx - 4.5 * side
         rowy = rowy + sqrt3/2 * side
      }
      mx = rowx
      my = rowy
      //done = true
    }
    if (i> 75) {
      done = true
    }
    if ( mx>maxX() + 500  && my>maxY()) {
      done = true
    }
    i++
  }
  console.log("Count: " + --i)

}
