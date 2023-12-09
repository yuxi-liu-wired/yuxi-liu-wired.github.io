let angle = 0.0;

function setup() {
    createCanvas(innerWidth,innerHeight, WEBGL);
    background(255, 255, 255);
    noFill();
}

function draw() {
    angle += Math.PI / 180;
    background(0, 0, 0);
    rotate(60);
    rotateX(angle);
    rotateY(angle*0.61803);
    rotateZ(angle*0.41421);
    scale(Math.min(width/2.0, height/2.0));

    // Dini's surface coordinate data
    // x = a * cos(u) * sin(v)
    // y = a * sin(u) * sin(v)
    // z = a * (cos(v) + ln(tan(v/2))) + b*u
    // 
    // u is an element of the set of numbers [0, 4 pi]
    // v is an element of the set of numbers [0.01, 2 pi]

    beginShape(POINTS);
    strokeWeight(2.0);
    const resolution = 200;
    let ustep = Math.PI * 5 / resolution;
    let vstep = Math.PI * 5 / resolution;
    let a = 1.0;
    let b = 0.2;
    for (let v = 0.01; v <= 2 * Math.PI; v += vstep) {
        for (let u = 0; u <= 4 * Math.PI; u += ustep) {
            let x = a * Math.cos(u) * Math.sin(v);
            let y = a * Math.sin(u) * Math.sin(v);
            let z = a * (Math.cos(v) + Math.log(Math.tan(v / 2))) + b * u;
            stroke((x+1.0)*255/2.0, (y+1.0)*255/2.0, (z+1.0)*255/2.0);
            vertex(x, y, z);
        }
    }
    endShape();
}
