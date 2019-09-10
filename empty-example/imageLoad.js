
let bubles = []; //global variable
let flower;


function preload(){
  flower = loadImage('images/b.jpg');
}

function setup(){
  for(let i=0; i<5; i++){
    createCanvas(660, 400);
    let x = random(width);
    let y = random(height);
    let r = random(0, 50);
    let b = new Buble(x, y, r);
    bubles.push(b);
  }
}

function draw(){
    background(0);
    for(let i=0; i<bubles.length; i++){

      if(bubles[i].contains(mouseX, mouseY)){
        bubles[i].changeColor(255);
      }else{
        bubles[i].changeColor(0);
      }

      bubles[i].show();
      bubles[i].move();
    }
}


function mousePressed(){
  for(let i=0; i<bubles.length; i++){
    if(bubles[i].contains(mouseX, mouseY)){
      bubles.splice(i, 1);
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
        image(flower, this.x, this.y, this.r, this.r);
      /*
        stroke(255);
        strokeWeight(4);
        fill(this.brightness, 100);
        ellipse(this.x, this.y, this.r, this.r);
        */

    }

    changeColor(bright){
      this.brightness = bright;
    }

    contains(px, py){
      let d = dist(px, py, this.x, this.y);
      if(d < this.r){
        return true;
      }else{
        return false;
      }
    }
}
