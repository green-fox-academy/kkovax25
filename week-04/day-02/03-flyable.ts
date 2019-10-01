

export interface Flyable {
  land(): void;
  fly(): void;
  takeOff(): void;
}

abstract class Vehicle {
  protected _color: string;
  protected _wheels: number;
  protected _doors: number;

}

class Helicopter extends Vehicle implements Flyable{
  takeOff(){
    console.log("Fasten your seatbelts we are taking off.");
    
  }
  fly(){
    console.log("If you look to the left you can see nothing.");
    
  }

  land(){
    console.log("Thanks for flying with us.");
    
  }


}

let tourCopter = new Helicopter();
tourCopter.takeOff();
tourCopter.fly();
tourCopter.land();

// Extend Bird from your abstract Animal class (zoo exercise)
// implement your Flyable interface