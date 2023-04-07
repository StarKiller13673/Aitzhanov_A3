let cols, rows;
const scl = 60;
const w = 1600;
const h = 1600;

function setup() {
  createCanvas(1000, 1000, WEBGL);
  cols = w / scl;
  rows = h / scl;
}

function draw() {
  background(0);
  stroke(0, 255, 0); // Set stroke color to acid green
  noFill();
  rotateX(frameCount * 0.5); // Rotate grid in x-axis
  rotateY(frameCount * 0.5); // Rotate grid in y-axis
  rotateZ(frameCount * 0.5); // Rotate grid in z-axis
  for (let y = 0; y < rows; y++) {
    beginShape(LINES);
    for (let x = 0; x < cols; x++) {
      const vx = x * scl - w / 2 + scl / 2;
      const vy = y * scl - h / 2 + scl / 2;
      const vz = sin(frameCount * 3 + x * 10 + y * 10) * 200;
      vertex(vx, vy, vz);
    }
    endShape();
  }

    // Draw 3D letter I in the foreground
	push();
	fill(255); 
	//noStroke(); 
	specularMaterial(255); // Set material to white
	shininess(20); // Set shininess to 20
	//translate(0, 0, 100); // Move the letter I slightly forward in the z-axis
	rotateX(frameCount * 0.25); // Rotate letter I in x-axis
	rotateY(frameCount * 0.25); // Rotate letter I in y-axis
	rotateZ(frameCount * 0.25); // Rotate letter I in z-axis
	box(100, 700, 100);

}
