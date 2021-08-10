// Koch Snowflake 2 -- Koch snowflake with embellishments

_విధానము_     diamond(side) {
  ముందుకు_జరుగు(side)
  ఎడమ_వైపు_తిరుగు(60)
  ముందుకు_జరుగు(side)
  ఎడమ_వైపు_తిరుగు(120)
  ముందుకు_జరుగు(side)
  ఎడమ_వైపు_తిరుగు(60)
  ముందుకు_జరుగు(side)
  ఎడమ_వైపు_తిరుగు(120)
}

_విధానము_     dazzle( side, inset) {
  inner(side,inset)
  newside = (side - Math.sqrt(3)* inset) /3
  కుంచికను_పైకి_ఎత్తు()
  ఎడమ_వైపు_తిరుగు(30)
  ముందుకు_జరుగు(inset)
  కుడి_వైపు_తిరుగు(30)
  ముందుకు_జరుగు(newside)
  ఎడమ_వైపు_తిరుగు(60)
  కుంచికను_కింద_పెట్టు()
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
  కుంచికను_పైకి_ఎత్తు()
  కుడి_వైపు_తిరుగు(120)
  ముందుకు_జరుగు(newside)
  ఎడమ_వైపు_తిరుగు(30)
  ముందుకు_జరుగు(inset)
  ఎడమ_వైపు_తిరుగు(150)
  కుంచికను_కింద_పెట్టు()
}


_విధానము_     inner( side, inset) {
  కుంచికను_పైకి_ఎత్తు()
  ఎడమ_వైపు_తిరుగు( 30)
  ముందుకు_జరుగు( inset)
  కుడి_వైపు_తిరుగు(30)
  కుంచికను_కింద_పెట్టు()
  ముందుకు_జరుగు( side - Math.sqrt(3)*inset)
  ఎడమ_వైపు_తిరుగు(120)
  ముందుకు_జరుగు( side - Math.sqrt(3)*inset)
  ఎడమ_వైపు_తిరుగు(120)
  ముందుకు_జరుగు( side - Math.sqrt(3)*inset)
  కుంచికను_పైకి_ఎత్తు()
  కుడి_వైపు_తిరుగు(30)
  ముందుకు_జరుగు( inset)
  ఎడమ_వైపు_తిరుగు(150)
  కుంచికను_కింద_పెట్టు()
}

_విధానము_     starOfDavid (side) {
  కుంచికను_పైకి_ఎత్తు()
  వెనుకకు_జరుగు(2*side)
  కుడి_వైపు_తిరుగు(30)
  ముందుకు_జరుగు(side)
  కుడి_వైపు_తిరుగు(60)
  కుంచికను_కింద_పెట్టు()
  for (_సర్వత్ర_   i=0;i<6;i=i+1) {
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

_విధానము_     kochSnowFlake (side, order) {
  kochLine(side, order)
  కుడి_వైపు_తిరుగు(120)
  kochLine(side, order)
  కుడి_వైపు_తిరుగు(120)
  kochLine(side, order)
  కుడి_వైపు_తిరుగు(120)
} 


_విధానము_     kochLine (length, order) {
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


_విధానము_     ప్రదర్శన() {
  ఆది_స్థితి();
  size = Math.min( గరిష్ఠX(), గరిష్ఠY()) * .6
  కుంచికను_దాచు();
  starOfDavid( size)
  ముందుకు_జరుగు(size)
  ఎడమ_వైపు_తిరుగు(180)
  //కుంచికను_చూపు()
  kochSnowFlake(3*size, 2)
  kochSnowFlake(3*size, 3)
}
