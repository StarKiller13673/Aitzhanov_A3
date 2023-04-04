function setup() {
    createCanvas(1000, 1000);
  }
  
  function draw() {
    background(77, 69, 93);
    
    // here are variables for the position and size of the letter
    let xPos = width / 2;
    let yPos = height / 2;
    let letterWidth = 200;
    let letterHeight = 300;
    
    // Drawing the outline of the letter 'I'
    stroke(233, 100, 121);
    strokeWeight(20);
    line(xPos, yPos - letterHeight / 2, xPos, yPos + letterHeight / 2); // vertical line
    line(xPos - letterWidth / 2, yPos - letterHeight / 2, xPos + letterWidth / 2, yPos - letterHeight / 2); // top horizontal line
    line(xPos - letterWidth / 2, yPos + letterHeight / 2, xPos + letterWidth / 2, yPos + letterHeight / 2); // bottom horizontal line
    
    // Animate the drawing of the letter
    let progress = (millis() / 2000 + frameCount / 100) % 1; // progress from 0 to 1 over 2 seconds, looped
    let dashLength = progress * letterWidth; // length of the dashed line to draw
    stroke(255, 0, 0);
    strokeWeight(5);
    drawingContext.setLineDash([dashLength, letterWidth - dashLength]); // set the dash pattern for the line
    line(xPos - letterWidth / 2, yPos + letterHeight / 2, xPos + letterWidth / 2, yPos + letterHeight / 2); // draw the bottom horizontal line
  }
  