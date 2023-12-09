let draggablePoint;
let diskRadius = 200;
let pointRadius = 20;
let canvasSize = 400;

function setup() {
    createCanvas(canvasSize * 2, canvasSize);
    draggablePoint = new Draggable(0, 0, pointRadius);
}

function draw() {
    background(255);
    draw2DCircle();
    draw3DSystem();
}

function draw2DCircle() {
    push();
    translate(canvasSize / 2, canvasSize / 2);
    ellipse(0, 0, diskRadius * 2);
    draggablePoint.update();
    draggablePoint.show();
    pop();
}

function draw3DSystem() {
    push();
    translate(3 * canvasSize / 2, canvasSize / 2, 0);
    rotateX(QUARTER_PI);
    rotateY(QUARTER_PI);

    // Parametric surface (disk)
    for (let theta = 0; theta < TWO_PI; theta += 0.1) {
        for (let r = 0; r < diskRadius; r += 10) {
            let x = r * cos(theta);
            let y = r * sin(theta);
            stroke(0);
            point(x, y, 1);
        }
    }

    // Line
    let {ux, uy, ut} = normalizeMinkowski(draggablePoint.x, draggablePoint.y, 1);
    stroke(255, 0, 0);
    line(-ux, -uy, -ut, ux, uy, ut);

    pop();
}

class Draggable {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dragging = false;
    }

    update() {
        if (this.dragging) {
            this.x = mouseX - canvasSize / 2;
            this.y = mouseY - canvasSize / 2;
            let vMag = sqrt(this.x * this.x + this.y * this.y);
            if (vMag > 0.99 * diskRadius) {
                this.x *= 0.99 * diskRadius / vMag;
                this.y *= 0.99 * diskRadius / vMag;
            }
        }
    }

    show() {
        stroke(0);
        fill(175);
        ellipse(this.x, this.y, this.radius * 2);
    }

    mousePressed() {
        let d = dist(mouseX, mouseY, canvasSize / 2 + this.x, canvasSize / 2 + this.y);
        if (d < this.radius) {
            this.dragging = true;
        }
    }

    mouseReleased() {
        this.dragging = false;
    }
}

function normalizeMinkowski(x, y, t) {
    let norm = sqrt(abs(x * x + y * y - t * t));
    return {ux: x / norm, uy: y / norm, ut: t / norm};
}

function mousePressed() {
    draggablePoint.mousePressed();
}

function mouseReleased() {
    draggablePoint.mouseReleased();
}
