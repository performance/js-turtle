// Koch Snowflakes, Stacked -- draw an set of stacked Koch snowflakes


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


_విధానము_     kochSnowflake (length, order) {
  కోణము (30);
  స్థానము_మార్చు(-length/2,-.3 * length);
  kochLine (length, order);
  కుడి_వైపు_తిరుగు(120);
  kochLine (length, order);
  కుడి_వైపు_తిరుగు(120);
  kochLine (length, order);
  కుడి_వైపు_తిరుగు(120);
}
  

_విధానము_     ప్రదర్శన() {
  ఆది_స్థితి()
  size = .045* Math.min(గరిష్ఠX(), గరిష్ఠY())
  కుంచికను_దాచు();
  for (_సర్వత్ర_   i=0; i<6; i++) {
    kochSnowflake( size*(i+1)*(i+1), i)
  }
}
