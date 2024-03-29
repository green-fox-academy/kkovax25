'use strict';
require('es6-promise');



let promise = new Promise(function(fulfill, reject) {
    // Your solution here

    setTimeout(() => {
        fulfill('FULFILLED!');
    }, 300);
});
promise.then(function(message) {
    console.log(message);
});

// ## Task

// Create a promise. Have it fulfilled with a value of 'FULFILLED!' in
// executor after a delay of 300ms, using setTimeout.

// Then, print the contents of the promise after it has been fulfilled by passing
// console.log to then.