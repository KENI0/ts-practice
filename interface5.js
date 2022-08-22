"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    hello() {
        console.log(`hi~ ${this.name}입니다.`);
    }
}
const person = new Person('Mark');
person.hello();
