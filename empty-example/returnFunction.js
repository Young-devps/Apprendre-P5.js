function setup(){
    createCanvas(600, 400);
    var Km = milesTokm(26.3);
    print(Km);
    var Km2 = milesTokm(100);
    print(Km2);
    print("AYO");
}

function draw(){

}


function milesTokm(miles){
    var Km = miles * 1.6;
    return Km;
}