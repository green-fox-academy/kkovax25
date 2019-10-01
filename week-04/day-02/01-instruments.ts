abstract class Intsrument {
    protected _name: string;

    constructor(name?: string) {
        this._name = name;
    }

    abstract play(): void;
}

abstract class StringedInstrument extends Intsrument {
    protected _numberOfStrings: number;
    protected _sound: string;

    constructor(name?: string, numberOfStrings?: number, sound?: string) {
        super(name)
        this._name = name;
        this._numberOfStrings = numberOfStrings;
        this._sound = sound
    }

    public sound() {
        this.play()

    }

}

class ElectricGuitar extends StringedInstrument {

    constructor(numberOfStrings?: number, sound: string = "Twang") {
        super('Electric Guitar')
        this._numberOfStrings = numberOfStrings;
        this._sound = sound;

    }

    play() { 
        console.log(this._name + " a " + this._numberOfStrings + "-stringed instrument that goes " + this._sound);

    }

}

class BassGuitar extends StringedInstrument {

    constructor(numberOfStrings?: number, sound: string = "Duum-duum-duum") {
        super("Bass Guitar")
        this._numberOfStrings = numberOfStrings;
        this._sound = sound;

    }
    play() { 
        console.log(this._name + " a " + this._numberOfStrings + "-stringed instrument that goes " + this._sound);

    }

}

class Violin extends StringedInstrument {

    constructor(numberOfStrings?: number, sound: string = "Screech") {
        super("Violin")
        this._numberOfStrings = numberOfStrings;
        this._sound = sound;

    }
    play() { 
        console.log(this._name + " a " + this._numberOfStrings + "-stringed instrument that goes " + this._sound);

    }
}

console.log(
    'Test 1, create Electric Guitar, Bass Guitar and Violin with default strings.'
  );
  let guitar = new ElectricGuitar();
  let bassGuitar = new BassGuitar();
  let violin = new Violin();
  
  console.log('Test 1 Play');
  guitar.play();
  bassGuitar.play();
  violin.play();
  
  console.log(
    'Test 2, create Electric Guitar, Bass Guitar with 7 and 5 strings.'
  );
  let guitar2 = new ElectricGuitar(7);
  let bassGuitar2 = new BassGuitar(5);
  
  console.log('Test 2 Play');
  guitar2.play();
  bassGuitar2.play();