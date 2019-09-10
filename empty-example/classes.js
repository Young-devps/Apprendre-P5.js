
let buble1; //global variable
let buble2;

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
        strokeWeight(4);
        noFill();
        ellipse(this.x, this.y, this.r, this.r);
    }
}

function setup(){
    createCanvas(600, 400);
    buble1 = new Buble(300, 200, 24);
    buble2 = new Buble(400, 200, 30);
}

function draw(){

    background(0);
    //buble1
    buble1.show();
    buble1.move();
    //buble2
    buble2.show();
    buble2.move();

}
