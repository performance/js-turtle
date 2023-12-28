// cigle ప్రస్తారము 

_uvek_    visina = 15
_uvek_    širina = 2* visina 

// cigle == ఇటుక 

cigle = ( visina, širina, boja_cigle) => {
  početi_da_crtate_oblik()
  ponavljajte (2, () => {
    napredovati( širina)
    okrenuti_se_udesno(90)
    napredovati( visina)
    okrenuti_se_udesno(90)
  })
  završite_sa_crtanjem_oblika( boja_cigle)
  napredovati( širina)
}

prikazati = () => {
  početno_stanje()
 
  yB = maksimalni_Y()
  xB = minimalni_X()
   ne_uvijati()
  okrenuti_se_udesno( 90)
  promenite_boju_na( 7 ); // bela

  ponavljajte_dok( () => కుంచిక.స్థానము.y > minimalni_Y(), () => {
    promenite_položaj(xB, yB)
    ponavljajte_dok( () => కుంచిక.స్థానము.x < maksimalni_X(), () => {
      stavite_četku()
      cigle(visina, širina, "darkred")
      podignite_četku()
    } )
    yB = yB - visina

    promenite_položaj(xB - širina/2, yB)
    ponavljajte_dok( () => కుంచిక.స్థానము.x < maksimalni_X(), () => {
      stavite_četku()
      cigle(visina, širina, "darkred")
      podignite_četku()
    } )
    yB = yB - visina
  } )
}
