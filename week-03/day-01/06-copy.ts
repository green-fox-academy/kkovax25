'use strict'
// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

const fs = require('fs')
let win: boolean = true;


function copyMachine(from: string, to: string) {
    try {
        let file1 = fs.readFileSync(from, 'utf-8');
        to = fs.writeFileSync(to, file1, 'utf-8');
        console.log(win);
        
    }

catch (error) {
    win = false;
    console.log(win);
    

}
}
copyMachine("newlist.txt", "my-file.txt");