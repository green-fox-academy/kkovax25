'use strict';

let lineCount: number = 4;
let star: string = "";

// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is
for(let i:number = 0; i < lineCount; i++){
    star += "*";
    console.log(star);
}