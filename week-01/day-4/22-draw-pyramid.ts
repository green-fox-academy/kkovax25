'use strict';


let lineLenght: number = 4;
let star: string = "*";
let space: string = "";

for(let i:number = 0; i<lineLenght; i++){
    for(let k:number = 1; k<(lineLenght-i); k++){
        space += " ";
        

    }
    console.log(space + star);
        space = "";
        star += "**"
        
}