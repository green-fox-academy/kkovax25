// -  Create a function called `factorio`
//    that returns it's input's factorial
let num: number = 5;

// function factorio(num) {
//    if(num == 0){
//        return -1;
//    } else if( num == 1){
//        return 1;
//    } else {
//         return num * factorio (num-1);
//    }
// };
// console.log(factorio(5));

function factorio(num){
    let result = num;
    if (num == 0 || num == 1)
    return 1;
    while (num > 1){
        num --;
        result = result * num;
        }
        return result;
};

console.log(factorio(num));

