'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws one square and takes 1 parameters:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.


function centerBox(x: number) {
    for(let i: number = 0; i < 3; i++){
        if(i == 0){
            x += 50;
            ctx.strokeRect((canvas.width / 2) - x/2, (canvas.height / 2)- x/2, x, x);
        } else if (i == 1){
            x+= 100;
            ctx.strokeRect((canvas.width / 2) - x/2, (canvas.height / 2)- x/2, x, x);
        } else {
            x+= 100;
            ctx.strokeRect((canvas.width / 2) - x/2, (canvas.height / 2)- x/2, x, x);
        }

    }
    

};

centerBox(50);
