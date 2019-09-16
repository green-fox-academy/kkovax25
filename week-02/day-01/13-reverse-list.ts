// -  Create a variable named `numList`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numList`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numList`

let numList: number[] = [3,4,5,6,7];

    function reverseArray (){
        numList.reverse();
        console.log(numList);
    }


reverseArray();



let listedItems: number[] = [3,4,5,6,7];

function reverseWithLoop(listedItems: number[]){
let newArray: number[] = [];
for (let i = listedItems.length -1; i >= 0; i--) {
    newArray.push(listedItems[i]);
};
console.log(newArray)
return newArray;
};

reverseWithLoop(listedItems);