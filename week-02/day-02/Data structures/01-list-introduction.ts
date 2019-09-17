// Create an empty list which will contain names (strings)
// Print out the number of elements in the list
let list: string[] = [];
console.log(list);


// Add William to the list
list.push("William");
// Print out whether the list is empty or not
console.log(list);

// // Add John to the list
// Add Amanda to the list
// Print out the number of elements in the list
list.push("John");
list.push("Amanda");
console.log(list.length)

// Print out the 3rd element
console.log(list[2]);

// Iterate through the list and print out each name
list.forEach(function(name){console.log(name)});

// Iterate through the list and print
list.forEach(function(name,index){console.log((index +1) + '. ' + name);
})
// Remove the 2nd element
list = list.filter(function(string){
    return(string != 'John');
});
console.log(list);

// Iterate through the list in a reversed order and print out each name
list.reverse()
console.log(list);

// Remove all elements

list.splice(0);
console.log(list);







