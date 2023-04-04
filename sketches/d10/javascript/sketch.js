let boxSprite;

function setup() {
  new Canvas(1000, 1000);
}

function draw() {
  background(0);
  
  boxSprite = new Sprite(450,300,200,20);

  fill(0);
  textSize(24);
  textAlign(CENTER);
  text('CLICK', width / 2, height / 2);


  if (mouse.presses()) {

    let sprite = new Sprite(mouse.x, mouse.y, 20, 20);


    sprite.vel.x = random(-5, 5);
    sprite.vel.y = random(-5, 5);

  }


}
