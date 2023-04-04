let img;
let glitch;

function preload() {
  img = loadImage('assets/I_am.png');
}

function setup() {
  createCanvas(1000, 1000);
  background(0);
  imageMode(CENTER);

  glitch = new Glitch();
  loadImage('assets/I_am.png', function(im){
    glitch.loadImage(im);
});
}

function draw() {
  
    glitch.resetBytes();

	//glitch.replaceBytes(1, 104); 
	glitch.randomBytes(1); 
    glitch.randomBytes(1);
    glitch.randomBytes(1);


	glitch.buildImage();
	image(glitch.image, width/2, height/2)
}

