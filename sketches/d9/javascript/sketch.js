let xRotation = 0;
let yRotation = 0;

function setup() {
  createCanvas(1000, 1000, WEBGL);

  ambientLight(0);

  directionalLight(255, 255, 55, 20, 0, -1);
}

function draw() {
  background(254, 255, 134);
  rotateX(xRotation);
  rotateY(yRotation);

  fill(176, 218, 255);
  box(50, 600, 50);
}

function mouseDragged() {
  const dx = mouseX - pmouseX;
  const dy = mouseY - pmouseY;
  xRotation += dy * 0.01;
  yRotation += dx * 0.01;
}
