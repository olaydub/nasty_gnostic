var spot = {
x: 100,
y: 50,
}

var col = {
    r: 0,
    g: 255,
    b: 0,
}

function setup() {
    createCanvas(1680, 1080);
    background(col.r, col.r, col.r);
}

function draw() {
col.r = random(0, 255);
col.g = random(0, 255);
col.b = random(0, 255);
spot.x = random(0, width);
spot.y = random(0, height);
noStroke();
fill(col.r, col.g, col.b, 40);
ellipse(spot.x, spot.y, 100, 100);

}