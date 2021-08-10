US_flag ='\
// US Flag -- draw an American Flag\n\
\n\
_విధానము_     star (size) {\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  ముందుకు_జరుగు(.54*size)\n\
  turn (180-18)\n\
  కుంచికను_కింద_పెట్టు()\n\
  _సర్వత్ర_   i=0\n\
  ఆకారము_ప్రారంభించు()\n\
  while (i<5){\n\
    ముందుకు_జరుగు(size)\n\
    కుడి_వైపు_తిరుగు(180-36)\n\
    i = i + 1\n\
  }\n\
  ఆకారము_ముగించు("white")\n\
  turn (180+18)\n\
  వెనుకకు_జరుగు(.54*size)\n\
}\n\
\n\
\n\
_విధానము_     starLine(count, size, sep) {\n\
  while (count > 0) {\n\
    star(size)\n\
    కుంచికను_పైకి_ఎత్తు()\n\
    కుడి_వైపు_తిరుగు(90)\n\
    ముందుకు_జరుగు(sep)\n\
    ఎడమ_వైపు_తిరుగు(90)\n\
    కుంచికను_కింద_పెట్టు()\n\
    count = count -1;\n\
  }\n\
}\n\
\n\
\n\
_విధానము_     rectangle (width, height) {\n\
  // assume x, y at upper right hand corner in and out\n\
  // assume కోణము is 90 in and out\n\
  కోణము (90)\n\
  ముందుకు_జరుగు(width)\n\
  కుడి_వైపు_తిరుగు(90)\n\
  ముందుకు_జరుగు(height)\n\
  కుడి_వైపు_తిరుగు(90)\n\
  ముందుకు_జరుగు(width)\n\
  కుడి_వైపు_తిరుగు(90)\n\
  ముందుకు_జరుగు(height)\n\
  కుడి_వైపు_తిరుగు(90)\n\
}\n\
\n\
\n\
_విధానము_     stripes (width, spacing, number) {\n\
  //assume x, y is at right side of stripe\n\
  //assume కోణము is -90\n\
  _సర్వత్ర_   i = 0\n\
  while (i<number) {\n\
    కుంచికను_కింద_పెట్టు()\n\
    ముందుకు_జరుగు(width)\n\
    కుంచికను_పైకి_ఎత్తు()\n\
    // make the turn\n\
    if (i%2 == 0) {\n\
      ఎడమ_వైపు_తిరుగు(90)\n\
      ముందుకు_జరుగు(spacing)\n\
      ఎడమ_వైపు_తిరుగు(90)\n\
    } else {\n\
      కుడి_వైపు_తిరుగు(90)\n\
      ముందుకు_జరుగు(spacing)\n\
      కుడి_వైపు_తిరుగు(90)\n\
    }\n\
    i = i + 1\n\
  }\n\
}\n\
\n\
\n\
_విధానము_     flag() {\n\
  // ***Constants\n\
  //_సర్వత్ర_   xBase = -200 // base is upper left corner\n\
  //_సర్వత్ర_   yBase = 200\n\
  //_సర్వత్ర_   flagHeight = 250 // everything else is proportional to flagHeight\n\
 \n\
  _సర్వత్ర_   flagHeight =  1.8 * Math.min(గరిష్ఠX()/1.9, గరిష్ఠY())\n\
  _సర్వత్ర_   flagWidth = 1.9 * flagHeight\n\
console.log("X="+2*గరిష్ఠX()+ " Y="+2*గరిష్ఠY() + " W="+flagWidth + "H="+flagHeight)\n\
  _సర్వత్ర_   xBase = -flagWidth/2\n\
  _సర్వత్ర_   yBase = flagHeight/2 \n\
\n\
  _సర్వత్ర_   stripeWidth = flagHeight/13\n\
  _సర్వత్ర_   fieldWidth = .76 * flagHeight\n\
  _సర్వత్ర_   fieldHeight = 7 * stripeWidth\n\
  _సర్వత్ర_   xSeparation = .063 * flagHeight\n\
  _సర్వత్ర_   ySeparation = .054 * flagHeight\n\
  starSize = .05 *flagHeight // star size\n\
  //outline flag and field\n\
  ఆది_స్థితి()\n\
   చుట్టొద్దు()\n\
  కుంచికను_దాచు()\n\
  స్థానము_మార్చు(xBase, yBase)\n\
  కోణము (90)\n\
  రంగు_మార్చు("నలుపు")\n\
\n\
  వెడల్పు(1)\n\
  rectangle (flagWidth, flagHeight)\n\
  rectangle (fieldWidth, fieldHeight)\n\
\n\
  //  draw stripes\n\
  రంగు_మార్చు( ఎరుపు );\n\
  వెడల్పు(stripeWidth);\n\
  స్థానము_మార్చు(xBase+flagWidth, yBase-stripeWidth/2)\n\
  కోణము (-90)\n\
  stripes (flagWidth-fieldWidth, 2*stripeWidth, 4)\n\
  stripes (flagWidth, 2*stripeWidth, 3)\n\
\n\
  //draw field\n\
  రంగు_మార్చు( నీలము )\n\
  స్థానము_మార్చు(xBase+fieldWidth, yBase-stripeWidth/2)\n\
  కోణము (-90)\n\
  stripes (fieldWidth, stripeWidth, 7)\n\
\n\
  //draw field of stars\n\
  కోణము(0)\n\
  వెడల్పు(2)\n\
  రంగు_మార్చు( తెలుపు )\n\
  కుంచికను_కింద_పెట్టు()\n\
\n\
  _సర్వత్ర_   row = 0\n\
  while (row<9) {\n\
   if (row % 2 == 0) {\n\
      స్థానము_మార్చు(xBase + xSeparation, yBase - (row +1) * ySeparation)\n\
      starLine(6, starSize, xSeparation*2)\n\
    } else {\n\
      స్థానము_మార్చు(xBase + 2* xSeparation, yBase - (row +1) * ySeparation)\n\
      starLine(5, starSize, xSeparation * 2)\n\
    }\n\
    row = row + 1;\n\
  }\n\
}\n\
  \n\
ప్రదర్శన = flag\n\
'
arc_test ='\
// Arc and Curve Test -- test of arcs and curves\n\
// this draws five figures\n\
\n\
radialArc = (x, y, startRadius, armAngle, tangentAngle, arcRadius, extent, సవ్యము) => {\n\
  స్థానము_మార్చు(x,y);\n\
  కుంచికను_పైకి_ఎత్తు();\n\
  కోణము(armAngle);\n\
  ముందుకు_జరుగు(startRadius);\n\
  కుడి_వైపు_తిరుగు(tangentAngle);\n\
  కుంచికను_కింద_పెట్టు();\n\
  వృత్తము(arcRadius,extent, సవ్యము);\n\
}\n\
\n\
\n\
పళ్ళచక్రం = (x,y, వ్యాసార్థము, pedals, సవ్యము) => {\n\
\n\
  లెక్క_పెడుతూ_ఆవర్తించు( pedals, (i) => {\n\
    if (సవ్యము) {\n\
      radialArc (x,y, వ్యాసార్థము, 360*i/pedals, -135, 10, 90, సవ్యము);\n\
    } else {\n\
      radialArc (x,y, వ్యాసార్థము, 360*i/pedals, 45, 10, 90, !సవ్యము);\n\
    }\n\
  });\n\
}\n\
\n\
roundedOctogon = (side, వ్యాసార్థము) => {\n\
  ఆవర్తించు((8),  ()=> {\n\
    ముందుకు_జరుగు(side);\n\
    కుడివైపు_చాపాము(వ్యాసార్థము,45);\n\
  })\n\
}\n\
\n\
\n\
roundedOctogonL = (side, వ్యాసార్థము) => {\n\
  ఆవర్తించు((8),  ()=> {\n\
    ముందుకు_జరుగు(side);\n\
    ఎడమవైపు_చాపాము(వ్యాసార్థము,45);\n\
  })\n\
}\n\
\n\
\n\
circleEyeR = (అ, ని, న, outerRadius) => {\n\
  స్థానము_మార్చు(అ, ని);\n\
  వృత్తము(outerRadius); //outer circle\n\
\n\
  లెక్క_పెడుతూ_ఆవర్తించు ( న, ( చ ) => {\n\
    స్థానము_మార్చు(అ, ని);\n\
    కోణము (చ/న * 360);\n\
    కుంచికను_పైకి_ఎత్తు();\n\
    ముందుకు_జరుగు(outerRadius);\n\
    కుడి_వైపు_తిరుగు(90)\n\
    కుంచికను_కింద_పెట్టు();\n\
    వ్రాయి(చ)\n\
    కుడివైపు_చాపాము(outerRadius/2) // one inscribed circle\n\
  } )\n\
}\n\
\n\
circleEyeL = (అ, ని, న, outerRadius) => {\n\
  స్థానము_మార్చు(అ, ని);\n\
  వృత్తము(outerRadius); //outer circle\n\
\n\
  లెక్క_పెడుతూ_ఆవర్తించు ( న, ( చ ) => {\n\
    స్థానము_మార్చు(అ, ని);\n\
    కోణము (చ/న * 360);\n\
    కుంచికను_పైకి_ఎత్తు();\n\
    ముందుకు_జరుగు(outerRadius);\n\
    కుంచికను_కింద_పెట్టు();\n\
    ఎడమ_వైపు_తిరుగు(90)\n\
    వ్రాయి(చ)\n\
    ఎడమవైపు_చాపాము(outerRadius/2); // one inscribed circle\n\
  } )\n\
}\n\
\n\
\n\
ప్రదర్శన = () => {\n\
  _సర్వదా_    సవ్య = అవును;\n\
  _సర్వదా_    అపసవ్య = !సవ్య;\n\
  _సర్వదా_    పొడవు = 2 * Math.min(గరిష్ఠX(), గరిష్ఠY())\n\
  _సర్వదా_    గది_పొడవు = పొడవు/3\n\
\n\
  //divide area into 6 cells: 2 vertical, 3 horizontal\n\
  // centers are:\n\
  ని౧ = +1/4 * పొడవు\n\
  ని౨ = -1/4 * పొడవు\n\
  అ౧ = -2/6 * పొడవు\n\
  అ౨ = 0\n\
  అ౩ = +2/6 * పొడవు\n\
\n\
  ఆది_స్థితి();\n\
  కుంచికను_దాచు();\n\
\n\
  tSize = గది_పొడవు/2 * .90\n\
  పళ్ళచక్రం (అ౧, ని౧, 10/55*tSize, 8, సవ్య);\n\
  పళ్ళచక్రం (అ౧, ని౧, 25/55*tSize, 16, అపసవ్య);\n\
  పళ్ళచక్రం (అ౧, ని౧, 40/55*tSize, 32, సవ్య);\n\
  పళ్ళచక్రం (అ౧, ని౧, 55/55*tSize, 64, అపసవ్య);\n\
\n\
\n\
  tSize = గది_పొడవు/2 * .90\n\
  లెక్క_పెడుతూ_ఆవర్తించు (8, (i) => {\n\
//radialArc (x, y, startRadius, armAngle, tangentAngle, arcRadius, extent, dir)\n\
    radialArc (అ౨, ని౧, 10/60*tSize, 360*i/8, -45, 10/60*tSize, 180, సవ్య); // inner shell\n\
    radialArc (అ౨, ని౧, 40/60*tSize, 360*i/8, -125, 15/60*tSize, 110, అపసవ్య); //inside arc\n\
    radialArc (అ౨, ని౧, 40/60*tSize, 360*i/8, -85, 18/60*tSize, 170, సవ్య); //outside arcs\n\
    radialArc (అ౨, ని౧, 41/60*tSize, 360*i/8, 0, 10/60*tSize, 360, సవ్య); // radial circles\n\
  })\n\
  \n\
\n\
  స్థానము_మార్చు(అ౨, ని౧);\n\
  వృత్తము(60/60 * tSize);\n\
\n\
  స్థానము_మార్చు( అ౧, ని౨)\n\
  కోణము(0)\n\
  oRadius = గది_పొడవు/2 * .9\n\
  cRadius = .3 * oRadius\n\
  curveLoss = cRadius * Math.tan( degToRad( 22.5))\n\
  side = 2 * oRadius * Math.sin( degToRad(22.5)) -  2* curveLoss\n\
  height = oRadius * Math.cos( degToRad( 22.5))\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  ముందుకు_జరుగు(height)\n\
  కుంచికను_కింద_పెట్టు()\n\
  కుడి_వైపు_తిరుగు(90)\n\
  వెనుకకు_జరుగు(side/2)\n\
  roundedOctogon( side, cRadius)\n\
\n\
  స్థానము_మార్చు( అ౧, ని౨)\n\
  కోణము(0)\n\
  oRadius = గది_పొడవు/2 * .8\n\
  cRadius = .3 * oRadius\n\
  curveLoss = cRadius * Math.tan( degToRad( 22.5))\n\
  side = 2 * oRadius * Math.sin( degToRad(22.5)) -  2* curveLoss\n\
  height = oRadius * Math.cos( degToRad( 22.5))\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  ముందుకు_జరుగు(height)\n\
  కుంచికను_కింద_పెట్టు()\n\
  కుడి_వైపు_తిరుగు(90)\n\
  వెనుకకు_జరుగు(side/2)\n\
  roundedOctogon( side, cRadius)\n\
\n\
  స్థానము_మార్చు( అ౧, ని౨)\n\
  కోణము(22.5)\n\
  oRadius = గది_పొడవు/2 * .7\n\
  cRadius = .3 * oRadius\n\
  curveLoss = cRadius * Math.tan( degToRad( 22.5))\n\
  side = 2 * oRadius * Math.sin( degToRad(22.5)) -  2* curveLoss\n\
  height = oRadius * Math.cos( degToRad( 22.5))\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  ముందుకు_జరుగు(height)\n\
  కుంచికను_కింద_పెట్టు()\n\
  కుడి_వైపు_తిరుగు(90)\n\
  వెనుకకు_జరుగు(side/2)\n\
  roundedOctogon( side, cRadius)\n\
\n\
  స్థానము_మార్చు( అ౧, ని౨)\n\
  కోణము(22.5)\n\
  oRadius = గది_పొడవు/2 * .6\n\
  cRadius = .3 * oRadius\n\
  curveLoss = cRadius * Math.tan( degToRad( 22.5))\n\
  side = 2 * oRadius * Math.sin( degToRad(22.5)) -  2* curveLoss\n\
  height = oRadius * Math.cos( degToRad( 22.5))\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  ముందుకు_జరుగు(height)\n\
  కుంచికను_కింద_పెట్టు()\n\
  కుడి_వైపు_తిరుగు(90)\n\
  వెనుకకు_జరుగు(side/2)\n\
  roundedOctogon( side, cRadius)\n\
\n\
  circleEyeR( అ౨, ని౨, 16, గది_పొడవు/2 * .8);\n\
  circleEyeL( అ౩, ని౨, 16, గది_పొడవు/2 * .8);\n\
}\n\
'
basket_weave_tessellation ='\
// Basket Weave Tessellation -- tile a space using basket weave pattern\n\
\n\
// this assumes that the చిన్న సమచతురస్రము is 1/2 of the larger సమచతురస్రము.\n\
// that need not be the case\n\
\n\
_సర్వదా_    సమచతురస్రభుజము = 20\n\
_సర్వదా_    ఎత్తు = 2.5 * సమచతురస్రభుజము\n\
_సర్వదా_    వెడల్పు = ఎత్తు + 2 * సమచతురస్రభుజము\n\
\n\
నిలువు_దీర్ఘచతురస్రము = ( ఎత్తు, వెడల్పు, వర్ణము) => {\n\
  ఆకారము_ప్రారంభించు()\n\
  ఆవర్తించు (2, () => {\n\
    ముందుకు_జరుగు( ఎత్తు)\n\
    కుడి_వైపు_తిరుగు(90)\n\
    ముందుకు_జరుగు( వెడల్పు)\n\
    కుడి_వైపు_తిరుగు(90)\n\
  } );\n\
  ఆకారము_ముగించు( వర్ణము)\n\
  ముందుకు_జరుగు( ఎత్తు)\n\
}\n\
\n\
అడ్డ_దీర్ఘచతురస్రము = ( ఎత్తు, వెడల్పు, వర్ణము) => {\n\
  ఆకారము_ప్రారంభించు()\n\
  ఆవర్తించు (2, () => {\n\
    ముందుకు_జరుగు( వెడల్పు)\n\
    కుడి_వైపు_తిరుగు(90)\n\
    ముందుకు_జరుగు( ఎత్తు)\n\
    కుడి_వైపు_తిరుగు(90)\n\
  } )\n\
  ఆకారము_ముగించు( వర్ణము)\n\
  ముందుకు_జరుగు( వెడల్పు)\n\
}\n\
\n\
సమచతురస్రము = ( భుజము, వర్ణము) => {\n\
  ఆకారము_ప్రారంభించు()\n\
  ఆవర్తించు (4, () => {\n\
    ముందుకు_జరుగు( భుజము)\n\
    కుడి_వైపు_తిరుగు(90)\n\
  })\n\
  ఆకారము_ముగించు( వర్ణము)\n\
  ముందుకు_జరుగు( భుజము)\n\
}\n\
\n\
ప్రదర్శన = () =>  {\n\
  ఆది_స్థితి()\n\
  _అత్ర_ yB = గరిష్ఠY() + సమచతురస్రభుజము\n\
  _అత్ర_ xB = కనిష్ఠX()\n\
  చుట్టొద్దు()\n\
  కుడి_వైపు_తిరుగు( 90)\n\
\n\
  యావత్_పరిక్రమ( () => కుంచిక.స్థానము.y > కనిష్ఠY(), () =>  {\n\
    స్థానము_మార్చు(xB, yB);\n\
    యావత్_పరిక్రమ( () => కుంచిక.స్థానము.x < గరిష్ఠX(), () => {\n\
      కుంచికను_కింద_పెట్టు()\n\
      సమచతురస్రము(సమచతురస్రభుజము, "yellow")\n\
      కుంచికను_పైకి_ఎత్తు()\n\
      ముందుకు_జరుగు( ఎత్తు)\n\
      కుంచికను_కింద_పెట్టు()\n\
      సమచతురస్రము(సమచతురస్రభుజము, "yellow")\n\
      నిలువు_దీర్ఘచతురస్రము(ఎత్తు, వెడల్పు, "lightblue")\n\
    } );\n\
    yB = yB - సమచతురస్రభుజము\n\
\n\
    స్థానము_మార్చు(xB, yB)\n\
    యావత్_పరిక్రమ( () => కుంచిక.స్థానము.x < గరిష్ఠX(), () => {\n\
      కుంచికను_కింద_పెట్టు()\n\
      అడ్డ_దీర్ఘచతురస్రము(ఎత్తు, వెడల్పు, "red")\n\
      కుంచికను_పైకి_ఎత్తు()\n\
      ముందుకు_జరుగు( ఎత్తు)\n\
    } )\n\
    yB = yB - ఎత్తు\n\
\n\
    స్థానము_మార్చు(xB, yB)\n\
    యావత్_పరిక్రమ( () => కుంచిక.స్థానము.x < గరిష్ఠX(), () => {\n\
      కుంచికను_కింద_పెట్టు()\n\
      సమచతురస్రము(సమచతురస్రభుజము, "yellow")\n\
      నిలువు_దీర్ఘచతురస్రము(ఎత్తు, వెడల్పు, "lightblue")\n\
      సమచతురస్రము(సమచతురస్రభుజము, "yellow")\n\
      కుంచికను_పైకి_ఎత్తు()\n\
      ముందుకు_జరుగు( ఎత్తు)\n\
      కుంచికను_కింద_పెట్టు()\n\
    } )\n\
    yB = yB - సమచతురస్రభుజము\n\
\n\
    స్థానము_మార్చు(xB- వెడల్పు +సమచతురస్రభుజము, yB)\n\
    యావత్_పరిక్రమ( () => కుంచిక.స్థానము.x < గరిష్ఠX(), () => {\n\
      కుంచికను_కింద_పెట్టు()\n\
      అడ్డ_దీర్ఘచతురస్రము(ఎత్తు, వెడల్పు, "red")\n\
      కుంచికను_పైకి_ఎత్తు()\n\
      ముందుకు_జరుగు(ఎత్తు)\n\
    } )\n\
    yB = yB - ఎత్తు\n\
  } )\n\
}\n\
'
bounce ='\
// Bouncing Rectangles -- rectangles which bounce off the side of the canvas\n\
\n\
  _సర్వదా_    గరిష్ఠ_X =  imageContext.canvas.width/2;\n\
  _సర్వదా_    గరిష్ఠ_Y =  imageContext.canvas.height/2;\n\
  _సర్వదా_    కనిష్ఠ_X =  -గరిష్ఠ_X;\n\
  _సర్వదా_    కనిష్ఠ_Y =  -గరిష్ఠ_Y;\n\
  _సర్వదా_    maxVelocity = 12;\n\
\n\
init_drops = (n) => {\n\
   _అత్ర_ drops = new Array(n);\n\
   లెక్క_పెడుతూ_ఆవర్తించు (n, (i) => {\n\
      drops[i] = { // each drop is an object with a set of properties\n\
         x: యాదృచ్ఛిక_సంఖ్య(కనిష్ఠ_X, గరిష్ఠ_X),\n\
         y: యాదృచ్ఛిక_సంఖ్య(కనిష్ఠ_Y, గరిష్ఠ_Y),\n\
         velocityX: యాదృచ్ఛిక_సంఖ్య(-maxVelocity, maxVelocity),\n\
         velocityY: యాదృచ్ఛిక_సంఖ్య(-maxVelocity, maxVelocity),\n\
         size: యాదృచ్ఛిక_సంఖ్య(20,300),\n\
         red:యాదృచ్ఛిక_సంఖ్య(0,255),\n\
         green:యాదృచ్ఛిక_సంఖ్య(0,255),\n\
         blue: యాదృచ్ఛిక_సంఖ్య(0,255),\n\
         alpha: Math.random(),\n\
         width: యాదృచ్ఛిక_సంఖ్య(1,15)\n\
      };\n\
   } );\n\
   _ఫలము_  drops;\n\
}\n\
\n\
rain = (drops, n) => {\n\
   చెరిపి_వేయి();\n\
   లెక్క_పెడుతూ_ఆవర్తించు (n, (i) => {\n\
      // access each drop object\n\
      _అత్ర_ d = drops[i]; // access each drop object and react with it\n\
      // if the drop hits a wall, reverse its motion direction (velocity)\n\
      యది_చేత్_అన్యథ ( () => (d.y < కనిష్ఠ_Y),\n\
         () => {\n\
            d.velocityY = -d.velocityY;\n\
         },\n\
         ()=>\n\
         యది_చేత్( () => (d.y + d.size > గరిష్ఠ_Y && d.velocityY > 0), \n\
            () => {\n\
               d.velocityY = -d.velocityY;\n\
            }\n\
         )  \n\
      )\n\
      యది_చేత్_అన్యథ ( () => (d.x - d.width/2 < కనిష్ఠ_X),\n\
         () => {\n\
            d.velocityX = -d.velocityX;\n\
         },\n\
\n\
         ()=> యది_చేత్ ( () => (d.x + d.width/2 > గరిష్ఠ_X),\n\
            () => {\n\
               d.velocityX = -d.velocityX;\n\
            }\n\
         ) \n\
      )\n\
      // paint the drop\n\
      రంగు_మార్చు("rgba(" +d.red+ "," +d.green+ "," +d.blue+ "," +d.alpha +")");\n\
      వెడల్పు(d.width);\n\
      స్థానము_మార్చు(d.x, d.y);\n\
      ముందుకు_జరుగు(d.size);\n\
      // move the drop for the next time\n\
      d.y = d.y + d.velocityY;\n\
      d.x = d.x + d.velocityX;\n\
   } );\n\
}\n\
\n\
let_them_drop = (n) => {\n\
   చుట్టొద్దు();\n\
   కుంచికను_దాచు();\n\
   drops = init_drops(n);\n\
   ఆడించు( () => { rain(drops, n)}, 100);\n\
}\n\
\n\
ప్రదర్శన = () => {\n\
  let_them_drop (Math.floor(గరిష్ఠ_X * గరిష్ఠ_Y/2000));\n\
}\n\
'
cafe_wall_illusion ='\
// Cafe Wall Illusion -- draws cafe tiles. see Wikipedia.\n\
\n\
_విధానము_     drawTile (h,w, tc, x, y) {\n\
  స్థానము_మార్చు(x,y)\n\
  ఆకారము_ప్రారంభించు()\n\
  ఆవర్తించు(2, () => {\n\
    ముందుకు_జరుగు(h)\n\
    కుడి_వైపు_తిరుగు(90)\n\
    ముందుకు_జరుగు(w)\n\
    కుడి_వైపు_తిరుగు(90)\n\
  } )\n\
  ఆకారము_ముగించు( tc)\n\
}\n\
\n\
_విధానము_     cafeTiles (h, w, gw, gc, off) {\n\
  maxRow = 2*గరిష్ఠY()/h\n\
  maxCol = 2*గరిష్ఠX()/w\n\
  వెడల్పు(gw)\n\
  రంగు_మార్చు(gc)\n\
  దిశ_మార్చు(0)\n\
  లెక్క_పెడుతూ_ఆవర్తించు (maxRow, (row) => {\n\
    లెక్క_పెడుతూ_ఆవర్తించు (maxCol, (col) => {\n\
      if (col%2) {\n\
        drawTile( h, w, "white", కనిష్ఠX()+col*(w+gw/2)+(row%2*w*off), కనిష్ఠY()+ row*(h+gw/2))\n\
      } else {\n\
        drawTile( h, w, "నలుపు", కనిష్ఠX()+col*(w+gw/2)+(row%2*w*off), కనిష్ఠY()+ row*(h+gw/2))\n\
      }\n\
    } )\n\
  } )\n\
}\n\
\n\
\n\
\n\
_విధానము_     ప్రదర్శన() {\n\
  ఆది_స్థితి();\n\
  // size = Math.min( గరిష్ఠX(), గరిష్ఠY()) * .9\n\
  కుంచికను_దాచు();\n\
\n\
  _సర్వదా_    tileHeight = 50\n\
  _సర్వదా_    tileWidth = 50\n\
  _సర్వదా_    mortarWidth = 1\n\
  // _సర్వదా_    mortarColor = "#c0c0c0"\n\
  _సర్వదా_    mortarColor = "#808080"\n\
  _సర్వదా_    offset = .5\n\
  cafeTiles( tileHeight, tileWidth, mortarWidth, mortarColor, offset);\n\
}\n\
'
circle_eye ='\
// Circle Eye -- draws a set of n inscribed circles within circle\n\
\n\
_విధానము_     circleEye (x, y, n, outerRadius) {\n\
  స్థానము_మార్చు(x, y);\n\
  వృత్తము(outerRadius); //outer circle\n\
\n\
  for (i=0; i<n; i++) {\n\
    స్థానము_మార్చు(x, y);\n\
    కోణము (i/n * 360);\n\
    కుంచికను_పైకి_ఎత్తు();\n\
    ముందుకు_జరుగు(outerRadius/2);\n\
    కుంచికను_కింద_పెట్టు();\n\
    వృత్తము(outerRadius/2); // one inscribed circle\n\
  }\n\
}\n\
\n\
\n\
\n\
_విధానము_     ప్రదర్శన() {\n\
  ఆది_స్థితి();\n\
  size = Math.min( గరిష్ఠX(), గరిష్ఠY()) * .9\n\
  కుంచికను_దాచు();\n\
  రంగు_మార్చు( యాదృచ్ఛిక_సంఖ్య(16));\n\
  circleEye( 0, 0, 16, size);\n\
}\n\
'
circle_eye2 ='\
// Circle Eye2 -- draws a set of n inscribed circles between two concentric circles.\n\
\n\
_విధానము_     circleEye (x, y, n, outerRadius, innerRadius) {\n\
  స్థానము_మార్చు(x, y);\n\
  //వృత్తము(outerRadius); //outer circle\n\
  //వృత్తము(innerRadius)\n\
  వ్యాసార్థము = outerRadius-innerRadius\n\
\n\
  for (i=0; i<n; i++) {\n\
    స్థానము_మార్చు(x, y);\n\
    కోణము (i/n * 360);\n\
    కుంచికను_పైకి_ఎత్తు();\n\
    ముందుకు_జరుగు(innerRadius + వ్యాసార్థము/2);\n\
    కుంచికను_కింద_పెట్టు();\n\
    వృత్తము(వ్యాసార్థము/2); // one inscribed circle\n\
  }\n\
}\n\
\n\
\n\
\n\
_విధానము_     ప్రదర్శన() {\n\
  ఆది_స్థితి();\n\
  size = Math.min( గరిష్ఠX(), గరిష్ఠY()) * .9\n\
  కుంచికను_దాచు();\n\
  రంగు_మార్చు( యాదృచ్ఛిక_సంఖ్య(16));\n\
  circleEye( 0, 0, 32, size, .2*size);\n\
}\n\
'
clock ='\
// Clock, Analog -- draw and animate an analog clock\n\
\n\
//GLOBALS\n\
_సర్వత్ర_   size;\n\
\n\
//draw the tick marks around the edge of the clock\n\
_విధానము_     ticks(x, y, వ్యాసార్థము) {\n\
   _సర్వత్ర_   tickLen = 7;\n\
   _సర్వత్ర_   gap = వ్యాసార్థము - tickLen;\n\
   రంగు_మార్చు( నీలము );\n\
   వెడల్పు(1);\n\
   for (_సర్వత్ర_   theta = 0; theta < 360; theta = theta + 6) {\n\
      // Thicken hour marks\n\
      if (theta % 30 != 0) {\n\
         వెడల్పు(1/130* size);\n\
      } else {\n\
         వెడల్పు(3/130* size);\n\
      }\n\
      కుంచికను_పైకి_ఎత్తు();\n\
      స్థానము_మార్చు(0,0);\n\
      కోణము(theta);\n\
      ముందుకు_జరుగు(gap);\n\
      కుంచికను_కింద_పెట్టు();\n\
      ముందుకు_జరుగు(tickLen);\n\
   }\n\
}\n\
\n\
\n\
// draw the hour numbers on the clock face\n\
_విధానము_     numbers(x, y, వ్యాసార్థము) {\n\
   కుంచికను_పైకి_ఎత్తు();\n\
   fontSize = 20/130 * size\n\
   అక్షరరూపము_స్థాపించు(fontSize+"px sans-serif");\n\
   రంగు_మార్చు("నలుపు");\n\
   for (_సర్వత్ర_   hour = 1; hour <= 12; hour++) {\n\
      స్థానము_మార్చు(x,y);\n\
      కోణము(hour * 30);\n\
      ముందుకు_జరుగు(వ్యాసార్థము); // to center of digit\n\
      కోణము(180);\n\
      ముందుకు_జరుగు(10/130 * size); // vertical correction to baseline\n\
      కుడి_వైపు_తిరుగు(90);\n\
      if (hour < 10) {\n\
        ముందుకు_జరుగు(6/130 * size); // horizontal correction to lower left corner\n\
      } else {\n\
        ముందుకు_జరుగు(10/130 * size)\n\
      }\n\
      కుడి_వైపు_తిరుగు(180);\n\
      వ్రాయి(hour);\n\
   }\n\
   కుంచికను_కింద_పెట్టు();\n\
}\n\
\n\
// draw one of the clock hands\n\
_విధానము_     hand (theta, w, length, col) {\n\
   _సర్వత్ర_   stepSize = 5;\n\
   _సర్వత్ర_   widthDelta = w / (length / stepSize);\n\
   స్థానము_మార్చు(0, 0);\n\
   కోణము(theta);\n\
   రంగు_మార్చు(col);\n\
   for (_సర్వత్ర_   step = 0; step < length; step = step + stepSize) {\n\
      వెడల్పు(w);\n\
      ముందుకు_జరుగు(stepSize);\n\
      w = w - widthDelta;\n\
   }\n\
}\n\
\n\
_విధానము_     hands(hours, minutes, seconds) {\n\
    // draw seconds hand\n\
    _సర్వత్ర_   secDegreesPerSecond = 6;	// = 360 degrees/60 seconds /minute\n\
    hand(seconds * secDegreesPerSecond, 4, 100/130 * size, "red");\n\
    // draw minutes hand \n\
    _సర్వత్ర_   minDegreePerSecond = 0.1;	// = 360 degrees /3600 seconds /hour\n\
    _సర్వత్ర_   minutesInSeconds = minutes * 60 + seconds;\n\
    hand(minutesInSeconds * minDegreePerSecond, 10, 100/130 * size, "blue");\n\
    // draw hours hand\n\
    _సర్వత్ర_   hourDegreePerSecond = .1/12;	// = 360 degrees /3600 seconds per hour /12 hours per half day /half day\n\
    _సర్వత్ర_   hoursInSeconds = ((hours % 12) * 3600) + minutesInSeconds;\n\
    hand(hoursInSeconds * hourDegreePerSecond, 10, 60/130 * size, "blue");\n\
}\n\
\n\
// refresh the entire clock\n\
_విధానము_     clock() {\n\
   చెరిపి_వేయి();\n\
   size = .9 *  Math.min( గరిష్ఠX(), గరిష్ఠY())\n\
  numbers(0, 0, 110/130 * size);\n\
   రంగు_మార్చు("lightgreen");\n\
   స్థానము_మార్చు(0,0);\n\
   వెడల్పు(1/130* size)\n\
   వృత్తము(130/130 * size );\n\
   ticks(0, 0, 130/130 * size );\n\
   _సర్వత్ర_   d = new Date();\n\
   hands(d.getHours(), d.getMinutes(), d.getSeconds());\n\
}\n\
\n\
_విధానము_     ప్రదర్శన() {\n\
   కుంచికను_దాచు();\n\
   // refresh the clock every second\n\
   ఆడించు(clock,1000);\n\
}\n\
'
clock_BCD ='\
// Clock, BCD -- digital clock using Binary Coded Decimal (BCD) digits\n\
\n\
//*** GLOBALS ***\n\
\n\
_సర్వత్ర_   hour10;\n\
_సర్వత్ర_   hour1;\n\
_సర్వత్ర_   minute10;\n\
_సర్వత్ర_   minute1;\n\
_సర్వత్ర_   second10;\n\
_సర్వత్ర_   second1;\n\
_సర్వత్ర_   hSpacing;\n\
_సర్వత్ర_   vSpacing;\n\
\n\
_సర్వత్ర_   hourColor = "red"\n\
_సర్వత్ర_   minuteColor = "green"\n\
_సర్వత్ర_   secondColor = "blue"\n\
_సర్వత్ర_   offColor = "lightgray"\n\
\n\
\n\
//*** FUNCTIONS ***\n\
\n\
_విధానము_     tensDigit (number) {\n\
  _ఫలము_  Math.floor (number/10) % 10\n\
}\n\
\n\
\n\
_విధానము_     onesDigit (number) {\n\
  _ఫలము_  Math.floor (number % 10)\n\
}\n\
\n\
\n\
_విధానము_     getBinaryTime() {\n\
  time = new Date\n\
  hours = time.getHours()\n\
  minutes = time.getMinutes()\n\
  seconds = time.getSeconds()\n\
\n\
  // extract the digits\n\
  //hour10 =   hour1 =  onesDigit(hours)\n\
  //min10 =  tensDigit(minutes)\n\
  //min1 =   onesDigit(minutes)\n\
  //sec10 =  tensDigit(seconds)\n\
  //sec1 =   onesDigit(seconds)\n\
\n\
  //pad digits with leading 0s\n\
  //hour10 = "0000" + hour10.toString(2)\n\
  //hour1 =  "0000" + hour1.toString(2)\n\
  //min10 =  "0000" + min10.toString(2)\n\
  //min1 =   "0000" + min1.toString(2)\n\
  //sec10 =  "0000" + sec10.toString(2)\n\
  //sec1 =   "0000" + sec1.toString(2)\n\
\n\
  //use only 4 digits\n\
  //hour10 = hour10.slice(-4)\n\
  //hour1 =  hour1.slice(-4)\n\
  //min10 =  min10.slice(-4)\n\
  //min1 =   min1.slice(-4)\n\
  //sec10 =  sec10.slice(-4)\n\
  //sec1 =   sec1.slice(-4)\n\
  hour10 = ("0000" + tensDigit(hours).toString(2)).slice(-4)\n\
  hour1 =  ("0000" + onesDigit(hours).toString(2)).slice(-4)\n\
  min10 =  ("0000" + tensDigit(minutes).toString(2)).slice(-4)\n\
  min1 =   ("0000" + onesDigit(minutes).toString(2)).slice(-4)\n\
  sec10 =  ("0000" + tensDigit(seconds).toString(2)).slice(-4)\n\
  sec1 =   ("0000" + onesDigit(seconds).toString(2)).slice(-4)\n\
}\n\
\n\
\n\
_విధానము_     drawDot (digit, onColor, offColor, step) {\n\
  if (digit == 1) {\n\
    రంగు_మార్చు( onColor)\n\
  } else {\n\
    రంగు_మార్చు( offColor)\n\
  }\n\
  నిండు_వృత్తము()\n\
  ముందుకు_జరుగు(step)\n\
}\n\
\n\
\n\
_విధానము_     drawNumberDots (digitString, onColor, offColor, spacing) {\n\
  drawDot( digitString[0], onColor, offColor, spacing)\n\
  drawDot( digitString[1], onColor, offColor, spacing)\n\
  drawDot( digitString[2], onColor, offColor, spacing)\n\
  drawDot( digitString[3], onColor, offColor, spacing)\n\
  వెనుకకు_జరుగు(60)\n\
}\n\
\n\
\n\
_విధానము_     displayBinaryDots(hSpacing, vSpacing) {\n\
  bottom = vSpacing * 1.5\n\
  leftSide = -hSpacing * 2.5\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  స్థానము_మార్చు(leftSide + hSpacing *0, bottom)\n\
  drawNumberDots (hour10, hourColor, offColor, vSpacing)\n\
\n\
  స్థానము_మార్చు(leftSide + hSpacing *1, bottom)\n\
  drawNumberDots (hour1, hourColor, offColor, vSpacing)\n\
\n\
  స్థానము_మార్చు(leftSide + hSpacing *2, bottom)\n\
  drawNumberDots (min10, minuteColor, offColor, vSpacing)\n\
\n\
  స్థానము_మార్చు(leftSide + hSpacing *3, bottom)\n\
  drawNumberDots (min1, minuteColor, offColor, vSpacing)\n\
\n\
  స్థానము_మార్చు(leftSide + hSpacing *4, bottom)\n\
  drawNumberDots (sec10, secondColor, offColor, vSpacing)\n\
\n\
  స్థానము_మార్చు(leftSide + hSpacing *5, bottom)\n\
 drawNumberDots (sec1, secondColor, offColor, vSpacing)\n\
}\n\
\n\
\n\
_విధానము_     displayTime() {\n\
  చెరిపి_వేయి()\n\
  కోణము(180)\n\
  spacing = Math.min(గరిష్ఠX(), గరిష్ఠY()) *1.8/6\n\
  hSpacing = spacing\n\
  vSpacing = spacing\n\
  వెడల్పు(spacing/10)\n\
  కుంచికను_దాచు()\n\
  getBinaryTime()\n\
  displayBinaryDots(hSpacing, vSpacing)\n\
}\n\
\n\
ప్రదర్శన = displayTime\n\
ఆడించు(displayTime, 1000)\n\
'
clock_digital ='\
// Clock, Digital -- digital clock using seven-segment displays\n\
\n\
//*** GLOBALS ***\n\
\n\
_సర్వత్ర_   hour1digit;\n\
_సర్వత్ర_   hour10digit;\n\
_సర్వత్ర_   min1digit;\n\
_సర్వత్ర_   min10digit;\n\
_సర్వత్ర_   sec10digit;\n\
_సర్వత్ర_   sec1digit;\n\
\n\
_సర్వత్ర_   segSize;\n\
_సర్వత్ర_   horizontalElements\n\
_సర్వత్ర_   digitSpacing\n\
_సర్వత్ర_   interdigitSpacing\n\
_సర్వత్ర_   segWidth\n\
_సర్వత్ర_   segAngle = 10 // degrees\n\
_సర్వత్ర_   segOnColor = "red"\n\
_సర్వత్ర_   segOffColor = "నలుపు"\n\
\n\
\n\
//*** CONSTANTS ***\n\
\n\
/*\n\
The seven-segment display is layed out as follows:\n\
   --a--\n\
  |      |\n\
  f      b\n\
  |      |\n\
   --g--\n\
  |      |\n\
  e      c\n\
  |      |\n\
   --d--\n\
*/\n\
//segment strings are in the order: abcdefg\n\
//  where 1 turns segment on\n\
//    and 0 turns segment off\n\
_సర్వత్ర_   segments = [ "1111110", //0\n\
                 "0110000", //1\n\
                 "1101101", //2\n\
                 "1111--1", //3\n\
                 "0110011", //4\n\
                 "1011011", //5\n\
                 "1011111", //6\n\
                 "1110000", //7\n\
                 "1111111", //8\n\
                 "1110011"  //9\n\
               ]\n\
\n\
\n\
//*** FUNCTIONS ***\n\
\n\
_విధానము_     tensDigit (number) {\n\
  _ఫలము_  Math.floor (number/10) % 10\n\
}\n\
\n\
\n\
_విధానము_     onesDigit (number) {\n\
  _ఫలము_  Math.floor (number % 10)\n\
}\n\
\n\
\n\
_విధానము_     getTime() {\n\
  time = new Date\n\
  hours = time.getHours()\n\
  minutes = time.getMinutes()\n\
  seconds = time.getSeconds()\n\
\n\
  // extract the digits\n\
  hour10digit = tensDigit(hours)\n\
  hour1digit = onesDigit(hours)\n\
  min10digit = tensDigit(minutes)\n\
  min1digit = onesDigit(minutes)\n\
  sec10digit = tensDigit(seconds)\n\
  sec1digit = onesDigit(seconds)\n\
}\n\
\n\
\n\
_విధానము_     segColor (bit) {\n\
  if (bit == "1") {\n\
    రంగు_మార్చు( segOnColor)\n\
  } else {\n\
    రంగు_మార్చు( segOffColor)\n\
  }10\n\
}\n\
\n\
\n\
_విధానము_     display7segment(digit) {\n\
  కుంచికను_కింద_పెట్టు()\n\
  segColor (segments [digit].substr(0,1)) //a\n\
  ముందుకు_జరుగు(segSize)\n\
  కుడి_వైపు_తిరుగు(90+segAngle)\n\
  segColor (segments [digit].substr(1,1)) //b\n\
  ముందుకు_జరుగు(segSize)\n\
  segColor (segments [digit].substr(2,1)) //c\n\
  ముందుకు_జరుగు(segSize)\n\
  కుడి_వైపు_తిరుగు(90-segAngle)\n\
  segColor (segments [digit].substr(3,1)) //d\n\
  ముందుకు_జరుగు(segSize)\n\
  కుడి_వైపు_తిరుగు(90+segAngle)\n\
  segColor (segments [digit].substr(4,1)) //e\n\
  ముందుకు_జరుగు(segSize)\n\
  కుడి_వైపు_తిరుగు(90-segAngle)\n\
  segColor (segments [digit].substr(6,1)) //g\n\
  ముందుకు_జరుగు(segSize)\n\
  వెనుకకు_జరుగు(segSize)\n\
  ఎడమ_వైపు_తిరుగు(90-segAngle)\n\
  segColor (segments [digit].substr(5,1)) //f\n\
  ముందుకు_జరుగు(segSize)\n\
  కుడి_వైపు_తిరుగు(90-segAngle)\n\
  కుంచికను_పైకి_ఎత్తు()\n\
}\n\
\n\
\n\
_విధానము_     displaySegTime() {\n\
  // black out background\n\
  స్థానము_మార్చు(కనిష్ఠX(),0)\n\
  కోణము (90)\n\
  రంగు_మార్చు(black)\n\
  వెడల్పు(2*గరిష్ఠY())\n\
  కుంచికను_కింద_పెట్టు()\n\
  ముందుకు_జరుగు(2*గరిష్ఠX())\n\
101010\n\
  // draw the 6 digits of time\n\
  స్థానము_మార్చు(-horizontalElements/2*segSize, segSize)\n\
  వెడల్పు(segWidth)\n\
  display7segment(hour10digit)\n\
  ముందుకు_జరుగు(digitSpacing)\n\
  display7segment(hour1digit)\n\
\n\
  ముందుకు_జరుగు(interdigitSpacing)\n\
  display7segment(min10digit)\n\
  ముందుకు_జరుగు(digitSpacing)\n\
  display7segment(min1digit)\n\
\n\
  ముందుకు_జరుగు(interdigitSpacing)\n\
  display7segment(sec10digit)\n\
  ముందుకు_జరుగు(digitSpacing)\n\
  display7segment(sec1digit)\n\
}\n\
\n\
\n\
_విధానము_     displayTime() {\n\
  horizontalElements = 6 + 3*.4 + 2*1.24\n\
  segSize = Math.min (గరిష్ఠY(), 2* గరిష్ఠX()/horizontalElements) * .9\n\
  digitSpacing = 1.4 * segSize\n\
  interdigitSpacing = 2.24 * segSize\n\
  segWidth = segSize/6\n\
  కుంచికను_దాచు() \n\
  getTime()\n\
  displaySegTime()\n\
}\n\
\n\
//ప్రదర్శన = displayTime\n\
ఆడించు(displayTime, 1000)\n\
'
collidescape ='\
// Collidescape (tm) -- aperiodic tiling researched by Ward Hollins.\n\
// angles for the two isosceles triangles are: \n\
// 36, 72, 72 and 36, 36, 108 ..degrees\n\
//  1,2,2 and 1,1,3 times pi/5 .. radians\n\
ang = 360/10 // the basic కోణము (pi/5 radians)\n\
side = 50 // length of the common side of the isosceles triangles\n\
bBase = 2* side * Math.cos( degToRad( ang)) // length of big base\n\
sBase = 2* side * Math.sin( degToRad( ang/2)) // length of small base\n\
\n\
\n\
_విధానము_     bb (fColor) { //big piece, big కోణము\n\
    ఆకారము_ప్రారంభించు()\n\
    ముందుకు_జరుగు( side)\n\
    కుడి_వైపు_తిరుగు( 4 * ang)\n\
    ముందుకు_జరుగు( bBase)\n\
    కుడి_వైపు_తిరుగు( 4 * ang)\n\
    ముందుకు_జరుగు( side)\n\
    కుడి_వైపు_తిరుగు( 180)\n\
    ఆకారము_ముగించు( fColor)\n\
}\n\
\n\
\n\
_విధానము_     bs (fColor) { // big piece, small కోణము\n\
    ఆకారము_ప్రారంభించు()\n\
    ముందుకు_జరుగు( side)\n\
    కుడి_వైపు_తిరుగు( 2 * ang)\n\
    ముందుకు_జరుగు( side)\n\
    కుడి_వైపు_తిరుగు( 4 * ang)\n\
    ముందుకు_జరుగు( bBase)\n\
    కుడి_వైపు_తిరుగు( 180)\n\
    ఆకారము_ముగించు( fColor)\n\
}\n\
\n\
\n\
_విధానము_     bs2 (fColor) { // big piece, small కోణము other corner\n\
    ఆకారము_ప్రారంభించు()\n\
    ముందుకు_జరుగు( bBase)\n\
    కుడి_వైపు_తిరుగు( 4 * ang)\n\
    ముందుకు_జరుగు( side)\n\
    కుడి_వైపు_తిరుగు( 2 * ang)\n\
    ముందుకు_జరుగు( side)\n\
    కుడి_వైపు_తిరుగు( 180)\n\
    ఆకారము_ముగించు( fColor)\n\
}\n\
\n\
\n\
_విధానము_     ss (fColor) { // small piece, small కోణము\n\
    ఆకారము_ప్రారంభించు()\n\
    ముందుకు_జరుగు( side)\n\
    కుడి_వైపు_తిరుగు( 3 * ang)\n\
    ముందుకు_జరుగు( sBase)\n\
    కుడి_వైపు_తిరుగు( 3 * ang)\n\
    ముందుకు_జరుగు( side)\n\
    కుడి_వైపు_తిరుగు( 180)\n\
    ఆకారము_ముగించు( fColor)\n\
}\n\
\n\
\n\
_విధానము_     sb (fColor) { // small piece, big కోణము\n\
    ఆకారము_ప్రారంభించు()\n\
    ముందుకు_జరుగు( sBase)\n\
    కుడి_వైపు_తిరుగు( 3 * ang)\n\
    ముందుకు_జరుగు( side)\n\
    కుడి_వైపు_తిరుగు( 4 * ang)\n\
    ముందుకు_జరుగు( side)\n\
    కుడి_వైపు_తిరుగు( 180)\n\
    ఆకారము_ముగించు( fColor)\n\
}\n\
\n\
\n\
_విధానము_     sb2 (fColor) { // small piece, big కోణము other corner\n\
    ఆకారము_ప్రారంభించు()\n\
    ముందుకు_జరుగు( side)\n\
    కుడి_వైపు_తిరుగు( 4 * ang)\n\
    ముందుకు_జరుగు( side)\n\
    కుడి_వైపు_తిరుగు( 3 * ang)\n\
    ముందుకు_జరుగు( sBase)\n\
    కుడి_వైపు_తిరుగు( 180)\n\
    ఆకారము_ముగించు( fColor)\n\
}\n\
\n\
\n\
_విధానము_     spiral( ) {\n\
// _విధానము_     draws a spiral using only two isosceles triangles\n\
// this is done with a series of points. Each point starts at the\n\
// center of the spiral and moves to the point where several triangles\n\
// are drawn. This technique isolates changes, but is less efficient\n\
// overall.\n\
//\n\
// Numbers for each point can be included by uncommenting the "//write"\n\
// statements.\n\
\n\
    c1 = "yellow"\n\
    c2 = "blue"\n\
    for (_సర్వత్ర_   i=0; i<5; i++) {\n\
//point0:\n\
        స్థానము_మార్చు(0,0)\n\
        దిశ_మార్చు( (i * 2 + 1) * ang)\n\
        bs( c2)\n\
\n\
//point1:\n\
	కుంచికను_పైకి_ఎత్తు()\n\
        స్థానము_మార్చు(0,0)\n\
        దిశ_మార్చు( (i * 2 + 1) * ang)\n\
        ముందుకు_జరుగు( bBase)\n\
	కుంచికను_కింద_పెట్టు()\n\
\n\
        bs( c2)\n\
        bs( c2)\n\
        bs2( c1)\n\
        sb2( c1)\n\
        bs2( c1)\n\
        ss( c2)\n\
        bb( c2)\n\
        //వ్రాయి( "1")\n\
\n\
//point2:\n\
	కుంచికను_పైకి_ఎత్తు()\n\
        స్థానము_మార్చు(0,0)\n\
        దిశ_మార్చు( (i * 2 + 1) * ang)\n\
        bs( c2)\n\
        ముందుకు_జరుగు( bBase + side)\n\
        ఎడమ_వైపు_తిరుగు( 3 * ang)\n\
	కుంచికను_కింద_పెట్టు()\n\
\n\
        ss( c2)\n\
        ss( c2)\n\
        bb( c2)\n\
        //వ్రాయి( "2")\n\
\n\
//point3:\n\
	కుంచికను_పైకి_ఎత్తు()\n\
        స్థానము_మార్చు(0,0)\n\
        దిశ_మార్చు( (i +1) * 2* ang)\n\
        ముందుకు_జరుగు( bBase + side)\n\
        ఎడమ_వైపు_తిరుగు( 2 * ang)\n\
        ముందుకు_జరుగు( side)\n\
        ఎడమ_వైపు_తిరుగు( 2 * ang)\n\
	కుంచికను_కింద_పెట్టు()\n\
\n\
        bs( c1)\n\
        bs2( c1)\n\
        ss( c1)\n\
        ss( c1)\n\
        bs( c1)\n\
        //వ్రాయి( "3")\n\
\n\
//point4:\n\
	కుంచికను_పైకి_ఎత్తు()\n\
        స్థానము_మార్చు(0,0)\n\
        దిశ_మార్చు( i * 2 * ang)\n\
        ముందుకు_జరుగు( bBase)\n\
        కుడి_వైపు_తిరుగు(ang)\n\
\n\
	కుంచికను_కింద_పెట్టు()\n\
        bs( c1)\n\
        ఎడమ_వైపు_తిరుగు( ang)\n\
\n\
	కుంచికను_పైకి_ఎత్తు()\n\
        ముందుకు_జరుగు( bBase)\n\
	కుంచికను_కింద_పెట్టు()\n\
\n\
        bs( c2)\n\
        sb( c1)\n\
        sb2( c1)\n\
        bs2( c1)\n\
        bs( c2)\n\
        bs2( c2)\n\
        ss( c2)\n\
        ss( c2)\n\
        //వ్రాయి( "4")\n\
\n\
//point5:\n\
	కుంచికను_పైకి_ఎత్తు()\n\
        స్థానము_మార్చు(0,0)\n\
        దిశ_మార్చు( (i +1) * 2* ang)\n\
        ముందుకు_జరుగు( bBase + side)\n\
        ఎడమ_వైపు_తిరుగు( 2 * ang)\n\
        ముందుకు_జరుగు( side + side + sBase)\n\
        ఎడమ_వైపు_తిరుగు( 2 * ang)\n\
	కుంచికను_కింద_పెట్టు()\n\
\n\
        bs2( c2)\n\
        sb2( c2)\n\
        sb( c2)\n\
        sb2( c2)\n\
        sb( c2)\n\
        //వ్రాయి( "5")\n\
\n\
//point6:\n\
	కుంచికను_పైకి_ఎత్తు()\n\
        స్థానము_మార్చు(0,0)\n\
        దిశ_మార్చు( i * 2* ang)\n\
        ముందుకు_జరుగు(  bBase + side + bBase)\n\
        ఎడమ_వైపు_తిరుగు( 3 * ang)\n\
	కుంచికను_కింద_పెట్టు()\n\
\n\
        bs2( c1)\n\
        bb( c1)\n\
        bs( c1)\n\
        bs2( c1)\n\
        bb( c1)\n\
        //వ్రాయి( "6")\n\
\n\
//point7:\n\
	కుంచికను_పైకి_ఎత్తు()\n\
        స్థానము_మార్చు(0,0)\n\
        దిశ_మార్చు(( i + 1)* 2 * ang)\n\
        ముందుకు_జరుగు(  bBase + side)\n\
        ఎడమ_వైపు_తిరుగు( 2 * ang)\n\
        ముందుకు_జరుగు( side + side)\n\
        కుడి_వైపు_తిరుగు( 2* ang)\n\
        ముందుకు_జరుగు( side)\n\
        ఎడమ_వైపు_తిరుగు( 3 * ang)\n\
	కుంచికను_కింద_పెట్టు()\n\
\n\
        sb2( c2)\n\
        sb( c2)\n\
        ss( c2)\n\
        bb( c2)\n\
        //వ్రాయి( "7")\n\
\n\
//point8:\n\
	కుంచికను_పైకి_ఎత్తు()\n\
        స్థానము_మార్చు(0,0)\n\
        దిశ_మార్చు(( i + 1)* 2 * ang)\n\
        ముందుకు_జరుగు(  bBase + side)\n\
        ఎడమ_వైపు_తిరుగు( 2 * ang)\n\
        ముందుకు_జరుగు( side + side)\n\
        కుడి_వైపు_తిరుగు( 3 * ang)\n\
        ముందుకు_జరుగు( bBase + side)\n\
	కుంచికను_కింద_పెట్టు()\n\
\n\
        ss( c2)\n\
        sb2( c2)\n\
        sb( c2)\n\
        ss( c2)\n\
        sb2( c2)\n\
        sb( c2)\n\
        //వ్రాయి( "8")\n\
\n\
//point9:\n\
	కుంచికను_పైకి_ఎత్తు()\n\
        స్థానము_మార్చు(0,0)\n\
        దిశ_మార్చు( i * 2* ang)\n\
        ముందుకు_జరుగు(  bBase + side + bBase) //@6\n\
        ఎడమ_వైపు_తిరుగు( 2 * ang)\n\
        ముందుకు_జరుగు( side)\n\
        కుడి_వైపు_తిరుగు( ang)\n\
        ముందుకు_జరుగు( sBase + sBase)\n\
        కుడి_వైపు_తిరుగు( 3 * ang)\n\
	కుంచికను_కింద_పెట్టు()\n\
\n\
        sb2( c2)\n\
        sb( c2)\n\
        bb( c1)\n\
        ss( c1)\n\
        bs( c1)\n\
        bs2( c1)\n\
        //వ్రాయి( "9")\n\
\n\
//point10:\n\
	కుంచికను_పైకి_ఎత్తు()\n\
        స్థానము_మార్చు(0,0)\n\
        దిశ_మార్చు( i * 2 * ang)\n\
        ముందుకు_జరుగు(  bBase + side + bBase) //@6\n\
        కుడి_వైపు_తిరుగు( 2 * ang)\n\
        ముందుకు_జరుగు( bBase)\n\
        ఎడమ_వైపు_తిరుగు( 4 * ang)\n\
	కుంచికను_కింద_పెట్టు()\n\
\n\
        sb2( c1)\n\
        sb( c1)\n\
        sb2( c1)\n\
        sb( c1)\n\
        //వ్రాయి( "10")\n\
\n\
//point11:\n\
	కుంచికను_పైకి_ఎత్తు()\n\
        స్థానము_మార్చు(0,0)\n\
        దిశ_మార్చు( i * 2 * ang)\n\
        ముందుకు_జరుగు(  bBase + side + bBase) //@6\n\
        కుడి_వైపు_తిరుగు( 2 * ang)\n\
        ముందుకు_జరుగు( bBase + side)\n\
        కుడి_వైపు_తిరుగు( 1 * ang)\n\
        ముందుకు_జరుగు( side)\n\
	కుంచికను_కింద_పెట్టు()\n\
\n\
        bb( c1)\n\
        bs( c1)\n\
        bs2( c1)\n\
        //వ్రాయి( "11")\n\
\n\
//point12:\n\
	కుంచికను_పైకి_ఎత్తు()\n\
        స్థానము_మార్చు(0,0)\n\
        దిశ_మార్చు( i * 2 * ang)\n\
        ముందుకు_జరుగు(  bBase + side + bBase) //@6\n\
        కుడి_వైపు_తిరుగు( 2 * ang)\n\
        ముందుకు_జరుగు( bBase + side)\n\
        కుడి_వైపు_తిరుగు( ang)\n\
        ముందుకు_జరుగు( side) // @11\n\
        ముందుకు_జరుగు(side)\n\
	కుంచికను_కింద_పెట్టు()\n\
\n\
        bb( c1)\n\
        bs( c1)\n\
        //వ్రాయి( "12")\n\
\n\
//point13:\n\
	కుంచికను_పైకి_ఎత్తు()\n\
        స్థానము_మార్చు(0,0)\n\
        దిశ_మార్చు(( i + 1)* 2 * ang)\n\
        ముందుకు_జరుగు(  bBase + side)\n\
        ఎడమ_వైపు_తిరుగు( 2 * ang)\n\
        ముందుకు_జరుగు( side + side)\n\
        కుడి_వైపు_తిరుగు( 3 * ang)\n\
        ముందుకు_జరుగు( bBase + side) //@8\n\
        కుడి_వైపు_తిరుగు( ang)\n\
        ముందుకు_జరుగు( side)\n\
        ఎడమ_వైపు_తిరుగు( 3 * ang)\n\
	కుంచికను_కింద_పెట్టు()\n\
\n\
        sb( c2)\n\
        bs( c2)\n\
        bs2( c2)\n\
        bb( c2)\n\
        //వ్రాయి( "13")\n\
\n\
//point14:\n\
	కుంచికను_పైకి_ఎత్తు()\n\
        స్థానము_మార్చు(0,0)\n\
        దిశ_మార్చు( (i +1) * 2 * ang)\n\
        ముందుకు_జరుగు( bBase + side)\n\
        ఎడమ_వైపు_తిరుగు( 2 * ang)\n\
        ముందుకు_జరుగు( side + side + sBase) // @5\n\
        ఎడమ_వైపు_తిరుగు(  ang)\n\
        ముందుకు_జరుగు( side)\n\
        కుడి_వైపు_తిరుగు( 2* ang)\n\
        ముందుకు_జరుగు( side + side)\n\
	కుంచికను_కింద_పెట్టు()\n\
\n\
        bs( c1)\n\
        bs2( c1)\n\
        bb( c2)\n\
        bs( c2)\n\
        bs2( c2)\n\
        bb( c1)\n\
        //వ్రాయి( "14")\n\
\n\
//point15:\n\
	కుంచికను_పైకి_ఎత్తు()\n\
        స్థానము_మార్చు(0,0)\n\
        దిశ_మార్చు(( i + 1)* 2 * ang)\n\
        ముందుకు_జరుగు(  bBase + side)\n\
        ఎడమ_వైపు_తిరుగు( 2 * ang)\n\
        ముందుకు_జరుగు( side + side)\n\
        కుడి_వైపు_తిరుగు( 3 * ang)\n\
        ముందుకు_జరుగు( bBase + side) //@8\n\
        కుడి_వైపు_తిరుగు( ang)\n\
        ముందుకు_జరుగు( side) //@13\n\
        ముందుకు_జరుగు( bBase)\n\
        ఎడమ_వైపు_తిరుగు( ang)\n\
        ముందుకు_జరుగు( side)\n\
	కుంచికను_కింద_పెట్టు()\n\
\n\
        bs( c2)\n\
        bs2( c2)\n\
        bb( c1)\n\
        bs( c1)\n\
        bs2( c1)\n\
        bb( c2)\n\
        //వ్రాయి( "15")\n\
\n\
//point16:\n\
	కుంచికను_పైకి_ఎత్తు()\n\
        స్థానము_మార్చు(0,0)\n\
        దిశ_మార్చు( i * 2* ang)\n\
        ముందుకు_జరుగు(  bBase + side + bBase) //@6\n\
        ఎడమ_వైపు_తిరుగు( 2 * ang)\n\
        ముందుకు_జరుగు( side)\n\
        కుడి_వైపు_తిరుగు( ang)\n\
        ముందుకు_జరుగు( sBase + sBase) //@9\n\
        కుడి_వైపు_తిరుగు( 2 * ang)\n\
        ముందుకు_జరుగు( bBase)\n\
        కుడి_వైపు_తిరుగు( ang)\n\
        ముందుకు_జరుగు( side)\n\
        ఎడమ_వైపు_తిరుగు( 2* ang)\n\
	కుంచికను_కింద_పెట్టు()\n\
\n\
        bs( c2)\n\
        bs2( c2)\n\
        bb( c1)\n\
        bs( c1)\n\
        bs2( c1)\n\
        bb( c2)\n\
        //వ్రాయి( "16")\n\
\n\
//point17:\n\
	కుంచికను_పైకి_ఎత్తు()\n\
        స్థానము_మార్చు(0,0)\n\
        దిశ_మార్చు( i * 2* ang)\n\
        ముందుకు_జరుగు(  bBase + side + bBase) //@6\n\
        ఎడమ_వైపు_తిరుగు( 2 * ang)\n\
        ముందుకు_జరుగు( side)\n\
        కుడి_వైపు_తిరుగు( ang)\n\
        ముందుకు_జరుగు( sBase + sBase) //@9\n\
        కుడి_వైపు_తిరుగు( 2 * ang)\n\
        ముందుకు_జరుగు( bBase)\n\
        కుడి_వైపు_తిరుగు( ang)\n\
        ముందుకు_జరుగు( side) //@16\n\
        ముందుకు_జరుగు( side)\n\
        ఎడమ_వైపు_తిరుగు( 2 * ang)\n\
	కుంచికను_కింద_పెట్టు()\n\
\n\
        ss( c2)\n\
        sb2( c2)\n\
        sb( c1)\n\
        bs( c1)\n\
        //వ్రాయి( "17")\n\
\n\
//point18:\n\
	కుంచికను_పైకి_ఎత్తు()\n\
        స్థానము_మార్చు(0,0)\n\
        దిశ_మార్చు( (i +1) * 2 * ang)\n\
        ముందుకు_జరుగు( bBase + side)\n\
        ఎడమ_వైపు_తిరుగు( 2 * ang)\n\
        ముందుకు_జరుగు( side + side + sBase) // @5\n\
        ఎడమ_వైపు_తిరుగు(  ang)\n\
        ముందుకు_జరుగు( side)\n\
        కుడి_వైపు_తిరుగు( 2 * ang)\n\
        ముందుకు_జరుగు( side + side) //@14\n\
        కుడి_వైపు_తిరుగు( 2 * ang)\n\
        ముందుకు_జరుగు( side) //@ intermediate point\n\
        కుడి_వైపు_తిరుగు( 3 * ang)\n\
	కుంచికను_కింద_పెట్టు()\n\
\n\
        bs( c2)\n\
        కుడి_వైపు_తిరుగు( 4 * ang)\n\
        //వ్రాయి( "14b")\n\
        bs( c1)\n\
        కుడి_వైపు_తిరుగు( 1 * ang)\n\
\n\
	కుంచికను_పైకి_ఎత్తు\n\
        ముందుకు_జరుగు( side)\n\
	కుంచికను_కింద_పెట్టు()\n\
\n\
        bb( c2)\n\
        bs( c2)\n\
        bs2( c2)\n\
        bb( c1)\n\
        bs( c1)\n\
        bs2( c1)\n\
        //వ్రాయి( "18")\n\
\n\
//point19:\n\
	కుంచికను_పైకి_ఎత్తు()\n\
        స్థానము_మార్చు(0,0)\n\
        దిశ_మార్చు( (i +1) * 2 * ang)\n\
        ముందుకు_జరుగు( bBase + side)\n\
        ఎడమ_వైపు_తిరుగు( 2 * ang)\n\
        ముందుకు_జరుగు( side + side + sBase) // @5\n\
        ఎడమ_వైపు_తిరుగు(  ang)\n\
        ముందుకు_జరుగు( side)\n\
        కుడి_వైపు_తిరుగు( 2 * ang)\n\
        ముందుకు_జరుగు( side + side) //@14\n\
        కుడి_వైపు_తిరుగు( 2 * ang)\n\
        ముందుకు_జరుగు( side + side + side)\n\
        ఎడమ_వైపు_తిరుగు( 2*ang)\n\
	కుంచికను_కింద_పెట్టు()\n\
\n\
        ss( c1)\n\
        sb2( c1)\n\
        sb( c2)\n\
        bs( c2)\n\
        //వ్రాయి( "19")\n\
\n\
//point20:\n\
	కుంచికను_పైకి_ఎత్తు()\n\
        స్థానము_మార్చు(0,0)\n\
        దిశ_మార్చు( (i +1) * 2 * ang)\n\
        ముందుకు_జరుగు( bBase + side)\n\
        ఎడమ_వైపు_తిరుగు( 2 * ang)\n\
        ముందుకు_జరుగు( side + side + sBase) // @5\n\
        ఎడమ_వైపు_తిరుగు(  ang)\n\
        ముందుకు_జరుగు( side)\n\
        కుడి_వైపు_తిరుగు( 2 * ang)\n\
        ముందుకు_జరుగు( side + side) //@14\n\
        కుడి_వైపు_తిరుగు( 2 * ang)\n\
        ముందుకు_జరుగు( side + side + side) //@19\n\
        కుడి_వైపు_తిరుగు( ang)\n\
        ముందుకు_జరుగు( sBase)\n\
        ఎడమ_వైపు_తిరుగు( 3*ang)\n\
	కుంచికను_కింద_పెట్టు()\n\
\n\
        ss( c1)\n\
        sb2( c1)\n\
        sb( c2)\n\
        ss( c2)\n\
        //వ్రాయి( "20")\n\
\n\
//point21:\n\
	కుంచికను_పైకి_ఎత్తు()\n\
        స్థానము_మార్చు(0,0)\n\
        దిశ_మార్చు( (i +1) * 2 * ang)\n\
        ముందుకు_జరుగు( bBase + side)\n\
        ఎడమ_వైపు_తిరుగు( 2 * ang)\n\
        ముందుకు_జరుగు( side + side + sBase) // @5\n\
        ఎడమ_వైపు_తిరుగు(  ang)\n\
        ముందుకు_జరుగు( side)\n\
        కుడి_వైపు_తిరుగు( 2 * ang)\n\
        ముందుకు_జరుగు( side + side) //@14\n\
        కుడి_వైపు_తిరుగు( 2 * ang)\n\
        ముందుకు_జరుగు( side + side + side)\n\
        కుడి_వైపు_తిరుగు( ang)\n\
        ముందుకు_జరుగు( sBase) //@20\n\
        ముందుకు_జరుగు( sBase)\n\
        ఎడమ_వైపు_తిరుగు( 3*ang)\n\
	కుంచికను_కింద_పెట్టు()\n\
\n\
        ss( c1)\n\
        bs( c1)\n\
        bs2( c1)\n\
        bb( c2)\n\
        //వ్రాయి( "21")\n\
\n\
//point22:\n\
	కుంచికను_పైకి_ఎత్తు()\n\
        స్థానము_మార్చు(0,0)\n\
        దిశ_మార్చు( (i +1) * 2 * ang)\n\
        ముందుకు_జరుగు( bBase + side)\n\
        ఎడమ_వైపు_తిరుగు( 2 * ang)\n\
        ముందుకు_జరుగు( side + side + sBase) // @5\n\
        ఎడమ_వైపు_తిరుగు(  ang)\n\
        ముందుకు_జరుగు( side)\n\
        కుడి_వైపు_తిరుగు( 2 * ang)\n\
        ముందుకు_జరుగు( side + side) //@14\n\
        కుడి_వైపు_తిరుగు( 2 * ang)\n\
        ముందుకు_జరుగు( side + side + side)\n\
        కుడి_వైపు_తిరుగు( ang)\n\
        ముందుకు_జరుగు( sBase + sBase) //@21\n\
        ముందుకు_జరుగు( side)\n\
        ఎడమ_వైపు_తిరుగు( 2*ang)\n\
	కుంచికను_కింద_పెట్టు()\n\
\n\
        bs( c1)\n\
        bs2( c1)\n\
        bb( c2)\n\
        bs( c2)\n\
        //వ్రాయి( "22")\n\
\n\
//point23:\n\
	కుంచికను_పైకి_ఎత్తు()\n\
        స్థానము_మార్చు(0,0)\n\
        దిశ_మార్చు( i * 2* ang)\n\
        ముందుకు_జరుగు(  bBase + side + bBase) //@6\n\
        ఎడమ_వైపు_తిరుగు( 2 * ang)\n\
        ముందుకు_జరుగు( side)\n\
        కుడి_వైపు_తిరుగు( ang)\n\
        ముందుకు_జరుగు( sBase + sBase) //@9\n\
        కుడి_వైపు_తిరుగు( 2 * ang)\n\
        ముందుకు_జరుగు( bBase)\n\
        కుడి_వైపు_తిరుగు( ang)\n\
        ముందుకు_జరుగు( side + side) //@17\n\
        కుడి_వైపు_తిరుగు( ang)\n\
        ముందుకు_జరుగు( sBase)\n\
        ఎడమ_వైపు_తిరుగు( 3 * ang)\n\
	కుంచికను_కింద_పెట్టు()\n\
\n\
        ss( c2)\n\
        bs( c2)\n\
        //వ్రాయి( "23")\n\
   }\n\
}\n\
\n\
\n\
_విధానము_     ప్రదర్శన() {\n\
    ఆది_స్థితి()\n\
     చుట్టొద్దు()\n\
    కుంచికను_కింద_పెట్టు()\n\
    spiral( )\n\
}\n\
'
color_changing_dots ='\
// Color Changing Dots -- show changing colors of a string of dots or lights\n\
\n\
/*\n\
Maybe you can adapt to make a traffic light simulator or Christmas light\n\
controller.\n\
*/\n\
\n\
బిందువును_చిత్రీకరించు = () => {\n\
    రంగు_మార్చు(యాదృచ్ఛిక_సంఖ్య(16))\n\
    నిండు_వృత్తము()\n\
    ముందుకు_జరుగు(15)\n\
}\n\
\n\
బిందువుల_వారుస_చిత్రీకరించు = () => {\n\
  స్థానము_మార్చు(కనిష్ఠX() + 20,0)\n\
  ఆవర్తించు(32, బిందువును_చిత్రీకరించు)\n\
}\n\
\n\
రంగులు_మారే_బిందువులు = () => {\n\
  ఆది_స్థితి()\n\
   చుట్టొద్దు()\n\
  స్థానము_మార్చు(కనిష్ఠX(),0)\n\
  కోణము(90)\n\
  కుంచికను_కింద_పెట్టు()\n\
  రంగు_మార్చు("నలుపు")\n\
  వెడల్పు(80)\n\
  ముందుకు_జరుగు(గరిష్ఠX() + గరిష్ఠX()) // నల్ల పట్టీ\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  వెడల్పు(1)\n\
  ఆడించు( బిందువుల_వారుస_చిత్రీకరించు, 500)\n\
}\n\
\n\
ప్రదర్శన = రంగులు_మారే_బిందువులు;\n\
'
compass_rose ='\
// Compass Rose -- draw a compass rose with the same triangles\n\
\n\
// The triangle functions could provide shading and color\n\
\n\
_విధానము_     triangle (side){\n\
  ముందుకు_జరుగు(side)\n\
  a = 45\n\
  b = (180-a)/2\n\
  కుడి_వైపు_తిరుగు(180 - b)\n\
  //ముందుకు_జరుగు(.748* side)\n\
  ముందుకు_జరుగు(side * 2 * Math.sin(a/2/360*6.28))\n\
  కుడి_వైపు_తిరుగు(180 - b)\n\
  ముందుకు_జరుగు(side)\n\
  కుడి_వైపు_తిరుగు(180-a)\n\
}\n\
\n\
_విధానము_     triangleL (side){\n\
  ముందుకు_జరుగు(side)\n\
  a = 45\n\
  b = (180-a)/2\n\
  ఎడమ_వైపు_తిరుగు(180 - b)\n\
  ముందుకు_జరుగు(side * 2 * Math.sin(a/2/360*6.28))\n\
  ఎడమ_వైపు_తిరుగు(180 - b)\n\
  ముందుకు_జరుగు(side)\n\
  ఎడమ_వైపు_తిరుగు(180-a)\n\
}\n\
\n\
_విధానము_     halfTri(side) {\n\
  triangle (side)\n\
  ముందుకు_జరుగు(side)\n\
  triangle (side)\n\
  కుడి_వైపు_తిరుగు(45+(180-45)/2)\n\
  ముందుకు_జరుగు(side * 2 * Math.sin( 45/2/360*6.28))\n\
  ఎడమ_వైపు_తిరుగు(180-(180-45)/2)\n\
  triangle(side)\n\
  ఎడమ_వైపు_తిరుగు(180-45)\n\
  ముందుకు_జరుగు( side)\n\
  కుడి_వైపు_తిరుగు(180-45)\n\
}\n\
\n\
_విధానము_     flipIt (side) {\n\
  //not quite symmetrical...\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  ముందుకు_జరుగు( side*3)\n\
  కుడి_వైపు_తిరుగు( 45)\n\
  ముందుకు_జరుగు(side*3)\n\
  కుడి_వైపు_తిరుగు(180-45)\n\
  కుంచికను_కింద_పెట్టు()\n\
  thirdTri(side)\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  కుడి_వైపు_తిరుగు(45)\n\
  ముందుకు_జరుగు(side*3)\n\
  ఎడమ_వైపు_తిరుగు(45)\n\
  ముందుకు_జరుగు(side*3)\n\
  ఎడమ_వైపు_తిరుగు(180)\n\
  కుంచికను_కింద_పెట్టు()\n\
}\n\
\n\
\n\
_విధానము_     flipHalf (side) {\n\
  //not quite symmetrical...\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  ముందుకు_జరుగు( side*3)\n\
  కుడి_వైపు_తిరుగు( 45)\n\
  ముందుకు_జరుగు(side*3)\n\
  కుడి_వైపు_తిరుగు(180-45)\n\
  కుంచికను_కింద_పెట్టు()\n\
  halfTri(side)\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  కుడి_వైపు_తిరుగు(45)\n\
  ముందుకు_జరుగు(side*3)\n\
  ఎడమ_వైపు_తిరుగు(45)\n\
  ముందుకు_జరుగు(side*3)\n\
  ఎడమ_వైపు_తిరుగు(180)\n\
  కుంచికను_కింద_పెట్టు()\n\
}\n\
\n\
\n\
_విధానము_     flipPoint (side) {\n\
  //not quite symmetrical...\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  ముందుకు_జరుగు( side*3)\n\
  కుడి_వైపు_తిరుగు( 45)\n\
  ముందుకు_జరుగు(side*3)\n\
  కుడి_వైపు_తిరుగు(180-45)\n\
  కుంచికను_కింద_పెట్టు()\n\
  //triangle(side/2)\n\
  halfTri(side/2)\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  కుడి_వైపు_తిరుగు(45)\n\
  ముందుకు_జరుగు(side*3)\n\
  ఎడమ_వైపు_తిరుగు(45)\n\
  ముందుకు_జరుగు(side*3)\n\
  ఎడమ_వైపు_తిరుగు(180)\n\
  కుంచికను_కింద_పెట్టు()\n\
}\n\
\n\
_విధానము_     thirdTri(side) {\n\
  triangle (side)//1\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  ముందుకు_జరుగు(side)\n\
  కుంచికను_కింద_పెట్టు()\n\
  triangle (side)//2\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  ముందుకు_జరుగు(side)\n\
  కుంచికను_కింద_పెట్టు()\n\
  triangle (side)//3\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  కుడి_వైపు_తిరుగు(45+(180-45)/2)\n\
  ముందుకు_జరుగు(side * 2 * Math.sin( 45/2/360*6.28))\n\
  ఎడమ_వైపు_తిరుగు(180-(180-45)/2)\n\
  కుంచికను_కింద_పెట్టు()\n\
  triangle(side)//4\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  వెనుకకు_జరుగు(side)\n\
  కుంచికను_కింద_పెట్టు()\n\
  triangle(side)//5\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  కుడి_వైపు_తిరుగు(45)\n\
  ముందుకు_జరుగు( side)\n\
  ఎడమ_వైపు_తిరుగు(45)\n\
  కుంచికను_కింద_పెట్టు()\n\
  triangle(side)//6\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  ఎడమ_వైపు_తిరుగు(180-45)\n\
  ముందుకు_జరుగు( side * 2)\n\
  కుడి_వైపు_తిరుగు(180-45)\n\
  కుంచికను_కింద_పెట్టు()\n\
}\n\
\n\
\n\
_విధానము_     boxTheCompass(size) {\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  కోణము( 0)\n\
  boxedCompass=["N", "NxE", "NNE", "NExN", "NE", "NExE", "ENE", "ExN", "E", "ExS", "ESE", "SExE", "SE", "SExS", "SSE", "SxE", "S", "SxW", "SSW", "SWxS", "SW", "SWxW", "WSW", "WxS", "W", "WxN", "WNW", "NWxW", "NW", "NWxN", "NNW", "NxW"]\n\
  textRadius = size/14  * 5.6\n\
  for (i=0; i<32; i++) {\n\
  \n\
    ముందుకు_జరుగు(textRadius)\n\
    కుడి_వైపు_తిరుగు(90)\n\
    //textLen = boxedCompass[i].length*10/2\n\
   // వెనుకకు_జరుగు(textLen)\n\
    fontSize = i % 4\n\
    if (fontSize == 1 || fontSize == 3) {\n\
      pointSize = size/48\n\
      textLen = boxedCompass[i].length*pointSize/2\n\
      వెనుకకు_జరుగు(textLen)\n\
      అక్షరరూపము_స్థాపించు("normal " + pointSize + "pt Helvetica")\n\
    } else if (fontSize == 2) {\n\
      pointSize = size/48\n\
      textLen = boxedCompass[i].length*pointSize/2\n\
      వెనుకకు_జరుగు(textLen)\n\
      అక్షరరూపము_స్థాపించు("bold " + pointSize + "pt Helvetica")\n\
    } else {\n\
      pointSize = size/40\n\
      textLen = boxedCompass[i].length*pointSize/2\n\
      వెనుకకు_జరుగు(textLen)\n\
      అక్షరరూపము_స్థాపించు("bold " + pointSize + "pt Helvetica")\n\
    }\n\
    వ్రాయి(boxedCompass[i])\n\
    ముందుకు_జరుగు(textLen)\n\
    ఎడమ_వైపు_తిరుగు(90)\n\
    వెనుకకు_జరుగు(textRadius)\n\
    కుడి_వైపు_తిరుగు(360/32)\n\
  }\n\
}\n\
\n\
\n\
_విధానము_     ప్రదర్శన() {\n\
  ఆది_స్థితి()\n\
   చుట్టొద్దు()\n\
  కుంచికను_దాచు() // do not want it to show, so do this early\n\
  కుంచిక_కదిలిన_ప్రతి_సారీ_చిత్రీకరించు(false) // do not redraw image each move\n\
  size = 2* Math.min(గరిష్ఠX(), గరిష్ఠY())\n\
  side = size/14\n\
  ఎడమ_వైపు_తిరుగు(22.5)\n\
  for (i=0; i<8; i++) {\n\
    thirdTri (side)\n\
    flipIt (side)\n\
    కుడి_వైపు_తిరుగు(45)\n\
  }\n\
  for (i=0; i<8; i++) {\n\
    halfTri (side/2)\n\
    కుడి_వైపు_తిరుగు(45)\n\
  }\n\
  కుడి_వైపు_తిరుగు(22.5)\n\
  for (i=0; i<84; i++) {\n\
    flipHalf (side)\n\
    కుడి_వైపు_తిరుగు(45)\n\
  }\n\
  కుడి_వైపు_తిరుగు(11.25)\n\
  side = size/14\n\
  for (i=0; i<16; i++) {\n\
    flipPoint (side)\n\
    కుడి_వైపు_తిరుగు(22.5)\n\
  }\n\
\n\
  boxTheCompass(size)\n\
  //కుంచిక_కదిలిన_ప్రతి_సారీ_చిత్రీకరించు(true)\n\
  చిత్రీకరించు() // just to render the final product\n\
}\n\
\n\
ప్రదర్శన()\n\
'
compass_rose2 ='\
// Compass Rose 2 -- draws compass rose.\n\
\n\
_విధానము_     compassRose (x, y, n, outerRadius, innerRadius) {\n\
  స్థానము_మార్చు(x, y);\n\
  వృత్తము(outerRadius); //outer circle\n\
  వృత్తము(innerRadius);\n\
\n\
  angleA= Math.atan((innerRadius* Math.sin(Math.PI/4))/(outerRadius-innerRadius* Math.cos(Math.PI/4))) //radians\n\
  side1= outerRadius/(1+Math.tan(angleA)/Math.tan(Math.PI/4))\n\
  side2= side1/Math.cos(angleA)\n\
  for (i=0; i<4; i++) {\n\
    స్థానము_మార్చు(x, y);\n\
    కోణము (i/4 * 360);\n\
    కుంచికను_పైకి_ఎత్తు()\n\
    ముందుకు_జరుగు( innerRadius)\n\
    కుంచికను_కింద_పెట్టు()\n\
    ముందుకు_జరుగు(outerRadius-innerRadius);\n\
    కుడి_వైపు_తిరుగు( 180-radToDeg( angleA));\n\
    ముందుకు_జరుగు( side2);\n\
    వెనుకకు_జరుగు( side2);\n\
    కుడి_వైపు_తిరుగు( radToDeg( 2* angleA));\n\
    ముందుకు_జరుగు( side2);\n\
  }\n\
\n\
  side3= outerRadius/(1+Math.tan(angleA)/Math.tan(Math.PI/8))\n\
  r3= side3/Math.cos(angleA)\n\
  console.log( "side3:"+side3 + " r3: " + r3)\n\
  for (i=0; i<4; i++) {\n\
    స్థానము_మార్చు(x, y);\n\
    కోణము (45 + i/4 * 360);\n\
    కుంచికను_పైకి_ఎత్తు()\n\
    ముందుకు_జరుగు( innerRadius)\n\
    కుంచికను_కింద_పెట్టు()\n\
    ముందుకు_జరుగు(outerRadius-innerRadius);\n\
    కుడి_వైపు_తిరుగు( 180-radToDeg( angleA));\n\
    ముందుకు_జరుగు( r3);\n\
    వెనుకకు_జరుగు( r3);\n\
    కుడి_వైపు_తిరుగు( radToDeg( 2* angleA));\n\
    ముందుకు_జరుగు( r3);\n\
  }\n\
\n\
  r4=outerRadius/2\n\
\n\
  side4= outerRadius/(1+Math.tan(angleA)/Math.tan(Math.PI/16))\n\
  r4= side4/Math.cos(angleA)\n\
  console.log( "side4:"+side4 + " r4: " + r4)\n\
  for (i=0; i<8; i++) {\n\
    స్థానము_మార్చు(x, y);\n\
    కోణము (22.5 + i/8 * 360);\n\
    కుంచికను_పైకి_ఎత్తు()\n\
    ముందుకు_జరుగు(outerRadius);\n\
    కుంచికను_కింద_పెట్టు()\n\
    కుడి_వైపు_తిరుగు( 180-radToDeg( angleA));\n\
    ముందుకు_జరుగు( r4);\n\
    వెనుకకు_జరుగు( r4);\n\
    కుడి_వైపు_తిరుగు( radToDeg( 2* angleA));\n\
    ముందుకు_జరుగు( r4);\n\
  }\n\
\n\
  r5 = .1 * outerRadius\n\
  base = 2* r5* Math.sin(angleA)\n\
  for (i=0; i<16; i++) {\n\
    స్థానము_మార్చు(x, y);\n\
    కోణము (11.25 + i/16 * 360);\n\
    కుంచికను_పైకి_ఎత్తు()\n\
    ముందుకు_జరుగు(outerRadius);\n\
    కుంచికను_కింద_పెట్టు()\n\
    కుడి_వైపు_తిరుగు( 180-radToDeg( angleA));\n\
    ముందుకు_జరుగు( r5);\n\
    కుడి_వైపు_తిరుగు(90+radToDeg(angleA))\n\
    ముందుకు_జరుగు(base)\n\
    కుడి_వైపు_తిరుగు(90+radToDeg(angleA))\n\
    ముందుకు_జరుగు( r5);\n\
  }\n\
}\n\
\n\
\n\
\n\
_విధానము_     ప్రదర్శన() {\n\
  ఆది_స్థితి();\n\
  size = Math.min( గరిష్ఠX(), గరిష్ఠY()) * .9\n\
  కుంచికను_దాచు();\n\
  //రంగు_మార్చు( యాదృచ్ఛిక_సంఖ్య(16));\n\
  compassRose( 0, 0, 16, size, .2*size);\n\
}\n\
'
compass_rose_quilt ='\
// Compass Rose Quilt -- draw a compass rose quilt\n\
\n\
//### CONTROLING VARIABLES\n\
//number of main divisions of the directional triangles\n\
mainDivisions = 4\n\
//number of divisions in the most triangles\n\
subDivisions8 = 3\n\
//number of main divisions in 16th points\n\
mainDivisions16 = 2\n\
//number of subdivisions in 16th points\n\
subDivisions16 = 2\n\
//number of main divisions in 32nds points\n\
mainDivisions32 = 1\n\
//number of subdivisions in 32nds points\n\
subDivisions32 = 3\n\
\n\
//color of background\n\
backgroundColor = "blue"\n\
//color of compass background\n\
compassBackgroundColor = "నలుపు"\n\
//color of text\n\
compassTextColor = "white"\n\
//color of inner direction background\n\
inner8BackgroundColor = "నలుపు"\n\
//color of inward direction (array)\n\
inner8Colors = ["gold", "salmon"]\n\
\n\
//color of outer direction background\n\
outer8BackgroundColor = "నలుపు"\n\
//color of outer direction (array)\n\
outer8Colors = ["yellow", "red"]\n\
\n\
\n\
//background color of 16ths\n\
background16Color = "gold"\n\
//foreground color of 16ths\n\
foreground16Color = "salmon"\n\
//background color of 32nds\n\
background32Color = "నలుపు"\n\
//foreground color of 32nds\n\
foreground32Color = "yellow"\n\
\n\
\n\
_విధానము_     indexColor(index, colors) {\n\
  _సర్వత్ర_   len = colors.length\n\
  _ఫలము_  colors[ index % len]\n\
}\n\
\n\
\n\
_విధానము_     triangle (side){\n\
  ముందుకు_జరుగు(side)\n\
  a = 45\n\
  b = (180-a)/2\n\
  కుడి_వైపు_తిరుగు(180 - b)\n\
  //ముందుకు_జరుగు(.748* side)\n\
  ముందుకు_జరుగు(side * 2 * Math.sin(a/2/360*6.28))\n\
  కుడి_వైపు_తిరుగు(180 - b)\n\
  ముందుకు_జరుగు(side)\n\
  కుడి_వైపు_తిరుగు(180-a)\n\
}\n\
\n\
\n\
_విధానము_     splitTri(outerSide, num, foreColor, triSide) {\n\
  _సర్వత్ర_   i, j\n\
  \n\
  if (triSide == undefined) {\n\
    triSide = outerSide\n\
  }\n\
  innerSide = triSide / num\n\
  for (j = num; j >0; j = j - 1) {\n\
     for (i = 0; i <j; i = i + 1) {\n\
        ఆకారము_ప్రారంభించు()\n\
        triangle (innerSide)\n\
        ఆకారము_ముగించు(foreColor)\n\
        కుంచికను_పైకి_ఎత్తు()\n\
        ముందుకు_జరుగు(innerSide)\n\
        కుంచికను_కింద_పెట్టు()\n\
    }\n\
    కుంచికను_పైకి_ఎత్తు()\n\
    వెనుకకు_జరుగు( j * innerSide)\n\
    కుడి_వైపు_తిరుగు(45)\n\
    ముందుకు_జరుగు( innerSide)\n\
    ఎడమ_వైపు_తిరుగు(45)\n\
    కుంచికను_కింద_పెట్టు()\n\
  }\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  కుడి_వైపు_తిరుగు(45)\n\
  వెనుకకు_జరుగు( innerSide * num)\n\
  ఎడమ_వైపు_తిరుగు(45)\n\
  కుంచికను_కింద_పెట్టు()\n\
}\n\
\n\
\n\
_విధానము_     flipSplitTri( outerSide, num, foreColor, triSide) {\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  ముందుకు_జరుగు( outerSide)\n\
  కుడి_వైపు_తిరుగు( 45)\n\
  ముందుకు_జరుగు( outerSide)\n\
  కుడి_వైపు_తిరుగు( 180-45)\n\
  కుంచికను_కింద_పెట్టు()\n\
  splitTri( outerSide, num, foreColor, triSide)\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  కుడి_వైపు_తిరుగు( 45)\n\
  ముందుకు_జరుగు( outerSide)\n\
  ఎడమ_వైపు_తిరుగు( 45)\n\
  ముందుకు_జరుగు( outerSide)\n\
  ఎడమ_వైపు_తిరుగు( 180)\n\
  కుంచికను_కింద_పెట్టు()\n\
}\n\
\n\
\n\
_విధానము_     labelPoints(size) {\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  కోణము( 0)\n\
  boxedCompass=["N", "NxE", "NNE", "NExN", "NE", "NExE", "ENE", "ExN", "E", "ExS", "ESE", "SExE", "SE", "SExS", "SSE", "SxE", "S", "SxW", "SSW", "SWxS", "SW", "SWxW", "WSW", "WxS", "W", "WxN", "WNW", "NWxW", "NW", "NWxN", "NNW", "NxW"]\n\
\n\
  // fill in the compass background\n\
\n\
  //textRadius = side*5.7\n\
  textRadius = size*.88\n\
  రంగు_మార్చు( compassTextColor)\n\
\n\
  for (i=0; i<32; i++) {\n\
  \n\
    ముందుకు_జరుగు(textRadius)\n\
    కుడి_వైపు_తిరుగు(90)\n\
    fontSize = i % 4\n\
    if (fontSize == 1 || fontSize == 3) {\n\
      pointSize = size *.04\n\
      textLen = boxedCompass[i].length * pointSize/2\n\
      వెనుకకు_జరుగు(textLen)\n\
      అక్షరరూపము_స్థాపించు("normal " + pointSize + "pt Helvetica")\n\
    } else if (fontSize == 2) {\n\
      pointSize = size *.04\n\
      textLen = boxedCompass[i].length * pointSize/2\n\
      వెనుకకు_జరుగు(textLen)\n\
      అక్షరరూపము_స్థాపించు("bold " + pointSize + "pt Helvetica")\n\
    } else {\n\
      pointSize = size *.06\n\
      textLen = boxedCompass[i].length * pointSize/2\n\
      వెనుకకు_జరుగు(textLen)\n\
      అక్షరరూపము_స్థాపించు("bold " + pointSize + "pt Helvetica")\n\
    }\n\
    వ్రాయి(boxedCompass[i])\n\
    ముందుకు_జరుగు(textLen)\n\
    ఎడమ_వైపు_తిరుగు(90)\n\
    వెనుకకు_జరుగు(textRadius)\n\
    కుడి_వైపు_తిరుగు(360/32)\n\
  }\n\
}\n\
\n\
\n\
_విధానము_     ప్రదర్శన() {\n\
  ఆది_స్థితి()\n\
  size = .9 * Math.min( గరిష్ఠX(), గరిష్ఠY()) //120\n\
console.log("size "+ size)\n\
   చుట్టొద్దు()\n\
  కుంచికను_దాచు() // don"t want it to show,  do this early\n\
  కుంచిక_కదిలిన_ప్రతి_సారీ_చిత్రీకరించు(false) // don"t redraw image each move\n\
\n\
  // fill in the background\n\
  background( backgroundColor)\n\
/*\n\
  స్థానము_మార్చు( కనిష్ఠX()+1, గరిష్ఠY()-1)\n\
  కుడి_వైపు_తిరుగు( 90)\n\
  ఆకారము_ప్రారంభించు()\n\
  ముందుకు_జరుగు( 2 * గరిష్ఠX()-2)\n\
  కుడి_వైపు_తిరుగు( 90)\n\
  ముందుకు_జరుగు( 2 * గరిష్ఠY()-2)\n\
  కుడి_వైపు_తిరుగు( 90)\n\
  ముందుకు_జరుగు( 2 * గరిష్ఠX()-2)\n\
  కుడి_వైపు_తిరుగు( 90)\n\
  ముందుకు_జరుగు( 2 * గరిష్ఠY()-2)\n\
  ఆకారము_ముగించు( backgroundColor)\n\
*/\n\
\n\
  //fill in the compass background\n\
  స్థానము_మార్చు(0,0)\n\
  రంగు_మార్చు( compassBackgroundColor)\n\
  ఆకారము_ప్రారంభించు()\n\
  వృత్తము(size)\n\
  ఆకారము_ముగించు( compassBackgroundColor)\n\
\n\
\n\
  //fill in the eight compass major points\n\
  స్థానము_మార్చు(0,0)\n\
  కోణము(0)\n\
  ఎడమ_వైపు_తిరుగు(22.5)\n\
  side = size * .47\n\
  for (i=0; i<8; i++) {\n\
    splitTri (side, mainDivisions, indexColor( i, inner8Colors))\n\
    flipSplitTri( side, mainDivisions, indexColor( i, outer8Colors))\n\
    కుడి_వైపు_తిరుగు(45)\n\
  }\n\
\n\
  //ornament the center\n\
  for (i=0; i<8; i++) {\n\
    splitTri (side/mainDivisions, subDivisions8, "yellow")\n\
    కుడి_వైపు_తిరుగు(45)\n\
  }\n\
\n\
 //place the sixteenth points\n\
  కుడి_వైపు_తిరుగు(22.5)\n\
  for (i=0; i<8; i++) {\n\
    flipSplitTri (side, 1, background16Color,\n\
        side * mainDivisions16/mainDivisions)\n\
    flipSplitTri (side, subDivisions16, foreground16Color,\n\
        side * mainDivisions16/mainDivisions)\n\
    కుడి_వైపు_తిరుగు(45)\n\
  }\n\
\n\
   //place the thirty-second points\n\
  కుడి_వైపు_తిరుగు(11.25)\n\
  for (i=0; i<16; i++) {\n\
    flipSplitTri (side, 1, background32Color,\n\
        side * mainDivisions32/mainDivisions)\n\
    flipSplitTri (side, subDivisions32, foreground32Color,\n\
        side * mainDivisions32/mainDivisions)\n\
    కుడి_వైపు_తిరుగు(22.5)\n\
  }\n\
\n\
  labelPoints( size)\n\
\n\
  //కుంచిక_కదిలిన_ప్రతి_సారీ_చిత్రీకరించు(true)\n\
  చిత్రీకరించు() // just to render the final product\n\
}\n\
'
connected_points ='\
// Connected Points -- points connected by spikeys\n\
\n\
//draw the radials\n\
_విధానము_     drawRadials(side) {\n\
  for (_సర్వత్ర_   i=0; i<16; i++) {\n\
    స్థానము_మార్చు(0,0)\n\
    కోణము(i/16 * 360)\n\
    ముందుకు_జరుగు( size)\n\
  }\n\
}\n\
\n\
_విధానము_     spikey ( points, revs, వ్యాసార్థము, x, y, head) {\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  స్థానము_మార్చు(x, y)\n\
  దిశ_మార్చు(head)\n\
  ముందుకు_జరుగు(వ్యాసార్థము)\n\
  _సర్వత్ర_   turnAngle = 360 * revs/points\n\
  _సర్వత్ర_   angleA = ( 180 - turnAngle)/2\n\
  _సర్వత్ర_   stroke = 2 * వ్యాసార్థము * Math.cos( degToRad( angleA))\n\
  కుడి_వైపు_తిరుగు( 180 - angleA)\n\
  కుంచికను_కింద_పెట్టు()\n\
\n\
  for( _సర్వత్ర_   i = 0; i < points; i = i + 1) { //>\n\
    ముందుకు_జరుగు( stroke)\n\
    కుడి_వైపు_తిరుగు( turnAngle)\n\
  }\n\
}\n\
\n\
\n\
\n\
_విధానము_     ప్రదర్శన() {\n\
  ఆది_స్థితి()\n\
   చుట్టొద్దు()\n\
  size = .9* Math.min( గరిష్ఠX(), గరిష్ఠY())\n\
  //size=200\n\
  inr = .33* size\n\
  వెడల్పు(.5)\n\
  spikey( 16, 2, size, 0, 0, 0)\n\
  spikey( 16, 2, size, 0, 0, 360/16)\n\
  వెడల్పు(.25)\n\
  spikey( 16, 4, size, 0, 0, 0)\n\
  spikey( 16, 4, size, 0, 0, 360/16)\n\
  spikey( 16, 4, size, 0, 0, 2*360/16)\n\
  spikey( 16, 4, size, 0, 0, 3*360/16)\n\
  spikey( 16, 6, size, 0, 0, 0)\n\
  spikey( 16, 6, size, 0, 0, 360/16)\n\
  వెడల్పు(.7)\n\
  spikey( 8, 3, inr, 0, 0, 0)\n\
  spikey( 8, 1, inr, 0, 0, 0)\n\
  వెడల్పు(1)\n\
  drawRadials( size)\n\
  స్థానము_మార్చు(0,0)\n\
  వృత్తము( inr)\n\
  కుంచికను_దాచు()\n\
}\n\
'
conway_fractal ='\
// Conway Fractal -- Conway\'s pinwheel tessellation as a fractal\n\
// the British mathematician John Conway devised a tesselation using triagles\n\
// that has no periodicity called the pinwheel tesselation.  This is a fractal\n\
// form of that tessellation.\n\
\n\
/*\n\
from a point can:\n\
 - draw a triangle X\n\
 - draw a triangle and 4 siblings as a newer larger triangle\n\
 - divide a triangle into 5 offspring triangles\n\
\n\
Recursion for:\n\
  expanding a set of triangles from a point\n\
  dividing a set of triangles from a point.\n\
\n\
need routines for\n\
  recursive expansion\n\
  - expand, move to new base, change size\n\
  move to 5 base points dividing a triangle\n\
  move to 5 base points expanding a triangle\n\
  conditionally draw triangle or subdivide\n\
\n\
  * optionally have a delay for animation\n\
\n\
  * options to grid certain triangles (all, none, prime, non-prime)\n\
\n\
  * option to change width of triangle outline (level, triangle)\n\
*/\n\
\n\
\n\
//*** GLOBALS ***\n\
\n\
_సర్వత్ర_   level = 0\n\
_సర్వత్ర_   targetLevel = 5\n\
_సర్వత్ర_   side = .80 * Math.min( గరిష్ఠY()*2, గరిష్ఠX()) // base of big triangle\n\
_సర్వత్ర_   mainColor = "tan"\n\
_సర్వత్ర_   subColor = "wheat"\n\
_సర్వత్ర_   dividerColor = "నలుపు"\n\
_సర్వత్ర_   stepsize = 1.5       //spacing between shading lines\n\
_సర్వత్ర_   specialTriangle = 0  // triangle number selected for highlighting (1-5, 0 for none)\n\
\n\
\n\
//*** CONSTANTS ***\n\
\n\
_సర్వత్ర_   targetLevel = 4\n\
_సర్వత్ర_   root5 = Math.sqrt(5)\n\
_సర్వత్ర_   anglea = Math.asin( 1 / root5) * 360 / 2 / Math.PI\n\
_సర్వత్ర_   angleb = Math.asin( 2 / root5) * 360 / 2 / Math.PI\n\
_సర్వత్ర_   CCW = false\n\
_సర్వత్ర_   CW = true\n\
\n\
\n\
//*** FUNCTIONS ***\n\
\n\
_విధానము_     dturn( dir, degrees) {\n\
  if (dir) {\n\
    కుడి_వైపు_తిరుగు( degrees)\n\
  } else {\n\
    ఎడమ_వైపు_తిరుగు( degrees)\n\
  }\n\
}\n\
\n\
_విధానము_     drawTriangle (dir, side) {\n\
  ముందుకు_జరుగు(2*side)\n\
  dturn(dir, 180-anglea)\n\
  ముందుకు_జరుగు(root5*side)\n\
  dturn (dir, 180-angleb)\n\
  ముందుకు_జరుగు(side)\n\
  dturn (dir, 90)\n\
}\n\
\n\
\n\
_విధానము_     caption (message) {\n\
  // save your current position, heading, etc.\n\
  _సర్వత్ర_   savedX = కుంచిక.స్థానము.x\n\
  _సర్వత్ర_   savedY = కుంచిక.స్థానము.y\n\
  _సర్వత్ర_   savedHeading = కుంచిక.కోణము / 2 / Math.PI * 360 //convert radians to degrees\n\
  _సర్వత్ర_   savedColor = కుంచిక.రంగు\n\
  _సర్వత్ర_   savedWidth = కుంచిక.వెడల్పు\n\
\n\
  స్థానము_మార్చు(కనిష్ఠX()+10, కనిష్ఠY()+10)\n\
  దిశ_మార్చు( 90)\n\
\n\
  // erase what will be in the path\n\
  రంగు_మార్చు( తెలుపు )\n\
  వెడల్పు(10)\n\
  ముందుకు_జరుగు(గరిష్ఠY() * 2 - 12)\n\
  స్థానము_మార్చు(కనిష్ఠX()+10, కనిష్ఠY()+5)\n\
  రంగు_మార్చు("నలుపు")\n\
  వ్రాయి( message)\n\
\n\
  //go back from whence you came\n\
  స్థానము_మార్చు( savedX, savedY)\n\
  దిశ_మార్చు( savedHeading)\n\
  రంగు_మార్చు( savedColor)\n\
  వెడల్పు(savedWidth)\n\
}\n\
\n\
\n\
_విధానము_     shadeTriangle( dir, side, stepsize) {\n\
  console.log( "sT: " + dir + " " + side + " " + stepsize)\n\
  _సర్వత్ర_   x = కుంచిక.స్థానము.x\n\
  _సర్వత్ర_   y = కుంచిక.స్థానము.y\n\
  _సర్వత్ర_   steps = Math.floor( side/stepsize)\n\
\n\
  for (_సర్వత్ర_   i=0; i< steps; i++) {\n\
     ముందుకు_జరుగు( 2*side * (steps-i)/steps)\n\
     వెనుకకు_జరుగు( 2*side * (steps-i)/steps)\n\
     కుంచికను_పైకి_ఎత్తు()\n\
     dturn( dir, 90)\n\
     ముందుకు_జరుగు( stepsize)\n\
     dturn( !dir, 90)\n\
     కుంచికను_కింద_పెట్టు()\n\
  }\n\
  //_ఫలము_  to start\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  dturn( !dir, 90)\n\
  ముందుకు_జరుగు( side)\n\
  dturn( dir, 90)\n\
  //స్థానము_మార్చు(x,y) // cancel cumulative error\n\
  కుంచికను_కింద_పెట్టు()\n\
}\n\
\n\
_విధానము_     recursiveDivide( dir, side, level, triangle) {\n\
  //console.log("rD: " + level + " " + triangle)\n\
  if (level > 0) {\n\
    side = 0. + side/root5\n\
    _సర్వత్ర_   x = కుంచిక.స్థానము.x\n\
    _సర్వత్ర_   y = కుంచిక.స్థానము.y\n\
    \n\
    //draw the first line to point A\n\
    dturn( dir, angleb)\n\
    కుంచికను_కింద_పెట్టు()\n\
    ముందుకు_జరుగు(2*side)\n\
\n\
    //sub triangle 1\n\
    కుడి_వైపు_తిరుగు(180)\n\
    recursiveDivide( !dir, side, level-1, 1)\n\
    కుడి_వైపు_తిరుగు(180)\n\
\n\
    //draw the second line to point B\n\
    dturn( !dir, 180-angleb)\n\
    కుంచికను_కింద_పెట్టు()\n\
    ముందుకు_జరుగు(root5*side)\n\
    \n\
    //draw third line to point C\n\
    dturn( dir, 180-angleb)\n\
    ముందుకు_జరుగు(side)\n\
    కుంచికను_పైకి_ఎత్తు()\n\
\n\
i    //sub triangle 4\n\
    dturn( dir, 90)\n\
    recursiveDivide( dir, side, level-1, 4)\n\
\n\
    //sub triangle 5\n\
    కుడి_వైపు_తిరుగు( 180)\n\
    recursiveDivide( !dir, side, level-1, 5)\n\
    dturn( dir, 90)\n\
    \n\
    //retreat to point B\n\
    వెనుకకు_జరుగు(side)\n\
    dturn( dir, 90)\n\
    \n\
    //draw fourth line to point D\n\
    కుంచికను_కింద_పెట్టు()\n\
    ముందుకు_జరుగు( 2*side)\n\
    కుంచికను_పైకి_ఎత్తు()\n\
\n\
    //sub triangle 2\n\
    కుడి_వైపు_తిరుగు( 180)\n\
    recursiveDivide( !dir, side, level-1, 2)\n\
\n\
    //sub triangle 3\n\
    recursiveDivide( dir, side, level-1, 3)\n\
    \n\
    //retreat to origin\n\
    dturn( !dir, 90)\n\
    కుంచికను_పైకి_ఎత్తు()\n\
    ముందుకు_జరుగు( side)\n\
    కుంచికను_కింద_పెట్టు()\n\
    dturn( dir, 180-angleb)\n\
    //స్థానము_మార్చు(x,y) //cancel cumulative error\n\
//  } else {\n\
    //if (triangle == 3) {\n\
//    if (triangle == specialTriangle) {\n\
//      shadeTriangle (dir, side, stepsize)\n\
//    }\n\
  }\n\
}\n\
\n\
_విధానము_     recursiveDivideBlocks( dir, side, level, triangle, background, highlight) {\n\
  //console.log( "rDB: " + level + " " + triangle + " " + background + " " + highlight)\n\
  if (level > 0) {\n\
    side = side/root5\n\
    _సర్వత్ర_   x = కుంచిక.స్థానము.x\n\
    _సర్వత్ర_   y = కుంచిక.స్థానము.y\n\
\n\
    //move to point A\n\
    కుంచికను_పైకి_ఎత్తు()\n\
    dturn( dir, angleb)\n\
    ముందుకు_జరుగు(2 * side)\n\
\n\
    //sub triangle 1\n\
    కుడి_వైపు_తిరుగు(180)\n\
    కుంచికను_కింద_పెట్టు()\n\
    recursiveDivideBlocks( !dir, side, level-1, 1, background, highlight)\n\
    కుంచికను_పైకి_ఎత్తు()\n\
    కుడి_వైపు_తిరుగు(180)\n\
\n\
    //move to pint B\n\
    dturn( !dir, 180-angleb)\n\
    ముందుకు_జరుగు(root5*side)\n\
    \n\
    //move to point C\n\
    dturn( dir, 180-angleb)\n\
    ముందుకు_జరుగు(side)\n\
\n\
    //sub triangle 4\n\
    dturn( dir, 90)\n\
    కుంచికను_కింద_పెట్టు()\n\
    recursiveDivideBlocks( dir, side, level-1, 4, background, highlight)\n\
    కుంచికను_పైకి_ఎత్తు()\n\
\n\
    //sub triangle 5\n\
    కుడి_వైపు_తిరుగు( 180)\n\
    కుంచికను_కింద_పెట్టు()\n\
    recursiveDivideBlocks( !dir, side, level-1, 5, background, highlight)\n\
    కుంచికను_పైకి_ఎత్తు()\n\
\n\
    //retreat to point B\n\
    dturn( dir, 90)\n\
    వెనుకకు_జరుగు(side)\n\
\n\
    //move to point B\n\
    dturn( dir, 90)\n\
    ముందుకు_జరుగు( 2*side)\n\
\n\
//sub triangle 2\n\
    కుడి_వైపు_తిరుగు( 180)\n\
    కుంచికను_కింద_పెట్టు()\n\
    recursiveDivideBlocks( !dir, side, level-1, 2, background, highlight)\n\
\n\
    //sub triangle 3\n\
    recursiveDivideBlocks( dir, side, level-1, 3, highlight, highlight)\n\
    కుంచికను_పైకి_ఎత్తు()\n\
\n\
    //move to origin\n\
    dturn( !dir, 90)\n\
    ముందుకు_జరుగు(side)\n\
\n\
    dturn( dir, 180-angleb)\n\
    స్థానము_మార్చు(x,y) //cancel cumulative error\n\
  } else {\n\
    if (triangle == 3) {\n\
    //if (triangle == specialTriangle) {\n\
      రంగు_మార్చు( highlight)\n\
      console.log("shading " + highlight)\n\
      shadeTriangle (dir, side, stepsize)\n\
    } else {\n\
      రంగు_మార్చు( background)\n\
      shadeTriangle (dir, side, stepsize)\n\
    }\n\
  }\n\
}\n\
\n\
\n\
_విధానము_     delayedDivide() {\n\
  level = level + 1\n\
  if (level <= targetLevel) {\n\
    recursiveDivideBlocks( CCW, side, level, 0, mainColor, subColor)\n\
    రంగు_మార్చు(dividerColor)\n\
    recursiveDivide( CCW, side, level, 0)\n\
    drawTriangle( CCW, side)\n\
    caption( "Fractal divide, generation " + level)\n\
    విలంబించు( delayedDivide, 3000)\n\
  }\n\
}\n\
\n\
\n\
//*** MAIN ***\n\
\n\
_విధానము_     ప్రదర్శన() {\n\
  // initialize\n\
  ఆది_స్థితి()\n\
   చుట్టొద్దు()\n\
  కుంచికను_దాచు()\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  వెనుకకు_జరుగు(side/4)\n\
  కుడి_వైపు_తిరుగు(90)\n\
  వెనుకకు_జరుగు(side)\n\
\n\
  // label the sides of the triangle\n\
  అక్షరరూపము_స్థాపించు("bold 14px sans-serif")\n\
  ఎడమ_వైపు_తిరుగు( anglea)\n\
  ముందుకు_జరుగు( side+50)\n\
  కుడి_వైపు_తిరుగు( anglea)\n\
  వ్రాయి( "√5")\n\
  ఎడమ_వైపు_తిరుగు( anglea)\n\
  వెనుకకు_జరుగు( side+50)\n\
  కుడి_వైపు_తిరుగు( anglea)\n\
  కుడి_వైపు_తిరుగు( 90)\n\
  ముందుకు_జరుగు(20)\n\
  ఎడమ_వైపు_తిరుగు( 90)\n\
  ముందుకు_జరుగు( side)\n\
  వ్రాయి(2)\n\
  వెనుకకు_జరుగు( side+20)\n\
  ఎడమ_వైపు_తిరుగు( 90)\n\
  ముందుకు_జరుగు( side/2 + 20)\n\
  కుడి_వైపు_తిరుగు( 90)\n\
  వ్రాయి( 1)\n\
  ముందుకు_జరుగు( 20)\n\
  కుడి_వైపు_తిరుగు(90)\n\
  ముందుకు_జరుగు(side/2)\n\
  ఎడమ_వైపు_తిరుగు(90)\n\
\n\
  కుంచికను_కింద_పెట్టు()\n\
  drawTriangle( CCW, side)\n\
\n\
  level = 0\n\
\n\
  విలంబించు( delayedDivide, 3000)\n\
}\n\
'
conway_pinwheel ='\
// Conway Pinwheel -- Conway\'s pinwheel tessellation\n\
// the British mathematician John Conway devised a tesselation using triagles\n\
// that has no periodicity called the pinwheel tesselation.\n\
\n\
/*\n\
from a point can:\n\
 - draw a triangle X\n\
 - draw a triangle and 4 siblings as a newer larger triangle\n\
 - divide a triangle into 5 offspring triangles\n\
\n\
Recursion for:\n\
  expanding a set of triangles from a point\n\
  dividing a set of triangles from a point.\n\
\n\
need routines for\n\
  recursive expansion\n\
  - expand, move to new base, change size\n\
  move to 5 base points dividing a triangle\n\
  move to 5 base points expanding a triangle\n\
  conditionally draw triangle or subdivide\n\
\n\
  * optionally have a delay for animation\n\
\n\
  * options to grid certain triangles (all, none, prime, non-prime)\n\
\n\
  * option to change width of triangle outline (level, triangle)\n\
*/\n\
\n\
\n\
//*** GLOBALS ***\n\
\n\
_సర్వత్ర_   levels = 4\n\
_సర్వత్ర_   targetSide = .80 * Math.min( గరిష్ఠY()*2, గరిష్ఠX()) // base of big encompassing triangle\n\
_సర్వత్ర_   delayedSide = 0		// current side being worked\n\
\n\
_సర్వత్ర_   mainColor = "tan"\n\
_సర్వత్ర_   subColor = "wheat"\n\
_సర్వత్ర_   dividerColor = "నలుపు"\n\
_సర్వత్ర_   stepsize = 1.5       //spacing between shading lines\n\
_సర్వత్ర_   specialTriangle = 0  // triangle number selected for highlighting (1-5, 0 for none)\n\
\n\
\n\
//*** CONSTANTS ***\n\
\n\
_సర్వత్ర_   root5 = Math.sqrt(5)\n\
_సర్వత్ర_   anglea = Math.asin( 1 / root5) * 360 / 2 / Math.PI\n\
_సర్వత్ర_   angleb = Math.asin( 2 / root5) * 360 / 2 / Math.PI\n\
_సర్వత్ర_   CCW = false\n\
_సర్వత్ర_   CW = true\n\
\n\
\n\
//*** FUNCTIONS ***\n\
\n\
_విధానము_     dturn( dir, degrees) { // allows turning based on triangle type\n\
  if (dir) {\n\
    కుడి_వైపు_తిరుగు( degrees)\n\
  } else {\n\
    ఎడమ_వైపు_తిరుగు( degrees)\n\
  }\n\
}\n\
\n\
\n\
_విధానము_     drawTriangle (dir, side) {\n\
  ముందుకు_జరుగు(2*side)\n\
  dturn(dir, 180-anglea)\n\
  ముందుకు_జరుగు(root5*side)\n\
  dturn (dir, 180-angleb)\n\
  ముందుకు_జరుగు(side)\n\
  dturn (dir, 90)\n\
}\n\
\n\
\n\
_విధానము_     caption (message) {\n\
  // save your current position, heading, etc.\n\
  _సర్వత్ర_   savedX = కుంచిక.స్థానము.x\n\
  _సర్వత్ర_   savedY = కుంచిక.స్థానము.y\n\
  _సర్వత్ర_   savedHeading = కుంచిక.కోణము / 2 / Math.PI * 360 //convert radians to degrees\n\
  _సర్వత్ర_   savedColor = కుంచిక.రంగు\n\
  _సర్వత్ర_   savedWidth = కుంచిక.వెడల్పు\n\
\n\
  స్థానము_మార్చు(కనిష్ఠX()+10, కనిష్ఠY()+10)\n\
  దిశ_మార్చు( 90)\n\
\n\
  // erase wha will be in the path\n\
  రంగు_మార్చు( తెలుపు )\n\
  వెడల్పు(10)\n\
  ముందుకు_జరుగు(గరిష్ఠY() * 2 - 12)\n\
  స్థానము_మార్చు(కనిష్ఠX()+10, కనిష్ఠY()+5)\n\
  రంగు_మార్చు("నలుపు")\n\
  వ్రాయి( message)\n\
\n\
  //go back from whence you came\n\
  స్థానము_మార్చు( savedX, savedY)\n\
  దిశ_మార్చు( savedHeading)\n\
  రంగు_మార్చు( savedColor)\n\
  వెడల్పు(savedWidth)\n\
}\n\
\n\
\n\
\n\
_విధానము_     shadeTriangle( dir, side, stepsize) {\n\
  console.log( "sT: " + dir + " " + side + " " + stepsize)\n\
  _సర్వత్ర_   x = కుంచిక.స్థానము.x\n\
  _సర్వత్ర_   y = కుంచిక.స్థానము.y\n\
  _సర్వత్ర_   steps = Math.floor( side/stepsize)\n\
\n\
  for (_సర్వత్ర_   i=0; i< steps; i++) {\n\
     ముందుకు_జరుగు( 2*side * (steps-i)/steps)\n\
     వెనుకకు_జరుగు( 2*side * (steps-i)/steps)\n\
     కుంచికను_పైకి_ఎత్తు()\n\
     dturn( dir, 90)\n\
     ముందుకు_జరుగు( stepsize)\n\
     dturn( !dir, 90)\n\
     కుంచికను_కింద_పెట్టు()\n\
  }\n\
  //_ఫలము_  to start\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  dturn( !dir, 90)\n\
  ముందుకు_జరుగు( side)\n\
  dturn( dir, 90)\n\
  //స్థానము_మార్చు(x,y) // cancel cumulative error\n\
  కుంచికను_కింద_పెట్టు()\n\
}\n\
\n\
\n\
_విధానము_     recursiveDivide( dir, side, level, triangle) {\n\
  //console.log("rD: " + level + " " + triangle)\n\
  if (level > 0) {\n\
    side = 0. + side/root5\n\
    _సర్వత్ర_   x = కుంచిక.స్థానము.x\n\
    _సర్వత్ర_   y = కుంచిక.స్థానము.y\n\
    \n\
    //draw the first line to point A\n\
    dturn( dir, angleb)\n\
    కుంచికను_కింద_పెట్టు()\n\
    ముందుకు_జరుగు(2*side)\n\
\n\
    //sub triangle 1\n\
    కుడి_వైపు_తిరుగు(180)\n\
    recursiveDivide( !dir, side, level-1, 1)\n\
    కుడి_వైపు_తిరుగు(180)\n\
\n\
    //draw the second line to point B\n\
    dturn( !dir, 180-angleb)\n\
    కుంచికను_కింద_పెట్టు()\n\
    ముందుకు_జరుగు(root5*side)\n\
    \n\
    //draw third line to point C\n\
    dturn( dir, 180-angleb)\n\
    ముందుకు_జరుగు(side)\n\
    కుంచికను_పైకి_ఎత్తు()\n\
\n\
i    //sub triangle 4\n\
    dturn( dir, 90)\n\
    recursiveDivide( dir, side, level-1, 4)\n\
\n\
    //sub triangle 5\n\
    కుడి_వైపు_తిరుగు( 180)\n\
    recursiveDivide( !dir, side, level-1, 5)\n\
    dturn( dir, 90)\n\
    \n\
    //retreat to point B\n\
    వెనుకకు_జరుగు(side)\n\
    dturn( dir, 90)\n\
    \n\
    //draw fourth line to point D\n\
    కుంచికను_కింద_పెట్టు()\n\
    ముందుకు_జరుగు( 2*side)\n\
    కుంచికను_పైకి_ఎత్తు()\n\
\n\
    //sub triangle 2\n\
    కుడి_వైపు_తిరుగు( 180)\n\
    recursiveDivide( !dir, side, level-1, 2)\n\
\n\
    //sub triangle 3\n\
    recursiveDivide( dir, side, level-1, 3)\n\
    \n\
    //retreat to origin\n\
    dturn( !dir, 90)\n\
    కుంచికను_పైకి_ఎత్తు()\n\
    ముందుకు_జరుగు( side)\n\
    కుంచికను_కింద_పెట్టు()\n\
    dturn( dir, 180-angleb)\n\
    //స్థానము_మార్చు(x,y) //cancel cumulative error\n\
//  } else {\n\
//    if (triangle == 3) {\n\
//    if (triangle == specialTriangle) {\n\
//      shadeTriangle (dir, side, stepsize)\n\
//    }\n\
  }\n\
}\n\
\n\
\n\
_విధానము_     moveToExpandOrigin (side) {\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  కుడి_వైపు_తిరుగు( 90)\n\
  ముందుకు_జరుగు( side)\n\
  ఎడమ_వైపు_తిరుగు( 180 - angleb)\n\
  కుంచికను_కింద_పెట్టు()\n\
}\n\
\n\
\n\
_విధానము_     startDelayedDivide() {\n\
  // move to the origin of the big triangle\n\
  ఆది_స్థితి()\n\
  రంగు_మార్చు(mainColor)\n\
  కుంచికను_పైకి_ఎత్తు()\n\
\n\
  side = targetSide\n\
  వెనుకకు_జరుగు(side/2)\n\
  కుడి_వైపు_తిరుగు(90)\n\
  వెనుకకు_జరుగు(side)\n\
  కుంచికను_కింద_పెట్టు()\n\
\n\
  iterations = 4\n\
  level = 0\n\
\n\
  కుంచికను_కింద_పెట్టు()\n\
  రంగు_మార్చు("నలుపు")\n\
  delayedDivide()\n\
}\n\
\n\
\n\
_విధానము_     delayedDivide() {\n\
  //console.log ("dD: "+ side + " " + level)\n\
  recursiveDivide( CCW, side, level, 0)\n\
  drawTriangle( CCW, side)\n\
  caption( "Division, generation " + level)\n\
  level = level + 1\n\
  if (level <= iterations) {\n\
    విలంబించు( delayedDivide,1000)\n\
  } else {\n\
    విలంబించు( startDelayedExpansion, 3000)\n\
  }\n\
}\n\
\n\
_విధానము_     startDelayedExpansion() {\n\
  //move to the origin of the big triangle\n\
  reset ()\n\
   చుట్టొద్దు()\n\
  రంగు_మార్చు(mainColor)\n\
  కుంచికను_పైకి_ఎత్తు()\n\
\n\
  _సర్వత్ర_   tempSide = targetSide\n\
  వెనుకకు_జరుగు(side/2)\n\
  కుడి_వైపు_తిరుగు(90)\n\
  వెనుకకు_జరుగు(side)\n\
\n\
  iterations = 4\n\
  depth = 0\n\
  dir = CCW\n\
\n\
  // move the starting point so that it ends where it starts\n\
  for (_సర్వత్ర_   i=0; i<iterations; i++) {\n\
    tempSide = tempSide/root5\n\
  }\n\
  delayedSide = tempSide\n\
  for (_సర్వత్ర_   i=0; i<iterations; i++) {\n\
    tempSide = tempSide * root5\n\
  }\n\
  for (_సర్వత్ర_   i=0; i<iterations; i++) {\n\
    కుంచికను_కింద_పెట్టు()\n\
    drawTriangle( dir, tempSide)\n\
    కుంచికను_పైకి_ఎత్తు()\n\
    dturn( dir, angleb)\n\
    ముందుకు_జరుగు( tempSide/root5)\n\
    dturn( !dir, 90)\n\
    tempSide = tempSide / root5\n\
    drawTriangle( tempSide) // really just for reference\n\
    console.log(i)\n\
  }\n\
\n\
  కుంచికను_కింద_పెట్టు()\n\
  రంగు_మార్చు( నీలము )\n\
  shadeTriangle( CCW, tempSide, stepsize)\n\
  రంగు_మార్చు("నలుపు")\n\
  విలంబించు( delayedExpansion,1000)\n\
}\n\
\n\
_విధానము_     delayedExpansion() {\n\
  /* on entry\n\
    delayedSide is the size of the base triangle.\n\
    depth is how many generations to do.\n\
  */\n\
\n\
  moveToExpandOrigin( delayedSide)\n\
  delayedSide = delayedSide * root5\n\
  //console.log( "dE: " + depth + " " + iterations + " " + delayedSide)\n\
  recursiveDivide( CCW, delayedSide, depth+1, 0)\n\
  drawTriangle( CCW, delayedSide)\n\
  caption( "Expansion, generation " + (depth+1))\n\
\n\
  depth = depth + 1\n\
  if (depth < iterations) {\n\
    విలంబించు( delayedExpansion,1000)\n\
  } else {\n\
    delayedSide = targetSide\n\
    విలంబించు( startDelayedDivide, 3000)\n\
  }\n\
}\n\
\n\
\n\
//***MAIN***\n\
\n\
console.log ("Starting")\n\
stepsize = 1.5\n\
iterations = 4\n\
iterations = 2\n\
level = 1\n\
depth = 0\n\
CCW = false // triangle is to the left side of the right కోణము ( height, hypotenuse, base)\n\
CW = true // triangle is to the right side of the right కోణము( height, hypotenuse, base)\n\
mainColor = "tan"\n\
subColor = "wheat"\n\
specialTriangle = 0\n\
\n\
\n\
_విధానము_     ప్రదర్శన() {\n\
  /* want demo to show a mix of divide and expand with animation\n\
\n\
basically:\n\
  starts up with a delayed division set up\n\
  when that is over\n\
  continue with a delayed expansion\n\
*/\n\
  ఆది_స్థితి()\n\
  కుంచికను_దాచు()\n\
  side = targetSide\n\
   చుట్టొద్దు()\n\
  రంగు_మార్చు(mainColor)\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  వెనుకకు_జరుగు(side/2)\n\
  కుడి_వైపు_తిరుగు(90)\n\
  వెనుకకు_జరుగు(side)\n\
  కుంచికను_కింద_పెట్టు()\n\
\n\
  startDelayedExpansion()\n\
}\n\
'
coordinates ='\
// Coordinates -- Draw the axes of the coordinate system on the canvas\n\
\n\
_విధానము_     lines () {\n\
  చెరిపి_వేయి()\n\
  కుంచికను_కింద_పెట్టు()\n\
\n\
  స్థానము_మార్చు(0,కనిష్ఠY())\n\
  కోణము(0)\n\
  ముందుకు_జరుగు(2*గరిష్ఠY())\n\
\n\
  స్థానము_మార్చు(కనిష్ఠX(),0)\n\
  కోణము(90)\n\
  ముందుకు_జరుగు(2*గరిష్ఠX())\n\
\n\
  //lable the axes\n\
  అక్షరరూపము_స్థాపించు("bold 14px sans-serif");\n\
  స్థానము_మార్చు(0+10,గరిష్ఠY()-25)\n\
  కోణము (90)\n\
  వ్రాయి(గరిష్ఠY())\n\
\n\
  స్థానము_మార్చు(గరిష్ఠX()-5,+10)\n\
  కోణము (0)\n\
  వ్రాయి(గరిష్ఠX())\n\
\n\
  స్థానము_మార్చు(10,కనిష్ఠY()+5)\n\
  కోణము (90)\n\
  వ్రాయి(కనిష్ఠY())\n\
\n\
  స్థానము_మార్చు(కనిష్ఠX()+25,0+10)\n\
  కోణము (0)\n\
  వ్రాయి(కనిష్ఠX())\n\
}\n\
\n\
\n\
_విధానము_     ticks (dir, limit, step) {\n\
  _సర్వత్ర_   tickLen = 5\n\
  కోణము(dir)\n\
  స్థానము_మార్చు(0,0)\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  for (i=1; i*step<limit; i=i+1) {\n\
\n\
    ముందుకు_జరుగు(step)\n\
    ఎడమ_వైపు_తిరుగు(90)\n\
    if (i%5 == 0) {\n\
      ముందుకు_జరుగు(tickLen)\n\
      కుంచికను_కింద_పెట్టు()\n\
      వెనుకకు_జరుగు(tickLen*2)\n\
      కుంచికను_పైకి_ఎత్తు()\n\
      ముందుకు_జరుగు(tickLen)\n\
      కుడి_వైపు_తిరుగు(90)\n\
    } else {\n\
      ముందుకు_జరుగు(tickLen/2)\n\
      కుంచికను_కింద_పెట్టు()\n\
      వెనుకకు_జరుగు(tickLen)\n\
      కుంచికను_పైకి_ఎత్తు()\n\
      ముందుకు_జరుగు(tickLen/2)\n\
      కుడి_వైపు_తిరుగు(90)\n\
    }\n\
  }\n\
}\n\
\n\
_విధానము_     ప్రదర్శన() {\n\
  lines()\n\
  ticks (0, గరిష్ఠY(), 10)\n\
  ticks (90, గరిష్ఠX(), 10)\n\
  ticks (180, -కనిష్ఠY(), 10)\n\
  ticks (270, -కనిష్ఠX(), 10)\n\
}\n\
'
dividing_circle ='\
// ఒక వృత్తమును వేరే వృత్తములతో విభజించుట\n\
\n\
// *** సార్వత్రికములు ***\n\
\n\
// *** నిత్యములు ***\n\
_సర్వదా_    వ్యాసార్థము = 50;  // అన్ని వృత్తముల వ్యాసార్థము\n\
_సర్వదా_    మెట్ట్ల_సంఖ్య = 6; // మధ్యలో ఉన్న వృత్తాకార మెట్టు నుంచి చివరన ఉన్న మెట్టు వరకు\n\
                     // ఉన్న సోపానముల సంఖ్య  \n\
_సర్వదా_    అవధి = 1000;   // మిల్లిసెకన్లు. ఒక స్థాయి మెట్ట్లు చిత్రీకరించిన తరువాత \n\
                     // క్రింది స్థాయి మెట్ట్లు చిత్రీకరించడానికి ఎంత సేపు ఆగాలి? \n\
\n\
// *** ప్రక్రియలు ***\n\
\n\
విభజించు = (వృత్తములు, వ్యాసార్థము) => {\n\
  ఎడమ_వైపు_తిరుగు(60);\n\
  ముందుకు_జరుగు(వ్యాసార్థము);\n\
  కుడి_వైపు_తిరుగు(60);\n\
  ఆవర్తించు( 6, () => { // ఒకొక్కటి చొప్పున ఆరు సమీపస్థ వృత్తములు\n\
    కుడి_వైపు_తిరుగు(60);\n\
    ఆవర్తించు(వృత్తములు, () => { \n\
      ముందుకు_జరుగు(వ్యాసార్థము);\n\
      వృత్తము(వ్యాసార్థము);\n\
    });\n\
  });\n\
}\n\
\n\
మెట్టు = (లోతు) => {\n\
  విభజించు( లోతు, వ్యాసార్థము )\n\
  యది_చేత్( \n\
    () => (లోతు < మెట్ట్ల_సంఖ్య),\n\
    () => {\n\
      విలంబించు ( () => {మెట్టు(లోతు+1)}, అవధి);\n\
    } \n\
  );\n\
}\n\
\n\
\n\
ప్రదర్శన = () => {\n\
  చెరిపి_వేయి();\n\
  కుంచికను_దాచు();\n\
  కేంద్రకమునకు_వెళ్ళు();\n\
  కుంచికను_పైకి_ఎత్తు();\n\
  చుట్టొద్దు();\n\
  వృత్తము(వ్యాసార్థము);\n\
  విలంబించు ( () => {మెట్టు(0)}, అవధి);\n\
}\n\
'
dodecahedron_graph ='\
// Dodecahedron Graph -- draw a 2-dimentional graph of a dodecahedron\n\
// graph here describes the connections between vertices, more at\n\
// Wikipedia.com\n\
\n\
//   This would be easier to draw to points on concentric circles\n\
//   This is just lines and not shadable polygons\n\
\n\
_విధానము_     pent(side) {\n\
  _సర్వత్ర_   angle2=72-(360-108)/2\n\
  // the sides below are really trigonometric conversions\n\
  // without the trig functions\n\
  _సర్వత్ర_   side2 = .4*side\n\
  _సర్వత్ర_   angle3 = 80\n\
  _సర్వత్ర_   side3 = 1.05 * side\n\
  _సర్వత్ర_   angle4 = 40\n\
  _సర్వత్ర_   side4 = .5 * side\n\
  _సర్వత్ర_   angle5 = 129\n\
  _సర్వత్ర_   side5 = 2.65 * side\n\
  for (_సర్వత్ర_   i=0; i<5; i++) {\n\
    ముందుకు_జరుగు(side)\n\
      కుడి_వైపు_తిరుగు(angle2)\n\
      ముందుకు_జరుగు(side2)\n\
        కుడి_వైపు_తిరుగు(angle3)\n\
        ముందుకు_జరుగు(side3)\n\
          ఎడమ_వైపు_తిరుగు(angle4)\n\
          ముందుకు_జరుగు(side4)\n\
            ఎడమ_వైపు_తిరుగు(angle5)\n\
            ముందుకు_జరుగు(side5)\n\
            వెనుకకు_జరుగు(side5)\n\
            కుడి_వైపు_తిరుగు(angle5)\n\
          వెనుకకు_జరుగు(side4)\n\
          కుడి_వైపు_తిరుగు(angle4)\n\
        వెనుకకు_జరుగు(side3)\n\
        ఎడమ_వైపు_తిరుగు(angle3)\n\
        ఎడమ_వైపు_తిరుగు(angle3)\n\
        ముందుకు_జరుగు(side3)\n\
        వెనుకకు_జరుగు(side3)\n\
        కుడి_వైపు_తిరుగు(angle3)\n\
      వెనుకకు_జరుగు(side2)\n\
      ఎడమ_వైపు_తిరుగు(angle2)\n\
    కుడి_వైపు_తిరుగు(72)\n\
  }\n\
}\n\
\n\
_విధానము_     ప్రదర్శన() {\n\
  స్థానము_మార్చు(-50,-22)\n\
  కుడి_వైపు_తిరుగు(17)\n\
  pent(50)\n\
  కుంచికను_దాచు()\n\
}\n\
'
dragon_curve ='\
// Dragon Curve -- draw a fractal curve formed by folding a shape onto itself\n\
//  more infomration at wikipedia  https://en.wikipedia.org/wiki/Dragon_curve\n\
\n\
\n\
//*** GLOBALS ***\n\
_సర్వత్ర_   gen = 0\n\
_సర్వత్ర_   side\n\
\n\
\n\
//*** CONSTANTS ***\n\
\n\
_సర్వత్ర_   root2 = Math.sqrt(2)\n\
//  X ↦ X+YF+\n\
//  Y ↦ −FX−Y.\n\
// కోణము is 90\n\
// start is order * 45°\n\
\n\
\n\
//*** FUNCTIONS ***\n\
\n\
_విధానము_     caption (message) {\n\
  // save your current position, heading, etc.\n\
  _సర్వత్ర_   savedX = కుంచిక.స్థానము.x\n\
  _సర్వత్ర_   savedY = కుంచిక.స్థానము.y\n\
  _సర్వత్ర_   savedHeading = కుంచిక.కోణము / 2 / Math.PI * 360 //convert radians to degrees\n\
  _సర్వత్ర_   savedColor = కుంచిక.రంగు\n\
  _సర్వత్ర_   savedWidth = కుంచిక.వెడల్పు\n\
\n\
  స్థానము_మార్చు(కనిష్ఠX()+10, కనిష్ఠY()+10)\n\
  దిశ_మార్చు( 90)\n\
\n\
  // erase what will be in the path\n\
  రంగు_మార్చు( తెలుపు )\n\
  వెడల్పు(10)\n\
  ముందుకు_జరుగు(గరిష్ఠY() * 2 - 12)\n\
  స్థానము_మార్చు(కనిష్ఠX()+10, కనిష్ఠY()+5)\n\
  రంగు_మార్చు("నలుపు")\n\
\n\
  అక్షరరూపము_స్థాపించు( "bold 12px Helvitica,sans-serif")\n\
  వ్రాయి( message)\n\
\n\
  //go back from whence you came\n\
  స్థానము_మార్చు( savedX, savedY)\n\
  దిశ_మార్చు( savedHeading)\n\
  రంగు_మార్చు( savedColor)\n\
  వెడల్పు(savedWidth)\n\
}\n\
\n\
_విధానము_     X (side, gen) {\n\
  if (gen <= 0) {\n\
     ముందుకు_జరుగు(side)\n\
  }\n\
  else {\n\
    X(side/root2, gen-1)\n\
    ఎడమ_వైపు_తిరుగు(90)\n\
    Y(side/root2, gen-1)\n\
    //ముందుకు_జరుగు(side/2)\n\
    ఎడమ_వైపు_తిరుగు(90)\n\
  }\n\
}\n\
\n\
_విధానము_     Y (side, gen) {\n\
  if (gen <= 0) {\n\
    ముందుకు_జరుగు(side)\n\
  }\n\
  else {\n\
    కుడి_వైపు_తిరుగు(90)\n\
    //ముందుకు_జరుగు(side/root2)\n\
    X (side/root2, gen-1)\n\
    కుడి_వైపు_తిరుగు(90)\n\
    Y (side/root2, gen-1)\n\
  }\n\
}\n\
\n\
\n\
_విధానము_     delayedDragon () {\n\
  ఆది_స్థితి()\n\
  కుంచికను_దాచు()\n\
  స్థానము_మార్చు(-side * .4, +side *.2)\n\
  దిశ_మార్చు(90+ gen * 45)\n\
  కుంచికను_కింద_పెట్టు()\n\
  X (side, gen)\n\
  caption( "Dragon curve, generation " + gen)\n\
\n\
  if (gen < 13) {\n\
    gen = gen + 1\n\
  } else {\n\
    gen = 0\n\
  }\n\
  విలంబించు( delayedDragon, 3000)\n\
}  \n\
    \n\
\n\
_విధానము_     ప్రదర్శన() {\n\
  side = .9 * Math.min(గరిష్ఠX(), 2*గరిష్ఠY())\n\
  gen = 0\n\
  delayedDragon()\n\
}  \n\
'
example ='\
/* ఇక్కడ మీ ప్రక్రియ లు వ్రాయ గలరు. ఉదాహరణ కి:    */\n\
\n\
సమ_చతురస్రము = ( భుజము ) => {\n\
  ఆవర్తించు(4, () => {\n\
    ముందుకు_జరుగు( భుజము );\n\
    కుడి_వైపు_తిరుగు(90);\n\
  });\n\
}\n\
\n\
ప్రదర్శన = () => {\n\
  కుంచికను_దాచు();\n\
  రంగు_మార్చు( నీలము );\n\
  _అత్ర_  భుజము = 100;\n\
  _అత్ర_  రంగు_సంఖ్య = 0;\n\
  యావత్_పరిక్రమ( () => భుజము > 0, ()=> {\n\
    సమ_చతురస్రము( భుజము );\n\
    కుడి_వైపు_తిరుగు(36);\n\
    భుజము = భుజము - 10;\n\
    రంగు_సంఖ్య = ( రంగు_సంఖ్య + 1 ) % 16;\n\
    రంగు_మార్చు( రంగు_సంఖ్య );\n\
  } );\n\
}\n\
'
eye_simulator ='\
// Eye Simulator -- Eye movement simulation\n\
/*\n\
This program is a graphical simulation of eyes to experiment with their\n\
movement and emotional expression. This is investigation before committing\n\
design to Arduino hardware.\n\
*/\n\
\n\
\n\
// ****CONSTANTS FOR DOT MATRICES****\n\
\n\
_సర్వదా_    columns = 32 // left and right eye are side by side\n\
_సర్వదా_    rows = 9\n\
\n\
\n\
// ****CONSTANTS FOR TURTLE GRAPHICS****\n\
\n\
_సర్వదా_    dotSize = 4\n\
_సర్వదా_    dotGap = 2 // space between dots\n\
_సర్వదా_    eyeGap = 4 // space between eyes\n\
_సర్వదా_    columnSize = 2 * dotSize + dotGap\n\
_సర్వదా_    rowSize = 2 * dotSize + dotGap\n\
_సర్వదా_    columnMid = columns/2 * columnSize + eyeGap/2\n\
_సర్వదా_    rowMid = rows/2 * rowSize\n\
\n\
_సర్వదా_    dotOff =          "#f0f0f0"\n\
_సర్వదా_    eyeBrowColor =    "#8080ff"\n\
_సర్వదా_    eyeBallColor =    "#ccccff"\n\
_సర్వదా_    eyeOutlineColor = "#b3b3ff"\n\
_సర్వదా_    rightEyeColor =   "#0000ff"\n\
_సర్వదా_    leftEyeColor =    "#0000ff"\n\
_సర్వదా_    rightPupilColor = "#000000"\n\
_సర్వదా_    leftPupilColor =  "#000000"\n\
\n\
\n\
// these may be dependent upon eye graphic\n\
_సర్వదా_    irisWidth =       5\n\
_సర్వదా_    irisHeight =      3\n\
_సర్వదా_    irisCenterRight = 7 // absolute grid x for right eye center\n\
_సర్వదా_    irisCenterLeft = 24 // absolute grid x for left eye center\n\
_సర్వదా_    irisMiddle =      6 // absolute grid y for iris middle\n\
\n\
// relative from bottom\n\
_సర్వదా_    lidsClosed = 0\n\
_సర్వదా_    lidsNormal = 4 // normal/relaxed position of the eye lids\n\
_సర్వదా_    lidsMin = 0\n\
_సర్వదా_    lidsMax = 6\n\
\n\
// relative to iris center, middle:\n\
_సర్వదా_    irisMaxX = 5\n\
_సర్వదా_    irisMinX = -4\n\
_సర్వదా_    irisMaxY = irisMiddle - rows + 1 + lidsMax\n\
_సర్వదా_    irisMinY = irisMiddle - rows + 1 + lidsMin\n\
_సర్వదా_    irisNormalX = 0 // normal/relaxed X position of the iris and pupil\n\
_సర్వదా_    irisNormalY = 0 // normal/relaxed Y position of the iris and pupil\n\
\n\
\n\
_సర్వదా_    lids = [\n\
    [\n\
        // lids[0]\n\
        //10987654321098765432109876543210\n\
        0b00000000000000000000000000000000, //00\n\
        0b00000000000000000000000000000000, //01\n\
        0b00000000000000000000000000000000, //02\n\
        0b00000000000000000000000000000000, //03\n\
        0b00000000000000000000000000000000, //04\n\
        0b00000000000000000000000000000000, //05\n\
        0b10000000000000011000000000000001, //06\n\
        0b01110000000011100111000000001110, //07\n\
        0b00001111111100000000111111110000  //08\n\
    ],\n\
    [\n\
        // lids[1]\n\
        //10987654321098765432109876543210\n\
        0b00000000000000000000000000000000, //00\n\
        0b00000000000000000000000000000000, //01\n\
        0b00000000000000000000000000000000, //02\n\
        0b00000000000000000000000000000000, //03\n\
        0b00000000000000000000000000000000, //04\n\
        0b00000000000000000000000000000000, //05\n\
        0b10000000000000011000000000000001, //06\n\
        0b01111111111111000011111111111110, //07\n\
        0b00001111111100000000111111110000  //08\n\
    ],\n\
    [\n\
        // lids[2]\n\
        //10987654321098765432109876543210\n\
        0b00000000000000000000000000000000, //00\n\
        0b00000000000000000000000000000000, //01\n\
        0b00000000000000000000000000000000, //02\n\
        0b00000000000000000000000000000000, //03\n\
        0b00000000000000000000000000000000, //04\n\
        0b00000000000000000000000000000000, //05\n\
        0b11111111111111111111111111111111, //06\n\
        0b01110000000011100111000000001110, //07\n\
        0b00001111111100000000111111110000  //08\n\
    ],\n\
    [\n\
        // lids[3]\n\
        //10987654321098765432109876543210\n\
        0b00000000000000000000000000000000, //00\n\
        0b00000000000000000000000000000000, //01\n\
        0b00000000000000000000000000000000, //02\n\
        0b00000000000000000000000000000000, //03\n\
        0b00000000000000000000000000000000, //04\n\
        0b00111111111111000011111111111110, //05\n\
        0b10000000000000011000000000000001, //06\n\
        0b01110000000011100111000000001110, //07\n\
        0b00001111111100000000111111110000  //08\n\
    ],\n\
    [\n\
        // lids[4]\n\
        //10987654321098765432109876543210\n\
        0b00000000000000000000000000000000, //00\n\
        0b00000000000000000000000000000000, //01\n\
        0b00000000000000000000000000000000, //02\n\
        0b00000000000000000000000000000000, //03\n\
        0b00011111111100000000111111111000, //04\n\
        0b01100000000011100111000000000110, //05\n\
        0b10000000000000011000000000000001, //06\n\
        0b01110000000011100111000000001110, //07\n\
        0b00001111111100000000111111110000  //08\n\
    ],\n\
    [\n\
        // lids[5]\n\
        //10987654321098765432109876543210\n\
        0b00000000000000000000000000000000, //00\n\
        0b00000000000000000000000000000000, //01\n\
        0b00000000000000000000000000000000, //02\n\
        0b00001111111100000000111111110000, //03\n\
        0b01110000000011100111000000001110, //04\n\
        0b10000000000000011000000000000001, //05\n\
        0b10000000000000011000000000000001, //06\n\
        0b01110000000011100111000000001110, //07\n\
        0b00001111111100000000111111110000  //08\n\
    ],\n\
    [\n\
        // lids[6]\n\
        //10987654321098765432109876543210\n\
        0b00000000000000000000000000000000, //00\n\
        0b00000000000000000000000000000000, //01\n\
        0b00001111111100000000111111110000, //02\n\
        0b01110000000011100111000000001110, //03\n\
        0b10000000000000011000000000000001, //04\n\
        0b10000000000000011010000000000001, //05\n\
        0b10000000000000011000000000000001, //06\n\
        0b01110000000011100111000000001110, //07\n\
        0b00001111111100000000111111110000  //08\n\
    ]\n\
]\n\
\n\
\n\
_సర్వదా_    masks = [\n\
    [\n\
        // masks[0]\n\
        //10987654321098765432109876543210\n\
        0b00000000000000000000000000000000, //00\n\
        0b00000000000000000000000000000000, //01\n\
        0b00000000000000000000000000000000, //02\n\
        0b00000000000000000000000000000000, //03\n\
        0b00000000000000000000000000000000, //04\n\
        0b00000000000000000000000000000000, //05\n\
        0b00000000000000000000000000000000, //06\n\
        0b00000000000000000000000000000000, //07\n\
        0b00000000000000000000000000000000  //08\n\
    ],\n\
    [\n\
        // masks[1]\n\
        //10987654321098765432109876543210\n\
        0b00000000000000000000000000000000, //00\n\
        0b00000000000000000000000000000000, //01\n\
        0b00000000000000000000000000000000, //02\n\
        0b00000000000000000000000000000000, //03\n\
        0b00000000000000000000000000000000, //04\n\
        0b00000000000000000000000000000000, //05\n\
        0b00000000000000000000000000000000, //06\n\
        0b00000000000000000000000000000000, //07\n\
        0b00000000000000000000000000000000  //08\n\
    ],\n\
    [\n\
        // masks[2]\n\
        //10987654321098765432109876543210\n\
        0b00000000000000000000000000000000, //00\n\
        0b00000000000000000000000000000000, //01\n\
        0b00000000000000000000000000000000, //02\n\
        0b00000000000000000000000000000000, //03\n\
        0b00000000000000000000000000000000, //04\n\
        0b00000000000000000000000000000000, //05\n\
        0b00000000000000000000000000000000, //06\n\
        0b00001111111110000001111111110000, //07\n\
        0b00000000000000000000000000000000  //08\n\
    ],\n\
    [\n\
        // masks[3]\n\
        //10987654321098765432109876543210\n\
        0b00000000000000000000000000000000, //00\n\
        0b00000000000000000000000000000000, //01\n\
        0b00000000000000000000000000000000, //02\n\
        0b00000000000000000000000000000000, //03\n\
        0b00000000000000000000000000000000, //04\n\
        0b00000000000000000000000000000000, //05\n\
        0b01111111111111100111111111111110, //06\n\
        0b00001111111110000001111111110000, //07\n\
        0b00000000000000000000000000000000  //08\n\
    ],\n\
    [\n\
        // masks[4]\n\
        //10987654321098765432109876543210\n\
        0b00000000000000000000000000000000, //00\n\
        0b00000000000000000000000000000000, //01\n\
        0b00000000000000000000000000000000, //02\n\
        0b00000000000000000000000000000000, //03\n\
        0b00000000000000000000000000000000, //04\n\
        0b00011111111100000000111111111000, //05\n\
        0b01111111111111100111111111111110, //06\n\
        0b00001111111110000001111111110000, //07\n\
        0b00000000000000000000000000000000  //08\n\
    ],\n\
    [\n\
        // masks[5]\n\
        //10987654321098765432109876543210\n\
        0b00000000000000000000000000000000, //00\n\
        0b00000000000000000000000000000000, //01\n\
        0b00000000000000000000000000000000, //02\n\
        0000000000000000000000000000000000, //03\n\
        0b00001111111100000000111111110000, //04\n\
        0b01111111111111100111111111111110, //05\n\
        0b01111111111111100111111111111110, //06\n\
        0b00001111111110000001111111110000, //07\n\
        0b00000000000000000000000000000000  //08\n\
    ],\n\
    [\n\
        // masks[6]\n\
        //10987654321098765432109876543210\n\
        0b00000000000000000000000000000000, //00\n\
        0b00000000000000000000000000000000, //01\n\
        0b00000000000000000000000000000000, //02\n\
        0b00001111111100000000111111110000, //03\n\
        0b01111111111111100111111111111110, //04\n\
        0b01111111111111100111111111111110, //05\n\
        0b01111111111111100111111111111110, //06\n\
        0b00001111111100000000111111110000, //07\n\
        0b00000000000000000000000000000000  //08\n\
    ]\n\
]\n\
\n\
\n\
\n\
_సర్వదా_    irisTypes = {\n\
    NORMAL : 0,\n\
    HEART : 1\n\
}\n\
\n\
\n\
_సర్వదా_    irises = [\n\
    [ // normal\n\
        //43210\n\
        0b01110, //00\n\
        0b11111, //01\n\
        0b01110  //02\n\
    ],\n\
    [ // heart really too small\n\
        //43210\n\
        0b01010, //00\n\
        0b11111, //01\n\
        0b00100  //02\n\
    ]\n\
]\n\
\n\
\n\
_సర్వదా_    pupilTypes = {\n\
    NONE :     0,\n\
    SMALL :    1,\n\
    MEDIUM :   2,\n\
    PREY :     3,\n\
    PREDITOR : 4,\n\
    X :        6,\n\
}\n\
\n\
\n\
_సర్వదా_    pupils = [\n\
    [\n\
        //pupils[ 0]\n\
        //43210\n\
        0b00000, //00\n\
        0b00000, //01\n\
        0b00000  //02\n\
    ],\n\
    [\n\
        //pupils[ 1]\n\
        //43210\n\
        0b00000, //00\n\
        0b00100, //01\n\
        0b00000  //02\n\
    ],\n\
    [\n\
        //pupils[ 2]\n\
        //03210\n\
        0b00100, //00\n\
        0b01110, //01\n\
        0b00100  //02\n\
    ],\n\
    [\n\
        //pupils[ 3]\n\
        //03210\n\
        0b00000, //00\n\
        0b11111, //01\n\
        0b00000  //02\n\
    ],\n\
    [\n\
        //pupils[ 4]\n\
        //03210\n\
        0b00100, //00\n\
        0b00100, //01\n\
        0b00100  //02\n\
    ],\n\
    [\n\
        //pupil[ 5]\n\
        //03210\n\
        0b01010, //00\n\
        0b00100, //01\n\
        0b01010  //02\n\
    ],\n\
]\n\
\n\
\n\
_సర్వదా_    browTypes = {\n\
    NONE :     0,\n\
    NORMAL :   1,\n\
    UP :       2,\n\
    IN :       3,\n\
    OUT :      4,\n\
    RIGHT_UP : 5,\n\
    LEFT_UP :  6,\n\
    DOUBLE :   7,\n\
}\n\
\n\
_సర్వదా_    brows = [\n\
    [\n\
        // brows[0]\n\
        //10987654321098765432109876543210\n\
        0b00000000000000000000000000000000, //00\n\
        0b00000000000000000000000000000000, //01\n\
    ],\n\
    [\n\
        // brows[1]\n\
        //10987654321098765432109876543210\n\
        0b00000000000000000000000000000000, //00\n\
        0b01111111111111100111111111111110, //01\n\
    ],\n\
    [\n\
        // brows[2]\n\
        //10987654321098765432109876543210\n\
        0b01111111111111100111111111111110, //00\n\
        0b00000000000000000000000000000000, //01\n\
    ],\n\
    [\n\
        // brows[3]\n\
        //10987654321098765432109876543210\n\
        0b01111111000000000000000011111110, //00\n\
        0b00000000111111100111111100000000, //00\n\
        0b00000000000000000000000000000000, //01\n\
    ],\n\
    [\n\
        // brows[4]\n\
        //10987654321098765432109876543210\n\
        0b00000000111111100111111100000000, //00\n\
        0b01111111000000000000000011111110, //01\n\
    ],\n\
    [\n\
        // brows[5]\n\
        //10987654321098765432109876543210\n\
        0b01111111000000000000000011111110, //00\n\
        0b00000000111111100111111100000000, //01\n\
    ],\n\
    [\n\
        // brows[6]\n\
        //10987654321098765432109876543210\n\
        0b00000000000000000111111111111110, //00\n\
        0b01111111111111100000000000000000, //01\n\
    ],\n\
    [\n\
        // brows[7]\n\
        //10987654321098765432109876543210\n\
        0b01111111111111100000000000000000, //00\n\
        0b00000000000000000111111111111110, //01\n\
    ],\n\
    [\n\
        // brows[8]\n\
        //10987654321098765432109876543210\n\
        0b01111111111111100111111111111110, //00\n\
        0b01111111111111100111111111111110, //01\n\
    ],\n\
]\n\
\n\
\n\
// ****CONSTANTS FOR COMMANDS****\n\
\n\
/*\n\
commands are segregated for brow, lids, pupil, iris, control.\n\
The lids and iris have a separate timer for internal movement.\n\
The brow, pupil, emotions, and control can change instantly (except\n\
as they effect changes in the pupil and lids.\n\
\n\
so if a eye is command to move 2 right and 2 up.\n\
there would be steps for eye movement until the eye reached the target x and y\n\
*/\n\
\n\
_సర్వదా_    commands = {\n\
    //lid commands\n\
    LIDS_TO :            01, //n, step time\n\
    LIDS_NORMAL :        02, //step time\n\
    LIDS_CLOSE :         03, //step time\n\
    BLINK :              20, // step time\n\
    WINK_RIGHT :         21, // step time\n\
    WINK_LEFT :          22, // step time\n\
\n\
    //iris commands\n\
    EYES_UP :            30, //n, step time\n\
    EYES_DOWN :          31, //n, step time\n\
    EYES_RIGHT :         32, //n, step time\n\
    EYES_LEFT :          33, //n, step time\n\
    EYES_TO :            34, //x,y, step time\n\
    EYES_CENTER :        35, //step time\n\
    EYES_MIDDLE :        36, //step time\n\
\n\
    //emotion commands\n\
    NORMAL :             50,\n\
    LOVE :               51,\n\
    DEAD :               52,\n\
    STARS :              53,\n\
    SAD :                54,\n\
    SURPRISE :           55,\n\
    QUESTION :           56,\n\
\n\
    //brow commands\n\
    BROW_TYPE :          60, //n\n\
\n\
    //iris commands\n\
    IRIS_TYPE :          70, //type\n\
\n\
    //control commands\n\
    HOLD :               80, //time\n\
    LOOP :               81,\n\
    STOP :               82,\n\
    CAPTION :            83, //string\n\
}\n\
\n\
\n\
simulatorCommands = [\n\
    [commands.CAPTION, "Close and open"],\n\
    [commands.LIDS_CLOSE, 50],\n\
    [commands.HOLD, 200],\n\
    [commands.LIDS_TO, 9, 50],\n\
    [commands.HOLD, 200],\n\
    [commands.LIDS_NORMAL, 50],\n\
    [commands.HOLD, 200],\n\
    [commands.CAPTION, "Blink"],\n\
    [commands.BROW_TYPE, browTypes.RIGHT_UP],\n\
    [commands.BLINK, 50],\n\
    [commands.HOLD, 1000],\n\
    [commands.BLINK, 50],\n\
    [commands.BROW_TYPE, browTypes.NORMAL],\n\
    [commands.CAPTION, "Eyes up"],\n\
    [commands.EYES_UP, 9, 200],\n\
    [commands.CAPTION, "Eyes right"],\n\
    [commands.EYES_RIGHT, 9, 200],\n\
    [commands.CAPTION, "Eyes down"],\n\
    [commands.EYES_DOWN, 9, 200],\n\
    [commands.CAPTION, "Eyes left"],\n\
    [commands.EYES_LEFT, 9, 200],\n\
    [commands.CAPTION, "Eyes up again"],\n\
    [commands.EYES_UP, 9, 200],\n\
    [commands.CAPTION, "Return to middle, center"],\n\
    [commands.EYES_MIDDLE, 200],\n\
    [commands.EYES_CENTER, 200],\n\
    [commands.CAPTION, "Hold"],\n\
    [commands.HOLD, 1000],\n\
    [commands.CAPTION, "End of loop"],\n\
    [commands.LOOP]\n\
]\n\
\n\
\n\
// ****GLOBALS****\n\
\n\
//_సర్వత్ర_   grid = []\n\
_సర్వత్ర_   coloredGrid = []\n\
\n\
\n\
// ****FUNCTIONS****\n\
\n\
\n\
_విధానము_     loadColoredPattern( pattern, col) {\n\
  for (r=0; r < rows; r++) {\n\
    for ( c=0; c < columns; c++) {\n\
      if (pattern[ r] & (1<<c)) {\n\
        coloredGrid [r * columns + c] = col\n\
      } else {\n\
        coloredGrid [r * columns + c] = dotOff\n\
      }\n\
    }\n\
  }\n\
}\n\
\n\
\n\
\n\
_విధానము_     loadColoredSubPattern( subPattern, col, x, y, w, h) {\n\
  // x,y is top left corner of pattern position\n\
  // it is aiso top left corner of grid\n\
  for ( _సర్వత్ర_   iy=0; iy < h; iy++) {\n\
    for ( _సర్వత్ర_   ix = w-1; ix >=0; ix--) {\n\
      _సర్వత్ర_   mask = 0b00000000000000001 << ix\n\
      if (subPattern[ iy] & mask) {\n\
        coloredGrid [(y+iy) * columns + 31-x + ix -w + 1] = col\n\
      }\n\
    }\n\
  }\n\
}\n\
\n\
\n\
_విధానము_     loadColoredMaskedSubPattern( subPattern, mask, col, x, y, w, h) {\n\
  // x,y is top left corner of pattern position\n\
  // it is also top left corner of grid\n\
  for ( _సర్వత్ర_   iy=0; iy < h; iy++) {\n\
    for ( _సర్వత్ర_   ix = w-1; ix >=0; ix--) {\n\
      if (subPattern[ iy] & (1<<ix) && mask[y+iy] & 1<<(x+w-1-ix)) {\n\
        coloredGrid [(y+iy) * columns + 31-x + ix -w + 1] = col\n\
      }\n\
    }\n\
  }\n\
}\n\
\n\
\n\
_విధానము_     caption (message) {\n\
    // save your current position, heading, etc.\n\
    _సర్వత్ర_   savedX = కుంచిక.స్థానము.x\n\
    _సర్వత్ర_   savedY = కుంచిక.స్థానము.y\n\
    _సర్వత్ర_   savedHeading = కుంచిక.కోణము / 2 / Math.PI * 360 //convert radians to degrees\n\
    _సర్వత్ర_   savedColor = కుంచిక.రంగు\n\
    _సర్వత్ర_   savedWidth = కుంచిక.వెడల్పు\n\
\n\
    స్థానము_మార్చు(కనిష్ఠX()+10, కనిష్ఠY()+10)\n\
    దిశ_మార్చు( 90)\n\
\n\
    // erase what will be in the path\n\
    అక్షరరూపము_స్థాపించు("bold 16px helvitica,sans-serif")\n\
    రంగు_మార్చు( తెలుపు )\n\
    వెడల్పు(22)\n\
    ముందుకు_జరుగు(గరిష్ఠY() * 2 - 12)\n\
    స్థానము_మార్చు(కనిష్ఠX()+10, కనిష్ఠY()+5)\n\
    రంగు_మార్చు("నలుపు")\n\
    వ్రాయి( message)\n\
\n\
    //go back from whence you came\n\
    స్థానము_మార్చు( savedX, savedY)\n\
    దిశ_మార్చు( savedHeading)\n\
    రంగు_మార్చు( savedColor)\n\
    వెడల్పు(savedWidth)\n\
}\n\
\n\
\n\
\n\
// ****GLOBALS FOR COMMAND INTERPRETER****\n\
    _సర్వత్ర_   baseCaption = "" // base caption\n\
\n\
    _సర్వదా_    lidStates = {\n\
        IDLE : 0,\n\
        CLOSING : 1,\n\
        OPENING : 2,\n\
    }\n\
    _సర్వత్ర_   lidState = lidStates.IDLE\n\
    _సర్వత్ర_   lidTarget = 0\n\
    _సర్వత్ర_   lidCommanded = 0 // lid position requested. May be overridden by high iris value.\n\
\n\
    _సర్వత్ర_   lidsCurrent = lidsNormal\n\
\n\
    _సర్వత్ర_   irisTypeCurrent = irisTypes.NORMAL\n\
    _సర్వదా_    irisStates = {\n\
        IDLE : 0,\n\
        MOVING : 1,\n\
        MOVING_BACK : 2\n\
    }\n\
    _సర్వత్ర_   irisState = irisStates.IDLE\n\
\n\
    // iris coordinates relative to the eye center and middle\n\
    _సర్వత్ర_   irisTargetX = 0\n\
    _సర్వత్ర_   irisTargetY = 0\n\
    _సర్వత్ర_   irisCurrentX = 0\n\
    _సర్వత్ర_   irisCurrentY = 0\n\
\n\
    _సర్వదా_    pupilNormal = pupilTypes.SMALL // normal/relaxed type of pupil\n\
    _సర్వత్ర_   pupilCurrent = pupilTypes.SMALL // normal/relaxed type of pupil\n\
\n\
    _సర్వదా_    browNormal = browTypes.NORMAL // normal/relaxed type of eye brow\n\
    _సర్వత్ర_   browCurrent = browTypes.NORMAL // current type of the brow\n\
\n\
    _సర్వత్ర_   commandSequence = [] // array of commands to be executed\n\
    _సర్వత్ర_   currentCommand = 0 // index into command sequence of the current command\n\
    _సర్వత్ర_   subCommand = 0 // number of times current command has executed\n\
    _సర్వత్ర_   commandDue = undefined // epoch milliseconds when normal command is due\n\
                       // = undefined when not active\n\
    _సర్వత్ర_   browCommandDue = undefined // epoch milliseconds when default brow command is due\n\
                       // = undefined when not active\n\
\n\
\n\
\n\
_విధానము_     absIrisY ( irisY) {\n\
    // _ఫలము_  the absolute grid Y coordinate for a given iris Y coordinate\n\
    // irisY = 0 is the grid irisMiddle\n\
    _ఫలము_  irisMiddle - irisY\n\
}\n\
\n\
\n\
_విధానము_     absLidY (lidY) {\n\
    // _ఫలము_  the absolute grid Y coordinate for a given lid Y coordinate\n\
    // lidY = 0 is grid max Y = rows -1\n\
    _ఫలము_  rows - 1 - lidY\n\
}\n\
\n\
\n\
_విధానము_     irisMovementCheck () {\n\
    // check if iris and lid movement is required\n\
    console.log( "iMC", irisCurrentX, irisCurrentY, irisTargetX, irisTargetY, lidsCurrent, lidCommanded)\n\
    console.log( "iMC1", absIrisY(irisCurrentY), absIrisY(irisTargetY), absLidY(lidsCurrent), absLidY(lidCommanded))\n\
    _సర్వత్ర_   moved = false\n\
    if (irisCurrentY > irisTargetY) {\n\
        irisCurrentY = irisCurrentY - 1\n\
        moved = true\n\
    } else if (irisCurrentY < irisTargetY) {\n\
        irisCurrentY = irisCurrentY + 1\n\
        moved = true\n\
    }\n\
    // absolute coordinates are for the grid\n\
    if (absIrisY(irisCurrentY) < absLidY(lidsCurrent) &&\n\
        absIrisY(irisCurrentY) + 1 > absLidY(lidsMax)) {\n\
        lidsCurrent = lidsCurrent + 1\n\
        moved = true\n\
    } else if (absIrisY(irisCurrentY) - 1 > absLidY(lidsCurrent) &&\n\
               lidsCurrent > lidCommanded) {\n\
        lidsCurrent = lidsCurrent - 1\n\
        moved = true\n\
    }\n\
    if (irisCurrentX > irisTargetX) {\n\
        irisCurrentX = irisCurrentX - 1\n\
        moved = true\n\
    } else if (irisCurrentX < irisTargetX) {\n\
        irisCurrentX = irisCurrentX + 1\n\
        moved = true\n\
    }\n\
    console.log( "iMC moved =", moved ? "true" : "false")\n\
    _ఫలము_  moved\n\
}\n\
\n\
\n\
_విధానము_     commandCheck ( currentTime) {\n\
    // check is a command is due to be executed\n\
    // returns false if no delay requested\n\
    // returns true if a delay was requested for rendering\n\
    console.log("cmdchk0:", currentTime, commandDue, currentCommand, subCommand)\n\
\n\
    _సర్వత్ర_   renderingRequired = false\n\
    _సర్వత్ర_   commandAdvance = false // only advance command explicitly\n\
\n\
    if (commandDue === undefined || currentTime > commandDue) {\n\
        commandDue = undefined\n\
        _సర్వత్ర_   command = commandSequence [ currentCommand]\n\
        // execute the command. Some commands are immediate, others take time.\n\
        console.log("cmdchk1:", currentCommand, command[0], command[1], command[2])\n\
\n\
        switch (command[ 0]) {\n\
        case commands.CAPTION: // string\n\
            baseCaption = command [1]\n\
            // do not render until something else changes\n\
            commandAdvance = true\n\
            break\n\
        case commands.LIDS_CLOSE: // delay\n\
            if (lidsCurrent > lidsClosed) {\n\
                lidCommanded = lidsClosed\n\
                lidsCurrent = lidsCurrent - 1\n\
                commandDue = currentTime + command[1]\n\
                renderingRequired = true\n\
            } else {\n\
                commandAdvance = true\n\
            }\n\
            break\n\
        case commands.LIDS_NORMAL: // delay\n\
            if (lidsCurrent > lidsNormal) {\n\
                lidCommanded = lidsNormal\n\
                lidsCurrent = lidsCurrent - 1\n\
                commandDue = currentTime + command[1]\n\
                renderingRequired = true\n\
            } else if (lidsCurrent < lidsNormal) {\n\
                lidCommanded = lidsNormal\n\
                lidsCurrent = lidsCurrent + 1\n\
                commandDue = currentTime + command[1]\n\
                renderingRequired = true\n\
            } else {\n\
                commandAdvance = true\n\
            }\n\
            break\n\
        case commands.LIDS_TO: // opening, delay\n\
            if (command [1] >= lids.length) {\n\
                lidsCommanded = lids.lenth - 1\n\
            } else if (command [1] < lidsClosed) {\n\
                lidsCommanded = lidsClosed\n\
            }\n\
            if (lidsCurrent > lidsCommanded && lidsCurrent > lidsClosed) {\n\
                lidsCurrent = lidsCurrent - 1\n\
                commandDue = currentTime + command[2]\n\
                renderingRequired = true\n\
            } else if (lidsCurrent > lidsCommanded &&\n\
                       lidsCurrent < lids.length -2) {\n\
                lidsCurrent = lidsCurrent + 1\n\
                commandDue = currentTime + command[2]\n\
                renderingRequired = true\n\
            } else {\n\
                commandAdvance = true\n\
            }\n\
\n\
            break\n\
        case commands.HOLD: // delay\n\
            commandDue = currentTime + command[1]\n\
            commandAdvance = true\n\
            break\n\
        case commands.BROW_TYPE: // browType\n\
            currentBrowType = command[1]\n\
            renderingRequired = true\n\
            commandAdvance = true\n\
            break\n\
        case commands.BROW_TYPE_TEMP: // browType, delay\n\
            currentBrowType = command[1]\n\
            browCommandDue = currentTime + command[2]\n\
            renderingRequired = true\n\
            commandAdvance = true\n\
            break\n\
        case commands.BLINK: // delay\n\
            switch (lidState) {\n\
            case lidStates.IDLE:\n\
            case lidStates.CLOSING:\n\
                if (lidsCurrent > lidsClosed) {\n\
                    lidState = lidStates.CLOSING\n\
                    lidsCurrent = lidsCurrent - 1\n\
                    commandDue = currentTime + command[1]\n\
                    renderingRequired = true\n\
                } else {\n\
                    lidState = lidStates.OPENING\n\
                }\n\
                break;\n\
            case lidStates.OPENING:\n\
                if (lidsCurrent < lidCommanded) {\n\
                    lidState = lidStates.OPENING\n\
                    lidsCurrent = lidsCurrent + 1\n\
                    commandDue = currentTime + command[1]\n\
                    renderingRequired = true\n\
                } else {\n\
                    lidState = lidStates.IDLE\n\
                    commandAdvance = true\n\
                }\n\
                break\n\
            }\n\
            break\n\
        case commands.EYES_UP: // relativeTargetY, delay\n\
            console.log("EU:", irisState)\n\
            if (irisState === irisStates.IDLE) {\n\
                irisState = irisStates.MOVING\n\
                irisTargetY = irisCurrentY + command [1]\n\
                if (irisTargetY > irisMaxY) {\n\
                    irisTargetY = irisMaxY\n\
                }\n\
            }\n\
            if (irisMovementCheck()) {\n\
                commandDue = currentTime + command [2]\n\
                renderingRequired = true\n\
            } else {\n\
                irisState = irisStates.IDLE\n\
                commandAdvance = true\n\
            }\n\
            break\n\
        case commands.EYES_DOWN: // relativeTargetY, delay\n\
            if (irisState === irisStates.IDLE) {\n\
                irisState = irisStates.MOVING\n\
                irisTargetY = irisCurrentY - command [1]\n\
                if (irisTargetY < irisMinY) {\n\
                    irisTargetY = irisMinY\n\
                }\n\
            }\n\
            if (irisMovementCheck()) {\n\
                commandDue = currentTime + command [2]\n\
                renderingRequired = true\n\
            } else {\n\
                irisState = irisStates.IDLE\n\
                commandAdvance = true\n\
            }\n\
            break\n\
        case commands.EYES_RIGHT: // relativeTargeX, delay\n\
            if (irisState === irisStates.IDLE) {\n\
                irisState = irisStates.MOVING\n\
                irisTargetX = irisCurrentX + command [1]\n\
                if (irisTargetX > irisMaxX) {\n\
                    irisTargetX = irisMaxX\n\
                }\n\
            }\n\
            if (irisMovementCheck()) {\n\
                commandDue = currentTime + command [2]\n\
                renderingRequired = true\n\
            } else {\n\
                irisState = irisStates.IDLE\n\
                commandAdvance = true\n\
            }\n\
            break\n\
        case commands.EYES_LEFT: // relativeTargetX, delay\n\
            if (irisState === irisStates.IDLE) {\n\
                irisState = irisStates.MOVING\n\
                irisTargetX = irisCurrentX - command [1]\n\
                if (irisTargetX < irisMinX) {\n\
                    irisTargetX = irisMinX\n\
                }\n\
            }\n\
            if (irisMovementCheck()) {\n\
                commandDue = currentTime + command [2]\n\
                renderingRequired = true\n\
            } else {\n\
                irisState = irisStates.IDLE\n\
                commandAdvance = true\n\
            }\n\
            break\n\
        case commands.EYES_MIDDLE: // delay\n\
            if (irisState === irisStates.IDLE) {\n\
                irisState = irisStates.MOVING\n\
                irisTargetY = irisNormalY\n\
                if (irisTargetY > irisMaxY) {\n\
                    irisTargetY = irisMaxY\n\
                }\n\
                if (irisTargetY < irisMinY) {\n\
                    irisTargetY = irisMinY\n\
                }\n\
            }\n\
            if (irisMovementCheck()) {\n\
                commandDue = currentTime + command [1]\n\
                renderingRequired = true\n\
            } else {\n\
                irisState = irisStates.IDLE\n\
                commandAdvance = true\n\
            }\n\
            break\n\
        case commands.EYES_CENTER: // delay\n\
            if (irisState === irisStates.IDLE) {\n\
                irisState = irisStates.MOVING\n\
                irisTargetX = irisNormalX\n\
                if (irisTargetX > irisMaxX) {\n\
                    irisTargetX = irisMaxX\n\
                }\n\
                if (irisTargetX < irisMinX) {\n\
                    irisTargetX = irisMinX\n\
                }\n\
            }\n\
            if (irisMovementCheck()) {\n\
                commandDue = currentTime + command [1]\n\
                renderingRequired = true\n\
            } else {\n\
                irisState = irisStates.IDLE\n\
                commandAdvance = true\n\
            }\n\
            break\n\
        case commands.EYES_TO: // x, y, delay\n\
            if (irisState === irisStates.IDLE) {\n\
                irisState = irisStates.MOVING\n\
                irisTargetX = command [1]\n\
                irisTargetY = command [2]\n\
                if (irisTargetX > irisMaxX) {\n\
                    irisTargetX = irisMaxX\n\
                }\n\
                if (irisTargetX < irisMinX) {\n\
                    irisTargetX = irisMinX\n\
                }\n\
                if (irisTargetY > irisMaxY) {\n\
                    irisTargetY = irisMaxY\n\
                }\n\
                if (irisTargetY < irisMinY) {\n\
                    irisTargetY = irisMinY\n\
                }\n\
            }\n\
            if (irisMovementCheck()) {\n\
                commandDue = currentTime + command [3]\n\
                renderingRequired = true\n\
            } else {\n\
                irisState = irisStates.IDLE\n\
                commandAdvance = true\n\
            }\n\
            break\n\
        case commands.LOOP:\n\
            currentCommand = 0\n\
            break\n\
        case commands.STOP:\n\
            exit(1)\n\
            break\n\
        default:\n\
            console.log("command check BAD COMMAND:", command[0])\n\
            currentCommand = 0\n\
            break\n\
        }\n\
    } else if (browCommandDue !== undefined && currentTime > browCommandDue) {\n\
        // make brows normal again\n\
        currentBrowType = browNormal\n\
        renderingRequired = true\n\
        browCommandDue = undefined\n\
    }\n\
    console.log( "cmdChk rendReq =", renderingRequired ? "true" : "false", " cmdAdv =", commandAdvance ? "true" : "false")\n\
    if ( renderingRequired) {\n\
console.log("cmdchk render",lidsCurrent, browCurrent, irisTypeCurrent, pupilCurrent, irisCurrentX, irisCurrentY, baseCaption)\n\
\n\
\n\
        drawEyes (lidsCurrent, browCurrent, irisTypeCurrent, pupilCurrent,\n\
                irisCurrentX, irisCurrentY,\n\
                baseCaption + " " + currentCommand + "-" + subCommand)\n\
        subCommand = subCommand + 1\n\
    }\n\
    if ( commandAdvance) { // advance to the next command\n\
        currentCommand = (currentCommand + 1) % commandSequence.length\n\
        subCommand = 0\n\
    }\n\
    _ఫలము_  commandAdvance\n\
}\n\
\n\
\n\
_విధానము_     renderEyes (eyeOpening, browType, irisType, pupilType, ix, iy) {\n\
    // ix and iy use relative coordinates, positive up and right\n\
    // grid coordinates: positive down and right\n\
\n\
    //console.log("rE:", eyeOpening, browType, irisType, pupilType, ix, iy)\n\
    loadColoredPattern (lids[eyeOpening], eyeOutlineColor)\n\
    loadColoredSubPattern (masks[eyeOpening], eyeBallColor, 0,0,columns,rows)\n\
    loadColoredSubPattern (brows[browType], eyeBrowColor, 0,0,columns,2)\n\
//neat to mask the iris\n\
\n\
console.log("rE1:",irises[irisType], irisType, masks[eyeOpening], eyeOpening,\n\
         rightEyeColor,\n\
         irisCenterRight+ix-Math.floor(irisWidth/2),\n\
         irisMiddle-iy- Math.floor(irisHeight/2),\n\
         irisWidth, irisHeight)\n\
\n\
     loadColoredMaskedSubPattern ( irises[irisType], masks[eyeOpening],\n\
            rightEyeColor,\n\
            irisCenterRight+ix-Math.floor(irisWidth/2),\n\
            irisMiddle-iy- Math.floor(irisHeight/2),\n\
            irisWidth, irisHeight)\n\
console.log("rE2:",leftEyeColor,\n\
         irisCenterLeft+ix-Math.floor(irisWidth/2),\n\
         irisMiddle-iy- Math.floor(irisHeight/2),\n\
         irisWidth, irisHeight)  \n\
\n\
    loadColoredMaskedSubPattern ( irises[irisType], masks[eyeOpening],\n\
            leftEyeColor,\n\
            irisCenterLeft+ix-Math.floor(irisWidth/2),\n\
            irisMiddle-iy- Math.floor(irisHeight/2),\n\
            irisWidth, irisHeight)\n\
    loadColoredMaskedSubPattern ( pupils[pupilType], masks[eyeOpening],\n\
            rightPupilColor,\n\
            irisCenterRight+ix-Math.floor(irisWidth/2),\n\
            irisMiddle-iy- Math.floor(irisHeight/2),\n\
            irisWidth, irisHeight)\n\
    loadColoredMaskedSubPattern ( pupils[pupilType], masks[eyeOpening],\n\
            leftPupilColor,\n\
            irisCenterLeft+ix-Math.floor(irisWidth/2),\n\
            irisMiddle-iy- Math.floor(irisHeight/2),\n\
            irisWidth, irisHeight)\n\
}\n\
\n\
_విధానము_     drawEyes( eyeOpening, browType, irisType, pupilType, ix, iy, baseCaption) {\n\
console.log("dE1:",eyeOpening, browType, irisType, pupilType, ix, iy, baseCaption)\n\
\n\
    renderEyes (eyeOpening, browType, irisType, pupilType, ix, iy)\n\
    for ( _సర్వత్ర_   r=0; r < rows; r++) {\n\
        for ( _సర్వత్ర_   c=0; c < columns; c++) {\n\
             _సర్వత్ర_   offset = 0\n\
             if ( c >= columns/2) {\n\
                 offset = eyeGap\n\
             }\n\
             స్థానము_మార్చు( columnMid - (c + offset)* columnSize, rowMid - r * rowSize)\n\
             రంగు_మార్చు( coloredGrid [r * columns + c])\n\
             నిండు_వృత్తము( dotSize)\n\
        }\n\
    }\n\
    caption( baseCaption)\n\
}\n\
\n\
\n\
\n\
_విధానము_     executeCommand () {\n\
    _సర్వత్ర_   d = new Date()\n\
    _సర్వత్ర_   currentTime = d.getTime()\n\
    //while ( !commandCheck ( currentTime)) {}\n\
    commandCheck ( currentTime)\n\
\n\
    విలంబించు( executeCommand, 10) // there can be multiple timers running\n\
                               // so this delay should be fairly short\n\
}\n\
\n\
\n\
_విధానము_     ప్రదర్శన() {\n\
    ఆది_స్థితి()\n\
    కుంచికను_దాచు()\n\
    commandDue = undefined\n\
    commandSequence = simulatorCommands\n\
    currentCommand = 0\n\
    subCommand = 0\n\
    విలంబించు( executeCommand, 10)\n\
}\n\
'
fibinoucci ='\
// Fibanochi sequence -- draw a set of squares illustrating a Figanochi sequence\n\
// a Fibanochi sequence is the series 1,1,2,3,5,8,13,21,...\n\
// This defines the Golden Ratio phi.\n\
// it appears in nature as in the nautilus shell, pineapple, sunflower,\n\
// pine cones.\n\
// Originally it was thought to be the rate of reproduction of rabbits.\n\
// More at Wikipedia.com\n\
\n\
_విధానము_     box (side) {\n\
  for (_సర్వత్ర_   i = 0; i<4; i++) {\n\
    ముందుకు_జరుగు( side)\n\
    కుడి_వైపు_తిరుగు( 90)\n\
  }\n\
  ముందుకు_జరుగు( side)\n\
  కుడి_వైపు_తిరుగు( 90)\n\
  ముందుకు_జరుగు( side)\n\
}\n\
\n\
_విధానము_     fib(count, side) {\n\
  _సర్వత్ర_   fiblist = [1,1]\n\
  _సర్వత్ర_   fibcount = 1\n\
  while (fibcount <= count) {\n\
    console.log("fig " + fibcount + " " + fiblist[0] + "," + fiblist[1])\n\
    if (fibcount == 1) {\n\
      box( side)\n\
      console.log("box1")\n\
    }\n\
    if (fibcount == 2) {\n\
      box( side)\n\
      console.log("box2")\n\
    }\n\
    if (fibcount >=3 ) {\n\
      foo = fiblist[0] + fiblist[1]\n\
      box( side * foo)\n\
      fiblist =[fiblist[1], foo]\n\
      console.log("box3")\n\
    }\n\
    fibcount = fibcount + 1\n\
  }\n\
}\n\
\n\
\n\
_విధానము_     ప్రదర్శన() {\n\
  ఆది_స్థితి()\n\
  స్థానము_మార్చు(150,60)\n\
  కోణము(90)\n\
  కుంచికను_దాచు()\n\
  fib( 11,4)\n\
}\n\
'
gosper_curve ='\
// Gosper Curve -- draw a space filling curve named after Bill Gosper\n\
// also known as a flow snake (a Spoonerism on snow flake)\n\
// more information at Wikipedia  https://en.wikipedia.org/wiki/Gosper_curve\n\
\n\
// A ↦ A − B − − B + A + + A A + B − \n\
\n\
//*** GLOBALS ***\n\
\n\
_సర్వత్ర_   gen = 0\n\
_సర్వత్ర_   size = 0\n\
\n\
//*** FUNCTIONS ***\n\
\n\
_విధానము_     caption (message) {\n\
  // save your current position, heading, etc.\n\
  _సర్వత్ర_   savedX = కుంచిక.స్థానము.x\n\
  _సర్వత్ర_   savedY = కుంచిక.స్థానము.y\n\
  _సర్వత్ర_   savedHeading = కుంచిక.కోణము / 2 / Math.PI * 360 //convert radians to degrees\n\
  _సర్వత్ర_   savedColor = కుంచిక.రంగు\n\
  _సర్వత్ర_   savedWidth = కుంచిక.వెడల్పు\n\
\n\
  స్థానము_మార్చు(కనిష్ఠX()+10, కనిష్ఠY()+10)\n\
  దిశ_మార్చు( 90)\n\
\n\
  // erase what will be in the path\n\
  రంగు_మార్చు( తెలుపు )\n\
  వెడల్పు(10)\n\
  ముందుకు_జరుగు(గరిష్ఠY() * 2 - 12)\n\
  స్థానము_మార్చు(కనిష్ఠX()+10, కనిష్ఠY()+5)\n\
  రంగు_మార్చు("నలుపు")\n\
  అక్షరరూపము_స్థాపించు( "bold 12px Helvitica,sans-serif")\n\
  వ్రాయి( message)\n\
\n\
  //go back from whence you came\n\
  స్థానము_మార్చు( savedX, savedY)\n\
  దిశ_మార్చు( savedHeading)\n\
  రంగు_మార్చు( savedColor)\n\
  వెడల్పు(savedWidth)\n\
}\n\
\n\
\n\
_విధానము_     A (side, gen) {\n\
  if (gen ===0) {\n\
    ముందుకు_జరుగు(side)\n\
  }\n\
  else {\n\
    side = side / Math.sqrt(7)\n\
    A (side, gen-1)\n\
    ఎడమ_వైపు_తిరుగు(60)\n\
    B (side, gen-1)\n\
    ఎడమ_వైపు_తిరుగు(120)\n\
    B (side, gen-1)\n\
    కుడి_వైపు_తిరుగు(60)\n\
    A (side, gen-1)\n\
    కుడి_వైపు_తిరుగు(120)\n\
    A (side, gen-1)\n\
    A (side, gen-1)\n\
    కుడి_వైపు_తిరుగు(60)\n\
    B (side, gen-1)\n\
    ఎడమ_వైపు_తిరుగు(60)\n\
  }\n\
}\n\
\n\
// B ↦ + A − B B − − B − A + + A + B \n\
\n\
_విధానము_     B (side, gen) {\n\
  if (gen ===0) {\n\
    ముందుకు_జరుగు(side)\n\
  }\n\
  else {\n\
    side = side / Math.sqrt(7)\n\
    కుడి_వైపు_తిరుగు(60)\n\
    A (side, gen-1)\n\
    ఎడమ_వైపు_తిరుగు(60)\n\
    B (side, gen-1)\n\
    B (side, gen-1)\n\
    ఎడమ_వైపు_తిరుగు(120)\n\
    B (side, gen-1)\n\
    ఎడమ_వైపు_తిరుగు(60)\n\
    A (side, gen-1)\n\
    కుడి_వైపు_తిరుగు(120)\n\
    A (side, gen-1)\n\
    కుడి_వైపు_తిరుగు(60)\n\
    B (side, gen-1)\n\
  }\n\
}\n\
\n\
\n\
_విధానము_     delayDemo () {\n\
  ఆది_స్థితి()\n\
  కుంచికను_దాచు()\n\
  size = 1.5 * Math.min(గరిష్ఠX(), గరిష్ఠY())\n\
  స్థానము_మార్చు( .5* size, (.2*gen -.6) * size)\n\
  A( size,gen)\n\
  caption ("Gosper Curve generation " + gen)\n\
  if (gen < 5) {\n\
    gen = gen + 1\n\
  } else {\n\
    gen = 0\n\
  }\n\
  విలంబించు( delayDemo,3000)\n\
}\n\
\n\
_విధానము_     ప్రదర్శన() {\n\
  gen = 0\n\
  delayDemo()\n\
}\n\
'
graphitti ='\
// Graphitti -- draw randomly placed coloured stripes\n\
\n\
//** Globals **\n\
\n\
_సర్వత్ర_   గరిష్ఠ_X =  imageContext.canvas.width/2;\n\
_సర్వత్ర_   గరిష్ఠ_Y =  imageContext.canvas.height/2;\n\
_సర్వత్ర_   కనిష్ఠ_X =  -గరిష్ఠ_X;\n\
_సర్వత్ర_   కనిష్ఠ_Y =  -గరిష్ఠ_Y;\n\
_సర్వత్ర_   maxVelocity = 12;\n\
\n\
\n\
_విధానము_     plotOne() {\n\
  స్థానము_మార్చు(యాదృచ్ఛిక_సంఖ్య(కనిష్ఠ_X, గరిష్ఠ_X), యాదృచ్ఛిక_సంఖ్య(కనిష్ఠ_Y, గరిష్ఠ_Y));\n\
  రంగు_మార్చు(యాదృచ్ఛిక_సంఖ్య(16));\n\
  కోణము(యాదృచ్ఛిక_సంఖ్య(0, 180));\n\
  వెడల్పు(యాదృచ్ఛిక_సంఖ్య(1, 20));\n\
  ముందుకు_జరుగు(యాదృచ్ఛిక_సంఖ్య(10, 30));\n\
}\n\
\n\
_విధానము_     ప్రదర్శన() {\n\
  ఆది_స్థితి()\n\
  ఆడించు(plotOne, 20);\n\
}\n\
'
heart ='\
// Heart -- draw open or filled hearts\n\
/*\n\
algorithm:\n\
  start with a square at 45 degrees\n\
  add two half circles on the two upper segments\n\
  clean up the lines\n\
\n\
to make invarient:\n\
  move down 1/(square root 2) or (square root 2)/2\n\
  draw it\n\
  move up by same amount\n\
\n\
to make solid:\n\
  fill the two half circles.\n\
  fill the square by drawing it on one shot\n\
*/\n\
\n\
_విధానము_     oheart(size)\n\
{\n\
  రంగు_మార్చు( ఎరుపు )\n\
  వెడల్పు(4)\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  వెనుకకు_జరుగు(.707*size)\n\
  కుంచికను_కింద_పెట్టు()\n\
  ఎడమ_వైపు_తిరుగు(45)\n\
  ముందుకు_జరుగు(size)\n\
  కుడి_వైపు_తిరుగు(90)\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  ముందుకు_జరుగు(size/2)\n\
  కుంచికను_కింద_పెట్టు()\n\
  వృత్తము(size/2,180,false)\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  ముందుకు_జరుగు(size/2)\n\
  కుడి_వైపు_తిరుగు(90)\n\
  ముందుకు_జరుగు(size/2)\n\
  కుంచికను_కింద_పెట్టు()\n\
  వృత్తము(size/2,180,false)\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  ముందుకు_జరుగు(size/2)\n\
  కుంచికను_కింద_పెట్టు()\n\
  కుడి_వైపు_తిరుగు(90)\n\
  ముందుకు_జరుగు(size)\n\
  కుడి_వైపు_తిరుగు(135)\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  ముందుకు_జరుగు(.707*size)\n\
  కుంచికను_కింద_పెట్టు()\n\
}\n\
\n\
_విధానము_     fheart(size, fcolor)\n\
{\n\
  రంగు_మార్చు(fcolor)\n\
  వెనుకకు_జరుగు(.707*size)\n\
  ఎడమ_వైపు_తిరుగు(45)\n\
  ముందుకు_జరుగు(size)\n\
  కుడి_వైపు_తిరుగు(90)\n\
  ముందుకు_జరుగు(size/2)\n\
  ఆకారము_ప్రారంభించు()\n\
  వృత్తము(size/2,180,false)\n\
  ఆకారము_ముగించు(fcolor)\n\
  ముందుకు_జరుగు(size/2)\n\
  కుడి_వైపు_తిరుగు(90)\n\
  ముందుకు_జరుగు(size/2)\n\
  ఆకారము_ప్రారంభించు()\n\
  వృత్తము(size/2,180,false)\n\
  ఆకారము_ముగించు(fcolor)\n\
  ముందుకు_జరుగు(size/2)\n\
  కుడి_వైపు_తిరుగు(90)\n\
  ముందుకు_జరుగు(size)\n\
  ఆకారము_ప్రారంభించు()\n\
  for (i=0;i<4;i++)\n\
  {\n\
    కుడి_వైపు_తిరుగు(90)\n\
    ముందుకు_జరుగు(size)\n\
  }\n\
  ఆకారము_ముగించు(fcolor)\n\
  కుడి_వైపు_తిరుగు(135)\n\
  ముందుకు_జరుగు(.707*size)\n\
}\n\
\n\
_విధానము_     heart(size)\n\
{\n\
  రంగు_మార్చు( ఎరుపు )\n\
  వెడల్పు(4)\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  వెనుకకు_జరుగు(.707*size)\n\
  కుంచికను_కింద_పెట్టు()\n\
  ఎడమ_వైపు_తిరుగు(45)\n\
  ముందుకు_జరుగు(size)\n\
  కుడి_వైపు_తిరుగు(90)\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  ముందుకు_జరుగు(size/2)\n\
  కుంచికను_కింద_పెట్టు()\n\
  ఆకారము_ప్రారంభించు()\n\
  వృత్తము(size/2,180,false)\n\
  ఆకారము_ముగించు("red")\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  ముందుకు_జరుగు(size/2)\n\
  కుడి_వైపు_తిరుగు(90)\n\
  ముందుకు_జరుగు(size/2)\n\
  కుంచికను_కింద_పెట్టు()\n\
  ఆకారము_ప్రారంభించు()\n\
  వృత్తము(size/2,180,false)\n\
  ఆకారము_ముగించు("red")\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  ముందుకు_జరుగు(size/2)\n\
  కుంచికను_కింద_పెట్టు()\n\
  కుడి_వైపు_తిరుగు(90)\n\
  ముందుకు_జరుగు(size)\n\
  ఆకారము_ప్రారంభించు()\n\
  for (i=0;i<4;i++)\n\
  {\n\
    కుడి_వైపు_తిరుగు(90)\n\
    ముందుకు_జరుగు(size)\n\
  }\n\
  ఆకారము_ముగించు()\n\
  కుడి_వైపు_తిరుగు(135)\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  ముందుకు_జరుగు(.707*size)\n\
  కుంచికను_కింద_పెట్టు()\n\
}\n\
\n\
_విధానము_     ప్రదర్శన()\n\
{\n\
  ఆది_స్థితి()\n\
\n\
  size = 50\n\
  oheart(5 * size)\n\
  fheart(4 * size,"red")\n\
  fheart(3 * size,"white")\n\
  oheart(2 * size)\n\
  fheart(1 * size, "red")\n\
}\n\
'
herring_bone_tessellation ='\
// Herring Bone Tessellation -- tile a space using a herring bone brick laying pattern\n\
\n\
sSide = 15\n\
lSide = 2* sSide \n\
\n\
_విధానము_     vRect( sSide, lSide, fColor) {\n\
  ఆకారము_ప్రారంభించు()\n\
  for (_సర్వత్ర_   i=0; i<2; i++) {\n\
    ముందుకు_జరుగు( sSide)\n\
    కుడి_వైపు_తిరుగు(90)\n\
    ముందుకు_జరుగు( lSide)\n\
    కుడి_వైపు_తిరుగు(90)\n\
  }\n\
  ఆకారము_ముగించు( fColor)\n\
  ముందుకు_జరుగు( sSide)\n\
}\n\
\n\
_విధానము_     hRect( sSide, lSide, fColor) {\n\
  ఆకారము_ప్రారంభించు()\n\
  for (_సర్వత్ర_   i=0; i<2; i++) {\n\
    ముందుకు_జరుగు( lSide)\n\
    కుడి_వైపు_తిరుగు(90)\n\
    ముందుకు_జరుగు( sSide)\n\
    కుడి_వైపు_తిరుగు(90)\n\
  }\n\
  ఆకారము_ముగించు( fColor)\n\
  ముందుకు_జరుగు( lSide)\n\
}\n\
\n\
_విధానము_     ప్రదర్శన() {\n\
  ఆది_స్థితి()\n\
  count = 0\n\
  yB = గరిష్ఠY() + sSide\n\
  xB = కనిష్ఠX()\n\
   చుట్టొద్దు()\n\
  కుడి_వైపు_తిరుగు( 90)\n\
  రంగు_మార్చు( తెలుపు )\n\
\n\
  s = 50\n\
  while( కుంచిక.స్థానము.y > కనిష్ఠY()) {\n\
    స్థానము_మార్చు(xB, yB)\n\
    while( కుంచిక.స్థానము.x < గరిష్ఠX()) {\n\
      కుంచికను_కింద_పెట్టు()\n\
      hRect(sSide, lSide, "darkred")\n\
      vRect(sSide, lSide, "darkred")\n\
      కుంచికను_పైకి_ఎత్తు()\n\
      ముందుకు_జరుగు( sSide)\n\
    }\n\
    yB = yB - sSide\n\
\n\
    స్థానము_మార్చు(xB - lSide/2, yB)\n\
    while( కుంచిక.స్థానము.x < గరిష్ఠX()) {\n\
      కుంచికను_కింద_పెట్టు()\n\
      hRect(sSide, lSide, "darkred")\n\
      vRect(sSide, lSide, "darkred")\n\
      కుంచికను_పైకి_ఎత్తు()\n\
      ముందుకు_జరుగు( sSide)\n\
    }\n\
    yB = yB - sSide\n\
\n\
    స్థానము_మార్చు(xB - lSide, yB)\n\
    while( కుంచిక.స్థానము.x < గరిష్ఠX()) {\n\
      కుంచికను_కింద_పెట్టు()\n\
      hRect(sSide, lSide, "darkred")\n\
      vRect(sSide, lSide, "darkred")\n\
      కుంచికను_పైకి_ఎత్తు()\n\
      ముందుకు_జరుగు( sSide)\n\
    }\n\
    yB = yB - sSide\n\
\n\
    స్థానము_మార్చు(xB - 3/2 * lSide, yB)\n\
    while( కుంచిక.స్థానము.x < గరిష్ఠX()) {\n\
      కుంచికను_కింద_పెట్టు()\n\
      hRect(sSide, lSide, "darkred")\n\
      vRect(sSide, lSide, "darkred")\n\
      కుంచికను_పైకి_ఎత్తు()\n\
      ముందుకు_జరుగు( sSide)\n\
    }\n\
    yB = yB - sSide\n\
  }\n\
}\n\
'
hex_tessellation ='\
// Hexagon Tessellation -- tile a surface with hexagons\n\
\n\
_విధానము_     hexagon (side) {\n\
  కుంచికను_పైకి_ఎత్తు();\n\
  ముందుకు_జరుగు(side);\n\
  కుడి_వైపు_తిరుగు(120);\n\
  కుంచికను_కింద_పెట్టు();\n\
  ఆవర్తించు(6, _విధానము_     () {\n\
    ముందుకు_జరుగు(side);\n\
    కుడి_వైపు_తిరుగు(60);\n\
  })\n\
}\n\
\n\
_విధానము_     repeatToRight (side) {\n\
  while (కుంచిక.స్థానము.x < గరిష్ఠX()) {\n\
    hexagon(side);\n\
    కుంచికను_పైకి_ఎత్తు();\n\
    ముందుకు_జరుగు(side * 2);\n\
    ఎడమ_వైపు_తిరుగు(120);\n\
    కుంచికను_కింద_పెట్టు();\n\
  }\n\
}\n\
\n\
_విధానము_     repeatToLeft(side) {\n\
  while (కుంచిక.స్థానము.x > కనిష్ఠX())\n\
   {\n\
    hexagon(side);\n\
    కుంచికను_పైకి_ఎత్తు();\n\
    ముందుకు_జరుగు(side * 2);\n\
    ఎడమ_వైపు_తిరుగు(120);\n\
    కుంచికను_కింద_పెట్టు();\n\
  }\n\
}\n\
\n\
_విధానము_     ప్రదర్శన() {\n\
  \n\
  side = 50;\n\
  \n\
  \n\
  ఆది_స్థితి();\n\
   చుట్టొద్దు();\n\
  వెడల్పు(1);\n\
  స్థానము_మార్చు(కనిష్ఠX()-1, గరిష్ఠY()-1);\n\
  \n\
  while (కుంచిక.స్థానము.y > కనిష్ఠY()) {\n\
    repeatToRight(side); // draw a row of hexagons\n\
  \n\
    //advance to next row on right side\n\
    కుంచికను_పైకి_ఎత్తు();\n\
    ఎడమ_వైపు_తిరుగు(120);\n\
    ముందుకు_జరుగు(side);\n\
    ఎడమ_వైపు_తిరుగు(60);\n\
    ముందుకు_జరుగు(side)\n\
    కుంచికను_కింద_పెట్టు();\n\
  \n\
    repeatToLeft (side);  // draw a row of hexagons\n\
  \n\
    //advance on next row on left side\n\
    కుంచికను_పైకి_ఎత్తు();\n\
    ఎడమ_వైపు_తిరుగు(60);\n\
    ముందుకు_జరుగు(side);\n\
    కుడి_వైపు_తిరుగు(60);\n\
    ముందుకు_జరుగు(side);\n\
    కుడి_వైపు_తిరుగు(180);\n\
    కుంచికను_కింద_పెట్టు();\n\
    చిత్రీకరించు();\n\
  }\n\
}\n\
'
hexapentakis_truncated_icosahedron_asymmetric_full ='\
// Hexapentakis-Truncated-Icosahedron-Asymmetric full -- full model for glue up\n\
/*\n\
this draws a model for full exapentakis truncated icosahedron.\n\
Print this on card stock. When cutting out leave glue tabs where\n\
appropriate, as they are not shown.\n\
more at Wikipedia.com\n\
*/\n\
\n\
//Global constants\n\
_సర్వత్ర_    centralPentaAngle = 70.72\n\
_సర్వత్ర_    basePentaAngle = 90 - centralPentaAngle/2\n\
_సర్వత్ర_    centralHexaAngle = 58.58\n\
_సర్వత్ర_    baseHexaAngle = 90 - centralHexaAngle/2\n\
\n\
\n\
_విధానము_     penta (side, faceColor) {\n\
  //assume pointing in direction of base and center is above\n\
  // move around point CW\n\
  _సర్వత్ర_   pentaSide = .8639 * side\n\
\n\
  for( i=0; i<5; i++) {\n\
    ఆకారము_ప్రారంభించు()\n\
    ముందుకు_జరుగు( side)\n\
    కుడి_వైపు_తిరుగు( 180-basePentaAngle)\n\
    ముందుకు_జరుగు( pentaSide)\n\
    కుడి_వైపు_తిరుగు( 180-centralPentaAngle)\n\
    ముందుకు_జరుగు( pentaSide)\n\
    కుడి_వైపు_తిరుగు( 180-basePentaAngle)\n\
    ఆకారము_ముగించు(faceColor)\n\
    ముందుకు_జరుగు( side)\n\
    కుడి_వైపు_తిరుగు( 180-(2*basePentaAngle))\n\
  }\n\
}\n\
\n\
_విధానము_     hexa (side, faceColor) {\n\
  //assume pointing in direction of base and center is above\n\
  // move around point CW\n\
  _సర్వత్ర_   hexaSide = 1.022 * side\n\
\n\
  for( _సర్వత్ర_   i=0; i<6; i++) {\n\
    ఆకారము_ప్రారంభించు()\n\
    ముందుకు_జరుగు( side)\n\
    కుడి_వైపు_తిరుగు( 180-baseHexaAngle)\n\
    ముందుకు_జరుగు( hexaSide)\n\
    కుడి_వైపు_తిరుగు( 180-centralHexaAngle)\n\
    ముందుకు_జరుగు( hexaSide)\n\
    కుడి_వైపు_తిరుగు( 180-baseHexaAngle)\n\
    ఆకారము_ముగించు(faceColor)\n\
    ముందుకు_జరుగు( side)\n\
    కుడి_వైపు_తిరుగు( 180-(2*baseHexaAngle))\n\
  }\n\
}\n\
\n\
px = 0\n\
py = 0\n\
pangle = 0\n\
\n\
_విధానము_     savePos () {\n\
  px = కుంచిక.స్థానము.x\n\
  py = కుంచిక.స్థానము.y\n\
  pangle = కుంచిక.కోణము\n\
}\n\
\n\
_విధానము_     restorePos() {\n\
  కుంచిక.స్థానము.x = px\n\
  కుంచిక.స్థానము.y = py\n\
  కుంచిక.కోణము = pangle\n\
}\n\
\n\
p2x = 0\n\
p2y = 0\n\
p2angle = 0\n\
\n\
_విధానము_     savePos2 () {\n\
  p2x = కుంచిక.స్థానము.x\n\
  p2y = కుంచిక.స్థానము.y\n\
  p2angle = కుంచిక.కోణము\n\
}\n\
\n\
_విధానము_     restorePos2() {\n\
  కుంచిక.స్థానము.x = p2x\n\
  కుంచిక.స్థానము.y = p2y\n\
  కుంచిక.కోణము = p2angle\n\
}\n\
\n\
p3x = 0\n\
p3y = 0\n\
p3angle = 0\n\
\n\
_విధానము_     savePos3 () {\n\
  p3x = కుంచిక.స్థానము.x\n\
  p3y = కుంచిక.స్థానము.y\n\
  p3angle = కుంచిక.కోణము\n\
}\n\
\n\
_విధానము_     restorePos3() {\n\
  కుంచిక.స్థానము.x = p3x\n\
  కుంచిక.స్థానము.y = p3y\n\
  కుంచిక.కోణము = p3angle\n\
}\n\
\n\
p4x = 0\n\
p4y = 0\n\
p4angle = 0\n\
\n\
_విధానము_     savePos4 () {\n\
  p4x = కుంచిక.స్థానము.x\n\
  p4y = కుంచిక.స్థానము.y\n\
  p4angle = కుంచిక.కోణము\n\
}\n\
\n\
_విధానము_     restorePos4() {\n\
  కుంచిక.స్థానము.x = p4x\n\
  కుంచిక.స్థానము.y = p4y\n\
  కుంచిక.కోణము = p4angle\n\
}\n\
\n\
_విధానము_     ప్రదర్శన() {\n\
  ఆది_స్థితి()\n\
  side = .13* Math.min(గరిష్ఠX(), గరిష్ఠY())\n\
  స్థానము_మార్చు(1.8*side,0)\n\
  కుడి_వైపు_తిరుగు(80)\n\
  penta (side, "green")\n\
  కుడి_వైపు_తిరుగు( (2*basePentaAngle))\n\
  for (_సర్వత్ర_   i=0; i<5; i++) {\n\
    savePos()\n\
    // start with the base opposite of where you are now\n\
    కుడి_వైపు_తిరుగు(2*baseHexaAngle)\n\
    ముందుకు_జరుగు(side)\n\
    ఎడమ_వైపు_తిరుగు(180-2*baseHexaAngle)\n\
    ముందుకు_జరుగు(side)\n\
    ఎడమ_వైపు_తిరుగు(180-2*baseHexaAngle)\n\
    ముందుకు_జరుగు(side)\n\
    కుడి_వైపు_తిరుగు(180)\n\
\n\
    // draw another hexa out from where the first will be\n\
    savePos2()\n\
    ముందుకు_జరుగు(side)\n\
    ఎడమ_వైపు_తిరుగు(180-2*baseHexaAngle)\n\
    ముందుకు_జరుగు(side)\n\
    ఎడమ_వైపు_తిరుగు(180-2*baseHexaAngle)\n\
    ముందుకు_జరుగు(side)\n\
    ఎడమ_వైపు_తిరుగు(180-2*baseHexaAngle)\n\
    ముందుకు_జరుగు(side)\n\
    కుడి_వైపు_తిరుగు(180)\n\
    savePos3()\n\
    hexa (side, "red")\n\
    restorePos3()\n\
\n\
    //draw a penta outside of the last hexa\n\
    ముందుకు_జరుగు(side)\n\
    ఎడమ_వైపు_తిరుగు( 180-2*basePentaAngle)\n\
    ముందుకు_జరుగు(side)\n\
    ఎడమ_వైపు_తిరుగు( 180-2*basePentaAngle)\n\
    ముందుకు_జరుగు(side)\n\
    ఎడమ_వైపు_తిరుగు( 180)\n\
    savePos4()\n\
    penta( side, "green")\n\
\n\
    // draw a hexa touching last penta\n\
\n\
    restorePos3()\n\
    ముందుకు_జరుగు( side)\n\
    ఎడమ_వైపు_తిరుగు(180-2*basePentaAngle-2*baseHexaAngle)\n\
    ముందుకు_జరుగు( side)\n\
    ఎడమ_వైపు_తిరుగు( 180-2*baseHexaAngle)\n\
    ముందుకు_జరుగు( side)\n\
    ఎడమ_వైపు_తిరుగు( 180-2*baseHexaAngle)\n\
    ముందుకు_జరుగు( side)\n\
    ఎడమ_వైపు_తిరుగు( 180)\n\
    hexa( side, "yellow")\n\
\n\
    if (i == 0) {\n\
    restorePos4()\n\
    ముందుకు_జరుగు( side)\n\
    ఎడమ_వైపు_తిరుగు( 180 - 2* baseHexaAngle)\n\
    ముందుకు_జరుగు( side)\n\
    ఎడమ_వైపు_తిరుగు( 180 - 2*baseHexaAngle)\n\
    ముందుకు_జరుగు( side)\n\
    కుడి_వైపు_తిరుగు( 180)\n\
    savePos4()\n\
    hexa( side, "lightblue")\n\
   \n\
\n\
    // draw a penta to oppose first\n\
      ఎడమ_వైపు_తిరుగు(-2*baseHexaAngle)\n\
      ముందుకు_జరుగు( side)\n\
      ఎడమ_వైపు_తిరుగు( 180-2*baseHexaAngle)\n\
      savePos4()\n\
      penta(side, "green")\n\
      restorePos4()\n\
      ముందుకు_జరుగు(side)\n\
      savePos4()\n\
      for (_సర్వత్ర_   j=1; j<5; j++) {\n\
         restorePos4()\n\
         కుడి_వైపు_తిరుగు( 180 - 2*basePentaAngle)\n\
         ముందుకు_జరుగు( side)\n\
         savePos4()\n\
         ఎడమ_వైపు_తిరుగు(180 - 2* baseHexaAngle)\n\
         ముందుకు_జరుగు( side)\n\
         ఎడమ_వైపు_తిరుగు(180)\n\
         hexa( side, "lightblue")\n\
      }\n\
\n\
    }\n\
\n\
\n\
    restorePos2()\n\
\n\
    // draw a penta on the free face one away\n\
    ముందుకు_జరుగు( side)\n\
    కుడి_వైపు_తిరుగు( 180-2*baseHexaAngle)\n\
    ముందుకు_జరుగు( side)\n\
    ఎడమ_వైపు_తిరుగు( 180-2*basePentaAngle)\n\
    ముందుకు_జరుగు(side)\n\
    ఎడమ_వైపు_తిరుగు( 180-2*basePentaAngle)\n\
    ముందుకు_జరుగు(side)\n\
    ఎడమ_వైపు_తిరుగు( 180)\n\
    penta(side, "green")\n\
    restorePos2()\n\
\n\
    hexa (side, "blue")\n\
    restorePos()\n\
    ముందుకు_జరుగు( side)\n\
    ఎడమ_వైపు_తిరుగు(180-(2*basePentaAngle))\n\
  }\n\
}\n\
'
hexapentakis_truncated_icosahedron_symmetric_full ='\
// Hexapentakis-Truncated-Icosahedron Symmetric full -- full model for glue up\n\
/*\n\
this draws a modle for full hexapentakis truncated icosahedron\n\
Print this on card stock. When cutting out leave glue tabs where appropriate,\n\
as they are not shown.\n\
more at Wikipedia.com\n\
*/\n\
\n\
//Global constants\n\
_సర్వత్ర_   centralPentaAngle = 70.72\n\
_సర్వత్ర_   basePentaAngle = 90 - centralPentaAngle/2\n\
_సర్వత్ర_   centralHexaAngle = 58.58\n\
_సర్వత్ర_   baseHexaAngle = 90 - centralHexaAngle/2\n\
_సర్వత్ర_   baseAngle = 90 - centralPentaAngle/2\n\
\n\
\n\
_విధానము_     penta (side, faceColor) {\n\
  //assume pointing in direction of base and center is above\n\
  // move around point CW\n\
  _సర్వత్ర_   pentaSide = .8639 * side\n\
\n\
  for( i=0; i<5; i++) {\n\
    ఆకారము_ప్రారంభించు()\n\
    ముందుకు_జరుగు( side)\n\
    కుడి_వైపు_తిరుగు( 180-baseAngle)\n\
    ముందుకు_జరుగు( pentaSide)\n\
    కుడి_వైపు_తిరుగు( 180-centralPentaAngle)\n\
    ముందుకు_జరుగు( pentaSide)\n\
    కుడి_వైపు_తిరుగు( 180-basePentaAngle)\n\
    ఆకారము_ముగించు(faceColor)\n\
    ముందుకు_జరుగు( side)\n\
    కుడి_వైపు_తిరుగు( 180-(2*basePentaAngle))\n\
  }\n\
}\n\
\n\
_విధానము_     hexa (side, faceColor) {\n\
  //assume pointing in direction of base and center is above\n\
  // move around point CW\n\
  _సర్వత్ర_   hexaSide = 1.022 * side\n\
\n\
  for( _సర్వత్ర_   i=0; i<6; i++) {\n\
    ఆకారము_ప్రారంభించు()\n\
    ముందుకు_జరుగు( side)\n\
    కుడి_వైపు_తిరుగు( 180-baseHexaAngle)\n\
    ముందుకు_జరుగు( hexaSide)\n\
    కుడి_వైపు_తిరుగు( 180-centralHexaAngle)\n\
    ముందుకు_జరుగు( hexaSide)\n\
    కుడి_వైపు_తిరుగు( 180-baseHexaAngle)\n\
    ఆకారము_ముగించు(faceColor)\n\
    ముందుకు_జరుగు( side)\n\
    కుడి_వైపు_తిరుగు( 180-(2*baseHexaAngle))\n\
  }\n\
}\n\
\n\
px = 0\n\
py = 0\n\
pangle = 0\n\
\n\
_విధానము_     savePos () {\n\
  px = కుంచిక.స్థానము.x\n\
  py = కుంచిక.స్థానము.y\n\
  pangle = కుంచిక.కోణము\n\
}\n\
\n\
_విధానము_     restorePos() {\n\
  కుంచిక.స్థానము.x = px\n\
  కుంచిక.స్థానము.y = py\n\
  కుంచిక.కోణము = pangle\n\
}\n\
\n\
p2x = 0\n\
p2y = 0\n\
p2angle = 0\n\
\n\
_విధానము_     savePos2 () {\n\
  p2x = కుంచిక.స్థానము.x\n\
  p2y = కుంచిక.స్థానము.y\n\
  p2angle = కుంచిక.కోణము\n\
}\n\
\n\
_విధానము_     restorePos2() {\n\
  కుంచిక.స్థానము.x = p2x\n\
  కుంచిక.స్థానము.y = p2y\n\
  కుంచిక.కోణము = p2angle\n\
}\n\
\n\
p3x = 0\n\
p3y = 0\n\
p3angle = 0\n\
\n\
_విధానము_     savePos3 () {\n\
  p3x = కుంచిక.స్థానము.x\n\
  p3y = కుంచిక.స్థానము.y\n\
  p3angle = కుంచిక.కోణము\n\
}\n\
\n\
_విధానము_     restorePos3() {\n\
  కుంచిక.స్థానము.x = p3x\n\
  కుంచిక.స్థానము.y = p3y\n\
  కుంచిక.కోణము = p3angle\n\
}\n\
\n\
p4x = 0\n\
p4y = 0\n\
p4angle = 0\n\
\n\
_విధానము_     savePos4 () {\n\
  p4x = కుంచిక.స్థానము.x\n\
  p4y = కుంచిక.స్థానము.y\n\
  p4angle = కుంచిక.కోణము\n\
}\n\
\n\
_విధానము_     restorePos4() {\n\
  కుంచిక.స్థానము.x = p4x\n\
  కుంచిక.స్థానము.y = p4y\n\
  కుంచిక.కోణము = p4angle\n\
}\n\
\n\
_విధానము_     ప్రదర్శన() {\n\
  ఆది_స్థితి()\n\
  side = .13* Math.min(గరిష్ఠX(), గరిష్ఠY())\n\
  స్థానము_మార్చు(0,0)\n\
  కుడి_వైపు_తిరుగు(80)\n\
  penta (side, "green")\n\
  కుడి_వైపు_తిరుగు( (2*basePentaAngle))\n\
  for (_సర్వత్ర_   i=0; i<5; i++) {\n\
    savePos()\n\
    // start with the base opposite of where you are now\n\
    కుడి_వైపు_తిరుగు(2*baseHexaAngle)\n\
    ముందుకు_జరుగు(side)\n\
    ఎడమ_వైపు_తిరుగు(180-2*baseHexaAngle)\n\
    ముందుకు_జరుగు(side)\n\
    ఎడమ_వైపు_తిరుగు(180-2*baseHexaAngle)\n\
    ముందుకు_జరుగు(side)\n\
    కుడి_వైపు_తిరుగు(180)\n\
\n\
    // draw another hexa out from where the first will be\n\
    savePos2()\n\
    ముందుకు_జరుగు(side)\n\
    ఎడమ_వైపు_తిరుగు(180-2*baseHexaAngle)\n\
    ముందుకు_జరుగు(side)\n\
    ఎడమ_వైపు_తిరుగు(180-2*baseHexaAngle)\n\
    ముందుకు_జరుగు(side)\n\
    ఎడమ_వైపు_తిరుగు(180-2*baseHexaAngle)\n\
    ముందుకు_జరుగు(side)\n\
    కుడి_వైపు_తిరుగు(180)\n\
    savePos3()\n\
    hexa (side, "red")\n\
    restorePos3()\n\
\n\
    //draw a penta outside of the last hexa\n\
    ముందుకు_జరుగు(side)\n\
    ఎడమ_వైపు_తిరుగు( 180-2*basePentaAngle)\n\
    ముందుకు_జరుగు(side)\n\
    ఎడమ_వైపు_తిరుగు( 180-2*basePentaAngle)\n\
    ముందుకు_జరుగు(side)\n\
    ఎడమ_వైపు_తిరుగు( 180)\n\
    savePos4()\n\
    penta( side, "green")\n\
\n\
    // draw a hexa touching last penta\n\
\n\
    restorePos3()\n\
    ముందుకు_జరుగు( side)\n\
    ఎడమ_వైపు_తిరుగు(180-2*basePentaAngle-2*baseHexaAngle)\n\
    ముందుకు_జరుగు( side)\n\
    ఎడమ_వైపు_తిరుగు( 180-2*baseHexaAngle)\n\
    ముందుకు_జరుగు( side)\n\
    ఎడమ_వైపు_తిరుగు( 180-2*baseHexaAngle)\n\
    ముందుకు_జరుగు( side)\n\
    ఎడమ_వైపు_తిరుగు( 180)\n\
    hexa( side, "yellow")\n\
\n\
    restorePos4()\n\
    ముందుకు_జరుగు( side)\n\
    ఎడమ_వైపు_తిరుగు( 180 - 2* baseHexaAngle)\n\
    ముందుకు_జరుగు( side)\n\
    ఎడమ_వైపు_తిరుగు( 180 - 2*baseHexaAngle)\n\
    ముందుకు_జరుగు( side)\n\
    కుడి_వైపు_తిరుగు( 180)\n\
    savePos4()\n\
    hexa( side, "lightblue")\n\
   \n\
\n\
    // draw a penta to oppose first\n\
    //restorePos4()\n\
    if (i == 0) {\n\
      ఎడమ_వైపు_తిరుగు(-2*baseHexaAngle)\n\
      ముందుకు_జరుగు( side)\n\
      ఎడమ_వైపు_తిరుగు( 180-2*baseHexaAngle)\n\
      //ముందుకు_జరుగు( side)\n\
      //కుడి_వైపు_తిరుగు( 180-2*baseHexaAngle)\n\
      //ముందుకు_జరుగు(side)\n\
      penta(side, "green")\n\
    }\n\
\n\
\n\
    restorePos2()\n\
\n\
    // draw a penta on the free face one away\n\
    ముందుకు_జరుగు( side)\n\
    కుడి_వైపు_తిరుగు( 180-2*baseHexaAngle)\n\
    ముందుకు_జరుగు( side)\n\
    ఎడమ_వైపు_తిరుగు( 180-2*basePentaAngle)\n\
    ముందుకు_జరుగు(side)\n\
    ఎడమ_వైపు_తిరుగు( 180-2*basePentaAngle)\n\
    ముందుకు_జరుగు(side)\n\
    ఎడమ_వైపు_తిరుగు( 180)\n\
    penta(side, "green")\n\
    restorePos2()\n\
\n\
    hexa (side, "blue")\n\
    restorePos()\n\
    ముందుకు_జరుగు( side)\n\
    ఎడమ_వైపు_తిరుగు(180-(2*basePentaAngle))\n\
  }\n\
}\n\
'
hexapentakis_truncated_icosahedron_symmetric_half ='\
// Hexapentakis Truncated Icosahedron half -- half model for glue up\n\
/*\n\
This draws a model for half a hexapentakis truncated icosahedron\n\
Print two of these on card stock. When cutting out, leave glue tabs\n\
where appropriate, as they are not shown.\n\
More at Wikipedia.com\n\
*/\n\
\n\
\n\
//Global constants\n\
_సర్వత్ర_    centralPentaAngle = 70.72\n\
_సర్వత్ర_    basePentaAngle = 90 - centralPentaAngle/2\n\
_సర్వత్ర_    centralHexaAngle = 58.58\n\
_సర్వత్ర_    baseHexaAngle = 90 - centralHexaAngle/2\n\
\n\
\n\
_విధానము_     penta (side, faceColor) {\n\
  //assume pointing in direction of base and center is above\n\
  // move around point CW\n\
  _సర్వత్ర_   pentaSide = .8639 * side\n\
\n\
  for( i=0; i<5; i++) {\n\
    ఆకారము_ప్రారంభించు()\n\
    ముందుకు_జరుగు( side)\n\
    కుడి_వైపు_తిరుగు( 180-basePentaAngle)\n\
    ముందుకు_జరుగు( pentaSide)\n\
    కుడి_వైపు_తిరుగు( 180-centralPentaAngle)\n\
    ముందుకు_జరుగు( pentaSide)\n\
    కుడి_వైపు_తిరుగు( 180-basePentaAngle)\n\
    ఆకారము_ముగించు(faceColor)\n\
    ముందుకు_జరుగు( side)\n\
    కుడి_వైపు_తిరుగు( 180-(2*basePentaAngle))\n\
  }\n\
}\n\
\n\
_విధానము_     hexa (side, faceColor) {\n\
  //assume pointing in direction of base and center is above\n\
  // move around point CW\n\
  _సర్వత్ర_   hexaSide = 1.022 * side\n\
\n\
  for( _సర్వత్ర_   i=0; i<6; i++) {\n\
    ఆకారము_ప్రారంభించు()\n\
    ముందుకు_జరుగు( side)\n\
    కుడి_వైపు_తిరుగు( 180-baseHexaAngle)\n\
    ముందుకు_జరుగు( hexaSide)\n\
    కుడి_వైపు_తిరుగు( 180-centralHexaAngle)\n\
    ముందుకు_జరుగు( hexaSide)\n\
    కుడి_వైపు_తిరుగు( 180-baseHexaAngle)\n\
    ఆకారము_ముగించు(faceColor)\n\
    ముందుకు_జరుగు( side)\n\
    కుడి_వైపు_తిరుగు( 180-(2*baseHexaAngle))\n\
  }\n\
}\n\
\n\
px = 0\n\
py = 0\n\
pangle = 0\n\
\n\
_విధానము_     savePos () {\n\
  px = కుంచిక.స్థానము.x\n\
  py = కుంచిక.స్థానము.y\n\
  pangle = కుంచిక.కోణము\n\
}\n\
\n\
_విధానము_     restorePos() {\n\
  కుంచిక.స్థానము.x = px\n\
  కుంచిక.స్థానము.y = py\n\
  కుంచిక.కోణము = pangle\n\
}\n\
\n\
p2x = 0\n\
p2y = 0\n\
p2angle = 0\n\
\n\
_విధానము_     savePos2 () {\n\
  p2x = కుంచిక.స్థానము.x\n\
  p2y = కుంచిక.స్థానము.y\n\
  p2angle = కుంచిక.కోణము\n\
}\n\
\n\
_విధానము_     restorePos2() {\n\
  కుంచిక.స్థానము.x = p2x\n\
  కుంచిక.స్థానము.y = p2y\n\
  కుంచిక.కోణము = p2angle\n\
}\n\
\n\
_విధానము_     ప్రదర్శన() {\n\
  ఆది_స్థితి()\n\
  కుంచికను_దాచు()\n\
  side = .23 * Math.min(గరిష్ఠX(), గరిష్ఠY())\n\
  స్థానము_మార్చు(-.6* side, -.5* side)\n\
  కుడి_వైపు_తిరుగు(18)\n\
  penta (side, "green")\n\
  కుడి_వైపు_తిరుగు( (2*basePentaAngle))\n\
  for (_సర్వత్ర_   i=0; i<5; i++) {\n\
    savePos()\n\
    // start with the base opposite of where you are now\n\
    కుడి_వైపు_తిరుగు(2*baseHexaAngle)\n\
    ముందుకు_జరుగు(side)\n\
    ఎడమ_వైపు_తిరుగు(180-2*baseHexaAngle)\n\
    ముందుకు_జరుగు(side)\n\
    ఎడమ_వైపు_తిరుగు(180-2*baseHexaAngle)\n\
    ముందుకు_జరుగు(side)\n\
    కుడి_వైపు_తిరుగు(180)\n\
\n\
    // draw another hexa out from where the first will be\n\
    savePos2()\n\
    ముందుకు_జరుగు(side)\n\
    ఎడమ_వైపు_తిరుగు(180-2*baseHexaAngle)\n\
    ముందుకు_జరుగు(side)\n\
    ఎడమ_వైపు_తిరుగు(180-2*baseHexaAngle)\n\
    ముందుకు_జరుగు(side)\n\
    ఎడమ_వైపు_తిరుగు(180-2*baseHexaAngle)\n\
    ముందుకు_జరుగు(side)\n\
    కుడి_వైపు_తిరుగు(180)\n\
    hexa (side, "red")\n\
\n\
    restorePos2()\n\
\n\
    // draw a penta on the free face one away\n\
    ముందుకు_జరుగు( side)\n\
    కుడి_వైపు_తిరుగు( 180-2*baseHexaAngle)\n\
    ముందుకు_జరుగు( side)\n\
    ఎడమ_వైపు_తిరుగు( 180-2*basePentaAngle)\n\
    ముందుకు_జరుగు(side)\n\
    ఎడమ_వైపు_తిరుగు( 180-2*basePentaAngle)\n\
    ముందుకు_జరుగు(side)\n\
    ఎడమ_వైపు_తిరుగు( 180)\n\
    penta(side, "green")\n\
    restorePos2()\n\
\n\
    hexa (side, "blue")\n\
    restorePos()\n\
    ముందుకు_జరుగు( side)\n\
    ఎడమ_వైపు_తిరుగు(180-(2*basePentaAngle))\n\
  }\n\
}\n\
'
hilbert_curve ='\
// Hilbert Curve -- draw a space filling fractal curve described by David Hilbert\n\
// more information at Wikipedia  https://en.wikipedia.org/wiki/Hilbert_curve\n\
\n\
// A → − B F + A F A + F B −\n\
\n\
\n\
//*** GLOBALS ***\n\
_సర్వత్ర_   gen = 0\n\
\n\
\n\
//*** FUNCTIONS ***\n\
\n\
_విధానము_     caption (message) {\n\
  // save your current position, heading, etc.\n\
  _సర్వత్ర_   savedX = కుంచిక.స్థానము.x\n\
  _సర్వత్ర_   savedY = కుంచిక.స్థానము.y\n\
  _సర్వత్ర_   savedHeading = కుంచిక.కోణము / 2 / Math.PI * 360 //convert radians to degrees\n\
  _సర్వత్ర_   savedColor = కుంచిక.రంగు\n\
  _సర్వత్ర_   savedWidth = కుంచిక.వెడల్పు\n\
\n\
  స్థానము_మార్చు(కనిష్ఠX()+10, కనిష్ఠY()+10)\n\
  దిశ_మార్చు( 90)\n\
\n\
  // erase wha will be in the path\n\
  రంగు_మార్చు( తెలుపు )\n\
  వెడల్పు(10)\n\
  ముందుకు_జరుగు(గరిష్ఠY() * 2 - 12)\n\
  స్థానము_మార్చు(కనిష్ఠX()+10, కనిష్ఠY()+5)\n\
  రంగు_మార్చు("నలుపు")\n\
  అక్షరరూపము_స్థాపించు("bold 12pt Ariel,sans-serif")\n\
  వ్రాయి( message)\n\
\n\
  //go back from whence you came\n\
  స్థానము_మార్చు( savedX, savedY)\n\
  దిశ_మార్చు( savedHeading)\n\
  రంగు_మార్చు( savedColor)\n\
  వెడల్పు(savedWidth)\n\
}\n\
\n\
\n\
_విధానము_     A (side,gen) {\n\
  if (gen === 0) {\n\
    ఎడమ_వైపు_తిరుగు(90)\n\
    ముందుకు_జరుగు(side)\n\
    కుడి_వైపు_తిరుగు(90)\n\
    ముందుకు_జరుగు(side)\n\
    కుడి_వైపు_తిరుగు(90)\n\
    ముందుకు_జరుగు(side)\n\
    ఎడమ_వైపు_తిరుగు(90)\n\
  }\n\
  else {\n\
    ఎడమ_వైపు_తిరుగు(90)\n\
    B (side, gen-1)\n\
    ముందుకు_జరుగు(side)\n\
    కుడి_వైపు_తిరుగు(90)\n\
    A (side, gen-1)\n\
    ముందుకు_జరుగు(side)\n\
    A (side, gen-1)\n\
    కుడి_వైపు_తిరుగు(90)\n\
    ముందుకు_జరుగు(side)\n\
    B (side, gen-1)\n\
    ఎడమ_వైపు_తిరుగు(90)\n\
  }\n\
}\n\
//  B → + A F − B F B − F A +\n\
//Here, "F" means "draw forward", "−" means "turn left 90°", "+" means "turn right 90°" (see కుంచిక graphics), and "A" and "B" are ignored during drawing.\n\
\n\
_విధానము_     B (side,gen) {\n\
  if (gen === 0) {\n\
    కుడి_వైపు_తిరుగు(90)\n\
    ముందుకు_జరుగు(side)\n\
    ఎడమ_వైపు_తిరుగు(90)\n\
    ముందుకు_జరుగు(side)\n\
    ఎడమ_వైపు_తిరుగు(90)\n\
    ముందుకు_జరుగు(side)\n\
    కుడి_వైపు_తిరుగు(90)\n\
  }\n\
  else {\n\
    కుడి_వైపు_తిరుగు(90)\n\
    A (side, gen-1)\n\
    ముందుకు_జరుగు(side)\n\
    ఎడమ_వైపు_తిరుగు(90)\n\
    B (side, gen-1)\n\
    ముందుకు_జరుగు(side)\n\
    B (side, gen-1)\n\
    ఎడమ_వైపు_తిరుగు(90)\n\
    ముందుకు_జరుగు(side)\n\
    A (side, gen-1)\n\
    కుడి_వైపు_తిరుగు(90)\n\
  }\n\
}\n\
\n\
\n\
_విధానము_     delayedHilbert () {\n\
  ఆది_స్థితి()\n\
   చుట్టొద్దు()\n\
\n\
  // targeting 80% of window\n\
  size = .80 * Math.min( గరిష్ఠX(),గరిష్ఠY())*2\n\
  _సర్వత్ర_   side = 10\n\
\n\
  /*overall side seems to be: gen 0: 1\n\
    gen 1: 3 (2*gen 0 + 1)\n\
    gen 2: 7 (2*gen 1 + 1)\n\
    gen 3: 15(2*gen 2 +1)\n\
   */  _సర్వత్ర_   overallSides = 1\n\
  for (i=1; i<=gen; i++)\n\
    overallSides = 2*overallSides + 1\n\
  side = size/overallSides\n\
  స్థానము_మార్చు( overallSides/2*side,-overallSides/2*side)\n\
  A (side, gen)\n\
  caption( "Hilbert curve, generation " + gen)\n\
\n\
  if (gen < 5) {\n\
    gen = gen + 1\n\
  } else {\n\
    gen = 0\n\
  }\n\
  విలంబించు( delayedHilbert, 3000)\n\
}\n\
\n\
\n\
_విధానము_     ప్రదర్శన() {\n\
  gen = 0\n\
  delayedHilbert()\n\
}\n\
'
hirschhorn_tiles ='\
// Hircshhorn Tiles -- Hirschhorn 6-fold-rotational symmetry pentagonal tiling\n\
\n\
// CONSTRAINTS\n\
// six ang0 = 360\n\
//ang0 + ang1 + ang4 = 360\n\
//ang1 + ang3 + ang3 = 360\n\
//ang2 + ang4 + ang4 = 360\n\
//ang0 + ang3 = ang1 ... about the inner circle\n\
//ang2+ ang3 + ang2 + ang3 = 360\n\
//  restated: ang2 + ang3 = 180\n\
//\n\
//ang0 = 60\n\
//ang1 = ang3 + 60\n\
//3*ang3 = 300\n\
//ang3 = 100\n\
//ang2 = 180 - ang3 = 180-100 = 80\n\
//ang1 = 360 - 2*ang3 = 360 - 200 = 160\n\
//ang4 = 360 - ang0 = ang1 = 360 - 60 - 160 = 140\n\
\n\
//sides\n\
//side0 = side4\n\
//side0 = side3\n\
//side1 = side4\n\
//side2 = side3\n\
//side1 = side3\n\
// this means that\n\
// side0 = side4 = side3 = side2 = side1... equalateral\n\
\n\
ang0 = 360/6 //point కోణము\n\
ang1 = 160\n\
ang2 = 80\n\
ang3 = 100\n\
ang4 = 140\n\
CCW = true\n\
CW = false\n\
\n\
angles = [ang0, ang1, ang2, ang3, ang4 ]\n\
//angles = [60, 160, 80, 100, 140 ]\n\
\n\
fColors = [\n\
           "yellow",\n\
           "నారింజ",\n\
           "lime",\n\
           "red",\n\
           "purple",\n\
           "cyan",\n\
           "cyan",\n\
           "blue",\n\
           "blue",\n\
           "కపిలము",\n\
           "కపిలము",\n\
           "కపిలము",\n\
           "tan",\n\
           "tan",\n\
           "tan",\n\
           "aqua",\n\
           "aqua",\n\
           "aqua",\n\
           "aqua",\n\
           "salmon",\n\
           "salmon",\n\
           "salmon",\n\
           "salmon",\n\
           "బూడిద",\n\
           "బూడిద",\n\
           "బూడిద",\n\
           "బూడిద",\n\
           "బూడిద",\n\
           "నలుపు",\n\
           "నలుపు",\n\
           "నలుపు",\n\
           "నలుపు",\n\
           "నలుపు",\n\
           ]\n\
/*\n\
fColors = [\n\
           "wheat",\n\
           "tan",\n\
           "tan",\n\
           "wheat",\n\
           "tan",\n\
           "wheat",\n\
           "wheat",\n\
           "tan",\n\
           "tan",\n\
           "wheat",\n\
           "wheat",\n\
           "wheat",\n\
           "tan",\n\
           "tan",\n\
           "tan",\n\
           "wheat",\n\
           "wheat",\n\
           "wheat",\n\
           "wheat",\n\
           "tan",\n\
           "tan",\n\
           "tan",\n\
           "tan",\n\
           "బూడిద",\n\
           "బూడిద",\n\
           "బూడిద",\n\
           "బూడిద",\n\
           "బూడిద",\n\
           "నలుపు",\n\
           "నలుపు",\n\
           "నలుపు",\n\
           "నలుపు",\n\
           "నలుపు",\n\
           ]\n\
*/\n\
colorlayer = 0\n\
\n\
_విధానము_     pentagon(side, fColor) {\n\
  // direction of the point\n\
  // invariant\n\
  ఆకారము_ప్రారంభించు()\n\
  ఎడమ_వైపు_తిరుగు( ang0/2)\n\
  ముందుకు_జరుగు( side)\n\
  కుడి_వైపు_తిరుగు( 180 - ang1)\n\
  ముందుకు_జరుగు( side)\n\
  కుడి_వైపు_తిరుగు( 180 - ang2)\n\
  ముందుకు_జరుగు( side)\n\
  కుడి_వైపు_తిరుగు( 180 - ang3)\n\
  ముందుకు_జరుగు( side)\n\
  కుడి_వైపు_తిరుగు( 180 - ang4)\n\
  ముందుకు_జరుగు( side)\n\
  కుడి_వైపు_తిరుగు( 180 - ang0/2)\n\
  ఆకారము_ముగించు( fColor)\n\
}\n\
\n\
_విధానము_     p(pNum, ccw, side, fColor) {\n\
  if (ccw) {\n\
    r = -1\n\
  } else {\n\
    r = 1\n\
  }\n\
  ఆకారము_ప్రారంభించు()\n\
  ఎడమ_వైపు_తిరుగు( angles[pNum]/2)\n\
  for (_సర్వత్ర_   i=1; i<5; i++) {\n\
    ముందుకు_జరుగు( side)\n\
    //వ్రాయి( angles[(i+pNum)%5])\n\
    కుడి_వైపు_తిరుగు( 180 - angles[(5+r*i+pNum)%5])  \n\
  }\n\
  ముందుకు_జరుగు( side)\n\
  కుడి_వైపు_తిరుగు( 180 - angles[pNum]/2)\n\
  ఆకారము_ముగించు( fColor)\n\
}\n\
\n\
_విధానము_     hirchhorn(side) {\n\
  for (_సర్వత్ర_   i=0; i<6; i++) {\n\
    //pentagon( s, fColors[colorlayer])\n\
    p( 0, CW, side, fColors[colorlayer])\n\
    ఎడమ_వైపు_తిరుగు( 60)\n\
  }\n\
  colorlayer++\n\
\n\
  ఎడమ_వైపు_తిరుగు(30)\n\
  for (_సర్వత్ర_   i=0; i<6; i++) {\n\
    ముందుకు_జరుగు( side)\n\
    ఎడమ_వైపు_తిరుగు( 10)\n\
    //pentagon( s, fColors[colorlayer])\n\
    p( 0, CW, side, fColors[colorlayer])\n\
    కుడి_వైపు_తిరుగు( 10)\n\
    వెనుకకు_జరుగు( side)\n\
    ఎడమ_వైపు_తిరుగు( 60)\n\
  }\n\
  colorlayer++\n\
\n\
  for (_సర్వత్ర_   i=0; i<6; i++) {\n\
    ముందుకు_జరుగు( side)\n\
    కుడి_వైపు_తిరుగు( 180 - ang1)\n\
    ముందుకు_జరుగు( side)\n\
    ఎడమ_వైపు_తిరుగు( 180 - ang4 - ang4/2 )\n\
\n\
    p ( 4, 0, side, fColors[colorlayer])\n\
    కుడి_వైపు_తిరుగు( 180 - ang4 - ang4/2 )\n\
    వెనుకకు_జరుగు( side)\n\
    ఎడమ_వైపు_తిరుగు( 180 - ang1)\n\
    వెనుకకు_జరుగు(side)\n\
    ఎడమ_వైపు_తిరుగు( 60)\n\
  }\n\
  colorlayer++\n\
  \n\
  ముందుకు_జరుగు( side)\n\
  కుడి_వైపు_తిరుగు( 180 - ang1)\n\
  ముందుకు_జరుగు( side)\n\
  ఎడమ_వైపు_తిరుగు( 180 - ang4)\n\
  ముందుకు_జరుగు( side)\n\
  ఎడమ_వైపు_తిరుగు( 180 - ang3 - ang0/2)\n\
  \n\
  cl = colorlayer\n\
  for( _సర్వత్ర_   i=0; i<18; i++) {\n\
    colorlayer = cl\n\
    p( 0, CCW, side, fColors[colorlayer])\n\
    colorlayer++\n\
    కుడి_వైపు_తిరుగు( ang0/2)\n\
    ముందుకు_జరుగు( side)\n\
    ఎడమ_వైపు_తిరుగు( 180 - ang1 - ang3/2)\n\
    p( 3, CCW, side, fColors[colorlayer])\n\
    colorlayer++\n\
    కుడి_వైపు_తిరుగు( ang3/2)\n\
\n\
    ముందుకు_జరుగు(side)\n\
    ఎడమ_వైపు_తిరుగు( 180- ang4 - ang0/2)\n\
    p( 0, CW, side, fColors[colorlayer])\n\
    colorlayer++\n\
\n\
    ఎడమ_వైపు_తిరుగు( ang0/2)\n\
    ముందుకు_జరుగు( side)\n\
    ఎడమ_వైపు_తిరుగు( 180 - ang0)\n\
    ముందుకు_జరుగు( side)\n\
    కుడి_వైపు_తిరుగు( 180 - ang0/2)\n\
    p( 0, CW, side, fColors[colorlayer])//purple\n\
    colorlayer++\n\
\n\
    ఎడమ_వైపు_తిరుగు( ang0/2)\n\
    ముందుకు_జరుగు( side)\n\
    కుడి_వైపు_తిరుగు( 180- ang1)\n\
    ముందుకు_జరుగు( side)\n\
    కుడి_వైపు_తిరుగు( 180 - ang2 - ang2/2)\n\
    p( 2, CCW, side, fColors[colorlayer])\n\
    colorlayer++\n\
\n\
    కుడి_వైపు_తిరుగు( ang2/2)\n\
    ముందుకు_జరుగు( side)\n\
    ఎడమ_వైపు_తిరుగు( ang2/2)\n\
    p( 2, CCW, side, fColors[colorlayer])\n\
    colorlayer++\n\
\n\
    కుడి_వైపు_తిరుగు( ang2/2)\n\
    ముందుకు_జరుగు( side)\n\
    ఎడమ_వైపు_తిరుగు( 180 - ang3)\n\
    ముందుకు_జరుగు( side)\n\
    ఎడమ_వైపు_తిరుగు( 180 - ang4 - ang0/2)\n\
    p( 0, CW, side, fColors[colorlayer])\n\
    colorlayer++\n\
\n\
    ఎడమ_వైపు_తిరుగు( ang0/2)\n\
    ముందుకు_జరుగు( side)\n\
    ఎడమ_వైపు_తిరుగు( 180 - ang0)\n\
    ముందుకు_జరుగు( side)\n\
    కుడి_వైపు_తిరుగు( 180 - ang0/2)\n\
    p( 0, CW, side, fColors[colorlayer])\n\
    colorlayer++\n\
\n\
    ఎడమ_వైపు_తిరుగు( ang0/2)\n\
    ముందుకు_జరుగు( side)\n\
    ఎడమ_వైపు_తిరుగు( 180 - ang0)\n\
    ముందుకు_జరుగు( side)\n\
    కుడి_వైపు_తిరుగు( 180 - ang0/2)\n\
    p( 0, CW, side, fColors[colorlayer])\n\
    colorlayer++\n\
\n\
    ఎడమ_వైపు_తిరుగు( ang0/2)\n\
    ముందుకు_జరుగు( side)\n\
    కుడి_వైపు_తిరుగు( 180 - ang1)\n\
    ముందుకు_జరుగు( side)\n\
    కుడి_వైపు_తిరుగు( 180 - ang2 - ang2/2)\n\
    p( 2, CCW, side, fColors[colorlayer])\n\
    colorlayer++\n\
\n\
    కుడి_వైపు_తిరుగు( ang2/2)\n\
    ముందుకు_జరుగు( side)\n\
    ఎడమ_వైపు_తిరుగు( ang2/2)\n\
    p( 2, CCW, side, fColors[colorlayer])\n\
    colorlayer++\n\
\n\
    కుడి_వైపు_తిరుగు( ang2/2)\n\
    ముందుకు_జరుగు( side)\n\
    ఎడమ_వైపు_తిరుగు( ang2/2)\n\
    p( 2, CCW, side, fColors[colorlayer])\n\
    colorlayer++\n\
\n\
    కుడి_వైపు_తిరుగు( ang2/2)\n\
    ముందుకు_జరుగు( side)\n\
    ఎడమ_వైపు_తిరుగు( ang2)\n\
    ముందుకు_జరుగు( side)\n\
    ఎడమ_వైపు_తిరుగు( 180 - ang4 - ang0/2)\n\
    p( 0, CW, side, fColors[colorlayer])\n\
    colorlayer++\n\
\n\
    ఎడమ_వైపు_తిరుగు( ang0/2)\n\
    ముందుకు_జరుగు( side)\n\
    ఎడమ_వైపు_తిరుగు( 180 - ang0)\n\
    ముందుకు_జరుగు( side)\n\
    కుడి_వైపు_తిరుగు( 180 - ang0/2)\n\
    p( 0, CW, side, fColors[colorlayer])\n\
    colorlayer++\n\
\n\
    ఎడమ_వైపు_తిరుగు( ang0/2)\n\
    ముందుకు_జరుగు( side)\n\
    ఎడమ_వైపు_తిరుగు( 180 - ang0)\n\
    ముందుకు_జరుగు( side)\n\
    కుడి_వైపు_తిరుగు( 180 - ang0/2)\n\
    p( 0, CW, side, fColors[colorlayer])\n\
    colorlayer++\n\
\n\
    ఎడమ_వైపు_తిరుగు( ang0/2)\n\
    ముందుకు_జరుగు( side)\n\
    ఎడమ_వైపు_తిరుగు( 180 - ang0)\n\
    ముందుకు_జరుగు( side)\n\
    కుడి_వైపు_తిరుగు( 180 - ang0/2)\n\
    p( 0, CW, side, fColors[colorlayer])\n\
    colorlayer++\n\
\n\
    ఎడమ_వైపు_తిరుగు( ang0/2)\n\
    ముందుకు_జరుగు( side)\n\
    కుడి_వైపు_తిరుగు( 180 - ang1)\n\
    ముందుకు_జరుగు( side)\n\
    కుడి_వైపు_తిరుగు( 180 - ang2 - ang2/2)\n\
    p( 2, CCW, side, fColors[colorlayer])\n\
    colorlayer++\n\
\n\
    కుడి_వైపు_తిరుగు( ang2/2)\n\
    ముందుకు_జరుగు( side)\n\
    ఎడమ_వైపు_తిరుగు( ang2/2)\n\
    p( 2, CCW, side, fColors[colorlayer])\n\
    colorlayer++\n\
\n\
    కుడి_వైపు_తిరుగు( ang2/2)\n\
    ముందుకు_జరుగు( side)\n\
    ఎడమ_వైపు_తిరుగు( ang2/2)\n\
    p( 2, CCW, side, fColors[colorlayer])\n\
    colorlayer++\n\
\n\
    కుడి_వైపు_తిరుగు( ang2/2)\n\
    ముందుకు_జరుగు( side)\n\
    ఎడమ_వైపు_తిరుగు( ang2/2)\n\
    p( 2, CCW, side, fColors[colorlayer])\n\
    colorlayer++\n\
\n\
    // and back again\n\
    కుడి_వైపు_తిరుగు( ang2/2)\n\
    ముందుకు_జరుగు( side)\n\
    కుడి_వైపు_తిరుగు( 180 - ang3)\n\
\n\
    ముందుకు_జరుగు( side)\n\
    కుడి_వైపు_తిరుగు( 180 - ang4)\n\
    ముందుకు_జరుగు( side)\n\
\n\
    కుడి_వైపు_తిరుగు( 180 - ang0 - ang4)\n\
    ముందుకు_జరుగు( side)\n\
    కుడి_వైపు_తిరుగు( 180 - ang3 - ang3)\n\
    ముందుకు_జరుగు( side)\n\
    కుడి_వైపు_తిరుగు( 180 - ang4)\n\
    ముందుకు_జరుగు( side)\n\
\n\
    కుడి_వైపు_తిరుగు( 180 - ang0 - ang4)\n\
    ముందుకు_జరుగు( side)\n\
    కుడి_వైపు_తిరుగు( 180 - ang3 - ang3)\n\
    ముందుకు_జరుగు( side)\n\
    కుడి_వైపు_తిరుగు( 180 - ang4)\n\
    ముందుకు_జరుగు( side)\n\
\n\
    కుడి_వైపు_తిరుగు( 180 - ang0 - ang4)\n\
    ముందుకు_జరుగు( side)\n\
\n\
    కుడి_వైపు_తిరుగు( 180 - ang3 - ang1)\n\
    ముందుకు_జరుగు( side)\n\
\n\
    కుడి_వైపు_తిరుగు( 180 - ang0)\n\
    ముందుకు_జరుగు( side)\n\
    కుడి_వైపు_తిరుగు( 180 - ang4 - ang0/2)\n\
\n\
  }\n\
  \n\
}\n\
\n\
_విధానము_     ప్రదర్శన() {\n\
  ఆది_స్థితి()\n\
   చుట్టొద్దు()\n\
  size = .07* Math.min(గరిష్ఠX(), గరిష్ఠY())\n\
  hirchhorn(size)\n\
}\n\
'
home_plate_tessellation ='\
// Home Plate Tessellation -- tile a space using simple pentagon\n\
//\n\
// this pattern could be the same as a hexagonal pattern with the hexagons\n\
// split into two halves\n\
//\n\
// For more pentagonal tessellations see wikipedia\n\
\n\
colors = ["red", "white", "blue", "yellow", "green"]\n\
\n\
_విధానము_     pentUp( side, fColor) {\n\
  ఆకారము_ప్రారంభించు()\n\
  ముందుకు_జరుగు( side)\n\
  ఎడమ_వైపు_తిరుగు( 90)\n\
  ముందుకు_జరుగు( side/2)\n\
  ఎడమ_వైపు_తిరుగు( 45)\n\
  ముందుకు_జరుగు( side * .5 * Math.sqrt(2))\n\
  ఎడమ_వైపు_తిరుగు( 90)\n\
  ముందుకు_జరుగు( side * .5 * Math.sqrt(2))\n\
  ఎడమ_వైపు_తిరుగు( 45)\n\
  ముందుకు_జరుగు( side/2)\n\
  ఎడమ_వైపు_తిరుగు(90)\n\
  ఆకారము_ముగించు( fColor)\n\
}\n\
\n\
\n\
_విధానము_     pentDown( side, fColor) {\n\
  ఆకారము_ప్రారంభించు()\n\
  ముందుకు_జరుగు( side)\n\
  కుడి_వైపు_తిరుగు( 90)\n\
  ముందుకు_జరుగు( side/2)\n\
  కుడి_వైపు_తిరుగు( 45)\n\
  ముందుకు_జరుగు( side * .5 * Math.sqrt(2))\n\
  కుడి_వైపు_తిరుగు( 90)\n\
  ముందుకు_జరుగు( side * .5 * Math.sqrt(2))\n\
  కుడి_వైపు_తిరుగు( 45)\n\
  ముందుకు_జరుగు( side/2)\n\
  కుడి_వైపు_తిరుగు(90)\n\
  ఆకారము_ముగించు( fColor)\n\
}\n\
\n\
\n\
// nextColor could be completely random, if desired\n\
_విధానము_     nextColor() { \n\
  c = colors[ count % colors.length]\n\
  count = count + 1\n\
  _ఫలము_  c\n\
}\n\
\n\
_విధానము_     ప్రదర్శన() {\n\
  ఆది_స్థితి()\n\
  count = 0\n\
  s = 50\n\
  rowOffset = s/3 // offset between rows\n\
   చుట్టొద్దు()\n\
  స్థానము_మార్చు(కనిష్ఠX(), గరిష్ఠY())\n\
  కుడి_వైపు_తిరుగు( 90)\n\
\n\
  s = 50\n\
  while (కుంచిక.స్థానము.y > కనిష్ఠY()) {\n\
  while (కుంచిక.స్థానము.x < గరిష్ఠX()) {\n\
    pentDown(s, nextColor())\n\
    ముందుకు_జరుగు(s)\n\
  }\n\
  కుడి_వైపు_తిరుగు(90)\n\
  ముందుకు_జరుగు( 3/2*s)\n\
  కుడి_వైపు_తిరుగు(90)\n\
  వెనుకకు_జరుగు(s/2)\n\
  while (కుంచిక.స్థానము.x > కనిష్ఠX()) {\n\
    pentDown(s, nextColor())\n\
    ముందుకు_జరుగు(s)\n\
  }\n\
  ఎడమ_వైపు_తిరుగు(180)\n\
  }\n\
}\n\
'
icosahedron_graph ='\
// Icosahedron Graph -- draw a two-dimensional graph of an icodahedron\n\
// graph here describes the connections between vertices, more at\n\
// Wikipedia.com\n\
\n\
_విధానము_     pent(side) {\n\
  // the below side variable are doing trigonometry without\n\
  // the trig functions. Values found emperically.\n\
  _సర్వత్ర_   angle2=180-(180-72)/2\n\
  _సర్వత్ర_   side2 = 1.18*side\n\
  _సర్వత్ర_   angle3 = 60\n\
  _సర్వత్ర_   side3 = side2\n\
  _సర్వత్ర_   angle4 = 156.5\n\
  _సర్వత్ర_   side4 = 2.15 * side\n\
  _సర్వత్ర_   angle5 = 31\n\
  _సర్వత్ర_   side5 = 1.27 * side\n\
  for (_సర్వత్ర_   i=0; i<5; i++) {\n\
    రంగు_మార్చు("నలుపు")\n\
    ముందుకు_జరుగు(side)\n\
      ఎడమ_వైపు_తిరుగు(angle2)\n\
\n\
      రంగు_మార్చు( ఎరుపు )\n\
      కుడి_వైపు_తిరుగు(angle3)\n\
      ముందుకు_జరుగు(side3)\n\
      వెనుకకు_జరుగు(side3)\n\
      ఎడమ_వైపు_తిరుగు(angle3)\n\
\n\
      రంగు_మార్చు("నలుపు")\n\
      ముందుకు_జరుగు(side2)\n\
\n\
      రంగు_మార్చు( నీలము )\n\
      కుడి_వైపు_తిరుగు(180-angle3)\n\
      ముందుకు_జరుగు(side3)\n\
\n\
        ఎడమ_వైపు_తిరుగు(angle4)\n\
\n\
        కుడి_వైపు_తిరుగు(angle5)\n\
        ముందుకు_జరుగు(side5)\n\
        వెనుకకు_జరుగు(side5)\n\
        ఎడమ_వైపు_తిరుగు(angle5)\n\
\n\
        ముందుకు_జరుగు(side4)\n\
 \n\
        కుడి_వైపు_తిరుగు(180-angle5)\n\
        ముందుకు_జరుగు(side5)\n\
        వెనుకకు_జరుగు(side5)\n\
        ఎడమ_వైపు_తిరుగు(180-angle5)\n\
\n\
\n\
        వెనుకకు_జరుగు(side4)\n\
        కుడి_వైపు_తిరుగు(angle4)\n\
\n\
      వెనుకకు_జరుగు(side3)\n\
      ఎడమ_వైపు_తిరుగు(180-angle3)\n\
\n\
      రంగు_మార్చు("నలుపు")\n\
      వెనుకకు_జరుగు(side2)\n\
      కుడి_వైపు_తిరుగు(angle2)\n\
\n\
    వెనుకకు_జరుగు(side)\n\
    turn(72)\n\
  }\n\
  వృత్తము(2.13*side)\n\
}\n\
\n\
_విధానము_     ప్రదర్శన() {\n\
  ఆది_స్థితి()\n\
  size = .4 * Math.min( గరిష్ఠX(), గరిష్ఠY())\n\
  //స్థానము_మార్చు(-50,-22)\n\
  //కుడి_వైపు_తిరుగు(17)\n\
  pent(size)\n\
  కుంచికను_దాచు()\n\
}\n\
'
intersection_simulator ='\
// Intersection Simulator -- simulates a traffic intersection and its lights\n\
/*\n\
current problems to be fixed\n\
 - turn green not extending\n\
*/\n\
/*\n\
Simple Traffic Light Simulator\n\
\n\
This simulates a set of traffic lights at an intersection.\n\
There are sets of lights for each direction: north, south, east, west.\n\
Each set of lights includes:\n\
  - the green, yellow, and red lights for the main traffic flow\n\
  - the green, yellow, and red left turn arrows\n\
  - a green Walk and red Don\'t Walk signs\n\
  \n\
The location of the signal display is as follows:\n\
       w |N|\n\
       m | |\n\
       l | |\n\
       W | | N lmw\n\
---------------------\n\
W                   E\n\
---------------------\n\
   wml S | | E\n\
         | | l\n\
         | | m\n\
         |S| w\n\
where N, S, E, W indicates the direction of travel\n\
      l is the left turn signal\n\
      m is the main traffic signal\n\
      w is the walk signal\n\
\n\
\n\
rules for lights\n\
  \n\
basic duration rules\n\
  flashing don\'t walk duration is fixed\n\
    let those crossing get across but no new starts\n\
  yellow has a fixed duration (for this simulation, it could vary based on insection size)\n\
  green duration can be extended based on queued traffid\n\
  number unqueued is dependent on duration of green\n\
  green has a maximum duration (see next)\n\
  periodically allow cross traffic, even if not seen\n\
  periodically allow turn traffic, even if not seen \n\
  lights flash 1/2 sec on, 1/2 sec off -- not implemented yet\n\
  don\'t want to cut off flashing -- not implemented yet\n\
  east and west greens (and walks) set together, except turns\n\
  north and south greens (and walks) set together, except turns\n\
  lights are protected from cross traffic with guard times\n\
  while a queue is implemented as in integer, it is treated as a binary for modeling purposes\n\
    to emulate a simple loop detector\n\
  \n\
 traffic arrivals\n\
   independent random intervals for E, W, N, S cars, left turns and people\n\
\n\
 events (one direction)\n\
  lights normally procede from red to green to yellow and back to red\n\
  lights may flash red -- not implemented yet\n\
  start of extendable green time\n\
  end of turn guard time\n\
  end of main guard time\n\
*/\n\
\n\
//**** GLOBALS ****\n\
// reporting and debug constants\n\
_సర్వత్ర_   NO_MESSAGES =      0;\n\
_సర్వత్ర_   QUEUE_MESSAGES =   1;\n\
_సర్వత్ర_   OVERALL_MESSAGES = 2;\n\
_సర్వత్ర_   STATE_MESSAGES =   3;\n\
_సర్వత్ర_   EVENT_MESSAGES =   4;\n\
_సర్వత్ర_   DEBUG_LEVEL = QUEUE_MESSAGES;\n\
\n\
// drawing constants\n\
_సర్వత్ర_   roadWidth = 80;\n\
_సర్వత్ర_   crossWalkWidth = 8;\n\
_సర్వత్ర_   stopLineSeparation = 4;\n\
_సర్వత్ర_   stopLineWidth = 2;\n\
\n\
// light states\n\
_సర్వత్ర_   red = "red";\n\
_సర్వత్ర_   green = "green";\n\
_సర్వత్ర_   yellow = "yellow";\n\
\n\
// light types\n\
_సర్వత్ర_   main = "main";\n\
_సర్వత్ర_   leftTurn = "leftTurn";\n\
_సర్వత్ర_   walk = "walk";\n\
\n\
// light duration constants\n\
// all of the below times are in milliseconds\n\
_సర్వత్ర_   minimumGreenDuration =      5 * 1000;\n\
_సర్వత్ర_   maximumGreenDuration =     30 * 1000;\n\
_సర్వత్ర_   mainPerCar =              1.5 * 1000;\n\
_సర్వత్ర_   yellowDuration =            5 * 1000;\n\
_సర్వత్ర_   mainGuardDuration =         1 * 1000;\n\
\n\
_సర్వత్ర_   minimumTurnDuration =       4 * 1000;\n\
_సర్వత్ర_   maximumTurnDuration =      20 * 1000;\n\
_సర్వత్ర_   turnPerCar =                2 * 1000;\n\
_సర్వత్ర_   turnGuardDuration =         1 * 1000;\n\
\n\
_సర్వత్ర_   minimumGreenWalkDuration =  4 * 1000;\n\
_సర్వత్ర_   ewWalkDuration =           20 * 1000;\n\
_సర్వత్ర_   nsWalkDuration =           25 * 1000;\n\
\n\
_సర్వత్ర_   extendDuration =            1 * 1000;\n\
_సర్వత్ర_   extendDelayDuration =       3 * 1000; // must be less than minimum green duration and minimum walk duration\n\
_సర్వత్ర_   extendDelayDuration = Math.min (minimumGreenWalkDuration, minimumGreenDuration) - .5 * 1000; // must be less than minimum green duration and minimum walk duration\n\
\n\
// light data structures (object)\n\
\n\
_విధానము_     Light(id, type, aveArrivalTime, aveDepartureTime) {\n\
    // create a Light object\n\
    this.id = id;\n\
    this.type = type;\n\
    this.state = red;\n\
    this.queue = [];\n\
    this.aveArrivalTime = aveArrivalTime;\n\
    this.aveDepartureTime = aveDepartureTime;\n\
    this.nextArrivalTime = undefined;\n\
    this.nextDepartureTime = undefined;\n\
    this.nextTime = undefined;\n\
    this.maxNextTime = undefined;\n\
    this.nextState = "turnRed";\n\
}\n\
\n\
//  milliseconds per hour / arrivals per hour = ave milliseconds /arrival\n\
//                  id       type, ave arrival time per hour, ave departure msec\n\
_సర్వత్ర_   ebMain = new Light("ebMain", main,     3600000 / 600, 1200);\n\
_సర్వత్ర_   ebTurn = new Light("ebTurn", leftTurn, 3600000 / 300, 1700);\n\
_సర్వత్ర_   ebWalk = new Light("ebWalk", walk,     3600000 /  25,    0);\n\
_సర్వత్ర_   wbMain = new Light("wbMain", main,     3600000 / 600, 1200);\n\
_సర్వత్ర_   wbTurn = new Light("wbTurn", leftTurn, 3600000 / 300, 1700);\n\
_సర్వత్ర_   wbWalk = new Light("wbWalk", walk,     3600000 /  25,    0);\n\
_సర్వత్ర_   nbMain = new Light("nbMain", main,     3600000 / 600, 1200);\n\
_సర్వత్ర_   nbTurn = new Light("nbTurn", leftTurn, 3600000 / 300, 1700);\n\
_సర్వత్ర_   nbWalk = new Light("nbWalk", walk,     3600000 /  25,    0);\n\
_సర్వత్ర_   sbMain = new Light("sbMain", main,     3600000 / 600, 1200);\n\
_సర్వత్ర_   sbTurn = new Light("sbTurn", leftTurn, 3600000 / 300, 1700);\n\
_సర్వత్ర_   sbWalk = new Light("sbWalk", walk,     3600000 /  25,    0);\n\
\n\
\n\
_విధానము_     testRates () {\n\
  // testRates -- test assumptions to see if they can handle the indicated traffic\n\
  _సర్వత్ర_   totalCycleTime = 2 * (Math.max( maximumGreenDuration + yellowDuration + mainGuardDuration,\n\
                              minimumGreenWalkDuration + ewWalkDuration + mainGuardDuration) +\n\
                            maximumTurnDuration + yellowDuration + turnGuardDuration);\n\
  \n\
  testRate (nbMain);\n\
  testRate (nbWalk);\n\
  testRate (nbTurn);\n\
  testRate (sbMain);\n\
  testRate (sbWalk);\n\
  testRate (sbTurn);\n\
  testRate (ebMain);\n\
  testRate (ebWalk);\n\
  testRate (ebTurn);\n\
  testRate (wbMain);\n\
  testRate (wbWalk);\n\
  testRate (wbTurn);\n\
\n\
  _విధానము_     testRate (signal) {\n\
    // testRate -- test assumptions to see if a signal can handle the indicated traffic\n\
  \n\
    _సర్వత్ర_   cycleArrivalRate = totalCycleTime / signal.aveArrivalTime;\n\
    if (signal.type === leftTurn) {\n\
      _సర్వత్ర_   cycleDepartureRate = maximumTurnDuration / signal.aveDepartureTime;\n\
    } else if (signal.type === main) {\n\
      _సర్వత్ర_   cycleDepartureRate = maximumGreenDuration / signal.aveDepartureTime;\n\
    } else { // assume walkers\n\
      _సర్వత్ర_   cycleDepartureRate = 10000; // assuming no walker delay or congestion\n\
    }\n\
    if (cycleArrivalRate > .90 * cycleDepartureRate) {\n\
      throw "Cycle arrival rate exceeded departure rate for " + signal.id;\n\
    }\n\
  }\n\
}\n\
\n\
testRates();\n\
\n\
//**** FUNCTIONS ****\n\
\n\
//** Drawing functions **\n\
_విధానము_     drawEWstreet() {\n\
   చుట్టొద్దు();\n\
  స్థానము_మార్చు(కనిష్ఠX(),0);\n\
  కోణము(90);\n\
  కుంచికను_కింద_పెట్టు();\n\
  రంగు_మార్చు("నలుపు");\n\
  వెడల్పు(roadWidth);\n\
  ముందుకు_జరుగు(గరిష్ఠX() + గరిష్ఠX());\n\
}\n\
\n\
_విధానము_     drawNSstreet() {\n\
  స్థానము_మార్చు(0,గరిష్ఠY());\n\
  కోణము(180);\n\
  కుంచికను_కింద_పెట్టు();\n\
  రంగు_మార్చు("నలుపు");\n\
  వెడల్పు(roadWidth);\n\
  ముందుకు_జరుగు(గరిష్ఠY() + గరిష్ఠY());\n\
}\n\
\n\
_విధానము_     drawEWstripe() {\n\
  స్థానము_మార్చు(కనిష్ఠX(),0);\n\
  కోణము(90);\n\
  రంగు_మార్చు( పసుపు );\n\
  వెడల్పు(1);\n\
  ముందుకు_జరుగు(గరిష్ఠX() - roadWidth / 2 - crossWalkWidth);\n\
  కుంచికను_పైకి_ఎత్తు();\n\
  ముందుకు_జరుగు(roadWidth + 2 * crossWalkWidth);\n\
  కుంచికను_కింద_పెట్టు();\n\
  ముందుకు_జరుగు(గరిష్ఠX() - roadWidth / 2 - crossWalkWidth);\n\
}\n\
\n\
_విధానము_     drawNSstripe() {\n\
  స్థానము_మార్చు(0,గరిష్ఠY());\n\
  కోణము(180);\n\
  రంగు_మార్చు( పసుపు );\n\
  వెడల్పు(1);\n\
  ముందుకు_జరుగు(గరిష్ఠY() - roadWidth / 2 - crossWalkWidth);\n\
  కుంచికను_పైకి_ఎత్తు();\n\
  ముందుకు_జరుగు(roadWidth + 2 * crossWalkWidth);\n\
  కుంచికను_కింద_పెట్టు();\n\
  ముందుకు_జరుగు(గరిష్ఠY() - roadWidth / 2 - crossWalkWidth);\n\
}\n\
\n\
_విధానము_     drawCrossWalk(x, y, dir) {\n\
  // draw stripes for a crosswalk\n\
  // x,y is coordinates of travel side of road\n\
  // dir is direction across road\n\
    \n\
  // draw inner cross walk line\n\
  రంగు_మార్చు( తెలుపు );\n\
  స్థానము_మార్చు(x, y);\n\
  కోణము(dir);\n\
  వెడల్పు(1);\n\
  కుంచికను_కింద_పెట్టు();\n\
  ముందుకు_జరుగు(roadWidth);\n\
    \n\
  // draw outer cross walk line\n\
  కుంచికను_పైకి_ఎత్తు();\n\
  ఎడమ_వైపు_తిరుగు(90);\n\
  ముందుకు_జరుగు(crossWalkWidth);\n\
  ఎడమ_వైపు_తిరుగు(90);\n\
  కుంచికను_కింద_పెట్టు();\n\
  ముందుకు_జరుగు(roadWidth);\n\
    \n\
  // draw stop line\n\
  కుంచికను_పైకి_ఎత్తు();\n\
  కుడి_వైపు_తిరుగు(90);\n\
  ముందుకు_జరుగు(stopLineSeparation);\n\
  కుడి_వైపు_తిరుగు(90);\n\
  ముందుకు_జరుగు(2);\n\
  వెడల్పు(stopLineWidth);\n\
  కుంచికను_కింద_పెట్టు();\n\
  ముందుకు_జరుగు(roadWidth / 2 - 4);\n\
  వెడల్పు(1);\n\
}\n\
\n\
_విధానము_     drawTurnArrow(x, y, dir) {\n\
  కుంచికను_దాచు();\n\
  స్థానము_మార్చు(x,y);\n\
  కోణము (dir);\n\
  కుంచికను_కింద_పెట్టు();\n\
  రంగు_మార్చు( తెలుపు );\n\
  వెడల్పు(5);\n\
  ముందుకు_జరుగు(5);\n\
  ఎడమవైపు_చాపాము(5,90);\n\
  ముందుకు_జరుగు(4);\n\
  వెడల్పు(2);\n\
  ఎడమ_వైపు_తిరుగు(130);\n\
  ముందుకు_జరుగు(5);\n\
  కుడి_వైపు_తిరుగు(160);\n\
  ముందుకు_జరుగు(9);\n\
  కుడి_వైపు_తిరుగు(120);\n\
  ముందుకు_జరుగు(9);\n\
  కుడి_వైపు_తిరుగు(160);\n\
  ముందుకు_జరుగు(5);\n\
}\n\
  \n\
\n\
_విధానము_     drawStreets() {\n\
  drawNSstreet();\n\
  drawEWstreet();\n\
\n\
  drawNSstripe();\n\
  drawEWstripe();\n\
\n\
  drawTurnArrow(-18,75,180);\n\
  drawTurnArrow(-75,-18,90);\n\
  drawTurnArrow(18,-75,0);\n\
  drawTurnArrow(75,18,270);\n\
\n\
  drawCrossWalk( roadWidth / 2,  roadWidth / 2, 180 );\n\
  drawCrossWalk( roadWidth / 2, -roadWidth / 2, 270 );\n\
  drawCrossWalk(-roadWidth / 2, -roadWidth / 2, 0 );\n\
  drawCrossWalk(-roadWidth / 2,  roadWidth / 2, 90 );\n\
}\n\
\n\
//** Light Drawing Functions **\n\
\n\
_విధానము_     setLightColor(lightColor, stateColor) {\n\
  _సర్వత్ర_   signalBackground = "lightgray"; // color of an "off" signal light\n\
  if (lightColor === stateColor) {\n\
    రంగు_మార్చు(lightColor);\n\
  } else {\n\
    రంగు_మార్చు(signalBackground);\n\
  }\n\
}\n\
\n\
_విధానము_     drawArrow() { // assume pointing up, color set and pen up\n\
  _సర్వత్ర_   penWidth = కుంచిక.వెడల్పు;\n\
  _సర్వత్ర_   arrowSize = 8;\n\
  _సర్వత్ర_   vertOffset = 5;\n\
  వెనుకకు_జరుగు(vertOffset);\n\
  కుంచికను_కింద_పెట్టు();\n\
  వెడల్పు(3);\n\
  ఎడమ_వైపు_తిరుగు(45);\n\
  ముందుకు_జరుగు(arrowSize);\n\
  కుడి_వైపు_తిరుగు(90);\n\
  ముందుకు_జరుగు(arrowSize);\n\
  కుంచికను_పైకి_ఎత్తు();\n\
  వెనుకకు_జరుగు(arrowSize);\n\
  ఎడమ_వైపు_తిరుగు(90);\n\
  వెనుకకు_జరుగు(arrowSize);\n\
  కుడి_వైపు_తిరుగు(45);\n\
  వెడల్పు(penWidth);\n\
  ముందుకు_జరుగు(vertOffset);\n\
}\n\
\n\
_విధానము_     drawTurnSignal(state) {\n\
  ఎడమ_వైపు_తిరుగు(90);\n\
  ముందుకు_జరుగు(13);\n\
  setLightColor("green", state);\n\
  drawArrow();\n\
\n\
  వెనుకకు_జరుగు(13);\n\
  setLightColor("yellow", state);\n\
  drawArrow();\n\
\n\
  వెనుకకు_జరుగు(13);\n\
  setLightColor("red", state);\n\
  drawArrow();\n\
\n\
  ముందుకు_జరుగు(13);\n\
  కుడి_వైపు_తిరుగు(90);\n\
}\n\
\n\
_విధానము_     drawMainSignal(state) { // main signal is straight ahead\n\
  ఎడమ_వైపు_తిరుగు(90);\n\
  ముందుకు_జరుగు(13);\n\
  setLightColor("green", state);\n\
  నిండు_వృత్తము();\n\
\n\
  వెనుకకు_జరుగు(13);\n\
  setLightColor("yellow", state);\n\
  నిండు_వృత్తము();\n\
\n\
  వెనుకకు_జరుగు(13);\n\
  setLightColor("red", state);\n\
  నిండు_వృత్తము();\n\
\n\
  ముందుకు_జరుగు(13);\n\
  కుడి_వైపు_తిరుగు(90);\n\
}\n\
\n\
_విధానము_     drawWalkSignal(state) {\n\
  // should do the flashing red for don\'t start\n\
  // could do the flash down counter\n\
  setLightColor("green", state);\n\
  ఎడమ_వైపు_తిరుగు(90);\n\
  ముందుకు_జరుగు(5);\n\
  కుడి_వైపు_తిరుగు(90);\n\
  వ్రాయి("WALK");\n\
\n\
  ఎడమ_వైపు_తిరుగు(90);\n\
  వెనుకకు_జరుగు(5);\n\
  కుడి_వైపు_తిరుగు(90);\n\
  setLightColor("red", state);\n\
  if (state === "yellow") {\n\
    రంగు_మార్చు( పసుపు )\n\
  }\n\
  కుడి_వైపు_తిరుగు(90);\n\
  ముందుకు_జరుగు(8);\n\
  ఎడమ_వైపు_తిరుగు(90);\n\
  వ్రాయి("DONT");\n\
\n\
  కుడి_వైపు_తిరుగు(90);\n\
  ముందుకు_జరుగు(13);\n\
  ఎడమ_వైపు_తిరుగు(90);\n\
  వ్రాయి("WALK");\n\
\n\
  కుడి_వైపు_తిరుగు(90);\n\
  వెనుకకు_జరుగు(25);\n\
  ఎడమ_వైపు_తిరుగు(90);\n\
}\n\
\n\
_విధానము_     drawSignal(x, y, orient, mainState, turnState, walkState) {\n\
  // move కుంచిక to position and కోణము depending on street direction\n\
  స్థానము_మార్చు(x, y);\n\
  కోణము(orient);\n\
  drawTurnSignal(turnState);\n\
\n\
  ముందుకు_జరుగు(10);\n\
  drawMainSignal(mainState);\n\
\n\
  ముందుకు_జరుగు(10);\n\
  drawWalkSignal(walkState);\n\
}\n\
\n\
_విధానము_     drawSignals() {\n\
  drawSignal( 50,  65,  90, nbMain.state, nbTurn.state, nbWalk.state);\n\
  drawSignal(-50, -65, 270, sbMain.state, sbTurn.state, sbWalk.state);\n\
  drawSignal( 65, -50, 180, ebMain.state, ebTurn.state, ebWalk.state);\n\
  drawSignal(-65,  50,   0, wbMain.state, wbTurn.state, wbWalk.state);\n\
}\n\
\n\
\n\
_విధానము_     printQueues () {\n\
  console.log (currentSecs +\n\
               " Northbound main: " + nbMain.queue.length +\n\
               ", turn: " +           nbTurn.queue.length +\n\
               ", walk: " +           nbWalk.queue.length + \n\
               " Southbound main: " + sbMain.queue.length +\n\
               ", turn: " +           sbTurn.queue.length +\n\
               ", walk: " +           sbWalk.queue.length);\n\
\n\
  console.log (currentSecs +\n\
               " Eastbound main: " +  ebMain.queue.length +\n\
               ", turn: " +           ebTurn.queue.length +\n\
               ", walk: " +           ebWalk.queue.length +\n\
               " Westbound main: " +  wbMain.queue.length +\n\
               ", turn: " +           wbTurn.queue.length +\n\
               ", walk: " +           wbWalk.queue.length);\n\
}\n\
\n\
\n\
_విధానము_     writeQueues () {\n\
  writeQueueSizes(55,  -గరిష్ఠY()+5,  0, "N",\n\
    nbTurn.queue.length, nbMain.queue.length, nbWalk.queue.length);\n\
  writeQueueSizes(-68,  గరిష్ఠY()-20, 0, "S",\n\
    sbTurn.queue.length, sbMain.queue.length, sbWalk.queue.length);\n\
  writeQueueSizes(-గరిష్ఠX()+5, -55, 90, "E",\n\
    ebTurn.queue.length, ebMain.queue.length, ebWalk.queue.length);\n\
  writeQueueSizes( గరిష్ఠX()-20, 68, 90, "W",\n\
    wbTurn.queue.length, wbMain.queue.length, wbWalk.queue.length);\n\
}\n\
\n\
_విధానము_     writeQueueSizes(x, y, orientation, dir, turn, main, walk) {\n\
//write the number waiting for each signal\n\
//  x is the x position of the text start\n\
//  y is the y position of the text start\n\
//  orientation is the direction of the text\n\
//  dir is directon of traffic\n\
//  turn is the turn light queue\n\
//  main is the main light queue\n\
//  walk is the walk light queue\n\
  స్థానము_మార్చు(x,y)\n\
  కోణము(orientation)\n\
/*\n\
  if (dir === "N") {\n\
    స్థానము_మార్చు(55,-గరిష్ఠY()+5);\n\
    కోణము(0);\n\
  } else if (dir === "S") {\n\
    స్థానము_మార్చు(-68,గరిష్ఠY()-20);\n\
    కోణము(0);\n\
  } else if (dir === "E") {\n\
    స్థానము_మార్చు(-గరిష్ఠX()+5, -55);\n\
    కోణము(90);\n\
  } else if (dir === "W") {\n\
    స్థానము_మార్చు(గరిష్ఠX()-20, 68);\n\
    కోణము(90);\n\
  } else {\n\
    స్థానము_మార్చు(-200,200);\n\
    కోణము(90);\n\
  }\n\
*/\n\
  వెడల్పు(1);\n\
  రంగు_మార్చు("నలుపు");\n\
  if (dir === "S" || dir === "W") { // South and West are in opposite order\n\
    వ్రాయి(walk);\n\
  } else {\n\
    వ్రాయి(turn);\n\
  }\n\
\n\
  కుడి_వైపు_తిరుగు(90);\n\
  ముందుకు_జరుగు(12);\n\
  ఎడమ_వైపు_తిరుగు(90);\n\
  వ్రాయి(main);\n\
\n\
  కుడి_వైపు_తిరుగు(90);\n\
  ముందుకు_జరుగు(12);\n\
  ఎడమ_వైపు_తిరుగు(90);\n\
  if (dir === "S" || dir === "W") {\n\
    వ్రాయి(turn);\n\
  } else {\n\
    వ్రాయి(walk);\n\
  }\n\
  వ్రాయి("     " + dir); // debug statement\n\
}\n\
\n\
_విధానము_     drawQueues() {\n\
  //SB\n\
  drawQueue( -10,   55,   0, sbTurn.queue, 12);\n\
  drawQueue( -30,   55,   0, sbMain.queue, 12);\n\
  drawQueue( -50,  105,   0, sbWalk.queue,  6);\n\
\n\
  //WB\n\
  drawQueue(  55,   10,  90, wbTurn.queue, 12);\n\
  drawQueue(  55,   30,  90, wbMain.queue, 12);\n\
  drawQueue( 105,   50,  90, wbWalk.queue,  6);\n\
\n\
  //NB\n\
  drawQueue(  10,  -55, 180, nbTurn.queue, 12);\n\
  drawQueue(  30,  -55, 180, nbMain.queue, 12);\n\
  drawQueue(  50, -105, 180, nbWalk.queue,  6);\n\
\n\
  //EB\n\
  drawQueue( -55,  -10, 270, ebTurn.queue, 12);\n\
  drawQueue( -55,  -30, 270, ebMain.queue, 12);\n\
  drawQueue(-105,  -50, 270, ebWalk.queue,  6);\n\
}\n\
\n\
_విధానము_     drawQueue(x, y, dir, queue, len) {\n\
  స్థానము_మార్చు(x, y);\n\
  కోణము(dir);\n\
  వెడల్పు(10);\n\
  for (_సర్వత్ర_   i=0; i<queue.length; i++) {\n\
    కుంచికను_కింద_పెట్టు();\n\
    రంగు_మార్చు(queue[i].color);\n\
    ముందుకు_జరుగు(len); \n\
    కుంచికను_పైకి_ఎత్తు();\n\
    ముందుకు_జరుగు(4);\n\
  }\n\
}\n\
\n\
//** Safety Functions **\n\
\n\
_విధానము_     safetyCheck() {\n\
/*\n\
 safetyCheck makes sure that traffic is not allowed in cross\n\
 directions (even if a programmer made an error)\n\
 \n\
 no cross traffic is allowed for any green or yellow light\n\
\n\
*/\n\
  _సర్వత్ర_   fault = false;\n\
  if ( (ebMain.state === green || ebMain.state === yellow ||\n\
        ebWalk.state === green || ebWalk.state === yellow) &&\n\
       !(nbMain.state === red && sbMain.state === red &&\n\
         nbTurn.state === red && sbTurn.state === red &&\n\
         wbTurn.state === red) ) {\n\
    console.log (currentSecs + " East bound main or walk conflict");\n\
    fault = true;\n\
  }\n\
  if ( (wbMain.state === green || wbMain.state === yellow ||\n\
        wbWalk.state === green || wbWalk.state === yellow) &&\n\
       !(nbMain.state === red && sbMain.state === red &&\n\
         nbTurn.state === red && sbTurn.state === red &&\n\
         ebTurn.state === red) ) {\n\
    console.log (currentSecs + " West bound main or walk conflict");\n\
    fault = true;\n\
  }\n\
  if ( (ebTurn.state === green || ebTurn.state === yellow) &&\n\
       !(nbMain.state === red && sbMain.state === red &&\n\
         nbTurn.state === red && sbTurn.state === red &&\n\
         wbMain.state === red) ) {\n\
    console.log (currentSecs + " East bound turn conflict");\n\
    fault = true;\n\
  }\n\
  if ( (wbTurn.state === green || wbTurn.state === yellow) &&\n\
       !(nbMain.state === red && sbMain.state === red &&\n\
         nbTurn.state === red && sbTurn.state === red &&\n\
         ebMain.state === red) ) {\n\
    console.log (currentSecs + " West bound turn conflict");\n\
    fault = true;\n\
  }\n\
  \n\
  if ( (nbMain.state === green || nbMain.state === yellow ||\n\
        nbWalk.state === green || nbWalk.state === yellow) &&\n\
       !(ebMain.state === red && wbMain.state === red &&\n\
         ebTurn.state === red && wbTurn.state === red &&\n\
         sbTurn.state === red) ) {\n\
    console.log (currentSecs + " North bound main or walk conflict");\n\
    fault = true;\n\
  }\n\
  if ( (sbMain.state === green || sbMain.state === yellow ||\n\
        sbWalk.state === green || sbWalk.state === yellow) &&\n\
       !(ebMain.state === red && wbMain.state === red &&\n\
         ebTurn.state === red && wbTurn.state === red &&\n\
         nbTurn.state === red) ) {\n\
    console.log (currentSecs + " South bound main or walk conflict");\n\
    fault = true;\n\
  }\n\
  if ( (nbTurn.state === green || nbTurn.state === yellow) &&\n\
       !(ebMain.state === red && wbMain.state === red &&\n\
         ebTurn.state === red && wbTurn.state === red &&\n\
         sbMain.state === red) ) {\n\
    console.log (currentSecs + " North bound turn conflict");\n\
    fault = true;\n\
  }\n\
  if ( (sbTurn.state === green || sbTurn.state === yellow) &&\n\
       !(ebMain.state === red && wbMain.state === red &&\n\
         ebTurn.state === red && wbTurn.state === red &&\n\
         nbMain.state === red) ) {\n\
    console.log (currentSecs + " South bound turn conflict");\n\
    fault = true;\n\
  }\n\
  \n\
  if (fault) {\n\
    /*\n\
state s/b flashing red all around, may restart after a time\n\
    turnFlashingRed(ebMain, -1);\n\
    turnFlashingRed(ebTurn, -1);\n\
    turnFlashingRed(ebWalk, -1);\n\
    turnFlashingRed(wbMain, -1);\n\
    turnFlashingRed(wbTurn, -1);\n\
    turnFlashingRed(wbWalk, -1);\n\
    turnFlashingRed(nbMain, -1);\n\
    turnFlashingRed(nbTurn, -1);\n\
    turnFlashingRed(nbWalk, -1);\n\
    turnFlashingRed(sbMain, -1);\n\
    turnFlashingRed(sbTurn, -1);\n\
    turnFlashingRed(sbWalk, -1);\n\
     */\n\
    throw "safety fault";\n\
  }\n\
}\n\
\n\
// ** Light State Machines and Functions ***\n\
// the light state machines advances the light from one state to the next\n\
// usually based on the expiry of a timer, but may change due to a callback\n\
\n\
_సర్వత్ర_   baseTime;\n\
_విధానము_     msToSec(msecs) {\n\
  if (baseTime === undefined) {\n\
    baseTime = msecs;\n\
  }\n\
  _ఫలము_  (msecs - baseTime) % 1000000/1000;\n\
}\n\
\n\
_విధానము_     logEvent (id, eventName, duration) {\n\
  if (duration === undefined) {\n\
    duration =  "undefined"\n\
  } else {\n\
    duration = (duration/1000) + " secs"; // convert from msec to seconds\n\
  }\n\
  if (DEBUG_LEVEL >= EVENT_MESSAGES) {\n\
    console.log(currentSecs.toFixed(3) + "     " + id + " turned " + eventName + " for " + duration);\n\
  }\n\
}\n\
\n\
_విధానము_     turnGreen(signal, duration) {\n\
  logEvent (signal.id, "green", duration)\n\
  signal.state = green;\n\
  greenCount = greenCount + 1;\n\
  if (signal.type === main) {\n\
    signal.nextState = "extendGreen";\n\
  } else if (signal.type === turn) {\n\
    signal.nextState = "extendTurn";\n\
  } else {\n\
    signal.nextState = "turnYellow";\n\
  }\n\
  signal.nextTime = currentTime + duration;\n\
}\n\
\n\
_విధానము_     extendTurn (signal, duration) {\n\
  logEvent (signal.id, "extendTurn", duration);\n\
  signal.nextState = "extendTurn";\n\
  signal.nextTime = currentTime + duration;\n\
}\n\
\n\
_విధానము_     extendGreen(signal, duration) {\n\
  logEvent (signal.id, "extending green", duration)\n\
  // signal should already be green, assume no extension, so ignor duration\n\
  signal.nextState = "turnYellow";\n\
  if (duration === undefined || duration < 0) {\n\
    signal.nextTime = undefined;\n\
  } else {\n\
    signal.nextTime = currentTime + duration;\n\
  }\n\
}\n\
\n\
_విధానము_     turnYellow(signal, duration) {\n\
  logEvent (signal.id, "yellow", duration)\n\
  signal.state = yellow;\n\
  signal.nextState = "turnRed";\n\
  signal.nextTime = currentTime + duration;\n\
}\n\
\n\
_విధానము_     turnRed(signal, duration) {\n\
  logEvent (signal.id, "red", duration)\n\
  signal.state = red;\n\
  signal.nextState = "turnGuardRed";\n\
  if (duration === undefined || duration < 0) {\n\
    signal.nextTime = undefined;\n\
  } else {\n\
    signal.nextTime = currentTime + duration;\n\
  }\n\
}\n\
\n\
_విధానము_     turnGuardRed(signal, duration) {\n\
  logEvent (signal.id, "guard red", duration)\n\
  signal.state = red;\n\
  signal.nextState = "turnGreen";\n\
  if (duration === undefined || duration < 0) {\n\
    signal.nextTime = undefined;\n\
  } else {\n\
    signal.nextTime = currentTime + duration;\n\
  }\n\
}\n\
\n\
_విధానము_     turnFlashingRed(signal, duration) {\n\
  logEvent (signal.id, "flashing red", duration)\n\
  signal.state = red;\n\
  signal.nextState = "turnGreen";\n\
  if (duration === undefined || duration < 0) {\n\
    signal.nextTime = undefined;\n\
  } else {\n\
    signal.nextTime = currentTime + duration;\n\
  }\n\
}\n\
\n\
_విధానము_     enableTransition(signal, nextState) { // allow light state machine to fire on next go around\n\
  signal.nextState = nextState;\n\
  signal.nextTime = currentTime;\n\
}\n\
\n\
_విధానము_     turnStateMachine(signal, currentTime) {\n\
  if (signal.nextTime !== undefined && currentTime >= signal.nextTime) { // state change is due\n\
    changed = true;\n\
    if (DEBUG_LEVEL >= STATE_MESSAGES) {\n\
      console.log(currentSecs.toFixed(3) + "   time-out for " + signal.id + " turned " + signal.nextState);\n\
    }\n\
    switch (signal.nextState) {\n\
\n\
    case "turnGreen":\n\
      turnGreen(signal,minimumTurnDuration);\n\
      signal.maxNextTime = currentTime + maximumTurnDuration;\n\
      extendTurn(signal, minimumTurnDuration);\n\
    break;\n\
\n\
    case "extendTurn":\n\
      if (signal.queue.length > 0 && currentTime + extendDuration < signal.maxNextTime) {\n\
        extendTurn(signal, extendDuration);\n\
      } else {\n\
        turnYellow(signal, yellowDuration);\n\
      }\n\
    break;\n\
\n\
    case "turnYellow":\n\
      turnYellow(signal, yellowDuration);\n\
    break;\n\
\n\
    case "turnRed":\n\
      turnRed(signal, turnGuardDuration);\n\
    break;\n\
\n\
    case "turnGuardRed":\n\
      turnGuardRed(signal, undefined); // wait for overall to start the turn\n\
      redGuardComplete(signal);\n\
    break;\n\
\n\
    default:\n\
      ఆట_ఆపు();\n\
      throw "unknown next turn state for " + signal.id;\n\
    }\n\
  }\n\
}\n\
\n\
_విధానము_     walkStateMachine(signal, currentTime) {\n\
  if (signal.nextTime !== undefined && currentTime >= signal.nextTime) { // state change is due\n\
    changed = true;\n\
    if (DEBUG_LEVEL >= STATE_MESSAGES) {\n\
      console.log(currentSecs.toFixed(3) + "   time-out for " + signal.id + " turned " + signal.nextState);\n\
    }\n\
    switch (signal.nextState) {\n\
\n\
    case "turnGreen":\n\
      if (signal.id == "nbWalk" || signal.id == "sbWalk") {\n\
        signal.maxNextTime = currentTime + maximumGreenDuration + yellowDuration - nsWalkDuration;\n\
      } else {\n\
        signal.maxNextTime = currentTime + maximumGreenDuration + yellowDuration - ewWalkDuration;\n\
      }\n\
      turnGreen(signal, minimumGreenWalkDuration);\n\
    break;\n\
\n\
    case "turnYellow":\n\
      if (signal.id == "nbWalk" || signal.id == "sbWalk") {\n\
        turnYellow(signal, nsWalkDuration);\n\
      } else {\n\
        turnYellow(signal, ewWalkDuration);\n\
      }\n\
    break;\n\
\n\
    case "turnRed":\n\
      turnRed(signal, mainGuardDuration);\n\
    break;\n\
\n\
    case "turnGuardRed":\n\
      turnGuardRed(signal, undefined); // wait for overall to start the turn\n\
      redGuardComplete(signal);\n\
    break;\n\
\n\
    default:\n\
      ఆట_ఆపు();\n\
      throw "unknown next walk state for " + signal.id;\n\
    }\n\
  }\n\
}\n\
\n\
_విధానము_     mainStateMachine(signal, currentTime) {\n\
  if (signal.nextTime !== undefined && currentTime >= signal.nextTime) { // state change is due\n\
    changed = true;\n\
    if (DEBUG_LEVEL >= STATE_MESSAGES) {\n\
      console.log(currentSecs.toFixed(3) + "   time-out for " + signal.id + " turned " + signal.nextState);\n\
    }\n\
    switch (signal.nextState) {\n\
\n\
    case "turnGreen":\n\
      signal.maxNextTime = currentTime + maximumGreenDuration;\n\
      turnGreen(signal, minimumGreenDuration);\n\
    break;\n\
\n\
    case "extendGreen":\n\
      extendGreen(signal, extendDuration);\n\
    break;\n\
\n\
    case "turnYellow":\n\
      turnYellow(signal, yellowDuration);\n\
    break;\n\
\n\
    case "turnRed":\n\
      turnRed(signal, mainGuardDuration);\n\
    break;\n\
\n\
    case "turnGuardRed":\n\
      turnGuardRed(signal, undefined); // wait for sync\n\
      redGuardComplete(signal);\n\
    break;\n\
\n\
    default:\n\
      ఆట_ఆపు();\n\
      throw "unknown next main state for " + signal.id;\n\
    }\n\
  }\n\
}\n\
\n\
\n\
//** Traffic Simulation Functions **\n\
\n\
_విధానము_     incDecQueue(signal) {\n\
  // check for departures when light is green\n\
   // should only do this when light is green and start new departure timer when light goes green\n\
  _సర్వత్ర_   spread;\n\
  spread = 0.5;\n\
  _సర్వత్ర_   possibleDepartureTime = currentTime +\n\
            యాదృచ్ఛిక_సంఖ్య((1 - spread) * signal.aveDepartureTime, (1 + spread) * signal.aveDepartureTime);\n\
  if (signal.state === green) {\n\
    if (signal.aveDepartureTime === 0) { // special case for walkers\n\
      signal.queue = [];\n\
      changed = true;\n\
    } else if (signal.nextDepartureTime === undefined) {\n\
      signal.nextDepartureTime = possibleDepartureTime;\n\
    } else if (currentTime > signal.nextDepartureTime) {\n\
      if (signal.queue.length > 0) { // queue has member to leave\n\
        changed = true;\n\
        signal.queue.shift();\n\
        signal.nextDepartureTime = possibleDepartureTime;\n\
      }\n\
    } else {\n\
      // no departure pending\n\
    }\n\
  } else { // light is not green, so no departures\n\
    signal.nextDepartureTime = undefined;\n\
  }\n\
  \n\
  // check for arrivals\n\
  if (signal.nextArrivalTime === undefined || currentTime > signal.nextArrivalTime) {\n\
    changed = true;\n\
    signal.queue.push ({color:యాదృచ్ఛిక_సంఖ్య(16), arrivalTime:currentTime});\n\
    // adjust the average to give it some variation within the average\n\
    spread = 0.95;\n\
    signal.nextArrivalTime = currentTime +\n\
      యాదృచ్ఛిక_సంఖ్య((1 - spread) * signal.aveArrivalTime, (1 + spread) * signal.aveArrivalTime);\n\
  }\n\
}\n\
\n\
\n\
_విధానము_     simulateTraffic() {\n\
  incDecQueue(ebTurn);\n\
  incDecQueue(ebWalk);\n\
  incDecQueue(ebMain);\n\
  incDecQueue(wbTurn);\n\
  incDecQueue(wbWalk);\n\
  incDecQueue(wbMain);\n\
  incDecQueue(nbTurn);\n\
  incDecQueue(nbWalk);\n\
  incDecQueue(nbMain);\n\
  incDecQueue(sbTurn);\n\
  incDecQueue(sbWalk);\n\
  incDecQueue(sbMain);\n\
}\n\
\n\
// ** Overall State Machine and Functions\n\
\n\
// *Globals*\n\
_సర్వత్ర_   overallNextState;\n\
_సర్వత్ర_   overallNextTime;\n\
_సర్వత్ర_   turnCount = 0;\n\
_సర్వత్ర_   greenCount = 0;\n\
\n\
_విధానము_     nextOverallState(nextState, time) {\n\
  overallNextState = nextState;\n\
  overallNextTime = time;\n\
}\n\
\n\
_విధానము_     redGuardComplete(signal) {\n\
  /* callback when red guard time complete for a particular signal */\n\
  _సర్వత్ర_   id = signal.id;\n\
  if (id === nbTurn || id === sbTurn || id === ebTurn || id === wbTurn) {\n\
    turnCount = turnCount - 1; //global\n\
    if (turnCount < 0) {\n\
      throw "Turn counter negative by " + id;\n\
    }\n\
  }\n\
  greenCount = greenCount - 1;\n\
  if (greenCount < 0) {\n\
    throw "Green counter made negative by " + id;\n\
  } else if (greenCount === 0) {\n\
    overallNextTime = currentTime;\n\
  }\n\
}\n\
\n\
_విధానము_     startNS() {\n\
  /* entry point to start overall machine into motion */\n\
  nextOverallState("startNS", currentTime);\n\
}\n\
\n\
\n\
_విధానము_     overallStateMachine() {\n\
/*\n\
- controls the start of travel in either direction\n\
- extends the main green\n\
- has callbacks for competion of turns to advance cross traffic\n\
- has callbacks for competion of guard red to advance cross traffic\n\
\n\
 turn lights are autonomous\n\
 increment left turn counter when changing individual turn light to green\n\
 decrement left turn counter when changing individual turn ight ends guard red\n\
\n\
when left turn counter is 0, main green may be extended after the minimum green\n\
\n\
overall starts NS and EW alternatively based on completion of guard red\n\
overall extends main green in a coordinated way\n\
  starts when both directions have completed minimum green\n\
  ends on either walking yellow or main yellow\n\
*/\n\
  if (overallNextTime !== undefined && currentTime >= overallNextTime) { // state change is due\n\
    if (DEBUG_LEVEL >= OVERALL_MESSAGES) {\n\
      console.log (currentSecs.toFixed(3) + " overall " + overallNextState);\n\
    }\n\
    switch (overallNextState) {\n\
  \n\
    case "startNS":\n\
      //nextOverallState("startEW", undefined); // wait for sync\n\
      if (DEBUG_LEVEL >= QUEUE_MESSAGES) {\n\
         printQueues();\n\
      }\n\
      if (nbTurn.queue.length > 0) {\n\
        enableTransition(nbTurn, "turnGreen");\n\
        turnCount = turnCount + 1;\n\
        if (sbTurn.queue.length === 0) {\n\
          enableTransition(nbMain, "turnGreen");\n\
        }\n\
        nextOverallState("startNSMainOnly", undefined); // wait for sync\n\
      }\n\
      if (sbTurn.queue.length > 0) {\n\
        enableTransition(sbTurn, "turnGreen");\n\
        turnCount = turnCount + 1;\n\
        if (nbTurn.queue.length === 0) {\n\
          enableTransition(sbMain, "turnGreen");\n\
        }\n\
        nextOverallState("startNSMainOnly", undefined); // wait for sync\n\
      }\n\
      if (nbTurn.queue.length === 0 && sbTurn.queue.length === 0) {\n\
        enableTransition(nbMain, "turnGreen");\n\
        enableTransition(sbMain, "turnGreen");\n\
        if (nbWalk.queue.length > 0) {\n\
          enableTransition(nbWalk, "turnGreen");\n\
        }\n\
        if (nbWalk.queue.length > 0) {\n\
          enableTransition(sbWalk, "turnGreen");\n\
        }\n\
        // extend main green invoked after minimum main green\n\
        nextOverallState("extendMainGreenNS", extendDelayDuration);\n\
      }\n\
    break;\n\
\n\
    case "startNSMainOnly":\n\
      if (nbTurn.state === red && sbTurn.state === red) {\n\
        enableTransition(nbMain, "turnGreen");\n\
        enableTransition(sbMain, "turnGreen");\n\
        if (nbWalk.queue.length > 0 || sbWalk.queue.length > 0) {\n\
          enableTransition(nbWalk, "turnGreen");\n\
          enableTransition(sbWalk, "turnGreen");\n\
        }\n\
        nextOverallState("extendMainGreenNS", extendDelayDuration);\n\
      } else {\n\
        nextOverallState("startNSMainOnly", undefined); // wait for sync\n\
      }\n\
    break;\n\
  \n\
    case "extendMainGreenNS":\n\
      // assume nbMain.state === green && sbMain.state === green\n\
      if (nbMain.queue.length > 0 || sbMain.queue.length > 0) { //time extension warrented\n\
        if (nbWalk.state === green || sbWalk.state === green) {\n\
          if ( (currentTime + extendDuration < nbMain.maxNextTime) &&\n\
               (currentTime + extendDuration < sbMain.maxNextTime) &&\n\
               (currentTime + extendDuration < nbWalk.maxNextTime) &&\n\
               (currentTime + extendDuration < sbWalk.maxNextTime) ) { //walk extension OK\n\
            extendGreen(nbWalk, undefined);\n\
            extendGreen(sbWalk, undefined);\n\
            extendGreen(nbMain, undefined);\n\
            extendGreen(sbMain, undefined);\n\
            overallNextTime = currentTime + extendDuration; // just stay in extendMainGreenNS\n\
          } else { //end walk extension\n\
            enableTransition(nbWalk, "turnYellow");\n\
            enableTransition(sbWalk, "turnYellow");\n\
            extendGreen(sbMain, nsWalkDuration - yellowDuration);\n\
            extendGreen(nbMain, nsWalkDuration - yellowDuration);\n\
            nextOverallState("startEW", undefined); // wait for sync\n\
          }\n\
        } else { // walks do not apply\n\
          if ( (currentTime + extendDuration < nbMain.maxNextTime) &&\n\
               (currentTime + extendDuration < sbMain.maxNextTime) ) { //main extension OK\n\
            extendGreen(nbMain, undefined);\n\
            extendGreen(sbMain, undefined);\n\
            overallNextTime = currentTime + extendDuration; // just stay in extendMainGreenNS\n\
          } else { // end main extension\n\
            enableTransition(nbMain, "turnYellow");\n\
            enableTransition(sbMain, "turnYellow");\n\
            nextOverallState("startEW", undefined); // wait for sync\n\
          }\n\
        }\n\
      } else { // extension not warrented\n\
        if (nbWalk.state === green || sbWalk.state === green) {\n\
          enableTransition(nbWalk, "turnYellow");\n\
          enableTransition(sbWalk, "turnYellow");\n\
          extendGreen(sbMain, nsWalkDuration - yellowDuration);\n\
          extendGreen(nbMain, nsWalkDuration - yellowDuration);\n\
          nextOverallState("startEW", undefined); // wait for sync\n\
        } else { // walks do not apply\n\
          enableTransition(nbMain, "turnYellow");\n\
          enableTransition(sbMain, "turnYellow");\n\
          nextOverallState("startEW", undefined); // wait for sync\n\
        }\n\
      }\n\
    break;\n\
\n\
    case "startEW":\n\
      nextOverallState("startEWMainOnly", undefined); // wait for sync\n\
      if (ebTurn.queue.length > 0) {\n\
        enableTransition(ebTurn, "turnGreen");\n\
        if (wbTurn.queue.length === 0) {\n\
          enableTransition(ebMain, "turnGreen");\n\
        }\n\
      }\n\
      if (wbTurn.queue.length > 0) {\n\
        enableTransition(wbTurn, "turnGreen");\n\
        if (ebTurn.queue.length === 0) {\n\
          enableTransition(wbMain, "turnGreen");\n\
        }\n\
      }\n\
      if (ebTurn.queue.length === 0 && wbTurn.queue.length === 0) {\n\
        enableTransition(ebMain, "turnGreen");\n\
        enableTransition(wbMain, "turnGreen");\n\
        if (ebWalk.queue.length > 0) {\n\
          enableTransition(ebWalk, "turnGreen");\n\
          // set up the maximum time that the walk light can be green\n\
          ebWalk.maxNextTime = currentTime + maximumGreenDuration - ewWalkDuration;\n\
        }\n\
        if (wbWalk.queue.length > 0) {\n\
          enableTransition(wbWalk, "turnGreen");\n\
          // set up the maximum time that the walk light can be green\n\
          wbWalk.maxNextTime = currentTime + maximumGreenDuration - ewWalkDuration;\n\
        }\n\
        nextOverallState("extendMainGreenEW", undefined);\n\
      }\n\
    break;\n\
  \n\
    case "startEWMainOnly":\n\
      nextOverallState("startEWMainOnly", undefined); // wait for sync\n\
      if (ebTurn.state === red && wbTurn.state === red) {\n\
          enableTransition(ebMain, "turnGreen");\n\
          enableTransition(wbMain, "turnGreen");\n\
        if (ebWalk.queue.length > 0 || wbWalk.queue.length > 0) {\n\
          enableTransition(ebWalk, "turnGreen");\n\
          enableTransition(wbWalk, "turnGreen");\n\
        }\n\
        nextOverallState("extendMainGreenEW", extendDelayDuration);\n\
      }\n\
    break;\n\
  \n\
    case "extendMainGreenEW":\n\
      // assume ebMain.state === green && sbMain.state === green\n\
      if (ebMain.queue.length > 0 || wbMain.queue.length > 0) { //time extension warrented\n\
        if (ebWalk.state === green || wbWalk.state === green) {\n\
          if ( (currentTime + extendDuration < ebMain.maxNextTime) &&\n\
               (currentTime + extendDuration < wbMain.maxNextTime) &&\n\
               (currentTime + extendDuration < ebWalk.maxNextTime) &&\n\
               (currentTime + extendDuration < wbWalk.maxNextTime) ) { //walk extension OK\n\
            extendGreen(ebWalk, undefined);\n\
            extendGreen(wbWalk, undefined);\n\
            extendGreen(ebMain, undefined);\n\
            extendGreen(wbMain, undefined);\n\
            overallNextTime = currentTime + extendDuration; // just stay in extendMainGreenEW\n\
          } else { //end walk extension\n\
            enableTransition(ebWalk, "turnYellow");\n\
            enableTransition(wbWalk, "turnYellow");\n\
            extendGreen(wbMain, ewWalkDuration - yellowDuration);\n\
            extendGreen(ebMain, ewWalkDuration - yellowDuration);\n\
            nextOverallState("startNS", undefined); // wait for sync\n\
          }\n\
        } else { // walks do not apply\n\
          if ( (currentTime + extendDuration < ebMain.maxNextTime) &&\n\
               (currentTime + extendDuration < wbMain.maxNextTime) ) { //main extension OK\n\
            extendGreen(ebMain, undefined);\n\
            extendGreen(wbMain, undefined);\n\
            overallNextTime = currentTime + extendDuration; // just stay in extendMainGreenEW\n\
          } else { // end main extension\n\
            enableTransition(ebMain, "turnYellow");\n\
            enableTransition(wbMain, "turnYellow");\n\
            nextOverallState("startNS", undefined); // wait for sync\n\
          }\n\
        }\n\
      } else { // extension not warrented\n\
        if (ebWalk.state === green || wbWalk.state === green) {\n\
          enableTransition(ebWalk, "turnYellow");\n\
          enableTransition(wbWalk, "turnYellow");\n\
          extendGreen(wbMain, ewWalkDuration - yellowDuration);\n\
          extendGreen(ebMain, ewWalkDuration - yellowDuration);\n\
          nextOverallState("startNS", undefined); // wait for sync\n\
        } else { // walks do not apply\n\
          enableTransition(ebMain, "turnYellow");\n\
          enableTransition(wbMain, "turnYellow");\n\
          nextOverallState("startNS", undefined); // wait for sync\n\
        }\n\
      }\n\
    break;\n\
    }\n\
  }\n\
}\n\
\n\
\n\
\n\
_సర్వత్ర_   date = new Date();\n\
_సర్వత్ర_   currentTime = date.getTime();\n\
_సర్వత్ర_   currentSecs = msToSec(currentTime);\n\
_సర్వత్ర_   changed = false;\n\
startNS(); // start up the overall machine \n\
\n\
_విధానము_     loop() {\n\
  changed = false;\n\
  date = new Date();\n\
  currentTime = date.getTime();\n\
  currentSecs = msToSec(currentTime);\n\
  \n\
  // check individual light state machines\n\
  turnStateMachine(ebTurn, currentTime);\n\
  walkStateMachine(ebWalk, currentTime);\n\
  mainStateMachine(ebMain, currentTime);\n\
  \n\
  turnStateMachine(wbTurn, currentTime);\n\
  walkStateMachine(wbWalk, currentTime);\n\
  mainStateMachine(wbMain, currentTime);\n\
  \n\
  turnStateMachine(nbTurn, currentTime);\n\
  walkStateMachine(nbWalk, currentTime);\n\
  mainStateMachine(nbMain, currentTime);\n\
  \n\
  turnStateMachine(sbTurn, currentTime);\n\
  walkStateMachine(sbWalk, currentTime);\n\
  mainStateMachine(sbMain, currentTime);\n\
\n\
  // check overall state machine and process changes caused by individual lights\n\
  overallStateMachine();\n\
\n\
  // simulate traffic\n\
  simulateTraffic();\n\
\n\
  // update drawing\n\
  if (changed) {\n\
    చెరిపి_వేయి();\n\
    drawStreets();\n\
    drawSignals();\n\
    drawQueues();\n\
  }\n\
  //writeQueues (); // for debugging\n\
\n\
  // make sure all is safe\n\
  safetyCheck();\n\
}\n\
 \n\
_విధానము_     ప్రదర్శన() {\n\
  ఆడించు(loop, 100);\n\
}\n\
'
jumping_jack ='\
// Jumping Jack -- stick man doing jumping jacks\n\
\n\
/*\n\
This example shows a couple of concepts.\n\
One is the use of variables. The stick man is created based on proprotions of its\n\
height. Changing the height variable changes the size of the other body parts.\n\
\n\
Drawing of the body parts is done so that the కుంచిక is returned to its starting point.\n\
This allows the body parts to be drawn in any order or for the center of the stick man\n\
to be moved. Each body part is draw with a _విధానము_     (also called a sub-routine) to\n\
make the problem easier to understand.\n\
\n\
The drawLeftLeg(), drawRightLeg(), drawLeftArm(), and drawRightArm() functions use a\n\
parameter that is used to determine the కోణము of\n\
the particular appendage being drawn. This way the same _విధానము_     can be used without\n\
regard to the arm or leg position.\n\
\n\
The drawBody() _విధానము_     ties everything together and draws all of the body parts.\n\
It has two parameters, one for the arm కోణము and one for the leg కోణము. This assumes\n\
that the arms move together and the legs move together, but that is not a requirement.\n\
You can change this.\n\
\n\
To make this a bit more fun, this can be animated, so the figure\'s arms and legs move\n\
as if it were doing jumping jacks. To do this we want to vary the కోణము of the\n\
arms, from 45 degrees to almost 180 degrees, say 175. The legs should vary from a \n\
135 degree కోణము to almost 180, lets say 175.  The two extreme positions of the\n\
body can be drawn as:\n\
  drawBody(45, 45);\n\
and\n\
  drawBody(175, 5);\n\
\n\
(hint: You can try each one separately in the command box.)\n\
\n\
For smooth motion, there should be 4 steps. (This is really a guess, there could be\n\
more or there could be less, but for now lets assume that 4 is a good number.)\n\
A step would be the base movement plus one quarter of the total movement. The moveBody()\n\
_విధానము_     uses the variable\n\
n to step throught the various movements with n=0, n=1, n=2, n=3, and n=4\n\
successively.\n\
\n\
For the arms: 45 + n * (175-45)/4\n\
\n\
For the legs: 45 - n * (45-5)/4\n\
\n\
The direction of the movement changes at either end, that is when\n\
n = 0 or n = 4; So when n is zero, n should be increased by one to get to 1. When n is\n\
4, n should be decreased by one (add a negative one) to get to 3. Using a direction\n\
variable allows the moveBody() _విధానము_     to remember what direction it is moving.\n\
\n\
Successive calls to moveBody() are controlled by the విలంబించు() function. This _విధానము_     is set\n\
to repeat in 100 ms. You could change the time to make it faster or slower.\n\
\n\
*/\n\
\n\
\n\
\n\
// GLOBALS\n\
_సర్వత్ర_   height;\n\
_సర్వత్ర_   headDiameter;\n\
_సర్వత్ర_   torsoLength;\n\
_సర్వత్ర_   neckLength;\n\
_సర్వత్ర_   armLength;\n\
_సర్వత్ర_   legLength;\n\
\n\
/*\n\
  The body parts are drawn with the following asumptions\n\
  - the center of figure is the center of torso\n\
  - the కుంచిక is returned to the center of the figure\n\
  - the కుంచిక is pointed up \n\
  - the pen of the కుంచిక is up\n\
*/\n\
\n\
\n\
_విధానము_     drawHead() {\n\
  ముందుకు_జరుగు(torsoLength/2 + neckLength + headDiameter/2); \n\
  కుంచికను_కింద_పెట్టు();\n\
  వృత్తము(headDiameter/2); //draw head\n\
  కుంచికను_పైకి_ఎత్తు();\n\
  కుడి_వైపు_తిరుగు(180);\n\
  ముందుకు_జరుగు(torsoLength/2 + neckLength + headDiameter/2); \n\
  కుడి_వైపు_తిరుగు(180);\n\
}\n\
\n\
_విధానము_     drawNeck() {\n\
  ముందుకు_జరుగు(torsoLength/2 ); \n\
  కుంచికను_కింద_పెట్టు();\n\
  ముందుకు_జరుగు(neckLength); //neck\n\
  కుంచికను_పైకి_ఎత్తు();\n\
  వెనుకకు_జరుగు(torsoLength/2 + neckLength); \n\
}\n\
\n\
_విధానము_     drawTorso() {\n\
  వెనుకకు_జరుగు(torsoLength/2); \n\
  కుంచికను_కింద_పెట్టు();\n\
  ముందుకు_జరుగు(torsoLength); \n\
  కుంచికను_పైకి_ఎత్తు();\n\
  వెనుకకు_జరుగు(torsoLength/2); \n\
}\n\
\n\
_విధానము_     drawLeftLeg(కోణము){\n\
  కుడి_వైపు_తిరుగు(180);\n\
  ముందుకు_జరుగు(torsoLength/2);\n\
  ఎడమ_వైపు_తిరుగు(కోణము);\n\
  కుంచికను_కింద_పెట్టు();\n\
  ముందుకు_జరుగు(legLength); //left leg\n\
  కుంచికను_పైకి_ఎత్తు();\n\
  వెనుకకు_జరుగు(legLength);\n\
  కుడి_వైపు_తిరుగు(కోణము);\n\
  కుడి_వైపు_తిరుగు(180);\n\
  ముందుకు_జరుగు(torsoLength/2); \n\
} \n\
\n\
_విధానము_     drawRightLeg(కోణము) {\n\
  కుడి_వైపు_తిరుగు(180);\n\
  ముందుకు_జరుగు(torsoLength/2);\n\
  కుడి_వైపు_తిరుగు(కోణము);\n\
  కుంచికను_కింద_పెట్టు();\n\
  ముందుకు_జరుగు(legLength); //right leg\n\
  కుంచికను_పైకి_ఎత్తు();\n\
  వెనుకకు_జరుగు(legLength);\n\
  ఎడమ_వైపు_తిరుగు(కోణము);\n\
  కుడి_వైపు_తిరుగు(180);\n\
  ముందుకు_జరుగు(torsoLength/2); \n\
}\n\
\n\
_విధానము_     drawLeftArm(కోణము){\n\
  ముందుకు_జరుగు(torsoLength/2);\n\
  కుడి_వైపు_తిరుగు(కోణము);\n\
  కుంచికను_కింద_పెట్టు();\n\
  ముందుకు_జరుగు(armLength); //left arm\n\
  కుంచికను_పైకి_ఎత్తు();\n\
  వెనుకకు_జరుగు(armLength);\n\
  ఎడమ_వైపు_తిరుగు(కోణము);\n\
  వెనుకకు_జరుగు(torsoLength/2); \n\
} \n\
\n\
_విధానము_     drawRightArm(కోణము) {\n\
  ముందుకు_జరుగు(torsoLength/2);\n\
  ఎడమ_వైపు_తిరుగు(కోణము);\n\
  కుంచికను_కింద_పెట్టు();\n\
  ముందుకు_జరుగు(armLength); //left arm\n\
  కుంచికను_పైకి_ఎత్తు();\n\
  వెనుకకు_జరుగు(armLength);\n\
  కుడి_వైపు_తిరుగు(కోణము);\n\
  వెనుకకు_జరుగు(torsoLength/2); \n\
}\n\
\n\
_విధానము_     drawBody(armAngle, legAngle) {\n\
  drawTorso();\n\
  drawHead();\n\
  drawNeck();\n\
  drawLeftArm(armAngle);\n\
  drawRightArm(armAngle);\n\
  drawLeftLeg(legAngle);\n\
  drawRightLeg(legAngle);\n\
}\n\
\n\
_సర్వత్ర_   n = 0;\n\
_సర్వత్ర_   direction = +1;\n\
\n\
\n\
_విధానము_     moveBody () {\n\
  చెరిపి_వేయి();\n\
  height = 40;\n\
  height = 1.5 * Math.min( గరిష్ఠX(), గరిష్ఠY())\n\
  headDiameter = .25 * height;\n\
  torsoLength = .3 * height;\n\
  neckLength = .5 * torsoLength;\n\
  armLength = .4 * height;\n\
  legLength = .5 * height;\n\
  వెడల్పు( .05*height)\n\
\n\
  drawBody(45 + n * (175-45)/4,\n\
    45 - n * (45-5)/4);\n\
  n = n + direction;\n\
  if (n>=4 || n<=0) {\n\
    direction = -direction;\n\
  }\n\
  విలంబించు(moveBody,100);\n\
}\n\
\n\
\n\
_విధానము_     ప్రదర్శన() {\n\
  ఆది_స్థితి();\n\
  కుంచికను_దాచు();\n\
  n = 0;\n\
  direction = +1;\n\
  moveBody();\n\
}\n\
'
koch_line ='\
// Koch Lines -- draw an animated set of Koch lines\n\
\n\
_విధానము_     kochLine (length, order) {\n\
  //assume drawn on the current కోణము\n\
  if (order == 0) {\n\
    ముందుకు_జరుగు(length);\n\
  } else {\n\
    //break line and bump out to the left\n\
    kochLine (length/3, order-1);\n\
    ఎడమ_వైపు_తిరుగు(60); \n\
    kochLine (length/3, order-1);\n\
    కుడి_వైపు_తిరుగు(120); \n\
    kochLine (length/3, order-1);\n\
    ఎడమ_వైపు_తిరుగు(60); \n\
    kochLine (length/3, order-1);\n\
  }\n\
}\n\
\n\
\n\
_విధానము_     kochLineవిలంబించు() {\n\
;\n\
  చెరిపి_వేయి();\n\
  _సర్వత్ర_   side = గరిష్ఠY() - కనిష్ఠY();\n\
  if (side > గరిష్ఠX() - కనిష్ఠX()) {\n\
    side = గరిష్ఠX() - కనిష్ఠX()\n\
  }\n\
  కోణము(90)\n\
  side = .9 * side\n\
  స్థానము_మార్చు(-side/2, -1/4 * side)\n\
  kochLine (side, i);\n\
  స్థానము_మార్చు(కనిష్ఠX(),కనిష్ఠY());\n\
  కోణము(90);\n\
  అక్షరరూపము_స్థాపించు("bold 12pt Ariel,san-serif")\n\
  వ్రాయి("Koch line of order " +i);\n\
  చిత్రీకరించు();\n\
  i = i + 1;\n\
  if (i < steps) {\n\
    delay (kochLineDelay, 2000);\n\
  }\n\
}\n\
\n\
_విధానము_     ప్రదర్శన() {\n\
  ఆది_స్థితి();\n\
  కుంచికను_దాచు();\n\
  steps = 6;\n\
  span = 240;\n\
  i = 0;\n\
\n\
  kochLineవిలంబించు();\n\
}\n\
'
koch_snowflake ='\
// Koch Snowflakes -- draw an animated set of Koch snowflakes\n\
\n\
\n\
_విధానము_     kochLine (length, order) {\n\
  //assume drawn on the current కోణము\n\
  if (order == 0) {\n\
    ముందుకు_జరుగు(length);\n\
  } else {\n\
    //break line and bump out to the left\n\
    kochLine (length/3, order-1);\n\
    ఎడమ_వైపు_తిరుగు(60); \n\
    kochLine (length/3, order-1);\n\
    కుడి_వైపు_తిరుగు(120); \n\
    kochLine (length/3, order-1);\n\
    ఎడమ_వైపు_తిరుగు(60); \n\
    kochLine (length/3, order-1);\n\
  }\n\
}\n\
\n\
_విధానము_     kochSnowflake (length, order) {\n\
  కోణము (30);\n\
  స్థానము_మార్చు(-length/2,-.3 * length);\n\
  kochLine (length, order);\n\
  కుడి_వైపు_తిరుగు(120);\n\
  kochLine (length, order);\n\
  కుడి_వైపు_తిరుగు(120);\n\
  kochLine (length, order);\n\
  కుడి_వైపు_తిరుగు(120);\n\
}\n\
  \n\
\n\
ఆది_స్థితి();\n\
\n\
_సర్వత్ర_   steps = 6;\n\
_సర్వత్ర_   span = 240;\n\
_సర్వత్ర_   i = 0;\n\
\n\
_విధానము_     kochLines () {\n\
  for (i=0; i<steps; i++) {\n\
    స్థానము_మార్చు(span/2 - i*span/steps, - span/2);\n\
    kochLine (span,i);\n\
  }\n\
}\n\
\n\
_విధానము_     kochSnowflakeDelay() {\n\
\n\
  చెరిపి_వేయి();\n\
  _సర్వత్ర_   side = గరిష్ఠY() - కనిష్ఠY();\n\
  if (side > గరిష్ఠX() - కనిష్ఠX()) {\n\
    side = గరిష్ఠX() - కనిష్ఠX()\n\
  }\n\
  kochSnowflake (.8 * side,i);\n\
  స్థానము_మార్చు(కనిష్ఠX(),కనిష్ఠY());\n\
  కోణము(90);\n\
  అక్షరరూపము_స్థాపించు("Helvetica,san-serif 12pt")\n\
  వ్రాయి("Koch snowflake of order " +i);\n\
  చిత్రీకరించు();\n\
  i = i + 1;\n\
  if (i < steps) {\n\
    delay (kochSnowflakeDelay, 2000);\n\
  }\n\
}\n\
\n\
_విధానము_     ప్రదర్శన() {\n\
  కుంచికను_దాచు();\n\
  i = 0;\n\
  kochSnowflakeDelay();\n\
}\n\
'
koch_snowflake2 ='\
// Koch Snowflake 2 -- Koch snowflake with embellishments\n\
\n\
_విధానము_     diamond(side) {\n\
  ముందుకు_జరుగు(side)\n\
  ఎడమ_వైపు_తిరుగు(60)\n\
  ముందుకు_జరుగు(side)\n\
  ఎడమ_వైపు_తిరుగు(120)\n\
  ముందుకు_జరుగు(side)\n\
  ఎడమ_వైపు_తిరుగు(60)\n\
  ముందుకు_జరుగు(side)\n\
  ఎడమ_వైపు_తిరుగు(120)\n\
}\n\
\n\
_విధానము_     dazzle( side, inset) {\n\
  inner(side,inset)\n\
  newside = (side - Math.sqrt(3)* inset) /3\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  ఎడమ_వైపు_తిరుగు(30)\n\
  ముందుకు_జరుగు(inset)\n\
  కుడి_వైపు_తిరుగు(30)\n\
  ముందుకు_జరుగు(newside)\n\
  ఎడమ_వైపు_తిరుగు(60)\n\
  కుంచికను_కింద_పెట్టు()\n\
  ముందుకు_జరుగు(newside)\n\
  diamond(newside/3)\n\
  ముందుకు_జరుగు(newside)\n\
  ఎడమ_వైపు_తిరుగు(120)\n\
  ముందుకు_జరుగు(newside)\n\
  ఎడమ_వైపు_తిరుగు(120)\n\
  ముందుకు_జరుగు(newside)\n\
  diamond(newside/3)\n\
  ముందుకు_జరుగు(newside)\n\
  ఎడమ_వైపు_తిరుగు(120)\n\
  ముందుకు_జరుగు(newside)\n\
  ఎడమ_వైపు_తిరుగు(120)\n\
  ముందుకు_జరుగు(newside)\n\
  diamond(newside/3)\n\
  ముందుకు_జరుగు(newside)\n\
  ఎడమ_వైపు_తిరుగు(120)\n\
  ముందుకు_జరుగు(newside)\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  కుడి_వైపు_తిరుగు(120)\n\
  ముందుకు_జరుగు(newside)\n\
  ఎడమ_వైపు_తిరుగు(30)\n\
  ముందుకు_జరుగు(inset)\n\
  ఎడమ_వైపు_తిరుగు(150)\n\
  కుంచికను_కింద_పెట్టు()\n\
}\n\
\n\
\n\
_విధానము_     inner( side, inset) {\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  ఎడమ_వైపు_తిరుగు( 30)\n\
  ముందుకు_జరుగు( inset)\n\
  కుడి_వైపు_తిరుగు(30)\n\
  కుంచికను_కింద_పెట్టు()\n\
  ముందుకు_జరుగు( side - Math.sqrt(3)*inset)\n\
  ఎడమ_వైపు_తిరుగు(120)\n\
  ముందుకు_జరుగు( side - Math.sqrt(3)*inset)\n\
  ఎడమ_వైపు_తిరుగు(120)\n\
  ముందుకు_జరుగు( side - Math.sqrt(3)*inset)\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  కుడి_వైపు_తిరుగు(30)\n\
  ముందుకు_జరుగు( inset)\n\
  ఎడమ_వైపు_తిరుగు(150)\n\
  కుంచికను_కింద_పెట్టు()\n\
}\n\
\n\
_విధానము_     starOfDavid (side) {\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  వెనుకకు_జరుగు(2*side)\n\
  కుడి_వైపు_తిరుగు(30)\n\
  ముందుకు_జరుగు(side)\n\
  కుడి_వైపు_తిరుగు(60)\n\
  కుంచికను_కింద_పెట్టు()\n\
  for (_సర్వత్ర_   i=0;i<6;i=i+1) {\n\
    inner(side, 10)\n\
    inner(side, 20)\n\
    dazzle(side, 30)\n\
    ముందుకు_జరుగు(side)\n\
    ఎడమ_వైపు_తిరుగు(120)\n\
    ముందుకు_జరుగు(side)\n\
\n\
    ఎడమ_వైపు_తిరుగు(60)\n\
    ముందుకు_జరుగు(side)\n\
    ఎడమ_వైపు_తిరుగు(120)\n\
\n\
    inner(side, 10)\n\
    inner(side, 20)\n\
    dazzle(side, 30)\n\
    ముందుకు_జరుగు(side)\n\
    ఎడమ_వైపు_తిరుగు(120)\n\
    ముందుకు_జరుగు(side)\n\
  }\n\
}\n\
\n\
_విధానము_     kochSnowFlake (side, order) {\n\
  kochLine(side, order)\n\
  కుడి_వైపు_తిరుగు(120)\n\
  kochLine(side, order)\n\
  కుడి_వైపు_తిరుగు(120)\n\
  kochLine(side, order)\n\
  కుడి_వైపు_తిరుగు(120)\n\
} \n\
\n\
\n\
_విధానము_     kochLine (length, order) {\n\
  //assume drawn on the current కోణము\n\
  if (order == 0) {\n\
    ముందుకు_జరుగు(length);\n\
  } else {\n\
    //break line and bump out to the left\n\
    kochLine (length/3, order-1);\n\
    ఎడమ_వైపు_తిరుగు(60); \n\
    kochLine (length/3, order-1);\n\
    కుడి_వైపు_తిరుగు(120); \n\
    kochLine (length/3, order-1);\n\
    ఎడమ_వైపు_తిరుగు(60); \n\
    kochLine (length/3, order-1);\n\
  }\n\
}\n\
\n\
\n\
_విధానము_     ప్రదర్శన() {\n\
  ఆది_స్థితి();\n\
  size = Math.min( గరిష్ఠX(), గరిష్ఠY()) * .6\n\
  కుంచికను_దాచు();\n\
  starOfDavid( size)\n\
  ముందుకు_జరుగు(size)\n\
  ఎడమ_వైపు_తిరుగు(180)\n\
  //కుంచికను_చూపు()\n\
  kochSnowFlake(3*size, 2)\n\
  kochSnowFlake(3*size, 3)\n\
}\n\
'
koch_triangles_stacked ='\
// Koch Snowflakes, Stacked -- draw an set of stacked Koch snowflakes\n\
\n\
\n\
_విధానము_     kochLine (length, order) {\n\
  //assume drawn on the current కోణము\n\
  if (order == 0) {\n\
    ముందుకు_జరుగు(length);\n\
  } else {\n\
    //break line and bump out to the left\n\
    kochLine (length/3, order-1);\n\
    ఎడమ_వైపు_తిరుగు(60); \n\
    kochLine (length/3, order-1);\n\
    కుడి_వైపు_తిరుగు(120); \n\
    kochLine (length/3, order-1);\n\
    ఎడమ_వైపు_తిరుగు(60); \n\
    kochLine (length/3, order-1);\n\
  }\n\
}\n\
\n\
\n\
_విధానము_     kochSnowflake (length, order) {\n\
  కోణము (30);\n\
  స్థానము_మార్చు(-length/2,-.3 * length);\n\
  kochLine (length, order);\n\
  కుడి_వైపు_తిరుగు(120);\n\
  kochLine (length, order);\n\
  కుడి_వైపు_తిరుగు(120);\n\
  kochLine (length, order);\n\
  కుడి_వైపు_తిరుగు(120);\n\
}\n\
  \n\
\n\
_విధానము_     ప్రదర్శన() {\n\
  ఆది_స్థితి()\n\
  size = .045* Math.min(గరిష్ఠX(), గరిష్ఠY())\n\
  కుంచికను_దాచు();\n\
  for (_సర్వత్ర_   i=0; i<6; i++) {\n\
    kochSnowflake( size*(i+1)*(i+1), i)\n\
  }\n\
}\n\
'
life ='\
// Life -- Conway\'s game of life\n\
columns = 16\n\
rows = 16\n\
\n\
\n\
dotSize = 6\n\
dotGap = 4\n\
columnSize = 2 * dotSize + dotGap\n\
rowSize = 2 * dotSize + dotGap\n\
columnMid = columns/2 * columnSize\n\
rowMid = rows/2 * rowSize\n\
\n\
\n\
_సర్వత్ర_   grid = [ [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0],\n\
             [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0],\n\
             [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0],\n\
             [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0],\n\
             [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0],\n\
             [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0],\n\
             [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0],\n\
             [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0],\n\
             [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0],\n\
             [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0],\n\
             [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0],\n\
             [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0],\n\
             [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0],\n\
             [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0],\n\
             [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0],\n\
             [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0]\n\
]\n\
\n\
_సర్వత్ర_   grid2 = Array( rows * columns)\n\
\n\
_విధానము_     drawGrid( grid) {\n\
  for (r=0; r < rows; r++) {\n\
    for ( c=0; c < columns; c++) {\n\
       //వ్రాయి( r + " " + c)\n\
       స్థానము_మార్చు( c * columnSize - columnMid, r * rowSize - rowMid)\n\
       if (grid [r][c]) {\n\
         రంగు_మార్చు( "red")\n\
       } else {\n\
         రంగు_మార్చు( "lightpink")\n\
       }\n\
       నిండు_వృత్తము( dotSize)\n\
    }\n\
  }\n\
}\n\
\n\
\n\
_విధానము_     drawGrid2( grid, baseCaption) {\n\
  for (r=0; r < rows; r++) {\n\
    for ( c=0; c < columns; c++) {\n\
       స్థానము_మార్చు( columnMid - c * columnSize , rowMid - r * rowSize)\n\
       if (grid [r * columns + c]) {\n\
         రంగు_మార్చు( "red")\n\
       } else {\n\
         రంగు_మార్చు( "lightgray")\n\
       }\n\
       నిండు_వృత్తము( dotSize)\n\
    }\n\
  }\n\
  caption( baseCaption)\n\
}\n\
\n\
\n\
_విధానము_     loadPattern( pattern) {\n\
  for (r=0; r < rows; r++) {\n\
    mask = 0b1000000000000000\n\
    for ( c=0; c < columns; c++) {\n\
      grid [r][c] = pattern [r] & mask\n\
      mask = mask >> 1 \n\
    }\n\
  }\n\
}\n\
\n\
\n\
_విధానము_     loadPattern2( pattern) {\n\
  for (r=0; r < rows; r++) {\n\
    mask = 0b00000000000000001\n\
    for ( c=0; c < columns; c++) {\n\
      if (pattern[ r] & mask) {\n\
        grid [r * columns + c] = true\n\
      } else {\n\
        grid [r * columns + c] = false\n\
      }\n\
      mask = mask << 1 \n\
    }\n\
  }\n\
}\n\
\n\
_విధానము_     generation2( currentGrid) {\n\
  _సర్వత్ర_   nextGrid = Array(rows*columns)\n\
  for (r=0; r < rows; r++) {\n\
    for ( c=0; c < columns; c++) {\n\
      _సర్వత్ర_   cell = r * columns + c\n\
      count = neighborCount2( currentGrid, cell)\n\
      //console.log ("row:" + r + " col:" + c + " count:" + count)\n\
      if (currentGrid[ cell]) { //alive\n\
        if (count == 2 || count == 3) {\n\
           nextGrid[ cell] = true\n\
        } else {\n\
           nextGrid[ cell] = false\n\
        }\n\
      } else { // vacant\n\
        if ( count == 3) {\n\
           nextGrid[ cell] = true\n\
        } else {\n\
           nextGrid[ cell] = false\n\
        }\n\
      }\n\
    }\n\
  }\n\
  for (r=0; r < rows; r++) {\n\
    for ( c=0; c < columns; c++) {\n\
      cell = r * columns + c\n\
      currentGrid [ cell] = nextGrid[ cell]\n\
    }\n\
  }\n\
}\n\
\n\
\n\
\n\
_విధానము_     neighborCount( grid, cell) {\n\
  _సర్వత్ర_   r = cell / columns\n\
  _సర్వత్ర_   c = cell % columns\n\
  _సర్వత్ర_   count = 0\n\
  if (r > 0) {\n\
    if ( c>0 && grid[r-1, c-1]) {\n\
      count = count + 1\n\
    }\n\
    if ( grid[r-1, c]) {\n\
      count = count + 1\n\
    }\n\
    if ( c<columns-1 && grid[r-1, c+1]) {\n\
      count = count + 1\n\
    }\n\
  }\n\
  if ( c>0 && grid[r, c-1]) {\n\
    count = count + 1\n\
  }\n\
  if ( c<columns-1 && grid[r, c+1]) {\n\
    count = count + 1\n\
  }\n\
  if (r < rows-1) {\n\
    if ( c>0 && grid[r+1, c-1]) {\n\
      count = count + 1\n\
    }\n\
    if ( grid[r+1, c]) {\n\
      count = count + 1\n\
    }\n\
    if ( c<columns-1 && grid[r+1, c+1]) {\n\
      count = count + 1\n\
    }\n\
  }\n\
  _ఫలము_  count\n\
}\n\
\n\
\n\
_విధానము_     neighborCount2( grid, cell) {\n\
  _సర్వత్ర_   r = Math.floor(cell / columns)\n\
  _సర్వత్ర_   c = cell % columns\n\
  _సర్వత్ర_   count = 0\n\
  if ( r>0) {\n\
    if ( c>0 && grid[(r-1)*columns + c-1]) {\n\
      count = count + 1\n\
      //console.log("NW " + r + "," + c)\n\
    }\n\
    if ( grid[(r-1)*columns + c]) {\n\
      count = count + 1\n\
      //console.log("N " + r + "," + c)\n\
    }\n\
    if ( c<columns-1 && grid[(r-1)*columns + c+1]) {\n\
      count = count + 1\n\
      //console.log("NE " + r + "," + c)\n\
    }\n\
  }\n\
  if ( c>0 && grid[r*columns + c-1]) {\n\
    count = count + 1\n\
    //console.log("W " + r + "," + c)\n\
  }\n\
  if ( c<columns-1 && grid[r*columns + c+1]) {\n\
    count = count + 1\n\
    //console.log("E " + r + "," + c)\n\
  }\n\
  if (r < rows-1) {\n\
    if ( c>0 && grid[(r+1) * columns + c-1]) {\n\
      count = count + 1\n\
      //console.log("SW " + r + "," + c)\n\
    }\n\
    if ( grid[(r+1) * columns + c]) {\n\
      count = count + 1\n\
      //console.log("S " + r + "," + c)\n\
    }\n\
    if ( c<columns-1 && grid[(r+1) * columns + c+1]) {\n\
      count = count + 1\n\
      //console.log("SE " + r + "," + c)\n\
    }\n\
  }\n\
  _ఫలము_  count\n\
}\n\
\n\
_సర్వత్ర_   past = [ Array( rows*columns).fill(false),\n\
             Array( rows*columns).fill(false),\n\
             Array( rows*columns).fill(false)\n\
           ]\n\
_సర్వత్ర_   numPast = past.length\n\
\n\
_సర్వత్ర_   lastPast = 0\n\
_సర్వత్ర_   oscillatingCount = 0\n\
_సర్వత్ర_   oscillatingPast\n\
_సర్వత్ర_   oscillatingDuration = 3 // how many oscillations are visible before stopping\n\
\n\
_విధానము_     endTest (grid) {\n\
  // _ఫలము_  true if stable or oscillating\n\
  _సర్వత్ర_   stable = true\n\
  _సర్వత్ర_   oscillating2 = true\n\
  _సర్వత్ర_   oscillating3 = true\n\
  _సర్వత్ర_   oscillating = false\n\
  for (i = grid.length - 1; i>=0; i= i-1) {\n\
    // is the pattern stable?\n\
    if (grid[i] != past[lastPast] [i]) {\n\
       stable = false\n\
    }\n\
\n\
    // is the pattern on period = 2?\n\
    if (grid[i] != past[(lastPast + numPast -1) % numPast][i]) {\n\
       oscillating2 = false\n\
    }\n\
    // is the pattern on period = 3?\n\
    if (grid[i] != past[(lastPast + numPast -2) % numPast][i]) {\n\
       oscillating3 = false\n\
    }\n\
    past[(lastPast+1) % numPast][i] = grid[i]\n\
  }\n\
  if (oscillating2 || oscillating3) {\n\
    if (oscillatingCount == 0) { // first oscillation detected\n\
      oscillatingCount = oscillatingDuration\n\
      oscillatingPast = lastPast\n\
    } else {\n\
      if (lastPast == oscillatingPast) {\n\
        oscillatingCount = oscillatingCount - 1\n\
        if (oscillatingCount == 0) {\n\
          oscillating = true\n\
        }\n\
      }\n\
    }\n\
  }\n\
  lastPast = (lastPast+1) % numPast\n\
  //console.log( "stable:" + stable + " oscil2:" + oscillating2 + " oscil3:" + oscillating3+ " lastPast:" + lastPast)\n\
  _ఫలము_  ( stable || oscillating)\n\
}\n\
\n\
\n\
_విధానము_     caption (message) {\n\
  // save your current position, heading, etc.\n\
  _సర్వత్ర_   savedX = కుంచిక.స్థానము.x\n\
  _సర్వత్ర_   savedY = కుంచిక.స్థానము.y\n\
  _సర్వత్ర_   savedHeading = కుంచిక.కోణము / 2 / Math.PI * 360 //convert radians to degrees\n\
  _సర్వత్ర_   savedColor = కుంచిక.రంగు\n\
  _సర్వత్ర_   savedWidth = కుంచిక.వెడల్పు\n\
\n\
  స్థానము_మార్చు(కనిష్ఠX()+10, కనిష్ఠY()+10)\n\
  దిశ_మార్చు( 90)\n\
\n\
  // erase what will be in the path\n\
  అక్షరరూపము_స్థాపించు("bold 16px helvitica,sans-serif")\n\
  రంగు_మార్చు( తెలుపు )\n\
  వెడల్పు(22)\n\
  ముందుకు_జరుగు(గరిష్ఠY() * 2 - 12)\n\
  స్థానము_మార్చు(కనిష్ఠX()+10, కనిష్ఠY()+5)\n\
  రంగు_మార్చు("నలుపు")\n\
  వ్రాయి( message)\n\
\n\
  //go back from whence you came\n\
  స్థానము_మార్చు( savedX, savedY)\n\
  దిశ_మార్చు( savedHeading)\n\
  రంగు_మార్చు( savedColor)\n\
  వెడల్పు(savedWidth)\n\
}\n\
\n\
\n\
// in the following patterns, the left most bit\n\
// is taken to be the highest bit. There is one\n\
// number per row (for up to 32 bits).\n\
_సర్వత్ర_   trafficLight = [\n\
  //5432109876543210\n\
  0b0000000000000000, //00\n\
  0b0000000000000000, //01\n\
  0b0000000000000000, //02\n\
  0b0000000000000000, //03\n\
  0b0000000000000000, //04\n\
  0b0000001110000000, //05\n\
  0b0000000000000000, //06\n\
  0b0000100000100000, //07\n\
  0b0000100000100000, //08\n\
  0b0000100000100000, //09\n\
  0b0000000000000000, //10\n\
  0b0000001110000000, //11\n\
  0b0000000000000000, //12\n\
  0b0000000000000000, //13\n\
  0b0000000000000000, //14\n\
  0b0000000000000000  //15\n\
]\n\
\n\
_సర్వత్ర_   greaterThan = [\n\
  //5432109876543210\n\
  0b1000000000000000, //00\n\
  0b0100000000000000, //01\n\
  0b0010000000000000, //02\n\
  0b0001000000000000, //03\n\
  0b0000100000000000, //04\n\
  0b0000010000000000, //05\n\
  0b0000001000000000, //06\n\
  0b0000000100000000, //07\n\
  0b0000000100000000, //08\n\
  0b0000001000000000, //09\n\
  0b0000010000000000, //10\n\
  0b0000100000000000, //11\n\
  0b0001000000000000, //12\n\
  0b0010000000000000, //13\n\
  0b0100000000000000, //14\n\
  0b1000000000000000  //15\n\
]\n\
\n\
\n\
_సర్వత్ర_   pulsar = [\n\
  //5432109876543210\n\
  0b0000000000000000, //00\n\
  0b0000000000000000, //01\n\
  0b0000111000111000, //02\n\
  0b0000000000000000, //03\n\
  0b0010000101000010, //04\n\
  0b0010000101000010, //05\n\
  0b0010000101000010, //06\n\
  0b0000111000111000, //07\n\
  0b0000000000000000, //08\n\
  0b0000111000111000, //09\n\
  0b0010000101000010, //10\n\
  0b0010000101000010, //11\n\
  0b0010000101000010, //12\n\
  0b0000000000000000, //13\n\
  0b0000111000111000, //14\n\
  0b0000000000000000  //15\n\
]\n\
\n\
\n\
_సర్వత్ర_   glider = [\n\
  //5432109876543210\n\
  0b0000000000000000, //00\n\
  0b0000000000000000, //01\n\
  0b0000000000000000, //02\n\
  0b0000000000000000, //03\n\
  0b0000000000000000, //04\n\
  0b0000000000000000, //05\n\
  0b0000000000000000, //06\n\
  0b0000000000000000, //07\n\
  0b0000000000000000, //08\n\
  0b0000000000000000, //09\n\
  0b0000000000000000, //10\n\
  0b0000000000000000, //11\n\
  0b0000000000000000, //12\n\
  0b1110000000000000, //13\n\
  0b0010000000000000, //14\n\
  0b0100000000000000  //15\n\
]\n\
\n\
\n\
_సర్వత్ర_   glider2 = [\n\
  //5432109876543210\n\
  0b0100000000000010, //00\n\
  0b0010000000000100, //01\n\
  0b1110000000000111, //02\n\
  0b0000000000000000, //03\n\
  0b0000000000000000, //04\n\
  0b0000000000000000, //05\n\
  0b0000000000000000, //06\n\
  0b0000000000000000, //07\n\
  0b0000000000000000, //08\n\
  0b0000000000000000, //09\n\
  0b0000000000000000, //10\n\
  0b0000000000000000, //11\n\
  0b0000000000000000, //12\n\
  0b1110000000000111, //13\n\
  0b0010000000000100, //14\n\
  0b0100000000000010  //15\n\
]\n\
\n\
\n\
_సర్వత్ర_   lwss = [ // light weight space ship\n\
  //5432109876543210\n\
  0b0000000000000000, //00\n\
  0b0000000000000000, //01\n\
  0b0000000000000000, //02\n\
  0b0000000000000000, //03\n\
  0b0000000000000000, //04\n\
  0b0111100000000000, //05\n\
  0b1000100000000000, //06\n\
  0b0000100000000000, //07\n\
  0b1001000000000000, //08\n\
  0b0000000000000000, //09\n\
  0b0000000000000000, //10\n\
  0b0000000000000000, //11\n\
  0b0000000000000000, //12\n\
  0b0000000000000000, //13\n\
  0b0000000000000000, //14\n\
  0b0000000000000000  //15\n\
]\n\
\n\
\n\
_సర్వత్ర_   lwss2 = [ // light weight space ship\n\
  //5432109876543210\n\
  0b1010000000001001, //00\n\
  0b0001000000010000, //01\n\
  0b0001000000010001, //02\n\
  0b1001000000011110, //03\n\
  0b0111000000000000, //04\n\
  0b0000000000000000, //05\n\
  0b0000000000000000, //06\n\
  0b0000000000000000, //07\n\
  0b0000000000000000, //08\n\
  0b0000000000000000, //09\n\
  0b0000000000000000, //10\n\
  0b0000000000001110, //11\n\
  0b0111100000001001, //12\n\
  0b1000100000001000, //13\n\
  0b0000100000001000, //14\n\
  0b1001000000000101, //15\n\
]\n\
\n\
_సర్వత్ర_   beacons = [\n\
  //5432109876543210\n\
  0b0000000000000000, //00\n\
  0b0000000000000000, //00\n\
  0b0000000000000000, //00\n\
  0b0001100000110000, //01\n\
  0b0001100000110000, //02\n\
  0b0000011011000000, //03\n\
  0b0000011011000000, //04\n\
  0b0000000000000000, //05\n\
  0b0000011011000000, //06\n\
  0b0000011011000000, //07\n\
  0b0001100000110000, //08\n\
  0b0001100000110000, //09\n\
  0b0000000000000000, //12\n\
  0b0000000000000000, //13\n\
  0b0000000000000000, //14\n\
  0b0000000000000000  //15\n\
]\n\
\n\
\n\
_సర్వత్ర_   pentathalon = [\n\
  //5432109876543210\n\
  0b0000000010000000, //00\n\
  0b0000000010000000, //01\n\
  0b0000000111000000, //02\n\
  0b0000000000000000, //03\n\
  0b0000000000000000, //04\n\
  0b0000000111000000, //05\n\
  0b0000000010000000, //06\n\
  0b0000000010000000, //07\n\
  0b0000000010000000, //08\n\
  0b0000000010000000, //09\n\
  0b0000000111000000, //10\n\
  0b0000000000000000, //11\n\
  0b0000000000000000, //12\n\
  0b0000000111000000, //13\n\
  0b0000000010000000, //14\n\
  0b0000000010000000  //15\n\
]\n\
\n\
\n\
_సర్వత్ర_   mwss = [\n\
  //5432109876543210\n\
  0b0000000000000000, //00\n\
  0b0000000000000000, //01\n\
  0b0000000000000000, //02\n\
  0b0000000000000000, //03\n\
  0b0000000000000000, //04\n\
  0b0000100000000000, //05\n\
  0b0010001000000000, //06\n\
  0b0000000100000000, //07\n\
  0b0010000100000000, //08\n\
  0b0001111100000000, //09\n\
  0b0000000000000000, //10\n\
  0b0000000000000000, //11\n\
  0b0000000000000000, //12\n\
  0b0000000000000000, //13\n\
  0b0000000000000000, //14\n\
  0b0000000000000000  //15\n\
]\n\
\n\
\n\
_సర్వత్ర_   hwss = [\n\
  //5432109876543210\n\
  0b0000000000000000, //00\n\
  0b0000000000000000, //01\n\
  0b0000000000000000, //02\n\
  0b0000000000000000, //03\n\
  0b0000000000000000, //04\n\
  0b0000110000000000, //05\n\
  0b0010000100000000, //06\n\
  0b0000000010000000, //07\n\
  0b0010000010000000, //08\n\
  0b0001111110000000, //09\n\
  0b0000000000000000, //10\n\
  0b0000000000000000, //11\n\
  0b0000000000000000, //12\n\
  0b0000000000000000, //13\n\
  0b0000000000000000, //14\n\
  0b0000000000000000  //15\n\
]\n\
\n\
\n\
_సర్వత్ర_   oscillator14 = [\n\
  //5432109876543210\n\
  0b0000000000000000, //00\n\
  0b0000000000000000, //01\n\
  0b0000000011100000, //02\n\
  0b0000000111100000, //03\n\
  0b1100001100011110, //04\n\
  0b1100011001101110, //05\n\
  0b0000000111100000, //06\n\
  0b0000000000000000, //07\n\
  0b0000000000000000, //08\n\
  0b0000000000000000, //09\n\
  0b0000000111100000, //10\n\
  0b1100011001101110, //11\n\
  0b1100001100011110, //12\n\
  0b0000000111100000, //13\n\
  0b0000000011100000, //14\n\
  0b0000000000000000, //15\n\
]\n\
\n\
\n\
_సర్వత్ర_   tumbler = [\n\
  //5432109876543210\n\
  0b0000000000000000, //00\n\
  0b0000000000000000, //01\n\
  0b0000000000000000, //02\n\
  0b0000000000000000, //03\n\
  0b0000001000100000, //04\n\
  0b0000001101100000, //05\n\
  0b0000000101000000, //06\n\
  0b0000010101010000, //07\n\
  0b0000011000110000, //08\n\
  0b0000001000100000, //09\n\
  0b0000000000000000, //10\n\
  0b0000000000000000, //11\n\
  0b0000000000000000, //12\n\
  0b0000000000000000, //13\n\
  0b0000000000000000, //14\n\
  0b0000000000000000  //15\n\
]\n\
\n\
\n\
_సర్వత్ర_   unix = [ // period 6 oscillator\n\
  //5432109876543210\n\
  0b0000000000000000, //00\n\
  0b0000000000000000, //01\n\
  0b0000000000000000, //02\n\
  0b0000011000000000, //03\n\
  0b0000011000000000, //04\n\
  0b0000000000000000, //05\n\
  0b0000000000000000, //06\n\
  0b0000111000000000, //07\n\
  0b0000110100110000, //08\n\
  0b0000001100110000, //09\n\
  0b0000001100000000, //10\n\
  0b0000000000000000, //11\n\
  0b0000000000000000, //12\n\
  0b0000000000000000, //13\n\
  0b0000000000000000, //14\n\
  0b0000000000000000  //15\n\
]\n\
\n\
\n\
\n\
_సర్వత్ర_   greatOnOff = [\n\
  //5432109876543210\n\
  0b0000000000000000, //00\n\
  0b0000000000000000, //01\n\
  0b0000011000000000, //02\n\
  0b0000100100000000, //03\n\
  0b0000101100000000, //04\n\
  0b0001101011000000, //05\n\
  0b0000000110100000, //06\n\
  0b0000000000100000, //07\n\
  0b0000000111000000, //08\n\
  0b0000000100000000, //09\n\
  0b0000000000000000, //10\n\
  0b0000000000000000, //11\n\
  0b0000000000000000, //12\n\
  0b0000000000000000, //13\n\
  0b0000000000000000, //14\n\
  0b0000000000000000  //15\n\
]\n\
\n\
\n\
_సర్వత్ర_   birther = [\n\
  //5432109876543210\n\
  0b0000000000000000, //00\n\
  0b1100000000000000, //01\n\
  0b1100000000000000, //02\n\
  0b0000000000000000, //03\n\
  0b0000000000000000, //04\n\
  0b0001000000000000, //05\n\
  0b1111100000000000, //06\n\
  0b0000010000000000, //07\n\
  0b0001100000000000, //08\n\
  0b0011000000000000, //09\n\
  0b0100000000000000, //10\n\
  0b0000000000000000, //11\n\
  0b0000000000000000, //12\n\
  0b0000000000000000, //13\n\
  0b0000000000000000, //14\n\
  0b0000000000000000  //15\n\
]\n\
\n\
\n\
_సర్వత్ర_   blank = [\n\
  //5432109876543210\n\
  0b0000000000000000, //00\n\
  0b0000000000000000, //01\n\
  0b0000000000000000, //02\n\
  0b0000000000000000, //03\n\
  0b0000000000000000, //04\n\
  0b0000000000000000, //05\n\
  0b0000000000000000, //06\n\
  0b0000000000000000, //07\n\
  0b0000000000000000, //08\n\
  0b0000000000000000, //09\n\
  0b0000000000000000, //10\n\
  0b0000000000000000, //11\n\
  0b0000000000000000, //12\n\
  0b0000000000000000, //13\n\
  0b0000000000000000, //14\n\
  0b0000000000000000  //15\n\
]\n\
\n\
\n\
_సర్వత్ర_   gen\n\
_సర్వత్ర_   numDemos = 16\n\
_సర్వత్ర_   demoNumber\n\
\n\
_విధానము_     ప్రదర్శన() {\n\
  ఆది_స్థితి()\n\
  కుంచికను_దాచు()\n\
  demoNumber = 0\n\
  gen = 10000000\n\
  nextGen()\n\
}\n\
\n\
_విధానము_     nextGen() {\n\
  gen = gen + 1\n\
  if (gen < 100 && !endTest(grid)) {\n\
    generation2( grid)\n\
    drawGrid2( grid, baseCaption + " " + gen)\n\
    delay (nextGen, 100)\n\
  } else {\n\
    switch (demoNumber) {\n\
    case 0:\n\
      loadPattern2(birther)\n\
      baseCaption = "Birther"\n\
      break\n\
    case 15:\n\
      loadPattern2(greatOnOff)\n\
      baseCaption = "Great On/Off"\n\
      break\n\
    case 14:\n\
      loadPattern2(unix)\n\
      baseCaption = "Unix"\n\
      break\n\
    case 13:\n\
      loadPattern2(tumbler)\n\
      baseCaption = "Tumbler"\n\
      break\n\
    case 12:\n\
      loadPattern2(oscillator14)\n\
      baseCaption = "Oscillator 14"\n\
      break\n\
    case 11:\n\
      loadPattern2(hwss)\n\
      baseCaption = "Heavy Weight Space Ship"\n\
      break\n\
    case 10:\n\
      loadPattern2(mwss)\n\
      baseCaption = "Medium Weight Space Ship"\n\
      break\n\
    case 9:\n\
      loadPattern2(trafficLight)\n\
      baseCaption = "Traffic Light"\n\
      break\n\
    case 1:\n\
      loadPattern2(beacons)\n\
      baseCaption = "Beacons"\n\
      break\n\
    case 2:\n\
      loadPattern2(glider)\n\
      baseCaption = "Glider"\n\
      break\n\
    case 3:\n\
      loadPattern2(glider2)\n\
      baseCaption = "Glider Collision"\n\
      break\n\
    case 4:\n\
      loadPattern2(lwss)\n\
      baseCaption = "Light Weight Space Ship"\n\
      break\n\
    case 5:\n\
      loadPattern2(lwss2)\n\
      baseCaption = "Light Weight Space Ship 2"\n\
      break\n\
    case 6:\n\
      loadPattern2(pulsar)\n\
      baseCaption = "Pulsar"\n\
      break\n\
    case 7:\n\
      loadPattern2(greaterThan)\n\
      baseCaption = "Greater Than"\n\
      break\n\
    case 8:\n\
      loadPattern2(pentathalon)\n\
      baseCaption = "Pentathalon"\n\
      break\n\
    default:\n\
      loadPattern2(greaterThan)\n\
      baseCaption = "Greater Than"\n\
      break\n\
    }\n\
    demoNumber = (demoNumber +1) % numDemos\n\
    gen = 0\n\
    drawGrid2( grid, baseCaption + " " + gen)\n\
    delay (nextGen, 500)\n\
  }\n\
}\n\
'
miura_origami ='\
// Miura Origami -- fold pattern for the miura origami\n\
\n\
_విధానము_     horiz( size){\n\
  hy = గరిష్ఠY()\n\
  while (hy > కనిష్ఠY()) {\n\
    స్థానము_మార్చు(కనిష్ఠX(), hy)\n\
    కోణము(90)\n\
    ముందుకు_జరుగు( 2*గరిష్ఠX())\n\
    hy = hy - size\n\
  } \n\
}\n\
\n\
_విధానము_     vert( size) {\n\
  vx = కనిష్ఠX()\n\
  while ( vx < గరిష్ఠX()) {\n\
    vy = గరిష్ఠY()\n\
    while (vy > కనిష్ఠY()) {\n\
      స్థానము_మార్చు( vx, vy)\n\
      కోణము( 180 - 6)\n\
      ముందుకు_జరుగు( size * Math.cos( degToRad(6)))\n\
      కుడి_వైపు_తిరుగు( 12)\n\
      ముందుకు_జరుగు( size * Math.cos( degToRad(6)))\n\
      vy = vy - 2 * size\n\
\n\
    }\n\
    vx = vx + size\n\
  }\n\
}\n\
\n\
\n\
_విధానము_     ప్రదర్శన() {\n\
  ఆది_స్థితి()\n\
   చుట్టొద్దు()\n\
  size = 100\n\
  horiz( size)\n\
  vert( size)\n\
}\n\
'
mountain_tessellation ='\
// Mountain Tessellation -- tessellation with a mountain shaped heptiamond\n\
// a heptiamond is a shape composed of 7 equalateral triangles\n\
//\n\
//\n\
//// Triangle Tessellation -- tile a space using triangles\n\
\n\
colors = ["red", "white", "blue", "yellow", "green"]\n\
\n\
_విధానము_     shapeUp (side, fillColor) {\n\
  // assume pointing in direction of base\n\
  ఆకారము_ప్రారంభించు()\n\
  ముందుకు_జరుగు(3* side)\n\
  ఎడమ_వైపు_తిరుగు(120)\n\
  ముందుకు_జరుగు(2*side)\n\
  ఎడమ_వైపు_తిరుగు( 120)\n\
  ముందుకు_జరుగు(side)\n\
  కుడి_వైపు_తిరుగు( 120)\n\
  ముందుకు_జరుగు( side)\n\
  ఎడమ_వైపు_తిరుగు( 120)\n\
  ముందుకు_జరుగు( 2*side)\n\
  ఎడమ_వైపు_తిరుగు(120)\n\
  ఆకారము_ముగించు( fillColor)\n\
}\n\
\n\
_విధానము_     mountainUnit(side){\n\
  కుంచికను_కింద_పెట్టు()\n\
  shapeUp(side, "darkgreen")//1,1\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  ఎడమ_వైపు_తిరుగు(60)\n\
  ముందుకు_జరుగు(side)\n\
  కుడి_వైపు_తిరుగు(60)\n\
  ముందుకు_జరుగు(5*side)\n\
  కుడి_వైపు_తిరుగు(180)\n\
  కుంచికను_కింద_పెట్టు()\n\
  shapeUp(side, "skyblue")//1,0\n\
  కుంచికను_పైకి_ఎత్తు()\n\
\n\
  ముందుకు_జరుగు(3*side)\n\
  ఎడమ_వైపు_తిరుగు(180)\n\
  కుంచికను_కింద_పెట్టు()\n\
  shapeUp(side, "green") //0,0\n\
\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  ఎడమ_వైపు_తిరుగు(60)\n\
  ముందుకు_జరుగు(2*side)\n\
  ఎడమ_వైపు_తిరుగు(120)\n\
  కుంచికను_కింద_పెట్టు()\n\
  shapeUp(side, "lightblue")//0,1\n\
  ముందుకు_జరుగు( 3*side)\n\
  ఎడమ_వైపు_తిరుగు( 180)\n\
  కుంచికను_పైకి_ఎత్తు()\n\
\n\
}\n\
\n\
// nextColor could be completely random, if desired\n\
_విధానము_     nextColor() {\n\
  c = colors[ count % color.length]\n\
  count = count + 1\n\
  _ఫలము_  c\n\
}\n\
\n\
\n\
_విధానము_     newRow(lastx, lasty) {\n\
  // _విధానము_     to determine where the new row should start\n\
}\n\
\n\
_విధానము_     ప్రదర్శన() {\n\
  ఆది_స్థితి()\n\
   చుట్టొద్దు()\n\
  side = 20\n\
  rowx = కనిష్ఠX() - side // - 5.5 * side\n\
  rowy = కనిష్ఠY()// +2*side\n\
  కుడి_వైపు_తిరుగు(90)\n\
  mx = rowx\n\
  my = rowy\n\
\n\
console.log("xy<: " + కనిష్ఠX() + " " + కనిష్ఠY())\n\
  // row until run off bottom or off right side\n\
  // column when end is off screen\n\
\n\
  // while ( x<గరిష్ఠX() && y>కనిష్ఠY()) {\n\
  _సర్వత్ర_   done = false\n\
  _సర్వత్ర_   i = 0\n\
  _సర్వత్ర_   sqrt3 = Math.sqrt(3)\n\
  while (!done){\n\
console.log("xy: " + i + " " + mx + " " + my)\n\
    స్థానము_మార్చు(mx, my)\n\
    mountainUnit( side)\n\
    //స్థానము_మార్చు(mx+2.2*side, my+1*sqrt3*side)\n\
    //వ్రాయి(i)\n\
    \n\
    mx = mx + 4.5 * side\n\
    my = my -sqrt3/2 * side\n\
\n\
    if (mx > గరిష్ఠX() || my < (కనిష్ఠY() - 1.5 * sqrt3 * side)) {\n\
      console.log( "New row")\n\
      if (my > గరిష్ఠY()) {\n\
        done = true\n\
      }\n\
      // move up one row\n\
      rowx = rowx + 0.5 * side\n\
      rowy = rowy + 1.5 * sqrt3 * side\n\
      if (rowy > గరిష్ఠY() + sqrt3 * side) {\n\
        while (rowy> గరిష్ఠY() + sqrt3 * side) {\n\
          // step forward one more unit\n\
           console.log( "Stepping forward one")\n\
           rowx = rowx + 4.5 * side\n\
           rowy = rowy - sqrt3/2 * side\n\
        }\n\
      } else if (rowx > కనిష్ఠX() - 1 * side) {\n\
         console.log( "Backing up one")\n\
         // back up one more unit\n\
         rowx = rowx - 4.5 * side\n\
         rowy = rowy + sqrt3/2 * side\n\
      }\n\
      mx = rowx\n\
      my = rowy\n\
      //done = true\n\
    }\n\
    if (i> 75) {\n\
      done = true\n\
    }\n\
    if ( mx>గరిష్ఠX() + 500  && my>గరిష్ఠY()) {\n\
      done = true\n\
    }\n\
    i++\n\
  }\n\
  console.log("Count: " + --i)\n\
\n\
}\n\
'
naifeh_ajlun ='\
// Naifah Ajlun -- inspired by the art of Steven Naifeh of the same name\n\
// for more information see https://stevennaifeh.com\n\
\n\
// kite has side b and h, square has side s\n\
// b = s + h\n\
// either vary the కోణము or vary the sides\n\
// try calulating the కోణము\n\
\n\
\n\
_విధానము_     quadrangle( ){\n\
  // start at lower left corner of outer square\n\
  ఆకారము_ప్రారంభించు()\n\
  ముందుకు_జరుగు(longSide)\n\
  కుడి_వైపు_తిరుగు( 180 - angleA)\n\
  ముందుకు_జరుగు(longSide)\n\
  కుడి_వైపు_తిరుగు(90)\n\
  ముందుకు_జరుగు( shortSide)\n\
  కుడి_వైపు_తిరుగు(180 - angleC)\n\
  ముందుకు_జరుగు(shortSide)\n\
  కుడి_వైపు_తిరుగు(90)\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  ముందుకు_జరుగు( longSide + shortSide)\n\
  కుడి_వైపు_తిరుగు(90)\n\
  కుంచికను_కింద_పెట్టు()\n\
  ఆకారము_ముగించు("lightblue")\n\
}\n\
\n\
_విధానము_     ప్రదర్శన() {\n\
  ఆది_స్థితి()\n\
   చుట్టొద్దు()\n\
  rows = 4\n\
  columns = 5\n\
\n\
  side = 1.7 * Math.min(గరిష్ఠX()/(columns*3+1), గరిష్ఠY()/(rows*3+1))\n\
console.log ("side:"+side)\n\
\n\
  // sides and angles of the quadrangle\n\
  shortSide = side  // matter of convenience, could be something else\n\
  longSide = side*2 // matter of convenience\n\
  angleA = 2* radToDeg(Math.atan(shortSide/longSide))\n\
  angleC = 180 - angleA\n\
  offsetAngle = radToDeg( Math.atan( side/(shortSide + longSide)))\n\
\n\
  // center this more or less\n\
  స్థానము_మార్చు(-.5 * columns * (shortSide + longSide) + .4 *side, .5 * (rows-2) * (shortSide + longSide) + .4*side)\n\
  ఎడమ_వైపు_తిరుగు( offsetAngle)\n\
  for (_సర్వత్ర_   k=0; k<rows; k++) {\n\
    for (_సర్వత్ర_   j=0; j<columns; j++) { // across row\n\
      for (_సర్వత్ర_   i=0; i<4; i++) { // around inner square\n\
        quadrangle()\n\
      }\n\
      కుంచికను_పైకి_ఎత్తు()\n\
      కుడి_వైపు_తిరుగు(90)\n\
      ముందుకు_జరుగు( shortSide + longSide)\n\
      కుడి_వైపు_తిరుగు(90)\n\
      ముందుకు_జరుగు( side)\n\
      ఎడమ_వైపు_తిరుగు(180)\n\
      కుంచికను_కింద_పెట్టు()\n\
    }\n\
    కుంచికను_పైకి_ఎత్తు()\n\
    ఎడమ_వైపు_తిరుగు( 90- offsetAngle)\n\
    ముందుకు_జరుగు( columns * (shortSide + longSide)/Math.sin( degToRad( 90-offsetAngle)))\n\
    ఎడమ_వైపు_తిరుగు( offsetAngle)\n\
    ముందుకు_జరుగు( side)\n\
    ఎడమ_వైపు_తిరుగు(90)\n\
    ముందుకు_జరుగు( shortSide + longSide)\n\
    ఎడమ_వైపు_తిరుగు( 180)\n\
    కుంచికను_కింద_పెట్టు()\n\
    కుంచికను_దాచు()\n\
  }\n\
}\n\
'
naifeh_cyrene ='\
// Naifah Cyrene -- inspired by the art of Steven Naifeh of the same name.\n\
// for more information see https://stevennaifeh.com\n\
\n\
/* need to focus on the kites to form bow ties, rather than the squares.\n\
this may be a little harder to do, but\n\
easier to rasterize\n\
row of bowties\n\
row of up and down kites\n\
etc.\n\
\n\
The quadrangle must be symmetrical, in that the short sides are equal and\n\
the long sides are equal. The ratio between the two may vary.\n\
*/\n\
\n\
_విధానము_     bowties (count, back){\n\
  //assume on left edge pointing up, moving to right\n\
  // routine has invariance\n\
  // back = 0 big end first, =1 small end first\n\
  కుడి_వైపు_తిరుగు( 90)\n\
  for (_సర్వత్ర_   i=0; i<count; i++) {\n\
    కుంచికను_కింద_పెట్టు()\n\
    if (i % 2 == back) {\n\
      downKite()\n\
    } else {\n\
      upKite()\n\
    }\n\
    కుంచికను_పైకి_ఎత్తు()\n\
    ముందుకు_జరుగు( hypoteneuse)\n\
  }\n\
  ఎడమ_వైపు_తిరుగు(180)\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  ముందుకు_జరుగు( count * hypoteneuse)\n\
  కుంచికను_కింద_పెట్టు()\n\
  కుడి_వైపు_తిరుగు(90)\n\
}\n\
\n\
\n\
_విధానము_     upKite() {\n\
  //assume direction is in the axis of the kite\n\
  ఆకారము_ప్రారంభించు()\n\
  కుడి_వైపు_తిరుగు( shortAngle)\n\
  ముందుకు_జరుగు( longSide)\n\
  ఎడమ_వైపు_తిరుగు( 90)\n\
  ముందుకు_జరుగు( shortSide)\n\
  ఎడమ_వైపు_తిరుగు( 180 - 2 * longAngle)\n\
  ముందుకు_జరుగు( shortSide)\n\
  ఎడమ_వైపు_తిరుగు( 90)\n\
  ముందుకు_జరుగు( longSide)\n\
  కుడి_వైపు_తిరుగు(180+ shortAngle)\n\
  ఆకారము_ముగించు("lightblue")\n\
}\n\
\n\
_విధానము_     downKite() {\n\
  //assume direction is in the axis of the kite\n\
  ఆకారము_ప్రారంభించు()\n\
  కుడి_వైపు_తిరుగు( longAngle)\n\
  ముందుకు_జరుగు( shortSide)\n\
  ఎడమ_వైపు_తిరుగు( 90)\n\
  ముందుకు_జరుగు( longSide)\n\
  ఎడమ_వైపు_తిరుగు(180 - 2 * shortAngle)\n\
  ముందుకు_జరుగు( longSide)\n\
  ఎడమ_వైపు_తిరుగు( 90)\n\
  ముందుకు_జరుగు( shortSide)\n\
  కుడి_వైపు_తిరుగు( 180 + longAngle)\n\
  ఆకారము_ముగించు("lightblue")\n\
}\n\
\n\
_విధానము_     kites( count, back) {\n\
  //assume pointing up, perpendicular to flow\n\
  // routine has invariance\n\
  ఎడమ_వైపు_తిరుగు(180)\n\
  for( _సర్వత్ర_   i=0; i<count; i++) {\n\
    కుంచికను_కింద_పెట్టు()\n\
    if (i % 2 == back) {\n\
      downKite()\n\
    } else {\n\
      upKite()\n\
    }\n\
\n\
    కుంచికను_పైకి_ఎత్తు()\n\
    ఎడమ_వైపు_తిరుగు(90)\n\
    ముందుకు_జరుగు( hypoteneuse)\n\
    కుడి_వైపు_తిరుగు(90)\n\
    కుంచికను_కింద_పెట్టు()\n\
  }\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  కుడి_వైపు_తిరుగు(90)\n\
  ముందుకు_జరుగు( count * hypoteneuse)\n\
  కుడి_వైపు_తిరుగు(90)\n\
  కుంచికను_కింద_పెట్టు()\n\
}\n\
\n\
\n\
_విధానము_     ప్రదర్శన() {\n\
  ఆది_స్థితి()\n\
  కుంచికను_దాచు()\n\
  side = 2.5 * Math.min( గరిష్ఠX()/9, గరిష్ఠY()/8)\n\
\n\
  //side = 50 // size of the basic block not the inner square\n\
  ratio = 2 // ratio of long side to short side of the quadragon.\n\
  verticalCount = 7\n\
  horizontalCount = 8\n\
\n\
  longSide = side * ratio / (1 + ratio)\n\
  shortSide = side - longSide\n\
\n\
  hypoteneuse = Math.sqrt(longSide * longSide + shortSide * shortSide)\n\
\n\
  shortAngle = radToDeg(Math.atan(shortSide/longSide))\n\
  longAngle = 90 - shortAngle\n\
\n\
  // center the figure\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  ముందుకు_జరుగు(side * horizontalCount * 1.3 / 4)\n\
  ఎడమ_వైపు_తిరుగు(90)\n\
  ముందుకు_జరుగు(side * verticalCount * 1.7 /4)\n\
  కుడి_వైపు_తిరుగు(90)\n\
  కుంచికను_కింద_పెట్టు()\n\
\n\
  for (_సర్వత్ర_   i=0; i<verticalCount; i++) {\n\
    bowties( horizontalCount, i % 2)\n\
    kites( horizontalCount+1, 1 - (i % 2)) // change 1 to 0 and 0 to 1\n\
    కుంచికను_పైకి_ఎత్తు()\n\
    కుడి_వైపు_తిరుగు(180)\n\
    ముందుకు_జరుగు( hypoteneuse)\n\
    కుడి_వైపు_తిరుగు(180)\n\
    కుంచికను_కింద_పెట్టు()\n\
  }\n\
  bowties( horizontalCount,i%2) // row across bottom to be neat\n\
}\n\
'
naifeh_jeresh ='\
// Naifah Jeresh -- inspired by the art of Steven Naifeh of the same name\n\
// for more information see https://stevennaifeh.com\n\
\n\
// this figure has some issues. To get the line weights to change\n\
// you must stroke the entire figure after it is filled.\n\
\n\
\n\
// GLOBALS\n\
// \n\
_సర్వత్ర_   sColor = "నలుపు"  // stroke color\n\
_సర్వత్ర_   sWidth = 3        // stroke width\n\
_సర్వత్ర_   fColor = "white"  // fill color\n\
_సర్వత్ర_   bColor = "green"  // background color\n\
\n\
// FUNCTIONS\n\
//\n\
_విధానము_     tri( side, pointAngle, fill) {\n\
  if (fill) {\n\
    ఆకారము_ప్రారంభించు()\n\
  }\n\
  for (_సర్వత్ర_   i=0; i<3; i++) {\n\
    ముందుకు_జరుగు( side)\n\
    ఎడమ_వైపు_తిరుగు(60 - pointAngle)\n\
    ముందుకు_జరుగు( side)\n\
    కుడి_వైపు_తిరుగు( 180 - pointAngle)\n\
  }\n\
  if (fill) {\n\
    ఆకారము_ముగించు(fColor)\n\
  }\n\
}\n\
\n\
\n\
_విధానము_     jeresh (sid, pAngle, fill) {\n\
  for (_సర్వత్ర_   i=0;i<6;i++) {\n\
    కుంచికను_కింద_పెట్టు()\n\
    tri( sid, pAngle, fill)\n\
\n\
    _సర్వత్ర_   tx = కుంచిక.స్థానము.x\n\
    _సర్వత్ర_   ty = కుంచిక.స్థానము.y\n\
    _సర్వత్ర_   tHeading = కుంచిక.కోణము\n\
    కుంచికను_పైకి_ఎత్తు()\n\
    ముందుకు_జరుగు( sid)\n\
    ఎడమ_వైపు_తిరుగు( 60 - pAngle)\n\
    ముందుకు_జరుగు( sid)\n\
    కుడి_వైపు_తిరుగు( 180 - pAngle)\n\
    ముందుకు_జరుగు( sid)\n\
    ఎడమ_వైపు_తిరుగు( 60)\n\
\n\
    for (_సర్వత్ర_   j=0; j<3; j++) {\n\
      కుంచికను_కింద_పెట్టు()\n\
      tri(sid, pAngle, fill)\n\
      కుంచికను_పైకి_ఎత్తు()\n\
      ముందుకు_జరుగు(sid)\n\
      ఎడమ_వైపు_తిరుగు(60)\n\
    }\n\
    స్థానము_మార్చు(tx,ty)\n\
\n\
    కుంచిక.కోణము=tHeading\n\
    కుంచికను_పైకి_ఎత్తు()\n\
    ముందుకు_జరుగు( sid)\n\
    ఎడమ_వైపు_తిరుగు(60)\n\
  }\n\
}\n\
\n\
\n\
_విధానము_     ప్రదర్శన() {\n\
  /* can vary point కోణము.\n\
  0 and 120 is a hex tesselation\n\
  60 and 180 are triangles\n\
  90\n\
  negative numbers have overlap, so\n\
  something is not quite right\n\
  */\n\
  ఆది_స్థితి()\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  _సర్వత్ర_   pointAngle = 30\n\
  _సర్వత్ర_   side = 60\n\
  side = .2* Math.min( గరిష్ఠX(), గరిష్ఠY())\n\
  //center a bit\n\
  స్థానము_మార్చు(side, -.3 * side)\n\
\n\
  background(bColor)\n\
  రంగు_మార్చు( sColor)\n\
  వెడల్పు( 1)\n\
  jeresh( side, pointAngle, true)\n\
  వెడల్పు( 3)\n\
  jeresh( side, pointAngle, false)\n\
\n\
  కుంచికను_దాచు()\n\
}\n\
'
naifeh_mamluk ='\
// Naifeh Mamluk -- inspired by the art of Steven Naifeh of same name\n\
// for more information see https://stevennaifeh.com\n\
\n\
\n\
_విధానము_     decagon(s, fcolor) {\n\
  // position at base of the decagon  parallel to bottom\n\
  // invariant\n\
  // note:\n\
  //   this shape basically replaces a hexagon,\n\
  //   but only with two sides.\n\
  //   the cutouts are for an outscribed rectangle\n\
  //   2*side by sqrt(3)*side\n\
\n\
  ఆకారము_ప్రారంభించు()\n\
  ముందుకు_జరుగు( s)\n\
  ఎడమ_వైపు_తిరుగు( 120)\n\
  ముందుకు_జరుగు( d1)\n\
  కుడి_వైపు_తిరుగు( 90)\n\
  ముందుకు_జరుగు( d2)\n\
  ఎడమ_వైపు_తిరుగు( 120)\n\
  ముందుకు_జరుగు( d2)\n\
  కుడి_వైపు_తిరుగు(90)\n\
  ముందుకు_జరుగు(d1)\n\
  ఎడమ_వైపు_తిరుగు(120)\n\
  ముందుకు_జరుగు( s)\n\
\n\
  ఎడమ_వైపు_తిరుగు( 120)\n\
  ముందుకు_జరుగు( d1)\n\
  కుడి_వైపు_తిరుగు( 90)\n\
  ముందుకు_జరుగు( d2)\n\
  ఎడమ_వైపు_తిరుగు( 120)\n\
  ముందుకు_జరుగు( d2)\n\
  కుడి_వైపు_తిరుగు(90)\n\
  ముందుకు_జరుగు(d1)\n\
  ఎడమ_వైపు_తిరుగు(120)\n\
  ఆకారము_ముగించు( fcolor)\n\
}\n\
\n\
_విధానము_     ప్రదర్శన() {\n\
  ఆది_స్థితి()\n\
   చుట్టొద్దు()\n\
  కుడి_వైపు_తిరుగు(90)\n\
  side = 40\n\
  side = .25 * Math.min( గరిష్ఠX(), గరిష్ఠY())\n\
  స్థానము_మార్చు(-.5* side, side)\n\
\n\
  //derived distances\n\
  d1 = side/2\n\
  d2 = side * Math.sqrt(3)/2\n\
\n\
  for( _సర్వత్ర_   i=0; i<6; i++) {\n\
    decagon( side, "blue")\n\
\n\
    కుంచికను_పైకి_ఎత్తు()\n\
    ఎడమ_వైపు_తిరుగు(90)\n\
    ముందుకు_జరుగు( Math.sqrt(3) * side)\n\
    ఎడమ_వైపు_తిరుగు(30)\n\
    కుంచికను_కింద_పెట్టు()\n\
\n\
    decagon( side, "blue")\n\
\n\
    కుంచికను_పైకి_ఎత్తు()\n\
    ఎడమ_వైపు_తిరుగు(150)\n\
    ముందుకు_జరుగు( Math.sqrt(3) * side)\n\
    ఎడమ_వైపు_తిరుగు( 90)\n\
    కుంచికను_కింద_పెట్టు()\n\
\n\
    ముందుకు_జరుగు( side)\n\
    కుడి_వైపు_తిరుగు( 60)\n\
  }\n\
  కుంచికను_దాచు()\n\
}\n\
'
naifeh_mizen ='\
// Naifeh Mizen Simple -- inspired by the are of Steven Naifeh of the same name\n\
// for more information see https://stevennaifeh.com\n\
\n\
\n\
_విధానము_     v (side, fColor) {\n\
  // assume pointing up at upper left corner\n\
  // invariant\n\
  if (fColor != "") {\n\
    ఆకారము_ప్రారంభించు()\n\
  }\n\
  ఎడమ_వైపు_తిరుగు( 30)\n\
  ముందుకు_జరుగు( 3*side)\n\
  కుడి_వైపు_తిరుగు( 120)\n\
  ముందుకు_జరుగు( side)\n\
  కుడి_వైపు_తిరుగు(60)\n\
  ముందుకు_జరుగు(side)\n\
  ఎడమ_వైపు_తిరుగు( 120)\n\
  ముందుకు_జరుగు( side)\n\
  కుడి_వైపు_తిరుగు(60)\n\
  ముందుకు_జరుగు( side)\n\
  కుడి_వైపు_తిరుగు( 120)\n\
  ముందుకు_జరుగు( 3*side)\n\
  కుడి_వైపు_తిరుగు(150)\n\
  if (fColor != "") {\n\
    ఆకారము_ముగించు(fColor)\n\
  }\n\
}\n\
\n\
\n\
_విధానము_     mizen( side, lColor, fColor) {\n\
  రంగు_మార్చు(lColor)\n\
  కుడి_వైపు_తిరుగు(120)\n\
  for (_సర్వత్ర_   i=0; i<6; i++) {\n\
    v( side, fColor)\n\
    కుంచికను_పైకి_ఎత్తు()\n\
    కుడి_వైపు_తిరుగు(30)\n\
    ముందుకు_జరుగు( side)\n\
    ఎడమ_వైపు_తిరుగు( 60)\n\
    ముందుకు_జరుగు( 2*side)\n\
    ఎడమ_వైపు_తిరుగు(30)\n\
    కుంచికను_కింద_పెట్టు()\n\
    v( side, fColor)\n\
\n\
    కుంచికను_పైకి_ఎత్తు()\n\
    కుడి_వైపు_తిరుగు(30)\n\
    ముందుకు_జరుగు( 2*side)\n\
    కుడి_వైపు_తిరుగు( 150)\n\
    కుంచికను_కింద_పెట్టు()\n\
    v( side, fColor)\n\
\n\
    కుంచికను_పైకి_ఎత్తు()\n\
    కుడి_వైపు_తిరుగు(30)\n\
    ముందుకు_జరుగు( side)\n\
    కుడి_వైపు_తిరుగు(120)\n\
    ముందుకు_జరుగు( 4*side)\n\
    కుడి_వైపు_తిరుగు(150)\n\
    కుంచికను_కింద_పెట్టు()\n\
  }\n\
}\n\
\n\
\n\
_విధానము_     mizenSimple() {\n\
  bColor = "red"\n\
  lColor = "white"\n\
  background ("tan")\n\
\n\
  //center canvas more or less\n\
  స్థానము_మార్చు(-5*side, 3.5*side)\n\
  వెడల్పు(1)\n\
  కోణము(0)\n\
  mizen( side, "నలుపు", "red")\n\
\n\
  // do again to make lines stand out\n\
  స్థానము_మార్చు(-5*side, 3.5*side)\n\
  వెడల్పు(3)\n\
  కోణము(0)\n\
  mizen( side, "white", "")\n\
}\n\
\n\
_విధానము_     ప్రదర్శన() {\n\
  ఆది_స్థితి()\n\
   చుట్టొద్దు()\n\
  side = 40 // 1/2 basic face of hexagon, width...\n\
  side = .15 * Math.min( గరిష్ఠX(), గరిష్ఠY())\n\
  mizenSimple()\n\
  కుంచికను_దాచు()\n\
}\n\
'
naifeh_mizen6 ='\
// Naifeh Mizen Six -- inspired by the art of Steven Naifeh of the same name\n\
// for more information see https://stevennaifeh.com\n\
\n\
_విధానము_     v (side, fColor) {\n\
  // assume pointing up at upper left corner\n\
  // invariant\n\
  if (fColor != "") {\n\
    ఆకారము_ప్రారంభించు()\n\
  }\n\
  ఎడమ_వైపు_తిరుగు( 30)\n\
  ముందుకు_జరుగు( 3*side)\n\
  కుడి_వైపు_తిరుగు( 120)\n\
  ముందుకు_జరుగు( side)\n\
  కుడి_వైపు_తిరుగు(60)\n\
  ముందుకు_జరుగు(side)\n\
  ఎడమ_వైపు_తిరుగు( 120)\n\
  ముందుకు_జరుగు( side)\n\
  కుడి_వైపు_తిరుగు(60)\n\
  ముందుకు_జరుగు( side)\n\
  కుడి_వైపు_తిరుగు( 120)\n\
  ముందుకు_జరుగు( 3*side)\n\
  కుడి_వైపు_తిరుగు(150)\n\
  if (fColor != "") {\n\
    ఆకారము_ముగించు(fColor)\n\
  }\n\
}\n\
\n\
\n\
_విధానము_     mizen( side, lColor, fColor) {\n\
  // assume pointing up at upper left corner\n\
  // ends up rotated 120 CW at same point\n\
  రంగు_మార్చు(lColor)\n\
  కుడి_వైపు_తిరుగు(120)\n\
  for (_సర్వత్ర_   i=0; i<6; i++) {\n\
    కుంచికను_కింద_పెట్టు()\n\
    v( side, fColor)\n\
    కుంచికను_పైకి_ఎత్తు()\n\
    కుడి_వైపు_తిరుగు(30)\n\
    ముందుకు_జరుగు( side)\n\
    ఎడమ_వైపు_తిరుగు( 60)\n\
    ముందుకు_జరుగు( 2*side)\n\
    ఎడమ_వైపు_తిరుగు(30)\n\
    కుంచికను_కింద_పెట్టు()\n\
    v( side, fColor)\n\
\n\
    కుంచికను_పైకి_ఎత్తు()\n\
    కుడి_వైపు_తిరుగు(30)\n\
    ముందుకు_జరుగు( 2*side)\n\
    కుడి_వైపు_తిరుగు( 150)\n\
    కుంచికను_కింద_పెట్టు()\n\
    v( side, fColor)\n\
\n\
    కుంచికను_పైకి_ఎత్తు()\n\
    కుడి_వైపు_తిరుగు(30)\n\
    ముందుకు_జరుగు( side)\n\
    కుడి_వైపు_తిరుగు(120)\n\
    ముందుకు_జరుగు( 4*side)\n\
    కుడి_వైపు_తిరుగు(150)\n\
    కుంచికను_కింద_పెట్టు()\n\
  }\n\
}\n\
\n\
\n\
\n\
_విధానము_     mizen6(side) {\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  for (_సర్వత్ర_   j=0; j<6; j++) {\n\
    mx = కుంచిక.స్థానము.x\n\
    my = కుంచిక.స్థానము.y\n\
    ma = కుంచిక.కోణము\n\
    వెడల్పు(0)\n\
    mizen( side, "white", "blue")\n\
\n\
    // do it again for the border lines\n\
    స్థానము_మార్చు( mx, my)\n\
    కోణము( radToDeg( ma))\n\
    వెడల్పు(.1 * side)\n\
    mizen( side, "white", "")\n\
\n\
    కుంచికను_పైకి_ఎత్తు()\n\
    ఎడమ_వైపు_తిరుగు(30)\n\
    ముందుకు_జరుగు(13 * side)\n\
    ఎడమ_వైపు_తిరుగు(120)\n\
    ముందుకు_జరుగు( 3*side)\n\
    కుడి_వైపు_తిరుగు(90)\n\
    కుంచికను_కింద_పెట్టు()\n\
  }\n\
  కుంచికను_దాచు()\n\
}\n\
\n\
\n\
_విధానము_     ప్రదర్శన() {\n\
  ఆది_స్థితి()\n\
  side = .08 * Math.min( గరిష్ఠX(), గరిష్ఠY())\n\
  //center canvas more or less\n\
  స్థానము_మార్చు(-8*side, 9*side)\n\
  mizen6( side)\n\
}\n\
'
naifeh_petra ='\
// Naifeh Petra -- inspired by the art of Steven Naifeh of the same name\n\
// for more information see https://stevennaifeh.com\n\
\n\
/* want to do this in a rasterized way\n\
row of backslashs\n\
row of dashs\n\
row of slashes\n\
\n\
This does not support using a wider pen width.\n\
*/\n\
\n\
_విధానము_     backslash (fColor) {\n\
  // assume pointing up at upper left corner\n\
  // invariant\n\
  ఆకారము_ప్రారంభించు()\n\
  కుడి_వైపు_తిరుగు( 150)\n\
  ముందుకు_జరుగు( 2*size)\n\
  ఎడమ_వైపు_తిరుగు( 120)\n\
  ముందుకు_జరుగు( size)\n\
  ఎడమ_వైపు_తిరుగు( 60)\n\
  ముందుకు_జరుగు( 2* size)\n\
  ఎడమ_వైపు_తిరుగు( 120)\n\
  ముందుకు_జరుగు( size)\n\
  కుడి_వైపు_తిరుగు( 150)\n\
  ఆకారము_ముగించు(fColor)\n\
}\n\
\n\
_విధానము_     slash (fColor) {\n\
  // assume pointing up at upper left corner\n\
  // invariant\n\
  ఆకారము_ప్రారంభించు()\n\
  ఎడమ_వైపు_తిరుగు( 150)\n\
  ముందుకు_జరుగు( 2*size)\n\
  ఎడమ_వైపు_తిరుగు( 120)\n\
  ముందుకు_జరుగు( size)\n\
  ఎడమ_వైపు_తిరుగు( 60)\n\
  ముందుకు_జరుగు( 2* size)\n\
  ఎడమ_వైపు_తిరుగు( 120)\n\
  ముందుకు_జరుగు( size)\n\
  కుడి_వైపు_తిరుగు( 90)\n\
  ఆకారము_ముగించు(fColor)\n\
}\n\
\n\
_విధానము_     dash () {\n\
  // assume pointing up at upper left corner\n\
  // invariant\n\
  ఆకారము_ప్రారంభించు()\n\
  కుడి_వైపు_తిరుగు( 150)\n\
  ముందుకు_జరుగు( size)\n\
  ఎడమ_వైపు_తిరుగు( 60)\n\
  ముందుకు_జరుగు( 2*size)\n\
  ఎడమ_వైపు_తిరుగు( 120)\n\
  ముందుకు_జరుగు( size)\n\
  ఎడమ_వైపు_తిరుగు( 60)\n\
  ముందుకు_జరుగు( 2*size)\n\
  కుడి_వైపు_తిరుగు( 90)\n\
  ఆకారము_ముగించు(fColor)\n\
}\n\
\n\
_విధానము_     dashBackslashes(count, mode, fColor) {\n\
  // assume pointing up at upper left corner\n\
  // mode = 0 normal; mode =1 skip first\n\
  // invariant\n\
  backup = 0\n\
  for (_సర్వత్ర_   i=0; i<count; i++) {\n\
    కుంచికను_కింద_పెట్టు()\n\
    if (i % 2 == 0) {\n\
      if (mode == 0 || i != 0){\n\
        dash()\n\
      }\n\
      కుంచికను_పైకి_ఎత్తు()\n\
      కుడి_వైపు_తిరుగు(90)\n\
      ముందుకు_జరుగు( 2*size)\n\
      ఎడమ_వైపు_తిరుగు(90)\n\
      కుంచికను_కింద_పెట్టు()\n\
      backup = backup + 2\n\
    } else {\n\
      backslash(fColor)\n\
      కుంచికను_పైకి_ఎత్తు()\n\
      కుడి_వైపు_తిరుగు(90)\n\
      ముందుకు_జరుగు( size)\n\
      ఎడమ_వైపు_తిరుగు(90)\n\
      కుంచికను_కింద_పెట్టు()\n\
      backup = backup + 1\n\
    }\n\
  }\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  ఎడమ_వైపు_తిరుగు(90)\n\
  ముందుకు_జరుగు(backup * size)\n\
  కుడి_వైపు_తిరుగు(90)\n\
  కుంచికను_కింద_పెట్టు()\n\
}\n\
\n\
\n\
_విధానము_     slashes(count, fColor) {\n\
  // assume pointing up at upper left corner\n\
  // invariant\n\
  for (_సర్వత్ర_   i=0; i<count; i++) {\n\
    slash( fColor)\n\
    కుంచికను_పైకి_ఎత్తు()\n\
    కుడి_వైపు_తిరుగు(90)\n\
    ముందుకు_జరుగు( 3*size)\n\
    ఎడమ_వైపు_తిరుగు(90)\n\
    కుంచికను_కింద_పెట్టు()\n\
  }\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  ఎడమ_వైపు_తిరుగు(90)\n\
  ముందుకు_జరుగు(count * 3 * size)\n\
  కుడి_వైపు_తిరుగు(90)\n\
  కుంచికను_కింద_పెట్టు()\n\
  కుంచికను_పైకి_ఎత్తు()\n\
}\n\
\n\
\n\
_విధానము_     ప్రదర్శన() {\n\
  ఆది_స్థితి()\n\
  fColor = "blue"\n\
  size = .17 * Math.min( గరిష్ఠX(), గరిష్ఠY())\n\
  రంగు_మార్చు( తెలుపు )\n\
  //వెడల్పు(.1* size)\n\
\n\
  //center canvas more or less\n\
  pointUp = false\n\
  if (pointUp) {\n\
    కోణము(90)\n\
    స్థానము_మార్చు(4*size, 3.5*size)\n\
  } else {\n\
    కోణము(-60)\n\
    స్థానము_మార్చు(-5.5*size, -1*size)\n\
  }\n\
  కుంచికను_దాచు()\n\
\n\
  dashBackslashes(4, 0, fColor)\n\
\n\
  కుడి_వైపు_తిరుగు(150)\n\
  ముందుకు_జరుగు( size)\n\
  ఎడమ_వైపు_తిరుగు(150)\n\
  slashes( 3, fColor)\n\
\n\
  ఎడమ_వైపు_తిరుగు(150)\n\
  ముందుకు_జరుగు(2*size)\n\
  కుడి_వైపు_తిరుగు(60)\n\
  ముందుకు_జరుగు(size)\n\
  కుడి_వైపు_తిరుగు(90)\n\
  dashBackslashes(6, 0, fColor)\n\
\n\
  కుడి_వైపు_తిరుగు(150)\n\
  ముందుకు_జరుగు(size)\n\
  ఎడమ_వైపు_తిరుగు(150)\n\
  slashes(4, fColor)\n\
\n\
  ఎడమ_వైపు_తిరుగు(150)\n\
  ముందుకు_జరుగు(2*size)\n\
  కుడి_వైపు_తిరుగు(60)\n\
  ముందుకు_జరుగు(size)\n\
  కుడి_వైపు_తిరుగు(90)\n\
  dashBackslashes(7, 1, fColor)\n\
\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  కుడి_వైపు_తిరుగు(90)\n\
  ముందుకు_జరుగు(3*size)\n\
  కుడి_వైపు_తిరుగు( 60)\n\
  ముందుకు_జరుగు( size)\n\
  ఎడమ_వైపు_తిరుగు(150)\n\
  కుంచికను_కింద_పెట్టు()\n\
  slashes(3, fColor)\n\
  \n\
  ఎడమ_వైపు_తిరుగు(150)\n\
  ముందుకు_జరుగు(2*size)\n\
  కుడి_వైపు_తిరుగు(60)\n\
  ముందుకు_జరుగు(size)\n\
  కుడి_వైపు_తిరుగు(90)\n\
  dashBackslashes(5, 1, fColor)\n\
}\n\
'
naifeh_saida ='\
// Naifeh Saida -- inspired by the art of Steven Naifeh with the same name\n\
// for more information see https://stevennaifeh.com\n\
\n\
\n\
_విధానము_     square (side) {\n\
  ఆకారము_ప్రారంభించు()\n\
  for (_సర్వత్ర_   i=0; i<4; i++){\n\
    ముందుకు_జరుగు(side)\n\
    కుడి_వైపు_తిరుగు(90)\n\
  }\n\
  ఆకారము_ముగించు("blue")\n\
}\n\
\n\
\n\
_విధానము_     layer (side, offsetAngle) {\n\
  ఎడమ_వైపు_తిరుగు( offsetAngle)\n\
  for (_సర్వత్ర_   i=0; i<8; i++){\n\
    కుంచికను_పైకి_ఎత్తు()\n\
    ముందుకు_జరుగు( side)\n\
    ఎడమ_వైపు_తిరుగు(45)\n\
    కుంచికను_కింద_పెట్టు()\n\
    square(side)\n\
    కుంచికను_పైకి_ఎత్తు()\n\
    కుడి_వైపు_తిరుగు(45)\n\
    వెనుకకు_జరుగు( side)\n\
    కుడి_వైపు_తిరుగు(45)\n\
  }\n\
  కుడి_వైపు_తిరుగు(offsetAngle)\n\
}\n\
\n\
\n\
_విధానము_     ప్రదర్శన() {\n\
  ఆది_స్థితి()\n\
   చుట్టొద్దు()\n\
  side = 14\n\
  side = .033 * Math.min( గరిష్ఠX(), గరిష్ఠY())\n\
  factor = Math.sqrt(2 + Math.sqrt( 2))\n\
  //    side, వ్యాసార్థము, offsetAngle\n\
  layer(      side, 0)\n\
  side = side * factor\n\
  layer( side, 22.5)\n\
  side = side * factor\n\
  layer( side, 0)\n\
  side = side * factor\n\
  layer( side,   22.5)\n\
  side = side * factor\n\
  layer( side,   0)\n\
  కుంచికను_దాచు()\n\
}\n\
'
naifeh_saida_inverse ='\
// Naifeh Saida Inverse -- draws the inverse of the Steven Naifeh Saida sculpture\n\
// for more information see https://stevennaifeh.com\n\
\n\
\n\
_విధానము_     antilayer (side, innerSide, offset) {\n\
  ఎడమ_వైపు_తిరుగు( offset)\n\
  for (_సర్వత్ర_   i=0; i<8; i++){\n\
    కుంచికను_పైకి_ఎత్తు()\n\
    ముందుకు_జరుగు( side)\n\
    కుంచికను_కింద_పెట్టు()\n\
  \n\
    ఆకారము_ప్రారంభించు()\n\
    ఎడమ_వైపు_తిరుగు(45 + 22.5)\n\
    ముందుకు_జరుగు(innerSide)\n\
    ఎడమ_వైపు_తిరుగు(90)\n\
    ముందుకు_జరుగు(innerSide)\n\
    ఎడమ_వైపు_తిరుగు(180)\n\
    ముందుకు_జరుగు(innerSide)\n\
    కుడి_వైపు_తిరుగు(90)\n\
    ముందుకు_జరుగు(innerSide)\n\
    ఎడమ_వైపు_తిరుగు(180-22.5)\n\
\n\
    ముందుకు_జరుగు(side)\n\
    ఎడమ_వైపు_తిరుగు(135)\n\
    ముందుకు_జరుగు( side)\n\
    ఎడమ_వైపు_తిరుగు(45)\n\
    ఆకారము_ముగించు("నలుపు")\n\
    కుంచికను_పైకి_ఎత్తు()\n\
    ముందుకు_జరుగు( side)\n\
    కుంచికను_కింద_పెట్టు()\n\
    ఎడమ_వైపు_తిరుగు(180)\n\
  }\n\
  కుడి_వైపు_తిరుగు(offset)\n\
}\n\
\n\
_విధానము_     ప్రదర్శన() {\n\
  ఆది_స్థితి()\n\
   చుట్టొద్దు()\n\
  కుంచికను_దాచు()\n\
  side = .023 * Math.min( గరిష్ఠX(), గరిష్ఠY())\n\
\n\
  factor = Math.sqrt( 2+ Math.sqrt(2))\n\
  //side = 10\n\
  outside = factor * side\n\
  antilayer( outside, side, 22.5)\n\
  side = outside\n\
  outside = factor * side\n\
  antilayer( outside, side, 0)\n\
  side = outside\n\
  outside = factor * side\n\
  antilayer( outside, side, 22.5)\n\
  side = outside\n\
  outside = factor * side\n\
  antilayer( outside, side, 0)\n\
  side = outside\n\
  outside = factor * side\n\
  antilayer( outside, side, 22.5)\n\
}\n\
'
nested_hexagons ='\
// Nested Hexagons -- draw a set of nested hexagons\n\
\n\
// draw a polygon of n sides of length m\n\
_విధానము_     polygon(sides,side) {\n\
  ఆవర్తించు(sides, _విధానము_     () {\n\
    ముందుకు_జరుగు(side);\n\
    కుడి_వైపు_తిరుగు(360/sides);\n\
  });\n\
}\n\
\n\
// draw a set of nested hexagons\n\
_విధానము_     ప్రదర్శన() {\n\
   size = గరిష్ఠY()\n\
   if (గరిష్ఠX() < size) {\n\
     size = గరిష్ఠX()\n\
   }\n\
   steps = size/10 // 10 is the step size\n\
   ఆది_స్థితి();\n\
   కుంచికను_దాచు();\n\
   for(step=1; step < steps; step=step+1) {\n\
      రంగు_మార్చు(యాదృచ్ఛిక_సంఖ్య(16));\n\
      polygon(6,step*10);\n\
      కుంచికను_పైకి_ఎత్తు();\n\
      ఎడమ_వైపు_తిరుగు(120)\n\
      ముందుకు_జరుగు(10);\n\
      కుడి_వైపు_తిరుగు(120);\n\
      కుంచికను_కింద_పెట్టు();\n\
   }\n\
}\n\
'
nested_squares ='\
// Nested Squares -- draw a set of nested squares\n\
\n\
//draw a square\n\
_విధానము_     square(side) {\n\
   ఆవర్తించు(4, _విధానము_     () {\n\
      ముందుకు_జరుగు(side);\n\
      కుడి_వైపు_తిరుగు(90);\n\
   });\n\
}\n\
\n\
\n\
// draw some nested squares\n\
_విధానము_     nestedSquares(count) {\n\
  చెరిపి_వేయి();\n\
  స్థానము_మార్చు(0,0);\n\
  కుంచికను_దాచు();\n\
  for (s=1; s<count*4; s=s+4) {\n\
    కుంచికను_పైకి_ఎత్తు();\n\
    // move down and back 2 spaces\n\
    ఎడమ_వైపు_తిరుగు(90);\n\
    ముందుకు_జరుగు(2);\n\
    ఎడమ_వైపు_తిరుగు(90);\n\
    ముందుకు_జరుగు(2);\n\
    ఎడమ_వైపు_తిరుగు(180);\n\
    కుంచికను_కింద_పెట్టు();\n\
    రంగు_మార్చు(యాదృచ్ఛిక_సంఖ్య(16));\n\
    square (s);\n\
  }\n\
}\n\
\n\
_విధానము_     demo1() {\n\
  ఆది_స్థితి()\n\
  size = 2* గరిష్ఠY()\n\
  if (2* గరిష్ఠX() < size) {\n\
    size = 2*గరిష్ఠX()\n\
  }\n\
  number = .9 * size /4  // 4 is the difference in square size\n\
  _విధానము_     nest25 () {\n\
    nestedSquares (size);\n\
  }\n\
  // animate a simple parameterless function\n\
  ఆడించు( nest25, 200);\n\
}\n\
\n\
_విధానము_     ప్రదర్శన() {\n\
  // animate with _విధానము_     needing a parameter passed\n\
  ఆది_స్థితి()\n\
  size = 2* గరిష్ఠY()\n\
  if (2* గరిష్ఠX() < size) {\n\
    size = 2*గరిష్ఠX()\n\
  }\n\
  number = .9 * size /4  // 4 is the difference in square size\n\
  ఆడించు( _విధానము_     () { nestedSquares(number)} ,200);\n\
}\n\
'
pentahex ='\
// Pentahex -- game pieces consisting of five hexagons in a 10x11 field\n\
\n\
// This sets up a pseudo interpreter. Each move is a కుడి_వైపు_తిరుగు(r) or ఎడమ_వైపు_తిరుగు(l)\n\
// token. Each piece consists of a set of such moves to from the outline\n\
// of the piece.\n\
\n\
_విధానము_     r() {\n\
  ముందుకు_జరుగు( side)\n\
  కుడి_వైపు_తిరుగు( 60)\n\
}\n\
\n\
_విధానము_     l() {\n\
  ముందుకు_జరుగు( side)\n\
  ఎడమ_వైపు_తిరుగు( 60)\n\
}\n\
\n\
  I5=[l,l,r,l,r,l,r,l,r,l,l,l,l,r,l,r,l,r,l,r,l,l]\n\
  D5=[l,l,r,l,r,l,l,l,r,l,l,r,l,l,r,l]\n\
  T5=[l,l,r,r,l,r,l,l,l,l,r,r,l,l,l,r,l,r,l,l]\n\
  N5=[l,l,r,r,l,l,r,l,r,l,l,l,l,r,l,r,r,l,l,r,l,l]\n\
  P5=[l,l,r,l,r,r,l,l,l,r,l,l,l,r,l,r,l,r,l,l]\n\
  E5=[l,l,r,r,l,l,l,r,r,l,l,l,l,r,l,r,l,r,l,l]\n\
  G5=[l,l,r,r,l,l,r,l,l,r,l,l,l,l,r,r,r,l,l,r,l,l]\n\
  A5=[l,r,l,l,l,r,r,l,l,l,l,r,r,l,l,l,r,l]\n\
  J5=[l,r,l,l,r,l,r,l,r,l,l,l,l,r,l,r,l,r,r,l,l,l]\n\
  Y5=[l,l,r,l,r,r,l,l,l,l,r,r,l,l,l,l,r,r,l,r,l,l]\n\
  X5=[l,l,r,r,l,l,l,r,l,l,l,r,r,l,l,l,r,l]\n\
  y5=[l,l,r,r,l,l,l,l,r,r,r,l,l,l,l,r,l,l,r,r,l,l]\n\
  u5=[l,l,r,l,r,l,l,r,l,l,l,l,r,r,r,l,l,l,r,l]\n\
  V5=[l,l,r,l,r,l,l,l,l,r,r,r,l,l,l,l,r,l,r,l]\n\
  U5=[l,r,l,l,r,l,l,l,l,r,r,r,r,l,l,l,l,r,l,l,r,l]\n\
  C5=[l,l,l,r,r,l,r,r,l,l,l,l,r,l,l,r,l,r,l,l,r,l]\n\
  q5=[l,l,r,r,l,r,l,l,l,r,l,l,l,r,r,l,l,r,l,l]\n\
  r5=[l,l,r,l,r,r,r,l,l,l,l,r,l,l,r,l,l,r,l,r,l,l]\n\
  L5=[l,r,l,r,l,l,l,l,r,l,r,r,l,r,l,l,l,l,r,l,r,l]\n\
  W5=[l,l,r,r,l,l,r,r,l,l,l,l,r,l,l,r,r,l,l,r,l,l]\n\
  S5=[l,l,l,r,r,l,r,l,l,r,l,l,l,l,r,r,l,r,l,l,r,l]\n\
  p5=[l,l,r,l,r,l,l,r,l,l,l,r,l,l,r,r,l,l]\n\
\n\
_విధానము_     shape( bx, by, axis, turns, fillColor ) {\n\
  // draw a shape at board position bx, by, with the piece oriented\n\
  // on one of six axises. The shape consists of an array of turns.\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  స్థానము_మార్చు( baseX, baseY)\n\
  కోణము(0)\n\
  ముందుకు_జరుగు( 2* by * side * Math.cos(degToRad(30)))\n\
  కుడి_వైపు_తిరుగు(60)\n\
  ముందుకు_జరుగు( 2* bx * side * Math.cos(degToRad(30)))\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  నిండు_వృత్తము()  //center of start cell\n\
  కోణము(60 * axis )\n\
  ఎడమ_వైపు_తిరుగు( 180 - 30)\n\
  ముందుకు_జరుగు( side)\n\
  ఎడమ_వైపు_తిరుగు(120) \n\
  కుంచికను_కింద_పెట్టు()\n\
  ఆకారము_ప్రారంభించు()\n\
  for (j=0; j< turns.length; j++) {\n\
    turns[j]()\n\
  }\n\
  ఆకారము_ముగించు( fillColor)\n\
  కుంచికను_పైకి_ఎత్తు()\n\
\n\
  ఎడమ_వైపు_తిరుగు( 60)\n\
  ముందుకు_జరుగు(side)\n\
  నిండు_వృత్తము()\n\
  వెనుకకు_జరుగు(side)\n\
  కుడి_వైపు_తిరుగు( 60)\n\
\n\
// _ఫలము_  to the start position, not really necessary\n\
  ఎడమ_వైపు_తిరుగు(60)\n\
  ముందుకు_జరుగు( side)\n\
  ఎడమ_వైపు_తిరుగు( 30)\n\
}\n\
\n\
_విధానము_     drawAll() {\n\
  ఆది_స్థితి()\n\
  side = 15\n\
  baseX = -200\n\
  baseY = -200\n\
\n\
  shape(0,0,0,D5)\n\
  shape(3,0,0,u5)\n\
  shape(6,0,0,V5)\n\
  shape(9,0,0,r5)\n\
  shape(12,0,0,y5)\n\
  shape(15,0,0,L5)\n\
  shape(0,4,0,U5)\n\
  shape(3,4,0,Y5)\n\
  shape(6,4,0,p5)\n\
  shape(9,4,0,C5)\n\
  shape(12,4,0,A5)\n\
  shape(15,4,0,J5)\n\
  shape(0,7,0,I5)\n\
  shape(3,8,0,T5)\n\
  shape(6,8,0,N5)\n\
  shape(9,8,0,P5)\n\
  shape(12,8,0,G5)\n\
  shape(15,8,0,E5)\n\
  shape(0,12,0,S5)\n\
  shape(3,12,0,q5)\n\
  shape(6,12,0,W5)\n\
  shape(9,12,0,X5)\n\
}\n\
\n\
_విధానము_     ప్రదర్శన() {\n\
  ఆది_స్థితి()\n\
   చుట్టొద్దు()\n\
  కుంచికను_దాచు()\n\
\n\
  side =   Math.min( 2*గరిష్ఠX()/ 12/ 1.5, 2*గరిష్ఠY()/ 16/ Math.sqrt(3))\n\
  //side = 20\n\
\n\
  baseX = -5 * 1.5 * side\n\
  baseY = -7 * Math.sqrt(3) * side\n\
\n\
  shape(0,2,3,D5, "red")\n\
  shape(2,0,1,u5, "lightgreen")\n\
  shape(5,0,1,V5, "blue")\n\
  shape(10,0,4,r5, "yellow")\n\
  shape(3,1,5,y5, "blue")\n\
  shape(10,1,5,L5, "red")\n\
  shape(5,3,3,U5, "red")\n\
  shape(3,2,0,Y5, "yellow")\n\
  shape(1,3,0,X5, "lightgreen")\n\
  shape(0,5,0,W5, "red")\n\
  shape(9,2,4,q5, "blue")\n\
  shape(5,4,5,p5, "lightgreen")\n\
  shape(9,3,5,S5, "yellow")\n\
  shape(10,5,4,C5, "lightgreen")\n\
  shape(8,6,1,A5, "yellow")\n\
  shape(8,5,4,J5, "red")\n\
  shape(3,7,1,I5, "blue")\n\
  shape(0,7,0,T5, "yellow")\n\
  shape(1,9,1,N5, "lightgreen")\n\
  shape(3,9,1,P5, "yellow")\n\
  shape(7,8,1,G5, "red")\n\
  shape(7,9,1,E5, "blue")\n\
}\n\
'
polygon ='\
// Polygon -- draw a polygon of n sides of length m\n\
\n\
// draw a polygon with n sides of length m\n\
_విధానము_     polygon(sides,side) {\n\
  ఆవర్తించు(sides, _విధానము_     () {\n\
    ముందుకు_జరుగు(side);\n\
    కుడి_వైపు_తిరుగు(360/sides);\n\
  });\n\
}\n\
\n\
// draw a random polygon\n\
_విధానము_     ప్రదర్శన() {\n\
   ఆది_స్థితి();\n\
   side = గరిష్ఠY()\n\
   if (గరిష్ఠX() < side) {\n\
     side = గరిష్ఠX()\n\
   }\n\
   side = .4 *side\n\
   స్థానము_మార్చు(-.4 * side, -.5 * side)\n\
   కుంచికను_దాచు();\n\
   polygon( యాదృచ్ఛిక_సంఖ్య( 3,10), side);\n\
}\n\
'
random_stars ='\
// Random Stars -- draw stars randomly on the canvas\n\
\n\
_విధానము_     star (side, sColor) {\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  ముందుకు_జరుగు(.54*side)\n\
  turn (180-18)\n\
  కుంచికను_కింద_పెట్టు()\n\
  _సర్వత్ర_   i=0\n\
  ఆకారము_ప్రారంభించు()\n\
  while (i<5){\n\
    ముందుకు_జరుగు(side)\n\
    కుడి_వైపు_తిరుగు(180-36)\n\
    i = i + 1\n\
  }\n\
  ఆకారము_ముగించు(sColor)\n\
  turn (180+18)\n\
}\n\
\n\
\n\
_విధానము_     ప్రదర్శన() {\n\
  ఆది_స్థితి()\n\
  for (i=1; i< 150; i=i+1) {\n\
    స్థానము_మార్చు(యాదృచ్ఛిక_సంఖ్య(కనిష్ఠX(),గరిష్ఠX()), యాదృచ్ఛిక_సంఖ్య( కనిష్ఠY(),గరిష్ఠY()))\n\
    ఎడమ_వైపు_తిరుగు(యాదృచ్ఛిక_సంఖ్య(359))\n\
    star (యాదృచ్ఛిక_సంఖ్య(2,15), యాదృచ్ఛిక_సంఖ్య(15))\n\
  }\n\
  కుంచికను_దాచు()\n\
}\n\
'
random_stick_men ='\
// Random Stick Men -- draw stick men randomly on the canvas\n\
\n\
// stick man\n\
_విధానము_     stickMan (height) {\n\
  _సర్వత్ర_   headDiameter = height/4;\n\
  _సర్వత్ర_   torsoLength = height/3;\n\
  _సర్వత్ర_   neckLength = torsoLength/3\n\
  _సర్వత్ర_   armLength = height/3;\n\
  _సర్వత్ర_   legLength = height/2;\n\
\n\
  //assume center of man is center of torso and up is in the pointed direction\n\
  కుంచికను_పైకి_ఎత్తు();\n\
  ముందుకు_జరుగు(torsoLength/2 + neckLength + headDiameter/2); \n\
  కుంచికను_కింద_పెట్టు();\n\
  వృత్తము(headDiameter/2); //draw head\n\
  కుంచికను_పైకి_ఎత్తు();\n\
  కుడి_వైపు_తిరుగు(180); //down\n\
  ముందుకు_జరుగు(headDiameter/2);\n\
  కుంచికను_కింద_పెట్టు()\n\
  ముందుకు_జరుగు(neckLength); //neck\n\
  కుడి_వైపు_తిరుగు(120);\n\
  ముందుకు_జరుగు(armLength); //left arm\n\
  కుంచికను_పైకి_ఎత్తు();\n\
  వెనుకకు_జరుగు(armLength);\n\
  కుడి_వైపు_తిరుగు(120);\n\
  కుంచికను_కింద_పెట్టు();\n\
  ముందుకు_జరుగు(armLength); //right arm\n\
  కుంచికను_పైకి_ఎత్తు();\n\
  వెనుకకు_జరుగు(armLength);\n\
  కుడి_వైపు_తిరుగు(120);\n\
  కుంచికను_కింద_పెట్టు();\n\
  ముందుకు_జరుగు(torsoLength); // torso\n\
  కుడి_వైపు_తిరుగు(30);\n\
  ముందుకు_జరుగు(legLength); //left leg\n\
  కుంచికను_పైకి_ఎత్తు();\n\
  వెనుకకు_జరుగు(legLength);\n\
  ఎడమ_వైపు_తిరుగు(60);\n\
  కుంచికను_కింద_పెట్టు();\n\
  ముందుకు_జరుగు(legLength); //right leg\n\
  కుంచికను_పైకి_ఎత్తు();\n\
  వెనుకకు_జరుగు(legLength);\n\
  కుడి_వైపు_తిరుగు(30+180);\n\
  ముందుకు_జరుగు(torsoLength/2);\n\
}\n\
\n\
_విధానము_     ప్రదర్శన() {\n\
  ఆది_స్థితి();\n\
  కుంచికను_దాచు();\n\
  number = 0.0005 *  గరిష్ఠX() * గరిష్ఠY() // uniform density no matter size\n\
  for (i=0; i<number; i++) {\n\
    స్థానము_మార్చు(యాదృచ్ఛిక_సంఖ్య( కనిష్ఠX()+20, గరిష్ఠX()-20),యాదృచ్ఛిక_సంఖ్య( కనిష్ఠY()+20, గరిష్ఠY()-20));\n\
    రంగు_మార్చు(యాదృచ్ఛిక_సంఖ్య(16));\n\
    stickMan(random (30,60));\n\
  }\n\
}\n\
'
rhombic_star_tessellation ='\
// Rhombic Star Tessellation -- a star tessellation using rhombus\n\
\n\
colors = ["red", "white", "blue", "yellow", "green"]\n\
numColors = colors.length\n\
\n\
_విధానము_     rh(side, fillColor) {\n\
  ఆకారము_ప్రారంభించు()\n\
  ముందుకు_జరుగు( side)\n\
  ఎడమ_వైపు_తిరుగు( 45)\n\
  ముందుకు_జరుగు( side)\n\
  ఎడమ_వైపు_తిరుగు( 180-45)\n\
  ముందుకు_జరుగు( side)\n\
  ఎడమ_వైపు_తిరుగు( 45)\n\
  ముందుకు_జరుగు( side)\n\
  ఎడమ_వైపు_తిరుగు( 180-45)\n\
  ఆకారము_ముగించు(fillColor)\n\
}\n\
\n\
_విధానము_     sideBySide( count, side, fillColor) {\n\
  for( _సర్వత్ర_   j=0; j<count; j++) {\n\
    కుంచికను_కింద_పెట్టు()\n\
    rh( side, fillColor)\n\
    కుంచికను_పైకి_ఎత్తు()\n\
    కుడి_వైపు_తిరుగు( (180-45)/2)\n\
    ముందుకు_జరుగు( 2* side * Math.sin( degToRad( 22.5)))\n\
    ఎడమ_వైపు_తిరుగు( ( 180-45)/2)\n\
  }\n\
  ఎడమ_వైపు_తిరుగు( ( 180-45)/2 + 45)\n\
  ముందుకు_జరుగు( 2 * count * side * Math.sin( degToRad( 22.5)))\n\
  కుడి_వైపు_తిరుగు( (180-45)/2)\n\
}\n\
\n\
_విధానము_     cent(side, count) {\n\
  for( _సర్వత్ర_   i=0; i<8; i++) { // draw the center\n\
    rh( side, colors[0%numColors])\n\
    ఎడమ_వైపు_తిరుగు( 45)\n\
  }\n\
\n\
  for( _సర్వత్ర_   i=0; i<8; i++) { // draw the second tier\n\
    ముందుకు_జరుగు( side)\n\
    rh( side, colors[1%numColors])\n\
    కుడి_వైపు_తిరుగు( 45)\n\
    rh( side, colors[1%numColors])\n\
    ఎడమ_వైపు_తిరుగు(45)\n\
    వెనుకకు_జరుగు( side)\n\
    ఎడమ_వైపు_తిరుగు(45)\n\
  }\n\
\n\
  for( _సర్వత్ర_   j=2; j<count; j++) { // draw the other tiers\n\
    for( _సర్వత్ర_   i=0; i<8; i++) {\n\
      ముందుకు_జరుగు( j*side)\n\
      కుంచికను_కింద_పెట్టు()\n\
      rh( side, colors[j%numColors])\n\
      కుడి_వైపు_తిరుగు( 45)\n\
      sideBySide(j, side, colors[j%numColors])\n\
      వెనుకకు_జరుగు( j*side)\n\
      ఎడమ_వైపు_తిరుగు(45)\n\
    }\n\
  }\n\
}\n\
\n\
// nextColor could be completely random, if desired\n\
_విధానము_     nextColor() { \n\
  c = colors[ count % color.length]\n\
  count = count + 1\n\
  _ఫలము_  c\n\
}\n\
\n\
_విధానము_     ప్రదర్శన() {\n\
  ఆది_స్థితి()\n\
   చుట్టొద్దు()\n\
  side = .075 * Math.min(గరిష్ఠX(), గరిష్ఠY())\n\
  cent( side, 12)\n\
  కుంచికను_దాచు()\n\
}\n\
'
rice_penta_tessellation_1 ='\
// Rice Penta Tessellation 1 -- pentagon tessellation discovered by Margorie Rice\n\
\n\
c1 = "yellow"\n\
c2 = "నారింజ"\n\
c3 = "red"\n\
c4 = "blue"\n\
c5 = "blue"\n\
c6 = "red"\n\
c7 = "yellow"\n\
c8 = "నారింజ"\n\
\n\
_విధానము_     pr(fill) {\n\
  ఆకారము_ప్రారంభించు()\n\
  ముందుకు_జరుగు(sidea)\n\
  ఎడమ_వైపు_తిరుగు(180-angleB)\n\
  ముందుకు_జరుగు(sideb)\n\
  ఎడమ_వైపు_తిరుగు(180-angleC)\n\
  ముందుకు_జరుగు(sidec)\n\
  ఎడమ_వైపు_తిరుగు(180-angleD)\n\
  ముందుకు_జరుగు(sided)\n\
  ఎడమ_వైపు_తిరుగు(180-angleE)\n\
  ముందుకు_జరుగు(sidee)\n\
  ఎడమ_వైపు_తిరుగు(180-angleA)\n\
  ఆకారము_ముగించు(fill)\n\
}\n\
\n\
_విధానము_     pl(fill) {\n\
  ఆకారము_ప్రారంభించు()\n\
  ముందుకు_జరుగు(sidea)\n\
  కుడి_వైపు_తిరుగు(180-angleB)\n\
  ముందుకు_జరుగు(sideb)\n\
  కుడి_వైపు_తిరుగు(180-angleC)\n\
  ముందుకు_జరుగు(sidec)\n\
  కుడి_వైపు_తిరుగు(180-angleD)\n\
  ముందుకు_జరుగు(sided)\n\
  కుడి_వైపు_తిరుగు(180-angleE)\n\
  ముందుకు_జరుగు(sidee)\n\
  కుడి_వైపు_తిరుగు(180-angleA)\n\
  ఆకారము_ముగించు(fill)\n\
}\n\
\n\
\n\
_విధానము_     కుంచికను_పైకి_ఎత్తు() { // penta unit\n\
  pr(c1)\n\
  pl(c2)\n\
\n\
  ముందుకు_జరుగు( 2*sidea)\n\
  ఎడమ_వైపు_తిరుగు(180)\n\
  pr(c3)\n\
  pl(c4)\n\
\n\
\n\
  ఎడమ_వైపు_తిరుగు( angleA)\n\
  ముందుకు_జరుగు( sidee)\n\
  ఎడమ_వైపు_తిరుగు( 180 - angleC)\n\
  ముందుకు_జరుగు( sideb)\n\
  ఎడమ_వైపు_తిరుగు( 180- angleB)\n\
  ముందుకు_జరుగు( sidea)\n\
  కుడి_వైపు_తిరుగు(180)\n\
\n\
  pl(c5)\n\
  pr(c6)\n\
\n\
  ముందుకు_జరుగు( 2 * sidea)\n\
  కుడి_వైపు_తిరుగు(180)\n\
  pr(c7)\n\
  pl(c8)\n\
}\n\
\n\
_విధానము_     ప్రదర్శన() {\n\
  ఆది_స్థితి()\n\
   చుట్టొద్దు()\n\
  size = 10\n\
\n\
  sidea = size\n\
  sideb = 5.9 * size // fudging to make work\n\
  sidec = 2.8 * size // fudging to make work\n\
  sided = sidec\n\
  sidee = 2 * sidec\n\
  angleA = 120\n\
  angleB = 90\n\
  angleC = 120\n\
  angleD = 90\n\
  angleE = 120\n\
  స్థానము_మార్చు(కనిష్ఠX(), గరిష్ఠY())\n\
  స్థానము_మార్చు(కనిష్ఠX(),గరిష్ఠY())\n\
  bigX = కనిష్ఠX() + 2*size\n\
  bigY = గరిష్ఠY()\n\
  దిశ_మార్చు(44)\n\
  while (కుంచిక.స్థానము.x < గరిష్ఠX()) {\n\
    స్థానము_మార్చు(bigX, bigY)\n\
    while (కుంచిక.స్థానము.y > కనిష్ఠY()-8*size) {\n\
      కుంచికను_పైకి_ఎత్తు()\n\
      ఎడమ_వైపు_తిరుగు( angleA)\n\
      ముందుకు_జరుగు( sidee)\n\
      కుడి_వైపు_తిరుగు( 180 - angleE)\n\
      ముందుకు_జరుగు( 2* sidec)\n\
      ఎడమ_వైపు_తిరుగు( 180 - angleE)\n\
      ముందుకు_జరుగు( sidec)\n\
      కుడి_వైపు_తిరుగు( 180 - angleD)\n\
      ముందుకు_జరుగు( sided)\n\
      ఎడమ_వైపు_తిరుగు( 180- angleA)\n\
      ముందుకు_జరుగు( 2* sidea)\n\
      కుడి_వైపు_తిరుగు( 180)\n\
    }\n\
    bigX = bigX + 20.72 * size\n\
    bigY = bigY + .4 * size\n\
  }\n\
}\n\
'
serendipitous ='\
// Serendipitous Circles -- draw ellipses with quadratic equation\n\
// from Byte magazine Aug 1977\n\
_విధానము_     ప్రదర్శన() {\n\
  ఆది_స్థితి()\n\
  x1 = యాదృచ్ఛిక_సంఖ్య(కనిష్ఠX(),గరిష్ఠX())\n\
  y1 = యాదృచ్ఛిక_సంఖ్య(కనిష్ఠY(),గరిష్ఠY())\n\
  i = 0\n\
  రంగు_మార్చు( నీలము )\n\
  while (i < 100) {\n\
    i++\n\
    //వ్రాయి(x + " " + y)\n\
    x2 = x1 - y1/2\n\
    y2 = y1 + x2/2\n\
    len = Math.sqrt( ((y2-y1)*(y2-y1)) + ((x2-x1)*(x2-x1)))\n\
    dir = Math.asin( (y2-y1) / len) + Math.PI / 2\n\
    if ( (x2-x1) < 0) {\n\
      dir = (2 * Math.PI) - dir\n\
    }\n\
    //x1 = Math.floor( x2)\n\
    //y1 = Math.floor( y2)\n\
    x1 = x2\n\
    y1 = y2\n\
    కోణము (360 * dir / 2 / Math.PI)\n\
    ముందుకు_జరుగు(len)\n\
  }\n\
}\n\
'
sierpinski_curve ='\
// Sierpinski Curve -- draw a set of Sierpinski curves\n\
\n\
/* A Sierpinski curve is a symmetric\n\
fractal that covers a plane.  \n\
Note how each level is similar to the\n\
preceding level\n\
\n\
This also demonstrates the use of the\n\
delay _విధానము_     and powerful concepts\n\
of _విధానము_     redefinition and\n\
recursion.\n\
Function redefinition is a function\n\
defined within a _విధానము_     so that each\n\
time the outer _విధానము_     is invoked a new\n\
copy of the inner _విధానము_     is created.\n\
In this example, a part() _విధానము_     is\n\
created when either the sierpinski or\n\
halfSierpinski functions are invoked.\n\
Recursion is a _విధానము_     that calls\n\
itself. Recursive functions must include\n\
some test to stop the recursion to\n\
prevent the dreaded infinite loop.\n\
*/\n\
_విధానము_     halfSierpinski(size, level) {\n\
  if (level == 0)\n\
    ముందుకు_జరుగు(size);\n\
  else {\n\
    _విధానము_     part() {\n\
      halfSierpinski(size, level - 1);\n\
      ఎడమ_వైపు_తిరుగు(45);\n\
      ముందుకు_జరుగు(size * Math.sqrt(2));\n\
      ఎడమ_వైపు_తిరుగు(45);\n\
      halfSierpinski(size, level - 1);\n\
    }\n\
    part();\n\
    కుడి_వైపు_తిరుగు(90);\n\
    ముందుకు_జరుగు(size);\n\
    కుడి_వైపు_తిరుగు(90);\n\
    part();\n\
  }\n\
}\n\
\n\
_విధానము_     sierpinski(size, level) {\n\
  _విధానము_     part () {\n\
    halfSierpinski(size, level);\n\
    కుడి_వైపు_తిరుగు(90);\n\
    ముందుకు_జరుగు(size);\n\
    కుడి_వైపు_తిరుగు(90);\n\
  }\n\
  part ();\n\
  part ();\n\
}\n\
\n\
_సర్వత్ర_   i = 1; // a global variable used for each iteration of delayed\n\
\n\
_విధానము_     delayed() {\n\
  if (i<7) {\n\
    చెరిపి_వేయి();\n\
    కుంచికను_దాచు();\n\
    కుంచిక_కదిలిన_ప్రతి_సారీ_చిత్రీకరించు(true);\n\
    స్థానము_మార్చు(0,.9*కనిష్ఠY());\n\
\n\
    // move start point so figure stays centered\n\
    కుంచికను_పైకి_ఎత్తు();\n\
    కోణము(0);\n\
\n\
    size = 1.8 * Math.min( గరిష్ఠX(), గరిష్ఠY())\n\
    _సర్వత్ర_   sides = 4 * 2**i -3 // number of sides\n\
    _సర్వత్ర_   side = size/sides;\n\
    ఎడమ_వైపు_తిరుగు(90)\n\
    ముందుకు_జరుగు(side/2)\n\
    కుడి_వైపు_తిరుగు(90)\n\
\n\
    కుంచికను_కింద_పెట్టు();\n\
\n\
    sierpinski(side, i);\n\
    స్థానము_మార్చు(కనిష్ఠX(),కనిష్ఠY());\n\
    కోణము(90);\n\
    అక్షరరూపము_స్థాపించు("bold 12pt Ariel,sans-serif")\n\
    వ్రాయి("Sierpinski curve of order "+ i);\n\
    చిత్రీకరించు();\n\
    i = i + 1;\n\
    విలంబించు(delayed,3000)\n\
  }\n\
}\n\
\n\
_విధానము_     ప్రదర్శన() {\n\
  i = 0;\n\
  delayed ();\n\
}\n\
'
sierpinski_triangle ='\
// Sierpinski Triangle -- draw a recursive triangular fractal\n\
// a recursive _విధానము_     is one that calls itself\n\
_విధానము_     sierpinski (order, side) {\n\
    if (order == 0) {\n\
        ఆకారము_ప్రారంభించు()\n\
        ముందుకు_జరుగు(side)\n\
        ఎడమ_వైపు_తిరుగు(120)\n\
        ముందుకు_జరుగు(side)\n\
        ఎడమ_వైపు_తిరుగు(120)\n\
        ముందుకు_జరుగు(side)\n\
        ఎడమ_వైపు_తిరుగు(120)\n\
        ఆకారము_ముగించు("red")\n\
    } else {\n\
        కుంచికను_పైకి_ఎత్తు()\n\
        ముందుకు_జరుగు(side/2)\n\
        కుంచికను_కింద_పెట్టు()\n\
        sierpinski( order-1, side/2) // bottom right\n\
        కుంచికను_పైకి_ఎత్తు()\n\
        ఎడమ_వైపు_తిరుగు(120)\n\
        ముందుకు_జరుగు(side/2)\n\
        కుడి_వైపు_తిరుగు(120)\n\
        కుంచికను_కింద_పెట్టు()\n\
        sierpinski( order-1, side/2) // top center\n\
        కుంచికను_పైకి_ఎత్తు()\n\
        కుడి_వైపు_తిరుగు(120)\n\
        ముందుకు_జరుగు(side/2)\n\
        ఎడమ_వైపు_తిరుగు(120)\n\
        కుంచికను_కింద_పెట్టు()\n\
        sierpinski( order-1, side/2) // bottom left\n\
    }\n\
}\n\
\n\
\n\
_విధానము_     delayed() {\n\
    if (i < 7) {\n\
        sier( i)\n\
        i = i+1\n\
        విలంబించు( delayed, 2000)\n\
    }\n\
}\n\
\n\
\n\
_విధానము_     sier (order) {\n\
    ఆది_స్థితి()\n\
    కుంచికను_దాచు()\n\
    side = 2* Math.min(గరిష్ఠX(),గరిష్ఠY()) -20\n\
    కుంచికను_పైకి_ఎత్తు()\n\
    స్థానము_మార్చు(-side/2, -side/2+20)\n\
    కుడి_వైపు_తిరుగు(90)\n\
    కుంచికను_కింద_పెట్టు()\n\
    sierpinski( order, side)\n\
\n\
    స్థానము_మార్చు(0+10- side/2,కనిష్ఠY()+10)\n\
    అక్షరరూపము_స్థాపించు("bold 16px helvitica,sans-serif")\n\
    వ్రాయి("Sierpinski triangle of order " + order)  \n\
}\n\
\n\
_సర్వత్ర_   i ; //global iteration variable\n\
\n\
_విధానము_     ప్రదర్శన() {\n\
    ఆది_స్థితి()\n\
    i = 0\n\
    delayed()\n\
}\n\
'
simple_story ='\
// Simple Story -- simple framework for story frames\n\
// shows how to construct a story using frames. There is a text generator,\n\
// "explain" that puts text on the screen, but a frame can be anything:\n\
// a drawing, a కుంచిక graphics image, or a కుంచిక graphics animation\n\
// (hopefully of a finite duration).\n\
\n\
//**** GLOBALS ****\n\
\n\
_సర్వత్ర_   frameNumber = 0\n\
_సర్వత్ర_   frameDelay = 0\n\
\n\
\n\
//**** FUNCTIONS ****\n\
\n\
_విధానము_     explain( text) {\n\
  // lines within the text string are separated with an at "@" character.\n\
  ఆది_స్థితి();\n\
  _సర్వత్ర_   cWidth = 2* గరిష్ఠX();\n\
  _సర్వత్ర_   cHeight = 2* గరిష్ఠY();\n\
  _సర్వత్ర_   lineNumber = 0;\n\
  స్థానము_మార్చు(-.90 * cWidth + గరిష్ఠX(), .9 * cHeight - గరిష్ఠY());\n\
  కోణము(90);\n\
  అక్షరరూపము_స్థాపించు("bold 20px arial,sans-serif");\n\
\n\
  _సర్వత్ర_   lines = text.split("@");\n\
  for (_సర్వత్ర_   i=0; i<lines.length; i++) {\n\
    console.log( lines[i])\n\
    స్థానము_మార్చు(-.90 * cWidth + గరిష్ఠX(), గరిష్ఠY() -(i+1) * .1 * cHeight)\n\
    వ్రాయి(lines[i]);\n\
    lineNumber = lineNumber + 1;\n\
  }\n\
  కుంచికను_దాచు();\n\
}\n\
\n\
_విధానము_     textDemo () {\n\
  explain ("In a time@long, long ago@and a place far, far away@there was a battle@that changed the history@of the entire@universe.");\n\
}\n\
\n\
_విధానము_     frame() {\n\
  switch (frameNumber) {\n\
  case 0:\n\
    frameDelay = 1000;\n\
    explain ("@@@@A Simple Story")\n\
    break;\n\
  case 1:\n\
    explain ("@@@@By a Wacky Programmer")\n\
    break;\n\
  case 2:\n\
    explain ("@@@@Produced by Turtle Graphics")\n\
    break;\n\
  case 3:\n\
    explain ("@@@@Distributed by JavaScript and HTML")\n\
    frameDelay = 1500;\n\
    break;\n\
  case 4:\n\
    explain ("")\n\
    frameNumber = 9;\n\
    frameDelay = 1000;\n\
    break;\n\
  case 10:\n\
    explain ("@@@@@@@@@@In a time");\n\
    break;\n\
  case 11:\n\
    explain ("@@@@@@@@@In a time@long, long ago");\n\
    break;\n\
  case 12:\n\
    explain ("@@@@@@@@In a time@long, long ago@and a place far, far away");\n\
    break;\n\
  case 13:\n\
    explain ("@@@@@@@In a time@long, long ago@and a place far, far away@there was a software program");\n\
    break;\n\
  case 14:\n\
    explain ("@@@@@@In a time@long, long ago@and a place far, far away@there was a software program@that changed the history");\n\
    break;\n\
  case 15:\n\
    explain ("@@@@@In a time@long, long ago@and a place far, far away@there was a software program@that changed the history@of the entire");\n\
    break;\n\
  case 16:\n\
    explain ("@@@@In a time@long, long ago@and a place far, far away@there was a software program@that changed the history@of the entire@(yes, the ENTIRE).");\n\
    break;\n\
  case 17:\n\
    explain ("@@@In a time@long, long ago@and a place far, far away@there was a software program@that changed the history@of the entire@(yes, the ENTIRE)@universe.");\n\
    break;\n\
  case 18:\n\
    explain ("@@In a time@long, long ago@and a place far, far away@there was a software program@that changed the history@of the entire@(yes, the ENTIRE)@universe.");\n\
    break;\n\
  case 19:\n\
    explain ("@In a time@long, long ago@and a place far, far away@there was a software program@that changed the history@of the entire@(yes, the ENTIRE)@universe.");\n\
    break;\n\
  case 20:\n\
    explain ("In a time@long, long ago@and a place far, far away@there was a software program@that changed the history@of the entire@(yes, the ENTIRE)@universe.");\n\
    break;\n\
  case 21:\n\
    explain ("long, long ago@and a place far, far away@there was a software program@that changed the history@of the entire@(yes, the ENTIRE)@universe.");\n\
    break;\n\
  case 22:\n\
    explain ("and a place far, far away@there was a software program@that changed the history@of the entire@(yes, the ENTIRE)@universe.");\n\
    break;\n\
  case 23:\n\
    explain ("there was a software program@that changed the history@of the entire@(yes, the ENTIRE)@universe.");\n\
    break;\n\
  case 24:\n\
    explain ("that changed the history@of the entire@(yes, the ENTIRE)@universe.");\n\
    break;\n\
  case 25:\n\
    explain ("of the entire@(yes, the ENTIRE)@universe.");\n\
    break;\n\
  case 26:\n\
    explain ("(yes, the ENTIRE)@universe.");\n\
    break;\n\
  case 27:\n\
    explain ("universe.");\n\
    break;\n\
  case 28:\n\
    explain ("");\n\
    frameDelay = 2000;\n\
    break;\n\
  default:\n\
    explain("@@@@@The end.")\n\
    frameNumber = -1;\n\
    break;\n\
  }\n\
  if (frameNumber >= 0) {\n\
    frameNumber = frameNumber + 1;\n\
    విలంబించు(frame, frameDelay)\n\
  }\n\
}\n\
  \n\
_విధానము_     ప్రదర్శన() {\n\
  // show three text frames\n\
  frameDelay = 1000;\n\
  frameNumber = 0;\n\
  frame();\n\
}\n\
'
sliding_block ='\
// Sliding Block Puzzle -- animated solution to Square Root sliding block puzzle\n\
// details of the moves are on the console.log\n\
\n\
_సర్వత్ర_   side\n\
_సర్వత్ర_   baseX\n\
_సర్వత్ర_   baseY\n\
_సర్వత్ర_   count\n\
\n\
_సర్వత్ర_   e = "e"\n\
_సర్వత్ర_   w = "w"\n\
_సర్వత్ర_   n = "n"\n\
_సర్వత్ర_   s = "s"\n\
_సర్వత్ర_   ee = "ee"\n\
_సర్వత్ర_   ww = "ww"\n\
_సర్వత్ర_   nn = "nn"\n\
_సర్వత్ర_   ss = "ss"\n\
_సర్వత్ర_   ne = "ne"\n\
_సర్వత్ర_   nw = "nw"\n\
_సర్వత్ర_   se = "se"\n\
_సర్వత్ర_   sw = "sw"\n\
_సర్వత్ర_   en = "en"\n\
_సర్వత్ర_   es = "es"\n\
_సర్వత్ర_   wn = "wn"\n\
_సర్వత్ర_   ws = "ws"\n\
\n\
/* valid moves for blocks\n\
 * all tests include bounds test\n\
 * 1x1\n\
 *   if x-1 is free: w\n\
 *   if x-1 and x-2 is free: ww\n\
 *   if x-1 and y-1 is free: wn\n\
 *   if x-1 and y+1 is free: ws\n\
 *   if x+1 is free: e\n\
 *   if x+1 and x+2 is free: ee\n\
 *   if x+1 and y-1 is free: en\n\
 *   if x+1 and y+1 is free: es\n\
 *   if y-1 is free: n\n\
 *   if y-1 and y-2 is free: nn\n\
 *   if y-1 and x-1 is free: nw\n\
 *   if y-1 and x+1 is free: ne\n\
 *   if y+1 is free: s\n\
 *   if y+1 and y+2 is free: ss\n\
 *   if y+1 and x-1 is free: sw\n\
 *   if y+1 and x+1 is free: se\n\
 * 1x2\n\
 *   if x-1 and x-1,y+1 is free: w\n\
 *   if x+1 and x+1,y+1 is free: e\n\
 *   if y+2 is free: s\n\
 *   if y+2 and y+3 is free: ss\n\
 *   if y-1 is free: n\n\
 *   if y-1 and y-2 is free: nn\n\
 * 2x1\n\
 *   if x-1 is free: w\n\
 *   if x-1 and x-2 is free: ww\n\
 *   if x+2 is free: e\n\
 *   if x+2 and x+3 is free: ee\n\
 *   if y+1 and x+1,y+1 is free: s\n\
 *   if y-1 and x+1,y-1 is free: n\n\
 * 2x2\n\
 *   if x-1 and x-1,y+1 is free: w\n\
 *   if x+2 and x+2,y+1 is free: e\n\
 *   if y+2 and x+1,y+2 is free: s\n\
 *   if y-1 and x+1,y-1 is free: n\n\
*/\n\
blocks = [ {h:1, v:2, x:0, y:0},\n\
           {h:2, v:2, x:1, y:0},\n\
           {h:1, v:2, x:3, y:0},\n\
           {h:2, v:1, x:0, y:2},\n\
           {h:1, v:1, x:0, y:3},\n\
           {h:1, v:1, x:0, y:4},\n\
           {h:1, v:2, x:1, y:3},\n\
           {h:1, v:2, x:2, y:3},\n\
           {h:1, v:1, x:3, y:3},\n\
           {h:1, v:1, x:3, y:4} ]\n\
\n\
_విధానము_     init () {\n\
  side = .9 * 2* Math.min(గరిష్ఠX()/4, గరిష్ఠY()/5)\n\
  baseX = -2 * side\n\
  baseY = 2.5 * side\n\
  count = 0\n\
}\n\
\n\
_విధానము_     drawBlock( h, v, x, y, n) {\n\
  //console.log("DB" + " " + h + " " + v + " " + x + " " + y)\n\
  // draw a block\n\
  రంగు_మార్చు("నలుపు")\n\
  ఆకారము_ప్రారంభించు()\n\
  స్థానము_మార్చు(baseX + x * side, baseY - y * side)\n\
  దిశ_మార్చు(90)\n\
  ముందుకు_జరుగు( h * side)\n\
  కుడి_వైపు_తిరుగు( 90)\n\
  ముందుకు_జరుగు( v * side)\n\
  కుడి_వైపు_తిరుగు( 90)\n\
  ముందుకు_జరుగు( h * side)\n\
  కుడి_వైపు_తిరుగు( 90)\n\
  ముందుకు_జరుగు( v * side)\n\
  కుడి_వైపు_తిరుగు( 90)\n\
  ఆకారము_ముగించు("tan")\n\
\n\
  స్థానము_మార్చు(baseX + (x + .5)*side, baseY -(y+.5) *side)\n\
  వ్రాయి(n)\n\
}\n\
\n\
\n\
_విధానము_     moveBlock (blockIndex, x, y) {\n\
  blocks[ blockIndex].x = x\n\
  blocks[ blockIndex].y = y\n\
  count = count + 1\n\
}\n\
\n\
\n\
_విధానము_     drag( blockIndex, dir) {\n\
  //dir is a string of e, w, n, s\n\
  _సర్వత్ర_   x = 0\n\
  _సర్వత్ర_   y = 0\n\
  for (ch in dir) {\n\
    if (dir[ch] == "w") {\n\
      x = x - 1\n\
    } else if (dir[ch] == "e") {\n\
      x = x + 1\n\
    } else if (dir[ch] == "s") {\n\
      y = y + 1\n\
    } else if (dir[ch] == "n") {\n\
      y = y - 1\n\
    }\n\
\n\
    //console.log(dir[ch] + " " + x + "," + y)\n\
  }\n\
  blocks[ blockIndex].x = blocks[ blockIndex].x + x\n\
  blocks[ blockIndex].y = blocks[ blockIndex].y + y\n\
  count = count + 1\n\
}\n\
\n\
_విధానము_     drawBlocks () {\n\
  for (_సర్వత్ర_   block in blocks) {\n\
    //console.log("dBs: " + block)\n\
    drawBlock( blocks[ block].h, blocks[block].v, blocks[block].x, blocks[block].y, block)\n\
  }\n\
}\n\
\n\
\n\
\n\
_సర్వత్ర_   free = []\n\
\n\
_విధానము_     findFree() {\n\
  // find the free spaces in the puzzle\n\
  _సర్వత్ర_   x,y, v, h, block, overlap, freeList\n\
\n\
free = [[undefined, undefined, undefined, undefined],\n\
        [undefined, undefined, undefined, undefined],\n\
        [undefined, undefined, undefined, undefined],\n\
        [undefined, undefined, undefined, undefined],\n\
        [undefined, undefined, undefined, undefined]]\n\
\n\
  // mark the in use spaces\n\
  overlap = false\n\
  for (block in blocks) {\n\
    x = blocks[block].x\n\
    y = blocks[block].y\n\
    v = blocks[block].v\n\
    h = blocks[block].h\n\
    //console.log( "X:"+x + " Y:"+y + " free:" + free[x][y])\n\
    if (free[x][y] == undefined) {\n\
      //console.log("unfreeing 00: " + x + " " + y + " " + block)\n\
      free[x][y] = block\n\
      // check for 2x1 or 2x2\n\
      if (h == 2) {\n\
        if (free[x+1][y] == undefined) {\n\
      //console.log("unfreeing 10: " + x + " " + y + " " + block)\n\
          free[x+1][y] = block\n\
        } else {\n\
          overlap = true\n\
        }\n\
      }\n\
      // check for 1x2 or 2x2\n\
      if (v == 2) {\n\
        if (free[x][y+1] == undefined) {\n\
      //console.log("unfreeing 01: " + x + " " + y + " " + block)\n\
          free[x][y+1] = block\n\
        } else {\n\
          overlap = true\n\
        }\n\
      }\n\
      // check for 2x2 specifically\n\
      if (h == 2 && v == 2) {\n\
        if (free[x+1][y+1] == undefined) {\n\
      //console.log("unfreeing 11: " + x + " " + y + " " + block)\n\
          free[x+1][y+1] = block\n\
        } else {\n\
          overlap = true\n\
        }\n\
      }\n\
    } else {\n\
      overlap = true\n\
    }\n\
    if (overlap) {\n\
      console.log( "Block " + block + " is overlapping")\n\
    }\n\
  }\n\
\n\
  // find the free spaces\n\
  freeList = []\n\
  for( y=0; y<5; y = y+1) { \n\
    for( x=0; x<4; x = x+1) {\n\
      //console.log( "X:"+x + " Y:"+y + " Block:" + free[x][y])\n\
      if (free[x][y] == undefined) { //free\n\
        //freeList.push([x,y])\n\
        //freeList.push({"x":x,"y":y})\n\
        freeList.push(([x,y]))\n\
      }\n\
    }\n\
  }\n\
  if (freeList.length != 2) {\n\
    console.log( "FreeList has wrong number of members: " + freeList.length)\n\
  }\n\
  //console.log( "FreeList:  " + freeList)\n\
  //console.log( "FreeList0:  " + freeList[0])\n\
  _సర్వత్ర_   freeStr = ""\n\
  _సర్వత్ర_   lead = ""\n\
  _సర్వత్ర_   freemember\n\
  for (freemember in freeList) {\n\
    freeStr = freeStr + lead + "[" +  freeList[freemember] + "]"\n\
    lead = ","\n\
  }\n\
\n\
  // log the blocks\n\
  _సర్వత్ర_   logStr\n\
  for( y=0; y<5; y = y+1) { \n\
    logStr = y + ":"\n\
    for( x=0; x<4; x = x+1) {\n\
      if (free[x][y] == undefined) {\n\
        logStr = logStr + " "\n\
      } else {\n\
        logStr = logStr + free[x][y]\n\
      }\n\
    }\n\
    console.log( logStr)\n\
  }\n\
  console.log( "  FreeList: "+ freeStr)\n\
}\n\
\n\
_సర్వత్ర_   moveList = []\n\
\n\
_విధానము_     checkMove( block, direction) {\n\
  _సర్వత్ర_   found = false\n\
  _సర్వత్ర_   index\n\
  //if move is not on moveList\n\
  for (index in moveList) {\n\
    if (moveList[index][0] == block && moveList[index][1].localeCompare(direction)==0) {\n\
      found = true\n\
    }\n\
  }\n\
  if (!found) {\n\
    console.log( "   ***Move is not on moveList***")\n\
  }\n\
}\n\
 \n\
\n\
_విధానము_     checkLastMove( block, direction) {\n\
  // check that the moveList includes the reciprocal of the last move\n\
  _సర్వత్ర_   index\n\
  _సర్వత్ర_   directions = direction.split("")\n\
  _సర్వత్ర_   ripString = ""\n\
  _సర్వత్ర_   found = false\n\
  for (index in directions) {\n\
    if (directions[index] == "e") { ripString = "w" + ripString } \n\
    if (directions[index] == "w") { ripString = "e" + ripString } \n\
    if (directions[index] == "n") { ripString = "s" + ripString } \n\
    if (directions[index] == "s") { ripString = "n" + ripString }\n\
  }\n\
  for (index in moveList) {\n\
    if (moveList[index][0] == block && moveList[index][1] == ripString) {\n\
      found = true\n\
    }\n\
  }\n\
  if (!found) {\n\
    console.log( "   ***Reciprocal move to "+ block+direction + " is not on moveList***")\n\
  }\n\
}\n\
\n\
_విధానము_     findMoves() {\n\
  // find the free spaces in the puzzle\n\
  _సర్వత్ర_   x, y, v, h, block\n\
\n\
  moveList = []\n\
\n\
  for (block in blocks) {\n\
    x = blocks[block].x\n\
    y = blocks[block].y\n\
    v = blocks[block].v //vertical size\n\
    h = blocks[block].h //horizontal size\n\
\n\
    if (v == 1) {\n\
      if (x>=1 && free[x-1][y] == undefined) {\n\
        moveList.push([block,"w"])\n\
        if (x>=2 && free[x-2][y] == undefined) {\n\
            moveList.push([block,"ww"])\n\
        } else if (h==1) {\n\
          if ( y>=1 && free[x-1][y-1] == undefined) {\n\
            moveList.push([block,"wn"])\n\
          } else if (y<=3 && free[x-1][y+1] == undefined) {\n\
            moveList.push([block,"ws"])\n\
          }\n\
        }\n\
      }\n\
      if (x+h<=3 && free[x+h][y] == undefined) {\n\
        moveList.push([block,"e"])\n\
        if (x+h+1<=3 && free[x+h+1][y] == undefined) {\n\
            moveList.push([block,"ee"])\n\
        } else if (h == 1) {\n\
          if (y>=1 && x<=2 && free[x+1][y-1] == undefined) {\n\
            moveList.push([block,"en"])\n\
          } else if (y<=3 && x<=2 && free[x+1][y+1] == undefined) {\n\
            moveList.push([block,"es"])\n\
          }\n\
        }\n\
      }\n\
    }\n\
\n\
    if (h == 1) {\n\
      if (y>=1 && free[x][y-1] == undefined) {\n\
        moveList.push([block,"n"])\n\
        if (y>=2 && free[x][y-2] == undefined) {\n\
            moveList.push([block,"nn"])\n\
        }\n\
        if (v == 1) {\n\
          if (x>=1 && free[x-1][y-1] == undefined) {\n\
            moveList.push([block,"nw"])\n\
          } else if (x<=2 && free[x+1][y-1] == undefined) {\n\
            moveList.push([block,"ne"])\n\
          }\n\
        }\n\
      }\n\
      if (y+v<=4 && free[x][y+v] == undefined) {\n\
        moveList.push([block,"s"])\n\
        if (y+v+1<=4 && free[x][y+v+1] == undefined) {\n\
            moveList.push([block,"ss"])\n\
        }\n\
        if (v == 1) {\n\
          if (x>=1 && free[x-1][y+1] == undefined) {\n\
            moveList.push([block,"sw"])\n\
          } else if (x<=2 && free[x+1][y+1] == undefined) {\n\
            moveList.push([block,"se"])\n\
          }\n\
        }\n\
      }\n\
    }\n\
\n\
    if (v == 2) {\n\
      if (x>=1 && free[x-1][y] == undefined && free[x-1][y+1] == undefined ) {\n\
        moveList.push([block,"w"])\n\
      } else if (x<=2 && free[x+h][y] == undefined && free[x+h][y+1] == undefined) {\n\
        moveList.push([block,"e"])\n\
      }\n\
    }\n\
\n\
    if (h == 2) {\n\
      if (y>=1 && free[x][y-1] == undefined && free[x+1][y-1] == undefined) {\n\
        moveList.push([block,"n"])\n\
      } else if (y+v<=4 && free[x][y+v] == undefined && free[x+1][y+v] == undefined) {\n\
        moveList.push([block,"s"])\n\
      }\n\
    }\n\
  }\n\
\n\
  //console.log("Moves: " + moveList)\n\
  _సర్వత్ర_   moveStr = ""\n\
  _సర్వత్ర_   lead = ""\n\
  _సర్వత్ర_   index\n\
  _సర్వత్ర_   possibleMoveCount = 0\n\
  for (index in moveList) {\n\
    moveStr = moveStr + lead +  moveList[index][0] +  moveList[index][1] \n\
    if ( lastMove[0] == moveList[index][0]) { // tag reciprocal moves\n\
      moveStr = moveStr + "*"\n\
    } else {\n\
      possibleMoveCount = possibleMoveCount + 1\n\
    }\n\
    lead = ", "\n\
  }\n\
  console.log( "  Moves: "+ moveStr)\n\
  if (possibleMoveCount < 1) {\n\
    console.log ("   ***There are not enough moves***")\n\
  }\n\
}\n\
\n\
\n\
/* valid moves for blocks\n\
 * all tests include bounds test\n\
 * 1x1 -\n\
 *   if x-1 is free: w\n\
 *   if x-1 and x-2 is free: ww\n\
 *   if x-1 and y-1 is free: wn\n\
 *   if x-1 and y+1 is free: ws\n\
 *   if x+1 is free: e\n\
 *   if x+1 and x+2 is free: ee\n\
 *   if x+1 and y-1 is free: en\n\
 *   if x+1 and y+1 is free: es\n\
 *   if y-1 is free: n\n\
 *   if y-1 and y-2 is free: nn\n\
 *   if y-1 and x-1 is free: nw\n\
 *   if y-1 and x+1 is free: ne\n\
 *   if y+1 is free: s\n\
 *   if y+1 and y+2 is free: ss\n\
 *   if y+1 and x-1 is free: sw\n\
 *   if y+1 and x+1 is free: se\n\
 * 1x2 |\n\
 *   if x-1 and x-1,y+1 is free: w\n\
 *   if x+1 and x+1,y+1 is free: e\n\
 *   if y+2 is free: s\n\
 *   if y+2 and y+3 is free: ss\n\
 *   if y-1 is free: n\n\
 *   if y-1 and y-2 is free: nn\n\
 * 2x1 --\n\
 *   if x-1 is free: w\n\
 *   if x-1 and x-2 is free: ww\n\
 *   if x+2 is free: e\n\
 *   if x+2 and x+3 is free: ee\n\
 *   if y+1 and x+1,y+1 is free: s\n\
 *   if y-1 and x+1,y-1 is free: n\n\
 * 2x2 ==\n\
 *   if x-1 and x-1,y+1 is free: w\n\
 *   if x+2 and x+2,y+1 is free: e\n\
 *   if y+2 and x+1,y+2 is free: s\n\
 *   if y-1 and x+1,y-1 is free: n\n\
*/\n\
\n\
\n\
_విధానము_     getState() {\n\
  //returns a value that is the state of the puzzle\n\
  //each piece is located with a 2-bit x and 3-bit y\n\
  //1x2 and 1x1 pieces are deternined by left to right and top to bottom order\n\
	// this allows the same state for exchanged pieces\n\
  _సర్వత్ర_   blockPos = [undefined, undefined, undefined,\n\
	          undefined, undefined, undefined,\n\
	          undefined, undefined, undefined]\n\
  _సర్వత్ర_   blockSeen = [ false, false, false, false, false,\n\
                    false, false, false, false]\n\
  _సర్వత్ర_   blockMap1x2 = 2 \n\
  _సర్వత్ర_   blockMap1x1 = 6 \n\
  _సర్వత్ర_   blockNum\n\
\n\
  for( y=0; y<5; y = y+1) { \n\
    for( x=0; x<4; x = x+1) {\n\
      blockNum = free[x][y]\n\
      if (blockNum != undefined && !blockSeen[ blockNum] ) { // first sight of block\n\
        blockSeen[ blockNum] = true\n\
	if (blockNum == 1 ) { // 2x2\n\
	  blockPos[ 0 ] = [x,y]\n\
	} else if (blockNum == 3 ) { // 2x1\n\
	  blockPos[ 1 ] = [x,y]\n\
	} else if (blockNum == 0 || blockNum == 2 || blockNum == 6 || blockNum == 7) { // 1x2\n\
	  blockPos[ blockMap1x2] = [x,y]\n\
	  blockMap1x2 = blockMap1x2 + 1\n\
        } else if (blockNum == 4 || blockNum == 5 || blockNum == 8 || blockNum == 9) { // 1x1\n\
	  blockPos[ blockMap1x1] = [x,y]\n\
	  blockMap1x1 = blockMap1x1 + 1\n\
	}\n\
      }\n\
    }\n\
  }\n\
\n\
  // wanted to do bit arithmetic, but that limit is 32 bits and need 50\n\
  // uses 2 bits for x and 3 bits for y for each of 10 blocks = 50 bits\n\
  // 5 bits is 2**5 = 32\n\
  // putting the most stable blocks at high end of state number\n\
  _సర్వత్ర_   state = 0\n\
  for (blockNum = 0; blockNum <10; blockNum = blockNum + 1) {\n\
    console.log ("state blockNum:" + blockNum + " pos:" + blockPos[ blockNum] + " state:" + state + " " + (blockPos[blockNum][0] + (blockPos[blockNum][1]*4)) * 32**( 9 - blockNum) + " " + (blockPos[blockNum][0] + (blockPos[blockNum][1]*4)) )\n\
    state = state + ((blockPos[blockNum][0] + (blockPos[blockNum][1]*4)) * 32**( 9 - blockNum))\n\
  }\n\
  if ( blockMap1x2 != 6  | blockMap1x1 != 10) {\n\
    console.log( "   ***State Processing Error***" + blockMap1x2 + " " + blockMap1x1)\n\
  }\n\
  _ఫలము_  state\n\
}\n\
\n\
\n\
_విధానము_     demo1() {\n\
  ఆది_స్థితి()\n\
  init()\n\
  console.log("demo: " + blocks[0])\n\
  console.log("demo: " + blocks)\n\
  //drawBlocks()\n\
  moveBlock( 3, 2, 2)\n\
  moveBlock( 4, 1, 2)\n\
  moveBlock( 5, 0, 2)\n\
  moveBlock( 6, 0, 3)\n\
  moveBlock( 7, 1, 3)\n\
  moveBlock( 8, 2, 4)\n\
  moveBlock( 3, 2, 3)\n\
  moveBlock( 4, 3, 2)\n\
  moveBlock( 5, 2, 2)\n\
  moveBlock( 6, 0, 2)\n\
  moveBlock( 7, 1, 2)\n\
  moveBlock( 8, 0, 4)\n\
  moveBlock( 9, 1, 4)\n\
  moveBlock( 3, 2, 4)\n\
  moveBlock( 5, 3, 3)\n\
  moveBlock( 7, 2, 2)\n\
  moveBlock( 6, 1, 2)\n\
  moveBlock( 0, 0, 2)\n\
  moveBlock( 1, 0, 0)\n\
  moveBlock( 2, 2, 0)\n\
  moveBlock( 4, 3, 0)\n\
  moveBlock( 5, 3, 1)\n\
  moveBlock( 7, 3, 2)\n\
  moveBlock( 2, 2, 2)\n\
  moveBlock( 4, 2, 0)\n\
  moveBlock( 5, 2, 1)\n\
  moveBlock( 7, 3, 0)\n\
  moveBlock( 2, 3, 2)\n\
  moveBlock( 5, 2, 3)\n\
  moveBlock( 4, 2, 2)\n\
  moveBlock( 1, 1, 0)\n\
  moveBlock( 0, 0, 0)\n\
  moveBlock( 6, 0, 2)\n\
  moveBlock( 4, 1, 2)\n\
  moveBlock( 5, 1, 3)\n\
  moveBlock( 2, 2, 2)\n\
  moveBlock( 7, 3, 2)\n\
  moveBlock( 1, 2, 0)\n\
  moveBlock( 4, 1, 0)\n\
  moveBlock( 5, 1, 1)\n\
  moveBlock( 9, 1, 2)\n\
  moveBlock( 8, 1, 3)\n\
  moveBlock( 6, 0, 3)\n\
  moveBlock( 0, 0, 1)\n\
  moveBlock( 4, 0, 0)\n\
  moveBlock( 5, 1, 0)\n\
  moveBlock( 9, 1, 1)\n\
  moveBlock( 8, 1, 2)\n\
  moveBlock( 6, 1, 3)\n\
  moveBlock( 0, 0, 3)\n\
  moveBlock( 9, 0, 2)\n\
  moveBlock( 5, 0, 1)\n\
  moveBlock( 1, 1, 0)\n\
  moveBlock( 7, 3, 0)\n\
  moveBlock( 2, 3, 2)\n\
  moveBlock( 8, 2, 3)\n\
  moveBlock( 1, 1, 1)\n\
  moveBlock( 4, 2, 0)\n\
  moveBlock( 5, 1, 0)\n\
  moveBlock( 9, 0, 0)\n\
  moveBlock( 0, 0, 1)\n\
  moveBlock( 6, 0, 3)\n\
  moveBlock( 8, 1, 4)\n\
  moveBlock( 1, 1, 2)\n\
  moveBlock( 4, 1, 1)\n\
  moveBlock( 7, 2, 0)\n\
  moveBlock( 2, 3, 0)\n\
  moveBlock( 1, 2, 2)\n\
  moveBlock( 4, 1, 3)\n\
  moveBlock( 5, 1, 1)\n\
  moveBlock( 9, 1, 0)\n\
  moveBlock( 0, 0, 0)\n\
  moveBlock( 6, 0, 2)\n\
  moveBlock( 8, 0, 4)\n\
  moveBlock( 4, 1, 4)\n\
  moveBlock( 1, 1, 2)\n\
  moveBlock( 2, 3, 2)\n\
  moveBlock( 7, 3, 0)\n\
  moveBlock( 9, 2, 0)\n\
  moveBlock( 5, 2, 1)\n\
  moveBlock( 0, 1, 0)\n\
  moveBlock( 6, 0, 0)\n\
  moveBlock( 1, 0, 2)\n\
  moveBlock( 5, 2, 3)\n\
  moveBlock( 9, 2, 2)\n\
  moveBlock( 7, 2, 0)\n\
  moveBlock( 2, 3, 0)\n\
  moveBlock( 5, 3, 2)\n\
  moveBlock( 3, 2, 3)\n\
  moveBlock( 4, 3, 4)\n\
  moveBlock( 8, 2, 4)\n\
  moveBlock( 1, 0, 3)\n\
  moveBlock( 9, 0, 2)\n\
  moveBlock( 5, 1, 2)\n\
  moveBlock( 3, 2, 2)\n\
  moveBlock( 8, 3, 3)\n\
  moveBlock( 1, 1, 3)\n\
\n\
  drawBlocks()\n\
  console.log( "count= " + count)\n\
}\n\
\n\
\n\
_విధానము_     ప్రదర్శన() {\n\
  ఆది_స్థితి()\n\
  init()\n\
\n\
  drag( 3, ee)\n\
  drag( 4, ne)\n\
  drag( 5, nn)\n\
  drag( 6, w)\n\
  drag( 7, w)\n\
  drag( 8, sw)\n\
  drag( 3, s)\n\
  drag( 4, ee)\n\
  drag( 5, ee)\n\
  drag( 6, n)\n\
  drag( 7, n)\n\
  drag( 8, ww)\n\
  drag( 9, ww)\n\
  drag( 3, s)\n\
  drag( 5, se)\n\
  drag( 7, e)\n\
  drag( 6, e)\n\
  drag( 0, ss)\n\
  drag( 1, w)\n\
  drag( 2, w)\n\
  drag( 4, nn)\n\
  drag( 5, nn)\n\
  drag( 7, e)\n\
  drag( 2, ss)\n\
  drag( 4, w)\n\
  drag( 5, w)\n\
  drag( 7, nn)\n\
  drag( 2, e)\n\
  drag( 5, ss)\n\
  drag( 4, ss)\n\
  drag( 1, e)\n\
  drag( 0, nn)\n\
  drag( 6, w)\n\
  drag( 4, w)\n\
  drag( 5, w)\n\
  drag( 2, w)\n\
  drag( 7, ss)\n\
  drag( 1, e)\n\
  drag( 4, nn)\n\
  drag( 5, nn)\n\
  drag( 9, nn)\n\
  drag( 8, en)\n\
  drag( 6, s)\n\
  drag( 0, s)\n\
  drag( 4, w)\n\
  drag( 5, n)\n\
  drag( 9, n)\n\
  drag( 8, n)\n\
  drag( 6, e)\n\
  drag( 0, ss)\n\
  drag( 9, ws)\n\
  drag( 5, sw)\n\
  drag( 1, w)\n\
  drag( 7, nn)\n\
  drag( 2, e)\n\
  drag( 8, es)\n\
  drag( 1, s)\n\
  drag( 4, ee)\n\
  drag( 5, ne)\n\
  drag( 9, nn)\n\
  drag( 0, nn)\n\
  drag( 6, w)\n\
  drag( 8, ws)\n\
  drag( 1, s)\n\
  drag( 4, sw)\n\
  drag( 7, w)\n\
  drag( 2, nn)\n\
  drag( 1, e)\n\
  drag( 4, ss)\n\
  drag( 5, s)\n\
  drag( 9, e)\n\
  drag( 0, n)\n\
  drag( 6, n)\n\
  drag( 8, w)\n\
  drag( 4, s)\n\
  drag( 1, w)\n\
  drag( 2, ss)\n\
  drag( 7, e)\n\
  drag( 9, e)\n\
  drag( 5, e)\n\
  drag( 0, e)\n\
  drag( 6, nn)\n\
  drag( 1, w)\n\
  drag( 5, ss)\n\
  drag( 9, ss)\n\
  drag( 7, w)\n\
  drag( 2, nn)\n\
  drag( 5, en)\n\
  drag( 3, n)\n\
  drag( 4, ee)\n\
  drag( 8, ee)\n\
  drag( 1, s)\n\
  drag( 9, ww)\n\
  drag( 5, ww)\n\
  drag( 3, n)\n\
  drag( 8, ne)\n\
  drag( 1, e)\n\
\n\
  drawBlocks()\n\
  console.log( "count= " + count)\n\
}\n\
\n\
\n\
_విధానము_     caption (message) {\n\
  // save your current position, heading, etc.\n\
  _సర్వత్ర_   savedX = కుంచిక.స్థానము.x\n\
  _సర్వత్ర_   savedY = కుంచిక.స్థానము.y\n\
  _సర్వత్ర_   savedHeading = కుంచిక.కోణము / 2 / Math.PI * 360 //convert radians to degrees\n\
  _సర్వత్ర_   savedColor = కుంచిక.రంగు\n\
  _సర్వత్ర_   savedWidth = కుంచిక.వెడల్పు\n\
\n\
  స్థానము_మార్చు(కనిష్ఠX()+10, కనిష్ఠY()+10)\n\
  దిశ_మార్చు( 90)\n\
\n\
  // erase what will be in the path\n\
  అక్షరరూపము_స్థాపించు("bold 16px helvitica,sans-serif")\n\
  రంగు_మార్చు( తెలుపు )\n\
  వెడల్పు(22)\n\
  ముందుకు_జరుగు(గరిష్ఠY() * 2 - 12)\n\
  స్థానము_మార్చు(కనిష్ఠX()+10, కనిష్ఠY()+5)\n\
  రంగు_మార్చు("నలుపు")\n\
  వ్రాయి( message)\n\
\n\
  //go back from whence you came\n\
  స్థానము_మార్చు( savedX, savedY)\n\
  దిశ_మార్చు( savedHeading)\n\
  రంగు_మార్చు( savedColor)\n\
  వెడల్పు(savedWidth)\n\
}\n\
\n\
_సర్వత్ర_   moveCount;\n\
_సర్వత్ర_   delayTime = 300;\n\
_సర్వత్ర_   moves; // List of the moves to be made\n\
_సర్వత్ర_   lastMove = []; // last move made\n\
moves = [ // series of moves\n\
// [ blockNumber, move directions ]\n\
  [ 3, ee],\n\
  [ 4, ne],\n\
  [ 5, nn],\n\
  [ 6, w],\n\
  [ 7, w],\n\
  [ 8, ws],\n\
  [ 3, s],\n\
  [ 4, ee],\n\
  [ 5, ee],\n\
  [ 6, n],\n\
  [ 7, n],\n\
  [ 8, ww],\n\
  [ 9, ww],\n\
  [ 3, s],\n\
  [ 5, se],\n\
  [ 7, e],\n\
  [ 6, e],\n\
  [ 0, ss],\n\
  [ 1, w],\n\
  [ 7,nn],\n\
  [ 4, w],\n\
  [ 5, w],\n\
  [ 2, ss],\n\
  [ 7, e],\n\
  [ 1, e],\n\
  [ 0, nn],\n\
  [ 6, w],\n\
  [ 4, w],\n\
  [ 5, w],\n\
  [ 2, w],\n\
  [ 7, ss],\n\
  [ 1, e],\n\
  [ 4, nn],\n\
  [ 5, nn],\n\
  [ 9, nn],\n\
  [ 8, en],\n\
  [ 6, s],\n\
  [ 0, s],\n\
  [ 4, w],\n\
  [ 5, n],\n\
  [ 9, n],\n\
  [ 8, n],\n\
  [ 6, e],\n\
  [ 0, ss],\n\
  [ 9, ws],\n\
  [ 5, sw],\n\
  [ 1, w],\n\
  [ 7, nn],\n\
  [ 2, e],\n\
  [ 8, es],\n\
  [ 1, s],\n\
  [ 4, ee],\n\
  [ 5, ne],\n\
  [ 9, nn],\n\
  [ 0, nn],\n\
  [ 6, w],\n\
  [ 8, ws],\n\
  [ 1, s],\n\
  [ 4, sw],\n\
  [ 7, w],\n\
  [ 2, nn],\n\
  [ 1, e],\n\
  [ 4, ss],\n\
  [ 5, s],\n\
  [ 9, e],\n\
  [ 0, n],\n\
  [ 6, n],\n\
  [ 8, w],\n\
  [ 4, s],\n\
  [ 1, w],\n\
  [ 2, ss],\n\
  [ 7, e],\n\
  [ 9, e],\n\
  [ 5, e],\n\
  [ 0, e],\n\
  [ 6, nn],\n\
  [ 1, w],\n\
  [ 5, ss],\n\
  [ 9, ss],\n\
  [ 7, w],\n\
  [ 2, nn],\n\
  [ 5, en],\n\
  [ 3, n],\n\
  [ 4, ee],\n\
  [ 8, ee],\n\
  [ 1, s],\n\
  [ 9, ww],\n\
  [ 5, ww],\n\
  [ 3, n],\n\
  [ 8, ne],\n\
  [ 1, e]\n\
]\n\
\n\
\n\
_విధానము_     moveOne() {\n\
  ఆది_స్థితి()\n\
  //console.log( "mO " + moveCount)\n\
  //console.log( "mO " + moves[moveCount])\n\
\n\
  drawBlocks();\n\
  caption( "Sliding block move " + moveCount)\n\
  findFree()\n\
  console.log("   State: " + getState())\n\
  findMoves()\n\
  if (moveCount > 0) {\n\
    checkLastMove( lastMove[0], lastMove[1])\n\
  }\n\
  _సర్వత్ర_   block = moves[ moveCount][0]\n\
  _సర్వత్ర_   dir =   moves[ moveCount][1]\n\
  console.log( "  Move " + moveCount + ": " + block + dir)\n\
  checkMove( block,  dir)\n\
  drag( block, dir)\n\
  moveCount = moveCount + 1;\n\
  lastMove = [block, dir]\n\
  if (moveCount < moves.length) {\n\
    విలంబించు( moveOne, delayTime)\n\
  }\n\
}\n\
\n\
_విధానము_     ప్రదర్శన() {\n\
  ఆది_స్థితి()\n\
  init()\n\
  moveCount=0\n\
\n\
  విలంబించు( moveOne, delayTime)\n\
}\n\
'
snowman ='\
// Snowman -- draw a simple snowman\n\
\n\
// draw the three cirles for the body\n\
చెరిపి_వేయి()\n\
వెడల్పు(1)\n\
స్థానము_మార్చు(0,-100)\n\
వృత్తము(80)\n\
స్థానము_మార్చు(0,-100+80+60)\n\
వృత్తము(60)\n\
స్థానము_మార్చు(0,-100+80+60+60+40)\n\
వృత్తము(40)\n\
\n\
// add the coal for the eyes, nose and mouth\n\
స్థానము_మార్చు(-15,160)\n\
నిండు_వృత్తము()\n\
స్థానము_మార్చు(15,160)\n\
నిండు_వృత్తము()\n\
స్థానము_మార్చు(0,140)\n\
నిండు_వృత్తము()\n\
స్థానము_మార్చు(0,120)\n\
నిండు_వృత్తము()\n\
స్థానము_మార్చు(15,125)\n\
నిండు_వృత్తము()\n\
స్థానము_మార్చు(-15,125)\n\
నిండు_వృత్తము()\n\
\n\
// add coal for the buttons\n\
స్థానము_మార్చు(0,60)\n\
నిండు_వృత్తము()\n\
స్థానము_మార్చు(0,40)\n\
నిండు_వృత్తము()\n\
స్థానము_మార్చు(0,20)\n\
నిండు_వృత్తము()\n\
స్థానము_మార్చు(0,0)\n\
నిండు_వృత్తము()\n\
\n\
// add stick for a right arm\n\
స్థానము_మార్చు(56,60)\n\
కోణము (60)\n\
వెడల్పు(3)\n\
ముందుకు_జరుగు(40)\n\
ఎడమ_వైపు_తిరుగు(15)\n\
ముందుకు_జరుగు(25)\n\
వెనుకకు_జరుగు(25)\n\
కుడి_వైపు_తిరుగు(20)\n\
ముందుకు_జరుగు(30)\n\
వెనుకకు_జరుగు(30)\n\
కుడి_వైపు_తిరుగు(10)\n\
ముందుకు_జరుగు(20)\n\
\n\
// add stick for a left arm\n\
స్థానము_మార్చు(-56,60)\n\
కోణము (-60)\n\
వెడల్పు(3)\n\
ముందుకు_జరుగు(40)\n\
ఎడమ_వైపు_తిరుగు(15)\n\
ముందుకు_జరుగు(25)\n\
వెనుకకు_జరుగు(25)\n\
కుడి_వైపు_తిరుగు(20)\n\
ముందుకు_జరుగు(30)\n\
వెనుకకు_జరుగు(30)\n\
కుడి_వైపు_తిరుగు(10)\n\
ముందుకు_జరుగు(20)\n\
'
snub_icosidodecahedron ='\
// Snub Icosidodecahedron Half -- half pattern for model of snub icosidodecahedron\n\
\n\
/*\n\
Print two copies of this on card stock.\n\
Score the lines to make it easier to fold.\n\
Fold and glue the tabs together, so they\n\
are inside the model. Mind the overlaps (10) and\n\
the inner single tabs (5).\n\
\n\
Have fun.\n\
*/\n\
\n\
_విధానము_     leftTriangle(side) {\n\
  for (_సర్వత్ర_   i=0; i<3; i++) {\n\
    ముందుకు_జరుగు(side)\n\
    ఎడమ_వైపు_తిరుగు(120)\n\
  }\n\
}\n\
\n\
_విధానము_     leftTab( side) {\n\
  _సర్వత్ర_   x = కుంచిక.స్థానము.x\n\
  _సర్వత్ర_   y = కుంచిక.స్థానము.y\n\
  ఎడమ_వైపు_తిరుగు( 180 - 45)\n\
  ముందుకు_జరుగు( side * .2)\n\
  ఎడమ_వైపు_తిరుగు( 45)\n\
  ముందుకు_జరుగు( side * .72)\n\
  ఎడమ_వైపు_తిరుగు( 45)\n\
  ముందుకు_జరుగు( side * .2)\n\
  ఎడమ_వైపు_తిరుగు( 180 - 45)\n\
  ముందుకు_జరుగు( side)\n\
  స్థానము_మార్చు( x, y)\n\
}\n\
\n\
\n\
_విధానము_     rightTriangle(side, tabs) {\n\
  for (_సర్వత్ర_   i=0; i<3; i++) {\n\
    ముందుకు_జరుగు(side)\n\
    if (tabs.includes (""+i)) {\n\
      leftTab(side)\n\
    }\n\
    కుడి_వైపు_తిరుగు(120)\n\
  }\n\
}\n\
\n\
_విధానము_     leftPentagon(side) {\n\
  for (_సర్వత్ర_   i=0; i<5; i++) {\n\
    ముందుకు_జరుగు(side)\n\
    ఎడమ_వైపు_తిరుగు(72)\n\
    if (i  == 0) {\n\
      rightTriangle(side, "1")\n\
    }\n\
    if (i  == 1 || i == 2) {\n\
      rightTriangle(side, "1,2")\n\
    }\n\
    if (i == 3) {\n\
      rightTriangle(side, "1")\n\
      కుడి_వైపు_తిరుగు(60)\n\
      //ఆకారము_ప్రారంభించు()\n\
      rightTriangle(side, "1,2")\n\
      //ఆకారము_ముగించు("red")\n\
      ఎడమ_వైపు_తిరుగు(60)\n\
    }\n\
  }\n\
}\n\
\n\
_విధానము_     rightPentagon(side) {\n\
  for (_సర్వత్ర_   i=0; i<5; i++) {\n\
    ఎడమ_వైపు_తిరుగు(120)\n\
    ముందుకు_జరుగు(side)\n\
    కుడి_వైపు_తిరుగు(120)\n\
    leftPentagon(side) // outer pentagon\n\
    ఎడమ_వైపు_తిరుగు(120)\n\
    వెనుకకు_జరుగు(side)\n\
    కుడి_వైపు_తిరుగు(120)\n\
    ముందుకు_జరుగు(side)\n\
    ఎడమ_వైపు_తిరుగు(120)\n\
    rightTriangle(side, "")\n\
    కుడి_వైపు_తిరుగు(120)\n\
    కుడి_వైపు_తిరుగు(72)\n\
    leftTriangle(side)\n\
  }\n\
}\n\
\n\
\n\
_విధానము_     ప్రదర్శన() {\n\
  ఆది_స్థితి()\n\
  side = .25 * Math.min( గరిష్ఠX(), గరిష్ఠY())\n\
  స్థానము_మార్చు(-.666 * side, - .333 * side)\n\
  rightPentagon(side) // inner pentagon\n\
  కుంచికను_దాచు()\n\
}\n\
'
spinning_squares ='\
// Spinning Squares -- draw some square of increasing size and కోణము.\n\
\n\
_విధానము_     square (side) {\n\
  _సర్వత్ర_   i=0\n\
  while (i<4) {\n\
    ముందుకు_జరుగు( side)\n\
    turn(90)\n\
    i=i+1\n\
  }\n\
}\n\
\n\
_విధానము_     spinningSquare2() {\n\
   ఆది_స్థితి();\n\
   కుంచికను_దాచు();\n\
   రంగు_మార్చు( నీలము );\n\
   _సర్వత్ర_   side = 100;\n\
   while (side > 0) {\n\
      square(side);\n\
      కుడి_వైపు_తిరుగు(36);\n\
      side = side - 10;\n\
   }\n\
}\n\
\n\
_విధానము_     spinningSquare() {\n\
  ఆది_స్థితి()\n\
  _సర్వత్ర_   steps = 100\n\
  stepSize = 2 * గరిష్ఠX()\n\
  if (1.5 * గరిష్ఠY() < stepSize) {\n\
    stepSize = 1.5 * గరిష్ఠY()\n\
  }\n\
  stepSize = .5 * stepSize/steps\n\
  //_సర్వత్ర_   stepSize = 200/steps\n\
  రంగు_మార్చు( నీలము );\n\
  for (_సర్వత్ర_   i=0; i<steps; i=i+1) {\n\
    square(stepSize*i);\n\
    కుడి_వైపు_తిరుగు(360/steps)\n\
  }\n\
}\n\
\n\
ప్రదర్శన = spinningSquare2 // set the demo _విధానము_     to be spinningSquare2\n\
'
spiral ='\
// Spiral -- demonstrate some simple spirals\n\
\n\
_విధానము_     spiral1() {\n\
  ఆది_స్థితి()\n\
  n=0\n\
  while (n<400) {\n\
    ముందుకు_జరుగు(n)\n\
    కుడి_వైపు_తిరుగు(90)\n\
    n=n+3\n\
  }\n\
}\n\
\n\
_విధానము_     spiral2() {\n\
  ఆది_స్థితి()\n\
  n=0\n\
  while (n<75) {\n\
    ముందుకు_జరుగు(n)\n\
    కుడి_వైపు_తిరుగు(90-n)\n\
    n=n+1\n\
  }\n\
}\n\
\n\
\n\
_విధానము_     spiral3() {\n\
  ఆది_స్థితి()\n\
   చుట్టొద్దు()\n\
  n=0\n\
  while (n<40) {\n\
    ముందుకు_జరుగు(n)\n\
    కుడి_వైపు_తిరుగు(15)\n\
    n=n+.25\n\
  }\n\
}\n\
\n\
_విధానము_     spiral() {\n\
  ఆది_స్థితి()\n\
   చుట్టొద్దు()\n\
  n=0\n\
  while (n<1000) {\n\
    ముందుకు_జరుగు(n)\n\
    కుడి_వైపు_తిరుగు(15)\n\
    n=n+.25\n\
    // కుంచిక.స్థానము.x is the x position of the కుంచిక\n\
    // కుంచిక.స్థానము.y is the y position of the కుంచిక\n\
    x = కుంచిక.స్థానము.x\n\
    y = కుంచిక.స్థానము.y\n\
console.log("x:"+x+" y:"+y)\n\
    // "||" means "or", so the following statement checks for out of bounds\n\
    if (x>గరిష్ఠX() || x<కనిష్ఠX() || y>గరిష్ఠY() ||y<కనిష్ఠY()) {\n\
console.log("exiting:")\n\
      break; // exit the loop early\n\
    }\n\
  }\n\
}\n\
\n\
ప్రదర్శన = spiral;\n\
\n\
'
square_lines ='\
// Square Lines -- draw a set of overlapping squares without turns\n\
\n\
_విధానము_     ప్రదర్శన() {\n\
  ఆది_స్థితి()\n\
   చుట్టొద్దు()\n\
  side = 30\n\
  side2 = side + side\n\
  offset = true\n\
  for (_సర్వత్ర_   i=కనిష్ఠY(); i<గరిష్ఠY(); i = i + side) {\n\
    స్థానము_మార్చు(కనిష్ఠX(),i)\n\
    కోణము(90)\n\
    if (offset) {\n\
      కుంచికను_పైకి_ఎత్తు()\n\
      ముందుకు_జరుగు( side)\n\
      కుంచికను_కింద_పెట్టు()\n\
    }\n\
    offset = !offset\n\
    for (_సర్వత్ర_   j=కనిష్ఠX(); j<గరిష్ఠX(); j = j + 3*side) {\n\
      ముందుకు_జరుగు( side2)\n\
      కుంచికను_పైకి_ఎత్తు()\n\
      ముందుకు_జరుగు( side)\n\
      కుంచికను_కింద_పెట్టు()\n\
    }\n\
  }\n\
\n\
  offset = true\n\
  for (_సర్వత్ర_   i=కనిష్ఠX(); i<గరిష్ఠX(); i = i + side) {\n\
    స్థానము_మార్చు(i, కనిష్ఠY())\n\
    కోణము(0)\n\
    if (offset) {\n\
      ముందుకు_జరుగు( side)\n\
    }\n\
    offset = !offset\n\
    for (_సర్వత్ర_   j=గరిష్ఠY(); j>కనిష్ఠY(); j = j - 3*side) {\n\
      కుంచికను_పైకి_ఎత్తు()\n\
      ముందుకు_జరుగు( side)\n\
      కుంచికను_కింద_పెట్టు()\n\
      ముందుకు_జరుగు( side2)\n\
    }\n\
  }\n\
}\n\
'
square_series ='\
// Square Series -- draw a set of overlapping squares\n\
\n\
// lower right is not quite right, it gets left out.\n\
\n\
_విధానము_     paddle (side) {\n\
  side2 = side + side\n\
  ముందుకు_జరుగు( side2)\n\
  కుడి_వైపు_తిరుగు( 90)\n\
  ముందుకు_జరుగు( side)\n\
  ఎడమ_వైపు_తిరుగు( 90)\n\
  ముందుకు_జరుగు( side2)\n\
  ఎడమ_వైపు_తిరుగు( 90)\n\
  ముందుకు_జరుగు( side2)\n\
  ఎడమ_వైపు_తిరుగు( 90)\n\
  ముందుకు_జరుగు( side2)\n\
  ఎడమ_వైపు_తిరుగు( 90)\n\
  ముందుకు_జరుగు( side)\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  కుడి_వైపు_తిరుగు( 90)\n\
  ముందుకు_జరుగు( side2)\n\
  కుడి_వైపు_తిరుగు( 180)\n\
  కుంచికను_కింద_పెట్టు()\n\
}\n\
\n\
\n\
_విధానము_     cwGroup( side) {\n\
  for( _సర్వత్ర_   i=0; i<4; i++) {\n\
    paddle( side)\n\
    కుంచికను_పైకి_ఎత్తు()\n\
    ముందుకు_జరుగు( side)\n\
    కుడి_వైపు_తిరుగు( 90)\n\
    కుంచికను_కింద_పెట్టు()\n\
  }\n\
}\n\
\n\
\n\
_విధానము_     ccwGroup( side) {\n\
  for( _సర్వత్ర_   i=0; i<4; i++) {\n\
    paddle( side)\n\
    కుంచికను_పైకి_ఎత్తు()\n\
    ముందుకు_జరుగు( side)\n\
    ఎడమ_వైపు_తిరుగు( 90)\n\
    కుంచికను_కింద_పెట్టు()\n\
  }\n\
}\n\
\n\
\n\
_విధానము_     cwRow( side) {\n\
  for (_సర్వత్ర_   i=కనిష్ఠX(); i<గరిష్ఠX(); i = i + 6*side) {\n\
    xనియోగించు(i)\n\
    cwGroup( side)\n\
  }\n\
}\n\
\n\
\n\
_విధానము_     ccwRow( side) {\n\
  for (_సర్వత్ర_   i=కనిష్ఠX() + 4*side; i<గరిష్ఠX(); i = i + 6*side) {\n\
                     // offset row 3 sides + 1 for cw/ccw flip\n\
    xనియోగించు(i)\n\
    ccwGroup( side)\n\
  }\n\
}\n\
\n\
\n\
_విధానము_     ప్రదర్శన() {\n\
   చుట్టొద్దు()\n\
  side = 30\n\
  for (_సర్వత్ర_   i=కనిష్ఠY(); i<గరిష్ఠY(); i = i + 6*side) {\n\
    yనియోగించు(i)\n\
    cwRow( side)\n\
    yనియోగించు(i + 3*side)\n\
    రంగు_మార్చు( ఎరుపు )\n\
    ccwRow( side)\n\
    రంగు_మార్చు("నలుపు")\n\
  }\n\
}\n\
'
square_tessellation ='\
// Square Tessellation -- tile a space using squares\n\
\n\
colors = ["red", "white", "blue","yellow", "green"]\n\
\n\
_విధానము_     squ( side, fColor) {\n\
  ఆకారము_ప్రారంభించు()\n\
  for (_సర్వత్ర_   i=0; i<4; i++) {\n\
    ముందుకు_జరుగు( side)\n\
    కుడి_వైపు_తిరుగు( 90)\n\
  }\n\
  ఆకారము_ముగించు( fColor)\n\
}\n\
\n\
_విధానము_     squLeft( side, fColor) {\n\
  ఆకారము_ప్రారంభించు()\n\
  for (_సర్వత్ర_   i=0; i<4; i++) {\n\
    ముందుకు_జరుగు( side)\n\
    ఎడమ_వైపు_తిరుగు( 90)\n\
  }\n\
  ఆకారము_ముగించు( fColor)\n\
}\n\
\n\
// nextColor could be a random _విధానము_     or use less colors\n\
_విధానము_     nextColor() {\n\
  c = colors[ count % colors.length]\n\
  count = count + 1\n\
  _ఫలము_  c\n\
}\n\
\n\
_విధానము_     ప్రదర్శన() {\n\
  ఆది_స్థితి()\n\
  count = 0\n\
  rowOffset = s/3\n\
   చుట్టొద్దు()\n\
  స్థానము_మార్చు(కనిష్ఠX(), గరిష్ఠY())\n\
  కుడి_వైపు_తిరుగు( 90)\n\
\n\
  s = 50\n\
  while (కుంచిక.స్థానము.y > కనిష్ఠY()) {\n\
    while (కుంచిక.స్థానము.x < గరిష్ఠX()) {\n\
      squ(s, nextColor())\n\
      ముందుకు_జరుగు(s)\n\
    }\n\
    కుడి_వైపు_తిరుగు(90)\n\
    ముందుకు_జరుగు( s)\n\
    కుడి_వైపు_తిరుగు(90)\n\
    వెనుకకు_జరుగు(rowOffset)\n\
    while (కుంచిక.స్థానము.x > కనిష్ఠX()) {\n\
      squLeft(s, nextColor())\n\
      ముందుకు_జరుగు(s)\n\
    }\n\
    ఎడమ_వైపు_తిరుగు(90)\n\
    ముందుకు_జరుగు(s)\n\
    ఎడమ_వైపు_తిరుగు(90)\n\
    ముందుకు_జరుగు(rowOffset)\n\
  }\n\
}\n\
'
squiggle ='\
// Squiggle -- draw a random squiggle\n\
\n\
_విధానము_     squiggle(steps,కోణము) {\n\
  widthInc = 5 / steps;\n\
  distInc = 10 / steps;\n\
  w = 0.1;\n\
  ఆవర్తించు(steps, _విధానము_     () {\n\
    వెడల్పు(w);\n\
    ముందుకు_జరుగు(యాదృచ్ఛిక_సంఖ్య(1,10));\n\
    కుడి_వైపు_తిరుగు(కోణము);\n\
    కోణము = కోణము - 1;\n\
    w = w + widthInc;\n\
  })\n\
}\n\
\n\
_విధానము_     drawRandomSquiggle() {\n\
  రంగు_మార్చు(యాదృచ్ఛిక_సంఖ్య(16));\n\
  స్థానము_మార్చు(యాదృచ్ఛిక_సంఖ్య(కనిష్ఠX(), గరిష్ఠX()), యాదృచ్ఛిక_సంఖ్య(కనిష్ఠY(), గరిష్ఠY()));\n\
  కోణము(యాదృచ్ఛిక_సంఖ్య(0,360));\n\
  squiggle(యాదృచ్ఛిక_సంఖ్య(100,1000), యాదృచ్ఛిక_సంఖ్య(5,90));\n\
}\n\
\n\
_విధానము_     ప్రదర్శన() {\n\
  ఆది_స్థితి()\n\
  కుంచికను_దాచు();\n\
  drawRandomSquiggle();\n\
}\n\
'
stamps ='\
// Stamps -- demonstrate stamping of a star design multiple times\n\
\n\
_విధానము_     star (side) {\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  ముందుకు_జరుగు(.54*side)\n\
  turn (180-18)\n\
  కుంచికను_కింద_పెట్టు()\n\
  _సర్వత్ర_   i=0\n\
  while (i<5){\n\
    ముందుకు_జరుగు(side)\n\
    కుడి_వైపు_తిరుగు(180-36)\n\
    i = i + 1\n\
  }\n\
  turn (180+18)\n\
}\n\
\n\
_విధానము_     stamps () {\n\
  ఆది_స్థితి()\n\
   చుట్టొద్దు()\n\
  _సర్వత్ర_   x = కనిష్ఠX()\n\
  while (x <= గరిష్ఠX()) {\n\
    _సర్వత్ర_   y = కనిష్ఠY()\n\
    while (y <= గరిష్ఠY()) {\n\
      స్థానము_మార్చు(x,y)\n\
      కోణము (0);\n\
      star (25);\n\
      y = y+30\n\
    }\n\
    x = x+30\n\
  }\n\
}\n\
\n\
  \n\
ప్రదర్శన = stamps\n\
'
star ='\
// Star -- draw a simple star\n\
\n\
_విధానము_     star (side) {\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  ముందుకు_జరుగు(.54*side)\n\
  turn (180-18)\n\
  కుంచికను_కింద_పెట్టు()\n\
  _సర్వత్ర_   i=0\n\
  while (i<5){\n\
    ముందుకు_జరుగు(side)\n\
    కుడి_వైపు_తిరుగు(180-36)\n\
    i = i + 1\n\
  } \n\
  turn (180+18)\n\
}   \n\
    \n\
    \n\
_విధానము_     ప్రదర్శన() {\n\
  ఆది_స్థితి()\n\
  side =  1.8* Math.min( గరిష్ఠX(), గరిష్ఠY())\n\
  ఆకారము_ప్రారంభించు()\n\
  star ( side)\n\
  ఆకారము_ముగించు("gold")\n\
  కుంచికను_దాచు()\n\
}\n\
'
star_burst ='\
// Starburst -- simple example of while statement and colors\n\
\n\
_విధానము_     starburst () {\n\
  _సర్వత్ర_   steps = 1000\n\
  _సర్వత్ర_   len = గరిష్ఠX()\n\
  if (len < గరిష్ఠY()) {\n\
    len = గరిష్ఠY()\n\
  }\n\
  len = 1.5 * len\n\
  _సర్వత్ర_   i = 0\n\
  while ( i < steps) {\n\
    స్థానము_మార్చు( 0,0)\n\
    కోణము( 360/steps*i)\n\
    రంగు_మార్చు( random (16))\n\
    //రంగు_మార్చు("hsl("+ 360 * i/steps + ", 100%, 50%)") // color wheel\n\
    //రంగు_మార్చు(i%16)\n\
    //రంగు_మార్చు(Math.floor(16 * i/steps)) // logo colors\n\
    ముందుకు_జరుగు(len)\n\
    i = i + 1\n\
  }\n\
}\n\
\n\
_విధానము_     ప్రదర్శన() {\n\
  ఆది_స్థితి()\n\
   చుట్టొద్దు()\n\
  starburst()\n\
} \n\
'
stars_and_rhombuses ='\
// Stars and Rhombuses -- tesselation found on a wall paper pattern\n\
\n\
_విధానము_     quadRhom( side) {\n\
  for( _సర్వత్ర_   i=0; i<4; i++) {\n\
    for ( _సర్వత్ర_   j=0; j<4; j++) {\n\
      ముందుకు_జరుగు( side)\n\
      కుడి_వైపు_తిరుగు( ang)\n\
      ముందుకు_జరుగు( side)\n\
      కుడి_వైపు_తిరుగు( 180- ang)\n\
      ముందుకు_జరుగు( side)\n\
      కుడి_వైపు_తిరుగు( ang)\n\
      ముందుకు_జరుగు( side)\n\
      కుడి_వైపు_తిరుగు( 180- ang)\n\
    }\n\
    కుడి_వైపు_తిరుగు( 90)\n\
  }\n\
}\n\
\n\
_విధానము_     ప్రదర్శన() {\n\
  ఆది_స్థితి()\n\
   చుట్టొద్దు()\n\
  కుంచికను_దాచు()\n\
  ang = 60\n\
  side = 20\n\
  xoffset = 0\n\
  chord = 2* side * Math.cos(degToRad(ang/2))\n\
\n\
  for (_సర్వత్ర_   fy=గరిష్ఠY(); fy>కనిష్ఠY(); fy=fy - chord) {   \n\
    for (_సర్వత్ర_   fx=కనిష్ఠX(); fx<గరిష్ఠX(); fx=fx + 2*chord) {\n\
      స్థానము_మార్చు( fx+xoffset, fy)\n\
      కోణము( 90 - ang/2)\n\
      quadRhom( side)\n\
    }\n\
    if (xoffset>0) {\n\
      xoffset = 0\n\
    } else {\n\
      xoffset = chord\n\
    }\n\
  }\n\
}\n\
'
tree ='\
// Tree Symmetrical -- draw a symmetrical tree\n\
\n\
//GLOBALS\n\
_సర్వత్ర_   scale // varible to influence overall tree size\n\
\n\
\n\
//  code inspired from a code.org lesson\n\
_విధానము_     drawTree(depth, branches) {\n\
  _సర్వత్ర_   spread = 120;	//spread is కోణము of left to right branches\n\
  _సర్వత్ర_   tilt = 0;		//tilt is కోణము of the cluster\n\
  _సర్వత్ర_   ratio = 7;	//ratio is branch depth to length ratio\n\
  if (depth>0) { \n\
   రంగు_మార్చు( యాదృచ్ఛిక_సంఖ్య( 16));\n\
   కుంచికను_కింద_పెట్టు();\n\
   వెడల్పు(depth + యాదృచ్ఛిక_సంఖ్య(0,2));\n\
   ముందుకు_జరుగు(scale* ratio * depth);\n\
   ఎడమ_వైపు_తిరుగు(tilt + spread/2 + spread/branches/2);\n\
   ఆవర్తించు(branches, _విధానము_     () {\n\
     కుడి_వైపు_తిరుగు(spread/branches);\n\
     drawTree(depth-1, branches);\n\
   });\n\
   ఎడమ_వైపు_తిరుగు(spread - tilt - spread/2 - spread/branches/2); // _ఫలము_  to start కోణము\n\
   కుంచికను_పైకి_ఎత్తు();\n\
   వెనుకకు_జరుగు(scale * ratio * depth); // backup to start point\n\
  }\n\
}\n\
\n\
// draw a more random tree\n\
_విధానము_     drawRTree(depth, branches) {\n\
  _సర్వత్ర_   spread = యాదృచ్ఛిక_సంఖ్య(90,180);	// spread is కోణము of left to right branches\n\
  _సర్వత్ర_   tilt = యాదృచ్ఛిక_సంఖ్య(-15,15);	// tilt is కోణము of the cluster\n\
  _సర్వత్ర_   ratio = random (5,9);	// ratio is branch depth to length ratio\n\
  if (depth>0) { \n\
   రంగు_మార్చు( యాదృచ్ఛిక_సంఖ్య( 16));\n\
   కుంచికను_కింద_పెట్టు();\n\
   వెడల్పు(depth + యాదృచ్ఛిక_సంఖ్య(0,2));\n\
   ముందుకు_జరుగు(scale * ratio * depth);\n\
   ఎడమ_వైపు_తిరుగు(tilt + spread/2 + spread/branches/2);\n\
   ఆవర్తించు(branches, _విధానము_     () {\n\
     కుడి_వైపు_తిరుగు(spread/branches);\n\
     drawTree(depth-1, branches);\n\
   });\n\
   ఎడమ_వైపు_తిరుగు(spread - tilt - spread/2 - spread/branches/2); // _ఫలము_  to start కోణము\n\
   కుంచికను_పైకి_ఎత్తు();\n\
   వెనుకకు_జరుగు(scale * ratio * depth); // backup to start point\n\
  }\n\
}\n\
\n\
_విధానము_     ప్రదర్శన() {\n\
  ఆది_స్థితి();\n\
  కుంచికను_దాచు();\n\
  scale = .01 * Math.min( గరిష్ఠX(), గరిష్ఠY())\n\
  కుంచికను_పైకి_ఎత్తు();\n\
  వెనుకకు_జరుగు(scale * 70);\n\
  కుంచికను_కింద_పెట్టు();\n\
  drawRTree(6,4)\n\
}\n\
'
triangle_tessellation ='\
// Triangle Tesselation -- tile a space using triangles\n\
\n\
colors = ["red", "white", "blue", "yellow", "green"]\n\
\n\
_విధానము_     triUp( side, fColor) {\n\
  ఆకారము_ప్రారంభించు()\n\
  for (_సర్వత్ర_   i=0; i<3; i++) {\n\
    ముందుకు_జరుగు( side)\n\
    ఎడమ_వైపు_తిరుగు( 120)\n\
  }\n\
  ఆకారము_ముగించు( fColor)\n\
}\n\
\n\
_విధానము_     triDown( side, fColor) {\n\
  ఆకారము_ప్రారంభించు()\n\
  for (_సర్వత్ర_   i=0; i<3; i++) {\n\
    ముందుకు_జరుగు( side)\n\
    కుడి_వైపు_తిరుగు( 120)\n\
  }\n\
  ఆకారము_ముగించు( fColor)\n\
}\n\
\n\
// nextColor could be completely random, if desired\n\
_విధానము_     nextColor() { \n\
  c = colors[ count % colors.length]\n\
  count = count + 1\n\
  _ఫలము_  c\n\
}\n\
\n\
_విధానము_     ప్రదర్శన() {\n\
  ఆది_స్థితి()\n\
  count = 0\n\
  rowOffset = s/3 // offset between rows\n\
   చుట్టొద్దు()\n\
  స్థానము_మార్చు(కనిష్ఠX(), గరిష్ఠY())\n\
  కుడి_వైపు_తిరుగు( 90)\n\
\n\
  s = 50\n\
  while (కుంచిక.స్థానము.y > కనిష్ఠY()) {\n\
  while (కుంచిక.స్థానము.x < గరిష్ఠX()) {\n\
    triDown(s, nextColor())\n\
    ముందుకు_జరుగు(s)\n\
  }\n\
  కుడి_వైపు_తిరుగు(120)\n\
  ముందుకు_జరుగు( s)\n\
  కుడి_వైపు_తిరుగు(60)\n\
  while (కుంచిక.స్థానము.x > కనిష్ఠX()) {\n\
    triDown(s, nextColor())\n\
    ముందుకు_జరుగు(s)\n\
  }\n\
  ఎడమ_వైపు_తిరుగు(180)\n\
  ముందుకు_జరుగు(rowOffset)\n\
  }\n\
}\n\
'
triangle_tunnel ='\
// Triangle Tunnel -- animate a set of mesmerizing nested triangle for a tunnel effect\n\
// this uses an array to hold the colors of the current triangles\n\
\n\
// GLOBALS\n\
_సర్వత్ర_   sides = 80;\n\
\n\
\n\
_విధానము_     triangle (side) {\n\
  if (side < maxSide) {\n\
    కేంద్రకమునకు_వెళ్ళు()\n\
    కుంచికను_పైకి_ఎత్తు();\n\
    ముందుకు_జరుగు(side/2);\n\
    కుడి_వైపు_తిరుగు(150);\n\
    కుంచికను_కింద_పెట్టు();\n\
    for (_సర్వత్ర_   i=0; i<3; i++) {\n\
      ముందుకు_జరుగు(side);\n\
      కుడి_వైపు_తిరుగు(120);\n\
    }\n\
  }\n\
}\n\
\n\
\n\
_విధానము_     nestTri () {\n\
  console.log("one more" + tColor + " sides:"+ sides)\n\
  tColor.push(random (15));\n\
  tColor.shift();\n\
  for (_సర్వత్ర_   i=0; i<sides; i++) {\n\
    రంగు_మార్చు(tColor[i]);\n\
    triangle (i*15);\n\
  }\n\
}\n\
\n\
\n\
_విధానము_     ప్రదర్శన() {\n\
  ఆది_స్థితి()\n\
  కుంచికను_దాచు()\n\
\n\
  maxSide = 1.8* Math.min( గరిష్ఠX(), గరిష్ఠY())\n\
  tColor = []\n\
  for (_సర్వత్ర_   i=0; i<sides; i++) {\n\
    tColor [i] = random (15)\n\
  }\n\
  ఆడించు(nestTri,1);\n\
}\n\
\n\
'
two_square_tessellation ='\
// Two Square Tessellation -- tile a space using two sizes of squares\n\
\n\
// this assumes that the smaller square is 1/2 of the larger square.\n\
// that need not be the case\n\
\n\
colors = ["red", "blue", "yellow", "green"]\n\
offsets = [0, -1, -2, -.5, -1.5]\n\
\n\
_విధానము_     squ( side, fColor) {\n\
  ఆకారము_ప్రారంభించు()\n\
  for (_సర్వత్ర_   i=0; i<4; i++) {\n\
    ముందుకు_జరుగు( side)\n\
    కుడి_వైపు_తిరుగు( 90)\n\
  }\n\
  ఆకారము_ముగించు( fColor)\n\
}\n\
\n\
_విధానము_     squLeft( side, fColor) {\n\
  ఆకారము_ప్రారంభించు()\n\
  for (_సర్వత్ర_   i=0; i<4; i++) {\n\
    ముందుకు_జరుగు( side)\n\
    ఎడమ_వైపు_తిరుగు( 90)\n\
  }\n\
  ఆకారము_ముగించు( fColor)\n\
}\n\
\n\
_విధానము_     nextColor() {\n\
  c = colors[ count % colors.length]\n\
  count = count + 1\n\
  _ఫలము_  c\n\
}\n\
\n\
_విధానము_     ప్రదర్శన() {\n\
  ఆది_స్థితి()\n\
  count = 0\n\
  rowCount = 0\n\
  column = కనిష్ఠX()\n\
  row = గరిష్ఠY()\n\
   చుట్టొద్దు()\n\
  కుడి_వైపు_తిరుగు( 90)\n\
\n\
  s = 50\n\
  while( కుంచిక.స్థానము.y > కనిష్ఠY()) {\n\
    స్థానము_మార్చు(కనిష్ఠX()+offsets[ rowCount % offsets.length]*s, గరిష్ఠY()-rowCount*s/2+s/2)\n\
    while( కుంచిక.స్థానము.x < గరిష్ఠX()) {\n\
      కుంచికను_కింద_పెట్టు()\n\
      squ(s, nextColor())\n\
      కుంచికను_పైకి_ఎత్తు()\n\
      ముందుకు_జరుగు(s*2)\n\
      కుంచికను_కింద_పెట్టు()\n\
      squ( s/2, nextColor())\n\
      ముందుకు_జరుగు( s/2)\n\
    }\n\
    rowCount = rowCount + 1\n\
  }\n\
}\n\
'
wang_tiles ='\
// Wang Tiles -- progressively tile the canvas with Wang Tiles\n\
\n\
\n\
//****CONFIGURATION****\n\
\n\
side = 30\n\
margin = 10\n\
\n\
\n\
//****CONSTANTS****\n\
\n\
N = 0\n\
E = 1\n\
S = 2\n\
W = 3\n\
\n\
\n\
_సర్వత్ర_   TILES = [ // original 13\n\
  "GGBR",\n\
  "GBGR",\n\
  "GBBG",\n\
  "RRGG",\n\
  "RRBB",\n\
  "RGGB",\n\
  "YYRY",\n\
  "BYGY",\n\
  "GKRY",\n\
  "GKYY",\n\
  "YKRK",\n\
  "BKGK",\n\
  "GYGK"\n\
];\n\
\n\
\n\
/*\n\
_సర్వత్ర_   TILES = [ // new 11\n\
  "RRRY",\n\
  "BRBY",\n\
  "RYYY",\n\
  "WBRB",\n\
  "BBWB",\n\
  "WWRW",\n\
  "RYBW",\n\
  "BWBR",\n\
  "BRWR",\n\
  "YYBR",\n\
  "RWRY",\n\
];\n\
*/\n\
\n\
\n\
_సర్వత్ర_   COLORS = { // original colors\n\
  "R": "red",\n\
  "G": "green",\n\
  "B": "blue",\n\
  "Y": "yellow",\n\
  "K": "బూడిద",\n\
  "W": "white"\n\
};\n\
\n\
\n\
/*\n\
_సర్వత్ర_   COLORS = { // for red-green color blind\n\
  "R": "red",\n\
  "G": "lightgreen",\n\
  "B": "blue",\n\
  "Y": "yellow",\n\
  "K": "skyblue"\n\
  "W": "white"\n\
};\n\
*/\n\
\n\
\n\
//****GLOBALS****\n\
\n\
_సర్వత్ర_   tiles; // global array of tile objects\n\
_సర్వత్ర_   currentTile; // current tile to be considered\n\
_సర్వత్ర_   hHumber; // number of tiles horizontally\n\
_సర్వత్ర_   vHumber; // number of tiles vertically\n\
\n\
\n\
//****FUNCTIONS****\n\
\n\
_విధానము_     drawTriangle (fill) {\n\
  // draw triangle in place\n\
  ఆకారము_ప్రారంభించు()\n\
  ముందుకు_జరుగు( side)\n\
  కుడి_వైపు_తిరుగు( 135)\n\
  ముందుకు_జరుగు( side/Math.sqrt(2))\n\
  కుడి_వైపు_తిరుగు( 90)\n\
  ముందుకు_జరుగు( side/Math.sqrt(2))\n\
  ఆకారము_ముగించు( fill)\n\
  కుడి_వైపు_తిరుగు( 135)\n\
}\n\
\n\
\n\
_విధానము_     drawTile (x, y, tile) {\n\
  స్థానము_మార్చు(x,y)\n\
  కోణము(90)\n\
  drawTriangle( COLORS[ TILES[tile][N]])\n\
  ముందుకు_జరుగు( side)\n\
  కుడి_వైపు_తిరుగు( 90)\n\
  drawTriangle( COLORS[ TILES[tile][E]])\n\
  ముందుకు_జరుగు( side)\n\
  కుడి_వైపు_తిరుగు( 90)\n\
  drawTriangle( COLORS[ TILES[tile][S]])\n\
  ముందుకు_జరుగు( side)\n\
  కుడి_వైపు_తిరుగు( 90)\n\
  drawTriangle( COLORS[ TILES[tile][W]])\n\
  ముందుకు_జరుగు( side)\n\
  కుడి_వైపు_తిరుగు( 90)\n\
}\n\
\n\
\n\
_విధానము_     north(tx, ty) { // get tile north of given coordinate\n\
  _సర్వత్ర_   possibles = tiles[ty-1][tx].possibles\n\
  _సర్వత్ర_   nTile = possibles[tiles[ty-1][tx].posIndex]\n\
  console.log("north",tx,ty, nTile)\n\
  _ఫలము_  nTile\n\
}\n\
\n\
\n\
_విధానము_     west(tx, ty) { // get tile west of given coordinate\n\
  _సర్వత్ర_   possibles = tiles[ty][tx-1].possibles\n\
  _సర్వత్ర_   wTile = possibles[tiles[ty][tx-1].posIndex]\n\
  console.log("west",tx,ty, wTile)\n\
  _ఫలము_  wTile\n\
}\n\
\n\
\n\
class Tile {\n\
  constructor (x, y, prev) {\n\
    //tile coordinates\n\
    this.tx = x\n\
    this.ty = y\n\
    //tile possibles\n\
    this.possibles = []\n\
    this.posIndex = undefined // index of possibles\n\
    // tile links\n\
    this.prev = prev\n\
    this.next = undefined\n\
  }\n\
\n\
  findPossibles() {\n\
    /*\n\
     * find the possible tiles for a new tile\n\
     * this may backtrack to previous tiles to find an alive tiling\n\
     * returns true if the tiling is alive\n\
     */\n\
\n\
    console.log("fP", this.tx, this.ty)\n\
    this.possibles = []\n\
    if (this.tx == 0 && this.ty == 0) {\n\
      console.log ("fP new")\n\
      this.possibles = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]\n\
\n\
    } else if (this.ty == 0) {\n\
      console.log ("fP first row")\n\
      _సర్వత్ర_   w = TILES[west(this.tx, this.ty)][E]\n\
      for (_సర్వత్ర_   i = 0; i<TILES.length; i++) {\n\
        console.log("fP",w , TILES[i][W])\n\
        if (TILES[i][W] == w){\n\
           console.log("fP push", i)\n\
           this.possibles.push(i)\n\
        }\n\
      }\n\
\n\
    } else if (this.tx == 0){\n\
      console.log ("fP new row")\n\
      _సర్వత్ర_   n = TILES[north(this.tx, this.ty)][S]\n\
      for (_సర్వత్ర_   i = 0; i<TILES.length; i++) {\n\
        if (TILES[i][N] == n){\n\
          this.possibles.push(i)\n\
        }\n\
      }\n\
\n\
    } else {\n\
      console.log ("fP in row")\n\
      _సర్వత్ర_   w = TILES[west(this.tx, this.ty)][E]\n\
      _సర్వత్ర_   n = TILES[north(this.tx, this.ty)][S]\n\
      for (_సర్వత్ర_   i = 0; i<TILES.length; i++) {\n\
        if (TILES[i][W] == w && TILES[i][N] == n){\n\
          this.possibles.push(i)\n\
        }\n\
      }\n\
    }\n\
\n\
    if (this.possibles.length > 0) { // ready to plot\n\
      //randomize order of possibles\n\
      _సర్వత్ర_   possibles = []\n\
      while (this.possibles.length > 0) {\n\
        possibles.push(\n\
            this.possibles.splice( \n\
                Math.random() * this.possibles.length, 1)[0]\n\
        )\n\
      }\n\
      this.possibles = possibles\n\
      this.posIndex = 0\n\
      console.log("fP-",this.tx, this.ty, this.possibles, this.posIndex)\n\
      _ఫలము_  (true)\n\
\n\
    } else { // blocked, need to backtrack\n\
      this.possibles = []\n\
      this.posIndex = undefined\n\
      this.plotBlank()\n\
      if (this.tx != 0 || this.ty != 0) {\n\
        _ఫలము_ ( this.prev.backtrack())\n\
      } else { // truly blocked\n\
        _ఫలము_ ( false)\n\
      }\n\
    }\n\
  }\n\
\n\
\n\
  backtrack() {\n\
    /*\n\
     * use the next possible of the current cell or backtrack again\n\
     */\n\
\n\
    console.log("bt:", this.tx, this.ty, this.possibles, this.posIndex)\n\
    currentTile = this\n\
    if (this.posIndex != undefined && this.posIndex + 1 < this.possibles.length) {\n\
      // ready to plot\n\
      this.posIndex = this.posIndex + 1\n\
      _ఫలము_ ( true)\n\
\n\
    } else { // backtrack again\n\
      this.possibles = []\n\
      this.posIndex = undefined\n\
      this.plotBlank()\n\
      if (this.tx != 0 || this.ty != 0) {\n\
        _ఫలము_ ( this.prev.backtrack())\n\
      } else { // truly blocked\n\
        _ఫలము_ ( false)\n\
      }\n\
    }\n\
  }\n\
\n\
\n\
  plot() {\n\
    if (this.posIndex != undefined && this.posIndex < this.possibles.length) {\n\
      _సర్వత్ర_   tile = this.possibles[this.posIndex]\n\
      console.log("plot", this.tx, this.ty, this.posIndex, tile)\n\
      drawTile (కనిష్ఠX()+margin + this.tx * side * 1,\n\
                గరిష్ఠY()-margin - this.ty * side * 1,\n\
                tile)\n\
    } else {\n\
      console.log( "***Plot Error")\n\
    }\n\
  }\n\
\n\
\n\
  plotBlank() {\n\
    console.log("plotblank", this.tx, this.ty)\n\
    రంగు_మార్చు( "white")\n\
    స్థానము_మార్చు( కనిష్ఠX()+margin + this.tx * side * 1,\n\
          గరిష్ఠY()-margin - this.ty * side * 1)\n\
    కోణము(90)\n\
    ఆకారము_ప్రారంభించు()\n\
    ముందుకు_జరుగు( side)\n\
    కుడి_వైపు_తిరుగు( 90)\n\
    ముందుకు_జరుగు( side)\n\
    కుడి_వైపు_తిరుగు( 90)\n\
    ముందుకు_జరుగు( side)\n\
    కుడి_వైపు_తిరుగు( 90)\n\
    ముందుకు_జరుగు( side)\n\
    కుడి_వైపు_తిరుగు( 90)\n\
    ఆకారము_ముగించు("lightblue")\n\
    రంగు_మార్చు("నలుపు")\n\
  }\n\
}\n\
\n\
\n\
_విధానము_     delayedBuild () {\n\
  కుంచికను_దాచు()\n\
  if (currentTile.findPossibles()) { // currentTile may change here\n\
    currentTile.plot()\n\
    if( (currentTile.tx != hNumber-1) ||\n\
        (currentTile.ty != vNumber-1)) {\n\
      currentTile = currentTile.next\n\
      విలంబించు( delayedBuild, 0)\n\
    }\n\
  }\n\
}\n\
\n\
\n\
//****MAIN****\n\
\n\
_విధానము_     ప్రదర్శన() {\n\
  ఆది_స్థితి()\n\
  //కుంచికను_దాచు()\n\
  tiles = []\n\
  // build a logical array of tiles\n\
  hNumber = Math.floor((గరిష్ఠX()*2 - margin * 2) / side)\n\
  vNumber = Math.floor((గరిష్ఠY()*2 - margin * 2) / side)\n\
  //hNumber = 8\n\
  //vNumber = 8\n\
  _సర్వత్ర_   prev = undefined\n\
  for (_సర్వత్ర_   r=0; r< vNumber; r++) {\n\
    tiles.push([]) //append row  \n\
    //వ్రాయి(tiles[0]) \n\
    for (_సర్వత్ర_   c=0; c< hNumber; c++) {\n\
      _సర్వత్ర_   tile = new Tile (c, r, prev)\n\
      tiles[r].push(tile) //append tile\n\
      if (prev != undefined){\n\
         prev.next = tile\n\
      }\n\
      prev = tile\n\
    }\n\
  }\n\
  console.log("array is built")\n\
  currentTile = tiles[0][0]\n\
  delayedBuild()\n\
}\n\
'
waves ='\
// Waves -- wave interference patterns\n\
\n\
//draw the radials\n\
_విధానము_     drawRadials(side) {\n\
	for (_సర్వత్ర_   i=0; i<16; i++) {\n\
		స్థానము_మార్చు(0,0)\n\
		కోణము(i/16 * 360)\n\
		ముందుకు_జరుగు( size)\n\
	}\n\
}\n\
\n\
/*\n\
need to calculate the angles for starting and stopping the arcs.\n\
distances are known. This math is a bit tough.\n\
\n\
*/\n\
\n\
\n\
//\n\
_విధానము_     ప్రదర్శన() {\n\
	ఆది_స్థితి()\n\
	 చుట్టొద్దు()\n\
	కుంచికను_దాచు()\n\
	size=200\n\
	step = 4\n\
	n = 2* size/step\n\
	స్థానము_మార్చు(0,0)\n\
	వృత్తము( size)\n\
	స్థానము_మార్చు(size,0)\n\
	for( _సర్వత్ర_   i=0; i< n; i=i+step){\n\
		చాపము(i * step, 180, false)\n\
	}\n\
	స్థానము_మార్చు(-size,0)\n\
	for( _సర్వత్ర_   i=0; i< n; i=i+step){\n\
		చాపము(i * step, 180, true)\n\
	}\n\
}\n\
'
ఇష్టికా_ప్రస్తారము ='\
// ఇష్టికా ప్రస్తారము \n\
\n\
_సర్వదా_    ఎత్తు = 15\n\
_సర్వదా_    వెడల్పు = 2* ఎత్తు \n\
\n\
// ఇష్టికా == ఇటుక \n\
\n\
ఇష్టికా = ( ఎత్తు, వెడల్పు, ఇష్టిక_రంగు) => {\n\
  ఆకారము_ప్రారంభించు()\n\
  ఆవర్తించు (2, () => {\n\
    ముందుకు_జరుగు( వెడల్పు)\n\
    కుడి_వైపు_తిరుగు(90)\n\
    ముందుకు_జరుగు( ఎత్తు)\n\
    కుడి_వైపు_తిరుగు(90)\n\
  })\n\
  ఆకారము_ముగించు( ఇష్టిక_రంగు)\n\
  ముందుకు_జరుగు( వెడల్పు)\n\
}\n\
\n\
ప్రదర్శన = () => {\n\
  ఆది_స్థితి()\n\
 \n\
  yB = గరిష్ఠY()\n\
  xB = కనిష్ఠX()\n\
   చుట్టొద్దు()\n\
  కుడి_వైపు_తిరుగు( 90)\n\
  రంగు_మార్చు( తెలుపు )\n\
\n\
  యావత్_పరిక్రమ( () => కుంచిక.స్థానము.y > కనిష్ఠY(), () => {\n\
    స్థానము_మార్చు(xB, yB)\n\
    యావత్_పరిక్రమ( () => కుంచిక.స్థానము.x < గరిష్ఠX(), () => {\n\
      కుంచికను_కింద_పెట్టు()\n\
      ఇష్టికా(ఎత్తు, వెడల్పు, "darkred")\n\
      కుంచికను_పైకి_ఎత్తు()\n\
    } )\n\
    yB = yB - ఎత్తు\n\
\n\
    స్థానము_మార్చు(xB - వెడల్పు/2, yB)\n\
    యావత్_పరిక్రమ( () => కుంచిక.స్థానము.x < గరిష్ఠX(), () => {\n\
      కుంచికను_కింద_పెట్టు()\n\
      ఇష్టికా(ఎత్తు, వెడల్పు, "darkred")\n\
      కుంచికను_పైకి_ఎత్తు()\n\
    } )\n\
    yB = yB - ఎత్తు\n\
  } )\n\
}\n\
'
చేప ='\
\n\
వర్గమూలము = Math.sqrt\n\
\n\
ప్రదర్శన = () => {\n\
  _సర్వదా_ సవ్య = అవును;\n\
  _సర్వదా_ అపసవ్య = !సవ్య;\n\
\n\
  కుంచికను_దాచు();\n\
\n\
చేప = ( వ ) => {\n\
  వృత్తము( వ )\n\
  కుడి_వైపు_తిరుగు( 90 );\n\
\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  ముందుకు_జరుగు( వ );\n\
  కుంచికను_కింద_పెట్టు()\n\
\n\
  కుంచికను_చూపు();\n\
\n\
\n\
  ఎడమ_వైపు_తిరుగు( 45 );\n\
  ముందుకు_జరుగు( 2 * వ );\n\
  కుడి_వైపు_తిరుగు(90+45)\n\
\n\
  ముందుకు_జరుగు( వర్గమూలము( 2 * వ * 2 * వ * 2 ) );\n\
\n\
  కుడి_వైపు_తిరుగు(90+45)\n\
  ముందుకు_జరుగు( 2 * వ );\n\
  ఎడమ_వైపు_తిరుగు( 45 );\n\
\n\
  // కుంచికను_దాచు();\n\
\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  ముందుకు_జరుగు( వ );\n\
  కుంచికను_కింద_పెట్టు()\n\
\n\
  కుడి_వైపు_తిరుగు( 90 );\n\
}\n\
\n\
రంగు_చేప = (రంగు_సంఖ్య) =>  {\n\
  రంగు_మార్చు(రంగు_సంఖ్య)\n\
 చేప( 40 + ( రంగు_సంఖ్య * 1 ) )\n\
} \n\
లెక్క_పెడుతూ_ఆవర్తించు( 16 , (క) => రంగు_చేప( క ) )\n\
\n\
}\n\
'
