// Bouncing Rectangles -- rectangles which bounce off the side of the canvas

  var గరిష్ఠ_X =  imageContext.canvas.width/2;
  var గరిష్ఠ_Y =  imageContext.canvas.height/2;
  var కనిష్ఠ_X =  -గరిష్ఠ_X;
  var కనిష్ఠ_Y =  -గరిష్ఠ_Y;
  var maxVelocity = 12;

function init_drops(n) {
   var drops = new Array(n);
   for (var i = 0; i < n; i++) {
      drops[i] = { // each drop is an object with a set of properties
         x: random(కనిష్ఠ_X, గరిష్ఠ_X),
         y: random(కనిష్ఠ_Y, గరిష్ఠ_Y),
         velocityX: random(-maxVelocity, maxVelocity),
         velocityY: random(-maxVelocity, maxVelocity),
         size: random(20,300),
         red:random(0,255),
         green:random(0,255),
         blue: random(0,255),
         alpha: Math.random(),
         width: random(1,15)
      };
   }
   return drops;
}

function rain (drops, n) {
   చెరిపి_వేయి();
   for (var i = 0; i < n; i++) {
      // access each drop object
      var d = drops[i]; // access each drop object and react with it
      // if the drop hits a wall, reverse its motion direction (velocity)
      if (d.y < కనిష్ఠ_Y) {
         d.velocityY = -d.velocityY;
      }
      else if (d.y + d.size > గరిష్ఠ_Y && d.velocityY > 0) {
         d.velocityY = -d.velocityY;
      }
      if (d.x - d.width/2 < కనిష్ఠ_X) {
         d.velocityX = -d.velocityX;
      }
      else if (d.x + d.width/2 > గరిష్ఠ_X) {
         d.velocityX = -d.velocityX;
      }
      // paint the drop
      రంగు("rgba(" +d.red+ "," +d.green+ "," +d.blue+ "," +d.alpha +")");
      వెడల్పు(d.width);
      goto(d.x, d.y);
      ముందుకు_జరుగు(d.size);
      // move the drop for the next time
      d.y = d.y + d.velocityY;
      d.x = d.x + d.velocityX;
   }
}

function let_them_drop (n) {
   wrap(false);
   కుంచికను_దాచు();
   drops = init_drops(n);
   animate(function () { rain(drops, n)}, 100);
}

function demo() {
  let_them_drop (Math.floor(గరిష్ఠ_X * గరిష్ఠ_Y/2000));
}
