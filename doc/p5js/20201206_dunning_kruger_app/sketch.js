let str;
let inputElement;

function setup() {
  createCanvas(800, 600);
  inputElement = createInput("p5.js");
  inputElement.position(windowWidth/2-75, 40);
}

function windowResized() {
  inputElement.position(windowWidth/2-75, 40);
}

function draw() {
  str = inputElement.value();

  background(255);

  strokeWeight(4);

  noFill();

  strokeWeight(2);
  stroke(60);

  beginShape();
  vertex(20, height-20);
  vertex(width-20, height-20);
  endShape();

  beginShape();
  vertex(20, 20);
  vertex(20, height-20);
  endShape();

  noStroke();
  fill(60);
  triangle(width-10, height-20, width-30, height-30, width-30, height-10);
  triangle(20, 10, 10, 30, 30, 30);

  noFill();
  stroke(60);
  strokeWeight(4);

  beginShape();
  curveVertex(20, height-20);
  curveVertex(20, height-20);
  curveVertex(50, 100);
  curveVertex(200, 500);
  curveVertex(640, 140);
  curveVertex(width+200, 100);
  curveVertex(width+200, 100);
  endShape();

  stroke(255, 0, 0);
  ellipse(50, 100, 40);

  noStroke();
  fill(255, 0, 0);
  textAlign(LEFT);
  textSize(16);
  textStyle(BOLD);
  text("今ココ", 70, 130);

  noStroke();
  fill(0);

  textAlign(CENTER);
  textSize(20);
  textStyle(BOLD);
  text(str + "におけるダニングクルーガー曲線", width/2, 40);

  textSize(14);
  textStyle(NORMAL);

  textAlign(LEFT);
  text("あーそーゆーことね\n" + str + "完全に理解した", 80, 80);

  text(str + "なんもわからん", 200, height-70);

  textAlign(RIGHT);
  text(str + "チョットワカル", width-20, 90);
}
