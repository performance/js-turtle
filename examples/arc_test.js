// Arc and Curve Test -- test of arcs and curves
// this draws five figures

radialArc = (x, y, startRadius, armAngle, tangentAngle, arcRadius, extent, సవ్యము) => {
  స్థానము_మార్చు(x,y);
  కలమును_పైకి_ఎత్తు();
  కోణము(armAngle);
  ముందుకు_జరుగు(startRadius);
  కుడి_వైపు_తిరుగు(tangentAngle);
  కలమును_కింద_పెట్టు();
  వృత్తము(arcRadius,extent, సవ్యము);
}


పళ్ళచక్రం = (x,y, వ్యాసార్థము, pedals, సవ్యము) => {

  లెక్క_పెడుతూ_ఆవర్తించు( pedals, (i) => {
    if (సవ్యము) {
      radialArc (x,y, వ్యాసార్థము, 360*i/pedals, -135, 10, 90, సవ్యము);
    } else {
      radialArc (x,y, వ్యాసార్థము, 360*i/pedals, 45, 10, 90, !సవ్యము);
    }
  });
}

roundedOctogon = (side, వ్యాసార్థము) => {
  ఆవర్తించు((8),  ()=> {
    ముందుకు_జరుగు(side);
    కుడివైపు_చాపాము(వ్యాసార్థము,45);
  })
}


roundedOctogonL = (side, వ్యాసార్థము) => {
  ఆవర్తించు((8),  ()=> {
    ముందుకు_జరుగు(side);
    ఎడమవైపు_చాపాము(వ్యాసార్థము,45);
  })
}


circleEyeR = (అ, ని, న, outerRadius) => {
  స్థానము_మార్చు(అ, ని);
  వృత్తము(outerRadius); //outer circle

  లెక్క_పెడుతూ_ఆవర్తించు ( న, ( చ ) => {
    స్థానము_మార్చు(అ, ని);
    కోణము (చ/న * 360);
    కలమును_పైకి_ఎత్తు();
    ముందుకు_జరుగు(outerRadius);
    కుడి_వైపు_తిరుగు(90)
    కలమును_కింద_పెట్టు();
    వ్రాయి(చ)
    కుడివైపు_చాపాము(outerRadius/2) // one inscribed circle
  } )
}

circleEyeL = (అ, ని, న, outerRadius) => {
  స్థానము_మార్చు(అ, ని);
  వృత్తము(outerRadius); //outer circle

  లెక్క_పెడుతూ_ఆవర్తించు ( న, ( చ ) => {
    స్థానము_మార్చు(అ, ని);
    కోణము (చ/న * 360);
    కలమును_పైకి_ఎత్తు();
    ముందుకు_జరుగు(outerRadius);
    కలమును_కింద_పెట్టు();
    ఎడమ_వైపు_తిరుగు(90)
    వ్రాయి(చ)
    ఎడమవైపు_చాపాము(outerRadius/2); // one inscribed circle
  } )
}


ప్రదర్శన = () => {
  const సవ్య = అవును;
  const అపసవ్య = !సవ్య;
  const పొడవు = 2 * Math.min(గరిష్ఠX(), గరిష్ఠY())
  const గది_పొడవు = పొడవు/3

  //divide area into 6 cells: 2 vertical, 3 horizontal
  // centers are:
  ని౧ = +1/4 * పొడవు
  ని౨ = -1/4 * పొడవు
  అ౧ = -2/6 * పొడవు
  అ౨ = 0
  అ౩ = +2/6 * పొడవు

  ఆది_స్థితి();
  కుంచికను_దాచు();

  tSize = గది_పొడవు/2 * .90
  పళ్ళచక్రం (అ౧, ని౧, 10/55*tSize, 8, సవ్య);
  పళ్ళచక్రం (అ౧, ని౧, 25/55*tSize, 16, అపసవ్య);
  పళ్ళచక్రం (అ౧, ని౧, 40/55*tSize, 32, సవ్య);
  పళ్ళచక్రం (అ౧, ని౧, 55/55*tSize, 64, అపసవ్య);


  tSize = గది_పొడవు/2 * .90
  లెక్క_పెడుతూ_ఆవర్తించు (8, (i) => {
//radialArc (x, y, startRadius, armAngle, tangentAngle, arcRadius, extent, dir)
    radialArc (అ౨, ని౧, 10/60*tSize, 360*i/8, -45, 10/60*tSize, 180, సవ్య); // inner shell
    radialArc (అ౨, ని౧, 40/60*tSize, 360*i/8, -125, 15/60*tSize, 110, అపసవ్య); //inside arc
    radialArc (అ౨, ని౧, 40/60*tSize, 360*i/8, -85, 18/60*tSize, 170, సవ్య); //outside arcs
    radialArc (అ౨, ని౧, 41/60*tSize, 360*i/8, 0, 10/60*tSize, 360, సవ్య); // radial circles
  })
  

  స్థానము_మార్చు(అ౨, ని౧);
  వృత్తము(60/60 * tSize);

  స్థానము_మార్చు( అ౧, ని౨)
  కోణము(0)
  oRadius = గది_పొడవు/2 * .9
  cRadius = .3 * oRadius
  curveLoss = cRadius * Math.tan( degToRad( 22.5))
  side = 2 * oRadius * Math.sin( degToRad(22.5)) -  2* curveLoss
  height = oRadius * Math.cos( degToRad( 22.5))
  కలమును_పైకి_ఎత్తు()
  ముందుకు_జరుగు(height)
  కలమును_కింద_పెట్టు()
  కుడి_వైపు_తిరుగు(90)
  వెనుకకు_జరుగు(side/2)
  roundedOctogon( side, cRadius)

  స్థానము_మార్చు( అ౧, ని౨)
  కోణము(0)
  oRadius = గది_పొడవు/2 * .8
  cRadius = .3 * oRadius
  curveLoss = cRadius * Math.tan( degToRad( 22.5))
  side = 2 * oRadius * Math.sin( degToRad(22.5)) -  2* curveLoss
  height = oRadius * Math.cos( degToRad( 22.5))
  కలమును_పైకి_ఎత్తు()
  ముందుకు_జరుగు(height)
  కలమును_కింద_పెట్టు()
  కుడి_వైపు_తిరుగు(90)
  వెనుకకు_జరుగు(side/2)
  roundedOctogon( side, cRadius)

  స్థానము_మార్చు( అ౧, ని౨)
  కోణము(22.5)
  oRadius = గది_పొడవు/2 * .7
  cRadius = .3 * oRadius
  curveLoss = cRadius * Math.tan( degToRad( 22.5))
  side = 2 * oRadius * Math.sin( degToRad(22.5)) -  2* curveLoss
  height = oRadius * Math.cos( degToRad( 22.5))
  కలమును_పైకి_ఎత్తు()
  ముందుకు_జరుగు(height)
  కలమును_కింద_పెట్టు()
  కుడి_వైపు_తిరుగు(90)
  వెనుకకు_జరుగు(side/2)
  roundedOctogon( side, cRadius)

  స్థానము_మార్చు( అ౧, ని౨)
  కోణము(22.5)
  oRadius = గది_పొడవు/2 * .6
  cRadius = .3 * oRadius
  curveLoss = cRadius * Math.tan( degToRad( 22.5))
  side = 2 * oRadius * Math.sin( degToRad(22.5)) -  2* curveLoss
  height = oRadius * Math.cos( degToRad( 22.5))
  కలమును_పైకి_ఎత్తు()
  ముందుకు_జరుగు(height)
  కలమును_కింద_పెట్టు()
  కుడి_వైపు_తిరుగు(90)
  వెనుకకు_జరుగు(side/2)
  roundedOctogon( side, cRadius)

  circleEyeR( అ౨, ని౨, 16, గది_పొడవు/2 * .8);
  circleEyeL( అ౩, ని౨, 16, గది_పొడవు/2 * .8);
}
