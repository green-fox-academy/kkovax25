'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a red horizontal line to the canvas' middle.
// draw a green vertical line to the canvas' middle.


// ctx.beginPath();
// ctx.strokeStyle = "red"
// ctx.moveTo(0, 200);
// ctx.lineTo(600, 200);
// ctx.stroke();

// ctx.beginPath();
// ctx.strokeStyle = "green";
// ctx.moveTo(300,600);
// ctx.lineTo(300,0);
// ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red"
ctx.moveTo(0, canvas.height/2);
ctx.lineTo(canvas.width, canvas.height / 2);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle = "green";
ctx.moveTo(canvas.width/2, canvas.height);
ctx.lineTo(canvas.width/2, 0);
ctx.stroke();