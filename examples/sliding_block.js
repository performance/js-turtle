// Sliding Block Puzzle -- animated solution to Square Root sliding block puzzle
// details of the moves are on the console.log

var side
var baseX
var baseY
var count

var e = "e"
var w = "w"
var n = "n"
var s = "s"
var ee = "ee"
var ww = "ww"
var nn = "nn"
var ss = "ss"
var ne = "ne"
var nw = "nw"
var se = "se"
var sw = "sw"
var en = "en"
var es = "es"
var wn = "wn"
var ws = "ws"

/* valid moves for blocks
 * all tests include bounds test
 * 1x1
 *   if x-1 is free: w
 *   if x-1 and x-2 is free: ww
 *   if x-1 and y-1 is free: wn
 *   if x-1 and y+1 is free: ws
 *   if x+1 is free: e
 *   if x+1 and x+2 is free: ee
 *   if x+1 and y-1 is free: en
 *   if x+1 and y+1 is free: es
 *   if y-1 is free: n
 *   if y-1 and y-2 is free: nn
 *   if y-1 and x-1 is free: nw
 *   if y-1 and x+1 is free: ne
 *   if y+1 is free: s
 *   if y+1 and y+2 is free: ss
 *   if y+1 and x-1 is free: sw
 *   if y+1 and x+1 is free: se
 * 1x2
 *   if x-1 and x-1,y+1 is free: w
 *   if x+1 and x+1,y+1 is free: e
 *   if y+2 is free: s
 *   if y+2 and y+3 is free: ss
 *   if y-1 is free: n
 *   if y-1 and y-2 is free: nn
 * 2x1
 *   if x-1 is free: w
 *   if x-1 and x-2 is free: ww
 *   if x+2 is free: e
 *   if x+2 and x+3 is free: ee
 *   if y+1 and x+1,y+1 is free: s
 *   if y-1 and x+1,y-1 is free: n
 * 2x2
 *   if x-1 and x-1,y+1 is free: w
 *   if x+2 and x+2,y+1 is free: e
 *   if y+2 and x+1,y+2 is free: s
 *   if y-1 and x+1,y-1 is free: n
*/
blocks = [ {h:1, v:2, x:0, y:0},
           {h:2, v:2, x:1, y:0},
           {h:1, v:2, x:3, y:0},
           {h:2, v:1, x:0, y:2},
           {h:1, v:1, x:0, y:3},
           {h:1, v:1, x:0, y:4},
           {h:1, v:2, x:1, y:3},
           {h:1, v:2, x:2, y:3},
           {h:1, v:1, x:3, y:3},
           {h:1, v:1, x:3, y:4} ]

function init () {
  side = .9 * 2* Math.min(maxX()/4, maxY()/5)
  baseX = -2 * side
  baseY = 2.5 * side
  count = 0
}

function drawBlock( h, v, x, y, n) {
  //console.log("DB" + " " + h + " " + v + " " + x + " " + y)
  // draw a block
  color ("black")
  beginShape()
  goto (baseX + x * side, baseY - y * side)
  setHeading(90)
  ముందుకు_జరుగు( h * side)
  కుడి_వైపు_తిరుగు( 90)
  ముందుకు_జరుగు( v * side)
  కుడి_వైపు_తిరుగు( 90)
  ముందుకు_జరుగు( h * side)
  కుడి_వైపు_తిరుగు( 90)
  ముందుకు_జరుగు( v * side)
  కుడి_వైపు_తిరుగు( 90)
  fillShape("tan")

  goto (baseX + (x + .5)*side, baseY -(y+.5) *side)
  write(n)
}


function moveBlock (blockIndex, x, y) {
  blocks[ blockIndex].x = x
  blocks[ blockIndex].y = y
  count = count + 1
}


function drag( blockIndex, dir) {
  //dir is a string of e, w, n, s
  var x = 0
  var y = 0
  for (ch in dir) {
    if (dir[ch] == "w") {
      x = x - 1
    } else if (dir[ch] == "e") {
      x = x + 1
    } else if (dir[ch] == "s") {
      y = y + 1
    } else if (dir[ch] == "n") {
      y = y - 1
    }

    //console.log(dir[ch] + " " + x + "," + y)
  }
  blocks[ blockIndex].x = blocks[ blockIndex].x + x
  blocks[ blockIndex].y = blocks[ blockIndex].y + y
  count = count + 1
}

function drawBlocks () {
  for (var block in blocks) {
    //console.log("dBs: " + block)
    drawBlock( blocks[ block].h, blocks[block].v, blocks[block].x, blocks[block].y, block)
  }
}



var free = []

function findFree() {
  // find the free spaces in the puzzle
  var x,y, v, h, block, overlap, freeList

free = [[undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined]]

  // mark the in use spaces
  overlap = false
  for (block in blocks) {
    x = blocks[block].x
    y = blocks[block].y
    v = blocks[block].v
    h = blocks[block].h
    //console.log( "X:"+x + " Y:"+y + " free:" + free[x][y])
    if (free[x][y] == undefined) {
      //console.log("unfreeing 00: " + x + " " + y + " " + block)
      free[x][y] = block
      // check for 2x1 or 2x2
      if (h == 2) {
        if (free[x+1][y] == undefined) {
      //console.log("unfreeing 10: " + x + " " + y + " " + block)
          free[x+1][y] = block
        } else {
          overlap = true
        }
      }
      // check for 1x2 or 2x2
      if (v == 2) {
        if (free[x][y+1] == undefined) {
      //console.log("unfreeing 01: " + x + " " + y + " " + block)
          free[x][y+1] = block
        } else {
          overlap = true
        }
      }
      // check for 2x2 specifically
      if (h == 2 && v == 2) {
        if (free[x+1][y+1] == undefined) {
      //console.log("unfreeing 11: " + x + " " + y + " " + block)
          free[x+1][y+1] = block
        } else {
          overlap = true
        }
      }
    } else {
      overlap = true
    }
    if (overlap) {
      console.log( "Block " + block + " is overlapping")
    }
  }

  // find the free spaces
  freeList = []
  for( y=0; y<5; y = y+1) { 
    for( x=0; x<4; x = x+1) {
      //console.log( "X:"+x + " Y:"+y + " Block:" + free[x][y])
      if (free[x][y] == undefined) { //free
        //freeList.push([x,y])
        //freeList.push({"x":x,"y":y})
        freeList.push(([x,y]))
      }
    }
  }
  if (freeList.length != 2) {
    console.log( "FreeList has wrong number of members: " + freeList.length)
  }
  //console.log( "FreeList:  " + freeList)
  //console.log( "FreeList0:  " + freeList[0])
  var freeStr = ""
  var lead = ""
  var freemember
  for (freemember in freeList) {
    freeStr = freeStr + lead + "[" +  freeList[freemember] + "]"
    lead = ","
  }

  // log the blocks
  var logStr
  for( y=0; y<5; y = y+1) { 
    logStr = y + ":"
    for( x=0; x<4; x = x+1) {
      if (free[x][y] == undefined) {
        logStr = logStr + " "
      } else {
        logStr = logStr + free[x][y]
      }
    }
    console.log( logStr)
  }
  console.log( "  FreeList: "+ freeStr)
}

var moveList = []

function checkMove( block, direction) {
  var found = false
  var index
  //if move is not on moveList
  for (index in moveList) {
    if (moveList[index][0] == block && moveList[index][1].localeCompare(direction)==0) {
      found = true
    }
  }
  if (!found) {
    console.log( "   ***Move is not on moveList***")
  }
}
 

function checkLastMove( block, direction) {
  // check that the moveList includes the reciprocal of the last move
  var index
  var directions = direction.split("")
  var ripString = ""
  var found = false
  for (index in directions) {
    if (directions[index] == "e") { ripString = "w" + ripString } 
    if (directions[index] == "w") { ripString = "e" + ripString } 
    if (directions[index] == "n") { ripString = "s" + ripString } 
    if (directions[index] == "s") { ripString = "n" + ripString }
  }
  for (index in moveList) {
    if (moveList[index][0] == block && moveList[index][1] == ripString) {
      found = true
    }
  }
  if (!found) {
    console.log( "   ***Reciprocal move to "+ block+direction + " is not on moveList***")
  }
}

function findMoves() {
  // find the free spaces in the puzzle
  var x, y, v, h, block

  moveList = []

  for (block in blocks) {
    x = blocks[block].x
    y = blocks[block].y
    v = blocks[block].v //vertical size
    h = blocks[block].h //horizontal size

    if (v == 1) {
      if (x>=1 && free[x-1][y] == undefined) {
        moveList.push([block,"w"])
        if (x>=2 && free[x-2][y] == undefined) {
            moveList.push([block,"ww"])
        } else if (h==1) {
          if ( y>=1 && free[x-1][y-1] == undefined) {
            moveList.push([block,"wn"])
          } else if (y<=3 && free[x-1][y+1] == undefined) {
            moveList.push([block,"ws"])
          }
        }
      }
      if (x+h<=3 && free[x+h][y] == undefined) {
        moveList.push([block,"e"])
        if (x+h+1<=3 && free[x+h+1][y] == undefined) {
            moveList.push([block,"ee"])
        } else if (h == 1) {
          if (y>=1 && x<=2 && free[x+1][y-1] == undefined) {
            moveList.push([block,"en"])
          } else if (y<=3 && x<=2 && free[x+1][y+1] == undefined) {
            moveList.push([block,"es"])
          }
        }
      }
    }

    if (h == 1) {
      if (y>=1 && free[x][y-1] == undefined) {
        moveList.push([block,"n"])
        if (y>=2 && free[x][y-2] == undefined) {
            moveList.push([block,"nn"])
        }
        if (v == 1) {
          if (x>=1 && free[x-1][y-1] == undefined) {
            moveList.push([block,"nw"])
          } else if (x<=2 && free[x+1][y-1] == undefined) {
            moveList.push([block,"ne"])
          }
        }
      }
      if (y+v<=4 && free[x][y+v] == undefined) {
        moveList.push([block,"s"])
        if (y+v+1<=4 && free[x][y+v+1] == undefined) {
            moveList.push([block,"ss"])
        }
        if (v == 1) {
          if (x>=1 && free[x-1][y+1] == undefined) {
            moveList.push([block,"sw"])
          } else if (x<=2 && free[x+1][y+1] == undefined) {
            moveList.push([block,"se"])
          }
        }
      }
    }

    if (v == 2) {
      if (x>=1 && free[x-1][y] == undefined && free[x-1][y+1] == undefined ) {
        moveList.push([block,"w"])
      } else if (x<=2 && free[x+h][y] == undefined && free[x+h][y+1] == undefined) {
        moveList.push([block,"e"])
      }
    }

    if (h == 2) {
      if (y>=1 && free[x][y-1] == undefined && free[x+1][y-1] == undefined) {
        moveList.push([block,"n"])
      } else if (y+v<=4 && free[x][y+v] == undefined && free[x+1][y+v] == undefined) {
        moveList.push([block,"s"])
      }
    }
  }

  //console.log("Moves: " + moveList)
  var moveStr = ""
  var lead = ""
  var index
  var possibleMoveCount = 0
  for (index in moveList) {
    moveStr = moveStr + lead +  moveList[index][0] +  moveList[index][1] 
    if ( lastMove[0] == moveList[index][0]) { // tag reciprocal moves
      moveStr = moveStr + "*"
    } else {
      possibleMoveCount = possibleMoveCount + 1
    }
    lead = ", "
  }
  console.log( "  Moves: "+ moveStr)
  if (possibleMoveCount < 1) {
    console.log ("   ***There are not enough moves***")
  }
}


/* valid moves for blocks
 * all tests include bounds test
 * 1x1 -
 *   if x-1 is free: w
 *   if x-1 and x-2 is free: ww
 *   if x-1 and y-1 is free: wn
 *   if x-1 and y+1 is free: ws
 *   if x+1 is free: e
 *   if x+1 and x+2 is free: ee
 *   if x+1 and y-1 is free: en
 *   if x+1 and y+1 is free: es
 *   if y-1 is free: n
 *   if y-1 and y-2 is free: nn
 *   if y-1 and x-1 is free: nw
 *   if y-1 and x+1 is free: ne
 *   if y+1 is free: s
 *   if y+1 and y+2 is free: ss
 *   if y+1 and x-1 is free: sw
 *   if y+1 and x+1 is free: se
 * 1x2 |
 *   if x-1 and x-1,y+1 is free: w
 *   if x+1 and x+1,y+1 is free: e
 *   if y+2 is free: s
 *   if y+2 and y+3 is free: ss
 *   if y-1 is free: n
 *   if y-1 and y-2 is free: nn
 * 2x1 --
 *   if x-1 is free: w
 *   if x-1 and x-2 is free: ww
 *   if x+2 is free: e
 *   if x+2 and x+3 is free: ee
 *   if y+1 and x+1,y+1 is free: s
 *   if y-1 and x+1,y-1 is free: n
 * 2x2 ==
 *   if x-1 and x-1,y+1 is free: w
 *   if x+2 and x+2,y+1 is free: e
 *   if y+2 and x+1,y+2 is free: s
 *   if y-1 and x+1,y-1 is free: n
*/


function getState() {
  //returns a value that is the state of the puzzle
  //each piece is located with a 2-bit x and 3-bit y
  //1x2 and 1x1 pieces are deternined by left to right and top to bottom order
	// this allows the same state for exchanged pieces
  var blockPos = [undefined, undefined, undefined,
	          undefined, undefined, undefined,
	          undefined, undefined, undefined]
  var blockSeen = [ false, false, false, false, false,
                    false, false, false, false]
  var blockMap1x2 = 2 
  var blockMap1x1 = 6 
  var blockNum

  for( y=0; y<5; y = y+1) { 
    for( x=0; x<4; x = x+1) {
      blockNum = free[x][y]
      if (blockNum != undefined && !blockSeen[ blockNum] ) { // first sight of block
        blockSeen[ blockNum] = true
	if (blockNum == 1 ) { // 2x2
	  blockPos[ 0 ] = [x,y]
	} else if (blockNum == 3 ) { // 2x1
	  blockPos[ 1 ] = [x,y]
	} else if (blockNum == 0 || blockNum == 2 || blockNum == 6 || blockNum == 7) { // 1x2
	  blockPos[ blockMap1x2] = [x,y]
	  blockMap1x2 = blockMap1x2 + 1
        } else if (blockNum == 4 || blockNum == 5 || blockNum == 8 || blockNum == 9) { // 1x1
	  blockPos[ blockMap1x1] = [x,y]
	  blockMap1x1 = blockMap1x1 + 1
	}
      }
    }
  }

  // wanted to do bit arithmetic, but that limit is 32 bits and need 50
  // uses 2 bits for x and 3 bits for y for each of 10 blocks = 50 bits
  // 5 bits is 2**5 = 32
  // putting the most stable blocks at high end of state number
  var state = 0
  for (blockNum = 0; blockNum <10; blockNum = blockNum + 1) {
    console.log ("state blockNum:" + blockNum + " pos:" + blockPos[ blockNum] + " state:" + state + " " + (blockPos[blockNum][0] + (blockPos[blockNum][1]*4)) * 32**( 9 - blockNum) + " " + (blockPos[blockNum][0] + (blockPos[blockNum][1]*4)) )
    state = state + ((blockPos[blockNum][0] + (blockPos[blockNum][1]*4)) * 32**( 9 - blockNum))
  }
  if ( blockMap1x2 != 6  | blockMap1x1 != 10) {
    console.log( "   ***State Processing Error***" + blockMap1x2 + " " + blockMap1x1)
  }
  return state
}


function demo1() {
  reset()
  init()
  console.log("demo: " + blocks[0])
  console.log("demo: " + blocks)
  //drawBlocks()
  moveBlock( 3, 2, 2)
  moveBlock( 4, 1, 2)
  moveBlock( 5, 0, 2)
  moveBlock( 6, 0, 3)
  moveBlock( 7, 1, 3)
  moveBlock( 8, 2, 4)
  moveBlock( 3, 2, 3)
  moveBlock( 4, 3, 2)
  moveBlock( 5, 2, 2)
  moveBlock( 6, 0, 2)
  moveBlock( 7, 1, 2)
  moveBlock( 8, 0, 4)
  moveBlock( 9, 1, 4)
  moveBlock( 3, 2, 4)
  moveBlock( 5, 3, 3)
  moveBlock( 7, 2, 2)
  moveBlock( 6, 1, 2)
  moveBlock( 0, 0, 2)
  moveBlock( 1, 0, 0)
  moveBlock( 2, 2, 0)
  moveBlock( 4, 3, 0)
  moveBlock( 5, 3, 1)
  moveBlock( 7, 3, 2)
  moveBlock( 2, 2, 2)
  moveBlock( 4, 2, 0)
  moveBlock( 5, 2, 1)
  moveBlock( 7, 3, 0)
  moveBlock( 2, 3, 2)
  moveBlock( 5, 2, 3)
  moveBlock( 4, 2, 2)
  moveBlock( 1, 1, 0)
  moveBlock( 0, 0, 0)
  moveBlock( 6, 0, 2)
  moveBlock( 4, 1, 2)
  moveBlock( 5, 1, 3)
  moveBlock( 2, 2, 2)
  moveBlock( 7, 3, 2)
  moveBlock( 1, 2, 0)
  moveBlock( 4, 1, 0)
  moveBlock( 5, 1, 1)
  moveBlock( 9, 1, 2)
  moveBlock( 8, 1, 3)
  moveBlock( 6, 0, 3)
  moveBlock( 0, 0, 1)
  moveBlock( 4, 0, 0)
  moveBlock( 5, 1, 0)
  moveBlock( 9, 1, 1)
  moveBlock( 8, 1, 2)
  moveBlock( 6, 1, 3)
  moveBlock( 0, 0, 3)
  moveBlock( 9, 0, 2)
  moveBlock( 5, 0, 1)
  moveBlock( 1, 1, 0)
  moveBlock( 7, 3, 0)
  moveBlock( 2, 3, 2)
  moveBlock( 8, 2, 3)
  moveBlock( 1, 1, 1)
  moveBlock( 4, 2, 0)
  moveBlock( 5, 1, 0)
  moveBlock( 9, 0, 0)
  moveBlock( 0, 0, 1)
  moveBlock( 6, 0, 3)
  moveBlock( 8, 1, 4)
  moveBlock( 1, 1, 2)
  moveBlock( 4, 1, 1)
  moveBlock( 7, 2, 0)
  moveBlock( 2, 3, 0)
  moveBlock( 1, 2, 2)
  moveBlock( 4, 1, 3)
  moveBlock( 5, 1, 1)
  moveBlock( 9, 1, 0)
  moveBlock( 0, 0, 0)
  moveBlock( 6, 0, 2)
  moveBlock( 8, 0, 4)
  moveBlock( 4, 1, 4)
  moveBlock( 1, 1, 2)
  moveBlock( 2, 3, 2)
  moveBlock( 7, 3, 0)
  moveBlock( 9, 2, 0)
  moveBlock( 5, 2, 1)
  moveBlock( 0, 1, 0)
  moveBlock( 6, 0, 0)
  moveBlock( 1, 0, 2)
  moveBlock( 5, 2, 3)
  moveBlock( 9, 2, 2)
  moveBlock( 7, 2, 0)
  moveBlock( 2, 3, 0)
  moveBlock( 5, 3, 2)
  moveBlock( 3, 2, 3)
  moveBlock( 4, 3, 4)
  moveBlock( 8, 2, 4)
  moveBlock( 1, 0, 3)
  moveBlock( 9, 0, 2)
  moveBlock( 5, 1, 2)
  moveBlock( 3, 2, 2)
  moveBlock( 8, 3, 3)
  moveBlock( 1, 1, 3)

  drawBlocks()
  console.log( "count= " + count)
}


function demo() {
  reset()
  init()

  drag( 3, ee)
  drag( 4, ne)
  drag( 5, nn)
  drag( 6, w)
  drag( 7, w)
  drag( 8, sw)
  drag( 3, s)
  drag( 4, ee)
  drag( 5, ee)
  drag( 6, n)
  drag( 7, n)
  drag( 8, ww)
  drag( 9, ww)
  drag( 3, s)
  drag( 5, se)
  drag( 7, e)
  drag( 6, e)
  drag( 0, ss)
  drag( 1, w)
  drag( 2, w)
  drag( 4, nn)
  drag( 5, nn)
  drag( 7, e)
  drag( 2, ss)
  drag( 4, w)
  drag( 5, w)
  drag( 7, nn)
  drag( 2, e)
  drag( 5, ss)
  drag( 4, ss)
  drag( 1, e)
  drag( 0, nn)
  drag( 6, w)
  drag( 4, w)
  drag( 5, w)
  drag( 2, w)
  drag( 7, ss)
  drag( 1, e)
  drag( 4, nn)
  drag( 5, nn)
  drag( 9, nn)
  drag( 8, en)
  drag( 6, s)
  drag( 0, s)
  drag( 4, w)
  drag( 5, n)
  drag( 9, n)
  drag( 8, n)
  drag( 6, e)
  drag( 0, ss)
  drag( 9, ws)
  drag( 5, sw)
  drag( 1, w)
  drag( 7, nn)
  drag( 2, e)
  drag( 8, es)
  drag( 1, s)
  drag( 4, ee)
  drag( 5, ne)
  drag( 9, nn)
  drag( 0, nn)
  drag( 6, w)
  drag( 8, ws)
  drag( 1, s)
  drag( 4, sw)
  drag( 7, w)
  drag( 2, nn)
  drag( 1, e)
  drag( 4, ss)
  drag( 5, s)
  drag( 9, e)
  drag( 0, n)
  drag( 6, n)
  drag( 8, w)
  drag( 4, s)
  drag( 1, w)
  drag( 2, ss)
  drag( 7, e)
  drag( 9, e)
  drag( 5, e)
  drag( 0, e)
  drag( 6, nn)
  drag( 1, w)
  drag( 5, ss)
  drag( 9, ss)
  drag( 7, w)
  drag( 2, nn)
  drag( 5, en)
  drag( 3, n)
  drag( 4, ee)
  drag( 8, ee)
  drag( 1, s)
  drag( 9, ww)
  drag( 5, ww)
  drag( 3, n)
  drag( 8, ne)
  drag( 1, e)

  drawBlocks()
  console.log( "count= " + count)
}


function caption (message) {
  // save your current position, heading, etc.
  var savedX = turtle.pos.x
  var savedY = turtle.pos.y
  var savedHeading = turtle.కోణము / 2 / Math.PI * 360 //convert radians to degrees
  var savedColor = turtle.color
  var savedWidth = turtle.width

  goto (minX()+10, minY()+10)
  setheading( 90)

  // erase what will be in the path
  setfont("bold 16px helvitica,sans-serif")
  color ("white")
  width (22)
  ముందుకు_జరుగు(maxY() * 2 - 12)
  goto (minX()+10, minY()+5)
  color ("black")
  write( message)

  //go back from whence you came
  goto( savedX, savedY)
  setheading( savedHeading)
  color ( savedColor)
  width (savedWidth)
}

var moveCount;
var delayTime = 300;
var moves; // List of the moves to be made
var lastMove = []; // last move made
moves = [ // series of moves
// [ blockNumber, move directions ]
  [ 3, ee],
  [ 4, ne],
  [ 5, nn],
  [ 6, w],
  [ 7, w],
  [ 8, ws],
  [ 3, s],
  [ 4, ee],
  [ 5, ee],
  [ 6, n],
  [ 7, n],
  [ 8, ww],
  [ 9, ww],
  [ 3, s],
  [ 5, se],
  [ 7, e],
  [ 6, e],
  [ 0, ss],
  [ 1, w],
  [ 7,nn],
  [ 4, w],
  [ 5, w],
  [ 2, ss],
  [ 7, e],
  [ 1, e],
  [ 0, nn],
  [ 6, w],
  [ 4, w],
  [ 5, w],
  [ 2, w],
  [ 7, ss],
  [ 1, e],
  [ 4, nn],
  [ 5, nn],
  [ 9, nn],
  [ 8, en],
  [ 6, s],
  [ 0, s],
  [ 4, w],
  [ 5, n],
  [ 9, n],
  [ 8, n],
  [ 6, e],
  [ 0, ss],
  [ 9, ws],
  [ 5, sw],
  [ 1, w],
  [ 7, nn],
  [ 2, e],
  [ 8, es],
  [ 1, s],
  [ 4, ee],
  [ 5, ne],
  [ 9, nn],
  [ 0, nn],
  [ 6, w],
  [ 8, ws],
  [ 1, s],
  [ 4, sw],
  [ 7, w],
  [ 2, nn],
  [ 1, e],
  [ 4, ss],
  [ 5, s],
  [ 9, e],
  [ 0, n],
  [ 6, n],
  [ 8, w],
  [ 4, s],
  [ 1, w],
  [ 2, ss],
  [ 7, e],
  [ 9, e],
  [ 5, e],
  [ 0, e],
  [ 6, nn],
  [ 1, w],
  [ 5, ss],
  [ 9, ss],
  [ 7, w],
  [ 2, nn],
  [ 5, en],
  [ 3, n],
  [ 4, ee],
  [ 8, ee],
  [ 1, s],
  [ 9, ww],
  [ 5, ww],
  [ 3, n],
  [ 8, ne],
  [ 1, e]
]


function moveOne() {
  reset()
  //console.log( "mO " + moveCount)
  //console.log( "mO " + moves[moveCount])

  drawBlocks();
  caption( "Sliding block move " + moveCount)
  findFree()
  console.log("   State: " + getState())
  findMoves()
  if (moveCount > 0) {
    checkLastMove( lastMove[0], lastMove[1])
  }
  var block = moves[ moveCount][0]
  var dir =   moves[ moveCount][1]
  console.log( "  Move " + moveCount + ": " + block + dir)
  checkMove( block,  dir)
  drag( block, dir)
  moveCount = moveCount + 1;
  lastMove = [block, dir]
  if (moveCount < moves.length) {
    delay( moveOne, delayTime)
  }
}

function demo() {
  reset()
  init()
  moveCount=0

  delay( moveOne, delayTime)
}
