
afficher = () => {
  état_initial();
    cacher_le_pinceau();
  répéter(6, () => {
    changer_la_couleur_à( 0 );
    tourner_à_droite(180);
    _ici_ côté = 100;
    _ici_ numéro_de_couleur = 0;
    répéter_tant_que( () => côté > 0, ()=> {
  
      arc_à_droite(côté, 30 );
  
      tourner_à_droite(30);
      côté = côté - 10;
      numéro_de_couleur = ( numéro_de_couleur  + 15 ) % 16;
      changer_la_couleur_à( numéro_de_couleur );
    } );
  });

  tourner_à_droite(310);
  lever_le_pinceau();
  avancer(60 );
  poser_le_pinceau()
  changer_la_couleur_à( 13 );
  cercle_plein(5 );
  cercle(10);
}
