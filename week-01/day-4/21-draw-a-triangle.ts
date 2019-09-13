'use strict';

let lineCount: number = 4;

// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is
for(let i:number = 1; i <= 4; i++){
    if(i == 1){
        console.log("*");
    } else if( i == 2){
        console.log("**");
    } else if (i == 3){
        console.log("***");
    } else if (i == 4){
        console.log("****");
    }
}