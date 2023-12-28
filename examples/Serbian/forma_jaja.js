// మూలము: https://pythonturtle.academy/tutorial-drawing-egg-shape-with-python-turtle/

jaje = (x, y, veličina, nagib) => {
  podignite_četku();
  promenite_položaj(x, y);
  stavite_četku();
  promenite_smer(270 + nagib);
  promenite_boju_na(4); // crvena
  luk_udesno(veličina, 180);
  promenite_boju_na(1); // plava
  luk_udesno(2 * veličina, 45);
  promenite_boju_na(10); // zelena);
  luk_udesno(0.586 * veličina, 90);
  promenite_boju_na(1); // plava
  luk_udesno(2 * veličina, 45);
};

prikazati = () => {
  početno_stanje();
  sakrij_četku();
  jaje(90, 90, 40, 0);
  jaje(0, 0, 90, 45);
};
