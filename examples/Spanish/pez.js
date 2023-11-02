
raízCuadrada = Math.sqrt

mostrar = () => {

  estado_inicial();
  esconder_el_pincel();

pez = ( tamaño ) => {
  círculo( tamaño )
  girar_a_la_derecha( 90 );

  levantar_el_pincel()
  avanzar( tamaño );
  dejar_el_pincel()

  mostrar_el_pincel();


  girar_a_la_izquierda( 45 );
  avanzar( 2 * tamaño );
  girar_a_la_derecha(90+45)

  avanzar( raízCuadrada( 2 * tamaño * 2 * tamaño * 2 ) );

  girar_a_la_derecha(90+45)
  avanzar( 2 * tamaño );
  girar_a_la_izquierda( 45 );

  // esconder_el_pincel();

  levantar_el_pincel()
  avanzar( tamaño );
  dejar_el_pincel()

  girar_a_la_derecha( 90 );
}

color_pez = (número_de_color) =>  {
  cambiar_el_color_a(número_de_color)
 pez( 40 + ( número_de_color * 1 ) )
} 
repetir_contando( 16 , (número_de_color) => color_pez( número_de_color ) )

}
