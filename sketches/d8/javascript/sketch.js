
const canvasWidth = 1000;
const canvasHeight = 1000;


let letterI;
let rectangles = [];

// хуярь канвас
function setup() {
  createCanvas(canvasWidth, canvasHeight);
  frameRate(60);

  // создать буквочку
  letterI = new LetterI(width/2, height/2);

  // ебашь прямоуг
  for (let i = 0; i < 5; i++) {
    addRectangle();
  }
}

// хуяррь круговую 
function draw() {
  background(0);


  for (let i = 0; i < rectangles.length; i++) {
    rectangles[i].draw();
  }


  letterI.update();
  letterI.draw();


  if (random() < 0.05) {
    addRectangle();
  }
}


function addRectangle() {
  const newRectangle = new Rectangle();
  rectangles.push(newRectangle);
}


class Rectangle {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.width = random(20, 50);
    this.height = random(20, 50);
    this.color = color(random(255), random(255), random(255), 100);
    this.life = 60;
  }


  update() {
    this.life--;
  }


  draw() {
    if (this.life > 0) {
      fill(this.color);
      noStroke();
      rect(this.x, this.y, this.width, this.height);
    }
  }
}


class LetterI {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.color = color(255);
    this.alpha = 0;
    this.alphaDir = 5;
  }


  update() {

    this.x += random(-1, 1);
    this.y += random(-1, 1);


    if (this.alpha <= 0 || this.alpha >= 255) {
      this.alphaDir *= -1;
    }
    this.alpha += this.alphaDir;
  }


  draw() {
    fill(this.color);
    noStroke();
    textSize(200);
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    text("I", this.x, this.y);
    fill(255, 255, 255, this.alpha);
    rect(0, 0, width, height);
  }
}
