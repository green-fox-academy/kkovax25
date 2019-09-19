'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r3.png]

// ctx.fillStyle = "purple";
// ctx.fillRect(10,10,15,15);

// ctx.fillStyle = "red";
// ctx.fillRect(25,25,15,15);

// ctx.fillStyle = "green";
// ctx.fillRect(40,40,15,15);



function drawSteps(x: number) {
    for (let i: number = 0; i < 15; i++) {
        ctx.fillStyle = "purple";
        ctx.fillRect(x, x, 15, 15);
        x += 15;
    }
};

drawSteps(15);