// Sierpinski Curve -- draw a set of Sierpinski curves

/* A Sierpinski curve is a symmetric
fractal that covers a plane.  
Note how each level is similar to the
preceding level

This also demonstrates the use of the
delay function and powerful concepts
of function redefinition and
recursion.
Function redefinition is a function
defined within a function so that each
time the outer function is invoked a new
copy of the inner function is created.
In this example, a part() function is
created when either the sierpinski or
halfSierpinski functions are invoked.
Recursion is a function that calls
itself. Recursive functions must include
some test to stop the recursion to
prevent the dreaded infinite loop.
*/
function halfSierpinski(size, level) {
  if (level == 0)
    ముందుకు_జరుగు(size);
  else {
    function part() {
      halfSierpinski(size, level - 1);
      ఎడమ_వైపు_తిరుగు(45);
      ముందుకు_జరుగు(size * Math.sqrt(2));
      ఎడమ_వైపు_తిరుగు(45);
      halfSierpinski(size, level - 1);
    }
    part();
    కుడి_వైపు_తిరుగు(90);
    ముందుకు_జరుగు(size);
    కుడి_వైపు_తిరుగు(90);
    part();
  }
}

function sierpinski(size, level) {
  function part () {
    halfSierpinski(size, level);
    కుడి_వైపు_తిరుగు(90);
    ముందుకు_జరుగు(size);
    కుడి_వైపు_తిరుగు(90);
  }
  part ();
  part ();
}

var i = 1; // a global variable used for each iteration of delayed

function delayed() {
  if (i<7) {
    చెరిపి_వేయి();
    కుంచికను_దాచు();
    కుంచిక_కదిలిన_ప్రతి_సారీ_చిత్రీకరించు(true);
    స్థానము_మార్చు(0,.9*కనిష్ఠY());

    // move start point so figure stays centered
    కలమును_పైకి_ఎత్తు();
    కోణము(0);

    size = 1.8 * Math.min( గరిష్ఠX(), గరిష్ఠY())
    var sides = 4 * 2**i -3 // number of sides
    var side = size/sides;
    ఎడమ_వైపు_తిరుగు(90)
    ముందుకు_జరుగు(side/2)
    కుడి_వైపు_తిరుగు(90)

    కలమును_కింద_పెట్టు();

    sierpinski(side, i);
    స్థానము_మార్చు(కనిష్ఠX(),కనిష్ఠY());
    కోణము(90);
    అక్షరరూపము_స్థాపించు("bold 12pt Ariel,sans-serif")
    వ్రాయి("Sierpinski curve of order "+ i);
    చిత్రీకరించు();
    i = i + 1;
    విలంబించు(delayed,3000)
  }
}

function demo () {
  i = 0;
  delayed ();
}
