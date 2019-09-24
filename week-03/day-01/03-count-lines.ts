'use strict'

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

const fs = require('fs');

function numberOfLines(input:string){
    try{
        let lineCount = fs.readFileSync(input, 'utf-8');
        let lineNumber = lineCount.split("\n").length;
        console.log(lineNumber)
        
    }
    catch(error){
        console.log('0');
        
    }


}

numberOfLines("my-file.txt")