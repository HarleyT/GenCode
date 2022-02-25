let slider1;
let slider2;
let slider3;
let slider4;
let slider5;
let slider6;
let slider7;
let slider8;
let r;
let factor = 1;

let myFont;
function preload() {
  myFont = loadFont('helvetica.otf');
}

function setup() {
  createCanvas(700, 700);
  r = height / 2 - 100;
  //directionalLight('white',width/2,height/2,200);
 
  slider1 = createSlider(0.1, 3, 0.8, 0);
  slider1.position(width / 2 - 100, height - 80);
  slider1.style("width", "80px");
  
  slider2 = createSlider(10, 150, 20);
  slider2.position(width / 2 - 100, height - 60);
  slider2.style("width", "80px");
  
  slider3 = createSlider(0, 700, 360);
  slider3.position(width / 2 - 100, height - 40);
  slider3.style("width", "80px");
  
  slider4 = createSlider(0, 1, 1);
  slider4.position(width / 2 - 100, height - 20);
  slider4.style("width", "80px");

  slider5 = createSlider(0, 50, 15);
  slider5.position(width / 2 - 0, height - 80);
  slider5.style("width", "80px");

  slider6 = createSlider(0, 0.1, 0.008, 0);
  slider6.position(width / 2 - 0, height - 60);
  slider6.style("width", "80px");
  
  slider7 = createSlider(0.3, 3.2, 1.4, 0);
  slider7.position(width / 2 - 0, height - 40);
  slider7.style("width", "80px");
  
  slider8 = createSlider(0.001, 0.1, 0.0045, 0);
  slider8.position(width / 2 - 0, height - 20);
  slider8.style("width", "80px");

}

function getVector(index, total) {
  const angle = map(index % total, 0, total, 0, TWO_PI);
  const v = p5.Vector.fromAngle(angle + PI);
  v.mult(r);
  return v;
}

function draw() {
  
  let val1 = slider1.value();
  let val2 = slider2.value();
  let val3 = slider3.value();
  let val4 = slider4.value();
  let val5 = slider5.value();
  let val6 = slider6.value();
  let val7 = slider7.value();
  let val8 = slider8.value();

  push();
  //background(255);
  //textFont(myFont);
  textSize(10);
  fill(255);
  text("black", 350, height -7);
  text("color", 350, height - 27);
  text("frame", 350, height - 47);
  text("speed", 600, height - 7);
  text("size", 600, height - 27);
  text("noise", 600, height - 47);
  text("shape", 600, height - 67);
  text("stroke", 350, height - 67);
  pop();
  
  background(0);
  const total = 200;
  factor += 0.02;
  text(frameCount, 10, 20);

  let colArrayCounter = 0;
  let colArray = [
  color(25, 165, 190),
  color(95, 170, 200),
  color(120, 190, 210),
  color(170, 210, 230),
  color(205, 225, 245),
  color(220, 240, 250)]
  
  translate(width/2, height/2.5);
  //stroke(255, 100);
  noFill();
  //strokeWeight(1);
  for (let i = 0; i < total - 1; i++) {
    const a = getVector(i, total);
    const b = getVector(i + 12, total);
    const c = getVector((i + 8) * factor, total);
    const d = getVector((i + 3) * factor, total);
    //a.x = val1;
    //a.y = val2;
    //b.x = val3;
    //b.y = val4;
    //c.x = val5;
    //c.y = val6;
    //d.x = val7;
    //d.y = val8;

    colArrayCounter++;
    if(colArrayCounter>5) colArrayCounter = 0;
    stroke(colArray[colArrayCounter]);
    
    strokeWeight(0.5);
    bezier(a.x,a.y,b.x,b.y,c.x,c.y,d.x,d.y);
    //line(d.x, b.y, a.x, a.y);
    //circle(c.x,a.y,50);
    
    push();
    stroke(255);
    strokeWeight(5);
    //point(d.x,b.y,d.x,b.y);
    pop();

    }
  }
function mousePressed() {
  noLoop();
}

function mouseReleased() {
  loop();
}

function keyTyped() {
  if (key === 's') {
    saveCanvas('Bezier_' + str(frameCount), 'png');
  }
}
