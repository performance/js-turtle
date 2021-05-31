// Starburst -- simple example of while statement and colors

function starburst () {
  var steps = 1000
  var len = గరిష్ఠX()
  if (len < గరిష్ఠY()) {
    len = గరిష్ఠY()
  }
  len = 1.5 * len
  var i = 0
  while ( i < steps) {
    స్థానము_మార్చు( 0,0)
    కోణము( 360/steps*i)
    రంగు_మార్చు( random (16))
    //రంగు_మార్చు("hsl("+ 360 * i/steps + ", 100%, 50%)") // color wheel
    //రంగు_మార్చు(i%16)
    //రంగు_మార్చు(Math.floor(16 * i/steps)) // logo colors
    ముందుకు_జరుగు(len)
    i = i + 1
  }
}

function ప్రదర్శన() {
  ఆది_స్థితి()
   చుట్టొద్దు()
  starburst()
} 
