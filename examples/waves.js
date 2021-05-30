// Waves -- wave interference patterns

//draw the radials
function drawRadials(side) {
	for (var i=0; i<16; i++) {
		goto(0,0)
		కోణము(i/16 * 360)
		ముందుకు_జరుగు( size)
	}
}

/*
need to calculate the angles for starting and stopping the arcs.
distances are known. This math is a bit tough.

*/


//
function demo() {
	ఆది_స్థితి()
	wrap(false)
	కుంచికను_దాచు()
	size=200
	step = 4
	n = 2* size/step
	goto(0,0)
	వృత్తము( size)
	goto(size,0)
	for( var i=0; i< n; i=i+step){
		చాపము(i * step, 180, false)
	}
	goto(-size,0)
	for( var i=0; i< n; i=i+step){
		చాపము(i * step, 180, true)
	}
}
