let n = 0;
let c = 8;
let spiralcolorR = 0;
let spiralcolorG = 0;
let spiralcolorB = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  colorMode(RGB);
  background(0);
  colorPick();
}

function colorPick() {
  spiralcolorR = random(0,3);
  spiralcolorG = random(0,3);
  spiralcolorB = random(0,3);
  spiraloffsetR = random(0,360);
}

function scR() {
    if(spiralcolorR < 1) {
    colorR = n;
  } else if (spiralcolorR > 1 && spiralcolorR < 2) {
    colorR = a;
  } else if (spiralcolorR > 2 && spiralcolorR < 3) {
    colorR = c;
  }
}

function draw(){
    let a = n * 137.52;
  let r = c * sqrt(n);
  let x = r * cos(a) + width/2;
  let y = r * sin(a) + height/2;

  if(spiralcolorR < 1) {
    colorR = n;
  } else if (spiralcolorR > 1 && spiralcolorR < 2) {
    colorR = a;
  } else if (spiralcolorR > 2 && spiralcolorR < 3) {
    colorR = c;
  }

  if(spiralcolorG < 1) {
    colorG = n;
  } else if (spiralcolorG > 1 && spiralcolorG < 2) {
    colorG = a;
  } else if (spiralcolorG > 2 && spiralcolorG < 3) {
    colorG = c;
  }

  if(spiralcolorB < 1) {
    colorB = n;
  } else if (spiralcolorB > 1 && spiralcolorB < 2) {
    colorB = a;
  } else if (spiralcolorB > 2 && spiralcolorB < 3) {
    colorB = c;
  }


  fill(colorR % (256 + spiraloffsetR), colorG % 256, colorB % 256)﻿;
  noStroke();
  ellipse(x, y, 6, 6);
  n++;


}
