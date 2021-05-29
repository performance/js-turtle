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
    రంగు( random (16))
    //రంగు("hsl("+ 360 * i/steps + ", 100%, 50%)") // color wheel
    //రంగు(i%16)
    //రంగు(Math.floor(16 * i/steps)) // logo colors
    ముందుకు_జరుగు(len)
    i = i + 1
  }
}

function demo () {
  reset()
  wrap( false)
  starburst()
} 
