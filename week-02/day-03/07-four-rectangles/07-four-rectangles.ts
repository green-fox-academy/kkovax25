'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.


let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);
let a = Math.floor(Math.random() * 256);
let rgb = 'rgb(' + r + ',' + g + ',' + b + ')';



let x: number = 0;
let y: number = 0;
let size1: number = 0;
let size2: number = 0;

function drawBoxes(x: number, y: number, size1: number, size2: number) {
    for (let i: number = 0; i < 4; i++) {
        ctx.fillStyle = rgb;
        ctx.fillRect(x, y, size1, size2);
    }
};

drawBoxes(50, 50, 100, 100);
drawBoxes(200, 110, 100, 100);
drawBoxes(220, 250, 100, 100);
drawBoxes(450, 250, 100, 100);






