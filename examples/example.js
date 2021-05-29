// Example -- example of code
/* Define helper functions here
or write your own functions
including a demo() function

For example:    */


function square (side) {
  var i=0
  while (i<4) {
    ముందుకు_జరుగు( side)
    turn(90)
    i=i+1
  }
}

function demo() {
   reset();
   తాబేలును_దాచు();
   రంగు( నీలము );
   var side = 100;
   while (side > 0) {
      square(side);
      కుడి_వైపు_తిరుగు(36);
      side = side - 10;
   }
}
