let angle = 0;
let x = 150;
let y = 0;
// let dx = 0;
// let dy = 5;
// let x1 = 0;
// let y1 = 0;
let a = 160;
let b = 160;
let angle1 = 0;

let A = 70;
let w1 = 0.5;
let w2 = 0.6;
// let t = 0;


function setup() {
  createCanvas(1240, 600);
  // extraCanvas.strokeWeight(5);
  // extraCanvas.stroke(200,50,50,30);


  angleMode(DEGREES);
}

function draw() {
  background(0);


  var x2 = a*cos(angle1);
  var y2 = -b*sin(angle1/20);
  angle1 = angle1+2;
    
  push();
  translate(180, 200);
  stroke('');
  noFill();
  ellipse(0, 0, 2*a, 2*b);
  noStroke();
  fill(255,0,0);
  ellipse(0, y, 8);
  ellipse(0, 0, 4);
  stroke('red');
  line(0, 0, 0, y);
  pop();

  push();
  translate(180, 200);
  stroke('');
  line(0, y, x, y);
  pop();

  // push();
  // translate(200, 200);
  // rotate(-angle);
  // stroke('yellow');
  // line(87, -51, 87.5, -110);
  // stroke('yellow');
  // line(0, -60, 87.5, -110);
  // pop();  
  
  push();
  translate(180, 200);
  rotate(angle*1.05);
  rotate(90);
  stroke('blue');
  line(0, 0, y2, 0);
  fill('blue');
  triangle(y2, 5, -7+y2, 0, y2,  -5);
 
  pop();
   
  
  push();
  translate(180, 200);
  rotate(angle);
  stroke('lightgreen');
  line(0, 0, 100, 0);
  fill('lightgreen');
  triangle(93, -5, 100, 0, 93,  5);
  angle = angle+0.9;
  pop();

  push();
  translate(180, 200);
  rotate(angle*1.1);
  rotate(180);
  stroke('red');
  line(0, 0, 100, 0);
  fill('red');
  triangle(93, -5, 100, 0, 93,  5);
  pop();
 

  push();
  translate(200, 200);
  fill('blue');
  // ellipse(x, y, 10, 10);
  fill('white');
  frameRate(30);
 
  
  x += 0.5;
  // t += 1;
  y = 2*A * Math.sin(0.1 * x * ( w1+w2))*Math.cos(0.1 * x * ( w2-w1));

  // y = -135 * Math.cos(2 * x * Math.PI/180);


  // x = x + dx;
  if (x> width) {
    x = 150;
  }
  // y = -cos(x)+y;
  // if (y > height) {
  //   y =0;
  // }
  pop();

  
  // push();
  // translate(200, 200);
  // fill('blue');
  
  // let ctx = canvas.getContext("2d")		
	
	// // let x1 = 0
	// // let y2 = 0	
	
	// // ctx.fillStyle = "black"
	// // ctx.fillRect(0, 0, 400, 400)	

	// let render = function(){		
	
	// 	x += 0.01;
		
	// 	y = -135 * Math.cos(2* x * Math.PI/180);		
		
	// 	ctx.fillStyle = "lime"
	// 	ctx.fillRect(x, y, 5, 5)
		
	// 	requestAnimationFrame(render)
	// }
	// render()
 
  pop();
  
  push();
  translate(180, 200);
  stroke('');
  line(170, 0, 800, 0);
  line(170, -140, 800, -140);
  line(170, 140, 800, 140);
  line(170, -140, 170, 140);
  pop();

  push();
  translate(200, 200);
  stroke(0,255,0);
  // ellipse(0, -140, 8);
  // line(0+x2, 0-a, 0+x2, -30+y2);
  // ellipse(0+x2, -140+y2, 8);
  // line(200+x2, 180-a, 200+x2, 200+y2);
  pop();  



}




// let a = 80;  //Set up the horizontal amplitute
// let b = 80;  //Set up the vertical amplitute
// let angle = 0;


// function setup() {
//   createCanvas(1000, 1000);
//   textSize(20);
  
//   angleMode(DEGREES);
//   textAlign(CENTER);
//   rectMode(CENTER);
// }

// function draw() {
//   background(255);
//   let x = a*cos(angle);
//   let y = b*sin(angle);

//   let x1 = 2*a*cos(1.2*angle);
//   let y1 = 2*b*sin(1.2*angle);

//   let x2 = a*cos(1.1*angle);
//   let y2 = b*sin(1.1*angle);
//   //   angle1 = angle1+2;


//   angle++;

 
  
  
//   // Heading & Settings
//   // text("TO DRAW A CIRCLE (or ELLIPSE) . . .", 200, 30);
//   // text("a = " + a + ",   b = " + b, 200,320);
//   fill(150);
//   // text("Try changing a and b in lines 1 and 2 of the code. If a = b, you get a circle.", 200, 350, width-50, 50);
  
//   // Draw circle
//   stroke(0);
//   noFill();
//   ellipse(250, 250, 2*a, 2*b);
//   line(250,250,250+a,250);
//   noStroke();
//   fill(255,0,0);
//   ellipse(250+x, 250+y, 8);
//   ellipse(250, 250, 4);
//   stroke(255,0,0);
//   line(250, 250, 250+x, 250+y);
//   noStroke();
//   fill(0, 250, 0);
//   ellipse(250+x1, 250+y1, 8);
//   stroke(0,250,0);
//   line(250, 250, x1, y1);
//   // fill(100, 100);
//   // arc(200, 200, a/2, a/2, 0, angle);
//   noStroke();
//   fill(0, 0, 250);
//   ellipse(250+x2, 250+y2, 8);
//   stroke(0,0,250);
//   line(250, 250, 250+x2, 250+y2);





//   pop();

//   push();
   

//   pop();  // // Highlight x-movement
  // stroke(0,255,0);
  // fill(0,255,0);
  // ellipse(200+x, 180-a, 8);
  // line(200+x, 180-a, 200+x, 200+y);
  // line(200+x, 200, 200, 200);
  // push();
  // textSize(10);
  // fill(0);
  // noStroke();
  // pop();
  
  // // Highlight y-movement
  // stroke(0,0,255);
  // fill(0,0,255);
  // ellipse(180-a, 200+y, 8);
  // line(180-a, 200+y, 200+x, 200+y);
  // line(200+x, 200, 200+x, 200+y);
  // push();
  // translate(180-a, 200+y);
  // rotate(-90);
  // textSize(10);
  // fill(0);
  // noStroke();
  // pop();
  
//   // Label x and y movement
  // fill(0);
  // text("x-movement uses cosine",200,150-a, 120, 50);
  // push();
  // translate(150-a, 200);
  // rotate(-90);
  // text("y-movement uses sine",0, 0, 120, 50);
  // pop();
  
  // Display angle measurement
  // noStroke();
  // fill(255);
  // rect(250+a,200,60,30);
  // fill(0);
  // text((angle%360)+"°",250+a,210);
// }

