let picArray = ['./assets/images/campnou.jpg',
    './assets//images/birthday-bash.jpg',
    './assets//images/frenkie.jpg',
    './assets//images/griezmann-in-action.jpg',
    './assets//images/messi-celebration.png',
    './assets//images/messi.jpg',
    './assets//images/terstegen-save.jpg',
    './assets//images/training1.jpg'
];

let picLists = document.querySelector('ul.listContainer');
for (let i = 0; i < picArray.length; i++) {
    let newLi = document.createElement('li');
    let newImg = document.createElement('img');
    newImg.setAttribute('src', picArray[i]);
    newImg.className = 'thumbnails'
    newLi.appendChild(newImg);
    newLi.className = 'item';
    picLists.appendChild(newLi);
}
console.log('----NEW---');
console.log(picLists);


// function newListItem() {
//     return document.createElement("li");
// }

// console.log('---Final----');
// console.log(picLists);



// Array.prototype.forEach.call()


// Array.prototype.forEach.call(noBusiness, function(element) {
//   console.log(element.innerText);

// })