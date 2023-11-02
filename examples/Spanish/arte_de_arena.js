// arte_de_arena
mostrar = () => {
  estado_inicial();
    esconder_el_pincel();
  repetir(6, () => {
    cambiar_el_color_a( 0 );
    girar_a_la_derecha(180);
    _aquí_ lado = 100;
    _aquí_ número_de_color = 0;
    repetir_mientras( () => lado > 0, ()=> {
  
      arco_a_la_derecha(lado, 30 );
  
      girar_a_la_derecha(30);
      lado = lado - 10;
      número_de_color = ( número_de_color  + 15 ) % 16;
      cambiar_el_color_a( número_de_color );
    } );
  });

  girar_a_la_derecha(310);
  levantar_el_pincel();
  avanzar(60 );
  dejar_el_pincel()
  cambiar_el_color_a( 13 );
  círculo_lleno(5 );
  círculo(10);
}
