let shapeShifterAni;

function setup() {
	new Canvas(1000, 1000);


	shapeShifterAni = loadAnimation(
		'assets/1i.png',
		'assets/2i.png',
		'assets/3i.png',
		'assets/4i.png',
		'assets/5i.png',
		'assets/6i.png',
		
	);

	shapeShifterAni.frameDelay = 7;
}

function draw() {
	background(0, 255, 89);

	
	animation(shapeShifterAni, 100, 100);
	animation(shapeShifterAni, 500, 450);
	animation(shapeShifterAni, 700, 600);
	animation(shapeShifterAni, 700, 120);
	animation(shapeShifterAni, 130, 600);
	animation(shapeShifterAni, 900, 300);
	animation(shapeShifterAni, 300, 150);
	animation(shapeShifterAni, 300, 800);
	animation(shapeShifterAni, 900, 830);
}