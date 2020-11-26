let drawMode = 0;
let shapeCount = 6;
let alpha = 0.7;
let noiseRange = 0.03;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  blendMode(BLEND);
  if (drawMode == 0 || drawMode == 1) {
    background(0);
    blendMode(LIGHTEST);
  } else if (drawMode == 2) {
    background(100);
  }

  translate(width / 2, height / 2); // 座標系の原点を canvas 中心に設定


  rotate(frameCount/600);

  let colors = [];
  for (let i = 1; i <= shapeCount; i++) {
    colors.push(color((frameCount+i*(360/shapeCount))%360, 100, 100, alpha));
  }

  if (drawMode == 0 || drawMode == 1) {
    noStroke();
    for (let i = 0; i < shapeCount; i++) {
      fill(colors[i]);
      drawShape(4*i+7, noiseRange);
    }
  } else if (drawMode == 2) {
    stroke(0, 0.4);
    strokeWeight(1);
    noFill();
    for (let i = 0; i < shapeCount; i++) {
      drawShape(4*i+7, noiseRange);
    }
  }

  if (drawMode == 1) {
    noFill();
    strokeWeight(6);
    for (let i = 0; i < shapeCount; i++) {
      stroke(colors[i]);
      drawPoints(4*i+7, noiseRange);
    }
  }
}

function drawShape(n, noiseRange) {
  let angle = TWO_PI / n;
  beginShape();
  for (let i = 0; i < n+3; i++) {
    vn = i % n;
    theta = angle * vn;
    r = height/4 * (1 + noiseRange * sin(frameCount/10 + 2*vn) + 2 * noiseRange * cos(frameCount/10 + 3*vn + PI));
    curveVertex(r * cos(theta), r * sin(theta));
  }
  endShape();
}

function drawPoints(n, noiseRange) {
  let angle = TWO_PI / n;
  for (let i = 0; i < n+3; i++) {
    vn = i % n;
    theta = angle * vn;
    r = height/4 * (1 + noiseRange * sin(frameCount/10 + 2*vn));
    point(r * cos(theta), r * sin(theta));
  }
}

// utils
function keyPressed() {
  if (key == "s" || key == "S") {
    saveCanvas(gd.timestamp(), "png");
  }

  if (key == "0") drawMode = 0;
  if (key == "1") drawMode = 1;
  if (key == "2") drawMode = 2;

  if (keyCode == DELETE || keyCode == BACKSPACE) {
    background(0);
  }
}