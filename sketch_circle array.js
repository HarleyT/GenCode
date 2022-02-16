function setup() {
  createCanvas(900,900);
  //noLoop();
  noStroke();
  frameRate(10);
}

function draw() {
  //background('grey');
  
  translate(width/2, height/2);
  
  let rStep = 30;
  let rMax = 400;
  
  let colArrayCounter = 0;
  let colArray = [
  color(25, 165, 190),
  color(95, 170, 200),
  color(120, 190, 210),
  color(170, 210, 230),
  color(205, 225, 245),
  color(220, 240, 250)]
  
  // polarEllipse( angle, widthRadius, heightRadius, [distance] )
  polarEllipses(10, 0, 0, 200, function(...args) {
    fill(args[0]*40, args[0]*40, args[0]*40, 160);
    args[2] = args[0]*6;
    args[3] = args[0]*6;
    return args;     
  });
  
  //for (r=0; r<rMax; r+=rStep) {
  
    //let c = 2*PI*r;
    //let cSegment = map(r, 0, rMax, rStep*3/4, rStep/2);
    //let aSegment = floor(c/cSegment);
    //let ellipseSize = map(r, 0, rMax, rStep*3/4-1, rStep/4);
    
    //for (a=0; a<360; a+=360/aSegment); {
      //colArrayCounter++;
      //if(colArrayCounter>5) colArrayCounter = 0;
      //fill(colArray[colArrayCounter]);
      

      //ellipse(x, y, w, [h])
      //push();
      //rotate(radians(a));
      //ellipse(r, 0, ellipseSize, ellipseSize);
      //pop();
    //}
  //}
}
