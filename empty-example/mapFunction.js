
color = {
     r: 0,
     g: 160,
     b:  255
};

function setup() {
    createCanvas(600, 400);
}

function draw() {
    //backgrounfd
    color.r = map(mouseX, 0, 600, 0, 255);
    color.b = map(mouseX, 0, 600, 255, 0);
    background(color.r, 0, color.b); 
    //ellipse
    fill(250, 118, 222);
    ellipse(mouseX, 200, 64, 64);
}
