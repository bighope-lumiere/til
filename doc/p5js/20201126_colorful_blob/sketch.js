let drawMode = 0;

let N = 12;
let noiseRange = 0.03;

function setup() {
  createCanvas(600, 600);
  colorMode(HSB);
}

function draw() {
  background(24);
  translate(width / 2, height / 2); // 座標系の原点を canvas 中心に設定

  let c = color(frameCount%360, 100, 100);
  fill(c);
  noStroke();
  drawShape(N, noiseRange);

  if (drawMode == 1) {
    noFill();
    stroke(255);
    strokeWeight(6);
    drawPoints(N, noiseRange);
  }
}

function drawShape(n, noiseRange) {
  let angle = TWO_PI / n;
  beginShape();
  for (let i = 0; i < n+3; i++) {
    vn = i % n;
    theta = angle * vn;
    r = height/3 * (1 + noiseRange * sin(frameCount/10 + 2*vn));
    curveVertex(r * cos(theta), r * sin(theta));
  }
  endShape();
}

function drawPoints(n, noiseRange) {
  let angle = TWO_PI / n;
  for (let i = 0; i < n+3; i++) {
    vn = i % n;
    theta = angle * vn;
    r = height/3 * (1 + noiseRange * sin(frameCount/10 + 2*vn));
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

  if (keyCode == DELETE || keyCode == BACKSPACE) {
    background(0);
  }
}