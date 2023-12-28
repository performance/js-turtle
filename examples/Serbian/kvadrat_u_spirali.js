/* Ovde možete napisati svoje procese. Na primer: */

kvadrat = ( stranica ) => {
  ponavljajte(4, () => {
    napredovati( stranica );
    okrenuti_se_udesno(90);
  });
}

prikazati = () => {
  početno_stanje();
  sakrij_četku();
  promenite_boju_na( 1 ); // plava
  _ovde_ stranica = 100;
  _ovde_ broj_boje = 0;
  ponavljajte_dok( () => stranica > 0, ()=> {
    kvadrat( stranica );
    okrenuti_se_udesno(36);
    stranica = stranica - 10;
    broj_boje = ( broj_boje + 1 ) % 16;
    promenite_boju_na( broj_boje );
  } );
}
