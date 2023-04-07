let angleX = 0;
let angleY = 0;
let angleZ = 0;

function setup() {
  createCanvas(1000, 1000, WEBGL);
  angleMode(DEGREES);
  stroke(0, 255, 0); 
  strokeWeight(2);
}

function draw() {
  fill(255); 
  textSize(500);
  text("I", 500, 450);
  text("I", width/2, height/2); 
  background(8, 9, 38); // set background color to dark
  rotateX(angleX);
  rotateY(angleY);
  rotateZ(angleZ);
  for (let x = -500; x <= 500; x += 50) {
    for (let y = -500; y <= 500; y += 50) {
      for (let z = -500; z <= 500; z += 50) {
        push();
        translate(x, y, z);
        sphere(5); // draw a small sphere at each vertex
        pop();
      }
    }
  }

  //noFill();
  //box(400);
  //push();
 // textSize(800); 
  //textAlign(CENTER, CENTER); 
  //fill(255); 
 // textFont('serif');// TEXT NOT WORKING!!!! DON'T KNOW WHAT TO DO
  //let tw = textWidth('I'); //ATTENTION! if you remove this line, the animation will stop (in case computer cannot load it)
  //translate(0, 0, -200); 
  /*translate(-tw/2, 0);
  translate(0, -250);
  text('I', 0, 0); */


  angleX += 1;
  angleY += 1;
  angleZ += 1;
}
