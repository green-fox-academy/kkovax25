// functions,array,variables to use


let picArray = [
    './assets/images/campnou.jpg',
    './assets//images/birthday-bash.jpg',
    './assets//images/frenkie.jpg',
    './assets//images/griezmann-in-action.jpg',
    './assets//images/messi-celebration.png',
    './assets//images/campnou2.jpg',
    './assets//images/terstegen-save.jpg',
    './assets//images/training1.jpg'
];

let headerArray = [
    'The Camp Nou',
    'Birthday Celebration',
    "Frenkie's Magic",
    'Griezmann in action',
    'The GOAT',
    'The best place on the world',
    'Super Ter-Stegen',
    'The Tactics'
];
const fs = require('fs');

let myFile = fs.readFile("description.txt", "utf-8");
console.log(myFile);

let picLists = document.querySelector('ul.listContainer');
let mainPic = document.querySelector('#imageShower');


//Creating the li tags and placing pictures in it based on the picArray
// also setting the classes to the needed ones

function createThumbnails() {
    for (let i = 0; i < picArray.length; i++) {
        let newLi = document.createElement('li');
        let newImg = document.createElement('img');
        newImg.setAttribute('src', picArray[i]);
        newImg.className = 'thumbnails'
        newLi.appendChild(newImg);
        newLi.className = 'item';
        picLists.appendChild(newLi);
    }
};

function createBasicImage() {
    let basicImage = document.createElement('img');
    let textBox = document.createElement('div');
    let headerForBox = document.createElement('h1');
    let textForBox = document.createElement('p');
    basicImage.setAttribute('src', picArray[0]);
    basicImage.id = 'mainImage';
    textBox.id = 'textBox';

    textBox.appendChild(headerForBox);
    textBox.appendChild(textForBox);
    mainPic.appendChild(basicImage);
    mainPic.appendChild(textBox);
};

//Creating the clickable arrows
let indexNumber = 0;

function clickRight() {
    let arrowRight = document.getElementById('arrowright');
    arrowRight.onclick = () => {
        let picShower = document.querySelector('#mainImage');
        console.log('before adding ' + indexNumber);
        if (indexNumber < picArray.length - 1) {
            indexNumber += 1;
            picShower.setAttribute('src', picArray[indexNumber]);
            console.log('after adding ' + indexNumber + '\n-------')
        } else {
            indexNumber = 0;
            picShower.setAttribute('src', picArray[indexNumber]);

        }

    };
};

function clickLeft() {
    let arrowLeft = document.getElementById('arrowleft');
    arrowLeft.onclick = () => {
        let picShower = document.querySelector('#mainImage');
        console.log('leftclick test ' + picArray[indexNumber]);
        if (indexNumber > 0) {
            indexNumber -= 1;
            picShower.setAttribute('src', picArray[indexNumber]);
        } else {
            indexNumber = picArray.length - 1;
            picShower.setAttribute('src', picArray[indexNumber]);

        }

    };
}

//Moving with keyboard

document.addEventListener('keydown', function(event) {
    if (event.keyCode == 37) {
        let picShower = document.querySelector('#mainImage');
        console.log('leftclick test ' + picArray[indexNumber]);
        if (indexNumber > 0) {
            indexNumber -= 1;
            picShower.setAttribute('src', picArray[indexNumber]);
        } else {
            indexNumber = picArray.length - 1;
            picShower.setAttribute('src', picArray[indexNumber]);

        }

    } else if (event.keyCode == 39) {
        let picShower = document.querySelector('#mainImage');
        console.log('before adding ' + indexNumber);
        if (indexNumber < picArray.length - 1) {
            indexNumber += 1;
            picShower.setAttribute('src', picArray[indexNumber]);
            console.log('after adding ' + indexNumber + '\n-------')
        } else {
            indexNumber = 0;
            picShower.setAttribute('src', picArray[indexNumber]);

        }

    }
}, true);



//Creating the contents

createBasicImage();
createThumbnails();
clickLeft();
clickRight();