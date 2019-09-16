// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

let matrixNumber: number = 4;
let matrixElements: number[] = [];

for(let i:number=0; i < matrixNumber; i++){
    for (let j: number =0; j< matrixNumber; j++)
    if(i=== matrixNumber -j -1){
        matrixElements.push(1);
    }else {
        matrixElements.push(0);
    }
    console.log(matrixElements);
    matrixElements = [];
};