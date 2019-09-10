
function setup(){
    createCanvas(600, 400);
}

function draw(){
    background(0);
    strokeWeight(4);
    stroke(255);
    
/*     ellipse(0,   200, 25, 25);
    ellipse(50,  200, 25, 25);
    ellipse(100, 200, 25, 25);
    ellipse(150, 200, 25, 25);
    ellipse(200, 200, 25, 25); */
    

    var x = 0;
    while(x < width){
        fill(0, 200, 255);
        ellipse(x, 200, 25, 25);
        x = x + 50;
    }

    for(x=0; x<=width; x = x+50){
        fill(255, 0, 200);
        ellipse(x, 300, 25, 25);
    }

}