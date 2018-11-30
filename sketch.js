// Daniel Shiffman
// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 2: Array of Particles, multiple forces

var particles = [];
var man; 

function setup() {
  createCanvas(640, 360);
	man = new Person(); 
}

function draw (){
background(51);
	man.update();
	man.display();
}
