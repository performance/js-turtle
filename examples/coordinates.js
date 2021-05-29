// Coordinates -- Draw the axes of the coordinate system on the canvas

function lines () {
  చెరిపి_వేయి()
  కలమును_కింద_పెట్టు()

  goto(0,minY())
  కోణము(0)
  ముందుకు_జరుగు(2*maxY())

  goto(minX(),0)
  కోణము(90)
  ముందుకు_జరుగు(2*maxX())

  //lable the axes
  setFont("bold 14px sans-serif");
  goto (0+10,maxY()-25)
  కోణము (90)
  write (maxY())

  goto (maxX()-5,+10)
  కోణము (0)
  write (maxX())

  goto (10,minY()+5)
  కోణము (90)
  write (minY())

  goto (minX()+25,0+10)
  కోణము (0)
  write (minX())
}


function ticks (dir, limit, step) {
  var tickLen = 5
  కోణము(dir)
  goto(0,0)
  కలమును_పైకి_ఎత్తు()
  for (i=1; i*step<limit; i=i+1) {

    ముందుకు_జరుగు(step)
    ఎడమ_వైపు_తిరుగు(90)
    if (i%5 == 0) {
      ముందుకు_జరుగు(tickLen)
      కలమును_కింద_పెట్టు()
      వెనుకకు_జరుగు(tickLen*2)
      కలమును_పైకి_ఎత్తు()
      ముందుకు_జరుగు(tickLen)
      కుడి_వైపు_తిరుగు(90)
    } else {
      ముందుకు_జరుగు(tickLen/2)
      కలమును_కింద_పెట్టు()
      వెనుకకు_జరుగు(tickLen)
      కలమును_పైకి_ఎత్తు()
      ముందుకు_జరుగు(tickLen/2)
      కుడి_వైపు_తిరుగు(90)
    }
  }
}

function demo() {
  lines()
  ticks (0, maxY(), 10)
  ticks (90, maxX(), 10)
  ticks (180, -minY(), 10)
  ticks (270, -minX(), 10)
}
