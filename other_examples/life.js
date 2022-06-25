// Life -- Conway\'s game of life
columns = 16
rows = 16


dotSize = 6
dotGap = 4
columnSize = 2 * dotSize + dotGap
rowSize = 2 * dotSize + dotGap
columnMid = columns/2 * columnSize
rowMid = rows/2 * rowSize


_సర్వత్ర_   grid = [ [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0]
]

_సర్వత్ర_   grid2 = Array( rows * columns)

_విధానము_     drawGrid( grid) {
  for (r=0; r < rows; r++) {
    for ( c=0; c < columns; c++) {
       //వ్రాయి( r + " " + c)
       స్థానము_మార్చు( c * columnSize - columnMid, r * rowSize - rowMid)
       if (grid [r][c]) {
         రంగు_మార్చు( "red")
       } else {
         రంగు_మార్చు( "lightpink")
       }
       నిండు_వృత్తము( dotSize)
    }
  }
}


_విధానము_     drawGrid2( grid, baseCaption) {
  for (r=0; r < rows; r++) {
    for ( c=0; c < columns; c++) {
       స్థానము_మార్చు( columnMid - c * columnSize , rowMid - r * rowSize)
       if (grid [r * columns + c]) {
         రంగు_మార్చు( "red")
       } else {
         రంగు_మార్చు( "lightgray")
       }
       నిండు_వృత్తము( dotSize)
    }
  }
  caption( baseCaption)
}


_విధానము_     loadPattern( pattern) {
  for (r=0; r < rows; r++) {
    mask = 0b1000000000000000
    for ( c=0; c < columns; c++) {
      grid [r][c] = pattern [r] & mask
      mask = mask >> 1 
    }
  }
}


_విధానము_     loadPattern2( pattern) {
  for (r=0; r < rows; r++) {
    mask = 0b00000000000000001
    for ( c=0; c < columns; c++) {
      if (pattern[ r] & mask) {
        grid [r * columns + c] = true
      } else {
        grid [r * columns + c] = false
      }
      mask = mask << 1 
    }
  }
}

_విధానము_     generation2( currentGrid) {
  _సర్వత్ర_   nextGrid = Array(rows*columns)
  for (r=0; r < rows; r++) {
    for ( c=0; c < columns; c++) {
      _సర్వత్ర_   cell = r * columns + c
      count = neighborCount2( currentGrid, cell)
      //console.log ("row:" + r + " col:" + c + " count:" + count)
      if (currentGrid[ cell]) { //alive
        if (count == 2 || count == 3) {
           nextGrid[ cell] = true
        } else {
           nextGrid[ cell] = false
        }
      } else { // vacant
        if ( count == 3) {
           nextGrid[ cell] = true
        } else {
           nextGrid[ cell] = false
        }
      }
    }
  }
  for (r=0; r < rows; r++) {
    for ( c=0; c < columns; c++) {
      cell = r * columns + c
      currentGrid [ cell] = nextGrid[ cell]
    }
  }
}



_విధానము_     neighborCount( grid, cell) {
  _సర్వత్ర_   r = cell / columns
  _సర్వత్ర_   c = cell % columns
  _సర్వత్ర_   count = 0
  if (r > 0) {
    if ( c>0 && grid[r-1, c-1]) {
      count = count + 1
    }
    if ( grid[r-1, c]) {
      count = count + 1
    }
    if ( c<columns-1 && grid[r-1, c+1]) {
      count = count + 1
    }
  }
  if ( c>0 && grid[r, c-1]) {
    count = count + 1
  }
  if ( c<columns-1 && grid[r, c+1]) {
    count = count + 1
  }
  if (r < rows-1) {
    if ( c>0 && grid[r+1, c-1]) {
      count = count + 1
    }
    if ( grid[r+1, c]) {
      count = count + 1
    }
    if ( c<columns-1 && grid[r+1, c+1]) {
      count = count + 1
    }
  }
  _ఫలము_  count
}


_విధానము_     neighborCount2( grid, cell) {
  _సర్వత్ర_   r = Math.floor(cell / columns)
  _సర్వత్ర_   c = cell % columns
  _సర్వత్ర_   count = 0
  if ( r>0) {
    if ( c>0 && grid[(r-1)*columns + c-1]) {
      count = count + 1
      //console.log("NW " + r + "," + c)
    }
    if ( grid[(r-1)*columns + c]) {
      count = count + 1
      //console.log("N " + r + "," + c)
    }
    if ( c<columns-1 && grid[(r-1)*columns + c+1]) {
      count = count + 1
      //console.log("NE " + r + "," + c)
    }
  }
  if ( c>0 && grid[r*columns + c-1]) {
    count = count + 1
    //console.log("W " + r + "," + c)
  }
  if ( c<columns-1 && grid[r*columns + c+1]) {
    count = count + 1
    //console.log("E " + r + "," + c)
  }
  if (r < rows-1) {
    if ( c>0 && grid[(r+1) * columns + c-1]) {
      count = count + 1
      //console.log("SW " + r + "," + c)
    }
    if ( grid[(r+1) * columns + c]) {
      count = count + 1
      //console.log("S " + r + "," + c)
    }
    if ( c<columns-1 && grid[(r+1) * columns + c+1]) {
      count = count + 1
      //console.log("SE " + r + "," + c)
    }
  }
  _ఫలము_  count
}

_సర్వత్ర_   past = [ Array( rows*columns).fill(false),
             Array( rows*columns).fill(false),
             Array( rows*columns).fill(false)
           ]
_సర్వత్ర_   numPast = past.length

_సర్వత్ర_   lastPast = 0
_సర్వత్ర_   oscillatingCount = 0
_సర్వత్ర_   oscillatingPast
_సర్వత్ర_   oscillatingDuration = 3 // how many oscillations are visible before stopping

_విధానము_     endTest (grid) {
  // _ఫలము_  true if stable or oscillating
  _సర్వత్ర_   stable = true
  _సర్వత్ర_   oscillating2 = true
  _సర్వత్ర_   oscillating3 = true
  _సర్వత్ర_   oscillating = false
  for (i = grid.length - 1; i>=0; i= i-1) {
    // is the pattern stable?
    if (grid[i] != past[lastPast] [i]) {
       stable = false
    }

    // is the pattern on period = 2?
    if (grid[i] != past[(lastPast + numPast -1) % numPast][i]) {
       oscillating2 = false
    }
    // is the pattern on period = 3?
    if (grid[i] != past[(lastPast + numPast -2) % numPast][i]) {
       oscillating3 = false
    }
    past[(lastPast+1) % numPast][i] = grid[i]
  }
  if (oscillating2 || oscillating3) {
    if (oscillatingCount == 0) { // first oscillation detected
      oscillatingCount = oscillatingDuration
      oscillatingPast = lastPast
    } else {
      if (lastPast == oscillatingPast) {
        oscillatingCount = oscillatingCount - 1
        if (oscillatingCount == 0) {
          oscillating = true
        }
      }
    }
  }
  lastPast = (lastPast+1) % numPast
  //console.log( "stable:" + stable + " oscil2:" + oscillating2 + " oscil3:" + oscillating3+ " lastPast:" + lastPast)
  _ఫలము_  ( stable || oscillating)
}


_విధానము_     caption (message) {
  // save your current position, heading, etc.
  _సర్వత్ర_   savedX = కుంచిక.స్థానము.x
  _సర్వత్ర_   savedY = కుంచిక.స్థానము.y
  _సర్వత్ర_   savedHeading = కుంచిక.కోణము / 2 / Math.PI * 360 //convert radians to degrees
  _సర్వత్ర_   savedColor = కుంచిక.రంగు
  _సర్వత్ర_   savedWidth = కుంచిక.వెడల్పు

  స్థానము_మార్చు(కనిష్ఠX()+10, కనిష్ఠY()+10)
  దిశ_మార్చు( 90)

  // erase what will be in the path
  అక్షరరూపము_స్థాపించు("bold 16px helvitica,sans-serif")
  రంగు_మార్చు( తెలుపు )
  వెడల్పు(22)
  ముందుకు_జరుగు(గరిష్ఠY() * 2 - 12)
  స్థానము_మార్చు(కనిష్ఠX()+10, కనిష్ఠY()+5)
  రంగు_మార్చు("నలుపు")
  వ్రాయి( message)

  //go back from whence you came
  స్థానము_మార్చు( savedX, savedY)
  దిశ_మార్చు( savedHeading)
  రంగు_మార్చు( savedColor)
  వెడల్పు(savedWidth)
}


// in the following patterns, the left most bit
// is taken to be the highest bit. There is one
// number per row (for up to 32 bits).
_సర్వత్ర_   trafficLight = [
  //5432109876543210
  0b0000000000000000, //00
  0b0000000000000000, //01
  0b0000000000000000, //02
  0b0000000000000000, //03
  0b0000000000000000, //04
  0b0000001110000000, //05
  0b0000000000000000, //06
  0b0000100000100000, //07
  0b0000100000100000, //08
  0b0000100000100000, //09
  0b0000000000000000, //10
  0b0000001110000000, //11
  0b0000000000000000, //12
  0b0000000000000000, //13
  0b0000000000000000, //14
  0b0000000000000000  //15
]

_సర్వత్ర_   greaterThan = [
  //5432109876543210
  0b1000000000000000, //00
  0b0100000000000000, //01
  0b0010000000000000, //02
  0b0001000000000000, //03
  0b0000100000000000, //04
  0b0000010000000000, //05
  0b0000001000000000, //06
  0b0000000100000000, //07
  0b0000000100000000, //08
  0b0000001000000000, //09
  0b0000010000000000, //10
  0b0000100000000000, //11
  0b0001000000000000, //12
  0b0010000000000000, //13
  0b0100000000000000, //14
  0b1000000000000000  //15
]


_సర్వత్ర_   pulsar = [
  //5432109876543210
  0b0000000000000000, //00
  0b0000000000000000, //01
  0b0000111000111000, //02
  0b0000000000000000, //03
  0b0010000101000010, //04
  0b0010000101000010, //05
  0b0010000101000010, //06
  0b0000111000111000, //07
  0b0000000000000000, //08
  0b0000111000111000, //09
  0b0010000101000010, //10
  0b0010000101000010, //11
  0b0010000101000010, //12
  0b0000000000000000, //13
  0b0000111000111000, //14
  0b0000000000000000  //15
]


_సర్వత్ర_   glider = [
  //5432109876543210
  0b0000000000000000, //00
  0b0000000000000000, //01
  0b0000000000000000, //02
  0b0000000000000000, //03
  0b0000000000000000, //04
  0b0000000000000000, //05
  0b0000000000000000, //06
  0b0000000000000000, //07
  0b0000000000000000, //08
  0b0000000000000000, //09
  0b0000000000000000, //10
  0b0000000000000000, //11
  0b0000000000000000, //12
  0b1110000000000000, //13
  0b0010000000000000, //14
  0b0100000000000000  //15
]


_సర్వత్ర_   glider2 = [
  //5432109876543210
  0b0100000000000010, //00
  0b0010000000000100, //01
  0b1110000000000111, //02
  0b0000000000000000, //03
  0b0000000000000000, //04
  0b0000000000000000, //05
  0b0000000000000000, //06
  0b0000000000000000, //07
  0b0000000000000000, //08
  0b0000000000000000, //09
  0b0000000000000000, //10
  0b0000000000000000, //11
  0b0000000000000000, //12
  0b1110000000000111, //13
  0b0010000000000100, //14
  0b0100000000000010  //15
]


_సర్వత్ర_   lwss = [ // light weight space ship
  //5432109876543210
  0b0000000000000000, //00
  0b0000000000000000, //01
  0b0000000000000000, //02
  0b0000000000000000, //03
  0b0000000000000000, //04
  0b0111100000000000, //05
  0b1000100000000000, //06
  0b0000100000000000, //07
  0b1001000000000000, //08
  0b0000000000000000, //09
  0b0000000000000000, //10
  0b0000000000000000, //11
  0b0000000000000000, //12
  0b0000000000000000, //13
  0b0000000000000000, //14
  0b0000000000000000  //15
]


_సర్వత్ర_   lwss2 = [ // light weight space ship
  //5432109876543210
  0b1010000000001001, //00
  0b0001000000010000, //01
  0b0001000000010001, //02
  0b1001000000011110, //03
  0b0111000000000000, //04
  0b0000000000000000, //05
  0b0000000000000000, //06
  0b0000000000000000, //07
  0b0000000000000000, //08
  0b0000000000000000, //09
  0b0000000000000000, //10
  0b0000000000001110, //11
  0b0111100000001001, //12
  0b1000100000001000, //13
  0b0000100000001000, //14
  0b1001000000000101, //15
]

_సర్వత్ర_   beacons = [
  //5432109876543210
  0b0000000000000000, //00
  0b0000000000000000, //00
  0b0000000000000000, //00
  0b0001100000110000, //01
  0b0001100000110000, //02
  0b0000011011000000, //03
  0b0000011011000000, //04
  0b0000000000000000, //05
  0b0000011011000000, //06
  0b0000011011000000, //07
  0b0001100000110000, //08
  0b0001100000110000, //09
  0b0000000000000000, //12
  0b0000000000000000, //13
  0b0000000000000000, //14
  0b0000000000000000  //15
]


_సర్వత్ర_   pentathalon = [
  //5432109876543210
  0b0000000010000000, //00
  0b0000000010000000, //01
  0b0000000111000000, //02
  0b0000000000000000, //03
  0b0000000000000000, //04
  0b0000000111000000, //05
  0b0000000010000000, //06
  0b0000000010000000, //07
  0b0000000010000000, //08
  0b0000000010000000, //09
  0b0000000111000000, //10
  0b0000000000000000, //11
  0b0000000000000000, //12
  0b0000000111000000, //13
  0b0000000010000000, //14
  0b0000000010000000  //15
]


_సర్వత్ర_   mwss = [
  //5432109876543210
  0b0000000000000000, //00
  0b0000000000000000, //01
  0b0000000000000000, //02
  0b0000000000000000, //03
  0b0000000000000000, //04
  0b0000100000000000, //05
  0b0010001000000000, //06
  0b0000000100000000, //07
  0b0010000100000000, //08
  0b0001111100000000, //09
  0b0000000000000000, //10
  0b0000000000000000, //11
  0b0000000000000000, //12
  0b0000000000000000, //13
  0b0000000000000000, //14
  0b0000000000000000  //15
]


_సర్వత్ర_   hwss = [
  //5432109876543210
  0b0000000000000000, //00
  0b0000000000000000, //01
  0b0000000000000000, //02
  0b0000000000000000, //03
  0b0000000000000000, //04
  0b0000110000000000, //05
  0b0010000100000000, //06
  0b0000000010000000, //07
  0b0010000010000000, //08
  0b0001111110000000, //09
  0b0000000000000000, //10
  0b0000000000000000, //11
  0b0000000000000000, //12
  0b0000000000000000, //13
  0b0000000000000000, //14
  0b0000000000000000  //15
]


_సర్వత్ర_   oscillator14 = [
  //5432109876543210
  0b0000000000000000, //00
  0b0000000000000000, //01
  0b0000000011100000, //02
  0b0000000111100000, //03
  0b1100001100011110, //04
  0b1100011001101110, //05
  0b0000000111100000, //06
  0b0000000000000000, //07
  0b0000000000000000, //08
  0b0000000000000000, //09
  0b0000000111100000, //10
  0b1100011001101110, //11
  0b1100001100011110, //12
  0b0000000111100000, //13
  0b0000000011100000, //14
  0b0000000000000000, //15
]


_సర్వత్ర_   tumbler = [
  //5432109876543210
  0b0000000000000000, //00
  0b0000000000000000, //01
  0b0000000000000000, //02
  0b0000000000000000, //03
  0b0000001000100000, //04
  0b0000001101100000, //05
  0b0000000101000000, //06
  0b0000010101010000, //07
  0b0000011000110000, //08
  0b0000001000100000, //09
  0b0000000000000000, //10
  0b0000000000000000, //11
  0b0000000000000000, //12
  0b0000000000000000, //13
  0b0000000000000000, //14
  0b0000000000000000  //15
]


_సర్వత్ర_   unix = [ // period 6 oscillator
  //5432109876543210
  0b0000000000000000, //00
  0b0000000000000000, //01
  0b0000000000000000, //02
  0b0000011000000000, //03
  0b0000011000000000, //04
  0b0000000000000000, //05
  0b0000000000000000, //06
  0b0000111000000000, //07
  0b0000110100110000, //08
  0b0000001100110000, //09
  0b0000001100000000, //10
  0b0000000000000000, //11
  0b0000000000000000, //12
  0b0000000000000000, //13
  0b0000000000000000, //14
  0b0000000000000000  //15
]



_సర్వత్ర_   greatOnOff = [
  //5432109876543210
  0b0000000000000000, //00
  0b0000000000000000, //01
  0b0000011000000000, //02
  0b0000100100000000, //03
  0b0000101100000000, //04
  0b0001101011000000, //05
  0b0000000110100000, //06
  0b0000000000100000, //07
  0b0000000111000000, //08
  0b0000000100000000, //09
  0b0000000000000000, //10
  0b0000000000000000, //11
  0b0000000000000000, //12
  0b0000000000000000, //13
  0b0000000000000000, //14
  0b0000000000000000  //15
]


_సర్వత్ర_   birther = [
  //5432109876543210
  0b0000000000000000, //00
  0b1100000000000000, //01
  0b1100000000000000, //02
  0b0000000000000000, //03
  0b0000000000000000, //04
  0b0001000000000000, //05
  0b1111100000000000, //06
  0b0000010000000000, //07
  0b0001100000000000, //08
  0b0011000000000000, //09
  0b0100000000000000, //10
  0b0000000000000000, //11
  0b0000000000000000, //12
  0b0000000000000000, //13
  0b0000000000000000, //14
  0b0000000000000000  //15
]


_సర్వత్ర_   blank = [
  //5432109876543210
  0b0000000000000000, //00
  0b0000000000000000, //01
  0b0000000000000000, //02
  0b0000000000000000, //03
  0b0000000000000000, //04
  0b0000000000000000, //05
  0b0000000000000000, //06
  0b0000000000000000, //07
  0b0000000000000000, //08
  0b0000000000000000, //09
  0b0000000000000000, //10
  0b0000000000000000, //11
  0b0000000000000000, //12
  0b0000000000000000, //13
  0b0000000000000000, //14
  0b0000000000000000  //15
]


_సర్వత్ర_   gen
_సర్వత్ర_   numDemos = 16
_సర్వత్ర_   demoNumber

_విధానము_     ప్రదర్శన() {
  ఆది_స్థితి()
  కుంచికను_దాచు()
  demoNumber = 0
  gen = 10000000
  nextGen()
}

_విధానము_     nextGen() {
  gen = gen + 1
  if (gen < 100 && !endTest(grid)) {
    generation2( grid)
    drawGrid2( grid, baseCaption + " " + gen)
    delay (nextGen, 100)
  } else {
    switch (demoNumber) {
    case 0:
      loadPattern2(birther)
      baseCaption = "Birther"
      break
    case 15:
      loadPattern2(greatOnOff)
      baseCaption = "Great On/Off"
      break
    case 14:
      loadPattern2(unix)
      baseCaption = "Unix"
      break
    case 13:
      loadPattern2(tumbler)
      baseCaption = "Tumbler"
      break
    case 12:
      loadPattern2(oscillator14)
      baseCaption = "Oscillator 14"
      break
    case 11:
      loadPattern2(hwss)
      baseCaption = "Heavy Weight Space Ship"
      break
    case 10:
      loadPattern2(mwss)
      baseCaption = "Medium Weight Space Ship"
      break
    case 9:
      loadPattern2(trafficLight)
      baseCaption = "Traffic Light"
      break
    case 1:
      loadPattern2(beacons)
      baseCaption = "Beacons"
      break
    case 2:
      loadPattern2(glider)
      baseCaption = "Glider"
      break
    case 3:
      loadPattern2(glider2)
      baseCaption = "Glider Collision"
      break
    case 4:
      loadPattern2(lwss)
      baseCaption = "Light Weight Space Ship"
      break
    case 5:
      loadPattern2(lwss2)
      baseCaption = "Light Weight Space Ship 2"
      break
    case 6:
      loadPattern2(pulsar)
      baseCaption = "Pulsar"
      break
    case 7:
      loadPattern2(greaterThan)
      baseCaption = "Greater Than"
      break
    case 8:
      loadPattern2(pentathalon)
      baseCaption = "Pentathalon"
      break
    default:
      loadPattern2(greaterThan)
      baseCaption = "Greater Than"
      break
    }
    demoNumber = (demoNumber +1) % numDemos
    gen = 0
    drawGrid2( grid, baseCaption + " " + gen)
    delay (nextGen, 500)
  }
}
