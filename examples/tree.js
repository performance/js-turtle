// Tree Symmetrical -- draw a symmetrical tree

//GLOBALS
_సర్వత్ర_   scale // varible to influence overall tree size


//  code inspired from a code.org lesson
_విధానము_     drawTree(depth, branches) {
  _సర్వత్ర_   spread = 120;	//spread is కోణము of left to right branches
  _సర్వత్ర_   tilt = 0;		//tilt is కోణము of the cluster
  _సర్వత్ర_   ratio = 7;	//ratio is branch depth to length ratio
  if (depth>0) { 
   రంగు_మార్చు( యాదృచ్ఛిక_సంఖ్య( 16));
   కుంచికను_కింద_పెట్టు();
   వెడల్పు(depth + యాదృచ్ఛిక_సంఖ్య(0,2));
   ముందుకు_జరుగు(scale* ratio * depth);
   ఎడమ_వైపు_తిరుగు(tilt + spread/2 + spread/branches/2);
   ఆవర్తించు(branches, _విధానము_     () {
     కుడి_వైపు_తిరుగు(spread/branches);
     drawTree(depth-1, branches);
   });
   ఎడమ_వైపు_తిరుగు(spread - tilt - spread/2 - spread/branches/2); // _ఫలము_  to start కోణము
   కుంచికను_పైకి_ఎత్తు();
   వెనుకకు_జరుగు(scale * ratio * depth); // backup to start point
  }
}

// draw a more random tree
_విధానము_     drawRTree(depth, branches) {
  _సర్వత్ర_   spread = యాదృచ్ఛిక_సంఖ్య(90,180);	// spread is కోణము of left to right branches
  _సర్వత్ర_   tilt = యాదృచ్ఛిక_సంఖ్య(-15,15);	// tilt is కోణము of the cluster
  _సర్వత్ర_   ratio = random (5,9);	// ratio is branch depth to length ratio
  if (depth>0) { 
   రంగు_మార్చు( యాదృచ్ఛిక_సంఖ్య( 16));
   కుంచికను_కింద_పెట్టు();
   వెడల్పు(depth + యాదృచ్ఛిక_సంఖ్య(0,2));
   ముందుకు_జరుగు(scale * ratio * depth);
   ఎడమ_వైపు_తిరుగు(tilt + spread/2 + spread/branches/2);
   ఆవర్తించు(branches, _విధానము_     () {
     కుడి_వైపు_తిరుగు(spread/branches);
     drawTree(depth-1, branches);
   });
   ఎడమ_వైపు_తిరుగు(spread - tilt - spread/2 - spread/branches/2); // _ఫలము_  to start కోణము
   కుంచికను_పైకి_ఎత్తు();
   వెనుకకు_జరుగు(scale * ratio * depth); // backup to start point
  }
}

_విధానము_     ప్రదర్శన() {
  ఆది_స్థితి();
  కుంచికను_దాచు();
  scale = .01 * Math.min( గరిష్ఠX(), గరిష్ఠY())
  కుంచికను_పైకి_ఎత్తు();
  వెనుకకు_జరుగు(scale * 70);
  కుంచికను_కింద_పెట్టు();
  drawRTree(6,4)
}
