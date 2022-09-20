//сложение колебаний с одинаковыми амблитудами и разными(близкими) частотами 
//методом векторных диаграмм 

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

let A = 70;//амплитуда колебаний
let w1 = 0.5;//частота 1 колебания
let w2 = 0.6;//частота 2 колебания
// let t = 0;

//создаем холст
function setup() {
  createCanvas(1240, 600);
  // extraCanvas.strokeWeight(5);
  // extraCanvas.stroke(200,50,50,30);

  angleMode(DEGREES);
}

function draw() {
  background(0);

  // var x2 = a*cos(angle1);
  var y2 = -b*sin(angle1/20);
  angle1 = angle1+2;
  
  //окружность
  push();
  translate(180, 200);//положение центра фигуры
  stroke(''); //цвет по умолчанию, белый
  noFill(); // убираем внутреннее часть фигуры
  ellipse(0, 0, 2*a, 2*b); //строим окружность (x0, y0, ширина, высот
  noStroke();
  fill(255,0,0);//цвет точки и центра красный
  ellipse(0, y, 8);//красная точка
  ellipse(0, 0, 4);//центр окружности
  stroke('red');//цвет линии, соединяющей красную точку и центр окружности
  line(0, 0, 0, y);//положение линии, соединяющей красную точку и центр окружности
  pop();

  //линия, соединяющая красную и синюю точки
  push();
  translate(180, 200);//положение центра фигуры
  stroke(''); //цвет по умолчанию, белый
  line(0, y, x, y); //положение линии
  pop();

  //НЕУДАЧНЫЕ вспомогательные линии достраивания параллелограмма
  // push();
  // translate(200, 200);//положение центра фигуры
  // rotate(-angle);// задаем вращение конструкции с угловой скоростью=-angle
  // stroke('yellow');//цвет линии
  // line(87, -51, 87.5, -110);//положение линии
  // stroke('yellow');
  // line(0, -60, 87.5, -110);
  // pop();  
  

  //синяя стрелка
  push();
  translate(180, 200);//положение центра фигуры
  rotate(angle*1.05); //задаем вращение конструкции с угловой скоростью=angle*1.05
  rotate(90);//поворачиваем на угол
  stroke('blue');//цвет
  line(0, 0, y2, 0);//положение линии
  fill('blue');//цвет треугольника(наконечника стрелки)
  triangle(y2, 5, -7+y2, 0, y2,  -5);//наконечник стрелки(треугольник)
  pop();
   
  //зеленая стрелка
  push();
  translate(180, 200);//положение центра фигуры
  rotate(angle);//задаем вращение конструкции с угловой скоростью=angle
  stroke('lightgreen');//цвет линии
  line(0, 0, 100, 0);//положение линии
  fill('lightgreen');//цвет треугольника(наконечника стрелки)
  triangle(93, -5, 100, 0, 93,  5);//наконечник стрелки(треугольник)
  angle = angle+0.9;//скорость вращения
  pop();

  //красная стрелка
  push();
  translate(180, 200);//положение центра фигуры
  rotate(angle*1.1);//задаем вращение конструкции с угловой скоростью=angle*1.1
  rotate(180);//поворот на угол
  stroke('red');//цвет линии
  line(0, 0, 100, 0);//положение линии
  fill('red');//цвет треугольника(наконечника стрелки) 
  triangle(93, -5, 100, 0, 93,  5);//наконечник стрелки(треугольник)
  pop();
 
  //синяя точка, повторяющая траекторию графика
  push();
  translate(200, 200);//положение центра фигуры
  fill('blue');//цвет точки
  ellipse(x, y, 10, 10);//задаем полоодение и движение точки
  // fill('white');
  frameRate(30);//частота кадров
 
  
  x += 0.5;
  // t += 1;
  y = 2*A * Math.sin(0.1 * x * ( w1+w2))*Math.cos(0.1 * x * ( w2-w1));

  // y = -135 * Math.cos(2 * x * Math.PI/180);

//условие возврата синей точки в к начальному положению,если достигнут край холста
  // x = x + dx;
  if (x> width) {
    x = 150;
  }
  // y = -cos(x)+y;
  // if (y > height) {
  //   y =0;
  // }
  pop();


  //координатная плоскость для построения графика функции движения синей точки
  push();
  translate(180, 200);
  stroke('');
  line(170, 0, 800, 0);
  line(170, -140, 800, -140);
  line(170, 140, 800, 140);
  line(170, -140, 170, 140);
  pop();


  //далее неудачная попытка задать динамичный график
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
 

}



//далее старый код. не смотреть.

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

