let myFont;

function preload() {
  myFont = loadFont('fonts/Allura-Regular.otf');
}



function setup() {
  createCanvas(1000, 1000);
  frameRate(10);
}

function draw() {
  background(255);
  

  fill(0); 
  textFont(myFont); 
  textSize(1000); 
  textAlign(CENTER, CENTER); 
  let flicker = (frameCount % 10 < 5); 
  if (flicker) {
    text("I", width/2, height/2); 
  }
  
 
  noStroke();
  fill(random(255), random(255), random(255)); 
  rect(random(width), random(height), random(50, 200), random(50, 200));
  fill(random(255), random(255), random(255)); 
  ellipse(random(width), random(height), random(50, 200)); 
}

