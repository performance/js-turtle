// Collidescape (tm) -- aperiodic tiling researched by Ward Hollins.
// angles for the two isosceles triangles are: 
// 36, 72, 72 and 36, 36, 108 ..degrees
//  1,2,2 and 1,1,3 times pi/5 .. radians
ang = 360/10 // the basic కోణము (pi/5 radians)
side = 50 // length of the common side of the isosceles triangles
bBase = 2* side * Math.cos( degToRad( ang)) // length of big base
sBase = 2* side * Math.sin( degToRad( ang/2)) // length of small base


function bb (fColor) { //big piece, big కోణము
    beginShape()
    ముందుకు_జరుగు( side)
    కుడి_వైపు_తిరుగు( 4 * ang)
    ముందుకు_జరుగు( bBase)
    కుడి_వైపు_తిరుగు( 4 * ang)
    ముందుకు_జరుగు( side)
    కుడి_వైపు_తిరుగు( 180)
    fillShape( fColor)
}


function bs (fColor) { // big piece, small కోణము
    beginShape()
    ముందుకు_జరుగు( side)
    కుడి_వైపు_తిరుగు( 2 * ang)
    ముందుకు_జరుగు( side)
    కుడి_వైపు_తిరుగు( 4 * ang)
    ముందుకు_జరుగు( bBase)
    కుడి_వైపు_తిరుగు( 180)
    fillShape( fColor)
}


function bs2 (fColor) { // big piece, small కోణము other corner
    beginShape()
    ముందుకు_జరుగు( bBase)
    కుడి_వైపు_తిరుగు( 4 * ang)
    ముందుకు_జరుగు( side)
    కుడి_వైపు_తిరుగు( 2 * ang)
    ముందుకు_జరుగు( side)
    కుడి_వైపు_తిరుగు( 180)
    fillShape( fColor)
}


function ss (fColor) { // small piece, small కోణము
    beginShape()
    ముందుకు_జరుగు( side)
    కుడి_వైపు_తిరుగు( 3 * ang)
    ముందుకు_జరుగు( sBase)
    కుడి_వైపు_తిరుగు( 3 * ang)
    ముందుకు_జరుగు( side)
    కుడి_వైపు_తిరుగు( 180)
    fillShape( fColor)
}


function sb (fColor) { // small piece, big కోణము
    beginShape()
    ముందుకు_జరుగు( sBase)
    కుడి_వైపు_తిరుగు( 3 * ang)
    ముందుకు_జరుగు( side)
    కుడి_వైపు_తిరుగు( 4 * ang)
    ముందుకు_జరుగు( side)
    కుడి_వైపు_తిరుగు( 180)
    fillShape( fColor)
}


function sb2 (fColor) { // small piece, big కోణము other corner
    beginShape()
    ముందుకు_జరుగు( side)
    కుడి_వైపు_తిరుగు( 4 * ang)
    ముందుకు_జరుగు( side)
    కుడి_వైపు_తిరుగు( 3 * ang)
    ముందుకు_జరుగు( sBase)
    కుడి_వైపు_తిరుగు( 180)
    fillShape( fColor)
}


function spiral( ) {
// function draws a spiral using only two isosceles triangles
// this is done with a series of points. Each point starts at the
// center of the spiral and moves to the point where several triangles
// are drawn. This technique isolates changes, but is less efficient
// overall.
//
// Numbers for each point can be included by uncommenting the "//write"
// statements.

    c1 = "yellow"
    c2 = "blue"
    for (var i=0; i<5; i++) {
//point0:
        goto(0,0)
        setHeading( (i * 2 + 1) * ang)
        bs( c2)

//point1:
	కలమును_పైకి_ఎత్తు()
        goto(0,0)
        setHeading( (i * 2 + 1) * ang)
        ముందుకు_జరుగు( bBase)
	కలమును_కింద_పెట్టు()

        bs( c2)
        bs( c2)
        bs2( c1)
        sb2( c1)
        bs2( c1)
        ss( c2)
        bb( c2)
        //write( "1")

//point2:
	కలమును_పైకి_ఎత్తు()
        goto(0,0)
        setHeading( (i * 2 + 1) * ang)
        bs( c2)
        ముందుకు_జరుగు( bBase + side)
        ఎడమ_వైపు_తిరుగు( 3 * ang)
	కలమును_కింద_పెట్టు()

        ss( c2)
        ss( c2)
        bb( c2)
        //write( "2")

//point3:
	కలమును_పైకి_ఎత్తు()
        goto(0,0)
        setHeading( (i +1) * 2* ang)
        ముందుకు_జరుగు( bBase + side)
        ఎడమ_వైపు_తిరుగు( 2 * ang)
        ముందుకు_జరుగు( side)
        ఎడమ_వైపు_తిరుగు( 2 * ang)
	కలమును_కింద_పెట్టు()

        bs( c1)
        bs2( c1)
        ss( c1)
        ss( c1)
        bs( c1)
        //write( "3")

//point4:
	కలమును_పైకి_ఎత్తు()
        goto(0,0)
        setHeading( i * 2 * ang)
        ముందుకు_జరుగు( bBase)
        కుడి_వైపు_తిరుగు(ang)

	కలమును_కింద_పెట్టు()
        bs( c1)
        ఎడమ_వైపు_తిరుగు( ang)

	కలమును_పైకి_ఎత్తు()
        ముందుకు_జరుగు( bBase)
	కలమును_కింద_పెట్టు()

        bs( c2)
        sb( c1)
        sb2( c1)
        bs2( c1)
        bs( c2)
        bs2( c2)
        ss( c2)
        ss( c2)
        //write( "4")

//point5:
	కలమును_పైకి_ఎత్తు()
        goto(0,0)
        setHeading( (i +1) * 2* ang)
        ముందుకు_జరుగు( bBase + side)
        ఎడమ_వైపు_తిరుగు( 2 * ang)
        ముందుకు_జరుగు( side + side + sBase)
        ఎడమ_వైపు_తిరుగు( 2 * ang)
	కలమును_కింద_పెట్టు()

        bs2( c2)
        sb2( c2)
        sb( c2)
        sb2( c2)
        sb( c2)
        //write( "5")

//point6:
	కలమును_పైకి_ఎత్తు()
        goto(0,0)
        setHeading( i * 2* ang)
        ముందుకు_జరుగు(  bBase + side + bBase)
        ఎడమ_వైపు_తిరుగు( 3 * ang)
	కలమును_కింద_పెట్టు()

        bs2( c1)
        bb( c1)
        bs( c1)
        bs2( c1)
        bb( c1)
        //write( "6")

//point7:
	కలమును_పైకి_ఎత్తు()
        goto(0,0)
        setHeading(( i + 1)* 2 * ang)
        ముందుకు_జరుగు(  bBase + side)
        ఎడమ_వైపు_తిరుగు( 2 * ang)
        ముందుకు_జరుగు( side + side)
        కుడి_వైపు_తిరుగు( 2* ang)
        ముందుకు_జరుగు( side)
        ఎడమ_వైపు_తిరుగు( 3 * ang)
	కలమును_కింద_పెట్టు()

        sb2( c2)
        sb( c2)
        ss( c2)
        bb( c2)
        //write( "7")

//point8:
	కలమును_పైకి_ఎత్తు()
        goto(0,0)
        setHeading(( i + 1)* 2 * ang)
        ముందుకు_జరుగు(  bBase + side)
        ఎడమ_వైపు_తిరుగు( 2 * ang)
        ముందుకు_జరుగు( side + side)
        కుడి_వైపు_తిరుగు( 3 * ang)
        ముందుకు_జరుగు( bBase + side)
	కలమును_కింద_పెట్టు()

        ss( c2)
        sb2( c2)
        sb( c2)
        ss( c2)
        sb2( c2)
        sb( c2)
        //write( "8")

//point9:
	కలమును_పైకి_ఎత్తు()
        goto(0,0)
        setHeading( i * 2* ang)
        ముందుకు_జరుగు(  bBase + side + bBase) //@6
        ఎడమ_వైపు_తిరుగు( 2 * ang)
        ముందుకు_జరుగు( side)
        కుడి_వైపు_తిరుగు( ang)
        ముందుకు_జరుగు( sBase + sBase)
        కుడి_వైపు_తిరుగు( 3 * ang)
	కలమును_కింద_పెట్టు()

        sb2( c2)
        sb( c2)
        bb( c1)
        ss( c1)
        bs( c1)
        bs2( c1)
        //write( "9")

//point10:
	కలమును_పైకి_ఎత్తు()
        goto(0,0)
        setHeading( i * 2 * ang)
        ముందుకు_జరుగు(  bBase + side + bBase) //@6
        కుడి_వైపు_తిరుగు( 2 * ang)
        ముందుకు_జరుగు( bBase)
        ఎడమ_వైపు_తిరుగు( 4 * ang)
	కలమును_కింద_పెట్టు()

        sb2( c1)
        sb( c1)
        sb2( c1)
        sb( c1)
        //write( "10")

//point11:
	కలమును_పైకి_ఎత్తు()
        goto(0,0)
        setHeading( i * 2 * ang)
        ముందుకు_జరుగు(  bBase + side + bBase) //@6
        కుడి_వైపు_తిరుగు( 2 * ang)
        ముందుకు_జరుగు( bBase + side)
        కుడి_వైపు_తిరుగు( 1 * ang)
        ముందుకు_జరుగు( side)
	కలమును_కింద_పెట్టు()

        bb( c1)
        bs( c1)
        bs2( c1)
        //write( "11")

//point12:
	కలమును_పైకి_ఎత్తు()
        goto(0,0)
        setHeading( i * 2 * ang)
        ముందుకు_జరుగు(  bBase + side + bBase) //@6
        కుడి_వైపు_తిరుగు( 2 * ang)
        ముందుకు_జరుగు( bBase + side)
        కుడి_వైపు_తిరుగు( ang)
        ముందుకు_జరుగు( side) // @11
        ముందుకు_జరుగు(side)
	కలమును_కింద_పెట్టు()

        bb( c1)
        bs( c1)
        //write( "12")

//point13:
	కలమును_పైకి_ఎత్తు()
        goto(0,0)
        setHeading(( i + 1)* 2 * ang)
        ముందుకు_జరుగు(  bBase + side)
        ఎడమ_వైపు_తిరుగు( 2 * ang)
        ముందుకు_జరుగు( side + side)
        కుడి_వైపు_తిరుగు( 3 * ang)
        ముందుకు_జరుగు( bBase + side) //@8
        కుడి_వైపు_తిరుగు( ang)
        ముందుకు_జరుగు( side)
        ఎడమ_వైపు_తిరుగు( 3 * ang)
	కలమును_కింద_పెట్టు()

        sb( c2)
        bs( c2)
        bs2( c2)
        bb( c2)
        //write( "13")

//point14:
	కలమును_పైకి_ఎత్తు()
        goto(0,0)
        setHeading( (i +1) * 2 * ang)
        ముందుకు_జరుగు( bBase + side)
        ఎడమ_వైపు_తిరుగు( 2 * ang)
        ముందుకు_జరుగు( side + side + sBase) // @5
        ఎడమ_వైపు_తిరుగు(  ang)
        ముందుకు_జరుగు( side)
        కుడి_వైపు_తిరుగు( 2* ang)
        ముందుకు_జరుగు( side + side)
	కలమును_కింద_పెట్టు()

        bs( c1)
        bs2( c1)
        bb( c2)
        bs( c2)
        bs2( c2)
        bb( c1)
        //write( "14")

//point15:
	కలమును_పైకి_ఎత్తు()
        goto(0,0)
        setHeading(( i + 1)* 2 * ang)
        ముందుకు_జరుగు(  bBase + side)
        ఎడమ_వైపు_తిరుగు( 2 * ang)
        ముందుకు_జరుగు( side + side)
        కుడి_వైపు_తిరుగు( 3 * ang)
        ముందుకు_జరుగు( bBase + side) //@8
        కుడి_వైపు_తిరుగు( ang)
        ముందుకు_జరుగు( side) //@13
        ముందుకు_జరుగు( bBase)
        ఎడమ_వైపు_తిరుగు( ang)
        ముందుకు_జరుగు( side)
	కలమును_కింద_పెట్టు()

        bs( c2)
        bs2( c2)
        bb( c1)
        bs( c1)
        bs2( c1)
        bb( c2)
        //write( "15")

//point16:
	కలమును_పైకి_ఎత్తు()
        goto(0,0)
        setHeading( i * 2* ang)
        ముందుకు_జరుగు(  bBase + side + bBase) //@6
        ఎడమ_వైపు_తిరుగు( 2 * ang)
        ముందుకు_జరుగు( side)
        కుడి_వైపు_తిరుగు( ang)
        ముందుకు_జరుగు( sBase + sBase) //@9
        కుడి_వైపు_తిరుగు( 2 * ang)
        ముందుకు_జరుగు( bBase)
        కుడి_వైపు_తిరుగు( ang)
        ముందుకు_జరుగు( side)
        ఎడమ_వైపు_తిరుగు( 2* ang)
	కలమును_కింద_పెట్టు()

        bs( c2)
        bs2( c2)
        bb( c1)
        bs( c1)
        bs2( c1)
        bb( c2)
        //write( "16")

//point17:
	కలమును_పైకి_ఎత్తు()
        goto(0,0)
        setHeading( i * 2* ang)
        ముందుకు_జరుగు(  bBase + side + bBase) //@6
        ఎడమ_వైపు_తిరుగు( 2 * ang)
        ముందుకు_జరుగు( side)
        కుడి_వైపు_తిరుగు( ang)
        ముందుకు_జరుగు( sBase + sBase) //@9
        కుడి_వైపు_తిరుగు( 2 * ang)
        ముందుకు_జరుగు( bBase)
        కుడి_వైపు_తిరుగు( ang)
        ముందుకు_జరుగు( side) //@16
        ముందుకు_జరుగు( side)
        ఎడమ_వైపు_తిరుగు( 2 * ang)
	కలమును_కింద_పెట్టు()

        ss( c2)
        sb2( c2)
        sb( c1)
        bs( c1)
        //write( "17")

//point18:
	కలమును_పైకి_ఎత్తు()
        goto(0,0)
        setHeading( (i +1) * 2 * ang)
        ముందుకు_జరుగు( bBase + side)
        ఎడమ_వైపు_తిరుగు( 2 * ang)
        ముందుకు_జరుగు( side + side + sBase) // @5
        ఎడమ_వైపు_తిరుగు(  ang)
        ముందుకు_జరుగు( side)
        కుడి_వైపు_తిరుగు( 2 * ang)
        ముందుకు_జరుగు( side + side) //@14
        కుడి_వైపు_తిరుగు( 2 * ang)
        ముందుకు_జరుగు( side) //@ intermediate point
        కుడి_వైపు_తిరుగు( 3 * ang)
	కలమును_కింద_పెట్టు()

        bs( c2)
        కుడి_వైపు_తిరుగు( 4 * ang)
        //write ( "14b")
        bs( c1)
        కుడి_వైపు_తిరుగు( 1 * ang)

	penup
        ముందుకు_జరుగు( side)
	కలమును_కింద_పెట్టు()

        bb( c2)
        bs( c2)
        bs2( c2)
        bb( c1)
        bs( c1)
        bs2( c1)
        //write( "18")

//point19:
	కలమును_పైకి_ఎత్తు()
        goto(0,0)
        setHeading( (i +1) * 2 * ang)
        ముందుకు_జరుగు( bBase + side)
        ఎడమ_వైపు_తిరుగు( 2 * ang)
        ముందుకు_జరుగు( side + side + sBase) // @5
        ఎడమ_వైపు_తిరుగు(  ang)
        ముందుకు_జరుగు( side)
        కుడి_వైపు_తిరుగు( 2 * ang)
        ముందుకు_జరుగు( side + side) //@14
        కుడి_వైపు_తిరుగు( 2 * ang)
        ముందుకు_జరుగు( side + side + side)
        ఎడమ_వైపు_తిరుగు( 2*ang)
	కలమును_కింద_పెట్టు()

        ss( c1)
        sb2( c1)
        sb( c2)
        bs( c2)
        //write( "19")

//point20:
	కలమును_పైకి_ఎత్తు()
        goto(0,0)
        setHeading( (i +1) * 2 * ang)
        ముందుకు_జరుగు( bBase + side)
        ఎడమ_వైపు_తిరుగు( 2 * ang)
        ముందుకు_జరుగు( side + side + sBase) // @5
        ఎడమ_వైపు_తిరుగు(  ang)
        ముందుకు_జరుగు( side)
        కుడి_వైపు_తిరుగు( 2 * ang)
        ముందుకు_జరుగు( side + side) //@14
        కుడి_వైపు_తిరుగు( 2 * ang)
        ముందుకు_జరుగు( side + side + side) //@19
        కుడి_వైపు_తిరుగు( ang)
        ముందుకు_జరుగు( sBase)
        ఎడమ_వైపు_తిరుగు( 3*ang)
	కలమును_కింద_పెట్టు()

        ss( c1)
        sb2( c1)
        sb( c2)
        ss( c2)
        //write( "20")

//point21:
	కలమును_పైకి_ఎత్తు()
        goto(0,0)
        setHeading( (i +1) * 2 * ang)
        ముందుకు_జరుగు( bBase + side)
        ఎడమ_వైపు_తిరుగు( 2 * ang)
        ముందుకు_జరుగు( side + side + sBase) // @5
        ఎడమ_వైపు_తిరుగు(  ang)
        ముందుకు_జరుగు( side)
        కుడి_వైపు_తిరుగు( 2 * ang)
        ముందుకు_జరుగు( side + side) //@14
        కుడి_వైపు_తిరుగు( 2 * ang)
        ముందుకు_జరుగు( side + side + side)
        కుడి_వైపు_తిరుగు( ang)
        ముందుకు_జరుగు( sBase) //@20
        ముందుకు_జరుగు( sBase)
        ఎడమ_వైపు_తిరుగు( 3*ang)
	కలమును_కింద_పెట్టు()

        ss( c1)
        bs( c1)
        bs2( c1)
        bb( c2)
        //write( "21")

//point22:
	కలమును_పైకి_ఎత్తు()
        goto(0,0)
        setHeading( (i +1) * 2 * ang)
        ముందుకు_జరుగు( bBase + side)
        ఎడమ_వైపు_తిరుగు( 2 * ang)
        ముందుకు_జరుగు( side + side + sBase) // @5
        ఎడమ_వైపు_తిరుగు(  ang)
        ముందుకు_జరుగు( side)
        కుడి_వైపు_తిరుగు( 2 * ang)
        ముందుకు_జరుగు( side + side) //@14
        కుడి_వైపు_తిరుగు( 2 * ang)
        ముందుకు_జరుగు( side + side + side)
        కుడి_వైపు_తిరుగు( ang)
        ముందుకు_జరుగు( sBase + sBase) //@21
        ముందుకు_జరుగు( side)
        ఎడమ_వైపు_తిరుగు( 2*ang)
	కలమును_కింద_పెట్టు()

        bs( c1)
        bs2( c1)
        bb( c2)
        bs( c2)
        //write( "22")

//point23:
	కలమును_పైకి_ఎత్తు()
        goto(0,0)
        setHeading( i * 2* ang)
        ముందుకు_జరుగు(  bBase + side + bBase) //@6
        ఎడమ_వైపు_తిరుగు( 2 * ang)
        ముందుకు_జరుగు( side)
        కుడి_వైపు_తిరుగు( ang)
        ముందుకు_జరుగు( sBase + sBase) //@9
        కుడి_వైపు_తిరుగు( 2 * ang)
        ముందుకు_జరుగు( bBase)
        కుడి_వైపు_తిరుగు( ang)
        ముందుకు_జరుగు( side + side) //@17
        కుడి_వైపు_తిరుగు( ang)
        ముందుకు_జరుగు( sBase)
        ఎడమ_వైపు_తిరుగు( 3 * ang)
	కలమును_కింద_పెట్టు()

        ss( c2)
        bs( c2)
        //write( "23")
   }
}


function demo () {
    reset()
    wrap(false)
    కలమును_కింద_పెట్టు()
    spiral( )
}
