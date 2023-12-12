let dot = { x: 0, y: 0 };
let dragging = false;
let circleRadius = 100;

function setup() {
  createCanvas(400, 400);
  // Initialize dot position at the center of the canvas
  dot.x = width / 2;
  dot.y = height / 2;
}

function draw() {
  background(255);

  // Draw unit circle
  ellipse(width / 2, height / 2, circleRadius * 2, circleRadius * 2);

  // Draw draggable dot
  fill(255, 0, 0);
  ellipse(dot.x, dot.y, 10, 10); // Dot size

  // Update dot position if dragging
  if (dragging) {
    dot.x = mouseX;
    dot.y = mouseY;

    // Constrain dot within the circle
    let d = dist(width / 2, height / 2, dot.x, dot.y);
    if (d > circleRadius) {
      let angle = atan2(dot.y - height / 2, dot.x - width / 2);
      dot.x = width / 2 + circleRadius * cos(angle);
      dot.y = height / 2 + circleRadius * sin(angle);
    }
  }
}

function mousePressed() {
  // Check if mouse is over the dot
  if (dist(mouseX, mouseY, dot.x, dot.y) < 10) {
    dragging = true;
  }
}

function mouseReleased() {
  dragging = false;
}
