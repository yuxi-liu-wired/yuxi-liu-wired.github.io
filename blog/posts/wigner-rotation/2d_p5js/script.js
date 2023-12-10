// First sketch for the 3-velocity
let sketch1 = function(p) {
    let threeVelocity;
    let circleRadius;

    p.setup = function() {
        p.createCanvas(400, 400);
        circleRadius = p.width / 2 - 10;
        threeVelocity = new DraggablePoint(p, p.width / 2, p.height / 2);
    };

    p.draw = function() {
        p.background(0);
        p.ellipse(p.width / 2, p.height / 2, circleRadius * 2, circleRadius * 2); // circle
        threeVelocity.update();
        threeVelocity.display();
    };

    class DraggablePoint {
        constructor(p, x, y) {
            this.p = p;
            this.x = x;
            this.y = y;
            this.dragging = false;
            this.radius = 10;
        }

        update() {
            if (this.dragging) {
                this.x = this.p.mouseX;
                this.y = this.p.mouseY;
            }
        }

        display() {
            this.p.fill(175);
            this.p.ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
        }

        pressed() {
            let d = this.p.dist(this.p.mouseX, this.p.mouseY, this.x, this.y);
            if (d < this.radius) {
                this.dragging = true;
            }
        }

        released() {
            this.dragging = false;
        }
    }

    p.mousePressed = function() {
        threeVelocity.pressed();
    };

    p.mouseReleased = function() {
        threeVelocity.released();
    };
};

// Second sketch for the 4-velocity
// let sketch2 = function(p) {
//     // Define variables and methods for the second sketch
//     // This will be similar to the first one but will include the logic for 4-velocity
// };

// Initialize the sketches
new p5(sketch1, "velocity-canvas");
// new p5(sketch2, "spacetime-canvas");
