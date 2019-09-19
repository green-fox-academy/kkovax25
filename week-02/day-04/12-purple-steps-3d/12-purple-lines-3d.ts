'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r4.png]

// ctx.fillStyle = "red";
// ctx.fillRect(15,15,15,15)

// ctx.fillStyle = "green";
// ctx.fillRect(30,30,30,30);

function drawBoxes(pos:number,size:number){
    for(let i:number = 0; i<6; i++){
        ctx.fillStyle = "purple";
        ctx.fillRect(pos,pos,size,size)
        pos += size;
        size += 15;
        
        console.log("Pos: " + pos);
        console.log("Size: "+size);
        
    }
}

drawBoxes(15,15);
