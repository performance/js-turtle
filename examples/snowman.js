// Snowman -- draw a simple snowman

// draw the three cirles for the body
చెరిపి_వేయి()
వెడల్పు(1)
goto (0,-100)
circle (80)
goto (0,-100+80+60)
circle (60)
goto (0,-100+80+60+60+40)
circle (40)

// add the coal for the eyes, nose and mouth
goto (-15,160)
dot()
goto (15,160)
dot()
goto (0,140)
dot()
goto (0,120)
dot()
goto (15,125)
dot()
goto (-15,125)
dot()

// add coal for the buttons
goto (0,60)
dot()
goto (0,40)
dot()
goto (0,20)
dot()
goto (0,0)
dot()

// add stick for a right arm
goto (56,60)
కోణము (60)
వెడల్పు(3)
ముందుకు_జరుగు(40)
ఎడమ_వైపు_తిరుగు(15)
ముందుకు_జరుగు(25)
వెనుకకు_జరుగు(25)
కుడి_వైపు_తిరుగు(20)
ముందుకు_జరుగు(30)
వెనుకకు_జరుగు(30)
కుడి_వైపు_తిరుగు(10)
ముందుకు_జరుగు(20)

// add stick for a left arm
goto (-56,60)
కోణము (-60)
వెడల్పు(3)
ముందుకు_జరుగు(40)
ఎడమ_వైపు_తిరుగు(15)
ముందుకు_జరుగు(25)
వెనుకకు_జరుగు(25)
కుడి_వైపు_తిరుగు(20)
ముందుకు_జరుగు(30)
వెనుకకు_జరుగు(30)
కుడి_వైపు_తిరుగు(10)
ముందుకు_జరుగు(20)
