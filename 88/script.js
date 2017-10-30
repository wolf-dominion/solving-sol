// declaring variables
var canvasWidth = 400;
var canvasHeight = 400;
var canvasColor;

var complete = 0;

function setup() {
  frameRate(10);
  canvasColor = color(0);
  createCanvas(canvasWidth,canvasHeight);
  background(canvasColor);
}


function draw() {
  var start = 0;
  var midpoint = 200;
  var end = 400;
  stroke(255);
  
  if (complete === 0) // this is to make sure the curved lines are not all the same color
    {
      // upper left quadrant curved lines
      strokeWeight(2);
      stroke(220,20,60);
      noFill();
      beginShape();
      curveVertex(start, midpoint );
      curveVertex(200, 0);
      curveVertex(40,40);
      curveVertex(50, 140);
      curveVertex(0, 200);
      curveVertex(midpoint, start);
      endShape();
      
      stroke(220,20,60, 140);
      beginShape();
      curveVertex(start-500, midpoint );
      curveVertex(200, 0);
      curveVertex(50,40);
      curveVertex(60, 120);
      curveVertex(0, 200);
      curveVertex(midpoint, start+400);
      endShape();
      
      stroke(205,92,92);
      beginShape();
      curveVertex(start+800, midpoint );
      curveVertex(200, 0);
      curveVertex(60,40);
      curveVertex(70, 130);
      curveVertex(0, 200);
      curveVertex(midpoint, start+200);
      endShape();
      
      // upper right quadrant curved lines
      strokeWeight(3);
      stroke(60,179,113);
      beginShape();
      curveVertex(300, 200);
      curveVertex(300, 200);
      curveVertex(250,120);
      curveVertex(300, 40);
      curveVertex(300, 0);
      curveVertex(300, 0);
      endShape();
      
      // lower left quadrant curved lines
      strokeWeight(3);
      stroke(0,0,205);
      beginShape();
      curveVertex(0, 300);
      curveVertex(0, 300);
      curveVertex(50,320);
      curveVertex(90,250);
      curveVertex(120, 370);
      curveVertex(200,300);
      curveVertex(200,300);
      endShape();
      
      stroke(65,105,225);
      beginShape();
      curveVertex(0, 320);
      curveVertex(0, 320);
      curveVertex(50,350);
      curveVertex(90,220);
      curveVertex(130, 380);
      curveVertex(200,270);
      curveVertex(200,270);
      endShape();
      
      // lower right quadrant curved lines
      strokeWeight(2);
      stroke(244,164,96);
      beginShape();
      curveVertex(200, 200);
      curveVertex(200, 200);
      curveVertex(210,230);
      curveVertex(260,240);
      curveVertex(280,320);
      curveVertex(350,340);
      curveVertex(370, 390);
      curveVertex(400,400);
      curveVertex(400,400);
      endShape();
      
      stroke(255,215,0);
      beginShape();
      curveVertex(200, 230);
      curveVertex(200, 230);
      curveVertex(210,240);
      curveVertex(260,230);
      curveVertex(300,340);
      curveVertex(370,340);
      curveVertex(370, 385);
      curveVertex(400,400);
      curveVertex(400,400);
      endShape();
      
      stroke(255,127,80);
      beginShape();
      curveVertex(210, 200);
      curveVertex(210, 200);
      curveVertex(230,220);
      curveVertex(270,220);
      curveVertex(300,370);
      curveVertex(340,360);
      curveVertex(350,395);
      curveVertex(380,400);
      curveVertex(380,400);
      endShape();
      
      stroke(184,134,11);
      beginShape();
      curveVertex(205, 200);
      curveVertex(205, 200);
      curveVertex(220,260);
      curveVertex(300,270);
      curveVertex(320,350);
      curveVertex(340,385);
      curveVertex(400,390);
      curveVertex(400,390);
      endShape();
      
      // dividing up the canvas into 4 squares
      strokeWeight(3);
      stroke(192,192,192);
      line(start, midpoint, end, midpoint);
      line(midpoint, start, midpoint, end);
      
      complete = 1;
    }
}
