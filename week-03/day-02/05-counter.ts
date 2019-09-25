// Create a Counter class
// which has an integer property
// when creating it should have a default value 0 or we can specify it when creating
// we can add(number) to increase the counter's value by a whole number
// or we can add() without parameters just increasing the counter's value by one
// and we can get() the current value as string
// also we can reset() the value to the initial value

class Counter {
    private _number: number = 0;

    constructor(number?: number) {
        this._number = 0;

    }

    public add(number?: number) {
        if (number) {
            this._number = number
        } else {
            this._number += 1;
        }

    }
    public get() {
        console.log(this._number.toString());

    }

    public reset() {
        this._number = 0;
    }

}

let counter = new Counter()
console.log(counter);
counter.add();
console.log(counter);
counter.add(5)
console.log(counter);
counter.get();
counter.reset();
console.log(counter);





