'use strict'
// Reuse your Sharpie class
// Create SharpieSet class
// it contains a list of Sharpie
// countUsable() -> sharpie is usable if it has ink in it
// removeTrash() -> removes all unusable sharpies

class Sharpie {
    private _color: string;
    private _width: number;
    private _inkAmount: number = 100;

    constructor(color: string, width: number) {
        this._color = color;
        this._width = width;
        this._inkAmount = 100;

    }

    public use() {
        this._inkAmount -= 1;
    }

    public get inkAmount(): number {
        return this._inkAmount;
    }
}


class SharpieSet {
    private _sharpieList: Sharpie[];

    public constructor(sharpieList?: Sharpie[]) {
        if (sharpieList) {
            this._sharpieList = sharpieList;
        } else {
            this._sharpieList = []
        }

    }

    public countUsable(sharpie: Sharpie) {
        if (sharpie.inkAmount < 0) {
            console.log("This sharpie has run out of ink :( ");

        } else {
            console.log("You can still use this sharpie :) ");

        }
    }

    public removeTrash(sharpies: Sharpie) {


    }



    public sharpieAdderToList(sharpie: Sharpie): void {
        this._sharpieList.push(sharpie);
    }


}

let redSharpie = new Sharpie("red", 0.5);
let blackSharpie = new Sharpie("black", 0.6);
let blueSharpie = new Sharpie("blue", 0.7);

// console.log(redSharpie);
// console.log(blackSharpie);
// console.log(blueSharpie);



let pencilCase = new SharpieSet();
pencilCase.sharpieAdderToList(blueSharpie);
pencilCase.sharpieAdderToList(redSharpie);
pencilCase.sharpieAdderToList(blackSharpie);


// pencilCase.countUsable(blueSharpie);
// pencilCase.countUsable(redSharpie)
// pencilCase.countUsable(blackSharpie)

console.log(typeof pencilCase);

