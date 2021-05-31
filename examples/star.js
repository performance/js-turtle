// Star -- draw a simple star

function star (side) {
  కలమును_పైకి_ఎత్తు()
  ముందుకు_జరుగు(.54*side)
  turn (180-18)
  కలమును_కింద_పెట్టు()
  var i=0
  while (i<5){
    ముందుకు_జరుగు(side)
    కుడి_వైపు_తిరుగు(180-36)
    i = i + 1
  } 
  turn (180+18)
}   
    
    
function demo () {
  ఆది_స్థితి()
  side =  1.8* Math.min( గరిష్ఠX(), గరిష్ఠY())
  ఆకారాము_ప్రారంభించు()
  star ( side)
  ఆకారాము_ముగించు("gold")
  కుంచికను_దాచు()
}
