// -  Create an array named `numList` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method 
// -  Print the fourth element as a test

let numList: number[] = [1,2,3,8,5,6,8];

numList = numList.map(function(element){
    console.log(element);
    if(element === 8){
        return 4;
    } 
    return element 
    
})
console.log(numList);





// array.splice(index, howMany, [element1][, ..., elementN]);
// Parameter Details
// index − Index at which to start changing the array.

// howMany − An integer indicating the number of old array elements to remove. 
// If howMany is 0, no elements are removed.

// element1, ..., elementN − The elements to add to the array. If you don't specify any elements,
//  splice simply removes the elements from the array.