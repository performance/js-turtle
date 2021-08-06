// Bouncing Rectangles -- rectangles which bounce off the side of the canvas

  const గరిష్ఠ_X =  imageContext.canvas.width/2;
  const గరిష్ఠ_Y =  imageContext.canvas.height/2;
  const కనిష్ఠ_X =  -గరిష్ఠ_X;
  const కనిష్ఠ_Y =  -గరిష్ఠ_Y;
  const maxVelocity = 12;

init_drops = (n) => {
   _అత్ర_ drops = new Array(n);
   లెక్క_పెడుతూ_ఆవర్తించు (n, (i) => {
      drops[i] = { // each drop is an object with a set of properties
         x: యాదృచ్ఛిక_సంఖ్య(కనిష్ఠ_X, గరిష్ఠ_X),
         y: యాదృచ్ఛిక_సంఖ్య(కనిష్ఠ_Y, గరిష్ఠ_Y),
         velocityX: యాదృచ్ఛిక_సంఖ్య(-maxVelocity, maxVelocity),
         velocityY: యాదృచ్ఛిక_సంఖ్య(-maxVelocity, maxVelocity),
         size: యాదృచ్ఛిక_సంఖ్య(20,300),
         red:యాదృచ్ఛిక_సంఖ్య(0,255),
         green:యాదృచ్ఛిక_సంఖ్య(0,255),
         blue: యాదృచ్ఛిక_సంఖ్య(0,255),
         alpha: Math.random(),
         width: యాదృచ్ఛిక_సంఖ్య(1,15)
      };
   } );
   return drops;
}

rain = (drops, n) => {
   చెరిపి_వేయి();
   లెక్క_పెడుతూ_ఆవర్తించు (n, (i) => {
      // access each drop object
      _అత్ర_ d = drops[i]; // access each drop object and react with it
      // if the drop hits a wall, reverse its motion direction (velocity)
      యది_చేత్_అన్యథ ( () => (d.y < కనిష్ఠ_Y),
         () => {
            d.velocityY = -d.velocityY;
         },
         ()=>
         యది_చేత్( () => (d.y + d.size > గరిష్ఠ_Y && d.velocityY > 0), 
            () => {
               d.velocityY = -d.velocityY;
            }
         )  
      )
      యది_చేత్_అన్యథ ( () => (d.x - d.width/2 < కనిష్ఠ_X),
         () => {
            d.velocityX = -d.velocityX;
         },

         ()=> యది_చేత్ ( () => (d.x + d.width/2 > గరిష్ఠ_X),
            () => {
               d.velocityX = -d.velocityX;
            }
         ) 
      )
      // paint the drop
      రంగు_మార్చు("rgba(" +d.red+ "," +d.green+ "," +d.blue+ "," +d.alpha +")");
      వెడల్పు(d.width);
      స్థానము_మార్చు(d.x, d.y);
      ముందుకు_జరుగు(d.size);
      // move the drop for the next time
      d.y = d.y + d.velocityY;
      d.x = d.x + d.velocityX;
   } );
}

let_them_drop = (n) => {
   చుట్టొద్దు();
   కుంచికను_దాచు();
   drops = init_drops(n);
   ఆడించు( () => { rain(drops, n)}, 100);
}

ప్రదర్శన = () => {
  let_them_drop (Math.floor(గరిష్ఠ_X * గరిష్ఠ_Y/2000));
}
