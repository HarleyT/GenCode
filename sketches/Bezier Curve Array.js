let r;
let factor = 1;

function setup() {
  createCanvas(600, 600);
  r = height / 2 - 16;
}

function getVector(index, total) {
  const angle = map(index % total, 0, total, 0, TWO_PI);
  const v = p5.Vector.fromAngle(angle + PI);
  v.mult(r);
  return v;
}

function draw() {
  background(0);
  const total = 1000;
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
  
  translate(width/2, height/2);
  //stroke(255, 100);
  noFill();
  //strokeWeight(1);
  for (let i = 0; i < total - 1; i++) {
    const a = getVector(i, total);
    const b = getVector(i + 12, total);
    const c = getVector((i + 8) * factor, total);
    const d = getVector((i + 3) * factor, total);

    colArrayCounter++;
    if(colArrayCounter>5) colArrayCounter = 0;
    stroke(colArray[colArrayCounter]);
    
    strokeWeight(0.5);
    //bezier(a.x, a.y, b.x, b.y, c.x, c.y, d.x, d.y);
    line(d.x/2, c.y, a.x, a.y);
    }
  }
function mousePressed() {
  noLoop();
}

function mouseReleased() {
  loop();
}
