let particles = [];//создать вариабл

function setup() {
  createCanvas(1000, 1000);
  background('#1b1b2f');


  for (let i = 0; i < 300; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  background('#1b1b2f');

  for (let i = 0; i < particles.length; i++) {//ебашу точки
    particles[i].show();
  }

  textSize(500);
  textAlign(CENTER, CENTER);
  fill('#f3f5b0');
  textFont('serif');
  textStyle(BOLD);//хуяришь саму букву
  fill('##f3f5b0');
  strokeWeight(5);
  text('I', width/2, height/2);

  textSize(300);
  fill('##f3f5b0');
  textFont('serif');
  textStyle(BOLD);
  fill('##f3f5b0');
  strokeWeight(5);
  text('I', width/2, height/2);

  textSize(400);
  fill('##f3f5b0');
  textFont('serif');
  textStyle(BOLD);
  fill('##f3f5b0');
  strokeWeight(5);
  text('I', width/2, height/2);

  textSize(200);
  fill('##f3f5b0');
  textFont('serif');
  textStyle(BOLD);
  fill('##f3f5b0');
  strokeWeight(5);
  text('I', width/2, height/2);
}

class Particle {

 

  constructor() {
    this.pos = createVector(random(width), random(height));
  }

  show() {
    stroke('#ffffff');
    strokeWeight(1);
    fill('#00ff00');
    ellipse(this.pos.x, this.pos.y, 8, 8); 
  }
}