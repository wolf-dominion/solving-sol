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
  stroke(255);
  var modIndex = 0; // Starting variable for cylcing through each of the rotated lines (horizontal, diagonal, vertical)
  
  for(var i = 0; i < 10; i++)
  {
    for(var j = 0; j < 10; j++)
    {
      if(modIndex == 0) // the horizontal lines
      {
        for(var k = 10; k <= 30; k++)
        {
          rect((40*j)+k,((40*i))+20,1,1);
        } 
        modIndex ++;
      }
      else if(modIndex == 1) // the up to down diagonal lines
      {
        for(var k = 10; k <= 30; k++)
        {
          rect((40*j)+k,(40*i)+k,1,1);
        }
        modIndex ++;
        
      }
      else if(modIndex == 2) // the vertical lines
      {
        for(var k = 10; k <= 30; k++)
        {
          rect((40*j)+20,((40*i))+k,1,1);
        } 
        modIndex ++;
      }
      else if(modIndex == 3) // the down to up diagonal lines
      {
        
        for(var k = 10; k <= 30; k++)
        {
          rect(((40*j)-k)+40,(40*i)+k,1,1);
        } 
        modIndex = 0; //this starts the next round of 
      }
    }
    modIndex++; // this allows the pattern to start on the next row with the next pattern sequence. Otherwise all the rows would start with the horizontal line. 
    if(modIndex == 4)
    {
      modIndex = 0;
    }
  }
}