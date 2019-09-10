function setup() {
  // put setup code here
  createCanvas(400, 400);
}

function draw() {
  // put drawing code here
  background(200, 0, 200);

  line(0, 50, 400, 300);
  rectMode(CORNER); // can be CENTER, RADIUS
  fill(100); //set fill to gray
  rect(150, 50, 40, 50,10);
  
}