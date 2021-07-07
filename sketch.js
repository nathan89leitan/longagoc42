var hr, mn, sc;
var hrAngle, mnAngle, scAngle; 


function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);   
 
}

function draw() {
  background(0,0,0);  

  translate(200,200)
  rotate(-90)

  hr = hour();
  mn = minute();
  sc = second();


  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn,0,60,0,360)
  hrAngle = map(hr % 12,0,12,0,360)

  push();
  rotate(scAngle);
  stroke(200,20,10);
  strokeWeight(6);
  line(0,0,100,0);
  pop()

  push();
    rotate(mnAngle);
    stroke(20,200,10);
    strokeWeight(7);
    line(0,0,75,0);
    pop()

    push();
    rotate(hrAngle);
    stroke(20,10,200);
    strokeWeight(7);
    line(0,0,50,0);
    pop()

    stroke(255,0,255);
    point(0,0)

    strokeWeight(10);
    noFill();
    stroke(50,5,150);
    arc(0,0,300,300,0,scAngle);

    stroke(230,100,10);
    arc(0,0,280,280,0,mnAngle);

    stroke(1,200,90);
    arc(0,0,260,260,0,hrAngle);
}
