// Pirates

// Create a Pirate class. While you can add other fields and methods, you must have these methods:-

// drinkSomeRum() - intoxicates the Pirate some
// howsItGoingMate() - when called, the Pirate replies, if drinkSomeRun was called:-
// 0 to 4 times, "Pour me anudder!"
// else, "Arghh, I'ma Pirate. How d'ya d'ink its goin?", the pirate passes out and sleeps it off.
// If you manage to get this far, then you can try to do the following. 
// - die() - this kills off the pirate, in which case, DrinkSomeRum, etc. just result in he's dead. -
//  brawl(x) - where pirate fights another pirate (if that other pirate is alive) and there's a 1/3 chance, 1 dies, the other dies or they both pass out.

// And... if you get that far...

// Add a parrot.

class Pirate {
    private _levelOfDrunkness: number;
    private _healthPoints: number;
    private _rum: string;
    private _name: string;
    private _alive: boolean;
    private _fightOutcome: number;

    constructor(name: string) {
        this._name = name;
        this._healthPoints = 10;
        this._levelOfDrunkness = 0;
        this._alive = true;

    }

    public drinkSomeRum(rum: string, times: number) {
        for (let i: number = 0; i < times; i++) {
            this._healthPoints--;
            this._levelOfDrunkness++;

        }
    }

    public howsItGoingMate(name: string) {
        if (this._healthPoints > 5) {
            console.log("Pour me anudder!");
        } else if (this._healthPoints <= 5 && this._healthPoints > 0) {
            console.log("Arghh, I'ma Pirate. How d'ya d'ink its goin?");

        } else {

            this.die();
            // console.log(name, "has just passed out...ZzzZzzz..");

        }
    }

    public die() {
        this._alive = false;
        console.log("Arghhhh Davy Jones' Locker is waiting for me... RIP ");

    }

    public randomNumb() {
        let randomNumb = Math.round((Math.random() * 2) + 1);
        this._fightOutcome = randomNumb;


    }

    public brawl(pirate: Pirate, pirate2: Pirate) {
        if (pirate._healthPoints > 0) {
            this.randomNumb();
            if (this._fightOutcome == 1) {
                console.log(pirate._name + ": Aaarrrghh you killed me...");
                console.log("The fight is over, the winner is: " + pirate2._name);

            } else if (this._fightOutcome == 2) {
                console.log(pirate2._name + ": You son of a shark, you killed me!");
                console.log("The fight is over, the winner is: " + pirate._name);
            } else {
                console.log("Critical hit both " + pirate2._name + " and " + pirate._name + " has passed out...");

            }
        } else {
            console.log("You cant fight with the deads");
        }
    }
}

let jackSparrow = new Pirate("Jack Sparrow");
let blackBeard = new Pirate("Black Beard");

jackSparrow.drinkSomeRum('rum', 10);

jackSparrow.howsItGoingMate('Jack');
console.log(jackSparrow);

jackSparrow.brawl(blackBeard, jackSparrow);
