// Shared variables
let vx = 0;
let vy = 0;
let fourVelocity = minkowskiNormalize([vx, vy, 1]);

let circleDiameter = 2;
let dotDiameter = 0.1;
let circleColor = "#ffffff";

let lightConeHeight = 1;
let lightConeColor = "#938fba";
const scaleFactor = 100;

// Left Sketch: Unit circle with draggable dot
let leftSketch = function (p) {
  let dot = { x: 0, y: 0 };
  let dragging = false;

  p.setup = function () {
    p.createCanvas(400, 400);
    p.noStroke();
  };

  p.draw = function () {
    p.background(0);
    p.translate(p.width / 2, p.height / 2);
    p.scale(scaleFactor);

    p.fill(circleColor);
    p.ellipse(0, 0, circleDiameter, circleDiameter);
    p.fill(dot.x, dot.y, 0);
    p.ellipse(dot.x, dot.y, dotDiameter, dotDiameter);

    if (dragging) {
      let [mouseXTransformed, mouseYTransformed] = getMouseXY(p);
      dot.x = mouseXTransformed;
      dot.y = mouseYTransformed;

      let d = p.dist(0, 0, dot.x, dot.y);
      let epsilon = 0.05;
      let bound = (circleDiameter/2) * (1 - epsilon);
      if (d > bound) {
        let angle = p.atan2(dot.y, dot.x);
        dot.x = bound * p.cos(angle);
        dot.y = bound * p.sin(angle);
      }
      vx = dot.x;
      vy = dot.y;
    }
  };

  p.mousePressed = function () {
    let [mouseXTransformed, mouseYTransformed] = getMouseXY(p);
    if (p.dist(mouseXTransformed, mouseYTransformed, dot.x, dot.y) < dotDiameter/2) {
      dragging = true;
    }
  };

  p.mouseReleased = function () {
    dragging = false;
  };

  function getMouseXY(p) {
    let mouseXTransformed = (p.mouseX - p.width / 2) / scaleFactor;
    let mouseYTransformed = (p.mouseY - p.height / 2) / scaleFactor;
    return [mouseXTransformed, mouseYTransformed];
  }
};

// Right Sketch: 3D scene with a sphere
let rightSketch = function (p) {
  p.setup = function () {
    p.createCanvas(400, 400, p.WEBGL);
    p.camera(0, -600, 0, 0, 0, 0, 0, 0, 1);
  };

  p.draw = function () {
    fourVelocity = minkowskiNormalize([vx, vy, 1]);

    // p.ambientLight(100);
    let locX = p.mouseX - p.width / 2;
    let locY = p.mouseY - p.height / 2;
    // p.pointLight(255, 255, 255, locX, locY, 50);

    p.orbitControl(1, 1, 1, { freeRotation: true });
    p.scale(scaleFactor)
    p.rotateX(p.PI);
    p.background(0);

    // xyz axes with different colors
    p.push();
    p.stroke(255, 0, 0);
    p.line(-1, 0, 0, 1, 0, 0);
    p.stroke(0, 255, 0);
    p.line(0, -1, 0, 0, 1, 0);
    p.stroke(0, 0, 255);
    p.line(0, 0, -1, 0, 0, 1);
    p.pop();


    // Draw the vector from (0, 0, 0) to fourVelocity
    p.push();
    p.stroke(255);
    p.strokeWeight(2);
    p.line(0, 0, 0, fourVelocity[0], fourVelocity[1], fourVelocity[2]);
    p.pop();

    // Draw the dot at [vx, vy, 1]
    p.push();
    p.stroke(255, 0, 0);
    p.strokeWeight(4);
    p.point(vx, vy, 1);
    p.pop();

    // Draw a cone with apex at fourVelocity, pointing towards -z
    p.push();
    p.translate(fourVelocity[0], fourVelocity[1], fourVelocity[2]);
    p.translate(0, 0, - lightConeHeight/2)
    p.rotateX(p.PI * 0.5);
    p.fill(lightConeColor)
    p.cone(lightConeHeight, lightConeHeight, 24, 1, false);
    p.pop();

    // Draw a cone with apex at -fourVelocity, pointing towards +z
    p.push();
    p.translate(-fourVelocity[0], -fourVelocity[1], -fourVelocity[2]);
    p.translate(0, 0, + lightConeHeight/2)
    p.rotateX(p.PI * 1.5);
    p.fill(lightConeColor)
    p.cone(lightConeHeight, lightConeHeight, 24, 1, false);
    p.pop();
  };

};

new p5(leftSketch, 'velocity-canvas');
new p5(rightSketch, 'spacetime-canvas');


function minkowskiProduct(u, v) {
  return u[0] * v[0] + u[1] * v[1] - u[2] * v[2];
}

function minkowskiNormSquared(u) { return minkowskiProduct(u, u); }

function minkowskiNormalize(u) {
  let norm = Math.sqrt(Math.abs(minkowskiNormSquared(u)));
  return [u[0] / norm, u[1] / norm, u[2] / norm];
}

// Requires minkowskiNormSquared(u) = -1, and minkowskiProduct(e, u) = 0
// that is, u is time-like unit vector.
// In this special case, minkowskiProjection is very cheap.
function minkowskiProjection(e, u_prime) {
  // e' = e + <e, u'> u'
  let eu = minkowskiProduct(e, u_prime);
  return [e[0] + eu * u_prime[0], e[1] + eu * u_prime[1], e[2] + eu * u_prime[2]];
}

// r = ArcTanh(v)
// function velocityToRapidity(v) {
//   let speed = Math.sqrt(v[0] * v[0] + v[1] * v[1]);
//   let rapidity Math.atanh(speed);
//   return rapidity;
// }

