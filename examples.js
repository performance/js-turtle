square ='\
/* Define helper functions here\n\
or write your own functions\n\
including a demo() function\n\
For example:    */\n\
\n\
\n\
function square(side) {\n\
    let i = 0;\n\
    repeat(4, () => {\n\
        forward(side)\n\
        turn_right(90)\n\
    });\n\
}\n\
\n\
function demo() {\n\
    reset();\n\
    hideTurtle();\n\
    setColor("blue");\n\
    let side = 100;\n\
    let color_number = 0;\n\
    while (side > 0) {\n\
        square(side);\n\
        turn_right(36);\n\
        side = side - 10;\n\
        color_number = (color_number + 1) % 16;\n\
        changeColor(color_number);\n\
    }\n\
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
ಚತುರ್ಭುಜ ='\
/* ఇಲ್ಲಿ ನಿಮ್ಮ ಪ್ರಕ್ರಿಯೆಗಳು ಬರೆಬಹುದು. ಉದಾಹರಣಕ್ಕೆ:    */\n\
\n\
ಸಮ_ಚತುರ್ಭುಜ = ( ಭುಜ ) => {\n\
  ಆವರ್ತಿಸಿ(4, () => {\n\
    ಮುಂದೆ_ಹೋಗಿ( ಭುಜ );\n\
    ಬಲಕ್ಕೆ_ತಿರುಗಿ( 90 );\n\
  });\n\
}\n\
\n\
ಪ್ರದರ್ಶನೆ = () => {\n\
  ಕುಂಚಿಕವನ್ನು_ಮರೆಮಾಡಿ();\n\
  ವರ್ಣ_ಸ್ಥಾಪಿಸಿ( 1 );\n\
  _ಆತ್ರ_ ಭುಜ = 100;\n\
  _ಆತ್ರ_ ವರ್ಣ_ಸಂಖ್ಯೆ = 0;\n\
  ಯಾವತ್_ಪರಿಕ್ರಮ( () => ಭುಜ > 0, () => {\n\
    ಸಮ_ಚತುರ್ಭುಜ( ಭುಜ );\n\
    ಬಲಕ್ಕೆ_ತಿರುಗಿ( 10 );\n\
    ಭುಜ = ಭುಜ - 5;\n\
    ವರ್ಣ_ಸಂಖ್ಯೆ = ( ವರ್ಣ_ಸಂಖ್ಯೆ + 1 ) %  16\n\
    ವರ್ಣ_ಬದಿಲಿಸಿ (ವರ್ಣ_ಸಂಖ್ಯೆ );\n\
  } );\n\
}\n\
'
चतुर्भुजः ='\
/* ఇక్కడ మీ ప్రక్రియ లు వ్రాయ గలరు. ఉదాహరణ కి:    */\n\
\n\
सम_चतुरस्रः = ( भुजः ) => {\n\
  आवर्तय(4, () => {\n\
    अग्रे_गच्छतु( भुजः );\n\
    दक्षिणं_वर्तस्व(90);\n\
  });\n\
}\n\
\n\
प्रदर्शन = () => {\n\
  कुंचिकं_गोपय();\n\
  वर्णं_स्थापय( 0 );\n\
  _अत्र_ भुजः = 100;\n\
  _अत्र_ वर्ण_संख्य = 0;\n\
  यावत्_परिक्रम( () => भुजः > 0, ()=> {\n\
    सम_चतुरस्रः( भुजः );\n\
    दक्षिणं_वर्तस्व(36);\n\
    भुजः = भुजः - 10;\n\
    वर्ण_संख्य = ( वर्ण_संख्य + 1 ) % 16;\n\
    वर्णं_परिवर्तय( वर्ण_संख्य );\n\
  } );\n\
}\n\
'
అండాకారము ='\
// మూలము: https://pythonturtle.academy/tutorial-drawing-egg-shape-with-python-turtle/\n\
\n\
అండాకారము = (x, y, పరిమాణము, వాలు) => {\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  స్థానము_మార్చు(x,y)\n\
  కుంచికను_కింద_పెట్టు()\n\
  దిశ_మార్చు(270+వాలు)\n\
  రంగు_మార్చు(ఎరుపు)\n\
  కుడివైపు_చాపాము(పరిమాణము,180)\n\
  రంగు_మార్చు(నీలము)\n\
  కుడివైపు_చాపాము(2*పరిమాణము,45)\n\
  రంగు_మార్చు("ఆకుపచ్చ")\n\
  కుడివైపు_చాపాము(0.586*పరిమాణము,90)\n\
  రంగు_మార్చు(నీలము)\n\
  కుడివైపు_చాపాము(2*పరిమాణము,45)\n\
}\n\
\n\
ప్రదర్శన = () => {\n\
  కుంచికను_దాచు();\n\
  అండాకారము( 90, 90, 40, 0 )\n\
  అండాకారము( 0, 0, 90, 45 )\n\
}\n\
'
చతుర్భుజము ='\
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
  _అత్ర_ భుజము = 100;\n\
  _అత్ర_ రంగు_సంఖ్య = 0;\n\
  యావత్_పరిక్రమ( () => భుజము > 0, ()=> {\n\
    సమ_చతురస్రము( భుజము );\n\
    కుడి_వైపు_తిరుగు(36);\n\
    భుజము = భుజము - 10;\n\
    రంగు_సంఖ్య = ( రంగు_సంఖ్య + 1 ) % 16;\n\
    రంగు_మార్చు( రంగు_సంఖ్య );\n\
  } );\n\
}\n\
'
