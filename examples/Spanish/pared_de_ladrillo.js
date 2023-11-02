// pared_de_ladrillo 

_siempre_    altura = 15
_siempre_    ancho = 2* altura 

// ladrillo == ఇటుక 

ladrillo = ( altura, ancho, color_de_ladrillo) => {
  comenzar_a_dibujar_una_forma()
  repetir (2, () => {
    avanzar( ancho)
    girar_a_la_derecha(90)
    avanzar( altura)
    girar_a_la_derecha(90)
  })
  dejar_de_dibujar_una_forma( color_de_ladrillo)
  avanzar( ancho)
}

mostrar = () => {
  estado_inicial()
 
  yB = máximo_Y()
  xB = mínimo_X()
   no_enrollar()
  girar_a_la_derecha( 90)
  cambiar_el_color_a( 7 ) // blanco

  repetir_mientras( () => కుంచిక.స్థానము.y > mínimo_Y(), () => {
    cambiar_la_posición(xB, yB)
    repetir_mientras( () => కుంచిక.స్థానము.x < máximo_X(), () => {
      dejar_el_pincel()
      ladrillo(altura, ancho, "darkred")
      levantar_el_pincel()
    } )
    yB = yB - altura

    cambiar_la_posición(xB - ancho/2, yB)
    repetir_mientras( () => కుంచిక.స్థానము.x < máximo_X(), () => {
      dejar_el_pincel()
      ladrillo(altura, ancho, "darkred")
      levantar_el_pincel()
    } )
    yB = yB - altura
  } )
}
