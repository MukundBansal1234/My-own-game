var rect1, rect2, rect3, rect4;
function setup() {
  createCanvas(1500, 600);
  rect1 = createSprite(125, 300, 5, 500);
  rect2 = createSprite(170, 45, 100, 5);
  rect3 = createSprite(215, 300, 5, 500);
  rect4 = createSprite(170, 555, 100, 5);
}

function draw() {
  background(255, 255, 255);
  stroke("red");
  for (var i = 50; i < 600; i = i + 50) {
    line(500 + i, 50, 500 + i, height - 50);
    line(550, i, 1050, i);
  }



  drawSprites();
}