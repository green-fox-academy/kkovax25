'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// // DO NOT TOUCH THE CODE ABOVE THIS LINE

// // Create a function that draws a single line and takes 2 parameters:
// // The x and y coordinates of the line's starting point
// // and draws a line from that point to the center of the canvas
// // Draw at least 3 lines with that function using a loop.



function drawLines (x:number,y:number){

for(let i:number = 0; i < 3; i++){
   y= y + 20;
   ctx.beginPath();
   ctx.strokeStyle = "red";
   ctx.moveTo(x, y);
   ctx.lineTo(canvas.width/2, y);
   ctx.stroke();
}};


drawLines(100,50);



// let colorArray: string[] = ["red","blue","yellow"]



// function randomNumber(element):number{
//     return colorArray[Math.round(Math.random() * colorArray.length)]
    
// }

// console.log(randomNumber(colorArray));

    

//     let colorArray: string[] = ["red","blue","yellow"]
//     if(generateNum() = 0){
//         for(let k:number = 0; k<1; k++){
//             colorArray[k]
//             console.log(colorArray[k]);
            
//             } 

//     } else if (randNum = 1){
//         for(let k:number = 1; k<2; k++){
//             colorArray[k]
//             console.log(colorArray[k]);
            
//         }
//     } 
    
//     else{
//         for(let k:number = 2; k<3; k++){
//             colorArray[k]
//             console.log(colorArray[k])
//         }
//         }
            
//         return colorArray[k]      

