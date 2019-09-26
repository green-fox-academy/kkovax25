'use strict'
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
    private _gasAmount: number;

    constructor() {
        this._gasAmount = 10
    }

    public refill(car: Car) {
        if (this._gasAmount < car.capacity) {
            car.fill(this._gasAmount);
            this._gasAmount = 0;
        } else {
            this._gasAmount -= car.capacity;
            car.fill(car.capacity);
        }
    }

}

class Car {
    private _gasAmount: number;
    private _capacity: number;

    constructor() {
        this._gasAmount = 0;
        this._capacity = 100;

    }


    public fill(amount: number) {
        this._gasAmount += amount
    }

    public get capacity(): number {
        return this._capacity
    }

    public set capacity(number: number) {
        this._capacity = number;
    }

}

let bmw = new Car();
let mol = new Station();
console.log(mol);

mol.refill(bmw);
console.log(bmw);
console.log(mol);




