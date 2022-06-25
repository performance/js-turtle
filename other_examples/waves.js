// Waves -- wave interference patterns

//draw the radials
_విధానము_     drawRadials(side) {
	for (_సర్వత్ర_   i=0; i<16; i++) {
		స్థానము_మార్చు(0,0)
		కోణము(i/16 * 360)
		ముందుకు_జరుగు( size)
	}
}

/*
need to calculate the angles for starting and stopping the arcs.
distances are known. This math is a bit tough.

*/


//
_విధానము_     ప్రదర్శన() {
	ఆది_స్థితి()
	 చుట్టొద్దు()
	కుంచికను_దాచు()
	size=200
	step = 4
	n = 2* size/step
	స్థానము_మార్చు(0,0)
	వృత్తము( size)
	స్థానము_మార్చు(size,0)
	for( _సర్వత్ర_   i=0; i< n; i=i+step){
		చాపము(i * step, 180, false)
	}
	స్థానము_మార్చు(-size,0)
	for( _సర్వత్ర_   i=0; i< n; i=i+step){
		చాపము(i * step, 180, true)
	}
}
