// Cafe Wall Illusion -- draws cafe tiles. see Wikipedia.

function drawTile (h,w, tc, x, y) {
  goto(x,y)
  beginShape()
  for( var i=0; i<2; i=i+1) {
    ముందుకు_జరుగు(h)
    కుడి_వైపు_తిరుగు(90)
    ముందుకు_జరుగు(w)
    కుడి_వైపు_తిరుగు(90)
  }
  fillShape( tc)
}

function cafeTiles (h, w, gw, gc, off) {
  maxRow = 2*maxY()/h
  maxCol = 2*maxX()/w
  వెడల్పు(gw)
  రంగు(gc)
  setHeading(0)
  for (var row=0; row<maxRow; row=row+1) {
    for (var col=0; col<maxCol; col=col+1) {
      if (col%2) {
        drawTile( h, w, "white", minX()+col*(w+gw/2)+(row%2*w*off), minY()+ row*(h+gw/2))
      } else {
        drawTile( h, w, "black", minX()+col*(w+gw/2)+(row%2*w*off), minY()+ row*(h+gw/2))
      }
    }
  }
}



function demo () {
  ఆది_స్థితి();
  size = Math.min( maxX(), maxY()) * .9
  తాబేలును_దాచు();

  var tileHeight = 50
  var tileWidth = 50
  var mortarWidth = 1
  var mortarColor = "#c0c0c0"
  var mortarColor = "#808080"
  var offset = .5
  cafeTiles( tileHeight, tileWidth, mortarWidth, mortarColor, offset);
}
