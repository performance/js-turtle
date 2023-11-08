// గోడ horloge

_partout_   కొలత;

// horloge చుట్టూ క్షణముల గీతలు గీయుటకు
_méthode_     క్షణముల_గీతలు(x, y, వ్యాసార్థము) {
   _ici_   గీత_longueur = 7;
   _ici_   ఖాళీ = వ్యాసార్థము - గీత_longueur;
   changer_la_couleur_à( bleu );
   largeur(1);
   répéter_en_comptant( 60, ( కో ) => {
      _ici_ థీటా = కో * 6;
      // ప్రతి  ఐదవది దళసరి గా వేయవలెను
      largeur( ( ( కో % 5 ) ? 1 : 3)/130* కొలత)
      lever_le_pinceau();
      changer_la_position(0,0);
      angle(థీటా);
      avancer(ఖాళీ);
      poser_le_pinceau();
      avancer(గీత_longueur);
   });
   
}


// గంటలు, నిమిషాలూ సూచించే అంకెలు
_méthode_     అంకెలు(x, y, వ్యాసార్థము) {
   lever_le_pinceau();
   _ici_  అక్షర_taille = 20/130 * కొలత
   définir_la_police(అక్షర_taille+"px sans-serif");
   changer_la_couleur_à("నలుపు");
   répéter_en_comptant( 12, ( గంట ) =>{
      changer_la_position(x,y);
      angle(గంట * 30);
      avancer(వ్యాసార్థము); // to center of digit
      angle(180);
      avancer(10/130 * కొలత); // vertical correction to baseline
      tourner_à_droite(90);
      // క్రింది, ఎడమ భాగమునకు అనుప్రస్థ సరదుబాటు
      avancer( ( (గంట < 10 ) ? 6 : 10 )/130 * కొలత)
      // if (గంట < 10) {
      //   avancer(6/130 * కొలత); // horizontal correction to lower left corner
      // } else {
      //   avancer(10/130 * కొలత)
      // }
      tourner_à_droite(180);
      écrire(గంట);
   })
   poser_le_pinceau();
}

// చేతులు గీయుటకు  
_méthode_     చెయ్యి (థీటా, చెయ్యి_largeur, longueur, couleur) {
   _ici_   కూచి_తగ్గింపు = 5;
   _ici_   కూచి_తగ్గింపులు = (longueur / కూచి_తగ్గింపు);
   _ici_   largeur_సర్దుబాటు =  చెయ్యి_largeur / కూచి_తగ్గింపులు;
   changer_la_position(0, 0);
   angle(థీటా);
   changer_la_couleur_à(couleur);
   // for (_partout_   step = 0; step < longueur; step = step + కూచి_తగ్గింపు) 
   répéter_en_comptant( కూచి_తగ్గింపులు, ( అడుగు) => 
   {
      largeur( చెయ్యి_largeur ); // కుంచిక largeur
      avancer(కూచి_తగ్గింపు);
      చెయ్యి_largeur =  చెయ్యి_largeur  - largeur_సర్దుబాటు;
   }
   );
}

_méthode_     చేతులు(గంటలు, నిమిషములు, క్షణములు) {
    // క్షణముల చెయ్యి
    _ici_   క్షణముకెన్ని_డిగ్రీలు = 6;	// = 360 degrees/60 క్షణములు
    చెయ్యి(క్షణములు * క్షణముకెన్ని_డిగ్రీలు, 4, 100/130 * కొలత, "red");
    // నిమిషముల చెయ్యి 
    _ici_   నిమిషానికెన్ని_డిగ్రీలు = 0.1;	// = 360 degrees /3600 క్షణములు /గంట
    _ici_   నిమిషములుInక్షణములు = నిమిషములు * 60 + క్షణములు;
    చెయ్యి(నిమిషములుInక్షణములు * నిమిషానికెన్ని_డిగ్రీలు, 10, 100/130 * కొలత, "blue");
    // గంటల చెయ్యి
    _ici_   గంటకెన్ని_డిగ్రీలు = .1/12;	// = నిమిషానికెన్ని_డిగ్రీలు / 12 గంటలు 
    _ici_   గంటలుInక్షణములు = ((గంటలు % 12) * 3600) + నిమిషములుInక్షణములు;
    చెయ్యి(గంటలుInక్షణములు * గంటకెన్ని_డిగ్రీలు, 10, 60/130 * కొలత, "green");
}

// horlogeను పునరావృతము చేయుటకు
_méthode_     horloge() {
   effacer();
   కొలత = .9 *  Math.min( maximum_X(), maximum_Y())
   అంకెలు(0, 0, 110/130 * కొలత);
   changer_la_couleur_à("lightgreen");
   changer_la_position(0,0);
   largeur(1/130* కొలత)
   cercle(130/130 * కొలత );
   క్షణముల_గీతలు(0, 0, 130/130 * కొలత );
   _ici_  సమయము = new Date();
   చేతులు(సమయము.getHours(), సమయము.getMinutes(), సమయము.getSeconds());
}

_méthode_     afficher() {
   état_initial();
   cacher_le_pinceau();
   jouer(horloge,1000); // horlogeను ప్రతి క్షణము పునరావృతము చేయ వలెను.
}
