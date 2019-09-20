
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Basic Functions to use:

let size: number = 22;
function color(colors:string){
    ctx.strokeStyle = colors;
};

function draw(x: number, y: number, colors:string) {
    ctx.beginPath();
    ctx.strokeStyle = colors;
    ctx.moveTo(300, y);
    ctx.lineTo(x, 300);
    ctx.stroke();

};

function middleLine() {
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo((canvas.width / 2), canvas.height);
    ctx.stroke();
}

// middleLine()

function downLeft(x: number, y: number,color:string) {
    for (let i: number = 0; i < 14; i++) {
        draw(x, y,color);
        y += size;
        x += size;

    }

}

// downLeft(0, 310)


function downRight(x: number, y: number,color:string) {
    for (let m: number = 0; m < 14; m++) {
        draw(x, y,color)
        y += size;
        x -= size;
    }

}

// downRight(600, 310);

function upLeft(x: number, y: number,color:string) {
    for (let k: number = 0; k < 14; k++) {
        draw(x, y,color)
        y -= size;
        x += size;
    }
}

// upLeft(0, 290)

function upRight(x: number, y: number,color:string) {
    for (let j: number = 0; j < 14; j++) {
        draw(x, y,color)
        x -= size;
        y -= size;
    }
}

// upRight(600, 290);

// FINAL LOOP :


for (let w: number = 0; w < 1; w++) {
    downLeft(0, 310,"red");
    downRight(600, 310,"white");
    upLeft(0, 290,"white");
    upRight(600, 290,"red");
    middleLine();
}