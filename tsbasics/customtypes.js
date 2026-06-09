"use strict";
let person1 = {
    name: "John",
    age: 30
};
let person2 = {
    name: "John",
    age: 30,
    wakeUp() {
        console.log("Wake up at 7 am");
    },
    sleep() {
        console.log("Sleep at 10 pm");
    }
};
class Employee {
    name;
    age;
    company = "ABC Company";
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    wakeUp() {
        console.log("Wake up at 7 am");
    }
    sleep() {
        console.log("Sleep at 10 pm");
    }
}
let emp1 = new Employee("John", 30);
class CEO {
    name;
    age;
    company = "ABC Company";
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    wakeUp() {
        console.log("Wake up at 6 am");
    }
    sleep() {
        console.log("Sleep at 11 pm");
    }
}
let ceo1 = new CEO("John", 30);
// Inheritance gets propertis and methods inherited from parent to child
// These are all implemented features
// In interface, we define a structure without implementation
// The classes that implement the interface must provide the implementation
//  for all the properties and methods defined in the interface. This allows us to create a contract that ensures that certain properties and methods are present in the classes that implement the interface, while still allowing for flexibility in how those properties and methods are implemented.
//generic function
function getValue(a) {
    return a;
}
getValue("Hello"); // returns string type
getValue(123); // returns number type
getValue(true); // returns boolean type
// Write add function with generic type
function add(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return (a + b);
    }
    if (typeof a === "string" && typeof b === "string") {
        return (a + b);
    }
    throw new Error("Invalid types");
}
add(1, 2); // returns 3
add("Hello", " World"); // returns "Hello World"
// add<boolean>(true, false); // throws error
