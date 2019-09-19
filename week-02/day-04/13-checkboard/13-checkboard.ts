'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.


function drawVertical(x: number, y: number) {

    for (let i: number = 0; i < 5; i++) {
        if (i % 2 == 0) {
            ctx.strokeStyle = "black";
            ctx.strokeRect(x, y, 120, 120)
            y += 120;
            console.log("Y: " + y);

            

        } else if (i % 2 != 0) {
            ctx.fillStyle = "black"
            ctx.fillRect(x, y, 120, 120)
            y += 120;
            console.log("FirstY: " + y);

        }
    }

}

function drawHorizontal(x: number, y: number) {
    for (let k: number = 1; k < 6; k++) {
        if (k % 2 == 0) {
            ctx.strokeStyle = "black";
            ctx.strokeRect(x, y, 120, 120)

            x += 120;
            console.log("First X: " + x);

        } else if (k % 2 != 0) {
            ctx.fillStyle = "black";
            ctx.fillRect(x, y, 120, 120);
            x += 120;
            console.log("x: " + x);

        }
    }

};


function finalDraw(x:number,y:number){
    for(let m:number = 0; m<9; m++){
        if(m%2 ==0){
            drawHorizontal(x,y)
            y += 120;
            
        }else if (m %2 !=0){
            drawVertical(x,y)
            x += 120
        }
    }

}

finalDraw(0,0)
