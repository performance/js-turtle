
racine_carrée = Math.sqrt

afficher = () => {

  état_initial();
  cacher_le_pinceau();

poisson = ( taille ) => {
  cercle( taille )
  tourner_à_droite( 90 );

  lever_le_pinceau()
  avancer( taille );
  poser_le_pinceau()

  montrer_le_pinceau();


  tourner_à_gauche( 45 );
  avancer( 2 * taille );
  tourner_à_droite(90+45)

  avancer( racine_carrée( 2 * taille * 2 * taille * 2 ) );

  tourner_à_droite(90+45)
  avancer( 2 * taille );
  tourner_à_gauche( 45 );

  // cacher_le_pinceau();

  lever_le_pinceau()
  avancer( taille );
  poser_le_pinceau()

  tourner_à_droite( 90 );
}

couleur_poisson = (numéro_de_couleur) =>  {
  changer_la_couleur_à(numéro_de_couleur)
 poisson( 40 + ( numéro_de_couleur * 1 ) )
} 
répéter_en_comptant( 16 , (taille) => couleur_poisson( taille ) )

}
