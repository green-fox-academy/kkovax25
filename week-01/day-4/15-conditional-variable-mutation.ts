'use strict';

let a: number = 24;
let out: number = 0;

// if a is even increment out by one
if (a % 2 == 0){
    console.log(out + 1);
}

let b: number = 13;
let out2: string = '';

if (b > 10 && b < 20 ){
    out2 = "Sweet" ;
    console.log(out2);
} else if (b < 10){
    out2 = "Less!"
    console.log(out2);
} else if (b > 20){
    out2 = "More!";
    console.log(out2);
}

// if b is between 10 and 20 set out2 to "Sweet!"
// if less than 10 set out2 to "Less!",
// if more than 20 set out2 to "More!"


let c: number = 123;
let credits: number = 100;
let isBonus: boolean = false;

if(credits >= 50 && isBonus == false){
    c = c-2 ;
    console.log(c);
} else if(credits < 50 && isBonus == false){
    c = c-1;
    console.log(c);
} else if(isBonus = true){
    console.log(c);
};
// if credits are at least 50,
// and is_bonus is false decrement c by 2
// if credits are smaller than 50,
// and is_bonus is false decrement c by 1
// if is_bonus is true c should remain the same

let d: number =  8;
let time: number = 120;
let out3: string = '';

if (d % 4 === 0 && time <= 200){
    out3 = "check";
    console.log(out3);
} else if ( time > 200){
    out3 = "Time out";
    console.log(out3);
} else {
    out3 = "Run Forrest Run!";
    console.log(out3)
}
// if d is dividable by 4
// and time is not more than 200
// set out3 to "check"
// if time is more than 200
// set out3 to "Time out"
// otherwise set out3 to "Run Forest Run!"