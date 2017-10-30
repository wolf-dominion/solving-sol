function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);

// Triangle 
  push();
  translate(width*0.6, height*0.3);
  rotate(frameCount / 200.0);
  polygon(0, 0, 120, 3, 8); 
  pop();
  
  // Sqaure
  push();
  translate(width*0.4, height*0.6);
  rotate(frameCount / 50.0);
  polygon(0, 0, 160, 4, 6); 
  pop();
  
  // Pentagon
  push();
  translate(width*0.4, height*0.4);
  rotate(frameCount / -100.0);
  polygon(0, 0, 170, 5, 4); 
  pop();
  
  // Hexagon
  push();
  translate(width*0.62, height*0.35);
  rotate(frameCount / -100.0);
  polygon(0, 0, 150, 6, 3); 
  pop();
  
  
  // Heptagon
  push();
  translate(width*0.72, height*0.75);
  rotate(frameCount / -100.0);
  polygon(0, 0, 100, 7, 2); 
  pop();
  
  // Octogon
  push();
  translate(width*0.27, height*0.75);
  rotate(frameCount / -100.0);
  polygon(0, 0, 100, 8, 1); 
  pop();
}

// This function, gleamed from one of the examples on the p5 wesbite creates any polygon shape
function polygon(x, y, radius, npoints, s) {
  var angle = TWO_PI / npoints;
  noFill();
  strokeWeight(s);
  stroke(255);
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}