
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE


function drawTest(x: number, y: number) {
    for (let k: number = 0; k < 14; k++) {
        if (k % 2 == 0) {
            ctx.beginPath();
            ctx.strokeStyle = "red";
            ctx.moveTo(x, 0);
            ctx.lineTo(600, y);
            ctx.stroke();
            x -= 35;
            y -= 38;

        }
        else if (k % 2 != 0) {
            ctx.beginPath();
            ctx.strokeStyle = "blue";
            ctx.moveTo(x, 0);
            ctx.lineTo(600, y);
            ctx.stroke();
            x -= 35;
            y -= 38;

        }

    }

}
drawTest(550, 550);

function drawTest2(x: number, y: number) {
    for (let m: number = 0; m < 15; m++) {
        if (m % 2 == 0) {
            ctx.beginPath();
            ctx.strokeStyle = "red";
            ctx.moveTo(0, y);
            ctx.lineTo(x, 600);
            ctx.stroke();
            y += 35;
            x += 38;
        } else if (m % 2 != 0) {
            ctx.beginPath();
            ctx.strokeStyle = "blue";
            ctx.moveTo(0, y);
            ctx.lineTo(x, 600);
            ctx.stroke();
            y += 35;
            x += 38;
        }
    }
}
drawTest2(50, 50);

