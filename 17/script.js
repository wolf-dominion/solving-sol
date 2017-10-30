var canvasWidth = 400;
var canvasHeight = 400;
var canvasColor;

function setup() {
  frameRate(10);
  canvasColor = color(0);
  createCanvas(canvasWidth,canvasHeight);
  background(canvasColor);
}

function draw() {
 
  //variables for keeping track of X and Y coordinates 
  var start = 0;
  var midpoint = 200;
  var end = 400;
  var N = 5;
  stroke(255);
  
  // upper left shape
  beginShape(); 
  vertex(start,start);
  vertex(midpoint,start);
  vertex(midpoint,midpoint);
  vertex(start, end);
  endShape(CLOSE); 
  
  // lower left triangle
  beginShape(); 
  vertex(start,end);
  vertex(midpoint,midpoint);
  vertex(midpoint,end);
  endShape(CLOSE); 
  
  // upper right triangle
  beginShape(); 
  vertex(end,start);
  vertex(midpoint,start);
  vertex(midpoint,midpoint);
  endShape(CLOSE);
  
  // lower left shape
  beginShape(); 
  vertex(midpoint,midpoint);
  vertex(end,start); 
  vertex(end,end);
  vertex(midpoint,end); 
  endShape(CLOSE); 
  
  // upper left shape and upper right triangle: incremental lines
  for(var L = 10; L < 210; L += 10) 
    {
      line(midpoint-L,start,midpoint,start+L);
      line(start,start+L, midpoint-L, midpoint);
      line(start,end-L,start+N,end-N);
      line(start+L,midpoint,100+N,300-N);
      line(midpoint+L,start,midpoint,start+L);
      N +=5;
    }
  
  var URindex = 1; // upper right index
  var LLindex = 0; // lower left index
  
  for(var yPos = end; yPos >= 0; yPos = yPos-40)
  {
    if(yPos > midpoint)
      {
        // lower right bottom line
        line(midpoint,yPos-40, end, yPos);
      
        // lower left triangle lines and right shape lines
        var LLoffset = 0 + (50 * LLindex);
        line(midpoint, yPos-40, LLoffset, end - (50 * LLindex));
        LLindex ++;
      }
    else
      {
        // Upper Right Shape
        var URoffset = midpoint + URindex;
        line((URoffset)+29 * URindex, (yPos-40)+10 * URindex, end, ((yPos-40)+10 * URindex)+(35-(6*(URindex-1))));
        URindex ++;
      }
  }
}