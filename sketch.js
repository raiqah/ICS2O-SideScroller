var man; 

function setup() {
  createCanvas(400, 400);
	man = new Person(); 
}

var x;
x= -100;

function draw (){
background(51);

	translate(-man.pos.x+50,0);
	man.update();
	man.display();
	
	fill(12,239,23);
	rect(250,350,100,100);
}
