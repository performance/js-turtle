/* ఇక్కడ మీ ప్రక్రియ లు వ్రాయ గలరు. ఉదాహరణ కి:    */

सम_चतुरस्रः = ( भुजः ) => {
  आवर्तय(4, () => {
    अग्रे_गच्छतु( भुजः );
    दक्षिणं_वर्तस्व(90);
  });
}

प्रदर्शन = () => {
  आदिस्थितिः();
  कुंचिकं_गोपाय();
  वर्णं_स्थापय( 0 );
  _अत्र_ भुजः = 100;
  _अत्र_ वर्ण_संख्य = 0;
  आवर्तय_यावत्( () => भुजः > 0, ()=> {
    सम_चतुरस्रः( भुजः );
    दक्षिणं_वर्तस्व(36);
    भुजः = भुजः - 10;
    वर्ण_संख्य = ( वर्ण_संख्य + 1 ) % 16;
    वर्णं_परिवर्तय( वर्ण_संख्य );
  } );
}
