
let buble1; //global variable
let buble2;


function setup(){
    createCanvas(600, 400);
    buble1 = new Buble(200, 200, 24);
    buble2 = new Buble(204, 200, 30*2);
}

function draw(){

    background(0);
    if (buble1.inetersects(buble2)){
      background(200, 0, 100);
    }
    //buble1
    buble1.show();
    buble1.move();
    //buble2
    buble2.show();
    //buble2.move();
    buble2.x = mouseX;
    buble2.y = mouseY;

}


class Buble{
    constructor(x, y, diameter) {
        this.x = x;
        this.y = y;
        this.r = diameter;
    }
    move(){
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
    }
    show(){
        stroke(255);
        strokeWeight(2);
        fill(0,0,0,100);
        ellipse(this.x, this.y, this.r, this.r);
    }

    inetersects(other){
        let d = dist(buble1.x, buble1.y, buble2.x, buble2.y);
        return (d < this.r + other.r);
    }
}
