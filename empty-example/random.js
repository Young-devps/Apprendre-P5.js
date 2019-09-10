var cycleX = 0;

function setup() {
    // put setup code here
    //this function is for instruct that appearn once
    createCanvas(600, 400);
    background(250, 250, 100);
    
  }
  
  function draw() {
    //run loop functions
    

//ellipse
    noStroke(); 
    fill(250, 250, 200, 50);
    ellipse(mouseX, mouseY, 25, 25);//run horisontaly 

    cycleX = cycleX + 5;
    
  }

  
  function mousePressed(){
    background(250, 250, 100);
  }
  