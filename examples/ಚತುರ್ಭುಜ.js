/* ఇಲ್ಲಿ ನಿಮ್ಮ ಪ್ರಕ್ರಿಯೆಗಳು ಬರೆಬಹುದು. ಉದಾಹರಣಕ್ಕೆ:    */

ಸಮ_ಚತುರ್ಭುಜ = ( ಭುಜ ) => {
  ಆವರ್ತಿಸಿ(4, () => {
    ಮುಂದೆ_ಹೋಗಿ( ಭುಜ );
    ಬಲಕ್ಕೆ_ತಿರುಗಿ( 90 );
  });
}

ಪ್ರದರ್ಶನೆ = () => {
  ಕುಂಚಿಕವನ್ನು_ಮರೆಮಾಡಿ();
  ವರ್ಣ_ಸ್ಥಾಪಿಸಿ( 1 );
  _ಅತ್ರ_ ಭುಜ = 100;
  _ಅತ್ರ_ ವರ್ಣ_ಸಂಖ್ಯೆ = 0;
  ಯಾವತ್_ಪರಿಕ್ರಮ( () => ಭುಜ > 0, () => {
    ಸಮ_ಚತುರ್ಭುಜ( ಭುಜ );
    ಬಲಕ್ಕೆ_ತಿರುಗಿ( 10 );
    ಭುಜ = ಭುಜ - 5;
    ವರ್ಣ_ಸಂಖ್ಯೆ = ( ವರ್ಣ_ಸಂಖ್ಯೆ + 1 ) %  16
    ವರ್ಣ_ಬದಲಿಸಿ (ವರ್ಣ_ಸಂಖ್ಯೆ );
  } );
}
