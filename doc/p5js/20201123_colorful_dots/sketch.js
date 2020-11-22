function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}


function draw() {
  background(0, 0, 0, 3);

  let x = random(width);
  let y = random(height);

  let diameter = random(min(width, height)/8);

  // set color
  let c = int(random(6));
  if (c == 0) fill("#FFFF0080");
  if (c == 1) fill("#FF000080");
  if (c == 2) fill("#00FF0080");
  if (c == 3) fill("#00FFFF80");
  if (c == 4) fill("#FF00FF80");
  if (c == 5) fill("#9D00FF80");

  ellipse(x, y, diameter);

  // draw text
  fill(255);
  textAlign(CENTER);
  textFont("Comic Sans MS");
  textSize(min(width, height)/20);
  text("Happy Creative Coding!", width/2, height/2);
}


function keyPressed() {
  if (key == "s" || key == "S") {
    saveCanvas(gd.timestamp(), "png");
  }

  if (keyCode == DELETE || keyCode == BACKSPACE) {
    background(0);
  }
}
