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

    for(var x=0; x<=mouseX; x+=50){
        for(var y=0; y<=height; y+=50){
        fill(random(200), 0, random(200));
        ellipse(x, y, 25, 25);
    }
  }
}