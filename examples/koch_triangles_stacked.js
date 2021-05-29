// Koch Snowflakes, Stacked -- draw an set of stacked Koch snowflakes


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


function kochSnowflake (length, order) {
  కోణము (30);
  goto (-length/2,-.3 * length);
  kochLine (length, order);
  కుడి_వైపు_తిరుగు(120);
  kochLine (length, order);
  కుడి_వైపు_తిరుగు(120);
  kochLine (length, order);
  కుడి_వైపు_తిరుగు(120);
}
  

function demo() {
  reset()
  size = .045* Math.min(maxX(), maxY())
  తాబేలును_దాచు();
  for (var i=0; i<6; i++) {
    kochSnowflake( size*(i+1)*(i+1), i)
  }
}
