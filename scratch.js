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
       x: యాదృచఛిక_సంఖ్య(minX, maxX),
       y: యాదృచఛిక_సంఖ్య(minY, maxY),
       velocityX: యాదృచఛిక_సంఖ్య(-maxVelocity, maxVelocity),
       velocityY: యాదృచఛిక_సంఖ్య(-maxVelocity, maxVelocity),
       size: యాదృచఛిక_సంఖ్య(20,300),
       red:యాదృచఛిక_సంఖ్య(0,255),
       green:యాదృచఛిక_సంఖ్య(0,255),
       blue: యాదృచఛిక_సంఖ్య(0,255),
       alpha: Math.random(),
       width: యాదృచఛిక_సంఖ్య(1,15)
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
    స్థానము_మార్చు(d.x, d.y);
    forward(d.size);
    // move the drop for the next time
    d.y = d.y + d.velocityY;
    d.x = d.x + d.velocityX;
 }
}

function let_them_drop (n) {
  చుట్టొద్దు();
 hideTurtle();
 drops = init_drops(n);
 ఆడించు(function () { rain(drops, n)}, 100);
}

function ప్రదర్శన() {
let_them_drop (Math.floor(maxX * maxY/2000));
}
