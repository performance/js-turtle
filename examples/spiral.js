// Spiral -- demonstrate some simple spirals

function spiral1() {
  ఆది_స్థితి()
  n=0
  while (n<400) {
    ముందుకు_జరుగు(n)
    కుడి_వైపు_తిరుగు(90)
    n=n+3
  }
}

function spiral2() {
  ఆది_స్థితి()
  n=0
  while (n<75) {
    ముందుకు_జరుగు(n)
    కుడి_వైపు_తిరుగు(90-n)
    n=n+1
  }
}


function spiral3() {
  ఆది_స్థితి()
   చుట్టొద్దు()
  n=0
  while (n<40) {
    ముందుకు_జరుగు(n)
    కుడి_వైపు_తిరుగు(15)
    n=n+.25
  }
}

function spiral() {
  ఆది_స్థితి()
   చుట్టొద్దు()
  n=0
  while (n<1000) {
    ముందుకు_జరుగు(n)
    కుడి_వైపు_తిరుగు(15)
    n=n+.25
    // కుంచిక.స్థానము.x is the x position of the కుంచిక
    // కుంచిక.స్థానము.y is the y position of the కుంచిక
    x = కుంచిక.స్థానము.x
    y = కుంచిక.స్థానము.y
console.log("x:"+x+" y:"+y)
    // "||" means "or", so the following statement checks for out of bounds
    if (x>గరిష్ఠX() || x<కనిష్ఠX() || y>గరిష్ఠY() ||y<కనిష్ఠY()) {
console.log("exiting:")
      break; // exit the loop early
    }
  }
}

ప్రదర్శన = spiral;

