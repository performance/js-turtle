

valeur_minimale = Math.min

_méthode_     ligne_de_Koch (longueur, profondeur) {
  si_alors_sinon( () => (profondeur == 0),
    () => {    avancer(longueur);  },
    () => {
    // La bosse du côté gauche
    ligne_de_Koch (longueur/3, profondeur-1);
    tourner_à_gauche(60); 
    ligne_de_Koch (longueur/3, profondeur-1);
    tourner_à_droite(120); 
    ligne_de_Koch (longueur/3, profondeur-1);
    tourner_à_gauche(60); 
    ligne_de_Koch (longueur/3, profondeur-1);
  } )
}


_méthode_     flocon_de_neige_de_Koch (longueur, profondeur) {
  angle (30);
  changer_la_position(-longueur/2,-.3 * longueur);
  ligne_de_Koch (longueur, profondeur);
  tourner_à_droite(120);
  ligne_de_Koch (longueur, profondeur);
  tourner_à_droite(120);
  ligne_de_Koch (longueur, profondeur);
  tourner_à_droite(120);
}
  
flocons_de_neige = ()=> {
  couleurs_de_pétales.push(nombre_aléatoire(15) );
  couleurs_de_pétales.shift();
  répéter_en_comptant (6, ( క ) => {
    changer_la_couleur_à( couleurs_de_pétales [క] );
    flocon_de_neige_de_Koch( longueur * (క+1) * (క+1), క)
  } );
}

_méthode_     afficher() {
  état_initial();
  longueur = .045* valeur_minimale(maximum_X(), maximum_Y())
  couleurs_de_pétales = [];
  répéter_en_comptant (6, ( క ) => {
    couleurs_de_pétales[క] = nombre_aléatoire(6);
  } );

  cacher_le_pinceau();
  jouer(flocons_de_neige,1)
}
