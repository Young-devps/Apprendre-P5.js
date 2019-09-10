function setup(){
    createCanvas(600, 400);
}

function draw(){
    background(240);
    fill(20);
    lollipop(100,200,100);

}

function lollipop(x, y, diameter){
    fill(0, 255, 255);
    rect(x-10, y, 20, 150);

    fill(255, 0, 200);
    ellipse(x, y, diameter, diameter);
}