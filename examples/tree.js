// Tree Symmetrical -- draw a symmetrical tree

//GLOBALS
var scale // varible to influence overall tree size


//  code inspired from a code.org lesson
function drawTree(depth, branches) {
  var spread = 120;	//spread is కోణము of left to right branches
  var tilt = 0;		//tilt is కోణము of the cluster
  var ratio = 7;	//ratio is branch depth to length ratio
  if (depth>0) { 
   రంగు( random( 16));
   కలమును_కింద_పెట్టు();
   వెడల్పు(depth + random(0,2));
   ముందుకు_జరుగు(scale* ratio * depth);
   ఎడమ_వైపు_తిరుగు(tilt + spread/2 + spread/branches/2);
   repeat(branches, function () {
     కుడి_వైపు_తిరుగు(spread/branches);
     drawTree(depth-1, branches);
   });
   ఎడమ_వైపు_తిరుగు(spread - tilt - spread/2 - spread/branches/2); // return to start కోణము
   కలమును_పైకి_ఎత్తు();
   వెనుకకు_జరుగు(scale * ratio * depth); // backup to start point
  }
}

// draw a more random tree
function drawRTree(depth, branches) {
  var spread = random(90,180);	// spread is కోణము of left to right branches
  var tilt = random(-15,15);	// tilt is కోణము of the cluster
  var ratio = random (5,9);	// ratio is branch depth to length ratio
  if (depth>0) { 
   రంగు( random( 16));
   కలమును_కింద_పెట్టు();
   వెడల్పు(depth + random(0,2));
   ముందుకు_జరుగు(scale * ratio * depth);
   ఎడమ_వైపు_తిరుగు(tilt + spread/2 + spread/branches/2);
   repeat(branches, function () {
     కుడి_వైపు_తిరుగు(spread/branches);
     drawTree(depth-1, branches);
   });
   ఎడమ_వైపు_తిరుగు(spread - tilt - spread/2 - spread/branches/2); // return to start కోణము
   కలమును_పైకి_ఎత్తు();
   వెనుకకు_జరుగు(scale * ratio * depth); // backup to start point
  }
}

function demo() {
  ఆది_స్థితి();
  కుంచికను_దాచు();
  scale = .01 * Math.min( గరిష్ఠX(), గరిష్ఠY())
  కలమును_పైకి_ఎత్తు();
  వెనుకకు_జరుగు(scale * 70);
  కలమును_కింద_పెట్టు();
  drawRTree(6,4)
}
