'use strict'
// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0



// function divide(inputNum: number) {
//     let result: number = 10 / inputNum;
//     if (result >= 0) {
//         console.log("Failed");
//     }
//     console.log(result);

// }

// try {
//     divide(1);
// }
// catch (error) {
//     console.log("Failed");

// }


function dividerZero(input: number) {
    try {
        if (input === 0) {
            throw "Fail"
        } else {
            console.log(10 / input);

        }
    }
    catch(error){
        console.log(error);
        
    }
}

dividerZero(100)