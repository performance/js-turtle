// గోడ reloj

_en_todas_partes_   కొలత;

// reloj చుట్టూ క్షణముల గీతలు గీయుటకు
_método_     క్షణముల_గీతలు(x, y, వ్యాసార్థము) {
   _aquí_   గీత_longitud = 7;
   _aquí_   ఖాళీ = వ్యాసార్థము - గీత_longitud;
   cambiar_el_color_a( 1 );
   ancho(1);
   repetir_contando( 60, ( కో ) => {
      _aquí_ థీటా = కో * 6;
      // ప్రతి  ఐదవది దళసరి గా వేయవలెను
      ancho( ( ( కో % 5 ) ? 1 : 3)/130* కొలత)
      levantar_el_pincel();
      cambiar_la_posición(0,0);
      ángulo(థీటా);
      avanzar(ఖాళీ);
      dejar_el_pincel();
      avanzar(గీత_longitud);
   });
   
}


// గంటలు, నిమిషాలూ సూచించే అంకెలు
_método_     అంకెలు(x, y, వ్యాసార్థము) {
   levantar_el_pincel();
   _aquí_  అక్షర_tamaño = 20/130 * కొలత
   establecer_la_fuente(అక్షర_tamaño+"px sans-serif");
   cambiar_el_color_a("నలుపు");
   repetir_contando( 12, ( గంట ) =>{
      cambiar_la_posición(x,y);
      ángulo(గంట * 30);
      avanzar(వ్యాసార్థము); // to center of digit
      ángulo(180);
      avanzar(10/130 * కొలత); // vertical correction to baseline
      girar_a_la_derecha(90);
      // క్రింది, ఎడమ భాగమునకు అనుప్రస్థ సరదుబాటు
      avanzar( ( (గంట < 10 ) ? 6 : 10 )/130 * కొలత)
      // if (గంట < 10) {
      //   avanzar(6/130 * కొలత); // horizontal correction to lower left corner
      // } else {
      //   avanzar(10/130 * కొలత)
      // }
      girar_a_la_derecha(180);
      escribir(గంట);
   })
   dejar_el_pincel();
}

// చేతులు గీయుటకు  
_método_     చెయ్యి (థీటా, చెయ్యి_ancho, longitud, color) {
   _aquí_   కూచి_తగ్గింపు = 5;
   _aquí_   కూచి_తగ్గింపులు = (longitud / కూచి_తగ్గింపు);
   _aquí_   ancho_సర్దుబాటు =  చెయ్యి_ancho / కూచి_తగ్గింపులు;
   cambiar_la_posición(0, 0);
   ángulo(థీటా);
   cambiar_el_color_a(color);
   // for (_en_todas_partes_   step = 0; step < longitud; step = step + కూచి_తగ్గింపు) 
   repetir_contando( కూచి_తగ్గింపులు, ( అడుగు) => 
   {
      ancho( చెయ్యి_ancho ); // కుంచిక ancho
      avanzar(కూచి_తగ్గింపు);
      చెయ్యి_ancho =  చెయ్యి_ancho  - ancho_సర్దుబాటు;
   }
   );
}

_método_     చేతులు(గంటలు, నిమిషములు, క్షణములు) {
    // క్షణముల చెయ్యి
    _aquí_   క్షణముకెన్ని_డిగ్రీలు = 6;	// = 360 degrees/60 క్షణములు
    చెయ్యి(క్షణములు * క్షణముకెన్ని_డిగ్రీలు, 4, 100/130 * కొలత, "red");
    // నిమిషముల చెయ్యి 
    _aquí_   నిమిషానికెన్ని_డిగ్రీలు = 0.1;	// = 360 degrees /3600 క్షణములు /గంట
    _aquí_   నిమిషములుInక్షణములు = నిమిషములు * 60 + క్షణములు;
    చెయ్యి(నిమిషములుInక్షణములు * నిమిషానికెన్ని_డిగ్రీలు, 10, 100/130 * కొలత, "blue");
    // గంటల చెయ్యి
    _aquí_   గంటకెన్ని_డిగ్రీలు = .1/12;	// = నిమిషానికెన్ని_డిగ్రీలు / 12 గంటలు 
    _aquí_   గంటలుInక్షణములు = ((గంటలు % 12) * 3600) + నిమిషములుInక్షణములు;
    చెయ్యి(గంటలుInక్షణములు * గంటకెన్ని_డిగ్రీలు, 10, 60/130 * కొలత, "green");
}

// relojను పునరావృతము చేయుటకు
_método_     reloj() {
   borrar();
   కొలత = .9 *  Math.min( máximo_X(), máximo_Y())
   అంకెలు(0, 0, 110/130 * కొలత);
   cambiar_el_color_a("lightgreen");
   cambiar_la_posición(0,0);
   ancho(1/130* కొలత)
   círculo(130/130 * కొలత );
   క్షణముల_గీతలు(0, 0, 130/130 * కొలత );
   _aquí_  సమయము = new Date();
   చేతులు(సమయము.getHours(), సమయము.getMinutes(), సమయము.getSeconds());
}

_método_     mostrar() {
   estado_inicial();
   esconder_el_pincel();
   jugar(reloj,1000); // relojను ప్రతి క్షణము పునరావృతము చేయ వలెను.
}
