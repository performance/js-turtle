// Squiggle -- draw a random squiggle

function squiggle(steps,కోణము) {
  widthInc = 5 / steps;
  distInc = 10 / steps;
  w = 0.1;
  repeat (steps, function () {
    వెడల్పు(w);
    ముందుకు_జరుగు(random(1,10));
    కుడి_వైపు_తిరుగు(కోణము);
    కోణము = కోణము - 1;
    w = w + widthInc;
  })
}

function drawRandomSquiggle() {
  రంగు(random(16));
  goto(random(minX(), maxX()), random(minY(), maxY()));
  కోణము(random(0,360));
  squiggle(random(100,1000), random(5,90));
}

function demo() {
  ఆది_స్థితి()
  తాబేలును_దాచు();
  drawRandomSquiggle();
}
