'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// the x and y coordinates of the line's starting point
// and draws a 50 long horizontal line from that point.
// Draw at least 3 lines with that function using a loop.

function drawLines (x:number,y:number){
        ctx.beginPath();
        ctx.strokeStyle = "red";
        ctx.moveTo(x, y);
        ctx.lineTo(x+50, y);
        ctx.stroke();
    };
    let randomArray: number[] = [110, 250, 300]
    let randomArray2: number[] = [90, 220, 340]
    for(let i:number = 0; i < 3; i++){
        drawLines(randomArray[i], randomArray2[i]);

    };
    
    

