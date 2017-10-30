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
      stroke(255);
      // alternating black and white lines on top half
      for(var L = 0; L < 220; L += 20) 
        {
          strokeWeight(8);
          line(start,start+L,end,start+L);
          line(start+L,midpoint,start+L,end);
          line(midpoint+L,midpoint,midpoint+L,end)
        }
      complete = 1;
    }

}