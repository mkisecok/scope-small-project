// Aufgabe 1

const student = {
    firstName: 'John',
    lastName: 'Smith',
    class:12,
    fullName()
    {
        return ` ${this.firstName} ${this.lastName} is a student in class ${this.class}`
    }
};
// let result= `${student.firstName} ${student.lastName} is a student in class ${student.class}`;
 console.log(student.fullName());

// Aufgabe 2

const person= {
    firstName: 'John',
    lastName:  'Smith',
    age: 41,
    job: 'engineer',
    city:'France', 
    fullNamePerson()
    { return `${this.firstName} ${this.lastName} is a ${this.age} year old ${this.job} living in ${this.city}`
    }      
}

console.log(person.fullNamePerson());

//Aufgabe 3

