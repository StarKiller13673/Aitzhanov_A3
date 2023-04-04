let colors = ["#FFC312", "#C4E538", "#12CBC4", "#FDA7DF", "#ED4C67", "#F79F1F", "#A3CB38", "#1289A7", "#D980FA", "#B53471"]; //list of colors
let currentColorIndex = 0; // make the index of the current color in the list to 0
let myFont;

function preload() {
  myFont = loadFont('fonts/MeltedPersonalUseBold-2OG4w.ttf');
}

function setup() {
  createCanvas(1000, 1000); 
  textFont(myFont);
}

function draw() {
  // set the background to a linear gradient 
  setGradient(0, 0, width, height, colors[currentColorIndex], colors[(currentColorIndex + 1) % colors.length]);

  // increase the index of the current color in the list
  currentColorIndex = (currentColorIndex + 1) % colors.length;


  fill(300);


  textSize(400);

  textFont(myFont);
  textAlign(CENTER, CENTER);

  text("I", width/2, height/2);
}

// function to create a linear gradient
function setGradient(x, y, w, h, c1, c2) {
  noFill();
  for (let i = y; i <= y + h; i++) {
    let inter = map(i, y, y + h, 0, 1);
    let c = lerpColor(color(c1), color(c2), inter);
    stroke(c);
    line(x, i, x + w, i);
  }
}
