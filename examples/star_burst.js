// Starburst -- simple example of while statement and colors

function starburst () {
  var steps = 1000
  var len = maxX()
  if (len < maxY()) {
    len = maxY()
  }
  len = 1.5 * len
  var i = 0
  while ( i < steps) {
    goto ( 0,0)
    కోణము( 360/steps*i)
    color( random (16))
    //color ("hsl("+ 360 * i/steps + ", 100%, 50%)") // color wheel
    //color (i%16)
    //color (Math.floor(16 * i/steps)) // logo colors
    ముందుకు_జరుగు(len)
    i = i + 1
  }
}

function demo () {
  reset()
  wrap( false)
  starburst()
} 
