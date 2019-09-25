'use strict'


// -  Create a `PostIt` a class that has
// -  a `backgroundColor`
// -  a `text` on it
// -  a `textColor`
// -  Create a few example post-it objects:
// -  an orange with blue text: "Idea 1"
// -  a pink with black text: "Awesome"
// -  a yellow with green text: "Superb!"


class PostIt {
    private _backgroundColor: string;
    private _text: string;
    private _textColor: string;

    constructor(backgroundColor: string, textColor: string, text: string) {
        this._backgroundColor = backgroundColor;
        this._text = text;
        this._textColor = textColor;
    }

}

let postIt1 = new PostIt("orange","blue","Idea1");
console.log(postIt1);

let postIt2 = new PostIt("pink","black","Awsome");
console.log(postIt2);

let postIt3 = new PostIt("yellow","green","Superb!");
console.log(postIt3);






