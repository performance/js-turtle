// Clock, Analog -- draw and animate an analog clock

//GLOBALS
_సర్వత్ర_   size;

//draw the tick marks around the edge of the clock
_విధానము_     ticks(x, y, వ్యాసార్థము) {
   _సర్వత్ర_   tickLen = 7;
   _సర్వత్ర_   gap = వ్యాసార్థము - tickLen;
   రంగు_మార్చు( నీలము );
   వెడల్పు(1);
   for (_సర్వత్ర_   theta = 0; theta < 360; theta = theta + 6) {
      // Thicken hour marks
      if (theta % 30 != 0) {
         వెడల్పు(1/130* size);
      } else {
         వెడల్పు(3/130* size);
      }
      కుంచికను_పైకి_ఎత్తు();
      స్థానము_మార్చు(0,0);
      కోణము(theta);
      ముందుకు_జరుగు(gap);
      కుంచికను_కింద_పెట్టు();
      ముందుకు_జరుగు(tickLen);
   }
}


// draw the hour numbers on the clock face
_విధానము_     numbers(x, y, వ్యాసార్థము) {
   కుంచికను_పైకి_ఎత్తు();
   fontSize = 20/130 * size
   అక్షరరూపము_స్థాపించు(fontSize+"px sans-serif");
   రంగు_మార్చు("నలుపు");
   for (_సర్వత్ర_   hour = 1; hour <= 12; hour++) {
      స్థానము_మార్చు(x,y);
      కోణము(hour * 30);
      ముందుకు_జరుగు(వ్యాసార్థము); // to center of digit
      కోణము(180);
      ముందుకు_జరుగు(10/130 * size); // vertical correction to baseline
      కుడి_వైపు_తిరుగు(90);
      if (hour < 10) {
        ముందుకు_జరుగు(6/130 * size); // horizontal correction to lower left corner
      } else {
        ముందుకు_జరుగు(10/130 * size)
      }
      కుడి_వైపు_తిరుగు(180);
      వ్రాయి(hour);
   }
   కుంచికను_కింద_పెట్టు();
}

// draw one of the clock hands
_విధానము_     hand (theta, w, length, col) {
   _సర్వత్ర_   stepSize = 5;
   _సర్వత్ర_   widthDelta = w / (length / stepSize);
   స్థానము_మార్చు(0, 0);
   కోణము(theta);
   రంగు_మార్చు(col);
   for (_సర్వత్ర_   step = 0; step < length; step = step + stepSize) {
      వెడల్పు(w);
      ముందుకు_జరుగు(stepSize);
      w = w - widthDelta;
   }
}

_విధానము_     hands(hours, minutes, seconds) {
    // draw seconds hand
    _సర్వత్ర_   secDegreesPerSecond = 6;	// = 360 degrees/60 seconds /minute
    hand(seconds * secDegreesPerSecond, 4, 100/130 * size, "red");
    // draw minutes hand 
    _సర్వత్ర_   minDegreePerSecond = 0.1;	// = 360 degrees /3600 seconds /hour
    _సర్వత్ర_   minutesInSeconds = minutes * 60 + seconds;
    hand(minutesInSeconds * minDegreePerSecond, 10, 100/130 * size, "blue");
    // draw hours hand
    _సర్వత్ర_   hourDegreePerSecond = .1/12;	// = 360 degrees /3600 seconds per hour /12 hours per half day /half day
    _సర్వత్ర_   hoursInSeconds = ((hours % 12) * 3600) + minutesInSeconds;
    hand(hoursInSeconds * hourDegreePerSecond, 10, 60/130 * size, "blue");
}

// refresh the entire clock
_విధానము_     clock() {
   చెరిపి_వేయి();
   size = .9 *  Math.min( గరిష్ఠX(), గరిష్ఠY())
  numbers(0, 0, 110/130 * size);
   రంగు_మార్చు("lightgreen");
   స్థానము_మార్చు(0,0);
   వెడల్పు(1/130* size)
   వృత్తము(130/130 * size );
   ticks(0, 0, 130/130 * size );
   _సర్వత్ర_   d = new Date();
   hands(d.getHours(), d.getMinutes(), d.getSeconds());
}

_విధానము_     ప్రదర్శన() {
   కుంచికను_దాచు();
   // refresh the clock every second
   ఆడించు(clock,1000);
}
