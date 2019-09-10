
var spot = {
    x:100,
    y:50
};


color = {
    r:255,
    g:0,
    b:0
};

function setup(){
    createCanvas(600,400);
    background(0);
}

function draw(){
    color.r = random(100, 255);
    color.b = 0;
    color.g = random(100, 190);
    spot.x = random(0, width);
    spot.y = random(0, height);
    fill(color.r, color.g, color.b, 100);
    ellipse(spot.x, spot.y, 24, 24);
}