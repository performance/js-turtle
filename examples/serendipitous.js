// Serendipitous Circles -- draw ellipses with quadratic equation
// from Byte magazine Aug 1977
function demo () {
  reset()
  x1 = random(minX(),maxX())
  y1 = random(minY(),maxY())
  i = 0
  రంగు( నీలము )
  while (i < 100) {
    i++
    //write (x + " " + y)
    x2 = x1 - y1/2
    y2 = y1 + x2/2
    len = Math.sqrt( ((y2-y1)*(y2-y1)) + ((x2-x1)*(x2-x1)))
    dir = Math.asin( (y2-y1) / len) + Math.PI / 2
    if ( (x2-x1) < 0) {
      dir = (2 * Math.PI) - dir
    }
    //x1 = Math.floor( x2)
    //y1 = Math.floor( y2)
    x1 = x2
    y1 = y2
    కోణము (360 * dir / 2 / Math.PI)
    ముందుకు_జరుగు(len)
  }
}
