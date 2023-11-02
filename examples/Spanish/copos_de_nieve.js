

valor_mínimo = Math.min

_método_     línea_de_Koch (longitud, cantidad_de_capas) {
  si_entonces_de_lo_contrario( () => (cantidad_de_capas == 0),
   () => {    avanzar(longitud);  },
   () => {
    // pliegue del lado izquierdo
    línea_de_Koch (longitud/3, cantidad_de_capas-1);
    girar_a_la_izquierda(60); 
    línea_de_Koch (longitud/3, cantidad_de_capas-1);
    girar_a_la_derecha(120); 
    línea_de_Koch (longitud/3, cantidad_de_capas-1);
    girar_a_la_izquierda(60); 
    línea_de_Koch (longitud/3, cantidad_de_capas-1);
  } )
}


_método_     copo_de_nieve_de_Koch (longitud, cantidad_de_capas) {
  ángulo (30);
  cambiar_la_posición(-longitud/2,-.3 * longitud);
  línea_de_Koch (longitud, cantidad_de_capas);
  girar_a_la_derecha(120);
  línea_de_Koch (longitud, cantidad_de_capas);
  girar_a_la_derecha(120);
  línea_de_Koch (longitud, cantidad_de_capas);
  girar_a_la_derecha(120);
}
  
copos_de_nieve = ()=> {
  colores_de_pétalos.push(número_aleatorio(15) );
  colores_de_pétalos.shift();
  repetir_contando (6, ( color ) => {
    cambiar_el_color_a( colores_de_pétalos [color] );
    copo_de_nieve_de_Koch( longitud * (color+1) * (color+1), color)
  } );
}

_método_     mostrar() {
  estado_inicial();
  longitud = .045* valor_mínimo(máximo_X(), máximo_Y())
  colores_de_pétalos = [];
  repetir_contando (6, ( color ) => {
    colores_de_pétalos[color] = número_aleatorio(6);
  } );

  esconder_el_pincel();
  jugar(copos_de_nieve,1)
}
