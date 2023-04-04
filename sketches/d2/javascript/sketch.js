var myFont
var p = 0
var k = 0
var a = 0
var b = 0
var c = 0
var d = 0
var e = 0
var f = 0
var g = 0

function preload (){
    myFont=loadFont('fonts/Allura-Regular.otf');
}

function setup() {
  createCanvas(1000, 1000);
  background(0);
  textFont(myFont);
  angleMode(DEGREES);
  frameRate(30);
  createLoop({duration: 20, gif: true})
}

function draw() {

  if (p < 360) {
    push();
    translate(500, 500);
    rotate(p);
    fill(0, 0, 153);
    textSize(200);
    text("I", 0, 0);
    p = p + 60;
    pop();
  }
  if (k < 360) {
    push();
    translate(500, 700);
    rotate(k);
    fill(0, 0, 153);
    textSize(200);
    text("I", 0, 0);
    k = k + 120;
    pop();
  }
  if (a < 360) {
    push();
    translate(500, 800);
    rotate(a);
    fill(0, 0, 153);
    textSize(200);
    text("I", 0, 0);
    a = a + 120;
    pop();
  }
  if (b < 360) {
    push();
    translate(500, 300);
    rotate(b);
    fill(0, 0, 153);
    textSize(200);
    text("I", 0, 0);
    b = b + 120;
    pop();
  }
  if (c < 360) {
    push();
    translate(500, 200);
    rotate(c);
    fill(0, 0, 153);
    textSize(200);
    text("I", 0, 0);
    c = c + 120;
    pop();
  }
  if (d < 360) {
    push();
    translate(300, 200);
    rotate(d);
    fill(0, 0, 153);
    textSize(200);
    text("I", 0, 0);
    d = d + 60;
    pop();
  }
  if (e < 360) {
    push();
    translate(700, 200);
    rotate(e);
    fill(0, 0, 153);
    textSize(200);
    text("I", 0, 0);
    e = e + 60;
    pop();
  }
  if (f < 360) {
    push();
    translate(300, 800);
    rotate(f);
    fill(0, 0, 153);
    textSize(200);
    text("I", 0, 0);
    f = f + 60;
    pop();
  }
  if (g < 360) {
    push();
    translate(700, 800);
    rotate(g);
    fill(0, 0, 153);
    textSize(200);
    text("I", 0, 0);
    g = g + 60;
    pop();
  }
  
}
