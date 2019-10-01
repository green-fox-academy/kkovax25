'use strict'

import { Flyable } from "./03-flyable"

abstract class Animal {
  protected _name: string;
  protected _age: number;
  protected _gender: string;
  protected _health: string;

  constructor(name: string) {
    this._name = name;

  }
  public getName(): string {
    return this._name;
  }

  public abstract breed(): string

  public abstract eat(): string 

}

class Reptile extends Animal {
  constructor(name: string, age?: number, gender?: string, health?: string) {
    super(name)
    this._name = name;
    this._age = age;
    this._gender = gender;
    this._health = health;
  }

  breed(): string {
    return "by laying eggs,"

  }

  eat(): string {
    return "and eats meat."
  }

}

class Mammal extends Animal {
  constructor(name: string, age?: number, gender?: string, health?: string) {
    super(name)
    this._name = name;
    this._age = age;
    this._gender = gender;
    this._health = health;

  }

  breed(): string {
    return "pushing miniature versions out,"
  }

  eat(): string {
    return "and eat meat."
  }

}

class Bird extends Animal implements Flyable {
  constructor(name: string, age?: number, gender?: string, health?: string) {
    super(name)
    this._name = name;
    this._age = age;
    this._gender = gender;
    this._health = health;

  }

  takeOff(){
    console.log("Huss");
    
  }

  fly(){
    console.log("Flyy");
    
  }

  land(){
    console.log("Land");
    
  }

  breed(): string {
    return "laying eggs,"
  }

  eat():string{
    return "and its eat a lot of things."
  }

}



let reptile = new Reptile("Crocodile");
let mammal = new Mammal("Tiger");
let bird = new Bird('Parrot');


console.log('How do you breed?');
console.log(`A ${reptile.getName()} is breeding by ${reptile.breed()} ${reptile.eat()}`);
console.log(`A ${mammal.getName()} is breeding by ${mammal.breed()} ${mammal.eat()}`);
console.log(`A ${bird.getName()} is breeding by ${bird.breed()} ${bird.eat()}`);

bird.fly();