var cycleX = 0;

function setup() {
    // put setup code here
    //this function is for instruct that appearn once
    createCanvas(600, 400);
    
  }
  
  function draw() {
    //run loop functions
    
    background(250, 250, 100);
//ellipse
    fill(250, 250, 200, 50);
    ellipse(cycleX, 200, 80, 80);//run horisontaly 
    
    //rectangle
    fill(200, 250, 200);
    rect(400, 100, 50, 50)

    cycleX = cycleX + 5;
    
  }

  
  function mousePressed(){
    background(250, 250, 100);
  }
  