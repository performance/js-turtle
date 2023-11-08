/* Ici vous pouvez écrire vos processus. Par exemple: */

carré = ( côté ) => {
  répéter(4, () => {
    avancer( côté );
    tourner_à_droite(90);
  });
}

afficher = () => {
  état_initial();
  cacher_le_pinceau();
  changer_la_couleur_à( 1 ); // bleu
  _ici_ côté = 100;
  _ici_ numéro_de_couleur = 0;
  répéter_tant_que( () => côté > 0, ()=> {
    carré( côté );
    tourner_à_droite(36);
    côté = côté - 10;
    numéro_de_couleur = ( numéro_de_couleur + 1 ) % 16;
    changer_la_couleur_à( numéro_de_couleur );
  } );
}
