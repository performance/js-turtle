// గోడ 時計

_いたるところ_   కొలత;

// 時計 చుట్టూ క్షణముల గీతలు గీయుటకు
_ほうほう_     క్షణముల_గీతలు(x, y, వ్యాసార్థము) {
   _あちら_   గీత_長さ = 7;
   _あちら_   ఖాళీ = వ్యాసార్థము - గీత_長さ;
   いろをかえる( 1 );
   はば(1);
   かぞえながらくりかえす( 60, ( కో ) => {
      _あちら_ థీటా = కో * 6;
      // ప్రతి  ఐదవది దళసరి గా వేయవలెను
      はば( ( ( కో % 5 ) ? 1 : 3)/130* కొలత)
      ふでをあげる();
      いちをうつる(0,0);
      かくど(థీటా);
      すすむ(ఖాళీ);
      ふをおろす();
      すすむ(గీత_長さ);
   });
   
}


// గంటలు, నిమిషాలూ సూచించే అంకెలు
_ほうほう_     అంకెలు(x, y, వ్యాసార్థము) {
   ふでをあげる();
   _あちら_  అక్షర_おおきさ = 20/130 * కొలత
   フォントをせっていする(అక్షర_おおきさ+"px sans-serif");
   いろをかえる("నలుపు");
   かぞえながらくりかえす( 12, ( గంట ) =>{
      いちをうつる(x,y);
      かくど(గంట * 30);
      すすむ(వ్యాసార్థము); // to center of digit
      かくど(180);
      すすむ(10/130 * కొలత); // vertical correction to baseline
      みぎにまがる(90);
      // క్రింది, ఎడమ భాగమునకు అనుప్రస్థ సరదుబాటు
      すすむ( ( (గంట < 10 ) ? 6 : 10 )/130 * కొలత)
      // if (గంట < 10) {
      //   すすむ(6/130 * కొలత); // horizontal correction to lower left corner
      // } else {
      //   すすむ(10/130 * కొలత)
      // }
      みぎにまがる(180);
      かく(గంట);
   })
   ふをおろす();
}

// చేతులు గీయుటకు  
_ほうほう_     చెయ్యి (థీటా, చెయ్యి_はば, 長さ, రంగు) {
   _あちら_   కూచి_తగ్గింపు = 5;
   _あちら_   కూచి_తగ్గింపులు = (長さ / కూచి_తగ్గింపు);
   _あちら_   はば_సర్దుబాటు =  చెయ్యి_はば / కూచి_తగ్గింపులు;
   いちをうつる(0, 0);
   かくど(థీటా);
   いろをかえる(రంగు);
   // for (_いたるところ_   step = 0; step < 長さ; step = step + కూచి_తగ్గింపు) 
   かぞえながらくりかえす( కూచి_తగ్గింపులు, ( అడుగు) => 
   {
      はば( చెయ్యి_はば ); // కుంచిక はば
      すすむ(కూచి_తగ్గింపు);
      చెయ్యి_はば =  చెయ్యి_はば  - はば_సర్దుబాటు;
   }
   );
}

_ほうほう_     చేతులు(గంటలు, నిమిషములు, క్షణములు) {
    // క్షణముల చెయ్యి
    _あちら_   క్షణముకెన్ని_డిగ్రీలు = 6;	// = 360 degrees/60 క్షణములు
    చెయ్యి(క్షణములు * క్షణముకెన్ని_డిగ్రీలు, 4, 100/130 * కొలత, "red");
    // నిమిషముల చెయ్యి 
    _あちら_   నిమిషానికెన్ని_డిగ్రీలు = 0.1;	// = 360 degrees /3600 క్షణములు /గంట
    _あちら_   నిమిషములుInక్షణములు = నిమిషములు * 60 + క్షణములు;
    చెయ్యి(నిమిషములుInక్షణములు * నిమిషానికెన్ని_డిగ్రీలు, 10, 100/130 * కొలత, "blue");
    // గంటల చెయ్యి
    _あちら_   గంటకెన్ని_డిగ్రీలు = .1/12;	// = నిమిషానికెన్ని_డిగ్రీలు / 12 గంటలు 
    _あちら_   గంటలుInక్షణములు = ((గంటలు % 12) * 3600) + నిమిషములుInక్షణములు;
    చెయ్యి(గంటలుInక్షణములు * గంటకెన్ని_డిగ్రీలు, 10, 60/130 * కొలత, "green");
}

// 時計ను పునరావృతము చేయుటకు
_ほうほう_     時計() {
   けす();
   కొలత = .9 *  Math.min( さいだいX(), さいだいY())
   అంకెలు(0, 0, 110/130 * కొలత);
   いろをかえる("lightgreen");
   いちをうつる(0,0);
   はば(1/130* కొలత)
   まる(130/130 * కొలత );
   క్షణముల_గీతలు(0, 0, 130/130 * కొలత );
   _あちら_  సమయము = new Date();
   చేతులు(సమయము.getHours(), సమయము.getMinutes(), సమయము.getSeconds());
}

_ほうほう_     ひょうじ() {
   しょいたい();
   ふをかす();
   あそぶ(時計,1000); // 時計ను ప్రతి క్షణము పునరావృతము చేయ వలెను.
}
