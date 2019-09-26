// Create a Station and a Car classes
// Station
// gasAmount
// refill(car)-> decreases the gasAmount by the capacity of the car and increases the cars gasAmount
// Car
// gasAmount
// capacity
// create constructor for Car where:
// initialize gasAmount -> 0
// initialize capacity -> 100

class Station {
    private _gasAmount: number = 100

    constructor() {
        this._gasAmount = 100
    }

    public refill(car: Car,) {

        this._gasAmount -= this._gasAmount;
        car.fill(this._gasAmount);
    }


}

class Car {
    private _gasAmount: number;
    private _capacity: number;

    constructor() {
        this._gasAmount = 0;
        this._capacity = 100;

    }


    public fill(amount:number) {
        amount = this._capacity
        this._gasAmount += amount
        this._capacity -= amount;
    }

}

let bmw = new Car();
let mol = new Station();
console.log(mol);

mol.refill(bmw);
console.log(bmw);
console.log(mol);




