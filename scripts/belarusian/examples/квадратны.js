/* Тут вы можаце напісаць свой працэс. Напрыклад:    */

квадратны = ( бок ) => {
  паўтараць(4, () => {
    ісці_наперад( бок );
    павярнуць_направа(90);
  });
}

паказаць = () => {
  пачатковы_стан();
  схавайце_пэндзаль();
  змяніць_колер_на( 1 );
  _тут_ бок = 100;
  _тут_ колер_нумар = 0;
  Паўтараць_пакуль( () => бок > 0, ()=> {
    квадратны( бок );
    павярнуць_направа(36);
    бок = бок - 10;
    колер_нумар = ( колер_нумар + 1 ) % 16;
    змяніць_колер_на( колер_нумар );
  } );
}
