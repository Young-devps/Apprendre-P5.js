var x = 0;
var y = 600;
 
var color = {
    r:25,
    g:0,
    b:65
};

function setup(){
    createCanvas(600, 400);
}

function draw(){
    //color.r = random(175, 255);
    //color.g = 0;
    //color.b = random(10, 75);
    background(0);

    stroke(255);
    strokeWeight(4);
    noFill();

    if (mouseX > 300){
        fill(255, 0 , 200);
    }

    ellipse(x, 200, 100, 100);

    if(x >= 600){
        stroke(255);
        strokeWeight(4);
        noFill();
        fill(color.r, color.g, color.b);
        ellipse(y, 200, 100, 100);
        y = y - 3;
    }

    x = x + 3;

}