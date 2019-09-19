'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

function drawLinesDown(x:number,y:number){
    for (let i: number = 0; i < 31; i++) {
        ctx.beginPath();
        ctx.strokeStyle = "blue"
        ctx.moveTo(x, y);
        ctx.lineTo(canvas.width / 2, canvas.height / 2);
        ctx.stroke();
        x += 20;
    }
}
drawLinesDown(0,400)

function drawLinesFromUp(x: number, y: number) {
    for (let i: number = 0; i < 31; i++) {
        ctx.beginPath();
        ctx.strokeStyle = "black"
        ctx.moveTo(x, y);
        ctx.lineTo(canvas.width / 2, canvas.height / 2);
        ctx.stroke();
        x += 20;
    }

}

drawLinesFromUp(0, 0);

function drawLinesLeft(x: number, y: number) {
    for (let k: number = 0; k < 21; k++) {
        ctx.beginPath();
        ctx.strokeStyle = "red";
        ctx.moveTo(x, y);
        ctx.lineTo(canvas.width / 2, canvas.height / 2);
        ctx.stroke();
        y += 20;
    }
}

drawLinesLeft(0, 0);

function drawLinesRight(x: number, y: number) {
    for (let k: number = 0; k < 21; k++) {
        ctx.beginPath();
        ctx.strokeStyle = "green";
        ctx.moveTo(x, y);
        ctx.lineTo(canvas.width / 2, canvas.height / 2);
        ctx.stroke();
        y += 20;
    }
}

drawLinesRight(600, 0);

