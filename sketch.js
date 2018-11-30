var man; 

function setup() {
  createCanvas(400, 400);
	man = new Person(); 
}

var x;
x= -100;

function draw (){
background(51);
	
	if (mouseIsPressed){
			var force= createVector (-0.1, 0);
	man.applyForce(force);
	};
	

	translate(-man.pos.x+50,0);
	

	
	
	man.update();
	man.display();
	
	fill(12,239,23);
	rect(250,350,100,100);
}
