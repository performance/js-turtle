// Color Changing Dots -- show changing colors of a string of dots or lights

/*
Maybe you can adapt to make a traffic light simulator or Christmas light
controller.
*/

function drawDot () {
    color(random(16))
    dot()
    ముందుకు_జరుగు(15)
}

function drawRowOfDots () {
  setpos(minX() + 20,0)
  repeat (32, drawDot)
}

function colorChangingDots () {
  reset()
  wrap(false)
  setpos(minX(),0)
  కోణము(90)
  కలమును_కింద_పెట్టు()
  color ("black")
  penwidth (80)
  ముందుకు_జరుగు(maxX() + maxX()) //draw black band
  కలమును_పైకి_ఎత్తు()
  width (1)
  animate( drawRowOfDots, 500)
}

demo = colorChangingDots;
