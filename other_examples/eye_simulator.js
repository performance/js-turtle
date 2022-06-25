// Eye Simulator -- Eye movement simulation
/*
This program is a graphical simulation of eyes to experiment with their
movement and emotional expression. This is investigation before committing
design to Arduino hardware.
*/


// ****CONSTANTS FOR DOT MATRICES****

_సర్వదా_    columns = 32 // left and right eye are side by side
_సర్వదా_    rows = 9


// ****CONSTANTS FOR TURTLE GRAPHICS****

_సర్వదా_    dotSize = 4
_సర్వదా_    dotGap = 2 // space between dots
_సర్వదా_    eyeGap = 4 // space between eyes
_సర్వదా_    columnSize = 2 * dotSize + dotGap
_సర్వదా_    rowSize = 2 * dotSize + dotGap
_సర్వదా_    columnMid = columns/2 * columnSize + eyeGap/2
_సర్వదా_    rowMid = rows/2 * rowSize

_సర్వదా_    dotOff =          "#f0f0f0"
_సర్వదా_    eyeBrowColor =    "#8080ff"
_సర్వదా_    eyeBallColor =    "#ccccff"
_సర్వదా_    eyeOutlineColor = "#b3b3ff"
_సర్వదా_    rightEyeColor =   "#0000ff"
_సర్వదా_    leftEyeColor =    "#0000ff"
_సర్వదా_    rightPupilColor = "#000000"
_సర్వదా_    leftPupilColor =  "#000000"


// these may be dependent upon eye graphic
_సర్వదా_    irisWidth =       5
_సర్వదా_    irisHeight =      3
_సర్వదా_    irisCenterRight = 7 // absolute grid x for right eye center
_సర్వదా_    irisCenterLeft = 24 // absolute grid x for left eye center
_సర్వదా_    irisMiddle =      6 // absolute grid y for iris middle

// relative from bottom
_సర్వదా_    lidsClosed = 0
_సర్వదా_    lidsNormal = 4 // normal/relaxed position of the eye lids
_సర్వదా_    lidsMin = 0
_సర్వదా_    lidsMax = 6

// relative to iris center, middle:
_సర్వదా_    irisMaxX = 5
_సర్వదా_    irisMinX = -4
_సర్వదా_    irisMaxY = irisMiddle - rows + 1 + lidsMax
_సర్వదా_    irisMinY = irisMiddle - rows + 1 + lidsMin
_సర్వదా_    irisNormalX = 0 // normal/relaxed X position of the iris and pupil
_సర్వదా_    irisNormalY = 0 // normal/relaxed Y position of the iris and pupil


_సర్వదా_    lids = [
    [
        // lids[0]
        //10987654321098765432109876543210
        0b00000000000000000000000000000000, //00
        0b00000000000000000000000000000000, //01
        0b00000000000000000000000000000000, //02
        0b00000000000000000000000000000000, //03
        0b00000000000000000000000000000000, //04
        0b00000000000000000000000000000000, //05
        0b10000000000000011000000000000001, //06
        0b01110000000011100111000000001110, //07
        0b00001111111100000000111111110000  //08
    ],
    [
        // lids[1]
        //10987654321098765432109876543210
        0b00000000000000000000000000000000, //00
        0b00000000000000000000000000000000, //01
        0b00000000000000000000000000000000, //02
        0b00000000000000000000000000000000, //03
        0b00000000000000000000000000000000, //04
        0b00000000000000000000000000000000, //05
        0b10000000000000011000000000000001, //06
        0b01111111111111000011111111111110, //07
        0b00001111111100000000111111110000  //08
    ],
    [
        // lids[2]
        //10987654321098765432109876543210
        0b00000000000000000000000000000000, //00
        0b00000000000000000000000000000000, //01
        0b00000000000000000000000000000000, //02
        0b00000000000000000000000000000000, //03
        0b00000000000000000000000000000000, //04
        0b00000000000000000000000000000000, //05
        0b11111111111111111111111111111111, //06
        0b01110000000011100111000000001110, //07
        0b00001111111100000000111111110000  //08
    ],
    [
        // lids[3]
        //10987654321098765432109876543210
        0b00000000000000000000000000000000, //00
        0b00000000000000000000000000000000, //01
        0b00000000000000000000000000000000, //02
        0b00000000000000000000000000000000, //03
        0b00000000000000000000000000000000, //04
        0b00111111111111000011111111111110, //05
        0b10000000000000011000000000000001, //06
        0b01110000000011100111000000001110, //07
        0b00001111111100000000111111110000  //08
    ],
    [
        // lids[4]
        //10987654321098765432109876543210
        0b00000000000000000000000000000000, //00
        0b00000000000000000000000000000000, //01
        0b00000000000000000000000000000000, //02
        0b00000000000000000000000000000000, //03
        0b00011111111100000000111111111000, //04
        0b01100000000011100111000000000110, //05
        0b10000000000000011000000000000001, //06
        0b01110000000011100111000000001110, //07
        0b00001111111100000000111111110000  //08
    ],
    [
        // lids[5]
        //10987654321098765432109876543210
        0b00000000000000000000000000000000, //00
        0b00000000000000000000000000000000, //01
        0b00000000000000000000000000000000, //02
        0b00001111111100000000111111110000, //03
        0b01110000000011100111000000001110, //04
        0b10000000000000011000000000000001, //05
        0b10000000000000011000000000000001, //06
        0b01110000000011100111000000001110, //07
        0b00001111111100000000111111110000  //08
    ],
    [
        // lids[6]
        //10987654321098765432109876543210
        0b00000000000000000000000000000000, //00
        0b00000000000000000000000000000000, //01
        0b00001111111100000000111111110000, //02
        0b01110000000011100111000000001110, //03
        0b10000000000000011000000000000001, //04
        0b10000000000000011010000000000001, //05
        0b10000000000000011000000000000001, //06
        0b01110000000011100111000000001110, //07
        0b00001111111100000000111111110000  //08
    ]
]


_సర్వదా_    masks = [
    [
        // masks[0]
        //10987654321098765432109876543210
        0b00000000000000000000000000000000, //00
        0b00000000000000000000000000000000, //01
        0b00000000000000000000000000000000, //02
        0b00000000000000000000000000000000, //03
        0b00000000000000000000000000000000, //04
        0b00000000000000000000000000000000, //05
        0b00000000000000000000000000000000, //06
        0b00000000000000000000000000000000, //07
        0b00000000000000000000000000000000  //08
    ],
    [
        // masks[1]
        //10987654321098765432109876543210
        0b00000000000000000000000000000000, //00
        0b00000000000000000000000000000000, //01
        0b00000000000000000000000000000000, //02
        0b00000000000000000000000000000000, //03
        0b00000000000000000000000000000000, //04
        0b00000000000000000000000000000000, //05
        0b00000000000000000000000000000000, //06
        0b00000000000000000000000000000000, //07
        0b00000000000000000000000000000000  //08
    ],
    [
        // masks[2]
        //10987654321098765432109876543210
        0b00000000000000000000000000000000, //00
        0b00000000000000000000000000000000, //01
        0b00000000000000000000000000000000, //02
        0b00000000000000000000000000000000, //03
        0b00000000000000000000000000000000, //04
        0b00000000000000000000000000000000, //05
        0b00000000000000000000000000000000, //06
        0b00001111111110000001111111110000, //07
        0b00000000000000000000000000000000  //08
    ],
    [
        // masks[3]
        //10987654321098765432109876543210
        0b00000000000000000000000000000000, //00
        0b00000000000000000000000000000000, //01
        0b00000000000000000000000000000000, //02
        0b00000000000000000000000000000000, //03
        0b00000000000000000000000000000000, //04
        0b00000000000000000000000000000000, //05
        0b01111111111111100111111111111110, //06
        0b00001111111110000001111111110000, //07
        0b00000000000000000000000000000000  //08
    ],
    [
        // masks[4]
        //10987654321098765432109876543210
        0b00000000000000000000000000000000, //00
        0b00000000000000000000000000000000, //01
        0b00000000000000000000000000000000, //02
        0b00000000000000000000000000000000, //03
        0b00000000000000000000000000000000, //04
        0b00011111111100000000111111111000, //05
        0b01111111111111100111111111111110, //06
        0b00001111111110000001111111110000, //07
        0b00000000000000000000000000000000  //08
    ],
    [
        // masks[5]
        //10987654321098765432109876543210
        0b00000000000000000000000000000000, //00
        0b00000000000000000000000000000000, //01
        0b00000000000000000000000000000000, //02
        0000000000000000000000000000000000, //03
        0b00001111111100000000111111110000, //04
        0b01111111111111100111111111111110, //05
        0b01111111111111100111111111111110, //06
        0b00001111111110000001111111110000, //07
        0b00000000000000000000000000000000  //08
    ],
    [
        // masks[6]
        //10987654321098765432109876543210
        0b00000000000000000000000000000000, //00
        0b00000000000000000000000000000000, //01
        0b00000000000000000000000000000000, //02
        0b00001111111100000000111111110000, //03
        0b01111111111111100111111111111110, //04
        0b01111111111111100111111111111110, //05
        0b01111111111111100111111111111110, //06
        0b00001111111100000000111111110000, //07
        0b00000000000000000000000000000000  //08
    ]
]



_సర్వదా_    irisTypes = {
    NORMAL : 0,
    HEART : 1
}


_సర్వదా_    irises = [
    [ // normal
        //43210
        0b01110, //00
        0b11111, //01
        0b01110  //02
    ],
    [ // heart really too small
        //43210
        0b01010, //00
        0b11111, //01
        0b00100  //02
    ]
]


_సర్వదా_    pupilTypes = {
    NONE :     0,
    SMALL :    1,
    MEDIUM :   2,
    PREY :     3,
    PREDITOR : 4,
    X :        6,
}


_సర్వదా_    pupils = [
    [
        //pupils[ 0]
        //43210
        0b00000, //00
        0b00000, //01
        0b00000  //02
    ],
    [
        //pupils[ 1]
        //43210
        0b00000, //00
        0b00100, //01
        0b00000  //02
    ],
    [
        //pupils[ 2]
        //03210
        0b00100, //00
        0b01110, //01
        0b00100  //02
    ],
    [
        //pupils[ 3]
        //03210
        0b00000, //00
        0b11111, //01
        0b00000  //02
    ],
    [
        //pupils[ 4]
        //03210
        0b00100, //00
        0b00100, //01
        0b00100  //02
    ],
    [
        //pupil[ 5]
        //03210
        0b01010, //00
        0b00100, //01
        0b01010  //02
    ],
]


_సర్వదా_    browTypes = {
    NONE :     0,
    NORMAL :   1,
    UP :       2,
    IN :       3,
    OUT :      4,
    RIGHT_UP : 5,
    LEFT_UP :  6,
    DOUBLE :   7,
}

_సర్వదా_    brows = [
    [
        // brows[0]
        //10987654321098765432109876543210
        0b00000000000000000000000000000000, //00
        0b00000000000000000000000000000000, //01
    ],
    [
        // brows[1]
        //10987654321098765432109876543210
        0b00000000000000000000000000000000, //00
        0b01111111111111100111111111111110, //01
    ],
    [
        // brows[2]
        //10987654321098765432109876543210
        0b01111111111111100111111111111110, //00
        0b00000000000000000000000000000000, //01
    ],
    [
        // brows[3]
        //10987654321098765432109876543210
        0b01111111000000000000000011111110, //00
        0b00000000111111100111111100000000, //00
        0b00000000000000000000000000000000, //01
    ],
    [
        // brows[4]
        //10987654321098765432109876543210
        0b00000000111111100111111100000000, //00
        0b01111111000000000000000011111110, //01
    ],
    [
        // brows[5]
        //10987654321098765432109876543210
        0b01111111000000000000000011111110, //00
        0b00000000111111100111111100000000, //01
    ],
    [
        // brows[6]
        //10987654321098765432109876543210
        0b00000000000000000111111111111110, //00
        0b01111111111111100000000000000000, //01
    ],
    [
        // brows[7]
        //10987654321098765432109876543210
        0b01111111111111100000000000000000, //00
        0b00000000000000000111111111111110, //01
    ],
    [
        // brows[8]
        //10987654321098765432109876543210
        0b01111111111111100111111111111110, //00
        0b01111111111111100111111111111110, //01
    ],
]


// ****CONSTANTS FOR COMMANDS****

/*
commands are segregated for brow, lids, pupil, iris, control.
The lids and iris have a separate timer for internal movement.
The brow, pupil, emotions, and control can change instantly (except
as they effect changes in the pupil and lids.

so if a eye is command to move 2 right and 2 up.
there would be steps for eye movement until the eye reached the target x and y
*/

_సర్వదా_    commands = {
    //lid commands
    LIDS_TO :            01, //n, step time
    LIDS_NORMAL :        02, //step time
    LIDS_CLOSE :         03, //step time
    BLINK :              20, // step time
    WINK_RIGHT :         21, // step time
    WINK_LEFT :          22, // step time

    //iris commands
    EYES_UP :            30, //n, step time
    EYES_DOWN :          31, //n, step time
    EYES_RIGHT :         32, //n, step time
    EYES_LEFT :          33, //n, step time
    EYES_TO :            34, //x,y, step time
    EYES_CENTER :        35, //step time
    EYES_MIDDLE :        36, //step time

    //emotion commands
    NORMAL :             50,
    LOVE :               51,
    DEAD :               52,
    STARS :              53,
    SAD :                54,
    SURPRISE :           55,
    QUESTION :           56,

    //brow commands
    BROW_TYPE :          60, //n

    //iris commands
    IRIS_TYPE :          70, //type

    //control commands
    HOLD :               80, //time
    LOOP :               81,
    STOP :               82,
    CAPTION :            83, //string
}


simulatorCommands = [
    [commands.CAPTION, "Close and open"],
    [commands.LIDS_CLOSE, 50],
    [commands.HOLD, 200],
    [commands.LIDS_TO, 9, 50],
    [commands.HOLD, 200],
    [commands.LIDS_NORMAL, 50],
    [commands.HOLD, 200],
    [commands.CAPTION, "Blink"],
    [commands.BROW_TYPE, browTypes.RIGHT_UP],
    [commands.BLINK, 50],
    [commands.HOLD, 1000],
    [commands.BLINK, 50],
    [commands.BROW_TYPE, browTypes.NORMAL],
    [commands.CAPTION, "Eyes up"],
    [commands.EYES_UP, 9, 200],
    [commands.CAPTION, "Eyes right"],
    [commands.EYES_RIGHT, 9, 200],
    [commands.CAPTION, "Eyes down"],
    [commands.EYES_DOWN, 9, 200],
    [commands.CAPTION, "Eyes left"],
    [commands.EYES_LEFT, 9, 200],
    [commands.CAPTION, "Eyes up again"],
    [commands.EYES_UP, 9, 200],
    [commands.CAPTION, "Return to middle, center"],
    [commands.EYES_MIDDLE, 200],
    [commands.EYES_CENTER, 200],
    [commands.CAPTION, "Hold"],
    [commands.HOLD, 1000],
    [commands.CAPTION, "End of loop"],
    [commands.LOOP]
]


// ****GLOBALS****

//_సర్వత్ర_   grid = []
_సర్వత్ర_   coloredGrid = []


// ****FUNCTIONS****


_విధానము_     loadColoredPattern( pattern, col) {
  for (r=0; r < rows; r++) {
    for ( c=0; c < columns; c++) {
      if (pattern[ r] & (1<<c)) {
        coloredGrid [r * columns + c] = col
      } else {
        coloredGrid [r * columns + c] = dotOff
      }
    }
  }
}



_విధానము_     loadColoredSubPattern( subPattern, col, x, y, w, h) {
  // x,y is top left corner of pattern position
  // it is aiso top left corner of grid
  for ( _సర్వత్ర_   iy=0; iy < h; iy++) {
    for ( _సర్వత్ర_   ix = w-1; ix >=0; ix--) {
      _సర్వత్ర_   mask = 0b00000000000000001 << ix
      if (subPattern[ iy] & mask) {
        coloredGrid [(y+iy) * columns + 31-x + ix -w + 1] = col
      }
    }
  }
}


_విధానము_     loadColoredMaskedSubPattern( subPattern, mask, col, x, y, w, h) {
  // x,y is top left corner of pattern position
  // it is also top left corner of grid
  for ( _సర్వత్ర_   iy=0; iy < h; iy++) {
    for ( _సర్వత్ర_   ix = w-1; ix >=0; ix--) {
      if (subPattern[ iy] & (1<<ix) && mask[y+iy] & 1<<(x+w-1-ix)) {
        coloredGrid [(y+iy) * columns + 31-x + ix -w + 1] = col
      }
    }
  }
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



// ****GLOBALS FOR COMMAND INTERPRETER****
    _సర్వత్ర_   baseCaption = "" // base caption

    _సర్వదా_    lidStates = {
        IDLE : 0,
        CLOSING : 1,
        OPENING : 2,
    }
    _సర్వత్ర_   lidState = lidStates.IDLE
    _సర్వత్ర_   lidTarget = 0
    _సర్వత్ర_   lidCommanded = 0 // lid position requested. May be overridden by high iris value.

    _సర్వత్ర_   lidsCurrent = lidsNormal

    _సర్వత్ర_   irisTypeCurrent = irisTypes.NORMAL
    _సర్వదా_    irisStates = {
        IDLE : 0,
        MOVING : 1,
        MOVING_BACK : 2
    }
    _సర్వత్ర_   irisState = irisStates.IDLE

    // iris coordinates relative to the eye center and middle
    _సర్వత్ర_   irisTargetX = 0
    _సర్వత్ర_   irisTargetY = 0
    _సర్వత్ర_   irisCurrentX = 0
    _సర్వత్ర_   irisCurrentY = 0

    _సర్వదా_    pupilNormal = pupilTypes.SMALL // normal/relaxed type of pupil
    _సర్వత్ర_   pupilCurrent = pupilTypes.SMALL // normal/relaxed type of pupil

    _సర్వదా_    browNormal = browTypes.NORMAL // normal/relaxed type of eye brow
    _సర్వత్ర_   browCurrent = browTypes.NORMAL // current type of the brow

    _సర్వత్ర_   commandSequence = [] // array of commands to be executed
    _సర్వత్ర_   currentCommand = 0 // index into command sequence of the current command
    _సర్వత్ర_   subCommand = 0 // number of times current command has executed
    _సర్వత్ర_   commandDue = undefined // epoch milliseconds when normal command is due
                       // = undefined when not active
    _సర్వత్ర_   browCommandDue = undefined // epoch milliseconds when default brow command is due
                       // = undefined when not active



_విధానము_     absIrisY ( irisY) {
    // _ఫలము_  the absolute grid Y coordinate for a given iris Y coordinate
    // irisY = 0 is the grid irisMiddle
    _ఫలము_  irisMiddle - irisY
}


_విధానము_     absLidY (lidY) {
    // _ఫలము_  the absolute grid Y coordinate for a given lid Y coordinate
    // lidY = 0 is grid max Y = rows -1
    _ఫలము_  rows - 1 - lidY
}


_విధానము_     irisMovementCheck () {
    // check if iris and lid movement is required
    console.log( "iMC", irisCurrentX, irisCurrentY, irisTargetX, irisTargetY, lidsCurrent, lidCommanded)
    console.log( "iMC1", absIrisY(irisCurrentY), absIrisY(irisTargetY), absLidY(lidsCurrent), absLidY(lidCommanded))
    _సర్వత్ర_   moved = false
    if (irisCurrentY > irisTargetY) {
        irisCurrentY = irisCurrentY - 1
        moved = true
    } else if (irisCurrentY < irisTargetY) {
        irisCurrentY = irisCurrentY + 1
        moved = true
    }
    // absolute coordinates are for the grid
    if (absIrisY(irisCurrentY) < absLidY(lidsCurrent) &&
        absIrisY(irisCurrentY) + 1 > absLidY(lidsMax)) {
        lidsCurrent = lidsCurrent + 1
        moved = true
    } else if (absIrisY(irisCurrentY) - 1 > absLidY(lidsCurrent) &&
               lidsCurrent > lidCommanded) {
        lidsCurrent = lidsCurrent - 1
        moved = true
    }
    if (irisCurrentX > irisTargetX) {
        irisCurrentX = irisCurrentX - 1
        moved = true
    } else if (irisCurrentX < irisTargetX) {
        irisCurrentX = irisCurrentX + 1
        moved = true
    }
    console.log( "iMC moved =", moved ? "true" : "false")
    _ఫలము_  moved
}


_విధానము_     commandCheck ( currentTime) {
    // check is a command is due to be executed
    // returns false if no delay requested
    // returns true if a delay was requested for rendering
    console.log("cmdchk0:", currentTime, commandDue, currentCommand, subCommand)

    _సర్వత్ర_   renderingRequired = false
    _సర్వత్ర_   commandAdvance = false // only advance command explicitly

    if (commandDue === undefined || currentTime > commandDue) {
        commandDue = undefined
        _సర్వత్ర_   command = commandSequence [ currentCommand]
        // execute the command. Some commands are immediate, others take time.
        console.log("cmdchk1:", currentCommand, command[0], command[1], command[2])

        switch (command[ 0]) {
        case commands.CAPTION: // string
            baseCaption = command [1]
            // do not render until something else changes
            commandAdvance = true
            break
        case commands.LIDS_CLOSE: // delay
            if (lidsCurrent > lidsClosed) {
                lidCommanded = lidsClosed
                lidsCurrent = lidsCurrent - 1
                commandDue = currentTime + command[1]
                renderingRequired = true
            } else {
                commandAdvance = true
            }
            break
        case commands.LIDS_NORMAL: // delay
            if (lidsCurrent > lidsNormal) {
                lidCommanded = lidsNormal
                lidsCurrent = lidsCurrent - 1
                commandDue = currentTime + command[1]
                renderingRequired = true
            } else if (lidsCurrent < lidsNormal) {
                lidCommanded = lidsNormal
                lidsCurrent = lidsCurrent + 1
                commandDue = currentTime + command[1]
                renderingRequired = true
            } else {
                commandAdvance = true
            }
            break
        case commands.LIDS_TO: // opening, delay
            if (command [1] >= lids.length) {
                lidsCommanded = lids.lenth - 1
            } else if (command [1] < lidsClosed) {
                lidsCommanded = lidsClosed
            }
            if (lidsCurrent > lidsCommanded && lidsCurrent > lidsClosed) {
                lidsCurrent = lidsCurrent - 1
                commandDue = currentTime + command[2]
                renderingRequired = true
            } else if (lidsCurrent > lidsCommanded &&
                       lidsCurrent < lids.length -2) {
                lidsCurrent = lidsCurrent + 1
                commandDue = currentTime + command[2]
                renderingRequired = true
            } else {
                commandAdvance = true
            }

            break
        case commands.HOLD: // delay
            commandDue = currentTime + command[1]
            commandAdvance = true
            break
        case commands.BROW_TYPE: // browType
            currentBrowType = command[1]
            renderingRequired = true
            commandAdvance = true
            break
        case commands.BROW_TYPE_TEMP: // browType, delay
            currentBrowType = command[1]
            browCommandDue = currentTime + command[2]
            renderingRequired = true
            commandAdvance = true
            break
        case commands.BLINK: // delay
            switch (lidState) {
            case lidStates.IDLE:
            case lidStates.CLOSING:
                if (lidsCurrent > lidsClosed) {
                    lidState = lidStates.CLOSING
                    lidsCurrent = lidsCurrent - 1
                    commandDue = currentTime + command[1]
                    renderingRequired = true
                } else {
                    lidState = lidStates.OPENING
                }
                break;
            case lidStates.OPENING:
                if (lidsCurrent < lidCommanded) {
                    lidState = lidStates.OPENING
                    lidsCurrent = lidsCurrent + 1
                    commandDue = currentTime + command[1]
                    renderingRequired = true
                } else {
                    lidState = lidStates.IDLE
                    commandAdvance = true
                }
                break
            }
            break
        case commands.EYES_UP: // relativeTargetY, delay
            console.log("EU:", irisState)
            if (irisState === irisStates.IDLE) {
                irisState = irisStates.MOVING
                irisTargetY = irisCurrentY + command [1]
                if (irisTargetY > irisMaxY) {
                    irisTargetY = irisMaxY
                }
            }
            if (irisMovementCheck()) {
                commandDue = currentTime + command [2]
                renderingRequired = true
            } else {
                irisState = irisStates.IDLE
                commandAdvance = true
            }
            break
        case commands.EYES_DOWN: // relativeTargetY, delay
            if (irisState === irisStates.IDLE) {
                irisState = irisStates.MOVING
                irisTargetY = irisCurrentY - command [1]
                if (irisTargetY < irisMinY) {
                    irisTargetY = irisMinY
                }
            }
            if (irisMovementCheck()) {
                commandDue = currentTime + command [2]
                renderingRequired = true
            } else {
                irisState = irisStates.IDLE
                commandAdvance = true
            }
            break
        case commands.EYES_RIGHT: // relativeTargeX, delay
            if (irisState === irisStates.IDLE) {
                irisState = irisStates.MOVING
                irisTargetX = irisCurrentX + command [1]
                if (irisTargetX > irisMaxX) {
                    irisTargetX = irisMaxX
                }
            }
            if (irisMovementCheck()) {
                commandDue = currentTime + command [2]
                renderingRequired = true
            } else {
                irisState = irisStates.IDLE
                commandAdvance = true
            }
            break
        case commands.EYES_LEFT: // relativeTargetX, delay
            if (irisState === irisStates.IDLE) {
                irisState = irisStates.MOVING
                irisTargetX = irisCurrentX - command [1]
                if (irisTargetX < irisMinX) {
                    irisTargetX = irisMinX
                }
            }
            if (irisMovementCheck()) {
                commandDue = currentTime + command [2]
                renderingRequired = true
            } else {
                irisState = irisStates.IDLE
                commandAdvance = true
            }
            break
        case commands.EYES_MIDDLE: // delay
            if (irisState === irisStates.IDLE) {
                irisState = irisStates.MOVING
                irisTargetY = irisNormalY
                if (irisTargetY > irisMaxY) {
                    irisTargetY = irisMaxY
                }
                if (irisTargetY < irisMinY) {
                    irisTargetY = irisMinY
                }
            }
            if (irisMovementCheck()) {
                commandDue = currentTime + command [1]
                renderingRequired = true
            } else {
                irisState = irisStates.IDLE
                commandAdvance = true
            }
            break
        case commands.EYES_CENTER: // delay
            if (irisState === irisStates.IDLE) {
                irisState = irisStates.MOVING
                irisTargetX = irisNormalX
                if (irisTargetX > irisMaxX) {
                    irisTargetX = irisMaxX
                }
                if (irisTargetX < irisMinX) {
                    irisTargetX = irisMinX
                }
            }
            if (irisMovementCheck()) {
                commandDue = currentTime + command [1]
                renderingRequired = true
            } else {
                irisState = irisStates.IDLE
                commandAdvance = true
            }
            break
        case commands.EYES_TO: // x, y, delay
            if (irisState === irisStates.IDLE) {
                irisState = irisStates.MOVING
                irisTargetX = command [1]
                irisTargetY = command [2]
                if (irisTargetX > irisMaxX) {
                    irisTargetX = irisMaxX
                }
                if (irisTargetX < irisMinX) {
                    irisTargetX = irisMinX
                }
                if (irisTargetY > irisMaxY) {
                    irisTargetY = irisMaxY
                }
                if (irisTargetY < irisMinY) {
                    irisTargetY = irisMinY
                }
            }
            if (irisMovementCheck()) {
                commandDue = currentTime + command [3]
                renderingRequired = true
            } else {
                irisState = irisStates.IDLE
                commandAdvance = true
            }
            break
        case commands.LOOP:
            currentCommand = 0
            break
        case commands.STOP:
            exit(1)
            break
        default:
            console.log("command check BAD COMMAND:", command[0])
            currentCommand = 0
            break
        }
    } else if (browCommandDue !== undefined && currentTime > browCommandDue) {
        // make brows normal again
        currentBrowType = browNormal
        renderingRequired = true
        browCommandDue = undefined
    }
    console.log( "cmdChk rendReq =", renderingRequired ? "true" : "false", " cmdAdv =", commandAdvance ? "true" : "false")
    if ( renderingRequired) {
console.log("cmdchk render",lidsCurrent, browCurrent, irisTypeCurrent, pupilCurrent, irisCurrentX, irisCurrentY, baseCaption)


        drawEyes (lidsCurrent, browCurrent, irisTypeCurrent, pupilCurrent,
                irisCurrentX, irisCurrentY,
                baseCaption + " " + currentCommand + "-" + subCommand)
        subCommand = subCommand + 1
    }
    if ( commandAdvance) { // advance to the next command
        currentCommand = (currentCommand + 1) % commandSequence.length
        subCommand = 0
    }
    _ఫలము_  commandAdvance
}


_విధానము_     renderEyes (eyeOpening, browType, irisType, pupilType, ix, iy) {
    // ix and iy use relative coordinates, positive up and right
    // grid coordinates: positive down and right

    //console.log("rE:", eyeOpening, browType, irisType, pupilType, ix, iy)
    loadColoredPattern (lids[eyeOpening], eyeOutlineColor)
    loadColoredSubPattern (masks[eyeOpening], eyeBallColor, 0,0,columns,rows)
    loadColoredSubPattern (brows[browType], eyeBrowColor, 0,0,columns,2)
//neat to mask the iris

console.log("rE1:",irises[irisType], irisType, masks[eyeOpening], eyeOpening,
         rightEyeColor,
         irisCenterRight+ix-Math.floor(irisWidth/2),
         irisMiddle-iy- Math.floor(irisHeight/2),
         irisWidth, irisHeight)

     loadColoredMaskedSubPattern ( irises[irisType], masks[eyeOpening],
            rightEyeColor,
            irisCenterRight+ix-Math.floor(irisWidth/2),
            irisMiddle-iy- Math.floor(irisHeight/2),
            irisWidth, irisHeight)
console.log("rE2:",leftEyeColor,
         irisCenterLeft+ix-Math.floor(irisWidth/2),
         irisMiddle-iy- Math.floor(irisHeight/2),
         irisWidth, irisHeight)  

    loadColoredMaskedSubPattern ( irises[irisType], masks[eyeOpening],
            leftEyeColor,
            irisCenterLeft+ix-Math.floor(irisWidth/2),
            irisMiddle-iy- Math.floor(irisHeight/2),
            irisWidth, irisHeight)
    loadColoredMaskedSubPattern ( pupils[pupilType], masks[eyeOpening],
            rightPupilColor,
            irisCenterRight+ix-Math.floor(irisWidth/2),
            irisMiddle-iy- Math.floor(irisHeight/2),
            irisWidth, irisHeight)
    loadColoredMaskedSubPattern ( pupils[pupilType], masks[eyeOpening],
            leftPupilColor,
            irisCenterLeft+ix-Math.floor(irisWidth/2),
            irisMiddle-iy- Math.floor(irisHeight/2),
            irisWidth, irisHeight)
}

_విధానము_     drawEyes( eyeOpening, browType, irisType, pupilType, ix, iy, baseCaption) {
console.log("dE1:",eyeOpening, browType, irisType, pupilType, ix, iy, baseCaption)

    renderEyes (eyeOpening, browType, irisType, pupilType, ix, iy)
    for ( _సర్వత్ర_   r=0; r < rows; r++) {
        for ( _సర్వత్ర_   c=0; c < columns; c++) {
             _సర్వత్ర_   offset = 0
             if ( c >= columns/2) {
                 offset = eyeGap
             }
             స్థానము_మార్చు( columnMid - (c + offset)* columnSize, rowMid - r * rowSize)
             రంగు_మార్చు( coloredGrid [r * columns + c])
             నిండు_వృత్తము( dotSize)
        }
    }
    caption( baseCaption)
}



_విధానము_     executeCommand () {
    _సర్వత్ర_   d = new Date()
    _సర్వత్ర_   currentTime = d.getTime()
    //while ( !commandCheck ( currentTime)) {}
    commandCheck ( currentTime)

    విలంబించు( executeCommand, 10) // there can be multiple timers running
                               // so this delay should be fairly short
}


_విధానము_     ప్రదర్శన() {
    ఆది_స్థితి()
    కుంచికను_దాచు()
    commandDue = undefined
    commandSequence = simulatorCommands
    currentCommand = 0
    subCommand = 0
    విలంబించు( executeCommand, 10)
}
