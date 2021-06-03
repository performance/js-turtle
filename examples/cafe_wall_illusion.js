// Cafe Wall Illusion -- draws cafe tiles. see Wikipedia.

function drawTile (h,w, tc, x, y) {
  స్థానము_మార్చు(x,y)
  ఆకారము_ప్రారంభించు()
  ఆవర్తించు(2, () => {
    ముందుకు_జరుగు(h)
    కుడి_వైపు_తిరుగు(90)
    ముందుకు_జరుగు(w)
    కుడి_వైపు_తిరుగు(90)
  } )
  ఆకారము_ముగించు( tc)
}

function cafeTiles (h, w, gw, gc, off) {
  maxRow = 2*గరిష్ఠY()/h
  maxCol = 2*గరిష్ఠX()/w
  వెడల్పు(gw)
  రంగు_మార్చు(gc)
  దిశ_మార్చు(0)
  లెక్క_పెడుతూ_ఆవర్తించు (maxRow, (row) => {
    లెక్క_పెడుతూ_ఆవర్తించు (maxCol, (col) => {
      if (col%2) {
        drawTile( h, w, "white", కనిష్ఠX()+col*(w+gw/2)+(row%2*w*off), కనిష్ఠY()+ row*(h+gw/2))
      } else {
        drawTile( h, w, "నలుపు", కనిష్ఠX()+col*(w+gw/2)+(row%2*w*off), కనిష్ఠY()+ row*(h+gw/2))
      }
    } )
  } )
}



function ప్రదర్శన() {
  ఆది_స్థితి();
  // size = Math.min( గరిష్ఠX(), గరిష్ఠY()) * .9
  కుంచికను_దాచు();

  const tileHeight = 50
  const tileWidth = 50
  const mortarWidth = 1
  // const mortarColor = "#c0c0c0"
  const mortarColor = "#808080"
  const offset = .5
  cafeTiles( tileHeight, tileWidth, mortarWidth, mortarColor, offset);
}
