'use strict';
// While saving this quote, a disk error has occured. Please fix it.
// Add "always takes longer than" between the words "It" and "you"

let quote: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;
let missingQuote: string[] = [" always takes longer than"];
function modifieQuote(string:string){
    let fullQuate: string[] = quote.split(" ");
    fullQuate[2] = fullQuate[2] + missingQuote;
    quote = fullQuate.join(" ");
    return quote;

};

console.log(modifieQuote(quote));
