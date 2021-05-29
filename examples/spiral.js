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
  wrap(false)
  n=0
  while (n<40) {
    ముందుకు_జరుగు(n)
    కుడి_వైపు_తిరుగు(15)
    n=n+.25
  }
}

function spiral() {
  ఆది_స్థితి()
  wrap(false)
  n=0
  while (n<1000) {
    ముందుకు_జరుగు(n)
    కుడి_వైపు_తిరుగు(15)
    n=n+.25
    // turtle.pos.x is the x position of the turtle
    // turtle.pos.y is the y position of the turtle
    x = turtle.pos.x
    y = turtle.pos.y
console.log("x:"+x+" y:"+y)
    // "||" means "or", so the following statement checks for out of bounds
    if (x>maxX() || x<minX() || y>maxY() ||y<minY()) {
console.log("exiting:")
      break; // exit the loop early
    }
  }
}

demo = spiral;

