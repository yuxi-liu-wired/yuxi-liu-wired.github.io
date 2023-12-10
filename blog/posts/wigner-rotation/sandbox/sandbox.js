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