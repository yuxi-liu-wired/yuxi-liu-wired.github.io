
Continuous shear in 2D

```
function setup() {
  frameRate(10);
  rectMode(CENTER);
}

function draw() {
  let step = frameCount % 100;
  background(200);
  // Equivalent to translate(x, y);
  r = step/100- 0.5;
  applyMatrix(1, r, 
              r, 1, 50, 50);
  rect(0, 0, 50, 50);
}
```

Discrete shear in 2D

```
let lineLength = 100;
let r = 0.1;
let lineNumber = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {
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
```


Spiral
```
let r0 = 5; // Initial radius
let k = 0.1; // Spiral coefficient
let omega = -0.1; // Angular speed for rotation

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  // Rotating the entire canvas
  push();
  translate(width / 2, height / 2);
  rotate(10 * Math.sin(0.1 * frameCount * omega));

  // Drawing four spirals
  for (let i = 0; i < 4; i++) {
    push();
    rotate(PI / 2 * i);
    drawSpiral();
    pop();
  }

  pop();
}

function drawSpiral() {
    beginShape();
    stroke(255, 255, 255);
    noFill();
    for (let theta = 0; theta < TWO_PI * 10; theta += 0.01) {
      let r = r0 * exp(k * theta);
      let x = r * cos(theta);
      let y = r * sin(theta);
      vertex(x, y);
    }
    endShape();
  }
```

Bunny (must use a server to bypass CORS)
``` 
let bunnyModel;

function preload() {
  bunnyModel = loadModel('bunny.obj', true);
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw(){
  background(255);
  normalMaterial();
  model(bunnyModel);
}
```