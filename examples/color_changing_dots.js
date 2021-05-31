// Color Changing Dots -- show changing colors of a string of dots or lights

/*
Maybe you can adapt to make a traffic light simulator or Christmas light
controller.
*/

function drawDot () {
    రంగు_మార్చు(యాదృచఛిక_సంఖ్య(16))
    నిండు_వృత్తము()
    ముందుకు_జరుగు(15)
}

function drawRowOfDots () {
  స్థానము_మార్చు(కనిష్ఠX() + 20,0)
  ఆవర్తించు(32, drawDot)
}

function colorChangingDots () {
  ఆది_స్థితి()
   wrap(false)
  స్థానము_మార్చు(కనిష్ఠX(),0)
  కోణము(90)
  కలమును_కింద_పెట్టు()
  రంగు_మార్చు("నలుపు")
  వెడల్పు(80)
  ముందుకు_జరుగు(గరిష్ఠX() + గరిష్ఠX()) //draw black band
  కలమును_పైకి_ఎత్తు()
  వెడల్పు(1)
  ఆడించు( drawRowOfDots, 500)
}

demo = colorChangingDots;
