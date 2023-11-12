// Begin Belarusian 
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
// End Belarusian 
// Begin English 
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
// End English 
// Begin French 
art_de_sable ='\
\n\
afficher = () => {\n\
  état_initial();\n\
    cacher_le_pinceau();\n\
  répéter(6, () => {\n\
    changer_la_couleur_à( 0 );\n\
    tourner_à_droite(180);\n\
    _ici_ côté = 100;\n\
    _ici_ numéro_de_couleur = 0;\n\
    répéter_tant_que( () => côté > 0, ()=> {\n\
  \n\
      arc_à_droite(côté, 30 );\n\
  \n\
      tourner_à_droite(30);\n\
      côté = côté - 10;\n\
      numéro_de_couleur = ( numéro_de_couleur  + 15 ) % 16;\n\
      changer_la_couleur_à( numéro_de_couleur );\n\
    } );\n\
  });\n\
\n\
  tourner_à_droite(310);\n\
  lever_le_pinceau();\n\
  avancer(60 );\n\
  poser_le_pinceau()\n\
  changer_la_couleur_à( 13 );\n\
  cercle_plein(5 );\n\
  cercle(10);\n\
}\n\
'
carré_en_spirale ='\
/* Ici vous pouvez écrire vos processus. Par exemple: */\n\
\n\
carré = ( côté ) => {\n\
  répéter(4, () => {\n\
    avancer( côté );\n\
    tourner_à_droite(90);\n\
  });\n\
}\n\
\n\
afficher = () => {\n\
  état_initial();\n\
  cacher_le_pinceau();\n\
  changer_la_couleur_à( 1 ); // bleu\n\
  _ici_ côté = 100;\n\
  _ici_ numéro_de_couleur = 0;\n\
  répéter_tant_que( () => côté > 0, ()=> {\n\
    carré( côté );\n\
    tourner_à_droite(36);\n\
    côté = côté - 10;\n\
    numéro_de_couleur = ( numéro_de_couleur + 1 ) % 16;\n\
    changer_la_couleur_à( numéro_de_couleur );\n\
  } );\n\
}\n\
'
flocons_de_neige ='\
\n\
\n\
valeur_minimale = Math.min\n\
\n\
_méthode_     ligne_de_Koch (longueur, profondeur) {\n\
  si_alors_sinon( () => (profondeur == 0),\n\
    () => {    avancer(longueur);  },\n\
    () => {\n\
    // La bosse du côté gauche\n\
    ligne_de_Koch (longueur/3, profondeur-1);\n\
    tourner_à_gauche(60); \n\
    ligne_de_Koch (longueur/3, profondeur-1);\n\
    tourner_à_droite(120); \n\
    ligne_de_Koch (longueur/3, profondeur-1);\n\
    tourner_à_gauche(60); \n\
    ligne_de_Koch (longueur/3, profondeur-1);\n\
  } )\n\
}\n\
\n\
\n\
_méthode_     flocon_de_neige_de_Koch (longueur, profondeur) {\n\
  angle (30);\n\
  changer_la_position(-longueur/2,-.3 * longueur);\n\
  ligne_de_Koch (longueur, profondeur);\n\
  tourner_à_droite(120);\n\
  ligne_de_Koch (longueur, profondeur);\n\
  tourner_à_droite(120);\n\
  ligne_de_Koch (longueur, profondeur);\n\
  tourner_à_droite(120);\n\
}\n\
  \n\
flocons_de_neige = ()=> {\n\
  couleurs_de_pétales.push(nombre_aléatoire(15) );\n\
  couleurs_de_pétales.shift();\n\
  répéter_en_comptant (6, ( క ) => {\n\
    changer_la_couleur_à( couleurs_de_pétales [క] );\n\
    flocon_de_neige_de_Koch( longueur * (క+1) * (క+1), క)\n\
  } );\n\
}\n\
\n\
_méthode_     afficher() {\n\
  état_initial();\n\
  longueur = .045* valeur_minimale(maximum_X(), maximum_Y())\n\
  couleurs_de_pétales = [];\n\
  répéter_en_comptant (6, ( క ) => {\n\
    couleurs_de_pétales[క] = nombre_aléatoire(6);\n\
  } );\n\
\n\
  cacher_le_pinceau();\n\
  jouer(flocons_de_neige,1)\n\
}\n\
'
forme_d_œuf ='\
// మూలము: https://pythonturtle.academy/tutorial-drawing-egg-shape-with-python-turtle/\n\
\n\
forme_d_œuf = (x, y, taille, pente) => {\n\
  lever_le_pinceau()\n\
  changer_la_position(x,y)\n\
  poser_le_pinceau()\n\
  changer_la_direction(270+pente)\n\
  changer_la_couleur_à(rouge)\n\
  arc_à_droite(taille,180)\n\
  changer_la_couleur_à(bleu)\n\
  arc_à_droite(2*taille,45)\n\
  changer_la_couleur_à("vert")\n\
  arc_à_droite(0.586*taille,90)\n\
  changer_la_couleur_à(bleu)\n\
  arc_à_droite(2*taille,45)\n\
}\n\
\n\
afficher = () => {\n\
  état_initial();\n\
  cacher_le_pinceau();\n\
  forme_d_œuf( 90, 90, 40, 0 )\n\
  forme_d_œuf( 0, 0, 90, 45 )\n\
}\n\
'
horloge ='\
// గోడ horloge\n\
\n\
_partout_   కొలత;\n\
\n\
// horloge చుట్టూ క్షణముల గీతలు గీయుటకు\n\
_méthode_     క్షణముల_గీతలు(x, y, వ్యాసార్థము) {\n\
   _ici_   గీత_longueur = 7;\n\
   _ici_   ఖాళీ = వ్యాసార్థము - గీత_longueur;\n\
   changer_la_couleur_à( bleu );\n\
   largeur(1);\n\
   répéter_en_comptant( 60, ( కో ) => {\n\
      _ici_ థీటా = కో * 6;\n\
      // ప్రతి  ఐదవది దళసరి గా వేయవలెను\n\
      largeur( ( ( కో % 5 ) ? 1 : 3)/130* కొలత)\n\
      lever_le_pinceau();\n\
      changer_la_position(0,0);\n\
      angle(థీటా);\n\
      avancer(ఖాళీ);\n\
      poser_le_pinceau();\n\
      avancer(గీత_longueur);\n\
   });\n\
   \n\
}\n\
\n\
\n\
// గంటలు, నిమిషాలూ సూచించే అంకెలు\n\
_méthode_     అంకెలు(x, y, వ్యాసార్థము) {\n\
   lever_le_pinceau();\n\
   _ici_  అక్షర_taille = 20/130 * కొలత\n\
   définir_la_police(అక్షర_taille+"px sans-serif");\n\
   changer_la_couleur_à("నలుపు");\n\
   répéter_en_comptant( 12, ( గంట ) =>{\n\
      changer_la_position(x,y);\n\
      angle(గంట * 30);\n\
      avancer(వ్యాసార్థము); // to center of digit\n\
      angle(180);\n\
      avancer(10/130 * కొలత); // vertical correction to baseline\n\
      tourner_à_droite(90);\n\
      // క్రింది, ఎడమ భాగమునకు అనుప్రస్థ సరదుబాటు\n\
      avancer( ( (గంట < 10 ) ? 6 : 10 )/130 * కొలత)\n\
      // if (గంట < 10) {\n\
      //   avancer(6/130 * కొలత); // horizontal correction to lower left corner\n\
      // } else {\n\
      //   avancer(10/130 * కొలత)\n\
      // }\n\
      tourner_à_droite(180);\n\
      écrire(గంట);\n\
   })\n\
   poser_le_pinceau();\n\
}\n\
\n\
// చేతులు గీయుటకు  \n\
_méthode_     చెయ్యి (థీటా, చెయ్యి_largeur, longueur, couleur) {\n\
   _ici_   కూచి_తగ్గింపు = 5;\n\
   _ici_   కూచి_తగ్గింపులు = (longueur / కూచి_తగ్గింపు);\n\
   _ici_   largeur_సర్దుబాటు =  చెయ్యి_largeur / కూచి_తగ్గింపులు;\n\
   changer_la_position(0, 0);\n\
   angle(థీటా);\n\
   changer_la_couleur_à(couleur);\n\
   // for (_partout_   step = 0; step < longueur; step = step + కూచి_తగ్గింపు) \n\
   répéter_en_comptant( కూచి_తగ్గింపులు, ( అడుగు) => \n\
   {\n\
      largeur( చెయ్యి_largeur ); // కుంచిక largeur\n\
      avancer(కూచి_తగ్గింపు);\n\
      చెయ్యి_largeur =  చెయ్యి_largeur  - largeur_సర్దుబాటు;\n\
   }\n\
   );\n\
}\n\
\n\
_méthode_     చేతులు(గంటలు, నిమిషములు, క్షణములు) {\n\
    // క్షణముల చెయ్యి\n\
    _ici_   క్షణముకెన్ని_డిగ్రీలు = 6;	// = 360 degrees/60 క్షణములు\n\
    చెయ్యి(క్షణములు * క్షణముకెన్ని_డిగ్రీలు, 4, 100/130 * కొలత, "red");\n\
    // నిమిషముల చెయ్యి \n\
    _ici_   నిమిషానికెన్ని_డిగ్రీలు = 0.1;	// = 360 degrees /3600 క్షణములు /గంట\n\
    _ici_   నిమిషములుInక్షణములు = నిమిషములు * 60 + క్షణములు;\n\
    చెయ్యి(నిమిషములుInక్షణములు * నిమిషానికెన్ని_డిగ్రీలు, 10, 100/130 * కొలత, "blue");\n\
    // గంటల చెయ్యి\n\
    _ici_   గంటకెన్ని_డిగ్రీలు = .1/12;	// = నిమిషానికెన్ని_డిగ్రీలు / 12 గంటలు \n\
    _ici_   గంటలుInక్షణములు = ((గంటలు % 12) * 3600) + నిమిషములుInక్షణములు;\n\
    చెయ్యి(గంటలుInక్షణములు * గంటకెన్ని_డిగ్రీలు, 10, 60/130 * కొలత, "green");\n\
}\n\
\n\
// horlogeను పునరావృతము చేయుటకు\n\
_méthode_     horloge() {\n\
   effacer();\n\
   కొలత = .9 *  Math.min( maximum_X(), maximum_Y())\n\
   అంకెలు(0, 0, 110/130 * కొలత);\n\
   changer_la_couleur_à("lightgreen");\n\
   changer_la_position(0,0);\n\
   largeur(1/130* కొలత)\n\
   cercle(130/130 * కొలత );\n\
   క్షణముల_గీతలు(0, 0, 130/130 * కొలత );\n\
   _ici_  సమయము = new Date();\n\
   చేతులు(సమయము.getHours(), సమయము.getMinutes(), సమయము.getSeconds());\n\
}\n\
\n\
_méthode_     afficher() {\n\
   état_initial();\n\
   cacher_le_pinceau();\n\
   jouer(horloge,1000); // horlogeను ప్రతి క్షణము పునరావృతము చేయ వలెను.\n\
}\n\
'
mur_de_briques ='\
// briques ప్రస్తారము \n\
\n\
_toujours_    hauteur = 15\n\
_toujours_    largeur = 2* hauteur \n\
\n\
// briques == ఇటుక \n\
\n\
briques = ( hauteur, largeur, briques_couleur) => {\n\
  commencer_à_dessiner_une_forme()\n\
  répéter (2, () => {\n\
    avancer( largeur)\n\
    tourner_à_droite(90)\n\
    avancer( hauteur)\n\
    tourner_à_droite(90)\n\
  })\n\
  arrêter_de_dessiner_une_forme( briques_couleur)\n\
  avancer( largeur)\n\
}\n\
\n\
afficher = () => {\n\
  état_initial()\n\
 \n\
  yB = maximum_Y()\n\
  xB = minimum_X()\n\
   ne_pas_enrouler()\n\
  tourner_à_droite( 90)\n\
  changer_la_couleur_à( blanc )\n\
\n\
  répéter_tant_que( () => కుంచిక.స్థానము.y > minimum_Y(), () => {\n\
    changer_la_position(xB, yB)\n\
    répéter_tant_que( () => కుంచిక.స్థానము.x < maximum_X(), () => {\n\
      poser_le_pinceau()\n\
      briques(hauteur, largeur, "darkred")\n\
      lever_le_pinceau()\n\
    } )\n\
    yB = yB - hauteur\n\
\n\
    changer_la_position(xB - largeur/2, yB)\n\
    répéter_tant_que( () => కుంచిక.స్థానము.x < maximum_X(), () => {\n\
      poser_le_pinceau()\n\
      briques(hauteur, largeur, "darkred")\n\
      lever_le_pinceau()\n\
    } )\n\
    yB = yB - hauteur\n\
  } )\n\
}\n\
'
poisson ='\
\n\
racine_carrée = Math.sqrt\n\
\n\
afficher = () => {\n\
\n\
  état_initial();\n\
  cacher_le_pinceau();\n\
\n\
poisson = ( taille ) => {\n\
  cercle( taille )\n\
  tourner_à_droite( 90 );\n\
\n\
  lever_le_pinceau()\n\
  avancer( taille );\n\
  poser_le_pinceau()\n\
\n\
  montrer_le_pinceau();\n\
\n\
\n\
  tourner_à_gauche( 45 );\n\
  avancer( 2 * taille );\n\
  tourner_à_droite(90+45)\n\
\n\
  avancer( racine_carrée( 2 * taille * 2 * taille * 2 ) );\n\
\n\
  tourner_à_droite(90+45)\n\
  avancer( 2 * taille );\n\
  tourner_à_gauche( 45 );\n\
\n\
  // cacher_le_pinceau();\n\
\n\
  lever_le_pinceau()\n\
  avancer( taille );\n\
  poser_le_pinceau()\n\
\n\
  tourner_à_droite( 90 );\n\
}\n\
\n\
couleur_poisson = (numéro_de_couleur) =>  {\n\
  changer_la_couleur_à(numéro_de_couleur)\n\
 poisson( 40 + ( numéro_de_couleur * 1 ) )\n\
} \n\
répéter_en_comptant( 16 , (taille) => couleur_poisson( taille ) )\n\
\n\
}\n\
'
// End French 
// Begin Korean 
달걀 ='\
// 원천: https://pythonturtle.academy/tutorial-drawing-egg-shape-with-python-turtle/\n\
\n\
달걀_ = (x, y, 크기, 경사) => {\n\
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
  달걀_( 90, 90, 40, 0 )\n\
  달걀_( 0, 0, 90, 45 )\n\
}\n\
'
벽돌벽 ='\
// 벽돌 벽\n\
\n\
_항상_    높이 = 15\n\
_항상_    너비 = 2* 높이 \n\
\n\
\n\
벽돌_ = ( 높이, 너비, 벽돌색) => {\n\
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
      벽돌_(높이, 너비, "darkred")\n\
      솔질하다()\n\
    } )\n\
    yB = yB - 높이\n\
\n\
    위치_변경(xB - 너비/2, yB)\n\
    동안반복( () => 현재_위치().x < 최고_X(), () => {\n\
      브러시를_사용()\n\
      벽돌_(높이, 너비, "darkred")\n\
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
  다채로운_생선_ = (색상_번호) =>  {\n\
    색상을설정(색상_번호)\n\
  생선( 40 + ( 색상_번호 * 1 ) )\n\
  } \n\
  계산하는동안반복( 16 , (카) => 다채로운_생선_( 카 ) )\n\
\n\
}\n\
'
// End Korean 
// Begin Marathi 
मासा ='\
\n\
वर्गमुळ = Math.sqrt\n\
\n\
प्रदर्शन = () => {\n\
\n\
  _कायम_ సవ్య = हो;\n\
  _कायम_ అపసవ్య = !సవ్య;\n\
\n\
  प्रथम_स्थिति();\n\
  कुंचला_लपवा();\n\
\n\
मासा = ( వ ) => {\n\
  वर्तुळ( వ )\n\
  उज्वी_कडे_वळा( 90 );\n\
\n\
  कुंचला_उचला()\n\
  पुढे_जा( వ );\n\
  कुंचला_ठेवा()\n\
\n\
  कुंचला_दाखवा();\n\
\n\
\n\
  दावी_कडे_वळा( 45 );\n\
  पुढे_जा( 2 * వ );\n\
  उज्वी_कडे_वळा(90+45)\n\
\n\
  पुढे_जा( वर्गमुळ( 2 * వ * 2 * వ * 2 ) );\n\
\n\
  उज्वी_कडे_वळा(90+45)\n\
  पुढे_जा( 2 * వ );\n\
  दावी_कडे_वळा( 45 );\n\
\n\
  // कुंचला_लपवा();\n\
\n\
  कुंचला_उचला()\n\
  पुढे_जा( వ );\n\
  कुंचला_ठेवा()\n\
\n\
  उज्वी_कडे_वळा( 90 );\n\
}\n\
\n\
रंग_मासा = (रंग_आकडा) =>  {\n\
  रंग_बदला(रंग_आकडा)\n\
 मासा( 40 + ( रंग_आकडा * 1 ) )\n\
} \n\
मोजणे_करत_रहा( 16 , (క) => रंग_मासा( క ) )\n\
\n\
}\n\
'
चौकोन ='\
/* येथे तुम्ही तुमच्या प्रक्रिया लिहू शकता. उदाहरणार्थ: */\n\
\n\
चौकोन = ( बाजु ) => {\n\
  करत_रहा(4, () => {\n\
    पुढे_जा( बाजु );\n\
    उज्वी_कडे_वळा(90);\n\
  });\n\
}\n\
\n\
प्रदर्शन = () => {\n\
  प्रथम_स्थिति();\n\
  कुंचला_लपवा();\n\
  रंग_बदला( 1 );\n\
  _इथे_ बाजु = 100;\n\
  _इथे_ रंग_आकडा = 0;\n\
  असे_पर्यन्त_करत_रहा( () => बाजु > 0, ()=> {\n\
    चौकोन( बाजु );\n\
    उज्वी_कडे_वळा(36);\n\
    बाजु = बाजु - 10;\n\
    रंग_आकडा = ( रंग_आकडा + 1 ) % 16;\n\
    रंग_बदला( रंग_आकडा );\n\
  } );\n\
}\n\
'
पुष्प ='\
\n\
\n\
कमीत_कमी = Math.min\n\
\n\
_कृती_     कोख_रेखा (लांबी, खोल) {\n\
  जर_तर_मग( () => (खोल == 0),\n\
   () => {    पुढे_जा(लांबी);  },\n\
   () => {\n\
    //  ఎడమ వైపు బుడిప \n\
    कोख_रेखा (लांबी/3, खोल-1);\n\
    दावी_कडे_वळा(60); \n\
    कोख_रेखा (लांबी/3, खोल-1);\n\
    उज्वी_कडे_वळा(120); \n\
    कोख_रेखा (लांबी/3, खोल-1);\n\
    दावी_कडे_वळा(60); \n\
    कोख_रेखा (लांबी/3, खोल-1);\n\
  } )\n\
}\n\
\n\
\n\
_कृती_     कोख_पुष्प (लांबी, खोल) {\n\
  कोन_निश्चित_करा (30);\n\
  स्थान_बदला(-लांबी/2,-.3 * लांबी);\n\
  कोख_रेखा (लांबी, खोल);\n\
  उज्वी_कडे_वळा(120);\n\
  कोख_रेखा (लांबी, खोल);\n\
  उज्वी_कडे_वळा(120);\n\
  कोख_रेखा (लांबी, खोल);\n\
  उज्वी_कडे_वळा(120);\n\
}\n\
  \n\
पुष्प = ()=> {\n\
  पाकळीचा_रंग.push(कुठलीतरी_संख्या(15) );\n\
  पाकळीचा_रंग.shift();\n\
  मोजणे_करत_रहा (6, ( క ) => {\n\
    रंग_बदला( पाकळीचा_रंग [క] );\n\
    कोख_पुष्प( लांबी * (క+1) * (క+1), క)\n\
  } );\n\
}\n\
\n\
_कृती_     प्रदर्शन() {\n\
  प्रथम_स्थिति();\n\
  लांबी = .045* कमीत_कमी(जास्तीत_जास्त_X(), जास्तीत_जास्त_Y())\n\
  पाकळीचा_रंग = [];\n\
  मोजणे_करत_रहा (6, ( క ) => {\n\
    पाकळीचा_रंग[క] = कुठलीतरी_संख्या(6);\n\
  } );\n\
\n\
  कुंचला_लपवा();\n\
  चालू_करा(पुष्प,1)\n\
}\n\
'
घड्याळ ='\
// గోడ घड्याळ\n\
\n\
_सगळी_कडे_   కొలత;\n\
\n\
// घड्याळ చుట్టూ క్షణముల గీతలు గీయుటకు\n\
_कृती_     క్షణముల_గీతలు(x, y, వ్యాసార్థము) {\n\
   _इथे_   గీత_लांबी = 7;\n\
   _इथे_   ఖాళీ = వ్యాసార్థము - గీత_लांबी;\n\
   रंग_बदला( 1 );\n\
   रुंदी(1);\n\
   मोजणे_करत_रहा( 60, ( కో ) => {\n\
      _इथे_ థీటా = కో * 6;\n\
      // ప్రతి  ఐదవది దళసరి గా వేయవలెను\n\
      रुंदी( ( ( కో % 5 ) ? 1 : 3)/130* కొలత)\n\
      कुंचला_उचला();\n\
      स्थान_बदला(0,0);\n\
      कोन_निश्चित_करा(థీటా);\n\
      पुढे_जा(ఖాళీ);\n\
      कुंचला_ठेवा();\n\
      पुढे_जा(గీత_लांबी);\n\
   });\n\
   \n\
}\n\
\n\
\n\
// గంటలు, నిమిషాలూ సూచించే అంకెలు\n\
_कृती_     అంకెలు(x, y, వ్యాసార్థము) {\n\
   कुंचला_उचला();\n\
   _इथे_  అక్షర_माप = 20/130 * కొలత\n\
   आक्षर_रूप_बदला(అక్షర_माप+"px sans-serif");\n\
   रंग_बदला("నలుపు");\n\
   मोजणे_करत_रहा( 12, ( గంట ) =>{\n\
      स्थान_बदला(x,y);\n\
      कोन_निश्चित_करा(గంట * 30);\n\
      पुढे_जा(వ్యాసార్థము); // to center of digit\n\
      कोन_निश्चित_करा(180);\n\
      पुढे_जा(10/130 * కొలత); // vertical correction to baseline\n\
      उज्वी_कडे_वळा(90);\n\
      // క్రింది, ఎడమ భాగమునకు అనుప్రస్థ సరదుబాటు\n\
      पुढे_जा( ( (గంట < 10 ) ? 6 : 10 )/130 * కొలత)\n\
      // if (గంట < 10) {\n\
      //   पुढे_जा(6/130 * కొలత); // horizontal correction to lower left corner\n\
      // } else {\n\
      //   पुढे_जा(10/130 * కొలత)\n\
      // }\n\
      उज्वी_कडे_वळा(180);\n\
      लिहा(గంట);\n\
   })\n\
   कुंचला_ठेवा();\n\
}\n\
\n\
// చేతులు గీయుటకు  \n\
_कृती_     చెయ్యి (థీటా, చెయ్యి_रुंदी, लांबी, रंग) {\n\
   _इथे_   కూచి_తగ్గింపు = 5;\n\
   _इथे_   కూచి_తగ్గింపులు = (लांबी / కూచి_తగ్గింపు);\n\
   _इथे_   रुंदी_సర్దుబాటు =  చెయ్యి_रुंदी / కూచి_తగ్గింపులు;\n\
   स्थान_बदला(0, 0);\n\
   कोन_निश्चित_करा(థీటా);\n\
   रंग_बदला(रंग);\n\
   // for (_सगळी_कडे_   step = 0; step < लांबी; step = step + కూచి_తగ్గింపు) \n\
   मोजणे_करत_रहा( కూచి_తగ్గింపులు, ( అడుగు) => \n\
   {\n\
      रुंदी( చెయ్యి_रुंदी ); // కుంచిక रुंदी\n\
      पुढे_जा(కూచి_తగ్గింపు);\n\
      చెయ్యి_रुंदी =  చెయ్యి_रुंदी  - रुंदी_సర్దుబాటు;\n\
   }\n\
   );\n\
}\n\
\n\
_कृती_     చేతులు(గంటలు, నిమిషములు, క్షణములు) {\n\
    // క్షణముల చెయ్యి\n\
    _इथे_   క్షణముకెన్ని_డిగ్రీలు = 6;	// = 360 degrees/60 క్షణములు\n\
    చెయ్యి(క్షణములు * క్షణముకెన్ని_డిగ్రీలు, 4, 100/130 * కొలత, "red");\n\
    // నిమిషముల చెయ్యి \n\
    _इथे_   నిమిషానికెన్ని_డిగ్రీలు = 0.1;	// = 360 degrees /3600 క్షణములు /గంట\n\
    _इथे_   నిమిషములుInక్షణములు = నిమిషములు * 60 + క్షణములు;\n\
    చెయ్యి(నిమిషములుInక్షణములు * నిమిషానికెన్ని_డిగ్రీలు, 10, 100/130 * కొలత, "blue");\n\
    // గంటల చెయ్యి\n\
    _इथे_   గంటకెన్ని_డిగ్రీలు = .1/12;	// = నిమిషానికెన్ని_డిగ్రీలు / 12 గంటలు \n\
    _इथे_   గంటలుInక్షణములు = ((గంటలు % 12) * 3600) + నిమిషములుInక్షణములు;\n\
    చెయ్యి(గంటలుInక్షణములు * గంటకెన్ని_డిగ్రీలు, 10, 60/130 * కొలత, "green");\n\
}\n\
\n\
// घड्याळను పునరావృతము చేయుటకు\n\
_कृती_     घड्याळ() {\n\
   चित्र_पूसा();\n\
   కొలత = .9 *  Math.min( जास्तीत_जास्त_X(), जास्तीत_जास्त_Y())\n\
   అంకెలు(0, 0, 110/130 * కొలత);\n\
   रंग_बदला("lightgreen");\n\
   स्थान_बदला(0,0);\n\
   रुंदी(1/130* కొలత)\n\
   वर्तुळ(130/130 * కొలత );\n\
   క్షణముల_గీతలు(0, 0, 130/130 * కొలత );\n\
   _इथे_  సమయము = new Date();\n\
   చేతులు(సమయము.getHours(), సమయము.getMinutes(), సమయము.getSeconds());\n\
}\n\
\n\
_कृती_     प्रदर्शन() {\n\
   प्रथम_स्थिति();\n\
   कुंचला_लपवा();\n\
   चालू_करा(घड्याळ,1000); // घड्याळను ప్రతి క్షణము పునరావృతము చేయ వలెను.\n\
}\n\
'
रांगोळी ='\
\n\
प्रदर्शन = () => {\n\
  प्रथम_स्थिति();\n\
    कुंचला_लपवा();\n\
  करत_रहा(6, () => {\n\
    रंग_बदला( 0 );\n\
    उज्वी_कडे_वळा(180);\n\
    _इथे_ बाजु = 100;\n\
    _इथे_ रंग_आकडा = 0;\n\
    असे_पर्यन्त_करत_रहा( () => बाजु > 0, ()=> {\n\
  \n\
      उज्वी_कडे_चाप(बाजु, 30 );\n\
  \n\
      उज्वी_कडे_वळा(30);\n\
      बाजु = बाजु - 10;\n\
      रंग_आकडा = ( रंग_आकडा  + 15 ) % 16;\n\
      रंग_बदला( रंग_आकडा );\n\
    } );\n\
  });\n\
\n\
  उज्वी_कडे_वळा(310);\n\
  कुंचला_उचला();\n\
  पुढे_जा(60 );\n\
  कुंचला_ठेवा()\n\
  रंग_बदला( 13 );\n\
  भरलेले_वर्तुळ(5 );\n\
  वर्तुळ(10);\n\
}\n\
'
वीटांची_भींत ='\
// वीट ప్రస్తారము \n\
\n\
_कायम_    ऊंची = 15\n\
_कायम_    रुंदी = 2* ऊंची \n\
\n\
// वीट == ఇటుక \n\
\n\
वीट = ( ऊंची, रुंदी, वीटेचा_रंग) => {\n\
  आकार_काढा()\n\
  करत_रहा (2, () => {\n\
    पुढे_जा( रुंदी)\n\
    उज्वी_कडे_वळा(90)\n\
    पुढे_जा( ऊंची)\n\
    उज्वी_कडे_वळा(90)\n\
  })\n\
  आकार_काढणे_थांबवा( वीटेचा_रंग)\n\
  पुढे_जा( रुंदी)\n\
}\n\
\n\
प्रदर्शन = () => {\n\
  प्रथम_स्थिति()\n\
 \n\
  yB = जास्तीत_जास्त_Y()\n\
  xB = कमीत_कमी_X()\n\
   गुंडााळु_नका()\n\
  उज्वी_कडे_वळा( 90)\n\
  रंग_बदला( 7 )\n\
\n\
  असे_पर्यन्त_करत_रहा( () => కుంచిక.స్థానము.y > कमीत_कमी_Y(), () => {\n\
    स्थान_बदला(xB, yB)\n\
    असे_पर्यन्त_करत_रहा( () => కుంచిక.స్థానము.x < जास्तीत_जास्त_X(), () => {\n\
      कुंचला_ठेवा()\n\
      वीट(ऊंची, रुंदी, "darkred")\n\
      कुंचला_उचला()\n\
    } )\n\
    yB = yB - ऊंची\n\
\n\
    स्थान_बदला(xB - रुंदी/2, yB)\n\
    असे_पर्यन्त_करत_रहा( () => కుంచిక.స్థానము.x < जास्तीत_जास्त_X(), () => {\n\
      कुंचला_ठेवा()\n\
      वीट(ऊंची, रुंदी, "darkred")\n\
      कुंचला_उचला()\n\
    } )\n\
    yB = yB - ऊंची\n\
  } )\n\
}\n\
'
अंडाकृती ='\
// सूत्र : https://pythonturtle.academy/tutorial-drawing-egg-shape-with-python-turtle/\n\
\n\
अंडाकृती = (x, y, माप, उतार) => {\n\
  कुंचला_उचला()\n\
  स्थान_बदला(x,y)\n\
  कुंचला_ठेवा()\n\
  दिश_बदला(270+उतार)\n\
  रंग_बदला(4)\n\
  उज्वी_कडे_चाप(माप,180)\n\
  रंग_बदला(1)\n\
  उज्वी_कडे_चाप(2*माप,45)\n\
  रंग_बदला("10")\n\
  उज्वी_कडे_चाप(0.586*माप,90)\n\
  रंग_बदला(1)\n\
  उज्वी_कडे_चाप(2*माप,45)\n\
}\n\
\n\
प्रदर्शन = () => {\n\
  प्रथम_स्थिति();\n\
  कुंचला_लपवा();\n\
  अंडाकृती( 90, 90, 40, 0 )\n\
  अंडाकृती( 0, 0, 90, 45 )\n\
}\n\
'
// End Marathi 
// Begin Spanish 
arte_de_arena ='\
// arte_de_arena\n\
mostrar = () => {\n\
  estado_inicial();\n\
    esconder_el_pincel();\n\
  repetir(6, () => {\n\
    cambiar_el_color_a( 0 );\n\
    girar_a_la_derecha(180);\n\
    _aquí_ lado = 100;\n\
    _aquí_ número_de_color = 0;\n\
    repetir_mientras( () => lado > 0, ()=> {\n\
  \n\
      arco_a_la_derecha(lado, 30 );\n\
  \n\
      girar_a_la_derecha(30);\n\
      lado = lado - 10;\n\
      número_de_color = ( número_de_color  + 15 ) % 16;\n\
      cambiar_el_color_a( número_de_color );\n\
    } );\n\
  });\n\
\n\
  girar_a_la_derecha(310);\n\
  levantar_el_pincel();\n\
  avanzar(60 );\n\
  dejar_el_pincel()\n\
  cambiar_el_color_a( 13 );\n\
  círculo_lleno(5 );\n\
  círculo(10);\n\
}\n\
'
copos_de_nieve ='\
\n\
\n\
valor_mínimo = Math.min\n\
\n\
_método_     línea_de_Koch (longitud, cantidad_de_capas) {\n\
  si_entonces_de_lo_contrario( () => (cantidad_de_capas == 0),\n\
   () => {    avanzar(longitud);  },\n\
   () => {\n\
    // pliegue del lado izquierdo\n\
    línea_de_Koch (longitud/3, cantidad_de_capas-1);\n\
    girar_a_la_izquierda(60); \n\
    línea_de_Koch (longitud/3, cantidad_de_capas-1);\n\
    girar_a_la_derecha(120); \n\
    línea_de_Koch (longitud/3, cantidad_de_capas-1);\n\
    girar_a_la_izquierda(60); \n\
    línea_de_Koch (longitud/3, cantidad_de_capas-1);\n\
  } )\n\
}\n\
\n\
\n\
_método_     copo_de_nieve_de_Koch (longitud, cantidad_de_capas) {\n\
  ángulo (30);\n\
  cambiar_la_posición(-longitud/2,-.3 * longitud);\n\
  línea_de_Koch (longitud, cantidad_de_capas);\n\
  girar_a_la_derecha(120);\n\
  línea_de_Koch (longitud, cantidad_de_capas);\n\
  girar_a_la_derecha(120);\n\
  línea_de_Koch (longitud, cantidad_de_capas);\n\
  girar_a_la_derecha(120);\n\
}\n\
  \n\
copos_de_nieve = ()=> {\n\
  colores_de_pétalos.push(número_aleatorio(15) );\n\
  colores_de_pétalos.shift();\n\
  repetir_contando (6, ( color ) => {\n\
    cambiar_el_color_a( colores_de_pétalos [color] );\n\
    copo_de_nieve_de_Koch( longitud * (color+1) * (color+1), color)\n\
  } );\n\
}\n\
\n\
_método_     mostrar() {\n\
  estado_inicial();\n\
  longitud = .045* valor_mínimo(máximo_X(), máximo_Y())\n\
  colores_de_pétalos = [];\n\
  repetir_contando (6, ( color ) => {\n\
    colores_de_pétalos[color] = número_aleatorio(6);\n\
  } );\n\
\n\
  esconder_el_pincel();\n\
  jugar(copos_de_nieve,1)\n\
}\n\
'
cuadrados_espirales ='\
/* Aquí puedes escribir tus procesos. Por ejemplo: */\n\
\n\
cuadrado = ( lado ) => {\n\
  repetir(4, () => {\n\
    avanzar( lado );\n\
    girar_a_la_derecha(90);\n\
  });\n\
}\n\
\n\
mostrar = () => {\n\
  estado_inicial();\n\
  esconder_el_pincel();\n\
  cambiar_el_color_a( 1 );\n\
  _aquí_ lado = 100;\n\
  _aquí_ número_de_color = 0;\n\
  repetir_mientras( () => lado > 0, ()=> {\n\
    cuadrado( lado );\n\
    girar_a_la_derecha(36);\n\
    lado = lado - 10;\n\
    número_de_color = ( número_de_color + 1 ) % 16;\n\
    cambiar_el_color_a( número_de_color );\n\
  } );\n\
}\n\
'
forma_de_huevo ='\
// origen / fuente: https://pythonturtle.academy/tutorial-drawing-egg-shape-with-python-turtle/\n\
\n\
forma_de_huevo = (x, y, tamaño, pendiente) => {\n\
  levantar_el_pincel()\n\
  cambiar_la_posición(x,y)\n\
  dejar_el_pincel()\n\
  cambiar_la_dirección(270+pendiente)\n\
  cambiar_el_color_a(4) // rojo \n\
  arco_a_la_derecha(tamaño,180)\n\
  cambiar_el_color_a(1) // azul \n\
  arco_a_la_derecha(2*tamaño,45)\n\
  cambiar_el_color_a(10) // verde \n\
  arco_a_la_derecha(0.586*tamaño,90)\n\
  cambiar_el_color_a(1) // azul\n\
  arco_a_la_derecha(2*tamaño,45)\n\
}\n\
\n\
\n\
\n\
mostrar = () => {\n\
  estado_inicial();\n\
  esconder_el_pincel();\n\
  forma_de_huevo( 90, 90, 40, 0 )\n\
  forma_de_huevo( 0, 0, 90, 45 )\n\
}\n\
'
pared_de_ladrillo ='\
// pared_de_ladrillo \n\
\n\
_siempre_    altura = 15\n\
_siempre_    ancho = 2* altura \n\
\n\
// ladrillo == ఇటుక \n\
\n\
ladrillo = ( altura, ancho, color_de_ladrillo) => {\n\
  comenzar_a_dibujar_una_forma()\n\
  repetir (2, () => {\n\
    avanzar( ancho)\n\
    girar_a_la_derecha(90)\n\
    avanzar( altura)\n\
    girar_a_la_derecha(90)\n\
  })\n\
  dejar_de_dibujar_una_forma( color_de_ladrillo)\n\
  avanzar( ancho)\n\
}\n\
\n\
mostrar = () => {\n\
  estado_inicial()\n\
 \n\
  yB = máximo_Y()\n\
  xB = mínimo_X()\n\
   no_enrollar()\n\
  girar_a_la_derecha( 90)\n\
  cambiar_el_color_a( 7 ) // blanco\n\
\n\
  repetir_mientras( () => కుంచిక.స్థానము.y > mínimo_Y(), () => {\n\
    cambiar_la_posición(xB, yB)\n\
    repetir_mientras( () => కుంచిక.స్థానము.x < máximo_X(), () => {\n\
      dejar_el_pincel()\n\
      ladrillo(altura, ancho, "darkred")\n\
      levantar_el_pincel()\n\
    } )\n\
    yB = yB - altura\n\
\n\
    cambiar_la_posición(xB - ancho/2, yB)\n\
    repetir_mientras( () => కుంచిక.స్థానము.x < máximo_X(), () => {\n\
      dejar_el_pincel()\n\
      ladrillo(altura, ancho, "darkred")\n\
      levantar_el_pincel()\n\
    } )\n\
    yB = yB - altura\n\
  } )\n\
}\n\
'
pez ='\
\n\
raízCuadrada = Math.sqrt\n\
\n\
mostrar = () => {\n\
\n\
  estado_inicial();\n\
  esconder_el_pincel();\n\
\n\
pez = ( tamaño ) => {\n\
  círculo( tamaño )\n\
  girar_a_la_derecha( 90 );\n\
\n\
  levantar_el_pincel()\n\
  avanzar( tamaño );\n\
  dejar_el_pincel()\n\
\n\
  mostrar_el_pincel();\n\
\n\
\n\
  girar_a_la_izquierda( 45 );\n\
  avanzar( 2 * tamaño );\n\
  girar_a_la_derecha(90+45)\n\
\n\
  avanzar( raízCuadrada( 2 * tamaño * 2 * tamaño * 2 ) );\n\
\n\
  girar_a_la_derecha(90+45)\n\
  avanzar( 2 * tamaño );\n\
  girar_a_la_izquierda( 45 );\n\
\n\
  // esconder_el_pincel();\n\
\n\
  levantar_el_pincel()\n\
  avanzar( tamaño );\n\
  dejar_el_pincel()\n\
\n\
  girar_a_la_derecha( 90 );\n\
}\n\
\n\
color_pez = (número_de_color) =>  {\n\
  cambiar_el_color_a(número_de_color)\n\
 pez( 40 + ( número_de_color * 1 ) )\n\
} \n\
repetir_contando( 16 , (número_de_color) => color_pez( número_de_color ) )\n\
\n\
}\n\
'
reloj ='\
// గోడ reloj\n\
\n\
_en_todas_partes_   కొలత;\n\
\n\
// reloj చుట్టూ క్షణముల గీతలు గీయుటకు\n\
_método_     క్షణముల_గీతలు(x, y, వ్యాసార్థము) {\n\
   _aquí_   గీత_longitud = 7;\n\
   _aquí_   ఖాళీ = వ్యాసార్థము - గీత_longitud;\n\
   cambiar_el_color_a( 1 );\n\
   ancho(1);\n\
   repetir_contando( 60, ( కో ) => {\n\
      _aquí_ థీటా = కో * 6;\n\
      // ప్రతి  ఐదవది దళసరి గా వేయవలెను\n\
      ancho( ( ( కో % 5 ) ? 1 : 3)/130* కొలత)\n\
      levantar_el_pincel();\n\
      cambiar_la_posición(0,0);\n\
      ángulo(థీటా);\n\
      avanzar(ఖాళీ);\n\
      dejar_el_pincel();\n\
      avanzar(గీత_longitud);\n\
   });\n\
   \n\
}\n\
\n\
\n\
// గంటలు, నిమిషాలూ సూచించే అంకెలు\n\
_método_     అంకెలు(x, y, వ్యాసార్థము) {\n\
   levantar_el_pincel();\n\
   _aquí_  అక్షర_tamaño = 20/130 * కొలత\n\
   establecer_la_fuente(అక్షర_tamaño+"px sans-serif");\n\
   cambiar_el_color_a("నలుపు");\n\
   repetir_contando( 12, ( గంట ) =>{\n\
      cambiar_la_posición(x,y);\n\
      ángulo(గంట * 30);\n\
      avanzar(వ్యాసార్థము); // to center of digit\n\
      ángulo(180);\n\
      avanzar(10/130 * కొలత); // vertical correction to baseline\n\
      girar_a_la_derecha(90);\n\
      // క్రింది, ఎడమ భాగమునకు అనుప్రస్థ సరదుబాటు\n\
      avanzar( ( (గంట < 10 ) ? 6 : 10 )/130 * కొలత)\n\
      // if (గంట < 10) {\n\
      //   avanzar(6/130 * కొలత); // horizontal correction to lower left corner\n\
      // } else {\n\
      //   avanzar(10/130 * కొలత)\n\
      // }\n\
      girar_a_la_derecha(180);\n\
      escribir(గంట);\n\
   })\n\
   dejar_el_pincel();\n\
}\n\
\n\
// చేతులు గీయుటకు  \n\
_método_     చెయ్యి (థీటా, చెయ్యి_ancho, longitud, color) {\n\
   _aquí_   కూచి_తగ్గింపు = 5;\n\
   _aquí_   కూచి_తగ్గింపులు = (longitud / కూచి_తగ్గింపు);\n\
   _aquí_   ancho_సర్దుబాటు =  చెయ్యి_ancho / కూచి_తగ్గింపులు;\n\
   cambiar_la_posición(0, 0);\n\
   ángulo(థీటా);\n\
   cambiar_el_color_a(color);\n\
   // for (_en_todas_partes_   step = 0; step < longitud; step = step + కూచి_తగ్గింపు) \n\
   repetir_contando( కూచి_తగ్గింపులు, ( అడుగు) => \n\
   {\n\
      ancho( చెయ్యి_ancho ); // కుంచిక ancho\n\
      avanzar(కూచి_తగ్గింపు);\n\
      చెయ్యి_ancho =  చెయ్యి_ancho  - ancho_సర్దుబాటు;\n\
   }\n\
   );\n\
}\n\
\n\
_método_     చేతులు(గంటలు, నిమిషములు, క్షణములు) {\n\
    // క్షణముల చెయ్యి\n\
    _aquí_   క్షణముకెన్ని_డిగ్రీలు = 6;	// = 360 degrees/60 క్షణములు\n\
    చెయ్యి(క్షణములు * క్షణముకెన్ని_డిగ్రీలు, 4, 100/130 * కొలత, "red");\n\
    // నిమిషముల చెయ్యి \n\
    _aquí_   నిమిషానికెన్ని_డిగ్రీలు = 0.1;	// = 360 degrees /3600 క్షణములు /గంట\n\
    _aquí_   నిమిషములుInక్షణములు = నిమిషములు * 60 + క్షణములు;\n\
    చెయ్యి(నిమిషములుInక్షణములు * నిమిషానికెన్ని_డిగ్రీలు, 10, 100/130 * కొలత, "blue");\n\
    // గంటల చెయ్యి\n\
    _aquí_   గంటకెన్ని_డిగ్రీలు = .1/12;	// = నిమిషానికెన్ని_డిగ్రీలు / 12 గంటలు \n\
    _aquí_   గంటలుInక్షణములు = ((గంటలు % 12) * 3600) + నిమిషములుInక్షణములు;\n\
    చెయ్యి(గంటలుInక్షణములు * గంటకెన్ని_డిగ్రీలు, 10, 60/130 * కొలత, "green");\n\
}\n\
\n\
// relojను పునరావృతము చేయుటకు\n\
_método_     reloj() {\n\
   borrar();\n\
   కొలత = .9 *  Math.min( máximo_X(), máximo_Y())\n\
   అంకెలు(0, 0, 110/130 * కొలత);\n\
   cambiar_el_color_a("lightgreen");\n\
   cambiar_la_posición(0,0);\n\
   ancho(1/130* కొలత)\n\
   círculo(130/130 * కొలత );\n\
   క్షణముల_గీతలు(0, 0, 130/130 * కొలత );\n\
   _aquí_  సమయము = new Date();\n\
   చేతులు(సమయము.getHours(), సమయము.getMinutes(), సమయము.getSeconds());\n\
}\n\
\n\
_método_     mostrar() {\n\
   estado_inicial();\n\
   esconder_el_pincel();\n\
   jugar(reloj,1000); // relojను ప్రతి క్షణము పునరావృతము చేయ వలెను.\n\
}\n\
'
// End Spanish 
// Begin ಕನ್ನಡ 
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
// End ಕನ್ನಡ 
// Begin తెలుగు 
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
// End తెలుగు 
// Begin संस्कृतम् 
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
// End संस्कृतम् 
