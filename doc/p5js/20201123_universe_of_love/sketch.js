let font = "Georgia";
let letters = "LOVE";
let drawMode = 0;
let ps = [];


function setup() {
  createCanvas(600, 600);
  textFont("Georgia");
}

function draw() {
  background(0, 120);

  translate(width / 2, height / 2); // 座標系の原点を canvas 中心に設定

  let theta = radians(frameCount)/2;

  p0 = [0, 0]
  p = [200*sin(3*theta), 200*sin(2.5*theta+PI)];

  // draw text
  let d = dist(0, 0, p[0], p[1]);
  fill(255, 90);
  noStroke();
  textSize(4);
  for (let rad = 0; rad < 360*3; rad++) {
    rotate(rad);
    text(letters[rad%letters.length], p[0]/2+d/2*cos(rad), p[1]/2+d/2*sin(rad));
  }

  if (drawMode == 1) {
    // draw dots
    noFill();
    strokeWeight(5);
    stroke(255, 40);
    drawDot(p0);
    drawDot(p);

    // draw lines
    noFill();
    strokeWeight(1);
    stroke(255);
    connectDots(p0, p);
  }
}

function drawDot(p) {
  point(p[0], p[1]);
}

function connectDots(pa, pb) {
  line(pa[0], pa[1], pb[0], pb[1]);
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