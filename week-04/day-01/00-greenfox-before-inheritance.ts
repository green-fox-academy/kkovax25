class Person {
    private _name: string;
    private _age: number;
    private _gender: string;

    constructor(name: string, age: number, gender: string) {
        this._name = name;
        this._age = age;
        this._gender = gender;
    }

    public introduce() {
        console.log("Hi, I'm " + this._name + ", a " + this._age + " year old " + this._gender + ".");

    }

    public getGoal() {
        console.log("My goal is: Live for the moment!");

    }
}

let newPerson = new Person("Jane Doe", 30, "female");
console.log(newPerson);

class Student {
    private _name: string;
    private _age: number;
    private _gender: string;
    private _previousOrganization: string;
    private _skippedDays: number;

    constructor(name: string, age: number, gender: string, previousOrganization: string) {
        this._name = name;
        this._age = age;
        this._gender = gender;
        this._previousOrganization = previousOrganization;
        this._skippedDays = 0;
    }

    public introduce() {
        console.log("Hi, I'm " + this._name + ", a " + this._age + " year old " + this._gender + " from " + this._previousOrganization + " who skipped " + this._skippedDays + " days from the course already.");

    }

    public getGoal() {
        console.log("Be a junior software developer");

    }
    public skipDays(numberOfDays: number) {
        this._skippedDays += numberOfDays;

    }

}

let newStudent = new Student("Jane Doe", 30, "Female", "The School of Life")
console.log(newStudent);


class Mentor {
    private _name: string;
    private _age: number;
    private _gender: string;
    private _level: string;

    constructor(name: string, age: number, gender: string, level: string) {
        this._name = name;
        this._age = age;
        this._gender = gender;
        this._level = level
    }

    public introduce() {
        console.log("Hi, I'm " + this._name + ", a " + this._age + " year old " + this._gender + this._level + " mentor.")
    }

    public getGoal() {
        console.log("Educate brilliant junior software developers.");

    }
}

let newMentor = new Mentor("Jane Doe", 30, "Female", "Intermediate")
console.log(newMentor);

class Sponsor {
    private _name: string;
    private _age: number;
    private _gender: string;
    private _company:string;
    private _hiredStudents:number;

    constructor(name: string, age: number, gender: string, company:string) {
        this._name = name;
        this._age = age;
        this._gender = gender;
        this._company = company;
        this._hiredStudents = 0;
    }

    public introduce() {
        console.log("Hi, I'm " + this._name + ", a " + this._age + " year old " + this._gender + " who represents " + this._company + " and hired " + this._hiredStudents + " students so far.");

    }

    public hire(){
        this._hiredStudents++;
    }

    public getGoal() {
        console.log("Hire brilliant junior developers.");

    }

}

let newSponsore = new Sponsor("Jane Doe",30,"Female","Apple")
console.log(newSponsore);

newSponsore.hire();

let people = [];
let mark = new Person('Mark', 46, 'male');
people.push(mark);
let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);
let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);
let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);

john.skipDays(3);

for (let i = 0; i < 6; i++) {
  elon.hire();
}

for (let i = 0; i < 4; i++) {
  elon.hire();
}

people.forEach((person) => {
  person.introduce();
  person.getGoal();
});