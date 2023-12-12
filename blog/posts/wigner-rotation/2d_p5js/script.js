
let lineLength = 100;
let r = 0.1;
let lineNumber = 20;

let rSlider, lineNumberSlider;

function setup() {
  let canvas = createCanvas(300, 300);
  canvas.parent("canvas")

  rSlider = createSlider(0.05, 0.2, 0.2, 0.05);
  rSlider.position(20, 20);
  lineNumberSlider = createSlider(0, 20, 0, 1);
  lineNumberSlider.position(20, 50);
}
function draw() {
  background(255);
  let r = rSlider.value();
  let lineNumber = lineNumberSlider.value();

  translate(width / 2, height / 2);
  
  for (let i = -lineNumber; i <= lineNumber; i++) {
    push();
    if (i >= 0) {
      for (let j = 0; j < i; j++) {
        applyMatrix(1, r, r, 1, 0, 0);
      }
    } else {
      for (let j = 0; j < -i; j++) {
        applyMatrix(1, -r, -r, 1, 0, 0);
      }
    }
    line(0, -lineLength, 0, lineLength);
    line(-lineLength, 0, lineLength, 0);

    pop();
  }

  line(-width / 2, 0, width / 2, 0); // x-axis
  line(0, -height / 2, 0, height / 2); // y-axis
}