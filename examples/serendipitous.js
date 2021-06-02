// Serendipitous Circles -- draw ellipses with quadratic equation
// from Byte magazine Aug 1977
function ప్రదర్శన() {
  ఆది_స్థితి()
  x1 = యాదృచ్ఛిక_సంఖ్య(కనిష్ఠX(),గరిష్ఠX())
  y1 = యాదృచ్ఛిక_సంఖ్య(కనిష్ఠY(),గరిష్ఠY())
  i = 0
  రంగు_మార్చు( నీలము )
  while (i < 100) {
    i++
    //వ్రాయి(x + " " + y)
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
