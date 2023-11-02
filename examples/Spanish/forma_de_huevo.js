// origen / fuente: https://pythonturtle.academy/tutorial-drawing-egg-shape-with-python-turtle/

forma_de_huevo = (x, y, tamaño, pendiente) => {
  levantar_el_pincel()
  cambiar_la_posición(x,y)
  dejar_el_pincel()
  cambiar_la_dirección(270+pendiente)
  cambiar_el_color_a(4) // rojo 
  arco_a_la_derecha(tamaño,180)
  cambiar_el_color_a(1) // azul 
  arco_a_la_derecha(2*tamaño,45)
  cambiar_el_color_a(10) // verde 
  arco_a_la_derecha(0.586*tamaño,90)
  cambiar_el_color_a(1) // azul
  arco_a_la_derecha(2*tamaño,45)
}



mostrar = () => {
  estado_inicial();
  esconder_el_pincel();
  forma_de_huevo( 90, 90, 40, 0 )
  forma_de_huevo( 0, 0, 90, 45 )
}
