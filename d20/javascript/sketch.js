//in this one you can shoot lasers from the eyes
let laserShooting = false;
let laserX = 0;
let laserY = 0;
let laserSpeed = 10;
let iPosition = 0; 

function setup() {
  createCanvas(1000, 1000);
  textAlign(CENTER, CENTER);
  textSize(50);
}


function draw() {
  // Drawing the face
  background(78, 110, 129);
  noStroke();
  fill(58, 16, 120); // skin color
  ellipse(width/2, height/2 - 30, 200, 280); // face shape
  fill(54, 53, 59); // mask color
  rect(width/2 - 80, height/2 - 145, 160, 160, 30); // mask
  fill(0); // color for eyes
  ellipse(width/2 - 50, height/2 - 40, 40, 40); // left eye
  ellipse(width/2 + 50, height/2 - 40, 40, 40); // right eye
  fill(255, 3, 3); // pupil color
  ellipse(width/2 - 50, height/2 - 40, 20, 20); // left pupil
  ellipse(width/2 + 50, height/2 - 40, 20, 20); // right pupil
  fill(58, 16, 120); // ears color color
  ellipse(width/2 - 110, height/2 - 20, 50, 30); // left ear
  ellipse(width/2 + 110, height/2 - 20, 50, 30); // right ear

  // Draw the moving 'I'
  fill(255, 0, 0);
  textSize(400);
  text("I", iPosition, height/2);
  // Move the 'I'
  iPosition += 5;
  // Reset the 'I' position when off screen
  if (iPosition > width) {
    iPosition = -50;
  }

  if (mouseIsPressed) {
    laserShooting = true;
    laserX = mouseX;
    laserY = mouseY;
  }

  if (laserShooting) {
    stroke(255, 0, 0); // red color for lasers, laser WOW!
    strokeWeight(5);
    line(width/2 - 50, height/2 - 40, laserX, laserY);
    line(width/2 + 50, height/2 - 40, laserX, laserY);
    laserY -= laserSpeed;
    // Reset laser shooting when off screen
    if (laserY < 0) {
      laserShooting = false;
      laserX = 0;
      laserY = 0;
    }
  }
}
