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
달걀 ='\
// 원천: https://pythonturtle.academy/tutorial-drawing-egg-shape-with-python-turtle/\n\
\n\
달걀 = (x, y, 크기, 경사) => {\n\
  솔질하다()\n\
  위치_변경(x,y)\n\
  브러시를_사용()\n\
  방향전환(270+경사)\n\
  색상을설정(4) // 빨간색\n\
  시계방향(크기,180)\n\
  색상을설정(1) // 파란색\n\
  시계방향(2*크기,45)\n\
  색상을설정(10) // 녹색\n\
  시계방향(0.586*크기,90)\n\
  색상을설정(1 ) // 파란색\n\
  시계방향(2*크기,45)\n\
}\n\
\n\
_절차_     데모() {\n\
  초기상태();\n\
  브러시_숨기기();\n\
  달걀( 90, 90, 40, 0 )\n\
  달걀( 0, 0, 90, 45 )\n\
}\n\
'
చేప ='\
\n\
వర్గమూలము = Math.sqrt\n\
\n\
ప్రదర్శన = () => {\n\
\n\
  _సర్వదా_ సవ్య = అవును;\n\
  _సర్వదా_ అపసవ్య = !సవ్య;\n\
\n\
  ఆది_స్థితి();\n\
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
벽돌벽 ='\
// 벽돌 벽\n\
\n\
_항상_    높이 = 15\n\
_항상_    너비 = 2* 높이 \n\
\n\
\n\
벽돌 = ( 높이, 너비, 벽돌색) => {\n\
  모양을_시작()\n\
  반복하다 (2, () => {\n\
    나아가다( 너비)\n\
    우회전(90)\n\
    나아가다( 높이)\n\
    우회전(90)\n\
  })\n\
  모양을_완성하다( 벽돌색)\n\
  나아가다( 너비)\n\
}\n\
\n\
_절차_     데모() {\n\
  초기상태()\n\
 \n\
  yB = 최고_Y()\n\
  xB = 최소한도_X()\n\
   포장하지_마십시오()\n\
  우회전( 90)\n\
  색상을설정( 7 ) // 하얀색\n\
\n\
  동안반복( () => 현재_위치().y > 최소한도_Y(), () => {\n\
    위치_변경(xB, yB)\n\
    동안반복( () => 현재_위치().x < 최고_X(), () => {\n\
      브러시를_사용()\n\
      벽돌(높이, 너비, "darkred")\n\
      솔질하다()\n\
    } )\n\
    yB = yB - 높이\n\
\n\
    위치_변경(xB - 너비/2, yB)\n\
    동안반복( () => 현재_위치().x < 최고_X(), () => {\n\
      브러시를_사용()\n\
      벽돌(높이, 너비, "darkred")\n\
      솔질하다()\n\
    } )\n\
    yB = yB - 높이\n\
  } )\n\
}\n\
'
벽시계 ='\
// 벽 시계\n\
\n\
_어디에나_   크기;\n\
\n\
// 시계에 초 단위 표시기를 그리려면\n\
_절차_     초표시(x, y, 요골) {\n\
   _여기_   선_길이 = 7;\n\
   _여기_   공백 = 요골 - 선_길이;\n\
   색상을설정(1) // 파란색\n\
   너비(1);\n\
   계산하는동안반복( 60, ( 고 ) => {\n\
      _여기_ 세타 = 고 * 6;\n\
      // 다섯 번째 줄마다 두껍게 해야 합니다.\n\
      너비( ( ( 고 % 5 ) ? 1 : 3)/130* 크기)\n\
      솔질하다();\n\
      위치_변경(0,0);\n\
      각도(세타);\n\
      나아가다(공백);\n\
      브러시를_사용();\n\
      나아가다(선_길이);\n\
   });\n\
   \n\
}\n\
\n\
\n\
// 시와 분 숫자\n\
_절차_     숫자(x, y, 요골) {\n\
   솔질하다();\n\
   _여기_  글자_크기 = 20/130 * 크기\n\
   편지얼굴(글자_크기+"px sans-serif");\n\
   색상을설정(0); // 검은색\n\
   계산하는동안반복( 12, ( 시간 ) =>{\n\
      위치_변경(x,y);\n\
      각도(시간 * 30);\n\
      나아가다(요골); // to center of digit\n\
      각도(180);\n\
      나아가다(10/130 * 크기); // vertical correction to baseline\n\
      우회전(90);\n\
      // 왼쪽 하단 모서리에 대한 수평 보정\n\
      나아가다( ( (시간 < 10 ) ? 6 : 10 )/130 * 크기)\n\
      // if (시간 < 10) {\n\
      //   나아가다(6/130 * 크기); // 왼쪽 하단 모서리에 대한 수평 보정\n\
      // } else {\n\
      //   나아가다(10/130 * 크기)\n\
      // }\n\
      우회전(180);\n\
      쓰다(시간);\n\
   })\n\
   브러시를_사용();\n\
}\n\
\n\
// 지표를 그리기 위해\n\
_절차_     침 (세타, 침_너비, 길이, 색상) {\n\
   _여기_   감소_상수 = 5;\n\
   _여기_   포인터_감소 = (길이 / 감소_상수);\n\
   _여기_   폭_조정 =  침_너비 / 포인터_감소;\n\
   위치_변경(0, 0);\n\
   각도(세타);\n\
   색상을설정(색상);\n\
   \n\
   계산하는동안반복( 포인터_감소, ( ) => \n\
   {\n\
      너비( 침_너비 ); // 붓 너비\n\
      나아가다(감소_상수);\n\
      침_너비 =  침_너비  - 폭_조정;\n\
   }\n\
   );\n\
}\n\
\n\
_절차_     지표(시간, 분, 초) {\n\
    // 초침\n\
    _여기_   초당도 = 6;	// = 360 degrees/60 초\n\
    침(초 * 초당도, 4, 100/130 * 크기, "red");\n\
    // 분침\n\
    _여기_   분당도 = 0.1;	// = 360 degrees /3600 초 /시간\n\
    _여기_   분에초 = 분 * 60 + 초;\n\
    침(분에초 * 분당도, 10, 100/130 * 크기, "blue");\n\
    // 시침\n\
    _여기_   시간당도 = .1/12;	// = 분당도 / 12 시간 \n\
    _여기_   시간에초 = ((시간 % 12) * 3600) + 분에초;\n\
    침(시간에초 * 시간당도, 10, 60/130 * 크기, "green");\n\
}\n\
\n\
// 시계 새로 고침\n\
_절차_     시계() {\n\
   초기화();\n\
   크기 = .9 *  Math.min( 최고_X(), 최고_Y())\n\
   숫자(0, 0, 110/130 * 크기);\n\
   색상을설정("lightgreen");\n\
   위치_변경(0,0);\n\
   너비(1/130* 크기)\n\
   원(130/130 * 크기 );\n\
   초표시(0, 0, 130/130 * 크기 );\n\
   _여기_  현재시간 = new Date();\n\
   지표(현재시간.getHours(), 현재시간.getMinutes(), 현재시간.getSeconds());\n\
}\n\
\n\
_절차_     데모() {\n\
   초기상태();\n\
   브러시_숨기기();\n\
   생명있는(시계,1000); // 매초마다 시계 새로 고침\n\
}\n\
'
스퀘어 ='\
/* 여기에서 절차를 작성할 수 있습니다. 예를 들어:   */\n\
\n\
스퀘어 = ( 옆 ) => {\n\
  반복하다(4, () => {\n\
    나아가다( 옆 );\n\
    우회전(90);\n\
  });\n\
}\n\
\n\
_절차_     데모() {\n\
  초기상태();\n\
  브러시_숨기기();\n\
  색상을설정(1) // 파란색\n\
  _여기_ 옆 = 100;\n\
  _여기_ 색상_번호 = 0;\n\
  동안반복( () => 옆 > 0, ()=> {\n\
    스퀘어( 옆 );\n\
    우회전(36);\n\
    옆 = 옆 - 10;\n\
    색상_번호 = ( 색상_번호 + 1 ) % 16;\n\
    색상을설정( 색상_번호 );\n\
  } );\n\
}\n\
'
춤추는_눈송이 ='\
// 눈송이\n\
// 코흐 == koch\n\
최저한의 = Math.min\n\
\n\
_절차_     코흐_선 (길이, 깊은) {\n\
  면_그럼_또다른( () => (깊은 == 0),\n\
   () => {    나아가다(길이);  },\n\
   () => {\n\
    //  왼쪽 범프\n\
    코흐_선 (길이/3, 깊은-1);\n\
    왼쪽으로돌아(60); \n\
    코흐_선 (길이/3, 깊은-1);\n\
    우회전(120); \n\
    코흐_선 (길이/3, 깊은-1);\n\
    왼쪽으로돌아(60); \n\
    코흐_선 (길이/3, 깊은-1);\n\
  } )\n\
}\n\
\n\
\n\
_절차_     코흐_눈송이 (길이, 깊은) {\n\
  각도 (30);\n\
  위치_변경(-길이/2,-.3 * 길이);\n\
  코흐_선 (길이, 깊은);\n\
  우회전(120);\n\
  코흐_선 (길이, 깊은);\n\
  우회전(120);\n\
  코흐_선 (길이, 깊은);\n\
  우회전(120);\n\
}\n\
  \n\
많은_눈_조각 = ()=> {\n\
  눈송이_색상_선택.push(난수(15) );\n\
  눈송이_색상_선택.shift();\n\
  계산하는동안반복 (6, ( 카 ) => {\n\
    색상을설정( 눈송이_색상_선택 [카] );\n\
    코흐_눈송이( 길이 * (카+1) * (카+1), 카)\n\
  } );\n\
}\n\
\n\
_절차_     데모() {\n\
  초기상태();\n\
  길이 = .045* 최저한의(최고_X(), 최고_Y())\n\
  눈송이_색상_선택 = [];\n\
  계산하는동안반복 (6, ( 카 ) => {\n\
    눈송이_색상_선택[카] = 난수(6);\n\
  } );\n\
\n\
  브러시_숨기기();\n\
  생명있는(많은_눈_조각,1)\n\
}\n\
'
рыба ='\
\n\
వర్గమూలము = Math.sqrt\n\
\n\
паказаць = () => {\n\
\n\
  _назаўжды_ సవ్య = так;\n\
  _назаўжды_ అపసవ్య = !సవ్య;\n\
\n\
  пачатковы_стан();\n\
  схавайце_пэндзаль();\n\
\n\
చేప = ( వ ) => {\n\
  круг( వ )\n\
  павярнуць_направа( 90 );\n\
\n\
  падніміце_пэндзаль()\n\
  ісці_наперад( వ );\n\
  пакладзеце_пэндзаль()\n\
\n\
  выявіць_пэндзаль();\n\
\n\
\n\
  павярнуць_налева( 45 );\n\
  ісці_наперад( 2 * వ );\n\
  павярнуць_направа(90+45)\n\
\n\
  ісці_наперад( వర్గమూలము( 2 * వ * 2 * వ * 2 ) );\n\
\n\
  павярнуць_направа(90+45)\n\
  ісці_наперад( 2 * వ );\n\
  павярнуць_налева( 45 );\n\
\n\
  // схавайце_пэндзаль();\n\
\n\
  падніміце_пэндзаль()\n\
  ісці_наперад( వ );\n\
  пакладзеце_пэндзаль()\n\
\n\
  павярнуць_направа( 90 );\n\
}\n\
\n\
రంగు_చేప = (колер_нумар) =>  {\n\
  змяніць_колер_на(колер_нумар)\n\
 చేప( 40 + ( колер_нумар * 1 ) )\n\
} \n\
паўтарыць_лічачы( 16 , (క) => రంగు_చేప( క ) )\n\
\n\
}\n\
'
яйка ='\
// మూలము: https://pythonturtle.academy/tutorial-drawing-egg-shape-with-python-turtle/\n\
\n\
яйка = (x, y, памер, схіл) => {\n\
  падніміце_пэндзаль()\n\
  змяніць_становішча(x,y)\n\
  пакладзеце_пэндзаль()\n\
  змінниць_кіруна(270+схіл)\n\
  змяніць_колер_на(ఎరుపు)\n\
  дуга_направа(памер,180)\n\
  змяніць_колер_на(1)\n\
  дуга_направа(2*памер,45)\n\
  змяніць_колер_на("ఆకుపచ్చ")\n\
  дуга_направа(0.586*памер,90)\n\
  змяніць_колер_на(1)\n\
  дуга_направа(2*памер,45)\n\
}\n\
\n\
паказаць = () => {\n\
  пачатковы_стан();\n\
  схавайце_пэндзаль();\n\
  яйка( 90, 90, 40, 0 )\n\
  яйка( 0, 0, 90, 45 )\n\
}\n\
'
다채로운_생선 ='\
// 다채로운_생선 colorful fish\n\
제곱근 = Math.sqrt\n\
\n\
_절차_     데모() {\n\
\n\
  초기상태();\n\
  브러시_숨기기();\n\
\n\
생선 = ( 카 ) => {\n\
  원( 카 )\n\
  우회전( 90 );\n\
\n\
  솔질하다()\n\
  나아가다( 카 );\n\
  브러시를_사용()\n\
\n\
  브러시를_보여();\n\
\n\
\n\
  왼쪽으로돌아( 45 );\n\
  나아가다( 2 * 카 );\n\
  우회전(90+45)\n\
\n\
  나아가다( 제곱근( 2 * 카 * 2 * 카 * 2 ) );\n\
\n\
  우회전(90+45)\n\
  나아가다( 2 * 카 );\n\
  왼쪽으로돌아( 45 );\n\
\n\
  // 브러시_숨기기();\n\
\n\
  솔질하다()\n\
  나아가다( 카 );\n\
  브러시를_사용()\n\
\n\
  우회전( 90 );\n\
}\n\
\n\
다채로운_생선 = (색상_번호) =>  {\n\
  색상을설정(색상_번호)\n\
 생선( 40 + ( 색상_번호 * 1 ) )\n\
} \n\
계산하는동안반복( 16 , (카) => 다채로운_생선( 카 ) )\n\
\n\
}\n\
'
ಮತ್ಸ್ಯ ='\
\n\
\n\
ವರ್ಗಮೂಲ = Math.sqrt\n\
\n\
ಪ್ರದರ್ಶನೆ = () => {\n\
  ಆದಿ_ಸ್ಥಿತಿ();\n\
  కుంచికను_దాచు();\n\
\n\
ಮತ್ಸ್ಯ = ( ವ ) => {\n\
  వృత్తము( ವ )\n\
  కుడి_వైపు_తిరుగు( 90 );\n\
\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  ముందుకు_జరుగు( ವ );\n\
  కుంచికను_కింద_పెట్టు()\n\
\n\
  కుంచికను_చూపు();\n\
\n\
\n\
  ఎడమ_వైపు_తిరుగు( 45 );\n\
  ముందుకు_జరుగు( 2 * ವ );\n\
  కుడి_వైపు_తిరుగు(90+45)\n\
\n\
  ముందుకు_జరుగు( ವರ್ಗಮೂಲ( 2 * ವ * 2 * ವ * 2 ) );\n\
\n\
  కుడి_వైపు_తిరుగు(90+45)\n\
  ముందుకు_జరుగు( 2 * ವ );\n\
  ఎడమ_వైపు_తిరుగు( 45 );\n\
\n\
  // కుంచికను_దాచు();\n\
\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  ముందుకు_జరుగు( ವ );\n\
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
цагляны ='\
// цагляны ప్రస్తారము \n\
\n\
_назаўжды_    вышыня = 15\n\
_назаўжды_    усталяваць_шырыню = 2* вышыня \n\
\n\
// цагляны == ఇటుక \n\
\n\
цагляны = ( вышыня, усталяваць_шырыню, цагляны_колер) => {\n\
  пачніце_маляваць_форму()\n\
  паўтараць (2, () => {\n\
    ісці_наперад( усталяваць_шырыню)\n\
    павярнуць_направа(90)\n\
    ісці_наперад( вышыня)\n\
    павярнуць_направа(90)\n\
  })\n\
  спыніць_маляваць_форму( цагляны_колер)\n\
  ісці_наперад( усталяваць_шырыню)\n\
}\n\
\n\
паказаць = () => {\n\
  пачатковы_стан()\n\
 \n\
  yB = максімум_Y()\n\
  xB = мінімум_X()\n\
   Не_абмотваць()\n\
  павярнуць_направа( 90)\n\
  змяніць_колер_на( తెలుపు )\n\
\n\
  Паўтараць_пакуль( () => కుంచిక.స్థానము.y > мінімум_Y(), () => {\n\
    змяніць_становішча(xB, yB)\n\
    Паўтараць_пакуль( () => కుంచిక.స్థానము.x < максімум_X(), () => {\n\
      пакладзеце_пэндзаль()\n\
      цагляны(вышыня, усталяваць_шырыню, "darkred")\n\
      падніміце_пэндзаль()\n\
    } )\n\
    yB = yB - вышыня\n\
\n\
    змяніць_становішча(xB - усталяваць_шырыню/2, yB)\n\
    Паўтараць_пакуль( () => కుంచిక.స్థానము.x < максімум_X(), () => {\n\
      пакладзеце_пэндзаль()\n\
      цагляны(вышыня, усталяваць_шырыню, "darkred")\n\
      падніміце_пэндзаль()\n\
    } )\n\
    yB = yB - вышыня\n\
  } )\n\
}\n\
'
ಅಂಡಾಕಾರ ='\
// ಮೂಲ: https://pythonturtle.academy/tutorial-drawing-egg-shape-with-python-turtle/\n\
\n\
ಅಂಡಾಕಾರ = (x, y, ಪರಿಮಾಣ, ಇಳಿಜಾರು) => {\n\
  ಕುಂಚಿಕವನ್ನು_ಎತ್ತಿ()\n\
  ಸ್ಥಾನ_ಬದಿಲಿಸಿ(x,y)\n\
  ಕುಂಚಿಕವನ್ನು_ಕೆಳಗೆ_ಇರಿಸಿ()\n\
  ದಿಕ್ಕನ್ನು_ಬದಲಿಸಿ(270+ಇಳಿಜಾರು)\n\
  ವರ್ಣ_ಬದಲಿಸಿ(4) // red\n\
  ಬಲಕ್ಕೆ_ಚಾಪ(ಪರಿಮಾಣ,180)\n\
  ವರ್ಣ_ಬದಲಿಸಿ(1) // blue\n\
  ಬಲಕ್ಕೆ_ಚಾಪ(2*ಪರಿಮಾಣ,45)\n\
  ವರ್ಣ_ಬದಲಿಸಿ(10) // green\n\
  ಬಲಕ್ಕೆ_ಚಾಪ(0.586*ಪರಿಮಾಣ,90)\n\
  ವರ್ಣ_ಬದಲಿಸಿ(1) // blue\n\
  ಬಲಕ್ಕೆ_ಚಾಪ(2*ಪರಿಮಾಣ,45)\n\
}\n\
\n\
ಪ್ರದರ್ಶನೆ = () => {\n\
  ಆದಿ_ಸ್ಥಿತಿ();\n\
  ಕುಂಚಿಕವನ್ನು_ಮರೆಮಾಡಿ();\n\
  ಅಂಡಾಕಾರ( 90, 90, 40, 0 )\n\
  ಅಂಡಾಕಾರ( 0, 0, 90, 45 )\n\
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
сняжынкі ='\
\n\
// сняжынкі\n\
Мінімальны_кошт = Math.min\n\
\n\
_працэдура_     кох_лайн (даўжыня, колькасць_слаёў) {\n\
  Калі_тады_інакш( () => (колькасць_слаёў == 0),\n\
   () => {    ісці_наперад(даўжыня);  },\n\
   () => {\n\
    // левы бакавы пялёстак\n\
    кох_лайн (даўжыня/3, колькасць_слаёў-1);\n\
    павярнуць_налева(60); \n\
    кох_лайн (даўжыня/3, колькасць_слаёў-1);\n\
    павярнуць_направа(120); \n\
    кох_лайн (даўжыня/3, колькасць_слаёў-1);\n\
    павярнуць_налева(60); \n\
    кох_лайн (даўжыня/3, колькасць_слаёў-1);\n\
  } )\n\
}\n\
\n\
\n\
_працэдура_     Кох_сняжынка (даўжыня, колькасць_слаёў) {\n\
  вугал (30);\n\
  змяніць_становішча(-даўжыня/2,-.3 * даўжыня);\n\
  кох_лайн (даўжыня, колькасць_слаёў);\n\
  павярнуць_направа(120);\n\
  кох_лайн (даўжыня, колькасць_слаёў);\n\
  павярнуць_направа(120);\n\
  кох_лайн (даўжыня, колькасць_слаёў);\n\
  павярнуць_направа(120);\n\
}\n\
  \n\
сняжынкі = ()=> {\n\
  колер_пялёсткаў.push(выпадковы_лік(15) );\n\
  колер_пялёсткаў.shift();\n\
  паўтарыць_лічачы (6, ( క ) => {\n\
    змяніць_колер_на( колер_пялёсткаў [క] );\n\
    Кох_сняжынка( даўжыня * (క+1) * (క+1), క)\n\
  } );\n\
}\n\
\n\
_працэдура_     паказаць() {\n\
  пачатковы_стан();\n\
  даўжыня = .045* Мінімальны_кошт(максімум_X(), максімум_Y())\n\
  колер_пялёсткаў = [];\n\
  паўтарыць_лічачы (6, ( క ) => {\n\
    колер_пялёсткаў[క] = выпадковы_лік(6);\n\
  } );\n\
\n\
  схавайце_пэндзаль();\n\
  гуляць(сняжынкі,1)\n\
}\n\
'
हिमदलानि ='\
\n\
कनिष्ठं_चिनु = Math.min\n\
\n\
_विधानम्_     कोख्_रेखा (दैर्घ्यम्‌, गहनता) {\n\
    यदि_तर्हि_अन्यथा( () => (गहनता == 0),\n\
   () => {    अग्रे_गच्छतु(दैर्घ्यम्‌);  },\n\
   () => {\n\
    // वामपर्वतः \n\
    कोख्_रेखा (दैर्घ्यम्‌/3, गहनता-1);\n\
    वामं_वर्तस्व(60); \n\
    कोख्_रेखा (दैर्घ्यम्‌/3, गहनता-1);\n\
    दक्षिणं_वर्तस्व(120); \n\
    कोख्_रेखा (दैर्घ्यम्‌/3, गहनता-1);\n\
    वामं_वर्तस्व(60); \n\
    कोख्_रेखा (दैर्घ्यम्‌/3, गहनता-1);\n\
  } )\n\
}\n\
\n\
\n\
_विधानम्_     कोख्_हिमदलः (दैर्घ्यम्‌, गहनता) {\n\
  दिशाम्_परिवर्तय (30);\n\
  स्थानम्_परिवर्तय(-दैर्घ्यम्‌/2,-.3 * दैर्घ्यम्‌);\n\
  कोख्_रेखा (दैर्घ्यम्‌, गहनता);\n\
  दक्षिणं_वर्तस्व(120);\n\
  कोख्_रेखा (दैर्घ्यम्‌, गहनता);\n\
  दक्षिणं_वर्तस्व(120);\n\
  कोख्_रेखा (दैर्घ्यम्‌, गहनता);\n\
  दक्षिणं_वर्तस्व(120);\n\
}\n\
\n\
वर्ण_हिमदलानि = ()=> {\n\
  दलवर्णाः.push(यादृच्छिकसङ्ख्या(15) );\n\
  दलवर्णाः.shift();\n\
  गणयन्_आवर्तय (6, ( क ) => {\n\
    वर्णं_परिवर्तय( दलवर्णाः [क] );\n\
    कोख्_हिमदलः( दैर्घ्यम्‌ * (क+1) * (क+1), क)\n\
  } );\n\
}\n\
\n\
_विधानम्_     प्रदर्शन() {\n\
  आदिस्थितिः()\n\
  दैर्घ्यम्‌ = .045* कनिष्ठं_चिनु(गरिष्ठ_X(), गरिष्ठ_Y())\n\
  दलवर्णाः = [];\n\
  गणयन्_आवर्तय (6, ( क ) => {\n\
    दलवर्णाः[क] = यादृच्छिकसङ्ख्या(6);\n\
  } );\n\
\n\
  कुंचिकं_गोपाय();\n\
  चालय(वर्ण_हिमदलानि,1)\n\
}\n\
'
గడియారము ='\
// గోడ గడియారము\n\
\n\
_సర్వత్ర_   కొలత;\n\
\n\
// గడియారము చుట్టూ క్షణముల గీతలు గీయుటకు\n\
_విధానము_     క్షణముల_గీతలు(x, y, వ్యాసార్థము) {\n\
   _అత్ర_   గీత_పొడవు = 7;\n\
   _అత్ర_   ఖాళీ = వ్యాసార్థము - గీత_పొడవు;\n\
   రంగు_మార్చు( నీలము );\n\
   వెడల్పు(1);\n\
   లెక్క_పెడుతూ_ఆవర్తించు( 60, ( కో ) => {\n\
      _అత్ర_ థీటా = కో * 6;\n\
      // ప్రతి  ఐదవది దళసరి గా వేయవలెను\n\
      వెడల్పు( ( ( కో % 5 ) ? 1 : 3)/130* కొలత)\n\
      కుంచికను_పైకి_ఎత్తు();\n\
      స్థానము_మార్చు(0,0);\n\
      కోణము(థీటా);\n\
      ముందుకు_జరుగు(ఖాళీ);\n\
      కుంచికను_కింద_పెట్టు();\n\
      ముందుకు_జరుగు(గీత_పొడవు);\n\
   });\n\
   \n\
}\n\
\n\
\n\
// గంటలు, నిమిషాలూ సూచించే అంకెలు\n\
_విధానము_     అంకెలు(x, y, వ్యాసార్థము) {\n\
   కుంచికను_పైకి_ఎత్తు();\n\
   _అత్ర_  అక్షర_పరిమాణము = 20/130 * కొలత\n\
   అక్షరరూపము_స్థాపించు(అక్షర_పరిమాణము+"px sans-serif");\n\
   రంగు_మార్చు("నలుపు");\n\
   లెక్క_పెడుతూ_ఆవర్తించు( 12, ( గంట ) =>{\n\
      స్థానము_మార్చు(x,y);\n\
      కోణము(గంట * 30);\n\
      ముందుకు_జరుగు(వ్యాసార్థము); // to center of digit\n\
      కోణము(180);\n\
      ముందుకు_జరుగు(10/130 * కొలత); // vertical correction to baseline\n\
      కుడి_వైపు_తిరుగు(90);\n\
      // క్రింది, ఎడమ భాగమునకు అనుప్రస్థ సరదుబాటు\n\
      ముందుకు_జరుగు( ( (గంట < 10 ) ? 6 : 10 )/130 * కొలత)\n\
      // if (గంట < 10) {\n\
      //   ముందుకు_జరుగు(6/130 * కొలత); // horizontal correction to lower left corner\n\
      // } else {\n\
      //   ముందుకు_జరుగు(10/130 * కొలత)\n\
      // }\n\
      కుడి_వైపు_తిరుగు(180);\n\
      వ్రాయి(గంట);\n\
   })\n\
   కుంచికను_కింద_పెట్టు();\n\
}\n\
\n\
// చేతులు గీయుటకు  \n\
_విధానము_     చెయ్యి (థీటా, చెయ్యి_వెడల్పు, పొడవు, రంగు) {\n\
   _అత్ర_   కూచి_తగ్గింపు = 5;\n\
   _అత్ర_   కూచి_తగ్గింపులు = (పొడవు / కూచి_తగ్గింపు);\n\
   _అత్ర_   వెడల్పు_సర్దుబాటు =  చెయ్యి_వెడల్పు / కూచి_తగ్గింపులు;\n\
   స్థానము_మార్చు(0, 0);\n\
   కోణము(థీటా);\n\
   రంగు_మార్చు(రంగు);\n\
   // for (_సర్వత్ర_   step = 0; step < పొడవు; step = step + కూచి_తగ్గింపు) \n\
   లెక్క_పెడుతూ_ఆవర్తించు( కూచి_తగ్గింపులు, ( అడుగు) => \n\
   {\n\
      వెడల్పు( చెయ్యి_వెడల్పు ); // కుంచిక వెడల్పు\n\
      ముందుకు_జరుగు(కూచి_తగ్గింపు);\n\
      చెయ్యి_వెడల్పు =  చెయ్యి_వెడల్పు  - వెడల్పు_సర్దుబాటు;\n\
   }\n\
   );\n\
}\n\
\n\
_విధానము_     చేతులు(గంటలు, నిమిషములు, క్షణములు) {\n\
    // క్షణముల చెయ్యి\n\
    _అత్ర_   క్షణముకెన్ని_డిగ్రీలు = 6;	// = 360 degrees/60 క్షణములు\n\
    చెయ్యి(క్షణములు * క్షణముకెన్ని_డిగ్రీలు, 4, 100/130 * కొలత, "red");\n\
    // నిమిషముల చెయ్యి \n\
    _అత్ర_   నిమిషానికెన్ని_డిగ్రీలు = 0.1;	// = 360 degrees /3600 క్షణములు /గంట\n\
    _అత్ర_   నిమిషములుInక్షణములు = నిమిషములు * 60 + క్షణములు;\n\
    చెయ్యి(నిమిషములుInక్షణములు * నిమిషానికెన్ని_డిగ్రీలు, 10, 100/130 * కొలత, "blue");\n\
    // గంటల చెయ్యి\n\
    _అత్ర_   గంటకెన్ని_డిగ్రీలు = .1/12;	// = నిమిషానికెన్ని_డిగ్రీలు / 12 గంటలు \n\
    _అత్ర_   గంటలుInక్షణములు = ((గంటలు % 12) * 3600) + నిమిషములుInక్షణములు;\n\
    చెయ్యి(గంటలుInక్షణములు * గంటకెన్ని_డిగ్రీలు, 10, 60/130 * కొలత, "green");\n\
}\n\
\n\
// గడియారమును పునరావృతము చేయుటకు\n\
_విధానము_     గడియారము() {\n\
   చెరిపి_వేయి();\n\
   కొలత = .9 *  Math.min( గరిష్ఠX(), గరిష్ఠY())\n\
   అంకెలు(0, 0, 110/130 * కొలత);\n\
   రంగు_మార్చు("lightgreen");\n\
   స్థానము_మార్చు(0,0);\n\
   వెడల్పు(1/130* కొలత)\n\
   వృత్తము(130/130 * కొలత );\n\
   క్షణముల_గీతలు(0, 0, 130/130 * కొలత );\n\
   _అత్ర_  సమయము = new Date();\n\
   చేతులు(సమయము.getHours(), సమయము.getMinutes(), సమయము.getSeconds());\n\
}\n\
\n\
_విధానము_     ప్రదర్శన() {\n\
   ఆది_స్థితి();\n\
   కుంచికను_దాచు();\n\
   ఆడించు(గడియారము,1000); // గడియారమును ప్రతి క్షణము పునరావృతము చేయ వలెను.\n\
}\n\
'
రంగవల్లీ ='\
\n\
ప్రదర్శన = () => {\n\
  ఆది_స్థితి();\n\
    కుంచికను_దాచు();\n\
  ఆవర్తించు(6, () => {\n\
    రంగు_మార్చు( 0 );\n\
    కుడి_వైపు_తిరుగు(180);\n\
    _అత్ర_ భుజము = 100;\n\
    _అత్ర_ రంగు_సంఖ్య = 0;\n\
    యావత్_పరిక్రమ( () => భుజము > 0, ()=> {\n\
  \n\
      కుడివైపు_చాపాము(భుజము, 30 );\n\
  \n\
      కుడి_వైపు_తిరుగు(30);\n\
      భుజము = భుజము - 10;\n\
      రంగు_సంఖ్య = ( రంగు_సంఖ్య  + 15 ) % 16;\n\
      రంగు_మార్చు( రంగు_సంఖ్య );\n\
    } );\n\
  });\n\
\n\
  కుడి_వైపు_తిరుగు(310);\n\
  కుంచికను_పైకి_ఎత్తు();\n\
  ముందుకు_జరుగు(60 );\n\
  కుంచికను_కింద_పెట్టు()\n\
  రంగు_మార్చు( 13 );\n\
  నిండు_వృత్తము(5 );\n\
  వృత్తము(10);\n\
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
  ಆದಿ_ಸ್ಥಿತಿ();\n\
  ಕುಂಚಿಕವನ್ನು_ಮರೆಮಾಡಿ();\n\
  ವರ್ಣ_ಸ್ಥಾಪಿಸಿ( 1 );\n\
  _ಇಲ್ಲಿ_ ಭುಜ = 100;\n\
  _ಇಲ್ಲಿ_ ವರ್ಣ_ಸಂಖ್ಯೆ = 0;\n\
  ಯಾವತ್_ಪರಿಕ್ರಮ( () => ಭುಜ > 0, () => {\n\
    ಸಮ_ಚತುರ್ಭುಜ( ಭುಜ );\n\
    ಬಲಕ್ಕೆ_ತಿರುಗಿ( 10 );\n\
    ಭುಜ = ಭುಜ - 5;\n\
    ವರ್ಣ_ಸಂಖ್ಯೆ = ( ವರ್ಣ_ಸಂಖ್ಯೆ + 1 ) %  16\n\
    ವರ್ಣ_ಬದಲಿಸಿ (ವರ್ಣ_ಸಂಖ್ಯೆ );\n\
  } );\n\
}\n\
'
Рангавалі ='\
// https://hi.wikipedia.org/wiki/%E0%A4%B0%E0%A4%82%E0%A4%97%E0%A5%8B%E0%A4%B2%E0%A5%80\n\
\n\
паказаць = () => {\n\
  пачатковы_стан();\n\
    схавайце_пэндзаль();\n\
  паўтараць(6, () => {\n\
    змяніць_колер_на( 0 );\n\
    павярнуць_направа(180);\n\
    _тут_ бок = 100;\n\
    _тут_ колер_нумар = 0;\n\
    Паўтараць_пакуль( () => бок > 0, ()=> {\n\
  \n\
      дуга_направа(бок, 30 );\n\
  \n\
      павярнуць_направа(30);\n\
      бок = бок - 10;\n\
      колер_нумар = ( колер_нумар  + 15 ) % 16;\n\
      змяніць_колер_на( колер_нумар );\n\
    } );\n\
  });\n\
\n\
  павярнуць_направа(310);\n\
  падніміце_пэндзаль();\n\
  ісці_наперад(60 );\n\
  пакладзеце_пэндзаль()\n\
  змяніць_колер_на( 13 );\n\
  запоўнены_круг(5 );\n\
  круг(10);\n\
}\n\
'
гадзіннік ='\
// గోడ гадзіннік\n\
\n\
_усюды_   కొలత;\n\
\n\
// గడియారము చుట్టూ క్షణముల గీతలు గీయుటకు\n\
_працэдура_     క్షణముల_గీతలు(x, y, వ్యాసార్థము) {\n\
   _тут_   గీత_даўжыня = 7;\n\
   _тут_   ఖాళీ = వ్యాసార్థము - గీత_даўжыня;\n\
   змяніць_колер_на( 1 );\n\
   усталяваць_шырыню(1);\n\
   паўтарыць_лічачы( 60, ( కో ) => {\n\
      _тут_ థీటా = కో * 6;\n\
      // ప్రతి  ఐదవది దళసరి గా వేయవలెను\n\
      усталяваць_шырыню( ( ( కో % 5 ) ? 1 : 3)/130* కొలత)\n\
      падніміце_пэндзаль();\n\
      змяніць_становішча(0,0);\n\
      вугал(థీటా);\n\
      ісці_наперад(ఖాళీ);\n\
      пакладзеце_пэндзаль();\n\
      ісці_наперад(గీత_даўжыня);\n\
   });\n\
   \n\
}\n\
\n\
\n\
// గంటలు, నిమిషాలూ సూచించే అంకెలు\n\
_працэдура_     అంకెలు(x, y, వ్యాసార్థము) {\n\
   падніміце_пэндзаль();\n\
   _тут_  అక్షర_памер = 20/130 * కొలత\n\
   ўсталяваць_шрыфт(అక్షర_памер+"px sans-serif");\n\
   змяніць_колер_на("నలుపు");\n\
   паўтарыць_лічачы( 12, ( గంట ) =>{\n\
      змяніць_становішча(x,y);\n\
      вугал(గంట * 30);\n\
      ісці_наперад(వ్యాసార్థము); // to center of digit\n\
      вугал(180);\n\
      ісці_наперад(10/130 * కొలత); // vertical correction to baseline\n\
      павярнуць_направа(90);\n\
      // క్రింది, ఎడమ భాగమునకు అనుప్రస్థ సరదుబాటు\n\
      ісці_наперад( ( (గంట < 10 ) ? 6 : 10 )/130 * కొలత)\n\
      // if (గంట < 10) {\n\
      //   ісці_наперад(6/130 * కొలత); // horizontal correction to lower left corner\n\
      // } else {\n\
      //   ісці_наперад(10/130 * కొలత)\n\
      // }\n\
      павярнуць_направа(180);\n\
      запісаць(గంట);\n\
   })\n\
   пакладзеце_пэндзаль();\n\
}\n\
\n\
// చేతులు గీయుటకు  \n\
_працэдура_     చెయ్యి (థీటా, చెయ్యి_усталяваць_шырыню, даўжыня, రంగు) {\n\
   _тут_   కూచి_తగ్గింపు = 5;\n\
   _тут_   కూచి_తగ్గింపులు = (даўжыня / కూచి_తగ్గింపు);\n\
   _тут_   усталяваць_шырыню_సర్దుబాటు =  చెయ్యి_усталяваць_шырыню / కూచి_తగ్గింపులు;\n\
   змяніць_становішча(0, 0);\n\
   вугал(థీటా);\n\
   змяніць_колер_на(రంగు);\n\
   // for (_усюды_   step = 0; step < даўжыня; step = step + కూచి_తగ్గింపు) \n\
   паўтарыць_лічачы( కూచి_తగ్గింపులు, ( అడుగు) => \n\
   {\n\
      усталяваць_шырыню( చెయ్యి_усталяваць_шырыню ); // కుంచిక усталяваць_шырыню\n\
      ісці_наперад(కూచి_తగ్గింపు);\n\
      చెయ్యి_усталяваць_шырыню =  చెయ్యి_усталяваць_шырыню  - усталяваць_шырыню_సర్దుబాటు;\n\
   }\n\
   );\n\
}\n\
\n\
_працэдура_     చేతులు(గంటలు, నిమిషములు, క్షణములు) {\n\
    // క్షణముల చెయ్యి\n\
    _тут_   క్షణముకెన్ని_డిగ్రీలు = 6;	// = 360 degrees/60 క్షణములు\n\
    చెయ్యి(క్షణములు * క్షణముకెన్ని_డిగ్రీలు, 4, 100/130 * కొలత, "red");\n\
    // నిమిషముల చెయ్యి \n\
    _тут_   నిమిషానికెన్ని_డిగ్రీలు = 0.1;	// = 360 degrees /3600 క్షణములు /గంట\n\
    _тут_   నిమిషములుInక్షణములు = నిమిషములు * 60 + క్షణములు;\n\
    చెయ్యి(నిమిషములుInక్షణములు * నిమిషానికెన్ని_డిగ్రీలు, 10, 100/130 * కొలత, "blue");\n\
    // గంటల చెయ్యి\n\
    _тут_   గంటకెన్ని_డిగ్రీలు = .1/12;	// = నిమిషానికెన్ని_డిగ్రీలు / 12 గంటలు \n\
    _тут_   గంటలుInక్షణములు = ((గంటలు % 12) * 3600) + నిమిషములుInక్షణములు;\n\
    చెయ్యి(గంటలుInక్షణములు * గంటకెన్ని_డిగ్రీలు, 10, 60/130 * కొలత, "green");\n\
}\n\
\n\
// గడియారమును పునరావృతము చేయుటకు\n\
_працэдура_     గడియారము() {\n\
   сціраць();\n\
   కొలత = .9 *  Math.min( максімум_X(), максімум_Y())\n\
   అంకెలు(0, 0, 110/130 * కొలత);\n\
   змяніць_колер_на("lightgreen");\n\
   змяніць_становішча(0,0);\n\
   усталяваць_шырыню(1/130* కొలత)\n\
   круг(130/130 * కొలత );\n\
   క్షణముల_గీతలు(0, 0, 130/130 * కొలత );\n\
   _тут_  సమయము = new Date();\n\
   చేతులు(సమయము.getHours(), సమయము.getMinutes(), సమయము.getSeconds());\n\
}\n\
\n\
_працэдура_     паказаць() {\n\
   пачатковы_стан();\n\
   схавайце_пэндзаль();\n\
   гуляць(గడియారము,1000); // గడియారమును ప్రతి క్షణము పునరావృతము చేయ వలెను.\n\
}\n\
'
квадратны ='\
/* Тут вы можаце напісаць свой працэс. Напрыклад:    */\n\
\n\
квадратны = ( бок ) => {\n\
  паўтараць(4, () => {\n\
    ісці_наперад( бок );\n\
    павярнуць_направа(90);\n\
  });\n\
}\n\
\n\
паказаць = () => {\n\
  пачатковы_стан();\n\
  схавайце_пэндзаль();\n\
  змяніць_колер_на( 1 );\n\
  _тут_ бок = 100;\n\
  _тут_ колер_нумар = 0;\n\
  Паўтараць_пакуль( () => бок > 0, ()=> {\n\
    квадратны( бок );\n\
    павярнуць_направа(36);\n\
    бок = бок - 10;\n\
    колер_нумар = ( колер_нумар + 1 ) % 16;\n\
    змяніць_колер_на( колер_нумар );\n\
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
  आदिस्थितिः();\n\
  कुंचिकं_गोपाय();\n\
  वर्णं_स्थापय( 0 );\n\
  _अत्र_ भुजः = 100;\n\
  _अत्र_ वर्ण_संख्य = 0;\n\
  आवर्तय_यावत्( () => भुजः > 0, ()=> {\n\
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
  ఆది_స్థితి();\n\
  కుంచికను_దాచు();\n\
  అండాకారము( 90, 90, 40, 0 )\n\
  అండాకారము( 0, 0, 90, 45 )\n\
}\n\
'
హిమరేకులు ='\
\n\
\n\
కనిష్ఠ_విలువ = Math.min\n\
\n\
_విధానము_     కోఖ్_రేఖ (పొడవు, లోతు) {\n\
  యది_తర్హి_అన్యథా( () => (లోతు == 0),\n\
   () => {    ముందుకు_జరుగు(పొడవు);  },\n\
   () => {\n\
    //  ఎడమ వైపు బుడిప \n\
    కోఖ్_రేఖ (పొడవు/3, లోతు-1);\n\
    ఎడమ_వైపు_తిరుగు(60); \n\
    కోఖ్_రేఖ (పొడవు/3, లోతు-1);\n\
    కుడి_వైపు_తిరుగు(120); \n\
    కోఖ్_రేఖ (పొడవు/3, లోతు-1);\n\
    ఎడమ_వైపు_తిరుగు(60); \n\
    కోఖ్_రేఖ (పొడవు/3, లోతు-1);\n\
  } )\n\
}\n\
\n\
\n\
_విధానము_     కోఖ్_హిమ_రేకు (పొడవు, లోతు) {\n\
  కోణము (30);\n\
  స్థానము_మార్చు(-పొడవు/2,-.3 * పొడవు);\n\
  కోఖ్_రేఖ (పొడవు, లోతు);\n\
  కుడి_వైపు_తిరుగు(120);\n\
  కోఖ్_రేఖ (పొడవు, లోతు);\n\
  కుడి_వైపు_తిరుగు(120);\n\
  కోఖ్_రేఖ (పొడవు, లోతు);\n\
  కుడి_వైపు_తిరుగు(120);\n\
}\n\
  \n\
హిమ_రేకులు = ()=> {\n\
  రేకు_రంగులు.push(యాదృచ్ఛిక_సంఖ్య(15) );\n\
  రేకు_రంగులు.shift();\n\
  లెక్క_పెడుతూ_ఆవర్తించు (6, ( క ) => {\n\
    రంగు_మార్చు( రేకు_రంగులు [క] );\n\
    కోఖ్_హిమ_రేకు( పొడవు * (క+1) * (క+1), క)\n\
  } );\n\
}\n\
\n\
_విధానము_     ప్రదర్శన() {\n\
  ఆది_స్థితి();\n\
  పొడవు = .045* కనిష్ఠ_విలువ(గరిష్ఠX(), గరిష్ఠY())\n\
  రేకు_రంగులు = [];\n\
  లెక్క_పెడుతూ_ఆవర్తించు (6, ( క ) => {\n\
    రేకు_రంగులు[క] = యాదృచ్ఛిక_సంఖ్య(6);\n\
  } );\n\
\n\
  కుంచికను_దాచు();\n\
  ఆడించు(హిమ_రేకులు,1)\n\
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
  ఆది_స్థితి();\n\
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
