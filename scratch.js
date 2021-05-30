// Bouncing Rectangles -- rectangles which bounce off the side of the canvas

var maxX =  imageContext.canvas.width/2;
var maxY =  imageContext.canvas.height/2;
var minX =  -maxX;
var minY =  -maxY;
var maxVelocity = 12;

function init_drops(n) {
 var drops = new Array(n);
 for (var i = 0; i < n; i++) {
    drops[i] = { // each drop is an object with a set of properties
       x: random(minX, maxX),
       y: random(minY, maxY),
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
 clear();
 for (var i = 0; i < n; i++) {
    // access each drop object
    var d = drops[i]; // access each drop object and react with it
    // if the drop hits a wall, reverse its motion direction (velocity)
    if (d.y < minY) {
       d.velocityY = -d.velocityY;
    }
    else if (d.y + d.size > maxY && d.velocityY > 0) {
       d.velocityY = -d.velocityY;
    }
    if (d.x - d.width/2 < minX) {
       d.velocityX = -d.velocityX;
    }
    else if (d.x + d.width/2 > maxX) {
       d.velocityX = -d.velocityX;
    }
    // paint the drop
    color ("rgba(" +d.red+ "," +d.green+ "," +d.blue+ "," +d.alpha +")");
    width(d.width);
    goto(d.x, d.y);
    forward(d.size);
    // move the drop for the next time
    d.y = d.y + d.velocityY;
    d.x = d.x + d.velocityX;
 }
}

function let_them_drop (n) {
 wrap(false);
 hideTurtle();
 drops = init_drops(n);
 animate(function () { rain(drops, n)}, 100);
}

function demo() {
let_them_drop (Math.floor(maxX * maxY/2000));
}
