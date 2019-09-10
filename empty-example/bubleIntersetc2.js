
let bubles = []; //global variable
//let unicorn;



function setup(){
    createCanvas(600, 400);
    for(let i=0; i<10; i++){
      let x = random(width);
      let y = random(height);
      let r = random(10, 50);
      bubles[i] = new Buble(x, y, r);
    }
    //unicorn = new Buble(400, 200, 10);
}

function draw(){

    background(0);
    /*
    if (buble[i].inetersects([j])){
      background(200, 0, 100);
    }

    unicorn.x = mouseX;
    unicorn.y = mouseY;
    unicorn.show();
    unicorn.move();
    */

    for(b of bubles){
      b.move();
      b.show();
      let overlaping = false;
      for(other of bubles){
        if(b!=other && b.inetersects(other)){
          overlaping = true;
        }
        if(overlaping){
          b.changeColor(255);
        }else{
          b.changeColor(0);
        }
      }
    }
}

class Buble{
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.brightness = 0;
    }
    move(){
        this.x = this.x + random(-2, 2);
        this.y = this.y + random(-2, 2);
    }

    show(){
        stroke(255);
        strokeWeight(4);
        fill(this.brightness, 100);
        ellipse(this.x, this.y, this.r, this.r);
    }

    changeColor(bright){
      this.brightness = bright;
    }

    inetersects(other){
      for(b of bubles){
        let d = dist(b.x, b.y, other.x, other.y);
        return (d < this.r + other.r);
      }
    }
}
