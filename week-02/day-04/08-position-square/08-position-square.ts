'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws one square and takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.

function drawSquare(x: number, y: number) {

    for (let i: number = 0; i < 3; i++) {
        ctx.fillRect(x, y, 50, 50)
        if (i == 0) {
            x += 100;
            y += 100;
            ctx.fillRect(x, y, 50, 50)
            console.log(x,y)
        } else if (i == 1) {
            x += 200;
            y += 200;
            ctx.fillRect(x, y, 50, 50)
            console.log(x,y)
        } else {
            x += 300;
            y += 300;
            ctx.fillRect(x, y, 50, 50)
            console.log(x,y);
            
        }
        

    }
};


console.log(drawSquare(50, 50));
 