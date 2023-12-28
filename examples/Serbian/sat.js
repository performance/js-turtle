// గోడ sat

_svuda_   కొలత;

// sat చుట్టూ క్షణముల గీతలు గీయుటకు
_metoda_     క్షణముల_గీతలు(x, y, వ్యాసార్థము) {
   _ovde_   గీత_dužina = 7;
   _ovde_   ఖాళీ = వ్యాసార్థము - గీత_dužina;
   promenite_boju_na( 1 ); // plava
   širina(1);
   ponavljajte_brojanje( 60, ( కో ) => {
      _ovde_ థీటా = కో * 6;
      // ప్రతి  ఐదవది దళసరి గా వేయవలెను
      širina( ( ( కో % 5 ) ? 1 : 3)/130* కొలత)
      podignite_četku();
      promenite_položaj(0,0);
      ugao(థీటా);
      napredovati(ఖాళీ);
      stavite_četku();
      napredovati(గీత_dužina);
   });
   
}


// గంటలు, నిమిషాలూ సూచించే అంకెలు
_metoda_     అంకెలు(x, y, వ్యాసార్థము) {
   podignite_četku();
   _ovde_  అక్షర_veličina = 20/130 * కొలత
   postavite_font(అక్షర_veličina+"px sans-serif");
   promenite_boju_na("నలుపు");
   ponavljajte_brojanje( 12, ( గంట ) =>{
      promenite_položaj(x,y);
      ugao(గంట * 30);
      napredovati(వ్యాసార్థము); // to center of digit
      ugao(180);
      napredovati(10/130 * కొలత); // vertical correction to baseline
      okrenuti_se_udesno(90);
      // క్రింది, ఎడమ భాగమునకు అనుప్రస్థ సరదుబాటు
      napredovati( ( (గంట < 10 ) ? 6 : 10 )/130 * కొలత)
      // if (గంట < 10) {
      //   napredovati(6/130 * కొలత); // horizontal correction to lower left corner
      // } else {
      //   napredovati(10/130 * కొలత)
      // }
      okrenuti_se_udesno(180);
      napiši(గంట);
   })
   stavite_četku();
}

// చేతులు గీయుటకు  
_metoda_     చెయ్యి (థీటా, చెయ్యి_širina, dužina, boja) {
   _ovde_   కూచి_తగ్గింపు = 5;
   _ovde_   కూచి_తగ్గింపులు = (dužina / కూచి_తగ్గింపు);
   _ovde_   širina_సర్దుబాటు =  చెయ్యి_širina / కూచి_తగ్గింపులు;
   promenite_položaj(0, 0);
   ugao(థీటా);
   promenite_boju_na(boja);
   // for (_svuda_   step = 0; step < dužina; step = step + కూచి_తగ్గింపు) 
   ponavljajte_brojanje( కూచి_తగ్గింపులు, ( అడుగు) => 
   {
      širina( చెయ్యి_širina ); // కుంచిక širina
      napredovati(కూచి_తగ్గింపు);
      చెయ్యి_širina =  చెయ్యి_širina  - širina_సర్దుబాటు;
   }
   );
}

_metoda_     చేతులు(గంటలు, నిమిషములు, క్షణములు) {
    // క్షణముల చెయ్యి
    _ovde_   క్షణముకెన్ని_డిగ్రీలు = 6;	// = 360 degrees/60 క్షణములు
    చెయ్యి(క్షణములు * క్షణముకెన్ని_డిగ్రీలు, 4, 100/130 * కొలత, "red");
    // నిమిషముల చెయ్యి 
    _ovde_   నిమిషానికెన్ని_డిగ్రీలు = 0.1;	// = 360 degrees /3600 క్షణములు /గంట
    _ovde_   నిమిషములుInక్షణములు = నిమిషములు * 60 + క్షణములు;
    చెయ్యి(నిమిషములుInక్షణములు * నిమిషానికెన్ని_డిగ్రీలు, 10, 100/130 * కొలత, "blue");
    // గంటల చెయ్యి
    _ovde_   గంటకెన్ని_డిగ్రీలు = .1/12;	// = నిమిషానికెన్ని_డిగ్రీలు / 12 గంటలు 
    _ovde_   గంటలుInక్షణములు = ((గంటలు % 12) * 3600) + నిమిషములుInక్షణములు;
    చెయ్యి(గంటలుInక్షణములు * గంటకెన్ని_డిగ్రీలు, 10, 60/130 * కొలత, "green");
}

// satను పునరావృతము చేయుటకు
_metoda_     sat() {
   izbrisati();
   కొలత = .9 *  Math.min( maksimalni_X(), maksimalni_Y())
   అంకెలు(0, 0, 110/130 * కొలత);
   promenite_boju_na("lightgreen");
   promenite_položaj(0,0);
   širina(1/130* కొలత)
   krug(130/130 * కొలత );
   క్షణముల_గీతలు(0, 0, 130/130 * కొలత );
   _ovde_  సమయము = new Date();
   చేతులు(సమయము.getHours(), సమయము.getMinutes(), సమయము.getSeconds());
}

_metoda_     prikazati() {
   početno_stanje();
   sakrij_četku();
   igrati(sat,1000); // satను ప్రతి క్షణము పునరావృతము చేయ వలెను.
}
