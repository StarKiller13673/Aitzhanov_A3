// I didn't get the desired effect of the letter 'I' to be revealed gradually as the user genereates shapes.
// got tired creating this code, as it is quite complex
let scribbles = [];
let mask;

function setup() {
  createCanvas(1000, 1000);
  noFill();
  strokeWeight(2);


  mask = createGraphics(width, height);
  mask.background(255);
  mask.fill(0);
  mask.stroke(0);
  mask.strokeWeight(20);
  mask.stroke(255, 96, 0); // Set the stroke color of the letter to red
  let letterWidth = width / 5;
  let letterHeight = height / 2;
  let letterX = width / 2 - letterWidth / 2;
  let letterY = height / 2 - letterHeight / 2;
  mask.line(letterX + letterWidth / 2, letterY, letterX + letterWidth / 2, letterY + letterHeight);
}

function draw() {
  background(69, 69, 69);

  // Draw the mask on top of the canvas
  image(mask, 0, 0);

  // Drawing the scribbles on top of the mask
  for (let i = 0; i < scribbles.length; i++) {
    let scribble = scribbles[i];
    stroke(255, 165, 89);
    scribble.show();
    scribble.reveal();
  }
}

function mousePressed() {
  // Create a new ScribbleShape object and add it to the array
  let newScribble = new ScribbleShape(mouseX, mouseY, random(20, 80));
  scribbles.push(newScribble);
}

class ScribbleShape {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.scribble = new Scribble();
  }

  show() {
    this.scribble.scribbleRect(this.x, this.y, this.size, this.size);
  }

  reveal() {
    let d = dist(this.x, this.y, width / 2, height / 2);
    let letterWidth = width / 5;
    let letterHeight = height / 2;
    let letterX = width / 2 - letterWidth / 2;
    let letterY = height / 2 - letterHeight / 2;
    if (d < this.size) {
      // Calculate the position of the reveal mask based on the position of the scribble
      let revealX = map(this.x, letterX, letterX + letterWidth, 0, width);
      let revealY = map(this.y, letterY, letterY + letterHeight, 0, height);

      // Update the mask to reveal the my favorite letter
      mask.ellipse(revealX, revealY, this.size, this.size);
    }
  }
}
