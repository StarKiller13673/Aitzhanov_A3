let shapeShifterAni;

function setup() {
	new Canvas(1000, 1000);


	shapeShifterAni = loadAnimation(
		'assets/1.png',
		'assets/2.png',
		'assets/3.png',
		'assets/4.png',
		'assets/5.png',
		'assets/6.png',
		'assets/7.png',
	);

	shapeShifterAni.frameDelay = 2;
}

function draw() {
	background(0, 255, 89);

	
	
	animation(shapeShifterAni, 500, 500);
	
}