/* Aquí puedes escribir tus procesos. Por ejemplo: */

cuadrado = ( lado ) => {
  repetir(4, () => {
    avanzar( lado );
    girar_a_la_derecha(90);
  });
}

mostrar = () => {
  estado_inicial();
  esconder_el_pincel();
  cambiar_el_color_a( 1 );
  _aquí_ lado = 100;
  _aquí_ número_de_color = 0;
  repetir_mientras( () => lado > 0, ()=> {
    cuadrado( lado );
    girar_a_la_derecha(36);
    lado = lado - 10;
    número_de_color = ( número_de_color + 1 ) % 16;
    cambiar_el_color_a( número_de_color );
  } );
}
