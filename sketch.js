function preload(){
  black = loadModel('dreamWink2-0.obj', false)
  white = loadModel('dreamWink2-1.obj', false)
  green = loadModel('dreamWink2-2.obj', false)
  mcFont = loadFont('mc.otf')
}
function setup() {
  createCanvas(500,500,WEBGL)
  angleMode(DEGREES)
  textFont(mcFont)
  textAlign(CENTER,CENTER)
  noStroke();
  greenScale = 1
  whiteScale = 1
  blackScale = 1
  greenTrans = 0
  whiteTrans = 0
  blackTrans = 0
}

function draw() {
  background(89, 107, 64);
  push();
  scale(50)
  translate(0,3.5,0)
  rotateX(180);
  rotateY(frameCount);
  ambientLight(500);

  push();
  ambientMaterial(0,0,0)
  scale(blackScale)
  translate(0,0,blackTrans)
  model(black);
  pop();

  push();
  scale(greenScale)
  translate(0,0,greenTrans)
  ambientMaterial(100,255,10)
  model(green);
  pop();

  push();
  translate(0,0,0)
  scale(whiteScale)
  ambientMaterial(255,255,255)
  translate(0,0,whiteTrans)
  model(white);
  pop();

  pop();

  fill(255);
  translate(0,-180,0)
  scale(3)
  text('happy\nbirthday\ndreamer', 0, 0, 0)
  if(collidePointRect(mouseX,mouseY,150,226,360-150,420-226)){
    window.cursor('pointer')
  } else {
    window.cursor('default')
  }
}
function mouseClicked(){
  if(collidePointRect(mouseX,mouseY,150,226,360-150,420-226))
  window.location = "https://drive.google.com/drive/folders/1uJ4RHaDukuoDgYUBPVvttpKnCWxrLIls?usp=sharing"
}
