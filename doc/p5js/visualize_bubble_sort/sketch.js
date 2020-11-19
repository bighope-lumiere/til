let values = [];
let i = 0;
let j = 0;

const h = 10; // bin 幅

function setup() {
  createCanvas(800, 400);
  for (let i = 0; i < width / h; i++) {
    values.push(random(height));
  }
}

function draw() {
  background(220);
  bubbleSort();
  simulateSorting();
  noStroke();
  textSize(14);
  text(`Bubble Sort (N = ${width / h})`, 20, 40);
}

function bubbleSort() {
  for (let k = 0; k < h; k++) {
    if (i < values.length) {
      if (values[j] > values[j + 1]) {
        [values[j], values[j + 1]] = [values[j + 1], values[j]]; // swap
      }
      j++;

      if (j >= values.length - i - 1) {
        j = 0;
        i++;
      }
    }
    else {
      noLoop();
      text("Sorting is completed.", 20, 60);
    }
  }
}

function simulateSorting() {
  for (let i = 0; i < values.length; i++) {
    stroke(99);
    if (i == j) {
      fill(255, 0, 0);
    } else {
      fill(33);
    }
    rect(i * h, height, h, -values[i]);
  }
}