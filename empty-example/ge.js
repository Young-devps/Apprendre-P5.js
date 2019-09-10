

var nums = [28, 500, 62, 6];
var num = 23;
var word = ["rain", "sun", "drie", "ugly"];
var index = 0;


function setup(){
  createCanvas(600, 400);
}

function draw(){
  background(0);
  ellipse(100, 200, nums[0], num);
  ellipse(200, 200, num, num);

  //show text
  fill(255);
  textSize(32);
  text(word[index], 400, 300);
}

function mousePressed(){
  if (index == word.length){
    index = 0;
  }else{
    index = index + 1;
  }
}
