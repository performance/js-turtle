// briques ప్రస్తారము 

_toujours_    hauteur = 15
_toujours_    largeur = 2* hauteur 

// briques == ఇటుక 

briques = ( hauteur, largeur, briques_couleur) => {
  commencer_à_dessiner_une_forme()
  répéter (2, () => {
    avancer( largeur)
    tourner_à_droite(90)
    avancer( hauteur)
    tourner_à_droite(90)
  })
  arrêter_de_dessiner_une_forme( briques_couleur)
  avancer( largeur)
}

afficher = () => {
  état_initial()
 
  yB = maximum_Y()
  xB = minimum_X()
   ne_pas_enrouler()
  tourner_à_droite( 90)
  changer_la_couleur_à( blanc )

  répéter_tant_que( () => కుంచిక.స్థానము.y > minimum_Y(), () => {
    changer_la_position(xB, yB)
    répéter_tant_que( () => కుంచిక.స్థానము.x < maximum_X(), () => {
      poser_le_pinceau()
      briques(hauteur, largeur, "darkred")
      lever_le_pinceau()
    } )
    yB = yB - hauteur

    changer_la_position(xB - largeur/2, yB)
    répéter_tant_que( () => కుంచిక.స్థానము.x < maximum_X(), () => {
      poser_le_pinceau()
      briques(hauteur, largeur, "darkred")
      lever_le_pinceau()
    } )
    yB = yB - hauteur
  } )
}
