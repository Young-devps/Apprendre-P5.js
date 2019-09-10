function setup() {
    // put setup code here
    createCanvas(400, 400);
  }
  
  function draw() {
    // put drawing code here
    background(200, 0, 200);
    //when Green is equal to Blue to Red we
    //have something like grayscale color
  
    //colorfunction(1args) --grayscale
    //colorfunction(args, args, args)--RGB
    line(0, 50, 400, 300);
    rectMode(CENTER); // can be CENTER, RADIUS
    fill(100); //set fill to gray
    //noFill(); //means no fill
    stroke(0, 255, 0);// if i put a fourth value is for transparacy RGBA
    strokeWeight(4);//for the stroke weight
    rect(200, 150, 150, 150);

    fill(255, 0, 0, 150);
    noStroke(); //means no outlines
    //stroke(255); //0 is for the default
    ellipse(150, 250, 100, 75 );
    
  }