
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE



// ctx.beginPath();
// ctx.strokeStyle = "green";
// ctx.moveTo(canvas.width/2,0);
// ctx.lineTo((canvas.width/2)-10,canvas.height/2);
// ctx.stroke();

// ctx.beginPath();
// ctx.strokeStyle = "blue";
// ctx.moveTo(canvas.width/2,0);
// ctx.lineTo((canvas.width/2)-20,canvas.height/2);
// ctx.stroke();

// // From the bottom now

// ctx.beginPath();
// ctx.strokeStyle = "red";
// ctx.moveTo(canvas.width/2,600);
// ctx.lineTo((canvas.width/2),canvas.height/2);
// ctx.stroke();

// ctx.beginPath();
// ctx.strokeStyle = "green";
// ctx.moveTo(canvas.width/2,600);
// ctx.lineTo((canvas.width/2)-10,canvas.height/2);
// ctx.stroke();

// ctx.beginPath();
// ctx.strokeStyle = "blue";
// ctx.moveTo(canvas.width/2,600);
// ctx.lineTo((canvas.width/2)-20,canvas.height/2);
// ctx.stroke();

// ctx.beginPath();
// ctx.strokeStyle = "green";
// ctx.moveTo(canvas.width/2,600);
// ctx.lineTo((canvas.width/2)+10,canvas.height/2);
// ctx.stroke();

// ctx.beginPath();
// ctx.strokeStyle = "blue";
// ctx.moveTo(canvas.width/2,600);
// ctx.lineTo((canvas.width/2)+20,canvas.height/2);
// ctx.stroke();

// Plusszosok

// ctx.beginPath();
// ctx.strokeStyle = "red";
// ctx.moveTo(canvas.width / 2, 0);
// ctx.lineTo(canvas.width / 2, canvas.height / 2);
// ctx.stroke();

// ctx.beginPath();
// ctx.strokeStyle = "green";
// ctx.moveTo(canvas.width / 2, 0);
// ctx.lineTo((canvas.width / 2) + 10, canvas.height / 2);
// ctx.stroke();

// ctx.beginPath();
// ctx.strokeStyle = "blue";
// ctx.moveTo(canvas.width / 2, 0);
// ctx.lineTo((canvas.width / 2) + 20, canvas.height / 2);
// ctx.stroke();

// ctx.beginPath();
// ctx.strokeStyle = "black";
// ctx.moveTo(canvas.width / 2, 0);
// ctx.lineTo((canvas.width / 2) + 300, canvas.height / 2);
// ctx.stroke();




// function drawToRight(x: number) {
//     for (let i: number = 0; i < 16; i++) {
//         ctx.beginPath();
//         ctx.strokeStyle = "black";
//         ctx.moveTo(canvas.width / 2, 0);
//         ctx.lineTo((canvas.width / 2) + x, canvas.height / 2);
//         ctx.stroke();
//         x += 20;

//     }
// }

// drawToRight(0);

// function drawToLeft(x: number) {
//     for (let i: number = 0; i < 16; i++) {
//         ctx.beginPath();
//         ctx.strokeStyle = "black";
//         ctx.moveTo(canvas.width / 2, 0);
//         ctx.lineTo((canvas.width / 2) - x, canvas.height / 2);
//         ctx.stroke();
//         x += 20;

//     }
// }

// drawToLeft(0)

// function drawDownLeft(x: number) {
//     for (let i: number = 0; i < 16; i++) {
//         ctx.beginPath();
//         ctx.strokeStyle = "black";
//         ctx.moveTo(canvas.width / 2, 600);
//         ctx.lineTo((canvas.width / 2) - x, canvas.height / 2);
//         ctx.stroke();
//         x += 20;

//     }
// }

// drawDownLeft(0);

// function drawDownRight(x:number){
//     for (let i: number = 0; i < 16; i++) {
//         ctx.beginPath();
//         ctx.strokeStyle = "black";
//         ctx.moveTo(canvas.width / 2, 600);
//         ctx.lineTo((canvas.width / 2) + x, canvas.height / 2);
//         ctx.stroke();
//         x += 20;

//     }

// }

// drawDownRight(0);

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.moveTo(0, canvas.height / 2);
ctx.lineTo(canvas.width, canvas.height / 2);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.moveTo(canvas.width / 2, 0);
ctx.lineTo((canvas.width / 2), canvas.height);
ctx.stroke();

// TESTLINE DONT TOUCH ABOVE!!!!!

// function drawTest2(x: number, y: number) {
//     for (let m: number = 0; m < 15; m++) {
//         ctx.beginPath();
//         ctx.strokeStyle = "red";
//         ctx.moveTo(0, y);
//         ctx.lineTo(x, 600);
//         ctx.stroke();
//         y += 35;
//         x += 38;

//     }
// }

// drawTest2(50, 50);


//         ctx.beginPath();
//         ctx.strokeStyle = "green";
//         ctx.moveTo(300, 310);
//         ctx.lineTo(0, 300);
//         ctx.stroke();

//         ctx.beginPath();
//         ctx.strokeStyle = "black";
//         ctx.moveTo(300, 320);
//         ctx.lineTo(20, 300);
//         ctx.stroke();

//         ctx.beginPath();
//         ctx.strokeStyle = "red";
//         ctx.moveTo(300, 330);
//         ctx.lineTo(30, 300);
//         ctx.stroke();


//         for(let i:number = 0; i<14;i++){
//             ctx.beginPath();
//             ctx.strokeStyle = "green";
//             ctx.moveTo(300, y);
//             ctx.lineTo(x, 300);
//             ctx.stroke();
//             y += 10;
//             x += 10;

//         }





// ctx.beginPath();
// ctx.strokeStyle = "purple";
// ctx.moveTo(300, 600);
// ctx.lineTo(310, 300);
// ctx.stroke();

// ctx.beginPath();
// ctx.strokeStyle = "purple";
// ctx.moveTo(300, 590);
// ctx.lineTo(320, 300);
// ctx.stroke();

// ctx.beginPath();
// ctx.strokeStyle = "black";
// ctx.moveTo(300, 570);
// ctx.lineTo(340, 300);
// ctx.stroke();

// for (let m: number = 0; m < 14; m++) {
//     ctx.beginPath();
//     ctx.strokeStyle = "purple";
//     ctx.moveTo(300, 600);
//     ctx.lineTo(310, 300);
//     ctx.stroke();
//     y -=10;
//     x += 10;
// }

function test(x: number, y: number) {
    for (let i: number = 0; i < 14; i++) {
        ctx.beginPath();
        ctx.strokeStyle = "green";
        ctx.moveTo(300, y);
        ctx.lineTo(x, 300);
        ctx.stroke();
        y += 22;
        x += 22;

    }

}

test(0, 310)

function test2(x: number, y: number) {
    for (let m: number = 0; m < 14; m++) {
        ctx.beginPath();
        ctx.strokeStyle = "purple";
        ctx.moveTo(300, y);
        ctx.lineTo(x, 300);
        ctx.stroke();
        y += 22;
        x -= 22;
    }

}

test2(600, 310);

// ctx.beginPath();
// ctx.strokeStyle = "purple";
// ctx.moveTo(300,310);
// ctx.lineTo(600,300);
// ctx.stroke();

// ctx.beginPath();
// ctx.strokeStyle = "black";
// ctx.moveTo(300,332);
// ctx.lineTo(588,300);
// ctx.stroke();

// ctx.beginPath();
// ctx.strokeStyle = "red";
// ctx.moveTo(300,354);
// ctx.lineTo(566,300);
// ctx.stroke();

// Upper LEFT

// ctx.beginPath();
// ctx.strokeStyle = "green";
// ctx.moveTo(300, 290);
// ctx.lineTo(0, 300);
// ctx.stroke();

// ctx.beginPath();
// ctx.strokeStyle = "black";
// ctx.moveTo(300, 280);
// ctx.lineTo(10, 300);
// ctx.stroke();

// ctx.beginPath();
// ctx.strokeStyle = "black";
// ctx.moveTo(300, 270);
// ctx.lineTo(20, 300);
// ctx.stroke();

// for (let k: number = 0; k < 14; k++) {
//     ctx.beginPath();
//     ctx.strokeStyle = "purple";
//     ctx.moveTo(300, 290);
//     ctx.lineTo(0, 300);
//     ctx.stroke();
//     y +=10;
//     x += 10;
// }

function test3(x:number,y:number){
    for (let k: number = 0; k < 14; k++) {
        ctx.beginPath();
        ctx.strokeStyle = "purple";
        ctx.moveTo(300, y);
        ctx.lineTo(x, 300);
        ctx.stroke();
        y -=22;
        x += 22;
    }
}

test3(0,290)

//  UPPER RIGHT

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.moveTo(622, 300);
ctx.lineTo(300, 200);
ctx.stroke();

