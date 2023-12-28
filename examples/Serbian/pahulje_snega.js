

minimalna_vrednost = Math.min

_metoda_     linija_Koch (dužina, dubina) {
  ako_onda_inače( () => (dubina == 0),
   () => {    napredovati(dužina);  },
   () => {
    //  ఎడమ వైపు బుడిప 
    linija_Koch (dužina/3, dubina-1);
    okrenuti_se_ulijevo(60); 
    linija_Koch (dužina/3, dubina-1);
    okrenuti_se_udesno(120); 
    linija_Koch (dužina/3, dubina-1);
    okrenuti_se_ulijevo(60); 
    linija_Koch (dužina/3, dubina-1);
  } )
}


_metoda_     pahulja_snega_Koch (dužina, dubina) {
  ugao (30);
  promenite_položaj(-dužina/2,-.3 * dužina);
  linija_Koch (dužina, dubina);
  okrenuti_se_udesno(120);
  linija_Koch (dužina, dubina);
  okrenuti_se_udesno(120);
  linija_Koch (dužina, dubina);
  okrenuti_se_udesno(120);
}
  
pahulje_snega = ()=> {
  boje_latica.push(nasumični_broj(15) );
  boje_latica.shift();
  ponavljajte_brojanje (6, ( క ) => {
    promenite_boju_na( boje_latica [క] );
    pahulja_snega_Koch( dužina * (క+1) * (క+1), క)
  } );
}

_metoda_     prikazati() {
  početno_stanje();
  dužina = .045* minimalna_vrednost(maksimalni_X(), maksimalni_Y())
  boje_latica = [];
  ponavljajte_brojanje (6, ( క ) => {
    boje_latica[క] = nasumični_broj(6);
  } );

  sakrij_četku();
  igrati(pahulje_snega,1)
}
