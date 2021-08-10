// Wang Tiles -- progressively tile the canvas with Wang Tiles


//****CONFIGURATION****

side = 30
margin = 10


//****CONSTANTS****

N = 0
E = 1
S = 2
W = 3


_సర్వత్ర_   TILES = [ // original 13
  "GGBR",
  "GBGR",
  "GBBG",
  "RRGG",
  "RRBB",
  "RGGB",
  "YYRY",
  "BYGY",
  "GKRY",
  "GKYY",
  "YKRK",
  "BKGK",
  "GYGK"
];


/*
_సర్వత్ర_   TILES = [ // new 11
  "RRRY",
  "BRBY",
  "RYYY",
  "WBRB",
  "BBWB",
  "WWRW",
  "RYBW",
  "BWBR",
  "BRWR",
  "YYBR",
  "RWRY",
];
*/


_సర్వత్ర_   COLORS = { // original colors
  "R": "red",
  "G": "green",
  "B": "blue",
  "Y": "yellow",
  "K": "బూడిద",
  "W": "white"
};


/*
_సర్వత్ర_   COLORS = { // for red-green color blind
  "R": "red",
  "G": "lightgreen",
  "B": "blue",
  "Y": "yellow",
  "K": "skyblue"
  "W": "white"
};
*/


//****GLOBALS****

_సర్వత్ర_   tiles; // global array of tile objects
_సర్వత్ర_   currentTile; // current tile to be considered
_సర్వత్ర_   hHumber; // number of tiles horizontally
_సర్వత్ర_   vHumber; // number of tiles vertically


//****FUNCTIONS****

_విధానము_     drawTriangle (fill) {
  // draw triangle in place
  ఆకారము_ప్రారంభించు()
  ముందుకు_జరుగు( side)
  కుడి_వైపు_తిరుగు( 135)
  ముందుకు_జరుగు( side/Math.sqrt(2))
  కుడి_వైపు_తిరుగు( 90)
  ముందుకు_జరుగు( side/Math.sqrt(2))
  ఆకారము_ముగించు( fill)
  కుడి_వైపు_తిరుగు( 135)
}


_విధానము_     drawTile (x, y, tile) {
  స్థానము_మార్చు(x,y)
  కోణము(90)
  drawTriangle( COLORS[ TILES[tile][N]])
  ముందుకు_జరుగు( side)
  కుడి_వైపు_తిరుగు( 90)
  drawTriangle( COLORS[ TILES[tile][E]])
  ముందుకు_జరుగు( side)
  కుడి_వైపు_తిరుగు( 90)
  drawTriangle( COLORS[ TILES[tile][S]])
  ముందుకు_జరుగు( side)
  కుడి_వైపు_తిరుగు( 90)
  drawTriangle( COLORS[ TILES[tile][W]])
  ముందుకు_జరుగు( side)
  కుడి_వైపు_తిరుగు( 90)
}


_విధానము_     north(tx, ty) { // get tile north of given coordinate
  _సర్వత్ర_   possibles = tiles[ty-1][tx].possibles
  _సర్వత్ర_   nTile = possibles[tiles[ty-1][tx].posIndex]
  console.log("north",tx,ty, nTile)
  _ఫలము_  nTile
}


_విధానము_     west(tx, ty) { // get tile west of given coordinate
  _సర్వత్ర_   possibles = tiles[ty][tx-1].possibles
  _సర్వత్ర_   wTile = possibles[tiles[ty][tx-1].posIndex]
  console.log("west",tx,ty, wTile)
  _ఫలము_  wTile
}


class Tile {
  constructor (x, y, prev) {
    //tile coordinates
    this.tx = x
    this.ty = y
    //tile possibles
    this.possibles = []
    this.posIndex = undefined // index of possibles
    // tile links
    this.prev = prev
    this.next = undefined
  }

  findPossibles() {
    /*
     * find the possible tiles for a new tile
     * this may backtrack to previous tiles to find an alive tiling
     * returns true if the tiling is alive
     */

    console.log("fP", this.tx, this.ty)
    this.possibles = []
    if (this.tx == 0 && this.ty == 0) {
      console.log ("fP new")
      this.possibles = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

    } else if (this.ty == 0) {
      console.log ("fP first row")
      _సర్వత్ర_   w = TILES[west(this.tx, this.ty)][E]
      for (_సర్వత్ర_   i = 0; i<TILES.length; i++) {
        console.log("fP",w , TILES[i][W])
        if (TILES[i][W] == w){
           console.log("fP push", i)
           this.possibles.push(i)
        }
      }

    } else if (this.tx == 0){
      console.log ("fP new row")
      _సర్వత్ర_   n = TILES[north(this.tx, this.ty)][S]
      for (_సర్వత్ర_   i = 0; i<TILES.length; i++) {
        if (TILES[i][N] == n){
          this.possibles.push(i)
        }
      }

    } else {
      console.log ("fP in row")
      _సర్వత్ర_   w = TILES[west(this.tx, this.ty)][E]
      _సర్వత్ర_   n = TILES[north(this.tx, this.ty)][S]
      for (_సర్వత్ర_   i = 0; i<TILES.length; i++) {
        if (TILES[i][W] == w && TILES[i][N] == n){
          this.possibles.push(i)
        }
      }
    }

    if (this.possibles.length > 0) { // ready to plot
      //randomize order of possibles
      _సర్వత్ర_   possibles = []
      while (this.possibles.length > 0) {
        possibles.push(
            this.possibles.splice( 
                Math.random() * this.possibles.length, 1)[0]
        )
      }
      this.possibles = possibles
      this.posIndex = 0
      console.log("fP-",this.tx, this.ty, this.possibles, this.posIndex)
      _ఫలము_  (true)

    } else { // blocked, need to backtrack
      this.possibles = []
      this.posIndex = undefined
      this.plotBlank()
      if (this.tx != 0 || this.ty != 0) {
        _ఫలము_ ( this.prev.backtrack())
      } else { // truly blocked
        _ఫలము_ ( false)
      }
    }
  }


  backtrack() {
    /*
     * use the next possible of the current cell or backtrack again
     */

    console.log("bt:", this.tx, this.ty, this.possibles, this.posIndex)
    currentTile = this
    if (this.posIndex != undefined && this.posIndex + 1 < this.possibles.length) {
      // ready to plot
      this.posIndex = this.posIndex + 1
      _ఫలము_ ( true)

    } else { // backtrack again
      this.possibles = []
      this.posIndex = undefined
      this.plotBlank()
      if (this.tx != 0 || this.ty != 0) {
        _ఫలము_ ( this.prev.backtrack())
      } else { // truly blocked
        _ఫలము_ ( false)
      }
    }
  }


  plot() {
    if (this.posIndex != undefined && this.posIndex < this.possibles.length) {
      _సర్వత్ర_   tile = this.possibles[this.posIndex]
      console.log("plot", this.tx, this.ty, this.posIndex, tile)
      drawTile (కనిష్ఠX()+margin + this.tx * side * 1,
                గరిష్ఠY()-margin - this.ty * side * 1,
                tile)
    } else {
      console.log( "***Plot Error")
    }
  }


  plotBlank() {
    console.log("plotblank", this.tx, this.ty)
    రంగు_మార్చు( "white")
    స్థానము_మార్చు( కనిష్ఠX()+margin + this.tx * side * 1,
          గరిష్ఠY()-margin - this.ty * side * 1)
    కోణము(90)
    ఆకారము_ప్రారంభించు()
    ముందుకు_జరుగు( side)
    కుడి_వైపు_తిరుగు( 90)
    ముందుకు_జరుగు( side)
    కుడి_వైపు_తిరుగు( 90)
    ముందుకు_జరుగు( side)
    కుడి_వైపు_తిరుగు( 90)
    ముందుకు_జరుగు( side)
    కుడి_వైపు_తిరుగు( 90)
    ఆకారము_ముగించు("lightblue")
    రంగు_మార్చు("నలుపు")
  }
}


_విధానము_     delayedBuild () {
  కుంచికను_దాచు()
  if (currentTile.findPossibles()) { // currentTile may change here
    currentTile.plot()
    if( (currentTile.tx != hNumber-1) ||
        (currentTile.ty != vNumber-1)) {
      currentTile = currentTile.next
      విలంబించు( delayedBuild, 0)
    }
  }
}


//****MAIN****

_విధానము_     ప్రదర్శన() {
  ఆది_స్థితి()
  //కుంచికను_దాచు()
  tiles = []
  // build a logical array of tiles
  hNumber = Math.floor((గరిష్ఠX()*2 - margin * 2) / side)
  vNumber = Math.floor((గరిష్ఠY()*2 - margin * 2) / side)
  //hNumber = 8
  //vNumber = 8
  _సర్వత్ర_   prev = undefined
  for (_సర్వత్ర_   r=0; r< vNumber; r++) {
    tiles.push([]) //append row  
    //వ్రాయి(tiles[0]) 
    for (_సర్వత్ర_   c=0; c< hNumber; c++) {
      _సర్వత్ర_   tile = new Tile (c, r, prev)
      tiles[r].push(tile) //append tile
      if (prev != undefined){
         prev.next = tile
      }
      prev = tile
    }
  }
  console.log("array is built")
  currentTile = tiles[0][0]
  delayedBuild()
}
