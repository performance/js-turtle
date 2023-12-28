
kvadratni_koren = Math.sqrt

prikazati = () => {
  početno_stanje();
  sakrij_četku();

riba = ( వ ) => {
  krug( వ )
  okrenuti_se_udesno( 90 );

  podignite_četku()
  napredovati( వ );
  stavite_četku()

  pokažite_četku();


  okrenuti_se_ulijevo( 45 );
  napredovati( 2 * వ );
  okrenuti_se_udesno(90+45)

  napredovati( kvadratni_koren( 2 * వ * 2 * వ * 2 ) );

  okrenuti_se_udesno(90+45)
  napredovati( 2 * వ );
  okrenuti_se_ulijevo( 45 );

  // sakrij_četku();

  podignite_četku()
  napredovati( వ );
  stavite_četku()

  okrenuti_se_udesno( 90 );
}

boja_riba = (broj_boje) =>  {
  promenite_boju_na(broj_boje)
 riba( 40 + ( broj_boje * 1 ) )
} 
ponavljajte_brojanje( 16 , (క) => boja_riba( క ) )

}
