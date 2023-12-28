
prikazati = () => {
  početno_stanje();
    sakrij_četku();
  ponavljajte(6, () => {
    promenite_boju_na( 0 );
    okrenuti_se_udesno(180);
    _ovde_ stranica = 100;
    _ovde_ broj_boje = 0;
    ponavljajte_dok( () => stranica > 0, ()=> {
  
      luk_udesno(stranica, 30 );
  
      okrenuti_se_udesno(30);
      stranica = stranica - 10;
      broj_boje = ( broj_boje  + 15 ) % 16;
      promenite_boju_na( broj_boje );
    } );
  });

  okrenuti_se_udesno(310);
  podignite_četku();
  napredovati(60 );
  stavite_četku()
  promenite_boju_na( 13 );
  pun_krug(5 );
  krug(10);
}
