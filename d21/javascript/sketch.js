let laserShooting = false;
let laserX = 0;
let laserY = 0;
let laserSpeed = 10;
let iPosition = 0; 

function setup() {
	createCanvas(1000, 1000);
	noStroke();

	shapeShifterAni = loadAnimation(
		'assets/1.png',
		'assets/2.png',
		'assets/3.png',
	);

	shapeShifterAni.frameDelay = 30;
  }
  
  function draw() {
	background(0);
  
	// Head
	fill(50);
	rect(400, 200, 200, 300, 20);
  
	// Left Eye
	fill(255);
	ellipse(460, 375, 80);
	fill(194, 21, 21);
	ellipse(460, 375, 50);
  
	// Right Eye
	fill(255);
	ellipse(540, 375, 80);
	fill(194, 21, 21);
	ellipse(540, 375, 50);
  
	// Mouth
	fill(200);
	rect(450, 450, 100, 40, 5);
  
	// Teeth
	fill(255);
	rect(460, 455, 10, 10, 3);
	rect(480, 455, 10, 10, 3);
	rect(500, 455, 10, 10, 3);
	rect(520, 455, 10, 10, 3);
	rect(540, 455, 10, 10, 3);
  
	// Body
	fill(100);
	rect(425, 550, 150, 50, 10);
	rect(425, 500, 150, 50, 10);
  
	// Arms
	rect(370, 525, 50, 20, 10);
	rect(580, 525, 50, 20, 10);
	rect(365, 495, 60, 30, 10);
	rect(575, 495, 60, 30, 10);
  
	// Legs
	fill(50);
	rect(435, 600, 40, 80, 10);
	rect(525, 600, 40, 80, 10);
  
	// Left Foot
	fill(100);
	rect(435, 680, 60, 20, 5);
  
	// Right Foot
	fill(100);
	rect(525, 680, 60, 20, 5);

	fill(255, 0, 0);
  textSize(400);
 	text("I", iPosition, height/2);
  iPosition += 5;
  if (iPosition > width) {
    iPosition = -50;
  }

  if (mouseIsPressed) {
    laserShooting = true;
    laserX = mouseX;
    laserY = mouseY;
  }

  if (laserShooting) {
    stroke(255, 0, 0); 
    strokeWeight(5);
    line(width/2 - 50, height/2 - 40, laserX, laserY);
    line(width/2 + 50, height/2 - 40, laserX, laserY);
    laserY -= laserSpeed;
    if (laserY < 0) {
      laserShooting = false;
      laserX = 0;
      laserY = 0;
    }
  }

	animation(shapeShifterAni, 100, 100);
	animation(shapeShifterAni, 100, 900);
	animation(shapeShifterAni, 900, 100);
  }
  