// Koch Snowflake 2 -- Koch snowflake with embellishments

function diamond(side) {
  ముందుకు_జరుగు(side)
  ఎడమ_వైపు_తిరుగు(60)
  ముందుకు_జరుగు(side)
  ఎడమ_వైపు_తిరుగు(120)
  ముందుకు_జరుగు(side)
  ఎడమ_వైపు_తిరుగు(60)
  ముందుకు_జరుగు(side)
  ఎడమ_వైపు_తిరుగు(120)
}

function dazzle( side, inset) {
  inner(side,inset)
  newside = (side - Math.sqrt(3)* inset) /3
  కలమును_పైకి_ఎత్తు()
  ఎడమ_వైపు_తిరుగు(30)
  ముందుకు_జరుగు(inset)
  కుడి_వైపు_తిరుగు(30)
  ముందుకు_జరుగు(newside)
  ఎడమ_వైపు_తిరుగు(60)
  కలమును_కింద_పెట్టు()
  ముందుకు_జరుగు(newside)
  diamond(newside/3)
  ముందుకు_జరుగు(newside)
  ఎడమ_వైపు_తిరుగు(120)
  ముందుకు_జరుగు(newside)
  ఎడమ_వైపు_తిరుగు(120)
  ముందుకు_జరుగు(newside)
  diamond(newside/3)
  ముందుకు_జరుగు(newside)
  ఎడమ_వైపు_తిరుగు(120)
  ముందుకు_జరుగు(newside)
  ఎడమ_వైపు_తిరుగు(120)
  ముందుకు_జరుగు(newside)
  diamond(newside/3)
  ముందుకు_జరుగు(newside)
  ఎడమ_వైపు_తిరుగు(120)
  ముందుకు_జరుగు(newside)
  కలమును_పైకి_ఎత్తు()
  కుడి_వైపు_తిరుగు(120)
  ముందుకు_జరుగు(newside)
  ఎడమ_వైపు_తిరుగు(30)
  ముందుకు_జరుగు(inset)
  ఎడమ_వైపు_తిరుగు(150)
  కలమును_కింద_పెట్టు()
}


function inner( side, inset) {
  కలమును_పైకి_ఎత్తు()
  ఎడమ_వైపు_తిరుగు( 30)
  ముందుకు_జరుగు( inset)
  కుడి_వైపు_తిరుగు(30)
  కలమును_కింద_పెట్టు()
  ముందుకు_జరుగు( side - Math.sqrt(3)*inset)
  ఎడమ_వైపు_తిరుగు(120)
  ముందుకు_జరుగు( side - Math.sqrt(3)*inset)
  ఎడమ_వైపు_తిరుగు(120)
  ముందుకు_జరుగు( side - Math.sqrt(3)*inset)
  కలమును_పైకి_ఎత్తు()
  కుడి_వైపు_తిరుగు(30)
  ముందుకు_జరుగు( inset)
  ఎడమ_వైపు_తిరుగు(150)
  కలమును_కింద_పెట్టు()
}

function starOfDavid (side) {
  కలమును_పైకి_ఎత్తు()
  వెనుకకు_జరుగు(2*side)
  కుడి_వైపు_తిరుగు(30)
  ముందుకు_జరుగు(side)
  కుడి_వైపు_తిరుగు(60)
  కలమును_కింద_పెట్టు()
  for (var i=0;i<6;i=i+1) {
    inner(side, 10)
    inner(side, 20)
    dazzle(side, 30)
    ముందుకు_జరుగు(side)
    ఎడమ_వైపు_తిరుగు(120)
    ముందుకు_జరుగు(side)

    ఎడమ_వైపు_తిరుగు(60)
    ముందుకు_జరుగు(side)
    ఎడమ_వైపు_తిరుగు(120)

    inner(side, 10)
    inner(side, 20)
    dazzle(side, 30)
    ముందుకు_జరుగు(side)
    ఎడమ_వైపు_తిరుగు(120)
    ముందుకు_జరుగు(side)
  }
}

function kochSnowFlake (side, order) {
  kochLine(side, order)
  కుడి_వైపు_తిరుగు(120)
  kochLine(side, order)
  కుడి_వైపు_తిరుగు(120)
  kochLine(side, order)
  కుడి_వైపు_తిరుగు(120)
} 


function kochLine (length, order) {
  //assume drawn on the current కోణము
  if (order == 0) {
    ముందుకు_జరుగు(length);
  } else {
    //break line and bump out to the left
    kochLine (length/3, order-1);
    ఎడమ_వైపు_తిరుగు(60); 
    kochLine (length/3, order-1);
    కుడి_వైపు_తిరుగు(120); 
    kochLine (length/3, order-1);
    ఎడమ_వైపు_తిరుగు(60); 
    kochLine (length/3, order-1);
  }
}


function demo () {
  reset();
  size = Math.min( maxX(), maxY()) * .6
  తాబేలును_దాచు();
  starOfDavid( size)
  ముందుకు_జరుగు(size)
  ఎడమ_వైపు_తిరుగు(180)
  //తాబేలును_చూపు()
  kochSnowFlake(3*size, 2)
  kochSnowFlake(3*size, 3)
}
