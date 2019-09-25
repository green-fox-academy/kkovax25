// Create an Animal class
// Every animal has a hunger value, which is a whole number
// Every animal has a thirst value, which is a whole number
// when creating a new animal object these values are created with the default 50 value
// Every animal can eat() which decreases their hunger by one
// Every animal can drink() which decreases their thirst by one
// Every animal can play() which increases both by one

class Animals{
    private _hunger:number = 50;
    private _thirst:number = 50;


    public eat(){
        this._hunger -= 1;
    }

    public drink(){
        this._thirst -= 1;
    }

    public play(){
        this._thirst += 1
        this._hunger += 1
    }

}

let tiger = new Animals()

tiger.eat();
tiger.drink();
console.log(tiger);
tiger.play();
console.log(tiger);





