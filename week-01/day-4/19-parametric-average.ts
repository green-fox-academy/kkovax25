'use strict';

// Write a program that calculates the sum and the average from 1 to a given number.
// Example input: 5
// Example output: Sum: 15, Average: 3

let randomNumb: number = 5;
let store: number = 0;

for(let i: number = 1; i <= randomNumb; i++){
    store += i;
}

console.log(store);
console.log(store / randomNumb);