'use strict'

class Person {
    protected _name: string;
    protected _age: number;
    protected _gender: string;

    constructor(name: string = "Jane Doe", age: number = 30, gender: string = "Female") {
        this._name = name;
        this._age = age;
        this._gender = gender;
    }

    public specificGetGoal(): string {
        return "Live for the moment!";
    }

    public specificIntroduction(): string {
        return "";
    }

    public introduce() {
        console.log("Hi, I'm " + this._name + ", a " + this._age + " year old " + this._gender + this.specificIntroduction());

    }


    public getGoal() {
        console.log("My goal is: " + this.specificGetGoal());

    }

}

class Student extends Person {
    protected _previousOrganization: string;
    protected _skippedDays: number

    constructor(name?: string, age?: number, gender?: string, previousOrganization: string = "The School of Life") {
        super(name, age, gender)
        this._previousOrganization = previousOrganization;
        this._skippedDays = 0;
    }
    // Make it cleaner later with johnnys methood, the my goal is fixed and the rest should be variable depends on the class.
    specificGetGoal(): string {
        return "Be a junior software developer."
    }

    specificIntroduction(): string {
        return " from " + this._previousOrganization + " who skipped " + this._skippedDays + " days from the course already."
    }


    public skipDays(numberOfDays: number) {
        this._skippedDays += numberOfDays;
    }
}

class Mentor extends Person {
    protected _level: string;

    constructor(name?: string, age?: number, gender?: string, level: string = "intermediat") {
        super(name, age, gender)
        this._level = level;
    }

    specificGetGoal(): string {
        return "Educate brilliant junior software developers."
    }

    specificIntroduction(): string {
        return " " + this._level + " mentor."
    }

}

class Sponsor extends Person {
    protected _company: string;
    protected _hiredStudents: number;

    constructor(name?: string, age?: number, gender?: string, company: string = "Google") {
        super(name, age, gender)
        this._company = company;
        this._hiredStudents = 0;
    }

    specificIntroduction(): string {
        return " who represents " + this._company + " and hired " + this._hiredStudents + " students so far."
    }

    public hire() {
        this._hiredStudents++;

    }

    specificGetGoal(): string {
        return "Hire brilliant junior software developers."
    }
}

class Cohort {
    protected _cohortName: string;
    protected _cohortStudents: Student[];
    protected _cohortMentors: Mentor[];

    constructor(cohortName: string) {
        this._cohortName = cohortName;
        this._cohortStudents = [];
        this._cohortMentors = [];
    }

    public addStudent(student: Student) {
        this._cohortStudents.push(student);
    }

    public addMentor(mentors: Mentor) {
        this._cohortMentors.push(mentors);
    }

    public info() {
        console.log("The " + this._cohortName + " cohort has " + this._cohortStudents.length + " students and " + this._cohortMentors.length + " mentors.");

    }

}

// let student1 = new Student("Pistike");
// let mentor1 = new Mentor("Viktor");
// let sponsor1 = new Sponsor("Bill");

// let person1 = new Person("Bob");





// let cohort = new Cohort("Rapgod");
// cohort.addStudents(student1);
// cohort.addMentor(mentor1);
// console.log(cohort);

// cohort.info();


let people = [];

let mark = new Person('Mark', 46, 'male');
people.push(mark);

let jane = new Person();
people.push(jane);

let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);

let student = new Student();
people.push(student);

let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);

let mentor = new Mentor();
people.push(mentor);

let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);

let sponsor = new Sponsor();
people.push(sponsor);

student.skipDays(3);

for (let i = 0; i < 6; i++) {
  elon.hire();
}

for (let i = 0; i < 4; i++) {
  sponsor.hire();
}

for (let person of people) {
  person.introduce();
  person.getGoal();
}

let awesome = new Cohort('AWESOME');
awesome.addStudent(student);
awesome.addStudent(john);
awesome.addMentor(mentor);
awesome.addMentor(gandhi);
awesome.info();