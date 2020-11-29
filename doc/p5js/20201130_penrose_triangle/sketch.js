let r = 100;
let w = 40;
let drawMode = 0;

function setup() {
  createCanvas(600, 600);
  translate(width / 2, height / 2); // 座標系の原点を canvas 中心に設定

  strokeWeight(1);
  noFill();
}

function draw() {
  translate(width / 2, height / 2); // 座標系の原点を canvas 中心に設定

  if (drawMode == 0) {
    colorMode(HSB);
    background(0);
    stroke((3*frameCount)%360, 100, 100);
    drawShape();
    rotate(TWO_PI/3);
    stroke((3*frameCount+120)%360, 100, 100);
    drawShape();
    rotate(TWO_PI/3);
    stroke((3*frameCount+240)%360, 100, 100);
    drawShape();
  } else if (drawMode == 1) {
    colorMode(RGB);
    background(255);
    stroke(0, 120);
    drawShape();
    rotate(TWO_PI/3);
    drawShape();
    rotate(TWO_PI/3);
    drawShape();
  }
}

function drawShape() {
  beginShape();
  let x1 = -r * cos(PI/3);
  let y1 = r * cos(PI/3) / sqrt(3);
  vertex(x1, y1);
  let x2 = x1 - w;
  let y2 = y1;
  vertex(x2, y2);
  let x3 = x2 + (r + 3*w) * cos(PI/3);
  let y3 = y2 - (r + 3*w) * sin(PI/3);
  vertex(x3, y3);
  let x4 = x3 + (r + 4*w) * sin(PI/6);
  let y4 = y3 + (r + 4*w) * cos(PI/6);
  vertex(x4, y4);
  let x5 = x4 - w * cos(PI/3);
  let y5 = y4 + w * sin(PI/3);
  vertex(x5, y5);
  let x6 = x5 - (r + 3*w) * cos(PI/3);
  let y6 = y5 - (r + 3*w) * sin(PI/3);
  vertex(x6, y6);
  endShape(CLOSE);
}

// utils
function keyPressed() {
  if (key == "s" || key == "S") {
    saveCanvas(gd.timestamp(), "png");
  }

  if (key == "0") drawMode = 0;
  if (key == "1") drawMode = 1;

  if (keyCode == DELETE || keyCode == BACKSPACE) {
    background(0);
  }
}