'use strict'
// Create Student and Teacher classes
// Student
// learn() -> prints the student is learning something new
// question(teacher) -> calls the teachers answer method
// Teacher
// teach(student) -> calls the students learn method
// answer() -> prints the teacher is answering a question
// Instantiate a Student and Teacher object
// Call the student's question() method and the teacher's teach() method

class Student {
    public learn() {
        console.log("Im learning something new");

    }

    public question(teacher: Teacher) {
       teacher.answer();
    }
}

class Teacher {
    public teach(student: Student) {
        student.learn();
    }

    public answer() {
        console.log("Im answering the question");
    }

}

let bob = new Student();
let bobMaster = new Teacher();

bob.question(bobMaster);
bobMaster.teach(bob);

