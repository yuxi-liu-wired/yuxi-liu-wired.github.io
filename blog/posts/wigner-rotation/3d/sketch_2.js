// Shared variables
let vx = 0;
let vy = 0;

// Left Sketch: Unit circle with draggable dot
let leftSketch = function(p) {
  let dot = { x: 0, y: 0 };
  let dragging = false;
  let circleRadius = 100;

  p.setup = function() {
    p.createCanvas(400, 400);
    dot.x = p.width / 2;
    dot.y = p.height / 2;
  };

  p.draw = function() {
    p.background(255);
    p.ellipse(p.width / 2, p.height / 2, circleRadius * 2, circleRadius * 2);
    p.fill(255, 0, 0);
    p.ellipse(dot.x, dot.y, 10, 10);

    if (dragging) {
      dot.x = p.mouseX;
      dot.y = p.mouseY;
      let d = p.dist(p.width / 2, p.height / 2, dot.x, dot.y);
      if (d > circleRadius) {
        let angle = p.atan2(dot.y - p.height / 2, dot.x - p.width / 2);
        dot.x = p.width / 2 + circleRadius * p.cos(angle);
        dot.y = p.height / 2 + circleRadius * p.sin(angle);
      }
      vx = (dot.x - p.width / 2) / circleRadius;
      vy = (dot.y - p.height / 2) / circleRadius;
    }
  };

  p.mousePressed = function() {
    if (p.dist(p.mouseX, p.mouseY, dot.x, dot.y) < 10) {
      dragging = true;
    }
  };

  p.mouseReleased = function() {
    dragging = false;
  };
};

// Right Sketch: 3D scene with a sphere
let rightSketch = function(p) {
  p.setup = function() {
    p.createCanvas(400, 400, p.WEBGL);
  };

  p.draw = function() {
    p.background(255);
    p.orbitControl(1, 1, 1, {freeRotation: true});
    p.rotateX(p.frameCount * 0.01);
    p.rotateY(p.frameCount * 0.01);
    p.translate(vx * 100, vy * 100, 1);
    p.sphere(100);
  };
};

new p5(leftSketch, 'velocity-canvas');
new p5(rightSketch, 'spacetime-canvas');
