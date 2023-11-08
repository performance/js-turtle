// మూలము: https://pythonturtle.academy/tutorial-drawing-egg-shape-with-python-turtle/

forme_d_œuf = (x, y, taille, pente) => {
  lever_le_pinceau()
  changer_la_position(x,y)
  poser_le_pinceau()
  changer_la_direction(270+pente)
  changer_la_couleur_à(rouge)
  arc_à_droite(taille,180)
  changer_la_couleur_à(bleu)
  arc_à_droite(2*taille,45)
  changer_la_couleur_à("vert")
  arc_à_droite(0.586*taille,90)
  changer_la_couleur_à(bleu)
  arc_à_droite(2*taille,45)
}

afficher = () => {
  état_initial();
  cacher_le_pinceau();
  forme_d_œuf( 90, 90, 40, 0 )
  forme_d_œuf( 0, 0, 90, 45 )
}
